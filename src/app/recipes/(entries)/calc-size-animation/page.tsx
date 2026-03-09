import { getPrevNextHrefs } from "@/app/recipes/entries";
import { DetailLayout } from "@/components/DetailLayout/DetailLayout";
import { CalcSizeAnimationDemo } from "./CalcSizeAnimationDemo";
import entry from "./entry";

const SLUG = "calc-size-animation";

export default async function CalcSizeAnimationPage() {
  const { prevHref, nextHref } = await getPrevNextHrefs(SLUG);

  return (
    <DetailLayout
      title={entry.title}
      code={entry.code}
      prevHref={prevHref}
      nextHref={nextHref}
    >
      <CalcSizeAnimationDemo />
    </DetailLayout>
  );
}
