<?php

declare(strict_types=1);

namespace Automattic\WooCommerce\Tests\Admin\Features\Settings;

use Automattic\WooCommerce\Admin\Features\Settings\Transformer;
use WC_Unit_Test_Case;

/**
 * Unit tests for Settings Data Transformer.
 *
 * @covers \Automattic\WooCommerce\Admin\Features\Settings\Transformer
 */
class TransformerTest extends WC_Unit_Test_Case {
	/**
	 * Set things up before each test case.
	 *
	 * @return void
	 */
	public function setUp(): void {
		parent::setUp();
		Transformer::reset_state();
	}

	/**
	 * Test basic transformation with no sections.
	 */
	public function test_transform_with_no_sections(): void {
		$input = array(
			'tab1' => array(
				'label' => 'Tab 1',
				'icon'  => 'icon1',
			),
		);

		$expected = array(
			'tab1' => array(
				'label' => 'Tab 1',
				'icon'  => 'icon1',
			),
		);

		$this->assertEquals( $expected, Transformer::transform( $input ), 'Expected no sections to be transformed' );
	}

	/**
	 * Test transformation with empty sections.
	 */
	public function test_transform_with_empty_sections(): void {
		$input = array(
			'tab1' => array(
				'label'    => 'Tab 1',
				'sections' => array(),
			),
		);

		$expected = array(
			'tab1' => array(
				'label'    => 'Tab 1',
				'sections' => array(),
			),
		);

		$this->assertEquals( $expected, Transformer::transform( $input ), 'Expected empty sections to remain untransformed' );
	}

	/**
	 * Test group grouping.
	 */
	public function test_group_grouping(): void {
		$input = array(
			'tab1' => array(
				'sections' => array(
					'section1' => array(
						'settings' => array(
							array(
								'type'  => 'title',
								'id'    => 'group_1',
								'title' => 'group 1',
								'desc'  => 'Description 1',
							),
							array(
								'type' => 'text',
								'id'   => 'setting1',
							),
							array(
								'type' => 'text',
								'id'   => 'setting2',
							),
							array(
								'type' => 'sectionend',
								'id'   => 'group_1',
							),
						),
					),
				),
			),
		);

		$expected = array(
			'tab1' => array(
				'sections' => array(
					'section1' => array(
						'settings' => array(
							array(
								'type'     => 'group',
								'id'       => 'group_1',
								'title'    => 'group 1',
								'desc'     => 'Description 1',
								'settings' => array(
									array(
										'type' => 'text',
										'id'   => 'setting1',
									),
									array(
										'type' => 'text',
										'id'   => 'setting2',
									),
								),
							),
						),
					),
				),
			),
		);

		$this->assertEquals( $expected, Transformer::transform( $input ), 'Expected group to be transformed' );
	}

	/**
	 * Test checkbox group transformation.
	 */
	public function test_checkbox_group_transformation(): void {
		$input = array(
			'tab1' => array(
				'sections' => array(
					'section1' => array(
						'settings' => array(
							array(
								'type'          => 'checkbox',
								'id'            => 'check1',
								'title'         => 'Checkbox Group',
								'checkboxgroup' => 'start',
							),
							array(
								'type'          => 'checkbox',
								'id'            => 'check2',
								'checkboxgroup' => '',
							),
							array(
								'type'          => 'checkbox',
								'id'            => 'check3',
								'checkboxgroup' => 'end',
							),
						),
					),
				),
			),
		);

		$expected = array(
			'tab1' => array(
				'sections' => array(
					'section1' => array(
						'settings' => array(
							array(
								'type'     => 'checkboxgroup',
								'title'    => 'Checkbox Group',
								'settings' => array(
									array(
										'type'          => 'checkbox',
										'id'            => 'check1',
										'title'         => 'Checkbox Group',
										'checkboxgroup' => 'start',
									),
									array(
										'type'          => 'checkbox',
										'id'            => 'check2',
										'checkboxgroup' => '',
									),
									array(
										'type'          => 'checkbox',
										'id'            => 'check3',
										'checkboxgroup' => 'end',
									),
								),
							),
						),
					),
				),
			),
		);

		$this->assertEquals( $expected, Transformer::transform( $input ), 'Expected checkbox group to be transformed' );
	}

