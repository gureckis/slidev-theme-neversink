<script setup>
import { computed } from 'vue'
// import { colors } from '@unocss/preset-mini'

// console.log(colors)

const props = defineProps({
  position: {
    type: String,
    default: 'b',
    validator: (value) => ['t', 'l', 'r', 'b', 'bl', 'br', 'lt', 'tr'].includes(value),
  },
  shape: {
    type: String,
    default: '',
    validator: (value) => ['', 'round', 'circle'].includes(value),
  },
  animation: {
    type: String,
    default: '',
    validator: (value) => ['', 'pop', 'float'].includes(value),
  },
  color: {
    type: String,
    default: 'red-light',
  },
  textAlign: {
    type: String,
    default: 'left',
  },
  maxWidth: {
    type: String,
    default: '100%',
  },
  borderWidth: {
    type: String,
    default: '1px',
  },
})

const colorscheme = computed(() => {
  return `neversink-${props.color}-scheme`
})

const bubbleClasses = computed(() => {
  return [colorscheme.value, 'speech-bubble', props.position, props.shape, props.animation]
})

const bubbleStyles = computed(() => ({
  '--bubble-color': 'var(--neversink-bg-color)',
  '--border-color': 'var(--neversink-fg-color)',
  '--text-color': 'var(--neversink-text-color)',
  '--text-align': props.textAlign,
}))
</script>

<template>
  <div :class="bubbleClasses" :style="bubbleStyles">
    <slot></slot>
  </div>
</template>

<style>
.speech-bubble p:first-child {
  margin-top: 0;
}

.speech-bubble {
  --arrow-w: 0.5em;
  --arrow-h: 1em;
  --bubble-corners: 2px;
  --w: v-bind(props.maxWidth);
  --border-size: v-bind(props.borderWidth);
  text-align: var(--text-align);
  height: fit-content;
  font-weight: 400;
  font-size: 1.1rem;
  /*color: var(--text-color);*/
  background-color: var(--bubble-color);
  border-color: var(--border-color);
  color: var(--text-color);
  padding: 1em;
  position: relative;
  border-radius: var(--bubble-corners);
  border-width: var(--border-size);
  max-width: var(--w);
  /*box-shadow: 3 3 4 var(--border-size) var(--border-color);*/
}

.speech-bubble p {
  margin-top: 0;
}

.speech-bubble.round {
  --bubble-corners: 1em;
}

.speech-bubble.circle {
  --bubble-corners: 100%;
  padding: 2em;
}

.speech-bubble:before,
.speech-bubble:after {
  content: '';
  position: absolute;
  bottom: calc(-1 * var(--arrow-h) * 2 + 0.5px);
  left: 50%;
  border-style: solid;
  border-width: var(--arrow-h) var(--arrow-w);
  border-color: var(--bubble-color) transparent transparent;
}

.speech-bubble:before {
  border-width: calc(var(--arrow-h) + var(--border-size)) calc(var(--arrow-w) + var(--border-size));
  border-color: var(--border-color) transparent transparent;
  bottom: calc(-1 * var(--arrow-h) * 2 - 2.5 * var(--border-size));
  left: calc(50% - var(--border-size));
}

.speech-bubble.bl:after {
  left: 10%;
  border-style: solid;
  border-width: var(--arrow-h) var(--arrow-w);
  border-color: var(--bubble-color) transparent transparent;
}

.speech-bubble.bl:before {
  left: calc(10% - var(--border-size));
}

.speech-bubble.br:after {
  left: 88%;
  border-style: solid;
  border-width: var(--arrow-h) var(--arrow-w);
  border-color: var(--bubble-color) transparent transparent;
}

.speech-bubble.br:before {
  left: calc(88% - var(--border-size));
}
.speech-bubble.t:after {
  border-color: transparent transparent var(--bubble-color);
  bottom: auto;
  top: calc(-1 * var(--arrow-h) * 2 + 0.5px);
}

.speech-bubble.t:before {
  border-width: calc(var(--arrow-h) + var(--border-size)) calc(var(--arrow-w) + var(--border-size));
  border-color: transparent transparent var(--border-color);
  bottom: auto;
  top: calc(-1 * var(--arrow-h) * 2 - 2.5 * var(--border-size));
}

.speech-bubble.tl:after {
  border-color: transparent transparent var(--bubble-color);
  bottom: auto;
  left: 10%;
  top: calc(-1 * var(--arrow-h) * 2 + 0.5px);
}

.speech-bubble.tl:before {
  border-width: calc(var(--arrow-h) + var(--border-size)) calc(var(--arrow-w) + var(--border-size));
  border-color: transparent transparent var(--border-color);
  bottom: auto;
  left: calc(10% - var(--border-size));
  top: calc(-1 * var(--arrow-h) * 2 - 2.5 * var(--border-size));
}

.speech-bubble.tr:after {
  border-color: transparent transparent var(--bubble-color);
  bottom: auto;
  left: 90%;
  top: calc(-1 * var(--arrow-h) * 2 + 0.5px);
}

.speech-bubble.tr:before {
  border-width: calc(var(--arrow-h) + var(--border-size)) calc(var(--arrow-w) + var(--border-size));
  border-color: transparent transparent var(--border-color);
  bottom: auto;
  left: calc(90% - var(--border-size));
  top: calc(-1 * var(--arrow-h) * 2 - 2.5 * var(--border-size));
}

.speech-bubble.l:after {
  border-color: transparent var(--bubble-color) transparent transparent;
  bottom: auto;
  border-width: var(--arrow-w) var(--arrow-h);
  top: calc(50% - var(--arrow-w));
  left: calc(-1 * var(--arrow-h) * 2 + 0.5px);
}

.speech-bubble.l:before {
  border-width: calc(var(--arrow-w) + var(--border-size)) calc(var(--arrow-h) + var(--border-size));
  border-color: transparent var(--border-color) transparent transparent;
  bottom: auto;
  top: calc(50% - var(--arrow-w) - var(--border-size));
  left: calc(-1 * var(--arrow-h) * 2 - 2.5 * var(--border-size));
}

.speech-bubble.r:after {
  border-color: transparent transparent transparent var(--bubble-color);
  bottom: auto;
  left: auto;
  border-width: var(--arrow-w) var(--arrow-h);
  top: calc(50% - var(--arrow-w));
  right: calc(-1 * var(--arrow-h) * 2 + 0.5px);
}

.speech-bubble.r:before {
  border-width: calc(var(--arrow-w) + var(--border-size)) calc(var(--arrow-h) + var(--border-size));
  border-color: transparent transparent transparent var(--border-color);
  bottom: auto;
  left: auto;
  top: calc(50% - var(--arrow-w) - var(--border-size));
  right: calc(-1 * var(--arrow-h) * 2 - 2.5 * var(--border-size));
}

.speech-bubble.pop {
  animation-name: pop;
  animation-duration: 0.5s;
  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
}

.speech-bubble.float {
  animation-name: float-up;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
}

.speech-bubble.r.float {
  animation-name: float-left;
}

.speech-bubble.l.float {
  animation-name: float-right;
}

.speech-bubble.t.float {
  animation-name: float-down;
}

@keyframes pop {
  0% {
    transform: scale(0.8);
  }
  80% {
    transform: scale(1.1);
  }
  90% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes float-up {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(calc(-1 * var(--arrow-h)));
  }
}

@keyframes float-left {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(calc(-1 * var(--arrow-h)));
  }
}

@keyframes float-right {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(var(--arrow-h));
  }
}

@keyframes float-down {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(var(--arrow-h));
  }
}
</style>
