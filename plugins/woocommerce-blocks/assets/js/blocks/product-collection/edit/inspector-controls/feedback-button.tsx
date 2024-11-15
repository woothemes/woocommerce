/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	CustomerEffortScoreModalContainer,
	useCustomerEffortScoreModal,
} from '@woocommerce/customer-effort-score';
import { Button, TextareaControl, TextControl } from '@wordpress/components';

export const FeedbackButton = () => {
	const { showCesModal } = useCustomerEffortScoreModal();

	const handleFeedbackClick = () => {
		showCesModal(
			{
				action: 'product_collection_block_feedback',
				title: __( 'Share your experience', 'woocommerce' ),
				firstQuestion: __(
					'It was easy for me to accomplish what I wanted with the Product Collection block.',
					'woocommerce'
				),
				showDescription: false,
				shouldShowComments: () => false,
				onsubmitLabel: __( 'Thanks for your feedback!', 'woocommerce' ),
				getExtraFieldsToBeShown: (
					extraFieldsValues: { [ key: string ]: string },
					setExtraFieldsValues: ( values: {
						[ key: string ]: string;
					} ) => void
				) => {
					return (
						<div>
							<TextareaControl
								label={ __(
									'How can we improve the Product Collection block for you? (Optional)',
									'woocommerce'
								) }
								value={
									extraFieldsValues.feedbackComment || ''
								}
								onChange={ ( value ) =>
									setExtraFieldsValues( {
										...extraFieldsValues,
										feedbackComment: value,
									} )
								}
								placeholder={ __(
									"What did you try to build using this block? What did and didn't work?",
									'woocommerce'
								) }
							/>
							<TextControl
								label={ __(
									'Email address (Optional)',
									'woocommerce'
								) }
								type="email"
								value={ extraFieldsValues.email || '' }
								onChange={ ( value ) =>
									setExtraFieldsValues( {
										...extraFieldsValues,
										email: value,
									} )
								}
								help={ __(
									'Share if you would like to discuss your experience or participate in future research.',
									'woocommerce'
								) }
							/>
						</div>
					);
				},
			},
			{
				blockName: 'Product Collection',
			},
			{},
			{}
		);
	};

	return (
		<>
			<CustomerEffortScoreModalContainer />
			<Button
				variant="tertiary"
				iconSize={ 12 }
				onClick={ handleFeedbackClick }
				className="wc-block-editor--product-collection__feedback-button"
			>
				{ __( 'Help us improve', 'woocommerce' ) }
			</Button>
		</>
	);
};
