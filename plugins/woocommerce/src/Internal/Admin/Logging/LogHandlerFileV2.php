<?php

namespace Automattic\WooCommerce\Internal\Admin\Logging;

use Automattic\Jetpack\Constants;
use Automattic\WooCommerce\Internal\Admin\Logging\FileV2\{ File, FileController };
use WC_Log_Handler;

/**
 * LogHandlerFileV2 class.
 */
class LogHandlerFileV2 extends WC_Log_Handler {
	/**
	 * Instance of the FileController class.
	 *
	 * @var FileController
	 */
	private $file_controller;

	/**
	 * Instance of the Settings class.
	 *
	 * @var Settings
	 */
	private $settings;

	/** @var int */
	private static $max_normalize_depth = 9;

	/** @var int */
	private static $max_normalize_item_count = 1000;

	/**
	 * LogHandlerFileV2 class.
	 */
	public function __construct() {
		$this->file_controller = wc_get_container()->get( FileController::class );
		$this->settings        = wc_get_container()->get( Settings::class );
	}

	/**
	 * Handle a log entry.
	 *
	 * @param int    $timestamp Log timestamp.
	 * @param string $level     emergency|alert|critical|error|warning|notice|info|debug.
	 * @param string $message   Log message.
	 * @param array  $context   {
	 *     Optional. Additional information for log handlers. Any data can be added here, but there are some array
	 *     keys that have special behavior.
	 *
	 *     @type string $source    Determines which log file to write to. Must be at least 3 characters in length.
	 *     @type bool   $backtrace True to include a backtrace that shows where the logging function got called.
	 * }
	 *
	 * @return bool False if value was not handled and true if value was handled.
	 */
	public function handle( $timestamp, $level, $message, $context ) {
		if ( isset( $context['source'] ) && is_string( $context['source'] ) && strlen( $context['source'] ) >= 3 ) {
			$source = sanitize_title( trim( $context['source'] ) );
		} else {
			$source = $this->determine_source();
		}

		$entry = static::format_entry( $timestamp, $level, $message, $context );

		$written = $this->file_controller->write_to_file( $source, $entry, $timestamp );

		if ( $written ) {
			$this->file_controller->invalidate_cache();
		}

		return $written;
	}

	/**
	 * Builds a log entry text from level, timestamp, and message.
	 *
	 * @param int    $timestamp Log timestamp.
	 * @param string $level     emergency|alert|critical|error|warning|notice|info|debug.
	 * @param string $message   Log message.
	 * @param array  $context   Additional information for log handlers.
	 *
	 * @return string Formatted log entry.
	 */
	protected static function format_entry( $timestamp, $level, $message, $context ) {
		$time_string  = static::format_time( $timestamp );
		$level_string = strtoupper( $level );

		if ( isset( $context['backtrace'] ) && true === filter_var( $context['backtrace'], FILTER_VALIDATE_BOOLEAN ) ) {
			$context['backtrace'] = static::get_backtrace();
		}

		$context_for_entry = $context;
		unset( $context_for_entry['source'] );

		if ( ! empty( $context_for_entry ) ) {
			$formatted_context = wp_json_encode( self::normalize( $context_for_entry ), JSON_UNESCAPED_UNICODE );
			$message          .= stripslashes( " CONTEXT: $formatted_context" );
		}

		$entry = "$time_string $level_string $message";

		// phpcs:disable WooCommerce.Commenting.CommentHooks.MissingSinceComment
		/** This filter is documented in includes/abstracts/abstract-wc-log-handler.php */
		return apply_filters(
			'woocommerce_format_log_entry',
			$entry,
			array(
				'timestamp' => $timestamp,
				'level'     => $level,
				'message'   => $message,
				'context'   => $context,
			)
		);
		// phpcs:enable WooCommerce.Commenting.CommentHooks.MissingSinceComment
	}

