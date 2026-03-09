import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "calc-size-animation",
  title: "calc-size アニメーション",
  summary:
    "「もっと見る」UIで、height: 100px → calc-size(auto, size) にトランジション。固有値（auto）を含むサイズ補間を calc-size() + interpolate-size で実現する。",
  tags: ["css"],
  category: "CSS Styling",
  thumbnailSrc: "https://picsum.photos/id/4/400/210",
  /* 表示用コードは page で .module.css を readFileSync して渡している */
  code: "",
};

export default entry;
