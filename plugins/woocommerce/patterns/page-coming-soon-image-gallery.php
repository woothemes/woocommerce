<?php
/**
 * Title: Coming Soon Image Gallery
 * Slug: woocommerce/page-coming-soon-image-gallery
 * Categories: WooCommerce
 * Template Types: coming-soon
 * Inserter: false
 * Feature Flag: coming-soon-newsletter-template
 */

use Automattic\WooCommerce\Blocks\AIContent\PatternsHelper;

$current_theme     = wp_get_theme()->get_stylesheet();
$inter_font_family = 'inter';
$cardo_font_family = 'cardo';

if ( 'twentytwentyfour' === $current_theme ) {
	$inter_font_family = 'body';
	$cardo_font_family = 'heading';
}
// Count how many products with images.
$args = array(
    'post_type'      => 'product',
    'posts_per_page' => 12,
    'fields'         => 'ids',
    'meta_query'     => array(
        array(
            'key'     => '_thumbnail_id',
            'compare' => 'EXISTS'
        )
    )
);
$query = new WP_Query( $args );
$product_count = count( $query->posts );

$data = get_option( 'woocommerce_coming_soon_template_settings', new \StdClass() );
$use_product_images = isset( $data->product_images ) && $data->product_images === 'yes';

if ( $use_product_images ) {
	// Loop through products and fetch the featured image URLs.
	$featured_image_urls = array();
	if ( $query->have_posts() ) {
	foreach ( $query->posts as $post_id ) {
			$image_url = get_the_post_thumbnail_url( $post_id, 'full' );
			if ( $image_url ) {
				$featured_image_urls[] = $image_url;
			}
		}
	}
} else {
	$featured_image_urls = array_map(
		function( $index ) use ( $images ) {
			return PatternsHelper::get_image_url( $images, 0, "assets/images/pattern-placeholders/gallery-{$index}.jpg" );
		},
		range( 1, 12 )
	);
}

?>

