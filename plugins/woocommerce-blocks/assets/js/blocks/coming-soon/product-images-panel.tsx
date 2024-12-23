/**
 * External dependencies
 */
import { useDispatch, useSelect, dispatch, select } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { ToggleControl, Button } from '@wordpress/components';
import { getAdminLink } from '@woocommerce/settings';
import {
	PluginDocumentSettingPanel,
	store as editorStore,
} from '@wordpress/editor';
import { store as blocksStore } from '@wordpress/blocks';
import { useCallback, useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { store as editSiteStore } from '@wordpress/edit-site';

/**
 * Internal dependencies
 */
import './newsletter-panel.scss';

const ProductImagesPanel = () => {
	// Always define hooks at the top, unconditionally
	const postId = useSelect( ( select ) =>
		select( 'core/editor' ).getCurrentPostId()
	);
	const [ isToggled, setIsToggled ] = useState( false ); // State for toggle control
	const [ loading, setLoading ] = useState( true ); // State for loading indicator

	// Fetch the current value from the REST API
	useEffect( () => {
		if ( postId === 'woocommerce/woocommerce//coming-soon' ) {
			setLoading( true );
			apiFetch( {
				path: '/wc-admin/launch-your-store/template-settings',
			} )
				.then( ( response ) => {
					setIsToggled( response.product_images === 'yes' );
				} )
				.catch( ( error ) => {
					console.error( 'Error fetching template settings:', error );
				} )
				.finally( () => setLoading( false ) );
		}
	}, [ postId ] );

	// Handle toggle changes and update via REST API
	const handleToggleChange = ( value ) => {
		setIsToggled( value );

		apiFetch( {
			path: '/wc-admin/launch-your-store/template-settings',
			method: 'PUT',
			data: {
				product_images: value ? 'yes' : 'no', // Map boolean to 'yes'/'no'
			},
		} )
			.then( ( response ) => {
				console.log( 'Settings updated successfully:', response );
			} )
			.catch( ( error ) => {
				console.error( 'Error updating template settings:', error );
			} );
	};

	// Conditions for rendering should not affect the order of hooks
	if ( postId !== 'woocommerce/woocommerce//coming-soon' ) {
		return null;
	}

	// Avoid returning before checking PluginDocumentSettingPanel
	if ( ! PluginDocumentSettingPanel ) {
		return null;
	}

	// Hide until the settings are fetched
	if ( loading ) {
		return null;
	}

	return (
		<PluginDocumentSettingPanel
			name="coming-soon-newsletter-mailpoet-setting-panel"
			title={ __( 'Product Images', 'woocommerce' ) }
			className="coming-soon-newsletter-mailpoet-setting-panel"
			initialOpen={ true }
		>
			<ToggleControl
				label={ __( 'Display your products', 'woocommerce' ) }
				checked={ isToggled }
				onChange={ handleToggleChange }
			/>
			<p>
				{ __(
					'Your uploaded products will be featured. Otherwise, generic product images will be utilized.',
					'woocommerce'
				) }
			</p>
		</PluginDocumentSettingPanel>
	);
};

export default ProductImagesPanel;
