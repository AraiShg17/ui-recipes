import { getPrevNextHrefs } from "@/app/recipes/entries";
import { DetailLayout } from "@/components/DetailLayout/DetailLayout";
import { DisplayAnimationDemo } from "./DisplayAnimationDemo";
import entry from "./entry";

const SLUG = "display-animation";

export default async function DisplayAnimationPage() {
  const { prevHref, nextHref } = await getPrevNextHrefs(SLUG);

  return (
    <DetailLayout
      title={entry.title}
      code={entry.code}
      prevHref={prevHref}
      nextHref={nextHref}
    >
      <DisplayAnimationDemo />
    </DetailLayout>
  );
}
