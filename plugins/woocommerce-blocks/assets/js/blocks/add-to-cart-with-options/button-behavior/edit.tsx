/**
 * External dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

const AddToCartWithOptionsButtonBehaviorEdit = () => {
	const blockProps = useBlockProps( {
		className: `wc-block-add-to-cart-with-options__button-behavior`,
	} );

	return <div { ...blockProps }>Hellow world</div>;
};

export default AddToCartWithOptionsButtonBehaviorEdit;
