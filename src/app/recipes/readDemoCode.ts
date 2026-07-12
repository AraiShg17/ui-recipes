import "server-only";

import { readFileSync } from "fs";
import { join } from "path";

export function readDemoCode(slug: string, componentName: string) {
  const entryDir = join(process.cwd(), "src/app/recipes/(entries)", slug);
  const componentCode = readFileSync(
    join(entryDir, `${componentName}.tsx`),
    "utf-8"
  );
  const cssCode = readFileSync(
    join(entryDir, `${componentName}.module.css`),
    "utf-8"
  );

  return `// ${componentName}.tsx\n${componentCode}\n\n/* ${componentName}.module.css */\n${cssCode}`;
}
