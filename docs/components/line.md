# Line

## Description

Draws a line

## `Line` component

The `Line` component is used to just draw a straight line. It has the following props:

- `x1` (required) starting x position
- `y1` (required) starting y postiion
- `x2` (required) the end x position
- `y2` (required) the end y position
- `width` (optional) the width of the line (default '2')
- `color` (optional) the color of the line. Colors can be any of the tailwind colors like `red-400` in the theme or a hex code. Default is black.

```md
<Line :x1=0 :y1=0 :x2=200 :y2=200 :width=2 color='red-400' v-drag />
```

Renders as:

well, a red svg line, what did you want to see?

<img src="/screenshots/line.png" />
