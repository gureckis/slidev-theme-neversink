<script setup>
import { computed } from 'vue'
import paths from './ghostpaths.js'
import getUniqueId from '../../utils/getUniqueId.js'
import Face from '../common/face/Face.vue'
import Wrapper from '../common/wrapper/Wrapper.vue'

const props = defineProps({
  size: {
    type: Number,
    default: 240,
  },
  mood: {
    type: String,
    validator(val) {
      return ['sad', 'shocked', 'happy', 'blissful', 'lovestruck', 'excited', 'ko'].includes(val)
    },
    default: 'blissful',
  },
  color: {
    type: String,
    default: '#E0E4E8',
  },
})

const width = computed(() => props.size * 0.77)
const uniqueId = computed(() => getUniqueId())
</script>

<template>
  <Wrapper>
    <svg
      :width="width"
      :height="size"
      viewBox="0 0 130 168"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g id="kawaii-ghost">
        <g id="kawaii-ghost__body">
          <path :d="paths.shape" id="kawaii-ghost__shape" :fill="color" />
          <path :d="paths.shadow" id="kawaii-ghost__shadow" fill-opacity=".1" fill="#000000" />
        </g>
        <Face :mood="mood" transform="translate(34 57)" :uniqueId="uniqueId" />
      </g>
    </svg>
  </Wrapper>
</template>
