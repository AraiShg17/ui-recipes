import calcSizeAnimationThumb from "./images/calc-size-animation.png";
import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "calc-size-animation",
  title: "calc-size animation",
  tags: ["css"],
  category: "CSS Styling",
  thumbnailSrc: calcSizeAnimationThumb.src,
  /* 表示用コードは page で .module.css を readFileSync して渡している */
  code: "",
};

export default entry;
