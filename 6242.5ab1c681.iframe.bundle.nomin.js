(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[6242],{

/***/ "../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

/***/ }),

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

/***/ "../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(obj, key, value) {
  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***/ }),

/***/ "../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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

/***/ "../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ _toConsumableArray)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
var arrayLikeToArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,arrayLikeToArray/* default */.A)(arr);
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/iterableToArray.js
var iterableToArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || (0,iterableToArray/* default */.A)(arr) || (0,unsupportedIterableToArray/* default */.A)(arr) || _nonIterableSpread();
}

/***/ }),

/***/ "../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ _toPropertyKey)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/typeof.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function _toPrimitive(input, hint) {
  if ((0,esm_typeof/* default */.A)(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,esm_typeof/* default */.A)(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return (0,esm_typeof/* default */.A)(key) === "symbol" ? key : String(key);
}

/***/ }),

/***/ "../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/typeof.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

/***/ }),

/***/ "../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(o, minLen);
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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/combobox-control/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ combobox_control)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js
var use_instance_id = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+a11y@4.0.1/node_modules/@wordpress/a11y/build-module/index.js + 5 modules
var a11y_build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+a11y@4.0.1/node_modules/@wordpress/a11y/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/close-small.js
var close_small = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/close-small.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1__@types+react@18.3.16_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js + 1 modules
var emotion_styled_base_browser_esm = __webpack_require__("../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1__@types+react@18.3.16_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__("../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/flex/component.js
var component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/flex/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/space.js
var space = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/space.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/combobox-control/styles.js

/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


const deprecatedDefaultSize = ({
  __next40pxDefaultSize
}) => !__next40pxDefaultSize && /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("height:28px;padding-left:", (0,space/* space */.x)(1), ";padding-right:", (0,space/* space */.x)(1), ";" + ( true ? "" : 0),  true ? "" : 0);
const InputWrapperFlex = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)(component/* default */.A,  true ? {
  target: "evuatpg0"
} : 0)("height:38px;padding-left:", (0,space/* space */.x)(2), ";padding-right:", (0,space/* space */.x)(2), ";", deprecatedDefaultSize, ";" + ( true ? "" : 0));
//# sourceMappingURL=styles.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/form-token-field/token-input.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

