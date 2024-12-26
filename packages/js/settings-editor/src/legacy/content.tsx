/**
 * External dependencies
 */
import { createElement, useMemo, useState } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { DataForm } from '@wordpress/dataviews';

/**
 * Internal dependencies
 */
import {
	generateInitialData,
	generateFields,
	generateForm,
} from '../utils/transformers';

const Form = ( { settings }: { settings: SettingsField[] } ) => {
	const [ data, setData ] = useState( () => generateInitialData( settings ) );
	const { fields, form } = useMemo(
		() => ( {
			fields: generateFields( settings ),
			form: generateForm( settings ),
		} ),
		[ settings ]
	);
	return (
		<form id="mainform">
			<div className="woocommerce-settings-content">
				<DataForm
					fields={ fields }
					form={ form }
					data={ data }
					onChange={ setData }
				/>
			</div>
			<div className="woocommerce-settings-content-footer">
				<Button variant="primary">
					{ __( 'Save', 'woocommerce' ) }
				</Button>
			</div>
		</form>
	);
};

export const LegacyContent = ( {
	settingsPage,
	activeSection,
}: {
	settingsPage: SettingsPage;
	activeSection: string;
} ) => {
	const section = settingsPage.sections[ activeSection ];

	if ( ! section ) {
		return null;
	}

	return <Form settings={ section.settings } />;
};
