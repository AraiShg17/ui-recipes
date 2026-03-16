import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "anchor-positioning",
  title: "Anchor Positioning API",
  summary:
    "anchor-name と position-anchor でツールチップ・右メニュー・スライドする背景を CSS だけで配置。JS で位置計算しない。非対応は @supports でフォールバック。",
  tags: ["css"],
  category: "Components",
  /* 表示用コードは page で .module.css を readFileSync して渡している */
  code: "",
};

export default entry;
