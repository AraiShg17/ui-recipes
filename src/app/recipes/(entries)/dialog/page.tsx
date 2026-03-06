import { getPrevNextHrefs } from "@/app/recipes/entries";
import { DetailLayout } from "@/components/DetailLayout/DetailLayout";
import { DialogDemo } from "./DialogDemo";
import entry from "./entry";

const SLUG = "dialog";

export default async function DialogPage() {
  const { prevHref, nextHref } = await getPrevNextHrefs(SLUG);

  return (
    <DetailLayout
      title={entry.title}
      code={entry.code}
      prevHref={prevHref}
      nextHref={nextHref}
    >
      <DialogDemo />
    </DetailLayout>
  );
}
