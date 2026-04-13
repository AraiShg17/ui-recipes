import tabularStopwatchThumb from "./images/tabular.png";
import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "tabular-stopwatch",
  title: "tabular-nums",
  tags: ["css", "typography"],
  category: "Components",
  thumbnailSrc: tabularStopwatchThumb.src,
  /* 表示用コードは page で .module.css を readFileSync して渡している */
  code: "",
};

export default entry;
