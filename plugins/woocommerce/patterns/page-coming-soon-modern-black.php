<?php
/**
 * Title: Coming Soon Modern Black
 * Slug: woocommerce/page-coming-soon-modern-black
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

$default_image = PatternsHelper::get_image_url( $images, 0, 'assets/images/pattern-placeholders/music-black-and-white-white-photography-darkness-black.jpg' );
$email         = get_option( 'admin_email', 'marianne.renoir@mail.com' );

?>
<!-- wp:woocommerce/coming-soon {"color":"#000000","className":"woocommerce-coming-soon-modern-black wp-block-woocommerce-background-color"} -->
<div class="wp-block-woocommerce-coming-soon woocommerce-coming-soon-modern-black wp-block-woocommerce-background-color"><!-- wp:cover {"url":"<?php echo esc_url( $default_image ); ?>","dimRatio":0,"minHeight":100,"minHeightUnit":"vh","className":"is-dark coming-soon-is-vertically-aligned-center coming-soon-cover","style":{"spacing":{"padding":{"top":"0px","bottom":"0px","left":"0px","right":"0px"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-cover is-dark coming-soon-is-vertically-aligned-center coming-soon-cover" style="padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;min-height:100vh"><span aria-hidden="true" class="wp-block-cover__background has-background-dim-0 has-background-dim"></span><img class="wp-block-cover__image-background" alt="" src="<?php echo esc_url( $default_image ); ?>" data-object-fit="cover"/><div class="wp-block-cover__inner-container"><!-- wp:group {"align":"wide","style":{"dimensions":{"minHeight":"100vh"},"spacing":{"padding":{"top":"0","bottom":"46px","left":"0","right":"0"},"margin":{"top":"0","bottom":"0px"},"blockGap":"0"},"position":{"type":""}},"layout":{"type":"flex","orientation":"vertical","verticalAlignment":"space-between","justifyContent":"stretch"}} -->
		<div class="wp-block-group alignwide" style="min-height:100vh;margin-top:0;margin-bottom:0px;padding-top:0;padding-right:0;padding-bottom:46px;padding-left:0"><!-- wp:group {"align":"wide","style":{"layout":{"selfStretch":"fit","flexSize":null},"dimensions":{"minHeight":""},"spacing":{"padding":{"bottom":"8px"}}},"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"space-between","verticalAlignment":"center"}} -->
			<div class="wp-block-group alignwide" style="padding-bottom:8px"><!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|20"},"layout":{"selfStretch":"fit","flexSize":null}},"layout":{"type":"flex","orientation":"horizontal"}} -->
				<div class="wp-block-group"><!-- wp:group {"style":{"spacing":{"blockGap":"0px"}}} -->
					<div class="wp-block-group"><!-- wp:site-title {"level":0,"style":{"elements":{"link":{"color":{"text":"#ffffff"}}},"typography":{"fontSize":"18px","fontStyle":"normal","fontWeight":"500","letterSpacing":"-0.36px","textTransform":"capitalize"}},"textColor":"#ffffff","fontFamily":"<?php echo esc_attr( $inter_font_family ); ?>"} /--></div>
				<!-- /wp:group --></div>
			<!-- /wp:group -->

			<!-- wp:template-part {"slug":"coming-soon-social-links","theme":"woocommerce/woocommerce","tagName":"div"} /--></div>
		<!-- /wp:group -->

		<!-- wp:group {"align":"wide","style":{"spacing":{"padding":{"top":"0px","bottom":"0px","right":"0","left":"0"},"margin":{"bottom":"0"},"blockGap":"0px"},"dimensions":{"minHeight":"650px"}},"layout":{"type":"flex","orientation":"vertical","justifyContent":"stretch","verticalAlignment":"bottom"}} -->
		<div class="wp-block-group alignwide" style="min-height:650px;margin-bottom:0;padding-top:0px;padding-right:0;padding-bottom:0px;padding-left:0"><!-- wp:heading {"textAlign":"center","style":{"spacing":{"margin":{"bottom":"153px","top":"0"}},"typography":{"fontSize":"100px","lineHeight":"1.19","fontStyle":"normal","fontWeight":"400"}},"fontFamily":"<?php echo esc_attr( $cardo_font_family ); ?>"} -->
			<h2 class="wp-block-heading has-text-align-center has-heading-font-family" style="margin-top:0;margin-bottom:153px;font-size:100px;font-style:normal;font-weight:400;line-height:1.19"><?php echo esc_html( _x( 'Stay tuned.', 'Coming Soon template heading', 'woocommerce' ) ); ?></h2>
		<!-- /wp:heading -->

		<!-- wp:paragraph {"align":"center","style":{"color":{"text":"#a7aaad"},"elements":{"link":{"color":{"text":"#a7aaad"}}},"typography":{"fontSize":"14px"}}} -->
			<p class="has-text-align-center has-text-color has-link-color" style="color:#a7aaad;font-size:14px"><?php echo esc_html( $email ); ?></p>
		<!-- /wp:paragraph --></div>
		<!-- /wp:group --></div>
	<!-- /wp:group --></div></div>
	<!-- /wp:cover -->
</div>
<!-- /wp:woocommerce/coming-soon -->
