# ArrowHeads

## Description

Draws a set of hand drawn arrows that point to a central location. Useful to call attention to a particular element on a slide.

## `ArrowHeads` component

The ArrowHeads component has the following props:

- `color` (optional) the color of the arrow stroke. Colors are from the themes. The background color is applied as the stroke so `red` is red, `black` is black. Default is 'black'.
- width (optional) the initial width of the image. Default is 140px

```md
<ArrowHeads color='pink' width="300px" v-drag />
```

Renders as:

<ArrowHeads color='pink' width="300px"/>

```md
<ArrowHeads  v-drag />
```

Renders as:

<ArrowHeads />
