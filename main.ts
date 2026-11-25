import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-word verdict on an ex: the subscription is cancelled.
const VERDICT = "Unsubscribed";
const LIMIT = 111;

function guard(word: string): void {
  const length = [...word].length;
  if (length < 1 || length > LIMIT) {
    throw new Error(`entry is ${length} chars, outside the 1-${LIMIT} limit`);
  }
}

guard(VERDICT);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), VERDICT, "utf8");
