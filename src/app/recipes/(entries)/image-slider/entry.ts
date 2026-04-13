import imageSliderThumb from "./images/slider.png";
import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "image-slider",
  title: "slider",
  tags: ["css", "UI"],
  category: "Components",
  thumbnailSrc: imageSliderThumb.src,
  /* 表示用コードは page で .module.css を readFileSync して渡している */
  code: "",
};

export default entry;
