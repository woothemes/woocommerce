<?php
declare(strict_types=1);

namespace Automattic\WooCommerce\Blocks\BlockTypes;

use Automattic\WooCommerce\Admin\Features\Features;
use Automattic\WooCommerce\Blocks\Utils\StyleAttributesUtils;

/**
 * Block type for variation selector in add to cart forms.
 */
class AddToCartWithOptionsVariationSelector extends AbstractBlock {
	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'add-to-cart-with-options-variation-selector';

	/**
	 * Cache for filtered variation attributes.
	 *
	 * @var array
	 */
	private $filtered_attributes_cache = [];

	/**
	 * Get filtered variation attributes (only for variations with price).
	 *
	 * @param WC_Product_Variable $product The variable product.
	 * @return array Filtered attributes
	 */
	protected function get_filtered_variation_attributes($product) {
		$cache_key = 'filtered_attrs_' . $product->get_id();

		if (isset($this->filtered_attributes_cache[$cache_key])) {
			return $this->filtered_attributes_cache[$cache_key];
		}

		$variations = $product->get_available_variations();
		$filtered_attributes = array();

		foreach ($variations as $variation) {
			if ($this->variation_has_price($variation)) {
				$filtered_attributes = $this->add_variation_attributes($filtered_attributes, $variation);
			}
		}

		$filtered_attributes = $this->remove_duplicate_values($filtered_attributes);
		$this->filtered_attributes_cache[$cache_key] = $filtered_attributes;

		return $filtered_attributes;
	}

	/**
	 * Check if a variation has price.
	 *
	 * @param array $variation Variation data.
	 * @return bool
	 */
	private function variation_has_price($variation): bool {
		return isset($variation['display_price']) || isset($variation['display_regular_price']);
	}

	/**
	 * Add variation attributes to filtered list.
	 *
	 * @param array $filtered_attributes Current filtered attributes.
	 * @param array $variation Variation data.
	 * @return array Updated filtered attributes
	 */
	private function add_variation_attributes($filtered_attributes, $variation): array {
		foreach ($variation['attributes'] as $attribute_name => $value) {
			$taxonomy = str_replace('attribute_', '', $attribute_name);
			if (!isset($filtered_attributes[$taxonomy])) {
				$filtered_attributes[$taxonomy] = array();
			}
			if ($value) {
				$filtered_attributes[$taxonomy][] = $value;
			}
		}
		return $filtered_attributes;
	}

	/**
	 * Remove duplicate values from attributes.
	 *
	 * @param array $attributes Attributes to deduplicate.
	 * @return array Deduplicated attributes
	 */
	private function remove_duplicate_values($attributes): array {
		foreach ($attributes as $taxonomy => $values) {
			$attributes[$taxonomy] = array_unique($values);
		}
		return $attributes;
	}

	/**
	 * Render variation label.
	 *
	 * @param string $attribute_name Name of the attribute.
	 * @param bool   $required Whether the attribute selection is required.
	 * @return string Rendered label HTML.
	 */
	protected function renderVariationLabel($attribute_name, $required = false): string {
		$label_id = esc_attr('attribute_' . sanitize_title($attribute_name));
		$label_text = wc_attribute_label($attribute_name);

		$html = sprintf(
			'<label class="wc-block-components-product-add-to-cart-attribute-label" for="%s">%s%s</label>',
			$label_id,
			esc_html($label_text),
			$required ? '<span class="required">*</span>' : ''
		);

		return $html;
	}

	/**
	 * Render variation selector dropdown.
	 *
	 * @param WC_Product $product The product object.
	 * @param string     $attribute_name Name of the attribute.
	 * @param array      $options Available options for this attribute.
	 * @return string Rendered dropdown HTML.
	 */
	protected function renderVariationSelector($product, $attribute_name, $options): string {
		$selected = $this->get_selected_attribute_value($product, $attribute_name);
		$select_id = esc_attr('attribute_' . sanitize_title($attribute_name));

		$html = sprintf(
			'<select id="%1$s"
				class="wc-block-components-product-add-to-cart-attribute-select"
				name="%1$s"
				data-attribute_name="attribute_%2$s"
				data-wc-on--change="actions.updateVariation">',
			$select_id,
			esc_attr(sanitize_title($attribute_name))
		);

		$html .= '<option value="">' . esc_html__('Choose an option', 'woocommerce') . '</option>';
		$html .= $this->get_options_html($product, $attribute_name, $options, $selected);
		$html .= '</select>';

		return $html;
	}

