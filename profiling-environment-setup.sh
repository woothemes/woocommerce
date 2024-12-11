#!/usr/bin/env bash

docker ps -aq | xargs docker stop
sudo rm -rf ~/wp-env/

pnpm --filter=@woocommerce/plugin-woocommerce env:dev
pnpm --filter=@woocommerce/plugin-woocommerce wp-env run cli wp wc patch

pnpm --filter=@woocommerce/plugin-woocommerce wp-env run cli wp plugin install https://github.com/woocommerce/wc-smooth-generator/releases/download/1.2.0/wc-smooth-generator.zip --activate
pnpm --filter=@woocommerce/plugin-woocommerce wp-env run cli wp plugin install query-monitor --activate

# pnpm --filter=@woocommerce/plugin-woocommerce wp-env run cli wp wc generate products 100
# pnpm --filter=@woocommerce/plugin-woocommerce wp-env run cli wp wc generate orders 100

