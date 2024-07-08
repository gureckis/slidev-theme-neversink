# `layout: two-cols-title`

<img src="/screenshots/8.png" alt="two-cols-title slide example" width="600" class="screenshot mb-10 mt-10"/>

## Description

The `layout: two-cols-title` layout is among the most common layouts in talks. It has an optional title along the top or bottom of the slide, and then the main section is divided into two columns. Because the spacing and alignment of columns often needs to be adjusted on a case-by-case basis, this layout provides a lot of flexibility by creating a simple design system you can use to fine-tune the two column/title arrangement.

<!--@include: ../parts/columnsystem.md-->

The position of the title on the slide can also be configured. It can be at the top or bottom of the slide, or hidden/missing entirely. The default position is at the top:

<img src="/layouts/two-col-title-titlepos.svg" alt="two-cols-header slide example" width="300" />

A default slot is provided for content that appears before a named slot. This content will appear at the bottom of the slide.

## Frontmatter

- `layout: two-cols-header` (required).
- `color:` (optional) can be any of the [color scheme](/colors) options. If not provided, the default color is `white`.
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
- `titlepos:` (optional) is either `t` (top), `b` (bottom), or `n` (none). This determines the position of the title. The default value is `t`.

Example:

```yaml
---
layout: two-cols-header
columns: is-4
align: c-rm-lt
color: light
titlepos: t
---
```

## Slots

This `two-cols-title` slide has three name slots which are all optional:
`:: title ::`, `:: left ::`, and `:: right ::`. In addition, the `:: default ::` slot exits for any content that appears before a named slot. It will appear at the bottom of the slide.
If the title is not provided the space will be reallocated the columns. If the left or right is not provided the space for them will remain according to `columns:` frontmatter.

A common use case for the default slot is to include things like [StickyNotes](/components/StickyNote) in this default section and then use Slidev's `v-drag` directive to move them into position on the slide. An example below make use of this technique.

## Examples

### Basic example

```md
---
layout: two-cols-title
columns: is-6
align: l-lt-lt
---

:: title ::

# This is `two-cols-title`

:: left ::

This is a configurable layout which is very common in presentations.

- There are three slots: `:: title ::`, `:: left ::`, and `:: right ::` along with the default which is implicit before any named slots.

- It additionally provides four configuration options in the slide YAML front matter:
  `color`, `columns`, `align`, and `titlepos`.

- `color` is the color scheme.

- `columns` is the relative spacing given to the left versus right column ([see docs](https://gureckis.github.io/slidev-theme-neversink/layouts/two-cols-title)).

:: right ::

- The <code>align</code> parameter determines how the columns look. The notation is for example <code>align: l-cm-cm</code>. The first part is for the header, the second for the left column, the third part is for the right column ([see docs](https://gureckis.github.io/slidev-theme-neversink/layouts/two-cols-title)).

- The <code>titlepos</code> parameter determines where the title appears. The options are `t` for top, `b` for bottom, or `n` for none/hidden. The default is `t` ([see docs](https://gureckis.github.io/slidev-theme-neversink/layouts/two-cols-title)).
```

Renders as:

<img src="/screenshots/8.png" alt="two-cols-header slide example" width="600" style="border: 1px solid #ccc;"/>

### Less content on the left now so lets rebalance things

```md
---
layout: two-cols-title
columns: is-3
align: c-lt-lt
---

:: title ::

# This is `two-cols-title`

:: left ::

This is a configurable layout which is very common in presentations.

- There are three slots: `:: title ::`, `:: left ::`, and `:: right ::` along with the default which is implicit before any named slots.

:: right ::

- `columns` is the relative spacing given to the left versus right column ([see docs](https://gureckis.github.io/slidev-theme-neversink/layouts/two-cols-title))

- The <code>align</code> parameter determines how the columns look. The notation is for example
  <code>align: l-cm-cm</code>. The first part is for the header, the second for the left column, the third part is for the right column ([see docs](https://gureckis.github.io/slidev-theme-neversink/layouts/two-cols-title))

- The <code>titlepos</code> parameter determines where the title appears. The options are `t` for top, `b` for bottom, or `n` for none/hidden. The default is `t`.([see docs](https://gureckis.github.io/slidev-theme-neversink/layouts/two-cols-title))
```

