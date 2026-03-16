import { readFileSync } from "fs";
import { join } from "path";
import { getPrevNextHrefs } from "@/app/recipes/entries";
import { DetailLayout } from "@/components/DetailLayout/DetailLayout";
import { FrostedTileCursorDemo } from "./FrostedTileCursorDemo";
import entry from "./entry";

const SLUG = "frosted-tile-cursor";

export default async function FrostedTileCursorPage() {
  const { prevHref, nextHref } = await getPrevNextHrefs(SLUG);

  const code = readFileSync(
    join(
      process.cwd(),
      "src/app/recipes/(entries)/frosted-tile-cursor/FrostedTileCursorDemo.module.css"
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
      <FrostedTileCursorDemo />
    </DetailLayout>
  );
}
