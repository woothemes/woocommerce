/**
 * External dependencies
 */
/* eslint-disable @woocommerce/dependency-group */
import { createElement } from '@wordpress/element';
import { __experimentalHeading as Heading } from '@wordpress/components';
import { sanitize } from 'dompurify';
/* eslint-enable @woocommerce/dependency-group */

/**
 * Internal dependencies
 */
import { SettingsItem } from '../settings-item';

const ALLOWED_TAGS = [ 'a', 'b', 'em', 'i', 'strong', 'p', 'br' ];
const ALLOWED_ATTR = [ 'target', 'href', 'rel', 'name', 'download' ];

export const SettingsGroup = ( { group }: { group: GroupSettingsField } ) => {
	const sanitizeHTML = ( html: string ) => {
		return {
			__html: sanitize( html, { ALLOWED_TAGS, ALLOWED_ATTR } ),
		};
	};
	return (
		<fieldset className="woocommerce-settings-group">
			<div className="woocommerce-settings-group-title">
				<Heading level={ 4 }>{ group.title }</Heading>
				<legend
					dangerouslySetInnerHTML={ sanitizeHTML( group.desc ) }
				/>
			</div>
			<div className="woocommerce-settings-group-content">
				{ group.settings.map( ( setting, index ) => {
					return (
						<SettingsItem
							key={ `${ setting.type }-${ index }-group` }
							setting={ setting }
						/>
					);
				} ) }
			</div>
		</fieldset>
	);
};
