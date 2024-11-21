/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import {
	CustomerEffortScoreModalContainer,
	useCustomerEffortScoreModal,
} from '@woocommerce/customer-effort-score';
import { Button, TextareaControl, TextControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import FeedbackIcon from './feedback-icon';

interface CesFeedbackButtonProps {
	blockName: string;
	title?: string;
	firstQuestion?: string;
	feedbackLabel?: string;
	feedbackPlaceholder?: string;
	emailLabel?: string;
	emailHelp?: string;
	buttonText?: string;
	submitLabel?: string;
}

export const CesFeedbackButton = ( {
	blockName,
	title = __( 'Share your experience', 'woocommerce' ),
	firstQuestion = sprintf(
		/* translators: %s is the block name. */
		__(
			'It was easy for me to accomplish what I wanted with the %s.',
			'woocommerce'
		),
		blockName
	),
	feedbackLabel = sprintf(
		/* translators: %s is the block name. */
		__(
			'How can we improve the %s block for you? (Optional)',
			'woocommerce'
		),
		blockName
	),
	feedbackPlaceholder = __(
		"What did you try to build using this block? What did and didn't work?",
		'woocommerce'
	),
	emailLabel = __( 'Email address (Optional)', 'woocommerce' ),
	emailHelp = __(
		'Share if you would like to discuss your experience or participate in future research.',
		'woocommerce'
	),
	buttonText = __( 'Help us improve', 'woocommerce' ),
	// translators: %s is the block name.
	submitLabel = __( "🙏🏻 Thanks for sharing — we're on it!", 'woocommerce' ),
}: CesFeedbackButtonProps ) => {
	const { showCesModal } = useCustomerEffortScoreModal();

	const handleFeedbackClick = () => {
		showCesModal(
			{
				action: `${ blockName
					.toLowerCase()
					.replace( /\s+/g, '_' ) }_block_feedback`,
				title,
				firstQuestion,
				showDescription: false,
				onsubmitLabel: submitLabel,
				getExtraFieldsToBeShown: (
					extraFieldsValues: { [ key: string ]: string },
					setExtraFieldsValues: ( values: {
						[ key: string ]: string;
					} ) => void
				) => {
					return (
						<div>
							<TextareaControl
								label={ feedbackLabel }
								value={
									extraFieldsValues.feedbackComment || ''
								}
								onChange={ ( value ) =>
									setExtraFieldsValues( {
										...extraFieldsValues,
										feedbackComment: value,
									} )
								}
								placeholder={ feedbackPlaceholder }
							/>
							<TextControl
								label={ emailLabel }
								type="email"
								value={ extraFieldsValues.email || '' }
								onChange={ ( value ) =>
									setExtraFieldsValues( {
										...extraFieldsValues,
										email: value,
									} )
								}
								help={ emailHelp }
							/>
						</div>
					);
				},
			},
			{ blockName, shouldShowComments: () => false },
			{},
			{}
		);
	};

	return (
		<>
			<CustomerEffortScoreModalContainer />
			<Button
				variant="tertiary"
				icon={ <FeedbackIcon /> }
				iconSize={ 12 }
				onClick={ handleFeedbackClick }
				className="wc-block-editor__feedback-button"
			>
				{ buttonText }
			</Button>
		</>
	);
};
