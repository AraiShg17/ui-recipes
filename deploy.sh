#!/usr/bin/env bash
set -euo pipefail

# Fixed deployment target
PROJECT_ID="protfolio-as"
EXPECTED_PROJECT_NUMBER="399541346026"
REGION="asia-northeast1"

# NOTE: This repository deploys a different Cloud Run service than "image-merge-app".
# Pick a unique, stable service name for this app.
SERVICE_NAME="ui-recipes"
REPOSITORY_NAME="cloud-run-apps"

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

if ! command -v gcloud >/dev/null 2>&1; then
  echo "gcloud CLI が見つかりません。先にインストールしてください。"
  exit 1
fi

if ! command -v docker >/dev/null 2>&1; then
  echo "docker が見つかりません。先に Docker Desktop（または Docker Engine）をインストールしてください。"
  exit 1
fi

if ! docker info >/dev/null 2>&1; then
  echo "Docker デーモンに接続できません。Docker Desktop が起動しているか確認してください。"
  echo "（macOS の場合: Docker Desktop を起動 → 'Docker Engine is running' になるまで待つ）"
  exit 1
fi

if [[ ! -f "$SCRIPT_DIR/Dockerfile" ]]; then
  echo "Dockerfile が見つかりません（$SCRIPT_DIR/Dockerfile）。"
  echo "Cloud Run デプロイ用の Dockerfile を追加してから再実行してください。"
  exit 1
fi

ACTIVE_ACCOUNT="$(gcloud auth list --filter=status:ACTIVE --format='value(account)' 2>/dev/null || true)"
if [[ -z "$ACTIVE_ACCOUNT" ]]; then
  echo "gcloud にログインされていません。次を実行してください:"
  echo "  gcloud auth login"
  exit 1
fi

PROJECT_NUMBER="$(gcloud projects describe "$PROJECT_ID" --format='value(projectNumber)' 2>/dev/null || true)"
if [[ -z "$PROJECT_NUMBER" ]]; then
  echo "Project number を取得できません（project: $PROJECT_ID）。"
  echo "プロジェクト ID が正しいか、参照権限があるか確認してください。"
  exit 1
fi

if [[ "$PROJECT_NUMBER" != "$EXPECTED_PROJECT_NUMBER" ]]; then
  echo "Project number が想定と違います。デプロイを中断します。"
  echo "Expected: ${EXPECTED_PROJECT_NUMBER}"
  echo "Actual:   ${PROJECT_NUMBER}"
  echo "Project:  ${PROJECT_ID}"
  exit 1
fi

echo "Active account: ${ACTIVE_ACCOUNT}"
echo "Project: ${PROJECT_ID} (${PROJECT_NUMBER})"
echo "Region: ${REGION}"
echo "Service: ${SERVICE_NAME}"
echo "Artifact Registry Repo: ${REPOSITORY_NAME}"

# Keep project/region fixed so no manual switching is required each time
gcloud config set project "$PROJECT_ID" >/dev/null
gcloud config set run/region "$REGION" >/dev/null

# Billing must be enabled for source build/deploy.
BILLING_ENABLED="$(gcloud billing projects describe "$PROJECT_ID" --format='value(billingEnabled)' 2>/dev/null || true)"
if [[ "$BILLING_ENABLED" != "True" && "$BILLING_ENABLED" != "true" ]]; then
  echo "Billing が無効です（project: $PROJECT_ID）。Cloud Run デプロイを続行できません。"
  echo "次を実行して請求先アカウントを紐付けてください:"
  echo "  gcloud billing accounts list"
  echo "  gcloud billing projects link $PROJECT_ID --billing-account=XXXXXX-XXXXXX-XXXXXX"
  echo "または Cloud Console の請求設定から有効化してください。"
  exit 1
fi

# Enable required APIs (safe to run repeatedly)
gcloud services enable \
  run.googleapis.com \
  artifactregistry.googleapis.com \
  >/dev/null

# Ensure Artifact Registry repository exists
if ! gcloud artifacts repositories describe "$REPOSITORY_NAME" \
  --location "$REGION" \
  --project "$PROJECT_ID" >/dev/null 2>&1; then
  gcloud artifacts repositories create "$REPOSITORY_NAME" \
    --location "$REGION" \
    --repository-format docker \
    --project "$PROJECT_ID"
fi

IMAGE_TAG="$(date +%Y%m%d-%H%M%S)"
IMAGE_URI="${REGION}-docker.pkg.dev/${PROJECT_ID}/${REPOSITORY_NAME}/${SERVICE_NAME}:${IMAGE_TAG}"

# Authenticate docker to Artifact Registry
gcloud auth configure-docker "${REGION}-docker.pkg.dev" --quiet

# Build & push container image locally
docker build -t "$IMAGE_URI" .
docker push "$IMAGE_URI"

# Deploy prebuilt image to Cloud Run
gcloud run deploy "$SERVICE_NAME" \
  --image "$IMAGE_URI" \
  --project "$PROJECT_ID" \
  --region "$REGION" \
  --platform managed \
  --allow-unauthenticated

URL="$(gcloud run services describe "$SERVICE_NAME" --project "$PROJECT_ID" --region "$REGION" --format='value(status.url)')"

echo ""
echo "Deployed successfully"
echo "Service URL: ${URL}"
echo "Image: ${IMAGE_URI}"