<!-- wp:woocommerce/coming-soon {"className":"woocommerce-coming-soon-image-gallery wp-block-woocommerce-background-color"} -->
<div class="wp-block-woocommerce-coming-soon woocommerce-coming-soon-image-gallery wp-block-woocommerce-background-color"><!-- wp:group {"align":"wide","className":"woocommerce-coming-soon-header has-background","style":{"spacing":{"padding":{"top":"10px","bottom":"14px"}}},"layout":{"type":"constrained"}} -->
		<div class="wp-block-group alignwide woocommerce-coming-soon-header has-background" style="padding-top:10px;padding-bottom:14px"><!-- wp:group {"align":"wide","layout":{"type":"flex","justifyContent":"space-between","flexWrap":"wrap"}} -->
			<div class="wp-block-group alignwide"><!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|20"},"layout":{"selfStretch":"fit","flexSize":null}},"layout":{"type":"flex"}} -->
				<div class="wp-block-group"><!-- wp:site-logo {"width":60} /-->

					<!-- wp:group {"style":{"spacing":{"blockGap":"0px"}}} -->
					<div class="wp-block-group"><!-- wp:site-title {"level":0,"fontFamily":"<?php echo esc_html( $inter_font_family ); ?>"} /--></div>
					<!-- /wp:group --></div>
				<!-- /wp:group -->

				<!-- wp:group {"className":"woocommerce-coming-soon-social-login","style":{"spacing":{"blockGap":"48px"}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
				<div class="wp-block-group woocommerce-coming-soon-social-login"><!-- wp:template-part {"slug":"coming-soon-social-links","theme":"woocommerce/woocommerce","tagName":"div"} /-->

					<!-- wp:loginout {"style":{"elements":{"link":{"color":{"text":"#ffffff"}}},"color":{"background":"#000000"}},"fontFamily":"<?php echo esc_html( $inter_font_family ); ?>"} /--></div>
				<!-- /wp:group --></div>
			<!-- /wp:group --></div>
		<!-- /wp:group -->

		<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
		<div class="wp-block-group alignwide">
			<!-- wp:group {"align":"wide","style":{"spacing":{"padding":{"top":"85px","bottom":"85px"}}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
			<div class="wp-block-group alignwide">
				<!-- wp:heading {"level":1,"style":{"typography":{"fontSize":"48px","lineHeight":"1.3","fontStyle":"normal","fontWeight":"400"},"spacing":{"padding":{"top":"85px","bottom":"85px"}}},"fontFamily":"heading"} -->
					<h1 class="wp-block-heading has-heading-font-family" style="padding-top:85px;padding-bottom:85px;font-size:48px;font-style:normal;font-weight:400;line-height:1.3"><em>Great things are coming soon</em></h1>
				<!-- /wp:heading -->
			</div>
			<!-- /wp:group -->
		</div>
		<!-- /wp:group -->

	<!-- wp:group {"style":{"spacing":{"padding":{"top":"0","bottom":"0","left":"0","right":"0"},"blockGap":"0","margin":{"top":"0","bottom":"0"}}},"layout":{"type":"default"},"tagName":"main"} -->
	<main class="wp-block-group" style="margin-top:0;margin-bottom:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0">

		<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"right":"var:preset|spacing|50","left":"var:preset|spacing|50","top":"var:preset|spacing|30","bottom":"var:preset|spacing|30"}}},"layout":{"type":"constrained"}} -->
		<div class="wp-block-group alignfull" style="padding-top:var(--wp--preset--spacing--30);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--50)">
			<!-- wp:columns {"align":"wide","style":{"spacing":{"blockGap":{"top":"0","left":"var:preset|spacing|40"},"margin":{"top":"0","bottom":"0"}}}} -->
			<div class="wp-block-columns alignwide" style="margin-top:0;margin-bottom:0">
				<!-- wp:column {"style":{"spacing":{"blockGap":"0"}}} -->
				<div class="wp-block-column">
					<?php if ( isset( $featured_image_urls[0] ) ) : ?>
					<!-- wp:image {"id":113,"sizeSlug":"full","linkDestination":"none","style":{"border":{"radius":"14px"}}} -->
					<figure class="wp-block-image size-full has-custom-border""><img src="<?php echo $featured_image_urls[0]; ?>" alt="" class="wp-image-113" style="border-radius:14px"/></figure>
					<!-- /wp:image -->
					<!-- wp:spacer {"height":"var:preset|spacing|50"} -->
					<div style="height:var(--wp--preset--spacing--50)" aria-hidden="true" class="wp-block-spacer">
					</div>
					<!-- /wp:spacer -->
					<?php endif ?>
					<?php if ( isset( $featured_image_urls[4] ) ) : ?>
					<!-- wp:image {"id":113,"sizeSlug":"full","linkDestination":"none","style":{"border":{"radius":"14px"}}} -->
					<figure class="wp-block-image size-full has-custom-border""><img src="<?php echo $featured_image_urls[4]; ?>" alt="" class="wp-image-113" style="border-radius:14px"/></figure>
					<!-- /wp:image -->
					<!-- wp:spacer {"height":"var:preset|spacing|50"} -->
					<div style="height:var(--wp--preset--spacing--50)" aria-hidden="true" class="wp-block-spacer">
					</div>
					<!-- /wp:spacer -->
					<?php endif ?>
					<?php if ( isset( $featured_image_urls[8] ) ) : ?>
					<!-- wp:image {"id":113,"sizeSlug":"full","linkDestination":"none","style":{"border":{"radius":"14px"}}} -->
					<figure class="wp-block-image size-full has-custom-border""><img src="<?php echo $featured_image_urls[8]; ?>" alt="" class="wp-image-113" style="border-radius:14px"/></figure>
					<!-- /wp:image -->
					<!-- wp:spacer {"height":"var:preset|spacing|50"} -->
					<div style="height:var(--wp--preset--spacing--50)" aria-hidden="true" class="wp-block-spacer">
					</div>
					<!-- /wp:spacer -->
					<?php endif ?>
				</div>
				<!-- /wp:column -->

				<!-- wp:column {"style":{"spacing":{"blockGap":"0","padding":{"top":"0"}}}} -->
				<div class="wp-block-column" style="padding-top:0">
					<!-- wp:spacer {"height":"var:preset|spacing|50"} -->
					<div style="height:var(--wp--preset--spacing--50)" aria-hidden="true" class="wp-block-spacer">
					</div>
					<!-- /wp:spacer -->

					<?php if ( isset( $featured_image_urls[1] ) ) : ?>
					<!-- wp:image {"id":113,"sizeSlug":"full","linkDestination":"none","style":{"border":{"radius":"14px"}}} -->
					<figure class="wp-block-image size-full has-custom-border""><img src="<?php echo $featured_image_urls[1]; ?>" alt="" class="wp-image-113" style="border-radius:14px"/></figure>
					<!-- /wp:image -->
					<!-- wp:spacer {"height":"var:preset|spacing|50"} -->
					<div style="height:var(--wp--preset--spacing--50)" aria-hidden="true" class="wp-block-spacer">
					</div>
					<!-- /wp:spacer -->
					<?php endif ?>
					<?php if ( isset( $featured_image_urls[5] ) ) : ?>
					<!-- wp:image {"id":113,"sizeSlug":"full","linkDestination":"none","style":{"border":{"radius":"14px"}}} -->
					<figure class="wp-block-image size-full has-custom-border""><img src="<?php echo $featured_image_urls[5]; ?>" alt="" class="wp-image-113" style="border-radius:14px"/></figure>
					<!-- /wp:image -->
					<!-- wp:spacer {"height":"var:preset|spacing|50"} -->
					<div style="height:var(--wp--preset--spacing--50)" aria-hidden="true" class="wp-block-spacer">
					</div>
					<!-- /wp:spacer -->
					<?php endif ?>
					<?php if ( isset( $featured_image_urls[9] ) ) : ?>
					<!-- wp:image {"id":113,"sizeSlug":"full","linkDestination":"none","style":{"border":{"radius":"14px"}}} -->
					<figure class="wp-block-image size-full has-custom-border""><img src="<?php echo $featured_image_urls[9]; ?>" alt="" class="wp-image-113" style="border-radius:14px"/></figure>
					<!-- /wp:image -->
					<!-- wp:spacer {"height":"var:preset|spacing|50"} -->
					<div style="height:var(--wp--preset--spacing--50)" aria-hidden="true" class="wp-block-spacer">
					</div>
					<!-- /wp:spacer -->
					<?php endif ?>
				</div>
				<!-- /wp:column -->

				<!-- wp:column {"style":{"spacing":{"blockGap":"0"}}} -->
				<div class="wp-block-column">
					<?php if ( isset( $featured_image_urls[2] ) ) : ?>
					<!-- wp:image {"id":113,"sizeSlug":"full","linkDestination":"none","style":{"border":{"radius":"14px"}}} -->
					<figure class="wp-block-image size-full has-custom-border""><img src="<?php echo $featured_image_urls[2]; ?>" alt="" class="wp-image-113" style="border-radius:14px"/></figure>
					<!-- /wp:image -->
					<!-- wp:spacer {"height":"var:preset|spacing|50"} -->
					<div style="height:var(--wp--preset--spacing--50)" aria-hidden="true" class="wp-block-spacer">
					</div>
					<!-- /wp:spacer -->
					<?php endif ?>
					<?php if ( isset( $featured_image_urls[6] ) ) : ?>
					<!-- wp:image {"id":113,"sizeSlug":"full","linkDestination":"none","style":{"border":{"radius":"14px"}}} -->
					<figure class="wp-block-image size-full has-custom-border""><img src="<?php echo $featured_image_urls[6]; ?>" alt="" class="wp-image-113" style="border-radius:14px"/></figure>
					<!-- /wp:image -->
					<!-- wp:spacer {"height":"var:preset|spacing|50"} -->
					<div style="height:var(--wp--preset--spacing--50)" aria-hidden="true" class="wp-block-spacer">
					</div>
					<!-- /wp:spacer -->
					<?php endif ?>
					<?php if ( isset( $featured_image_urls[10] ) ) : ?>
					<!-- wp:image {"id":113,"sizeSlug":"full","linkDestination":"none","style":{"border":{"radius":"14px"}}} -->
					<figure class="wp-block-image size-full has-custom-border""><img src="<?php echo $featured_image_urls[10]; ?>" alt="" class="wp-image-113" style="border-radius:14px"/></figure>
					<!-- /wp:image -->
					<!-- wp:spacer {"height":"var:preset|spacing|50"} -->
					<div style="height:var(--wp--preset--spacing--50)" aria-hidden="true" class="wp-block-spacer">
					</div>
					<!-- /wp:spacer -->
					<?php endif ?>
				</div>
				<!-- /wp:column -->

				<!-- wp:column {"style":{"spacing":{"blockGap":"0"}}} -->
				<div class="wp-block-column">
					<!-- wp:spacer {"height":"var:preset|spacing|50"} -->
					<div style="height:var(--wp--preset--spacing--50)" aria-hidden="true" class="wp-block-spacer">
					</div>
					<!-- /wp:spacer -->
					<?php if ( isset( $featured_image_urls[3] ) ) : ?>
					<!-- wp:image {"id":113,"sizeSlug":"full","linkDestination":"none","style":{"border":{"radius":"14px"}}} -->
					<figure class="wp-block-image size-full has-custom-border""><img src="<?php echo $featured_image_urls[3]; ?>" alt="" class="wp-image-113" style="border-radius:14px"/></figure>
					<!-- /wp:image -->
					<!-- wp:spacer {"height":"var:preset|spacing|50"} -->
					<div style="height:var(--wp--preset--spacing--50)" aria-hidden="true" class="wp-block-spacer">
					</div>
					<!-- /wp:spacer -->
					<?php endif ?>
					<?php if ( isset( $featured_image_urls[7] ) ) : ?>
					<!-- wp:image {"id":113,"sizeSlug":"full","linkDestination":"none","style":{"border":{"radius":"14px"}}} -->
					<figure class="wp-block-image size-full has-custom-border""><img src="<?php echo $featured_image_urls[7]; ?>" alt="" class="wp-image-113" style="border-radius:14px"/></figure>
					<!-- /wp:image -->
					<!-- wp:spacer {"height":"var:preset|spacing|50"} -->
					<div style="height:var(--wp--preset--spacing--50)" aria-hidden="true" class="wp-block-spacer">
					</div>
					<!-- /wp:spacer -->
					<?php endif ?>
					<?php if ( isset( $featured_image_urls[11] ) ) : ?>
					<!-- wp:image {"id":113,"sizeSlug":"full","linkDestination":"none","style":{"border":{"radius":"14px"}}} -->
					<figure class="wp-block-image size-full has-custom-border""><img src="<?php echo $featured_image_urls[11]; ?>" alt="" class="wp-image-113" style="border-radius:14px"/></figure>
					<!-- /wp:image -->
					<!-- wp:spacer {"height":"var:preset|spacing|50"} -->
					<div style="height:var(--wp--preset--spacing--50)" aria-hidden="true" class="wp-block-spacer">
					</div>
					<!-- /wp:spacer -->
					<?php endif ?>
				</div>
				<!-- /wp:column -->


			</div>
			<!-- /wp:columns -->
		</div>
		<!-- /wp:group -->

	</main>
	<!-- /wp:group -->

</div>
<!-- /wp:woocommerce/coming-soon -->
