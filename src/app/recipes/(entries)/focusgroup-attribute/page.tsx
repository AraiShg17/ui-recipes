import { getPrevNextHrefs } from "@/app/recipes/entries";
import { readDemoCode } from "@/app/recipes/readDemoCode";
import { DetailLayout } from "@/components/DetailLayout/DetailLayout";
import { FocusgroupAttributeDemo } from "./FocusgroupAttributeDemo";
import entry from "./entry";

const SLUG = "focusgroup-attribute";
const COMPONENT = "FocusgroupAttributeDemo";

export default async function FocusgroupAttributePage() {
  const { prevHref, nextHref } = await getPrevNextHrefs(SLUG);
  const code = readDemoCode(SLUG, COMPONENT);

  return (
    <DetailLayout
      title={entry.title}
      code={code}
      prevHref={prevHref}
      nextHref={nextHref}
    >
      <FocusgroupAttributeDemo />
    </DetailLayout>
  );
}
