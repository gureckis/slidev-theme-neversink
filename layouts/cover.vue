<script setup lang="js">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'

const props = defineProps({
  background: {
    default: '',
  },
  color: {
    default: 'white',
  },
})

const style = computed(() => handleBackground(props.background, true))

const linecolor = computed(() => {
  if (props.color === 'black') {
    return 'orange'
  }
  if (props.color === 'white') {
    return 'orange'
  }
  if (props.color === 'dark') {
    return 'orange'
  }
  if (props.color === 'light') {
    return 'border-amber-500'
  }
  if (props.color === 'navy') {
    return 'orange'
  }
  if (props.color === 'navy-light') {
    return 'orange'
  }

  if (props.color.includes('-light')) {
    // const parts = props.color.split('-')
    // return 'bg-' + parts[0] + '-100 text-' + parts[0] + '-500'
    return `#fff`
  } else {
    //return 'text-' + props.color + '-100 bg-' + props.color + '-500'
    return `#fff`
  }
})

const colorscheme = computed(() => {
  return `nyu-${props.color}-scheme`
})
</script>

<template>
  <div class="h-full coverstyle" :class="colorscheme">
    <div class="slidev-layout cover" :style="style" :class="linecolor">
      <div class="my-auto w-full coverr">
        <slot />
      </div>
      <div class="absolute bottom-10">
        <slot name="note" />
      </div>
    </div>
  </div>
</template>

<style>
.coverstyle {
  background-color: var(--nyu-bg-color);
  color: var(--nyu-text-color);
}
.coverr h1,
h2,
h3 {
  margin-bottom: 0.25em;
  margin-top: 0.2em;
  padding-top: 0;
}

.coverr h1 {
  padding-bottom: 0.2em;
}

.coverr h2 {
  padding-bottom: 0.5em;
}

.coverr h3 {
  padding-bottom: 0.5em;
  margin-bottom: 1rem;
}

.coverr h1,
h2,
h3 {
  /*@apply border-b-1 v-bind(linecolor);*/
  border-bottom: 1px solid v-bind(linecolor);
}
</style>
