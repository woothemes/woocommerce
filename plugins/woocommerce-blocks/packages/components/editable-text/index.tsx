/**
 * External dependencies
 */
import { Suspense, lazy } from '@wordpress/element';
import { useEditorContext } from '@woocommerce/base-context';

const LazyRichText = lazy( () =>
	import( '@wordpress/block-editor' ).then( ( module ) => ( {
		default: module.RichText,
	} ) )
);

export const EditableText = ( {
	value,
	onChange,
}: {
	value: string;
	onChange?: ( text: string ) => void;
} ) => {
	const { isEditor } = useEditorContext();

	return (
		<Suspense fallback={ <>{ value }</> }>
			{ isEditor && onChange && (
				<LazyRichText value={ value } onChange={ onChange } />
			) }
			{ ! onChange && <>{ value }</> }
		</Suspense>
	);
};
