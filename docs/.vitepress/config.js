import { defineConfig } from 'vitepress'
import Unocss from 'unocss/vite'
import { sub } from '@mdit/plugin-sub'
import Mark from 'markdown-it-mark'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Slidev Theme Neversink',
  description: 'An education/academia oriented Slidev theme with whimsical elements',
  base: '/slidev-theme-neversink/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting started', link: '/getting-started' },
      { text: 'Example Deck', link: 'https://gureckis.github.io/slidev-theme-neversink/example/#1', target: '_self' },
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Markdown Features', link: '/markdown' },
          { text: 'Colors Schemes', link: '/colors' },
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
              { text: 'SpeechBubble', link: '/components/speechbubble' },
              { text: 'StickyNote', link: '/components/stickynote' },
              { text: 'CreditScroll', link: '/components/creditscroll' },
              { text: 'QRCode', link: '/components/qrcode' },
              { text: 'Kawaii', link: '/components/kawaii' },
            ],
          },
          { text: 'Customizing', link: '/customizing' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
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
