/* global Cookies */
jQuery( function ( $ ) {
	// Orderby
	$( '.woocommerce-ordering' ).on( 'change', 'select.orderby', function () {
		$( this ).closest( 'form' ).trigger( 'submit' );
	} );

	// Target quantity inputs on product pages
	$( 'input.qty:not(.product-quantity input.qty)' ).each( function () {
		var min = parseFloat( $( this ).attr( 'min' ) );

		if ( min >= 0 && parseFloat( $( this ).val() ) < min ) {
			$( this ).val( min );
		}
	} );

	var noticeID = $( '.woocommerce-store-notice' ).data( 'noticeId' ) || '',
		cookieName = 'store_notice' + noticeID;

	// Check the value of that cookie and show/hide the notice accordingly
	if ( 'hidden' === Cookies.get( cookieName ) ) {
		$( '.woocommerce-store-notice' ).hide();
	} else {
		$( '.woocommerce-store-notice' ).show();
	}

	// Set a cookie and hide the store notice when the dismiss button is clicked
	$( '.woocommerce-store-notice__dismiss-link' ).on(
		'click',
		function ( event ) {
			Cookies.set( cookieName, 'hidden', { path: '/' } );
			$( '.woocommerce-store-notice' ).hide();
			event.preventDefault();
		}
	);

	// Make form field descriptions toggle on focus.
	if ( $( '.woocommerce-input-wrapper span.description' ).length ) {
		$( document.body ).on( 'click', function () {
			$( '.woocommerce-input-wrapper span.description:visible' )
				.prop( 'aria-hidden', true )
				.slideUp( 250 );
		} );
	}

	$( '.woocommerce-input-wrapper' ).on( 'click', function ( event ) {
		event.stopPropagation();
	} );

	$( '.woocommerce-input-wrapper :input' )
		.on( 'keydown', function ( event ) {
			var input = $( this ),
				parent = input.parent(),
				description = parent.find( 'span.description' );

			if (
				27 === event.which &&
				description.length &&
				description.is( ':visible' )
			) {
				description.prop( 'aria-hidden', true ).slideUp( 250 );
				event.preventDefault();
				return false;
			}
		} )
		.on( 'click focus', function () {
			var input = $( this ),
				parent = input.parent(),
				description = parent.find( 'span.description' );

			parent.addClass( 'currentTarget' );

			$(
				'.woocommerce-input-wrapper:not(.currentTarget) span.description:visible'
			)
				.prop( 'aria-hidden', true )
				.slideUp( 250 );

			if ( description.length && description.is( ':hidden' ) ) {
				description.prop( 'aria-hidden', false ).slideDown( 250 );
			}

			parent.removeClass( 'currentTarget' );
		} );

	// Common scroll to element code.
	$.scroll_to_notices = function ( scrollElement ) {
		if ( scrollElement.length ) {
			$( 'html, body' ).animate(
				{
					scrollTop: scrollElement.offset().top - 100,
				},
				1000
			);
		}
	};

	// Show password visibility hover icon on woocommerce forms
	$( '.woocommerce form .woocommerce-Input[type="password"]' ).wrap(
		'<span class="password-input"></span>'
	);
	// Add 'password-input' class to the password wrapper in checkout page.
	$( '.woocommerce form input' )
		.filter( ':password' )
		.parent( 'span' )
		.addClass( 'password-input' );

	$( '.password-input' ).append(
		'<span class="show-password-input"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" focusable="false"><path d="M3.99961 13C4.67043 13.3354 4.6703 13.3357 4.67017 13.3359L4.67298 13.3305C4.67621 13.3242 4.68184 13.3135 4.68988 13.2985C4.70595 13.2686 4.7316 13.2218 4.76695 13.1608C4.8377 13.0385 4.94692 12.8592 5.09541 12.6419C5.39312 12.2062 5.84436 11.624 6.45435 11.0431C7.67308 9.88241 9.49719 8.75 11.9996 8.75C14.502 8.75 16.3261 9.88241 17.5449 11.0431C18.1549 11.624 18.6061 12.2062 18.9038 12.6419C19.0523 12.8592 19.1615 13.0385 19.2323 13.1608C19.2676 13.2218 19.2933 13.2686 19.3093 13.2985C19.3174 13.3135 19.323 13.3242 19.3262 13.3305L19.3291 13.3359C19.3289 13.3357 19.3288 13.3354 19.9996 13C20.6704 12.6646 20.6703 12.6643 20.6701 12.664L20.6697 12.6632L20.6688 12.6614L20.6662 12.6563L20.6583 12.6408C20.6517 12.6282 20.6427 12.6108 20.631 12.5892C20.6078 12.5459 20.5744 12.4852 20.5306 12.4096C20.4432 12.2584 20.3141 12.0471 20.1423 11.7956C19.7994 11.2938 19.2819 10.626 18.5794 9.9569C17.1731 8.61759 14.9972 7.25 11.9996 7.25C9.00203 7.25 6.82614 8.61759 5.41987 9.9569C4.71736 10.626 4.19984 11.2938 3.85694 11.7956C3.68511 12.0471 3.55605 12.2584 3.4686 12.4096C3.42484 12.4852 3.39142 12.5459 3.36818 12.5892C3.35656 12.6108 3.34748 12.6282 3.34092 12.6408L3.33297 12.6563L3.33041 12.6614L3.32948 12.6632L3.32911 12.664C3.32894 12.6643 3.32879 12.6646 3.99961 13ZM11.9996 16C13.9326 16 15.4996 14.433 15.4996 12.5C15.4996 10.567 13.9326 9 11.9996 9C10.0666 9 8.49961 10.567 8.49961 12.5C8.49961 14.433 10.0666 16 11.9996 16Z"></path></svg></span>'
	);

	$('.show-password-input').on('click', function () {
		const $input = $(this).siblings('input');
		const isPasswordVisible = $(this).hasClass('display-password');
	
		$input.prop('type', isPasswordVisible ? 'password' : 'text');
	
		$(this).toggleClass('display-password');
	
		const newIcon = isPasswordVisible
			? '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" focusable="false"><path d="M3.99961 13C4.67043 13.3354 4.6703 13.3357 4.67017 13.3359L4.67298 13.3305C4.67621 13.3242 4.68184 13.3135 4.68988 13.2985C4.70595 13.2686 4.7316 13.2218 4.76695 13.1608C4.8377 13.0385 4.94692 12.8592 5.09541 12.6419C5.39312 12.2062 5.84436 11.624 6.45435 11.0431C7.67308 9.88241 9.49719 8.75 11.9996 8.75C14.502 8.75 16.3261 9.88241 17.5449 11.0431C18.1549 11.624 18.6061 12.2062 18.9038 12.6419C19.0523 12.8592 19.1615 13.0385 19.2323 13.1608C19.2676 13.2218 19.2933 13.2686 19.3093 13.2985C19.3174 13.3135 19.323 13.3242 19.3262 13.3305L19.3291 13.3359C19.3289 13.3357 19.3288 13.3354 19.9996 13C20.6704 12.6646 20.6703 12.6643 20.6701 12.664L20.6697 12.6632L20.6688 12.6614L20.6662 12.6563L20.6583 12.6408C20.6517 12.6282 20.6427 12.6108 20.631 12.5892C20.6078 12.5459 20.5744 12.4852 20.5306 12.4096C20.4432 12.2584 20.3141 12.0471 20.1423 11.7956C19.7994 11.2938 19.2819 10.626 18.5794 9.9569C17.1731 8.61759 14.9972 7.25 11.9996 7.25C9.00203 7.25 6.82614 8.61759 5.41987 9.9569C4.71736 10.626 4.19984 11.2938 3.85694 11.7956C3.68511 12.0471 3.55605 12.2584 3.4686 12.4096C3.42484 12.4852 3.39142 12.5459 3.36818 12.5892C3.35656 12.6108 3.34748 12.6282 3.34092 12.6408L3.33297 12.6563L3.33041 12.6614L3.32948 12.6632L3.32911 12.664C3.32894 12.6643 3.32879 12.6646 3.99961 13ZM11.9996 16C13.9326 16 15.4996 14.433 15.4996 12.5C15.4996 10.567 13.9326 9 11.9996 9C10.0666 9 8.49961 10.567 8.49961 12.5C8.49961 14.433 10.0666 16 11.9996 16Z"></path></svg>'
			: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" focusable="false"><path d="M20.7 12.7s0-.1-.1-.2c0-.2-.2-.4-.4-.6-.3-.5-.9-1.2-1.6-1.8-.7-.6-1.5-1.3-2.6-1.8l-.6 1.4c.9.4 1.6 1 2.1 1.5.6.6 1.1 1.2 1.4 1.6.1.2.3.4.3.5v.1l.7-.3.7-.3Zm-5.2-9.3-1.8 4c-.5-.1-1.1-.2-1.7-.2-3 0-5.2 1.4-6.6 2.7-.7.7-1.2 1.3-1.6 1.8-.2.3-.3.5-.4.6 0 0 0 .1-.1.2s0 0 .7.3l.7.3V13c0-.1.2-.3.3-.5.3-.4.7-1 1.4-1.6 1.2-1.2 3-2.3 5.5-2.3H13v.3c-.4 0-.8-.1-1.1-.1-1.9 0-3.5 1.6-3.5 3.5s.6 2.3 1.6 2.9l-2 4.4.9.4 7.6-16.2-.9-.4Zm-3 12.6c1.7-.2 3-1.7 3-3.5s-.2-1.4-.6-1.9L12.4 16Z"></path></svg>';
	
		$(this).html(newIcon);
	});

	$( 'a.coming-soon-footer-banner-dismiss' ).on( 'click', function ( e ) {
		var target = $( e.target );
		$.ajax( {
			type: 'post',
			url: target.data( 'rest-url' ),
			data: {
				woocommerce_meta: {
					coming_soon_banner_dismissed: 'yes',
				},
			},
			beforeSend: function ( xhr ) {
				xhr.setRequestHeader(
					'X-WP-Nonce',
					target.data( 'rest-nonce' )
				);
			},
			complete: function () {
				$( '#coming-soon-footer-banner' ).hide();
			},
		} );
	} );
});

