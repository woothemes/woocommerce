(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[1099],{

/***/ "../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ _slicedToArray)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
var arrayWithHoles = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
var nonIterableRest = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return (0,arrayWithHoles/* default */.A)(arr) || _iterableToArrayLimit(arr, i) || (0,unsupportedIterableToArray/* default */.A)(arr, i) || (0,nonIterableRest/* default */.A)();
}

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+a11y@4.0.1/node_modules/@wordpress/a11y/build-module/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  L: () => (/* binding */ speak)
});

// UNUSED EXPORTS: setup

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dom-ready@4.0.1/node_modules/@wordpress/dom-ready/build-module/index.js
/**
 * @typedef {() => void} Callback
 *
 * TODO: Remove this typedef and inline `() => void` type.
 *
 * This typedef is used so that a descriptive type is provided in our
 * automatically generated documentation.
 *
 * An in-line type `() => void` would be preferable, but the generated
 * documentation is `null` in that case.
 *
 * @see https://github.com/WordPress/gutenberg/issues/18045
 */

/**
 * Specify a function to execute when the DOM is fully loaded.
 *
 * @param {Callback} callback A function to execute after the DOM is ready.
 *
 * @example
 * ```js
 * import domReady from '@wordpress/dom-ready';
 *
 * domReady( function() {
 * 	//do something after DOM loads.
 * } );
 * ```
 *
 * @return {void}
 */
function domReady(callback) {
  if (typeof document === 'undefined') {
    return;
  }
  if (document.readyState === 'complete' ||
  // DOMContentLoaded + Images/Styles/etc loaded, so we call directly.
  document.readyState === 'interactive' // DOMContentLoaded fires at this point, so we call directly.
  ) {
    return void callback();
  }

  // DOMContentLoaded has not fired yet, delay callback until then.
  document.addEventListener('DOMContentLoaded', callback);
}
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+a11y@4.0.1/node_modules/@wordpress/a11y/build-module/add-intro-text.js
/**
 * WordPress dependencies
 */


/**
 * Build the explanatory text to be placed before the aria live regions.
 *
 * This text is initially hidden from assistive technologies by using a `hidden`
 * HTML attribute which is then removed once a message fills the aria-live regions.
 *
 * @return {HTMLParagraphElement} The explanatory text HTML element.
 */
function addIntroText() {
  const introText = document.createElement('p');
  introText.id = 'a11y-speak-intro-text';
  introText.className = 'a11y-speak-intro-text';
  introText.textContent = (0,build_module.__)('Notifications');
  introText.setAttribute('style', 'position: absolute;' + 'margin: -1px;' + 'padding: 0;' + 'height: 1px;' + 'width: 1px;' + 'overflow: hidden;' + 'clip: rect(1px, 1px, 1px, 1px);' + '-webkit-clip-path: inset(50%);' + 'clip-path: inset(50%);' + 'border: 0;' + 'word-wrap: normal !important;');
  introText.setAttribute('hidden', 'hidden');
  const {
    body
  } = document;
  if (body) {
    body.appendChild(introText);
  }
  return introText;
}
//# sourceMappingURL=add-intro-text.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+a11y@4.0.1/node_modules/@wordpress/a11y/build-module/add-container.js
/**
 * Build the live regions markup.
 *
 * @param {string} [ariaLive] Value for the 'aria-live' attribute; default: 'polite'.
 *
 * @return {HTMLDivElement} The ARIA live region HTML element.
 */
function addContainer(ariaLive = 'polite') {
  const container = document.createElement('div');
  container.id = `a11y-speak-${ariaLive}`;
  container.className = 'a11y-speak-region';
  container.setAttribute('style', 'position: absolute;' + 'margin: -1px;' + 'padding: 0;' + 'height: 1px;' + 'width: 1px;' + 'overflow: hidden;' + 'clip: rect(1px, 1px, 1px, 1px);' + '-webkit-clip-path: inset(50%);' + 'clip-path: inset(50%);' + 'border: 0;' + 'word-wrap: normal !important;');
  container.setAttribute('aria-live', ariaLive);
  container.setAttribute('aria-relevant', 'additions text');
  container.setAttribute('aria-atomic', 'true');
  const {
    body
  } = document;
  if (body) {
    body.appendChild(container);
  }
  return container;
}
//# sourceMappingURL=add-container.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+a11y@4.0.1/node_modules/@wordpress/a11y/build-module/clear.js
/**
 * Clears the a11y-speak-region elements and hides the explanatory text.
 */
function clear() {
  const regions = document.getElementsByClassName('a11y-speak-region');
  const introText = document.getElementById('a11y-speak-intro-text');
  for (let i = 0; i < regions.length; i++) {
    regions[i].textContent = '';
  }

  // Make sure the explanatory text is hidden from assistive technologies.
  if (introText) {
    introText.setAttribute('hidden', 'hidden');
  }
}
//# sourceMappingURL=clear.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+a11y@4.0.1/node_modules/@wordpress/a11y/build-module/filter-message.js
let previousMessage = '';

/**
 * Filter the message to be announced to the screenreader.
 *
 * @param {string} message The message to be announced.
 *
 * @return {string} The filtered message.
 */
function filterMessage(message) {
  /*
   * Strip HTML tags (if any) from the message string. Ideally, messages should
   * be simple strings, carefully crafted for specific use with A11ySpeak.
   * When re-using already existing strings this will ensure simple HTML to be
   * stripped out and replaced with a space. Browsers will collapse multiple
   * spaces natively.
   */
  message = message.replace(/<[^<>]+>/g, ' ');

  /*
   * Safari + VoiceOver don't announce repeated, identical strings. We use
   * a `no-break space` to force them to think identical strings are different.
   */
  if (previousMessage === message) {
    message += '\u00A0';
  }
  previousMessage = message;
  return message;
}
//# sourceMappingURL=filter-message.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+a11y@4.0.1/node_modules/@wordpress/a11y/build-module/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */





/**
 * Create the live regions.
 */
function setup() {
  const introText = document.getElementById('a11y-speak-intro-text');
  const containerAssertive = document.getElementById('a11y-speak-assertive');
  const containerPolite = document.getElementById('a11y-speak-polite');
  if (introText === null) {
    addIntroText();
  }
  if (containerAssertive === null) {
    addContainer('assertive');
  }
  if (containerPolite === null) {
    addContainer('polite');
  }
}

/**
 * Run setup on domReady.
 */
domReady(setup);

/**
 * Allows you to easily announce dynamic interface updates to screen readers using ARIA live regions.
 * This module is inspired by the `speak` function in `wp-a11y.js`.
 *
 * @param {string} message    The message to be announced by assistive technologies.
 * @param {string} [ariaLive] The politeness level for aria-live; default: 'polite'.
 *
 * @example
 * ```js
 * import { speak } from '@wordpress/a11y';
 *
 * // For polite messages that shouldn't interrupt what screen readers are currently announcing.
 * speak( 'The message you want to send to the ARIA live region' );
 *
 * // For assertive messages that should interrupt what screen readers are currently announcing.
 * speak( 'The message you want to send to the ARIA live region', 'assertive' );
 * ```
 */
function speak(message, ariaLive) {
  /*
   * Clear previous messages to allow repeated strings being read out and hide
   * the explanatory text from assistive technologies.
   */
  clear();
  message = filterMessage(message);
  const introText = document.getElementById('a11y-speak-intro-text');
  const containerAssertive = document.getElementById('a11y-speak-assertive');
  const containerPolite = document.getElementById('a11y-speak-polite');
  if (containerAssertive && ariaLive === 'assertive') {
    containerAssertive.textContent = message;
  } else if (containerPolite) {
    containerPolite.textContent = message;
  }

  /*
   * Make the explanatory text available to assistive technologies by removing
   * the 'hidden' HTML attribute.
   */
  if (introText) {
    introText.removeAttribute('hidden');
  }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/spinner/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (/* binding */ spinner)
});

// UNUSED EXPORTS: Spinner, UnforwardedSpinner

// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1__@types+react@18.3.16_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js + 1 modules
var emotion_styled_base_browser_esm = __webpack_require__("../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1__@types+react@18.3.16_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__("../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/config-values.js
var config_values = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/config-values.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/colors-values.js
var colors_values = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/colors-values.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/spinner/styles.js

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */

const spinAnimation = (0,emotion_react_browser_esm/* keyframes */.i7)`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `;
const StyledSpinner = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("svg",  true ? {
  target: "ea4tfvq2"
} : 0)("width:", config_values/* default */.A.spinnerSize, "px;height:", config_values/* default */.A.spinnerSize, "px;display:inline-block;margin:5px 11px 0;position:relative;color:", colors_values/* COLORS */.l.theme.accent, ";overflow:visible;opacity:1;background-color:transparent;" + ( true ? "" : 0));
const commonPathProps =  true ? {
  name: "9s4963",
  styles: "fill:transparent;stroke-width:1.5px"
} : 0;
const SpinnerTrack = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("circle",  true ? {
  target: "ea4tfvq1"
} : 0)(commonPathProps, ";stroke:", colors_values/* COLORS */.l.gray[300], ";" + ( true ? "" : 0));
const SpinnerIndicator = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("path",  true ? {
  target: "ea4tfvq0"
} : 0)(commonPathProps, ";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ", spinAnimation, ";" + ( true ? "" : 0));
//# sourceMappingURL=styles.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/spinner/index.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */



function UnforwardedSpinner({
  className,
  ...props
}, forwardedRef) {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledSpinner, {
    className: (0,clsx/* default */.A)('components-spinner', className),
    viewBox: "0 0 100 100",
    width: "16",
    height: "16",
    xmlns: "http://www.w3.org/2000/svg",
    role: "presentation",
    focusable: "false",
    ...props,
    ref: forwardedRef,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SpinnerTrack, {
      cx: "50",
      cy: "50",
      r: "50",
      vectorEffect: "non-scaling-stroke"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(SpinnerIndicator, {
      d: "m 50 0 a 50 50 0 0 1 50 50",
      vectorEffect: "non-scaling-stroke"
    })]
  });
}
/**
 * `Spinner` is a component used to notify users that their action is being processed.
 *
 * ```js
 *   import { Spinner } from '@wordpress/components';
 *
 *   function Example() {
 *     return <Spinner />;
 *   }
 * ```
 */
const Spinner = (0,react.forwardRef)(UnforwardedSpinner);
/* harmony default export */ const spinner = (Spinner);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/textarea-control/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ textarea_control)
});

// UNUSED EXPORTS: TextareaControl

// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js
var use_instance_id = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/base-control/index.js
var base_control = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/base-control/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1__@types+react@18.3.16_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js + 1 modules
var emotion_styled_base_browser_esm = __webpack_require__("../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1__@types+react@18.3.16_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__("../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/colors-values.js
var colors_values = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/colors-values.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/config-values.js
var config_values = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/config-values.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/input/base.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


const inputStyleNeutral = /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("box-shadow:0 0 0 transparent;border-radius:", config_values/* default */.A.radiusBlockUi, ";border:", config_values/* default */.A.borderWidth, " solid ", colors_values/* COLORS */.l.ui.border, ";@media not ( prefers-reduced-motion ){transition:box-shadow 0.1s linear;}" + ( true ? "" : 0),  true ? "" : 0);
const inputStyleFocus = /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("border-color:", colors_values/* COLORS */.l.theme.accent, ";box-shadow:0 0 0 calc( ", config_values/* default */.A.borderWidthFocus, " - ", config_values/* default */.A.borderWidth, " ) ", colors_values/* COLORS */.l.theme.accent, ";outline:2px solid transparent;" + ( true ? "" : 0),  true ? "" : 0);
//# sourceMappingURL=base.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/font.js + 1 modules
var font = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/font.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/breakpoint-values.js
/* harmony default export */ const breakpoint_values = ({
  huge: '1440px',
  wide: '1280px',
  'x-large': '1080px',
  large: '960px',
  // admin sidebar auto folds
  medium: '782px',
  // Adminbar goes big.
  small: '600px',
  mobile: '480px',
  'zoomed-in': '280px'
});
//# sourceMappingURL=breakpoint-values.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/breakpoint.js
/**
 * Internal dependencies
 */


/**
 * @param {keyof breakpoints} point
 * @return {string} Media query declaration.
 */
const breakpoint = point => `@media (min-width: ${breakpoint_values[point]})`;
//# sourceMappingURL=breakpoint.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/input/input-control.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */




const inputControl = /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("display:block;font-family:", (0,font/* font */.g)('default.fontFamily'), ";padding:6px 8px;", inputStyleNeutral, ";font-size:", (0,font/* font */.g)('mobileTextMinFontSize'), ";line-height:normal;", breakpoint('small'), "{font-size:", (0,font/* font */.g)('default.fontSize'), ";line-height:normal;}&:focus{", inputStyleFocus, ";}&::-webkit-input-placeholder{color:", colors_values/* COLORS */.l.ui.darkGrayPlaceholder, ";}&::-moz-placeholder{opacity:1;color:", colors_values/* COLORS */.l.ui.darkGrayPlaceholder, ";}&:-ms-input-placeholder{color:", colors_values/* COLORS */.l.ui.darkGrayPlaceholder, ";}.is-dark-theme &{&::-webkit-input-placeholder{color:", colors_values/* COLORS */.l.ui.lightGrayPlaceholder, ";}&::-moz-placeholder{opacity:1;color:", colors_values/* COLORS */.l.ui.lightGrayPlaceholder, ";}&:-ms-input-placeholder{color:", colors_values/* COLORS */.l.ui.lightGrayPlaceholder, ";}}" + ( true ? "" : 0),  true ? "" : 0);
//# sourceMappingURL=input-control.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/textarea-control/styles/textarea-control-styles.js

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

const StyledTextarea = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("textarea",  true ? {
  target: "e1w5nnrk0"
} : 0)("width:100%;", inputControl, ";" + ( true ? "" : 0));
//# sourceMappingURL=textarea-control-styles.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/textarea-control/index.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function UnforwardedTextareaControl(props, ref) {
  const {
    __nextHasNoMarginBottom,
    label,
    hideLabelFromVision,
    value,
    help,
    onChange,
    rows = 4,
    className,
    ...additionalProps
  } = props;
  const instanceId = (0,use_instance_id/* default */.A)(TextareaControl);
  const id = `inspector-textarea-control-${instanceId}`;
  const onChangeValue = event => onChange(event.target.value);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(base_control/* default */.Ay, {
    __nextHasNoMarginBottom: __nextHasNoMarginBottom,
    label: label,
    hideLabelFromVision: hideLabelFromVision,
    id: id,
    help: help,
    className: className,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTextarea, {
      className: "components-textarea-control__input",
      id: id,
      rows: rows,
      onChange: onChangeValue,
      "aria-describedby": !!help ? id + '__help' : undefined,
      value: value,
      ref: ref,
      ...additionalProps
    })
  });
}

/**
 * TextareaControls are TextControls that allow for multiple lines of text, and
 * wrap overflow text onto a new line. They are a fixed height and scroll
 * vertically when the cursor reaches the bottom of the field.
 *
 * ```jsx
 * import { TextareaControl } from '@wordpress/components';
 * import { useState } from '@wordpress/element';
 *
 * const MyTextareaControl = () => {
 *   const [ text, setText ] = useState( '' );
 *
 *   return (
 *     <TextareaControl
 *       label="Text"
 *       help="Enter some text"
 *       value={ text }
 *       onChange={ ( value ) => setText( value ) }
 *     />
 *   );
 * };
 * ```
 */
const TextareaControl = (0,react.forwardRef)(UnforwardedTextareaControl);
/* harmony default export */ const textarea_control = (TextareaControl);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/config-values.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _space__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/space.js");
/* harmony import */ var _colors_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/colors-values.js");
/**
 * Internal dependencies
 */


const CONTROL_HEIGHT = '36px';
const CONTROL_PADDING_X = '12px';
const CONTROL_PROPS = {
  controlSurfaceColor: _colors_values__WEBPACK_IMPORTED_MODULE_0__/* .COLORS */ .l.white,
  controlTextActiveColor: _colors_values__WEBPACK_IMPORTED_MODULE_0__/* .COLORS */ .l.theme.accent,
  controlPaddingX: CONTROL_PADDING_X,
  controlPaddingXLarge: `calc(${CONTROL_PADDING_X} * 1.3334)`,
  controlPaddingXSmall: `calc(${CONTROL_PADDING_X} / 1.3334)`,
  controlBackgroundColor: _colors_values__WEBPACK_IMPORTED_MODULE_0__/* .COLORS */ .l.white,
  controlBorderRadius: '2px',
  controlBoxShadow: 'transparent',
  controlBoxShadowFocus: `0 0 0 0.5px ${_colors_values__WEBPACK_IMPORTED_MODULE_0__/* .COLORS */ .l.theme.accent}`,
  controlDestructiveBorderColor: _colors_values__WEBPACK_IMPORTED_MODULE_0__/* .COLORS */ .l.alert.red,
  controlHeight: CONTROL_HEIGHT,
  controlHeightXSmall: `calc( ${CONTROL_HEIGHT} * 0.6 )`,
  controlHeightSmall: `calc( ${CONTROL_HEIGHT} * 0.8 )`,
  controlHeightLarge: `calc( ${CONTROL_HEIGHT} * 1.2 )`,
  controlHeightXLarge: `calc( ${CONTROL_HEIGHT} * 1.4 )`
};
const TOGGLE_GROUP_CONTROL_PROPS = {
  toggleGroupControlBackgroundColor: CONTROL_PROPS.controlBackgroundColor,
  toggleGroupControlBorderColor: _colors_values__WEBPACK_IMPORTED_MODULE_0__/* .COLORS */ .l.ui.border,
  toggleGroupControlBackdropBackgroundColor: CONTROL_PROPS.controlSurfaceColor,
  toggleGroupControlBackdropBorderColor: _colors_values__WEBPACK_IMPORTED_MODULE_0__/* .COLORS */ .l.ui.border,
  toggleGroupControlButtonColorActive: CONTROL_PROPS.controlBackgroundColor
};

// Using Object.assign to avoid creating circular references when emitting
// TypeScript type declarations.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign({}, CONTROL_PROPS, TOGGLE_GROUP_CONTROL_PROPS, {
  colorDivider: 'rgba(0, 0, 0, 0.1)',
  colorScrollbarThumb: 'rgba(0, 0, 0, 0.2)',
  colorScrollbarThumbHover: 'rgba(0, 0, 0, 0.5)',
  colorScrollbarTrack: 'rgba(0, 0, 0, 0.04)',
  elevationIntensity: 1,
  radiusBlockUi: '2px',
  borderWidth: '1px',
  borderWidthFocus: '1.5px',
  borderWidthTab: '4px',
  spinnerSize: 16,
  fontSize: '13px',
  fontSizeH1: 'calc(2.44 * 13px)',
  fontSizeH2: 'calc(1.95 * 13px)',
  fontSizeH3: 'calc(1.56 * 13px)',
  fontSizeH4: 'calc(1.25 * 13px)',
  fontSizeH5: '13px',
  fontSizeH6: 'calc(0.8 * 13px)',
  fontSizeInputMobile: '16px',
  fontSizeMobile: '15px',
  fontSizeSmall: 'calc(0.92 * 13px)',
  fontSizeXSmall: 'calc(0.75 * 13px)',
  fontLineHeightBase: '1.4',
  fontWeight: 'normal',
  fontWeightHeading: '600',
  gridBase: '4px',
  cardBorderRadius: '2px',
  cardPaddingXSmall: `${(0,_space__WEBPACK_IMPORTED_MODULE_1__/* .space */ .x)(2)}`,
  cardPaddingSmall: `${(0,_space__WEBPACK_IMPORTED_MODULE_1__/* .space */ .x)(4)}`,
  cardPaddingMedium: `${(0,_space__WEBPACK_IMPORTED_MODULE_1__/* .space */ .x)(4)} ${(0,_space__WEBPACK_IMPORTED_MODULE_1__/* .space */ .x)(6)}`,
  cardPaddingLarge: `${(0,_space__WEBPACK_IMPORTED_MODULE_1__/* .space */ .x)(6)} ${(0,_space__WEBPACK_IMPORTED_MODULE_1__/* .space */ .x)(8)}`,
  popoverShadow: `0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)`,
  surfaceBackgroundColor: _colors_values__WEBPACK_IMPORTED_MODULE_0__/* .COLORS */ .l.white,
  surfaceBackgroundSubtleColor: '#F3F3F3',
  surfaceBackgroundTintColor: '#F5F5F5',
  surfaceBorderColor: 'rgba(0, 0, 0, 0.1)',
  surfaceBorderBoldColor: 'rgba(0, 0, 0, 0.15)',
  surfaceBorderSubtleColor: 'rgba(0, 0, 0, 0.05)',
  surfaceBackgroundTertiaryColor: _colors_values__WEBPACK_IMPORTED_MODULE_0__/* .COLORS */ .l.white,
  surfaceColor: _colors_values__WEBPACK_IMPORTED_MODULE_0__/* .COLORS */ .l.white,
  transitionDuration: '200ms',
  transitionDurationFast: '160ms',
  transitionDurationFaster: '120ms',
  transitionDurationFastest: '100ms',
  transitionTimingFunction: 'cubic-bezier(0.08, 0.52, 0.52, 1)',
  transitionTimingFunctionControl: 'cubic-bezier(0.12, 0.8, 0.32, 1)'
}));
//# sourceMappingURL=config-values.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+element@6.0.1/node_modules/@wordpress/element/build-module/create-interpolate-element.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * Internal dependencies
 */


/**
 * Object containing a React element.
 *
 * @typedef {import('react').ReactElement} Element
 */

let indoc, offset, output, stack;

