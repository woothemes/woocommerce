<?php

declare( strict_types = 1 );

namespace Automattic\WooCommerce\Enums;

/**
 * Enum class for all the catalog visibility values.
 */
class CatalogVisibility {
	/**
	 * Visible product.
	 *
	 * @var string
	 */
	const VISIBLE = 'visible';

	/**
	 * Product visible in catalog.
	 */
	const CATALOG = 'catalog';

	/**
	 * Product visible in search.
	 */
	const SEARCH = 'search';

	/**
	 * Product invisible.
	 */
	const HIDDEN = 'hidden';
}
