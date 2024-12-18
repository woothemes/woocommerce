/**
 * External dependencies
 */
import {
	createSlotFill,
	Button,
	Notice,
	ToggleControl,
} from '@wordpress/components';
import { getAdminLink } from '@woocommerce/settings';
import apiFetch from '@wordpress/api-fetch';
import {
	useState,
	createElement,
	useEffect,
	createInterpolateElement,
} from '@wordpress/element';
import { registerPlugin } from '@wordpress/plugins';
import { __ } from '@wordpress/i18n';
import { CollapsibleContent } from '@woocommerce/components';
/**
 * Internal dependencies
 */
import { SETTINGS_SLOT_FILL_CONSTANT } from '../../settings/settings-slots';
import './style.scss';

const { Fill } = createSlotFill( SETTINGS_SLOT_FILL_CONSTANT );

const Blueprint = () => {
	const [ exportEnabled, setExportEnabled ] = useState( true );
	const [ exportAsZip, setExportAsZip ] = useState( false );
	const [ error, setError ] = useState( null );

	const blueprintStepGroups =
		window.wcSettings?.admin?.blueprint_step_groups || [];

	const [ checkedState, setCheckedState ] = useState(
		blueprintStepGroups.reduce( ( acc, group ) => {
			acc[ group.id ] = group.items.reduce( ( groupAcc, item ) => {
				groupAcc[ item.id ] = true; // Default all to true
				return groupAcc;
			}, {} );
			return acc;
		}, {} )
	);

	const exportBlueprint = async ( _steps ) => {
		setExportEnabled( false );

		const linkContainer = document.getElementById(
			'download-link-container'
		);
		linkContainer.innerHTML = '';

		try {
			const response = await apiFetch( {
				path: '/blueprint/export',
				method: 'POST',
				data: {
					steps: _steps,
					export_as_zip: exportAsZip,
				},
			} );
			const link = document.createElement( 'a' );
			link.innerHTML =
				'Click here in case download does not start automatically';

			let url = null;

			if ( response.type === 'zip' ) {
				link.href = response.data;
				link.target = '_blank';
			} else {
				// Create a link element and trigger the download
				url = window.URL.createObjectURL(
					new Blob( [ JSON.stringify( response.data, null, 2 ) ] )
				);
				link.href = url;
				link.setAttribute( 'download', 'woo-blueprint.json' );
			}

			linkContainer.appendChild( link );

			link.click();
			if ( url ) {
				window.URL.revokeObjectURL( url );
			}
		} catch ( e ) {
			setError( e.message );
		}

		setExportEnabled( true );
	};

	// Handle checkbox change
	const handleOnChange = ( groupId, itemId ) => {
		setCheckedState( ( prevState ) => ( {
			...prevState,
			[ groupId ]: {
				...prevState[ groupId ],
				[ itemId ]: ! prevState[ groupId ][ itemId ], // Toggle the checkbox state
			},
		} ) );
	};

	useEffect( () => {
		const saveButton = document.getElementsByClassName(
			'woocommerce-save-button'
		)[ 0 ];
		if ( saveButton ) {
			saveButton.style.display = 'none';
		}
	} );

	return (
		<div className="blueprint-settings-slotfill">
			{ error && (
				<Notice
					status="error"
					onRemove={ () => {
						setError( null );
					} }
					isDismissible
				>
					{ error }
				</Notice>
			) }
			<p className="blueprint-settings-slotfill-description">
				{ __(
					'Blueprints are setup files that contain all the installation instructions. including plugins, themes and settings. Ease the setup process, allow teams to apply each others’ changes and much more.',
					'woocommerce'
				) }
			</p>
			<p>
				<strong>
					Please{ ' ' }
					<a
						href="https://automattic.survey.fm/woocommerce-blueprint-survey"
						target="_blank"
						rel="noreferrer"
					>
						complete the survey
					</a>{ ' ' }
					to help shape the direction of this feature!
				</strong>
			</p>
			<h3>Import</h3>
			<p>
				You can import the schema on the{ ' ' }
				<a
					href={ getAdminLink(
						'admin.php?page=wc-admin&path=%2Fsetup-wizard&step=intro-builder'
					) }
				>
					builder setup page
				</a>
				{ ', or use the import WP CLI command ' }
				<br />
				<code>wp wc blueprint import path-to-woo-blueprint.json</code>.
			</p>
			<p></p>
			<h3>{ __( 'Export Blueprint', 'woocommerce' ) }</h3>
			<p className="export-intro">
				{ createInterpolateElement(
					__(
						'Export your blueprint schema. Select the options you want to export, then click on "Export". Want to know more? <docLink/> ',
						'woocommerce'
					),
					{
						docLink: (
							<a href="#tba">
								{ __(
									'Check our documentation',
									'woocommerce'
								) }
							</a>
						),
					}
				) }
			</p>
			{ blueprintStepGroups.map( ( group, index ) => (
				<CollapsibleContent
					key={ index }
					toggleText={ group.label }
					initialCollapsed={ index > 0 }
					hintText={ group.description }
				>
					{ group.items.map( ( step ) => (
						<ToggleControl
							key={ step.id }
							label={ step.label }
							checked={ checkedState[ group.id ][ step.id ] }
							onChange={ () => {
								handleOnChange( group.id, step.id );
							} }
							help={ step.description }
						/>
					) ) }
				</CollapsibleContent>
			) ) }

			<div id="download-link-container"></div>
			<h4>{ __( 'Options', 'woocommerce' ) }</h4>
			<div>
				<input
					type="checkbox"
					id="export-as-zip"
					name={ 'export-as-zip' }
					value={ 'yes' }
					checked={ exportAsZip }
					onChange={ () => {
						setExportAsZip( ! exportAsZip );
					} }
				/>
				<label htmlFor="export-as-zip">
					{ __( 'Export as a zip (Experimental)', 'woocommerce' ) }
				</label>
			</div>
			<br></br>
			<Button
				isPrimary
				onClick={ () => {
					const selectedSteps = Object.entries( checkedState ).reduce(
						( acc, [ groupId, groupState ] ) => {
							acc[ groupId ] = Object.keys( groupState ).filter(
								( itemId ) => groupState[ itemId ]
							);
							return acc;
						},
						{}
					);
					exportBlueprint( selectedSteps );
				} }
				disabled={ ! exportEnabled }
				isBusy={ ! exportEnabled }
			>
				{ __( 'Export', 'woocommerce' ) }
			</Button>
		</div>
	);
};

const BlueprintSlotfill = () => {
	return (
		<Fill>
			<Blueprint />
		</Fill>
	);
};

export const registerBlueprintSlotfill = () => {
	registerPlugin( 'woocommerce-admin-blueprint-settings-slotfill', {
		scope: 'woocommerce-blueprint-settings',
		render: BlueprintSlotfill,
	} );
};
