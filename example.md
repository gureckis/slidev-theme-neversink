---
colorSchema: light
layout: cover
routerMode: hash
title: Base Template
theme: ./
neversink_string: "Example Deck"
---

# Slidev Neversink Theme

Designed by **Todd Gureckis**   
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

- It strives to be well documented and easy to use.  It is also open source and free!  You can find the source code on [GitHub](http://github.com/gureckis/slidev-theme-neversink).


Ultimately, it was designed based on observations of common layout used in my ~15 years as a academic researcher.

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

Don't worry if you don't understand all the details, yet we are still talking about **color schemes**.


---
layout: top-title
color: sky
align: lt
---

### Layouts

:: content ::

The theme includes many layouts. Layouts set the overall structure of the page.  For example this slide is using the `top-title` layout with the `sky` color scheme.  You can see the frontmatter for this slide below:

```md
---
layout: top-title
color: sky
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
layout: top-title-twocols
color: navy
align: lt
---

### Layouts

:: left ::

- Layouts are configured using the `frontmatter` of a slide.  

- This is the text that appears between the `---` at the top of a slide.

:: right ::

The available layouts are:  

<div class="tight">

- `cover`
- `top-title`
- `top-title-two-cols`
- `side-title`
- `quote`
- `intro`
- `two-cols-header`
- `two-cols-footer`
- `two-cols`
- `four-cell-grid`
</div>