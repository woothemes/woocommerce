"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[3101],{

/***/ "../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ "../../node_modules/.pnpm/@wordpress+blob@4.0.1/node_modules/@wordpress/blob/build-module/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H8: () => (/* binding */ isBlobURL),
/* harmony export */   bW: () => (/* binding */ createBlobURL),
/* harmony export */   hK: () => (/* binding */ revokeBlobURL)
/* harmony export */ });
/* unused harmony exports getBlobByURL, getBlobTypeByURL, downloadBlob */
/**
 * @type {Record<string, File|undefined>}
 */
const cache = {};

/**
 * Create a blob URL from a file.
 *
 * @param {File} file The file to create a blob URL for.
 *
 * @return {string} The blob URL.
 */
function createBlobURL(file) {
  const url = window.URL.createObjectURL(file);
  cache[url] = file;
  return url;
}

/**
 * Retrieve a file based on a blob URL. The file must have been created by
 * `createBlobURL` and not removed by `revokeBlobURL`, otherwise it will return
 * `undefined`.
 *
 * @param {string} url The blob URL.
 *
 * @return {File|undefined} The file for the blob URL.
 */
function getBlobByURL(url) {
  return cache[url];
}

/**
 * Retrieve a blob type based on URL. The file must have been created by
 * `createBlobURL` and not removed by `revokeBlobURL`, otherwise it will return
 * `undefined`.
 *
 * @param {string} url The blob URL.
 *
 * @return {string|undefined} The blob type.
 */
function getBlobTypeByURL(url) {
  return getBlobByURL(url)?.type.split('/')[0]; // 0: media type , 1: file extension eg ( type: 'image/jpeg' ).
}

/**
 * Remove the resource and file cache from memory.
 *
 * @param {string} url The blob URL.
 */
function revokeBlobURL(url) {
  if (cache[url]) {
    window.URL.revokeObjectURL(url);
  }
  delete cache[url];
}

/**
 * Check whether a url is a blob url.
 *
 * @param {string|undefined} url The URL.
 *
 * @return {boolean} Is the url a blob url?
 */
function isBlobURL(url) {
  if (!url || !url.indexOf) {
    return false;
  }
  return url.indexOf('blob:') === 0;
}

/**
 * Downloads a file, e.g., a text or readable stream, in the browser.
 * Appropriate for downloading smaller file sizes, e.g., < 5 MB.
 *
 * Example usage:
 *
 * ```js
 * 	const fileContent = JSON.stringify(
 * 		{
 * 			"title": "My Post",
 * 		},
 * 		null,
 * 		2
 * 	);
 * 	const filename = 'file.json';
 *
 * 	downloadBlob( filename, fileContent, 'application/json' );
 * ```
 *
 * @param {string}   filename    File name.
 * @param {BlobPart} content     File content (BufferSource | Blob | string).
 * @param {string}   contentType (Optional) File mime type. Default is `''`.
 */
function downloadBlob(filename, content, contentType = '') {
  if (!filename || !content) {
    return;
  }
  const file = new window.Blob([content], {
    type: contentType
  });
  const url = window.URL.createObjectURL(file);
  const anchorElement = document.createElement('a');
  anchorElement.href = url;
  anchorElement.download = filename;
  anchorElement.style.display = 'none';
  document.body.appendChild(anchorElement);
  anchorElement.click();
  document.body.removeChild(anchorElement);
  window.URL.revokeObjectURL(url);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/drop-zone/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export DropZoneComponent */
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/upload.js");
/* harmony import */ var _wordpress_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+dom@4.0.1/node_modules/@wordpress/dom/build-module/data-transfer.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-reduced-motion/index.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-drop-zone/index.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



const backdrop = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.2,
      delay: 0,
      delayChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      delayChildren: 0
    }
  }
};
const foreground = {
  hidden: {
    opacity: 0,
    scale: 0.9
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.1
    }
  },
  exit: {
    opacity: 0,
    scale: 0.9
  }
};
function DropIndicator({
  label
}) {
  const disableMotion = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();
  const children = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_animation__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .P.div, {
    variants: backdrop,
    initial: disableMotion ? 'show' : 'hidden',
    animate: "show",
    exit: disableMotion ? 'show' : 'exit',
    className: "components-drop-zone__content"
    // Without this, when this div is shown,
    // Safari calls a onDropZoneLeave causing a loop because of this bug
    // https://bugs.webkit.org/show_bug.cgi?id=66547
    ,
    style: {
      pointerEvents: 'none'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_animation__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .P.div, {
      variants: foreground,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,
        className: "components-drop-zone__content-icon"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "components-drop-zone__content-text",
        children: label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Drop files to upload')
      })]
    })
  });
  if (disableMotion) {
    return children;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_animation__WEBPACK_IMPORTED_MODULE_6__/* .AnimatePresence */ .N, {
    children: children
  });
}

/**
 * `DropZone` is a component creating a drop zone area taking the full size of its parent element. It supports dropping files, HTML content or any other HTML drop event.
 *
 * ```jsx
 * import { DropZone } from '@wordpress/components';
 * import { useState } from '@wordpress/element';
 *
 * const MyDropZone = () => {
 *   const [ hasDropped, setHasDropped ] = useState( false );
 *
 *   return (
 *     <div>
 *       { hasDropped ? 'Dropped!' : 'Drop something here' }
 *       <DropZone
 *         onFilesDrop={ () => setHasDropped( true ) }
 *         onHTMLDrop={ () => setHasDropped( true ) }
 *         onDrop={ () => setHasDropped( true ) }
 *       />
 *     </div>
 *   );
 * }
 * ```
 */
