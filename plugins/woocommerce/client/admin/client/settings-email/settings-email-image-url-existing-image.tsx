/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { selectImage, removeImage } from './settings-email-image-url-handlers';

type ExistingImageProps = {
	inputId: string;
	setImageUrl: ( imageUrl: string ) => void;
	imageUrl: string;
};

export const ExistingImage: React.FC< ExistingImageProps > = ( {
	inputId,
	imageUrl,
	setImageUrl,
} ) => {
	return (
		<div className="wc-settings-email-image-url-existing-image">
			<div>
				<button
					onClick={ () => selectImage( inputId, setImageUrl ) }
					className="wc-settings-email-image-url-select-image"
					type="button"
				>
					<img
						src={ imageUrl }
						className="wc-settings-email-image-url-image-preview"
						alt={ __( 'Image preview', 'woocommerce' ) }
					/>
				</button>
			</div>
			<Button
				variant="secondary"
				onClick={ () => selectImage( inputId, setImageUrl ) }
			>
				{ __( 'Change image', 'woocommerce' ) }
			</Button>{ ' ' }
			<Button
				variant="tertiary"
				onClick={ () => removeImage( inputId, setImageUrl ) }
			>
				{ __( 'Remove', 'woocommerce' ) }
			</Button>
		</div>
	);
};
