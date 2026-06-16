import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const sourceDir = path.join(root, "content", "portfolio")
const staticDir = path.join(root, "static")
const publicDir = path.join(root, "public")
const outDir = path.join(root, "out")
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

function copyFiles(fromDir, toDir, filter = () => true) {
  if (!fs.existsSync(fromDir)) {
    return
  }

  for (const entry of fs.readdirSync(fromDir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) {
      continue
    }

    const fromPath = path.join(fromDir, entry.name)
    const toPath = path.join(toDir, entry.name)

    if (entry.isDirectory()) {
      copyFiles(fromPath, toPath, filter)
      continue
    }

    if (!filter(fromPath)) {
      continue
    }

    fs.mkdirSync(path.dirname(toPath), { recursive: true })
    fs.copyFileSync(fromPath, toPath)
  }
}

fs.rmSync(publicDir, { recursive: true, force: true })
fs.rmSync(outDir, { recursive: true, force: true })
copyFiles(staticDir, publicDir)
copyFiles(sourceDir, targetDir, filePath =>
  assetExtensions.has(path.extname(filePath).toLowerCase()),
)
