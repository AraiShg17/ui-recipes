import displayAnimationThumb from "./images/display-animation.png";
import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "display-animation",
  title: "display animation",
  tags: ["css"],
  category: "CSS Styling",
  thumbnailSrc: displayAnimationThumb.src,
  /* 表示用コードは page で .module.css を readFileSync して渡している */
  code: "",
};

export default entry;
