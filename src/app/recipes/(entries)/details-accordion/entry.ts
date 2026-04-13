import detailsAccordionThumb from "./images/accordion.png";
import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "details-accordion",
  title: "details",
  tags: ["HTML", "css"],
  category: "Components",
  thumbnailSrc: detailsAccordionThumb.src,
  /* 表示用コードは page で .module.css を readFileSync して渡している */
  code: "",
};

export default entry;
