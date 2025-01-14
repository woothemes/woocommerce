/**
 * Internal dependencies
 */
import './CardHeaderDescription.scss';

interface CardHeaderDescriptionProps {
	children: React.ReactNode;
}

export const CardHeaderDescription: React.FC< CardHeaderDescriptionProps > = ( {
	children,
} ) => {
	return (
		<div className="woocommerce-marketing-card-header-description">
			{ children }
		</div>
	);
};