	/**
	 * Get selected attribute value.
	 *
	 * @param WC_Product $product The product object.
	 * @param string     $attribute_name Name of the attribute.
	 * @return string Selected value
	 */
	private function get_selected_attribute_value($product, $attribute_name): string {
		return isset($_REQUEST['attribute_' . sanitize_title($attribute_name)])
			? wc_clean(wp_unslash($_REQUEST['attribute_' . sanitize_title($attribute_name)]))
			: $product->get_variation_default_attribute($attribute_name);
	}

	/**
	 * Get HTML for variation options.
	 *
	 * @param WC_Product $product The product object.
	 * @param string     $attribute_name Name of the attribute.
	 * @param array      $options Available options.
	 * @param string     $selected Selected value.
	 * @return string Options HTML
	 */
	private function get_options_html($product, $attribute_name, $options, $selected): string {
		$html = '';

		if (!empty($options)) {
			if (taxonomy_exists($attribute_name)) {
				$html .= $this->get_taxonomy_options_html($product, $attribute_name, $options, $selected);
			} else {
				$html .= $this->get_custom_options_html($product, $attribute_name, $options, $selected);
			}
		}

		return $html;
	}

	/**
	 * Get HTML for taxonomy-based options.
	 *
	 * @param WC_Product $product The product object.
	 * @param string     $attribute_name Name of the attribute.
	 * @param array      $options Available options.
	 * @param string     $selected Selected value.
	 * @return string Options HTML
	 */
	private function get_taxonomy_options_html($product, $attribute_name, $options, $selected): string {
		$terms = wc_get_product_terms($product->get_id(), $attribute_name, array('fields' => 'all'));
		$html = '';

		foreach ($terms as $term) {
			if (in_array($term->slug, $options, true)) {
				$html .= sprintf(
					'<option value="%s" %s>%s</option>',
					esc_attr($term->slug),
					selected(sanitize_title($selected), $term->slug, false),
					esc_html(apply_filters('woocommerce_variation_option_name', $term->name, $term, $attribute_name, $product))
				);
			}
		}

		return $html;
	}

	/**
	 * Get HTML for custom attribute options.
	 *
	 * @param WC_Product $product The product object.
	 * @param string     $attribute_name Name of the attribute.
	 * @param array      $options Available options.
	 * @param string     $selected Selected value.
	 * @return string Options HTML
	 */
	private function get_custom_options_html($product, $attribute_name, $options, $selected): string {
		$html = '';

		foreach ($options as $option) {
			$selected_value = sanitize_title($selected) === $selected
				? selected($selected, sanitize_title($option), false)
				: selected($selected, $option, false);

			$html .= sprintf(
				'<option value="%s" %s>%s</option>',
				esc_attr($option),
				$selected_value,
				esc_html(apply_filters('woocommerce_variation_option_name', $option, null, $attribute_name, $product))
			);
		}

		return $html;
	}

	/**
	 * Render the block.
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 * @return string Rendered block output.
	 */
	protected function render($attributes, $content, $block): string {
		global $product;

		if (!$this->should_render($block)) {
			return '';
		}

		$product = $this->get_product_for_block($block, $product);
		if (!$product || !$product->is_type('variable')) {
			return '';
		}

		return $this->render_variation_form($product, $attributes);
	}

	/**
	 * Check if block should be rendered.
	 *
	 * @param WP_Block $block Block instance.
	 * @return bool
	 */
	private function should_render($block): bool {
		return isset($block->context['postId']);
	}

	/**
	 * Get product for block rendering.
	 *
	 * @param WP_Block   $block Block instance.
	 * @param WC_Product $current_product Current product.
	 * @return WC_Product|null
	 */
	private function get_product_for_block($block, $current_product) {
		$previous_product = $current_product;
		$product = wc_get_product($block->context['postId']);

		return $product instanceof \WC_Product ? $product : $previous_product;
	}

