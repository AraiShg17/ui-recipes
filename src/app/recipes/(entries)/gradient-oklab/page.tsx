import { getPrevNextHrefs } from "@/app/recipes/entries";
import { DetailLayout } from "@/components/DetailLayout/DetailLayout";
import { GradientOklabComparison } from "./GradientOklabComparison";
import entry from "./entry";

const SLUG = "gradient-oklab";

export default async function GradientOklabPage() {
  const { prevHref, nextHref } = await getPrevNextHrefs(SLUG);

  return (
    <DetailLayout
      title={entry.title}
      code={entry.code}
      prevHref={prevHref}
      nextHref={nextHref}
    >
      <GradientOklabComparison />
    </DetailLayout>
  );
}
