<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useSlideContext } from '@slidev/client'
const { $slidev, $frontmatter, $page } = useSlideContext()

const frontmatter = ref('')
const fg_default = 'text-neutral-800'
const bg_default = 'bg-neutral-100'
const label = ref('')
const fg = ref(fg_default)
const bg = ref(bg_default)

function process_colors() {
  if (frontmatter.value.color) {
    if (frontmatter.value.color == 'black') {
      fg.value = `text-gray-600`
      bg.value = `bg-gray-100`
    } else if (frontmatter.value.color == 'white') {
      fg.value = fg_default
      bg.value = bg_default
    } else if (frontmatter.value.color == 'dark') {
      fg.value = `text-gray-100`
      bg.value = `bg-gray-500`
    } else if (frontmatter.value.color == 'navy') {
      fg.value = `text-gray-300`
      bg.value = `bg-gray-600`
    } else if (frontmatter.value.color == 'light') {
      fg.value = `text-neutral-600`
      bg.value = `bg-neutral-300`
    } else if (frontmatter.value.color.includes('-light')) {
      const parts = frontmatter.value.color.split('-')
      fg.value = `text-${parts[0]}-100`
      bg.value = `bg-${parts[0]}-500`
    } else {
      fg.value = `text-${frontmatter.value.color}-500`
      bg.value = `bg-${frontmatter.value.color}-100`
    }
  }
}
function checkvars() {
  console.log('bottom check', frontmatter)
  frontmatter.value = $slidev.nav.slides[$slidev.nav.currentPage - 1].meta.slide.frontmatter
  if (frontmatter.value.slide_info_color === undefined) {
    // default
    fg.value = fg_default
    bg.value = bg_default
  }

  if (frontmatter.value.slide_info_color && frontmatter.value.slide_info_color.includes(',')) {
    // slide info
    const parts = frontmatter.value.slide_info.split(',')
    fg.value = parts[0]
    bg.value = parts[1]
  } else {
    console.log('else')
    // slide specific things
    if (frontmatter.value.layout == 'end') {
      fg.value = `text-neutral-100`
      bg.value = `bg-neutral-800`
    } else if (frontmatter.value.layout == 'side-title') {
      // if side title
      if (frontmatter.value.side && frontmatter.value.side == 'right') {
        process_colors()
      } else {
        fg.value = fg_default
        bg.value = bg_default
      }
    } else if (frontmatter.value.layout == 'cover') {
      process_colors()
    }
  }
}

function getlabel() {
  frontmatter.value = $slidev.nav.slides[0].meta.slide.frontmatter
  label.value = frontmatter.value.neversink_string
}
watch($slidev.nav, () => checkvars())

onMounted(() => {
  getlabel()
  checkvars()
})
</script>

<!-- an example footer for pages -->
<template>
  <footer v-if="frontmatter.slide_info !== false" class="absolute bottom-1 right-1 left-0 p-2 pr-3 full-width z-10">
    <div class="absolute bottom-0 right-0 p-2 pr-2">
      <span class="pl-3 pr-3 p-2 font-mono font-size-2" :class="fg + ' ' + bg">
        <mdi-orbit />&nbsp;<span class="fw-bold">{{ label }}</span> | {{ $slidev.nav.currentPage }} of
        {{ $slidev.nav.total }}
      </span>
    </div>
  </footer>
</template>

<style scoped>

</style>
