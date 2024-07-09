# Markdown Features

## In-line HTML/CSS

You can include in-line HTML/CSS in markdown files. One trick to know though is that the markdown preprocessor needs a blank line before and after the HTML/CSS block. For example, this will not work:

```md
<div class='something'>
Make this **bold** using markdown.
</div>
```

Instead you have to write it like

```md
<div class='something'>

Make this **bold** using markdown.

</div>
```

With the new before the markdown text begins.

This is also true around [slots in layouts](/layouts#slots).

So

```md
:: left ::
This is **markdown**
```

will not work but

```md
:: left ::

This is **markdown**
```

is good.

## Highlight

You can highlight text

```md
This is my ==highlighted text==.
```

Using the `==` syntax. Like ==this==.

## Icon link

Drops the underline styling from icons.

```
<a href="https://todd.gureckislab.org" class="iconlink"><mdi-open-in-new /></a>
```

## Tight bullets

If you want to make bullets a little closer together to make spaceadd the `class='tight'`

```md
<div class="tight">

- Hi
- There
- I need space
</div>
```

## V-click faders

If you want to fade out a bullet as you step through, add the `class='fader'`

```md
<v-clicks at="+0" class="fader">

- This one appears immediately on slide load
- This is a second click
- This is a third click

</v-clicks>
```