Renders as:

<img src="/screenshots/9.png" alt="two-cols-header slide example" width="600" style="border: 1px solid #ccc;"/>

### Really flexing the layout system now

```md
---
layout: two-cols-title
columns: is-2
align: r-lt-lt
color: light
---

This is the default slot, if you want to use it!

:: title ::

# Another example

:: left ::
This is the left column it has been shrunk down to 2 units.

:: right ::
This gave more space to the right column.

- You can put more points
- You can make them longer
- You can place more text and images here
```

<img src="/screenshots/10.png" alt="two-cols-header slide example" width="600" style="border: 1px solid #ccc;"/>

### Using color and the default slot

```md
---
layout: two-cols-title
columns: is-2
align: c-rm-lt
color: dark
---

<StickyNote color="amber-light" textAlign="left" width="180px" title="Hi" v-drag="[689,277,180,180,18]">

Hello, I'm a **sticky note**.
</StickyNote>

:: title ::

# This is `two-cols-title` with center title

:: left ::

The left column is `rm` which means right-middle.

:: right ::

The right content is left-top aligned `lt`.

The sticky note appears in the `:: default ::` slot and then used v-drag to move it into position.
```

<img src="/screenshots/11.png" alt="two-cols-header slide example" width="600" style="border: 1px solid #ccc;"/>

### Moving the title to the bottom

```md
---
layout: two-cols-title
columns: is-3
align: r-lt-lt
titlepos: b
---

:: title ::

# This is `two-cols-title`

:: left ::

This is a configurable layout which is very common in presentations.

- There are three slots: `:: title ::`, `:: left ::`, and `:: right ::` along with the default which is implicit before any named slots.

:: right ::

- The <code>align</code> parameter determines how the columns look. The notation is for example
  <code>align: l-cm-cm</code>. The first part is for the header, the second for the left column, the third part is for the right column ([see docs](https://gureckis.github.io/slidev-theme-neversink/layouts/two-cols-title))

- The <code>titlepos</code> parameter determines where the title appears. The options are `t` for top, `b` for bottom, or `n` for none/hidden. The default is `t`.([see docs](https://gureckis.github.io/slidev-theme-neversink/layouts/two-cols-title))
```

<img src="/screenshots/12.png" alt="two-cols-header slide example" width="600" style="border: 1px solid #ccc;"/>

### No title

```md
---
layout: two-cols-title
columns: is-3
align: r-lt-lt
---

:: left ::

This is a configurable layout which is very common in presentations.

- There are three slots: `:: title ::`, `:: left ::`, and `:: right ::` along with the default which is implicit before any named slots.

:: right ::

- The <code>align</code> parameter determines how the columns look. The notation is for example
  <code>align: l-cm-cm</code>. The first part is for the header, the second for the left column, the third part is for the right column ([see docs](https://gureckis.github.io/slidev-theme-neversink/layouts/two-cols-title))

- The <code>titlepos</code> parameter determines where the title appears. The options are `t` for top, `b` for bottom, or `n` for none/hidden. The default is `t`.([see docs](https://gureckis.github.io/slidev-theme-neversink/layouts/two-cols-title))
```

<img src="/screenshots/13.png" alt="two-cols-header slide example" width="600" style="border: 1px solid #ccc;"/>

### Title is back but no left column (just spaced for it)

```md
---
layout: two-cols-title
columns: is-3
align: r-lt-lt
---

:: title ::

# This is `two-cols-title`

:: right ::

- The <code>align</code> parameter determines how the columns look. The notation is for example
  <code>align: l-cm-cm</code>. The first part is for the header, the second for the left column, the third part is for the right column ([see docs](https://gureckis.github.io/slidev-theme-neversink/layouts/two-cols-title))

- The <code>titlepos</code> parameter determines where the title appears. The options are `t` for top, `b` for bottom, or `n` for none/hidden. The default is `t`.([see docs](https://gureckis.github.io/slidev-theme-neversink/layouts/two-cols-title))
```

<img src="/screenshots/14.png" alt="two-cols-header slide example" width="600" style="border: 1px solid #ccc;"/>