function DropZoneComponent({
  className,
  label,
  onFilesDrop,
  onHTMLDrop,
  onDrop,
  ...restProps
}) {
  const [isDraggingOverDocument, setIsDraggingOverDocument] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useState)();
  const [isDraggingOverElement, setIsDraggingOverElement] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useState)();
  const [type, setType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useState)();
  const ref = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)({
    onDrop(event) {
      const files = event.dataTransfer ? (0,_wordpress_dom__WEBPACK_IMPORTED_MODULE_9__/* .getFilesFromDataTransfer */ .$)(event.dataTransfer) : [];
      const html = event.dataTransfer?.getData('text/html');

      /**
       * From Windows Chrome 96, the `event.dataTransfer` returns both file object and HTML.
       * The order of the checks is important to recognise the HTML drop.
       */
      if (html && onHTMLDrop) {
        onHTMLDrop(html);
      } else if (files.length && onFilesDrop) {
        onFilesDrop(files);
      } else if (onDrop) {
        onDrop(event);
      }
    },
    onDragStart(event) {
      setIsDraggingOverDocument(true);
      let _type = 'default';

      /**
       * From Windows Chrome 96, the `event.dataTransfer` returns both file object and HTML.
       * The order of the checks is important to recognise the HTML drop.
       */
      if (event.dataTransfer?.types.includes('text/html')) {
        _type = 'html';
      } else if (
      // Check for the types because sometimes the files themselves
      // are only available on drop.
      event.dataTransfer?.types.includes('Files') || (event.dataTransfer ? (0,_wordpress_dom__WEBPACK_IMPORTED_MODULE_9__/* .getFilesFromDataTransfer */ .$)(event.dataTransfer) : []).length > 0) {
        _type = 'file';
      }
      setType(_type);
    },
    onDragEnd() {
      setIsDraggingOverDocument(false);
      setType(undefined);
    },
    onDragEnter() {
      setIsDraggingOverElement(true);
    },
    onDragLeave() {
      setIsDraggingOverElement(false);
    }
  });
  const classes = (0,clsx__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)('components-drop-zone', className, {
    'is-active': (isDraggingOverDocument || isDraggingOverElement) && (type === 'file' && onFilesDrop || type === 'html' && onHTMLDrop || type === 'default' && onDrop),
    'is-dragging-over-document': isDraggingOverDocument,
    'is-dragging-over-element': isDraggingOverElement,
    [`is-dragging-${type}`]: !!type
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ...restProps,
    ref: ref,
    className: classes,
    children: isDraggingOverElement && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DropIndicator, {
      label: label
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropZoneComponent);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/form-file-upload/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export FormFileUpload */
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



/**
 * FormFileUpload is a component that allows users to select files from their local device.
 *
 * ```jsx
 * import { FormFileUpload } from '@wordpress/components';
 *
 * const MyFormFileUpload = () => (
 *   <FormFileUpload
 *     accept="image/*"
 *     onChange={ ( event ) => console.log( event.currentTarget.files ) }
 *   >
 *     Upload
 *   </FormFileUpload>
 * );
 * ```
 */
function FormFileUpload({
  accept,
  children,
  multiple = false,
  onChange,
  onClick,
  render,
  ...props
}) {
  const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const openFileDialog = () => {
    ref.current?.click();
  };
  const ui = render ? render({
    openFileDialog
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, {
    onClick: openFileDialog,
    ...props,
    children: children
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "components-form-file-upload",
    children: [ui, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
      type: "file",
      ref: ref,
      multiple: multiple,
      style: {
        display: 'none'
      },
      accept: accept,
      onChange: onChange,
      onClick: onClick,
      "data-testid": "form-file-upload-input"
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormFileUpload);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/modal/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ modal)
});

// UNUSED EXPORTS: Modal

// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js
var react_dom = __webpack_require__("../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js
var use_instance_id = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-on-mount/index.js
var use_focus_on_mount = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-on-mount/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-constrained-tabbing/index.js
var use_constrained_tabbing = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-constrained-tabbing/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-return/index.js
var use_focus_return = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-return/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js
var use_merge_refs = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/close.js
var library_close = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/close.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+dom@4.0.1/node_modules/@wordpress/dom/build-module/dom/get-scroll-container.js
var get_scroll_container = __webpack_require__("../../node_modules/.pnpm/@wordpress+dom@4.0.1/node_modules/@wordpress/dom/build-module/dom/get-scroll-container.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/modal/aria-helper.js
const LIVE_REGION_ARIA_ROLES = new Set(['alert', 'status', 'log', 'marquee', 'timer']);
const hiddenElementsByDepth = [];

/**
 * Hides all elements in the body element from screen-readers except
 * the provided element and elements that should not be hidden from
 * screen-readers.
 *
 * The reason we do this is because `aria-modal="true"` currently is bugged
 * in Safari, and support is spotty in other browsers overall. In the future
 * we should consider removing these helper functions in favor of
 * `aria-modal="true"`.
 *
 * @param modalElement The element that should not be hidden.
 */
function modalize(modalElement) {
  const elements = Array.from(document.body.children);
  const hiddenElements = [];
  hiddenElementsByDepth.push(hiddenElements);
  for (const element of elements) {
    if (element === modalElement) {
      continue;
    }
    if (elementShouldBeHidden(element)) {
      element.setAttribute('aria-hidden', 'true');
      hiddenElements.push(element);
    }
  }
}

/**
 * Determines if the passed element should not be hidden from screen readers.
 *
 * @param element The element that should be checked.
 *
 * @return Whether the element should not be hidden from screen-readers.
 */
function elementShouldBeHidden(element) {
  const role = element.getAttribute('role');
  return !(element.tagName === 'SCRIPT' || element.hasAttribute('aria-hidden') || element.hasAttribute('aria-live') || role && LIVE_REGION_ARIA_ROLES.has(role));
}

/**
 * Accessibly reveals the elements hidden by the latest modal.
 */
function unmodalize() {
  const hiddenElements = hiddenElementsByDepth.pop();
  if (!hiddenElements) {
    return;
  }
  for (const element of hiddenElements) {
    element.removeAttribute('aria-hidden');
  }
}
//# sourceMappingURL=aria-helper.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/style-provider/index.js
var style_provider = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/style-provider/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/with-ignore-ime-events.js
var with_ignore_ime_events = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/with-ignore-ime-events.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/modal/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */





// Used to track and dismiss the prior modal when another opens unless nested.


const ModalContext = (0,react.createContext)([]);

// Used to track body class names applied while modals are open.
const bodyOpenClasses = new Map();
function UnforwardedModal(props, forwardedRef) {
  const {
    bodyOpenClassName = 'modal-open',
    role = 'dialog',
    title = null,
    focusOnMount = true,
    shouldCloseOnEsc = true,
    shouldCloseOnClickOutside = true,
    isDismissible = true,
    /* Accessibility. */
    aria = {
      labelledby: undefined,
      describedby: undefined
    },
    onRequestClose,
    icon,
    closeButtonLabel,
    children,
    style,
    overlayClassName,
    className,
    contentLabel,
    onKeyDown,
    isFullScreen = false,
    size,
    headerActions = null,
    __experimentalHideHeader = false
  } = props;
  const ref = (0,react.useRef)();
  const instanceId = (0,use_instance_id/* default */.A)(Modal);
  const headingId = title ? `components-modal-header-${instanceId}` : aria.labelledby;

  // The focus hook does not support 'firstContentElement' but this is a valid
  // value for the Modal's focusOnMount prop. The following code ensures the focus
  // hook will focus the first focusable node within the element to which it is applied.
  // When `firstContentElement` is passed as the value of the focusOnMount prop,
  // the focus hook is applied to the Modal's content element.
  // Otherwise, the focus hook is applied to the Modal's ref. This ensures that the
  // focus hook will focus the first element in the Modal's **content** when
  // `firstContentElement` is passed.
  const focusOnMountRef = (0,use_focus_on_mount/* default */.A)(focusOnMount === 'firstContentElement' ? 'firstElement' : focusOnMount);
  const constrainedTabbingRef = (0,use_constrained_tabbing/* default */.A)();
  const focusReturnRef = (0,use_focus_return/* default */.A)();
  const contentRef = (0,react.useRef)(null);
  const childrenContainerRef = (0,react.useRef)(null);
  const [hasScrolledContent, setHasScrolledContent] = (0,react.useState)(false);
  const [hasScrollableContent, setHasScrollableContent] = (0,react.useState)(false);
  let sizeClass;
  if (isFullScreen || size === 'fill') {
    sizeClass = 'is-full-screen';
  } else if (size) {
    sizeClass = `has-size-${size}`;
  }

  // Determines whether the Modal content is scrollable and updates the state.
  const isContentScrollable = (0,react.useCallback)(() => {
    if (!contentRef.current) {
      return;
    }
    const closestScrollContainer = (0,get_scroll_container/* default */.A)(contentRef.current);
    if (contentRef.current === closestScrollContainer) {
      setHasScrollableContent(true);
    } else {
      setHasScrollableContent(false);
    }
  }, [contentRef]);

  // Accessibly isolates/unisolates the modal.
  (0,react.useEffect)(() => {
    modalize(ref.current);
    return () => unmodalize();
  }, []);

  // Keeps a fresh ref for the subsequent effect.
  const refOnRequestClose = (0,react.useRef)();
  (0,react.useEffect)(() => {
    refOnRequestClose.current = onRequestClose;
  }, [onRequestClose]);

  // The list of `onRequestClose` callbacks of open (non-nested) Modals. Only
  // one should remain open at a time and the list enables closing prior ones.
  const dismissers = (0,react.useContext)(ModalContext);
  // Used for the tracking and dismissing any nested modals.
  const nestedDismissers = (0,react.useRef)([]);

  // Updates the stack tracking open modals at this level and calls
  // onRequestClose for any prior and/or nested modals as applicable.
  (0,react.useEffect)(() => {
    dismissers.push(refOnRequestClose);
    const [first, second] = dismissers;
    if (second) {
      first?.current?.();
    }
    const nested = nestedDismissers.current;
    return () => {
      nested[0]?.current?.();
      dismissers.shift();
    };
  }, [dismissers]);

  // Adds/removes the value of bodyOpenClassName to body element.
  (0,react.useEffect)(() => {
    var _bodyOpenClasses$get;
    const theClass = bodyOpenClassName;
    const oneMore = 1 + ((_bodyOpenClasses$get = bodyOpenClasses.get(theClass)) !== null && _bodyOpenClasses$get !== void 0 ? _bodyOpenClasses$get : 0);
    bodyOpenClasses.set(theClass, oneMore);
    document.body.classList.add(bodyOpenClassName);
    return () => {
      const oneLess = bodyOpenClasses.get(theClass) - 1;
      if (oneLess === 0) {
        document.body.classList.remove(theClass);
        bodyOpenClasses.delete(theClass);
      } else {
        bodyOpenClasses.set(theClass, oneLess);
      }
    };
  }, [bodyOpenClassName]);

  // Calls the isContentScrollable callback when the Modal children container resizes.
  (0,react.useLayoutEffect)(() => {
    if (!window.ResizeObserver || !childrenContainerRef.current) {
      return;
    }
    const resizeObserver = new ResizeObserver(isContentScrollable);
    resizeObserver.observe(childrenContainerRef.current);
    isContentScrollable();
    return () => {
      resizeObserver.disconnect();
    };
  }, [isContentScrollable, childrenContainerRef]);
  function handleEscapeKeyDown(event) {
    if (shouldCloseOnEsc && (event.code === 'Escape' || event.key === 'Escape') && !event.defaultPrevented) {
      event.preventDefault();
      if (onRequestClose) {
        onRequestClose(event);
      }
    }
  }
  const onContentContainerScroll = (0,react.useCallback)(e => {
    var _e$currentTarget$scro;
    const scrollY = (_e$currentTarget$scro = e?.currentTarget?.scrollTop) !== null && _e$currentTarget$scro !== void 0 ? _e$currentTarget$scro : -1;
    if (!hasScrolledContent && scrollY > 0) {
      setHasScrolledContent(true);
    } else if (hasScrolledContent && scrollY <= 0) {
      setHasScrolledContent(false);
    }
  }, [hasScrolledContent]);
  let pressTarget = null;
  const overlayPressHandlers = {
    onPointerDown: event => {
      if (event.target === event.currentTarget) {
        pressTarget = event.target;
        // Avoids focus changing so that focus return works as expected.
        event.preventDefault();
      }
    },
    // Closes the modal with two exceptions. 1. Opening the context menu on
    // the overlay. 2. Pressing on the overlay then dragging the pointer
    // over the modal and releasing. Due to the modal being a child of the
    // overlay, such a gesture is a `click` on the overlay and cannot be
    // excepted by a `click` handler. Thus the tactic of handling
    // `pointerup` and comparing its target to that of the `pointerdown`.
    onPointerUp: ({
      target,
      button
    }) => {
      const isSameTarget = target === pressTarget;
      pressTarget = null;
      if (button === 0 && isSameTarget) {
        onRequestClose();
      }
    }
  };
  const modal =
  /*#__PURE__*/
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  (0,jsx_runtime.jsx)("div", {
    ref: (0,use_merge_refs/* default */.A)([ref, forwardedRef]),
    className: (0,clsx/* default */.A)('components-modal__screen-overlay', overlayClassName),
    onKeyDown: (0,with_ignore_ime_events/* withIgnoreIMEEvents */.n)(handleEscapeKeyDown),
    ...(shouldCloseOnClickOutside ? overlayPressHandlers : {}),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(style_provider/* default */.A, {
      document: document,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: (0,clsx/* default */.A)('components-modal__frame', sizeClass, className),
        style: style,
        ref: (0,use_merge_refs/* default */.A)([constrainedTabbingRef, focusReturnRef, focusOnMount !== 'firstContentElement' ? focusOnMountRef : null]),
        role: role,
        "aria-label": contentLabel,
        "aria-labelledby": contentLabel ? undefined : headingId,
        "aria-describedby": aria.describedby,
        tabIndex: -1,
        onKeyDown: onKeyDown,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: (0,clsx/* default */.A)('components-modal__content', {
            'hide-header': __experimentalHideHeader,
            'is-scrollable': hasScrollableContent,
            'has-scrolled-content': hasScrolledContent
          }),
          role: "document",
          onScroll: onContentContainerScroll,
          ref: contentRef,
          "aria-label": hasScrollableContent ? (0,build_module.__)('Scrollable section') : undefined,
          tabIndex: hasScrollableContent ? 0 : undefined,
          children: [!__experimentalHideHeader && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "components-modal__header",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "components-modal__header-heading-container",
              children: [icon && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: "components-modal__icon-container",
                "aria-hidden": true,
                children: icon
              }), title && /*#__PURE__*/(0,jsx_runtime.jsx)("h1", {
                id: headingId,
                className: "components-modal__header-heading",
                children: title
              })]
            }), headerActions, isDismissible && /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
              onClick: onRequestClose,
              icon: library_close/* default */.A,
              label: closeButtonLabel || (0,build_module.__)('Close')
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            ref: (0,use_merge_refs/* default */.A)([childrenContainerRef, focusOnMount === 'firstContentElement' ? focusOnMountRef : null]),
            children: children
          })]
        })
      })
    })
  });
  return (0,react_dom.createPortal)( /*#__PURE__*/(0,jsx_runtime.jsx)(ModalContext.Provider, {
    value: nestedDismissers.current,
    children: modal
  }), document.body);
}

