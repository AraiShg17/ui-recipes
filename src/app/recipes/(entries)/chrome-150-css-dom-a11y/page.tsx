import { getPrevNextHrefs } from "@/app/recipes/entries";
import { readDemoCode } from "@/app/recipes/readDemoCode";
import { DetailLayout } from "@/components/DetailLayout/DetailLayout";
import { Chrome150CssDomA11yDemo } from "./Chrome150CssDomA11yDemo";
import entry from "./entry";

const SLUG = "chrome-150-css-dom-a11y";
const COMPONENT = "Chrome150CssDomA11yDemo";

export default async function Chrome150CssDomA11yPage() {
  const { prevHref, nextHref } = await getPrevNextHrefs(SLUG);
  const code = readDemoCode(SLUG, COMPONENT);

  return (
    <DetailLayout
      title={entry.title}
      code={code}
      prevHref={prevHref}
      nextHref={nextHref}
    >
      <Chrome150CssDomA11yDemo />
    </DetailLayout>
  );
}
