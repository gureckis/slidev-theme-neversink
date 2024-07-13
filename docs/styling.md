# Styling

In addition to [layouts](/layouts) and [components](/components), **Neversink** also
provides some helpful CSS classes to help with common slide formatting tasks.

These are included in `styles/neversink.css`. Each class in this file begins with `ns-c-` to indicate that it is a Neversink class.

## Colors

In addition to the main color [schemes](/colors) there are some additional short hand classes you can use in your slides content.

| Alias                  | Equivalent                     |
| ---------------------- | ------------------------------ |
| `ns-c-bk-scheme`       | `neversink-black-scheme`       |
| `ns-c-wh-scheme`       | `neversink-white-scheme`       |
| `ns-c-dk-scheme`       | `neversink-dark-scheme`        |
| `ns-c-lt-scheme`       | `neversink-light-scheme`       |
| `ns-c-nv-scheme`       | `neversink-navy-scheme`        |
| `ns-c-nv-lt-scheme`    | `neversink-navy-light-scheme`  |
| `ns-c-COLOR-scheme`    | `neversink-COLOR-scheme`       |
| `ns-c-COLOR-lt-scheme` | `neversink-COLOR-light-scheme` |

where color can be any of the [colors](/colors) in the project.

## Tight bullets

If you want to make bullets a little closer together to make spaceadd the `class='ns-c-tight'`

```md
<div class="ns-c-tight">

- Hi
- There
- I need space
</div>
```

Other options are `ns-c-tight` and `ns-c-supertight`.

## References

Including references often you want to include them but have them fade a bit relative to the main content of the tslide for this `ns-c-cite` is useful as it
applies a smaller, italic, and gray color to the text.

```css
.ns-c-cite {
  font-size: 0.75em;
  font-style: italic;
  @apply text-gray-400;
}
```

To position the cittion on the bottom left of the slide add `ns-c-cite-bl` for `bottom-left`.

```css
.ns-c-cite-bl {
  text-align: left;
  margin-bottom: 0.85em;
  margin-left: 1.5em;
  margin-top: auto;
}
```

## Quote

For quotes that appear outside the context of a [quote layout](/layouts/quote) you can use `ns-c-quote` to apply a larger font size and italic style.

```css
.ns-c-quote {
  font-family: var(--neversink-quote-font);
  font-weight: 300;
  @apply leading-relaxed;
}
```

## Icon links

If you write an icon in a link it includes the underline styleing. To remove that use
`ns-c-iconlink`.

```css
/* for links that are icons.  removes underlining which is default for links in markdown parser */
.ns-c-iconlink a {
  border-style: none !important;
  border-bottom: none !important;
}
```

## For putting images in grids

```
.ns-c-imgtile img {
  width: 100%;
  height: fit-content;
  object-fit: cover;
}
```

## Border

I forgot why i made this utility

```css
.ns-c-border {
  border-left: 0.25em solid var(--neversink-text-color);
  background-color: var(--neversink-bg-color);
  color: var(--neversink-text-color);
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
}
```
