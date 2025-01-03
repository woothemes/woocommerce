<?php
/**
 * REST API endpoints for live branches installation.
 *
 * @package WC_Beta_Tester
 */

defined( 'ABSPATH' ) || exit;

require_once __DIR__ . '/../../includes/class-wc-beta-tester-live-branches-installer.php';


/**
 * Check if the user has the necessary permissions to perform live branches actions.
 * Avoid using WC functions so user can call these API without WooCommerce active.
 *
 * @return bool|WP_Error
 */
function check_live_branches_permissions() {
	if ( ! current_user_can( 'install_plugins' ) ) {
		return new \WP_Error(
			'woocommerce_rest_cannot_edit',
			__( 'Sorry, you cannot perform this action', 'woocommerce-beta-tester' )
		);
	}
	return true;
}


register_woocommerce_admin_test_helper_rest_route(
	'/live-branches/install/v1',
	'install_version',
	array(
		'methods'             => 'POST',
		'permission_callback' => 'check_live_branches_permissions',
		'args'                => array(
			'download_url' => array(
				'required'          => true,
				'type'              => 'string',
				'description'       => 'The URL to download the WooCommerce plugin zip file.',
				'validate_callback' => function( $param ) {
					return filter_var( $param, FILTER_VALIDATE_URL );
				},
				'sanitize_callback' => 'sanitize_text_field',
			),
			'pr_name'      => array(
				'required'          => true,
				'type'              => 'string',
				'description'       => 'The name or identifier of the pull request being installed.',
				'sanitize_callback' => 'sanitize_text_field',
			),
			'version'      => array(
				'required'          => true,
				'type'              => 'string',
				'description'       => 'The version identifier of WooCommerce to be installed.',
				'sanitize_callback' => 'sanitize_text_field',
			),
		),
	)
);

register_woocommerce_admin_test_helper_rest_route(
	'/live-branches/deactivate/v1',
	'deactivate_woocommerce',
	array(
		'methods'             => 'GET',
		'permission_callback' => 'check_live_branches_permissions',
		'description'         => 'Deactivates the currently active WooCommerce plugin.',
	)
);

register_woocommerce_admin_test_helper_rest_route(
	'/live-branches/activate/v1',
	'activate_version',
	array(
		'methods'             => 'POST',
		'permission_callback' => 'check_live_branches_permissions',
		'args'                => array(
			'version' => array(
				'required'          => true,
				'type'              => 'string',
				'description'       => 'The version identifier of WooCommerce to activate.',
				'sanitize_callback' => 'sanitize_text_field',
			),
			'force'   => array(
				'required'    => false,
				'type'        => 'boolean',
				'default'     => false,
				'description' => 'Whether to force activation by deactivating WooCommerce first if it is already active.',
			),
		),
	)
);

/**
 * Respond to POST request to install a plugin by download url.
 *
 * @param Object $request - The request parameter.
 */
function install_version( $request ) {
	$params       = json_decode( $request->get_body() );
	$download_url = $params->download_url;
	$pr_name      = $params->pr_name;
	$version      = $params->version;

	$installer = new WC_Beta_Tester_Live_Branches_Installer();
	$result    = $installer->install( $download_url, $version );

	if ( is_wp_error( $result ) ) {
		return new WP_Error( 400, "Could not install $pr_name with error {$result->get_error_message()}", '' );
	} else {
		return new WP_REST_Response( wp_json_encode( array( 'ok' => true ) ), 200 );
	}
}

/**
 * Respond to POST request to activate a plugin by version.
 *
 * @param Object $request - The request parameter.
 */
function activate_version( $request ) {
	$params  = json_decode( $request->get_body() );
	$version = $params->version;
	$force   = isset( $params->force ) ? $params->force : false;

	$installer = new WC_Beta_Tester_Live_Branches_Installer();

	if ( $force ) {
		$installer->deactivate_woocommerce();
	}

	$result = $installer->activate( $version );

	if ( is_wp_error( $result ) ) {
		return new WP_Error( 400, "Could not activate version: $version with error {$result->get_error_message()}", '' );
	} else {
		return new WP_REST_Response( wp_json_encode( array( 'ok' => true ) ), 200 );
	}
}

/**
 * Respond to GET request to deactivate WooCommerce.
 */
function deactivate_woocommerce() {
	$installer = new WC_Beta_Tester_Live_Branches_Installer();
	$installer->deactivate_woocommerce();

	return new WP_REST_Response( wp_json_encode( array( 'ok' => true ) ), 200 );
}
