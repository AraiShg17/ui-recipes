import { getRecipeIndex } from "@/app/recipes/entries";
import { Catalog } from "@/components/Catalog/Catalog";
import styles from "./page.module.css";

export default async function Home() {
  const recipes = await getRecipeIndex();

  return (
    <main className={styles.main}>
      <section className={styles.catalogSection}>
        <Catalog items={recipes} />
      </section>
    </main>
  );
}