	/**
	 * @param mixed $data
	 *
	 * @return null|scalar|array<mixed[]|scalar|null>
	 */
	private static function normalize( $data, int $depth = 0 ) {
		if ( $depth > self::$max_normalize_depth ) {
			return 'Over ' . self::$max_normalize_depth . ' levels deep, aborting normalization';
		}

		if ( null === $data || \is_scalar( $data ) ) {
			if ( \is_float( $data ) ) {
				if ( is_infinite( $data ) ) {
					return ( $data > 0 ? '' : '-' ) . 'INF';
				}
				if ( is_nan( $data ) ) {
					return 'NaN';
				}
			}

			return $data;
		}

		if ( \is_array( $data ) ) {
			$normalized = array();

			$count = 1;
			foreach ( $data as $key => $value ) {
				if ( $count++ > self::$max_normalize_item_count ) {
					$normalized['...'] = 'Over ' . self::$max_normalize_item_count . ' items (' . \count( $data ) . ' total), aborting normalization';
					break;
				}

				$normalized[ $key ] = self::normalize( $value, $depth + 1 );
			}

			return $normalized;
		}

		if ( $data instanceof \DateTimeInterface ) {
			return $data->format( 'Y-m-d\TH:i:sP' );
		}

		if ( \is_object( $data ) ) {
			if ( $data instanceof \Throwable ) {
				return self::normalize_exception( $data, $depth );
			}

			if ( $data instanceof \JsonSerializable ) {
				/** @var null|scalar|array<mixed[]|scalar|null> $value */
				$value = $data->jsonSerialize();
			} elseif ( \get_class( $data ) === '__PHP_Incomplete_Class' ) {
				$accessor = new \ArrayObject( $data );
				$value    = (string) $accessor['__PHP_Incomplete_Class_Name'];
			} elseif ( method_exists( $data, '__toString' ) ) {
				try {
					/** @var string $value */
					$value = $data->__toString();
				} catch ( \Throwable $t ) {
					// if the toString method is failing, use the default behavior
					/** @var null|scalar|array<mixed[]|scalar|null> $value */
					$value = json_decode( wp_json_encode( $data, JSON_UNESCAPED_UNICODE ), true );
				}
			} else {
				// the rest is normalized by json encoding and decoding it
				/** @var null|scalar|array<mixed[]|scalar|null> $value */
				$value = json_decode( wp_json_encode( $data, JSON_UNESCAPED_UNICODE ), true );
			}

			return array( get_class( $data ) => $value );
		}

		if ( \is_resource( $data ) ) {
			return sprintf( '[resource(%s)]', get_resource_type( $data ) );
		}

		return '[unknown(' . \gettype( $data ) . ')]';
	}

	/**
	 * @return array<array-key, string|int|array<string|int|array<string>>>
	 */
	private static function normalize_exception( \Throwable $e, int $depth = 0 ) {
		if ( $depth > self::$max_normalize_depth ) {
			return array( 'Over ' . self::$max_normalize_depth . ' levels deep, aborting normalization' );
		}

		if ( $e instanceof \JsonSerializable ) {
			return (array) $e->jsonSerialize();
		}

		$file = preg_replace( '{^' . preg_quote( ABSPATH ) . '}', '', $e->getFile() );

		$data = array(
			'class'   => get_class( $e ),
			'message' => $e->getMessage(),
			'code'    => (int) $e->getCode(),
			'file'    => $file . ':' . $e->getLine(),
		);

		if ( $e instanceof \SoapFault ) {
			if ( isset( $e->faultcode ) ) {
				$data['faultcode'] = $e->faultcode;
			}

			if ( isset( $e->faultactor ) ) {
				$data['faultactor'] = $e->faultactor;
			}

			if ( isset( $e->detail ) ) {
				if ( \is_string( $e->detail ) ) {
					$data['detail'] = $e->detail;
				} elseif ( \is_object( $e->detail ) || \is_array( $e->detail ) ) {
					$data['detail'] = wp_json_encode( $e->detail, JSON_UNESCAPED_UNICODE );
				}
			}
		}

		$trace = $e->getTrace();
		foreach ( $trace as $frame ) {
			if ( isset( $frame['file'], $frame['line'] ) ) {
				$file            = preg_replace( '{^' . preg_quote( ABSPATH ) . '}', '', $frame['file'] );
				$data['trace'][] = $file . ':' . $frame['line'];
			}
		}

		if ( ( $previous = $e->getPrevious() ) instanceof \Throwable ) {
			$data['previous'] = self::normalize_exception( $previous, $depth + 1 );
		}

		return $data;
	}

