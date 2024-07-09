<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'info',
  },
  width: {
    type: String,
    default: '100%',
  },
})

const admontype = computed(() => {
  switch (props.type) {
    case 'important':
      return {
        icon: 'mdi-message-alert-outline',
        title: 'Important',
        color: 'purple-light',
      }
    case 'tip':
      return {
        icon: 'mdi-lightbulb-outline',
        title: 'Tip',
        color: 'emerald-light',
      }
    case 'warning':
      return {
        icon: 'mdi-alert-outline',
        title: 'Warning',
        color: 'amber-light',
      }
    case 'caution':
      return {
        icon: 'mdi-alert-octagon-outline',
        title: 'Caution',
        color: 'red-light',
      }
    case 'info':
    default:
      return {
        icon: 'mdi-information-variant-circle-outline',
        title: 'Note',
        color: 'sky-light',
      }
  }
})
</script>

<template>
  <Admonition :title="admontype.title" :color="admontype.color" :icon="admontype.icon" :width="width">
    <slot></slot>
  </Admonition>
</template>
