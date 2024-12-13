/**
 * External dependencies
 */
import { createElement } from '@wordpress/element';
import {
	// @ts-expect-error missing types.
	__experimentalHeading as Heading,
	// @ts-expect-error missing types.
	__experimentalHStack as HStack,
	// @ts-expect-error missing types.
	__experimentalVStack as VStack,
} from '@wordpress/components';

export const Header = ( { pageTitle = '' }: { pageTitle?: string } ) => {
	return (
		<VStack
			className="woocommerce-admin-layout-header edit-site-page-header"
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
					{ pageTitle }
				</Heading>
			</HStack>
		</VStack>
	);
};
