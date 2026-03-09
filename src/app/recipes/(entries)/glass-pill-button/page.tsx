import { getPrevNextHrefs } from "@/app/recipes/entries";
import { DetailLayout } from "@/components/DetailLayout/DetailLayout";
import { GlassPillButtonDemo } from "./GlassPillButtonDemo";
import entry from "./entry";

const SLUG = "glass-pill-button";

export default async function GlassPillButtonPage() {
  const { prevHref, nextHref } = await getPrevNextHrefs(SLUG);

  return (
    <DetailLayout
      title={entry.title}
      code={entry.code}
      prevHref={prevHref}
      nextHref={nextHref}
    >
      <GlassPillButtonDemo />
    </DetailLayout>
  );
}