/**
 * Modals give users information and choices related to a task they’re trying to
 * accomplish. They can contain critical information, require decisions, or
 * involve multiple tasks.
 *
 * ```jsx
 * import { Button, Modal } from '@wordpress/components';
 * import { useState } from '@wordpress/element';
 *
 * const MyModal = () => {
 *   const [ isOpen, setOpen ] = useState( false );
 *   const openModal = () => setOpen( true );
 *   const closeModal = () => setOpen( false );
 *
 *   return (
 *     <>
 *       <Button variant="secondary" onClick={ openModal }>
 *         Open Modal
 *       </Button>
 *       { isOpen && (
 *         <Modal title="This is my modal" onRequestClose={ closeModal }>
 *           <Button variant="secondary" onClick={ closeModal }>
 *             My custom close button
 *           </Button>
 *         </Modal>
 *       ) }
 *     </>
 *   );
 * };
 * ```
 */
const Modal = (0,react.forwardRef)(UnforwardedModal);
/* harmony default export */ const modal = (Modal);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/style-provider/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   N: () => (/* binding */ StyleProvider)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js");
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */

const uuidCache = new Set();
// Use a weak map so that when the container is detached it's automatically
// dereferenced to avoid memory leak.
const containerCacheMap = new WeakMap();
const memoizedCreateCacheWithContainer = container => {
  if (containerCacheMap.has(container)) {
    return containerCacheMap.get(container);
  }

  // Emotion only accepts alphabetical and hyphenated keys so we just
  // strip the numbers from the UUID. It _should_ be fine.
  let key = uuid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A().replace(/[0-9]/g, '');
  while (uuidCache.has(key)) {
    key = uuid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A().replace(/[0-9]/g, '');
  }
  uuidCache.add(key);
  const cache = (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    container,
    key
  });
  containerCacheMap.set(container, cache);
  return cache;
};
function StyleProvider(props) {
  const {
    children,
    document
  } = props;
  if (!document) {
    return null;
  }
  const cache = memoizedCreateCacheWithContainer(document.head);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.C, {
    value: cache,
    children: children
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyleProvider);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/with-ignore-ime-events.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-drop-zone/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useDropZone)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _use_ref_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-ref-effect/index.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/* eslint-disable jsdoc/valid-types */
/**
 * @template T
 * @param {T} value
 * @return {import('react').MutableRefObject<T|null>} A ref with the value.
 */
function useFreshRef(value) {
  /* eslint-enable jsdoc/valid-types */
  /* eslint-disable jsdoc/no-undefined-types */
  /** @type {import('react').MutableRefObject<T>} */
  /* eslint-enable jsdoc/no-undefined-types */
  // Disable reason: We're doing something pretty JavaScript-y here where the
  // ref will always have a current value that is not null or undefined but it
  // needs to start as undefined. We don't want to change the return type so
  // it's easier to just ts-ignore this specific line that's complaining about
  // undefined not being part of T.
  // @ts-ignore
  const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  ref.current = value;
  return ref;
}

/**
 * A hook to facilitate drag and drop handling.
 *
 * @param {Object}                  props                   Named parameters.
 * @param {?HTMLElement}            [props.dropZoneElement] Optional element to be used as the drop zone.
 * @param {boolean}                 [props.isDisabled]      Whether or not to disable the drop zone.
 * @param {(e: DragEvent) => void}  [props.onDragStart]     Called when dragging has started.
 * @param {(e: DragEvent) => void}  [props.onDragEnter]     Called when the zone is entered.
 * @param {(e: DragEvent) => void}  [props.onDragOver]      Called when the zone is moved within.
 * @param {(e: DragEvent) => void}  [props.onDragLeave]     Called when the zone is left.
 * @param {(e: MouseEvent) => void} [props.onDragEnd]       Called when dragging has ended.
 * @param {(e: DragEvent) => void}  [props.onDrop]          Called when dropping in the zone.
 *
 * @return {import('react').RefCallback<HTMLElement>} Ref callback to be passed to the drop zone element.
 */
function useDropZone({
  dropZoneElement,
  isDisabled,
  onDrop: _onDrop,
  onDragStart: _onDragStart,
  onDragEnter: _onDragEnter,
  onDragLeave: _onDragLeave,
  onDragEnd: _onDragEnd,
  onDragOver: _onDragOver
}) {
  const onDropRef = useFreshRef(_onDrop);
  const onDragStartRef = useFreshRef(_onDragStart);
  const onDragEnterRef = useFreshRef(_onDragEnter);
  const onDragLeaveRef = useFreshRef(_onDragLeave);
  const onDragEndRef = useFreshRef(_onDragEnd);
  const onDragOverRef = useFreshRef(_onDragOver);
  return (0,_use_ref_effect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(elem => {
    if (isDisabled) {
      return;
    }

    // If a custom dropZoneRef is passed, use that instead of the element.
    // This allows the dropzone to cover an expanded area, rather than
    // be restricted to the area of the ref returned by this hook.
    const element = dropZoneElement !== null && dropZoneElement !== void 0 ? dropZoneElement : elem;
    let isDragging = false;
    const {
      ownerDocument
    } = element;

    /**
     * Checks if an element is in the drop zone.
     *
     * @param {EventTarget|null} targetToCheck
     *
     * @return {boolean} True if in drop zone, false if not.
     */
    function isElementInZone(targetToCheck) {
      const {
        defaultView
      } = ownerDocument;
      if (!targetToCheck || !defaultView || !(targetToCheck instanceof defaultView.HTMLElement) || !element.contains(targetToCheck)) {
        return false;
      }

      /** @type {HTMLElement|null} */
      let elementToCheck = targetToCheck;
      do {
        if (elementToCheck.dataset.isDropZone) {
          return elementToCheck === element;
        }
      } while (elementToCheck = elementToCheck.parentElement);
      return false;
    }
    function maybeDragStart( /** @type {DragEvent} */event) {
      if (isDragging) {
        return;
      }
      isDragging = true;

      // Note that `dragend` doesn't fire consistently for file and
      // HTML drag events where the drag origin is outside the browser
      // window. In Firefox it may also not fire if the originating
      // node is removed.
      ownerDocument.addEventListener('dragend', maybeDragEnd);
      ownerDocument.addEventListener('mousemove', maybeDragEnd);
      if (onDragStartRef.current) {
        onDragStartRef.current(event);
      }
    }
    function onDragEnter( /** @type {DragEvent} */event) {
      event.preventDefault();

      // The `dragenter` event will also fire when entering child
      // elements, but we only want to call `onDragEnter` when
      // entering the drop zone, which means the `relatedTarget`
      // (element that has been left) should be outside the drop zone.
      if (element.contains( /** @type {Node} */event.relatedTarget)) {
        return;
      }
      if (onDragEnterRef.current) {
        onDragEnterRef.current(event);
      }
    }
    function onDragOver( /** @type {DragEvent} */event) {
      // Only call onDragOver for the innermost hovered drop zones.
      if (!event.defaultPrevented && onDragOverRef.current) {
        onDragOverRef.current(event);
      }

      // Prevent the browser default while also signalling to parent
      // drop zones that `onDragOver` is already handled.
      event.preventDefault();
    }
    function onDragLeave( /** @type {DragEvent} */event) {
      // The `dragleave` event will also fire when leaving child
      // elements, but we only want to call `onDragLeave` when
      // leaving the drop zone, which means the `relatedTarget`
      // (element that has been entered) should be outside the drop
      // zone.
      // Note: This is not entirely reliable in Safari due to this bug
      // https://bugs.webkit.org/show_bug.cgi?id=66547
      if (isElementInZone(event.relatedTarget)) {
        return;
      }
      if (onDragLeaveRef.current) {
        onDragLeaveRef.current(event);
      }
    }
    function onDrop( /** @type {DragEvent} */event) {
      // Don't handle drop if an inner drop zone already handled it.
      if (event.defaultPrevented) {
        return;
      }

      // Prevent the browser default while also signalling to parent
      // drop zones that `onDrop` is already handled.
      event.preventDefault();

      // This seemingly useless line has been shown to resolve a
      // Safari issue where files dragged directly from the dock are
      // not recognized.
      // eslint-disable-next-line no-unused-expressions
      event.dataTransfer && event.dataTransfer.files.length;
      if (onDropRef.current) {
        onDropRef.current(event);
      }
      maybeDragEnd(event);
    }
    function maybeDragEnd( /** @type {MouseEvent} */event) {
      if (!isDragging) {
        return;
      }
      isDragging = false;
      ownerDocument.removeEventListener('dragend', maybeDragEnd);
      ownerDocument.removeEventListener('mousemove', maybeDragEnd);
      if (onDragEndRef.current) {
        onDragEndRef.current(event);
      }
    }
    element.dataset.isDropZone = 'true';
    element.addEventListener('drop', onDrop);
    element.addEventListener('dragenter', onDragEnter);
    element.addEventListener('dragover', onDragOver);
    element.addEventListener('dragleave', onDragLeave);
    // The `dragstart` event doesn't fire if the drag started outside
    // the document.
    ownerDocument.addEventListener('dragenter', maybeDragStart);
    return () => {
      delete element.dataset.isDropZone;
      element.removeEventListener('drop', onDrop);
      element.removeEventListener('dragenter', onDragEnter);
      element.removeEventListener('dragover', onDragOver);
      element.removeEventListener('dragleave', onDragLeave);
      ownerDocument.removeEventListener('dragend', maybeDragEnd);
      ownerDocument.removeEventListener('mousemove', maybeDragEnd);
      ownerDocument.removeEventListener('dragenter', maybeDragStart);
    };
  }, [isDisabled, dropZoneElement] // Refresh when the passed in dropZoneElement changes.
  );
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useMergeRefs)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * WordPress dependencies
 */


/* eslint-disable jsdoc/valid-types */
/**
 * @template T
 * @typedef {T extends import('react').Ref<infer R> ? R : never} TypeFromRef
 */
/* eslint-enable jsdoc/valid-types */

/**
 * @template T
 * @param {import('react').Ref<T>} ref
 * @param {T}                      value
 */
function assignRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref && ref.hasOwnProperty('current')) {
    /* eslint-disable jsdoc/no-undefined-types */
    /** @type {import('react').MutableRefObject<T>} */ref.current = value;
    /* eslint-enable jsdoc/no-undefined-types */
  }
}

