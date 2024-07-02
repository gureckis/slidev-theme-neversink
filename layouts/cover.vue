<script setup lang="js">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'

const props = defineProps({
  background: {
    default: '',
  },
  color: {
    default: 'white',
  },
})

const style = computed(() => handleBackground(props.background, true))


const colorscheme = computed(() => {
  return `neversink-${props.color}-scheme`
})
</script>

<template>
  <div class="h-full slidecolor" :class="colorscheme">
    <div class="slidev-layout cover" :style="style" >
      <div class="my-auto w-full coverr">
        <slot />
      </div>
      <div class="absolute bottom-10">
        <slot name="note" />
      </div>
    </div>
  </div>
</template>

<style>
.coverr h1,
.coverr h2,
.coverr h3 {
  margin-bottom: 0.25em;
  margin-top: 0.2em;
  padding-top: 0;
}

.coverr h1 {
  padding-bottom: 0.2em;
}

.coverr h2 {
  padding-bottom: 0.5em;
}

.coverr h3 {
  padding-bottom: 0.5em;
  margin-bottom: 1rem;
}

.coverr h1,
.coverr h2,
.coverr h3 {
  /*@apply border-b-1 v-bind(linecolor);*/
  border-bottom: 1px solid var(--neversink-highlight-color);
}
</style>
