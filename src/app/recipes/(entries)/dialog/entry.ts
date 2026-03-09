import thumbnail from "./images/dialog.png";
import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "dialog",
  title: "dialog 要素（モーダル）",
  summary:
    "ネイティブの <dialog> と showModal() で確認ダイアログを実装。フォーカストラップ・Escape で閉じる・::backdrop が標準で使える。",
  tags: ["html", "css"],
  category: "Components",
  thumbnailSrc: thumbnail.src,
  /* 表示用コードは page で .module.css を readFileSync して渡している */
  code: "",
};

export default entry;
