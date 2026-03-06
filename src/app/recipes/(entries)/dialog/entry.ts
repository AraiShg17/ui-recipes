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
  code: `/* dialog + 中央配置 */
.dialog {
  width: min(90vw, 480px);
  max-height: 80vh;
  border: none;
  border-radius: 16px;
  padding: 0;
  position: fixed;
  inset: unset;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  overscroll-behavior: contain;
  background: light-dark(var(--app-surface-light), var(--app-surface-dark));
  color: light-dark(var(--app-text-light), var(--app-text-dark));
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
}

.dialog::backdrop {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  overflow: hidden;
  overscroll-behavior: contain;
}

/* 開閉アニメーション（transition + allow-discrete） */
.dialog {
  opacity: 0;
  scale: 0.95;
  transition:
    opacity 0.3s ease,
    scale 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    overlay 0.3s ease allow-discrete,
    display 0.3s ease allow-discrete;
}

.dialog[open] {
  opacity: 1;
  scale: 1;
}

/* open になった瞬間の開始キーフレーム（display が変わる前の状態） */
@starting-style {
  .dialog[open] {
    opacity: 0;
    scale: 0.95;
  }
}

.dialog::backdrop {
  opacity: 0;
  transition:
    opacity 0.3s ease,
    overlay 0.3s ease allow-discrete,
    display 0.3s ease allow-discrete;
}

.dialog[open]::backdrop {
  opacity: 1;
}

@starting-style {
  .dialog[open]::backdrop {
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .dialog, .dialog::backdrop { transition: none; }
}`,
};

export default entry;
