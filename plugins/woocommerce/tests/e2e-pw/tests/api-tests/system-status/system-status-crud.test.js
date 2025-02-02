const { test, expect } = require( '../../../fixtures/api-tests-fixtures' );

const { BASE_URL } = process.env;
const { any } = expect;
const shouldSkip = BASE_URL !== undefined && ! BASE_URL.includes( 'localhost' );

test.describe( 'System Status API tests', () => {
	test.only( 'can view all system status items', async ( { request } ) => {
		// call API to view all system status items
		const response = await request.get( './wp-json/wc/v3/system_status' );
		const responseJSON = await response.json();
		expect( response.status() ).toEqual( 200 );

		await test.step( 'Verify "environment" fields', async () => {
			const { environment } = responseJSON;
			expect( environment ).toBeDefined();

			const {
				home_url,
				site_url,
				version,
				log_directory,
				log_directory_writable,
				wp_version,
				wp_multisite,
				wp_memory_limit,
				wp_debug_mode,
				wp_cron,
				language,
				external_object_cache,
				server_info,
				php_version,
				php_post_max_size,
				php_max_execution_time,
				php_max_input_vars,
				curl_version,
				suhosin_installed,
				max_upload_size,
				mysql_version,
				mysql_version_string,
				default_timezone,
				fsockopen_or_curl_enabled,
				soapclient_enabled,
				domdocument_enabled,
				gzip_enabled,
				mbstring_enabled,
				remote_post_successful,
				remote_post_response,
				remote_get_successful,
				remote_get_response,
			} = environment;

			expect( home_url ).toEqual( any( String ) );
			expect( site_url ).toEqual( any( String ) );
			expect( version ).toEqual( any( String ) );
			expect( log_directory ).toEqual( any( String ) );
			expect( log_directory_writable ).toEqual( any( Boolean ) );
			expect( wp_version ).toEqual( any( String ) );
			expect( wp_multisite ).toEqual( any( Boolean ) );
			expect( wp_memory_limit ).toEqual( any( Number ) );
			expect( wp_debug_mode ).toEqual( any( Boolean ) );
			expect( wp_cron ).toEqual( any( Boolean ) );
			expect( language ).toEqual( any( String ) );
			expect(
				external_object_cache === null ||
					typeof external_object_cache === 'boolean'
			).toBeTruthy();
			expect( server_info ).toEqual( any( String ) );
			expect( php_version ).toEqual( any( String ) );
			expect( php_post_max_size ).toEqual( any( Number ) );
			expect( php_max_execution_time ).toEqual( any( Number ) );
			expect( php_max_input_vars ).toEqual( any( Number ) );
			expect( curl_version ).toEqual( any( String ) );
			expect( suhosin_installed ).toEqual( any( Boolean ) );
			expect( max_upload_size ).toEqual( any( Number ) );
			expect( mysql_version ).toEqual( any( String ) );
			expect( mysql_version_string ).toEqual( any( String ) );
			expect( default_timezone ).toEqual( any( String ) );
			expect( fsockopen_or_curl_enabled ).toEqual( any( Boolean ) );
			expect( soapclient_enabled ).toEqual( any( Boolean ) );
			expect( domdocument_enabled ).toEqual( any( Boolean ) );
			expect( gzip_enabled ).toEqual( any( Boolean ) );
			expect( mbstring_enabled ).toEqual( any( Boolean ) );
			expect( remote_post_successful ).toEqual( any( Boolean ) );
			expect( [ 'number', 'string' ] ).toContain(
				typeof remote_post_response
			);
			expect( remote_get_successful ).toEqual( any( Boolean ) );
			expect( [ 'number', 'string' ] ).toContain(
				typeof remote_get_response
			);
		} );

		await test.step( 'Verify "database" fields', async () => {
			const { database } = responseJSON;
			expect( database ).toBeDefined();

			const {
				wc_database_version,
				database_prefix,
				maxmind_geoip_database,
				database_tables,
				database_size,
			} = database;

			expect( wc_database_version ).toEqual( any( String ) );
			expect( database_prefix ).toEqual( any( String ) );
			expect( maxmind_geoip_database ).toEqual( any( String ) );

			await test.step( 'Verify "database_tables" fields', async () => {
				expect( database_tables ).toBeDefined();

				await test.step( 'Verify "woocommerce" fields', async () => {
					const { woocommerce } = database_tables;
					expect( woocommerce ).toBeDefined();

					const {
						[ `${ database_prefix }woocommerce_sessions` ]:
							woocommerce_sessions,
						[ `${ database_prefix }woocommerce_api_keys` ]:
							woocommerce_api_keys,
						[ `${ database_prefix }woocommerce_attribute_taxonomies` ]:
							woocommerce_attribute_taxonomies,
						[ `${ database_prefix }woocommerce_downloadable_product_permissions` ]:
							woocommerce_downloadable_product_permissions,
						[ `${ database_prefix }woocommerce_order_items` ]:
							woocommerce_order_items,
						[ `${ database_prefix }woocommerce_order_itemmeta` ]:
							woocommerce_order_itemmeta,
						[ `${ database_prefix }woocommerce_tax_rates` ]:
							woocommerce_tax_rates,
						[ `${ database_prefix }woocommerce_tax_rate_locations` ]:
							woocommerce_tax_rate_locations,
						[ `${ database_prefix }woocommerce_shipping_zones` ]:
							woocommerce_shipping_zones,
						[ `${ database_prefix }woocommerce_shipping_zone_locations` ]:
							woocommerce_shipping_zone_locations,
						[ `${ database_prefix }woocommerce_shipping_zone_methods` ]:
							woocommerce_shipping_zone_methods,
						[ `${ database_prefix }woocommerce_payment_tokens` ]:
							woocommerce_payment_tokens,
						[ `${ database_prefix }woocommerce_payment_tokenmeta` ]:
							woocommerce_payment_tokenmeta,
						[ `${ database_prefix }woocommerce_log` ]:
							woocommerce_log,
					} = woocommerce;

					const woocommerce_tables = [
						woocommerce_sessions,
						woocommerce_api_keys,
						woocommerce_attribute_taxonomies,
						woocommerce_downloadable_product_permissions,
						woocommerce_order_items,
						woocommerce_order_itemmeta,
						woocommerce_tax_rates,
						woocommerce_tax_rate_locations,
						woocommerce_shipping_zones,
						woocommerce_shipping_zone_locations,
						woocommerce_shipping_zone_methods,
						woocommerce_payment_tokens,
						woocommerce_payment_tokenmeta,
						woocommerce_log,
					];

					for ( const table of woocommerce_tables ) {
						await test.step( `Verify "${ table }"`, () => {
							expect( table ).toBeDefined();
							const { data, index, engine } = table;
							expect( data ).toEqual( any( String ) );
							expect( index ).toEqual( any( String ) );
							expect( engine ).toEqual( any( String ) );
						} );
					}
				} );

				await test.step( 'Verify "other" fields', async () => {
					const { other } = database_tables;
					expect( other ).toBeDefined();

					const {
						[ `${ database_prefix }actionscheduler_actions` ]:
							actionscheduler_actions,
						[ `${ database_prefix }actionscheduler_claims` ]:
							actionscheduler_claims,
						[ `${ database_prefix }actionscheduler_groups` ]:
							actionscheduler_groups,
						[ `${ database_prefix }actionscheduler_logs` ]:
							actionscheduler_logs,
						[ `${ database_prefix }commentmeta` ]: commentmeta,
						[ `${ database_prefix }comments` ]: comments,
						[ `${ database_prefix }links` ]: links,
						[ `${ database_prefix }options` ]: options,
						[ `${ database_prefix }postmeta` ]: postmeta,
						[ `${ database_prefix }posts` ]: posts,
						[ `${ database_prefix }termmeta` ]: termmeta,
						[ `${ database_prefix }terms` ]: terms,
						[ `${ database_prefix }term_relationships` ]:
							term_relationships,
						[ `${ database_prefix }term_taxonomy` ]: term_taxonomy,
						[ `${ database_prefix }usermeta` ]: usermeta,
						[ `${ database_prefix }users` ]: users,
						[ `${ database_prefix }wc_admin_notes` ]:
							wc_admin_notes,
						[ `${ database_prefix }wc_admin_note_actions` ]:
							wc_admin_note_actions,
						[ `${ database_prefix }wc_category_lookup` ]:
							wc_category_lookup,
						[ `${ database_prefix }wc_customer_lookup` ]:
							wc_customer_lookup,
						[ `${ database_prefix }wc_download_log` ]:
							wc_download_log,
						[ `${ database_prefix }wc_order_coupon_lookup` ]:
							wc_order_coupon_lookup,
						[ `${ database_prefix }wc_order_product_lookup` ]:
							wc_order_product_lookup,
						[ `${ database_prefix }wc_order_stats` ]:
							wc_order_stats,
						[ `${ database_prefix }wc_order_tax_lookup` ]:
							wc_order_tax_lookup,
						[ `${ database_prefix }wc_product_attributes_lookup` ]:
							wc_product_attributes_lookup,
						[ `${ database_prefix }wc_product_download_directories` ]:
							wc_product_download_directories,
						[ `${ database_prefix }wc_product_meta_lookup` ]:
							wc_product_meta_lookup,
						[ `${ database_prefix }wc_rate_limits` ]:
							wc_rate_limits,
						[ `${ database_prefix }wc_reserved_stock` ]:
							wc_reserved_stock,
						[ `${ database_prefix }wc_tax_rate_classes` ]:
							wc_tax_rate_classes,
						[ `${ database_prefix }wc_webhooks` ]: wc_webhooks,
					} = other;

					const other_tables = [
						actionscheduler_actions,
						actionscheduler_claims,
						actionscheduler_groups,
						actionscheduler_logs,
						commentmeta,
						comments,
						links,
						options,
						postmeta,
						posts,
						termmeta,
						terms,
						term_relationships,
						term_taxonomy,
						usermeta,
						users,
						wc_admin_notes,
						wc_admin_note_actions,
						wc_category_lookup,
						wc_customer_lookup,
						wc_download_log,
						wc_order_coupon_lookup,
						wc_order_product_lookup,
						wc_order_stats,
						wc_order_tax_lookup,
						wc_product_attributes_lookup,
						wc_product_download_directories,
						wc_product_meta_lookup,
						wc_rate_limits,
						wc_reserved_stock,
						wc_tax_rate_classes,
						wc_webhooks,
					];

					for ( const table of other_tables ) {
						await test.step( `Verify "${ table }"`, () => {
							expect( table ).toBeDefined();
							const { data, index, engine } = table;
							expect( data ).toEqual( any( String ) );
							expect( index ).toEqual( any( String ) );
							expect( engine ).toEqual( any( String ) );
						} );
					}
				} );
			} );

			await test.step( 'Verify "database_size" fields', async () => {
				const { data, index } = database_size;
				expect( data ).toEqual( any( Number ) );
				expect( index ).toEqual( any( Number ) );
			} );
		} );

		// expect( responseJSON ).toEqual(
		// 	expect.objectContaining( {
		// 		active_plugins: expect.arrayContaining( [
		// 			{
		// 				plugin: expect.any( String ),
		// 				name: expect.any( String ),
		// 				version: expect.any( String ),
		// 				version_latest: expect.any( String ),
		// 				url: expect.any( String ),
		// 				author_name: expect.any( String ),
		// 				author_url: expect.any( String ),
		// 				network_activated: expect.any( Boolean ),
		// 			},
		// 			{
		// 				plugin: expect.any( String ),
		// 				name: expect.any( String ),
		// 				version: expect.any( String ),
		// 				version_latest: expect.any( String ),
		// 				url: expect.any( String ),
		// 				author_name: expect.any( String ),
		// 				author_url: expect.any( String ),
		// 				network_activated: expect.any( Boolean ),
		// 			},
		// 			{
		// 				plugin: expect.any( String ),
		// 				name: expect.any( String ),
		// 				version: expect.any( String ),
		// 				version_latest: expect.any( String ),
		// 				url: expect.any( String ),
		// 				author_name: expect.any( String ),
		// 				author_url: expect.any( String ),
		// 				network_activated: expect.any( Boolean ),
		// 			},
		// 			{
		// 				plugin: expect.any( String ),
		// 				name: expect.any( String ),
		// 				version: expect.any( String ),
		// 				version_latest: expect.any( String ),
		// 				url: expect.any( String ),
		// 				author_name: expect.any( String ),
		// 				author_url: expect.any( String ),
		// 				network_activated: expect.any( Boolean ),
		// 			},
		// 		] ),
		// 	} )
		// );

		// local environment differs from external hosts.  Local listed first.
		// eslint-disable-next-line playwright/no-conditional-in-test
		// if ( ! shouldSkip ) {
		// 	expect( responseJSON ).toEqual(
		// 		expect.objectContaining( {
		// 			dropins_mu_plugins: expect.objectContaining( {
		// 				dropins: expect.arrayContaining( [] ),
		// 				mu_plugins: expect.arrayContaining( [] ),
		// 			} ),
		// 		} )
		// 	);
		// } else {
		// 	expect( responseJSON ).toEqual(
		// 		expect.objectContaining( {
		// 			dropins_mu_plugins: expect.objectContaining( {
		// 				dropins: expect.arrayContaining( [
		// 					{
		// 						name: expect.any( String ),
		// 						plugin: expect.any( String ),
		// 					},
		// 					{
		// 						name: expect.any( String ),
		// 						plugin: expect.any( String ),
		// 					},
		// 				] ),
		// 				mu_plugins: [],
		// 			} ),
		// 		} )
		// 	);
		// }
		// expect( responseJSON ).toEqual(
		// 	expect.objectContaining( {
		// 		theme: expect.objectContaining( {
		// 			name: expect.any( String ),
		// 			version: expect.any( String ),
		// 			version_latest: expect.any( String ),
		// 			author_url: expect.any( String ),
		// 			is_child_theme: expect.any( Boolean ),
		// 			is_block_theme: expect.any( Boolean ),
		// 			has_woocommerce_support: expect.any( Boolean ),
		// 			has_woocommerce_file: expect.any( Boolean ),
		// 			has_outdated_templates: expect.any( Boolean ),
		// 			overrides: expect.any( Array ),
		// 			parent_name: expect.any( String ),
		// 			parent_version: expect.any( String ),
		// 			parent_version_latest: expect.any( String ),
		// 			parent_author_url: expect.any( String ),
		// 		} ),
		// 	} )
		// );
		// expect( responseJSON ).toEqual(
		// 	expect.objectContaining( {
		// 		settings: expect.objectContaining( {
		// 			api_enabled: expect.any( Boolean ),
		// 			force_ssl: expect.any( Boolean ),
		// 			currency: expect.any( String ),
		// 			currency_symbol: expect.any( String ),
		// 			currency_position: expect.any( String ),
		// 			thousand_separator: expect.any( String ),
		// 			decimal_separator: expect.any( String ),
		// 			number_of_decimals: expect.any( Number ),
		// 			geolocation_enabled: expect.any( Boolean ),
		// 			taxonomies: {
		// 				external: expect.any( String ),
		// 				grouped: expect.any( String ),
		// 				simple: expect.any( String ),
		// 				variable: expect.any( String ),
		// 			},
		// 			product_visibility_terms: {
		// 				'exclude-from-catalog': expect.any( String ),
		// 				'exclude-from-search': expect.any( String ),
		// 				featured: expect.any( String ),
		// 				outofstock: expect.any( String ),
		// 				'rated-1': expect.any( String ),
		// 				'rated-2': expect.any( String ),
		// 				'rated-3': expect.any( String ),
		// 				'rated-4': expect.any( String ),
		// 				'rated-5': expect.any( String ),
		// 			},
		// 			woocommerce_com_connected: expect.any( String ),
		// 		} ),
		// 	} )
		// );
		// expect( responseJSON ).toEqual(
		// 	expect.objectContaining( {
		// 		security: expect.objectContaining( {
		// 			secure_connection: expect.any( Boolean ),
		// 			hide_errors: expect.any( Boolean ),
		// 		} ),
		// 	} )
		// );
		// expect( responseJSON ).toEqual(
		// 	expect.objectContaining( {
		// 		pages: expect.arrayContaining( [
		// 			{
		// 				page_name: expect.any( String ),
		// 				page_id: expect.any( String ),
		// 				page_set: expect.any( Boolean ),
		// 				page_exists: expect.any( Boolean ),
		// 				page_visible: expect.any( Boolean ),
		// 				shortcode: expect.any( String ),
		// 				block: expect.any( String ),
		// 				shortcode_required: expect.any( Boolean ),
		// 				shortcode_present: expect.any( Boolean ),
		// 				block_present: expect.any( Boolean ),
		// 				block_required: expect.any( Boolean ),
		// 			},
		// 			{
		// 				page_name: expect.any( String ),
		// 				page_id: expect.any( String ),
		// 				page_set: expect.any( Boolean ),
		// 				page_exists: expect.any( Boolean ),
		// 				page_visible: expect.any( Boolean ),
		// 				shortcode: expect.any( String ),
		// 				block: expect.any( String ),
		// 				shortcode_required: expect.any( Boolean ),
		// 				shortcode_present: expect.any( Boolean ),
		// 				block_present: expect.any( Boolean ),
		// 				block_required: expect.any( Boolean ),
		// 			},
		// 			{
		// 				page_name: expect.any( String ),
		// 				page_id: expect.any( String ),
		// 				page_set: expect.any( Boolean ),
		// 				page_exists: expect.any( Boolean ),
		// 				page_visible: expect.any( Boolean ),
		// 				shortcode: expect.any( String ),
		// 				block: expect.any( String ),
		// 				shortcode_required: expect.any( Boolean ),
		// 				shortcode_present: expect.any( Boolean ),
		// 				block_present: expect.any( Boolean ),
		// 				block_required: expect.any( Boolean ),
		// 			},
		// 			{
		// 				page_name: expect.any( String ),
		// 				page_id: expect.any( String ),
		// 				page_set: expect.any( Boolean ),
		// 				page_exists: expect.any( Boolean ),
		// 				page_visible: expect.any( Boolean ),
		// 				shortcode: expect.any( String ),
		// 				block: expect.any( String ),
		// 				shortcode_required: expect.any( Boolean ),
		// 				shortcode_present: expect.any( Boolean ),
		// 				block_present: expect.any( Boolean ),
		// 				block_required: expect.any( Boolean ),
		// 			},
		// 			{
		// 				page_name: expect.any( String ),
		// 				page_id: expect.any( String ),
		// 				page_set: expect.any( Boolean ),
		// 				page_exists: expect.any( Boolean ),
		// 				page_visible: expect.any( Boolean ),
		// 				shortcode: expect.any( String ),
		// 				block: expect.any( String ),
		// 				shortcode_required: expect.any( Boolean ),
		// 				shortcode_present: expect.any( Boolean ),
		// 				block_present: expect.any( Boolean ),
		// 				block_required: expect.any( Boolean ),
		// 			},
		// 		] ),
		// 	} )
		// );
		// expect( responseJSON ).toEqual(
		// 	expect.objectContaining( {
		// 		post_type_counts: expect.arrayContaining( [
		// 			{
		// 				type: expect.any( String ),
		// 				count: expect.any( String ),
		// 			},
		// 			{
		// 				type: expect.any( String ),
		// 				count: expect.any( String ),
		// 			},
		// 			{
		// 				type: expect.any( String ),
		// 				count: expect.any( String ),
		// 			},
		// 		] ),
		// 	} )
		// );
	} );

	test( 'can view all system status tools', async ( { request } ) => {
		// call API to view system status tools
		const response = await request.get(
			'./wp-json/wc/v3/system_status/tools'
		);
		const responseJSON = await response.json();
		expect( response.status() ).toEqual( 200 );

		expect( responseJSON ).toEqual(
			expect.arrayContaining( [
				expect.objectContaining( {
					id: 'clear_transients',
					name: 'WooCommerce transients',
					action: 'Clear transients',
					description:
						'This tool will clear the product/shop transients cache.',
				} ),
				expect.objectContaining( {
					id: 'clear_expired_transients',
					name: 'Expired transients',
					action: 'Clear transients',
					description:
						'This tool will clear ALL expired transients from WordPress.',
				} ),
				expect.objectContaining( {
					id: 'clear_expired_download_permissions',
					name: 'Used-up download permissions',
					action: 'Clean up download permissions',
					description:
						'This tool will delete expired download permissions and permissions with 0 remaining downloads.',
				} ),
				expect.objectContaining( {
					id: 'regenerate_product_lookup_tables',
					name: 'Product lookup tables',
					action: 'Regenerate',
					description:
						'This tool will regenerate product lookup table data. This process may take a while.',
				} ),
			] )
		);
	} );

	test( 'can retrieve a system status tool', async ( { request } ) => {
		// call API to retrieve a system status tool
		const response = await request.get(
			'./wp-json/wc/v3/system_status/tools/clear_transients'
		);
		const responseJSON = await response.json();
		expect( response.status() ).toEqual( 200 );

		expect( responseJSON ).toEqual(
			expect.objectContaining( {
				id: 'clear_transients',
				name: 'WooCommerce transients',
				action: 'Clear transients',
				description:
					'This tool will clear the product/shop transients cache.',
			} )
		);
	} );

	test( 'can run a tool from system status', async ( { request } ) => {
		// call API to run a system status tool
		const response = await request.put(
			'./wp-json/wc/v3/system_status/tools/clear_transients'
		);
		const responseJSON = await response.json();
		expect( response.status() ).toEqual( 200 );

		expect( responseJSON ).toEqual(
			expect.objectContaining( {
				id: 'clear_transients',
				name: 'WooCommerce transients',
				action: 'Clear transients',
				description:
					'This tool will clear the product/shop transients cache.',
				success: true,
				message: 'Product transients cleared',
			} )
		);
	} );
} );
