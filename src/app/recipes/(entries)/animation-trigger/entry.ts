import animationTriggerThumb from "./images/thumb.png";
import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "animation-trigger",
  title: "animation-trigger / timeline-trigger",
  tags: ["css"],
  category: "CSS Styling",
  thumbnailSrc: animationTriggerThumb.src,
  /* 表示用コードは page で .module.css を readFileSync して渡している */
  code: "",
};

export default entry;
