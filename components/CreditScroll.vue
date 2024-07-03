<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { onSlideEnter } from '@slidev/client'

const props = defineProps({
  speed: {
    default: 0.5,
  },
  loop: {
    default: true,
  },
})

const containerRef = ref(null)
const scrollPosition = ref(0)
const isScrolling = ref(false)

let animationFrameId = null

const scroll = () => {
  if (!isScrolling.value) return

  const container = containerRef.value
  const content = container.firstElementChild

  scrollPosition.value -= props.speed

  if (Math.abs(scrollPosition.value) >= 520) {
    if (props.loop) {
      console.log('resetting loop', props.loop)
      resetScroll()
      scroll()
      animationFrameId = requestAnimationFrame(scroll)
    } else {
      stopScrolling()
      return
    }
  } else {
    animationFrameId = requestAnimationFrame(scroll)
  }
}

const startScrolling = () => {
  if (!isScrolling.value) {
    isScrolling.value = true
    animationFrameId = requestAnimationFrame(scroll)
  }
}

const stopScrolling = () => {
  if (isScrolling.value) {
    isScrolling.value = false
    cancelAnimationFrame(animationFrameId)
  }
}

const resetScroll = () => {
  isScrolling.value = false
  if (containerRef.value) {
    scrollPosition.value = 520 //containerRef.value.offsetHeight * 2.5
  }
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
}

onMounted(() => {
  resetScroll()
})

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
})

// Reset scrolling when entering the slide
onSlideEnter(() => {
  console.log('onSlideEnter')
  resetScroll()
  console.log('starting scrolling')
  startScrolling()
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
