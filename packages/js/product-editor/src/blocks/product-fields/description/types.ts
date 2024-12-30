/**
 * External dependencies
 */
import { ComponentType } from '@wordpress/element';
/**
 * Internal dependencies
 */
import {
	ProductEditorBlockAttributes,
	ProductEditorBlockEditProps,
} from '../../../types';

export type DescriptionBlockEditProps =
	ProductEditorBlockEditProps< ProductEditorBlockAttributes >;

export type DescriptionBlockEditComponent =
	ComponentType< DescriptionBlockEditProps >;
