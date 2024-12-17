<?php
declare( strict_types=1 );

namespace Automattic\WooCommerce\Tests\Internal\Admin\Suggestions;

use Automattic\WooCommerce\Internal\Admin\Onboarding\OnboardingProfile;
use Automattic\WooCommerce\Internal\Admin\Suggestions\PaymentExtensionSuggestionIncentives;
use Automattic\WooCommerce\Internal\Admin\Suggestions\PaymentExtensionSuggestions;
use WC_Unit_Test_Case;

/**
 * PaymentExtensionSuggestions provider test.
 *
 * @class PaymentExtensionSuggestions
 */
class PaymentExtensionSuggestionsTest extends WC_Unit_Test_Case {
	/**
	 * System under test.
	 *
	 * @var PaymentExtensionSuggestions
	 */
	protected PaymentExtensionSuggestions $sut;

	/**
	 * The suggestion incentives provider mock.
	 *
	 * @var PaymentExtensionSuggestionIncentives
	 */
	protected $suggestion_incentives;

	/**
	 * Set up test.
	 */
	public function setUp(): void {
		parent::setUp();

		// Mock the incentives provider class.
		$this->suggestion_incentives = $this->getMockBuilder( PaymentExtensionSuggestionIncentives::class )->getMock();

		$this->sut = new PaymentExtensionSuggestions();
		$this->sut->init( $this->suggestion_incentives );
	}

	/**
	 * Test getting payment extension suggestions by invalid country.
	 */
	public function test_get_country_extensions_invalid_country() {
		$extensions = $this->sut->get_country_extensions( 'XX' );
		$this->assertEmpty( $extensions );
	}

	/**
	 * Test getting payment extension suggestions by valid country.
	 */
	public function test_get_country_extensions_valid_country() {
		$extensions = $this->sut->get_country_extensions( 'US' );
		$this->assertNotEmpty( $extensions );
	}

	/**
	 * Test for each country that we can generate and have the proper number of suggestions when the merchant is selling online.
	 *
	 * This guards against misconfigurations in the data.
	 *
	 * @dataProvider data_provider_get_country_extensions_count_with_merchant_selling_online
	 *
	 * @param string $country        The country code.
	 * @param int    $expected_count The expected number of suggestions.
	 */
	public function test_get_country_extensions_count_with_merchant_selling_online( string $country, int $expected_count ) {
		// Merchant is selling online.
		// Arrange.
		update_option(
			OnboardingProfile::DATA_OPTION,
			array(
				'business_choice'       => 'im_already_selling',
				'selling_online_answer' => 'yes_im_selling_online',
			)
		);

		// Act.
		$extensions = $this->sut->get_country_extensions( $country );

		// Assert.
		$this->assertCount( $expected_count, $extensions, "For merchant selling online, the country $country should have $expected_count suggestions." );

		// Merchant skipped the profiler. We assume they are selling only online.
		// Arrange.
		update_option(
			OnboardingProfile::DATA_OPTION,
			array() // No data.
		);

		// Act.
		$extensions = $this->sut->get_country_extensions( $country );

		// Assert.
		$this->assertCount( $expected_count, $extensions, "For merchant who skipped the profiler, the country $country should have $expected_count suggestions." );

		// Merchant didn't answer the profiler questions fully. We assume they are selling only online.
		// Arrange.
		update_option(
			OnboardingProfile::DATA_OPTION,
			array(
				'business_choice'       => 'im_already_selling',
				'selling_online_answer' => '', // No answer.
			)
		);

		// Act.
		$extensions = $this->sut->get_country_extensions( $country );

		// Assert.
		$this->assertCount( $expected_count, $extensions, "Country $country should have $expected_count suggestions." );

		// Clean up.
		delete_option( OnboardingProfile::DATA_OPTION );
	}

