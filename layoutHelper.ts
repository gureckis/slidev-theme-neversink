import type { CSSProperties } from 'vue'

/**
 * Resolve urls from frontmatter and append with the base url
 */
export function resolveAssetUrl(url: string) {
  if (url.startsWith('/')) return import.meta.env.BASE_URL + url.slice(1)
  return url
}

export function handleBackground(background?: string, dim = false): CSSProperties {
  const isColor = background && ['#', 'rgb', 'hsl'].some((v) => background.indexOf(v) === 0)

  const style = {
    background: isColor ? background : undefined,
    color: background && !isColor ? 'white' : undefined,
    backgroundImage: isColor
      ? undefined
      : background
        ? dim
          ? `linear-gradient(#0005, #0008), url(${resolveAssetUrl(background)})`
          : `url("${resolveAssetUrl(background)}")`
        : undefined,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }

  if (!style.background) delete style.background

  return style
}

export function compute_alignment(val) {
  switch (val) {
    case 'ct':
      return 'ns-c-center ns-c-top'
    case 'cm':
      return 'ns-c-center ns-c-middle'
    case 'cb':
      return 'ns-c-center ns-c-bottom'
    case 'lt':
      return 'ns-c-left ns-c-top'
    case 'lm':
      return 'ns-c-left ns-c-middle'
    case 'lb':
      return 'ns-c-left ns-c-bottom'
    case 'rt':
      return 'ns-c-right ns-c-top'
    case 'rm':
      return 'ns-c-right ns-c-middle'
    case 'rb':
      return 'ns-c-right ns-c-bottom'
    case 'c':
      return 'ns-c-center ns-c-top'
    case 'l':
      return 'ns-c-left ns-c-top'
    case 'r':
      return 'ns-c-right ns-c-top'
    default:
      return 'error'
  }
}

function compute_size(left) {
  return { l: left, r: 12 - left }
}

export function compute_column_size(val) {
  switch (val) {
    case 'is-1':
    case 'is-1-11':
    case 'is-one-twelfth':
      return compute_size(1)
    case 'is-2':
    case 'is-2-10':
    case 'is-one-sixth':
      return compute_size(2)
    case 'is-3':
    case 'is-3-9':
    case 'is-one-quarter':
      return compute_size(3)
    case 'is-4':
    case 'is-4-8':
    case 'is-one-third':
      return compute_size(4)
    case 'is-5':
    case 'is-5-7':
      return compute_size(5)
    case 'is-6':
    case 'is-6-6':
    case 'is-two-quarters':
    case 'is-two-fourths':
    case 'is-one-half':
    case 'is-half':
      return compute_size(6)
    case 'is-7':
    case 'is-7-5':
      return compute_size(7)
    case 'is-8':
    case 'is-8-4':
    case 'is-two-thirds':
      return compute_size(8)
    case 'is-9':
    case 'is-9-3':
    case 'is-three-quarters':
    case 'three-fourths':
      return compute_size(9)
    case 'is-10':
    case 'is-10-2':
      return compute_size(10)
    case 'is-11':
    case 'is-11-1':
      return compute_size(11)
    default:
      return 'error'
  }
}
