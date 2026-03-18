import stackedImage from "./images/stacked-iamge-hover.png";
import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "stacked-image-hover",
  title: "filter hover animation",
  tags: ["css"],
  category: "CSS Styling",
  thumbnailSrc: stackedImage.src,
  /* 表示用コードは page で .module.css を readFileSync して渡している */
  code: "",
};

export default entry;
