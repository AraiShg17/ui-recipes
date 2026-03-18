import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "display-animation",
  title: "display animation",
  tags: ["css"],
  category: "CSS Styling",
  /* 表示用コードは page で .module.css を readFileSync して渡している */
  code: "",
};

export default entry;
