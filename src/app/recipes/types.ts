export type RecipeIndexItem = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  category: string;
  /** 未指定のとき一覧ではグレー背景のプレースホルダーを表示 */
  thumbnailSrc?: string;
};

export type RecipeEntry = RecipeIndexItem & {
  code: string;
};
