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
