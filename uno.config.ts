// uno.config.ts
import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import { colors } from '@unocss/preset-mini'

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
    `nyu-black-scheme`,
    {
      '--nyu-bg-color': colors['black'],
      '--nyu-fg-color': colors['white'],
      '--nyu-text-color': colors['white'],
    },
  ])
  classes.push('nyu-black-scheme')

  schemes.push([
    `nyu-white-scheme`,
    {
      '--nyu-bg-color': colors['white'],
      '--nyu-fg-color': colors['black'],
      '--nyu-text-color': colors['black'],
      '--nyu-border-color': colors['gray'][950],
    },
  ])
  classes.push('nyu-white-scheme')

  schemes.push([
    `nyu-dark-scheme`,
    {
      '--nyu-bg-color': colors['gray'][800],
      '--nyu-fg-color': colors['gray'][100],
      '--nyu-text-color': colors['gray'][100],
    },
  ])
  classes.push('nyu-dark-scheme')

  schemes.push([
    `nyu-light-scheme`,
    {
      '--nyu-bg-color': colors['gray'][100],
      '--nyu-fg-color': colors['gray'][800],
      '--nyu-text-color': colors['gray'][800],
      '--nyu-border-color': colors['gray'][950],
    },
  ])
  classes.push('nyu-light-scheme')

  for (const color of colornames) {
    if (color == 'navy') {
      schemes.push([
        `nyu-navy-scheme`,
        {
          '--nyu-bg-color': '#2a373a',
          '--nyu-fg-color': colors['gray'][300],
          '--nyu-text-color': colors['gray'][300],
        },
      ])
      classes.push('nyu-navy-scheme')

      schemes.push([
        `nyu-navy-light-scheme`,
        {
          '--nyu-bg-color': colors['gray'][50],
          '--nyu-fg-color': '#2a373a',
          '--nyu-text-color': '#2a373a',
        },
      ])
      classes.push('nyu-navy-light-scheme')
    } else {
      // push the normal theme
      schemes.push([
        `nyu-${color}-scheme`,
        {
          '--nyu-bg-color': colors[color][500],
          '--nyu-fg-color': colors[color][100],
          '--nyu-text-color': colors[color][100],
        },
      ])
      classes.push(`nyu-${color}-scheme`)

      // push the light theme
      schemes.push([
        `nyu-${color}-light-scheme`,
        {
          '--nyu-bg-color': colors[color][100],
          '--nyu-fg-color': colors[color][600],
          '--nyu-text-color': colors[color][500],
        },
      ])
      classes.push(`nyu-${color}-light-scheme`)
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

console.log('loading theme uno.config.ts')
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
  ],
})
