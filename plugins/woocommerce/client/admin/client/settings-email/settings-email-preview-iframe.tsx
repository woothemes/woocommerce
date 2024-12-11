/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

type EmailPreviewIframeProps = {
	src: string;
	setIsLoading: ( isLoading: boolean ) => void;
};
export const EmailPreviewIframe: React.FC< EmailPreviewIframeProps > = ( {
	src,
	setIsLoading,
} ) => {
	return (
		<iframe
			src={ src }
			title={ __( 'Email preview frame', 'woocommerce' ) }
			onLoad={ () => setIsLoading( false ) }
		/>
	);
};
