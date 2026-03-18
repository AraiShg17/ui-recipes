import "server-only";

import { readdir } from "node:fs/promises";
import path from "node:path";
import type { RecipeEntry, RecipeIndexItem } from "./types";

const entriesRootDir = path.join(process.cwd(), "src/app/recipes/(entries)");

async function importEntry(slug: string): Promise<RecipeEntry | null> {
  if (!/^[a-z0-9-]+$/u.test(slug)) {
    return null;
  }

  try {
    const importedModule = await import(`./(entries)/${slug}/entry`);
    const entry = importedModule.default as RecipeEntry;

    if (!entry || entry.slug !== slug) {
      return null;
    }

    return entry;
  } catch {
    return null;
  }
}

export async function getRecipeSlugs(): Promise<string[]> {
  const directoryEntries = await readdir(entriesRootDir, { withFileTypes: true });
  return directoryEntries
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();
}

export async function getPrevNextHrefs(
  slug: string
): Promise<{ prevHref: string | null; nextHref: string | null }> {
  const slugs = await getRecipeSlugs();
  const i = slugs.indexOf(slug);
  return {
    prevHref: i > 0 ? `/recipes/${slugs[i - 1]}` : null,
    nextHref:
      i >= 0 && i < slugs.length - 1 ? `/recipes/${slugs[i + 1]}` : null,
  };
}

export async function getRecipeIndex(): Promise<RecipeIndexItem[]> {
  const slugs = await getRecipeSlugs();
  const entries = await Promise.all(slugs.map((slug) => importEntry(slug)));

  return entries
    .filter((entry): entry is RecipeEntry => entry !== null)
    .map(({ slug, title, tags, category, thumbnailSrc }) => ({
      slug,
      title,
      tags,
      category,
      thumbnailSrc,
    }));
}
