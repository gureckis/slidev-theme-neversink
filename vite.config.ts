import { defineConfig } from 'vite'
//import MarkdownItMagicLink from 'markdown-it-magic-link'
import { alert } from '@mdit/plugin-alert'
import { sub } from '@mdit/plugin-sub'
import Mark from 'markdown-it-mark'

console.log('loading theme vite.config.ts')
export default defineConfig({
  slidev: {
    markdown: {
      markdownItSetup(md) {
        md.use(alert)
        md.use(sub)
        md.use(Mark)
      },
    },
  },
})
