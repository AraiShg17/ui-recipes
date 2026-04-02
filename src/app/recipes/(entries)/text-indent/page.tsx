import { readFileSync } from "fs";
import { join } from "path";
import { getPrevNextHrefs } from "@/app/recipes/entries";
import { DetailLayout } from "@/components/DetailLayout/DetailLayout";
import { TextIndentDemo } from "./TextIndentDemo";
import entry from "./entry";

const SLUG = "text-indent";

export default async function TextIndentPage() {
  const { prevHref, nextHref } = await getPrevNextHrefs(SLUG);

  const code = readFileSync(
    join(
      process.cwd(),
      "src/app/recipes/(entries)/text-indent/TextIndentDemo.module.css"
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
      <TextIndentDemo />
    </DetailLayout>
  );
}
