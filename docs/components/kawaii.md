# Kawaii

<img src="/screenshots/37.png" alt="kawaii slide example" width="600" class="screenshot mb-10 mt-10"/>

## Description

Kawaii are little characters you can include in slides to add a bit of fun/whimsy. Code and illustrations based on [Vue Kawaii](https://github.com/youngtailors/vue-kawaii).

## Kawaii components

The `Qr` component is used to create QR code in SVG format. The QRCode component has the following props:

- `mood` (required). Sets the style of face. Options are `sad`, `shocked`, `happy`, `blissful`, `lovestruck`, `excited`, `ko`. Default is `blissful`.
- `:size` (required) the width of the character (height adjusts automatically).
- `:color` (optional) Sets the primary color. Defaults are unique for each character Set using a hex code.

The character options are `IceCream`, `Backpack`, `Cat`, `Browser`, `Mug`, `Planet`, `SpeechBubbleGuy`, and `CreditCard`.

Example:

```md
<IceCream :size="140" mood="sad" color="#FDA7DC" />
```

Renders as:
<IceCream :size="140" mood="blissful" color="#FDA7DC" />
