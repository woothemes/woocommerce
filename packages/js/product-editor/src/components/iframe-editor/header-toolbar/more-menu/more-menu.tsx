/**
 * External dependencies
 */
import { MenuGroup } from '@wordpress/components';
import { createElement, Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { isWpVersion } from '@woocommerce/settings';
import {
	ActionItem,
	// @ts-expect-error missing types.
} from '@wordpress/interface';

/**
 * Internal dependencies
 */
import { ToolsMenuGroup } from './tools-menu-group';
import { WritingMenu } from '../writing-menu';
import { getGutenbergVersion } from '../../../../utils/get-gutenberg-version';
import { MORE_MENU_ACTION_ITEM_SLOT_NAME } from '../../constants';
import { MoreMenuDropdown } from '../../../more-menu-dropdown';

export const MoreMenu = () => {
	const renderBlockToolbar =
		isWpVersion( '6.5', '>=' ) || getGutenbergVersion() > 17.3;

	return (
		<MoreMenuDropdown>
			{ ( onClose ) => (
				<>
					{ renderBlockToolbar && <WritingMenu /> }

					<ActionItem.Slot
						name={ MORE_MENU_ACTION_ITEM_SLOT_NAME }
						label={ __( 'Plugins', 'woocommerce' ) }
						as={ MenuGroup }
						fillProps={ { onClick: onClose } }
					/>

					<ToolsMenuGroup />
				</>
			) }
		</MoreMenuDropdown>
	);
};