/**
 * Merges refs into one ref callback.
 *
 * It also ensures that the merged ref callbacks are only called when they
 * change (as a result of a `useCallback` dependency update) OR when the ref
 * value changes, just as React does when passing a single ref callback to the
 * component.
 *
 * As expected, if you pass a new function on every render, the ref callback
 * will be called after every render.
 *
 * If you don't wish a ref callback to be called after every render, wrap it
 * with `useCallback( callback, dependencies )`. When a dependency changes, the
 * old ref callback will be called with `null` and the new ref callback will be
 * called with the same value.
 *
 * To make ref callbacks easier to use, you can also pass the result of
 * `useRefEffect`, which makes cleanup easier by allowing you to return a
 * cleanup function instead of handling `null`.
 *
 * It's also possible to _disable_ a ref (and its behaviour) by simply not
 * passing the ref.
 *
 * ```jsx
 * const ref = useRefEffect( ( node ) => {
 *   node.addEventListener( ... );
 *   return () => {
 *     node.removeEventListener( ... );
 *   };
 * }, [ ...dependencies ] );
 * const otherRef = useRef();
 * const mergedRefs useMergeRefs( [
 *   enabled && ref,
 *   otherRef,
 * ] );
 * return <div ref={ mergedRefs } />;
 * ```
 *
 * @template {import('react').Ref<any>} TRef
 * @param {Array<TRef>} refs The refs to be merged.
 *
 * @return {import('react').RefCallback<TypeFromRef<TRef>>} The merged ref callback.
 */
function useMergeRefs(refs) {
  const element = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const isAttached = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const didElementChange = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  /* eslint-disable jsdoc/no-undefined-types */
  /** @type {import('react').MutableRefObject<TRef[]>} */
  /* eslint-enable jsdoc/no-undefined-types */
  const previousRefs = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  const currentRefs = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(refs);

  // Update on render before the ref callback is called, so the ref callback
  // always has access to the current refs.
  currentRefs.current = refs;

  // If any of the refs change, call the previous ref with `null` and the new
  // ref with the node, except when the element changes in the same cycle, in
  // which case the ref callbacks will already have been called.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    if (didElementChange.current === false && isAttached.current === true) {
      refs.forEach((ref, index) => {
        const previousRef = previousRefs.current[index];
        if (ref !== previousRef) {
          assignRef(previousRef, null);
          assignRef(ref, element.current);
        }
      });
    }
    previousRefs.current = refs;
  }, refs);

  // No dependencies, must be reset after every render so ref callbacks are
  // correctly called after a ref change.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    didElementChange.current = false;
  });

  // There should be no dependencies so that `callback` is only called when
  // the node changes.
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(value => {
    // Update the element so it can be used when calling ref callbacks on a
    // dependency change.
    assignRef(element, value);
    didElementChange.current = true;
    isAttached.current = value !== null;

    // When an element changes, the current ref callback should be called
    // with the new element and the previous one with `null`.
    const refsToAssign = value ? currentRefs.current : previousRefs.current;

    // Update the latest refs.
    for (const ref of refsToAssign) {
      assignRef(ref, value);
    }
  }, []);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+dom@4.0.1/node_modules/@wordpress/dom/build-module/data-transfer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ getFilesFromDataTransfer)
/* harmony export */ });
/**
 * Gets all files from a DataTransfer object.
 *
 * @param {DataTransfer} dataTransfer DataTransfer object to inspect.
 *
 * @return {File[]} An array containing all files.
 */
function getFilesFromDataTransfer(dataTransfer) {
  const files = Array.from(dataTransfer.files);
  Array.from(dataTransfer.items).forEach(item => {
    const file = item.getAsFile();
    if (file && !files.find(({
      name,
      type,
      size
    }) => name === file.name && type === file.type && size === file.size)) {
      files.push(file);
    }
  });
  return files;
}
//# sourceMappingURL=data-transfer.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+dom@4.0.1/node_modules/@wordpress/dom/build-module/dom/get-computed-style.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ getComputedStyle)
/* harmony export */ });
/* harmony import */ var _utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+dom@4.0.1/node_modules/@wordpress/dom/build-module/utils/assert-is-defined.js");
/**
 * Internal dependencies
 */


/* eslint-disable jsdoc/valid-types */
/**
 * @param {Element} element
 * @return {ReturnType<Window['getComputedStyle']>} The computed style for the element.
 */
function getComputedStyle(element) {
  /* eslint-enable jsdoc/valid-types */
  (0,_utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__/* .assertIsDefined */ .e)(element.ownerDocument.defaultView, 'element.ownerDocument.defaultView');
  return element.ownerDocument.defaultView.getComputedStyle(element);
}
//# sourceMappingURL=get-computed-style.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+dom@4.0.1/node_modules/@wordpress/dom/build-module/dom/get-scroll-container.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ getScrollContainer)
/* harmony export */ });
/* harmony import */ var _get_computed_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+dom@4.0.1/node_modules/@wordpress/dom/build-module/dom/get-computed-style.js");
/**
 * Internal dependencies
 */


/**
 * Given a DOM node, finds the closest scrollable container node or the node
 * itself, if scrollable.
 *
 * @param {Element | null} node      Node from which to start.
 * @param {?string}        direction Direction of scrollable container to search for ('vertical', 'horizontal', 'all').
 *                                   Defaults to 'vertical'.
 * @return {Element | undefined} Scrollable container node, if found.
 */
function getScrollContainer(node, direction = 'vertical') {
  if (!node) {
    return undefined;
  }
  if (direction === 'vertical' || direction === 'all') {
    // Scrollable if scrollable height exceeds displayed...
    if (node.scrollHeight > node.clientHeight) {
      // ...except when overflow is defined to be hidden or visible
      const {
        overflowY
      } = (0,_get_computed_style__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(node);
      if (/(auto|scroll)/.test(overflowY)) {
        return node;
      }
    }
  }
  if (direction === 'horizontal' || direction === 'all') {
    // Scrollable if scrollable width exceeds displayed...
    if (node.scrollWidth > node.clientWidth) {
      // ...except when overflow is defined to be hidden or visible
      const {
        overflowX
      } = (0,_get_computed_style__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(node);
      if (/(auto|scroll)/.test(overflowX)) {
        return node;
      }
    }
  }
  if (node.ownerDocument === node.parentNode) {
    return node;
  }

  // Continue traversing.
  return getScrollContainer( /** @type {Element} */node.parentNode, direction);
}
//# sourceMappingURL=get-scroll-container.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+dom@4.0.1/node_modules/@wordpress/dom/build-module/utils/assert-is-defined.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ assertIsDefined)
/* harmony export */ });
function assertIsDefined(val, name) {
  if (false) {}
}
//# sourceMappingURL=assert-is-defined.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/cloud-upload.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * WordPress dependencies
 */


