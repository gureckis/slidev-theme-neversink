# Admonitions

<img src="/screenshots/34.png" alt="admonitions slide example" width="600" class="screenshot mb-10 mt-10"/>

## Description

Admonitions are a way to provide additional information to the viewer. They are often used to provide warnings, notes, or tips. Admonitions are styled with a colored border and an icon to indicate the type of admonition.

There are two types of Admonitions in this theme:

## `Admonition`

The `Admonition` component is used to create a colored box with an icon and a title. The admonition component has the following props:

- `title` (optional). Default value is 'Note'
- `color` (optional) can be any of the [color scheme](/colors) options. If not provided, the default color is `amber-light`.
- `width` (optional) the width of the admonition. Default is `100%`.
- `icon` (optional) the icon to display. Default is `mdi-information-variant-circle-outline`.

Example:

```md
<Admonition title="Info" color='teal-light' width="300px">
This is my admonition content.
</Admonition>
```

Renders as:
<Admonition title="Info" color='teal-light' width="300px">
This is my admonition content.
</Admonition>

If you want to position it somewhere arbitrary on the slide add v-drag to the admonition and also set the width to something fixed (e.g., `300px`):

```md
<Admonition title="V-draggable" color='teal-light' width="300px" v-drag>
This is my admonition content.
</Admonition>
```

## `AdmonitionType`

The `AdmonitionType` component is used to create a colored box with an icon and a title. The admonition component has the following props:

- `type` (optional). Default value is 'info'. Available types are `info`, `important`, `tip`, `warning`, `caution`. These choose colors and icons to match the type.
- `width` (optional) the width of the admonition. Default is `100%`.

Example:

```md
<AdmonitionType type="info" width="300px">
This is my info
</AdmonitionType>
```

<AdmonitionType type="info" width="300px">
This is my warning
</AdmonitionType>

```md
<AdmonitionType type="important" width="300px">
This is my important
</AdmonitionType>
```

<AdmonitionType type="important" width="300px">
This is my important
</AdmonitionType>

```md
<AdmonitionType type="tip" width="300px">
This is my tip
</AdmonitionType>
```

<AdmonitionType type="tip" width="300px">
This is my tip
</AdmonitionType>

```md
<AdmonitionType type="warning" width="300px">
This is mywarning
</AdmonitionType>
```

<AdmonitionType type="warning" width="300px">
This is my  warning
</AdmonitionType>

```md
<AdmonitionType type="caution" width="300px">
This is my caution
</AdmonitionType>
```

<AdmonitionType type="caution" width="300px">
This is my caution
</AdmonitionType>

If you want to position it somewhere arbitrary on the slide add v-drag to the admonition and also set the width to something fixed (e.g., `300px`)

```md
<AdmonitionType type="warning" width="300px" v-drag>
This is my my warning
</Admonition>
```
