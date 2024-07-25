<script setup>
import { computed } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: 'black',
  },
  width: {
    type: String,
    default: '140px', // Default width in pixels
  },
})

const colorscheme = computed(() => {
  return `neversink-${props.color}-scheme`
})
</script>

<template>
  <svg viewBox="0 0 196 73" :width="width">
    <path
      class="st0"
      :class="colorscheme"
      d="M171.2,37.2c-12.8,0-25.6-0.9-38.3,0.2c-38.7,3.1-77.3,5.6-116.1,4.8c-2.5,0-5.1,0.4-7.5-0.1
	c-1.7-0.4-3.2-1.9-4.8-2.9c1.6-1.3,3.1-3.6,4.8-3.7c7-0.4,14-0.2,21-0.2c14.6,0,29.2,0.4,43.9,0c13.1-0.4,26.2-1.5,39.3-2.4
	c18.2-1.3,36.4-2.7,54.6-4c0.4,0,0.8-0.3,1.8-0.6c-5.6-5.8-12.3-8-19.5-9.4c-1.3-0.3-2.6-0.5-3.8-0.9c-3.5-1.1-5.7-3.4-4.5-7.1
	c1.2-3.7,4.6-3.7,7.5-2.5c7.4,2.9,14.8,5.9,22,9.2c4.4,2,8.6,4.4,12.7,6.9c4.6,2.8,5.1,6.7,0.9,10.1c-7.1,5.6-14.5,10.8-21.6,16.4
	c-5.2,4.1-9.9,8.7-15,12.8c-1.6,1.3-3.8,1.7-5.7,2.5c0-2.4-1-5.7,0.2-7c4.3-4.6,9.1-8.7,14-12.6C161.8,43.1,166.8,40.1,171.2,37.2z"
    />
  </svg>
</template>

<style scoped>
.st0 {
  fill: var(--neversink-bg-color);
}
</style>
