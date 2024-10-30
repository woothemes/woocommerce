#!/usr/bin/env bash

# Remove the database snapshot if it exists.
wp-env run tests-cli -- rm -f blocks_e2e.sql
# Run the main script in the container for better performance.
wp-env run tests-cli -- bash wp-content/plugins/woocommerce/blocks-bin/playwright/scripts/index.sh
# Disable the LYS Coming Soon banner.
wp-env run tests-cli -- wp option update woocommerce_coming_soon 'no'

#!/bin/sh
BASENAME=$(basename "`pwd`")
# We need to pass the blocks plugin folder name to the script, the name can change depending on your local env and we can't hardcode it.
wp-env run tests-cli './wp-content/plugins/woocommerce/blocks-bin/wp-env-config.sh' woocommerce

node ./tests/e2e/bin/generate-test-translations.js
