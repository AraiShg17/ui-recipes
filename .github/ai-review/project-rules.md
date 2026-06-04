# UI Recipes リポジトリ固有（レビュー用要約）

## 構成

- カタログ + 各レシピ詳細。エントリは `src/app/recipes/(entries)/<slug>/`
- `entry.ts`: slug, title, tags, category, thumbnailSrc?, code（多くは空で page が CSS を読む）
- `page.tsx`: `getPrevNextHrefs`, `DetailLayout`, Demo コンポーネント
- スタイル: `ComponentName.module.css`（camelCase クラス、ネスト最大3段）

## 必須チェック（レシピ PR）

- [ ] slug とフォルダ名・ルート `/recipes/<slug>` が一致
- [ ] `entry.ts` の default export と slug が一致
- [ ] 新規レシピが `entries` 自動 discovery に乗る（ディレクトリ追加のみでよい）
- [ ] CSS Modules に `:root` を置かない（グローバル汚染）
- [ ] 不要な `'use client'` を付けていない
- [ ] セマンティック HTML・キーボード操作・`prefers-reduced-motion`
- [ ] プログレッシブエンハンスメント（新 CSS は未対応時の挙動を一言でもよい）

## このリポジトリの詳細ルール

実装の詳細はリポジトリ内 `agent/` を参照（layout, popover, dialog, view-transitions, anchor-positioning など）。
