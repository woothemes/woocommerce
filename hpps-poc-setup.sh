#!/usr/bin/env bash

docker ps -aq | xargs docker stop
sudo rm -rf ~/wp-env/

pnpm --filter=@woocommerce/plugin-woocommerce env:dev

pnpm --filter=@woocommerce/plugin-woocommerce wp-env run cli wp plugin install https://github.com/woocommerce/wc-smooth-generator/releases/download/1.2.0/wc-smooth-generator.zip --activate
pnpm --filter=@woocommerce/plugin-woocommerce wp-env run cli wp plugin install query-monitor --activate
pnpm --filter=@woocommerce/plugin-woocommerce wp-env run cli wp wc generate products 100
pnpm --filter=@woocommerce/plugin-woocommerce wp-env run cli wp wc generate orders 100

pnpm --filter=@woocommerce/plugin-woocommerce wp-env run cli wp db query "CREATE TABLE wp_posts_variations LIKE wp_posts;"
pnpm --filter=@woocommerce/plugin-woocommerce wp-env run cli wp db query "REPLACE INTO wp_posts_variations SELECT * FROM wp_posts WHERE post_type='product_variation';"
pnpm --filter=@woocommerce/plugin-woocommerce wp-env run cli wp db query "DELETE FROM wp_posts WHERE post_type='product_variation';"

pnpm --filter=@woocommerce/plugin-woocommerce wp-env run cli wp db query "CREATE TABLE wp_postmeta_variations LIKE wp_postmeta;"
pnpm --filter=@woocommerce/plugin-woocommerce wp-env run cli wp db query "REPLACE INTO wp_postmeta_variations SELECT * FROM wp_postmeta WHERE post_id IN ( SELECT ID FROM wp_posts_variations );"
pnpm --filter=@woocommerce/plugin-woocommerce wp-env run cli wp db query "DELETE FROM wp_postmeta WHERE post_id IN ( SELECT ID FROM wp_posts_variations );"

