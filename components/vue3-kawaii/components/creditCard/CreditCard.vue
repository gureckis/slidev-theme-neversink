<script setup>
import { computed } from 'vue'
import paths from './creditcardpaths.js'
import getUniqueId from '../../utils/getUniqueId.js'
import Face from '../common/face/Face.vue'
import Wrapper from '../common/wrapper/Wrapper.vue'

const props = defineProps({
  size: {
    type: Number,
    default: 200,
  },
  mood: {
    type: String,
    default: 'blissful',
    validator(val) {
      return ['sad', 'shocked', 'happy', 'blissful', 'lovestruck', 'excited', 'ko'].includes(val)
    },
  },
  color: {
    type: String,
    default: '#83D1FB',
  },
})

const uniqueId = computed(() => getUniqueId())
</script>
<template>
  <Wrapper>
    <svg
      :width="size * 1.38"
      :height="size"
      viewBox="0 0 198 143"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="kawaii-creditCard">
        <g id="kawaii-creditCard__body" fillRule="nonzero">
          <path :d="paths.shape" id="kawaii-creditCard__shape" :fill="color" />
          <path :d="paths.shadow" id="kawaii-creditCard__shadow" fill="#000" opacity=".1" />
          <path id="kawaii-creditCard__stripe" fill="#000" d="M0 17h198v27H0z" />
        </g>
        <Face :mood="mood" transform="translate(66 73)" :uniqueId="uniqueId" />
      </g>
    </svg>
  </Wrapper>
</template>
