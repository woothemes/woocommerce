/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button, Tooltip } from '@wordpress/components';
import { chevronLeft } from '@wordpress/icons';

export type BackButtonProps = {
	title: string;
	tooltipText?: string;
	href: string;
};

export const BackButton = ( {
	tooltipText = __( 'WooCommerce Settings', 'woocommerce' ),
	href,
}: BackButtonProps ) => {
	const onGoBack = () => {
		window.location.href = href;
	};

	return (
		<Tooltip text={ tooltipText }>
			<Button
				className="woocommerce-settings-payments-offline__back-button"
				icon={ chevronLeft }
				onClick={ onGoBack }
			/>
		</Tooltip>
	);
};
