// Fridge Roast — one-line entry for make.fun bounty
// u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb
// Gate: program/v1 writes /output/entry.txt, UTF-8, 1-200 chars, no trailing newline.
// Judge brief: roast the smart fridge itself / its app / firmware / ice maker;
// punchline must land with a turn; specific to smart fridges; tight; fresh —
// avoid the obvious cracks about the fridge ordering groceries or watching you.
//
// CANDIDATES (draft pass):
// A) "My smart fridge shows ads on its door, charges a subscription in its app,
//     and put its ice maker on a firmware update — I paid $3,000 for a billboard
//     that beeps at my expired cheese."
//    -> Strong list of three, but "billboard" only pays off the ads; the ice-maker
//       and subscription jabs are left hanging.
// B) "My smart fridge needs a software update to make ice, a subscription to stay
//     cold, and my Wi-Fi password to judge my leftovers — I paid $3,000 for a
//     landlord that lives in my kitchen."
//    -> "Landlord" is a fun turn, but "judge my leftovers" drifts toward the
//       overused watching-you angle the brief says to avoid.
// C) "My smart fridge locked its ice maker behind a firmware update, paywalled
//     its own temperature, and still can't keep milk cold — congratulations,
//     I bought a $3,000 group chat that beeps."
//    -> "Group chat that beeps" is fresh, but "congratulations, I bought" wastes
//       characters and softens the punch.
// D) "My smart fridge put its ice maker on a firmware update, charges a
//     subscription just to stay cold, and beeps about cheese it let expire —
//     I paid $3,000 for a snitch that can't do its one job."
//    -> Every setup item is fridge-specific (ice maker + firmware, subscription
//       for the core job of staying cold, expiry beeps), and the turn accuses the
//       fridge of snitching on a failure that is its own fault. Tightest arc.
//
// REVISION PASS: pick D. Sharpening notes applied in the final string below:
// - "put its ice maker on a firmware update" kept verbatim: the absurdity of ice
//   needing software is the most specific smart-fridge gag available.
// - "just to stay cold" underlines that the subscription charges for the one
//   thing a fridge exists to do, which sets up the closing "one job" callback.
// - Final clause drops "I paid" filler variants and lands on the contradiction:
//   it reports expired cheese that expired on its watch.

import { mkdirSync, writeFileSync } from "node:fs";

// REVISION PASS 2 (after re-reading D aloud):
// - Cut "I paid" before "$3,000": the price lands harder as a bare verdict, and
//   the saved characters keep the line comfortably inside the 200-char gate.
// - Keep "snitch": it is the turn — the fridge tattles on cheese that expired
//   because the fridge itself failed to stay cold. The closer "can't do its one
//   job" calls back both the subscription-for-cold and the expired cheese.
const ENTRY =
  "My smart fridge put its ice maker on a firmware update, charges a subscription just to stay cold, and beeps about cheese it let expire — $3,000 for a snitch that can't do its one job.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, { encoding: "utf8" });
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
