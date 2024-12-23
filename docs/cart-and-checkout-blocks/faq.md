---
post_title: Cart and Checkout - Frequently Asked Questions
menu_title: Extensibility
tags: reference
---
<!-- markdownlint-disable MD041 -->

This document aims to answer some of the frequently asked questions we see from developers extending WooCommerce Blocks.

We will add to the FAQ document as we receive questions, this isn't the document's final form.

If you have questions that aren't addressed here, we invite you to ask them on [GitHub Discussions](https://github.com/woocommerce/woocommerce/discussions) or in the [WooCommerce Community Slack](https://woocommerce.com/community-slack/)

## Cart modifications

### How do I add fees to the cart?

You need to add the fees on the server, this can be achieved using [`extensionCartUpdate`](https://github.com/woocommerce/woocommerce/blob/trunk/plugins/woocommerce-blocks/docs/third-party-developers/extensibility/rest-api/extend-rest-api-update-cart.md).

This is the server-side code required to add the fee:

```php
add_action('woocommerce_blocks_loaded', function() {
  woocommerce_store_api_register_update_callback(
    [
      'namespace' => 'extension-unique-namespace',
      'callback'  => function( $data ) {
        add_action(
          'woocommerce_cart_calculate_fees',
          function( $cart ) {
            $cart->add_fee( 'Custom Fee', 10 );  
        } );
      }
    ]
  );
} );
```

This is the client-side code required to trigger the callback above:

```js
const { extensionCartUpdate } = wc.blocksCheckout;
const { processErrorResponse } = wc.wcBlocksData;

extensionCartUpdate( {
	namespace: 'extension-unique-namespace',
} ).then( () => {
	// Cart has been updated with the fee.
  // Don't need to do anything else here as it's automatically updated.
} ).catch( ( error ) => {
	// Handle error.
	processErrorResponse(error);
} );
```

### How to force-refresh the cart from the server

This can be achieved using [`extensionCartUpdate`](https://github.com/woocommerce/woocommerce/blob/trunk/plugins/woocommerce-blocks/docs/third-party-developers/extensibility/rest-api/extend-rest-api-update-cart.md) which is the preferred way, but it is also possible by executing the `receiveCart` action on the `wc/store/cart` data store with a cart object, like so:

```js
const { dispatch } = window.wp.data;

dispatch( 'wc/store/cart' ).receiveCart( cartObject )
```

All the cart routes on Store API return a cart object which can be used here.

## Checkout modifications

### How do I remove checkout fields?

We don't encourage this due to the wide array of plugins WordPress and Woo support. Some of these may rely on certain checkout fields to function, but if you're certain the fields are safe to remove, please see [Removing Checkout Fields](./removing-checkout-fields.md).
