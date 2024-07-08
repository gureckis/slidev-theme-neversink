<script setup lang="js">
import { computed } from 'vue'
//import { handleBackground } from '../layoutHelper'

const props = defineProps({
  // background: {
  //   default: '',
  // },
  color: {
    default: 'white',
  },
})

//const style = computed(() => handleBackground(props.background, true))

const colorscheme = computed(() => {
  return `neversink-${props.color}-scheme`
})
</script>

<template>
  <div class="slidev-layout cover h-full slidecolor" :class="colorscheme">
    <div class="my-auto w-full">
      <slot />
    </div>
    <div class="absolute bottom-10">
      <slot name="note" />
    </div>
  </div>
</template>

<style>
/* cover slide type */

.slidev-layout.cover {
  font-family: var(--neversink-main-font);
  font-weight: 300;
}

.slidev-layout.cover strong {
  font-weight: 500;
}

.slidev-layout.cover h1 {
  font-family: var(--neversink-title-font);
  font-weight: 500;
  font-size: 3em;
  line-height: normal;
  margin-bottom: 0.9rem;
}

.slidev-layout.cover h2 {
  font-family: var(--neversink-title-font);
  font-weight: 500;
  font-size: 2.5em;
  line-height: normal;
  margin-bottom: 0.9rem;
}

.slidev-layout.cover h3 {
  font-family: var(--neversink-title-font);
  font-weight: 500;
  font-size: 1.9em;
  line-height: normal;
  margin-bottom: 0.9rem;
}

.slidev-layout.cover h1 + p {
  padding: 0;
  margin: 0;
  opacity: 1;
}

.slidev-layout.cover h2 + p {
  padding: 0;
  margin: 0;
  opacity: 1;
}

.slidev-layout.cover h3 + p {
  padding: 0;
  margin: 0;
  opacity: 1;
}

/* this is specific to this instance */
.slidev-layout.cover h1,
.slidev-layout.cover h2,
.slidev-layout.cover h3 {
  padding-bottom: 0.3em;
  border-bottom: 1px solid var(--neversink-highlight-color);
}
</style>
