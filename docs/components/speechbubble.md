# SpeechBubble

<img src="/screenshots/35.png" alt="speechbubbles slide example" width="600" class="screenshot mb-10 mt-10"/>

## Description

StickyNotes are a take on the classic computer metaphor of a sticknote. They are often used to provide notes or additional information to the viewer.

## `SpeechBubble`

The `SpeechBubble` component is used to create a colored bubble with a speech bubble tail. The `SpeechBubble` has the following props:

- `position` (optional). Default value is `b`. Options are `t` (top), `b` (bottom), `l` (left), `r` (right), `tl` (top left), `tr` (top right), `bl` (bottom left), `br` (bottom right).
- `shape` (optional). Default value is `''`. Options are `round` and `circle` which affect the corner radius of the bubble.
- `animation` (optional). Default value is `''`. Options are `pop` and `float`
- `color` (optional) can be any of the [color scheme](/colors) options. If not provided, the default color is `red-light`.
- `textAlign` (optional) the text alignment of the content. Default is `left`.
- `maxWidth` (optional) the maximum width of the speech bubble. Default is `100%`.
- `borderWidth` (optional) the width of the border. Default is `1px`.

Example:

```md
<SpeechBubble position="r" color='sky' shape="round" maxWidth="300px">

Hello, I'm a **speech bubble**! I'm a longer speech bubble. I'm still going.
</SpeechBubble>
```

Renders as:
<SpeechBubble position="r" color='sky' shape="round" maxWidth="300px">

Hello, I'm a **speech bubble**! I'm a longer speech bubble. I'm still going.
</SpeechBubble>

```md
<SpeechBubble position="b" color='sky' shape="round" maxWidth="300px">

Hello, I'm a **speech bubble**! I'm a longer speech bubble. I'm still going.
</SpeechBubble>
```

Renders as:
<SpeechBubble position="b" color='sky' shape="round" maxWidth="300px">

Hello, I'm a **speech bubble**! I'm a longer speech bubble. I'm still going.
</SpeechBubble>

```md
<SpeechBubble position="t" color='amber' shape="round" maxWidth="300px">

Hello, I'm a **speech bubble**! I'm a longer speech bubble. I'm still going.
</SpeechBubble>
```

Renders as:
<SpeechBubble position="t" color='amber' shape="round" maxWidth="300px">

Hello, I'm a **speech bubble**! I'm a longer speech bubble. I'm still going.
</SpeechBubble>

If you want to position it somewhere arbitrary on the slide add v-drag to the admonition and also set the maxWidth to something fixed (e.g., `300px`):

```md
<SpeechBubble position="t" color='sky' shape="round" maxWidth="300px" v-drag>

Hello, I'm a **speech bubble**! I'm a longer speech bubble. I'm still going.
</SpeechBubble>
```
