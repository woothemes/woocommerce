/**
 * External dependencies
 */
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { store as marketingStore } from '~/marketing/data';
import { Post } from './types';

export const useBlogPosts = ( category: string ) => {
	return useSelect(
		( select ) => {
			// @ts-expect-error Todo: awaiting more global fix, demo: https://github.com/woocommerce/woocommerce/pull/54146
			const { getBlogPosts, getBlogPostsError, isResolving } =
				select( marketingStore );

			return {
				isLoading: isResolving( 'getBlogPosts', [ category ] ),
				error: getBlogPostsError( category ),
				posts: getBlogPosts( category ) as Post[],
			};
		},
		[ category ]
	);
};
