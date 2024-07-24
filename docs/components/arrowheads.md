# ArrowHeads

## Description

Draws a set of hand drawn arrows that point to a central location. Useful to call attention to a particular element on a slide.

## `ArrowHeads` component

The ArrowHeads component has the following props:

- `color` (optional) the color of the arrow stroke. Colors can be any of the tailwind colors like `red-400` in the theme or a hex code. Default is black.
- width (optional) the initial width of the image. Default is 140px

```md
<ArrowHeads color='pink-500' width="300px" v-drag />
```

Renders as:

<ArrowHeads color='pink-500' width="300px"/>

```md
<ArrowHeads  v-drag />
```

Renders as:

<ArrowHeads />
