import { getPrevNextHrefs } from "@/app/recipes/entries";
import { readDemoCode } from "@/app/recipes/readDemoCode";
import { DetailLayout } from "@/components/DetailLayout/DetailLayout";
import { RoundedPolygonDemo } from "./RoundedPolygonDemo";
import entry from "./entry";

const SLUG = "rounded-polygon";
const COMPONENT = "RoundedPolygonDemo";

export default async function RoundedPolygonPage() {
  const { prevHref, nextHref } = await getPrevNextHrefs(SLUG);
  const code = readDemoCode(SLUG, COMPONENT);

  return (
    <DetailLayout
      title={entry.title}
      code={code}
      prevHref={prevHref}
      nextHref={nextHref}
    >
      <RoundedPolygonDemo />
    </DetailLayout>
  );
}