/**
 * Matches tags in the localized string
 *
 * This is used for extracting the tag pattern groups for parsing the localized
 * string and along with the map converting it to a react element.
 *
 * There are four references extracted using this tokenizer:
 *
 * match: Full match of the tag (i.e. <strong>, </strong>, <br/>)
 * isClosing: The closing slash, if it exists.
 * name: The name portion of the tag (strong, br) (if )
 * isSelfClosed: The slash on a self closing tag, if it exists.
 *
 * @type {RegExp}
 */
const tokenizer = /<(\/)?(\w+)\s*(\/)?>/g;

/**
 * The stack frame tracking parse progress.
 *
 * @typedef Frame
 *
 * @property {Element}   element            A parent element which may still have
 * @property {number}    tokenStart         Offset at which parent element first
 *                                          appears.
 * @property {number}    tokenLength        Length of string marking start of parent
 *                                          element.
 * @property {number}    [prevOffset]       Running offset at which parsing should
 *                                          continue.
 * @property {number}    [leadingTextStart] Offset at which last closing element
 *                                          finished, used for finding text between
 *                                          elements.
 * @property {Element[]} children           Children.
 */

/**
 * Tracks recursive-descent parse state.
 *
 * This is a Stack frame holding parent elements until all children have been
 * parsed.
 *
 * @private
 * @param {Element} element            A parent element which may still have
 *                                     nested children not yet parsed.
 * @param {number}  tokenStart         Offset at which parent element first
 *                                     appears.
 * @param {number}  tokenLength        Length of string marking start of parent
 *                                     element.
 * @param {number}  [prevOffset]       Running offset at which parsing should
 *                                     continue.
 * @param {number}  [leadingTextStart] Offset at which last closing element
 *                                     finished, used for finding text between
 *                                     elements.
 *
 * @return {Frame} The stack frame tracking parse progress.
 */
function createFrame(element, tokenStart, tokenLength, prevOffset, leadingTextStart) {
  return {
    element,
    tokenStart,
    tokenLength,
    prevOffset,
    leadingTextStart,
    children: []
  };
}

/**
 * This function creates an interpolated element from a passed in string with
 * specific tags matching how the string should be converted to an element via
 * the conversion map value.
 *
 * @example
 * For example, for the given string:
 *
 * "This is a <span>string</span> with <a>a link</a> and a self-closing
 * <CustomComponentB/> tag"
 *
 * You would have something like this as the conversionMap value:
 *
 * ```js
 * {
 *     span: <span />,
 *     a: <a href={ 'https://github.com' } />,
 *     CustomComponentB: <CustomComponent />,
 * }
 * ```
 *
 * @param {string}                  interpolatedString The interpolation string to be parsed.
 * @param {Record<string, Element>} conversionMap      The map used to convert the string to
 *                                                     a react element.
 * @throws {TypeError}
 * @return {Element}  A wp element.
 */
const createInterpolateElement = (interpolatedString, conversionMap) => {
  indoc = interpolatedString;
  offset = 0;
  output = [];
  stack = [];
  tokenizer.lastIndex = 0;
  if (!isValidConversionMap(conversionMap)) {
    throw new TypeError('The conversionMap provided is not valid. It must be an object with values that are React Elements');
  }
  do {
    // twiddle our thumbs
  } while (proceed(conversionMap));
  return (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, ...output);
};

/**
 * Validate conversion map.
 *
 * A map is considered valid if it's an object and every value in the object
 * is a React Element
 *
 * @private
 *
 * @param {Object} conversionMap The map being validated.
 *
 * @return {boolean}  True means the map is valid.
 */
const isValidConversionMap = conversionMap => {
  const isObject = typeof conversionMap === 'object';
  const values = isObject && Object.values(conversionMap);
  return isObject && values.length && values.every(element => (0,_react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(element));
};

/**
 * This is the iterator over the matches in the string.
 *
 * @private
 *
 * @param {Object} conversionMap The conversion map for the string.
 *
 * @return {boolean} true for continuing to iterate, false for finished.
 */
function proceed(conversionMap) {
  const next = nextToken();
  const [tokenType, name, startOffset, tokenLength] = next;
  const stackDepth = stack.length;
  const leadingTextStart = startOffset > offset ? offset : null;
  if (!conversionMap[name]) {
    addText();
    return false;
  }
  switch (tokenType) {
    case 'no-more-tokens':
      if (stackDepth !== 0) {
        const {
          leadingTextStart: stackLeadingText,
          tokenStart
        } = stack.pop();
        output.push(indoc.substr(stackLeadingText, tokenStart));
      }
      addText();
      return false;
    case 'self-closed':
      if (0 === stackDepth) {
        if (null !== leadingTextStart) {
          output.push(indoc.substr(leadingTextStart, startOffset - leadingTextStart));
        }
        output.push(conversionMap[name]);
        offset = startOffset + tokenLength;
        return true;
      }

      // Otherwise we found an inner element.
      addChild(createFrame(conversionMap[name], startOffset, tokenLength));
      offset = startOffset + tokenLength;
      return true;
    case 'opener':
      stack.push(createFrame(conversionMap[name], startOffset, tokenLength, startOffset + tokenLength, leadingTextStart));
      offset = startOffset + tokenLength;
      return true;
    case 'closer':
      // If we're not nesting then this is easy - close the block.
      if (1 === stackDepth) {
        closeOuterElement(startOffset);
        offset = startOffset + tokenLength;
        return true;
      }

      // Otherwise we're nested and we have to close out the current
      // block and add it as a innerBlock to the parent.
      const stackTop = stack.pop();
      const text = indoc.substr(stackTop.prevOffset, startOffset - stackTop.prevOffset);
      stackTop.children.push(text);
      stackTop.prevOffset = startOffset + tokenLength;
      const frame = createFrame(stackTop.element, stackTop.tokenStart, stackTop.tokenLength, startOffset + tokenLength);
      frame.children = stackTop.children;
      addChild(frame);
      offset = startOffset + tokenLength;
      return true;
    default:
      addText();
      return false;
  }
}

/**
 * Grabs the next token match in the string and returns it's details.
 *
 * @private
 *
 * @return {Array}  An array of details for the token matched.
 */
function nextToken() {
  const matches = tokenizer.exec(indoc);
  // We have no more tokens.
  if (null === matches) {
    return ['no-more-tokens'];
  }
  const startedAt = matches.index;
  const [match, isClosing, name, isSelfClosed] = matches;
  const length = match.length;
  if (isSelfClosed) {
    return ['self-closed', name, startedAt, length];
  }
  if (isClosing) {
    return ['closer', name, startedAt, length];
  }
  return ['opener', name, startedAt, length];
}

/**
 * Pushes text extracted from the indoc string to the output stack given the
 * current rawLength value and offset (if rawLength is provided ) or the
 * indoc.length and offset.
 *
 * @private
 */
function addText() {
  const length = indoc.length - offset;
  if (0 === length) {
    return;
  }
  output.push(indoc.substr(offset, length));
}

/**
 * Pushes a child element to the associated parent element's children for the
 * parent currently active in the stack.
 *
 * @private
 *
 * @param {Frame} frame The Frame containing the child element and it's
 *                      token information.
 */
function addChild(frame) {
  const {
    element,
    tokenStart,
    tokenLength,
    prevOffset,
    children
  } = frame;
  const parent = stack[stack.length - 1];
  const text = indoc.substr(parent.prevOffset, tokenStart - parent.prevOffset);
  if (text) {
    parent.children.push(text);
  }
  parent.children.push((0,_react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element, null, ...children));
  parent.prevOffset = prevOffset ? prevOffset : tokenStart + tokenLength;
}

/**
 * This is called for closing tags. It creates the element currently active in
 * the stack.
 *
 * @private
 *
 * @param {number} endOffset Offset at which the closing tag for the element
 *                           begins in the string. If this is greater than the
 *                           prevOffset attached to the element, then this
 *                           helps capture any remaining nested text nodes in
 *                           the element.
 */
function closeOuterElement(endOffset) {
  const {
    element,
    leadingTextStart,
    prevOffset,
    tokenStart,
    children
  } = stack.pop();
  const text = endOffset ? indoc.substr(prevOffset, endOffset - prevOffset) : indoc.substr(prevOffset);
  if (text) {
    children.push(text);
  }
  if (null !== leadingTextStart) {
    output.push(indoc.substr(leadingTextStart, tokenStart - leadingTextStart));
  }
  output.push((0,_react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element, null, ...children));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createInterpolateElement);
//# sourceMappingURL=create-interpolate-element.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/close.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@3.4.1/node_modules/@wordpress/primitives/build-module/svg/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * WordPress dependencies
 */


const close = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .SVG */ .t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .Path */ .wA, {
    d: "m13.06 12 6.47-6.47-1.06-1.06L12 10.94 5.53 4.47 4.47 5.53 10.94 12l-6.47 6.47 1.06 1.06L12 13.06l6.47 6.47 1.06-1.06L13.06 12Z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (close);
//# sourceMappingURL=close.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+primitives@3.4.1/node_modules/@wordpress/primitives/build-module/svg/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t4: () => (/* binding */ SVG),
/* harmony export */   wA: () => (/* binding */ Path)
/* harmony export */ });
/* unused harmony exports Circle, G, Polygon, Rect, Defs, RadialGradient, LinearGradient, Stop */
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/** @typedef {{isPressed?: boolean} & import('react').ComponentPropsWithoutRef<'svg'>} SVGProps */

/**
 * @param {import('react').ComponentPropsWithoutRef<'circle'>} props
 *
 * @return {JSX.Element} Circle component
 */

const Circle = props => createElement('circle', props);
/**
 * @param {import('react').ComponentPropsWithoutRef<'g'>} props
 *
 * @return {JSX.Element} G component
 */

const G = props => createElement('g', props);
/**
 * @param {import('react').ComponentPropsWithoutRef<'path'>} props
 *
 * @return {JSX.Element} Path component
 */

const Path = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)('path', props);
/**
 * @param {import('react').ComponentPropsWithoutRef<'polygon'>} props
 *
 * @return {JSX.Element} Polygon component
 */

const Polygon = props => createElement('polygon', props);
/**
 * @param {import('react').ComponentPropsWithoutRef<'rect'>} props
 *
 * @return {JSX.Element} Rect component
 */

const Rect = props => createElement('rect', props);
/**
 * @param {import('react').ComponentPropsWithoutRef<'defs'>} props
 *
 * @return {JSX.Element} Defs component
 */

const Defs = props => createElement('defs', props);
/**
 * @param {import('react').ComponentPropsWithoutRef<'radialGradient'>} props
 *
 * @return {JSX.Element} RadialGradient component
 */

const RadialGradient = props => createElement('radialGradient', props);
/**
 * @param {import('react').ComponentPropsWithoutRef<'linearGradient'>} props
 *
 * @return {JSX.Element} LinearGradient component
 */

const LinearGradient = props => createElement('linearGradient', props);
/**
 * @param {import('react').ComponentPropsWithoutRef<'stop'>} props
 *
 * @return {JSX.Element} Stop component
 */