const cloudUpload = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .SVG */ .t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .Path */ .wA, {
    d: "M17.3 10.1c0-2.5-2.1-4.4-4.8-4.4-2.2 0-4.1 1.4-4.6 3.3h-.2C5.7 9 4 10.7 4 12.8c0 2.1 1.7 3.8 3.7 3.8h9c1.8 0 3.2-1.5 3.2-3.3.1-1.6-1.1-2.9-2.6-3.2zm-.5 5.1h-4v-2.4L14 14l1-1-3-3-3 3 1 1 1.2-1.2v2.4H7.7c-1.2 0-2.2-1.1-2.2-2.3s1-2.4 2.2-2.4H9l.3-1.1c.4-1.3 1.7-2.2 3.2-2.2 1.8 0 3.3 1.3 3.3 2.9v1.3l1.3.2c.8.1 1.4.9 1.4 1.8 0 1-.8 1.8-1.7 1.8z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloudUpload);
//# sourceMappingURL=cloud-upload.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/icon/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * WordPress dependencies
 */


/** @typedef {{icon: JSX.Element, size?: number} & import('@wordpress/primitives').SVGProps} IconProps */

/**
 * Return an SVG icon.
 *
 * @param {IconProps}                                 props icon is the SVG component to render
 *                                                          size is a number specifiying the icon size in pixels
 *                                                          Other props will be passed to wrapped SVG component
 * @param {import('react').ForwardedRef<HTMLElement>} ref   The forwarded ref to the SVG element.
 *
 * @return {JSX.Element}  Icon component
 */
function Icon({
  icon,
  size = 24,
  ...props
}, ref) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(icon, {
    width: size,
    height: size,
    ...props,
    ref
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Icon));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/upload.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@3.4.1/node_modules/@wordpress/primitives/build-module/svg/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * WordPress dependencies
 */


const upload = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .SVG */ .t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .Path */ .wA, {
    d: "M18.5 15v3.5H13V6.7l4.5 4.1 1-1.1-6.2-5.8-5.8 5.8 1 1.1 4-4v11.7h-6V15H4v5h16v-5z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (upload);
//# sourceMappingURL=upload.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+media-utils@5.0.1/node_modules/@wordpress/media-utils/build-module/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Q: () => (/* reexport */ media_upload),
  o: () => (/* reexport */ uploadMedia)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+media-utils@5.0.1/node_modules/@wordpress/media-utils/build-module/components/media-upload/index.js
/**
 * WordPress dependencies
 */


const DEFAULT_EMPTY_GALLERY = [];

/**
 * Prepares the Featured Image toolbars and frames.
 *
 * @return {window.wp.media.view.MediaFrame.Select} The default media workflow.
 */
const getFeaturedImageMediaFrame = () => {
  const {
    wp
  } = window;
  return wp.media.view.MediaFrame.Select.extend({
    /**
     * Enables the Set Featured Image Button.
     *
     * @param {Object} toolbar toolbar for featured image state
     * @return {void}
     */
    featuredImageToolbar(toolbar) {
      this.createSelectToolbar(toolbar, {
        text: wp.media.view.l10n.setFeaturedImage,
        state: this.options.state
      });
    },
    /**
     * Handle the edit state requirements of selected media item.
     *
     * @return {void}
     */
    editState() {
      const selection = this.state('featured-image').get('selection');
      const view = new wp.media.view.EditImage({
        model: selection.single(),
        controller: this
      }).render();

      // Set the view to the EditImage frame using the selected image.
      this.content.set(view);

      // After bringing in the frame, load the actual editor via an ajax call.
      view.loadEditor();
    },
    /**
     * Create the default states.
     *
     * @return {void}
     */
    createStates: function createStates() {
      this.on('toolbar:create:featured-image', this.featuredImageToolbar, this);
      this.on('content:render:edit-image', this.editState, this);
      this.states.add([new wp.media.controller.FeaturedImage(), new wp.media.controller.EditImage({
        model: this.options.editImage
      })]);
    }
  });
};

/**
 * Prepares the Gallery toolbars and frames.
 *
 * @return {window.wp.media.view.MediaFrame.Post} The default media workflow.
 */
const getGalleryDetailsMediaFrame = () => {
  const {
    wp
  } = window;
  /**
   * Custom gallery details frame.
   *
   * @see https://github.com/xwp/wp-core-media-widgets/blob/905edbccfc2a623b73a93dac803c5335519d7837/wp-admin/js/widgets/media-gallery-widget.js
   * @class GalleryDetailsMediaFrame
   * @class
   */
  return wp.media.view.MediaFrame.Post.extend({
    /**
     * Set up gallery toolbar.
     *
     * @return {void}
     */
    galleryToolbar() {
      const editing = this.state().get('editing');
      this.toolbar.set(new wp.media.view.Toolbar({
        controller: this,
        items: {
          insert: {
            style: 'primary',
            text: editing ? wp.media.view.l10n.updateGallery : wp.media.view.l10n.insertGallery,
            priority: 80,
            requires: {
              library: true
            },
            /**
             * @fires wp.media.controller.State#update
             */
            click() {
              const controller = this.controller,
                state = controller.state();
              controller.close();
              state.trigger('update', state.get('library'));

              // Restore and reset the default state.
              controller.setState(controller.options.state);
              controller.reset();
            }
          }
        }
      }));
    },
    /**
     * Handle the edit state requirements of selected media item.
     *
     * @return {void}
     */
    editState() {
      const selection = this.state('gallery').get('selection');
      const view = new wp.media.view.EditImage({
        model: selection.single(),
        controller: this
      }).render();

      // Set the view to the EditImage frame using the selected image.
      this.content.set(view);

      // After bringing in the frame, load the actual editor via an ajax call.
      view.loadEditor();
    },
    /**
     * Create the default states.
     *
     * @return {void}
     */
    createStates: function createStates() {
      this.on('toolbar:create:main-gallery', this.galleryToolbar, this);
      this.on('content:render:edit-image', this.editState, this);
      this.states.add([new wp.media.controller.Library({
        id: 'gallery',
        title: wp.media.view.l10n.createGalleryTitle,
        priority: 40,
        toolbar: 'main-gallery',
        filterable: 'uploaded',
        multiple: 'add',
        editable: false,
        library: wp.media.query({
          type: 'image',
          ...this.options.library
        })
      }), new wp.media.controller.EditImage({
        model: this.options.editImage
      }), new wp.media.controller.GalleryEdit({
        library: this.options.selection,
        editing: this.options.editing,
        menu: 'gallery',
        displaySettings: false,
        multiple: true
      }), new wp.media.controller.GalleryAdd()]);
    }
  });
};

// The media library image object contains numerous attributes
// we only need this set to display the image in the library.
const slimImageObject = img => {
  const attrSet = ['sizes', 'mime', 'type', 'subtype', 'id', 'url', 'alt', 'link', 'caption'];
  return attrSet.reduce((result, key) => {
    if (img?.hasOwnProperty(key)) {
      result[key] = img[key];
    }
    return result;
  }, {});
};
const getAttachmentsCollection = ids => {
  const {
    wp
  } = window;
  return wp.media.query({
    order: 'ASC',
    orderby: 'post__in',
    post__in: ids,
    posts_per_page: -1,
    query: true,
    type: 'image'
  });
};
class MediaUpload extends react.Component {
  constructor() {
    super(...arguments);
    this.openModal = this.openModal.bind(this);
    this.onOpen = this.onOpen.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onClose = this.onClose.bind(this);
  }
  initializeListeners() {
    // When an image is selected in the media frame...
    this.frame.on('select', this.onSelect);
    this.frame.on('update', this.onUpdate);
    this.frame.on('open', this.onOpen);
    this.frame.on('close', this.onClose);
  }

  /**
   * Sets the Gallery frame and initializes listeners.
   *
   * @return {void}
   */
  buildAndSetGalleryFrame() {
    const {
      addToGallery = false,
      allowedTypes,
      multiple = false,
      value = DEFAULT_EMPTY_GALLERY
    } = this.props;

    // If the value did not changed there is no need to rebuild the frame,
    // we can continue to use the existing one.
    if (value === this.lastGalleryValue) {
      return;
    }
    const {
      wp
    } = window;
    this.lastGalleryValue = value;

    // If a frame already existed remove it.
    if (this.frame) {
      this.frame.remove();
    }
    let currentState;
    if (addToGallery) {
      currentState = 'gallery-library';
    } else {
      currentState = value && value.length ? 'gallery-edit' : 'gallery';
    }
    if (!this.GalleryDetailsMediaFrame) {
      this.GalleryDetailsMediaFrame = getGalleryDetailsMediaFrame();
    }
    const attachments = getAttachmentsCollection(value);
    const selection = new wp.media.model.Selection(attachments.models, {
      props: attachments.props.toJSON(),
      multiple
    });
    this.frame = new this.GalleryDetailsMediaFrame({
      mimeType: allowedTypes,
      state: currentState,
      multiple,
      selection,
      editing: value && value.length ? true : false
    });
    wp.media.frame = this.frame;
    this.initializeListeners();
  }

  /**
   * Initializes the Media Library requirements for the featured image flow.
   *
   * @return {void}
   */
  buildAndSetFeatureImageFrame() {
    const {
      wp
    } = window;
    const {
      value: featuredImageId,
      multiple,
      allowedTypes
    } = this.props;
    const featuredImageFrame = getFeaturedImageMediaFrame();
    const attachments = getAttachmentsCollection(featuredImageId);
    const selection = new wp.media.model.Selection(attachments.models, {
      props: attachments.props.toJSON()
    });
    this.frame = new featuredImageFrame({
      mimeType: allowedTypes,
      state: 'featured-image',
      multiple,
      selection,
      editing: featuredImageId
    });
    wp.media.frame = this.frame;
    // In order to select the current featured image when opening
    // the media library we have to set the appropriate settings.
    // Currently they are set in php for the post editor, but
    // not for site editor.
    wp.media.view.settings.post = {
      ...wp.media.view.settings.post,
      featuredImageId: featuredImageId || -1
    };
  }
  componentWillUnmount() {
    this.frame?.remove();
  }
  onUpdate(selections) {
    const {
      onSelect,
      multiple = false
    } = this.props;
    const state = this.frame.state();
    const selectedImages = selections || state.get('selection');
    if (!selectedImages || !selectedImages.models.length) {
      return;
    }
    if (multiple) {
      onSelect(selectedImages.models.map(model => slimImageObject(model.toJSON())));
    } else {
      onSelect(slimImageObject(selectedImages.models[0].toJSON()));
    }
  }
  onSelect() {
    const {
      onSelect,
      multiple = false
    } = this.props;
    // Get media attachment details from the frame state.
    const attachment = this.frame.state().get('selection').toJSON();
    onSelect(multiple ? attachment : attachment[0]);
  }
  onOpen() {
    const {
      wp
    } = window;
    const {
      value
    } = this.props;
    this.updateCollection();

    //Handle active tab in media model on model open.
    if (this.props.mode) {
      this.frame.content.mode(this.props.mode);
    }

    // Handle both this.props.value being either (number[]) multiple ids
    // (for galleries) or a (number) singular id (e.g. image block).
    const hasMedia = Array.isArray(value) ? !!value?.length : !!value;
    if (!hasMedia) {
      return;
    }
    const isGallery = this.props.gallery;
    const selection = this.frame.state().get('selection');
    const valueArray = Array.isArray(value) ? value : [value];
    if (!isGallery) {
      valueArray.forEach(id => {
        selection.add(wp.media.attachment(id));
      });
    }

    // Load the images so they are available in the media modal.
    const attachments = getAttachmentsCollection(valueArray);

    // Once attachments are loaded, set the current selection.
    attachments.more().done(function () {
      if (isGallery && attachments?.models?.length) {
        selection.add(attachments.models);
      }
    });
  }
  onClose() {
    const {
      onClose
    } = this.props;
    if (onClose) {
      onClose();
    }
  }
  updateCollection() {
    const frameContent = this.frame.content.get();
    if (frameContent && frameContent.collection) {
      const collection = frameContent.collection;

      // Clean all attachments we have in memory.
      collection.toArray().forEach(model => model.trigger('destroy', model));

      // Reset has more flag, if library had small amount of items all items may have been loaded before.
      collection.mirroring._hasMore = true;

      // Request items.
      collection.more();
    }
  }
  openModal() {
    const {
      allowedTypes,
      gallery = false,
      unstableFeaturedImageFlow = false,
      modalClass,
      multiple = false,
      title = (0,build_module.__)('Select or Upload Media')
    } = this.props;
    const {
      wp
    } = window;
    if (gallery) {
      this.buildAndSetGalleryFrame();
    } else {
      const frameConfig = {
        title,
        multiple
      };
      if (!!allowedTypes) {
        frameConfig.library = {
          type: allowedTypes
        };
      }
      this.frame = wp.media(frameConfig);
    }
    if (modalClass) {
      this.frame.$el.addClass(modalClass);
    }
    if (unstableFeaturedImageFlow) {
      this.buildAndSetFeatureImageFrame();
    }
    this.initializeListeners();
    this.frame.open();
  }
  render() {
    return this.props.render({
      open: this.openModal
    });
  }
}
/* harmony default export */ const media_upload = (MediaUpload);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+media-utils@5.0.1/node_modules/@wordpress/media-utils/build-module/components/index.js

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+api-fetch@7.0.1/node_modules/@wordpress/api-fetch/build-module/index.js + 14 modules
var api_fetch_build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+api-fetch@7.0.1/node_modules/@wordpress/api-fetch/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+blob@4.0.1/node_modules/@wordpress/blob/build-module/index.js
var blob_build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+blob@4.0.1/node_modules/@wordpress/blob/build-module/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+media-utils@5.0.1/node_modules/@wordpress/media-utils/build-module/utils/upload-media.js
/**
 * WordPress dependencies
 */



const noop = () => {};

/**
 * Browsers may use unexpected mime types, and they differ from browser to browser.
 * This function computes a flexible array of mime types from the mime type structured provided by the server.
 * Converts { jpg|jpeg|jpe: "image/jpeg" } into [ "image/jpeg", "image/jpg", "image/jpeg", "image/jpe" ]
 * The computation of this array instead of directly using the object,
 * solves the problem in chrome where mp3 files have audio/mp3 as mime type instead of audio/mpeg.
 * https://bugs.chromium.org/p/chromium/issues/detail?id=227004
 *
 * @param {?Object} wpMimeTypesObject Mime type object received from the server.
 *                                    Extensions are keys separated by '|' and values are mime types associated with an extension.
 *
 * @return {?Array} An array of mime types or the parameter passed if it was "falsy".
 */
function getMimeTypesArray(wpMimeTypesObject) {
  if (!wpMimeTypesObject) {
    return wpMimeTypesObject;
  }
  return Object.entries(wpMimeTypesObject).map(([extensionsString, mime]) => {
    const [type] = mime.split('/');
    const extensions = extensionsString.split('|');
    return [mime, ...extensions.map(extension => `${type}/${extension}`)];
  }).flat();
}

/**
 *	Media Upload is used by audio, image, gallery, video, and file blocks to
 *	handle uploading a media file when a file upload button is activated.
 *
 *	TODO: future enhancement to add an upload indicator.
 *
 * @param {Object}   $0                    Parameters object passed to the function.
 * @param {?Array}   $0.allowedTypes       Array with the types of media that can be uploaded, if unset all types are allowed.
 * @param {?Object}  $0.additionalData     Additional data to include in the request.
 * @param {Array}    $0.filesList          List of files.
 * @param {?number}  $0.maxUploadFileSize  Maximum upload size in bytes allowed for the site.
 * @param {Function} $0.onError            Function called when an error happens.
 * @param {Function} $0.onFileChange       Function called each time a file or a temporary representation of the file is available.
 * @param {?Object}  $0.wpAllowedMimeTypes List of allowed mime types and file extensions.
 */
async function uploadMedia({
  allowedTypes,
  additionalData = {},
  filesList,
  maxUploadFileSize,
  onError = noop,
  onFileChange,
  wpAllowedMimeTypes = null
}) {
  // Cast filesList to array.
  const files = [...filesList];
  const filesSet = [];
  const setAndUpdateFiles = (idx, value) => {
    (0,blob_build_module/* revokeBlobURL */.hK)(filesSet[idx]?.url);
    filesSet[idx] = value;
    onFileChange(filesSet.filter(Boolean));
  };

  // Allowed type specified by consumer.
  const isAllowedType = fileType => {
    if (!allowedTypes) {
      return true;
    }
    return allowedTypes.some(allowedType => {
      // If a complete mimetype is specified verify if it matches exactly the mime type of the file.
      if (allowedType.includes('/')) {
        return allowedType === fileType;
      }
      // Otherwise a general mime type is used and we should verify if the file mimetype starts with it.
      return fileType.startsWith(`${allowedType}/`);
    });
  };

  // Allowed types for the current WP_User.
  const allowedMimeTypesForUser = getMimeTypesArray(wpAllowedMimeTypes);
  const isAllowedMimeTypeForUser = fileType => {
    return allowedMimeTypesForUser.includes(fileType);
  };
  const validFiles = [];
  for (const mediaFile of files) {
    // Verify if user is allowed to upload this mime type.
    // Defer to the server when type not detected.
    if (allowedMimeTypesForUser && mediaFile.type && !isAllowedMimeTypeForUser(mediaFile.type)) {
      onError({
        code: 'MIME_TYPE_NOT_ALLOWED_FOR_USER',
        message: (0,build_module/* sprintf */.nv)(
        // translators: %s: file name.
        (0,build_module.__)('%s: Sorry, you are not allowed to upload this file type.'), mediaFile.name),
        file: mediaFile
      });
      continue;
    }

    // Check if the block supports this mime type.
    // Defer to the server when type not detected.
    if (mediaFile.type && !isAllowedType(mediaFile.type)) {
      onError({
        code: 'MIME_TYPE_NOT_SUPPORTED',
        message: (0,build_module/* sprintf */.nv)(
        // translators: %s: file name.
        (0,build_module.__)('%s: Sorry, this file type is not supported here.'), mediaFile.name),
        file: mediaFile
      });
      continue;
    }

    // Verify if file is greater than the maximum file upload size allowed for the site.
    if (maxUploadFileSize && mediaFile.size > maxUploadFileSize) {
      onError({
        code: 'SIZE_ABOVE_LIMIT',
        message: (0,build_module/* sprintf */.nv)(
        // translators: %s: file name.
        (0,build_module.__)('%s: This file exceeds the maximum upload size for this site.'), mediaFile.name),
        file: mediaFile
      });
      continue;
    }

    // Don't allow empty files to be uploaded.
    if (mediaFile.size <= 0) {
      onError({
        code: 'EMPTY_FILE',
        message: (0,build_module/* sprintf */.nv)(
        // translators: %s: file name.
        (0,build_module.__)('%s: This file is empty.'), mediaFile.name),
        file: mediaFile
      });
      continue;
    }
    validFiles.push(mediaFile);

    // Set temporary URL to create placeholder media file, this is replaced
    // with final file from media gallery when upload is `done` below.
    filesSet.push({
      url: (0,blob_build_module/* createBlobURL */.bW)(mediaFile)
    });
    onFileChange(filesSet);
  }
  for (let idx = 0; idx < validFiles.length; ++idx) {
    const mediaFile = validFiles[idx];
    try {
      var _savedMedia$caption$r;
      const savedMedia = await createMediaFromFile(mediaFile, additionalData);
      // eslint-disable-next-line camelcase
      const {
        alt_text,
        source_url,
        ...savedMediaProps
      } = savedMedia;
      const mediaObject = {
        ...savedMediaProps,
        alt: savedMedia.alt_text,
        caption: (_savedMedia$caption$r = savedMedia.caption?.raw) !== null && _savedMedia$caption$r !== void 0 ? _savedMedia$caption$r : '',
        title: savedMedia.title.raw,
        url: savedMedia.source_url
      };
      setAndUpdateFiles(idx, mediaObject);
    } catch (error) {
      // Reset to empty on failure.
      setAndUpdateFiles(idx, null);
      let message;
      if (error.message) {
        message = error.message;
      } else {
        message = (0,build_module/* sprintf */.nv)(
        // translators: %s: file name
        (0,build_module.__)('Error while uploading file %s to the media library.'), mediaFile.name);
      }
      onError({
        code: 'GENERAL',
        message,
        file: mediaFile
      });
    }
  }
}

/**
 * @param {File}    file           Media File to Save.
 * @param {?Object} additionalData Additional data to include in the request.
 *
 * @return {Promise} Media Object Promise.
 */
function createMediaFromFile(file, additionalData) {
  // Create upload payload.
  const data = new window.FormData();
  data.append('file', file, file.name || file.type.replace('/', '.'));
  if (additionalData) {
    Object.entries(additionalData).forEach(([key, value]) => data.append(key, value));
  }
  return (0,api_fetch_build_module/* default */.A)({
    path: '/wp/v2/media',
    body: data,
    method: 'POST'
  });
}
//# sourceMappingURL=upload-media.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+media-utils@5.0.1/node_modules/@wordpress/media-utils/build-module/utils/index.js

//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+media-utils@5.0.1/node_modules/@wordpress/media-utils/build-module/index.js


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+url@4.0.1/node_modules/@wordpress/url/build-module/add-query-args.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ addQueryArgs)
/* harmony export */ });
/* harmony import */ var _get_query_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+url@4.0.1/node_modules/@wordpress/url/build-module/get-query-args.js");
/* harmony import */ var _build_query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+url@4.0.1/node_modules/@wordpress/url/build-module/build-query-string.js");
/**
 * Internal dependencies
 */



