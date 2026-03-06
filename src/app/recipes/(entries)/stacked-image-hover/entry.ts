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
  code: `/* 2枚を重ねる */
.stack {
  display: grid;
}

.stack > img {
  grid-area: 1 / 1;
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: var(--radius, 12px);
}

/* 下: 常にグレースケール */
.stack > img:first-child {
  filter: grayscale(1) brightness(0.9);
}

/* 上: ホバーで表示（中心から円形に広がる） */
.stack > img:last-child {
  transition: clip-path 0.35s cubic-bezier(0.19, 1, 0.22, 1);
  clip-path: circle(0 at 50% 50%);
}

.stack:hover > img:last-child {
  clip-path: circle(150% at 50% 50%);
}`,
};

export default entry;
