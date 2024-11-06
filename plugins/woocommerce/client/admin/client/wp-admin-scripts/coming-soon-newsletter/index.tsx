/**
 * External dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/editor';
import { __ } from '@wordpress/i18n';

const ComingSoonNewsletterMailpoetPanel = () => {
	console.log( 'hello' );

	return (
		<PluginDocumentSettingPanel
			name="coming-soon-newsletter-mailpoet-panel"
			title="Launch Newsletter"
			className="coming-soon-newsletter-mailpoet-panel"
		>
			<div>
				<h2>{ __( 'Set up email marketing', 'woocommerce' ) }</h2>
				<p></p>
				<form>
					<input type="email" placeholder="Email" />
					<input type="submit" value="Sign Up" />
				</form>
			</div>
		</PluginDocumentSettingPanel>
	);
};

registerPlugin( 'plugin-coming-soon-newsletter-mailpoet-panel', {
	render: ComingSoonNewsletterMailpoetPanel,
	icon: 'palmtree',
} );
