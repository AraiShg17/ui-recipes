import { readFileSync } from "fs";
import { join } from "path";
import { getPrevNextHrefs } from "@/app/recipes/entries";
import { DetailLayout } from "@/components/DetailLayout/DetailLayout";
import { DetailsAccordionDemo } from "./DetailsAccordionDemo";
import entry from "./entry";

const SLUG = "details-accordion";

export default async function DetailsAccordionPage() {
  const { prevHref, nextHref } = await getPrevNextHrefs(SLUG);

  const code = readFileSync(
    join(
      process.cwd(),
      "src/app/recipes/(entries)/details-accordion/DetailsAccordionDemo.module.css",
    ),
    "utf-8",
  );

  return (
    <DetailLayout
      title={entry.title}
      code={code}
      prevHref={prevHref}
      nextHref={nextHref}
    >
      <DetailsAccordionDemo />
    </DetailLayout>
  );
}