	/**
	 * Figures out a source string to use for a log entry based on where the log method was called from.
	 *
	 * @return string
	 */
	protected function determine_source(): string {
		$source_roots = array(
			'mu-plugin' => trailingslashit( Constants::get_constant( 'WPMU_PLUGIN_DIR' ) ),
			'plugin'    => trailingslashit( Constants::get_constant( 'WP_PLUGIN_DIR' ) ),
			'theme'     => trailingslashit( get_theme_root() ),
		);

		$source    = '';
		$backtrace = static::get_backtrace();

		foreach ( $backtrace as $frame ) {
			if ( ! isset( $frame['file'] ) ) {
				continue;
			}

			foreach ( $source_roots as $type => $path ) {
				if ( 0 === strpos( $frame['file'], $path ) ) {
					$relative_path = trim( substr( $frame['file'], strlen( $path ) ), DIRECTORY_SEPARATOR );

					if ( 'mu-plugin' === $type ) {
						$info = pathinfo( $relative_path );

						if ( '.' === $info['dirname'] ) {
							$source = "$type-" . $info['filename'];
						} else {
							$source = "$type-" . $info['dirname'];
						}

						break 2;
					}

					$segments = explode( DIRECTORY_SEPARATOR, $relative_path );
					if ( is_array( $segments ) ) {
						$source = "$type-" . reset( $segments );
					}

					break 2;
				}
			}
		}

		if ( ! $source ) {
			$source = 'log';
		}

		return sanitize_title( $source );
	}

	/**
	 * Delete all logs from a specific source.
	 *
	 * @param string $source The source of the log entries.
	 *
	 * @return int The number of files that were deleted.
	 */
	public function clear( string $source ): int {
		$source = File::sanitize_source( $source );

		$files = $this->file_controller->get_files(
			array(
				'source' => $source,
			)
		);

		if ( is_wp_error( $files ) || count( $files ) < 1 ) {
			return 0;
		}

		$file_ids = array_map(
			fn( $file ) => $file->get_file_id(),
			$files
		);

		$deleted = $this->file_controller->delete_files( $file_ids );

		if ( $deleted > 0 ) {
			$this->handle(
				time(),
				'info',
				sprintf(
					esc_html(
						// translators: %1$s is a number of log files, %2$s is a slug-style name for a file.
						_n(
							'%1$s log file from source %2$s was deleted.',
							'%1$s log files from source %2$s were deleted.',
							$deleted,
							'woocommerce'
						)
					),
					number_format_i18n( $deleted ),
					sprintf(
						'<code>%s</code>',
						esc_html( $source )
					)
				),
				array(
					'source'    => 'wc_logger',
					'backtrace' => true,
				)
			);
		}

		return $deleted;
	}

	/**
	 * Delete all logs older than a specified timestamp.
	 *
	 * @param int $timestamp All files created before this timestamp will be deleted.
	 *
	 * @return int The number of files that were deleted.
	 */
	public function delete_logs_before_timestamp( int $timestamp = 0 ): int {
		if ( ! $timestamp ) {
			return 0;
		}

		$files = $this->file_controller->get_files(
			array(
				'date_filter' => 'created',
				'date_start'  => 1,
				'date_end'    => $timestamp,
			)
		);

		if ( is_wp_error( $files ) ) {
			return 0;
		}

		$files = array_filter(
			$files,
			function ( $file ) use ( $timestamp ) {
				/**
				 * Allows preventing an expired log file from being deleted.
				 *
				 * @param bool $delete    True to delete the file.
				 * @param File $file      The log file object.
				 * @param int  $timestamp The expiration threshold.
				 *
				 * @since 8.7.0
				 */
				$delete = apply_filters( 'woocommerce_logger_delete_expired_file', true, $file, $timestamp );

				return boolval( $delete );
			}
		);

		if ( count( $files ) < 1 ) {
			return 0;
		}

		$file_ids = array_map(
			fn( $file ) => $file->get_file_id(),
			$files
		);

		$deleted        = $this->file_controller->delete_files( $file_ids );
		$retention_days = $this->settings->get_retention_period();

		if ( $deleted > 0 ) {
			$this->handle(
				time(),
				'info',
				sprintf(
					esc_html(
						// translators: %s is a number of log files.
						_n(
							'%s expired log file was deleted.',
							'%s expired log files were deleted.',
							$deleted,
							'woocommerce'
						)
					),
					number_format_i18n( $deleted )
				),
				array(
					'source' => 'wc_logger',
				)
			);
		}

		return $deleted;
	}
}
