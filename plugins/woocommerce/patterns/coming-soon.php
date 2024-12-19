<?php
/**
 * Title: Coming Soon
 * Slug: woocommerce/coming-soon
 * Categories: WooCommerce
 * Inserter: false
 * Feature Flag: launch-your-store
 *
 * @package WooCommerce\Blocks
 */

$store_pages_only = 'yes' === get_option( 'woocommerce_store_pages_only', 'no' );
?>

<!-- wp:pattern {"slug":"woocommerce/<?php echo $store_pages_only ? 'page-coming-soon-with-header-footer' : 'page-coming-soon-default'; ?>"} /-->
