#!/usr/bin/env bash

docker ps -aq | xargs docker stop
sudo rm -rf ~/wp-env/

pnpm --filter=@woocommerce/plugin-woocommerce env:dev
pnpm --filter=@woocommerce/plugin-woocommerce wp-env run cli wp wc patch

pnpm --filter=@woocommerce/plugin-woocommerce wp-env run cli wp plugin install https://github.com/woocommerce/wc-smooth-generator/releases/download/1.2.0/wc-smooth-generator.zip --activate
pnpm --filter=@woocommerce/plugin-woocommerce wp-env run cli wp plugin install query-monitor --activate

# pnpm --filter=@woocommerce/plugin-woocommerce wp-env run cli wp wc generate products 100
# pnpm --filter=@woocommerce/plugin-woocommerce wp-env run cli wp wc generate orders 100

# Redefine some PKs for better SQL performance.
# pnpm --filter=@woocommerce/plugin-woocommerce wp-env run cli wp db query "ALTER TABLE wp_postmeta ADD UNIQUE KEY meta_id (meta_id), DROP PRIMARY KEY, ADD PRIMARY KEY (post_id, meta_key, meta_id), DROP KEY post_id;"
# pnpm --filter=@woocommerce/plugin-woocommerce wp-env run cli wp db query "ALTER TABLE wp_usermeta ADD UNIQUE KEY umeta_id (umeta_id), DROP PRIMARY KEY, ADD PRIMARY KEY (user_id, meta_key, umeta_id), DROP KEY user_id;"
# pnpm --filter=@woocommerce/plugin-woocommerce wp-env run cli wp db query "ALTER TABLE wp_options ADD UNIQUE KEY option_id (option_id), DROP PRIMARY KEY, ADD PRIMARY KEY (option_name), DROP KEY option_name;"

