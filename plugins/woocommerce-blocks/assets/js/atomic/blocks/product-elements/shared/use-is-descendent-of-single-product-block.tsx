/**
 * External dependencies
 */
import { useAncestors } from '@woocommerce/base-hooks';

interface UseIsDescendentOfSingleProductBlockProps {
	blockClientId: string;
}

export const useIsDescendentOfSingleProductBlock = ( {
	blockClientId,
}: UseIsDescendentOfSingleProductBlockProps ) => {
	const { hasAncestor } = useAncestors( blockClientId );

	return {
		isDescendentOfSingleProductBlock: hasAncestor(
			'woocommerce/single-product'
		),
	};
};
