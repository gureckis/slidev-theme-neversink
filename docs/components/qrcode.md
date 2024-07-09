# QRCode

<img src="/screenshots/38.png" alt="qr code slide example" width="600" class="screenshot mb-10 mt-10"/>

## Description

QRCodes make it easy to share links in your slides without consulting a QR-code generator. They are useful for sharing links to slides, websites, or other resources.

## `QRCode`

The `Qr` component is used to create QR code in SVG format. The QRCode component has the following props:

- `value` (required). The url you want to send people to.
- `:size` (required) the width/height of the QR code.
- `render-as` (optional) the type of QR code to render. Default is `svg`. Other options are `canvas` and `img`.

Example:

```md
<QRCode value="https://sli.dev" :size="200" render-as="svg"/>
```

Renders as:
<QRCode value="https://sli.dev" :size="200" render-as="svg"/>
