<?php

declare( strict_types = 1 );

namespace Automattic\WooCommerce\Admin\Features\Blueprint;

use Automattic\WooCommerce\Blueprint\Exporters\ExportInstallPluginSteps;
use Automattic\WooCommerce\Blueprint\Exporters\ExportInstallThemeSteps;
use Automattic\WooCommerce\Blueprint\ExportSchema;
use Automattic\WooCommerce\Blueprint\ImportSchema;
use Automattic\WooCommerce\Blueprint\JsonResultFormatter;
use Automattic\WooCommerce\Blueprint\StepProcessorResult;
use Automattic\WooCommerce\Blueprint\ZipExportedSchema;
use RecursiveArrayIterator;
use RecursiveIteratorIterator;

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
				'schema' => array( $this, 'get_queue_response_schema' ),
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
				'schema' => array( $this, 'get_process_response_schema' ),
			)
		);

		register_rest_route(
			$this->namespace,
			'/blueprint/import',
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
			'/blueprint/export',
			array(
				array(
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'export' ),
					'permission_callback' => array( $this, 'check_permission' ),
					'args'                => array(
						'steps'         => array(
							'description' => __( 'A list of plugins to install', 'woocommerce' ),
							'type'        => 'object',
							'properties'  => array(
								'settings' => array(
									'type'  => 'array',
									'items' => array(
										'type' => 'string',
									),
								),
								'plugins'  => array(
									'type'  => 'array',
									'items' => array(
										'type' => 'string',
									),
								),
								'themes'   => array(
									'type'  => 'array',
									'items' => array(
										'type' => 'string',
									),
								),
							),
							'default'     => array(),
							'required'    => true,
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
		$payload = $request->get_param( 'steps' );
		$steps   = $this->steps_payload_to_blueprint_steps( $payload );

		$export_as_zip = $request->get_param( 'export_as_zip' );
		$exporter      = new ExportSchema();

		if ( isset( $payload['plugins'] ) ) {
			$exporter->onBeforeExport(
				'installPlugin',
				function ( ExportInstallPluginSteps $exporter ) use ( $payload ) {
					$exporter->filter(
						function ( array $plugins ) use ( $payload ) {
							return array_intersect_key( $plugins, array_flip( $payload['plugins'] ) );
						}
					);
				}
			);
		}

		if ( isset( $payload['themes'] ) ) {
			$exporter->onBeforeExport(
				'installTheme',
				function ( ExportInstallThemeSteps $exporter ) use ( $payload ) {
					$exporter->filter(
						function ( array $plugins ) use ( $payload ) {
							return array_intersect_key( $plugins, array_flip( $payload['themes'] ) );
						}
					);
				}
			);
		}

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
	 * We're not calling to run the import process in this function.
	 * We'll upload the file to a temporary dir, validate the file, and return a reference to the file.
	 * The uploaded file will be processed once user hits the import button and calls the process endpoint with a nonce.
	 *
	 * @return array
	 */
	public function queue() {
		// Initialize response structure.
		$response = array(
			'reference'  => null,
			'error_type' => null,
			'errors'     => array(),
		);

		// Check for nonce to prevent CSRF.
		// phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized, WordPress.Security.ValidatedSanitizedInput.MissingUnslash
		if ( ! isset( $_POST['blueprint_upload_nonce'] ) || ! \wp_verify_nonce( $_POST['blueprint_upload_nonce'], 'blueprint_upload_nonce' ) ) {
			$response['error_type'] = 'upload';
			$response['errors'][]   = __( 'Invalid nonce', 'woocommerce' );
			return $response;
		}

		// Validate file upload.
		if ( empty( $_FILES['file'] ) || ! isset( $_FILES['file']['error'], $_FILES['file']['tmp_name'], $_FILES['file']['type'] ) ) {
			$response['error_type'] = 'upload';
			$response['errors'][]   = __( 'No file uploaded', 'woocommerce' );
			return $response;
		}

		// It errors with " Detected usage of a non-sanitized input variable:"
		// We don't want to sanitize the file name for is_uploaded_file as it expects the raw file name.
		// phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
		if ( UPLOAD_ERR_OK !== $_FILES['file']['error'] || ! is_uploaded_file( $_FILES['file']['tmp_name'] ) ) {
			$response['error_type'] = 'upload';
			$response['errors'][]   = __( 'File upload error', 'woocommerce' );
			return $response;
		}

		$mime_type = sanitize_text_field( $_FILES['file']['type'] );

		// Check for valid file types.
		if ( 'application/json' !== $mime_type && 'application/zip' !== $mime_type ) {
			$response['error_type'] = 'upload';
			$response['errors'][]   = __( 'Invalid file type', 'woocommerce' );
			return $response;
		}

		// Errors with "Detected usage of a non-sanitized input variable:"
		// We don't want to sanitize the file name for pathinfo as it expects the raw file name.
		// phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotValidated, WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
		$extension = pathinfo( $_FILES['file']['name'], PATHINFO_EXTENSION );

		// Same as above, we don't want to sanitize the file name for get_temp_dir as it expects the raw file name.
		// phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
		$tmp_filepath = get_temp_dir() . basename( $_FILES['file']['tmp_name'] ) . '.' . $extension;

		// Same as above, we don't want to sanitize the file name for move_uploaded_file as it expects the raw file name.
		// phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
		if ( ! move_uploaded_file( $_FILES['file']['tmp_name'], $tmp_filepath ) ) {
			$response['error_type'] = 'upload';
			$response['errors'][]   = __( 'Error moving file to tmp directory', 'woocommerce' );
			return $response;
		}

		// Process the uploaded file.
		// We'll not call import function.
		// Just validate the file by calling create_from_json or create_from_zip.
		// Please note that we're not performing a full validation here as we can't know
		// the full list of available steps without starting the import process due to filters being used for extensibility.
		// For now, we'll just check the provided schema is a valid JSON and has 'steps' key.
		// Full validation is performed in the process function.
		try {
			if ( 'application/zip' === $mime_type ) {
				$import_schema = ImportSchema::create_from_zip( $tmp_filepath );
			} else {
				$import_schema = ImportSchema::create_from_json( $tmp_filepath );
			}
		} catch ( \Exception $e ) {
			$response['error_type'] = 'schema_validation';
			$response['errors'][]   = $e->getMessage();
			return $response;
		}

		// Same as above, we don't want to sanitize the file name for basename as it expects the raw file name.
		// phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
		$response['reference']             = basename( $_FILES['file']['tmp_name'] . '.' . $extension );
		$response['process_nonce']         = wp_create_nonce( $response['reference'] );
		$response['settings_to_overwrite'] = $this->get_settings_to_overwrite( $import_schema->get_schema()->get_steps() );

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

	/**
	 * Convert step list from the frontend to the backend format.
	 *
	 * From:
	 * {
	 *  "settings": ["setWCSettings", "setWCShippingZones", "setWCShippingMethods", "setWCShippingRates"],
	 *  "plugins": ["akismet/akismet.php],
	 *  "themes": ["approach],
	 * }
	 *
	 * To:
	 *
	 * ["setWCSettings", "setWCShippingZones", "setWCShippingMethods", "setWCShippingRates", "installPlugin", "installTheme"]
	 *
	 * @param array $steps steps payload from the frontend.
	 *
	 * @return array
	 */
	private function steps_payload_to_blueprint_steps( $steps ) {
		$blueprint_steps = array();

		if ( isset( $steps['settings'] ) ) {
			$blueprint_steps = array_merge( $blueprint_steps, $steps['settings'] );
		}

		if ( isset( $steps['plugins'] ) ) {
			$blueprint_steps[] = 'installPlugin';
		}

		if ( isset( $steps['themes'] ) ) {
			$blueprint_steps[] = 'installTheme';
		}

		return $blueprint_steps;
	}


	/**
	 * Get list of settings that will be overridden by the import.
	 *
	 * @param array $requested_steps List of steps from the import schema.
	 * @return array List of settings that will be overridden.
	 */
	private function get_settings_to_overwrite( array $requested_steps ): array {
		$settings_map = array(
			'setWCSettings'            => __( 'Settings', 'woocommerce' ),
			'setWCCoreProfilerOptions' => __( 'Core Profiler Options', 'woocommerce' ),
			'setWCPaymentGateways'     => __( 'Payment Gateways', 'woocommerce' ),
			'setWCShipping'            => __( 'Shipping', 'woocommerce' ),
			'setWCTaskOptions'         => __( 'Task Options', 'woocommerce' ),
			'setWCTaxRates'            => __( 'Tax Rates', 'woocommerce' ),
			'installPlugin'            => __( 'Plugins', 'woocommerce' ),
			'installTheme'             => __( 'Themes', 'woocommerce' ),
		);

		$settings = array();
		foreach ( $requested_steps as $step ) {
			$step_name = $step->meta->alias ?? $step->step;
			if ( isset( $settings_map[ $step_name ] )
			&& ! in_array( $settings_map[ $step_name ], $settings, true ) ) {
				$settings[] = $settings_map[ $step_name ];
			}
		}

		return $settings;
	}



	/**
	 * Get the schema for the queue endpoint.
	 *
	 * @return array
	 */
	public function get_queue_response_schema() {
		$schema = array(
			'$schema'    => 'http://json-schema.org/draft-04/schema#',
			'title'      => 'queue',
			'type'       => 'object',
			'properties' => array(
				'reference'             => array(
					'type' => 'string',
				),
				'process_nonce'         => array(
					'type' => 'string',
				),
				'settings_to_overwrite' => array(
					'type'  => 'array',
					'items' => array(
						'type' => 'string',
					),
				),
				'error_type'            => array(
					'type'    => 'string',
					'default' => null,
					'enum'    => array( 'upload', 'schema_validation', 'conflict' ),
				),
				'errors'                => array(
					'type'  => 'array',
					'items' => array(
						'type' => 'string',
					),
				),
			),
		);

		return $schema;
	}

	/**
	 * Get the schema for the process endpoint.
	 *
	 * @return array
	 */
	public function get_process_response_schema() {
		$schema = array(
			'$schema'    => 'http://json-schema.org/draft-04/schema#',
			'title'      => 'process',
			'type'       => 'object',
			'properties' => array(
				'processed' => array(
					'type' => 'boolean',
				),
				'message'   => array(
					'type' => 'string',
				),
				'data'      => array(
					'type'       => 'object',
					'properties' => array(
						'redirect' => array(
							'type' => 'string',
						),
						'result'   => array(
							'type' => 'array',
						),
					),
				),
			),
		);
		return $schema;
	}
}
