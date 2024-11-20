# End-to-End Test Utilities For WooCommerce

This package contains utilities to simplify writing e2e tests specific to WooCommerce using Playwright.

> [!WARNING]
> 
> This package is still under active development. 
> Documentation might not be up-to-date, and the 0.x version can introduce breaking changes.

## Installation

```bash
npm install @woocommerce/e2e-utils-playwright --save-dev
```

## Usage

Example:

```js
import { addAProductToCart } from '@woocommerce/e2e-utils-playwright';

test( 'can add products to cart', async ( { page } ) => {
    const product = {
        id: 1,
        name: 'Test Product',
    };
    
    await addAProductToCart( page, product.id );
    await page.goto( '/cart/' );
    
    await expect( page.locator( 'td.product-name' ) ).toContainText( product.name );
} );
```
