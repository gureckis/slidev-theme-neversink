import { defineConfig } from 'vite'
//import MarkdownItMagicLink from 'markdown-it-magic-link'
import { sub } from '@mdit/plugin-sub'
import Mark from 'markdown-it-mark'
import { version } from './package.json'

console.log(`Loading Neversink ${version} theme vite.config.ts...`)
export default defineConfig({
  slidev: {
    markdown: {
      markdownItSetup(md) {
        md.use(sub)
        md.use(Mark)
      },
    },
  },
})
