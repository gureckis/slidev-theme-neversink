<script setup lang="ts">
import { computed } from 'vue'
import { compute_alignment, compute_column_size } from '../layoutHelper'

const props = defineProps({
  columns: {
    default: 'is-one-half',
  },
  align: {
    default: 'l-lt-lt',
  },
  color: {
    default: 'light',
  },
})

const colwidth = computed(() => compute_column_size(props.columns))

const alignment = computed(() => {
  const parts = props.align.split('-')
  return { t: compute_alignment(parts[0]), l: compute_alignment(parts[1]), r: compute_alignment(parts[2]) }
})

const colorscheme = computed(() => {
  return `neversink-${props.color}-scheme`
})
</script>
<template>
  <div
    v-if="colwidth == 'error' || alignment.t == 'error' || alignment.l == 'error' || alignment.r == 'error'"
    class="slidev-layout default error"
  >
    <span class="warning"><b>Error</b>: invalid layout params.</span>
    <hr />
    <p>
      There are three parameters: <code>columns</code>, <code>align</code>, and <code>color</code>. Currently:
      <code>columns: {{ props.columns }} </code>, <code>align: {{ props.align }} </code>, and
      <code>color: {{ props.color }} </code>.
    </p>
    <p>
      The "slots" of the page are default <code>:: title ::</code>, <code>:: left ::</code>, and
      <code>:: right ::</code>
    </p>
    <p>
      Options for <code>columns</code> are divided into 12 column units. So with <code>columns: is-1-11</code> the left
      column is 1/12 wide and the the right columns is 11/12 wide. The component admits a short had of only specifying
      the left column (<code>columns: is-1</code> does the same thing). In addition there are short hands like
      <code>columns: is-one-quarter</code> which resolves to <code>is-3-9</code>, etc...
    </p>
    <p>
      The <code>align</code> parameter determines how the columns look. The notation is for example
      <code>align: c-cm-cm</code>. The first part is for the title, the second for the left column, and the third part
      is for the right column. The first letter is (<code>c</code> for center, <code>l</code> for left,
      <code>r</code> for right). This applies to all three second. For the columns the second letter is vertical
      alignment (<code>t</code> for top, <code>m</code> for middle, <code>b</code> for bottom).
    </p>

    <p>The <code>color</code> parameter determines color of the title.</p>
  </div>
  <template v-else>
    <div class="flex flex-col h-full w-full">
      <div class="w-full h-fit min-h-12 pt-2 pb-2 slidecolor" :class="colorscheme">
        <div class="slidev-layout toptitlebar p-0 ml-6 mr-6 mt-auto mb-auto" :class="alignment.t">
          <slot name="title" />
        </div>
      </div>
      <div class="slidev-layout toptitlecontent w-full">
        <div class="flex flex-row h-full w-full">
          <div class="col-left" :class="alignment.l">
            <slot name="left" />
          </div>
          <div class="col-right" :class="alignment.r">
            <slot name="right" />
          </div>
        </div>
      </div>
      <div class="slidev-layout toptitlecontent h-fit w-full">
        <slot name="default" />
      </div>
    </div>
  </template>
</template>

<style>
.slidev-layout.toptitlecontent {
  padding-top: 1.3rem;
}

.toptitlebar {
  padding: 0;
  margin: 0;
  margin-left: 20px;
  margin-right: 20px;
}

.slidev-layout.toptitle h1 {
  font-size: 1.8em;
  font-family: var(--neversink-title-font);
  font-weight: 500;
  padding-left: 25px;
  letter-spacing: 0.07em;
}

.slidev-layout.toptitle h2 {
  font-size: 1.5em;
  font-family: var(--neversink-title-font);
  font-weight: 300;
  padding-left: 25px;
  letter-spacing: 0.07em;
}

.slidev-layout.toptitle h3 {
  font-size: 1.1em;
  font-family: var(--neversink-title-font);
  font-weight: 300;
  padding-left: 25px;
  letter-spacing: 0.07em;
}
</style>

<style scoped>
.slidev-layout.toptitlecontent .col-left {
  flex: v-bind(colwidth.l); /* Makes each column take up equal space */
  margin-right: 15px;
}

.slidev-layout.toptitlecontent .col-right {
  flex: v-bind(colwidth.r); /*Makes each column take up equal space */
  margin-left: 15px;
}
</style>