const Stop = props => createElement('stop', props);
/**
 *
 * @param {SVGProps} props isPressed indicates whether the SVG should appear as pressed.
 *                         Other props will be passed through to svg component.
 *
 * @return {JSX.Element} Stop component
 */

const SVG = _ref => {
  let {
    className,
    isPressed,
    ...props
  } = _ref;
  const appliedProps = { ...props,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, {
      'is-pressed': isPressed
    }) || undefined,
    'aria-hidden': true,
    focusable: false
  }; // Disable reason: We need to have a way to render HTML tag for web.
  // eslint-disable-next-line react/forbid-elements

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", appliedProps);
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/date-to-iso-string.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js");
var padStart = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/string-pad.js").start);

var $RangeError = RangeError;
var $isFinite = isFinite;
var abs = Math.abs;
var DatePrototype = Date.prototype;
var nativeDateToISOString = DatePrototype.toISOString;
var thisTimeValue = uncurryThis(DatePrototype.getTime);
var getUTCDate = uncurryThis(DatePrototype.getUTCDate);
var getUTCFullYear = uncurryThis(DatePrototype.getUTCFullYear);
var getUTCHours = uncurryThis(DatePrototype.getUTCHours);
var getUTCMilliseconds = uncurryThis(DatePrototype.getUTCMilliseconds);
var getUTCMinutes = uncurryThis(DatePrototype.getUTCMinutes);
var getUTCMonth = uncurryThis(DatePrototype.getUTCMonth);
var getUTCSeconds = uncurryThis(DatePrototype.getUTCSeconds);

// `Date.prototype.toISOString` method implementation
// https://tc39.es/ecma262/#sec-date.prototype.toisostring
// PhantomJS / old WebKit fails here:
module.exports = (fails(function () {
  return nativeDateToISOString.call(new Date(-5e13 - 1)) !== '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  nativeDateToISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!$isFinite(thisTimeValue(this))) throw new $RangeError('Invalid time value');
  var date = this;
  var year = getUTCFullYear(date);
  var milliseconds = getUTCMilliseconds(date);
  var sign = year < 0 ? '-' : year > 9999 ? '+' : '';
  return sign + padStart(abs(year), sign ? 6 : 4, 0) +
    '-' + padStart(getUTCMonth(date) + 1, 2, 0) +
    '-' + padStart(getUTCDate(date), 2, 0) +
    'T' + padStart(getUTCHours(date), 2, 0) +
    ':' + padStart(getUTCMinutes(date), 2, 0) +
    ':' + padStart(getUTCSeconds(date), 2, 0) +
    '.' + padStart(milliseconds, 3, 0) +
    'Z';
} : nativeDateToISOString;


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/flatten-into-array.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isArray = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-array.js");
var lengthOfArrayLike = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/length-of-array-like.js");
var doesNotExceedSafeInteger = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/does-not-exceed-safe-integer.js");
var bind = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-bind-context.js");

// `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg) : false;
  var element, elementLen;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        elementLen = lengthOfArrayLike(element);
        targetIndex = flattenIntoArray(target, original, element, elementLen, targetIndex, depth - 1) - 1;
      } else {
        doesNotExceedSafeInteger(targetIndex + 1);
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
};

module.exports = flattenIntoArray;


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/regexp-get-flags.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-call.js");
var hasOwn = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/has-own-property.js");
var isPrototypeOf = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-is-prototype-of.js");
var regExpFlags = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/regexp-flags.js");

var RegExpPrototype = RegExp.prototype;

module.exports = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype) && !hasOwn(R, 'flags') && isPrototypeOf(RegExpPrototype, R)
    ? call(regExpFlags, R) : flags;
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/string-pad.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js");
var toLength = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-string.js");
var $repeat = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/string-repeat.js");
var requireObjectCoercible = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/require-object-coercible.js");

var repeat = uncurryThis($repeat);
var stringSlice = uncurryThis(''.slice);
var ceil = Math.ceil;

// `String.prototype.{ padStart, padEnd }` methods implementation
var createMethod = function (IS_END) {
  return function ($this, maxLength, fillString) {
    var S = toString(requireObjectCoercible($this));
    var intMaxLength = toLength(maxLength);
    var stringLength = S.length;
    var fillStr = fillString === undefined ? ' ' : toString(fillString);
    var fillLen, stringFiller;
    if (intMaxLength <= stringLength || fillStr === '') return S;
    fillLen = intMaxLength - stringLength;
    stringFiller = repeat(fillStr, ceil(fillLen / fillStr.length));
    if (stringFiller.length > fillLen) stringFiller = stringSlice(stringFiller, 0, fillLen);
    return IS_END ? S + stringFiller : stringFiller + S;
  };
};

module.exports = {
  // `String.prototype.padStart` method
  // https://tc39.es/ecma262/#sec-string.prototype.padstart
  start: createMethod(false),
  // `String.prototype.padEnd` method
  // https://tc39.es/ecma262/#sec-string.prototype.padend
  end: createMethod(true)
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/string-repeat.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIntegerOrInfinity = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-integer-or-infinity.js");
var toString = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/require-object-coercible.js");

var $RangeError = RangeError;

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = function repeat(count) {
  var str = toString(requireObjectCoercible(this));
  var result = '';
  var n = toIntegerOrInfinity(count);
  if (n < 0 || n === Infinity) throw new $RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/string-trim-forced.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var PROPER_FUNCTION_NAME = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-name.js").PROPER);
var fails = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js");
var whitespaces = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/whitespaces.js");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.flat.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var flattenIntoArray = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/flatten-into-array.js");
var toObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/length-of-array-like.js");
var toIntegerOrInfinity = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-integer-or-infinity.js");
var arraySpeciesCreate = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-species-create.js");

// `Array.prototype.flat` method
// https://tc39.es/ecma262/#sec-array.prototype.flat
$({ target: 'Array', proto: true }, {
  flat: function flat(/* depthArg = 1 */) {
    var depthArg = arguments.length ? arguments[0] : undefined;
    var O = toObject(this);
    var sourceLen = lengthOfArrayLike(O);
    var A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toIntegerOrInfinity(depthArg));
    return A;
  }
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.join.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/indexed-object.js");
var toIndexedObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-indexed-object.js");
var arrayMethodIsStrict = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-method-is-strict.js");

var nativeJoin = uncurryThis([].join);

var ES3_STRINGS = IndexedObject !== Object;
var FORCED = ES3_STRINGS || !arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: FORCED }, {
  join: function join(separator) {
    return nativeJoin(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.unscopables.flat.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/add-to-unscopables.js");

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('flat');


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.date.now.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4`
var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js");

var $Date = Date;
var thisTimeValue = uncurryThis($Date.prototype.getTime);

// `Date.now` method
// https://tc39.es/ecma262/#sec-date.now
$({ target: 'Date', stat: true }, {
  now: function now() {
    return thisTimeValue(new $Date());
  }
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.date.to-iso-string.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var toISOString = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/date-to-iso-string.js");

// `Date.prototype.toISOString` method
// https://tc39.es/ecma262/#sec-date.prototype.toisostring
// PhantomJS / old WebKit has a broken implementations
$({ target: 'Date', proto: true, forced: Date.prototype.toISOString !== toISOString }, {
  toISOString: toISOString
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.date.to-string.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4`
var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js");
var defineBuiltIn = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/define-built-in.js");

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = uncurryThis(DatePrototype[TO_STRING]);
var thisTimeValue = uncurryThis(DatePrototype.getTime);

// `Date.prototype.toString` method
// https://tc39.es/ecma262/#sec-date.prototype.tostring
if (String(new Date(NaN)) !== INVALID_DATE) {
  defineBuiltIn(DatePrototype, TO_STRING, function toString() {
    var value = thisTimeValue(this);
    // eslint-disable-next-line no-self-compare -- NaN check
    return value === value ? nativeDateToString(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.to-string.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var PROPER_FUNCTION_NAME = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-name.js").PROPER);
var defineBuiltIn = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/define-built-in.js");
var anObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/an-object.js");
var $toString = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-string.js");
var fails = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js");
var getRegExpFlags = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/regexp-get-flags.js");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) !== '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name !== TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
  }, { unsafe: true });
}


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.replace-all.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var call = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js");
var requireObjectCoercible = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/require-object-coercible.js");
var isCallable = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-callable.js");
var isNullOrUndefined = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-null-or-undefined.js");
var isRegExp = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-regexp.js");
var toString = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-string.js");
var getMethod = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/get-method.js");
var getRegExpFlags = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/regexp-get-flags.js");
var getSubstitution = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/get-substitution.js");
var wellKnownSymbol = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-pure.js");

var REPLACE = wellKnownSymbol('replace');
var $TypeError = TypeError;
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
var max = Math.max;

var stringIndexOf = function (string, searchValue, fromIndex) {
  if (fromIndex > string.length) return -1;
  if (searchValue === '') return fromIndex;
  return indexOf(string, searchValue, fromIndex);
};

// `String.prototype.replaceAll` method
// https://tc39.es/ecma262/#sec-string.prototype.replaceall
$({ target: 'String', proto: true }, {
  replaceAll: function replaceAll(searchValue, replaceValue) {
    var O = requireObjectCoercible(this);
    var IS_REG_EXP, flags, replacer, string, searchString, functionalReplace, searchLength, advanceBy, replacement;
    var position = 0;
    var endOfLastMatch = 0;
    var result = '';
    if (!isNullOrUndefined(searchValue)) {
      IS_REG_EXP = isRegExp(searchValue);
      if (IS_REG_EXP) {
        flags = toString(requireObjectCoercible(getRegExpFlags(searchValue)));
        if (!~indexOf(flags, 'g')) throw new $TypeError('`.replaceAll` does not allow non-global regexes');
      }
      replacer = getMethod(searchValue, REPLACE);
      if (replacer) {
        return call(replacer, searchValue, O, replaceValue);
      } else if (IS_PURE && IS_REG_EXP) {
        return replace(toString(O), searchValue, replaceValue);
      }
    }
    string = toString(O);
    searchString = toString(searchValue);
    functionalReplace = isCallable(replaceValue);
    if (!functionalReplace) replaceValue = toString(replaceValue);
    searchLength = searchString.length;
    advanceBy = max(1, searchLength);
    position = stringIndexOf(string, searchString, 0);
    while (position !== -1) {
      replacement = functionalReplace
        ? toString(replaceValue(searchString, position, string))
        : getSubstitution(searchString, string, position, [], undefined, replaceValue);
      result += stringSlice(string, endOfLastMatch, position) + replacement;
      endOfLastMatch = position + searchLength;
      position = stringIndexOf(string, searchString, position + advanceBy);
    }
    if (endOfLastMatch < string.length) {
      result += stringSlice(string, endOfLastMatch);
    }
    return result;
  }
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.trim.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var $trim = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/string-trim.js").trim);
var forcedStringTrimMethod = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/string-trim-forced.js");

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/esnext.string.replace-all.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.replace-all.js");


/***/ }),

/***/ "../../node_modules/.pnpm/debug@4.3.5/node_modules/debug/src/browser.js":
/***/ ((module, exports, __webpack_require__) => {

/* provided dependency */ var process = __webpack_require__("../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");
/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__("../../node_modules/.pnpm/debug@4.3.5/node_modules/debug/src/common.js")(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};


/***/ }),

/***/ "../../node_modules/.pnpm/debug@4.3.5/node_modules/debug/src/common.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__("../../node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js");
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ "../../node_modules/.pnpm/gridicons@3.4.2_react@18.3.1/node_modules/gridicons/dist/notice-outline.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
__webpack_unused_export__ = ({value:!0}),exports.A=_default;var _react=_interopRequireDefault(__webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js")),_excluded=["size","onClick","icon","className"];function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _extends(){return _extends=Object.assign?Object.assign.bind():function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function _default(a){var b=a.size,c=void 0===b?24:b,d=a.onClick,e=a.icon,f=a.className,g=_objectWithoutProperties(a,_excluded),h=["gridicon","gridicons-notice-outline",f,!!function isModulo18(a){return 0==a%18}(c)&&"needs-offset",!1,!1].filter(Boolean).join(" ");return _react["default"].createElement("svg",_extends({className:h,height:c,width:c,onClick:d},g,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 13h-2v2h2v-2zm-2-2h2l.5-6h-3l.5 6z"})))}


/***/ }),

