<?php
/**
 * Plugin name: WP Cache Flush
 * Description: Flush cache for E2E test runs.
 *
 * @package Automattic\WooCommerce\E2EPlaywright
 *
 * Clears the cache for E2E test runs.
 */
declare(strict_types=1);

wp_cache_flush();
