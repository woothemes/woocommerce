/**
 * External dependencies
 */
import type { ReactNode } from 'react';

export type UpgradeDowngradeNoticeProps = {
	notice: ReactNode;
	actionLabel: string;
	onActionClick(): void;
};
