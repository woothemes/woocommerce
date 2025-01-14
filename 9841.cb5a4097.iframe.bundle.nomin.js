"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[9841],{

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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/higher-order/with-spoken-messages/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/utils/create-higher-order-component/index.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-debounce/index.js");
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+a11y@4.0.1/node_modules/@wordpress/a11y/build-module/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * WordPress dependencies
 */



/** @typedef {import('react').ComponentType} ComponentType */

/**
 * A Higher Order Component used to be provide speak and debounced speak
 * functions.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-a11y/#speak
 *
 * @param {ComponentType} Component The component to be wrapped.
 *
 * @return {ComponentType} The wrapped component.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__/* .createHigherOrderComponent */ .f)(Component => props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component, {
  ...props,
  speak: _wordpress_a11y__WEBPACK_IMPORTED_MODULE_0__/* .speak */ .L,
  debouncedSpeak: (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_0__/* .speak */ .L, 500)
}), 'withSpokenMessages'));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/higher-order/compose.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/higher-order/pipe.js");
/**
 * Internal dependencies
 */


/**
 * Composes multiple higher-order components into a single higher-order component. Performs right-to-left function
 * composition, where each successive invocation is supplied the return value of the previous.
 *
 * This is inspired by `lodash`'s `flowRight` function.
 *
 * @see https://lodash.com/docs/4#flow-right
 */
const compose = (0,_pipe__WEBPACK_IMPORTED_MODULE_0__/* .basePipe */ .A)(true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compose);
//# sourceMappingURL=compose.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/higher-order/pipe.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ basePipe),
/* harmony export */   h: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Parts of this source were derived and modified from lodash,
 * released under the MIT license.
 *
 * https://github.com/lodash/lodash
 *
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 *
 * Based on Underscore.js, copyright Jeremy Ashkenas,
 * DocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>
 *
 * This software consists of voluntary contributions made by many
 * individuals. For exact contribution history, see the revision history
 * available at https://github.com/lodash/lodash
 *
 * The following license applies to all parts of this software except as
 * documented below:
 *
 * ====
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Creates a pipe function.
 *
 * Allows to choose whether to perform left-to-right or right-to-left composition.
 *
 * @see https://lodash.com/docs/4#flow
 *
 * @param {boolean} reverse True if right-to-left, false for left-to-right composition.
 */
const basePipe = (reverse = false) => (...funcs) => (...args) => {
  const functions = funcs.flat();
  if (reverse) {
    functions.reverse();
  }
  return functions.reduce((prev, func) => [func(...prev)], args)[0];
};

/**
 * Composes multiple higher-order components into a single higher-order component. Performs left-to-right function
 * composition, where each successive invocation is supplied the return value of the previous.
 *
 * This is inspired by `lodash`'s `flow` function.
 *
 * @see https://lodash.com/docs/4#flow
 */
const pipe = basePipe();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pipe);
//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/higher-order/with-instance-id/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_create_higher_order_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/utils/create-higher-order-component/index.js");
/* harmony import */ var _hooks_use_instance_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * Internal dependencies
 */




/**
 * A Higher Order Component used to be provide a unique instance ID by
 * component.
 */
const withInstanceId = (0,_utils_create_higher_order_component__WEBPACK_IMPORTED_MODULE_1__/* .createHigherOrderComponent */ .f)(WrappedComponent => {
  return props => {
    const instanceId = (0,_hooks_use_instance_id__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(WrappedComponent);
    // @ts-ignore
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WrappedComponent, {
      ...props,
      instanceId: instanceId
    });
  };
}, 'instanceId');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withInstanceId);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-debounce/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useDebounce)
/* harmony export */ });
/* harmony import */ var use_memo_one__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/use-memo-one@1.1.3_react@18.3.1/node_modules/use-memo-one/dist/use-memo-one.esm.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/utils/debounce/index.js");
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Debounces a function similar to Lodash's `debounce`. A new debounced function will
 * be returned and any scheduled calls cancelled if any of the arguments change,
 * including the function to debounce, so please wrap functions created on
 * render in components in `useCallback`.
 *
 * @see https://lodash.com/docs/4#debounce
 *
 * @template {(...args: any[]) => void} TFunc
 *
 * @param {TFunc}                                          fn        The function to debounce.
 * @param {number}                                         [wait]    The number of milliseconds to delay.
 * @param {import('../../utils/debounce').DebounceOptions} [options] The options object.
 * @return {import('../../utils/debounce').DebouncedFunc<TFunc>} Debounced function.
 */
