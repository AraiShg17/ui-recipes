import { readFileSync } from "fs";
import { join } from "path";
import { getPrevNextHrefs } from "@/app/recipes/entries";
import { DetailLayout } from "@/components/DetailLayout/DetailLayout";
import { CalcSizeAnimationDemo } from "./CalcSizeAnimationDemo";
import entry from "./entry";

const SLUG = "calc-size-animation";

export default async function CalcSizeAnimationPage() {
  const { prevHref, nextHref } = await getPrevNextHrefs(SLUG);

  const code = readFileSync(
    join(
      process.cwd(),
      "src/app/recipes/(entries)/calc-size-animation/CalcSizeAnimationDemo.module.css"
    ),
    "utf-8"
  );

  return (
    <DetailLayout
      title={entry.title}
      code={code}
      prevHref={prevHref}
      nextHref={nextHref}
    >
      <CalcSizeAnimationDemo />
    </DetailLayout>
  );
}
