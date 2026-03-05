import gradientOklabImage from "./images/gradient-oklab.png";
import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "gradient-oklab",
  title: "色空間ごとのグラデーション補間比較",
  summary:
    "同じ2色で `srgb` / `srgb-linear` / `lab` / `oklab` / `oklch` の補間結果を並べて比較するレシピ。",
  tags: ["css"],
  category: "CSS Styling",
  thumbnailSrc: gradientOklabImage.src,
  code: `.comparison {
  --gradient-start: #0057ff;
  --gradient-end: #ff3b30;
}

.barSrgb {
  background-image: linear-gradient(
    in srgb to right,
    var(--gradient-start) 0%,
    var(--gradient-end) 100%
  );
}

.barSrgbLinear {
  background-image: linear-gradient(
    in srgb-linear to right,
    var(--gradient-start) 0%,
    var(--gradient-end) 100%
  );
}

.barLab {
  background-image: linear-gradient(
    in lab to right,
    var(--gradient-start) 0%,
    var(--gradient-end) 100%
  );
}

.barOklab {
  background-image: linear-gradient(
    in oklab to right,
    var(--gradient-start) 0%,
    var(--gradient-end) 100%
  );
}

.barOklch {
  background-image: linear-gradient(
    in oklch to right,
    var(--gradient-start) 0%,
    var(--gradient-end) 100%
  );
}`,
};

export default entry;
