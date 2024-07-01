<script setup lang="ts">
import { computed, useSlots } from 'vue'

const slots = useSlots()

const props = defineProps({
  layout: {
    default: 'side-title',
  },
  rowheight: {
    default: 'is-one-half',
  },
  colwidth: {
    default: 'is-one-half',
  },
  color: {
    default: 'light,white,white,light',
  },
  align: {
    default: 'lt-lt-lt-lt',
  },
})

function compute_size_col(title) {
  return { l: 'col-span-' + title, r: 'col-span-' + (12 - title) }
}

function compute_size_row(title) {
  return { t: 'row-span-' + title, b: 'row-span-' + (12 - title) }
}

const colw = computed(() => {
  switch (props.colwidth) {
    case 'is-1':
    case 'is-1-11':
      return compute_size_col(1)
    case 'is-2':
    case 'is-2-10':
      return compute_size_col(2)
    case 'is-3':
    case 'is-3-9':
    case 'is-one-quarter':
      return compute_size_col(3)
    case 'is-4':
    case 'is-4-8':
    case 'is-one-third':
      return compute_size_col(4)
    case 'is-5':
    case 'is-5-7':
      return compute_size_col(5)
    case 'is-6':
    case 'is-6-6':
    case 'is-two-quarters':
    case 'is-two-fourths':
    case 'is-one-half':
    case 'is-half':
      return compute_size_col(6)
    case 'is-7':
    case 'is-7-5':
      return compute_size_col(7)
    case 'is-8':
    case 'is-8-4':
    case 'is-two-thirds':
      return compute_size_col(8)
    case 'is-9':
    case 'is-9-3':
    case 'is-three-quarters':
    case 'three-fourths':
      return compute_size_col(9)
    case 'is-10':
    case 'is-10-2':
      return compute_size_col(10)
    case 'is-11':
    case 'is-11-1':
      return compute_size_col(11)
    default:
      return 'error'
  }
})

const rowh = computed(() => {
  switch (props.rowheight) {
    case 'is-1':
    case 'is-1-11':
      return compute_size_row(1)
    case 'is-2':
    case 'is-2-10':
      return compute_size_row(2)
    case 'is-3':
    case 'is-3-9':
    case 'is-one-quarter':
      return compute_size_row(3)
    case 'is-4':
    case 'is-4-8':
    case 'is-one-third':
      return compute_size_row(4)
    case 'is-5':
    case 'is-5-7':
      return compute_size_row(5)
    case 'is-6':
    case 'is-6-6':
    case 'is-two-quarters':
    case 'is-two-fourths':
    case 'is-one-half':
    case 'is-half':
      return compute_size_row(6)
    case 'is-7':
    case 'is-7-5':
      return compute_size_row(7)
    case 'is-8':
    case 'is-8-4':
    case 'is-two-thirds':
      return compute_size_row(8)
    case 'is-9':
    case 'is-9-3':
    case 'is-three-quarters':
    case 'three-fourths':
      return compute_size_row(9)
    case 'is-10':
    case 'is-10-2':
      return compute_size_row(10)
    case 'is-11':
    case 'is-11-1':
      return compute_size_row(11)
    default:
      return 'error'
  }
})

function compute_alignment(val) {
  switch (val) {
    case 'ct':
      return 'center top'
    case 'cm':
      return 'center middle'
    case 'cb':
      return 'center bottom'
    case 'lt':
      return 'left top'
    case 'lm':
      return 'left middle'
    case 'lb':
      return 'left bottom'
    case 'rt':
      return 'right top'
    case 'rm':
      return 'right middle'
    case 'rb':
      return 'right bottom'
    case 'c':
      return 'center top'
    case 'l':
      return 'left top'
    case 'r':
      return 'right top'
    default:
      return 'error'
  }
}

const alignment = computed(() => {
  const parts = props.align.split('-')
  return { l: compute_alignment(parts[0]), r: compute_alignment(parts[1]) }
})

function color(code) {
  if (code === 'black') {
    return 'text-white bg-black'
  }
  if (code === 'white') {
    return 'text-black bg-white'
  }
  if (code === 'dark') {
    return 'text-gray-100 bg-gray-800'
  }
  if (code === 'light') {
    return 'text-gray-800 bg-gray-100'
  }

  if (code.includes('-light')) {
    const parts = code.split('-')
    return 'bg-' + parts[0] + '-100 text-' + parts[0] + '-500'
  } else {
    return 'text-' + code + '-100 bg-' + code + '-500'
  }
}

const cellcolor = computed(() => {
  const parts = props.color.split(',')
  return {
    tl: color(parts[0]),
    tr: color(parts[1]),
    bl: color(parts[2]),
    br: color(parts[3]),
  }
})
</script>
<template>
  <div class="grid grid-cols-12 grid-rows-12 w-full h-full auto-rows-fr">
    <div class="slidev-layout default w-full h-full" :class="colw.l + ' ' + rowh.t + ' ' + cellcolor.tl">
      <slot name="top-left"></slot>
    </div>
    <div class="slidev-layout default w-full h-full" :class="colw.r + ' ' + rowh.t + ' ' + cellcolor.tr">
      <slot name="top-right"></slot>
    </div>
    <div class="slidev-layout default w-full h-full" :class="colw.l + ' ' + rowh.b + ' ' + cellcolor.bl">
      <slot name="bottom-left"></slot>
    </div>
    <div class="slidev-layout default w-full h-full" :class="colw.r + ' ' + rowh.b + ' ' + cellcolor.br">
      <slot name="bottom-right"></slot>
    </div>
  </div>
</template>
