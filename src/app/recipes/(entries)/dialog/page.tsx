import { readFileSync } from "fs";
import { join } from "path";
import { getPrevNextHrefs } from "@/app/recipes/entries";
import { DetailLayout } from "@/components/DetailLayout/DetailLayout";
import { DialogDemo } from "./DialogDemo";
import entry from "./entry";

const SLUG = "dialog";

export default async function DialogPage() {
  const { prevHref, nextHref } = await getPrevNextHrefs(SLUG);

  const code = readFileSync(
    join(
      process.cwd(),
      "src/app/recipes/(entries)/dialog/DialogDemo.module.css"
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
      <DialogDemo />
    </DetailLayout>
  );
}
