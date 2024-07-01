<script setup>
import { computed } from 'vue'

const props = defineProps({
  style: {
    type: Object,
    default: () => ({}),
  },
})

const wrapperStyle = computed(() => ({
  width: 'fit-content',
  display: 'inline-block',
  paddingLeft: '5px',
  paddingRight: '5px',
  ...props.style,
}))
</script>

<template>
  <div :style="wrapperStyle">
    <slot></slot>
  </div>
</template>
