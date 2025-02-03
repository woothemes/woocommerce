const { test, expect } = require( '../../../fixtures/api-tests-fixtures' );
const { any, anything } = expect;

const schemas = {
	environment: [
		{ field: 'home_url', type: any( String ) },
		{ field: 'site_url', type: any( String ) },
		{ field: 'version', type: any( String ) },
		{ field: 'log_directory', type: any( String ) },
		{ field: 'log_directory_writable', type: any( Boolean ) },
		{ field: 'wp_version', type: any( String ) },
		{ field: 'wp_multisite', type: any( Boolean ) },
		{ field: 'wp_memory_limit', type: any( Number ) },
		{ field: 'wp_debug_mode', type: any( Boolean ) },
		{ field: 'wp_cron', type: any( Boolean ) },
		{ field: 'language', type: any( String ) },
		{ field: 'server_info', type: any( String ) },
		{ field: 'php_version', type: any( String ) },
		{ field: 'php_post_max_size', type: any( Number ) },
		{ field: 'php_max_execution_time', type: any( Number ) },
		{ field: 'php_max_input_vars', type: any( Number ) },
		{ field: 'curl_version', type: any( String ) },
		{ field: 'suhosin_installed', type: any( Boolean ) },
		{ field: 'max_upload_size', type: any( Number ) },
		{ field: 'mysql_version', type: any( String ) },
		{ field: 'mysql_version_string', type: any( String ) },
		{ field: 'default_timezone', type: any( String ) },
		{ field: 'fsockopen_or_curl_enabled', type: any( Boolean ) },
		{ field: 'soapclient_enabled', type: any( Boolean ) },
		{ field: 'domdocument_enabled', type: any( Boolean ) },
		{ field: 'gzip_enabled', type: any( Boolean ) },
		{ field: 'mbstring_enabled', type: any( Boolean ) },
		{ field: 'remote_post_successful', type: any( Boolean ) },
		{ field: 'remote_get_successful', type: any( Boolean ) },
	],
	database: [
		{ field: 'wc_database_version', type: any( String ) },
		{ field: 'database_prefix', type: any( String ) },
		{ field: 'maxmind_geoip_database', type: any( String ) },
		{ field: 'database_tables', type: anything() },
		{ field: 'database_size', type: anything() },
	],
	database_tables_woocommerce_other: [
		{ field: 'data', type: any( String ) },
		{ field: 'index', type: any( String ) },
		{ field: 'engine', type: any( String ) },
	],
	active_plugins: [
		{ field: 'plugin', type: any( String ) },
		{ field: 'name', type: any( String ) },
		{ field: 'version', type: any( String ) },
		{ field: 'version_latest', type: any( String ) },
		{ field: 'url', type: any( String ) },
		{ field: 'author_name', type: any( String ) },
		{ field: 'author_url', type: any( String ) },
		{ field: 'network_activated', type: any( Boolean ) },
	],
	theme: [
		{ field: 'name', type: any( String ) },
		{ field: 'version', type: any( String ) },
		{ field: 'version_latest', type: any( String ) },
		{ field: 'author_url', type: any( String ) },
		{ field: 'is_child_theme', type: any( Boolean ) },
		{ field: 'is_block_theme', type: any( Boolean ) },
		{ field: 'has_woocommerce_support', type: any( Boolean ) },
		{ field: 'has_woocommerce_file', type: any( Boolean ) },
		{ field: 'has_outdated_templates', type: any( Boolean ) },
		{ field: 'overrides', type: any( Array ) },
		{ field: 'parent_name', type: any( String ) },
		{ field: 'parent_version', type: any( String ) },
		{ field: 'parent_version_latest', type: any( String ) },
		{ field: 'parent_author_url', type: any( String ) },
	],
	settings: [
		{ field: 'api_enabled', type: any( Boolean ) },
		{ field: 'force_ssl', type: any( Boolean ) },
		{ field: 'currency', type: any( String ) },
		{ field: 'currency_symbol', type: any( String ) },
		{ field: 'currency_position', type: any( String ) },
		{ field: 'thousand_separator', type: any( String ) },
		{ field: 'decimal_separator', type: any( String ) },
		{ field: 'number_of_decimals', type: any( Number ) },
		{ field: 'geolocation_enabled', type: any( Boolean ) },
		{ field: 'taxonomies', type: anything() },
		{ field: 'product_visibility_terms', type: anything() },
		{ field: 'woocommerce_com_connected', type: any( String ) },
	],
	taxonomies: [
		{ field: 'external', type: any( String ) },
		{ field: 'grouped', type: any( String ) },
		{ field: 'simple', type: any( String ) },
		{ field: 'variable', type: any( String ) },
	],
	product_visibility_terms: [
		{ field: 'exclude-from-catalog', type: any( String ) },
		{ field: 'exclude-from-search', type: any( String ) },
		{ field: 'featured', type: any( String ) },
		{ field: 'outofstock', type: any( String ) },
		{ field: 'rated-1', type: any( String ) },
		{ field: 'rated-2', type: any( String ) },
		{ field: 'rated-3', type: any( String ) },
		{ field: 'rated-4', type: any( String ) },
		{ field: 'rated-5', type: any( String ) },
	],
	security: [
		{ field: 'secure_connection', type: any( Boolean ) },
		{ field: 'hide_errors', type: any( Boolean ) },
	],
	pages: [
		{ field: 'page_name', type: any( String ) },
		{ field: 'page_id', type: any( String ) },
		{ field: 'page_set', type: any( Boolean ) },
		{ field: 'page_exists', type: any( Boolean ) },
		{ field: 'page_visible', type: any( Boolean ) },
		{ field: 'shortcode', type: any( String ) },
		{ field: 'block', type: any( String ) },
		{ field: 'shortcode_required', type: any( Boolean ) },
		{ field: 'shortcode_present', type: any( Boolean ) },
		{ field: 'block_present', type: any( Boolean ) },
		{ field: 'block_required', type: any( Boolean ) },
	],
};

