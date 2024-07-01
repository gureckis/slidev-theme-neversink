<!-- an example footer for pages -->
<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useSlideContext } from '@slidev/client'
const { $slidev, $frontmatter, $page } = useSlideContext()

const frontmatter = ref('')
const default_tr_color = 'color-neutral-500'
const default_tl_color = 'fill-black'
const default_tl_color2 = 'fill-white'

const brand_tr_color = ref(default_tr_color)
const brand_tl_color = ref(default_tl_color)
const brand_tl_color2 = ref(default_tl_color2)

function process_top_left_colors(color, force = false) {
  if (color) {
    if (color == 'black') {
      brand_tl_color.value = `fill-gray-100`
      brand_tl_color2.value = `fill-gray-900`
    } else if (color == 'navy') {
      brand_tl_color.value = `fill-gray-300`
      brand_tl_color2.value = `fill-navy-900`
    } else if (color == 'white') {
      brand_tl_color.value = default_tl_color
      brand_tl_color2.value = default_tl_color2
    } else if (color == 'dark') {
      brand_tl_color.value = `fill-gray-100`
      brand_tl_color2.value = `fill-gray-900`
    } else if (color == 'light') {
      brand_tl_color.value = default_tl_color
      brand_tl_color2.value = default_tl_color2
    } else if (color.includes('-light')) {
      const parts = color.split('-')
      if (force) {
        brand_tl_color.value = `fill-${parts[0]}-100`
        brand_tl_color2.value = `fill-${parts[0]}-500`
      } else {
        brand_tl_color.value = `fill-${parts[0]}-500`
        brand_tl_color2.value = `fill-${parts[0]}-100`
      }
    } else {
      if (force) {
        brand_tl_color.value = `fill-${color}-500`
        brand_tl_color2.value = `fill-${color}-100`
      } else {
        brand_tl_color.value = `fill-${color}-100`
        brand_tl_color2.value = `fill-${color}-500`
      }
    }
  }
}

function process_top_right_colors(color, force = false) {
  if (color) {
    if (color == 'black') {
      brand_tr_color.value = `text-gray-100`
    } else if (color == 'navy') {
      brand_tr_color.value = `text-gray-300`
    } else if (color == 'white') {
      brand_tr_color.value = default_tr_color
    } else if (color == 'dark') {
      brand_tr_color.value = `text-gray-100`
    } else if (color == 'light') {
      brand_tr_color.value = default_tr_color
    } else if (color.includes('-light')) {
      const parts = color.split('-')
      if (force) {
        brand_tr_color.value = `text-${parts[0]}-100`
      } else {
        brand_tr_color.value = `text-${parts[0]}-500`
      }
    } else {
      if (force) {
        brand_tr_color.value = `text-${color}-500`
      } else {
        brand_tr_color.value = `text-${color}-100`
      }
    }
  }
}

function checkvars() {
  frontmatter.value = $slidev.nav.slides[$slidev.nav.currentPage - 1].meta.slide.frontmatter
  //console.log(frontmatter.value)

  // process left
  // set default
  if (frontmatter.value.brand_lr === undefined) {
    frontmatter.value.brand_lr = 'auto_false'
  }

  brand_tl_color.value = default_tl_color
  brand_tl_color2.value = default_tl_color2

  //  if a color provided go with that
  if (frontmatter.value.brand_tl_color) {
    process_top_left_colors(frontmatter.value.brand_tl_color, true)
  } else if (frontmatter.value.color) {
    // depending on slide type
    if (frontmatter.value.layout == 'side-title') {
      if (frontmatter.value.side && frontmatter.value.side == 'left') {
        process_top_left_colors(frontmatter.value.color)
      }
    }

    if (frontmatter.value.layout == 'cover') {
      process_top_left_colors(frontmatter.value.color)
    }
  } else if (frontmatter.value.layout == 'end') {
    process_top_left_colors('black')
  }

  //  otherwise check slide type
  //  otherwise go with default

  // set default
  if (frontmatter.value.brand_tr === undefined) {
    frontmatter.value.brand_tr = 'auto_true'
  }

  brand_tr_color.value = default_tr_color
  //  if a color provided go with that
  if (frontmatter.value.brand_tr_color) {
    const pattern = /^[A-Za-z]+-[A-Za-z]+-\d+$/
    if (pattern.test(frontmatter.value.brand_tr_color)) {
      brand_tr_color.value = frontmatter.value.brand_tr_color
    } else {
      process_top_right_colors(frontmatter.value.brand_tr_color, true)
    }
  } else if (frontmatter.value.color) {
    // depending on slide type
    if (frontmatter.value.layout == 'side-title') {
      if (frontmatter.value.side && frontmatter.value.side == 'right') {
        process_top_right_colors(frontmatter.value.color)
      }
    }

    if (frontmatter.value.layout == 'cover') {
      process_top_right_colors(frontmatter.value.color)
    }
  } else if (frontmatter.value.layout == 'end') {
    process_top_right_colors('black')
  }
}
watch($slidev.nav, () => checkvars())
onMounted(() => checkvars())
</script>

<template>
  <div
    v-if="
      ($slidev.nav.currentLayout == 'cover' && frontmatter.brand_tl !== false) ||
      ($slidev.nav.currentLayout == 'intro' && frontmatter.brand_tl !== false) ||
      ($slidev.nav.currentLayout == 'end' && frontmatter.brand_tl !== false) ||
      frontmatter.brand_tl == true ||
      frontmatter.brand_tl == 'auto_true'
    "
    class="absolute top-4 left-11 p-3 pr-5 border.b-1 font-size-2 font-mono color-gray-500 width-full text-right"
  >
    <NYUlogo :color="brand_tl_color" :color2="brand_tl_color2" />
  </div>

  <div
    v-if="
      frontmatter.brand_tr == true ||
      (frontmatter.brand_tr == 'auto_true' &&
        $slidev.nav.currentLayout != 'image' &&
        $slidev.nav.currentLayout != 'image-right' &&
        $slidev.nav.currentLayout != 'iframe-right' &&
        $slidev.nav.currentLayout != 'iframe' &&
        $slidev.nav.currentLayout != 'top-title' &&
        $slidev.nav.currentLayout != 'top-title-twocols')
    "
    class="absolute top-3 right-2 p-3 pr-3 border.b-1 z-10 font-size-3 font-mono width-full text-right"
    :class="brand_tr_color"
  >
    <a href="https://gureckislab.org"> <uim-cube /> gureckislab.org </a>
  </div>
</template>

<style scoped>
img {
  height: 2.3rem;
  opacity: 0.9;
}

html.dark {
  /* dark mode css here */
  img {
    filter: invert(1);
    opacity: 1;
  }

  .sidebar {
    background-color: #5b5b5b;
  }
}
</style>
