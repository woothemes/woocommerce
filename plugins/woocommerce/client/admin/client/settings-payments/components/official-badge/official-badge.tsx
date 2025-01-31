/**
 * External dependencies
 */
import React from 'react';
import { __ } from '@wordpress/i18n';
import { Popover } from '@wordpress/components';
import { Link, Pill } from '@woocommerce/components';
import { createInterpolateElement, useState } from '@wordpress/element';
import { Icon } from '@wordpress/icons';
import { useDebounce } from '@wordpress/compose';

/**
 * Internal dependencies
 */
import { BadgeOfficial } from '../icons';

interface OfficialBadgeProps {
	/**
	 * The style of the badge.
	 */
	variant: 'expanded' | 'compact';
}

/**
 * A component that displays an official badge.
 * The style of the badge can be either "expanded" or "compact".
 *
 * @example
 * // Render an official badge with the default style.
 * <OfficialBadgeProps variant="expanded" />
 *
 * @example
 * // Render a compact official badge.
 * <OfficialBadgeProps variant="compact" />
 *
 * @example
 * // Render a status badge which displays a popover.
 * <StatusBadge status="active" message="Active" popoverContent={ <p>This is an active status badge</p> } />
 */
export const OfficialBadge = ( { variant }: OfficialBadgeProps ) => {
	const [ isPopoverVisible, setPopoverVisible ] = useState( false );

	const hidePopoverDebounced = useDebounce( () => {
		setPopoverVisible( false );
	}, 500 );
	const showPopover = () => {
		setPopoverVisible( true );
		hidePopoverDebounced.cancel();
	};

	return (
		<Pill className={ `woocommerce-official-extension-badge` }>
			<span
				className="woocommerce-official-extension-badge__container"
				onClick={ () => setPopoverVisible( ! isPopoverVisible ) }
				onMouseEnter={ showPopover }
				onMouseLeave={ hidePopoverDebounced }
				onKeyDown={ ( event ) => {
					if ( event.key === 'Enter' || event.key === ' ' ) {
						setPopoverVisible( ! isPopoverVisible );
					}
				} }
				tabIndex={ 0 }
				role="button"
			>
				<Icon size={ 16 } icon={ BadgeOfficial } />
				{ variant === 'expanded' && (
					<span>{ __( 'Official', 'woocommerce' ) }</span>
				) }
				{ isPopoverVisible && (
					<Popover
						className="woocommerce-official-extension-badge-popover"
						placement="top-start"
						offset={ 4 }
						variant="unstyled"
						focusOnMount={ true }
						noArrow={ true }
						shift={ true }
						inline={ true }
						onClose={ () => setPopoverVisible( false ) }
					>
						<div className="components-popover__content-container">
							<p>
								{ createInterpolateElement(
									__(
										'This is an Official WooCommerce payment extension. <learnMoreLink />',
										'woocommerce'
									),
									{
										learnMoreLink: (
											<Link
												href="https://woocommerce.com/something"
												target="_blank"
												rel="noreferrer"
												type="external"
											>
												{ __(
													'Learn more',
													'woocommerce'
												) }
											</Link>
										),
									}
								) }
							</p>
						</div>
					</Popover>
				) }
			</span>
		</Pill>
	);
};
