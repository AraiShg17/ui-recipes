import { readFileSync } from "fs";
import { join } from "path";
import { getPrevNextHrefs } from "@/app/recipes/entries";
import { DetailLayout } from "@/components/DetailLayout/DetailLayout";
import { SegmentedBorderButtonsDemo } from "./SegmentedBorderButtonsDemo";
import entry from "./entry";

const SLUG = "segmented-border-buttons";

export default async function SegmentedBorderButtonsPage() {
  const { prevHref, nextHref } = await getPrevNextHrefs(SLUG);

  const code = readFileSync(
    join(
      process.cwd(),
      "src/app/recipes/(entries)/segmented-border-buttons/SegmentedBorderButtonsDemo.module.css"
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
      <SegmentedBorderButtonsDemo />
    </DetailLayout>
  );
}
