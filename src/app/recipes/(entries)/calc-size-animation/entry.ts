import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "calc-size-animation",
  title: "calc-size アニメーション",
  summary:
    "「もっと見る」UIで、height: 100px → calc-size(auto, size) にトランジション。固有値（auto）を含むサイズ補間を calc-size() + interpolate-size で実現する。",
  tags: ["css"],
  category: "CSS Styling",
  thumbnailSrc: "https://picsum.photos/id/4/400/210",
  code: `/* 固有値（auto など）をアニメーション可能に */
:root {
  interpolate-size: allow-keywords;
}

/* 「もっと見る」: 折りたたみは height: 100px、展開は height: auto（calc-size で補間） */
.content {
  height: 100px;
  overflow: hidden;
  position: relative;
  transition: height 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.card[data-expanded] .content {
  height: calc-size(auto, size);
}

/* 下部フェード（白グラデ） */
.content::after {
  content: "";
  position: absolute;
  inset-inline: 0;
  inset-block-end: 0;
  block-size: 56px;
  background: linear-gradient(to bottom, transparent, Canvas);
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  .content { transition: none; }
}`,
};

export default entry;
