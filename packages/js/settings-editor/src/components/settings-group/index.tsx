/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
// @ts-expect-error missing types.
import { __experimentalHeading as Heading } from '@wordpress/components';
import { sanitize } from 'dompurify';

const ALLOWED_TAGS = [ 'a', 'b', 'em', 'i', 'strong', 'p', 'br' ];
const ALLOWED_ATTR = [ 'target', 'href', 'rel', 'name', 'download' ];

export const SettingsGroup = ( { group }: { group: SettingsGroup } ) => {
	const sanitizeHTML = ( html: string ) => {
		return {
			__html: sanitize( html, { ALLOWED_TAGS, ALLOWED_ATTR } ),
		};
	};
	return (
		<div className="woocommerce-settings-group">
			<div className="woocommerce-settings-group-title">
				<Heading level={ 4 }>{ group.title }</Heading>
				<p dangerouslySetInnerHTML={ sanitizeHTML( group.desc ) } />
			</div>
			<div className="woocommerce-settings-group-content">
				{ group.settings.map( ( setting ) => (
					<div key={ setting.id }>
						<Heading level={ 5 }>{ setting.title }</Heading>
						<p>{ setting.type }</p>
					</div>
				) ) }
			</div>
		</div>
	);
};
