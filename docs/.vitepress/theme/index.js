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

import ArrowDraw from '../../../components/ArrowDraw.vue'
import BackPack from '../../../components/vue3-kawaii/components/backpack/BackPack.vue'
import Browser from '../../../components/vue3-kawaii/components/browser/Browser.vue'
import Cat from '../../../components/vue3-kawaii/components/cat/Cat.vue'
import CreditCard from '../../../components/vue3-kawaii/components/creditCard/CreditCard.vue'
import Ghost from '../../../components/vue3-kawaii/components/ghost/Ghost.vue'
import IceCream from '../../../components/vue3-kawaii/components/iceCream/IceCream.vue'
import Mug from '../../../components/vue3-kawaii/components/mug/Mug.vue'
import Planet from '../../../components/vue3-kawaii/components/planet/Planet.vue'
import SpeechBubbleGuy from '../../../components/vue3-kawaii/components/speechBubble/SpeechBubbleGuy.vue'

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
    app.component('ArrowDraw', ArrowDraw)
    app.component('BackPack', BackPack)
    app.component('Browser', Browser)
    app.component('Cat', Cat)
    app.component('CreditCard', CreditCard)
    app.component('Ghost', Ghost)
    app.component('IceCream', IceCream)
    app.component('Mug', Mug)
    app.component('Planet', Planet)
    app.component('SpeechBubbleGuy', SpeechBubbleGuy)
  },
}
