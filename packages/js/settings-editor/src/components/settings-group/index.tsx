/**
 * External dependencies
 */
import { __experimentalHeading as Heading } from '@wordpress/components';
import { createElement } from '@wordpress/element';
import { DataForm } from '@wordpress/dataviews';
import { sanitize } from 'dompurify';
/**
 * Internal dependencies
 */
import { useSettingsForm } from '../../hooks/use-settings-form';

const ALLOWED_TAGS = [ 'a', 'b', 'em', 'i', 'strong', 'p', 'br' ];
const ALLOWED_ATTR = [ 'target', 'href', 'rel', 'name', 'download' ];
const sanitizeHTML = ( html: string ) => ( {
	__html: sanitize( html, { ALLOWED_TAGS, ALLOWED_ATTR } ),
} );

export const SettingsGroup = ( {
	title,
	desc,
	settings,
}: GroupSettingsField ) => {
	const { data, fields, form, updateField } = useSettingsForm( settings );

	return (
		<fieldset className="woocommerce-settings-group">
			<div className="woocommerce-settings-group-title">
				<Heading level={ 4 }>{ title }</Heading>
				{ desc && (
					<legend dangerouslySetInnerHTML={ sanitizeHTML( desc ) } />
				) }
			</div>
			<div className="woocommerce-settings-group-content">
				<DataForm
					data={ data }
					fields={ fields }
					form={ form }
					onChange={ updateField }
				/>
			</div>
		</fieldset>
	);
};
