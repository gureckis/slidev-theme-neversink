# `layout: quote`

<img src="/screenshots/26.png" alt="quote slide example" width="600" class="screenshot mb-10 mt-10"/>

## Description

The `layout: quote` is used when you want to provide a full slide quotation for dramatic effect in your presentation. The quote is displayed in a large font size and the author is displayed in a smaller font size. The quote and author are centered vertically on the slide.

## Frontmatter

- `layout: quote` (required).
- `color:` (optional) can be any of the [color scheme](/colors) options. If not provided, the default color is `light`.
- `quotesize:` (optional) the font size of the quote. Default is `text-2xl`. Based on tailwind sizes.
- `authorsize:` (optional) the font size of the quote. Default is `text-l`. Based on tailwind sizes.
- 'author:' (optional) the author of the quote. If not provided, the author will not be displayed.

Example:

```yaml
---
layout: quote
color: sky-light
quotesize: text-m
authorsize: text-s
author: 'Todd Gureckis'
---
```

## Slots

This slide just uses the default slot for the quote. Additional formatting can be provided there.

## Examples

### Basic example

```md
---
layout: quote
color: sky-light
quotesize: text-m
authorsize: text-s
author: 'Todd Gureckis'
---

"This is a quote slide. It has a frontmatter options for the size of the text (`quotesize: text2xl` and `authorsize: text-l`). I feel it is a little uninspired but might save you some time."
```

Renders as:

<img src="/screenshots/26.png" alt="quote slide example" width="600" class="screenshot"/>
