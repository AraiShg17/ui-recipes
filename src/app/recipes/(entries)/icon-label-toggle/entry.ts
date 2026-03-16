import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "icon-label-toggle",
  title: "アイコン＋ラベル開閉ピル",
  summary:
    "close/open でアイコンのみ（1:1 正方形）⇔ アイコン＋テキストを切り替え。テキスト表示時は inline-size を calc-size(auto, size) でアニメーションし、isolation でラベルを折り返さない。",
  tags: ["css", "UI"],
  category: "Components",
  /* 表示用コードは page で .module.css を readFileSync して渡している */
  code: "",
};

export default entry;
