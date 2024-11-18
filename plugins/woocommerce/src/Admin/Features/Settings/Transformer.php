<?php
/**
 * WooCommerce Settings Data Transformer.
 */

declare( strict_types = 1 );

namespace Automattic\WooCommerce\Admin\Features\Settings;

/**
 * Transforms WooCommerce settings data into a structured format with logical groupings.
 */
class Transformer {
	/**
	 * Current group being processed.
	 *
	 * @var array|null
	 */
	private static ?array $current_group = null;

	/**
	 * Current checkbox group being processed.
	 *
	 * @var array|null
	 */
	private static ?array $current_checkbox_group = null;

	/**
	 * Transform settings data.
	 *
	 * @param array $raw_settings Raw settings data.
	 *
	 * @return array Transformed settings data.
	 */
	public static function transform( array $raw_settings ): array {
		$transformed = array();

		foreach ( $raw_settings as $tab_id => $tab ) {
			// If the tab doesn't have sections, or the sections aren't an array, skip it.
			if ( ! isset( $tab['sections'] ) || ! is_array( $tab['sections'] ) ) {
				$transformed[ $tab_id ] = $tab;
				continue;
			}

			$transformed[ $tab_id ] = array_merge(
				$tab,
				array( 'sections' => self::transform_sections( $tab['sections'] ) )
			);
		}

		return $transformed;
	}

	/**
	 * Transform sections within a tab.
	 *
	 * @param array $sections Sections to transform.
	 *
	 * @return array Transformed sections.
	 */
	private static function transform_sections( array $sections ): array {
		$transformed_sections = array();

		foreach ( $sections as $section_id => $section ) {
			// If the section doesn't have settings, or the settings aren't an array, skip it.
			if ( ! isset( $section['settings'] ) || ! is_array( $section['settings'] ) ) {
				$transformed_sections[ $section_id ] = $section;
				continue;
			}

			$transformed_sections[ $section_id ] = array_merge(
				$section,
				array( 'settings' => self::transform_section_settings( $section['settings'] ) )
			);
		}

		return $transformed_sections;
	}

	/**
	 * Transform settings within a section.
	 *
	 * @param array $settings Settings to transform.
	 *
	 * @return array Transformed settings.
	 */
	private static function transform_section_settings( array $settings ): array {
		self::reset_state();
		$transformed_settings = array();

		foreach ( $settings as $setting ) {
			self::process_setting( $setting, $transformed_settings );
		}
		self::finalize_transformation( $transformed_settings );

		return $transformed_settings;
	}

	/**
	 * Process individual setting.
	 *
	 * @param array $setting Setting to process.
	 * @param array $transformed_settings Transformed settings array.
	 */
	private static function process_setting( array $setting, array &$transformed_settings ): void {
		$type = $setting['type'] ?? '';

		if ( self::$current_checkbox_group && 'checkbox' !== $type ) {
			// It's expected that a checkbox group will always be closed before a non-checkbox setting.
			self::flush_current_checkbox_group( $transformed_settings );
		}

		switch ( $type ) {
			case 'title':
				self::handle_group_start( $setting, $transformed_settings );
				break;

			case 'sectionend':
				self::handle_group_end( $setting, $transformed_settings );
				break;

			case 'checkbox':
				self::handle_checkbox_setting( $setting, $transformed_settings );
				break;

			default:
				self::add_setting( $setting, $transformed_settings );
				break;
		}
	}

	/**
	 * Handle the start of a new group.
	 *
	 * @param array $setting Setting to add.
	 * @param array $transformed_settings Transformed settings array.
	 */
	private static function handle_group_start( array $setting, array &$transformed_settings ): void {
		// If we already have a group, flush it to settings before starting a new one.
		if ( self::$current_group ) {
			self::flush_current_group( $transformed_settings );
		}

		// If setting doesn't have an ID, add it as-is since we will be unable to match it with a sectionend.
		if ( ! isset( $setting['id'] ) ) {
			self::add_setting( $setting, $transformed_settings );
			return;
		}

		self::$current_group = array( $setting );
	}

	/**
	 * Handle the end of a group.
	 *
	 * @param array $setting Setting to add.
	 * @param array $transformed_settings Transformed settings array.
	 */
	private static function handle_group_end( array $setting, array &$transformed_settings ): void {
		$ids_match = self::$current_group &&
			isset( self::$current_group[0]['id'] ) &&
			isset( $setting['id'] ) &&
			self::$current_group[0]['id'] === $setting['id'];

		// If IDs match, add the group and close it.
		if ( $ids_match ) {
			// pop first element from current group.
			$title_setting = array_shift( self::$current_group );

			$transformed_settings[] = array_merge(
				$title_setting,
				array(
					'type'     => 'group',
					'settings' => self::$current_group,
				)
			);
			self::$current_group    = null;
			return;
		}

		// If IDs don't match, we don't need to transform anything so flush the current group.
		self::flush_current_group( $transformed_settings );
		self::add_setting( $setting, $transformed_settings );
	}

