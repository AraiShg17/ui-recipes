import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "segmented-border-buttons",
  title: "ボーダー付きセグメントボタン",
  summary:
    "ピル型コンテナ内にアイコンボタンを並べ、選択中は button（border グレー＋金の linear-gradient）＞ span（border グレー）＞ 白。金は linear-gradient(135deg) を background-position で左下→右上にアニメ。",
  tags: ["UI", "css"],
  category: "Components",
  /* 表示用コードは page で .module.css を readFileSync して渡している */
  code: "",
};

export default entry;
