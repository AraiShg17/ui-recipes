import { getPrevNextHrefs } from "@/app/recipes/entries";
import { readDemoCode } from "@/app/recipes/readDemoCode";
import { DetailLayout } from "@/components/DetailLayout/DetailLayout";
import { CssTextFitDemo } from "./CssTextFitDemo";
import entry from "./entry";

const SLUG = "css-text-fit";
const COMPONENT = "CssTextFitDemo";

export default async function CssTextFitPage() {
  const { prevHref, nextHref } = await getPrevNextHrefs(SLUG);
  const code = readDemoCode(SLUG, COMPONENT);

  return (
    <DetailLayout
      title={entry.title}
      code={code}
      prevHref={prevHref}
      nextHref={nextHref}
    >
      <CssTextFitDemo />
    </DetailLayout>
  );
}
