"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[3514],{

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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/spinner/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-sort.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var arraySlice = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-slice-simple.js");

var floor = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(
    array,
    mergeSort(arraySlice(array, 0, middle), comparefn),
    mergeSort(arraySlice(array, middle), comparefn),
    comparefn
  );
};

var insertionSort = function (array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;

  while (i < length) {
    j = i;
    element = array[i];
    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }
    if (j !== i++) array[j] = element;
  } return array;
};

var merge = function (array, left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;

  while (lindex < llength || rindex < rlength) {
    array[lindex + rindex] = (lindex < llength && rindex < rlength)
      ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
      : lindex < llength ? left[lindex++] : right[rindex++];
  } return array;
};

module.exports = mergeSort;


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/delete-property-or-throw.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var tryToString = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/try-to-string.js");

var $TypeError = TypeError;

module.exports = function (O, P) {
  if (!delete O[P]) throw new $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/engine-ff-version.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var userAgent = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/engine-user-agent.js");

var firefox = userAgent.match(/firefox\/(\d+)/i);

module.exports = !!firefox && +firefox[1];


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/engine-is-ie-or-edge.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var UA = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/engine-user-agent.js");

module.exports = /MSIE|Trident/.test(UA);


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/engine-webkit-version.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var userAgent = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/engine-user-agent.js");

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

module.exports = !!webkit && +webkit[1];


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.find-index.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var $findIndex = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-iteration.js").findIndex);
var addToUnscopables = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/add-to-unscopables.js");

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

// Shouldn't skip holes
// eslint-disable-next-line es/no-array-prototype-findindex -- testing
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.join.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


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

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.sort.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/a-callable.js");
var toObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/length-of-array-like.js");
var deletePropertyOrThrow = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/delete-property-or-throw.js");
var toString = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-string.js");
var fails = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js");
var internalSort = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-sort.js");
var arrayMethodIsStrict = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-method-is-strict.js");
var FF = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/engine-ff-version.js");
var IE_OR_EDGE = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/engine-is-ie-or-edge.js");
var V8 = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/engine-v8-version.js");
var WEBKIT = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/engine-webkit-version.js");

var test = [];
var nativeSort = uncurryThis(test.sort);
var push = uncurryThis(test.push);

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var STABLE_SORT = !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 70;
  if (FF && FF > 3) return;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 603;

  var result = '';
  var code, chr, value, index;

  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66: case 69: case 70: case 72: value = 3; break;
      case 68: case 71: value = 4; break;
      default: value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({ k: chr + index, v: value });
    }
  }

  test.sort(function (a, b) { return b.v - a.v; });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return toString(x) > toString(y) ? 1 : -1;
  };
};

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable(comparefn);

    var array = toObject(this);

    if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);

    var items = [];
    var arrayLength = lengthOfArrayLike(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) push(items, array[index]);
    }

    internalSort(items, getSortCompare(comparefn));

    itemsLength = lengthOfArrayLike(items);
    index = 0;

    while (index < itemsLength) array[index] = items[index++];
    while (index < arrayLength) deletePropertyOrThrow(array, index++);

    return array;
  }
});


/***/ })

}]);