import { Link } from "@/components/Link/Link";
import type { ReactNode } from "react";
import { MdArrowBack, MdArrowForward, MdHome } from "react-icons/md";
import styles from "./DetailLayout.module.css";

type DetailLayoutProps = {
  title: string;
  code: string;
  prevHref?: string | null;
  nextHref?: string | null;
  children: ReactNode;
};

export function DetailLayout({
  title,
  code,
  prevHref,
  nextHref,
  children,
}: DetailLayoutProps) {
  return (
    <main className={styles.detailLayout}>
      <header className={styles.detailLayoutHeader}>
        <h1 className={styles.detailLayoutTitle}>{title}</h1>
      </header>

      <div className={styles.detailLayoutContentGrid}>
        <section className={`${styles.detailLayoutBlock} ${styles.detailLayoutBlockDemo}`}>
          {children}
        </section>

        <section className={`${styles.detailLayoutBlock} ${styles.detailLayoutBlockCode}`}>
          <pre className={styles.detailLayoutCodeBlock}>
            <code>{code}</code>
          </pre>
        </section>
      </div>

      <nav
        className={styles.detailLayoutNav}
        aria-label="レシピ間のナビゲーション"
      >
        {prevHref ? (
          <Link
            href={prevHref}
            className={styles.detailLayoutNavBtn}
            aria-label="前のレシピへ"
          >
            <MdArrowBack className={styles.detailLayoutNavIcon} aria-hidden />
          </Link>
        ) : (
          <span className={styles.detailLayoutNavSlot} aria-hidden />
        )}
        <Link
          href="/"
          className={styles.detailLayoutNavBtn}
          aria-label="一覧へ戻る"
        >
          <MdHome className={styles.detailLayoutNavIcon} aria-hidden />
        </Link>
        {nextHref ? (
          <Link
            href={nextHref}
            className={styles.detailLayoutNavBtn}
            aria-label="次のレシピへ"
          >
            <MdArrowForward className={styles.detailLayoutNavIcon} aria-hidden />
          </Link>
        ) : (
          <span className={styles.detailLayoutNavSlot} aria-hidden />
        )}
      </nav>
    </main>
  );
}
