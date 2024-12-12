/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
// @ts-expect-error missing types.
import { __experimentalHeading as Heading } from '@wordpress/components';

export const SettingsGroup = ( { group }: { group: SettingsGroup } ) => {
	return (
		<div className="woocommerce-settings-group">
			<div className="woocommerce-settings-group-title">
				<Heading level={ 4 }>{ group.title }</Heading>
				<p>{ group.desc }</p>
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
