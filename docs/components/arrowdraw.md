# ArrowDraw

## Description

Draws a handdrawn arrow in a customizable color. Can be v-drag to size and position.

## `ArrowDraw` component

The `ArrowDraw` component is used to just draw a hand-drawn arrow. It can have the color
changed according to the [color schemes](/colors) in the theme. The ArrowDraw component has the following props:

- `color` (optional) the color of the arrow stroke. Colors can be any of the tailwind colors like `red-400` in the theme or a hex code. Default is black.
- width (optional) the initial width of the image. Default is 140px

```md
<ArrowDraw color='red-400' v-drag/>
```

Renders as:

<ArrowDraw color='red-400' />
