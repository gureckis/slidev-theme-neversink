/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: 'slack-dark',
      light: 'snazzy-light',
    },
    transformers: [
      // ...
    ],
  }
})
