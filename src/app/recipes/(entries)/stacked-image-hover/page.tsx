import { getPrevNextHrefs } from "@/app/recipes/entries";
import { DetailLayout } from "@/components/DetailLayout/DetailLayout";
import { StackedImageHover } from "./StackedImageHover";
import entry from "./entry";

const SLUG = "stacked-image-hover";

export default async function StackedImageHoverPage() {
  const { prevHref, nextHref } = await getPrevNextHrefs(SLUG);

  return (
    <DetailLayout
      title={entry.title}
      code={entry.code}
      prevHref={prevHref}
      nextHref={nextHref}
    >
      <StackedImageHover />
    </DetailLayout>
  );
}
