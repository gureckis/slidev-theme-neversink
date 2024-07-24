# Thumb

## Description

Draws a set of illustration of a hand with a thumb. Useful icon but larger than using the slidev icondes.

## `Thumb` component

The Thumbs component has the following props:

- `dir` (optional) the thumb could point up or down
- `color` (optional) the color scheme of the thumb. the default is 'white'. The best options tend to be the light colors (e.g., `green-light`, `red-light`, `blue-light`)
- `width` (optional) the initial width of the image. Default is 140px

```md
<Thumb color='green-light' width="300px" v-drag />
```

Renders as:

<Thumb color='green-light' width="300px"/>

```md
<Thumb color="sky-light"  v-drag />
```

Renders as:

<Thumb color="sky-light" />

```md
<Thumb color="red-light" dir='down' v-drag />
```

Renders as:

<Thumb color="red-light" dir='down'/>