/***/ "../../node_modules/.pnpm/string-similarity@4.0.4/node_modules/string-similarity/src/index.js":
/***/ ((module) => {

module.exports = {
	compareTwoStrings:compareTwoStrings,
	findBestMatch:findBestMatch
};

function compareTwoStrings(first, second) {
	first = first.replace(/\s+/g, '')
	second = second.replace(/\s+/g, '')

	if (first === second) return 1; // identical or empty
	if (first.length < 2 || second.length < 2) return 0; // if either is a 0-letter or 1-letter string

	let firstBigrams = new Map();
	for (let i = 0; i < first.length - 1; i++) {
		const bigram = first.substring(i, i + 2);
		const count = firstBigrams.has(bigram)
			? firstBigrams.get(bigram) + 1
			: 1;

		firstBigrams.set(bigram, count);
	};

	let intersectionSize = 0;
	for (let i = 0; i < second.length - 1; i++) {
		const bigram = second.substring(i, i + 2);
		const count = firstBigrams.has(bigram)
			? firstBigrams.get(bigram)
			: 0;

		if (count > 0) {
			firstBigrams.set(bigram, count - 1);
			intersectionSize++;
		}
	}

	return (2.0 * intersectionSize) / (first.length + second.length - 2);
}

function findBestMatch(mainString, targetStrings) {
	if (!areArgsValid(mainString, targetStrings)) throw new Error('Bad arguments: First argument should be a string, second should be an array of strings');
	
	const ratings = [];
	let bestMatchIndex = 0;

	for (let i = 0; i < targetStrings.length; i++) {
		const currentTargetString = targetStrings[i];
		const currentRating = compareTwoStrings(mainString, currentTargetString)
		ratings.push({target: currentTargetString, rating: currentRating})
		if (currentRating > ratings[bestMatchIndex].rating) {
			bestMatchIndex = i
		}
	}
	
	
	const bestMatch = ratings[bestMatchIndex]
	
	return { ratings: ratings, bestMatch: bestMatch, bestMatchIndex: bestMatchIndex };
}

function areArgsValid(mainString, targetStrings) {
	if (typeof mainString !== 'string') return false;
	if (!Array.isArray(targetStrings)) return false;
	if (!targetStrings.length) return false;
	if (targetStrings.find( function (s) { return typeof s !== 'string'})) return false;
	return true;
}


/***/ }),

/***/ "../../node_modules/.pnpm/tracekit@0.4.6/node_modules/tracekit/tracekit.js":
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * https://github.com/csnover/TraceKit
 * @license MIT
 * @namespace TraceKit
 */
