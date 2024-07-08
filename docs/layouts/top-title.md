# `layout: top-title`

<img src="/screenshots/15.png" alt="Top title slide example" width="600" class="screenshot mb-10 mt-10"/>

## Description

The `layout: top-title` layout adds a bit of color to the default layout. The title is anchored to the top of the slide and the content appears below.

A default slot is provided for content that appears before a named slot. This content will appear at the bottom of the slide.

## Frontmatter

- `layout: top-title` (required).
- `color:` (optional) can be any of the [color scheme](/colors) options. If not provided, the default color is `light`.
- `align:` (optional) determines the text alignment of the title. The options are `l` for left, `c` for center, or `r` for right. The default is `l`.

Example:

```yaml
---
layout: top-title
align: l
color: light
---
```

## Slots

This `top-title` slide has two named slots which are all optional:
`:: title ::`, and `:: content ::`. In addition, the `:: default ::` slot exits for any content that appears before a named slot. It will appear at the bottom of the slide.
If the title is not provided the color space for it will still appear.
If content is not provided the default slot will reclaim the space.

A common use case for the default slot is to include things like [StickyNotes](/components/stickynote) in this default section and then use Slidev's `v-drag` directive to move them into position on the slide. An example below make use of this technique.

## Examples

### Basic example

```md
----
layout: top-title
color: amber
align: l
---

\* This is the default slot.

:: title ::

# This is `top-title`

:: content ::

- There are two slots: `:: title ::` and `:: content ::` along with the default which is implicit before any named slots.

- The `color` parameter determines the color scheme of the slide.

- The <code>align</code> parameter determines the alignment of the title.

If the title is missing a reasonable ribbon of color will remain.
```

Renders as:

<img src="/screenshots/15.png" alt="two-cols-header slide example" width="600" style="border: 1px solid #ccc;"/>

### Right align the title

```md
---
layout: top-title
color: sky
align: r
---

:: title ::

# This is `top-title`

:: content ::

The title is right aligned.
```

Renders as:

<img src="/screenshots/16.png" alt="Cover slide example" width="600" style="border: 1px solid #ccc;"/>

### No title at all

```md
---
layout: top-title
color: pink
---

:: content ::

See this has no title, but still has a color band.
```

<img src="/screenshots/17.png" alt="Cover slide example" width="600" style="border: 1px solid #ccc;"/>
