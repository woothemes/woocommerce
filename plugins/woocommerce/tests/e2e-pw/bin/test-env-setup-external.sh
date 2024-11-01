#!/usr/bin/env bash

clear

echo "--------------------------------------------------------"
echo -e "Installing plugins from .wp-env.json"
echo "--------------------------------------------------------"
wp plugin install --activate https://downloads.wordpress.org/plugin/akismet.zip \
    https://github.com/WP-API/Basic-Auth/archive/master.zip \
    https://downloads.wordpress.org/plugin/wp-mail-logging.zip

printf "\n\n\n"

echo "--------------------------------------------------------"
echo -e "Set default theme"
echo "--------------------------------------------------------"
wp theme install twentytwentythree
wp theme activate twentytwentythree

printf "\n\n\n"

echo "--------------------------------------------------------"
echo -e "Update URL structure"
echo "--------------------------------------------------------"
wp rewrite structure '/%postname%/' --hard

printf "\n\n\n"

echo "--------------------------------------------------------"
echo -e "Installing mu plugins"
echo "--------------------------------------------------------"
wp plugin install --force --activate https://github.com/woocommerce/woocommerce/raw/trunk/plugins/woocommerce/tests/e2e-pw/bin/filter-setter.zip \
    https://github.com/woocommerce/woocommerce/raw/trunk/plugins/woocommerce/tests/e2e-pw/bin/process-waiting-actions.zip \
    https://github.com/woocommerce/woocommerce/raw/trunk/plugins/woocommerce/tests/e2e-pw/bin/test-helper-apis.zip \
    https://github.com/woocommerce/woocommerce/raw/trunk/plugins/woocommerce/tests/e2e-pw/bin/wp-cache-flush.zip

printf "\n\n\n"

echo "--------------------------------------------------------"
echo -e 'Add Customer user'
echo "--------------------------------------------------------"
wp user create customer customer@woocommercecoree2etestsuite.com \
    --user_pass=password \
    --role=customer \
    --first_name='Jane' \
    --last_name='Smith' \
    --display_name='Jane Smith'

printf "\n\n\n"

echo "--------------------------------------------------------"
echo -e 'Update Blog Name'
echo "--------------------------------------------------------"
wp option update blogname 'WooCommerce Core E2E Test Suite'

printf "\n\n\n"

echo "--------------------------------------------------------"
echo -e 'Enable tracking'
echo "--------------------------------------------------------"
wp option update woocommerce_allow_tracking 'yes'

printf "\n\n\n"

echo "--------------------------------------------------------"
echo -e 'Upload test images'
echo "--------------------------------------------------------"
echo "Importing test images..."
wp media import https://raw.githubusercontent.com/woocommerce/woocommerce/trunk/plugins/woocommerce/tests/e2e-pw/test-data/images/image-01.png \
    https://raw.githubusercontent.com/woocommerce/woocommerce/trunk/plugins/woocommerce/tests/e2e-pw/test-data/images/image-02.png \
    https://raw.githubusercontent.com/woocommerce/woocommerce/trunk/plugins/woocommerce/tests/e2e-pw/test-data/images/image-03.png