const getExpectedWooCommerceTables = ( dbPrefix ) => {
	return [
		`${ dbPrefix }woocommerce_sessions`,
		`${ dbPrefix }woocommerce_api_keys`,
		`${ dbPrefix }woocommerce_attribute_taxonomies`,
		`${ dbPrefix }woocommerce_downloadable_product_permissions`,
		`${ dbPrefix }woocommerce_order_items`,
		`${ dbPrefix }woocommerce_order_itemmeta`,
		`${ dbPrefix }woocommerce_tax_rates`,
		`${ dbPrefix }woocommerce_tax_rate_locations`,
		`${ dbPrefix }woocommerce_shipping_zones`,
		`${ dbPrefix }woocommerce_shipping_zone_locations`,
		`${ dbPrefix }woocommerce_shipping_zone_methods`,
		`${ dbPrefix }woocommerce_payment_tokens`,
		`${ dbPrefix }woocommerce_payment_tokenmeta`,
		`${ dbPrefix }woocommerce_log`,
	];
};

const getExpectedOtherTables = ( dbPrefix ) => {
	return [
		`${ dbPrefix }actionscheduler_actions`,
		`${ dbPrefix }actionscheduler_claims`,
		`${ dbPrefix }actionscheduler_groups`,
		`${ dbPrefix }actionscheduler_logs`,
		`${ dbPrefix }commentmeta`,
		`${ dbPrefix }comments`,
		`${ dbPrefix }links`,
		`${ dbPrefix }options`,
		`${ dbPrefix }postmeta`,
		`${ dbPrefix }posts`,
		`${ dbPrefix }termmeta`,
		`${ dbPrefix }terms`,
		`${ dbPrefix }term_relationships`,
		`${ dbPrefix }term_taxonomy`,
		`${ dbPrefix }usermeta`,
		`${ dbPrefix }users`,
		`${ dbPrefix }wc_admin_notes`,
		`${ dbPrefix }wc_admin_note_actions`,
		`${ dbPrefix }wc_category_lookup`,
		`${ dbPrefix }wc_customer_lookup`,
		`${ dbPrefix }wc_download_log`,
		`${ dbPrefix }wc_order_coupon_lookup`,
		`${ dbPrefix }wc_order_product_lookup`,
		`${ dbPrefix }wc_order_stats`,
		`${ dbPrefix }wc_order_tax_lookup`,
		`${ dbPrefix }wc_product_attributes_lookup`,
		`${ dbPrefix }wc_product_download_directories`,
		`${ dbPrefix }wc_product_meta_lookup`,
		`${ dbPrefix }wc_rate_limits`,
		`${ dbPrefix }wc_reserved_stock`,
		`${ dbPrefix }wc_tax_rate_classes`,
		`${ dbPrefix }wc_webhooks`,
	];
};

