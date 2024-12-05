#!/bin/bash

echo "Initializing WooCommerce E2E"

wp-env run tests-cli wp plugin activate woocommerce

wp-env run tests-cli wp user create customer customer@woocommercecoree2etestsuite.com --user_pass=password --role=subscriber --path=/var/www/html

# Installing and activating the WordPress Importer plugin to import sample products"
# wp-env run tests-cli wp plugin install wordpress-importer --activate

wp-env run tests-cli wp plugin install https://github.com/woocommerce/wc-smooth-generator/releases/download/1.2.0/wc-smooth-generator.zip --activate

# Adding basic WooCommerce settings"
wp-env run tests-cli wp option set woocommerce_store_address 'Example Address Line 1'
wp-env run tests-cli wp option set woocommerce_store_address_2 'Example Address Line 2'
wp-env run tests-cli wp option set woocommerce_store_city 'Example City'
wp-env run tests-cli wp option set woocommerce_default_country 'US:CA'
wp-env run tests-cli wp option set woocommerce_store_postcode '94110'
wp-env run tests-cli wp option set woocommerce_currency 'USD'
wp-env run tests-cli wp option set woocommerce_product_type 'both'
wp-env run tests-cli wp option set woocommerce_allow_tracking 'no'
wp-env run tests-cli wp option set woocommerce_enable_checkout_login_reminder 'yes'
wp-env run tests-cli wp option set --format=json woocommerce_cod_settings '{"enabled":"yes"}'
wp-env run tests-cli wp option set woocommerce_coming_soon 'no'

#  WooCommerce shop pages
wp-env run tests-cli wp wc --user=admin tool run install_pages

# Importing WooCommerce sample products"
# wp-env run tests-cli wp import wp-content/plugins/woocommerce/sample-data/sample_products.xml --authors=skip

pnpm --filter=@woocommerce/plugin-woocommerce wp-env run tests-cli wp db query "CREATE TABLE wp_posts_variations LIKE wp_posts;"
pnpm --filter=@woocommerce/plugin-woocommerce wp-env run tests-cli wp db query "CREATE TABLE wp_postmeta_variations LIKE wp_postmeta;"

# Test on 1K, 10K, 25K, 50k
wp-env run tests-cli wp wc generate products 10000 &
wp-env run tests-cli wp wc generate products 10000 &
wp-env run tests-cli wp wc generate products 10000 &
wp-env run tests-cli wp wc generate products 10000 &
wp-env run tests-cli wp wc generate products 10000

# install Storefront
wp-env run tests-cli wp theme install storefront --activate

echo "Success! Your E2E Test Environment is now ready."


# PoC related
pnpm --filter=@woocommerce/plugin-woocommerce wp-env run tests-cli wp wc patch
pnpm --filter=@woocommerce/plugin-woocommerce wp-env run tests-cli wp db query "REPLACE INTO wp_posts_variations SELECT * FROM wp_posts WHERE post_type='product_variation';"
pnpm --filter=@woocommerce/plugin-woocommerce wp-env run tests-cli wp db query "DELETE FROM wp_posts WHERE post_type='product_variation';"
pnpm --filter=@woocommerce/plugin-woocommerce wp-env run tests-cli wp db query "REPLACE INTO wp_postmeta_variations SELECT * FROM wp_postmeta WHERE post_id IN ( SELECT ID FROM wp_posts_variations );"
pnpm --filter=@woocommerce/plugin-woocommerce wp-env run tests-cli wp db query "DELETE FROM wp_postmeta WHERE post_id IN ( SELECT ID FROM wp_posts_variations );"
