# Box

## Description

Draws an empty or filled box. Useful for highlighting and grouping things.

## `Box` component

The `Box` component is used to just draw a rectangle. It has the following props:

- `shape` (optional) the shape of the box. There are four values connected with a kebob style notation. The first element is the shape which can be `s` (square), `r` (rounded) or `f` (full) which is practically a circle. The second element is the border type which can be `s` (solid), `d` (dashed) or `o` (dotted). The third element is the border radius in pixels. The fourth element is the opacity of the fill (0 = transparent, 100=opaque).
  For example, the default is 's-s-2-0' which is a rounded rectangle with a 2px border and transparent fill. A few examples appear below.
- `size` (optional) the size of the square. The default is '150px'.
- `color` (optional) the color of the shape. It uses the color schemes in the theme. The default is 'white' (which means a black border and white fill).
- `custom` (optional) any custom classes you want to add to the box. The default is none.

```md
<Box v-drag />
```

Renders as:

<Box  />

well a box, what did you expect.

But of course you can customise it:

```md
<Box shape='r-d-8-0' width='200px' custom='m-10 ' />
```

<Box shape='r-d-8-0' width='200px' custom='m-10 ' />

```md
<Box shape='f-o-5-50' color='sky-light' custom='m-10' />
```

<Box shape='f-o-5-50' color='sky-light' custom='m-10' />

more transparent:

```md
<Box shape='f-o-5-10' color='sky-light' custom='m-10' />
```

<Box shape='f-o-5-10' color='sky-light' custom='m-10' />

If can include text as well using a slot

```md
<Box>Hi there</Box>
```

renders as:

<Box>Hi there</Box>

You might like to syle it a bit

```md
<Box custom='pt-10'>Hi there</Box>
```

<Box custom='p-10'>Hi there</Box>
