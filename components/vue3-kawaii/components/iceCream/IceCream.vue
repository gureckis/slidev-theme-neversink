<script setup>
import { computed } from 'vue'
import paths from './icecreampaths.js'
import getUniqueId from '../../utils/getUniqueId.js'
import Face from '../common/face/Face.vue'
import Wrapper from '../common/wrapper/Wrapper.vue'

const props = defineProps({
  size: {
    type: Number,
    default: 300,
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
    default: '#FDA7DC',
  },
})

const uniqueId = computed(() => getUniqueId())
</script>

<template>
  <Wrapper>
    <svg
      :width="size * 0.5"
      :height="size"
      viewBox="0 0 110 220"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g id="kawaii-iceCream">
        <g fill-rule="nonzero">
          <path :d="paths.stick" id="kawaii-iceCream__stick" fill="#FCCB7E" />
          <path :d="paths.shape" id="kawaii-iceCream__shape" :fill="color" />
          <path :d="paths.shadow" id="kawaii-iceCream__shadow" fill="#000000" opacity=".1" />
        </g>
        <Face :mood="mood" transform="translate(22.000000, 81.000000)" :uniqueId="uniqueId" />
      </g>
    </svg>
  </Wrapper>
</template>
