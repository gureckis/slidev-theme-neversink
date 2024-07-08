<script setup>
import { onMounted, ref } from 'vue'
import { useSlideContext } from '@slidev/client'
const { $slidev, $frontmatter } = useSlideContext()

//const frontmatter = ref('')
const fg_default = 'text-neutral-800'
const bg_default = 'bg-neutral-100'
const label = ref('')
const fg = ref(fg_default)
const bg = ref(bg_default)

function process_colors() {
  if ($frontmatter.color) {
    if ($frontmatter.color == 'black') {
      fg.value = `text-gray-600`
      bg.value = `bg-gray-100`
    } else if ($frontmatter.color == 'white') {
      fg.value = fg_default
      bg.value = bg_default
    } else if ($frontmatter.color == 'dark') {
      fg.value = `text-gray-100`
      bg.value = `bg-gray-500`
    } else if ($frontmatter.color == 'navy') {
      fg.value = `text-gray-300`
      bg.value = `bg-gray-600`
    } else if ($frontmatter.color == 'light') {
      fg.value = `text-neutral-600`
      bg.value = `bg-neutral-300`
    } else if ($frontmatter.color.includes('-light')) {
      const parts = $frontmatter.color.split('-')
      fg.value = `text-${parts[0]}-100`
      bg.value = `bg-${parts[0]}-500`
    } else {
      fg.value = `text-${$frontmatter.color}-500`
      bg.value = `bg-${$frontmatter.color}-100`
    }
  }
}
function checkvars() {
  if ($frontmatter.slide_info_color === undefined) {
    // default
    fg.value = fg_default
    bg.value = bg_default
  }

  if ($frontmatter.slide_info_color && $frontmatter.slide_info_color.includes(',')) {
    // slide info
    const parts = $frontmatter.slide_info.split(',')
    fg.value = parts[0]
    bg.value = parts[1]
  } else {
    // slide specific things
    if ($frontmatter.layout == 'end') {
      fg.value = `text-neutral-100`
      bg.value = `bg-neutral-800`
    } else if ($frontmatter.layout == 'side-title') {
      // if side title
      if ($frontmatter.side && ($frontmatter.side == 'right' || $frontmatter.side == 'r')) {
        process_colors()
      } else {
        fg.value = fg_default
        bg.value = bg_default
      }
    } else if (
      $frontmatter.layout == 'cover' ||
      $frontmatter.layout == 'intro' ||
      $frontmatter.layout == 'default' ||
      $frontmatter.layout == 'section' ||
      $frontmatter.layout == 'credits'
    ) {
      process_colors()
    }
  }
}

function getlabel() {
  label.value = $slidev.configs.neversink_string // this is the overall deck front matter
}
//watch($slidev.nav, () => checkvars())

onMounted(() => {
  getlabel()
  checkvars()
})
</script>

<!-- an example footer for pages -->
<template>
  <footer v-if="$frontmatter.slide_info !== false" class="absolute bottom-1 right-1 left-0 p-2 pr-3 full-width z-10">
    <div class="absolute bottom-0 right-0 p-2 pr-2">
      <span class="pl-3 pr-3 p-2 font-mono font-size-2" :class="fg + ' ' + bg">
        <mdi-orbit />&nbsp;<span class="fw-bold">{{ label }}</span> | {{ $slidev.nav.currentPage }} of
        {{ $slidev.nav.total }}
      </span>
    </div>
  </footer>
</template>

<style scoped></style>
