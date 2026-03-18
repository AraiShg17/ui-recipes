"use client";

import type { RecipeIndexItem } from "@/app/recipes/types";
import { Link } from "@/components/Link/Link";
import Image from "next/image";
import { useMemo, useState } from "react";
import styles from "./Catalog.module.css";

type CatalogProps = {
  items: RecipeIndexItem[];
};

const DEFAULT_TAGS = ["all", "a11y", "css", "UI"];

export function Catalog({ items }: CatalogProps) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string>("all");

  const tags = useMemo(() => DEFAULT_TAGS, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      const matchesTag = activeTag === "all" || item.tags.includes(activeTag);
      const matchesQuery =
        q.length === 0 ||
        item.title.toLowerCase().includes(q) ||
        item.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesTag && matchesQuery;
    });
  }, [items, query, activeTag]);

  return (
    <div className={styles.catalog}>
      <div className={styles.searchArea}>
        <input
          id="recipe-search"
          className={styles.searchInput}
          type="search"
          placeholder="検索"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <div className={styles.tagFilters} aria-label="タグフィルタ">
        {tags.map((tag) => {
          const selected = tag === activeTag;
          return (
            <button
              key={tag}
              type="button"
              className={selected ? styles.tagButtonActive : styles.tagButton}
              onClick={() => setActiveTag(tag)}
            >
              #{tag}
            </button>
          );
        })}
      </div>

      <ul className={styles.cardList}>
        {filtered.map((item) => (
          <li key={item.slug} className={styles.cardItem}>
            <Link className={styles.card} href={`/recipes/${item.slug}`}>
              <div className={styles.cardMedia}>
                {item.thumbnailSrc ? (
                  <Image
                    src={item.thumbnailSrc}
                    alt={item.title}
                    fill
                    className={styles.cardImage}
                    sizes="(max-width: 640px) 100vw, 480px"
                  />
                ) : (
                  <div className={styles.cardMediaPlaceholder} aria-hidden />
                )}
              </div>
              <h2 className={styles.cardTitle}>{item.title}</h2>
            </Link>
          </li>
        ))}
      </ul>

      {filtered.length === 0 && (
        <p className={styles.empty}>
          条件に一致する実装が見つかりませんでした。
        </p>
      )}
    </div>
  );
}
