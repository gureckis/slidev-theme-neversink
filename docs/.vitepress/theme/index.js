// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'

import 'uno.css'
import './style.css'
import '../../../styles/colors.css'

import Admonition from '../../../components/Admonition.vue'
import AdmonitionType from '../../../components/AdmonitionType.vue'
import StickyNote from '../../../components/StickyNote.vue'
import QrcodeVue from 'qrcode.vue'
import SpeechBubble from '../../../components/SpeechBubble.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('Admonition', Admonition)
    app.component('AdmonitionType', AdmonitionType)
    app.component('StickyNote', StickyNote)
    app.component('QRCode', QrcodeVue)
    app.component('SpeechBubble', SpeechBubble)
  },
}
