import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "details-accordion",
  title: "details アコーディオン",
  summary:
    "details/summary と ::details-content 疑似要素で、ネイティブの開閉を保ったまま高さと不透明度をトランジションさせるアコーディオン。",
  tags: ["HTML", "css"],
  category: "Components",
  /* 表示用コードは page で .module.css を readFileSync して渡している */
  code: "",
};

export default entry;