/**
 * Appends arguments as querystring to the provided URL. If the URL already
 * includes query arguments, the arguments are merged with (and take precedent
 * over) the existing set.
 *
 * @param {string} [url=''] URL to which arguments should be appended. If omitted,
 *                          only the resulting querystring is returned.
 * @param {Object} [args]   Query arguments to apply to URL.
 *
 * @example
 * ```js
 * const newURL = addQueryArgs( 'https://google.com', { q: 'test' } ); // https://google.com/?q=test
 * ```
 *
 * @return {string} URL with arguments applied.
 */
function addQueryArgs(url = '', args) {
  // If no arguments are to be appended, return original URL.
  if (!args || !Object.keys(args).length) {
    return url;
  }
  let baseUrl = url;

  // Determine whether URL already had query arguments.
  const queryStringIndex = url.indexOf('?');
  if (queryStringIndex !== -1) {
    // Merge into existing query arguments.
    args = Object.assign((0,_get_query_args__WEBPACK_IMPORTED_MODULE_0__/* .getQueryArgs */ .u)(url), args);

    // Change working base URL to omit previous query arguments.
    baseUrl = baseUrl.substr(0, queryStringIndex);
  }
  return baseUrl + '?' + (0,_build_query_string__WEBPACK_IMPORTED_MODULE_1__/* .buildQueryString */ .G)(args);
}
//# sourceMappingURL=add-query-args.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+url@4.0.1/node_modules/@wordpress/url/build-module/build-query-string.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ buildQueryString)
/* harmony export */ });
/**
 * Generates URL-encoded query string using input query data.
 *
 * It is intended to behave equivalent as PHP's `http_build_query`, configured
 * with encoding type PHP_QUERY_RFC3986 (spaces as `%20`).
 *
 * @example
 * ```js
 * const queryString = buildQueryString( {
 *    simple: 'is ok',
 *    arrays: [ 'are', 'fine', 'too' ],
 *    objects: {
 *       evenNested: {
 *          ok: 'yes',
 *       },
 *    },
 * } );
 * // "simple=is%20ok&arrays%5B0%5D=are&arrays%5B1%5D=fine&arrays%5B2%5D=too&objects%5BevenNested%5D%5Bok%5D=yes"
 * ```
 *
 * @param {Record<string,*>} data Data to encode.
 *
 * @return {string} Query string.
 */
