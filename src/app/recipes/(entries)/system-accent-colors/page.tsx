import { getPrevNextHrefs } from "@/app/recipes/entries";
import { readDemoCode } from "@/app/recipes/readDemoCode";
import { DetailLayout } from "@/components/DetailLayout/DetailLayout";
import { SystemAccentColorsDemo } from "./SystemAccentColorsDemo";
import entry from "./entry";

const SLUG = "system-accent-colors";
const COMPONENT = "SystemAccentColorsDemo";

export default async function SystemAccentColorsPage() {
  const { prevHref, nextHref } = await getPrevNextHrefs(SLUG);
  const code = readDemoCode(SLUG, COMPONENT);

  return (
    <DetailLayout
      title={entry.title}
      code={code}
      prevHref={prevHref}
      nextHref={nextHref}
    >
      <SystemAccentColorsDemo />
    </DetailLayout>
  );
}
