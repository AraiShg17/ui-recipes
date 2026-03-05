export type RecipeIndexItem = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  category: string;
  thumbnailSrc: string;
};

export type RecipeEntry = RecipeIndexItem & {
  code: string;
};
