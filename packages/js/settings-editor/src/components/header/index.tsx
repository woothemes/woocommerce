/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
import { privateApis as routerPrivateApis } from '@wordpress/router';
import {
	__experimentalHeading as Heading,
	__experimentalHStack as HStack,
	__experimentalVStack as VStack,
} from '@wordpress/components';
/* eslint-disable @woocommerce/dependency-group */
// @ts-ignore No types for this exist yet.
import { unlock } from '@wordpress/edit-site/build-module/lock-unlock';
/* eslint-enable @woocommerce/dependency-group */

/**
 * Internal dependencies
 */
import { getSettingsPage } from '../../utils';

const { useLocation } = unlock( routerPrivateApis );

export const Header = () => {
	const { query } = useLocation();
	const { tab = 'general' } = query;
	const page = getSettingsPage( tab );

	return (
		<VStack
			className="woocommerce-settings-header edit-site-page-header"
			as="header"
			spacing={ 0 }
		>
			<HStack className="edit-site-page-header__page-title">
				<Heading
					as="h2"
					level={ 3 }
					weight={ 500 }
					className="edit-site-page-header__title"
					truncate
				>
					{ page.label }
				</Heading>
			</HStack>
		</VStack>
	);
};
