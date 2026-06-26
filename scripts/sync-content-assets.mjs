import fs from "node:fs"
import path from "node:path"
import sharp from "sharp"

const root = process.cwd()
const sourceDir = path.join(root, "content", "portfolio")
const staticDir = path.join(root, "static")
const publicDir = path.join(root, "public")
const outDir = path.join(root, "out")
const blurModulePath = path.join(root, "lib", "generated", "image-blur-data.ts")
const targetDir = path.join(publicDir, "portfolio")
const assetExtensions = new Set([
  ".gif",
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
  ".svg",
  ".pdf",
])

async function createBlurDataUrl(filePath) {
  try {
    const buffer = await sharp(filePath)
      .resize(32, 32, { fit: "cover" })
      .jpeg({ quality: 45, mozjpeg: true })
      .toBuffer()

    return `data:image/jpeg;base64,${buffer.toString("base64")}`
  } catch {
    return undefined
  }
}

async function copyFiles(fromDir, toDir, filter = () => true, manifest = {}) {
  if (!fs.existsSync(fromDir)) {
    return manifest
  }

  for (const entry of fs.readdirSync(fromDir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) {
      continue
    }

    const fromPath = path.join(fromDir, entry.name)
    const toPath = path.join(toDir, entry.name)

    if (entry.isDirectory()) {
      await copyFiles(fromPath, toPath, filter, manifest)
      continue
    }

    if (!filter(fromPath)) {
      continue
    }

    fs.mkdirSync(path.dirname(toPath), { recursive: true })
    fs.copyFileSync(fromPath, toPath)

    const ext = path.extname(fromPath).toLowerCase()
    if (assetExtensions.has(ext)) {
      const publicPath = `/${path.relative(publicDir, toPath).split(path.sep).join("/")}`
      const blurDataURL = await createBlurDataUrl(fromPath)

      if (blurDataURL) {
        manifest[publicPath] = blurDataURL
      }
    }
  }

  return manifest
}

function writeBlurModule(manifest) {
  const entries = Object.entries(manifest)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `  ${JSON.stringify(key)}: ${JSON.stringify(value)},`)
    .join("\n")

  fs.mkdirSync(path.dirname(blurModulePath), { recursive: true })
  fs.writeFileSync(
    blurModulePath,
    `export const imageBlurData: Record<string, string> = {\n${entries}\n}\n`,
  )
}

fs.rmSync(publicDir, { recursive: true, force: true })
fs.rmSync(outDir, { recursive: true, force: true })
const blurManifest = await copyFiles(staticDir, publicDir)
await copyFiles(sourceDir, targetDir, filePath =>
  assetExtensions.has(path.extname(filePath).toLowerCase()),
  blurManifest,
)
writeBlurModule(blurManifest)
