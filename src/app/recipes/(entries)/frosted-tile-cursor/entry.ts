import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "frosted-tile-cursor",
  title: "backdrop-filter blur＋カーソル追従",
  summary:
    "角丸タイル状のグリッドで背後を backdrop-filter: blur のみでぼかす（gap なし）。マウス位置を CSS 変数（--mouse-x / --mouse-y）で渡し、円を追従表示。",
  tags: ["css", "UI"],
  category: "Components",
  code: "",
};

export default entry;
