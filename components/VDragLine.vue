<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import type { DragElementMarkdownSource } from '@slidev/client/composables/useDragElements.ts'
import { useDragElement } from '@slidev/client/composables/useDragElements.ts'
import Line from './Line.vue'

const props = defineProps<{
  pos?: string
  markdownSource?: DragElementMarkdownSource
  width?: number | string
  color?: string
}>()

const { dragId, mounted, unmounted, startDragging, stopDragging, x0, y0, width, height } = useDragElement(
  null,
  props.pos ?? '100,100,300,300',
  props.markdownSource,
  true
)

onMounted(mounted)
onUnmounted(unmounted)

const x1 = computed(() => x0.value - width.value / 2)
const y1 = computed(() => y0.value - height.value / 2)
const x2 = computed(() => x0.value + width.value / 2)
const y2 = computed(() => y0.value + height.value / 2)
</script>

<template>
  <Line
    :x1
    :y1
    :x2
    :y2
    :data-drag-id="dragId"
    :width="props.width"
    :color="props.color"
    @dblclick="startDragging"
    @click-outside="stopDragging"
  />
</template>
