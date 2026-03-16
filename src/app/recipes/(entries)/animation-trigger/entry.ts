import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "animation-trigger",
  title: "animation-trigger / timeline-trigger",
  summary:
    "スクロール位置で「再生／逆再生」を切り替える時間ベースアニメ。timeline-trigger で view() をトリガーにし、animation-trigger で play-forwards / play-backwards を指定。Chrome 145+。",
  tags: ["css"],
  category: "CSS Styling",
  /* 表示用コードは page で .module.css を readFileSync して渡している */
  code: "",
};

export default entry;
