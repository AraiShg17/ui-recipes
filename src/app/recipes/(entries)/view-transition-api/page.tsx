import { getPrevNextHrefs } from "@/app/recipes/entries";
import { readDemoCode } from "@/app/recipes/readDemoCode";
import { DetailLayout } from "@/components/DetailLayout/DetailLayout";
import { ViewTransitionApiDemo } from "./ViewTransitionApiDemo";
import entry from "./entry";

const SLUG = "view-transition-api";
const COMPONENT = "ViewTransitionApiDemo";

export default async function ViewTransitionApiPage() {
  const { prevHref, nextHref } = await getPrevNextHrefs(SLUG);
  const code = readDemoCode(SLUG, COMPONENT);

  return (
    <DetailLayout
      title={entry.title}
      code={code}
      prevHref={prevHref}
      nextHref={nextHref}
    >
      <ViewTransitionApiDemo />
    </DetailLayout>
  );
}
