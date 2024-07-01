<script setup>
import { computed } from 'vue'
import paths from './speechbubblepaths.js'
import getUniqueId from '../../utils/getUniqueId.js'
import Face from '../common/face/Face.vue'
import Wrapper from '../common/wrapper/Wrapper.vue'

const props = defineProps({
  size: {
    type: Number,
    default: 150,
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
    default: '#83D1FB',
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
        <path :d="paths.shape" id="kawaii-speechBubble__shape--path" />
        <path :d="paths.shadow" id="kawaii-speechBubble__shadow--path" />
      </defs>
      <g id="Kawaii-speechBubble">
        <g id="Kawaii-speechBubble__body">
          <mask fill="#fff">
            <use xlink:href="#kawaii-speechBubble__shape--path" />
          </mask>
          <use id="Kawaii-speechBubble__shape" :fill="color" xlink:href="#kawaii-speechBubble__shape--path" />
          <mask fill="#fff">
            <use xlink:href="#kawaii-speechBubble__shadow--path" />
          </mask>
          <use
            id="Kawaii-speechBubble__shadow"
            fill="#000"
            opacity=".1"
            xlink:href="#kawaii-speechBubble__shadow--path"
          />
        </g>
        <Face :mood="mood" transform="translate(34 57)" :uniqueId="uniqueId" />
      </g>
    </svg>
  </Wrapper>
</template>