function UnForwardedTokenInput(props, ref) {
  const {
    value,
    isExpanded,
    instanceId,
    selectedSuggestionIndex,
    className,
    onChange,
    onFocus,
    onBlur,
    ...restProps
  } = props;
  const [hasFocus, setHasFocus] = (0,react.useState)(false);
  const size = value ? value.length + 1 : 0;
  const onChangeHandler = event => {
    if (onChange) {
      onChange({
        value: event.target.value
      });
    }
  };
  const onFocusHandler = e => {
    setHasFocus(true);
    onFocus?.(e);
  };
  const onBlurHandler = e => {
    setHasFocus(false);
    onBlur?.(e);
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
    ref: ref,
    id: `components-form-token-input-${instanceId}`,
    type: "text",
    ...restProps,
    value: value || '',
    onChange: onChangeHandler,
    onFocus: onFocusHandler,
    onBlur: onBlurHandler,
    size: size,
    className: (0,clsx/* default */.A)(className, 'components-form-token-field__input'),
    autoComplete: "off",
    role: "combobox",
    "aria-expanded": isExpanded,
    "aria-autocomplete": "list",
    "aria-owns": isExpanded ? `components-form-token-suggestions-${instanceId}` : undefined,
    "aria-activedescendant":
    // Only add the `aria-activedescendant` attribute when:
    // - the user is actively interacting with the input (`hasFocus`)
    // - there is a selected suggestion (`selectedSuggestionIndex !== -1`)
    // - the list of suggestions are rendered in the DOM (`isExpanded`)
    hasFocus && selectedSuggestionIndex !== -1 && isExpanded ? `components-form-token-suggestions-${instanceId}-${selectedSuggestionIndex}` : undefined,
    "aria-describedby": `components-form-token-suggestions-howto-${instanceId}`
  });
}
const TokenInput = (0,react.forwardRef)(UnForwardedTokenInput);
/* harmony default export */ const token_input = (TokenInput);
//# sourceMappingURL=token-input.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-ref-effect/index.js
var use_ref_effect = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-ref-effect/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/form-token-field/suggestions-list.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const handleMouseDown = e => {
  // By preventing default here, we will not lose focus of <input> when clicking a suggestion.
  e.preventDefault();
};
function SuggestionsList({
  selectedIndex,
  scrollIntoView,
  match,
  onHover,
  onSelect,
  suggestions = [],
  displayTransform,
  instanceId,
  __experimentalRenderItem
}) {
  const listRef = (0,use_ref_effect/* default */.A)(listNode => {
    // only have to worry about scrolling selected suggestion into view
    // when already expanded.
    let rafId;
    if (selectedIndex > -1 && scrollIntoView && listNode.children[selectedIndex]) {
      listNode.children[selectedIndex].scrollIntoView({
        behavior: 'instant',
        block: 'nearest',
        inline: 'nearest'
      });
    }
    return () => {
      if (rafId !== undefined) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [selectedIndex, scrollIntoView]);
  const handleHover = suggestion => {
    return () => {
      onHover?.(suggestion);
    };
  };
  const handleClick = suggestion => {
    return () => {
      onSelect?.(suggestion);
    };
  };
  const computeSuggestionMatch = suggestion => {
    const matchText = displayTransform(match).toLocaleLowerCase();
    if (matchText.length === 0) {
      return null;
    }
    const transformedSuggestion = displayTransform(suggestion);
    const indexOfMatch = transformedSuggestion.toLocaleLowerCase().indexOf(matchText);
    return {
      suggestionBeforeMatch: transformedSuggestion.substring(0, indexOfMatch),
      suggestionMatch: transformedSuggestion.substring(indexOfMatch, indexOfMatch + matchText.length),
      suggestionAfterMatch: transformedSuggestion.substring(indexOfMatch + matchText.length)
    };
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
    ref: listRef,
    className: "components-form-token-field__suggestions-list",
    id: `components-form-token-suggestions-${instanceId}`,
    role: "listbox",
    children: suggestions.map((suggestion, index) => {
      const matchText = computeSuggestionMatch(suggestion);
      const isSelected = index === selectedIndex;
      const isDisabled = typeof suggestion === 'object' && suggestion?.disabled;
      const key = typeof suggestion === 'object' && 'value' in suggestion ? suggestion?.value : displayTransform(suggestion);
      const className = (0,clsx/* default */.A)('components-form-token-field__suggestion', {
        'is-selected': isSelected
      });
      let output;
      if (typeof __experimentalRenderItem === 'function') {
        output = __experimentalRenderItem({
          item: suggestion
        });
      } else if (matchText) {
        output = /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
          "aria-label": displayTransform(suggestion),
          children: [matchText.suggestionBeforeMatch, /*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
            className: "components-form-token-field__suggestion-match",
            children: matchText.suggestionMatch
          }), matchText.suggestionAfterMatch]
        });
      } else {
        output = displayTransform(suggestion);
      }

      /* eslint-disable jsx-a11y/click-events-have-key-events */
      return /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
        id: `components-form-token-suggestions-${instanceId}-${index}`,
        role: "option",
        className: className,
        onMouseDown: handleMouseDown,
        onClick: handleClick(suggestion),
        onMouseEnter: handleHover(suggestion),
        "aria-selected": index === selectedIndex,
        "aria-disabled": isDisabled,
        children: output
      }, key);
      /* eslint-enable jsx-a11y/click-events-have-key-events */
    })
  });
}
/* harmony default export */ const suggestions_list = (SuggestionsList);
//# sourceMappingURL=suggestions-list.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/base-control/index.js
var base_control = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/base-control/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/flex-block/component.js + 1 modules
var flex_block_component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/flex-block/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/flex-item/component.js
var flex_item_component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/flex-item/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/higher-order/with-focus-outside/index.js
var with_focus_outside = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/higher-order/with-focus-outside/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js
var use_controlled_value = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/strings.js
var strings = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/strings.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/use-deprecated-props.js
var use_deprecated_props = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/use-deprecated-props.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/with-ignore-ime-events.js
var with_ignore_ime_events = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/with-ignore-ime-events.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/combobox-control/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */













const noop = () => {};
const DetectOutside = (0,with_focus_outside/* default */.A)(class extends react.Component {
  handleFocusOutside(event) {
    this.props.onFocusOutside(event);
  }
  render() {
    return this.props.children;
  }
});
const getIndexOfMatchingSuggestion = (selectedSuggestion, matchingSuggestions) => selectedSuggestion === null ? -1 : matchingSuggestions.indexOf(selectedSuggestion);

/**
 * `ComboboxControl` is an enhanced version of a [`SelectControl`](../select-control/README.md) with the addition of
 * being able to search for options using a search input.
 *
 * ```jsx
 * import { ComboboxControl } from '@wordpress/components';
 * import { useState } from '@wordpress/element';
 *
 * const options = [
 * 	{
 * 		value: 'small',
 * 		label: 'Small',
 * 	},
 * 	{
 * 		value: 'normal',
 * 		label: 'Normal',
 * 		disabled: true,
 * 	},
 * 	{
 * 		value: 'large',
 * 		label: 'Large',
 * 		disabled: false,
 * 	},
 * ];
 *
 * function MyComboboxControl() {
 * 	const [ fontSize, setFontSize ] = useState();
 * 	const [ filteredOptions, setFilteredOptions ] = useState( options );
 * 	return (
 * 		<ComboboxControl
 * 			label="Font Size"
 * 			value={ fontSize }
 * 			onChange={ setFontSize }
 * 			options={ filteredOptions }
 * 			onFilterValueChange={ ( inputValue ) =>
 * 				setFilteredOptions(
 * 					options.filter( ( option ) =>
 * 						option.label
 * 							.toLowerCase()
 * 							.startsWith( inputValue.toLowerCase() )
 * 					)
 * 				)
 * 			}
 * 		/>
 * 	);
 * }
 * ```
 */
function ComboboxControl(props) {
  var _currentOption$label;
  const {
    __nextHasNoMarginBottom = false,
    __next40pxDefaultSize = false,
    value: valueProp,
    label,
    options,
    onChange: onChangeProp,
    onFilterValueChange = noop,
    hideLabelFromVision,
    help,
    allowReset = true,
    className,
    messages = {
      selected: (0,build_module.__)('Item selected.')
    },
    __experimentalRenderItem,
    expandOnFocus = true
  } = (0,use_deprecated_props/* useDeprecated36pxDefaultSizeProp */.R)(props);
  const [value, setValue] = (0,use_controlled_value/* useControlledValue */.j)({
    value: valueProp,
    onChange: onChangeProp
  });
  const currentOption = options.find(option => option.value === value);
  const currentLabel = (_currentOption$label = currentOption?.label) !== null && _currentOption$label !== void 0 ? _currentOption$label : '';
  // Use a custom prefix when generating the `instanceId` to avoid having
  // duplicate input IDs when rendering this component and `FormTokenField`
  // in the same page (see https://github.com/WordPress/gutenberg/issues/42112).
  const instanceId = (0,use_instance_id/* default */.A)(ComboboxControl, 'combobox-control');
  const [selectedSuggestion, setSelectedSuggestion] = (0,react.useState)(currentOption || null);
  const [isExpanded, setIsExpanded] = (0,react.useState)(false);
  const [inputHasFocus, setInputHasFocus] = (0,react.useState)(false);
  const [inputValue, setInputValue] = (0,react.useState)('');
  const inputContainer = (0,react.useRef)(null);
  const matchingSuggestions = (0,react.useMemo)(() => {
    const startsWithMatch = [];
    const containsMatch = [];
    const match = (0,strings/* normalizeTextString */.Aq)(inputValue);
    options.forEach(option => {
      const index = (0,strings/* normalizeTextString */.Aq)(option.label).indexOf(match);
      if (index === 0) {
        startsWithMatch.push(option);
      } else if (index > 0) {
        containsMatch.push(option);
      }
    });
    return startsWithMatch.concat(containsMatch);
  }, [inputValue, options]);
  const onSuggestionSelected = newSelectedSuggestion => {
    if (newSelectedSuggestion.disabled) {
      return;
    }
    setValue(newSelectedSuggestion.value);
    (0,a11y_build_module/* speak */.L)(messages.selected, 'assertive');
    setSelectedSuggestion(newSelectedSuggestion);
    setInputValue('');
    setIsExpanded(false);
  };
  const handleArrowNavigation = (offset = 1) => {
    const index = getIndexOfMatchingSuggestion(selectedSuggestion, matchingSuggestions);
    let nextIndex = index + offset;
    if (nextIndex < 0) {
      nextIndex = matchingSuggestions.length - 1;
    } else if (nextIndex >= matchingSuggestions.length) {
      nextIndex = 0;
    }
    setSelectedSuggestion(matchingSuggestions[nextIndex]);
    setIsExpanded(true);
  };
  const onKeyDown = (0,with_ignore_ime_events/* withIgnoreIMEEvents */.n)(event => {
    let preventDefault = false;
    if (event.defaultPrevented) {
      return;
    }
    switch (event.code) {
      case 'Enter':
        if (selectedSuggestion) {
          onSuggestionSelected(selectedSuggestion);
          preventDefault = true;
        }
        break;
      case 'ArrowUp':
        handleArrowNavigation(-1);
        preventDefault = true;
        break;
      case 'ArrowDown':
        handleArrowNavigation(1);
        preventDefault = true;
        break;
      case 'Escape':
        setIsExpanded(false);
        setSelectedSuggestion(null);
        preventDefault = true;
        break;
      default:
        break;
    }
    if (preventDefault) {
      event.preventDefault();
    }
  });
  const onBlur = () => {
    setInputHasFocus(false);
  };
  const onFocus = () => {
    setInputHasFocus(true);
    if (expandOnFocus) {
      setIsExpanded(true);
    }
    onFilterValueChange('');
    setInputValue('');
  };
  const onClick = () => {
    setIsExpanded(true);
  };
  const onFocusOutside = () => {
    setIsExpanded(false);
  };
  const onInputChange = event => {
    const text = event.value;
    setInputValue(text);
    onFilterValueChange(text);
    if (inputHasFocus) {
      setIsExpanded(true);
    }
  };
  const handleOnReset = () => {
    setValue(null);
    inputContainer.current?.focus();
  };

  // Update current selections when the filter input changes.
  (0,react.useEffect)(() => {
    const hasMatchingSuggestions = matchingSuggestions.length > 0;
    const hasSelectedMatchingSuggestions = getIndexOfMatchingSuggestion(selectedSuggestion, matchingSuggestions) > 0;
    if (hasMatchingSuggestions && !hasSelectedMatchingSuggestions) {
      // If the current selection isn't present in the list of suggestions, then automatically select the first item from the list of suggestions.
      setSelectedSuggestion(matchingSuggestions[0]);
    }
  }, [matchingSuggestions, selectedSuggestion]);

  // Announcements.
  (0,react.useEffect)(() => {
    const hasMatchingSuggestions = matchingSuggestions.length > 0;
    if (isExpanded) {
      const message = hasMatchingSuggestions ? (0,build_module/* sprintf */.nv)( /* translators: %d: number of results. */
      (0,build_module._n)('%d result found, use up and down arrow keys to navigate.', '%d results found, use up and down arrow keys to navigate.', matchingSuggestions.length), matchingSuggestions.length) : (0,build_module.__)('No results.');
      (0,a11y_build_module/* speak */.L)(message, 'polite');
    }
  }, [matchingSuggestions, isExpanded]);

  // Disable reason: There is no appropriate role which describes the
  // input container intended accessible usability.
  // TODO: Refactor click detection to use blur to stop propagation.
  /* eslint-disable jsx-a11y/no-static-element-interactions */
  return /*#__PURE__*/(0,jsx_runtime.jsx)(DetectOutside, {
    onFocusOutside: onFocusOutside,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(base_control/* default */.Ay, {
      __nextHasNoMarginBottom: __nextHasNoMarginBottom,
      className: (0,clsx/* default */.A)(className, 'components-combobox-control'),
      label: label,
      id: `components-form-token-input-${instanceId}`,
      hideLabelFromVision: hideLabelFromVision,
      help: help,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "components-combobox-control__suggestions-container",
        tabIndex: -1,
        onKeyDown: onKeyDown,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(InputWrapperFlex, {
          __next40pxDefaultSize: __next40pxDefaultSize,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(flex_block_component/* default */.A, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(token_input, {
              className: "components-combobox-control__input",
              instanceId: instanceId,
              ref: inputContainer,
              value: isExpanded ? inputValue : currentLabel,
              onFocus: onFocus,
              onBlur: onBlur,
              onClick: onClick,
              isExpanded: isExpanded,
              selectedSuggestionIndex: getIndexOfMatchingSuggestion(selectedSuggestion, matchingSuggestions),
              onChange: onInputChange
            })
          }), allowReset && /*#__PURE__*/(0,jsx_runtime.jsx)(flex_item_component/* default */.A, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
              className: "components-combobox-control__reset",
              icon: close_small/* default */.A,
              disabled: !value,
              onClick: handleOnReset,
              label: (0,build_module.__)('Reset')
            })
          })]
        }), isExpanded && /*#__PURE__*/(0,jsx_runtime.jsx)(suggestions_list, {
          instanceId: instanceId
          // The empty string for `value` here is not actually used, but is
          // just a quick way to satisfy the TypeScript requirements of SuggestionsList.
          // See: https://github.com/WordPress/gutenberg/pull/47581/files#r1091089330
          ,
          match: {
            label: inputValue,
            value: ''
          },
          displayTransform: suggestion => suggestion.label,
          suggestions: matchingSuggestions,
          selectedIndex: getIndexOfMatchingSuggestion(selectedSuggestion, matchingSuggestions),
          onHover: setSelectedSuggestion,
          onSelect: onSuggestionSelected,
          scrollIntoView: true,
          __experimentalRenderItem: __experimentalRenderItem
        })]
      })
    })
  });
  /* eslint-enable jsx-a11y/no-static-element-interactions */
}
/* harmony default export */ const combobox_control = (ComboboxControl);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/context.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ FlexContext),
/* harmony export */   a: () => (/* binding */ useFlexContext)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * WordPress dependencies
 */

const FlexContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  flexItemDisplay: undefined
});
const useFlexContext = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(FlexContext);
//# sourceMappingURL=context.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/flex-block/component.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ flex_block_component)
});

// UNUSED EXPORTS: FlexBlock

// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-connect.js
var context_connect = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-connect.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/view/component.js
var component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/view/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/use-context-system.js + 1 modules
var use_context_system = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/use-context-system.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/flex-item/hook.js
var hook = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/flex-item/hook.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/flex-block/hook.js
/**
 * Internal dependencies
 */



function useFlexBlock(props) {
  const otherProps = (0,use_context_system/* useContextSystem */.A)(props, 'FlexBlock');
  const flexItemProps = (0,hook/* useFlexItem */.K)({
    isBlock: true,
    ...otherProps
  });
  return flexItemProps;
}
//# sourceMappingURL=hook.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/flex-block/component.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */





function UnconnectedFlexBlock(props, forwardedRef) {
  const flexBlockProps = useFlexBlock(props);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(component/* default */.A, {
    ...flexBlockProps,
    ref: forwardedRef
  });
}

/**
 * `FlexBlock` is a primitive layout component that adaptively resizes content
 * within layout containers like `Flex`.
 *
 * ```jsx
 * import { Flex, FlexBlock } from '@wordpress/components';
 *
 * function Example() {
 *   return (
 *     <Flex>
 *       <FlexBlock>...</FlexBlock>
 *     </Flex>
 *   );
 * }
 * ```
 */
const FlexBlock = (0,context_connect/* contextConnect */.KZ)(UnconnectedFlexBlock, 'FlexBlock');
/* harmony default export */ const flex_block_component = (FlexBlock);
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/flex-item/component.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export FlexItem */
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-connect.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/view/component.js");
/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/flex-item/hook.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */





function UnconnectedFlexItem(props, forwardedRef) {
  const flexItemProps = (0,_hook__WEBPACK_IMPORTED_MODULE_1__/* .useFlexItem */ .K)(props);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_view__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    ...flexItemProps,
    ref: forwardedRef
  });
}

/**
 * `FlexItem` is a primitive layout component that aligns content within layout
 * containers like `Flex`.
 *
 * ```jsx
 * import { Flex, FlexItem } from '@wordpress/components';
 *
 * function Example() {
 *   return (
 *     <Flex>
 *       <FlexItem>...</FlexItem>
 *     </Flex>
 *   );
 * }
 * ```
 */
const FlexItem = (0,_context__WEBPACK_IMPORTED_MODULE_3__/* .contextConnect */ .KZ)(UnconnectedFlexItem, 'FlexItem');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlexItem);
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/flex-item/hook.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ useFlexItem)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/use-context-system.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/context.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/styles.js");
/* harmony import */ var _utils_hooks_use_cx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js");
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */





function useFlexItem(props) {
  const {
    className,
    display: displayProp,
    isBlock = false,
    ...otherProps
  } = (0,_context__WEBPACK_IMPORTED_MODULE_0__/* .useContextSystem */ .A)(props, 'FlexItem');
  const sx = {};
  const contextDisplay = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .useFlexContext */ .a)().flexItemDisplay;
  sx.Base = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__/* .css */ .AH)({
    display: displayProp || contextDisplay
  },  true ? "" : 0,  true ? "" : 0);
  const cx = (0,_utils_hooks_use_cx__WEBPACK_IMPORTED_MODULE_3__/* .useCx */ .l)();
  const classes = cx(_styles__WEBPACK_IMPORTED_MODULE_4__/* .Item */ .q7, sx.Base, isBlock && _styles__WEBPACK_IMPORTED_MODULE_4__/* .block */ .om, className);
  return {
    ...otherProps,
    className: classes
  };
}
//# sourceMappingURL=hook.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/flex/component.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Flex */
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-connect.js");
/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/flex/hook.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/context.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/view/component.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */






function UnconnectedFlex(props, forwardedRef) {
  const {
    children,
    isColumn,
    ...otherProps
  } = (0,_hook__WEBPACK_IMPORTED_MODULE_1__/* .useFlex */ .v)(props);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_context__WEBPACK_IMPORTED_MODULE_2__/* .FlexContext */ .R.Provider, {
    value: {
      flexItemDisplay: isColumn ? 'block' : undefined
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_view__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      ...otherProps,
      ref: forwardedRef,
      children: children
    })
  });
}

/**
 * `Flex` is a primitive layout component that adaptively aligns child content
 * horizontally or vertically. `Flex` powers components like `HStack` and
 * `VStack`.
 *
 * `Flex` is used with any of its two sub-components, `FlexItem` and
 * `FlexBlock`.
 *
 * ```jsx
 * import { Flex, FlexBlock, FlexItem } from '@wordpress/components';
 *
 * function Example() {
 *   return (
 *     <Flex>
 *       <FlexItem>
 *         <p>Code</p>
 *       </FlexItem>
 *       <FlexBlock>
 *         <p>Poetry</p>
 *       </FlexBlock>
 *     </Flex>
 *   );
 * }
 * ```
 */
const Flex = (0,_context__WEBPACK_IMPORTED_MODULE_4__/* .contextConnect */ .KZ)(UnconnectedFlex, 'Flex');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Flex);
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/flex/hook.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ useFlex)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+deprecated@4.0.1/node_modules/@wordpress/deprecated/build-module/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/use-context-system.js");
/* harmony import */ var _utils_use_responsive_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/use-responsive-value.js");
/* harmony import */ var _utils_space__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/space.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/styles.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js");
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */






function useDeprecatedProps(props) {
  const {
    isReversed,
    ...otherProps
  } = props;
  if (typeof isReversed !== 'undefined') {
    (0,_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)('Flex isReversed', {
      alternative: 'Flex direction="row-reverse" or "column-reverse"',
      since: '5.9'
    });
    return {
      ...otherProps,
      direction: isReversed ? 'row-reverse' : 'row'
    };
  }
  return otherProps;
}
function useFlex(props) {
  const {
    align,
    className,
    direction: directionProp = 'row',
    expanded = true,
    gap = 2,
    justify = 'space-between',
    wrap = false,
    ...otherProps
  } = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .useContextSystem */ .A)(useDeprecatedProps(props), 'Flex');
  const directionAsArray = Array.isArray(directionProp) ? directionProp : [directionProp];
  const direction = (0,_utils_use_responsive_value__WEBPACK_IMPORTED_MODULE_2__/* .useResponsiveValue */ .t)(directionAsArray);
  const isColumn = typeof direction === 'string' && !!direction.includes('column');
  const cx = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .useCx */ .l)();
  const classes = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => {
    const base = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__/* .css */ .AH)({
      alignItems: align !== null && align !== void 0 ? align : isColumn ? 'normal' : 'center',
      flexDirection: direction,
      flexWrap: wrap ? 'wrap' : undefined,
      gap: (0,_utils_space__WEBPACK_IMPORTED_MODULE_6__/* .space */ .x)(gap),
      justifyContent: justify,
      height: isColumn && expanded ? '100%' : undefined,
      width: !isColumn && expanded ? '100%' : undefined
    },  true ? "" : 0,  true ? "" : 0);
    return cx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .so, base, isColumn ? _styles__WEBPACK_IMPORTED_MODULE_7__/* .ItemsColumn */ .Z2 : _styles__WEBPACK_IMPORTED_MODULE_7__/* .ItemsRow */ .RI, className);
  }, [align, className, cx, direction, expanded, gap, isColumn, justify, wrap]);
  return {
    ...otherProps,
    className: classes,
    isColumn
  };
}
//# sourceMappingURL=hook.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/styles.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RI: () => (/* binding */ ItemsRow),
/* harmony export */   Z2: () => (/* binding */ ItemsColumn),
/* harmony export */   om: () => (/* binding */ block),
/* harmony export */   q7: () => (/* binding */ Item),
/* harmony export */   so: () => (/* binding */ Flex)
/* harmony export */ });
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
/**
 * External dependencies
 */

const Flex =  true ? {
  name: "zjik7",
  styles: "display:flex"
} : 0;
const Item =  true ? {
  name: "qgaee5",
  styles: "display:block;max-height:100%;max-width:100%;min-height:0;min-width:0"
} : 0;
const block =  true ? {
  name: "82a6rk",
  styles: "flex:1"
} : 0;

/**
 * Workaround to optimize DOM rendering.
 * We'll enhance alignment with naive parent flex assumptions.
 *
 * Trade-off:
 * Far less DOM less. However, UI rendering is not as reliable.
 */

/**
 * Improves stability of width/height rendering.
 * https://github.com/ItsJonQ/g2/pull/149
 */
const ItemsColumn =  true ? {
  name: "13nosa1",
  styles: ">*{min-height:0;}"
} : 0;
const ItemsRow =  true ? {
  name: "1pwxzk4",
  styles: ">*{min-width:0;}"
} : 0;
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/higher-order/with-focus-outside/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/utils/create-higher-order-component/index.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-outside/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * WordPress dependencies
 */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__/* .createHigherOrderComponent */ .f)(WrappedComponent => props => {
  const [handleFocusOutside, setHandleFocusOutside] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);
  const bindFocusOutsideHandler = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(node => setHandleFocusOutside(() => node?.handleFocusOutside ? node.handleFocusOutside.bind(node) : undefined), []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    ...(0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(handleFocusOutside),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WrappedComponent, {
      ref: bindFocusOutsideHandler,
      ...props
    })
  });
}, 'withFocusOutside'));
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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ useControlledValue)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * WordPress dependencies
 */

/**
 * Simplified and improved implementation of useControlledState.
 *
 * @param props
 * @param props.defaultValue
 * @param props.value
 * @param props.onChange
 * @return The controlled value and the value setter.
 */
function useControlledValue({
  defaultValue,
  onChange,
  value: valueProp
}) {
  const hasValue = typeof valueProp !== 'undefined';
  const initialValue = hasValue ? valueProp : defaultValue;
  const [state, setState] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue);
  const value = hasValue ? valueProp : state;
  let setValue;
  if (hasValue && typeof onChange === 'function') {
    setValue = onChange;
  } else if (!hasValue && typeof onChange === 'function') {
    setValue = nextValue => {
      onChange(nextValue);
      setState(nextValue);
    };
  } else {
    setValue = setState;
  }
  return [value, setValue];
}
//# sourceMappingURL=use-controlled-value.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/strings.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Aq: () => (/* binding */ normalizeTextString),
/* harmony export */   Nt: () => (/* binding */ escapeRegExp),
/* harmony export */   kW: () => (/* binding */ kebabCase)
/* harmony export */ });
/* harmony import */ var remove_accents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/remove-accents@0.5.0/node_modules/remove-accents/index.js");
/* harmony import */ var remove_accents__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(remove_accents__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var change_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/param-case@3.0.4/node_modules/param-case/dist.es2015/index.js");
/**
 * External dependencies
 */



/**
 * All unicode characters that we consider "dash-like":
 * - `\u007e`: ~ (tilde)
 * - `\u00ad`: ­ (soft hyphen)
 * - `\u2053`: ⁓ (swung dash)
 * - `\u207b`: ⁻ (superscript minus)
 * - `\u208b`: ₋ (subscript minus)
 * - `\u2212`: − (minus sign)
 * - `\\p{Pd}`: any other Unicode dash character
 */
const ALL_UNICODE_DASH_CHARACTERS = new RegExp(/[\u007e\u00ad\u2053\u207b\u208b\u2212\p{Pd}]/gu);
const normalizeTextString = value => {
  return remove_accents__WEBPACK_IMPORTED_MODULE_0___default()(value).toLocaleLowerCase().replace(ALL_UNICODE_DASH_CHARACTERS, '-');
};

/**
 * Converts any string to kebab case.
 * Backwards compatible with Lodash's `_.kebabCase()`.
 * Backwards compatible with `_wp_to_kebab_case()`.
 *
 * @see https://lodash.com/docs/4.17.15#kebabCase
 * @see https://developer.wordpress.org/reference/functions/_wp_to_kebab_case/
 *
 * @param str String to convert.
 * @return Kebab-cased string
 */
function kebabCase(str) {
  var _str$toString;
  let input = (_str$toString = str?.toString?.()) !== null && _str$toString !== void 0 ? _str$toString : '';

  // See https://github.com/lodash/lodash/blob/b185fcee26b2133bd071f4aaca14b455c2ed1008/lodash.js#L4970
  input = input.replace(/['\u2019]/, '');
  return (0,change_case__WEBPACK_IMPORTED_MODULE_1__/* .paramCase */ .c)(input, {
    splitRegexp: [/(?!(?:1ST|2ND|3RD|[4-9]TH)(?![a-z]))([a-z0-9])([A-Z])/g,
    // fooBar => foo-bar, 3Bar => 3-bar
    /(?!(?:1st|2nd|3rd|[4-9]th)(?![a-z]))([0-9])([a-z])/g,
    // 3bar => 3-bar
    /([A-Za-z])([0-9])/g,
    // Foo3 => foo-3, foo3 => foo-3
    /([A-Z])([A-Z][a-z])/g // FOOBar => foo-bar
    ]
  });
}

/**
 * Escapes the RegExp special characters.
 *
 * @param string Input string.
 *
 * @return Regex-escaped string.
 */
function escapeRegExp(string) {
  return string.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&');
}
//# sourceMappingURL=strings.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/use-deprecated-props.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useDeprecated36pxDefaultSizeProp)
/* harmony export */ });
function useDeprecated36pxDefaultSizeProp(props) {
  const {
    __next36pxDefaultSize,
    __next40pxDefaultSize,
    ...otherProps
  } = props;
  return {
    ...otherProps,
    __next40pxDefaultSize: __next40pxDefaultSize !== null && __next40pxDefaultSize !== void 0 ? __next40pxDefaultSize : __next36pxDefaultSize
  };
}
//# sourceMappingURL=use-deprecated-props.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/use-responsive-value.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ useResponsiveValue)
/* harmony export */ });
/* unused harmony export useBreakpointIndex */
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * WordPress dependencies
 */

