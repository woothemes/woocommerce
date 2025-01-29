---
post_title: Cart and Checkout - Frequently Asked Questions
menu_title: Frequently Asked Questions
tags: reference
---
<!-- markdownlint-disable MD041 -->

This document aims to answer some of the frequently asked questions we see from developers extending WooCommerce Blocks.

We will add to the FAQ document as we receive questions, this isn't the document's final form.

If you have questions that aren't addressed here, we invite you to ask them on [GitHub Discussions](https://github.com/woocommerce/woocommerce/discussions) or in the [WooCommerce Community Slack](https://woocommerce.com/community-slack/)

## Cart modifications

### How do I dynamically make changes to the cart from the client?

To perform actions on the server based on a client-side action, you'll need to use [`extensionCartUpdate`](https://github.com/woocommerce/woocommerce/blob/trunk/plugins/woocommerce-blocks/docs/third-party-developers/extensibility/rest-api/extend-rest-api-update-cart.md)

As an example, to add a "Get 10% off if you sign up to the mailing list" checkbox on your site you can use `extensionCartUpdate` to automatically apply a 10% coupon to the cart.

![Image](https://github.com/user-attachments/assets/e0d114b1-4e4c-4b34-9675-5571136b36d0)

Assuming you've already added the checkbox, either through the Additional Checkout Fields API, or by creating an inner block, the next step will be to register the server-side code to apply the coupon if the box is checked, and remove it if it's not.

```php
add_action('woocommerce_blocks_loaded', function() {
  woocommerce_store_api_register_update_callback(
    [
      'namespace' => 'extension-unique-namespace',
      'callback'  => function( $data ) {
        if ( isset( $data['checked'] ) && filter_var( $data['checked'], FILTER_VALIDATE_BOOLEAN ) === true ) {
          WC()->cart->apply_coupon( 'mailing-list-10-percent-coupon' );
        } else {
          WC()->cart->remove_coupon( 'mailing-list-10-percent-coupon' );
        }
      }
    ]
  );
} );
```

The code in the checkbox's event listener on the front end would look like this:

```js
const { extensionCartUpdate } = window.wc.blocksCheckout;

const onChange = ( checked ) => {
    extensionCartUpdate(
        {
            namespace: 'extension-unique-namespace',
            data: {
                checked
            }  
        } 
    )
}
```

To change how this coupon is displayed in the list of coupons in the order summary, you can use the `coupons` checkout filter, like so:

```js
const { registerCheckoutFilters } = window.wc.blocksCheckout;

const modifyCoupons = ( coupons, extensions, args ) => {
	return coupons.map( ( coupon ) => {
		if ( ! coupon.label === 'mailing-list-10-percent-coupon' ) {
			return coupon;
		}

		return {
			...coupon,
			label: 'Mailing list discount',
		};
	} );
};

registerCheckoutFilters( 'extension-unique-namespace', {
	coupons: modifyCoupons,
} );
```

### How do I add fees to the cart when a specific payment method is chosen?

You need to add the fees on the server based on the selected payment method, this can be achieved using the `woocommerce_cart_calculate_fees` action.

This is the server-side code required to add the fee:

```php
add_action(
	'woocommerce_cart_calculate_fees',
	function () {
		if ( is_admin() && ! defined( 'DOING_AJAX' ) ) {
			return;
		}

		$chosen_payment_method_id = WC()->session->get( 'chosen_payment_method' );
		$cart                     = WC()->cart;

		if ( 'your-payment-method-slug' === $chosen_payment_method_id ) {
			$percentage = 0.05;
			$surcharge  = ( $cart->cart_contents_total + $cart->shipping_total ) * $percentage;
			$cart->add_fee( 'Payment method fee', $surcharge );
		}
	}
);
```

### How to force-refresh the cart from the server

This can be achieved using [`extensionCartUpdate`](https://github.com/woocommerce/woocommerce/blob/trunk/plugins/woocommerce-blocks/docs/third-party-developers/extensibility/rest-api/extend-rest-api-update-cart.md) which is the preferred way, but it is also possible by executing the `receiveCart` action on the `wc/store/cart` data store with a valid cart object, like so:

```js
const { dispatch } = window.wp.data;

dispatch( 'wc/store/cart' ).receiveCart( cartObject )
```

All the cart routes on Store API return a cart object which can be used here. Passing an invalid cart object here will cause errors in the block.

You can also use:

```js
const { dispatch } = window.wp.data;

dispatch('wc/store/cart').invalidateResolutionForStore()
```

However, this will cause a brief flash of an empty cart while the new cart is fetched.

## Checkout modifications

### How do I remove checkout fields?

We don't encourage this due to the wide array of plugins WordPress and Woo support. Some of these may rely on certain checkout fields to function, but if you're certain the fields are safe to remove, please see [Removing Checkout Fields](./removing-checkout-fields.md).

### How do I modify the order or customer data during checkout?

If you want to modify order or customer data submitted during checkout you can use the `woocommerce_store_api_checkout_order_processed` action.

This action fires just before payment is processed. At this point you can modify the order as you would at any other point in the WooCommerce lifecycle, you still have to call `$order->save()` to persist the changes.

As an example, let's make sure the user's first and last names are capitalized:

```php
add_action(
  'woocommerce_store_api_checkout_order_processed',
  function( WC_Order $order ) {
    $order->set_shipping_first_name( ucfirst( $order->get_shipping_first_name() ) );
    $order->set_shipping_last_name( ucfirst( $order->get_shipping_last_name() ) );

    $order->set_billing_first_name( ucfirst( $order->get_billing_first_name() ) );
    $order->set_billing_last_name( ucfirst( $order->get_billing_last_name() ) );

    $order->save();
  }
);
```

### How do I render something in the Checkout block?

This depends on what you want to render.

#### Rendering a field

The recommended approach to rendering fields in the Checkout block is to use the [Additional Checkout Fields API](https://developer.woocommerce.com/docs/cart-and-checkout-additional-checkout-fields/).

#### Rendering a custom block

To render a custom block in the Checkout block, the recommended approach is to create a child block of one of the existing Checkout inner blocks. We have an example template that can be used to set up and study an inner block. To install and use it, follow the instructions in [`@woocommerce/extend-cart-checkout-block`](https://github.com/woocommerce/woocommerce/blob/trunk/packages/js/extend-cart-checkout-block/README.md). Please note that this example contains multiple other examples of extensibility, not just inner blocks.
