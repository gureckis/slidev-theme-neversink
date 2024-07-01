<script setup>
import { computed } from 'vue'
import paths from './mugpaths.js'
import getUniqueId from '../../utils/getUniqueId.js'
import Face from '../common/face/Face.vue'
import Wrapper from '../common/wrapper/Wrapper.vue'

const props = defineProps({
  size: {
    type: Number,
    default: 170,
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
    default: '#A6E191',
  },
})

const width = computed(() => props.size * 1.5)
const uniqueId = computed(() => getUniqueId())
</script>

<template>
  <Wrapper>
    <svg
      :width="width"
      :height="size"
      viewBox="0 0 172 115"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g id="kawaii-mug">
        <g id="kawaii-mug__body" fill-rule="nonzero">
          <path :d="paths.shape" id="kawaii-mug__shape" :fill="color" />
          <path :d="paths.shadow" id="kawaii-mug__shadow" fill="#000" opacity=".1" />
        </g>
        <Face :mood="mood" transform="translate(71 42)" :uniqueId="uniqueId" />
      </g>
    </svg>
  </Wrapper>
</template>
