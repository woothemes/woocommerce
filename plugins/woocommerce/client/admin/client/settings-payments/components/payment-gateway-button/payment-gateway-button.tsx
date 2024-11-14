/**
 * External dependencies
 */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';

/**
 * Internal dependencies
 */

export const PaymentGatewayButton = ( {
	id,
	enabled,
	needs_setup,
	settings_url,
	togglePlugin,
	text_settings = __( 'Manage', 'woocommerce' ),
	text_enable = __( 'Enable', 'woocommerce' ),
	text_needs_setup = __( 'Continue setup', 'woocommerce' ),
}: {
	id: string;
	enabled: boolean;
	needs_setup?: boolean;
	settings_url: string;
	togglePlugin: ( id: string, settings_url: string ) => void;
	text_settings?: string;
	text_enable?: string;
	text_needs_setup?: string;
} ) => {
	const [ isLoading, setIsLoading ] = useState( false );

	const onClick = ( e: React.MouseEvent ) => {
		if ( ! enabled ) {
			e.preventDefault();
			setIsLoading( true );
			togglePlugin( id, settings_url );
			setIsLoading( false );
		}
	};

	const determineButtonText = () => {
		if ( needs_setup ) {
			return text_needs_setup;
		}

		return enabled ? text_settings : text_enable;
	};

	return (
		<div className="woocommerce-list__item-after__actions">
			<Button
				variant={ enabled ? 'secondary' : 'primary' }
				isBusy={ isLoading }
				disabled={ isLoading }
				onClick={ onClick }
				href={ settings_url }
			>
				{ determineButtonText() }
			</Button>
		</div>
	);
};
