import stackedImage from "./images/stacked-iamge-hover.png";
import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "stacked-image-hover",
  title: "フィルターホバーアニメーション",
  summary:
    "同じ画像を2枚重ね、filter と clip-path の transition でホバー時にグレーからカラーへ見せるレシピ。",
  tags: ["css"],
  category: "CSS Styling",
  thumbnailSrc: stackedImage.src,
  /* 表示用コードは page で .module.css を readFileSync して渡している */
  code: "",
};

export default entry;
