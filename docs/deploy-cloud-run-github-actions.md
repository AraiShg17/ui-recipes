# Cloud Run デプロイ（GitHub Actions）

このリポジトリは GitHub Actions から **Docker build → Artifact Registry push → Cloud Run deploy** します。

- **対象 GCP project**: `protfolio-as`（project number: `399541346026`）
- **region**: `asia-northeast1`
- **Cloud Run service**: `ui-recipes`
- **Artifact Registry repo**: `cloud-run-apps`

ワークフローは `.github/workflows/deploy-cloud-run.yml` です。

## 1. 事前に作るもの（GCP 側）

### 1-1. サービスアカウント

例（名前は任意）:

```bash
gcloud config set project protfolio-as

gcloud iam service-accounts create gha-cloud-run-deployer \
  --display-name="GitHub Actions Cloud Run deployer"
```

作成したメールアドレスを控えます:

```bash
gcloud iam service-accounts list --filter="displayName:GitHub Actions Cloud Run deployer"
```

### 1-2. 必要な IAM ロール（最小構成の目安）

この workflow は「Artifact Registry に push」「Cloud Run に deploy」をします。

付与先: **上で作ったサービスアカウント**（`SERVICE_ACCOUNT_EMAIL`）に対して。

```bash
PROJECT_ID="protfolio-as"
SERVICE_ACCOUNT_EMAIL="gha-cloud-run-deployer@${PROJECT_ID}.iam.gserviceaccount.com"

gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:${SERVICE_ACCOUNT_EMAIL}" \
  --role="roles/run.admin"

gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:${SERVICE_ACCOUNT_EMAIL}" \
  --role="roles/artifactregistry.writer"

gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:${SERVICE_ACCOUNT_EMAIL}" \
  --role="roles/iam.serviceAccountUser"
```

必要に応じて（環境によって追加になることがあります）:

- `roles/viewer`（describe 系の不足を雑に避けたい場合）

## 2. Workload Identity Federation（鍵なし）を設定

GitHub Actions の OIDC を使って、サービスアカウントへ「鍵なしで」なりすまします。

GCP 側でやること:

- Workload Identity Pool を作成
- Provider（GitHub）を作成
- サービスアカウントに `roles/iam.workloadIdentityUser` を付与

この部分は環境差が出やすいので、まずは公式手順に沿って作ってください。

参考:
- [google-github-actions/auth](https://github.com/google-github-actions/auth)

### 2-1. GitHub リポジトリの制限（推奨）

可能なら provider 側の attribute condition で、次のように「この repo だけ」に絞るのがおすすめです。

- `attribute.repository == "OWNER/REPO"`

（必要ならここは一緒に具体値に合わせて書き換えます）

## 3. GitHub Secrets を設定

リポジトリの `Settings → Secrets and variables → Actions` に次を追加します。

- **`GCP_WORKLOAD_IDENTITY_PROVIDER`**: provider のリソース名  
  例: `projects/XXXX/locations/global/workloadIdentityPools/POOL/providers/PROVIDER`
- **`GCP_SERVICE_ACCOUNT_EMAIL`**: サービスアカウントのメール  
  例: `gha-cloud-run-deployer@protfolio-as.iam.gserviceaccount.com`

## 4. デプロイ

`master` ブランチに push すると自動で走ります。手動実行したい場合は `Actions` から `deploy to cloud run` を `Run workflow` してください。

## 5. 変更したい場合

デプロイ先はワークフローの `env` で固定しています:

- `PROJECT_ID`
- `REGION`
- `SERVICE_NAME`
- `REPOSITORY_NAME`

