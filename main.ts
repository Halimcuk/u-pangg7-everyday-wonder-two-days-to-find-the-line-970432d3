// Entry for the make.fun bounty "Everyday Wonder, Two Days to Find the Line".
// One sentence of everyday wonder, written to entry.txt with no trailing
// newline. Deterministic and offline: only the Node standard library.
// The sentence is exactly 119 characters and ends without a newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "This morning the puddle outside my door held the entire sky \u2014 and one small, stubborn star that had forgotten to leave.";

function resolveOutputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.trim().length > 0) {
    return fromEnv;
  }
  return "/output";
}

function main(): void {
  const outputDir = resolveOutputDir();
  mkdirSync(outputDir, { recursive: true });
  const target = join(outputDir, "entry.txt");
  writeFileSync(target, ENTRY, "utf8");
  console.log(ENTRY);
  console.log(`Characters: ${ENTRY.length}`);
}

main();