	/**
	 * Render variation form.
	 *
	 * @param WC_Product $product Product instance.
	 * @param array      $attributes Block attributes.
	 * @return string Rendered form HTML
	 */
	private function render_variation_form($product, $attributes): string {
		$variation_attributes = $product->get_variation_attributes();
		if (empty($variation_attributes)) {
			return '';
		}

		wp_enqueue_script('wc-add-to-cart-variation');

		$variations = $this->get_variations_data($product);
		if (empty($variations)) {
			return '';
		}

		return $this->get_form_html($product, $variations, $variation_attributes);
	}

	/**
	 * Get variations data.
	 *
	 * @param WC_Product $product Product instance.
	 * @return array|false
	 */
	private function get_variations_data($product) {
		$get_variations = count($product->get_children()) <= apply_filters('woocommerce_ajax_variation_threshold', 30, $product);
		return $get_variations ? $product->get_available_variations() : false;
	}

	/**
	 * Get form HTML.
	 *
	 * @param WC_Product $product Product instance.
	 * @param array      $variations Variations data.
	 * @param array      $variation_attributes Variation attributes.
	 * @return string Form HTML
	 */
	private function get_form_html($product, $variations, $variation_attributes): string {
		$variations_json = wp_json_encode($variations);
		$variations_attr = function_exists('wc_esc_json') ? wc_esc_json($variations_json) : _wp_specialchars($variations_json, ENT_QUOTES, 'UTF-8', true);

		$wrapper_attributes = get_block_wrapper_attributes(['class' => 'wc-block-add-to-cart-form']);

		$form = $this->get_form_opening($product, $variations_attr);
		$form .= $this->get_variations_table($product, $variation_attributes);
		$form .= '</form>';

		return sprintf('<div %1$s>%2$s</div>', $wrapper_attributes, $form);
	}

	/**
	 * Get form opening HTML.
	 *
	 * @param WC_Product $product Product instance.
	 * @param string     $variations_attr Variations JSON.
	 * @return string Form opening HTML
	 */
	private function get_form_opening($product, $variations_attr): string {
		return sprintf(
			'<form class="variations_form cart" data-product_id="%d" data-product_variations="%s">',
			absint($product->get_id()),
			$variations_attr
		);
	}

	/**
	 * Get variations table HTML.
	 *
	 * @param WC_Product $product Product instance.
	 * @param array      $variation_attributes Variation attributes.
	 * @return string Table HTML
	 */
	private function get_variations_table($product, $variation_attributes): string {
		ob_start();
		do_action('woocommerce_before_variations_table');
		$before_table = ob_get_clean();

		$table = '<table class="variations" cellspacing="0" role="presentation"><tbody>';

		foreach ($variation_attributes as $attribute_name => $options) {
			$table .= $this->get_variation_row($product, $attribute_name, $options);
		}

		$table .= '</tbody></table>';

		ob_start();
		do_action('woocommerce_after_variations_table');
		$after_table = ob_get_clean();

		return $before_table . $table . $after_table;
	}

	/**
	 * Get variation row HTML.
	 *
	 * @param WC_Product $product Product instance.
	 * @param string     $attribute_name Attribute name.
	 * @param array      $options Attribute options.
	 * @return string Row HTML
	 */
	private function get_variation_row($product, $attribute_name, $options): string {
		$html = '<tr>';
		$html .= '<th class="label">' . $this->renderVariationLabel($attribute_name) . '</th>';
		$html .= '<td class="value">';
		$html .= $this->renderVariationSelector($product, $attribute_name, $options);
		$html .= '</td>';
		$html .= '</tr>';

		if (end(array_keys($product->get_variation_attributes())) === $attribute_name) {
			$html .= $this->get_reset_button_row();
		}

		return $html;
	}

	/**
	 * Get reset button row HTML.
	 *
	 * @return string Row HTML
	 */
	private function get_reset_button_row(): string {
		return sprintf(
			'<tr><td colspan="2">%s</td></tr>',
			wp_kses_post(apply_filters(
				'woocommerce_reset_variations_link',
				sprintf(
					'<button class="reset_variations" aria-label="%1$s">%2$s</button>',
					esc_html__('Clear options', 'woocommerce'),
					esc_html__('Clear', 'woocommerce')
				)
			))
		);
	}
}
