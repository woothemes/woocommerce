/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
import './grid-item-placeholder.scss';

export const GridItemPlaceholder = () => {
	return (
		<div className="other-payment-gateways__content__grid-item">
			<div className="grid-item-placeholder__img" />
			<div className="other-payment-gateways__content__grid-item__content grid-item-placeholder__content">
				<span className="grid-item-placeholder__title"></span>
				<span className="grid-item-placeholder__description"></span>
				<div className="grid-item-placeholder__actions"></div>
			</div>
		</div>
	);
};
