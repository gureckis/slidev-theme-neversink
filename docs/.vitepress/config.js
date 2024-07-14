import { defineConfig } from 'vitepress'
import Unocss from 'unocss/vite'
import { sub } from '@mdit/plugin-sub'
import Mark from 'markdown-it-mark'
import { version } from '../../package.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Slidev Theme Neversink',
  description: 'An education/academic oriented Slidev theme',
  base: '/slidev-theme-neversink/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting started', link: '/getting-started' },
      { text: 'Example Deck', link: 'https://gureckis.github.io/slidev-theme-neversink/example/#1', target: '_self' },
      {
        text: `v${version}`,
        items: [{ text: 'Release Notes', link: 'https://github.com/gureckis/slidev-theme-neversink/releases' }],
      },
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Markdown Features', link: '/markdown' },
          { text: 'Colors Schemes', link: '/colors' },
          { text: 'Styling', link: '/styling' },
          { text: 'Branding', link: '/branding' },
          {
            text: 'Layouts',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/layouts' },
              { text: `cover`, link: '/layouts/cover' },
              { text: `intro`, link: '/layouts/intro' },
              { text: `default`, link: '/layouts/default' },
              { text: `two-cols-title`, link: '/layouts/two-cols-title' },
              { text: `top-title`, link: '/layouts/top-title' },
              { text: `top-title-two-cols`, link: '/layouts/top-title-two-cols' },
              { text: `side-title`, link: '/layouts/side-title' },
              { text: `quote`, link: '/layouts/quote' },
              { text: `section`, link: '/layouts/section' },
              { text: `full`, link: '/layouts/full' },
              { text: `credits`, link: '/layouts/credits' },
            ],
          },
          {
            text: 'Components',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/components' },
              { text: 'Admonitions', link: '/components/admonitions' },
              { text: 'Email', link: '/components/email' },
              { text: 'SpeechBubble', link: '/components/speechbubble' },
              { text: 'StickyNote', link: '/components/stickynote' },
              { text: 'CreditScroll', link: '/components/creditscroll' },
              { text: 'QRCode', link: '/components/qrcode' },
              { text: 'Kawaii', link: '/components/kawaii' },
              { text: 'ArrowHeads', link: '/components/arrowheads' },
            ],
          },
          { text: 'Customizing', link: '/customizing' },
          { text: 'Contributing', link: '/contributing' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/gureckis/slidev-theme-neversink' }],
  },
  markdown: {
    config: (md) => {
      md.use(sub)
      md.use(Mark)
    },
  },
  vite: {
    plugins: [Unocss()],
  },
})