(function(window, undefined) {
if (!window) {
    return;
}

var TraceKit = {};
var _oldTraceKit = window.TraceKit;

// global reference to slice
var _slice = [].slice;
var UNKNOWN_FUNCTION = '?';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types
var ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;

/**
 * A better form of hasOwnProperty<br/>
 * Example: `_has(MainHostObject, property) === true/false`
 *
 * @param {Object} object to check property
 * @param {string} key to check
 * @return {Boolean} true if the object has the key and it is not inherited
 */
function _has(object, key) {
    return Object.prototype.hasOwnProperty.call(object, key);
}

/**
 * Returns true if the parameter is undefined<br/>
 * Example: `_isUndefined(val) === true/false`
 *
 * @param {*} what Value to check
 * @return {Boolean} true if undefined and false otherwise
 */
function _isUndefined(what) {
    return typeof what === 'undefined';
}

/**
 * Export TraceKit out to another variable<br/>
 * Example: `var TK = TraceKit.noConflict()`
 * @return {Object} The TraceKit object
 * @memberof TraceKit
 */
TraceKit.noConflict = function noConflict() {
    window.TraceKit = _oldTraceKit;
    return TraceKit;
};

/**
 * Wrap any function in a TraceKit reporter<br/>
 * Example: `func = TraceKit.wrap(func);`
 *
 * @param {Function} func Function to be wrapped
 * @return {Function} The wrapped func
 * @memberof TraceKit
 */
TraceKit.wrap = function traceKitWrapper(func) {
    function wrapped() {
        try {
            return func.apply(this, arguments);
        } catch (e) {
            TraceKit.report(e);
            throw e;
        }
    }
    return wrapped;
};

/**
 * Cross-browser processing of unhandled exceptions
 *
 * Syntax:
 * ```js
 *   TraceKit.report.subscribe(function(stackInfo) { ... })
 *   TraceKit.report.unsubscribe(function(stackInfo) { ... })
 *   TraceKit.report(exception)
 *   try { ...code... } catch(ex) { TraceKit.report(ex); }
 * ```
 *
 * Supports:
 *   - Firefox: full stack trace with line numbers, plus column number
 *     on top frame; column number is not guaranteed
 *   - Opera: full stack trace with line and column numbers
 *   - Chrome: full stack trace with line and column numbers
 *   - Safari: line and column number for the top frame only; some frames
 *     may be missing, and column number is not guaranteed
 *   - IE: line and column number for the top frame only; some frames
 *     may be missing, and column number is not guaranteed
 *
 * In theory, TraceKit should work on all of the following versions:
 *   - IE5.5+ (only 8.0 tested)
 *   - Firefox 0.9+ (only 3.5+ tested)
 *   - Opera 7+ (only 10.50 tested; versions 9 and earlier may require
 *     Exceptions Have Stacktrace to be enabled in opera:config)
 *   - Safari 3+ (only 4+ tested)
 *   - Chrome 1+ (only 5+ tested)
 *   - Konqueror 3.5+ (untested)
 *
 * Requires TraceKit.computeStackTrace.
 *
 * Tries to catch all unhandled exceptions and report them to the
 * subscribed handlers. Please note that TraceKit.report will rethrow the
 * exception. This is REQUIRED in order to get a useful stack trace in IE.
 * If the exception does not reach the top of the browser, you will only
 * get a stack trace from the point where TraceKit.report was called.
 *
 * Handlers receive a TraceKit.StackTrace object as described in the
 * TraceKit.computeStackTrace docs.
 *
 * @memberof TraceKit
 * @namespace
 */
TraceKit.report = (function reportModuleWrapper() {
    var handlers = [],
        lastException = null,
        lastExceptionStack = null;

    /**
     * Add a crash handler.
     * @param {Function} handler
     * @memberof TraceKit.report
     */
    function subscribe(handler) {
        installGlobalHandler();
        installGlobalUnhandledRejectionHandler();
        handlers.push(handler);
    }

    /**
     * Remove a crash handler.
     * @param {Function} handler
     * @memberof TraceKit.report
     */
    function unsubscribe(handler) {
        for (var i = handlers.length - 1; i >= 0; --i) {
            if (handlers[i] === handler) {
                handlers.splice(i, 1);
            }
        }

        if (handlers.length === 0) {
            uninstallGlobalHandler();
            uninstallGlobalUnhandledRejectionHandler();
        }
    }

    /**
     * Dispatch stack information to all handlers.
     * @param {TraceKit.StackTrace} stack
     * @param {boolean} isWindowError Is this a top-level window error?
     * @param {Error=} error The error that's being handled (if available, null otherwise)
     * @memberof TraceKit.report
     * @throws An exception if an error occurs while calling an handler.
     */
    function notifyHandlers(stack, isWindowError, error) {
        var exception = null;
        if (isWindowError && !TraceKit.collectWindowErrors) {
          return;
        }
        for (var i in handlers) {
            if (_has(handlers, i)) {
                try {
                    handlers[i](stack, isWindowError, error);
                } catch (inner) {
                    exception = inner;
                }
            }
        }

        if (exception) {
            throw exception;
        }
    }

    var _oldOnerrorHandler, _onErrorHandlerInstalled;
    var _oldOnunhandledrejectionHandler, _onUnhandledRejectionHandlerInstalled;

    /**
     * Ensures all global unhandled exceptions are recorded.
     * Supported by Gecko and IE.
     * @param {string} message Error message.
     * @param {string} url URL of script that generated the exception.
     * @param {(number|string)} lineNo The line number at which the error occurred.
     * @param {(number|string)=} columnNo The column number at which the error occurred.
     * @param {Error=} errorObj The actual Error object.
     * @memberof TraceKit.report
     */
    function traceKitWindowOnError(message, url, lineNo, columnNo, errorObj) {
        var stack = null;

        if (lastExceptionStack) {
            TraceKit.computeStackTrace.augmentStackTraceWithInitialElement(lastExceptionStack, url, lineNo, message);
    	    processLastException();
        } else if (errorObj) {
            stack = TraceKit.computeStackTrace(errorObj);
            notifyHandlers(stack, true, errorObj);
        } else {
            var location = {
              'url': url,
              'line': lineNo,
              'column': columnNo
            };

            var name;
            var msg = message; // must be new var or will modify original `arguments`
            if ({}.toString.call(message) === '[object String]') {
                var groups = message.match(ERROR_TYPES_RE);
                if (groups) {
                    name = groups[1];
                    msg = groups[2];
                }
            }

            location.func = TraceKit.computeStackTrace.guessFunctionName(location.url, location.line);
            location.context = TraceKit.computeStackTrace.gatherContext(location.url, location.line);
            stack = {
                'name': name,
                'message': msg,
                'mode': 'onerror',
                'stack': [location]
            };

            notifyHandlers(stack, true, null);
        }

        if (_oldOnerrorHandler) {
            return _oldOnerrorHandler.apply(this, arguments);
        }

        return false;
    }

    /**
     * Ensures all unhandled rejections are recorded.
     * @param {PromiseRejectionEvent} e event.
     * @memberof TraceKit.report
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onunhandledrejection
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent
     */
    function traceKitWindowOnUnhandledRejection(e) {
        var stack = TraceKit.computeStackTrace(e.reason);
        notifyHandlers(stack, true, e.reason);
    }

    /**
     * Install a global onerror handler
     * @memberof TraceKit.report
     */
    function installGlobalHandler() {
        if (_onErrorHandlerInstalled === true) {
            return;
        }

        _oldOnerrorHandler = window.onerror;
        window.onerror = traceKitWindowOnError;
        _onErrorHandlerInstalled = true;
    }

    /**
     * Uninstall the global onerror handler
     * @memberof TraceKit.report
     */
    function uninstallGlobalHandler() {
        if (_onErrorHandlerInstalled) {
            window.onerror = _oldOnerrorHandler;
            _onErrorHandlerInstalled = false;
        }
    }

    /**
     * Install a global onunhandledrejection handler
     * @memberof TraceKit.report
     */
    function installGlobalUnhandledRejectionHandler() {
        if (_onUnhandledRejectionHandlerInstalled === true) {
            return;
        }

        _oldOnunhandledrejectionHandler = window.onunhandledrejection;
        window.onunhandledrejection = traceKitWindowOnUnhandledRejection;
        _onUnhandledRejectionHandlerInstalled = true;
    }

    /**
     * Uninstall the global onunhandledrejection handler
     * @memberof TraceKit.report
     */
    function uninstallGlobalUnhandledRejectionHandler() {
        if (_onUnhandledRejectionHandlerInstalled) {
            window.onunhandledrejection = _oldOnunhandledrejectionHandler;
            _onUnhandledRejectionHandlerInstalled = false;
        }
    }

    /**
     * Process the most recent exception
     * @memberof TraceKit.report
     */
    function processLastException() {
        var _lastExceptionStack = lastExceptionStack,
            _lastException = lastException;
        lastExceptionStack = null;
        lastException = null;
        notifyHandlers(_lastExceptionStack, false, _lastException);
    }

    /**
     * Reports an unhandled Error to TraceKit.
     * @param {Error} ex
     * @memberof TraceKit.report
     * @throws An exception if an incomplete stack trace is detected (old IE browsers).
     */
    function report(ex) {
        if (lastExceptionStack) {
            if (lastException === ex) {
                return; // already caught by an inner catch block, ignore
            } else {
              processLastException();
            }
        }

        var stack = TraceKit.computeStackTrace(ex);
        lastExceptionStack = stack;
        lastException = ex;

        // If the stack trace is incomplete, wait for 2 seconds for
        // slow slow IE to see if onerror occurs or not before reporting
        // this exception; otherwise, we will end up with an incomplete
        // stack trace
        setTimeout(function () {
            if (lastException === ex) {
                processLastException();
            }
        }, (stack.incomplete ? 2000 : 0));

        throw ex; // re-throw to propagate to the top level (and cause window.onerror)
    }

    report.subscribe = subscribe;
    report.unsubscribe = unsubscribe;
    return report;
}());

/**
 * An object representing a single stack frame.
 * @typedef {Object} StackFrame
 * @property {string} url The JavaScript or HTML file URL.
 * @property {string} func The function name, or empty for anonymous functions (if guessing did not work).
 * @property {string[]?} args The arguments passed to the function, if known.
 * @property {number=} line The line number, if known.
 * @property {number=} column The column number, if known.
 * @property {string[]} context An array of source code lines; the middle element corresponds to the correct line#.
 * @memberof TraceKit
 */

/**
 * An object representing a JavaScript stack trace.
 * @typedef {Object} StackTrace
 * @property {string} name The name of the thrown exception.
 * @property {string} message The exception error message.
 * @property {TraceKit.StackFrame[]} stack An array of stack frames.
 * @property {string} mode 'stack', 'stacktrace', 'multiline', 'callers', 'onerror', or 'failed' -- method used to collect the stack trace.
 * @memberof TraceKit
 */

/**
 * TraceKit.computeStackTrace: cross-browser stack traces in JavaScript
 *
 * Syntax:
 *   ```js
 *   s = TraceKit.computeStackTrace.ofCaller([depth])
 *   s = TraceKit.computeStackTrace(exception) // consider using TraceKit.report instead (see below)
 *   ```
 *
 * Supports:
 *   - Firefox:  full stack trace with line numbers and unreliable column
 *               number on top frame
 *   - Opera 10: full stack trace with line and column numbers
 *   - Opera 9-: full stack trace with line numbers
 *   - Chrome:   full stack trace with line and column numbers
 *   - Safari:   line and column number for the topmost stacktrace element
 *               only
 *   - IE:       no line numbers whatsoever
 *
 * Tries to guess names of anonymous functions by looking for assignments
 * in the source code. In IE and Safari, we have to guess source file names
 * by searching for function bodies inside all page scripts. This will not
 * work for scripts that are loaded cross-domain.
 * Here be dragons: some function names may be guessed incorrectly, and
 * duplicate functions may be mismatched.
 *
 * TraceKit.computeStackTrace should only be used for tracing purposes.
 * Logging of unhandled exceptions should be done with TraceKit.report,
 * which builds on top of TraceKit.computeStackTrace and provides better
 * IE support by utilizing the window.onerror event to retrieve information
 * about the top of the stack.
 *
 * Note: In IE and Safari, no stack trace is recorded on the Error object,
 * so computeStackTrace instead walks its *own* chain of callers.
 * This means that:
 *  * in Safari, some methods may be missing from the stack trace;
 *  * in IE, the topmost function in the stack trace will always be the
 *    caller of computeStackTrace.
 *
 * This is okay for tracing (because you are likely to be calling
 * computeStackTrace from the function you want to be the topmost element
 * of the stack trace anyway), but not okay for logging unhandled
 * exceptions (because your catch block will likely be far away from the
 * inner function that actually caused the exception).
 *
 * Tracing example:
 *  ```js
 *     function trace(message) {
 *         var stackInfo = TraceKit.computeStackTrace.ofCaller();
 *         var data = message + "\n";
 *         for(var i in stackInfo.stack) {
 *             var item = stackInfo.stack[i];
 *             data += (item.func || '[anonymous]') + "() in " + item.url + ":" + (item.line || '0') + "\n";
 *         }
 *         if (window.console)
 *             console.info(data);
 *         else
 *             alert(data);
 *     }
 * ```
 * @memberof TraceKit
 * @namespace
 */
TraceKit.computeStackTrace = (function computeStackTraceWrapper() {
    var debug = false,
        sourceCache = {};

    /**
     * Attempts to retrieve source code via XMLHttpRequest, which is used
     * to look up anonymous function names.
     * @param {string} url URL of source code.
     * @return {string} Source contents.
     * @memberof TraceKit.computeStackTrace
     */
    function loadSource(url) {
        if (!TraceKit.remoteFetching) { //Only attempt request if remoteFetching is on.
            return '';
        }
        try {
            var getXHR = function() {
                try {
                    return new window.XMLHttpRequest();
                } catch (e) {
                    // explicitly bubble up the exception if not found
                    return new window.ActiveXObject('Microsoft.XMLHTTP');
                }
            };

            var request = getXHR();
            request.open('GET', url, false);
            request.send('');
            return request.responseText;
        } catch (e) {
            return '';
        }
    }

    /**
     * Retrieves source code from the source code cache.
     * @param {string} url URL of source code.
     * @return {Array.<string>} Source contents.
     * @memberof TraceKit.computeStackTrace
     */
    function getSource(url) {
        if (typeof url !== 'string') {
            return [];
        }

        if (!_has(sourceCache, url)) {
            // URL needs to be able to fetched within the acceptable domain.  Otherwise,
            // cross-domain errors will be triggered.
            /*
                Regex matches:
                0 - Full Url
                1 - Protocol
                2 - Domain
                3 - Port (Useful for internal applications)
                4 - Path
            */
            var source = '';
            var domain = '';
            try { domain = window.document.domain; } catch (e) { }
            var match = /(.*)\:\/\/([^:\/]+)([:\d]*)\/{0,1}([\s\S]*)/.exec(url);
            if (match && match[2] === domain) {
                source = loadSource(url);
            }
            sourceCache[url] = source ? source.split('\n') : [];
        }

        return sourceCache[url];
    }

    /**
     * Tries to use an externally loaded copy of source code to determine
     * the name of a function by looking at the name of the variable it was
     * assigned to, if any.
     * @param {string} url URL of source code.
     * @param {(string|number)} lineNo Line number in source code.
     * @return {string} The function name, if discoverable.
     * @memberof TraceKit.computeStackTrace
     */
    function guessFunctionName(url, lineNo) {
        var reFunctionArgNames = /function ([^(]*)\(([^)]*)\)/,
            reGuessFunction = /['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,
            line = '',
            maxLines = 10,
            source = getSource(url),
            m;

        if (!source.length) {
            return UNKNOWN_FUNCTION;
        }

        // Walk backwards from the first line in the function until we find the line which
        // matches the pattern above, which is the function definition
        for (var i = 0; i < maxLines; ++i) {
            line = source[lineNo - i] + line;

            if (!_isUndefined(line)) {
                if ((m = reGuessFunction.exec(line))) {
                    return m[1];
                } else if ((m = reFunctionArgNames.exec(line))) {
                    return m[1];
                }
            }
        }

        return UNKNOWN_FUNCTION;
    }

    /**
     * Retrieves the surrounding lines from where an exception occurred.
     * @param {string} url URL of source code.
     * @param {(string|number)} line Line number in source code to center around for context.
     * @return {?Array.<string>} Lines of source code.
     * @memberof TraceKit.computeStackTrace
     */
    function gatherContext(url, line) {
        var source = getSource(url);

        if (!source.length) {
            return null;
        }

        var context = [],
            // linesBefore & linesAfter are inclusive with the offending line.
            // if linesOfContext is even, there will be one extra line
            //   *before* the offending line.
            linesBefore = Math.floor(TraceKit.linesOfContext / 2),
            // Add one extra line if linesOfContext is odd
            linesAfter = linesBefore + (TraceKit.linesOfContext % 2),
            start = Math.max(0, line - linesBefore - 1),
            end = Math.min(source.length, line + linesAfter - 1);

        line -= 1; // convert to 0-based index

        for (var i = start; i < end; ++i) {
            if (!_isUndefined(source[i])) {
                context.push(source[i]);
            }
        }

        return context.length > 0 ? context : null;
    }

    /**
     * Escapes special characters, except for whitespace, in a string to be
     * used inside a regular expression as a string literal.
     * @param {string} text The string.
     * @return {string} The escaped string literal.
     * @memberof TraceKit.computeStackTrace
     */
    function escapeRegExp(text) {
        return text.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g, '\\$&');
    }

    /**
     * Escapes special characters in a string to be used inside a regular
     * expression as a string literal. Also ensures that HTML entities will
     * be matched the same as their literal friends.
     * @param {string} body The string.
     * @return {string} The escaped string.
     * @memberof TraceKit.computeStackTrace
     */
    function escapeCodeAsRegExpForMatchingInsideHTML(body) {
        return escapeRegExp(body).replace('<', '(?:<|&lt;)').replace('>', '(?:>|&gt;)').replace('&', '(?:&|&amp;)').replace('"', '(?:"|&quot;)').replace(/\s+/g, '\\s+');
    }

    /**
     * Determines where a code fragment occurs in the source code.
     * @param {RegExp} re The function definition.
     * @param {Array.<string>} urls A list of URLs to search.
     * @return {?Object.<string, (string|number)>} An object containing
     * the url, line, and column number of the defined function.
     * @memberof TraceKit.computeStackTrace
     */
    function findSourceInUrls(re, urls) {
        var source, m;
        for (var i = 0, j = urls.length; i < j; ++i) {
            if ((source = getSource(urls[i])).length) {
                source = source.join('\n');
                if ((m = re.exec(source))) {

                    return {
                        'url': urls[i],
                        'line': source.substring(0, m.index).split('\n').length,
                        'column': m.index - source.lastIndexOf('\n', m.index) - 1
                    };
                }
            }
        }

        return null;
    }

    /**
     * Determines at which column a code fragment occurs on a line of the
     * source code.
     * @param {string} fragment The code fragment.
     * @param {string} url The URL to search.
     * @param {(string|number)} line The line number to examine.
     * @return {?number} The column number.
     * @memberof TraceKit.computeStackTrace
     */
    function findSourceInLine(fragment, url, line) {
        var source = getSource(url),
            re = new RegExp('\\b' + escapeRegExp(fragment) + '\\b'),
            m;

        line -= 1;

        if (source && source.length > line && (m = re.exec(source[line]))) {
            return m.index;
        }

        return null;
    }

    /**
     * Determines where a function was defined within the source code.
     * @param {(Function|string)} func A function reference or serialized
     * function definition.
     * @return {?Object.<string, (string|number)>} An object containing
     * the url, line, and column number of the defined function.
     * @memberof TraceKit.computeStackTrace
     */
    function findSourceByFunctionBody(func) {
        if (_isUndefined(window && window.document)) {
            return;
        }

        var urls = [window.location.href],
            scripts = window.document.getElementsByTagName('script'),
            body,
            code = '' + func,
            codeRE = /^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,
            eventRE = /^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,
            re,
            parts,
            result;

        for (var i = 0; i < scripts.length; ++i) {
            var script = scripts[i];
            if (script.src) {
                urls.push(script.src);
            }
        }

        if (!(parts = codeRE.exec(code))) {
            re = new RegExp(escapeRegExp(code).replace(/\s+/g, '\\s+'));
        }

        // not sure if this is really necessary, but I don’t have a test
        // corpus large enough to confirm that and it was in the original.
        else {
            var name = parts[1] ? '\\s+' + parts[1] : '',
                args = parts[2].split(',').join('\\s*,\\s*');

            body = escapeRegExp(parts[3]).replace(/;$/, ';?'); // semicolon is inserted if the function ends with a comment.replace(/\s+/g, '\\s+');
            re = new RegExp('function' + name + '\\s*\\(\\s*' + args + '\\s*\\)\\s*{\\s*' + body + '\\s*}');
        }

        // look for a normal function definition
        if ((result = findSourceInUrls(re, urls))) {
            return result;
        }

        // look for an old-school event handler function
        if ((parts = eventRE.exec(code))) {
            var event = parts[1];
            body = escapeCodeAsRegExpForMatchingInsideHTML(parts[2]);

            // look for a function defined in HTML as an onXXX handler
            re = new RegExp('on' + event + '=[\\\'"]\\s*' + body + '\\s*[\\\'"]', 'i');

            if ((result = findSourceInUrls(re, urls[0]))) {
                return result;
            }

            // look for ???
            re = new RegExp(body);

            if ((result = findSourceInUrls(re, urls))) {
                return result;
            }
        }

        return null;
    }

    // Contents of Exception in various browsers.
    //
    // SAFARI:
    // ex.message = Can't find variable: qq
    // ex.line = 59
    // ex.sourceId = 580238192
    // ex.sourceURL = http://...
    // ex.expressionBeginOffset = 96
    // ex.expressionCaretOffset = 98
    // ex.expressionEndOffset = 98
    // ex.name = ReferenceError
    //
    // FIREFOX:
    // ex.message = qq is not defined
    // ex.fileName = http://...
    // ex.lineNumber = 59
    // ex.columnNumber = 69
    // ex.stack = ...stack trace... (see the example below)
    // ex.name = ReferenceError
    //
    // CHROME:
    // ex.message = qq is not defined
    // ex.name = ReferenceError
    // ex.type = not_defined
    // ex.arguments = ['aa']
    // ex.stack = ...stack trace...
    //
    // INTERNET EXPLORER:
    // ex.message = ...
    // ex.name = ReferenceError
    //
    // OPERA:
    // ex.message = ...message... (see the example below)
    // ex.name = ReferenceError
    // ex.opera#sourceloc = 11  (pretty much useless, duplicates the info in ex.message)
    // ex.stacktrace = n/a; see 'opera:config#UserPrefs|Exceptions Have Stacktrace'

    /**
     * Computes stack trace information from the stack property.
     * Chrome and Gecko use this property.
     * @param {Error} ex
     * @return {?TraceKit.StackTrace} Stack trace information.
     * @memberof TraceKit.computeStackTrace
     */
    function computeStackTraceFromStackProp(ex) {
        if (!ex.stack) {
            return null;
        }

        var chrome = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
            gecko = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
            winjs = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,

            // Used to additionally parse URL/line/column from eval frames
            isEval,
            geckoEval = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
            chromeEval = /\((\S*)(?::(\d+))(?::(\d+))\)/,

            lines = ex.stack.split('\n'),
            stack = [],
            submatch,
            parts,
            element,
            reference = /^(.*) is undefined$/.exec(ex.message);

        for (var i = 0, j = lines.length; i < j; ++i) {
            if ((parts = chrome.exec(lines[i]))) {
                var isNative = parts[2] && parts[2].indexOf('native') === 0; // start of line
                isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line
                if (isEval && (submatch = chromeEval.exec(parts[2]))) {
                    // throw out eval line/column and use top-most line/column number
                    parts[2] = submatch[1]; // url
                    parts[3] = submatch[2]; // line
                    parts[4] = submatch[3]; // column
                }
                element = {
                    'url': !isNative ? parts[2] : null,
                    'func': parts[1] || UNKNOWN_FUNCTION,
                    'args': isNative ? [parts[2]] : [],
                    'line': parts[3] ? +parts[3] : null,
                    'column': parts[4] ? +parts[4] : null
                };
            } else if ( parts = winjs.exec(lines[i]) ) {
                element = {
                    'url': parts[2],
                    'func': parts[1] || UNKNOWN_FUNCTION,
                    'args': [],
                    'line': +parts[3],
                    'column': parts[4] ? +parts[4] : null
                };
            } else if ((parts = gecko.exec(lines[i]))) {
                isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
                if (isEval && (submatch = geckoEval.exec(parts[3]))) {
                    // throw out eval line/column and use top-most line number
                    parts[3] = submatch[1];
                    parts[4] = submatch[2];
                    parts[5] = null; // no column when eval
                } else if (i === 0 && !parts[5] && !_isUndefined(ex.columnNumber)) {
                    // FireFox uses this awesome columnNumber property for its top frame
                    // Also note, Firefox's column number is 0-based and everything else expects 1-based,
                    // so adding 1
                    // NOTE: this hack doesn't work if top-most frame is eval
                    stack[0].column = ex.columnNumber + 1;
                }
                element = {
                    'url': parts[3],
                    'func': parts[1] || UNKNOWN_FUNCTION,
                    'args': parts[2] ? parts[2].split(',') : [],
                    'line': parts[4] ? +parts[4] : null,
                    'column': parts[5] ? +parts[5] : null
                };
            } else {
                continue;
            }

            if (!element.func && element.line) {
                element.func = guessFunctionName(element.url, element.line);
            }

            element.context = element.line ? gatherContext(element.url, element.line) : null;
            stack.push(element);
        }

        if (!stack.length) {
            return null;
        }

        if (stack[0] && stack[0].line && !stack[0].column && reference) {
            stack[0].column = findSourceInLine(reference[1], stack[0].url, stack[0].line);
        }

        return {
            'mode': 'stack',
            'name': ex.name,
            'message': ex.message,
            'stack': stack
        };
    }

    /**
     * Computes stack trace information from the stacktrace property.
     * Opera 10+ uses this property.
     * @param {Error} ex
     * @return {?TraceKit.StackTrace} Stack trace information.
     * @memberof TraceKit.computeStackTrace
     */
    function computeStackTraceFromStacktraceProp(ex) {
        // Access and store the stacktrace property before doing ANYTHING
        // else to it because Opera is not very good at providing it
        // reliably in other circumstances.
        var stacktrace = ex.stacktrace;
        if (!stacktrace) {
            return;
        }

        var opera10Regex = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
            opera11Regex = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i,
            lines = stacktrace.split('\n'),
            stack = [],
            parts;

        for (var line = 0; line < lines.length; line += 2) {
            var element = null;
            if ((parts = opera10Regex.exec(lines[line]))) {
                element = {
                    'url': parts[2],
                    'line': +parts[1],
                    'column': null,
                    'func': parts[3],
                    'args':[]
                };
            } else if ((parts = opera11Regex.exec(lines[line]))) {
                element = {
                    'url': parts[6],
                    'line': +parts[1],
                    'column': +parts[2],
                    'func': parts[3] || parts[4],
                    'args': parts[5] ? parts[5].split(',') : []
                };
            }

            if (element) {
                if (!element.func && element.line) {
                    element.func = guessFunctionName(element.url, element.line);
                }
                if (element.line) {
                    try {
                        element.context = gatherContext(element.url, element.line);
                    } catch (exc) {}
                }

                if (!element.context) {
                    element.context = [lines[line + 1]];
                }

                stack.push(element);
            }
        }

        if (!stack.length) {
            return null;
        }

        return {
            'mode': 'stacktrace',
            'name': ex.name,
            'message': ex.message,
            'stack': stack
        };
    }

    /**
     * NOT TESTED.
     * Computes stack trace information from an error message that includes
     * the stack trace.
     * Opera 9 and earlier use this method if the option to show stack
     * traces is turned on in opera:config.
     * @param {Error} ex
     * @return {?TraceKit.StackTrace} Stack information.
     * @memberof TraceKit.computeStackTrace
     */
    function computeStackTraceFromOperaMultiLineMessage(ex) {
        // TODO: Clean this function up
        // Opera includes a stack trace into the exception message. An example is:
        //
        // Statement on line 3: Undefined variable: undefinedFunc
        // Backtrace:
        //   Line 3 of linked script file://localhost/Users/andreyvit/Projects/TraceKit/javascript-client/sample.js: In function zzz
        //         undefinedFunc(a);
        //   Line 7 of inline#1 script in file://localhost/Users/andreyvit/Projects/TraceKit/javascript-client/sample.html: In function yyy
        //           zzz(x, y, z);
        //   Line 3 of inline#1 script in file://localhost/Users/andreyvit/Projects/TraceKit/javascript-client/sample.html: In function xxx
        //           yyy(a, a, a);
        //   Line 1 of function script
        //     try { xxx('hi'); return false; } catch(ex) { TraceKit.report(ex); }
        //   ...

        var lines = ex.message.split('\n');
        if (lines.length < 4) {
            return null;
        }

        var lineRE1 = /^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
            lineRE2 = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
            lineRE3 = /^\s*Line (\d+) of function script\s*$/i,
            stack = [],
            scripts = (window && window.document && window.document.getElementsByTagName('script')),
            inlineScriptBlocks = [],
            parts;

        for (var s in scripts) {
            if (_has(scripts, s) && !scripts[s].src) {
                inlineScriptBlocks.push(scripts[s]);
            }
        }

        for (var line = 2; line < lines.length; line += 2) {
            var item = null;
            if ((parts = lineRE1.exec(lines[line]))) {
                item = {
                    'url': parts[2],
                    'func': parts[3],
                    'args': [],
                    'line': +parts[1],
                    'column': null
                };
            } else if ((parts = lineRE2.exec(lines[line]))) {
                item = {
                    'url': parts[3],
                    'func': parts[4],
                    'args': [],
                    'line': +parts[1],
                    'column': null // TODO: Check to see if inline#1 (+parts[2]) points to the script number or column number.
                };
                var relativeLine = (+parts[1]); // relative to the start of the <SCRIPT> block
                var script = inlineScriptBlocks[parts[2] - 1];
                if (script) {
                    var source = getSource(item.url);
                    if (source) {
                        source = source.join('\n');
                        var pos = source.indexOf(script.innerText);
                        if (pos >= 0) {
                            item.line = relativeLine + source.substring(0, pos).split('\n').length;
                        }
                    }
                }
            } else if ((parts = lineRE3.exec(lines[line]))) {
                var url = window.location.href.replace(/#.*$/, '');
                var re = new RegExp(escapeCodeAsRegExpForMatchingInsideHTML(lines[line + 1]));
                var src = findSourceInUrls(re, [url]);
                item = {
                    'url': url,
                    'func': '',
                    'args': [],
                    'line': src ? src.line : parts[1],
                    'column': null
                };
            }

            if (item) {
                if (!item.func) {
                    item.func = guessFunctionName(item.url, item.line);
                }
                var context = gatherContext(item.url, item.line);
                var midline = (context ? context[Math.floor(context.length / 2)] : null);
                if (context && midline.replace(/^\s*/, '') === lines[line + 1].replace(/^\s*/, '')) {
                    item.context = context;
                } else {
                    // if (context) alert("Context mismatch. Correct midline:\n" + lines[i+1] + "\n\nMidline:\n" + midline + "\n\nContext:\n" + context.join("\n") + "\n\nURL:\n" + item.url);
                    item.context = [lines[line + 1]];
                }
                stack.push(item);
            }
        }
        if (!stack.length) {
            return null; // could not parse multiline exception message as Opera stack trace
        }

        return {
            'mode': 'multiline',
            'name': ex.name,
            'message': lines[0],
            'stack': stack
        };
    }

    /**
     * Adds information about the first frame to incomplete stack traces.
     * Safari and IE require this to get complete data on the first frame.
     * @param {TraceKit.StackTrace} stackInfo Stack trace information from
     * one of the compute* methods.
     * @param {string} url The URL of the script that caused an error.
     * @param {(number|string)} lineNo The line number of the script that
     * caused an error.
     * @param {string=} message The error generated by the browser, which
     * hopefully contains the name of the object that caused the error.
     * @return {boolean} Whether or not the stack information was
     * augmented.
     * @memberof TraceKit.computeStackTrace
     */
    function augmentStackTraceWithInitialElement(stackInfo, url, lineNo, message) {
        var initial = {
            'url': url,
            'line': lineNo
        };

        if (initial.url && initial.line) {
            stackInfo.incomplete = false;

            if (!initial.func) {
                initial.func = guessFunctionName(initial.url, initial.line);
            }

            if (!initial.context) {
                initial.context = gatherContext(initial.url, initial.line);
            }

            var reference = / '([^']+)' /.exec(message);
            if (reference) {
                initial.column = findSourceInLine(reference[1], initial.url, initial.line);
            }

            if (stackInfo.stack.length > 0) {
                if (stackInfo.stack[0].url === initial.url) {
                    if (stackInfo.stack[0].line === initial.line) {
                        return false; // already in stack trace
                    } else if (!stackInfo.stack[0].line && stackInfo.stack[0].func === initial.func) {
                        stackInfo.stack[0].line = initial.line;
                        stackInfo.stack[0].context = initial.context;
                        return false;
                    }
                }
            }

            stackInfo.stack.unshift(initial);
            stackInfo.partial = true;
            return true;
        } else {
            stackInfo.incomplete = true;
        }

        return false;
    }

    /**
     * Computes stack trace information by walking the arguments.caller
     * chain at the time the exception occurred. This will cause earlier
     * frames to be missed but is the only way to get any stack trace in
     * Safari and IE. The top frame is restored by
     * {@link augmentStackTraceWithInitialElement}.
     * @param {Error} ex
     * @return {TraceKit.StackTrace=} Stack trace information.
     * @memberof TraceKit.computeStackTrace
     */
    function computeStackTraceByWalkingCallerChain(ex, depth) {
        var functionName = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,
            stack = [],
            funcs = {},
            recursion = false,
            parts,
            item,
            source;

        for (var curr = computeStackTraceByWalkingCallerChain.caller; curr && !recursion; curr = curr.caller) {
            if (curr === computeStackTrace || curr === TraceKit.report) {
                continue;
            }

            item = {
                'url': null,
                'func': UNKNOWN_FUNCTION,
                'args': [],
                'line': null,
                'column': null
            };

            if (curr.name) {
                item.func = curr.name;
            } else if ((parts = functionName.exec(curr.toString()))) {
                item.func = parts[1];
            }

            if (typeof item.func === 'undefined') {
              try {
                item.func = parts.input.substring(0, parts.input.indexOf('{'));
              } catch (e) { }
            }

            if ((source = findSourceByFunctionBody(curr))) {
                item.url = source.url;
                item.line = source.line;

                if (item.func === UNKNOWN_FUNCTION) {
                    item.func = guessFunctionName(item.url, item.line);
                }

                var reference = / '([^']+)' /.exec(ex.message || ex.description);
                if (reference) {
                    item.column = findSourceInLine(reference[1], source.url, source.line);
                }
            }

            if (funcs['' + curr]) {
                recursion = true;
            }else{
                funcs['' + curr] = true;
            }

            stack.push(item);
        }

        if (depth) {
            stack.splice(0, depth);
        }

        var result = {
            'mode': 'callers',
            'name': ex.name,
            'message': ex.message,
            'stack': stack
        };
        augmentStackTraceWithInitialElement(result, ex.sourceURL || ex.fileName, ex.line || ex.lineNumber, ex.message || ex.description);
        return result;
    }

    /**
     * Computes a stack trace for an exception.
     * @param {Error} ex
     * @param {(string|number)=} depth
     * @memberof TraceKit.computeStackTrace
     */
    function computeStackTrace(ex, depth) {
        var stack = null;
        depth = (depth == null ? 0 : +depth);

        try {
            // This must be tried first because Opera 10 *destroys*
            // its stacktrace property if you try to access the stack
            // property first!!
            stack = computeStackTraceFromStacktraceProp(ex);
            if (stack) {
                return stack;
            }
        } catch (e) {
            if (debug) {
                throw e;
            }
        }

        try {
            stack = computeStackTraceFromStackProp(ex);
            if (stack) {
                return stack;
            }
        } catch (e) {
            if (debug) {
                throw e;
            }
        }

        try {
            stack = computeStackTraceFromOperaMultiLineMessage(ex);
            if (stack) {
                return stack;
            }
        } catch (e) {
            if (debug) {
                throw e;
            }
        }

        try {
            stack = computeStackTraceByWalkingCallerChain(ex, depth + 1);
            if (stack) {
                return stack;
            }
        } catch (e) {
            if (debug) {
                throw e;
            }
        }

        return {
            'name': ex.name,
            'message': ex.message,
            'mode': 'failed'
        };
    }

    /**
     * Logs a stacktrace starting from the previous call and working down.
     * @param {(number|string)=} depth How many frames deep to trace.
     * @return {TraceKit.StackTrace} Stack trace information.
     * @memberof TraceKit.computeStackTrace
     */
    function computeStackTraceOfCaller(depth) {
        depth = (depth == null ? 0 : +depth) + 1; // "+ 1" because "ofCaller" should drop one frame
        try {
            throw new Error();
        } catch (ex) {
            return computeStackTrace(ex, depth + 1);
        }
    }

    computeStackTrace.augmentStackTraceWithInitialElement = augmentStackTraceWithInitialElement;
    computeStackTrace.computeStackTraceFromStackProp = computeStackTraceFromStackProp;
    computeStackTrace.guessFunctionName = guessFunctionName;
    computeStackTrace.gatherContext = gatherContext;
    computeStackTrace.ofCaller = computeStackTraceOfCaller;
    computeStackTrace.getSource = getSource;

    return computeStackTrace;
}());

