<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { onSlideEnter, useSlideContext } from '@slidev/client'

const { $renderContext } = useSlideContext()
const props = defineProps({
  speed: {
    default: 0.5,
  },
  loop: {
    default: false,
  },
})

const containerRef = ref(null)
const scrollPosition = ref(0)
const isScrolling = ref(false)

let animationFrameId = null

const scroll = () => {
  scrollPosition.value -= props.speed
  if (Math.abs(scrollPosition.value) >= 550) {
    if (props.loop.value) {
      console.log('resetting loop', props.loop.value)
      resetScroll()
    } else {
      stopScrolling()
      return
    }
  } else {
    animationFrameId = requestAnimationFrame(scroll)
  }
}

const startScrolling = () => {
  animationFrameId = requestAnimationFrame(scroll)
}

const stopScrolling = () => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
}

const resetScroll = () => {
  scrollPosition.value = 480 //containerRef.value.offsetHeight * 2.5
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
}

onMounted(() => {
  console.log('mounted')
  // Reset scrolling when entering the slide
  onSlideEnter(() => {
    console.log('context ', $renderContext.value)
    if (['slide', 'presenter'].includes($renderContext.value)) {
      console.log('onSlideEnter')
      resetScroll()
      console.log('starting scrolling')
      startScrolling()
    }
  })
})

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
})
</script>

<template>
  <div class="scroll-container" ref="containerRef">
    <div class="scroll-content" :style="{ transform: `translateY(${scrollPosition}px)` }">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.scroll-container {
  height: 100vh; /* Use full viewport height */
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.scroll-content {
  position: absolute;
  width: 100%;
}
</style>
