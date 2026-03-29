import glassPillButtonThumb from "./images/thumb.jpg";
import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "glass-pill-button",
  title: "glass button",
  tags: ["UI"],
  category: "Components",
  thumbnailSrc: glassPillButtonThumb.src,
  /* 表示用コードは page で .module.css を readFileSync して渡している */
  code: "",
};

export default entry;