	/**
	 * Test nested sectionend and checkboxgroup.
	 */
	public function test_nested_sectionend_and_checkboxgroup(): void {
		$input = array(
			'tab1' => array(
				'sections' => array(
					'section1' => array(
						'settings' => array(
							array(
								'type'  => 'title',
								'id'    => 'group_1',
								'title' => 'group 1',
							),
							array(
								'type'          => 'checkbox',
								'id'            => 'check1',
								'title'         => 'Checkbox Group',
								'checkboxgroup' => 'start',
							),
							array(
								'type'          => 'checkbox',
								'id'            => 'check2',
								'checkboxgroup' => 'end',
							),
							array(
								'type' => 'sectionend',
								'id'   => 'group_1',
							),
						),
					),
				),
			),
		);

		$expected = array(
			'tab1' => array(
				'sections' => array(
					'section1' => array(
						'settings' => array(
							array(
								'type'     => 'group',
								'id'       => 'group_1',
								'title'    => 'group 1',
								'settings' => array(
									array(
										'type'     => 'checkboxgroup',
										'title'    => 'Checkbox Group',
										'settings' => array(
											array(
												'type'  => 'checkbox',
												'id'    => 'check1',
												'title' => 'Checkbox Group',
												'checkboxgroup' => 'start',
											),
											array(
												'type' => 'checkbox',
												'id'   => 'check2',
												'checkboxgroup' => 'end',
											),
										),
									),
								),
							),
						),
					),
				),
			),
		);

		$this->assertEquals( $expected, Transformer::transform( $input ), 'Expected nested sectionend and checkboxgroup to be transformed' );
	}

	/**
	 * Test that unmatched title and sectionend are left as is.
	 */
	public function test_unmatched_title_and_sectionend(): void {
		$input = array(
			'tab1' => array(
				'sections' => array(
					'section1' => array(
						'settings' => array(
							array(
								'type'  => 'title',
								'id'    => 'group_1',
								'title' => 'group 1',
							),
							array(
								'type' => 'text',
								'id'   => 'setting1',
							),
							array(
								'type' => 'sectionend',
								'id'   => 'different_id', // Mismatched ID.
							),
						),
					),
				),
			),
		);

		$expected = array(
			'tab1' => array(
				'sections' => array(
					'section1' => array(
						'settings' => array(
							array(
								'type'  => 'title',
								'id'    => 'group_1',
								'title' => 'group 1',
							),
							array(
								'type' => 'text',
								'id'   => 'setting1',
							),
							array(
								'type' => 'sectionend',
								'id'   => 'different_id',
							),
						),
					),
				),
			),
		);

		$this->assertEquals( $expected, Transformer::transform( $input ), 'Expected unmatched title and sectionend to remain untransformed' );
	}

	/**
	 * Test that incomplete checkbox groups are left as is.
	 */
	public function test_incomplete_checkbox_group(): void {
		$input = array(
			'tab1' => array(
				'sections' => array(
					'section1' => array(
						'settings' => array(
							array(
								'type'          => 'checkbox',
								'id'            => 'check1',
								'title'         => 'Checkbox 1',
								'checkboxgroup' => 'start',
							),
							array(
								'type'          => 'checkbox',
								'id'            => 'check2',
								'checkboxgroup' => '',
							),
							// Missing 'end' checkbox.
							array(
								'type' => 'text',
								'id'   => 'setting1',
							),
						),
					),
				),
			),
		);

		$expected = $input;

		$this->assertEquals( $expected, Transformer::transform( $input ), 'Expected incomplete checkbox group to remain untransformed' );
	}

	/**
	 * Test orphaned end checkbox.
	 */
	public function test_orphaned_end_checkbox(): void {
		$input = array(
			'tab1' => array(
				'sections' => array(
					'section1' => array(
						'settings' => array(
							array(
								'type'          => 'checkbox',
								'id'            => 'check1',
								'checkboxgroup' => 'end', // Orphaned end.
							),
							array(
								'type' => 'text',
								'id'   => 'setting1',
							),
						),
					),
				),
			),
		);

		$expected = $input;

		$this->assertEquals( $expected, Transformer::transform( $input ), 'Expected orphaned end checkbox to remain untransformed' );
	}

