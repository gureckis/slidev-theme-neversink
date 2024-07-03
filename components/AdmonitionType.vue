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
  <Admonition :title="admontype.title" :color="admontype.color" :icon="admontype.icon">
    <slot></slot>
  </Admonition>
</template>

<style scoped>
.markdown-alert {
  padding: 8px 16px;
  margin: 10px;
  margin-left: 0;
  margin-top: 2px;
  margin-bottom: 5px;
  color: inherit;
  border-radius: 6px;
  font-size: 0.75em;
  width: 100%;
}

.markdown-alert p {
  margin: 0;
  margin-bottom: 2px;
}
.markdown-alert > :first-child {
  margin-top: 0;
}
.markdown-alert > :last-child {
  margin-bottom: 0;
}
.markdown-alert.markdown-alert-custom {
  background-color: var(--neversink-admon-bg-color);
  color: var(--neversink-admon-text-color);
  border: 1px solid var(--neversink-admon-border-color);
  border-left: 6px solid var(--neversink-admon-border-color);
}
.markdown-alert .markdown-alert-title-custom {
  display: flex;
  align-items: center;
  position: relative;
  font-weight: 700;
  color: var(--neversink-admon-text-color);
}
@media print {
  .markdown-alert .markdown-alert-title:before {
    display: none;
  }
}
</style>
