import { readFileSync } from "fs";
import { join } from "path";
import { getPrevNextHrefs } from "@/app/recipes/entries";
import { DetailLayout } from "@/components/DetailLayout/DetailLayout";
import { GradientOklabComparison } from "./GradientOklabComparison";
import entry from "./entry";

const SLUG = "gradient-oklab";

export default async function GradientOklabPage() {
  const { prevHref, nextHref } = await getPrevNextHrefs(SLUG);

  const code = readFileSync(
    join(
      process.cwd(),
      "src/app/recipes/(entries)/gradient-oklab/GradientOklabComparison.module.css"
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
      <GradientOklabComparison />
    </DetailLayout>
  );
}
