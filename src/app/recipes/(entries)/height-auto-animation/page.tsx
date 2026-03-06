import { getPrevNextHrefs } from "@/app/recipes/entries";
import { DetailLayout } from "@/components/DetailLayout/DetailLayout";
import { HeightAutoAnimationDemo } from "./HeightAutoAnimationDemo";
import entry from "./entry";

const SLUG = "height-auto-animation";

export default async function HeightAutoAnimationPage() {
  const { prevHref, nextHref } = await getPrevNextHrefs(SLUG);

  return (
    <DetailLayout
      title={entry.title}
      code={entry.code}
      prevHref={prevHref}
      nextHref={nextHref}
    >
      <HeightAutoAnimationDemo />
    </DetailLayout>
  );
}
