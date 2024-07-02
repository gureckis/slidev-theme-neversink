<script setup>
import { computed } from 'vue'
const props = defineProps({
  layout: {
    default: 'credits',
  },
  color: {
    default: 'light',
  },
})

const colorscheme = computed(() => {
  return `neversink-${props.color}-scheme`
})
</script>
<template>
  <div class="slidecolor slidev-layout full" :class="colorscheme">
    <div class="my-auto w-full h-full" >
        <Credits>
            <slot name="default"></slot>
        </Credits>
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
