# `layout: intro`

<img src="/screenshots/4.png" alt="Cover slide example" width="600" class="screenshot mb-10 mt-10"/>

## Description

The `layout: intro` layout is an alternative for the first slide of your presentation. It is a full screen slide with a title and subtitle. The title is displayed in a large font size and the subtitle is displayed in a smaller font size. The title and subtitle are centered vertically on the slide. This isn't so different from `layout: cover` the main difference being the line beneath the title.

## Frontmatter

- `layout:` (required) is always `cover`.
- `color:` (optional) can be any of the [color scheme](/colors) options. If not provided, the default color is `white`.

Example:

```yaml
---
layout: intro
color: white
---
```

## Slots

This `cover` slide has one slot called `:: notes ::` which is optional. This slot is used to add notes to the slide. The notes are displayed in a smaller font size at the bottom of the slide.

## Examples

```md
---
layout: intro
color: light
---

# This is my intro slide

by **My Author**

:: note ::

\* This is a note about the slide.
```

Renders as:

<img src="/screenshots/4.png" alt="Intro slide example" width="600" class="screenshot"/>

```md
---
layout: cover
color: indigo
---

# This is my intro slide in indigo

by **My Author**

:: note ::

\* This is a note about the slide.
```

<img src="/screenshots/5.png" alt="Intro slide example" width="600" class="screenshot"/>
