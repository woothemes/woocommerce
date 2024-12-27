/**
 * External dependencies
 */
import { __experimentalHeading as Heading } from '@wordpress/components';
import { createElement, useMemo, useState } from '@wordpress/element';
import { DataForm } from '@wordpress/dataviews';
import { sanitize } from 'dompurify';
/**
 * Internal dependencies
 */
import {
	generateInitialData,
	generateFields,
	generateForm,
} from '../../utils/dataforms-transformers';

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
	const [ data, setData ] = useState( () => generateInitialData( settings ) );
	const { fields, form } = useMemo(
		() => ( {
			fields: generateFields( settings ),
			form: generateForm( settings ),
		} ),
		[ settings ]
	);

	return (
		<fieldset className="woocommerce-settings-group">
			<div className="woocommerce-settings-group-title">
				<Heading level={ 4 }>{ title }</Heading>
				<legend dangerouslySetInnerHTML={ sanitizeHTML( desc ) } />
			</div>
			<div className="woocommerce-settings-group-content">
				<DataForm
					data={ data }
					fields={ fields }
					form={ form }
					onChange={ ( changedField ) => {
						setData( {
							...data,
							...changedField,
						} );
					} }
				/>
			</div>
		</fieldset>
	);
};
