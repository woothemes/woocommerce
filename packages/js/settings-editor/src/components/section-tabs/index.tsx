/**
 * External dependencies
 */
import { createElement, Fragment } from '@wordpress/element';
import { TabPanel } from '@wordpress/components';
import { privateApis as routerPrivateApis } from '@wordpress/router';
// @ts-ignore No types for this exist yet.
import { unlock } from '@wordpress/edit-site/build-module/lock-unlock';
import { addQueryArgs, getQueryArgs, removeQueryArgs } from '@wordpress/url';

const { useHistory, useLocation } = unlock( routerPrivateApis );

export const SectionTabs = ( {
	children,
	tabs = [],
}: {
	children: React.ReactNode;
	tabs?: Array< {
		name: string;
		title: string;
	} >;
} ) => {
	if ( tabs.length <= 1 ) {
		return (
			<>
				<div className="woocommerce-settings-section-tabs woocommerce-settings-section-tabs--no-tabs" />
				<div>{ children }</div>
			</>
		);
	}

	const history = useHistory();
	const {
		params: { postType, page, section: currentSection },
	} = useLocation();

	const onSelect = ( tabName: string ) => {
		const currentArgs = getQueryArgs( window.location.href );

		if ( currentArgs.section === tabName ) {
			return;
		}

		const params =
			tabName === ''
				? {
						page,
						postType,
						tab: currentArgs.tab,
				  }
				: {
						page,
						postType,
						tab: currentArgs.tab,
						section: tabName,
				  };
		history.push( params );
	};

	return (
		<TabPanel
			className="woocommerce-settings-section-tabs"
			tabs={ tabs }
			onSelect={ onSelect }
			initialTabName={ currentSection || tabs[ 0 ].name }
		>
			{ () => <>{ children }</> }
		</TabPanel>
	);
};
