<script setup>
import { computed } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: 'amber-light',
  },
  textAlign: {
    type: String,
    default: 'left',
  },
  width: {
    type: String,
    default: '180px',
  },
  title: {
    type: String,
    default: '',
  },
})

const colorscheme = computed(() => {
  return `nyu-${props.color}-scheme`
})

const stickyClasses = computed(() => {
  return [colorscheme.value, 'sticky-note']
})

const stickyStyles = computed(() => ({
  '--sticky-color': 'var(--nyu-bg-color)',
  '--border-color': 'var(--nyu-fg-color)',
  '--text-color': 'var(--nyu-text-color)',
  '--text-align': props.textAlign,
  '--width': props.width,
}))
</script>

<template>
  <div :class="stickyClasses" :style="stickyStyles">
    <template v-if="props.title !== ''"
      ><strong>{{ props.title }}</strong></template
    >
    <slot></slot>
  </div>
</template>

<style scoped>
.sticky-note {
  width: var(--width);
  height: var(--width);
  background-color: var(--sticky-color, yellow);
  text-align: var(--text-align, left);
  max-width: 100%;
  padding: 1em;
  position: relative;
  box-shadow: 5px 4px 6px rgba(0, 0, 0, 0.1);
  font-weight: 400;
  font-size: 0.8rem;
  color: var(--text-color);
  border: 0.4px solid var(--border-color);
}
.sticky-note strong {
  display: block;
  font-size: 0.8rem;
  font-family: monospace;
  letter-spacing: 0em;
  word-spacing: -0.3em;
}
</style>
