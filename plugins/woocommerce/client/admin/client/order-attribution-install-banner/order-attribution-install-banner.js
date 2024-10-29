/**
 * External dependencies
 */
import { Button, Card, CardBody } from '@wordpress/components';
import { useEffect, useCallback } from '@wordpress/element';
import { plugins, external } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { Text } from '@woocommerce/experimental';
import { recordEvent } from '@woocommerce/tracks';
import { getPath } from '@woocommerce/navigation';

/**
 * Internal dependencies
 */
import { useOrderAttributionInstallBanner } from './use-order-attribution-install-banner';
import {
	BANNER_TYPE_BIG,
	BANNER_TYPE_SMALL,
	BANNER_TYPE_HEADER,
} from './constants';
import './style.scss';

const WC_ANALYTICS_PRODUCT_URL =
	'https://woocommerce.com/products/woocommerce-analytics';

export const OrderAttributionInstallBanner = ( {
	bannerImage = null,
	bannerType = BANNER_TYPE_BIG,
	eventContext = 'analytics-overview',
	dismissable = false,
	badgeText = '',
	title = '',
	description = '',
	buttonText = '',
} ) => {
	const { isDismissed, dismiss, shouldShowBanner } =
		useOrderAttributionInstallBanner();

	const onButtonClick = () => {
		recordEvent( 'order_attribution_install_banner_clicked', {
			path: getPath(),
			context: eventContext,
		} );
	};

	const getShouldRender = useCallback( () => {
		if ( bannerType === BANNER_TYPE_HEADER ) {
			return shouldShowBanner && isDismissed;
		}

		if ( ! dismissable ) {
			return shouldShowBanner;
		}

		return shouldShowBanner && ! isDismissed;
	}, [ bannerType, shouldShowBanner, isDismissed, dismissable ] );

	const shouldRender = getShouldRender();

	useEffect( () => {
		if ( ! shouldRender ) {
			return;
		}
		recordEvent( 'order_attribution_install_banner_viewed', {
			path: getPath(),
			context: eventContext,
		} );
	}, [ eventContext, shouldRender ] );

	if ( ! shouldRender ) {
		return null;
	}

	if ( bannerType === BANNER_TYPE_HEADER ) {
		return (
			<Button
				className="woocommerce-order-attribution-install-header-banner"
				href={ WC_ANALYTICS_PRODUCT_URL }
				variant="secondary"
				icon={ plugins }
				size="default"
				onClick={ onButtonClick }
			>
				{ __( 'Try Order Attribution', 'woocommerce' ) }
			</Button>
		);
	}

	const isSmallBanner = bannerType === BANNER_TYPE_SMALL;

	return (
		<Card
			size="medium"
			className={ `woocommerce-order-attribution-install-banner ${
				isSmallBanner ? 'small' : ''
			}` }
		>
			<CardBody
				className={ `woocommerce-order-attribution-install-banner__body ${
					isSmallBanner ? 'small' : ''
				}` }
			>
				<div className="woocommerce-order-attribution-install-banner__image_container">
					{ bannerImage }
				</div>
				<div
					className={ `woocommerce-order-attribution-install-banner__text_container ${
						isSmallBanner ? 'small' : ''
					}` }
				>
					{ badgeText && (
						<div className="woocommerce-order-attribution-install-banner__text-badge">
							<Text
								className="woocommerce-order-attribution-install-banner__text-description"
								as="p"
								size="12"
								align="center"
							>
								{ badgeText }
							</Text>
						</div>
					) }
					{ title && (
						<Text
							className="woocommerce-order-attribution-install-banner__text-title"
							as="p"
							size="16"
						>
							{ title }
						</Text>
					) }
					{ description && (
						<Text
							className="woocommerce-order-attribution-install-banner__text-description"
							as="p"
							size="12"
						>
							{ description }
						</Text>
					) }
					<div>
						<Button
							className={ isSmallBanner ? 'small' : '' }
							href={ WC_ANALYTICS_PRODUCT_URL }
							variant={ isSmallBanner ? 'secondary' : 'primary' }
							onClick={ onButtonClick }
							icon={ isSmallBanner ? external : null }
							iconPosition={ isSmallBanner ? 'right' : null }
							target="_blank"
						>
							{ buttonText }
						</Button>
						{ dismissable && (
							<Button
								variant="tertiary"
								onClick={ () => dismiss( eventContext ) }
							>
								{ __( 'Dismiss', 'woocommerce' ) }
							</Button>
						) }
					</div>
				</div>
			</CardBody>
		</Card>
	);
};
