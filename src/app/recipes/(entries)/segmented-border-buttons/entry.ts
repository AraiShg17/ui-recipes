import segmentedBorderButtonsThumb from "./images/thumb.png";
import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "segmented-border-buttons",
  title: "metaricial segmented buttons",
  tags: ["UI", "css"],
  category: "Components",
  thumbnailSrc: segmentedBorderButtonsThumb.src,
  /* 表示用コードは page で .module.css を readFileSync して渡している */
  code: "",
};

export default entry;
