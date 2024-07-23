<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { compute_alignment, compute_column_size } from '../layoutHelper'

const slots = useSlots()

const props = defineProps({
  side: {
    default: 'l',
  },
  color: {
    default: 'light',
  },
  titlewidth: {
    default: 'is-one-third',
  },
  align: {
    default: 'auto',
  },
})

const side = computed(() => {
  if (props.side === 'left' || props.side === 'l') {
    return 'left'
  } else if (props.side === 'right' || props.side === 'r') {
    return 'right'
  } else {
    return 'error'
  }
})
const colwidth = computed(() => compute_column_size(props.titlewidth))

const alignment = computed(() => {
  let aligncode = ''
  if (props.align == 'auto' && (props.side === 'l' || props.side === 'left')) {
    aligncode = 'rm-lt'
  } else if (props.align == 'auto' && (props.side === 'r' || props.side === 'right')) {
    aligncode = 'lt-lm'
  } else {
    aligncode = props.align
  }

  const parts = aligncode.split('-')
  return { l: compute_alignment(parts[0]), r: compute_alignment(parts[1]) }
})

const colorscheme = computed(() => {
  return `neversink-${props.color}-scheme`
})
</script>
<template>
  <div v-if="side == 'error' || colwidth == 'error'" class="slidev-layout default error">
    <span class="ns-c-warning"><b>Error</b>: invalid layout params.</span>
    <hr />
    <p>
      There are three parameters: <code>color</code>, <code>columns</code> and <code>align</code>. Currently:
      <code>color: {{ props.color }}</code
      >, <code>columns: {{ props.columns }}</code> and <code>align: {{ props.align }}</code
      >.
    </p>
    <p>The "slots" of the page are default and <code>:: content ::</code></p>
    <p>
      Options for <code>columns</code> are divided into 12 column units. So with <code>columns: is-1-11</code> the left
      column is 1/12 wide and the the right columns is 11/12 wide. The component admits a short had of only specifying
      the left column (<code>columns: is-1</code> does the same thing). In addition there are short hands like
      <code>columns: is-one-quarter</code> which resolves to <code>is-3-9</code>, etc...
    </p>
    <p>
      Here are a bunch of examples:
      <code>
        is-1, is-2, is-3, is-3-9, is-4-8, is-5-7, is-one-quarter, is-one-third, is-one-half, is-two-thirds,
        is-three-quarters
      </code>
    </p>

    <p>
      The <code>align</code> parameter determines how the columns look. The notation is for example
      <code>align: cm-cm</code>. The first part for the left column, and the third part is for the right column. The
      first letter is (<code>c</code> for center, <code>l</code> for left, <code>r</code> for right). This applies to
      all three second. For the columns the second letter is vertical alignment (<code>t</code> for top,
      <code>m</code> for middle, <code>b</code> for bottom).
    </p>

    <p>The <code>color</code> parameter determines color of the title.</p>
  </div>
  <div class="h-full" v-else>
    <div v-if="side === 'left'" class="flex h-full w-full">
      <div class="slidecolor column-title" :class="colorscheme">
        <div class="slidev-layout sidetitle w-full p-6" :class="alignment.l"><slot name="title" /></div>
      </div>
      <div class="column-content">
        <div class="slidev-layout h-fit w-full" :class="alignment.r">
          <slot name="content" />
          <slot name="default" />
        </div>
      </div>
    </div>
    <div v-else class="flex h-full w-full">
      <div class="column-content">
        <div class="slidev-layout h-fit w-full" :class="alignment.l">
          <slot name="content" />
          <slot name="default" />
        </div>
      </div>
      <div class="slidecolor column-title" :class="colorscheme">
        <div class="slidev-layout sidetitle w-full p-6" :class="alignment.r"><slot name="title" /></div>
      </div>
    </div>
  </div>
</template>

<style>
.slidev-layout.sidetitle {
  height: fit-content;
}

.slidev-layout.sidetitle hr {
  border: 0;
  border-top: 1px solid var(--neversink-border-color);
  margin: 0;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}

.slidev-layout.sidetitle code {
  background: none;
}
.slidev-layout.sidetitle h1 {
  margin-bottom: 5;
}
</style>
<style scoped>
.column-title {
  flex: v-bind(colwidth.l); /* although this is mapped to 'left' it is reversed when needed in the template*/
  display: flex;
}

.column-content {
  flex: v-bind(colwidth.r); /* although this is mapped to 'right' it is reversed when needed in the template*/
  display: flex;
}
</style>
