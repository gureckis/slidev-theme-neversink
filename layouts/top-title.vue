<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { compute_alignment, compute_column_size } from '../layoutHelper'

const slots = useSlots()

const props = defineProps({
  color: {
    default: 'light',
  },
  align: {
    default: 'l',
  },
})

const alignment = computed(() => {
  return compute_alignment(props.align)
})

const colorscheme = computed(() => {
  return `neversink-${props.color}-scheme`
})
</script>
<template>
  <div v-if="alignment == 'error'" class="slidev-layout default error">
    <span class="ns-c-warning"><b>Error</b>: invalid layout params.</span>
    <hr />
    <p>
      There are two parameters: <code>color</code> <code>align</code>. Currently:
      <code>color: {{ props.color }}</code> and <code>align: {{ props.align }}</code
      >.
    </p>
    <p>
      The "slots" of the page are <code>:: title ::</code>, <code>:: content ::</code>, and the implicit default slot
    </p>

    <p>
      The <code>align</code> parameter determines how the title is aligned. The letter is (<code>c</code> for center,
      <code>l</code> for left, <code>r</code> for right).
    </p>

    <p>The <code>color</code> parameter determines color of the title.</p>
  </div>
  <template v-else>
    <div class="flex flex-col h-full w-full">
      <div class="w-full h-fit min-h-13 pt-2 pb-2 slidecolor" :class="colorscheme">
        <div class="slidev-layout toptitlebar p-0 pt-0 ml-6 mr-6 mt-auto mb-auto" :class="alignment">
          <slot name="title" />
        </div>
      </div>
      <div class="slidev-layout toptitlecontent h-fit w-full">
        <slot name="content" />
      </div>
      <div v-if="$slots.default" class="slidev-layout default h-fit w-full">
        <slot name="default" />
      </div>
    </div>
  </template>
</template>

<style>
/* the style for this is coming from top-title-two-cols.vue*/
</style>
