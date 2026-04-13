import cornerShapeThumb from "./images/corner-shape.png";
import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "corner-shape",
  title: "corner-shape",
  tags: ["css"],
  category: "CSS Styling",
  thumbnailSrc: cornerShapeThumb.src,
  /* 表示用コードは page で .module.css を readFileSync して渡している */
  code: "",
};

export default entry;