	/**
	 * Data provider for test_get_country_extensions_count_with_merchant_selling_online.
	 *
	 * @return array
	 */
	public function data_provider_get_country_extensions_count_with_merchant_selling_online(): array {
		// The counts are based on the data in PaymentExtensionSuggestions::$country_extensions.
		// Square (in-person) is NOT included.
		$country_suggestions_count = array(
			'CA' => 7, // Minus Square (in-person).
			'US' => 9, // Minus Square (in-person).
			'GB' => 10, // Minus Square (in-person).
			'AT' => 9,
			'BE' => 9,
			'BG' => 6,
			'HR' => 6,
			'CY' => 7,
			'CZ' => 7,
			'DK' => 8,
			'EE' => 5,
			'FI' => 7,
			'FO' => 2,
			'FR' => 9, // Minus Square (in-person).
			'GI' => 3,
			'DE' => 9,
			'GR' => 7,
			'GL' => 2,
			'HU' => 8,
			'IE' => 9, // Minus Square (in-person).
			'IT' => 9,
			'LV' => 5,
			'LI' => 4,
			'LT' => 6,
			'LU' => 7,
			'MT' => 6,
			'MD' => 2,
			'NL' => 8,
			'NO' => 6,
			'PL' => 8,
			'PT' => 9,
			'RO' => 7,
			'SM' => 2,
			'SK' => 6,
			'ES' => 9, // Minus Square (in-person).
			'SE' => 7,
			'CH' => 7,
			'AG' => 3,
			'AI' => 1,
			'AR' => 3,
			'AW' => 1,
			'BS' => 3,
			'BB' => 3,
			'BZ' => 3,
			'BM' => 3,
			'BO' => 0,
			'BQ' => 1,
			'BR' => 4,
			'VG' => 1,
			'KY' => 3,
			'CL' => 3,
			'CO' => 3,
			'CR' => 3,
			'CW' => 1,
			'DM' => 3,
			'DO' => 3,
			'EC' => 2,
			'SV' => 3,
			'FK' => 0,
			'GF' => 2,
			'GD' => 3,
			'GP' => 2,
			'GT' => 3,
			'GY' => 1,
			'HN' => 3,
			'JM' => 3,
			'MQ' => 2,
			'MX' => 5,
			'NI' => 3,
			'PA' => 3,
			'PY' => 0,
			'PE' => 3,
			'KN' => 3,
			'LC' => 3,
			'SX' => 1,
			'VC' => 1,
			'SR' => 1,
			'TT' => 3,
			'TC' => 3,
			'UY' => 3,
			'VI' => 1,
			'VE' => 2,
			'AU' => 8, // Minus Square (in-person).
			'BD' => 1,
			'CN' => 4,
			'FJ' => 2,
			'GU' => 0,
			'HK' => 7,
			'IN' => 6,
			'ID' => 4,
			'JP' => 6, // Minus Square (in-person).
			'MY' => 5,
			'NC' => 2,
			'NZ' => 7,
			'PW' => 2,
			'PH' => 4,
			'SG' => 6,
			'LK' => 1,
			'KR' => 2,
			'TH' => 5,
			'VN' => 4,
			'DZ' => 2,
			'AO' => 0,
			'BJ' => 0,
			'BW' => 2,
			'BF' => 0,
			'BI' => 0,
			'CM' => 0,
			'CV' => 0,
			'CF' => 0,
			'TD' => 0,
			'KM' => 0,
			'CG' => 0,
			'CI' => 0,
			'EG' => 3,
			'CD' => 0,
			'DJ' => 0,
			'GQ' => 0,
			'ER' => 0,
			'SZ' => 2,
			'ET' => 0,
			'GA' => 0,
			'GH' => 1,
			'GM' => 0,
			'GN' => 0,
			'GW' => 0,
			'KE' => 2,
			'LS' => 2,
			'LR' => 0,
			'LY' => 0,
			'MG' => 0,
			'MW' => 2,
			'ML' => 0,
			'MR' => 0,
			'MU' => 2,
			'MA' => 3,
			'MZ' => 2,
			'NA' => 0,
			'NE' => 0,
			'NG' => 1,
			'RE' => 2,
			'RW' => 0,
			'ST' => 0,
			'SN' => 2,
			'SC' => 2,
			'SL' => 0,
			'SO' => 0,
			'ZA' => 4,
			'SS' => 0,
			'TZ' => 0,
			'TG' => 0,
			'TN' => 0,
			'UG' => 0,
			'EH' => 0,
			'ZM' => 0,
			'ZW' => 0,
			'BH' => 2,
			'IQ' => 0,
			'IL' => 1,
			'JO' => 2,
			'KW' => 2,
			'LB' => 0,
			'OM' => 3,
			'PK' => 2,
			'QA' => 2,
			'SA' => 3,
			'AE' => 6,
			'YE' => 0,
		);

		$data = array();
		foreach ( $country_suggestions_count as $country => $count ) {
			$data[] = array( $country, $count );
		}

		return $data;
	}

