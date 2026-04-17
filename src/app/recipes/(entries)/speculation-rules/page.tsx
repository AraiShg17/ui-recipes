import { readFileSync } from "fs";
import { join } from "path";
import { getPrevNextHrefs } from "@/app/recipes/entries";
import { DetailLayout } from "@/components/DetailLayout/DetailLayout";
import { SpeculationRulesDemo } from "./SpeculationRulesDemo";
import entry from "./entry";

const SLUG = "speculation-rules";

const RULES_PATH = join(
  process.cwd(),
  "src/app/recipes/(entries)/speculation-rules/speculation-rules.rules.json"
);

export default async function SpeculationRulesPage() {
  const { prevHref, nextHref } = await getPrevNextHrefs(SLUG);

  const rulesJson = readFileSync(RULES_PATH, "utf-8").trim();
  const code = `<script type="speculationrules">\n${rulesJson}\n</script>`;

  return (
    <>
      <script
        type="speculationrules"
        dangerouslySetInnerHTML={{ __html: rulesJson }}
      />
      <DetailLayout
        title={entry.title}
        code={code}
        prevHref={prevHref}
        nextHref={nextHref}
      >
        <SpeculationRulesDemo />
      </DetailLayout>
    </>
  );
}
