import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "glass-pill-button",
  title: "Glass Button Sample",
  tags: ["UI"],
  category: "Components",
  /* 表示用コードは page で .module.css を readFileSync して渡している */
  code: "",
};

export default entry;
