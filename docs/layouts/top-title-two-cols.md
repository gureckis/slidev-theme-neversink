# `layout: top-title-two-cols`

<img src="/screenshots/18.png" alt="Top title slide example" width="600" class="screenshot mb-10 mt-10"/>

## Description

The `layout: top-title-two-cols` adds a configurable two column layout to the [`top-title` layout](/layouts/top-title). The title is displayed in a color band anchored to the top of the slide and the two column content is displayed below. Because the spacing and alignment of columns often needs to be adjusted on a case-by-case basis, this layout provides a lot of flexibility by creating a simple design system you can use to fine-tune the two column arrangement.

<!--@include: ../parts/columnsystem.md-->

A default slot is provided for content that appears before a named slot. This content will appear at the bottom of the slide.

## Frontmatter

- `layout: top-title-two-cols` (required).
- `color:` (optional) can be any of the [color scheme](/colors) options. If not provided, the default color is `light`.
- `columns:` (optional) gives the width to the left and right column. The default value is `is-one-half`. As described above, the slide is divided into 12 column units. With <code>columns: is-1-11</code> the left column is 1/12 wide and the the right columns is 11/12 wide. The component admits a short hand of only specifying the left column (<code>columns: is-1</code> does the same thing). Here is a full list of the available shorthands:

<div class="ml-auto mr-aut w-full">

| Left:Right Column Size | Frontmatter short names                                                                   |
| :--------------------- | :---------------------------------------------------------------------------------------- |
| 1:11                   | `is-1`<br>`is-1-11`<br>`is-one-twelfth`                                                   |
| 2:10                   | `is-2`<br>`is-2-10`<br>`is-one-sixth`                                                     |
| 3:9                    | `is-3`<br>`is-3-9`<br>`is-one-quarter`                                                    |
| 4:8                    | `is-4`<br>`is-4-8`<br>`is-one-third`                                                      |
| 5:7                    | `is-5`<br>`is-5-7`                                                                        |
| 6:6                    | `is-6`<br>`is-6-6`<br>`is-two-quarters`<br>`is-two-fourths`<br>`is-one-half`<br>`is-half` |
| 7:5                    | `is-7`<br>`is-7-5`                                                                        |
| 8:4                    | `is-8`<br>`is-8-4`<br>`is-two-thirds`                                                     |
| 9:3                    | `is-9`<br>`is-9-3`<br>`is-three-quarters`<br>`three-fourths`                              |
| 10:2                   | `is-10`<br>`is-10-2`                                                                      |
| 11:1                   | `is-11`<br>`is-11-1`                                                                      |

</div>

- `align:` (optional) determines the alignment of the content in different parts of the slides. The options are specified in three parts using [kebab notation](https://www.theserverside.com/definition/Kebab-case). The first segment applies to the title, the second to the left column, and the third to the right column. i.e., `title-left-right`. The first letter of each segment is either `l` for left, `c` for center, or `r` for right. This sets the text alignment of that section. The second letter of the left and right segments are either `t` for top, `m` for middle, or `b` for bottom. This sets the vertical alignment of the content in that column. **The title segment only can configure the `l/c/r` alignment** since it only occupies a narrow band at the top of the slide. The default value is `l-lt-lt` which aligns the content in the title to left margin, the content of the left column to the left, the content in the left column to the top, and the content in the right column to the top.

Example:

```yaml
---
layout: top-title-two-cols
columns: is-5
align: l-lr-lr
color: amber-light
---
```

## Slots

This `top-title-two-cols` slide has three named slots which are all optional:
`:: title ::`, `:: left ::`, and `:: right ::`. In addition, the `:: default ::` slot exits for any content that appears before a named slot. It will appear at the bottom of the slide.
If the title is not provided the color space for it will still appear.

A common use case for the default slot is to include things like [StickyNotes](/components/StickyNote) in this default section and then use Slidev's `v-drag` directive to move them into position on the slide. An example below make use of this technique.

## Examples

### Basic example

```md
---
layout: top-title-two-cols
columns: is-6
align: l-lt-lt
color: violet
---

\* Default slot content is here!

:: title ::

# This is `two-cols-title`

:: left ::

This is a configurable layout which is very common in presentations. It differs from `two-cols-title` in that there is a color band for the title.

- There are three slots: `:: title ::`, `:: left ::`, and `:: right ::` along with the default which is implicit before any named slots.

:: right ::

In terms of parameters:

- `columns` is the relative spacing given to the left versus right column ([see docs](https://gureckis.github.io/slidev-theme-neversink/layouts/two-cols-title))

- The <code>align</code> parameter determines how the columns look. The notation is for example
  <code>align: l-cm-cm</code>. The first part is for the header, the second for the left column, the third part is for the right column ([see docs](https://gureckis.github.io/slidev-theme-neversink/layouts/top-title-two-cols))

- `color` is the color scheme to the title bar.
```

Renders as:

<img src="/screenshots/18.png" alt="two-cols-header slide example" width="600" style="border: 1px solid #ccc;"/>

### Missing slots

```md
---
layout: top-title-two-cols
color: pink
---

:: right ::

This has no title or left column, but still has a color band.
```

Renders as:

<img src="/screenshots/19.png" alt="top-title-two-cols slide example" width="600" style="border: 1px solid #ccc;"/>

### Alignment changes

```md
---
layout: top-title-two-cols
color: violet-light
align: r-rm-lt
columns: is-3
---

:: title ::

# This is `two-cols-title`

:: left ::
This is a note

:: right ::
About this content on the right

- Which has various things to say
- This layout is nice to look at!
```

<img src="/screenshots/20.png" alt="top-title-two-cols slide example" width="600" style="border: 1px solid #ccc;"/>

### Matchy-matchy sticky

```md
---
layout: top-title-two-cols
columns: is-2
align: l-rm-lt
color: violet-light
---

<StickyNote color="violet-light" textAlign="left" width="180px" title="Hi" v-drag="[689,277,180,180,18]">

Hello, I'm a matchy-matchy **sticky note**.
</StickyNote>

:: title ::

### This is a smaller title

:: left ::

The left column is `rm` which means right-middle.

:: right ::

The right content is left-top aligned `lt`.

The sticky note appears in the `:: default ::` slot and then used v-drag to move it into position.
```

<img src="/screenshots/21.png" alt="top-title-two-cols slide example" width="600" style="border: 1px solid #ccc;"/>