	/**
	 * Test multiple independent checkboxes.
	 */
	public function test_independent_checkboxes(): void {
		$input = array(
			'tab1' => array(
				'sections' => array(
					'section1' => array(
						'settings' => array(
							array(
								'type' => 'checkbox',
								'id'   => 'check1',
							),
							array(
								'type' => 'checkbox',
								'id'   => 'check2',
							),
						),
					),
				),
			),
		);

		$expected = array(
			'tab1' => array(
				'sections' => array(
					'section1' => array(
						'settings' => array(
							array(
								'type' => 'checkbox',
								'id'   => 'check1',
							),
							array(
								'type' => 'checkbox',
								'id'   => 'check2',
							),
						),
					),
				),
			),
		);

		$this->assertEquals( $expected, Transformer::transform( $input ), 'Expected independent checkboxes to remain untransformed' );
	}

	/**
	 * Test mixed valid and invalid groups.
	 */
	public function test_mixed_valid_and_invalid_groups(): void {
		$input = array(
			'tab1' => array(
				'sections' => array(
					'section1' => array(
						'settings' => array(
							// Valid group.
							array(
								'type'  => 'title',
								'id'    => 'valid_group',
								'title' => 'Valid group',
							),
							array(
								'type' => 'text',
								'id'   => 'setting1',
							),
							array(
								'type' => 'sectionend',
								'id'   => 'valid_group',
							),
							// Invalid group.
							array(
								'type'  => 'title',
								'id'    => 'invalid_group',
								'title' => 'Invalid group',
							),
							array(
								'type' => 'text',
								'id'   => 'setting2',
							),
							// No matching sectionend
							// Valid checkbox group.
							array(
								'type'          => 'checkbox',
								'id'            => 'check1',
								'title'         => 'Valid Group',
								'checkboxgroup' => 'start',
							),
							array(
								'type'          => 'checkbox',
								'id'            => 'check2',
								'checkboxgroup' => 'end',
							),
							// Invalid checkbox group.
							array(
								'type'          => 'checkbox',
								'id'            => 'check3',
								'title'         => 'Invalid Group',
								'checkboxgroup' => 'start',
							),
							// No matching end.
						),
					),
				),
			),
		);

		$expected = array(
			'tab1' => array(
				'sections' => array(
					'section1' => array(
						'settings' => array(
							// Valid group gets transformed.
							array(
								'type'     => 'group',
								'id'       => 'valid_group',
								'title'    => 'Valid group',
								'settings' => array(
									array(
										'type' => 'text',
										'id'   => 'setting1',
									),
								),
							),
							// Invalid group remains untransformed.
							array(
								'type'  => 'title',
								'id'    => 'invalid_group',
								'title' => 'Invalid group',
							),
							array(
								'type' => 'text',
								'id'   => 'setting2',
							),
							// Valid checkbox group gets transformed.
							array(
								'type'     => 'checkboxgroup',
								'title'    => 'Valid Group',
								'settings' => array(
									array(
										'type'          => 'checkbox',
										'id'            => 'check1',
										'title'         => 'Valid Group',
										'checkboxgroup' => 'start',
									),
									array(
										'type'          => 'checkbox',
										'id'            => 'check2',
										'checkboxgroup' => 'end',
									),
								),
							),
							// Invalid checkbox group remains untransformed.
							array(
								'type'          => 'checkbox',
								'id'            => 'check3',
								'title'         => 'Invalid Group',
								'checkboxgroup' => 'start',
							),
						),
					),
				),
			),
		);

		$this->assertEquals( $expected, Transformer::transform( $input ) );
	}

	/**
	 * Test multiple groups in a section.
	 */
	public function test_multiple_groups(): void {
		$input = array(
			'tab1' => array(
				'sections' => array(
					'section1' => array(
						'settings' => array(
							array(
								'type'  => 'title',
								'id'    => 'group_1',
								'title' => 'group 1',
							),
							array(
								'type' => 'text',
								'id'   => 'setting1',
							),
							array(
								'type' => 'sectionend',
								'id'   => 'group_1',
							),
							array(
								'type'  => 'title',
								'id'    => 'group_2',
								'title' => 'group 2',
							),
							array(
								'type' => 'text',
								'id'   => 'setting2',
							),
							array(
								'type' => 'sectionend',
								'id'   => 'group_2',
							),
						),
					),
				),
			),
		);

		$transformed = Transformer::transform( $input );
		$settings    = $transformed['tab1']['sections']['section1']['settings'];

		$this->assertCount( 2, $settings );
		$this->assertEquals( 'group_1', $settings[0]['id'] );
		$this->assertEquals( 'group_2', $settings[1]['id'] );
	}
}
