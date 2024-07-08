# `layout: cover`

<img src="/screenshots/2.png" alt="Cover slide example" width="600" class="screenshot mb-10 mt-10"/>

## Description

The `layout: cover` layout is presumably the first slide of your presentation. It is a full screen slide with a title and subtitle. The title is displayed in a large font size and the subtitle is displayed in a smaller font size. The title has a line beneath it. The title and subtitle are centered vertically on the slide.

## Frontmatter

- `layout: cover` (required).
- `color:` (optional) can be any of the [color scheme](/colors) options. If not provided, the default color is `white`.

Example:

```yaml
---
layout: cover
color: white
---
```

## Slots

This `cover` slide has one slot called `:: notes ::` which is optional. This slot is used to add notes to the slide. The notes are displayed in a smaller font size at the bottom of the slide.

## Examples

### Basic example

```md
---
layout: cover
color: light
---

# This is my slide title

by **My Author**

:: note ::

\* This is a note about the slide.
```

Renders as:

<img src="/screenshots/2.png" alt="Cover slide example" width="600" class="screenshot"/>

### It's not easy being green

```md
---
layout: cover
color: emerald-light
---

# It's not easy being green

by **Kermit the Frog**

:: note ::

\* This is emerald, not green.
```

Renders as:

<img src="/screenshots/3.png" alt="Cover slide example" width="600" class="screenshot"/>