	/**
	 * Test for each country that we can generate and have the proper number of suggestions when the merchant is selling offline.
	 *
	 * This guards against misconfigurations in the data.
	 *
	 * @dataProvider data_provider_get_country_extensions_count_with_merchant_selling_offline
	 *
	 * @param string $country        The country code.
	 * @param int    $expected_count The expected number of suggestions.
	 */
	public function test_get_country_extensions_count_with_merchant_selling_offline( string $country, int $expected_count ) {
		// Merchant is selling offline.
		// Arrange.
		update_option(
			OnboardingProfile::DATA_OPTION,
			array(
				'business_choice'       => 'im_already_selling',
				'selling_online_answer' => 'no_im_selling_offline',
			)
		);

		// Act.
		$extensions = $this->sut->get_country_extensions( $country );

		// Assert.
		$this->assertCount( $expected_count, $extensions, "For merchant selling offline, the country $country should have $expected_count suggestions." );

		// Merchant is selling both online and offline.
		// Arrange.
		update_option(
			OnboardingProfile::DATA_OPTION,
			array(
				'business_choice'       => 'im_already_selling',
				'selling_online_answer' => 'im_selling_both_online_and_offline',
			)
		);

		// Act.
		$extensions = $this->sut->get_country_extensions( $country );

		// Assert.
		$this->assertCount( $expected_count, $extensions, "For merchant selling both online and offline, the country $country should have $expected_count suggestions." );

		// Clean up.
		delete_option( OnboardingProfile::DATA_OPTION );
	}

