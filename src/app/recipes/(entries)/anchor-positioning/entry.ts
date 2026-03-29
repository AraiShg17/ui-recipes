import anchorPositioningThumb from "./images/thumb.png";
import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "anchor-positioning",
  title: "anchor positioning API",
  tags: ["css"],
  category: "Components",
  thumbnailSrc: anchorPositioningThumb.src,
  /* 表示用コードは page で .module.css を readFileSync して渡している */
  code: "",
};

export default entry;
