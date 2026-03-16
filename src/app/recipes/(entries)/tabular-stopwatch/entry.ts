import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "tabular-stopwatch",
  title: "tabular-nums で揃うストップウォッチ",
  summary:
    "ストップウォッチの数字を 2 行で比較。上は通常フォント、下は font-variant-numeric: tabular-nums で桁幅をそろえ、数字が変化しても列がガタつかないことを確認する。",
  tags: ["css", "typography"],
  category: "Components",
  /* 表示用コードは page で .module.css を readFileSync して渡している */
  code: "",
};

export default entry;

