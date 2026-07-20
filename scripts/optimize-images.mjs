import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";

const inputDirs = ["src/assets"];
const exts = [".jpg", ".jpeg", ".png"];
const outputDir = "src/assets-optimized";

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const fullPath = path.join(dir, entry.name);
      return entry.isDirectory() ? walk(fullPath) : fullPath;
    })
  );
  return files.flat();
}

await mkdir(outputDir, { recursive: true });

for (const dir of inputDirs) {
  const files = (await walk(dir)).filter((file) =>
    exts.includes(path.extname(file).toLowerCase())
  );

  for (const file of files) {
    const relative = path.relative("src/assets", file);
    const parsed = path.parse(relative);
    const targetDir = path.join(outputDir, parsed.dir);
    const target = path.join(targetDir, `${parsed.name}.webp`);

    await mkdir(targetDir, { recursive: true });

    await sharp(file)
      .resize({
        width: 1600,
        withoutEnlargement: true,
      })
      .webp({ quality: 78 })
      .toFile(target);

    console.log(`Optimized: ${file} → ${target}`);
  }
}