/**
 * Extends support for global error handling for asynchronous browser
 * functions. Adopted from Closure Library's errorhandler.js
 * @memberof TraceKit
 */
TraceKit.extendToAsynchronousCallbacks = function () {
    var _helper = function _helper(fnName) {
        var originalFn = window[fnName];
        window[fnName] = function traceKitAsyncExtension() {
            // Make a copy of the arguments
            var args = _slice.call(arguments);
            var originalCallback = args[0];
            if (typeof (originalCallback) === 'function') {
                args[0] = TraceKit.wrap(originalCallback);
            }
            // IE < 9 doesn't support .call/.apply on setInterval/setTimeout, but it
            // also only supports 2 argument and doesn't care what "this" is, so we
            // can just call the original function directly.
            if (originalFn.apply) {
                return originalFn.apply(this, args);
            } else {
                return originalFn(args[0], args[1]);
            }
        };
    };

    _helper('setTimeout');
    _helper('setInterval');
};

//Default options:
if (!TraceKit.remoteFetching) {
    TraceKit.remoteFetching = true;
}
if (!TraceKit.collectWindowErrors) {
    TraceKit.collectWindowErrors = true;
}
if (!TraceKit.linesOfContext || TraceKit.linesOfContext < 1) {
    // 5 lines before, the offending line, 5 lines after
    TraceKit.linesOfContext = 11;
}

// UMD export
if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (TraceKit),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}

}(typeof window !== 'undefined' ? window : __webpack_require__.g));


/***/ })

}]);