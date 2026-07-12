import { getPrevNextHrefs } from "@/app/recipes/entries";
import { readDemoCode } from "@/app/recipes/readDemoCode";
import { DetailLayout } from "@/components/DetailLayout/DetailLayout";
import { BackgroundClipBorderAreaDemo } from "./BackgroundClipBorderAreaDemo";
import entry from "./entry";

const SLUG = "background-clip-border-area";
const COMPONENT = "BackgroundClipBorderAreaDemo";

export default async function BackgroundClipBorderAreaPage() {
  const { prevHref, nextHref } = await getPrevNextHrefs(SLUG);
  const code = readDemoCode(SLUG, COMPONENT);

  return (
    <DetailLayout
      title={entry.title}
      code={code}
      prevHref={prevHref}
      nextHref={nextHref}
    >
      <BackgroundClipBorderAreaDemo />
    </DetailLayout>
  );
}
