import { readFileSync } from "fs";
import { join } from "path";
import { getPrevNextHrefs } from "@/app/recipes/entries";
import { DetailLayout } from "@/components/DetailLayout/DetailLayout";
import { IconLabelToggleDemo } from "./IconLabelToggleDemo";
import entry from "./entry";

const SLUG = "icon-label-toggle";

export default async function IconLabelTogglePage() {
  const { prevHref, nextHref } = await getPrevNextHrefs(SLUG);

  const code = readFileSync(
    join(
      process.cwd(),
      "src/app/recipes/(entries)/icon-label-toggle/IconLabelToggleDemo.module.css"
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
      <IconLabelToggleDemo />
    </DetailLayout>
  );
}
