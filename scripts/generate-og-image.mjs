// One-off OG image generator. Requires `npm i -D sharp` (removed after use to
// keep it out of the shipped dependency tree — reinstall to regenerate).
import sharp from "sharp";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const dir = path.dirname(fileURLToPath(import.meta.url));
const svg = readFileSync(path.join(dir, "og-source.svg"));

await sharp(svg, { density: 220 })
  .resize(1200, 630)
  .flatten({ background: "#faf3e7" })
  .png()
  .toFile(path.join(dir, "..", "public", "og-image.png"));

console.log("Wrote public/og-image.png");
