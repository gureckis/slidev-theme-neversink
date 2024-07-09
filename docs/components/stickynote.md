# StickyNote

<img src="/screenshots/36.png" alt="stickynotes slide example" width="600" class="screenshot mb-10 mt-10"/>

## Description

StickyNotes are a take on the classic computer metaphor of a sticknote. They are often used to provide notes or additional information to the viewer.

## `StickyNote`

The `StickyNote` component is used to create a colored box with an title and content. The StickyNote component has the following props:

- `title` (optional). Default value is ''
- `color` (optional) can be any of the [color scheme](/colors) options. If not provided, the default color is `amber-light`.
- `width` (optional) the width of the admonition. Default is `180px`.
- `textAlign` (optional) the text alignment of the content. Default is `left`.

Example:

```md
<StickyNote color="amber-light" textAlign="left" width="180px" title="Title">

Hello, I'm a **sticky note**.
</StickyNote>
```

Renders as:
<StickyNote color="amber-light" textAlign="left" width="180px" title="Title">

Hello, I'm a **sticky note**.
</StickyNote>

If you want to position it somewhere arbitrary on the slide add v-drag to the admonition and also set the width to something fixed (e.g., `300px`):

```md
<StickyNote color="amber-light" textAlign="left" width="180px" title="Title" v-drag>

Hello, I'm a **sticky note**.
</StickyNote>
```

Another color:

```md
<StickyNote color="pink-light" textAlign="left" width="180px" title="Title">

Hello, I'm a **sticky note**.
</StickyNote>
```

<StickyNote color="pink-light" textAlign="left" width="180px" title="Title">

Hello, I'm a **sticky note**.
</StickyNote>
