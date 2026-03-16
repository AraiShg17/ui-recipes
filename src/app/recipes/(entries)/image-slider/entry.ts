import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "image-slider",
  title: "スクロールスナップ画像スライダー",
  summary:
    "横スクロールと scroll-snap だけで実装した画像スライダー。CSS の ::scroll-button / ::scroll-marker 対応ブラウザではネイティブな前後ボタンとページネーションが自動で出現する。",
  tags: ["css", "UI"],
  category: "Components",
  /* 表示用コードは page で .module.css を readFileSync して渡している */
  code: "",
};

export default entry;

