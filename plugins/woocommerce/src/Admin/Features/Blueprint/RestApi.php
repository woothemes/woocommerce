<?php

declare( strict_types = 1 );

namespace Automattic\WooCommerce\Admin\Features\Blueprint;

use Automattic\WooCommerce\Blueprint\ExportSchema;
use Automattic\WooCommerce\Blueprint\ImportSchema;
use Automattic\WooCommerce\Blueprint\JsonResultFormatter;
use Automattic\WooCommerce\Blueprint\ZipExportedSchema;

/**
 * Class RestApi
 *
 * This class handles the REST API endpoints for importing and exporting WooCommerce Blueprints.
 *
 * @package Automattic\WooCommerce\Admin\Features\Blueprint
 */
class RestApi {
	/**
	 * Endpoint namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'wc-admin';

	/**
	 * Register routes.
	 *
	 * @since 9.3.0
	 */
	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'/blueprint/queue',
			array(
				array(
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'queue' ),
					'permission_callback' => array( $this, 'check_permission' ),
				),
			)
		);

		register_rest_route(
			$this->namespace,
			'/blueprint/process',
			array(
				array(
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'process' ),
					'permission_callback' => array( $this, 'check_permission' ),
					'args'                => array(
						'reference'     => array(
							'description' => __( 'The reference of the uploaded file', 'woocommerce' ),
							'type'        => 'string',
							'required'    => true,
						),
						'process_nonce' => array(
							'description' => __( 'The nonce for processing the uploaded file', 'woocommerce' ),
							'type'        => 'string',
							'required'    => true,
						),
					),
				),
			)
		);

		register_rest_route(
			$this->namespace,
			'/import',
			array(
				array(
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'import' ),
					'permission_callback' => array( $this, 'check_permission' ),
				),
			)
		);

		register_rest_route(
			$this->namespace,
			'/export',
			array(
				array(
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'export' ),
					'permission_callback' => array( $this, 'check_permission' ),
					'args'                => array(
						'steps'         => array(
							'description'       => __( 'A list of plugins to install', 'woocommerce' ),
							'type'              => 'array',
							'items'             => 'string',
							'default'           => array(),
							'sanitize_callback' => function ( $value ) {
								return array_map(
									function ( $value ) {
										return sanitize_text_field( $value );
									},
									$value
								);
							},
							'required'          => false,
						),
						'export_as_zip' => array(
							'description' => __( 'Export as a zip file', 'woocommerce' ),
							'type'        => 'boolean',
							'default'     => false,
							'required'    => false,
						),
					),
				),
			)
		);
	}

	/**
	 * Check if the current user has permission to perform the request.
	 *
	 * @return bool|\WP_Error
	 */
	public function check_permission() {
		if ( ! current_user_can( 'install_plugins' ) ) {
			return new \WP_Error( 'woocommerce_rest_cannot_view', __( 'Sorry, you cannot list resources.', 'woocommerce' ), array( 'status' => rest_authorization_required_code() ) );
		}
		return true;
	}

	/**
	 * Handle the export request.
	 *
	 * @param \WP_REST_Request $request The request object.
	 * @return \WP_HTTP_Response The response object.
	 */
	public function export( $request ) {
		$steps         = $request->get_param( 'steps' );
		$export_as_zip = $request->get_param( 'export_as_zip' );
		$exporter      = new ExportSchema();

		$data = $exporter->export( $steps, $export_as_zip );

		if ( $export_as_zip ) {
			$zip  = new ZipExportedSchema( $data );
			$data = $zip->zip();
			$data = site_url( str_replace( ABSPATH, '', $data ) );
		}

		return new \WP_HTTP_Response(
			array(
				'data' => $data,
				'type' => $export_as_zip ? 'zip' : 'json',
			)
		);
	}

	/**
	 * Handle the import request.
	 *
	 * @return \WP_HTTP_Response The response object.
	 * @throws \InvalidArgumentException If the import fails.
	 */
	public function import() {

		// Check for nonce to prevent CSRF.
		// phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized, WordPress.Security.ValidatedSanitizedInput.MissingUnslash
		if ( ! isset( $_POST['blueprint_upload_nonce'] ) || ! \wp_verify_nonce( $_POST['blueprint_upload_nonce'], 'blueprint_upload_nonce' ) ) {
			return new \WP_HTTP_Response(
				array(
					'status'  => 'error',
					'message' => __( 'Invalid nonce', 'woocommerce' ),
				),
				400
			);
		}

		// phpcs:ignore
		if ( ! empty( $_FILES['file'] ) && $_FILES['file']['error'] === UPLOAD_ERR_OK ) {
			// phpcs:ignore
			$uploaded_file = $_FILES['file']['tmp_name'];
			// phpcs:ignore
			$mime_type     = $_FILES['file']['type'];

			if ( 'application/json' !== $mime_type && 'application/zip' !== $mime_type ) {
				return new \WP_HTTP_Response(
					array(
						'status'  => 'error',
						'message' => __( 'Invalid file type', 'woocommerce' ),
					),
					400
				);
			}

			try {
				// phpcs:ignore
				if ( $mime_type === 'application/zip' ) {
					// phpcs:ignore
					if ( ! function_exists( 'wp_handle_upload' ) ) {
						require_once ABSPATH . 'wp-admin/includes/file.php';
					}

					$movefile = \wp_handle_upload( $_FILES['file'], array( 'test_form' => false ) );

					if ( $movefile && ! isset( $movefile['error'] ) ) {
						$blueprint = ImportSchema::create_from_zip( $movefile['file'] );
					} else {
						throw new InvalidArgumentException( $movefile['error'] );
					}
				} else {
					$blueprint = ImportSchema::create_from_json( $uploaded_file );
				}
			} catch ( \Exception $e ) {
				return new \WP_HTTP_Response(
					array(
						'status'  => 'error',
						'message' => $e->getMessage(),
					),
					400
				);
			}

			$results          = $blueprint->import();
			$result_formatter = new JsonResultFormatter( $results );
			$redirect         = $blueprint->get_schema()->landingPage ?? null;
			$redirect_url     = $redirect->url ?? 'admin.php?page=wc-admin';

			$is_success = $result_formatter->is_success() ? 'success' : 'error';

			return new \WP_HTTP_Response(
				array(
					'status'  => $is_success,
					'message' => 'error' === $is_success ? __( 'There was an error while processing your schema', 'woocommerce' ) : 'success',
					'data'    => array(
						'redirect' => admin_url( $redirect_url ),
						'result'   => $result_formatter->format(),
					),
				),
				200
			);
		}

		return new \WP_HTTP_Response(
			array(
				'status'  => 'error',
				'message' => __( 'No file uploaded', 'woocommerce' ),
			),
			400
		);
	}

	/**
	 * Handle the upload request.
	 *
	 * We're not caling to run the import process in this file.
	 * We'll upload the file to the temporary dir, validate the file, and return a reference to the file.
	 * The uploaded file will be processed once user hits the import button and calls the process endpoint with a nonce.
	 *
	 * @return array
	 */
	public function queue() {
		// Initialize response structure.
		$response = array(
			'reference'  => null,
			'has_errors' => true,
			'errors'     => array(
				'upload'            => array(),
				'schema_validation' => array(),
				'conflicts'         => array(),
			),
		);

		// Check for nonce to prevent CSRF.
		// phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized, WordPress.Security.ValidatedSanitizedInput.MissingUnslash
		if ( ! isset( $_POST['blueprint_upload_nonce'] ) || ! \wp_verify_nonce( $_POST['blueprint_upload_nonce'], 'blueprint_upload_nonce' ) ) {
			$response['errors']['upload'][] = __( 'Invalid nonce', 'woocommerce' );
			return $response;
		}

		// Validate file upload.
		if ( empty( $_FILES['file'] ) || ! isset( $_FILES['file']['error'], $_FILES['file']['tmp_name'], $_FILES['file']['type'] ) ) {
			$response['errors']['upload'][] = __( 'No file uploaded', 'woocommerce' );
			return $response;
		}

		// phpcs:ignore
		if ( UPLOAD_ERR_OK !== $_FILES['file']['error'] || ! is_uploaded_file( $_FILES['file']['tmp_name'] ) ) {
			$response['errors']['upload'][] = __( 'File upload error', 'woocommerce' );
			return $response;
		}

		$mime_type = sanitize_text_field( $_FILES['file']['type'] );

		// Check for valid file types.
		if ( 'application/json' !== $mime_type && 'application/zip' !== $mime_type ) {
			$response['errors']['upload'][] = __( 'Invalid file type', 'woocommerce' );
			return $response;
		}

		// phpcs:ignore
		$extension = pathinfo( $_FILES['file']['name'], PATHINFO_EXTENSION );

		// Move file to temporary directory.
		// phpcs:ignore
		$tmp_filepath = get_temp_dir() . basename( $_FILES['file']['tmp_name'] ).'.'.$extension;

		// phpcs:ignore
		if ( ! move_uploaded_file( $_FILES['file']['tmp_name'], $tmp_filepath ) ) {
			$response['errors']['upload'][] = __( 'Error moving file to tmp directory', 'woocommerce' );
			return $response;
		}

		// Process the uploaded file.
		// We'll not call import function.
		// Just validate the file by calling create_from_json or create_from_zip.
		try {
			if ( 'application/zip' === $mime_type ) {
				ImportSchema::create_from_zip( $tmp_filepath );
			} else {
				ImportSchema::create_from_json( $tmp_filepath );
			}
		} catch ( \Exception $e ) {
			$response['errors']['schema_validation'][] = $e->getMessage();
			return $response;
		}

		// Successfully processed the file.
		$response['has_errors'] = false;
		// phpcs:ignore
		$response['reference']  = basename( $_FILES['file']['tmp_name'].'.'.$extension );
		$response['process_nonce'] = wp_create_nonce( $response['reference'] );
		return $response;
	}

	/**
	 * Process the uploaded file.
	 *
	 * @param \WP_REST_Request $request request object.
	 *
	 * @return array
	 */
	public function process( \WP_REST_Request $request ) {
		$response = array(
			'processed' => false,
			'message'   => '',
			'data'      => array(
				'redirect' => '',
				'result'   => array(),
			),
		);

		$ref   = $request->get_param( 'reference' );
		$nonce = $request->get_param( 'process_nonce' );

		if ( ! \wp_verify_nonce( $nonce, $ref ) ) {
			$response['message'] = __( 'Invalid nonce', 'woocommerce' );
			return $response;
		}

		$fullpath  = get_temp_dir() . $ref;
		$extension = pathinfo( $fullpath, PATHINFO_EXTENSION );

		// Process the uploaded file.
		// We'll not call import function.
		// Just validate the file by calling create_from_json or create_from_zip.
		try {
			if ( 'zip' === $extension ) {
				$blueprint = ImportSchema::create_from_zip( $fullpath );
			} else {
				$blueprint = ImportSchema::create_from_json( $fullpath );
			}
		} catch ( \Exception $e ) {
			$response['message'] = $e->getMessage();
			return $response;
		}

		$results          = $blueprint->import();
		$result_formatter = new JsonResultFormatter( $results );
		$redirect         = $blueprint->get_schema()->landingPage ?? null;
		$redirect_url     = $redirect->url ?? 'admin.php?page=wc-admin';

		$is_success = $result_formatter->is_success();

		$response['processed'] = $is_success;
		$response['message']   = false === $is_success ? __( 'There was an error while processing your schema', 'woocommerce' ) : 'success';
		$response['data']      = array(
			'redirect' => admin_url( $redirect_url ),
			'result'   => $result_formatter->format(),
		);

		return $response;
	}
}
