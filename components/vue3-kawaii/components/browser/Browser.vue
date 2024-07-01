<script setup>
import { computed } from 'vue'
import paths from './browserpaths.js'
import getUniqueId from '../../utils/getUniqueId.js'
import Face from '../common/face/Face.vue'
import Wrapper from '../common/wrapper/Wrapper.vue'

const props = defineProps({
  size: {
    type: Number,
    default: 180,
  },
  mood: {
    type: String,
    validator(val) {
      return ['sad', 'shocked', 'happy', 'blissful', 'lovestruck', 'excited', 'ko'].includes(val)
    },
    default: 'ko',
  },
  color: {
    type: String,
    default: '#FDA7DC',
  },
})

const width = computed(() => props.size * 1.44)
const uniqueId = computed(() => getUniqueId())
</script>

<template>
  <Wrapper>
    <svg
      :width="width"
      :height="size"
      viewBox="0 0 200 139"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g id="kawaii-browser">
        <g id="kawaii-browser__body" fill-rule="nonzero">
          <path :d="paths.shape" id="kawaii-browser__shape" :fill="color" />
          <path :d="paths.shadow" id="kawaii-browser__shadow" fill="#121212" opacity=".1" />
          <g id="address-bar" transform="translate(.097)">
            <path :d="paths.addressBar" fill="#111" />
            <ellipse fill="#FFF" cx="168.855" cy="10.901" rx="3.4" ry="3.395" />
            <ellipse fill="#FFF" cx="180.074" cy="10.901" rx="3.4" ry="3.395" />
            <g id="address" transform="translate(12.654 5.47)" fill="#FFF">
              <rect x=".277" y=".163" width="145.775" height="10.563" rx="5.282" />
            </g>
          </g>
        </g>
        <Face :mood="mood" transform="translate(67 63)" :uniqueId="uniqueId" />
      </g>
    </svg>
  </Wrapper>
</template>