	/**
	 * Data provider for test_get_country_extensions_count_with_merchant_selling_offline.
	 *
	 * @return array
	 */
	public function data_provider_get_country_extensions_count_with_merchant_selling_offline(): array {
		// The counts are based on the data in PaymentExtensionSuggestions::$country_extensions.
		// Square (in-person) is included.
		$country_suggestions_count = array(
			'CA' => 8, // Including Square (in-person).
			'US' => 10, // Including Square (in-person).
			'GB' => 11, // Including Square (in-person).
			'AT' => 9,
			'BE' => 9,
			'BG' => 6,
			'HR' => 6,
			'CY' => 7,
			'CZ' => 7,
			'DK' => 8,
			'EE' => 5,
			'FI' => 7,
			'FO' => 2,
			'FR' => 10, // Including Square (in-person).
			'GI' => 3,
			'DE' => 9,
			'GR' => 7,
			'GL' => 2,
			'HU' => 8,
			'IE' => 10, // Including Square (in-person).
			'IT' => 9,
			'LV' => 5,
			'LI' => 4,
			'LT' => 6,
			'LU' => 7,
			'MT' => 6,
			'MD' => 2,
			'NL' => 8,
			'NO' => 6,
			'PL' => 8,
			'PT' => 9,
			'RO' => 7,
			'SM' => 2,
			'SK' => 6,
			'ES' => 10, // Including Square (in-person).
			'SE' => 7,
			'CH' => 7,
			'AG' => 3,
			'AI' => 1,
			'AR' => 3,
			'AW' => 1,
			'BS' => 3,
			'BB' => 3,
			'BZ' => 3,
			'BM' => 3,
			'BO' => 0,
			'BQ' => 1,
			'BR' => 4,
			'VG' => 1,
			'KY' => 3,
			'CL' => 3,
			'CO' => 3,
			'CR' => 3,
			'CW' => 1,
			'DM' => 3,
			'DO' => 3,
			'EC' => 2,
			'SV' => 3,
			'FK' => 0,
			'GF' => 2,
			'GD' => 3,
			'GP' => 2,
			'GT' => 3,
			'GY' => 1,
			'HN' => 3,
			'JM' => 3,
			'MQ' => 2,
			'MX' => 5,
			'NI' => 3,
			'PA' => 3,
			'PY' => 0,
			'PE' => 3,
			'KN' => 3,
			'LC' => 3,
			'SX' => 1,
			'VC' => 1,
			'SR' => 1,
			'TT' => 3,
			'TC' => 3,
			'UY' => 3,
			'VI' => 1,
			'VE' => 2,
			'AU' => 9, // Including Square (in-person).
			'BD' => 1,
			'CN' => 4,
			'FJ' => 2,
			'GU' => 0,
			'HK' => 7,
			'IN' => 6,
			'ID' => 4,
			'JP' => 7, // Including Square (in-person).
			'MY' => 5,
			'NC' => 2,
			'NZ' => 7,
			'PW' => 2,
			'PH' => 4,
			'SG' => 6,
			'LK' => 1,
			'KR' => 2,
			'TH' => 5,
			'VN' => 4,
			'DZ' => 2,
			'AO' => 0,
			'BJ' => 0,
			'BW' => 2,
			'BF' => 0,
			'BI' => 0,
			'CM' => 0,
			'CV' => 0,
			'CF' => 0,
			'TD' => 0,
			'KM' => 0,
			'CG' => 0,
			'CI' => 0,
			'EG' => 3,
			'CD' => 0,
			'DJ' => 0,
			'GQ' => 0,
			'ER' => 0,
			'SZ' => 2,
			'ET' => 0,
			'GA' => 0,
			'GH' => 1,
			'GM' => 0,
			'GN' => 0,
			'GW' => 0,
			'KE' => 2,
			'LS' => 2,
			'LR' => 0,
			'LY' => 0,
			'MG' => 0,
			'MW' => 2,
			'ML' => 0,
			'MR' => 0,
			'MU' => 2,
			'MA' => 3,
			'MZ' => 2,
			'NA' => 0,
			'NE' => 0,
			'NG' => 1,
			'RE' => 2,
			'RW' => 0,
			'ST' => 0,
			'SN' => 2,
			'SC' => 2,
			'SL' => 0,
			'SO' => 0,
			'ZA' => 4,
			'SS' => 0,
			'TZ' => 0,
			'TG' => 0,
			'TN' => 0,
			'UG' => 0,
			'EH' => 0,
			'ZM' => 0,
			'ZW' => 0,
			'BH' => 2,
			'IQ' => 0,
			'IL' => 1,
			'JO' => 2,
			'KW' => 2,
			'LB' => 0,
			'OM' => 3,
			'PK' => 2,
			'QA' => 2,
			'SA' => 3,
			'AE' => 6,
			'YE' => 0,
		);

		$data = array();
		foreach ( $country_suggestions_count as $country => $count ) {
			$data[] = array( $country, $count );
		}

		return $data;
	}

	/**
	 * Test getting payment extension suggestions by ID.
	 */
	public function test_get_extension_by_id() {
		$extension = $this->sut->get_by_id( 'woopayments' );
		$this->assertNotEmpty( $extension );
		$this->assertIsArray( $extension );
		$this->assertArrayHasKey( 'id', $extension );
		$this->assertSame( 'woopayments', $extension['id'] );
	}

	/**
	 * Test getting payment extension suggestions by ID with invalid ID.
	 */
	public function test_get_extension_by_id_with_invalid_id() {
		$extension = $this->sut->get_by_id( 'bogus_id' );
		$this->assertNull( $extension );
	}

	/**
	 * Test getting payment extension suggestions by plugin slug.
	 */
	public function test_get_extension_by_plugin_slug() {
		$extension = $this->sut->get_by_plugin_slug( 'woocommerce-payments' );
		$this->assertNotEmpty( $extension );
		$this->assertIsArray( $extension );
		$this->assertArrayHasKey( 'id', $extension );
		$this->assertSame( 'woopayments', $extension['id'] );
	}

	/**
	 * Test getting payment extension suggestions by plugin slug with invalid slug.
	 */
	public function test_get_extension_by_plugin_slug_with_invalid_slug() {
		$extension = $this->sut->get_by_plugin_slug( 'bogus_slug' );
		$this->assertNull( $extension );
	}
}