/* eslint-disable playwright/no-nested-step */
test.describe( 'System Status API tests', () => {
	test( 'can view all system status items', async ( { request } ) => {
		let responseJSON,
			databasePrefix,
			databaseSize,
			databaseTables,
			woocommerceTables,
			otherTables,
			activePlugins,
			dropinsMuPlugins,
			taxonomiesJSON,
			productVisibilityTerms,
			pagesList;

		await test.step( 'Call API to view all system status items', async () => {
			const response = await request.get(
				'./wp-json/wc/v3/system_status'
			);
			responseJSON = await response.json();
			expect( response.status() ).toEqual( 200 );
		} );

		await test.step( 'Verify "environment" fields', async () => {
			const { environment } = responseJSON;
			expect( environment ).toBeDefined();

			for ( const { field, type } of schemas.environment ) {
				await test.step( `Verify "environment.${ field }"`, () => {
					expect( environment[ field ] ).toEqual( type );
				} );
			}

			// Handle special case of environment.external_object_cache
			// It is null on wp-env, but could be a Boolean in other environments.
			await test.step( 'Verify "environment.external_object_cache"', () => {
				const { external_object_cache } = environment;

				expect(
					typeof external_object_cache === 'boolean' ||
						external_object_cache === null
				).toBeTruthy();
			} );

			// Handle special cases of environment.remote_get_response and environment.remote_post_response.
			// They are a Number when wp-env is first launched, but becomes a String on succeeding runs.
			await test.step( 'Verify environment.remote_get_response', () => {
				const { remote_get_response } = environment;
				expect( [ 'number', 'string' ] ).toContain(
					typeof remote_get_response
				);
			} );

			await test.step( 'Verify environment.remote_post_response', () => {
				const { remote_post_response } = environment;
				expect( [ 'number', 'string' ] ).toContain(
					typeof remote_post_response
				);
			} );
		} );

		await test.step( 'Verify "database" fields', async () => {
			const { database } = responseJSON;
			expect( database ).toBeDefined();

			for ( const { field, type } of schemas.database ) {
				await test.step( `Verify "database.${ field }"`, () => {
					expect( database[ field ] ).toEqual( type );
				} );
			}

			databaseSize = database.database_size;
			databasePrefix = database.database_prefix;
			databaseTables = database.database_tables;
		} );

		await test.step( 'Verify "database.database_tables" fields', async () => {
			const { woocommerce, other } = databaseTables;
			expect( woocommerce ).toBeDefined();
			expect( other ).toBeDefined();

			woocommerceTables = woocommerce;
			otherTables = other;
		} );

		await test.step( 'Verify "database.database_tables.woocommerce" fields', async () => {
			const wooTableNames =
				getExpectedWooCommerceTables( databasePrefix );

			for ( const tableName of wooTableNames ) {
				const thisTable = woocommerceTables[ tableName ];
				expect( thisTable ).toBeDefined();

				for ( const {
					field,
					type,
				} of schemas.database_tables_woocommerce_other ) {
					await test.step( `Verify "database.database_tables.woocommerce.${ tableName }.${ field }"`, () => {
						expect( thisTable[ field ] ).toEqual( type );
					} );
				}
			}
		} );

		await test.step( 'Verify "database.database_tables.other" fields', async () => {
			const otherTableNames = getExpectedOtherTables( databasePrefix );

			for ( const tableName of otherTableNames ) {
				const thisTable = otherTables[ tableName ];
				expect( thisTable ).toBeDefined();

				for ( const {
					field,
					type,
				} of schemas.database_tables_woocommerce_other ) {
					await test.step( `Verify "database.database_tables.other.${ tableName }.${ field }"`, () => {
						expect( thisTable[ field ] ).toEqual( type );
					} );
				}
			}
		} );

		await test.step( 'Verify "database.database_size" fields', async () => {
			const { data, index } = databaseSize;
			expect( data ).toEqual( any( Number ) );
			expect( index ).toEqual( any( Number ) );
		} );

		await test.step( 'Verify "active_plugins"', async () => {
			const { active_plugins } = responseJSON;
			expect( active_plugins ).toEqual( any( Array ) );
			expect( active_plugins.length ).toBeGreaterThan( 0 );
			activePlugins = active_plugins;
		} );

		for ( const aPlugin of activePlugins ) {
			await test.step( `Verify active plugin "${ aPlugin.name }"`, async () => {
				for ( const { field, type } of schemas.active_plugins ) {
					await test.step( `Verify "${ field }"`, async () => {
						expect( aPlugin[ field ] ).toEqual( type );
					} );
				}
			} );
		}

		await test.step( 'Verify "dropins_mu_plugins"', async () => {
			const { dropins_mu_plugins } = responseJSON;
			expect( dropins_mu_plugins ).toBeDefined();
			dropinsMuPlugins = dropins_mu_plugins;
		} );

		await test.step( 'Verify "dropins_mu_plugins.dropins"', async () => {
			const { dropins } = dropinsMuPlugins;
			expect( dropins ).toEqual( any( Array ) );

			for ( const dropin of dropins ) {
				const { name, plugin } = dropin;
				await test.step( `Verify dropin "${ name }"`, async () => {
					expect( name ).toEqual( any( String ) );
					expect( plugin ).toEqual( any( String ) );
				} );
			}
		} );

		await test.step( 'Verify "dropins_mu_plugins.mu_plugins"', async () => {
			const { mu_plugins } = dropinsMuPlugins;
			expect( mu_plugins ).toEqual( any( Array ) );
		} );

		await test.step( 'Verify "theme"', async () => {
			const { theme } = responseJSON;
			expect( theme ).toBeDefined();

			for ( const { field, type } of schemas.theme ) {
				await test.step( `Verify "theme.${ field }"`, () => {
					expect( theme[ field ] ).toEqual( type );
				} );
			}
		} );

		await test.step( 'Verify "settings"', async () => {
			const { settings } = responseJSON;
			expect( settings ).toBeDefined();

			for ( const { field, type } of schemas.settings ) {
				await test.step( `Verify "settings.${ field }"`, async () => {
					expect( settings[ field ] ).toEqual( type );
				} );
			}

			taxonomiesJSON = settings.taxonomies;
			productVisibilityTerms = settings.product_visibility_terms;
		} );

		await test.step( 'Verify "settings.taxonomies"', async () => {
			for ( const { field, type } of schemas.taxonomies ) {
				await test.step( `Verify "settings.taxonomies.${ field }"`, async () => {
					expect( taxonomiesJSON[ field ] ).toEqual( type );
				} );
			}
		} );

		await test.step( 'Verify "settings.product_visibility_terms"', async () => {
			for ( const { field, type } of schemas.product_visibility_terms ) {
				await test.step( `Verify "settings.product_visibility_terms.${ field }"`, async () => {
					expect( productVisibilityTerms[ field ] ).toEqual( type );
				} );
			}
		} );

		await test.step( 'Verify "security" fields', async () => {
			const { security } = responseJSON;
			expect( security ).toBeDefined();

			for ( const { field, type } of schemas.security ) {
				await test.step( `Verify "security.${ field }"`, () => {
					expect( security[ field ] ).toEqual( type );
				} );
			}
		} );

		await test.step( 'Verify "pages" array', async () => {
			const { pages } = responseJSON;
			expect( pages ).toEqual( any( Array ) );
			expect( pages.length ).toBeGreaterThan( 0 );
			pagesList = pages;
		} );

		for ( const page of pagesList ) {
			await test.step( `Verify page "${ page.page_name }"`, async () => {
				for ( const { field, type } of schemas.pages ) {
					await test.step( `Verify "${ field }"`, async () => {
						expect( page[ field ] ).toEqual( type );
					} );
				}
			} );
		}

		await test.step( 'Verify "post_type_counts" array', async () => {
			const { post_type_counts } = responseJSON;
			expect( post_type_counts ).toEqual( any( Array ) );
			expect( post_type_counts.length ).toBeGreaterThan( 0 );

			for ( const { type, count } of post_type_counts ) {
				await test.step( `Verify post type "${ type }"`, () => {
					expect( type ).toEqual( any( String ) );
					expect( count ).toEqual( any( String ) );
				} );
			}
		} );
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