function useDebounce(fn, wait, options) {
  const debounced = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_0__/* .useMemoOne */ .MA)(() => (0,_utils_debounce__WEBPACK_IMPORTED_MODULE_1__/* .debounce */ .s)(fn, wait !== null && wait !== void 0 ? wait : 0, options), [fn, wait, options]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => () => debounced.cancel(), [debounced]);
  return debounced;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/utils/create-higher-order-component/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/utils/debounce/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ debounce)
/* harmony export */ });
/**
 * Parts of this source were derived and modified from lodash,
 * released under the MIT license.
 *
 * https://github.com/lodash/lodash
 *
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 *
 * Based on Underscore.js, copyright Jeremy Ashkenas,
 * DocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>
 *
 * This software consists of voluntary contributions made by many
 * individuals. For exact contribution history, see the revision history
 * available at https://github.com/lodash/lodash
 *
 * The following license applies to all parts of this software except as
 * documented below:
 *
 * ====
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * A simplified and properly typed version of lodash's `debounce`, that
 * always uses timers instead of sometimes using rAF.
 *
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel delayed
 * `func` invocations and a `flush` method to immediately invoke them. Provide
 * `options` to indicate whether `func` should be invoked on the leading and/or
 * trailing edge of the `wait` timeout. The `func` is invoked with the last
 * arguments provided to the debounced function. Subsequent calls to the debounced
 * function return the result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * @param {Function}                   func             The function to debounce.
 * @param {number}                     wait             The number of milliseconds to delay.
 * @param {Partial< DebounceOptions >} options          The options object.
 * @param {boolean}                    options.leading  Specify invoking on the leading edge of the timeout.
 * @param {number}                     options.maxWait  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean}                    options.trailing Specify invoking on the trailing edge of the timeout.
 *
 * @return Returns the new debounced function.
 */
const debounce = (func, wait, options) => {
  let lastArgs;
  let lastThis;
  let maxWait = 0;
  let result;
  let timerId;
  let lastCallTime;
  let lastInvokeTime = 0;
  let leading = false;
  let maxing = false;
  let trailing = true;
  if (options) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    if (options.maxWait !== undefined) {
      maxWait = Math.max(options.maxWait, wait);
    }
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    const args = lastArgs;
    const thisArg = lastThis;
    lastArgs = undefined;
    lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function startTimer(pendingFunc, waitTime) {
    timerId = setTimeout(pendingFunc, waitTime);
  }
  function cancelTimer() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
  }
  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    startTimer(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }
  function getTimeSinceLastCall(time) {
    return time - (lastCallTime || 0);
  }
  function remainingWait(time) {
    const timeSinceLastCall = getTimeSinceLastCall(time);
    const timeSinceLastInvoke = time - lastInvokeTime;
    const timeWaiting = wait - timeSinceLastCall;
    return maxing ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    const timeSinceLastCall = getTimeSinceLastCall(time);
    const timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    const time = Date.now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    startTimer(timerExpired, remainingWait(time));
    return undefined;
  }
  function clearTimer() {
    timerId = undefined;
  }
  function trailingEdge(time) {
    clearTimer();

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }
  function cancel() {
    cancelTimer();
    lastInvokeTime = 0;
    clearTimer();
    lastArgs = lastCallTime = lastThis = undefined;
  }
  function flush() {
    return pending() ? trailingEdge(Date.now()) : result;
  }
  function pending() {
    return timerId !== undefined;
  }
  function debounced(...args) {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);
    lastArgs = args;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (!pending()) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        startTimer(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (!pending()) {
      startTimer(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  debounced.pending = pending;
  return debounced;
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+html-entities@4.0.1/node_modules/@wordpress/html-entities/build-module/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ decodeEntities)
/* harmony export */ });
/** @type {HTMLTextAreaElement} */
let _decodeTextArea;

