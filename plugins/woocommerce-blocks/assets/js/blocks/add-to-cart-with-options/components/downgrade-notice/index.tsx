/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Notice, Button } from '@wordpress/components';
import { createInterpolateElement } from '@wordpress/element';
import { recordEvent } from '@woocommerce/tracks';
import { createBlock } from '@wordpress/blocks';
import { dispatch, select } from '@wordpress/data';
import { findBlock } from '@woocommerce/utils';

/**
 * Internal dependencies
 */
import metadata from '../../block.json';

const downgradeToClassicAddtoCartWithOptions = () => {
	const blocks = select( 'core/block-editor' ).getBlocks();
	const foundBlock = findBlock( {
		blocks,
		findCondition: ( block ) => block.name === metadata.name,
	} );

	if ( ! foundBlock ) {
		return;
	}

	const foundQuantitySelectorBlock = findBlock( {
		blocks,
		findCondition: ( block ) =>
			block.name ===
			'woocommerce/add-to-cart-with-options-quantity-selector',
	} );

	const newBlock = createBlock( 'woocommerce/add-to-cart-form', {
		quantitySelectorStyle:
			foundQuantitySelectorBlock?.attributes?.quantitySelectorStyle ||
			'input',
	} );

	dispatch( 'core/block-editor' ).replaceBlock(
		foundBlock.clientId,
		newBlock
	);
};

export const DowngradeNotice = () => {
	const notice = __(
		'Switch back to the classic Add to Cart with Options block.',
		'woocommerce'
	);

	const buttonLabel = __(
		'Switch back to the classic Add to Cart with Options block.',
		'woocommerce'
	);

	const handleClick = () => {
		downgradeToClassicAddtoCartWithOptions();
		recordEvent( 'blocks_add_to_cart_with_options_migration', {
			transform_to: 'legacy',
		} );
	};

	return (
		<Notice isDismissible={ false }>
			<>{ notice }</>
			<br />
			<br />
			<Button variant="link" onClick={ handleClick }>
				{ buttonLabel }
			</Button>
		</Notice>
	);
};
