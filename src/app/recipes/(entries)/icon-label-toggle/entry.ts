import iconLabelToggleThumb from "./images/icon-toggle.png";
import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "icon-label-toggle",
  title: "menu icon toggle",
  tags: ["css", "UI"],
  category: "Components",
  thumbnailSrc: iconLabelToggleThumb.src,
  /* 表示用コードは page で .module.css を readFileSync して渡している */
  code: "",
};

export default entry;
