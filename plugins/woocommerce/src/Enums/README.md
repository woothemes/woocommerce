# WooCommerce Enumerators <!-- omit in toc -->

This directory contains enumerators used in the WooCommerce plugin. Enumerators are used to define a set of named constants, which can be used to represent a set of possible values.

The enum classes make it easier to reference string values and avoid typos. They also make the code stricter, make it easier to find the usage of the possible values, centralize them, improve their documentation, and many other advantages that should help developers create related code.

## Available Enumerators

- [OrderStatus](./OrderStatus.php) - Enumerates the possible statuses of an order.
- [OrderInternalStatus](./OrderInternalStatus.php) - Enumerates the possible internal statuses of an order (when stored in the database).
- [ProductType](./ProductType.php) - Enumerates the possible types of a product.
- [ProductStatus](./ProductStatus.php) - Enumerates the possible statuses of a product.

## Contributing

The WooCommerce plugin contains many string values that still need to be converted to enumerators. Feel free to contribute by creating new classes.