	/**
	 * Flush current group to transformed settings.
	 *
	 * @param array $transformed_settings Transformed settings array.
	 */
	private static function flush_current_group( array &$transformed_settings ): void {
		if ( self::$current_group ) {
			$transformed_settings = array_merge( $transformed_settings, self::$current_group );
			self::$current_group  = null;
		}
	}

	/**
	 * Handle checkbox setting and grouping.
	 *
	 * @param array $setting Setting to add.
	 * @param array $transformed_settings Transformed settings array.
	 */
	private static function handle_checkbox_setting( array $setting, array &$transformed_settings ): void {
		$checkboxgroup = $setting['checkboxgroup'] ?? '';

		switch ( $checkboxgroup ) {
			case 'start':
				self::start_checkbox_group( $setting, $transformed_settings );
				break;
			case 'end':
				self::end_checkbox_group( $setting, $transformed_settings );
				break;

			default:
				self::handle_checkbox_group_item( $setting, $transformed_settings );
				break;
		}
	}

	/**
	 * Start a new checkbox group.
	 *
	 * @param array $setting Setting to add.
	 * @param array $transformed_settings Transformed settings array.
	 */
	private static function start_checkbox_group( array $setting, array &$transformed_settings ): void {
		// If we already have an open checkbox group, flush it to settings before starting a new one.
		if ( self::$current_checkbox_group ) {
			self::flush_current_checkbox_group( $transformed_settings );
		}

		self::$current_checkbox_group = array( $setting );
	}

	/**
	 * End current checkbox group.
	 *
	 * @param array $setting Setting to add.
	 * @param array $transformed_settings Transformed settings array.
	 */
	private static function end_checkbox_group( array $setting, array &$transformed_settings ): void {
		if ( ! self::$current_checkbox_group ) {
			// If we don't have an open checkbox group, add the setting as-is.
			self::flush_current_checkbox_group( $transformed_settings );
			self::add_setting( $setting, $transformed_settings );
			return;
		}

		self::$current_checkbox_group[] = $setting;
		$first_setting                  = self::$current_checkbox_group[0];

		$checkbox_group_setting = array(
			'type'     => 'checkboxgroup',
			'title'    => $first_setting['title'] ?? '',
			'settings' => self::$current_checkbox_group,
		);

		self::add_setting( $checkbox_group_setting, $transformed_settings );
		self::$current_checkbox_group = null;
	}

	/**
	 * Handle checkbox within a group.
	 *
	 * @param array $setting Setting to add.
	 * @param array $transformed_settings Transformed settings array.
	 */
	private static function handle_checkbox_group_item( array $setting, array &$transformed_settings ): void {
		if ( self::$current_checkbox_group ) {
			self::$current_checkbox_group[] = $setting;
			return;
		}

		// If we don't have an open checkbox group, add the setting as-is.
		self::add_setting( $setting, $transformed_settings );
	}

	/**
	 * Flush current checkbox group to transformed settings.
	 *
	 * @param array $transformed_settings Transformed settings array.
	 */
	private static function flush_current_checkbox_group( array &$transformed_settings ): void {
		if ( self::$current_checkbox_group ) {
			$transformed_settings         = array_merge( $transformed_settings, self::$current_checkbox_group );
			self::$current_checkbox_group = null;
		}
	}

	/**
	 * Add setting to current context (group or root).
	 *
	 * @param array $setting Setting to add.
	 * @param array $transformed_settings Transformed settings array.
	 */
	private static function add_setting( array $setting, array &$transformed_settings ): void {
		if ( self::$current_group ) {
			self::$current_group[] = $setting;
			return;
		}

		$transformed_settings[] = $setting;
	}

	/**
	 * Finalize the transformation process.
	 *
	 * @param array &$transformed_settings Transformed settings array.
	 */
	private static function finalize_transformation( array &$transformed_settings ): void {
		if ( self::$current_group ) {
			self::flush_current_group( $transformed_settings );
		}

		if ( self::$current_checkbox_group ) {
			self::flush_current_checkbox_group( $transformed_settings );
		}
	}


	/**
	 * Reset the state to its initial values.
	 */
	public static function reset_state(): void {
		self::$current_group          = null;
		self::$current_checkbox_group = null;
	}
}
