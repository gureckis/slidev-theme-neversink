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

const colorscheme = computed(() => {
  return `neversink-${props.color}-scheme`
})
</script>
<template>
  <div class="slidev-layout full w-full h-full slidecolor" :class="colorscheme">
    <slot />
  </div>
</template>
