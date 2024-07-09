---
colorSchema: light
layout: cover
routerMode: hash
title: Screenshot Deck
theme: ./
neversink_string: 'Neversink Example Deck'
---

# Screenshot deck for the Neversink theme


---
layout: cover
color: light
---

# This is my slide title

by **My Author**

:: note ::

\* This is a note about the slide.


---
layout: cover
color: emerald-light
---

# It's not easy being green

by **Kermit the Frog**

:: note ::

\* This is emerald, not green.

---
layout: intro
color: light
---

# This is my intro slide

by **My Author**

:: note ::

\* This is a note about the slide.


---
layout: intro
color: indigo
---

# This is my intro slide in indigo

by **My Author**

:: note ::

\* This is a note about the slide.


---
layout: default
---

# This is the `default` layout

This is kind of the basic slide. The main content is interpreted as
markdown and rendered in the center of the slide.

Speaking of markdown, you can use markdown to make things **bold** or
_italic_ or even `code` like `this`. In **Neversink** you can also
==highlight things using the double equals signs like this== thanks
to the `markdown-it-mark` plugin.

Of course you can make bullet lists:

- Hi
- There
- Bananas

and use all the Slidev [markdown features](https://sli.dev/guide/syntax) like LaTeX math $x^2$, etc...

---
layout: default
color: navy
---

# This is the `default` layout

This is kind of the basic slide. The main content is interpreted as
markdown and rendered in the center of the slide.

Speaking of markdown, you can use markdown to make things **bold** or
_italic_ or even `code` like `this`. In **Neversink** you can also
==highlight things using the double equals signs like this== thanks
to the `markdown-it-mark` plugin.

Of course you can make bullet lists:

- Hi
- There
- Bananas

and use all the Slidev [markdown features](https://sli.dev/guide/syntax) like LaTeX math $x^2$, etc...

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

- The <code>titlepos</code> parameter determines where the title appears. The options are `t` for top, `b` for bottom, or `n` for none/hidden.  The default is `t` ([see docs](https://gureckis.github.io/slidev-theme-neversink/layouts/two-cols-title)).


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

- The <code>titlepos</code> parameter determines where the title appears. The options are `t` for top, `b` for bottom, or `n` for none/hidden.  The default is `t`.([see docs](https://gureckis.github.io/slidev-theme-neversink/layouts/two-cols-title))


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

- The <code>titlepos</code> parameter determines where the title appears. The options are `t` for top, `b` for bottom, or `n` for none/hidden.  The default is `t`.([see docs](https://gureckis.github.io/slidev-theme-neversink/layouts/two-cols-title))


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

- The <code>titlepos</code> parameter determines where the title appears. The options are `t` for top, `b` for bottom, or `n` for none/hidden.  The default is `t`.([see docs](https://gureckis.github.io/slidev-theme-neversink/layouts/two-cols-title))


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

- The <code>titlepos</code> parameter determines where the title appears. The options are `t` for top, `b` for bottom, or `n` for none/hidden.  The default is `t`.([see docs](https://gureckis.github.io/slidev-theme-neversink/layouts/two-cols-title))


---
layout: top-title
color: violet
align: l
---

\* This is the default slot.

:: title ::

# This is `top-title`

:: content ::

- There are two slots: `:: title ::` and `:: content ::` along with the default which is implicit before any named slots.

- The `color` parameter determines the color scheme of the slide.

- The <code>align</code> parameter determines the alignment of the title.

If the title is missing a reasonable ribbon of color will remain.

---
layout: top-title
color: sky
align: r
---

:: title ::

# This is `top-title`

:: content ::

The title is right aligned.

---
layout: top-title
color: pink
---


:: content ::

See this has no title, but still has a color band.



---
layout: top-title-two-cols
columns: is-6
align: l-lt-lt
color: violet
---

\* Default slot content is here!

:: title ::

# This is `two-cols-title`

:: left ::

This is a configurable layout which is very common in presentations.  It differs from `two-cols-title` in that there is a color band for the title.

- There are three slots: `:: title ::`, `:: left ::`, and `:: right ::` along with the default which is implicit before any named slots.



:: right ::

In terms of parameters:

- `columns` is the relative spacing given to the left versus right column ([see docs](https://gureckis.github.io/slidev-theme-neversink/layouts/two-cols-title))

- The <code>align</code> parameter determines how the columns look. The notation is for example
  <code>align: l-cm-cm</code>. The first part is for the header, the second for the left column, the third part is for the right column ([see docs](https://gureckis.github.io/slidev-theme-neversink/layouts/top-title-two-cols))


- `color` is the color scheme to the title bar.


---
layout: top-title-two-cols
color: pink
---


:: right ::

This has no title or left column, but still has a color band.

---
layout: top-title-two-cols
color: violet-light
align: r-rm-lt
columns: is-3
---

:: title ::
# This is `two-cols-title`

:: left ::
This is a note

:: right ::
About this content on the right
- Which has various things to say
- This layout is nice to look at!


---
layout: top-title-two-cols
columns: is-2
align: l-rm-lt
color: violet-light
---

<StickyNote color="violet-light" textAlign="left" width="180px" title="Hi" v-drag="[689,277,180,180,18]">

Hello, I'm a matchy-matchy **sticky note**.
</StickyNote>

:: title ::

### This is a smaller title

:: left ::

The left column is `rm` which means right-middle.

:: right ::

The right content is left-top aligned `lt`.

The sticky note appears in the `:: default ::` slot and then used v-drag to move it into position.

---
layout: side-title
side: l
color: violet
titlewidth: is-4
align: rm-lm
title: Side Title Layout (Another)
---

:: title :: 

# `side-title`

# <mdi-arrow-right />

:: content ::

This is `layout: side-title` with `side: l` in the front matter.


---
layout: side-title
side: r
color: pink-light
titlewidth: is-6
align: lm-lb
title: Side Title Layout (Another)
---

:: title ::

# `side-title`

# <mdi-arrow-left />

:: content ::

This is `layout: side-title` with `side: r` in the front matter
and the right column `lb` (left-bottom) aligned.
Notice that when the title is on the right, the slide number and info
panel at the lower right has changed to match the color scheme!



---
layout: side-title
side: l
color: amber-light
titlewidth: is-6
align: lt-lb
title: Side Title Layout (Another)
---

:: title ::

# `side-title`

# <mdi-arrow-right />

:: content ::

This is `layout: side-title` with `side: l` in the front matter
and the left column `lt` (left-top) and the right column `lb` (left-bottom) aligned.



---
layout: side-title
side: l
color: green-light
titlewidth: is-3
align: auto
---

\* This is the default content

:: content ::

This slide doesn't have a title but still has a color block.


---
layout: quote
color: sky-light
quotesize: text-m
authorsize: text-s
author: 'Todd Gureckis'
---

"This is a quote slide.  It has a frontmatter options for the size of the text (`quotesize: text2xl` and `authorsize: text-l`).  I feel it is a little uninspired but might save you some time."


---
layout: section
---

# The `section` layout

This is a section slide.  It can be use to make a noticable point or break between sections.



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


---
layout: two-cols-title
columns: is-6
title: Admonitions
dragPos:
  admon: Left,Top,Width,Height,Rotate
  "'admon'": 55,300,287,106
---

<Admonition title="V-draggable" color='teal-light' width="300px" v-drag="[93,303,300,145,-14]">
If you want to `v-drag` an admonition, you should set the width to a fixed value.
</Admonition>

:: title ::

# Admonitions

:: left ::

- Admonitions are boxes that you can use to call out things.

<Admonition title="Custom title" color='amber-light'>
This is my admon message
</Admonition>

:: right ::

<AdmonitionType type='note' >
This is note text
</AdmonitionType>

<!--
> [!note]
> This is note text
-->

<AdmonitionType type='important' >
This is important text
</AdmonitionType>

<AdmonitionType type='tip' >
This is a tip
</AdmonitionType>

<AdmonitionType type='warning' >
This is a tip
</AdmonitionType>

<AdmonitionType type='caution' >
This is warning text
</AdmonitionType>

---
layout: two-cols-title
columns: is-6
title: Bubbles
---

<SpeechBubble position="l" color='sky' shape="round"  v-drag="[83,364,274,109]">

Hello, I'm a **speech bubble**! I'm a longer speech bubble. I'm still going.
</SpeechBubble>

:: title ::

# SpeechBubbles

:: left ::

- SpeechBubbles are moveable elements that act as speech bubbles
- They can be configured for where you want the arrow to point
- The can be move around if you enable `v-drag` on the element

:: right ::

<SpeechBubble position="bl" color='amber-light' shape="round">

Hello, I'm a **speech bubble**! I'm a longer speech bubble. I'm still going.
Hello, I'm a **speech bubble**! I'm a longer speech bubble. I'm still going.
Hello, I'm a **speech bubble**! I'm a longer speech bubble. I'm still going.
</SpeechBubble>

---
layout: default
title: Sticky Notes
---

<StickyNote color="amber-light" textAlign="left" width="180px" title="Title" v-drag="[66,318,185,171]">

Hello, I'm a **sticky note**.
</StickyNote>

<StickyNote color="sky-light" textAlign="left" width="180px" title="This is my title" v-drag="[375,306,180,180,-15]">

Hello, I'm also a **sticky note** but am blue sky title.
</StickyNote>

<StickyNote color="pink-light" textAlign="left" width="180px"  v-drag="[667,299,185,171,8]">

Hello, I'm also a **sticky note** but I lack a title.
</StickyNote>

# Sticky Notes

- Sticky notes are moveable elements you can use for notes.
- Syntax is

```js
<StickyNote color="amber-light" textAlign="left" width="180px" title="Title" v-drag>
  Hello, I'm a **sticky note**.
</StickyNote>
```

---
layout: default
title: Kawaii 1
---

# Kawaii

- Kawaii is a Japanese term that means cute

<IceCream :size="80" mood="sad" color="#FDA7DC" />
<IceCream :size="80" mood="shocked" color="#FDA7DC" />
<IceCream :size="80" mood="happy" color="#FDA7DC" />
<IceCream :size="80" mood="blissful" color="#FDA7DC" />
<IceCream :size="80" mood="lovestruck" color="#FDA7DC" />
<IceCream :size="80" mood="excited" color="#FDA7DC" />
<IceCream :size="80" mood="ko" color="#FDA7DC" /><br/>

<BackPack :size="80" mood="sad" color="#FFD882" />
<BackPack :size="80" mood="shocked" color="#FFD882" />
<BackPack :size="80" mood="happy" color="#FFD882"/>
<BackPack :size="80" mood="blissful" color="#FFD882" />
<BackPack :size="80" mood="lovestruck" color="#FFD882" />
<BackPack :size="80" mood="excited" color="#FFD882" />
<BackPack :size="80" mood="ko" color="#FFD882" /><br/>

<Cat :size="80" mood="sad" color="#FFD882" />
<Cat :size="80" mood="shocked" color="#FFD882" />
<Cat :size="80" mood="happy" color="#FFD882"/>
<Cat :size="80" mood="blissful" color="#FFD882" />
<Cat :size="80" mood="lovestruck" color="#FFD882" />
<Cat :size="80" mood="excited" color="#FFD882" />
<Cat :size="80" mood="ko" color="#FFD882" /><br/>

<Browser :size="50" mood="lovestruck" color="#61DDBC" />
<Mug :size="50" mood="lovestruck" color="#61DDBC" />
<Planet :size="50" mood="lovestruck" color="#61DDBC" />
<SpeechBubbleGuy :size="50" mood="lovestruck" color="#d3d3d3" />
<Ghost :size="50" mood="blissful" color="#E0E4E8" />
<CreditCard :size="50" mood="blissful" color="#E0E4E8" />

---
layout: default
title: QR Codes
---

# In-line QR Codes

- Send people to a url with a easy to configure QR code

```vue
<QRCode value="https://gureckislab.org" :size="200" render-as="svg" />
```

<br />
Result:

<QRCode value="https://gureckislab.org" :size="200" render-as='svg'/>

