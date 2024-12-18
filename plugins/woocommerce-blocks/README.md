# WooCommerce Blocks <!-- omit in toc -->

This is the client for WooCommerce + Gutenberg. This package serves as a space to iterate and explore new Blocks and updates to existing blocks for WooCommerce, and how WooCommerce might work with the Block Editor.

## Table of Contents <!-- omit in toc -->

-   [Documentation](#documentation)
    -   [Code Documentation](#code-documentation)
-   [Getting started with block development](#getting-started-with-block-development)
-   [Long-term vision](#long-term-vision)
-   [Integration tests](#integration-tests)

## Documentation

To find out more about the blocks and how to use them, [check out the documentation on WooCommerce.com](https://woocommerce.com/document/woocommerce-blocks/).

If you want to see what we're working on for future versions, or want to help out, read on.

### Code Documentation

-   [Blocks](./assets/js/blocks) - Documentation for specific Blocks.
-   [Editor Components](assets/js/editor-components) - Shared components used in WooCommerce blocks for the editor (Gutenberg) UI.
-   [WooCommerce Blocks Handbook](./docs) - Documentation for designers and developers on how to extend or contribute to blocks, and how internal developers should handle new releases.
-   [WooCommerce Blocks Storybook](https://woocommerce.github.io/woocommerce-blocks/) - Contains a list and demo of components used in the plugin.

## Getting started with block development

Run through the ["Writing Your First Block Type" tutorial](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/) for a quick course in block-building.

For deeper dive, try looking at the [core blocks code,](https://github.com/WordPress/gutenberg/tree/trunk/packages/block-library/src) or see what [components are available.](https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src)

Other useful docs to explore:

-   [`InnerBlocks`](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-editor/src/components/inner-blocks/README.md)
-   [`apiFetch`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-api-fetch/)
-   [`@wordpress/editor`](https://github.com/WordPress/gutenberg/blob/trunk/packages/editor/README.md)
-   [`@wordpress/create-block`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/)

## Long-term vision

WooCommerce Blocks are the easiest, most flexible way to build your store's user interface and showcase your products.

## Integration tests

The integration tests are organized under the directory `/tests/integration` and each file must be named following the next pattern:

`[name-of-the-integration-test-suite].spec.ts`

#### How to run the tests?

Single run mode: `pnpm --filter=@woocommerce/block-library run test:integration:js`

Watch mode: `pnpm --filter=@woocommerce/block-library run test:integration:js --watch`

#### How to write a test?

It is important to import all the blocks that are going to be tested together
within a jest `beforeAll` hook because the blocks are registered under the `index.ts`
file. So by the time they are included in the test file they will automatically
be registered. This produces a warning when the category of these blocks is not
registered yet.

```javascript
beforeAll( async () => {
	await import( '../../assets/js/blocks/active-filters' );
	await import( '..' );
} );
```

Once the blocks are all included and registered then the Block Editor must be setup.
The following function prepare the Editor and tell it what are the blocks it has to
create.

```javascript
async function setup() {
	const testBlocks = [
        { name: 'woocommerce/active-filters', attributes: { ... } },
        { name: '...', attributes: { ... } },
    ];
	return initializeEditor( testBlocks );
}
```

Then the `setup` function can be called in each test with the Editor and the blocks
already initialized.

```javascript
test( 'should change the display style', async () => {
	await setup();

	const activeFiltersBlock = within(
		screen.getByLabelText( /Block: Active Filters/i )
	);

	expect(
		activeFiltersBlock.queryByRole( 'button', {
			name: /Clear All Filters/i,
		} )
	).toBeInTheDocument();

	const filterList = activeFiltersBlock.getByRole( 'list' );

	expect( filterList.classList ).toContain( 'wc-block-active-filters__list' );
	expect( filterList.classList ).not.toContain(
		'wc-block-active-filters__list--chips'
	);

	await selectBlock( /Block: Active Filters/i );

	const displaySettings = screen.getByRole( 'button', {
		name: /Display Settings/i,
	} );

	if ( displaySettings.getAttribute( 'aria-expanded' ) !== 'true' ) {
		fireEvent.click( displaySettings );
	}

	fireEvent.click( screen.getByRole( 'radio', { name: /Chips/i } ) );

	expect( filterList.classList ).toContain( 'wc-block-active-filters__list' );
	expect( filterList.classList ).toContain(
		'wc-block-active-filters__list--chips'
	);
} );
```