/**
 * Focus on the first notice element on the page.
 * 
 * Populated live regions don't always are announced by screen readers.
 * This function focus on the first notice message with the role="alert"
 * attribute to make sure it's announced.
 */
function focus_populate_live_region() {
	var noticeClasses = [ 'woocommerce-message', 'woocommerce-error', 'wc-block-components-notice-banner' ];
	var noticeSelectors = noticeClasses.map( function( className ) {
		return '.' + className + '[role="alert"]';
	} ).join( ', ' );
	var noticeElements = document.querySelectorAll( noticeSelectors );

	if ( noticeElements.length === 0 ) {
		return;
	}

	var firstNotice = noticeElements[0];

	firstNotice.setAttribute( 'tabindex', '-1' );

	// Wait for the element to get the tabindex attribute so it can be focused.
	var delayFocusNoticeId = setTimeout( function() {
		firstNotice.focus();
		clearTimeout( delayFocusNoticeId );
	}, 500 );
}

/**
 * Refresh the sorted by live region.
 */
function refresh_sorted_by_live_region () {
	var sorted_by_live_region = document.querySelector( '.woocommerce-result-count[data-is-sorted-by="true"]' );

	if ( sorted_by_live_region ) {
		var text = sorted_by_live_region.innerHTML;

		var sorted_by_live_region_id = setTimeout( function() {
			sorted_by_live_region.innerHTML = '';
			sorted_by_live_region.innerHTML = text;
			clearTimeout( sorted_by_live_region_id );
		}, 1000 );
	}
}

function on_document_ready() {
	focus_populate_live_region();
	refresh_sorted_by_live_region();
}

document.addEventListener( 'DOMContentLoaded' , on_document_ready );
