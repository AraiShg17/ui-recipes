import gradientOklabImage from "./images/gradient-oklab.png";
import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "gradient-oklab",
  title: "gradient interpolation",
  tags: ["css"],
  category: "CSS Styling",
  thumbnailSrc: gradientOklabImage.src,
  /* 表示用コードは page で .module.css を readFileSync して渡している */
  code: "",
};

export default entry;
