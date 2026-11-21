import { mkdir, writeFile } from "node:fs/promises";

// The entry text: one short piece meant to leave the reader calmer than it
// found them. A whale sinking slowly through deep water, her heartbeat
// widening, the whole ocean holding her weight and asking nothing of her.
// Plain concrete words, long soft sounds, commas that force a slow read.
const ENTRY_TEXT: string =
  "Far below the harbour lights, where the water turns the colour of dusk " +
  "and stays that way, an old whale drifts down through the blue, " +
  "unhurried, her heart beating once, then again a long while later, " +
  "the whole dark ocean holding her weight and asking nothing of her.";

async function writeEntry(): Promise<void> {
  await mkdir("/output", { recursive: true });
  await writeFile("/output/entry.txt", ENTRY_TEXT, "utf8");
}

await writeEntry();
