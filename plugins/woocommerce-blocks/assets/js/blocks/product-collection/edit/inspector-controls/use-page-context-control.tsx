/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { usePrevious } from '@woocommerce/base-hooks';
import { useMemo } from '@wordpress/element';
import {
	// @ts-expect-error Using experimental features
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalToolsPanelItem as ToolsPanelItem,
	// @ts-expect-error Using experimental features
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalToggleGroupControl as ToggleGroupControl,
	// @ts-expect-error Using experimental features
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import {
	CoreFilterNames,
	type ProductCollectionQuery,
	type QueryControlProps,
} from '../../types';
import { DEFAULT_QUERY } from '../../constants';
import {
	getDefaultValueOfInherit,
	getDefaultValueOfFilterable,
} from '../../utils';

const label = __( 'Query type', 'woocommerce' );

const defaultInheritHelpText = __(
	'Display products based on the current template and allow shoppers to filter.',
	'woocommerce'
);

const customInheritHelpText = __(
	'Show a list of products based on fixed criteria.',
	'woocommerce'
);

const defaultFilterableHelpText = __(
	'Show products based on specific criteria and allow shoppers to filter.',
	'woocommerce'
);

const customFilterableHelpText = __(
	'Show a list of products based on fixed criteria.',
	'woocommerce'
);

const InheritQueryControl = ( {
	setQueryAttribute,
	trackInteraction,
	query,
}: QueryControlProps ) => {
	const inherit = query?.inherit;

	const queryObjectBeforeInheritEnabled = usePrevious(
		query,
		( value?: ProductCollectionQuery ) => {
			return value?.inherit === false;
		}
	);

	const defaultValue = useMemo( () => getDefaultValueOfInherit(), [] );

	return (
		<ToolsPanelItem
			label={ label }
			hasValue={ () => inherit !== defaultValue }
			isShownByDefault
			onDeselect={ () => {
				setQueryAttribute( {
					inherit: defaultValue,
				} );
				trackInteraction( CoreFilterNames.INHERIT );
			} }
		>
			<ToggleGroupControl
				className="wc-block-product-collection__inherit-query-control"
				__next40pxDefaultSize
				label={ label }
				isBlock
				onChange={ ( newInherit: boolean ) => {
					if ( newInherit ) {
						// If the inherit is enabled, we want to reset the query to the default.
						setQueryAttribute( {
							...DEFAULT_QUERY,
							inherit: newInherit,
						} );
					} else {
						// If the inherit is disabled, we want to reset the query to the previous query before the inherit was enabled.
						setQueryAttribute( {
							...DEFAULT_QUERY,
							...queryObjectBeforeInheritEnabled,
							inherit: newInherit,
						} );
					}
					trackInteraction( CoreFilterNames.INHERIT );
				} }
				help={
					inherit ? defaultInheritHelpText : customInheritHelpText
				}
				value={ !! inherit }
			>
				<ToggleGroupControlOption
					value
					label={ __( 'Default', 'woocommerce' ) }
				/>
				<ToggleGroupControlOption
					value={ false }
					label={ __( 'Custom', 'woocommerce' ) }
				/>
			</ToggleGroupControl>
		</ToolsPanelItem>
	);
};

const FilterableControl = ( {
	setQueryAttribute,
	trackInteraction,
	query,
}: QueryControlProps ) => {
	const filterable = query?.filterable;

	const defaultValue = useMemo( () => getDefaultValueOfFilterable(), [] );

	return (
		<ToolsPanelItem
			label={ label }
			hasValue={ () => filterable !== defaultValue }
			isShownByDefault
			onDeselect={ () => {
				setQueryAttribute( {
					filterable: defaultValue,
				} );
				trackInteraction( CoreFilterNames.FILTERABLE );
			} }
		>
			<ToggleGroupControl
				className="wc-block-product-collection__inherit-query-control"
				__next40pxDefaultSize
				label={ label }
				isBlock
				onChange={ ( value: boolean ) => {
					setQueryAttribute( {
						filterable: value,
					} );
					trackInteraction( CoreFilterNames.FILTERABLE );
				} }
				help={
					filterable
						? defaultFilterableHelpText
						: customFilterableHelpText
				}
				value={ !! filterable }
			>
				<ToggleGroupControlOption
					value
					label={ __( 'Default', 'woocommerce' ) }
				/>
				<ToggleGroupControlOption
					value={ false }
					label={ __( 'Custom', 'woocommerce' ) }
				/>
			</ToggleGroupControl>
		</ToolsPanelItem>
	);
};

export { FilterableControl, InheritQueryControl };
