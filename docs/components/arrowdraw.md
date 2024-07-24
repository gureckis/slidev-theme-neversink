# ArrowDraw

## Description

Draws a handdrawn arrow in a customizable color. Can be v-drag to size and position.

## `ArrowDraw` component

The `ArrowDraw` component is used to just draw a hand-drawn arrow. It can have the color
changed according to the [color schemes](/colors) in the theme. The ArrowDraw component has the following props:

- `color` (optional) the color of the arrow stroke. Colors are from the themes. The background color is applied as the stroke so `red` is red, `black` is black. Default is 'black'.
- width (optional) the initial width of the image. Default is 140px

```md
<ArrowDraw color='red' v-drag/>
```

Renders as:

<ArrowDraw color='red' />
