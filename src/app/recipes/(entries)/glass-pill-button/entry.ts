import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "glass-pill-button",
  title: "Glassデザインボタン",
  summary:
    "背景色と mix した縦グラデ（上やや黒め→下やや白め）、1px 白ボーダー、inset の白い影で立体感を出したピル型ボタン。",
  tags: ["UI"],
  category: "Components",
  /* 表示用コードは page で .module.css を readFileSync して渡している */
  code: "",
};

export default entry;
