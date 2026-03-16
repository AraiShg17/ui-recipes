import { readFileSync } from "fs";
import { join } from "path";
import { getPrevNextHrefs } from "@/app/recipes/entries";
import { DetailLayout } from "@/components/DetailLayout/DetailLayout";
import { TabularStopwatchDemo } from "./TabularStopwatchDemo";
import entry from "./entry";

const SLUG = "tabular-stopwatch";

export default async function TabularStopwatchPage() {
  const { prevHref, nextHref } = await getPrevNextHrefs(SLUG);

  const code = readFileSync(
    join(
      process.cwd(),
      "src/app/recipes/(entries)/tabular-stopwatch/TabularStopwatchDemo.module.css"
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
      <TabularStopwatchDemo />
    </DetailLayout>
  );
}

