<script setup lang="js">
import { computed } from 'vue'
import { compute_alignment, compute_column_size } from '../layoutHelper'

const props = defineProps({
  columns: {
    default: 'is-one-half',
  },
  align: {
    default: 'lt-lt',
  },
  color: {
    default: 'white',
  },
})

const alignment = computed(() => {
  const parts = props.align.split('-')

  return { l: compute_alignment(parts[0]), r: compute_alignment(parts[1]) }
})

const colwidth = computed(() => compute_column_size(props.columns))

const colorscheme = computed(() => {
  return `neversink-${props.color}-scheme`
})
</script>

<!-- default.vue -->
<template>
  <div
    v-if="colwidth == 'error' || alignment.l == 'error' || alignment.r == 'error'"
    class="slidev-layout default error"
  >
    <span class="ns-c-warning"><b>Error</b>: invalid layout params.</span>
    <hr />
    <p>
      There are two parameters: <code>columns</code> and <code>align</code>. Currently:
      <code>columns: {{ props.columns }}</code> and <code>align: {{ props.align }}</code
      >.
    </p>
    <p>
      Options for <code>columns</code> are divided into 12 column units. So with <code>columns: is-1-11</code> the left
      column is 1/12 wide and the the right columns is 11/12 wide. The component admits a short had of only specifying
      the left column (<code>columns: is-1</code> does the same thing). In addition there are short hands like
      <code>columns: is-one-quarter</code> which resolves to <code>is-3-9</code>, etc...
    </p>
    <p>
      Here are a bunch of examples:
      <code>
        is-1, is-2, is-3, is-4, is-5, is-6, is-7, is-8, is-9, is-10, is-11, is-1-11, is-2-10, is-3-9, is-4-8, is-5-7,
        is-6-6, is-7-5, is-8-4, is-9-3, is-10-2, is-11-1, is-one-quarter, is-one-third, is-one-half, is-two-thirds,
        is-three-quarters
      </code>
    </p>
    <p>In addition you can specify "slots" of the page with <code>:: left ::</code>, and <code>:: right::</code>.</p>
    <p>
      The <code>align</code> parameter determines how the columns look. The notation is for example
      <code>align: cm-cm</code>. The first part is for the left column, and the second part is for the right column. The
      first letter is (<code>c</code> for center, <code>l</code> for left, <code>r</code> for right). The second letter
      is vertical alignment (<code>t</code> for top, <code>m</code> for middle, <code>b</code> for bottom).
    </p>
  </div>
  <div v-else class="slidev-layout default two-cols slidecolor" :class="colorscheme">
    <div v-if="$slots.left" class="left-col" :class="alignment.l">
      <slot name="left" />
    </div>

    <div v-if="$slots.right" class="right-col" :class="alignment.r">
      <slot name="right" />
    </div>

    <div v-if="$slots.default" class="end-footer">
      <slot name="default" />
    </div>
  </div>
</template>

<style scoped>
.two-cols {
  display: grid;
  grid-template-columns: repeat(12, 1fr); /* 12 columns */
  grid-template-rows: 1fr; /* no footer and content */
}

.end-footer {
  grid-area: 4 / 1 / 5 / span 12; /* full width */
  margin-bottom: 1rem;
}

.footer {
  grid-area: 3 / 1 / 4 / span 12; /* full width */
  margin-bottom: 1rem;
}

.two-cols-footer .left-col {
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
}

.two-cols-footer .right-col {
  display: flex;
  flex-direction: column;
}

.two-cols .left-col {
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
}

.two-cols .right-col {
  display: flex;
  flex-direction: column;
}

/* 1-11 */
.two-cols-footer .left-col {
  grid-area: 2 / 1 / 3 / span v-bind(colwidth.l);
}

.two-cols-footer .right-col {
  grid-area: 2 / v-bind(colwidth.l + 1) / 3 / span v-bind(colwidth.r);
}

.two-cols .left-col {
  grid-area: 1 / 1 / 2 / span v-bind(colwidth.l);
}

.two-cols .right-col {
  grid-area: 1 / v-bind(colwidth.l + 1) / 2 / span v-bind(colwidth.r);
}

.footnotes-sep {
  visibility: hidden;
}
</style>
