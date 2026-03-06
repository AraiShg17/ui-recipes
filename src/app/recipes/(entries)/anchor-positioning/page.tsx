import { getPrevNextHrefs } from "@/app/recipes/entries";
import { DetailLayout } from "@/components/DetailLayout/DetailLayout";
import { AnchorPositioningDemo } from "./AnchorPositioningDemo";
import entry from "./entry";

const SLUG = "anchor-positioning";

export default async function AnchorPositioningPage() {
  const { prevHref, nextHref } = await getPrevNextHrefs(SLUG);

  return (
    <DetailLayout
      title={entry.title}
      code={entry.code}
      prevHref={prevHref}
      nextHref={nextHref}
    >
      <AnchorPositioningDemo />
    </DetailLayout>
  );
}
