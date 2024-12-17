/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Notice, Button } from '@wordpress/components';
import { createInterpolateElement } from '@wordpress/element';
import { recordEvent } from '@woocommerce/tracks';
import { dispatch, select } from '@wordpress/data';
import { findBlock } from '@woocommerce/utils';
import {
	createBlock,
	// @ts-expect-error Type definitions for this function are missing in Gutenberg
	createBlocksFromInnerBlocksTemplate,
} from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import metadata from '../../block.json';
import getInnerBlocksTemplate from '../../../../add-to-cart-with-options/utils/get-inner-blocks-template';

const upgradeToBlockifiedAddtoCartWithOptions = async () => {
	const blocks = select( 'core/block-editor' ).getBlocks();
	const foundBlock = findBlock( {
		blocks,
		findCondition: ( block ) => block.name === metadata.name,
	} );

	if ( ! foundBlock ) {
		return;
	}

	const newBlock = createBlock(
		'woocommerce/add-to-cart-with-options',
		{
			isDescendentOfSingleProductBlock:
				foundBlock.attributes.isDescendentOfSingleProductBlock,
		},
		createBlocksFromInnerBlocksTemplate(
			getInnerBlocksTemplate(
				foundBlock.attributes.quantitySelectorStyle
			)
		)
	);
	dispatch( 'core/block-editor' ).replaceBlock(
		foundBlock.clientId,
		newBlock
	);
};

export const UpgradeNotice = () => {
	const notice = createInterpolateElement(
		__(
			'Upgrade Add to Cart with Options blocks on this page to <strongText /> for more features!',
			'woocommerce'
		),
		{
			strongText: (
				<strong>
					{ __( `a new blockified experience`, 'woocommerce' ) }
				</strong>
			),
		}
	);

	const buttonLabel = __(
		'Upgrade to the blockified Add to Cart with Options block',
		'woocommerce'
	);

	const handleClick = () => {
		upgradeToBlockifiedAddtoCartWithOptions();
		recordEvent( 'blocks_add_to_cart_with_options_migration', {
			transform_to: 'blockified',
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
