import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "glass-pill-button",
  title: "Glassデザインボタン",
  summary:
    "背景色と mix した縦グラデ（上やや黒め→下やや白め）、1px 白ボーダー、inset の白い影で立体感を出したピル型ボタン。",
  tags: ["UI"],
  category: "Components",
  thumbnailSrc: "https://picsum.photos/id/5/400/210",
  code: `/* このページ専用変数（ガラスピルボタン用） */
.wrap {
  --glass-pill-radius: 999px;
  --glass-pill-padding-block: 0.6rem;
  --glass-pill-padding-inline: 2rem;
}

.glassPill {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--glass-pill-padding-block) var(--glass-pill-padding-inline);
  border-radius: var(--glass-pill-radius);
  font-size: 1rem;
  font-weight: 500;
  color: light-dark(var(--app-text-light), var(--app-text-dark));
  border: 0;
  background: light-dark(
    linear-gradient(to bottom, #f3f5f8 0%, #edf1f7 50%, #ffffff 100%),
    linear-gradient(to bottom, #2a2d35 0%, #252830 50%, #1e2128 100%)
  );
  box-shadow:
    inset 0 0 4px 1px light-dark(
      rgb(255 255 255 / 1),
      color-mix(in oklab, rgb(255 255 255 / 1), transparent 0%)
    ),
    inset 0 3px 4px light-dark(
      rgb(255 255 255 / 0.8),
      color-mix(in oklab, rgb(255 255 255 / 0.8), transparent 0%)
    ),
    inset 0 -3px 4px light-dark(
      rgb(0 0 0 / 0.1),
      color-mix(in oklab, rgb(0 0 0 / 0.1), transparent 0%)
    ),
    0 4px 10px light-dark(
      rgb(0 0 0 / 0.12),
      color-mix(in oklab, rgb(0 0 0 / 0.12), transparent 0%)
    );
  transition: all 0.2s ease;
}

.glassPill::after {
  content: "";
  position: absolute;
  inset: 0;
  background: conic-gradient(
    from 70deg at 60% 70%,
    #f8b4b8 0deg, #e9d5ff 26deg, #c4b5fd 46deg, #bfdbfe 67deg,
    #bbf7d0 83deg, #fef9c3 109deg, #ffdab9 134deg, #f8b4b8 160deg,
    rgba(191, 219, 254, 0.25) 200deg, rgba(191, 219, 254, 0.25) 360deg
  );
  filter: blur(4px);
  pointer-events: none;
  mix-blend-mode: light-dark(color, color-dodge);
  opacity: light-dark(1, 0.15);
  transition: all 0.2s ease;
}

.glassPill:is(:hover, :focus-visible) {
  box-shadow:
    inset 0 0 4px 1px light-dark(
      rgb(255 255 255 / 1),
      color-mix(in oklab, rgb(255 255 255 / 1), transparent 0%)
    ),
    inset 0 -3px 4px light-dark(
      rgb(255 255 255 / 0.8),
      color-mix(in oklab, rgb(255 255 255 / 0.8), transparent 0%)
    ),
    inset 0 3px 4px light-dark(
      rgb(0 0 0 / 0.1),
      color-mix(in oklab, rgb(0 0 0 / 0.1), transparent 0%)
    ),
    0 4px 10px light-dark(
      rgb(0 0 0 / 0.12),
      color-mix(in oklab, rgb(0 0 0 / 0.12), transparent 0%)
    );
}

/* 正円ボタン用 */
.glassPillCircle {
  inline-size: 2.75rem;
  block-size: 2.75rem;
  padding: 0;
  flex-shrink: 0;
}`,
};

export default entry;
