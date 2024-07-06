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
    default:
      'The art of seeing things is not something that may be conveyed in rules and percepts; it is a matter vital in the eye and ear, yea, in the mind and sould, of which these are the organs.  I have as little hope of being able to tell the reader how to see things as I would have trying to tell him how to fall in love or to enjoy his dinner.',
  },
  author: {
    default: 'John Burroughs',
  },
  quotesize: {
    default: 'text-2xl',
  },
  authorsize: {
    default: 'text-l',
  },
})

const colorscheme = computed(() => {
  return `neversink-${props.color}-scheme`
})
</script>
<template>
  <div class="slidev-layout quote">
    <div class="my-auto">
      <div class="p-5 w-95% ml-auto mr-auto rounded-lg border-1px quotecolor" :class="colorscheme">
        <div class="leading-normal" :class="quotesize">
          "{{ quote }}"<br />
          <div class="quote_author" :class="authorsize">- {{ author }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.quotecolor {
  background-color: var(--neversink-bg-color);
  color: var(--neversink-text-color);
  border-color: var(--neversink-border-color);
  /* add a drop shadow */
  box-shadow: 5px 4px 6px rgba(0, 0, 0, 0.1);
}

.quote_author {
  font-family: var(--neversink-title-font);
  font-weight: 400;
  text-align: right;
}

.slidev-layout.quote {
  margin-top: 2em;
  padding-left: 1em;
}

.slidev-layout.quote p {
  font-size: 1.5em;
  font-family: var(--neversink-quote-font);
  line-height: 1.2em;
  font-weight: 400;
  text-align: left;
}
</style>
