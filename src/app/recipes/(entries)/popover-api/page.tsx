import { getPrevNextHrefs } from "@/app/recipes/entries";
import { readDemoCode } from "@/app/recipes/readDemoCode";
import { DetailLayout } from "@/components/DetailLayout/DetailLayout";
import { PopoverApiDemo } from "./PopoverApiDemo";
import entry from "./entry";

const SLUG = "popover-api";
const COMPONENT = "PopoverApiDemo";

export default async function PopoverApiPage() {
  const { prevHref, nextHref } = await getPrevNextHrefs(SLUG);
  const code = readDemoCode(SLUG, COMPONENT);

  return (
    <DetailLayout
      title={entry.title}
      code={code}
      prevHref={prevHref}
      nextHref={nextHref}
    >
      <PopoverApiDemo />
    </DetailLayout>
  );
}
