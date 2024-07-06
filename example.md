---
colorSchema: light
layout: cover
routerMode: hash
title: Base Template
theme: ./
neversink_string: "Neversink Example Deck"
---

# Neversink

A [Slidev](https://sli.dev) theme designed by **Todd Gureckis**   
<div class="iconlink">

_New York University_ <a href="https://todd.gureckislab.org" class="iconlink"><mdi-open-in-new /></a>  
</div>



---
layout: default
---

# Slidev Neversink Theme


Neversink is a theme for education and academic presentations.  It is designed to be flat, minimal, and easy to read.  It is based on the default Slidev theme but with some additional features and color schemes that have vauge reference to the [metropolis](https://github.com/matze/mtheme) Beamer theme.

**Why use it?**

- It has a variety of ==color themes== and ==layouts== to choose from make your life easier.  

- It also has some whimsical elements like movie-style scrolling credits, speech bubbles, and admonitions that make your presentations more memorable.

- It's not to hard to customize things.

- It strives to be well documented and easy to use! 


Ultimately, it was designed based on observations of common slide layouts used in my years as a academic researcher and educator. You can find the source code on [GitHub](http://github.com/gureckis/slidev-theme-neversink).

---
layout: default
---

# How to install


The theme depends on Slidev.  So you need to have that [installed first](https://sli.dev/guide/install).  Then you can install the theme with npm:

```bash
npm install slidev-theme-neversink
```

Then create a slidev markdown file (e.g., `slides.md`) and add the theme to the frontmatter of your first slide:

```md
---
theme: neversink
---
```

Then you are basically ready to go!


---
layout: default
---

# Color schemes


Let's start with colors.  

The project uses tailwind-like color schemes arranged in ==monochromatic pairs==. These boxes show the options and names:

**B&W**:

<span class="text-white bg-black p-1 pl-3 pr-3 m-1 rounded font-size-3">black</span>
<span class="text-black bg-white p1 pl-3 pr-3 m-1 rounded font-size-3">white</span>
<span class="text-gray-100 bg-gray-800 p1 pl-3 pr-3 m-1 rounded font-size-3">dark</span>
<span class="text-gray-800 bg-gray-100 p1 pl-3 pr-3 m-1 rounded font-size-3">light</span>

**Light**:

<span class="bg-slate-100 text-slate-500 p1 pl-3 pr-3 m-1 rounded font-size-3">slate-light</span>
<span class="bg-gray-100 text-gray-500 p1 pl-3 pr-3 m-1 rounded font-size-3">gray-light</span>
<span class="bg-zinc-100 text-zinc-500 p1 pl-3 pr-3 m-1 rounded font-size-3">zinc-light</span>
<span class="bg-neutral-100 text-neutral-500 p1 pl-3 pr-3 m-1 rounded font-size-3">neutral-light</span>
<span class="bg-stone-100 text-stone-500 p1 pl-3 pr-3 m-1 rounded font-size-3">stone-light</span>
<span class="bg-red-100 text-red-500 p1 pl-3 pr-3 m-1 rounded font-size-3">red-light</span>
<span class="bg-orange-100 text-orange-500 p1 pl-3 pr-3 m-1 rounded font-size-3">orange-light</span>
<span class="bg-amber-100 text-amber-500 p1 pl-3 pr-3 m-1 rounded font-size-3">amber-light</span>
<span class="bg-yellow-100 text-yellow-500 p1 pl-3 pr-3 m-1 rounded font-size-3">yellow-light</span><br />
<span class="bg-lime-100 text-lime-500 p1 pl-3 pr-3 m-1 rounded font-size-3">lime-light</span>
<span class="bg-green-100 text-green-500 p1 pl-3 pr-3 m-1 rounded font-size-3">green-light</span>
<span class="bg-emerald-100 text-emerald-500 p1 pl-3 pr-3 m-1 rounded font-size-3">emerald-light</span>
<span class="bg-teal-100 text-teal-500 p1 pl-3 pr-3 m-1 rounded font-size-3">teal-light</span>
<span class="bg-cyan-100 text-cyan-500 p1 pl-3 pr-3 m-1 rounded font-size-3">cyan-light</span>
<span class="bg-sky-100 text-sky-500 p1 pl-3 pr-3 m-1 rounded font-size-3">sky-light</span>
<span class="bg-blue-100 text-blue-500 p1 pl-3 pr-3 m-1 rounded font-size-3">blue-light</span>
<span class="bg-indigo-100 text-indigo-500 p1 pl-3 pr-3 m-1 rounded font-size-3">indigo-light</span>
<span class="bg-violet-100 text-violet-500 p1 pl-3 pr-3 m-1 rounded font-size-3">violet-light</span><br />
<span class="bg-purple-100 text-purple-500 p1 pl-3 pr-3 m-1 rounded font-size-3">purple-light</span>
<span class="bg-pink-100 text-pink-500 p1 pl-3 pr-3 m-1 rounded font-size-3">pink-light</span>
<span class="bg-rose-100 text-rose-500 p1 pl-3 pr-3 m-1 rounded font-size-3">rose-light</span>
<span class="bg-fuchsia-100 text-fuchsia-500 p1 pl-3 pr-3 m-1 rounded font-size-3">fuchsia-light</span>
<span class="bg-gray-50 text-navy-900 p1 pl-3 pr-3 m-1 rounded font-size-3">navy-light</span>

**Regular**:

<span class="bg-slate-500 text-slate-100 p1 pl-3 pr-3 m-1 rounded font-size-3">slate</span>
<span class="bg-gray-500 text-gray-100 p1 pl-3 pr-3 m-1 rounded font-size-3">gray</span>
<span class="bg-zinc-500 text-zinc-100 p1 pl-3 pr-3 m-1 rounded font-size-3">zinc</span>
<span class="bg-neutral-500 text-neutral-100 p1 pl-3 pr-3 m-1 rounded font-size-3">neutral</span>
<span class="bg-stone-500 text-stone-100 p1 pl-3 pr-3 m-1 rounded font-size-3">stone</span>
<span class="bg-red-500 text-red-100 p1 pl-3 pr-3 m-1 rounded font-size-3">red</span>
<span class="bg-orange-500 text-orange-100 p1 pl-3 pr-3 m-1 rounded  font-size-3">orange</span>
<span class="bg-amber-500 text-amber-100 p1 pl-3 pr-3 m-1 rounded font-size-3">amber</span>
<span class="bg-yellow-500 text-yellow-100 p1 pl-3 pr-3 m-1 rounded font-size-3">yellow</span>
<span class="bg-lime-500 text-lime-100 p1 pl-3 pr-3 m-1 rounded font-size-3">lime</span>
<span class="bg-green-500 text-green-100 p1 pl-3 pr-3 m-1 rounded font-size-3">green</span>
<span class="bg-emerald-500 text-emerald-100 p1 pl-3 pr-3 m-1 rounded font-size-3">emerald</span>
<span class="bg-teal-500 text-teal-100 p1 pl-3 pr-3 m-1 rounded font-size-3">teal</span>
<span class="bg-cyan-500 text-cyan-100 p1 pl-3 pr-3 m-1 rounded font-size-3">cyan</span><br/>
<span class="text-gray-300 bg-navy-900 p1 pl-3 pr-3 m-1 rounded font-size-3">navy</span>
<span class="bg-sky-500 text-sky-100 p1 pl-3 pr-3 m-1 rounded font-size-3">sky</span>
<span class="bg-blue-500 text-blue-100 p1 pl-3 pr-3 m-1 rounded font-size-3">blue</span>
<span class="bg-indigo-500 text-indigo-100 p1 pl-3 pr-3 m-1 rounded font-size-3">indigo</span>
<span class="bg-violet-500 text-violet-100 p1 pl-3 pr-3 m-1 rounded font-size-3">violet</span>
<span class="bg-purple-500 text-purple-100 p1 pl-3 pr-3 m-1 rounded font-size-3">purple</span>
<span class="bg-pink-500 text-pink-100 p1 pl-3 pr-3 m-1 rounded font-size-3">pink</span>
<span class="bg-rose-500 text-rose-100 p1 pl-3 pr-3 m-1 rounded font-size-3">rose</span>
<span class="bg-fuchsia-500 text-fuchsia-100 p1 pl-3 pr-3 m-1 rounded font-size-3">fuchsia</span>


---
layout: default
---

# Color schemes

As a result in many places you can use the color schemes to help choose matching colors for your slides.  For example, we can make a slide with a sticky node using the `rose-light` color scheme, the `sky` color scheme, or the `amber-light` color scheme:

<StickyNote color="rose-light" textAlign="left" width="180px" v-drag="[122,253,180,180,-14]">

Hello, I'm a **redish sticky note** using `rose-light`.
</StickyNote>

<StickyNote color="sky" textAlign="left" width="180px"  v-drag="[389,251,180,180,9]">

Hello, I'm a **blueish sticky note** using `sky`.
</StickyNote>


<StickyNote color="amber-light" textAlign="left" width="180px"  v-drag="[650,253,180,180,-9]">

Hello, I'm a **yellowish sticky note** using `amber-light`.
</StickyNote>


---
layout: side-title
color: emerald-light
align: rm-lm
titlewidth: is-3
---

# Color themes

<StickyNote color="emerald-light" textAlign="left" width="180px"  v-drag="[719,291,180,180,16]">

Don't worry if you don't understand all the details, yet we are still talking about **color schemes**.
</StickyNote>

:: content ::

Or we can use the `emerald-light` scheme in a slide layout to set the overall color and style of a slide:

```md
---
layout: side-title
color: emerald-light
align: rm-lm
titlewidth: is-3
---
```

---
layout: top-title
color: amber
align: lt
---

# Layouts

:: content ::

The theme includes many layouts. Layouts set the overall structure of the page.  For example this slide is using the `top-title` layout with the `amber` color scheme.  You can see the frontmatter for this slide below:

```md
---
layout: top-title
color: amber
align: lt
---
```

The previous slide used the `side-title` layout with the `emerald-light` color scheme.  You can see the frontmatter for that slide below:

```md
---
layout: side-title
color: emerald-light
align: rm-lm
titlewidth: is-3
---
```


---
layout: top-title-two-cols
color: amber-light
align: lt
---

# Two important things about layouts

:: left ::

There are two important parts of slides to know about.

First is **frontmatter**, which are configuration options
that appear at the start of each slide (see [Slidev docs](https://sli.dev/guide/syntax#frontmatter-layouts)).  These configure things like
alignment, color, and spacing:

```md
---
layout: top-title
color: sky
align: lt
---
```

:: right ::

The other aspect is **slots**.  Slots are a basic part of [Vue.js](https://vuejs.org/guide/components/slots.html).  In Slidev slots can be marked using `:: slotname ::` and then filled in with content.  For example, the `:: left ::` and `:: right ::` slots on this slide are filled with content.

Slots effectively help you map parts of your slide to different parts of a layout.  The most common case is to say which content appears in the left column and which appears in the right column. But different layouts can have different slots and different content.


---
layout: top-title
color: amber-light
align: lt
---

# Available Layouts

:: content ::

The available layouts in **Neversink** currently are:  


<div class="tight">

<div class='flex flex-wrap'>

<div class='w-1/3'>

- `cover`
- `intro`
- `default`
- `section`
- `quote`
- `credits`
- `full`
</div>

<div class='w-1/3'>


- `full`
- `image-right`
- `image-left`
- `image-full`
- `iframe-right`
- `iframe-left`
- `iframe-full`
</div>

<div class='w-1/3'>

- `two-cols`
- `two-cols-header`
- `two-cols-footer`
- `top-title`
- `top-title-two-cols`
- `side-title`

</div>
</div>
</div>


We will step through these one by one showing several examples
and how to configure the frontmatter for each.


---
layout: cover
---

# This is the `cover` layout

**Todd Gureckis**   
<div class="iconlink">

_New York University_ <a href="https://todd.gureckislab.org" class="iconlink"><mdi-open-in-new /></a>  
</div>

:: note ::

<div class="fw-200" >

\* Optional `:: note ::` slot for mentioning ==notes== at the bottom.

</div>


---
layout: cover
color: dark
---

# This is the `cover` layout

**Todd Gureckis**   
<div class="iconlink">

_New York University_ <a href="https://todd.gureckislab.org" class="iconlink"><mdi-open-in-new /></a>  
</div>

:: note ::

<div class="fw-200" >

\* Here we set `color: dark` in the frontmatter.

</div>


---
layout: cover
color: amber
---

# This is the `cover` layout

**Todd Gureckis**   
<div class="iconlink">

_New York University_ <a href="https://todd.gureckislab.org" class="iconlink"><mdi-open-in-new /></a>  
</div>

:: note ::

<div class="fw-200" >

\* Here we set `color: amber` in the frontmatter.

</div>


---
layout: cover
color: amber-light
---

# This is the `cover` layout

**Todd Gureckis**   
<div class="iconlink">

_New York University_ <a href="https://todd.gureckislab.org" class="iconlink"><mdi-open-in-new /></a>  
</div>

:: note ::

<div class="fw-200" >

\* Here we set `color: amber-light` in the frontmatter.  Notice how the color scheme brings along many of the elements on the page.

</div>


---
layout: cover
color: pink
---

### This is the `cover` layout with a longer title for your talk you just use more `#`s

**Todd Gureckis**   
<div class="iconlink">

_New York University_ <a href="https://todd.gureckislab.org" class="iconlink"><mdi-open-in-new /></a>  
</div>

:: note ::

<div class="fw-200" >

\* Here we set `color: pink` in the frontmatter.  Different choices convey a different vibe for the intro of your talk.  There's lots of choices available, but not so many you are overwhelmed by choice!

</div>


---
layout: intro
color: emerald-light
---

# This is the `intro` layout

**Todd Gureckis**   
<div class="iconlink">

_New York University_ <a href="https://todd.gureckislab.org" class="iconlink"><mdi-open-in-new /></a>  
</div>

<br />

This is like the cover slide but with a little less decoration.
It also has a frontmatter option of `color: emerald-light`.

---
layout: default
---

# This is the `default` layout

This is kind of the basic slide.  The main content is interpreted as markdown and rendered in the center of the slide.  

Speaking of markdown, you can use markdown to make things **bold** or *italic* or even `code` like `this`.  In **neversink** you can also ==highlight things using the double equals signs like this==
thanks to the `markdown-it-mark` plugin.

Of course you can make bullet lists:

- Hi
- There

Also there's a little helper class you can add to make the bullet spacing a bit tighter:

<div class="tight">

- Hi
- There
- I need space
</div>


---
layout: default
color: sky
---

# The `default` layout 

The default layout also has an optional `color` option in the frontmatter.
For example this is

```md
---
layout: default
color: sky
---
```


---
layout: default
color: light
---

# The `default` layout 

Things don't have to be so dramatic.  For more conservative presentations you can use color schemes like `light`:

```md
---
layout: default
color: light
---
```

And of course you don't have to change the colorscheme every slide! 


---
layout: section
---

# The `section` layout

This is a section slide.  It can be use to make a noticable point or break between sections.


---
layout: section
color: navy
---

# The `section` layout
<hr>
It has a `hr` which is color matched to the color scheme.  For example, this slide is using the `navy` color scheme and the line is white.


---
layout: section
color: indigo
---

# The `section` layout
<hr>

This is `color: indigo` and the line and font is a light indigo shade.


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



---
layout: quote
color: amber-light
---


---
layout: quote
color: sky-light
quote: "This is a quote slide.  It has a frontmatter option of `quote` which is the text that appears in the quote box and `author` and options for the size of the text(`quotesize: text2xl` and `authorsize: text-l`).  I feel it is a little uninspired but might save you some time."
author: "Todd Gureckis"
---
