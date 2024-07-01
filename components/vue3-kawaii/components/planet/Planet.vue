<script setup>
import { computed } from 'vue'
import paths from './planetpaths.js'
import getUniqueId from '../../utils/getUniqueId.js'
import Face from '../common/face/Face.vue'
import Wrapper from '../common/wrapper/Wrapper.vue'

const props = defineProps({
  size: {
    type: Number,
    default: 190,
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
    default: '#FCCB7E',
  },
})

const uniqueId = computed(() => getUniqueId())
</script>

<template>
  <Wrapper>
    <svg
      :width="size"
      :height="size"
      version="1.1"
      viewBox="0 0 134 134"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path :d="paths.shape" id="kawaii-planet__shape--path" />
        <path :d="paths.shadow" id="kawaii-planet__shadow--path" />
      </defs>
      <g id="kawaii-planet">
        <g id="kawaii-planet__body">
          <mask id="mask-2" fill="#fff">
            <use xlink:href="#kawaii-planet__shape--path" />
          </mask>
          <use id="kawaii-planet__shape" :fill="color" xlink:href="#kawaii-planet__shape--path" />
          <mask id="mask-4" fill="#fff">
            <use xlink:href="#kawaii-planet__shadow--path" />
          </mask>
          <use id="kawaii-planet__shadow" fill="#000000" opacity=".1" xlink:href="#kawaii-planet__shadow--path" />
        </g>
        <Face :mood="mood" transform="translate(34 57)" :uniqueId="uniqueId" />
      </g>
    </svg>
  </Wrapper>
</template>
