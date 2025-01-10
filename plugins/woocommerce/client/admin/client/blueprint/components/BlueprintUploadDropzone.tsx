/**
 * External dependencies
 */
import {
	DropZone,
	FormFileUpload,
	Notice,
	Spinner,
	Button,
	Icon,
} from '@wordpress/components';
import { closeSmall } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { useMachine } from '@xstate5/react';
import {
	assertEvent,
	assign,
	enqueueActions,
	fromPromise,
	setup,
} from 'xstate5';
import apiFetch from '@wordpress/api-fetch';
import { dispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import uploadIcon from './upload.svg';
import './style.scss';
import { OverwriteConfirmationModal } from '../settings/overwrite-confirmation-modal';

type BlueprintQueueResponse = {
	reference?: string;
	error_type?: string;
	errors?: string[];
	process_nonce?: string;
	settings_to_overwrite?: string[];
};

type BlueprintImportResponse = {
	// TODO: flesh out this type with more concrete values
	processed: boolean;
	message: string;
	data: {
		redirect: string;
		result: {
			is_success: boolean;
			messages: {
				step: string;
				type: string;
				message: string;
			}[];
		};
	};
};

const uploadBlueprint = async ( file: File ) => {
	const formData = new FormData();
	formData.append( 'file', file );

	if ( window?.wcSettings?.admin?.blueprint_upload_nonce ) {
		formData.append(
			'blueprint_upload_nonce',
			window.wcSettings.admin.blueprint_upload_nonce
		);
	} else {
		throw new Error( 'Blueprint upload nonce not found' ); // TODO: write a more user friendly error
	}

	const response = await apiFetch< BlueprintQueueResponse >( {
		path: 'wc-admin/blueprint/queue',
		method: 'POST',
		body: formData,
	} );

	if ( response.error_type ) {
		throw new Error( response.errors?.[ 0 ] ?? 'Unknown error' );
	}

	return response;
};

const importBlueprint = async ( process_nonce: string, reference: string ) => {
	const { processed, message } = await apiFetch< BlueprintImportResponse >( {
		path: '/wc-admin/blueprint/process',
		method: 'POST',
		data: {
			reference,
			process_nonce,
		},
	} );

	if ( ! processed ) {
		throw new Error( message );
	}

	dispatch( 'core/notices' ).createSuccessNotice(
		`${ __( 'Your Blueprint has been imported!', 'woocommerce' ) }`
	);
};

interface FileUploadContext {
	file?: File;
	process_nonce?: string;
	reference?: string;
	error?: Error;
	settings_to_overwrite?: string[];
}

type FileUploadEvents =
	| { type: 'UPLOAD'; file: File }
	| { type: 'SUCCESS' }
	| { type: 'ERROR'; error: Error }
	| { type: 'DISMISS' }
	| { type: 'DISMISS_OVERWRITE_MODAL' }
	| { type: 'IMPORT' }
	| { type: 'CONFIRM_IMPORT' }
	| { type: 'RETRY' }
	| {
			type: `xstate.done.actor.${ number }.fileUpload.uploading`;
			output: BlueprintQueueResponse;
	  }
	| {
			type: `xstate.done.actor.${ number }.fileUpload.importer`;
			output: BlueprintImportResponse;
	  }
	| {
			type: `xstate.error.actor.${ number }.fileUpload.uploading`;
			output: Error;
	  }
	| {
			type: `xstate.error.actor.${ number }.fileUpload.importer`;
			output: Error;
	  };

export const fileUploadMachine = setup( {
	types: {} as {
		context: FileUploadContext;
		events: FileUploadEvents;
	},
	actions: {
		reportSuccess: enqueueActions( ( { event, enqueue } ) => {
			assertEvent( event, 'xstate.done.actor.0.fileUpload.uploading' );
			enqueue.assign( {
				process_nonce: event.output.process_nonce,
				reference: event.output.reference,
				settings_to_overwrite: event.output.settings_to_overwrite,
			} );
		} ),
		reportError: ( { event } ) => {
			if ( event.type === 'ERROR' ) {
				return assign( {
					error: event.error,
				} );
			} else if (
				event.type === 'xstate.error.actor.0.fileUpload.uploading' ||
				event.type === 'xstate.error.actor.0.fileUpload.importer'
			) {
				return assign( {
					error: event.output,
				} );
			}
		},
	},
	actors: {
		uploader: fromPromise( ( { input }: { input: { file: File } } ) =>
			uploadBlueprint( input.file )
		),
		importer: fromPromise(
			( {
				input,
			}: {
				input: { process_nonce: string; reference: string };
			} ) => importBlueprint( input.process_nonce, input.reference )
		),
	},
	guards: {
		hasSettingsToOverwrite: ( { context } ) =>
			Boolean(
				context.settings_to_overwrite &&
					context.settings_to_overwrite.length > 0
			),
	},
} ).createMachine( {
	id: 'fileUpload',
	initial: 'idle',
	context: () => ( {} ),
	states: {
		idle: {
			on: {
				UPLOAD: {
					target: 'uploading',
					actions: assign( {
						file: ( { event } ) => event.file,
						error: () => undefined,
					} ),
				},
				ERROR: {
					target: 'error',
					actions: assign( {
						error: ( { event } ) => event?.error as Error,
					} ),
				},
			},
		},
		uploading: {
			invoke: {
				src: 'uploader',
				input: ( { event } ) => {
					assertEvent( event, 'UPLOAD' );
					return { file: event.file };
				},
				onDone: {
					target: 'success',
					actions: 'reportSuccess',
				},
				onError: {
					target: 'error',
					actions: assign( {
						error: ( { event } ) => event?.error as Error,
					} ),
				},
			},
		},
		error: {
			entry: 'reportError',
			always: {
				target: 'idle',
			},
		},
		success: {
			on: {
				DISMISS: {
					actions: assign( {
						error: () => undefined,
						file: () => undefined,
					} ),
					target: 'idle',
				},
				IMPORT: [
					{
						target: 'overrideModal',
					},
				],
			},
		},
		overrideModal: {
			on: {
				CONFIRM_IMPORT: {
					target: 'importing',
				},
				DISMISS_OVERWRITE_MODAL: {
					target: 'success',
				},
			},
		},
		importing: {
			invoke: {
				src: 'importer',
				input: ( { context } ) => {
					return {
						process_nonce: context.process_nonce!,
						reference: context.reference!,
					};
				},
				onDone: {
					target: 'importSuccess',
				},
				onError: {
					target: 'error',
				},
			},
		},
		importSuccess: {},
	},
} );

export const BlueprintUploadDropzone = () => {
	const [ state, send ] = useMachine( fileUploadMachine );

	return (
		<>
			{ state.context.error && (
				<div className="blueprint-upload-dropzone-error">
					<Notice status="error" isDismissible={ false }>
						{ state.context.error.message }
					</Notice>
				</div>
			) }
			{ ( state.matches( 'idle' ) || state.matches( 'error' ) ) && (
				<div className="blueprint-upload-form">
					<FormFileUpload
						className="blueprint-upload-field"
						accept="application/json, application/zip"
						multiple={ false }
						onChange={ ( evt ) => {
							const file = evt.target.files?.[ 0 ]; // since multiple is disabled it has to be in 0
							if ( file ) {
								send( { type: 'UPLOAD', file } );
							}
						} }
					>
						<div className="blueprint-upload-dropzone">
							<img
								className="blueprint-upload-dropzone-icon"
								src={ uploadIcon }
								alt="Upload"
							/>
							<p className="blueprint-upload-dropzone-text">
								{ __(
									'Upload a .zip or .json file',
									'woocommerce'
								) }
							</p>
							<DropZone
								onFilesDrop={ ( files ) => {
									if ( files.length > 1 ) {
										send( {
											type: 'ERROR',
											error: new Error(
												'Only one file can be uploaded at a time'
											),
										} );
									}
									send( {
										type: 'UPLOAD',
										file: files[ 0 ],
									} );
								} }
							></DropZone>
						</div>
					</FormFileUpload>
				</div>
			) }
			{ state.matches( 'uploading' ) && (
				<div className="blueprint-upload-form">
					<div className="blueprint-upload-dropzone-uploading">
						<Spinner className="blueprint-upload-dropzone-spinner" />
						<p className="blueprint-upload-dropzone-text">
							{ __( 'Uploading your file…', 'woocommerce' ) }
						</p>
					</div>
				</div>
			) }
			{ ( state.matches( 'success' ) ||
				state.matches( 'importSuccess' ) ||
				state.matches( 'overrideModal' ) ) && (
				<div className="blueprint-upload-dropzone-success">
					<p className="blueprint-upload-dropzone-text">
						<span className="blueprint-upload-dropzone-text-file-name">
							{ state.context.file?.name }
						</span>
						<Button
							icon={ <Icon icon={ closeSmall } /> }
							onClick={ () => send( { type: 'DISMISS' } ) }
						/>
					</p>
				</div>
			) }
			{ ( state.matches( 'success' ) ||
				state.matches( 'overrideModal' ) ) && (
				<Button
					className="woocommerce-blueprint-import-button"
					variant="primary"
					onClick={ () => {
						send( { type: 'IMPORT' } );
					} }
				>
					{ __( 'Import', 'woocommerce' ) }
				</Button>
			) }
			{ ( state.matches( 'importing' ) ||
				state.matches( 'overrideModal' ) ) && (
				<OverwriteConfirmationModal
					isOpen={ true }
					isImporting={ state.matches( 'importing' ) }
					onClose={ () =>
						send( { type: 'DISMISS_OVERWRITE_MODAL' } )
					}
					onConfirm={ () => send( { type: 'CONFIRM_IMPORT' } ) }
					overwrittenItems={
						state.context.settings_to_overwrite || []
					}
				/>
			) }
		</>
	);
};
