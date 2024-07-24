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
- `color` (optional) the color of the line. Colors can be any of the color schemes. the default is 'black'. The background color of the theme is applied to the stroke of the line so `black` is black line, `red` is red line, `red-light` is a light red line, etc.

```md
<Line :x1=0 :y1=0 :x2=200 :y2=200 :width=2 color='red' v-drag />
```

Renders as:

well, a red svg line, what did you want to see?

<img src="/screenshots/line.png" />
