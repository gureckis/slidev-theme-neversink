// uno.config.ts
import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import { colors } from '@unocss/preset-mini'
import transformerDirectives from '@unocss/transformer-directives'

// Tailwind CSS color palette
const colornames = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'navy',
]

// Color values to include
const values = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

const prefixes = ['fill-', 'fg-', 'bg-', 'text-', 'color-', 'border-']

// Function to generate classes
const generateColors = (prefixes, colors, values) => {
  const classes = []
  colors.forEach((color) => {
    values.forEach((value) => {
      prefixes.forEach((prefix) => {
        classes.push(`${prefix}${color}-${value}`)
      })
    })
  })
  return classes
}

const generate_color_schemes = (colors) => {
  const schemes = []
  const classes = []

  schemes.push([
    `neversink-black-scheme`,
    {
      '--neversink-bg-color': colors['black'],
      '--neversink-bg-code-color': colors['gray'][600],
      '--neversink-fg-code-color': colors['white'],
      '--neversink-fg-color': colors['white'],
      '--neversink-text-color': colors['white'],
      '--neversink-border-color': colors['white'],
      '--neversink-highlight-color': '#FFA500',
    },
  ])
  classes.push('neversink-black-scheme')

  schemes.push([
    `neversink-white-scheme`,
    {
      '--neversink-bg-color': colors['white'],
      '--neversink-bg-code-color': colors['gray'][100],
      '--neversink-fg-code-color': colors['black'],
      '--neversink-fg-color': colors['black'],
      '--neversink-text-color': colors['black'],
      '--neversink-border-color': colors['gray'][950],
      '--neversink-highlight-color': '#FFA500',
    },
  ])
  classes.push('neversink-white-scheme')

  schemes.push([
    `neversink-dark-scheme`,
    {
      '--neversink-bg-color': colors['gray'][800],
      '--neversink-bg-code-color': colors['gray'][600],
      '--neversink-fg-code-color': colors['white'],
      '--neversink-fg-color': colors['gray'][100],
      '--neversink-text-color': colors['gray'][100],
      '--neversink-border-color': colors['gray'][100],
      '--neversink-highlight-color': '#FFA500',
    },
  ])
  classes.push('neversink-dark-scheme')

  schemes.push([
    `neversink-light-scheme`,
    {
      '--neversink-bg-color': colors['gray'][100],
      '--neversink-bg-code-color': colors['gray'][200],
      '--neversink-fg-color': colors['gray'][800],
      '--neversink-text-color': colors['gray'][800],
      '--neversink-border-color': colors['gray'][800],
      '--neversink-highlight-color': '#FFA500',
    },
  ])
  classes.push('neversink-light-scheme')

  for (const color of colornames) {
    if (color == 'navy') {
      schemes.push([
        `neversink-navy-scheme`,
        {
          '--neversink-bg-color': '#2a373a',
          '--neversink-bg-code-color': colors['gray'][200],
          '--neversink-fg-color': colors['gray'][300],
          '--neversink-text-color': colors['gray'][300],
          '--neversink-border-color': colors['gray'][300],
          '--neversink-highlight-color': '#FFA500',
        },
      ])
      classes.push('neversink-navy-scheme')

      schemes.push([
        `neversink-navy-light-scheme`,
        {
          '--neversink-bg-color': colors['gray'][50],
          '--neversink-bg-code-color': colors['gray'][400],
          '--neversink-fg-color': '#2a373a',
          '--neversink-text-color': '#2a373a',
          '--neversink-border-color': '#2a373a',
          '--neversink-highlight-color': '#FFA500',
        },
      ])
      classes.push('neversink-navy-light-scheme')
    } else {
      // push the normal theme
      schemes.push([
        `neversink-${color}-scheme`,
        {
          '--neversink-bg-color': colors[color][500],
          '--neversink-bg-code-color': colors[color][600],
          '--neversink-fg-code-color': colors[color][100],
          '--neversink-fg-color': colors[color][100],
          '--neversink-text-color': colors[color][100],
          '--neversink-border-color': colors[color][100],
          '--neversink-highlight-color': colors[color][100],
          '--neversink-admon-bg-color': colors[color][500],
          '--neversink-admon-border-color': colors[color][300],
          '--neversink-admon-text-color': colors[color][100],
        },
      ])
      classes.push(`neversink-${color}-scheme`)

      // push the light theme
      schemes.push([
        `neversink-${color}-light-scheme`,
        {
          '--neversink-bg-color': colors[color][100],
          '--neversink-bg-code-color': colors[color][200],
          '--neversink-fg-code-color': colors[color][500],
          '--neversink-fg-color': colors[color][600],
          '--neversink-text-color': colors[color][500],
          '--neversink-border-color': colors[color][500],
          '--neversink-highlight-color': colors[color][500],
          '--neversink-admon-bg-color': colors[color][100],
          '--neversink-admon-border-color': colors[color][300],
          '--neversink-admon-text-color': colors[color][600],
        },
      ])
      classes.push(`neversink-${color}-light-scheme`)
    }
  }
  return { classes: classes, schemes: schemes }
}

const generate_text_sizes = () => {
  const classes = Array.from({ length: 10 }, (_, i) => `text-${i + 1}xl`)
  classes.push('text-xs')
  classes.push('text-sm')
  classes.push('text-base')
  classes.push('text-lg')
  classes.push('text-xl')
  return classes
}
const generateColumns = (max) => {
  return Array.from({ length: max }, (_, i) => `col-span-${i + 1}`)
}

const generateRows = (max) => {
  return Array.from({ length: max }, (_, i) => `row-span-${i + 1}`)
}

const schemes = generate_color_schemes(colors)

console.log('Loading Neversink theme uno.config.ts...')
export default defineConfig({
  // ...UnoCSS options
  presets: [presetUno()],
  rules: [...schemes.schemes],
  safelist: [
    ...generateColors(prefixes, colornames, values),
    ...generateColumns(13),
    ...generateRows(13),
    ...generate_text_sizes(),
    ...schemes.classes,
    ...['text-center', 'text-right', 'text-left', ':root'],
    ...[
      'grid',
      'w-full',
      'grid-cols-2',
      'grid-item',
      'grid-cols-1',
      'grid-col-span-1',
      'mt-10',
      'mb-10',
    ] /* for the docs */,
  ],
  transformers: [transformerDirectives()],
})