const breakpoints = ['40em', '52em', '64em'];
const useBreakpointIndex = (options = {}) => {
  const {
    defaultIndex = 0
  } = options;
  if (typeof defaultIndex !== 'number') {
    throw new TypeError(`Default breakpoint index should be a number. Got: ${defaultIndex}, ${typeof defaultIndex}`);
  } else if (defaultIndex < 0 || defaultIndex > breakpoints.length - 1) {
    throw new RangeError(`Default breakpoint index out of range. Theme has ${breakpoints.length} breakpoints, got index ${defaultIndex}`);
  }
  const [value, setValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultIndex);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const getIndex = () => breakpoints.filter(bp => {
      return typeof window !== 'undefined' ? window.matchMedia(`screen and (min-width: ${bp})`).matches : false;
    }).length;
    const onResize = () => {
      const newValue = getIndex();
      if (value !== newValue) {
        setValue(newValue);
      }
    };
    onResize();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', onResize);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', onResize);
      }
    };
  }, [value]);
  return value;
};
function useResponsiveValue(values, options = {}) {
  const index = useBreakpointIndex(options);

  // Allow calling the function with a "normal" value without having to check on the outside.
  if (!Array.isArray(values) && typeof values !== 'function') {
    return values;
  }
  const array = values || [];

  /* eslint-disable jsdoc/no-undefined-types */
  return /** @type {T[]} */array[/* eslint-enable jsdoc/no-undefined-types */
  index >= array.length ? array.length - 1 : index];
}
//# sourceMappingURL=use-responsive-value.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/with-ignore-ime-events.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ withIgnoreIMEEvents)
/* harmony export */ });
/**
 * A higher-order function that wraps a keydown event handler to ensure it is not an IME event.
 *
 * In CJK languages, an IME (Input Method Editor) is used to input complex characters.
 * During an IME composition, keydown events (e.g. Enter or Escape) can be fired
 * which are intended to control the IME and not the application.
 * These events should be ignored by any application logic.
 *
 * @param keydownHandler The keydown event handler to execute after ensuring it was not an IME event.
 *
 * @return A wrapped version of the given event handler that ignores IME events.
 */
function withIgnoreIMEEvents(keydownHandler) {
  return event => {
    const {
      isComposing
    } = 'nativeEvent' in event ? event.nativeEvent : event;
    if (isComposing ||
    // Workaround for Mac Safari where the final Enter/Backspace of an IME composition
    // is `isComposing=false`, even though it's technically still part of the composition.
    // These can only be detected by keyCode.
    event.keyCode === 229) {
      return;
    }
    keydownHandler(event);
  };
}
//# sourceMappingURL=with-ignore-ime-events.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-outside/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useFocusOutside)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * WordPress dependencies
 */


/**
 * Input types which are classified as button types, for use in considering
 * whether element is a (focus-normalized) button.
 */
const INPUT_BUTTON_TYPES = ['button', 'submit'];

/**
 * List of HTML button elements subject to focus normalization
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
 */

/**
 * Returns true if the given element is a button element subject to focus
 * normalization, or false otherwise.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
 *
 * @param eventTarget The target from a mouse or touch event.
 *
 * @return Whether the element is a button element subject to focus normalization.
 */
function isFocusNormalizedButton(eventTarget) {
  if (!(eventTarget instanceof window.HTMLElement)) {
    return false;
  }
  switch (eventTarget.nodeName) {
    case 'A':
    case 'BUTTON':
      return true;
    case 'INPUT':
      return INPUT_BUTTON_TYPES.includes(eventTarget.type);
  }
  return false;
}
/**
 * A react hook that can be used to check whether focus has moved outside the
 * element the event handlers are bound to.
 *
 * @param onFocusOutside A callback triggered when focus moves outside
 *                       the element the event handlers are bound to.
 *
 * @return An object containing event handlers. Bind the event handlers to a
 * wrapping element element to capture when focus moves outside that element.
 */
function useFocusOutside(onFocusOutside) {
  const currentOnFocusOutside = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(onFocusOutside);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    currentOnFocusOutside.current = onFocusOutside;
  }, [onFocusOutside]);
  const preventBlurCheck = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const blurCheckTimeoutId = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  /**
   * Cancel a blur check timeout.
   */
  const cancelBlurCheck = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    clearTimeout(blurCheckTimeoutId.current);
  }, []);

  // Cancel blur checks on unmount.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => cancelBlurCheck();
  }, []);

  // Cancel a blur check if the callback or ref is no longer provided.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!onFocusOutside) {
      cancelBlurCheck();
    }
  }, [onFocusOutside, cancelBlurCheck]);

  /**
   * Handles a mousedown or mouseup event to respectively assign and
   * unassign a flag for preventing blur check on button elements. Some
   * browsers, namely Firefox and Safari, do not emit a focus event on
   * button elements when clicked, while others do. The logic here
   * intends to normalize this as treating click on buttons as focus.
   *
   * @param event
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
   */
  const normalizeButtonFocus = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    const {
      type,
      target
    } = event;
    const isInteractionEnd = ['mouseup', 'touchend'].includes(type);
    if (isInteractionEnd) {
      preventBlurCheck.current = false;
    } else if (isFocusNormalizedButton(target)) {
      preventBlurCheck.current = true;
    }
  }, []);

  /**
   * A callback triggered when a blur event occurs on the element the handler
   * is bound to.
   *
   * Calls the `onFocusOutside` callback in an immediate timeout if focus has
   * move outside the bound element and is still within the document.
   */
  const queueBlurCheck = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    // React does not allow using an event reference asynchronously
    // due to recycling behavior, except when explicitly persisted.
    event.persist();

    // Skip blur check if clicking button. See `normalizeButtonFocus`.
    if (preventBlurCheck.current) {
      return;
    }

    // The usage of this attribute should be avoided. The only use case
    // would be when we load modals that are not React components and
    // therefore don't exist in the React tree. An example is opening
    // the Media Library modal from another dialog.
    // This attribute should contain a selector of the related target
    // we want to ignore, because we still need to trigger the blur event
    // on all other cases.
    const ignoreForRelatedTarget = event.target.getAttribute('data-unstable-ignore-focus-outside-for-relatedtarget');
    if (ignoreForRelatedTarget && event.relatedTarget?.closest(ignoreForRelatedTarget)) {
      return;
    }
    blurCheckTimeoutId.current = setTimeout(() => {
      // If document is not focused then focus should remain
      // inside the wrapped component and therefore we cancel
      // this blur event thereby leaving focus in place.
      // https://developer.mozilla.org/en-US/docs/Web/API/Document/hasFocus.
      if (!document.hasFocus()) {
        event.preventDefault();
        return;
      }
      if ('function' === typeof currentOnFocusOutside.current) {
        currentOnFocusOutside.current(event);
      }
    }, 0);
  }, []);
  return {
    onFocus: cancelBlurCheck,
    onMouseDown: normalizeButtonFocus,
    onMouseUp: normalizeButtonFocus,
    onTouchStart: normalizeButtonFocus,
    onTouchEnd: normalizeButtonFocus,
    onBlur: queueBlurCheck
  };
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-ref-effect/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useRefEffect)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Effect-like ref callback. Just like with `useEffect`, this allows you to
 * return a cleanup function to be run if the ref changes or one of the
 * dependencies changes. The ref is provided as an argument to the callback
 * functions. The main difference between this and `useEffect` is that
 * the `useEffect` callback is not called when the ref changes, but this is.
 * Pass the returned ref callback as the component's ref and merge multiple refs
 * with `useMergeRefs`.
 *
 * It's worth noting that if the dependencies array is empty, there's not
 * strictly a need to clean up event handlers for example, because the node is
 * to be removed. It *is* necessary if you add dependencies because the ref
 * callback will be called multiple times for the same node.
 *
 * @param callback     Callback with ref as argument.
 * @param dependencies Dependencies of the callback.
 *
 * @return Ref callback.
 */
