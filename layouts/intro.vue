<script setup lang="js">
import { computed } from 'vue'

const props = defineProps({
  color: {
    default: 'white',
  },
})

const colorscheme = computed(() => {
  return `neversink-${props.color}-scheme`
})
</script>

<template>
  <div class="slidev-layout intro slidecolor" :class="colorscheme">
    <div class="my-auto">
      <slot />
    </div>
    <div class="absolute bottom-10">
      <slot name="note" />
    </div>
  </div>
</template>

<style>
/* intro slide type */

.slidev-layout.intro {
  font-family: var(--neversink-main-font);
  font-weight: 300;
}

.slidev-layout.intro strong {
  font-weight: 500;
}
.slidev-layout.intro h1 {
  font-family: var(--neversink-title-font);
  font-weight: 500;
  font-size: 3em;
  line-height: 5rem;
}

.slidev-layout.intro h2 {
  font-family: var(--neversink-title-font);
  font-weight: 500;
  font-size: 2.5em;
  line-height: 5rem;
}

.slidev-layout.intro h3 {
  font-family: var(--neversink-title-font);
  font-weight: 500;
  font-size: 1.9em;
  line-height: 5rem;
}

.slidev-layout.intro h1 + p {
  padding: 0;
  margin: 0;
  opacity: 1;
}

.slidev-layout.intro h2 + p {
  padding: 0;
  margin: 0;
  opacity: 1;
}

.slidev-layout.intro h3 + p {
  padding: 0;
  margin: 0;
  opacity: 1;
}
</style>
