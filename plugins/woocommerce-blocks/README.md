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

All integration tests are located in the `/tests/integration` directory and must follow this naming convention:

```typescript
[name-of-the-integration-test-suite].spec.ts
```

### Running Tests

There are two ways to run the integration tests:

```bash
# Run tests once
pnpm --filter=@woocommerce/block-library run test:integration:js

# Run tests in watch mode (automatically re-runs on file changes)
pnpm --filter=@woocommerce/block-library run test:integration:js --watch
```

### Test Utilities

The integration tests use several utility functions from `tests/utils/integration/editor.tsx`:

- `selectBlock(name)`: Selects a block by its aria-label
- `initializeEditor(testBlocks, useCoreBlocks, settings)`: Sets up the test environment with specified blocks
- `Editor`: A component that provides the test environment

### Writing Integration Tests

#### 1. Block Registration

First, import and register all blocks that will be tested:

```javascript
import '../../assets/js/blocks/active-filters';
import '../../assets/js/blocks/attribute-filter';
// ... other block imports
```

#### 2. Test Setup

Create a setup function that initializes the test environment:

```javascript
async function setup() {
    // Define blocks to test with their attributes
    const testBlocks = [
        {
            name: 'woocommerce/active-filters',
            attributes: {
                displayStyle: 'list',
                // ... other attributes
            }
        }
    ];

    // Initialize editor with blocks and optional settings
    return initializeEditor(
        testBlocks,
        true, // Use core blocks
        {} // Additional editor settings
    );
}
```

#### 3. Writing Test Cases

Example test patterns:

```javascript
describe('Active Filters Block', () => {
    test('should change the display style', async () => {
        await setup();

        const activeFiltersBlock = within(
            screen.getByLabelText(/Block: Active Filters/i)
        );

        expect(
            activeFiltersBlock.queryByRole('button', {
                name: /Clear All Filters/i,
            })
        ).toBeInTheDocument();

        const filterList = activeFiltersBlock.getByRole('list');

        expect(filterList.classList).toContain('wc-block-active-filters__list');
        expect(filterList.classList).not.toContain(
            'wc-block-active-filters__list--chips'
        );

        await selectBlock(/Block: Active Filters/i);

        const displaySettings = screen.getByRole('button', {
            name: /Display Settings/i,
        });

        if (displaySettings.getAttribute('aria-expanded') !== 'true') {
            fireEvent.click(displaySettings);
        }

        fireEvent.click(screen.getByRole('radio', { name: /Chips/i }));

        expect(filterList.classList).toContain('wc-block-active-filters__list');
        expect(filterList.classList).toContain(
            'wc-block-active-filters__list--chips'
        );
    });
});
```
