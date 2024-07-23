# Components

Components are add-ons to the theme that can be used to add additional features to your slides. In some cases, they represent simple design elements like StickyNotes that can be added to slides. In other cases they add animations or interactivity to your slides.

The current components are:

- [Admonitions](/components/admonitions) - boxes that can be used to highlight text that includes styling like a title and icon.

- [SpeechBubble](/components/speechbubble) - a speech bubble with configurable position, shape, and color.

- [StickyNote](/components/stickynote) - a sticky note styled element that can be added to slides.

- [CreditScroll](/components/creditscroll) - a scrolling credits slide simliar to the end of a movive.

- [QRCore](/components/qrcode) - a QR code generator that can be used to add QR codes to slides.

- [Kawaii](/components/kawaii) - Modification of select [Vue Kawaii](https://github.com/youngtailors/vue-kawaii) figures that add cute characters to slides.

- [Email](/components/email) - formats email addresses

- [ArrowDraw](/components/arrowdraw) - draws a hand-drawn looking arrow

- [ArrowHeads](/components/arrowheads) - draws a bunch of arrows pointing at a central place. Useful for drawing attention to a particular part of a slide.

Most component can just be included in-line in your markdown. However, in some cases it can make sense to position these components using the `v-drag` directive. For example, the `SpeechBubble` component can be positioned using the `v-drag` directive to place it in a specific location on the slide. This can be useful for creating custom layouts or animations. In that case, it makes sense to keep the component in the [default slot](/layouts#slots) of each layout.
