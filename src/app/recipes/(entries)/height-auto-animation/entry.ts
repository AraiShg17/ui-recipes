import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "height-auto-animation",
  title: "height: auto のアニメーション",
  summary:
    "interpolate-size（:root）と calc-size() の2通りで、height: 0 → auto をトランジション。display は使わず固有値から数値への補間だけにする。",
  tags: ["css"],
  category: "CSS Styling",
  thumbnailSrc: "https://picsum.photos/id/4/400/210",
  code: `/* 共通: :root で interpolate-size を有効化（height: auto をアニメーション可能に） */
:root {
  interpolate-size: allow-keywords;
}

/* ---- 1. interpolate-size のみ（:root の指定だけで height: auto が補間される） ---- */
.panelRoot {
  height: 0;
  overflow: hidden;
  transition: height 0.3s ease;
}

/* 開いたとき（display は使わず height だけで制御） */
.toggle:checked ~ .panelRoot {
  height: auto;
}

/* ---- 2. calc-size() を使う方法 ---- */
.panelCalc {
  height: 0;
  overflow: hidden;
  transition: height 0.3s ease;
}

.toggle:checked ~ .panelCalc {
  height: auto;
  /* 対応ブラウザでは calc-size で明示的に「内容の高さ」を指定 */
  height: calc-size(auto, size);
}

@media (prefers-reduced-motion: reduce) {
  .panelRoot, .panelCalc { transition: none; }
}`,
};

export default entry;
