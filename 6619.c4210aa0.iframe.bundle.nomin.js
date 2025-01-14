"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[6619],{

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

/***/ "../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/tag.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * WordPress dependencies
 */


const tag = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .SVG */ .t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .Path */ .wA, {
    d: "M4.75 4a.75.75 0 0 0-.75.75v7.826c0 .2.08.39.22.53l6.72 6.716a2.313 2.313 0 0 0 3.276-.001l5.61-5.611-.531-.53.532.528a2.315 2.315 0 0 0 0-3.264L13.104 4.22a.75.75 0 0 0-.53-.22H4.75ZM19 12.576a.815.815 0 0 1-.236.574l-5.61 5.611a.814.814 0 0 1-1.153 0L5.5 12.264V5.5h6.763l6.5 6.502a.816.816 0 0 1 .237.574ZM8.75 9.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tag);
//# sourceMappingURL=tag.js.map

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

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/does-not-exceed-safe-integer.js":
/***/ ((module) => {


var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/engine-ff-version.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var userAgent = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/engine-user-agent.js");

var firefox = userAgent.match(/firefox\/(\d+)/i);

module.exports = !!firefox && +firefox[1];


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/engine-is-bun.js":
/***/ ((module) => {


/* global Bun -- Bun case */
module.exports = typeof Bun == 'function' && Bun && typeof Bun.version == 'string';


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

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


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

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/inherit-if-required.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


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

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-regexp.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) === 'RegExp');
};


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

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/regexp-exec-abstract.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


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

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/schedulers-fix.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var global = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/global.js");
var apply = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-apply.js");
var isCallable = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-callable.js");
var ENGINE_IS_BUN = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/engine-is-bun.js");
var USER_AGENT = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/engine-user-agent.js");
var arraySlice = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-slice.js");
var validateArgumentsLength = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/validate-arguments-length.js");

var Function = global.Function;
// dirty IE9- and Bun 0.3.0- checks
var WRAP = /MSIE .\./.test(USER_AGENT) || ENGINE_IS_BUN && (function () {
  var version = global.Bun.version.split('.');
  return version.length < 3 || version[0] === '0' && (version[1] < 3 || version[1] === '3' && version[2] === '0');
})();

// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
module.exports = function (scheduler, hasTimeArg) {
  var firstParamIndex = hasTimeArg ? 2 : 1;
  return WRAP ? function (handler, timeout /* , ...arguments */) {
    var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
    var fn = isCallable(handler) ? handler : Function(handler);
    var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
    var callback = boundArgs ? function () {
      apply(fn, this, params);
    } : fn;
    return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
  } : scheduler;
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

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.index-of.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


/* eslint-disable es/no-array-prototype-indexof -- required for testing */
var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this-clause.js");
var $indexOf = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-includes.js").indexOf);
var arrayMethodIsStrict = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-method-is-strict.js");

var nativeIndexOf = uncurryThis([].indexOf);

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
var FORCED = NEGATIVE_ZERO || !arrayMethodIsStrict('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: FORCED }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf(this, searchElement, fromIndex) || 0
      : $indexOf(this, searchElement, fromIndex);
  }
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

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.promise.finally.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var IS_PURE = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-pure.js");
var NativePromiseConstructor = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/promise-native-constructor.js");
var fails = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js");
var getBuiltIn = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/get-built-in.js");
var isCallable = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-callable.js");
var speciesConstructor = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/species-constructor.js");
var promiseResolve = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/promise-resolve.js");
var defineBuiltIn = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/define-built-in.js");

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromiseConstructor && fails(function () {
  // eslint-disable-next-line unicorn/no-thenable -- required for testing
  NativePromisePrototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
});

// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
$({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn('Promise'));
    var isFunction = isCallable(onFinally);
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

// makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
if (!IS_PURE && isCallable(NativePromiseConstructor)) {
  var method = getBuiltIn('Promise').prototype['finally'];
  if (NativePromisePrototype['finally'] !== method) {
    defineBuiltIn(NativePromisePrototype, 'finally', method, { unsafe: true });
  }
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

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.set-interval.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var global = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/global.js");
var schedulersFix = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/schedulers-fix.js");

var setInterval = schedulersFix(global.setInterval, true);

// Bun / IE9- setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
$({ global: true, bind: true, forced: global.setInterval !== setInterval }, {
  setInterval: setInterval
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.set-timeout.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var global = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/global.js");
var schedulersFix = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/schedulers-fix.js");

var setTimeout = schedulersFix(global.setTimeout, true);

// Bun / IE9- setTimeout additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
$({ global: true, bind: true, forced: global.setTimeout !== setTimeout }, {
  setTimeout: setTimeout
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.timers.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.set-interval.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.set-timeout.js");


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