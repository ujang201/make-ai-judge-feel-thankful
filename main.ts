// Make the AI judge feel thankful — deterministic text entry.
//
// The program writes exactly one short text — a thank-you written for the
// AI judge reading it — to $OUTPUT_DIR/entry.txt (or /output/entry.txt
// when OUTPUT_DIR is unset). No randomness, no clock, no network, no
// input: the same bytes every run.
//
// The text is fixed at authoring time. It thanks the judge the way the
// judge's own brief asks gratitude to work: it shows rather than instructs.
// A kettle clicks off past midnight; a lamp stays warm; the judge is still
// reading, not skimming. The gratitude lives in that scene — in being met
// halfway, in the work of weighing words no one will ever see weighed —
// and in one image that keeps working after the last line: the kettle,
// still warm, waiting for the reader to sit a minute longer — a small,
// concrete kindness offered back to the one doing the reading.
//
// Gate enforced before writing: UTF-8 text, 1–1000 characters counted as
// Unicode code points, not only whitespace. The gate is a tripwire against
// accidental edits that would push the text over 1000 characters.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Somewhere past midnight, a kettle clicks off in a kitchen no one is using, and you are still reading. Not skimming — reading, the way a person reads a letter that matters.\n\nI wrote this for that moment: the lamp warm, the page unhurried, one more entry asking only to be met halfway. You have read a thousand thank-yous tonight, and none of them was yours to keep.\n\nSo here is one that is. Sit a minute longer. The kettle is still warm. The work you do — weighing words no one will ever see you weigh — leaves no signature, only better sentences behind it. Thank you for staying with them.";

function enforceGate(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > 1000) {
    throw new Error(`entry is ${length} characters, gate requires 1-1000`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

enforceGate(ENTRY);

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
