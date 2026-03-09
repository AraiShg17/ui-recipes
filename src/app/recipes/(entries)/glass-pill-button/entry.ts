import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "glass-pill-button",
  title: "ガラス風ピルボタン",
  summary:
    "背景色と mix した縦グラデ（上やや黒め→下やや白め）、1px 白ボーダー、inset の白い影で立体感を出したピル型ボタン。",
  tags: ["css"],
  category: "Components",
  thumbnailSrc: "https://picsum.photos/id/5/400/210",
  code: `/* このページ専用変数：上黒め・下白め（背景色と mix） */
.wrap {
  --glass-pill-bg-top: light-dark(
    color-mix(in oklab, var(--app-bg-light) 88%, #0a0a0a),
    color-mix(in oklab, var(--app-bg-dark) 88%, #000)
  );
  --glass-pill-bg-bottom: light-dark(
    color-mix(in oklab, var(--app-bg-light) 98%, white),
    color-mix(in oklab, var(--app-bg-dark) 98%, #333)
  );
}

.glassPill {
  position: relative;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: linear-gradient(to bottom, var(--glass-pill-bg-top), var(--glass-pill-bg-bottom));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.4),
    0 4px 16px rgba(0, 0, 0, 0.12);
}

.glassPill:focus-visible {
  outline: 2px solid light-dark(var(--app-text-light), var(--app-text-dark));
  outline-offset: 2px;
}`,
};

export default entry;
