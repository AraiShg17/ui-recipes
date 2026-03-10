import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "indirect-light-input",
  title: "間接照明風フォーカス入力",
  summary:
    "ピル型の input 背後に ::before で円＋blur/box-shadow の光を置き、:has(input:focus) でオレンジ／透明を切り替え。input の inset box-shadow でフォーカス時に内側を照らす。",
  tags: ["css", "UI"],
  category: "Components",
  thumbnailSrc: "https://picsum.photos/id/8/400/210",
  /* 表示用コードは page で .module.css を readFileSync して渡している */
  code: "",
};

export default entry;
