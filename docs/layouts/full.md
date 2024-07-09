# `layout: full`

<img src="/screenshots/29.png" alt="full slide example" width="600" class="screenshot mb-10 mt-10"/>

## Description

The `layout: full` fill the entire slide except for some margins. This layout is useful for slides that need to display a lot of content or images.

## Frontmatter

- `layout: full` (required).
- `color:` (optional) can be any of the [color scheme](/colors) options. If not provided, the default color is `white`.
  Example:

```yaml
---
layout: full
---
```

## Slots

This slide just uses the default slot for the content.

## Examples

### Basic example showing some figures

```md
---
layout: full
title: Full Layout - 2 Col Fig
---

This is an example of using unocss atomic classes to put two figures side by side.

<div class="grid w-full h-fit grid-cols-2 grid-rows-2 mt-10 mb-auto">
<div class="grid-item grid-col-span-1"><img src="/images/scatter1.svg" /></div>
<div class="grid-item grid-col-span-1"><img src="/images/scatter1.svg" /></div>
<div class="grid-item grid-col-span-2 text-center h-fit">

**Figure show this**: this is a two column figure

</div>
</div>
```

Renders as:

<img src="/screenshots/29.png" alt="full slide example" width="600" class="screenshot"/>

### Addressable area

```md
---
layout: full
color: neutral
title: Full Layout
---

<div class='border-1px v-full h-full p-5'>

This is `layout: full` which fills the whole screen for the most part.
The grey box is just showing you the full addressable space.
Full can be useful for arbitrary layouts such as on the next slide which uses
the `v-drag` directive to position elements.

</div>
```

Renders as:

<img src="/screenshots/30.png" alt="full slide example" width="600" class="screenshot"/>

### A busy example

```md
---
layout: full
title: Full with Arbitrary Layout
---

<div class='v-full h-full'>

<SpeechBubble position="l" shape="round"  color='pink-light' v-drag="[555,342,274,58]">

Hello, I'm an **ice cream**!
</SpeechBubble>

<SpeechBubble position="bl" shape="round"  color='emerald-light' v-drag="[445,258,274,57]">

Hello, I'm **kawaii**.
</SpeechBubble>

<SpeechBubble position="r" shape="round" animation="float"  color='sky' v-drag="[143,391,274,84]">

I'm v-dragged out and ==floating==.
</SpeechBubble>

<IceCream :size="150" mood="lovestruck" color="#FDA7DC" v-drag="[439,341,85,150]" />

<div class="tight" v-drag="[143,33,277,214]">

<span class="bg-red-100 text-red-600 p-2 border-l-6 border-2 border-red-200 rounded-lg pl-4 pr-4">Here's a list of somethings</span>

- Novelty bonuses
- Cumulative prediction error
- Learning progress
- Surprise
- Suspense
- Information gain

</div>

<div class="tight" v-drag="[461,63,293,148,17]">

<span class="bg-emerald-100 text-emerald-500 p-2 border-l-6 border-2 border-emerald-200 rounded-lg pl-4 pr-4">Here's another list of things</span>

- Structured behaviors
- Compositional
- Communicable

</div>

</div>
```

Renders as:

<img src="/screenshots/31.png" alt="full slide example" width="600" class="screenshot"/>
```
