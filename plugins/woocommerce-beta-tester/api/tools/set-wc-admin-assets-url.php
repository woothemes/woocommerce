<?php 
defined( 'ABSPATH' ) || exit;

register_woocommerce_admin_test_helper_rest_route(
	'/tools/set-wc-admin-assets-base-url/v1',
	'tools_set_wc_admin_assets_base_url',
	array(
		'methods' => 'POST',
		'args'    => array(
			'url' => array(
				'description' => 'WC Admin Assets URL Filter',
				'type'        => 'string',
				'required'          => true,
				'sanitize_callback' => 'esc_url_raw',
			),
		),
	)
);

register_woocommerce_admin_test_helper_rest_route(
	'/tools/get-wc-admin-assets-base-url/v1',
	'tools_get_wc_admin_assets_base_url',
	array(
		'methods' => 'GET',
	)
);

/**
 * A tool to set the base URL for the WC Admin Assets filter.
 *
 * @param WP_REST_Request $request Request object.
 */
function tools_set_wc_admin_assets_base_url( $request ) {
	$url = $request->get_param( 'url' );

    if ( empty( $url ) || $url === '') {
        delete_option( 'wc_admin_test_helper_filter_admin_assets_base_url' );
    } else {
        update_option( 'wc_admin_test_helper_filter_admin_assets_base_url', $url );
    }
	return new WP_REST_Response( $url, 200 );
}

/**
 * A tool to get the base URL for WC Admin Assets filter.
 */
function tools_get_wc_admin_assets_base_url() {
	$url = get_option( 'wc_admin_test_helper_filter_admin_assets_base_url' , '' );

	return new WP_REST_Response( $url, 200 );
}


if ( ! empty( get_option( 'wc_admin_test_helper_filter_admin_assets_base_url', '' ) ) ) {
    add_filter( 'woocommerce_admin_asset_url', 'modify_plugin_url', 10, 5 );
    
    function modify_plugin_url( $url, $path, $file, $suffix, $ext ) {
        return trailingslashit(get_option( 'wc_admin_test_helper_filter_admin_assets_base_url' )) . $file . $suffix . '.' . $ext;
    }
}


