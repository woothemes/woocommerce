/**
 * External dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

// Default save function
const AddToCartWithOptionsButtonBehaviorSave = () => {
	return (
		<div { ...useBlockProps.save() }>
			<InnerBlocks.Content />
		</div>
	);
};

export default AddToCartWithOptionsButtonBehaviorSave;
