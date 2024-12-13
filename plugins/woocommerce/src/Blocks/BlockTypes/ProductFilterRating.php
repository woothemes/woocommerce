<?php
namespace Automattic\WooCommerce\Blocks\BlockTypes;

use Automattic\WooCommerce\Blocks\BlockTypes\ProductCollection\Utils as ProductCollectionUtils;
use Automattic\WooCommerce\Blocks\QueryFilters;
use Automattic\WooCommerce\Blocks\Package;


/**
 * Product Filter: Rating Block
 *
 * @package Automattic\WooCommerce\Blocks\BlockTypes
 */
final class ProductFilterRating extends AbstractBlock {
	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'product-filter-rating';

	const RATING_FILTER_QUERY_VAR = 'rating_filter';

	/**
	 * Initialize this block type.
	 *
	 * - Hook into WP lifecycle.
	 * - Register the block with WordPress.
	 */
	protected function initialize() {
		parent::initialize();

		add_filter( 'collection_filter_query_param_keys', array( $this, 'get_filter_query_param_keys' ), 10, 2 );
		add_filter( 'collection_active_filters_data', array( $this, 'register_active_filters_data' ), 10, 2 );
	}

	/**
	 * Register the query param keys.
	 *
	 * @param array $filter_param_keys The active filters data.
	 * @param array $url_param_keys    The query param parsed from the URL.
	 *
	 * @return array Active filters param keys.
	 */
	public function get_filter_query_param_keys( $filter_param_keys, $url_param_keys ) {
		$rating_param_keys = array_filter(
			$url_param_keys,
			function ( $param ) {
				return self::RATING_FILTER_QUERY_VAR === $param;
			}
		);

		return array_merge(
			$filter_param_keys,
			$rating_param_keys
		);
	}

	/**
	 * Register the active filters data.
	 *
	 * @param array $data   The active filters data.
	 * @param array $params The query param parsed from the URL.
	 * @return array Active filters data.
	 */
	public function register_active_filters_data( $data, $params ) {
		if ( empty( $params[ self::RATING_FILTER_QUERY_VAR ] ) ) {
			return $data;
		}

		$active_ratings = array_filter(
			explode( ',', $params[ self::RATING_FILTER_QUERY_VAR ] )
		);

		if ( empty( $active_ratings ) ) {
			return $data;
		}

		$active_ratings = array_map(
			function ( $rating ) {
				return array(
					/* translators: %d is the rating value. */
					'title'      => sprintf( __( 'Rated %d out of 5', 'woocommerce' ), $rating ),
					'attributes' => array(
						'data-wc-on--click' => esc_attr( "{$this->get_full_block_name()}::actions.toggleFilter" ),
						'value'             => esc_attr( $rating ),
					),
				);
			},
			$active_ratings
		);

		$data['rating'] = array(
			'type'  => __( 'Rating', 'woocommerce' ),
			'items' => $active_ratings,
		);

		return $data;
	}

	/**
	 * Include and render the block.
	 *
	 * @param array    $attributes Block attributes. Default empty array.
	 * @param string   $content    Block content. Default empty string.
	 * @param WP_Block $block      Block instance.
	 * @return string Rendered block type output.
	 */
	protected function render( $attributes, $content, $block ) {
		// don't render if its admin, or ajax in progress.
		if ( is_admin() || wp_doing_ajax() ) {
			return '';
		}

		$rating_counts = $this->get_rating_counts( $block );

		// Pick the selected ratings from the query string.
		$filter_params   = $block->context['filterParams'] ?? array();
		$rating_query    = $filter_params[ self::RATING_FILTER_QUERY_VAR ] ?? '';
		$selected_rating = array_filter( explode( ',', $rating_query ) );

		/*
		 * Get the rating items
		 * based on the selected ratings and the rating counts.
		 */
		$items = $this->get_rating_items( $rating_counts, $selected_rating, $attributes['showCounts'] ?? false );

		$filter_context = array(
			'filterData'         => array(
				'items'   => $items,
				'actions' => array(
					'toggleFilter' => "{$this->get_full_block_name()}::actions.toggleFilter",
				),
			),
			'hasSelectedFilters' => count( $selected_rating ) > 0,
		);

		$wrapper_attributes = array(
			'data-wc-interactive'  => wp_json_encode( array( 'namespace' => $this->get_full_block_name() ), JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP ),
			'data-wc-context'      => wp_json_encode(
				array(
					'hasSelectedFilters' => $filter_context['hasSelectedFilters'],
					'hasFilterOptions'   => ! empty( $items ),
				),
				JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP
			),
			'data-wc-bind--hidden' => '!context.hasFilterOptions',
		);

		return sprintf(
			'<div %1$s>%2$s</div>',
			get_block_wrapper_attributes( $wrapper_attributes ),
			array_reduce(
				$block->parsed_block['innerBlocks'],
				function ( $carry, $parsed_block ) use ( $filter_context ) {
					$carry .= ( new \WP_Block( $parsed_block, array( 'filterData' => $filter_context['filterData'] ) ) )->render();
					return $carry;
				},
				''
			)
		);
	}

