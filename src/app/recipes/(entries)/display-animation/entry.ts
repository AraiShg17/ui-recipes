import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "display-animation",
  title: "display の切り替えを CSS でアニメーション",
  summary:
    "display: none ⇔ block の切り替え時にフェード・スケールを付ける。transition の allow-discrete と @starting-style で、離散プロパティの変化をアニメーション可能にする。",
  tags: ["css"],
  category: "CSS Styling",
  /* 表示用コードは page で .module.css を readFileSync して渡している */
  code: "",
};

export default entry;
