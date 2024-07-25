<script setup>
import { computed } from 'vue'
const props = defineProps({
  shape: {
    type: String,
    default: 's-s-2-10',
  },
  color: {
    type: String,
    default: 'white',
  },
  size: {
    type: String,
    default: '150px', // Default width in pixels
  },
  custom: {
    // add a custom class if you want
    type: String,
    default: '',
  },
})

// -
// - s-d-3-10
// color: scheme
// width:

// - square vs rounded vs full
// - dashed, solid, no border
// - border width
// - fill opacity

// - fill color
// - border color
// - size

const size = computed(() => {
  return props.size
})
const borderwidth = computed(() => {
  return props.shape.split('-')[2] + 'px'
})
const borderstyle = computed(() => {
  let parts = props.shape.split('-')
  if (parts[1] == 'd') {
    return 'dashed'
  } else if (parts[1] == 'o') {
    return 'dotted'
  } else if (parts[1] == 's') {
    return 'solid'
  } else {
    return 'none'
  }
})

const style = computed(() => {
  let s = ''
  let parts = props.shape.split('-')
  console.log(parts)
  console.log(parts[0])
  // no validation currently!

  // square versus rounded vs full
  if (parts[0] == 'r') {
    s += 'rounded-lg '
  } else if (parts[0] == 'f') {
    s += 'rounded-full '
  } else {
    s += 'rounded-none '
  }

  // color scheme
  s += `neversink-${props.color}-scheme binder `

  // add custom class
  s += props.custom

  return s
})

const trans = computed(() => {
  const val = parseInt(props.shape.split('-')[3])
  return `${val}%`
})
</script>
<template>
  <div :class="style"><slot></slot></div>
</template>
<style scoped>
.binder {
  --new-color: color-mix(in srgb, var(--neversink-bg-color), v-bind(trans) transparent);
  border-color: var(--neversink-border-color);
  background-color: var(--new-color);
  color: var(--neversink-text-color);
  width: v-bind(size);
  height: v-bind(size);
  border-width: v-bind(borderwidth);
  border-style: v-bind(borderstyle);
}
</style>
