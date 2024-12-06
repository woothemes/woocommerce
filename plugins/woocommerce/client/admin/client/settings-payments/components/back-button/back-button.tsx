/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button, Tooltip } from '@wordpress/components';
import { chevronLeft } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import './back-button.scss';

interface BackButtonProps {
	/**
	 * The title of the back button.
	 */
	title: string;
	/**
	 * The URL to navigate to when the back button is clicked.
	 */
	href: string;
	/**
	 * The tooltip text of the back button.
	 */
	tooltipText?: string;
}

export const BackButton = ( {
	href,
	tooltipText = __( 'WooCommerce Settings', 'woocommerce' ),
}: BackButtonProps ) => {
	const onGoBack = () => {
		window.location.href = href;
	};

	return (
		<Tooltip text={ tooltipText }>
			<Button
				className="woocommerce-settings-payments__back-button"
				icon={ chevronLeft }
				onClick={ onGoBack }
			/>
		</Tooltip>
	);
};
