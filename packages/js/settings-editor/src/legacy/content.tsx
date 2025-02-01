/**
 * External dependencies
 */
import { createElement, Fragment } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { DataForm } from '@wordpress/dataviews';

/**
 * Internal dependencies
 */
import { useSettingsForm } from '../hooks/use-settings-form';
import { CustomView } from '../components/custom-view';

const Form = ( { settings }: { settings: SettingsField[] } ) => {
	const { data, fields, form, updateField } = useSettingsForm( settings );

	return (
		<form id="mainform">
			<div className="woocommerce-settings-content">
				<DataForm
					fields={ fields }
					form={ form }
					data={ data }
					onChange={ updateField }
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
	settingsData,
}: {
	settingsPage: SettingsPage;
	activeSection: string;
	settingsData: SettingsData;
} ) => {
	const section = settingsPage.sections[ activeSection ];

	if ( ! section ) {
		return null;
	}

	return (
		<>
			<CustomView html={ settingsData.start.content } />
			<Form settings={ section.settings } />
		</>
	);
};
