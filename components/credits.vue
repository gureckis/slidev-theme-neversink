<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { onSlideEnter } from '@slidev/client'
const containerRef = ref(null)
const scrollPosition = ref(0)
const scrollSpeed = 0.5 // Adjust this value to change scroll speed
const isScrolling = ref(false)

let animationFrameId = null

const scroll = () => {
  if (!isScrolling.value) return

  const container = containerRef.value
  const content = container.firstElementChild

  scrollPosition.value -= scrollSpeed

  if (Math.abs(scrollPosition.value) >= 520) {
    //scrollPosition.value = container.offsetHeight * 1.5
    resetScroll()
  }

  animationFrameId = requestAnimationFrame(scroll)
}

const startScrolling = () => {
  if (!isScrolling.value) {
    isScrolling.value = true
    animationFrameId = requestAnimationFrame(scroll)
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
  resetScroll()
  console.log('starting scrolling')
  startScrolling()
})
</script>

<template>
  <div class="scroll-container" ref="containerRef" @click="startScrolling">
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
