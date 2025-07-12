import type { LoadContext, Plugin, PluginOptions } from "@docusaurus/types"
import { reset } from "../components/ContentIndex/script"

export default async function IndexerPlugin(
  _context: LoadContext,
  _options: PluginOptions,
): Promise<Plugin> {
  return {
    // A compulsory field used as the namespace for directories to cache
    // the intermediate data for each plugin.
    // If you're writing your own local plugin, you will want it to
    // be unique in order not to potentially conflict with imported plugins.
    // A good way will be to add your own project name within.
    name: "indexer-plugin",

    async loadContent() {
      // The loadContent hook is executed after siteConfig and env has been loaded.
      // You can return a JavaScript object that will be passed to contentLoaded hook.
      console.log("loaded indexer plugin")
      reset()
      // const files = await fg.glob("docs/content/*.(md|mdx)", { onlyFiles: true, ignore: ["**/_*", "**/_*/**"] })
      // const files = _.map((v) => v.replace("docs/content/", ""))
      // const title = files.map((v) => v.match(/docs\/content\/(.+)\.(md|mdx)/)?.[1])
    },

    getPathsToWatch() {
      return ["docs/content/"]
    },
  }
}
