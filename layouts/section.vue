<script setup lang="js">
import { computed } from 'vue'

const props = defineProps({
  color: {
    default: 'white',
  },
})

const colorscheme = computed(() => {
  return `neversink-${props.color}-scheme`
})
</script>

<template>
  <div class="slidev-layout section slidecolor" :class="colorscheme">
    <div class="my-auto">
      <slot />
    </div>
  </div>
</template>

<style>
.slidev-layout.section {
  display: grid;
  height: 100%;
}

.slidev-layout.section hr {
  border: 0;
  border-top: 1px solid var(--neversink-border-color);
  margin: 0;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}

/* cover slide type */
.slidev-layout.section h1 {
  font-family: var(--neversink-title-font);
  font-weight: 500;
  font-size: 2.8em;
  padding-bottom: 0.3rem;
  line-height: normal;
}

.slidev-layout.section h2 {
  font-family: var(--neversink-title-font);
  font-weight: 500;
  font-size: 2.5em;
  line-height: normal;
}

.slidev-layout.section h3 {
  font-family: var(--neversink-title-font);
  font-weight: 500;
  font-size: 1.9em;
  line-height: normal;
}

.slidev-layout.section {
  font-family: var(--neversink-main-font);
  font-weight: 300;
}

.slidev-layout.section strong {
  font-weight: 500;
}

.slidev-layout.section h1 + p {
  padding: 0;
  margin: 0;
  opacity: 1;
}

.slidev-layout.section h2 + p {
  padding: 0;
  margin: 0;
  opacity: 1;
}

.slidev-layout.section h3 + p {
  padding: 0;
  margin: 0;
  opacity: 1;
}
</style>
