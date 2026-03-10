import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "corner-shape",
  title: "corner-shape（角の形）",
  summary:
    "border-radius で付けた角を、round / squircle / bevel / scoop / notch などで変形。角ごとに指定も可能。",
  tags: ["css"],
  category: "CSS Styling",
  thumbnailSrc: "https://picsum.photos/id/7/400/210",
  /* 表示用コードは page で .module.css を readFileSync して渡している */
  code: "",
};

export default entry;