/**
 * Decodes the HTML entities from a given string.
 *
 * @param {string} html String that contain HTML entities.
 *
 * @example
 * ```js
 * import { decodeEntities } from '@wordpress/html-entities';
 *
 * const result = decodeEntities( '&aacute;' );
 * console.log( result ); // result will be "á"
 * ```
 *
 * @return {string} The decoded string.
 */
function decodeEntities(html) {
  // Not a string, or no entities to decode.
  if ('string' !== typeof html || -1 === html.indexOf('&')) {
    return html;
  }

  // Create a textarea for decoding entities, that we can reuse.
  if (undefined === _decodeTextArea) {
    if (document.implementation && document.implementation.createHTMLDocument) {
      _decodeTextArea = document.implementation.createHTMLDocument('').createElement('textarea');
    } else {
      _decodeTextArea = document.createElement('textarea');
    }
  }
  _decodeTextArea.innerHTML = html;
  const decoded = _decodeTextArea.textContent;
  _decodeTextArea.innerHTML = '';

  /**
   * Cast to string, HTMLTextAreaElement should always have `string` textContent.
   *
   * > The `textContent` property of the `Node` interface represents the text content of the
   * > node and its descendants.
   * >
   * > Value: A string or `null`
   * >
   * > * If the node is a `document` or a Doctype, `textContent` returns `null`.
   * > * If the node is a CDATA section, comment, processing instruction, or text node,
   * >   textContent returns the text inside the node, i.e., the `Node.nodeValue`.
   * > * For other node types, `textContent returns the concatenation of the textContent of
   * >   every child node, excluding comments and processing instructions. (This is an empty
   * >   string if the node has no children.)
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
   */
  return /** @type {string} */decoded;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/proxy-accessor.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var defineProperty = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-define-property.js").f);

module.exports = function (Target, Source, key) {
  key in Target || defineProperty(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
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

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.constructor.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js");
var isForced = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-forced.js");
var inheritIfRequired = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/inherit-if-required.js");
var createNonEnumerableProperty = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/create-non-enumerable-property.js");
var create = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-create.js");
var getOwnPropertyNames = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-get-own-property-names.js").f);
var isPrototypeOf = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-is-prototype-of.js");
var isRegExp = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-regexp.js");
var toString = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-string.js");
var getRegExpFlags = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/regexp-get-flags.js");
var stickyHelpers = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/regexp-sticky-helpers.js");
var proxyAccessor = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/proxy-accessor.js");
var defineBuiltIn = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/define-built-in.js");
var fails = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js");
var hasOwn = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/has-own-property.js");
var enforceInternalState = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/internal-state.js").enforce);
var setSpecies = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/set-species.js");
var wellKnownSymbol = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/well-known-symbol.js");
var UNSUPPORTED_DOT_ALL = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/regexp-unsupported-dot-all.js");
var UNSUPPORTED_NCG = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/regexp-unsupported-ncg.js");

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var SyntaxError = global.SyntaxError;
var exec = uncurryThis(RegExpPrototype.exec);
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);
// TODO: Use only proper RegExpIdentifierName
var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var MISSED_STICKY = stickyHelpers.MISSED_STICKY;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var BASE_FORCED = DESCRIPTORS &&
  (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails(function () {
    re2[MATCH] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return NativeRegExp(re1) !== re1 || NativeRegExp(re2) === re2 || String(NativeRegExp(re1, 'i')) !== '/a/i';
  }));

var handleDotAll = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var brackets = false;
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      result += chr + charAt(string, ++index);
      continue;
    }
    if (!brackets && chr === '.') {
      result += '[\\s\\S]';
    } else {
      if (chr === '[') {
        brackets = true;
      } else if (chr === ']') {
        brackets = false;
      } result += chr;
    }
  } return result;
};

