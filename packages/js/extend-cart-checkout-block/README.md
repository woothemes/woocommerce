# @woocommerce/extend-cart-checkout-block

This is a template to be used with `@wordpress/create-block` to create a WooCommerce Blocks extension starting point.

## Installation

You may need to install a node version manager, for example [`nvm`](https://github.com/nvm-sh/nvm) or [`fnm`](https://github.com/Schniz/fnm)

Before getting started, switch to Node v20.

e.g. `nvm install 20 && nvm use 20` or `fnm install 20 && fnm use 20`

From your `plugins` directory run:

```sh
npx @wordpress/create-block -t @woocommerce/extend-cart-checkout-block your_extension_name
```

When this has completed, go to your WordPress plugins page and activate the plugin.

Add some items to your cart and visit the Checkout block, notice there is additional data on the block that this template has added.

### Installing `wp-prettier` (optional)

WooCommerce Blocks uses `wp-prettier` to format the JS files. If you want to use `wp-prettier`, you will need to run the following command:

```sh
npm i --D "prettier@npm:wp-prettier@latest" && npm i --D eslint-plugin-prettier
```

It is important to chain these commands as `eslint-plugin-prettier` will error if it is not installed _after_ `prettier@npm:wp-prettier@latest`.

You can then lint the project by running `npm run lint:js`

### Installing `wp-env` (optional)

`wp-env` lets you easily set up a local WordPress environment for building and testing your extension. If you want to use `wp-env`, you will need to run the following command:

```sh
nvm use && npm i -D @wordpress/env && npm set-script wp-env "wp-env"
```
