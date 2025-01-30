---
post_title: Free Shipping Customizations
menu_title: Free shipping customizations
tags: code-snippets
current wccom url: https://woocommerce.com/document/free-shipping/#advanced-settings-customization
combined with: https://woocommerce.com/document/hide-other-shipping-methods-when-free-shipping-is-available/#use-a-plugin
---

## Free Shipping: Advanced Settings/Customization

### Overview

By default, WooCommerce shows all shipping methods that match the customer and the cart contents. This means Free Shipping also shows along with Flat Rate and other Shipping Methods. 

The functionality to hide all other methods, and only show Free Shipping, requires either custom PHP code or a plugin/extension.

### Adding code

Before adding snippets, clear your WooCommerce cache. Go to WooCommerce > System Status > Tools > WooCommerce Transients > Clear transients.

Add this code to your child theme's `functions.php`, or via a plugin that allows custom functions to be added. Please don't add custom code directly to a parent theme's `functions.php` as changes are entirely erased when a parent theme updates.

## Code Snippets

### Enabling or Disabling Free Shipping via Hooks

You can hook into the `is_available` function of the free shipping method.

```php
return apply_filters( 'woocommerce_shipping_' . $this->id . '_is_available', $is_available );
```

This means you can use `add_filter()` on `woocommerce_shipping_free_shipping_is_available` and return `true` or `false`.

### How do I only show Free Shipping?

The following snippet hides everything but `free_shipping`, if it's available and the customer's cart qualifies. 

```php
/**
 * Hide shipping rates when free shipping is available.
 *
 * @param array $rates Array of rates found for the package.
 * @return array
 */
function my_hide_shipping_when_free_is_available( $rates ) {
	$free = array();
	foreach ( $rates as $rate_id => $rate ) {
		if ( 'free_shipping' === $rate->method_id ) {
			$free[ $rate_id ] = $rate;
		}
	}
	return ! empty( $free ) ? $free : $rates;
}
add_filter( 'woocommerce_package_rates', 'my_hide_shipping_when_free_is_available', 100 );
```

### How do I only show Local Pickup and Free Shipping?

The snippet below hides everything but `free_shipping` and Local Pickup supporting methods, if it's available and the customer's cart qualifies. 

```php

/**
 * Hide shipping rates when free shipping is available, but keep "Local pickup" supporting methods. 
 */

function hide_shipping_when_free_is_available( $rates, $package ) {
	$new_rates = array();
	foreach ( $rates as $rate_id => $rate ) {
		// Only modify rates if free_shipping is present.
		if ( 'free_shipping' === $rate->method_id ) {
			$new_rates[ $rate_id ] = $rate;
		}
	}

	if ( ! empty( $new_rates ) ) {
		// Save local pickup and methods supporting 'local-pickup' if present.
		foreach ( $rates as $rate_id => $rate ) {
			$method = WC()->shipping()->shipping_methods[ $rate->method_id ];
      if ( $method instanceof WC_Shipping_Method && $method->supports( 'local-pickup' ) ) {
				$new_rates[ $rate_id ] = $rate;
			}
		}
		return $new_rates;
	}

	return $rates;
}

add_filter( 'woocommerce_package_rates', 'hide_shipping_when_free_is_available', 10, 2 );
```

### Only show free shipping in all states except a few that are not eligible for free shipping

This snippet results in showing only free shipping in all states except the exclusion list. It hides free shipping if the customer is in one of the states listed:

```php
/**
 * Show only free shipping when free shipping is available and customer is NOT in certain states, otherwise show all rates except free shipping.
 * Change $excluded_states = array( 'AK','HI','GU','PR' ); to include all the states that DO NOT have free shipping
 *
 * @param array $rates
 * @return array
 */
function hide_all_shipping_when_free_is_available( $rates ) {
 
  // List of states that do not get free shipping.
	$excluded_states = array( 'AK','HI','GU','PR' );
	
	$free_shipping_rates = array();
	foreach( $rates as $rate_id => $rate ) {
    if( 'free_shipping' === $rate->method_id ) {
      $free_shipping_rates[ $rate_id ] = $rate;
      unset( $rates[ $rate_id ] ); // Remove free shipping from the list of rates.
    }
  }
  
  // If free shipping is available, and customer is not in excluded states, return only free shipping options.
  if ( !empty( $free_shipping_rates ) && !in_array( WC()->customer->get_shipping_state(), $excluded_states ) ) {
    return $free_shipping_rates;
  }
  
  return $rates; // Otherwise return rates without free shipping.
}

add_filter( 'woocommerce_package_rates', 'hide_all_shipping_when_free_is_available' , 10, 2 );
```

### Enable Shipping Methods on a per Class / Product Basis, split orders, or other scenarios?

Need more flexibility? Take a look at our [premium Shipping Method extensions](https://woocommerce.com/product-category/woocommerce-extensions/shipping-methods/).