	/**
	 * Render the rating label.
	 *
	 * @param int    $rating The rating to render.
	 * @param string $count_label The count label to render.
	 * @return string|false
	 */
	private function render_rating_label( $rating, $count_label ) {
		$width = $rating * 20;

		$rating_label = sprintf(
			/* translators: %1$d is referring to rating value. Example: Rated 4 out of 5. */
			__( 'Rated %1$d out of 5', 'woocommerce' ),
			$rating,
		);

		ob_start();
		?>
		<div class="wc-block-components-product-rating">
			<div class="wc-block-components-product-rating__stars" role="img" aria-label="<?php echo esc_attr( $rating_label ); ?>">
				<span style="width: <?php echo esc_attr( $width ); ?>%" aria-hidden="true">
				</span>
			</div>
			<span class="wc-block-components-product-rating-count">
				<?php echo esc_html( $count_label ); ?>
			</span>
		</div>
		<?php
		return ob_get_clean();
	}

	/**
	 * Get the Rating list items.
	 *
	 * @param array $ratings     - The rating counts.
	 * @param array $selected    - an array of selected ratings.
	 * @param bool  $with_counts - Whether to show the counts.
	 * @return array The rating items.
	 */
	private function get_rating_items( $ratings, $selected, $with_counts ) {
		return array_map(
			function ( $rating ) use ( $selected, $with_counts ) {
				$value       = (string) $rating['rating'];
				$count_label = $with_counts ? "({$rating['count']})" : '';

				$aria_label = sprintf(
					/* translators: %1$d is referring to rating value. Example: Rated 4 out of 5. */
					__( 'Rated %s out of 5', 'woocommerce' ),
					$value,
				);

				return array(
					'id'         => 'rating-' . $value,
					'selected'   => in_array( $value, $selected, true ),
					'label'      => $this->render_rating_label( (int) $value, $count_label ),
					'aria_label' => $aria_label,
					'value'      => $value,
				);
			},
			$ratings
		);
	}

	/**
	 * Get the dropdown props.
	 *
	 * @param mixed  $rating_counts The rating counts.
	 * @param mixed  $selected_ratings_query The url query param for selected ratings.
	 * @param bool   $show_counts Whether to show the counts.
	 * @param string $select_type The select type. (single|multiple).
	 * @return array<array-key, array>
	 */
	private function get_dropdown_props( $rating_counts, $selected_ratings_query, $show_counts, $select_type ) {
		$ratings_array    = explode( ',', $selected_ratings_query );
		$placeholder_text = 'single' === $select_type ? __( 'Select a rating', 'woocommerce' ) : __( 'Select ratings', 'woocommerce' );

		$selected_items = array_reduce(
			$rating_counts,
			function ( $carry, $rating ) use ( $ratings_array, $show_counts ) {
				if ( in_array( (string) $rating['rating'], $ratings_array, true ) ) {
					$count       = $rating['count'];
					$count_label = $show_counts ? "($count)" : '';
					$rating_str  = (string) $rating['rating'];
					$carry[]     = array(
						/* translators: %d is referring to the average rating value. Example: Rated 4 out of 5. */
						'label' => sprintf( __( 'Rated %d out of 5', 'woocommerce' ), $rating_str ) . ' ' . $count_label,
						'value' => $rating['rating'],
					);
				}
				return $carry;
			},
			array()
		);

		return array(
			'items'          => array_map(
				function ( $rating ) use ( $show_counts ) {
					$count = $rating['count'];
					$count_label = $show_counts ? "($count)" : '';
					$rating_str = (string) $rating['rating'];
					return array(
						/* translators: %d is referring to the average rating value. Example: Rated 4 out of 5. */
						'label' => sprintf( __( 'Rated %d out of 5', 'woocommerce' ), $rating_str ) . ' ' . $count_label,
						'value' => $rating['rating'],
					);
				},
				$rating_counts
			),
			'select_type'    => $select_type,
			'selected_items' => $selected_items,
			'action'         => "{$this->get_full_block_name()}::actions.onDropdownChange",
			'placeholder'    => $placeholder_text,
		);
	}

	/**
	 * Retrieve the rating filter data for current block.
	 *
	 * @param WP_Block $block Block instance.
	 */
	private function get_rating_counts( $block ) {
		$filters    = Package::container()->get( QueryFilters::class );
		$query_vars = ProductCollectionUtils::get_query_vars( $block, 1 );

		if ( ! empty( $query_vars['tax_query'] ) ) {
			// phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_tax_query
			$query_vars['tax_query'] = ProductCollectionUtils::remove_query_array( $query_vars['tax_query'], 'rating_filter', true );
		}

		if ( isset( $query_vars['taxonomy'] ) && false !== strpos( $query_vars['taxonomy'], 'pa_' ) ) {
			unset(
				$query_vars['taxonomy'],
				$query_vars['term']
			);
		}

		$counts = $filters->get_rating_counts( $query_vars );
		$data   = array();

		foreach ( $counts as $key => $value ) {
			$data[] = array(
				'rating' => $key,
				'count'  => $value,
			);
		}

		return $data;
	}
}
