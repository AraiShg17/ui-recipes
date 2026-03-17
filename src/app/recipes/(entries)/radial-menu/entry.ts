import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "radial-menu",
  title: "中央ボタン＋蹄型ラジアルメニュー",
  summary:
    "中央のトグルボタンをクリックすると、周囲に SVG で描いた蹄（ドーナツの一部）状のメニューが展開される。各セグメントは円弧パスを組み合わせた path で描画し、transform / opacity で展開アニメを付ける。",
  tags: ["svg", "UI"],
  category: "Components",
  code: "",
};

export default entry;

