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
  /* 表示用コードは page で .module.css を readFileSync して渡している */
  code: "",
};

export default entry;