function useRefEffect(callback, dependencies) {
  const cleanup = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(node => {
    if (node) {
      cleanup.current = callback(node);
    } else if (cleanup.current) {
      cleanup.current();
    }
  }, dependencies);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/utils/create-higher-order-component/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ createHigherOrderComponent)
/* harmony export */ });
/* harmony import */ var change_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/pascal-case@3.1.2/node_modules/pascal-case/dist.es2015/index.js");
/**
 * External dependencies
 */

/**
 * Given a function mapping a component to an enhanced component and modifier
 * name, returns the enhanced component augmented with a generated displayName.
 *
 * @param mapComponent Function mapping component to enhanced component.
 * @param modifierName Seed name from which to generated display name.
 *
 * @return Component class with generated display name assigned.
 */
function createHigherOrderComponent(mapComponent, modifierName) {
  return Inner => {
    const Outer = mapComponent(Inner);
    Outer.displayName = hocName(modifierName, Inner);
    return Outer;
  };
}

/**
 * Returns a displayName for a higher-order component, given a wrapper name.
 *
 * @example
 *     hocName( 'MyMemo', Widget ) === 'MyMemo(Widget)';
 *     hocName( 'MyMemo', <div /> ) === 'MyMemo(Component)';
 *
 * @param name  Name assigned to higher-order component's wrapper component.
 * @param Inner Wrapped component inside higher-order component.
 * @return       Wrapped name of higher-order component.
 */
