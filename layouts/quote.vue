<script setup>
import { computed } from 'vue'
const props = defineProps({
  layout: {
    default: 'quote',
  },
  color: {
    default: 'light',
  },
  quote: {
    default: "Swerving between emotions, I know we got real issues, can't given in so easily",
  },
  author: {
    default: 'Drake',
  },
  quotesize: {
    default: 'text-4xl',
  },
  authorsize: {
    default: 'text-2xl',
  },
})

const colorscheme = computed(() => {
  return `neversink-${props.color}-scheme`
})
</script>
<template>
  <div class="slidev-layout quote">
    <div class="my-auto">
      <div class="p-5 w-95% ml-auto mr-auto rounded-lg border-l-4px border-1px quote" :class="colorscheme">
        <div class="leading-normal" :class="quotesize">
          "{{ quote }}"<br />
          <div class="quote_author" :class="authorsize">- {{ author }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.quote {
  background-color: var(--neversink-bg-color);
  color: var(--neversink-text-color);
  border-color: var(--neversink-border-color);
}
</style>
