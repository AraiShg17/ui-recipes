import type { RecipeEntry } from "@/app/recipes/types";

const entry: RecipeEntry = {
  slug: "anchor-positioning",
  title: "Anchor Positioning API",
  summary:
    "anchor-name と position-anchor でツールチップ・右メニュー・スライドする背景を CSS だけで配置。JS で位置計算しない。非対応は @supports でフォールバック。",
  tags: ["css"],
  category: "Components",
  thumbnailSrc: "https://picsum.photos/id/2/400/210",
  code: `/* 1) ツールチップ: アンカーの上に中央揃え */
.anchorBtn { anchor-name: --btn-anchor; }
@supports (anchor-name: --test) {
  .tooltip {
    position: fixed;
    position-anchor: --btn-anchor;
    inset: unset;
    bottom: calc(anchor(top) + 8px);
    left: anchor(center);
    translate: -50% 0;
  }
}

/* 2) アイコン右にメニュー（Popover と併用） */
.menuTrigger { anchor-name: --menu-anchor; }
@supports (anchor-name: --test) {
  .menu {
    position: fixed;
    position-anchor: --menu-anchor;
    inset: unset;
    top: anchor(top);
    left: calc(anchor(right) + 8px);
  }
}

/* 3) スライドする背景（anchor-scope + 選択肢に anchor-name） */
.toggleScope { anchor-scope: --toggle-active; }
.toggleOption:has(.toggleInput:checked) { anchor-name: --toggle-active; }
@supports (anchor-name: --test) {
  .toggleIndicator {
    position-anchor: --toggle-active;
    inset-block-start: anchor(top);
    inset-inline-start: anchor(left);
    inline-size: anchor-size(width);
    block-size: anchor-size(height);
  }
}`,
};

export default entry;
