/**
 * External dependencies
 */
import { useSelect } from '@wordpress/data';
import { Spinner } from '@wordpress/components';
import { useEntityBlockEditor, store as coreStore } from '@wordpress/core-data';
import {
	InnerBlocks,
	useInnerBlocksProps,
	useBlockProps,
	store as blockEditorStore,
	useBlockEditingMode,
} from '@wordpress/block-editor';

export type FeaturesKeys = 'isBlockifiedAddToCart';

export type FeaturesProps = {
	[ key in FeaturesKeys ]?: boolean;
};

export type UpdateFeaturesType = ( key: FeaturesKeys, value: boolean ) => void;

function useRenderAppender( hasInnerBlocks: boolean ) {
	const blockEditingMode = useBlockEditingMode();
	// Disable appending when the editing mode is 'contentOnly'. This is so that the user can't
	// append into a template part when editing a page in the site editor. See
	// DisableNonPageContentBlocks. Ideally instead of (mis)using editing mode there would be a
	// block editor API for achieving this.
	if ( blockEditingMode === 'contentOnly' ) {
		return false;
	}
	if ( ! hasInnerBlocks ) {
		return InnerBlocks.ButtonBlockAppender;
	}
}

const TemplatePartInnerBlocks = ( {
	blockProps,
	templatePartId,
}: {
	blockProps: Record< string, unknown >;
	templatePartId: string | undefined;
} ) => {
	const onNavigateToEntityRecord = useSelect(
		( select ) =>
			select( blockEditorStore ).getSettings().onNavigateToEntityRecord,
		[]
	);

	const [ blocks, onInput, onChange ] = useEntityBlockEditor(
		'postType',
		'wp_template_part',
		{ id: templatePartId }
	);

	const { isLoading } = useSelect(
		( select ) => {
			const { hasFinishedResolution } = select( coreStore );

			const hasResolvedEntity = templatePartId
				? hasFinishedResolution( 'getEditedEntityRecord', [
						'postType',
						'wp_template_part',
						templatePartId,
				  ] )
				: false;

			return {
				isLoading: ! hasResolvedEntity,
			};
		},
		[ templatePartId ]
	);

	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		value: blocks,
		onInput,
		onChange,
		renderAppender: useRenderAppender( ! isLoading && blocks.length > 0 ),
	} );

	const blockEditingMode = useBlockEditingMode();

	if ( isLoading ) {
		return (
			<form { ...blockProps }>
				<Spinner />
			</form>
		);
	}

	const customProps =
		blockEditingMode === 'contentOnly' && onNavigateToEntityRecord
			? {
					onDoubleClick: () =>
						onNavigateToEntityRecord( {
							postId: templatePartId,
							postType: 'wp_template_part',
						} ),
			  }
			: {};

	return <form { ...innerBlocksProps } { ...customProps } />;
};

export const AddToCartWithOptionsEditTemplatePart = ( {
	productType,
}: {
	productType: string;
} ) => {
	const currentTheme = useSelect(
		( select ) => select( coreStore ).getCurrentTheme()?.stylesheet,
		[]
	);
	const templatePartSlug = `${ productType }-product-add-to-cart-with-options`;
	const themeTemplatePartId = `${ currentTheme }//${ templatePartSlug }`;
	const wooCommerceTemplatePartId = `woocommerce/woocommerce//${ templatePartSlug }`;

	const { templatePartId } = useSelect(
		( select ) => {
			const { getEditedEntityRecord, hasFinishedResolution } =
				select( coreStore );

			const getThemeEntityArgs = [
				'postType',
				'wp_template_part',
				themeTemplatePartId,
			] as const;
			const themeEntityRecord = themeTemplatePartId
				? getEditedEntityRecord( ...getThemeEntityArgs )
				: null;
			const hasResolvedEntity = themeTemplatePartId
				? hasFinishedResolution(
						'getEditedEntityRecord',
						getThemeEntityArgs
				  )
				: false;

			const themeTemplatePartIsMissing =
				hasResolvedEntity &&
				( ! themeEntityRecord ||
					Object.keys( themeEntityRecord ).length === 0 );

			return {
				templatePartId: themeTemplatePartIsMissing
					? wooCommerceTemplatePartId
					: themeTemplatePartId,
			};
		},
		[ wooCommerceTemplatePartId, themeTemplatePartId ]
	);

	const blockProps = useBlockProps();

	return (
		<TemplatePartInnerBlocks
			blockProps={ blockProps }
			templatePartId={ templatePartId }
		/>
	);
};
