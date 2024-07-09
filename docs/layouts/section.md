# `layout: section`

<img src="/screenshots/27.png" alt="section slide example" width="600" class="screenshot mb-10 mt-10"/>

## Description

The `layout: section` is used to provide a break between sections of a talk. This section slide might provide a new sub-title for the upcoming section or summarize some key points from the previous section. The section slide is centered vertically on the slide and can be customized with a color scheme.

## Frontmatter

- `layout: section` (required).
- `color:` (optional) can be any of the [color scheme](/colors) options. If not provided, the default color is `light`.
  Example:

```yaml
---
layout: section
color: sky-light
---
```

## Slots

This slide just uses the default slot for the content.

## Examples

### Basic example

```md
---
layout: section
---

# The `section` layout

This is a section slide. It can be use to make a noticable point or break between sections.
```

Renders as:

<img src="/screenshots/27.png" alt="section slide example" width="600" class="screenshot"/>

### Customized example

```md
---
layout: section
color: navy
---

<div class="w-1/2 ml-30">

# The `section` layout

<hr>

<span class='text-amber-300'>
You can use HTML and inline CSS to modify the look and feel.
</span>

</div>
```

Renders as:

<img src="/screenshots/28.png" alt="section slide example" width="600" class="screenshot"/>
