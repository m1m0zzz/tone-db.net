import fs from "node:fs"

const targetDir = "src/components/ContentIndex/savedIndex.gen.json"

export function reset() {
  fs.writeFileSync(targetDir, "{}", { encoding: "utf-8" })
}

export function pushData(index: string, index_ja: string, page = index) {
  const text = fs.readFileSync(targetDir, { encoding: "utf-8" })
  const json = JSON.parse(text)
  json[page.toLowerCase().replaceAll(/\s+/g, "-")] = {
    index: index,
    index_ja: index_ja,
  }
  const newText = JSON.stringify(json, null, 2)
  fs.writeFileSync(targetDir, newText)
}
