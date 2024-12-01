<?php
/**
 * Title: Coming Soon Minimal Left Image
 * Slug: woocommerce/page-coming-soon-minimal-left-image
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

$default_image = PatternsHelper::get_image_url( $images, 0, 'assets/images/pattern-placeholders/green-glass-jars-on-stairs.jpg' );

$site_tagline = get_bloginfo( 'description' );

// If the site tagline is empty, use a default copy. Otherwise, use the site tagline.
$store_description = ! empty( $site_tagline )
	? $site_tagline
	: sprintf(
		/* translators: %s: Site name. */
		__( '%s transforms your home with our curated collection of home decor, bringing inspiration and style to every corner.', 'woocommerce' ),
		get_bloginfo( 'name' )
	);

?>
<!-- wp:woocommerce/coming-soon {"color":"#f9f9f9","storeOnly":false,"className":"woocommerce-coming-soon-entire-site woocommerce-coming-soon-minimal-left-image wp-block-woocommerce-background-color"} -->
<div class="woocommerce-coming-soon-entire-site woocommerce-coming-soon-minimal-left-image wp-block-woocommerce-coming-soon wp-block-woocommerce-background-color">
	<!-- wp:cover {"minHeight":100,"minHeightUnit":"vh","isDark":false,"className":"coming-soon-is-vertically-aligned-center coming-soon-cover","layout":{"type":"default"}} -->
	<div class="wp-block-cover is-light coming-soon-is-vertically-aligned-center coming-soon-cover" style="min-height:100vh"><span aria-hidden="true" class="wp-block-cover__background has-background-dim-100 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:group {"align":"wide","className":"woocommerce-coming-soon-header has-background","style":{"spacing":{"padding":{"top":"10px","bottom":"14px"}}},"layout":{"type":"constrained"}} -->
		<div class="wp-block-group alignwide woocommerce-coming-soon-header has-background" style="padding-top:10px;padding-bottom:14px"><!-- wp:group {"align":"wide","layout":{"type":"flex","justifyContent":"space-between","flexWrap":"wrap"}} -->
			<div class="wp-block-group alignwide"><!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|20"},"layout":{"selfStretch":"fit","flexSize":null}},"layout":{"type":"flex"}} -->
				<div class="wp-block-group"><!-- wp:site-logo {"width":60} /-->

					<!-- wp:group {"style":{"spacing":{"blockGap":"0px"}}} -->
					<div class="wp-block-group"><!-- wp:site-title {"level":0,"fontFamily":"<?php echo esc_html( $inter_font_family ); ?>"} /--></div>
					<!-- /wp:group --></div>
				<!-- /wp:group -->

				<!-- wp:group {"className":"woocommerce-coming-soon-social-login","style":{"spacing":{"blockGap":"48px"}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
				<div class="wp-block-group woocommerce-coming-soon-social-login"><!-- wp:template-part {"slug":"coming-soon-social-links","theme":"woocommerce/woocommerce","tagName":"div"} /-->

					<!-- wp:loginout {"style":{"elements":{"link":{"color":{"text":"var:preset|color|primary"}}},"border":{"radius":"6px","width":"1px"},"layout":{"selfStretch":"fit","flexSize":null}},"borderColor":"primary"} /--></div>
				<!-- /wp:group --></div>
			<!-- /wp:group --></div>
		<!-- /wp:group -->

		<!-- wp:group {"align":"full","className":"woocommerce-coming-soon-minimal-left-image__content","style":{"spacing":{"padding":{"top":"0","bottom":"0"},"margin":{"top":"120px","bottom":"120px"}}},"layout":{"type":"default"}} -->
		<div class="wp-block-group alignfull woocommerce-coming-soon-minimal-left-image__content" style="margin-top:120px;margin-bottom:120px;padding-top:0;padding-bottom:0"><!-- wp:group {"layout":{"type":"constrained"}} -->
			<div class="wp-block-group"><!-- wp:columns {"className":"alignfull","style":{"spacing":{"padding":{"top":"0","bottom":"0","left":"0","right":"0"},"blockGap":{"top":"0","left":"60px"},"margin":{"top":"0px","bottom":"0px"}},"layout":{"selfStretch":"fit","flexSize":null}}} -->
				<div class="wp-block-columns alignfull" style="margin-top:0px;margin-bottom:0px;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0"><!-- wp:column {"verticalAlignment":"bottom","width":"481px","className":"woocommerce-coming-soon-minimal-left-image__content-image","layout":{"type":"default"}} -->
					<div class="wp-block-column is-vertically-aligned-bottom woocommerce-coming-soon-minimal-left-image__content-image" style="flex-basis:481px"><!-- wp:image {"scale":"cover","style":{"border":{"radius":"16px"}}} -->
						<figure class="wp-block-image has-custom-border"><img src="<?php echo esc_url( $default_image ); ?>" alt="Decorative Image" style="border-radius:16px;object-fit:cover"/></figure>
						<!-- /wp:image --></div>
					<!-- /wp:column -->

					<!-- wp:column {"verticalAlignment":"stretch","width":"453px","className":"woocommerce-coming-soon-minimal-left-image__content-text","style":{"spacing":{"blockGap":"0","padding":{"right":"0","left":"0","bottom":"0","top":"53px"}}},"layout":{"type":"default"}} -->
					<div class="wp-block-column is-vertically-aligned-stretch woocommerce-coming-soon-minimal-left-image__content-text" style="padding-top:53px;padding-right:0;padding-bottom:0;padding-left:0;flex-basis:453px"><!-- wp:group {"style":{"dimensions":{"minHeight":"100%"},"spacing":{"blockGap":"0"}},"layout":{"type":"flex","orientation":"vertical","justifyContent":"stretch","flexWrap":"nowrap","verticalAlignment":"space-between"}} -->
						<div class="wp-block-group" style="min-height:100%"><!-- wp:heading {"className":"is-style-default","style":{"elements":{"link":{"color":{"text":"#000"}}},"color":{"text":"#000"},"typography":{"fontSize":"38px","lineHeight":"1.19"},"spacing":{"margin":{"bottom":"var:preset|spacing|30"}}},"fontFamily":"heading"} -->
							<h2 class="wp-block-heading is-style-default has-text-color has-link-color has-heading-font-family" style="color:#000;margin-bottom:var(--wp--preset--spacing--30);font-size:38px;line-height:1.19"><?php echo esc_html__( 'Something big is brewing! Our store is in the works – Launching shortly!', 'woocommerce' ); ?></h2>
							<!-- /wp:heading -->

<!-- wp:group {"layout":{"type":"constrained","justifyContent":"left","contentSize":"338px"}} -->
							<div class="wp-block-group"><!-- wp:paragraph {"style":{"color":{"text":"#000"},"elements":{"link":{"color":{"text":"#000"}}},"typography":{"lineHeight":"1.6","letterSpacing":"0px"}}} -->
								<p class="has-text-color has-link-color" style="color:#000;letter-spacing:0px;line-height:1.6"><?php echo esc_html( $store_description ); ?></p>
							<!-- /wp:paragraph --></div>
							<!-- /wp:group --></div>
						<!-- /wp:group --></div>
					<!-- /wp:column -->
				</div>
				<!-- /wp:columns --></div>
			<!-- /wp:group --></div>
		<!-- /wp:group --></div></div>
	<!-- /wp:cover -->
</div>
<!-- /wp:woocommerce/coming-soon -->
