import { readFileSync } from "fs";
import { join } from "path";
import { getPrevNextHrefs } from "@/app/recipes/entries";
import { DetailLayout } from "@/components/DetailLayout/DetailLayout";
import { GlassPillButtonDemo } from "./GlassPillButtonDemo";
import entry from "./entry";

const SLUG = "glass-pill-button";

export default async function GlassPillButtonPage() {
  const { prevHref, nextHref } = await getPrevNextHrefs(SLUG);

  const code = readFileSync(
    join(
      process.cwd(),
      "src/app/recipes/(entries)/glass-pill-button/GlassPillButtonDemo.module.css"
    ),
    "utf-8"
  );

  return (
    <DetailLayout
      title={entry.title}
      code={code}
      prevHref={prevHref}
      nextHref={nextHref}
    >
      <GlassPillButtonDemo />
    </DetailLayout>
  );
}