var handleNCG = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var named = [];
  var names = create(null);
  var brackets = false;
  var ncg = false;
  var groupid = 0;
  var groupname = '';
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      chr += charAt(string, ++index);
    } else if (chr === ']') {
      brackets = false;
    } else if (!brackets) switch (true) {
      case chr === '[':
        brackets = true;
        break;
      case chr === '(':
        if (exec(IS_NCG, stringSlice(string, index + 1))) {
          index += 2;
          ncg = true;
        }
        result += chr;
        groupid++;
        continue;
      case chr === '>' && ncg:
        if (groupname === '' || hasOwn(names, groupname)) {
          throw new SyntaxError('Invalid capture group name');
        }
        names[groupname] = true;
        named[named.length] = [groupname, groupid];
        ncg = false;
        groupname = '';
        continue;
    }
    if (ncg) groupname += chr;
    else result += chr;
  } return [result, named];
};

// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if (isForced('RegExp', BASE_FORCED)) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = isPrototypeOf(RegExpPrototype, this);
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }

    if (patternIsRegExp || isPrototypeOf(RegExpPrototype, pattern)) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = getRegExpFlags(rawPattern);
    }

    pattern = pattern === undefined ? '' : toString(pattern);
    flags = flags === undefined ? '' : toString(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
      dotAll = !!flags && stringIndexOf(flags, 's') > -1;
      if (dotAll) flags = replace(flags, /s/g, '');
    }

    rawFlags = flags;

    if (MISSED_STICKY && 'sticky' in re1) {
      sticky = !!flags && stringIndexOf(flags, 'y') > -1;
      if (sticky && UNSUPPORTED_Y) flags = replace(flags, /y/g, '');
    }

    if (UNSUPPORTED_NCG) {
      handled = handleNCG(pattern);
      pattern = handled[0];
      groups = handled[1];
    }

    result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);

    if (dotAll || sticky || groups.length) {
      state = enforceInternalState(result);
      if (dotAll) {
        state.dotAll = true;
        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
      }
      if (sticky) state.sticky = true;
      if (groups.length) state.groups = groups;
    }

    if (pattern !== rawPattern) try {
      // fails in old engines, but we have no alternatives for unsupported regex syntax
      createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
    } catch (error) { /* empty */ }

    return result;
  };

  for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
    proxyAccessor(RegExpWrapper, NativeRegExp, keys[index++]);
  }

  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  defineBuiltIn(global, 'RegExp', RegExpWrapper, { constructor: true });
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


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

/***/ "../../node_modules/.pnpm/pascal-case@3.1.2/node_modules/pascal-case/dist.es2015/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "../../node_modules/.pnpm/use-memo-one@1.1.3_react@18.3.1/node_modules/use-memo-one/dist/use-memo-one.esm.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MA: () => (/* binding */ useMemoOne)
/* harmony export */ });
/* unused harmony exports useCallback, useCallbackOne, useMemo */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");


function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }

  for (var i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }

  return true;
}

function useMemoOne(getResult, inputs) {
  var initial = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
    return {
      inputs: inputs,
      result: getResult()
    };
  })[0];
  var isFirstRun = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  var committed = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initial);
  var useCache = isFirstRun.current || Boolean(inputs && committed.current.inputs && areInputsEqual(inputs, committed.current.inputs));
  var cache = useCache ? committed.current : {
    inputs: inputs,
    result: getResult()
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    isFirstRun.current = false;
    committed.current = cache;
  }, [cache]);
  return cache.result;
}
function useCallbackOne(callback, inputs) {
  return useMemoOne(function () {
    return callback;
  }, inputs);
}
var useMemo = (/* unused pure expression or super */ null && (useMemoOne));
var useCallback = (/* unused pure expression or super */ null && (useCallbackOne));




/***/ })

}]);