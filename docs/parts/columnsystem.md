In the conception of this design system, the two columns of the main content of the slide share 12 equally spaced units. Frontmatter determines how many of those 12 units are allocated to each column.
<img src="/layouts/two-col-title-12row.svg" alt="two-cols-header slide example" width="600" />

For example, if `columns: is-6` is specified in the frontmatter, the left column will be allocated 6 units and the right column will be allocated 6 units like this:

<img src="/layouts/two-col-title-is-6.svg" alt="two-cols-header slide example" width="600" />

If `columns: is-4` is specified, the left column will be allocated 4 units and the right column will be allocated 8 units like this:

<img src="/layouts/two-col-title-is-4.svg" alt="two-cols-header slide example" width="600" />

You can bump the width of the columns quickly to fit your content.

The alignment of the content in each column is also configurable. Content can be vertically aligned to the top, middle, or bottom of the slide. In addition the content can be horizontally aligned to the left, center, or right aligned within the column:

<img src="/layouts/two-col-title-align.svg" alt="two-cols-header slide example" width="300" />

The title which can only be left, center, or right aligned because it occupies a narrow band on the slide.
