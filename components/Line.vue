<!--

Simple line

<Line x1="10" y1="20" x2="100" y2="200" color="green" width="3" />

<Line v-bind="{ x1:10, y1:10, x2:200, y2:200 }"/>

-->

<script setup>
import { ref, computed } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { resolveColor } from '../layoutHelper'

const props = defineProps({
  x1: {
    type: [Number, String],
    default: 100,
  },
  y1: {
    type: [Number, String],
    default: 100,
  },
  x2: {
    type: [Number, String],
    default: 100,
  },
  y2: {
    type: [Number, String],
    default: 100,
  },
  width: {
    type: [Number, String],
    default: 2, // Default width in pixels
  },
  color: {
    type: String,
    default: 'black', // actually it is black
  },
})

const emit = defineEmits(['dblclick', 'clickOutside'])
const colorscheme = computed(() => {
  return `neversink-${props.color}-scheme`
})

const clickArea = ref()
onClickOutside(clickArea, () => emit('clickOutside'))
</script>

<template>
  <svg class="absolute left-0 top-0" :width="Math.max(+x1, +x2) + 50" :height="Math.max(+y1, +y2) + 50">
    <line :x1 :y1 :x2 :y2 class="cls-1" :class="colorscheme" :stroke-width="width || 2" @dblclick="emit('dblclick')" />
    <line
      ref="clickArea"
      :x1
      :y1
      :x2
      :y2
      stroke="transparent"
      stroke-linecap="round"
      :stroke-width="20"
      @dblclick="emit('dblclick')"
    />
  </svg>
</template>
<style scoped>
.cls-1 {
  stroke: var(--neversink-bg-color);
}
</style>