function buildQueryString(data) {
  let string = '';
  const stack = Object.entries(data);
  let pair;
  while (pair = stack.shift()) {
    let [key, value] = pair;

    // Support building deeply nested data, from array or object values.
    const hasNestedData = Array.isArray(value) || value && value.constructor === Object;
    if (hasNestedData) {
      // Push array or object values onto the stack as composed of their
      // original key and nested index or key, retaining order by a
      // combination of Array#reverse and Array#unshift onto the stack.
      const valuePairs = Object.entries(value).reverse();
      for (const [member, memberValue] of valuePairs) {
        stack.unshift([`${key}[${member}]`, memberValue]);
      }
    } else if (value !== undefined) {
      // Null is treated as special case, equivalent to empty string.
      if (value === null) {
        value = '';
      }
      string += '&' + [key, value].map(encodeURIComponent).join('=');
    }
  }

  // Loop will concatenate with leading `&`, but it's only expected for all
  // but the first query parameter. This strips the leading `&`, while still
  // accounting for the case that the string may in-fact be empty.
  return string.substr(1);
}
//# sourceMappingURL=build-query-string.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+url@4.0.1/node_modules/@wordpress/url/build-module/get-query-args.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  u: () => (/* binding */ getQueryArgs)
});

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+url@4.0.1/node_modules/@wordpress/url/build-module/safe-decode-uri-component.js
/**
 * Safely decodes a URI component with `decodeURIComponent`. Returns the URI component unmodified if
 * `decodeURIComponent` throws an error.
 *
 * @param {string} uriComponent URI component to decode.
 *
 * @return {string} Decoded URI component if possible.
 */
function safeDecodeURIComponent(uriComponent) {
  try {
    return decodeURIComponent(uriComponent);
  } catch (uriComponentError) {
    return uriComponent;
  }
}
//# sourceMappingURL=safe-decode-uri-component.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+url@4.0.1/node_modules/@wordpress/url/build-module/get-query-string.js
/**
 * Returns the query string part of the URL.
 *
 * @param {string} url The full URL.
 *
 * @example
 * ```js
 * const queryString = getQueryString( 'http://localhost:8080/this/is/a/test?query=true#fragment' ); // 'query=true'
 * ```
 *
 * @return {string|void} The query string part of the URL.
 */
function getQueryString(url) {
  let query;
  try {
    query = new URL(url, 'http://example.com').search.substring(1);
  } catch (error) {}
  if (query) {
    return query;
  }
}
//# sourceMappingURL=get-query-string.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+url@4.0.1/node_modules/@wordpress/url/build-module/get-query-args.js
/**
 * Internal dependencies
 */



/** @typedef {import('./get-query-arg').QueryArgParsed} QueryArgParsed */

/**
 * @typedef {Record<string,QueryArgParsed>} QueryArgs
 */

/**
 * Sets a value in object deeply by a given array of path segments. Mutates the
 * object reference.
 *
 * @param {Record<string,*>} object Object in which to assign.
 * @param {string[]}         path   Path segment at which to set value.
 * @param {*}                value  Value to set.
 */
function setPath(object, path, value) {
  const length = path.length;
  const lastIndex = length - 1;
  for (let i = 0; i < length; i++) {
    let key = path[i];
    if (!key && Array.isArray(object)) {
      // If key is empty string and next value is array, derive key from
      // the current length of the array.
      key = object.length.toString();
    }
    key = ['__proto__', 'constructor', 'prototype'].includes(key) ? key.toUpperCase() : key;

    // If the next key in the path is numeric (or empty string), it will be
    // created as an array. Otherwise, it will be created as an object.
    const isNextKeyArrayIndex = !isNaN(Number(path[i + 1]));
    object[key] = i === lastIndex ?
    // If at end of path, assign the intended value.
    value :
    // Otherwise, advance to the next object in the path, creating
    // it if it does not yet exist.
    object[key] || (isNextKeyArrayIndex ? [] : {});
    if (Array.isArray(object[key]) && !isNextKeyArrayIndex) {
      // If we current key is non-numeric, but the next value is an
      // array, coerce the value to an object.
      object[key] = {
        ...object[key]
      };
    }

    // Update working reference object to the next in the path.
    object = object[key];
  }
}

/**
 * Returns an object of query arguments of the given URL. If the given URL is
 * invalid or has no querystring, an empty object is returned.
 *
 * @param {string} url URL.
 *
 * @example
 * ```js
 * const foo = getQueryArgs( 'https://wordpress.org?foo=bar&bar=baz' );
 * // { "foo": "bar", "bar": "baz" }
 * ```
 *
 * @return {QueryArgs} Query args object.
 */
function getQueryArgs(url) {
  return (getQueryString(url) || ''
  // Normalize space encoding, accounting for PHP URL encoding
  // corresponding to `application/x-www-form-urlencoded`.
  //
  // See: https://tools.ietf.org/html/rfc1866#section-8.2.1
  ).replace(/\+/g, '%20').split('&').reduce((accumulator, keyValue) => {
    const [key, value = ''] = keyValue.split('=')
    // Filtering avoids decoding as `undefined` for value, where
    // default is restored in destructuring assignment.
    .filter(Boolean).map(safeDecodeURIComponent);
    if (key) {
      const segments = key.replace(/\]/g, '').split('[');
      setPath(accumulator, segments, value);
    }
    return accumulator;
  }, Object.create(null));
}
//# sourceMappingURL=get-query-args.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-for-each.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


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


