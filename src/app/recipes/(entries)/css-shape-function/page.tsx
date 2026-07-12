import { getPrevNextHrefs } from "@/app/recipes/entries";
import { readDemoCode } from "@/app/recipes/readDemoCode";
import { DetailLayout } from "@/components/DetailLayout/DetailLayout";
import { CssShapeFunctionDemo } from "./CssShapeFunctionDemo";
import entry from "./entry";

const SLUG = "css-shape-function";
const COMPONENT = "CssShapeFunctionDemo";

export default async function CssShapeFunctionPage() {
  const { prevHref, nextHref } = await getPrevNextHrefs(SLUG);
  const code = readDemoCode(SLUG, COMPONENT);

  return (
    <DetailLayout
      title={entry.title}
      code={code}
      prevHref={prevHref}
      nextHref={nextHref}
    >
      <CssShapeFunctionDemo />
    </DetailLayout>
  );
}
