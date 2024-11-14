/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Notice, Button } from '@wordpress/components';
import { createInterpolateElement } from '@wordpress/element';
import { recordEvent } from '@woocommerce/tracks';

export const UpgradeNotice = ( props: { upgradeBlock: () => void } ) => {
	const notice = createInterpolateElement(
		__(
			'Upgrade all Products (Beta) blocks on this page to <strongText /> for more features!',
			'woocommerce'
		),
		{
			strongText: (
				<strong>{ __( `Product Collection`, 'woocommerce' ) }</strong>
			),
		}
	);

	const buttonLabel = __( 'Upgrade to Product Collection', 'woocommerce' );

	const handleClick = () => {
		props.upgradeBlock();
		recordEvent(
			'blocks_product_collection_migration_between_products_beta',
			{
				transform_to: 'product_collection',
			}
		);
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
