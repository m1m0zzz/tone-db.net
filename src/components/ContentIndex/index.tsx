import Link from "@docusaurus/Link"
import TabItem from "@theme/TabItem"
import Tabs from "@theme/Tabs"
import json from "./savedIndex.gen.json"

type Index = { index: string; url: string }

const jaCollator = new Intl.Collator("ja")
const enCollator = new Intl.Collator("en")

const jaIndex: Index[] = []
const enIndex: Index[] = []
for (const [page, obj] of Object.entries(json)) {
  enIndex.push({ index: obj.index, url: page })
  jaIndex.push({ index: obj.index_ja, url: page })
}
jaIndex.sort((a, b) => jaCollator.compare(a.index, b.index))
enIndex.sort((a, b) => enCollator.compare(a.index, b.index))

export default function ContentIndex() {
  return (
    <Tabs>
      <TabItem value="ja" label="ソート：日本語" default>
        <ul>
          {/* <div>TODO: あ</div> */}
          {jaIndex.map((page) => {
            return (
              <li key={page.index}>
                <Link to={`/content/${page.url}`}>{page.index}</Link>
              </li>
            )
          })}
        </ul>
      </TabItem>
      <TabItem value="en" label="ソート：英語">
        <ul>
          {enIndex.map((page) => (
            <li key={page.index}>
              <Link to={`/content/${page.url}`}>{page.index}</Link>
            </li>
          ))}
        </ul>
      </TabItem>
    </Tabs>
  )
}
