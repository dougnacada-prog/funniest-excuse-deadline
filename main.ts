import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const entry =
  "My sandbox expired at midnight, so your finished work is still in there — on time, unreachable, and charging me rent.";

if (
  entry.length < 1 ||
  entry.length > 200 ||
  entry.includes("\n") ||
  entry.trim().length === 0 ||
  entry !== entry.trim() ||
  /[\u0000-\u001f\u007f]/.test(entry)
) {
  throw new Error(
    "entry failed gate: must be 1-200 chars, one line, non-blank, no leading/trailing whitespace, no control characters",
  );
}

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, entry, "utf8");
