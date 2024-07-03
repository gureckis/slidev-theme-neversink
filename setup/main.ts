import { defineAppSetup } from '@slidev/types'
// import courseInfoPlugin from '../plugins/courseInfoPlugin'
// import Cite from '../../src/components/Cite.vue'
//import Bibliography from '../../src/components/Bibliography'
import CreditScroll from '../components/CreditScroll.vue'
import QrcodeVue from 'qrcode.vue'
import Bubble from '../components/bubble.vue'
import StickyNote from '../components/stickynote.vue'

// Vue3 Kawaii
import Backpack from '../components/vue3-kawaii/components/backpack/Backpack.vue'
import Browser from '../components/vue3-kawaii/components/browser/Browser.vue'
import Cat from '../components/vue3-kawaii/components/cat/Cat.vue'
import CreditCard from '../components/vue3-kawaii/components/creditCard/CreditCard.vue'
import Ghost from '../components/vue3-kawaii/components/ghost/Ghost.vue'
import IceCream from '../components/vue3-kawaii/components/iceCream/IceCream.vue'
import Mug from '../components/vue3-kawaii/components/mug/Mug.vue'
import Planet from '../components/vue3-kawaii/components/planet/Planet.vue'
import SpeechBubble from '../components/vue3-kawaii/components/speechBubble/SpeechBubble.vue'

// import { GeistSans } from 'geist/font/sans'
// import { GeistMono } from 'geist/font/mono'

export default defineAppSetup(({ app, router }) => {
  app.component('CreditScroll', CreditScroll)
  app.component('qrcode', QrcodeVue)
  app.component('bubble', Bubble)
  app.component('stickynote', StickyNote)
  app.component('BackPack', Backpack)
  app.component('Browser', Browser)
  app.component('Cat', Cat)
  app.component('CreditCard', CreditCard)
  app.component('Ghost', Ghost)
  app.component('IceCream', IceCream)
  app.component('Mug', Mug)
  app.component('Planet', Planet)
  app.component('SpeechBubble', SpeechBubble)
  // Vue App
  //   app.component('Cite', Cite)
  //   app.use(courseInfoPlugin)
})
