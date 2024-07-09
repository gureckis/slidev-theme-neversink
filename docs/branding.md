# Branding

## Slide numbers

Neversink provides a simple and color-responsive slide counter in the lower right corner of the slides.
It will show the current slide number and the total number of slides. In addition it can display a slug or
string of your choice.

To configure the slug simply add `neversink_slug` to your frontmatter of your entire slug deck. For example:

```yaml
---
colorSchema: light
layout: cover
title: Base Template
theme: neversink
neversink_slug: 'Neversink Example Deck'
---
```

If this appears in the frontmatter for the first slide the slug will be set for all slides.
You can override it on any specific slide by just adding `neversink_slug` to the frontmatter of that slide.

```yaml
---
layout: cover
color: light
neversink_slug: 'Neversink Example Deck!!!!'
---
```

You can hide the slide information on any given slides by setting `slide_info: false` in the front
matter of that specific slide

```yaml
---
layout: cover
color: light
slide_info: false
---
```

You can of course override the default slide counter by including a custom `slide-bottom.vue` or `global-bottom.vue` in your project folder (see [Slidev docs](https://sli.dev/custom/global-layers))
