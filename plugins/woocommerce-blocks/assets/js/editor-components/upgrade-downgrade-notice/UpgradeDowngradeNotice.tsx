/**
 * External dependencies
 */
import { Notice } from '@wordpress/components';

/**
 * Internal dependencies
 */
import type { UpgradeDowngradeNoticeProps } from './types';
import './style.scss';

export function UpgradeDowngradeNotice( {
	notice,
	actionLabel,
	onActionClick,
}: UpgradeDowngradeNoticeProps ) {
	return (
		<Notice
			isDismissible={ false }
			className="wc-block-upgrade-downgrade-notice"
			actions={ [
				{
					label: actionLabel,
					onClick: onActionClick,
					noDefaultClasses: true,
					// @ts-expect-error the 'variant' prop does exists.
					variant: 'link',
				},
			] }
		>
			<div className="wc-block-upgrade-downgrade-notice__text">
				{ notice }
			</div>
		</Notice>
	);
}
