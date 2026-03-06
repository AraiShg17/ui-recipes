import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "display-animation",
  title: "display の切り替えを CSS でアニメーション",
  summary:
    "display: none ⇔ block の切り替え時にフェード・スケールを付ける。transition の allow-discrete と @starting-style で、離散プロパティの変化をアニメーション可能にする。",
  tags: ["css"],
  category: "CSS Styling",
  thumbnailSrc: "https://picsum.photos/id/3/400/210",
  code: `/* 閉じているとき */
.panel {
  display: none;
  opacity: 0;
  scale: 0.98;
  /* allow-discrete: display など離散プロパティの変化も transition 対象にする */
  transition:
    opacity 0.25s ease,
    scale 0.25s cubic-bezier(0.16, 1, 0.3, 1),
    display 0.25s ease allow-discrete;
}

/* 開いているとき（例: チェックボックスで制御） */
.toggle:checked ~ .panel {
  display: block;
  opacity: 1;
  scale: 1;
}

/* @starting-style: 開く瞬間の「開始」状態（display が none→block になる前の見た目） */
@starting-style {
  .toggle:checked ~ .panel {
    opacity: 0;
    scale: 0.98;
  }
}

@media (prefers-reduced-motion: reduce) {
  .panel { transition: none; }
}`,
};

export default entry;
