<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { compute_alignment, compute_column_size } from '../layoutHelper'

const slots = useSlots()

const props = defineProps({
  layout: {
    default: 'top-title',
  },
  color: {
    default: 'light',
  },
  align: {
    default: 'auto',
  },
})

const alignment = computed(() => {
  let aligncode = ''
  if (props.align == 'auto') {
    aligncode = 'l'
  } else {
    aligncode = props.align
  }

  if (
    aligncode == 'lt' ||
    aligncode == 'lm' ||
    aligncode == 'lb' ||
    aligncode == 'ct' ||
    aligncode == 'cm' ||
    aligncode == 'cb' ||
    aligncode == 'rt' ||
    aligncode == 'rm' ||
    aligncode == 'rb'
  ) {
    return compute_alignment(aligncode)
  } else {
    return 'error'
  }
})

const colorscheme = computed(() => {
  return `nyu-${props.color}-scheme`
})
</script>
<template>
  <div v-if="alignment == 'error'" class="slidev-layout default error">
    <span class="warning"><b>Error</b>: invalid layout params.</span>
    <hr />
    <p>
      There are two parameters: <code>color</code> <code>align</code>. Currently:
      <code>color: {{ props.color }}</code> and <code>align: {{ props.align }}</code
      >.
    </p>
    <p>The "slots" of the page are default <code>:: content ::</code></p>

    <p>
      The <code>align</code> parameter determines how the title is aligned. The letter is (<code>c</code> for center,
      <code>l</code> for left, <code>r</code> for right).
    </p>

    <p>The <code>color</code> parameter determines color of the title.</p>
  </div>
  <template v-else>
    <div class="flex flex-col h-full w-full">
      <div class="top-title w-full h-fit pt-2 pb-2" :class="colorscheme">
        <div class="toptitle w-full p-0 pt-0 ml-2 mt-auto mb-auto" :class="alignment">
          <slot name="default" />
        </div>
      </div>
      <div class="row-content">
        <div class="slidev-layout sidecontent w-full">
          <slot name="content" />
        </div>
      </div>
    </div>
  </template>
</template>

<style scoped>
.top-title {
  font-size: 1.5em;
  font-weight: bold;
  background-color: var(--nyu-bg-color);
  color: var(--nyu-text-color);
}

.warning {
  color: red;
}
.error {
  font-size: 0.9em;
}

.left {
  justify-content: left; /* Left align the content */
  text-align: left;
  align-items: start;
}

.center {
  justify-content: center; /* Horizontally center the content */
  text-align: center;
  align-items: center;
}

.right {
  justify-content: right; /* Right align the content */
  text-align: right;
  align-items: end;
}

.top {
  margin-top: 0;
  margin-bottom: auto;
}
.middle {
  margin-top: auto;
  margin-bottom: auto;
}
.bottom {
  margin-top: auto;
  margin-bottom: 0;
}

.sidebar {
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  padding-top: 0;
}
</style>