var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/regexp-get-flags.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


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

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


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

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.for-each.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


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

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.date.to-string.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


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

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-properties.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


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

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.to-string.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


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

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


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

/***/ "../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ AnimatePresence)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/context/PresenceContext.mjs
var PresenceContext = __webpack_require__("../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/context/PresenceContext.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/utils/use-constant.mjs
var use_constant = __webpack_require__("../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/utils/use-constant.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
var MotionConfigContext = __webpack_require__("../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs





/**
 * Measurement functionality has to be within a separate component
 * to leverage snapshot lifecycle.
 */
class PopChildMeasure extends react.Component {
    getSnapshotBeforeUpdate(prevProps) {
        const element = this.props.childRef.current;
        if (element && prevProps.isPresent && !this.props.isPresent) {
            const size = this.props.sizeRef.current;
            size.height = element.offsetHeight || 0;
            size.width = element.offsetWidth || 0;
            size.top = element.offsetTop;
            size.left = element.offsetLeft;
        }
        return null;
    }
    /**
     * Required with getSnapshotBeforeUpdate to stop React complaining.
     */
    componentDidUpdate() { }
    render() {
        return this.props.children;
    }
}
function PopChild({ children, isPresent }) {
    const id = (0,react.useId)();
    const ref = (0,react.useRef)(null);
    const size = (0,react.useRef)({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
    });
    const { nonce } = (0,react.useContext)(MotionConfigContext/* MotionConfigContext */.Q);
    /**
     * We create and inject a style block so we can apply this explicit
     * sizing in a non-destructive manner by just deleting the style block.
     *
     * We can't apply size via render as the measurement happens
     * in getSnapshotBeforeUpdate (post-render), likewise if we apply the
     * styles directly on the DOM node, we might be overwriting
     * styles set via the style prop.
     */
    (0,react.useInsertionEffect)(() => {
        const { width, height, top, left } = size.current;
        if (isPresent || !ref.current || !width || !height)
            return;
        ref.current.dataset.motionPopId = id;
        const style = document.createElement("style");
        if (nonce)
            style.nonce = nonce;
        document.head.appendChild(style);
        if (style.sheet) {
            style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            top: ${top}px !important;
            left: ${left}px !important;
          }
        `);
        }
        return () => {
            document.head.removeChild(style);
        };
    }, [isPresent]);
    return ((0,jsx_runtime.jsx)(PopChildMeasure, { isPresent: isPresent, childRef: ref, sizeRef: size, children: react.cloneElement(children, { ref }) }));
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs







const PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, }) => {
    const presenceChildren = (0,use_constant/* useConstant */.M)(newChildrenMap);
    const id = (0,react.useId)();
    const context = (0,react.useMemo)(() => ({
        id,
        initial,
        isPresent,
        custom,
        onExitComplete: (childId) => {
            presenceChildren.set(childId, true);
            for (const isComplete of presenceChildren.values()) {
                if (!isComplete)
                    return; // can stop searching when any is incomplete
            }
            onExitComplete && onExitComplete();
        },
        register: (childId) => {
            presenceChildren.set(childId, false);
            return () => presenceChildren.delete(childId);
        },
    }), 
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    presenceAffectsLayout ? [Math.random()] : [isPresent]);
    (0,react.useMemo)(() => {
        presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
    }, [isPresent]);
    /**
     * If there's no `motion` components to fire exit animations, we want to remove this
     * component immediately.
     */
    react.useEffect(() => {
        !isPresent &&
            !presenceChildren.size &&
            onExitComplete &&
            onExitComplete();
    }, [isPresent]);
    if (mode === "popLayout") {
        children = (0,jsx_runtime.jsx)(PopChild, { isPresent: isPresent, children: children });
    }
    return ((0,jsx_runtime.jsx)(PresenceContext/* PresenceContext */.t.Provider, { value: context, children: children }));
};
function newChildrenMap() {
    return new Map();
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
var LayoutGroupContext = __webpack_require__("../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/utils/errors.mjs
var errors = __webpack_require__("../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/utils/errors.mjs");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs


const getChildKey = (child) => child.key || "";
function onlyElements(children) {
    const filtered = [];
    // We use forEach here instead of map as map mutates the component key by preprending `.$`
    react.Children.forEach(children, (child) => {
        if ((0,react.isValidElement)(child))
            filtered.push(child);
    });
    return filtered;
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var use_isomorphic_effect = __webpack_require__("../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs









/**
 * `AnimatePresence` enables the animation of components that have been removed from the tree.
 *
 * When adding/removing more than a single child, every child **must** be given a unique `key` prop.
 *
 * Any `motion` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { motion, AnimatePresence } from 'framer-motion'
 *
 * export const Items = ({ items }) => (
 *   <AnimatePresence>
 *     {items.map(item => (
 *       <motion.div
 *         key={item.id}
 *         initial={{ opacity: 0 }}
 *         animate={{ opacity: 1 }}
 *         exit={{ opacity: 0 }}
 *       />
 *     ))}
 *   </AnimatePresence>
 * )
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * If a child contains multiple `motion` components with `exit` props, it will only unmount the child
 * once all `motion` components have finished animating out. Likewise, any components using
 * `usePresence` all need to call `safeToRemove`.
 *
 * @public
 */
const AnimatePresence = ({ children, exitBeforeEnter, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", }) => {
    (0,errors/* invariant */.V)(!exitBeforeEnter, "Replace exitBeforeEnter with mode='wait'");
    /**
     * Filter any children that aren't ReactElements. We can only track components
     * between renders with a props.key.
     */
    const presentChildren = (0,react.useMemo)(() => onlyElements(children), [children]);
    /**
     * Track the keys of the currently rendered children. This is used to
     * determine which children are exiting.
     */
    const presentKeys = presentChildren.map(getChildKey);
    /**
     * If `initial={false}` we only want to pass this to components in the first render.
     */
    const isInitialRender = (0,react.useRef)(true);
    /**
     * A ref containing the currently present children. When all exit animations
     * are complete, we use this to re-render the component with the latest children
     * *committed* rather than the latest children *rendered*.
     */
    const pendingPresentChildren = (0,react.useRef)(presentChildren);
    /**
     * Track which exiting children have finished animating out.
     */
    const exitComplete = (0,use_constant/* useConstant */.M)(() => new Map());
    /**
     * Save children to render as React state. To ensure this component is concurrent-safe,
     * we check for exiting children via an effect.
     */
    const [diffedChildren, setDiffedChildren] = (0,react.useState)(presentChildren);
    const [renderedChildren, setRenderedChildren] = (0,react.useState)(presentChildren);
    (0,use_isomorphic_effect/* useIsomorphicLayoutEffect */.E)(() => {
        isInitialRender.current = false;
        pendingPresentChildren.current = presentChildren;
        /**
         * Update complete status of exiting children.
         */
        for (let i = 0; i < renderedChildren.length; i++) {
            const key = getChildKey(renderedChildren[i]);
            if (!presentKeys.includes(key)) {
                if (exitComplete.get(key) !== true) {
                    exitComplete.set(key, false);
                }
            }
            else {
                exitComplete.delete(key);
            }
        }
    }, [renderedChildren, presentKeys.length, presentKeys.join("-")]);
    const exitingChildren = [];
    if (presentChildren !== diffedChildren) {
        let nextChildren = [...presentChildren];
        /**
         * Loop through all the currently rendered components and decide which
         * are exiting.
         */
        for (let i = 0; i < renderedChildren.length; i++) {
            const child = renderedChildren[i];
            const key = getChildKey(child);
            if (!presentKeys.includes(key)) {
                nextChildren.splice(i, 0, child);
                exitingChildren.push(child);
            }
        }
        /**
         * If we're in "wait" mode, and we have exiting children, we want to
         * only render these until they've all exited.
         */
        if (mode === "wait" && exitingChildren.length) {
            nextChildren = exitingChildren;
        }
        setRenderedChildren(onlyElements(nextChildren));
        setDiffedChildren(presentChildren);
        /**
         * Early return to ensure once we've set state with the latest diffed
         * children, we can immediately re-render.
         */
        return;
    }
    if (false) {}
    /**
     * If we've been provided a forceRender function by the LayoutGroupContext,
     * we can use it to force a re-render amongst all surrounding components once
     * all components have finished animating out.
     */
    const { forceRender } = (0,react.useContext)(LayoutGroupContext/* LayoutGroupContext */.L);
    return ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: renderedChildren.map((child) => {
            const key = getChildKey(child);
            const isPresent = presentChildren === renderedChildren ||
                presentKeys.includes(key);
            const onExit = () => {
                if (exitComplete.has(key)) {
                    exitComplete.set(key, true);
                }
                else {
                    return;
                }
                let isEveryExitComplete = true;
                exitComplete.forEach((isExitComplete) => {
                    if (!isExitComplete)
                        isEveryExitComplete = false;
                });
                if (isEveryExitComplete) {
                    forceRender === null || forceRender === void 0 ? void 0 : forceRender();
                    setRenderedChildren(pendingPresentChildren.current);
                    onExitComplete && onExitComplete();
                }
            };
            return ((0,jsx_runtime.jsx)(PresenceChild, { isPresent: isPresent, initial: !isInitialRender.current || initial
                    ? undefined
                    : false, custom: isPresent ? undefined : custom, presenceAffectsLayout: presenceAffectsLayout, mode: mode, onExitComplete: isPresent ? undefined : onExit, children: child }, key));
        }) }));
};




/***/ })

}]);