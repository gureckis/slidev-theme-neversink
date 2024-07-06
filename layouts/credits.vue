<script setup>
import { computed } from 'vue'
const props = defineProps({
  layout: {
    default: 'credits',
  },
  color: {
    default: 'light',
  },
  speed: {
    default: 1.0,
  },
  loop: {
    default: false,
  },
})

const colorscheme = computed(() => {
  return `neversink-${props.color}-scheme`
})
</script>
<template>
  <div class="slidecolor slidev-layout full" :class="colorscheme">
    <div class="my-auto w-full h-full">
      <CreditScroll :speed="props.speed" :loop="props.loop">
        <slot name="default"></slot>
      </CreditScroll>
    </div>
  </div>
</template>

<style scoped>
.quote {
  background-color: var(--neversink-bg-color);
  color: var(--neversink-text-color);
  border-color: var(--neversink-border-color);
}
</style>
