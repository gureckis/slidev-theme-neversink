<script setup>
const props = defineProps({
  v: {
    default: 'null@null.com',
  },
})
</script>

<template>
  <div class="ns-c-email text-0.85rem text-gray-700 mt-0 tracking-wide leading-none ns-c-iconlink">
    {{ props.v }} <a href="mailto:" class=""><mdi-email /></a>
  </div>
</template>

<style>
.ns-c-email {
  font-family: var(--neversink-font-mono);
  font-weight: 300;
  letter-spacing: 0.09em;
}
</style>