const hocName = (name, Inner) => {
  const inner = Inner.displayName || Inner.name || 'Component';
  const outer = (0,change_case__WEBPACK_IMPORTED_MODULE_0__/* .pascalCase */ .fL)(name !== null && name !== void 0 ? name : '');
  return `${outer}(${inner})`;
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/close-small.js":
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


const closeSmall = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .SVG */ .t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .Path */ .wA, {
    d: "M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closeSmall);
//# sourceMappingURL=close-small.js.map

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

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/advance-string-index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var charAt = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/string-multibyte.js").charAt);

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-for-each.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $forEach = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-iteration.js").forEach);
var arrayMethodIsStrict = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-method-has-species-support.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-method-is-strict.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/does-not-exceed-safe-integer.js":
/***/ ((module) => {

"use strict";

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.exec.js");
var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this-clause.js");
var defineBuiltIn = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/define-built-in.js");
var regexpExec = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/regexp-exec.js");
var fails = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/well-known-symbol.js");
var createNonEnumerableProperty = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/create-non-enumerable-property.js");

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) !== 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () {
      execCalled = true;
      return null;
    };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var uncurriedNativeRegExpMethod = uncurryThis(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });

    defineBuiltIn(String.prototype, KEY, methods[0]);
    defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/get-substitution.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js");
var toObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-object.js");

var floor = Math.floor;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
// eslint-disable-next-line redos/no-vulnerable -- safe
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice(str, 0, position);
      case "'": return stringSlice(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/inherit-if-required.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-object.js");
var setPrototypeOf = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-set-prototype-of.js");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-assign.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/descriptors.js");
var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js");
var call = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-call.js");
var fails = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js");
var objectKeys = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-keys.js");
var getOwnPropertySymbolsModule = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-get-own-property-symbols.js");
var propertyIsEnumerableModule = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-property-is-enumerable.js");
var toObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/indexed-object.js");

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat = uncurryThis([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol('assign detection');
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] !== 7 || objectKeys($assign({}, B)).join('') !== alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/regexp-exec-abstract.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/an-object.js");
var isCallable = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-callable.js");
var classof = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/regexp-exec.js");

var $TypeError = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = call(exec, R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call(regexpExec, R, S);
  throw new $TypeError('RegExp#exec called on incompatible receiver');
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/string-trim.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js");
var requireObjectCoercible = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-string.js");
var whitespaces = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/whitespaces.js");

var replace = uncurryThis(''.replace);
var ltrim = RegExp('^[' + whitespaces + ']+');
var rtrim = RegExp('(^|[^' + whitespaces + '])[' + whitespaces + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '$1');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/this-number-value.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js");

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = uncurryThis(1.0.valueOf);


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/whitespaces.js":
/***/ ((module) => {

"use strict";

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var fails = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/length-of-array-like.js");
var doesNotExceedSafeInteger = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/does-not-exceed-safe-integer.js");
var createProperty = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/engine-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat');

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var $filter = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-iteration.js").filter);
var arrayMethodHasSpeciesSupport = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.find.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var $find = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-iteration.js").find);
var addToUnscopables = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/add-to-unscopables.js");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
// eslint-disable-next-line es/no-array-prototype-find -- testing
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.for-each.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var forEach = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach !== forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var $map = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-iteration.js").map);
var arrayMethodHasSpeciesSupport = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.name.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/descriptors.js");
var FUNCTION_NAME_EXISTS = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-name.js").EXISTS);
var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js");
var defineBuiltInAccessor = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/define-built-in-accessor.js");

var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineBuiltInAccessor(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.number.constructor.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var IS_PURE = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-pure.js");
var DESCRIPTORS = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/global.js");
var path = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/path.js");
var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js");
var isForced = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-forced.js");
var hasOwn = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/has-own-property.js");
var inheritIfRequired = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/inherit-if-required.js");
var isPrototypeOf = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-is-prototype-of.js");
var isSymbol = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-symbol.js");
var toPrimitive = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-primitive.js");
var fails = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js");
var getOwnPropertyNames = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-get-own-property-names.js").f);
var getOwnPropertyDescriptor = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-get-own-property-descriptor.js").f);
var defineProperty = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-define-property.js").f);
var thisNumberValue = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/this-number-value.js");
var trim = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/string-trim.js").trim);

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var PureNumberNamespace = path[NUMBER];
var NumberPrototype = NativeNumber.prototype;
var TypeError = global.TypeError;
var stringSlice = uncurryThis(''.slice);
var charCodeAt = uncurryThis(''.charCodeAt);

// `ToNumeric` abstract operation
// https://tc39.es/ecma262/#sec-tonumeric
var toNumeric = function (value) {
  var primValue = toPrimitive(value, 'number');
  return typeof primValue == 'bigint' ? primValue : toNumber(primValue);
};

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, 'number');
  var first, third, radix, maxCode, digits, length, index, code;
  if (isSymbol(it)) throw new TypeError('Cannot convert a Symbol value to a number');
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = charCodeAt(it, 0);
    if (first === 43 || first === 45) {
      third = charCodeAt(it, 2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (charCodeAt(it, 1)) {
        // fast equal of /^0b[01]+$/i
        case 66:
        case 98:
          radix = 2;
          maxCode = 49;
          break;
        // fast equal of /^0o[0-7]+$/i
        case 79:
        case 111:
          radix = 8;
          maxCode = 55;
          break;
        default:
          return +it;
      }
      digits = stringSlice(it, 2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = charCodeAt(digits, index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

var FORCED = isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'));

var calledWithNew = function (dummy) {
  // includes check on 1..constructor(foo) case
  return isPrototypeOf(NumberPrototype, dummy) && fails(function () { thisNumberValue(dummy); });
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
var NumberWrapper = function Number(value) {
  var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
  return calledWithNew(this) ? inheritIfRequired(Object(n), this, NumberWrapper) : n;
};

NumberWrapper.prototype = NumberPrototype;
if (FORCED && !IS_PURE) NumberPrototype.constructor = NumberWrapper;

$({ global: true, constructor: true, wrap: true, forced: FORCED }, {
  Number: NumberWrapper
});

// Use `internal/copy-constructor-properties` helper in `core-js@4`
var copyConstructorProperties = function (target, source) {
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(source) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (hasOwn(source, key = keys[j]) && !hasOwn(target, key)) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

if (IS_PURE && PureNumberNamespace) copyConstructorProperties(path[NUMBER], PureNumberNamespace);
if (FORCED || IS_PURE) copyConstructorProperties(path[NUMBER], NativeNumber);


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.assign.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var assign = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-assign.js");

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-properties.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/descriptors.js");
var defineProperties = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-define-properties.js").f);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
$({ target: 'Object', stat: true, forced: Object.defineProperties !== defineProperties, sham: !DESCRIPTORS }, {
  defineProperties: defineProperties
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-property.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/descriptors.js");
var defineProperty = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-define-property.js").f);

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
// eslint-disable-next-line es/no-object-defineproperty -- safe
$({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty, sham: !DESCRIPTORS }, {
  defineProperty: defineProperty
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptor.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var fails = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js");
var toIndexedObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-indexed-object.js");
var nativeGetOwnPropertyDescriptor = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-get-own-property-descriptor.js").f);
var DESCRIPTORS = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/descriptors.js");

var FORCED = !DESCRIPTORS || fails(function () { nativeGetOwnPropertyDescriptor(1); });

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptors.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/descriptors.js");
var ownKeys = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/own-keys.js");
var toIndexedObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-indexed-object.js");
var getOwnPropertyDescriptorModule = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-get-own-property-descriptor.js");
var createProperty = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/create-property.js");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var toObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-object.js");
var nativeKeys = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-keys.js");
var fails = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.replace.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var apply = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-apply.js");
var call = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var fails = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js");
var anObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/an-object.js");
var isCallable = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-callable.js");
var isNullOrUndefined = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-null-or-undefined.js");
var toIntegerOrInfinity = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-integer-or-infinity.js");
var toLength = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/advance-string-index.js");
var getMethod = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/get-method.js");
var getSubstitution = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/get-substitution.js");
var regExpExec = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/regexp-exec-abstract.js");
var wellKnownSymbol = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/well-known-symbol.js");

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      var fullUnicode;
      if (global) {
        fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }

      var results = [];
      var result;
      while (true) {
        result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        var replacement;
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          replacement = toString(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }

      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/dom-iterables.js");
var DOMTokenListPrototype = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/dom-token-list-prototype.js");
var forEach = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/create-non-enumerable-property.js");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+interface@6.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/interface/src/style.scss":
/***/ (() => {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../node_modules/.pnpm/pascal-case@3.1.2/node_modules/pascal-case/dist.es2015/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fL: () => (/* binding */ pascalCase),
/* harmony export */   l3: () => (/* binding */ pascalCaseTransform)
/* harmony export */ });
/* unused harmony export pascalCaseTransformMerge */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/tslib@2.6.3/node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var no_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/no-case@3.0.4/node_modules/no-case/dist.es2015/index.js");


function pascalCaseTransform(input, index) {
    var firstChar = input.charAt(0);
    var lowerChars = input.substr(1).toLowerCase();
    if (index > 0 && firstChar >= "0" && firstChar <= "9") {
        return "_" + firstChar + lowerChars;
    }
    return "" + firstChar.toUpperCase() + lowerChars;
}
function pascalCaseTransformMerge(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}
function pascalCase(input, options) {
    if (options === void 0) { options = {}; }
    return (0,no_case__WEBPACK_IMPORTED_MODULE_0__/* .noCase */ .W)(input, (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .Cl)({ delimiter: "", transform: pascalCaseTransform }, options));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/remove-accents@0.5.0/node_modules/remove-accents/index.js":
/***/ ((module) => {

var characterMap = {
	"À": "A",
	"Á": "A",
	"Â": "A",
	"Ã": "A",
	"Ä": "A",
	"Å": "A",
	"Ấ": "A",
	"Ắ": "A",
	"Ẳ": "A",
	"Ẵ": "A",
	"Ặ": "A",
	"Æ": "AE",
	"Ầ": "A",
	"Ằ": "A",
	"Ȃ": "A",
	"Ả": "A",
	"Ạ": "A",
	"Ẩ": "A",
	"Ẫ": "A",
	"Ậ": "A",
	"Ç": "C",
	"Ḉ": "C",
	"È": "E",
	"É": "E",
	"Ê": "E",
	"Ë": "E",
	"Ế": "E",
	"Ḗ": "E",
	"Ề": "E",
	"Ḕ": "E",
	"Ḝ": "E",
	"Ȇ": "E",
	"Ẻ": "E",
	"Ẽ": "E",
	"Ẹ": "E",
	"Ể": "E",
	"Ễ": "E",
	"Ệ": "E",
	"Ì": "I",
	"Í": "I",
	"Î": "I",
	"Ï": "I",
	"Ḯ": "I",
	"Ȋ": "I",
	"Ỉ": "I",
	"Ị": "I",
	"Ð": "D",
	"Ñ": "N",
	"Ò": "O",
	"Ó": "O",
	"Ô": "O",
	"Õ": "O",
	"Ö": "O",
	"Ø": "O",
	"Ố": "O",
	"Ṍ": "O",
	"Ṓ": "O",
	"Ȏ": "O",
	"Ỏ": "O",
	"Ọ": "O",
	"Ổ": "O",
	"Ỗ": "O",
	"Ộ": "O",
	"Ờ": "O",
	"Ở": "O",
	"Ỡ": "O",
	"Ớ": "O",
	"Ợ": "O",
	"Ù": "U",
	"Ú": "U",
	"Û": "U",
	"Ü": "U",
	"Ủ": "U",
	"Ụ": "U",
	"Ử": "U",
	"Ữ": "U",
	"Ự": "U",
	"Ý": "Y",
	"à": "a",
	"á": "a",
	"â": "a",
	"ã": "a",
	"ä": "a",
	"å": "a",
	"ấ": "a",
	"ắ": "a",
	"ẳ": "a",
	"ẵ": "a",
	"ặ": "a",
	"æ": "ae",
	"ầ": "a",
	"ằ": "a",
	"ȃ": "a",
	"ả": "a",
	"ạ": "a",
	"ẩ": "a",
	"ẫ": "a",
	"ậ": "a",
	"ç": "c",
	"ḉ": "c",
	"è": "e",
	"é": "e",
	"ê": "e",
	"ë": "e",
	"ế": "e",
	"ḗ": "e",
	"ề": "e",
	"ḕ": "e",
	"ḝ": "e",
	"ȇ": "e",
	"ẻ": "e",
	"ẽ": "e",
	"ẹ": "e",
	"ể": "e",
	"ễ": "e",
	"ệ": "e",
	"ì": "i",
	"í": "i",
	"î": "i",
	"ï": "i",
	"ḯ": "i",
	"ȋ": "i",
	"ỉ": "i",
	"ị": "i",
	"ð": "d",
	"ñ": "n",
	"ò": "o",
	"ó": "o",
	"ô": "o",
	"õ": "o",
	"ö": "o",
	"ø": "o",
	"ố": "o",
	"ṍ": "o",
	"ṓ": "o",
	"ȏ": "o",
	"ỏ": "o",
	"ọ": "o",
	"ổ": "o",
	"ỗ": "o",
	"ộ": "o",
	"ờ": "o",
	"ở": "o",
	"ỡ": "o",
	"ớ": "o",
	"ợ": "o",
	"ù": "u",
	"ú": "u",
	"û": "u",
	"ü": "u",
	"ủ": "u",
	"ụ": "u",
	"ử": "u",
	"ữ": "u",
	"ự": "u",
	"ý": "y",
	"ÿ": "y",
	"Ā": "A",
	"ā": "a",
	"Ă": "A",
	"ă": "a",
	"Ą": "A",
	"ą": "a",
	"Ć": "C",
	"ć": "c",
	"Ĉ": "C",
	"ĉ": "c",
	"Ċ": "C",
	"ċ": "c",
	"Č": "C",
	"č": "c",
	"C̆": "C",
	"c̆": "c",
	"Ď": "D",
	"ď": "d",
	"Đ": "D",
	"đ": "d",
	"Ē": "E",
	"ē": "e",
	"Ĕ": "E",
	"ĕ": "e",
	"Ė": "E",
	"ė": "e",
	"Ę": "E",
	"ę": "e",
	"Ě": "E",
	"ě": "e",
	"Ĝ": "G",
	"Ǵ": "G",
	"ĝ": "g",
	"ǵ": "g",
	"Ğ": "G",
	"ğ": "g",
	"Ġ": "G",
	"ġ": "g",
	"Ģ": "G",
	"ģ": "g",
	"Ĥ": "H",
	"ĥ": "h",
	"Ħ": "H",
	"ħ": "h",
	"Ḫ": "H",
	"ḫ": "h",
	"Ĩ": "I",
	"ĩ": "i",
	"Ī": "I",
	"ī": "i",
	"Ĭ": "I",
	"ĭ": "i",
	"Į": "I",
	"į": "i",
	"İ": "I",
	"ı": "i",
	"Ĳ": "IJ",
	"ĳ": "ij",
	"Ĵ": "J",
	"ĵ": "j",
	"Ķ": "K",
	"ķ": "k",
	"Ḱ": "K",
	"ḱ": "k",
	"K̆": "K",
	"k̆": "k",
	"Ĺ": "L",
	"ĺ": "l",
	"Ļ": "L",
	"ļ": "l",
	"Ľ": "L",
	"ľ": "l",
	"Ŀ": "L",
	"ŀ": "l",
	"Ł": "l",
	"ł": "l",
	"Ḿ": "M",
	"ḿ": "m",
	"M̆": "M",
	"m̆": "m",
	"Ń": "N",
	"ń": "n",
	"Ņ": "N",
	"ņ": "n",
	"Ň": "N",
	"ň": "n",
	"ŉ": "n",
	"N̆": "N",
	"n̆": "n",
	"Ō": "O",
	"ō": "o",
	"Ŏ": "O",
	"ŏ": "o",
	"Ő": "O",
	"ő": "o",
	"Œ": "OE",
	"œ": "oe",
	"P̆": "P",
	"p̆": "p",
	"Ŕ": "R",
	"ŕ": "r",
	"Ŗ": "R",
	"ŗ": "r",
	"Ř": "R",
	"ř": "r",
	"R̆": "R",
	"r̆": "r",
	"Ȓ": "R",
	"ȓ": "r",
	"Ś": "S",
	"ś": "s",
	"Ŝ": "S",
	"ŝ": "s",
	"Ş": "S",
	"Ș": "S",
	"ș": "s",
	"ş": "s",
	"Š": "S",
	"š": "s",
	"Ţ": "T",
	"ţ": "t",
	"ț": "t",
	"Ț": "T",
	"Ť": "T",
	"ť": "t",
	"Ŧ": "T",
	"ŧ": "t",
	"T̆": "T",
	"t̆": "t",
	"Ũ": "U",
	"ũ": "u",
	"Ū": "U",
	"ū": "u",
	"Ŭ": "U",
	"ŭ": "u",
	"Ů": "U",
	"ů": "u",
	"Ű": "U",
	"ű": "u",
	"Ų": "U",
	"ų": "u",
	"Ȗ": "U",
	"ȗ": "u",
	"V̆": "V",
	"v̆": "v",
	"Ŵ": "W",
	"ŵ": "w",
	"Ẃ": "W",
	"ẃ": "w",
	"X̆": "X",
	"x̆": "x",
	"Ŷ": "Y",
	"ŷ": "y",
	"Ÿ": "Y",
	"Y̆": "Y",
	"y̆": "y",
	"Ź": "Z",
	"ź": "z",
	"Ż": "Z",
	"ż": "z",
	"Ž": "Z",
	"ž": "z",
	"ſ": "s",
	"ƒ": "f",
	"Ơ": "O",
	"ơ": "o",
	"Ư": "U",
	"ư": "u",
	"Ǎ": "A",
	"ǎ": "a",
	"Ǐ": "I",
	"ǐ": "i",
	"Ǒ": "O",
	"ǒ": "o",
	"Ǔ": "U",
	"ǔ": "u",
	"Ǖ": "U",
	"ǖ": "u",
	"Ǘ": "U",
	"ǘ": "u",
	"Ǚ": "U",
	"ǚ": "u",
	"Ǜ": "U",
	"ǜ": "u",
	"Ứ": "U",
	"ứ": "u",
	"Ṹ": "U",
	"ṹ": "u",
	"Ǻ": "A",
	"ǻ": "a",
	"Ǽ": "AE",
	"ǽ": "ae",
	"Ǿ": "O",
	"ǿ": "o",
	"Þ": "TH",
	"þ": "th",
	"Ṕ": "P",
	"ṕ": "p",
	"Ṥ": "S",
	"ṥ": "s",
	"X́": "X",
	"x́": "x",
	"Ѓ": "Г",
	"ѓ": "г",
	"Ќ": "К",
	"ќ": "к",
	"A̋": "A",
	"a̋": "a",
	"E̋": "E",
	"e̋": "e",
	"I̋": "I",
	"i̋": "i",
	"Ǹ": "N",
	"ǹ": "n",
	"Ồ": "O",
	"ồ": "o",
	"Ṑ": "O",
	"ṑ": "o",
	"Ừ": "U",
	"ừ": "u",
	"Ẁ": "W",
	"ẁ": "w",
	"Ỳ": "Y",
	"ỳ": "y",
	"Ȁ": "A",
	"ȁ": "a",
	"Ȅ": "E",
	"ȅ": "e",
	"Ȉ": "I",
	"ȉ": "i",
	"Ȍ": "O",
	"ȍ": "o",
	"Ȑ": "R",
	"ȑ": "r",
	"Ȕ": "U",
	"ȕ": "u",
	"B̌": "B",
	"b̌": "b",
	"Č̣": "C",
	"č̣": "c",
	"Ê̌": "E",
	"ê̌": "e",
	"F̌": "F",
	"f̌": "f",
	"Ǧ": "G",
	"ǧ": "g",
	"Ȟ": "H",
	"ȟ": "h",
	"J̌": "J",
	"ǰ": "j",
	"Ǩ": "K",
	"ǩ": "k",
	"M̌": "M",
	"m̌": "m",
	"P̌": "P",
	"p̌": "p",
	"Q̌": "Q",
	"q̌": "q",
	"Ř̩": "R",
	"ř̩": "r",
	"Ṧ": "S",
	"ṧ": "s",
	"V̌": "V",
	"v̌": "v",
	"W̌": "W",
	"w̌": "w",
	"X̌": "X",
	"x̌": "x",
	"Y̌": "Y",
	"y̌": "y",
	"A̧": "A",
	"a̧": "a",
	"B̧": "B",
	"b̧": "b",
	"Ḑ": "D",
	"ḑ": "d",
	"Ȩ": "E",
	"ȩ": "e",
	"Ɛ̧": "E",
	"ɛ̧": "e",
	"Ḩ": "H",
	"ḩ": "h",
	"I̧": "I",
	"i̧": "i",
	"Ɨ̧": "I",
	"ɨ̧": "i",
	"M̧": "M",
	"m̧": "m",
	"O̧": "O",
	"o̧": "o",
	"Q̧": "Q",
	"q̧": "q",
	"U̧": "U",
	"u̧": "u",
	"X̧": "X",
	"x̧": "x",
	"Z̧": "Z",
	"z̧": "z",
	"й":"и",
	"Й":"И",
	"ё":"е",
	"Ё":"Е",
};

var chars = Object.keys(characterMap).join('|');
var allAccents = new RegExp(chars, 'g');
var firstAccent = new RegExp(chars, '');

function matcher(match) {
	return characterMap[match];
}

var removeAccents = function(string) {
	return string.replace(allAccents, matcher);
};

var hasAccents = function(string) {
	return !!string.match(firstAccent);
};

module.exports = removeAccents;
module.exports.has = hasAccents;
module.exports.remove = removeAccents;


/***/ })

}]);