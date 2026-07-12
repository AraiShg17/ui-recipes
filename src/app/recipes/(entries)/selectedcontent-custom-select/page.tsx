import { getPrevNextHrefs } from "@/app/recipes/entries";
import { readDemoCode } from "@/app/recipes/readDemoCode";
import { DetailLayout } from "@/components/DetailLayout/DetailLayout";
import { SelectedcontentCustomSelectDemo } from "./SelectedcontentCustomSelectDemo";
import entry from "./entry";

const SLUG = "selectedcontent-custom-select";
const COMPONENT = "SelectedcontentCustomSelectDemo";

export default async function SelectedcontentCustomSelectPage() {
  const { prevHref, nextHref } = await getPrevNextHrefs(SLUG);
  const code = readDemoCode(SLUG, COMPONENT);

  return (
    <DetailLayout
      title={entry.title}
      code={code}
      prevHref={prevHref}
      nextHref={nextHref}
    >
      <SelectedcontentCustomSelectDemo />
    </DetailLayout>
  );
}
