// One Word, First Thought — entry program.
// Writes exactly one word to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// The word: "petrichor" — the scent of rain on dry earth. Surprising,
// vivid, specific, and it rewards a second look.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "petrichor";

// Self-check against the competition gate before writing: UTF-8 text of
// 1 to 24 characters, not only whitespace. Fail loudly rather than emit
// an invalid entry.
if (
  WORD.length < 1 ||
  WORD.length > 24 ||
  WORD.trim().length === 0 ||
  /\s/.test(WORD)
) {
  throw new Error(`entry word fails the gate: ${JSON.stringify(WORD)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the file must contain ONLY the word.
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
