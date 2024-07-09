# `layout: credits`

## Description

The `layout: credits` make a scrolling credits slide simliar to the end of a movive. The slide will automatically scroll the content up the screen. The actual logic for the scrolling is handled by the [CreditScroll component](/components/creditscroll).

## Frontmatter

- `layout: credits` (required).
- `color:` (optional) can be any of the [color scheme](/colors) options. If not provided, the default color is `white`.
- `speed:` (optional) the speed of the scrolling. Default is `0.5`. Higher numbers are faster.
- `loop:` (optional) if the credits should loop back to the beginning. Default is `false`.

  Example:

```yaml
---
layout: credits
color: light
speed: 2.0
loop: true
---
```

## Slots

This slide just uses the default slot for the content.

## Examples

### Basic example

```md
---
layout: credits
color: light
---

<div class="grid text-size-4 grid-cols-3 w-3/4 gap-y-10 auto-rows-min ml-auto mr-auto">
<div class="grid-item text-center mr-0- col-span-3">
  
  This is the `layout: credits` slide.  It's a movie-like scrolling credits!
</div>
<div class="grid-item text-center mr-0- col-span-3">
  <strong>Cast</strong><br> 
  <span class="font-size-3 mt-0">(In order of appearance)</span>
</div>
<div class="grid-item text-right mr-4 col-span-1"><strong>Study 1</strong></div>
<div class="grid-item col-span-2">Person 1 <i>as PhD student</i>&nbsp;<mdi-open-in-new class="font-size-3 mb-0.5" /><br/>Person 2 <i>as Co-PI</i>&nbsp;<mdi-open-in-new class="font-size-3 mb-0.5" /></div>
<div class="grid-item text-right mr-4 col-span-1"><strong>Study 2</strong></div>
<div class="grid-item col-span-2">Person 3 <i>as Postdoc</i>&nbsp;<mdi-open-in-new class="font-size-3 mb-0.5" /><br/>Person 4 <i>as Co-PI</i>&nbsp;<mdi-open-in-new class="font-size-3 mb-0.5" /></div>
<div class="grid-item text-right mr-4 col-span-1"><strong>Experiments</strong></div>
<div class="grid-item col-span-2">Smile 🫠</div>
<div class="grid-item text-right mr-4 col-span-1"><strong>Funding</strong></div>
<div class="grid-item col-span-2">National Science Foundation<br/>
National Institute of Health</div>
<div class="grid-item text-right mr-4 col-span-1"><strong>Slides</strong></div>
<div class="grid-item col-span-2">
Slidev<br/>
Unocss<br/>
Figma<br/>
Vuejs<br/>
Vite<br/>
</div>
<div class="grid-item col-span-3 text-center mt-180px mb-auto font-size-1.5rem"><strong>Questions?</strong></div>
</div>
```

Renders as:

### Dark like the movies, and fast

```md
---
layout: credits
color: dark
speed: 4.0
loop: true
---

<div class="grid text-size-4 grid-cols-3 w-3/4 gap-y-10 auto-rows-min ml-auto mr-auto">
<div class="grid-item text-center mr-0- col-span-3">
  
  This is the `layout: credits` slide.  It's a movie-like scrolling credits!
</div>
<div class="grid-item text-center mr-0- col-span-3">
  <strong>Cast</strong><br> 
  <span class="font-size-3 mt-0">(In order of appearance)</span>
</div>
<div class="grid-item text-right mr-4 col-span-1"><strong>Study 1</strong></div>
<div class="grid-item col-span-2">Person 1 <i>as PhD student</i>&nbsp;<mdi-open-in-new class="font-size-3 mb-0.5" /><br/>Person 2 <i>as Co-PI</i>&nbsp;<mdi-open-in-new class="font-size-3 mb-0.5" /></div>
<div class="grid-item text-right mr-4 col-span-1"><strong>Study 2</strong></div>
<div class="grid-item col-span-2">Person 3 <i>as Postdoc</i>&nbsp;<mdi-open-in-new class="font-size-3 mb-0.5" /><br/>Person 4 <i>as Co-PI</i>&nbsp;<mdi-open-in-new class="font-size-3 mb-0.5" /></div>
<div class="grid-item text-right mr-4 col-span-1"><strong>Experiments</strong></div>
<div class="grid-item col-span-2">Smile 🫠</div>
<div class="grid-item text-right mr-4 col-span-1"><strong>Funding</strong></div>
<div class="grid-item col-span-2">National Science Foundation<br/>
National Institute of Health</div>
<div class="grid-item text-right mr-4 col-span-1"><strong>Slides</strong></div>
<div class="grid-item col-span-2">
Slidev<br/>
Unocss<br/>
Figma<br/>
Vuejs<br/>
Vite<br/>
</div>
<div class="grid-item col-span-3 text-center mt-180px mb-auto font-size-1.5rem"><strong>Questions?</strong></div>
</div>
```

Renders as:
