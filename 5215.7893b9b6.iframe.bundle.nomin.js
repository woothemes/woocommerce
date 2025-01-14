"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[5215],{

/***/ "../../node_modules/.pnpm/@floating-ui+react-dom@2.0.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UE: () => (/* binding */ arrow),
/* harmony export */   we: () => (/* binding */ useFloating)
/* harmony export */ });
/* harmony import */ var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@floating-ui+core@1.5.2/node_modules/@floating-ui/core/dist/floating-ui.core.mjs");
/* harmony import */ var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@floating-ui+dom@1.5.3/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js");






/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = options => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, 'current');
  }
  return {
    name: 'arrow',
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === 'function' ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__/* .arrow */ .UE)({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      }
      if (element) {
        return (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__/* .arrow */ .UE)({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};

var index = typeof document !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

// Fork of `fast-deep-equal` that only does the comparisons we need and compares
// functions
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === 'function' && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a && b && typeof a === 'object') {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length) return false;
      for (i = length; i-- !== 0;) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0;) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0;) {
      const key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}

function getDPR(element) {
  if (typeof window === 'undefined') {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}

function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}

function useLatestRef(value) {
  const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}

/**
 * Provides data to position a floating element.
 * @see https://floating-ui.com/docs/useFloating
 */
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = react__WEBPACK_IMPORTED_MODULE_0__.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  const [_floating, _setFloating] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  const setReference = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(node => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(node => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const floatingRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const dataRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform);
  const update = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_3__/* .computePosition */ .rD)(referenceRef.current, floatingRef.current, config).then(data => {
      const fullData = {
        ...data,
        isPositioned: true
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData(data => ({
        ...data,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...(getDPR(elements.floating) >= 1.5 && {
          willChange: 'transform'
        })
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}




/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/popover/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (/* binding */ popover)
});

// UNUSED EXPORTS: Popover, SLOT_NAME

// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@floating-ui+core@1.5.2/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
var floating_ui_core = __webpack_require__("../../node_modules/.pnpm/@floating-ui+core@1.5.2/node_modules/@floating-ui/core/dist/floating-ui.core.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@floating-ui+react-dom@2.0.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var floating_ui_react_dom = __webpack_require__("../../node_modules/.pnpm/@floating-ui+react-dom@2.0.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@floating-ui+dom@1.5.3/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs + 1 modules
var floating_ui_dom = __webpack_require__("../../node_modules/.pnpm/@floating-ui+dom@1.5.3/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/render/dom/motion.mjs + 205 modules
var motion = __webpack_require__("../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/render/dom/motion.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js
var react_dom = __webpack_require__("../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-viewport-match/index.js
var use_viewport_match = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-viewport-match/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+keycodes@4.0.1/node_modules/@wordpress/keycodes/build-module/index.js
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+keycodes@4.0.1/node_modules/@wordpress/keycodes/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-constrained-tabbing/index.js
var use_constrained_tabbing = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-constrained-tabbing/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-on-mount/index.js
var use_focus_on_mount = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-on-mount/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-return/index.js
var use_focus_return = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-return/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-outside/index.js
var use_focus_outside = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-outside/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js
var use_merge_refs = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-dialog/index.js
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
 * Returns a ref and props to apply to a dialog wrapper to enable the following behaviors:
 *  - constrained tabbing.
 *  - focus on mount.
 *  - return focus on unmount.
 *  - focus outside.
 *
 * @param options Dialog Options.
 */
function useDialog(options) {
  const currentOptions = (0,react.useRef)();
  const {
    constrainTabbing = options.focusOnMount !== false
  } = options;
  (0,react.useEffect)(() => {
    currentOptions.current = options;
  }, Object.values(options));
  const constrainedTabbingRef = (0,use_constrained_tabbing/* default */.A)();
  const focusOnMountRef = (0,use_focus_on_mount/* default */.A)(options.focusOnMount);
  const focusReturnRef = (0,use_focus_return/* default */.A)();
  const focusOutsideProps = (0,use_focus_outside/* default */.A)(event => {
    // This unstable prop  is here only to manage backward compatibility
    // for the Popover component otherwise, the onClose should be enough.
    if (currentOptions.current?.__unstableOnClose) {
      currentOptions.current.__unstableOnClose('focus-outside', event);
    } else if (currentOptions.current?.onClose) {
      currentOptions.current.onClose();
    }
  });
  const closeOnEscapeRef = (0,react.useCallback)(node => {
    if (!node) {
      return;
    }
    node.addEventListener('keydown', event => {
      // Close on escape.
      if (event.keyCode === build_module/* ESCAPE */._f && !event.defaultPrevented && currentOptions.current?.onClose) {
        event.preventDefault();
        currentOptions.current.onClose();
      }
    });
  }, []);
  return [(0,use_merge_refs/* default */.A)([constrainTabbing ? constrainedTabbingRef : null, options.focusOnMount !== false ? focusReturnRef : null, options.focusOnMount !== false ? focusOnMountRef : null, closeOnEscapeRef]), {
    ...focusOutsideProps,
    tabIndex: -1
  }];
}
/* harmony default export */ const use_dialog = (useDialog);
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-reduced-motion/index.js
var use_reduced_motion = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-reduced-motion/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/close.js
var library_close = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/close.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+deprecated@4.0.1/node_modules/@wordpress/deprecated/build-module/index.js
var deprecated_build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+deprecated@4.0.1/node_modules/@wordpress/deprecated/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js
var svg = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/scroll-lock/index.js
/**
 * WordPress dependencies
 */


/*
 * Setting `overflow: hidden` on html and body elements resets body scroll in iOS.
 * Save scroll top so we can restore it after locking scroll.
 *
 * NOTE: It would be cleaner and possibly safer to find a localized solution such
 * as preventing default on certain touchmove events.
 */
let previousScrollTop = 0;
function setLocked(locked) {
  const scrollingElement = document.scrollingElement || document.body;
  if (locked) {
    previousScrollTop = scrollingElement.scrollTop;
  }
  const methodName = locked ? 'add' : 'remove';
  scrollingElement.classList[methodName]('lockscroll');

  // Adding the class to the document element seems to be necessary in iOS.
  document.documentElement.classList[methodName]('lockscroll');
  if (!locked) {
    scrollingElement.scrollTop = previousScrollTop;
  }
}
let lockCounter = 0;

/**
 * ScrollLock is a content-free React component for declaratively preventing
 * scroll bleed from modal UI to the page body. This component applies a
 * `lockscroll` class to the `document.documentElement` and
 * `document.scrollingElement` elements to stop the body from scrolling. When it
 * is present, the lock is applied.
 *
 * ```jsx
 * import { ScrollLock, Button } from '@wordpress/components';
 * import { useState } from '@wordpress/element';
 *
 * const MyScrollLock = () => {
 *   const [ isScrollLocked, setIsScrollLocked ] = useState( false );
 *
 *   const toggleLock = () => {
 *     setIsScrollLocked( ( locked ) => ! locked ) );
 *   };
 *
 *   return (
 *     <div>
 *       <Button variant="secondary" onClick={ toggleLock }>
 *         Toggle scroll lock
 *       </Button>
 *       { isScrollLocked && <ScrollLock /> }
 *       <p>
 *         Scroll locked:
 *         <strong>{ isScrollLocked ? 'Yes' : 'No' }</strong>
 *       </p>
 *     </div>
 *   );
 * };
 * ```
 */
function ScrollLock() {
  (0,react.useEffect)(() => {
    if (lockCounter === 0) {
      setLocked(true);
    }
    ++lockCounter;
    return () => {
      if (lockCounter === 1) {
        setLocked(false);
      }
      --lockCounter;
    };
  }, []);
  return null;
}
/* harmony default export */ const scroll_lock = (ScrollLock);
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/use-slot.js
var use_slot = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/use-slot.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/slot-fill/index.js + 9 modules
var slot_fill = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/slot-fill/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/popover/utils.js
var utils = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/popover/utils.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/use-context-system.js + 1 modules
var use_context_system = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/use-context-system.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-connect.js
var context_connect = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-connect.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/popover/overlay-middlewares.js
/**
 * External dependencies
 */


function overlayMiddlewares() {
  return [{
    name: 'overlay',
    fn({
      rects
    }) {
      return rects.reference;
    }
  }, (0,floating_ui_core/* size */.Ej)({
    apply({
      rects,
      elements
    }) {
      var _elements$floating;
      const {
        firstElementChild
      } = (_elements$floating = elements.floating) !== null && _elements$floating !== void 0 ? _elements$floating : {};

      // Only HTMLElement instances have the `style` property.
      if (!(firstElementChild instanceof HTMLElement)) {
        return;
      }

      // Reduce the height of the popover to the available space.
      Object.assign(firstElementChild.style, {
        width: `${rects.reference.width}px`,
        height: `${rects.reference.height}px`
      });
    }
  })];
}
//# sourceMappingURL=overlay-middlewares.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/style-provider/index.js
var style_provider = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/style-provider/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/popover/index.js
/**
 * External dependencies
 */



// eslint-disable-next-line no-restricted-imports

// eslint-disable-next-line no-restricted-imports


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */








/**
 * Name of slot in which popover should fill.
 *
 * @type {string}
 */



const SLOT_NAME = 'Popover';

// An SVG displaying a triangle facing down, filled with a solid
// color and bordered in such a way to create an arrow-like effect.
// Keeping the SVG's viewbox squared simplify the arrow positioning
// calculations.
const ArrowTriangle = () => /*#__PURE__*/(0,jsx_runtime.jsxs)(svg/* SVG */.t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 100 100",
  className: "components-popover__triangle",
  role: "presentation",
  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
    className: "components-popover__triangle-bg",
    d: "M 0 0 L 50 50 L 100 0"
  }), /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
    className: "components-popover__triangle-border",
    d: "M 0 0 L 50 50 L 100 0",
    vectorEffect: "non-scaling-stroke"
  })]
});
const slotNameContext = (0,react.createContext)(undefined);
const fallbackContainerClassname = 'components-popover__fallback-container';
const getPopoverFallbackContainer = () => {
  let container = document.body.querySelector('.' + fallbackContainerClassname);
  if (!container) {
    container = document.createElement('div');
    container.className = fallbackContainerClassname;
    document.body.append(container);
  }
  return container;
};
const UnforwardedPopover = (props, forwardedRef) => {
  const {
    animate = true,
    headerTitle,
    constrainTabbing,
    onClose,
    children,
    className,
    noArrow = true,
    position,
    placement: placementProp = 'bottom-start',
    offset: offsetProp = 0,
    focusOnMount = 'firstElement',
    anchor,
    expandOnMobile,
    onFocusOutside,
    __unstableSlotName = SLOT_NAME,
    flip = true,
    resize = true,
    shift = false,
    inline = false,
    variant,
    // Deprecated props
    __unstableForcePosition,
    anchorRef,
    anchorRect,
    getAnchorRect,
    isAlternate,
    // Rest
    ...contentProps
  } = (0,use_context_system/* useContextSystem */.A)(props, 'Popover');
  let computedFlipProp = flip;
  let computedResizeProp = resize;
  if (__unstableForcePosition !== undefined) {
    (0,deprecated_build_module/* default */.A)('`__unstableForcePosition` prop in wp.components.Popover', {
      since: '6.1',
      version: '6.3',
      alternative: '`flip={ false }` and  `resize={ false }`'
    });

    // Back-compat, set the `flip` and `resize` props
    // to `false` to replicate `__unstableForcePosition`.
    computedFlipProp = !__unstableForcePosition;
    computedResizeProp = !__unstableForcePosition;
  }
  if (anchorRef !== undefined) {
    (0,deprecated_build_module/* default */.A)('`anchorRef` prop in wp.components.Popover', {
      since: '6.1',
      alternative: '`anchor` prop'
    });
  }
  if (anchorRect !== undefined) {
    (0,deprecated_build_module/* default */.A)('`anchorRect` prop in wp.components.Popover', {
      since: '6.1',
      alternative: '`anchor` prop'
    });
  }
  if (getAnchorRect !== undefined) {
    (0,deprecated_build_module/* default */.A)('`getAnchorRect` prop in wp.components.Popover', {
      since: '6.1',
      alternative: '`anchor` prop'
    });
  }
  const computedVariant = isAlternate ? 'toolbar' : variant;
  if (isAlternate !== undefined) {
    (0,deprecated_build_module/* default */.A)('`isAlternate` prop in wp.components.Popover', {
      since: '6.2',
      alternative: "`variant` prop with the `'toolbar'` value"
    });
  }
  const arrowRef = (0,react.useRef)(null);
  const [fallbackReferenceElement, setFallbackReferenceElement] = (0,react.useState)(null);
  const anchorRefFallback = (0,react.useCallback)(node => {
    setFallbackReferenceElement(node);
  }, []);
  const isMobileViewport = (0,use_viewport_match/* default */.A)('medium', '<');
  const isExpanded = expandOnMobile && isMobileViewport;
  const hasArrow = !isExpanded && !noArrow;
  const normalizedPlacementFromProps = position ? (0,utils/* positionToPlacement */.YK)(position) : placementProp;
  const middleware = [...(placementProp === 'overlay' ? overlayMiddlewares() : []), (0,floating_ui_core/* offset */.cY)(offsetProp), computedFlipProp && (0,floating_ui_core/* flip */.UU)(), computedResizeProp && (0,floating_ui_core/* size */.Ej)({
    apply(sizeProps) {
      var _refs$floating$curren;
      const {
        firstElementChild
      } = (_refs$floating$curren = refs.floating.current) !== null && _refs$floating$curren !== void 0 ? _refs$floating$curren : {};

      // Only HTMLElement instances have the `style` property.
      if (!(firstElementChild instanceof HTMLElement)) {
        return;
      }

      // Reduce the height of the popover to the available space.
      Object.assign(firstElementChild.style, {
        maxHeight: `${sizeProps.availableHeight}px`,
        overflow: 'auto'
      });
    }
  }), shift && (0,floating_ui_core/* shift */.BN)({
    crossAxis: true,
    limiter: (0,floating_ui_core/* limitShift */.ER)(),
    padding: 1 // Necessary to avoid flickering at the edge of the viewport.
  }), (0,floating_ui_react_dom/* arrow */.UE)({
    element: arrowRef
  })];
  const slotName = (0,react.useContext)(slotNameContext) || __unstableSlotName;
  const slot = (0,use_slot/* default */.A)(slotName);
  let onDialogClose;
  if (onClose || onFocusOutside) {
    onDialogClose = (type, event) => {
      // Ideally the popover should have just a single onClose prop and
      // not three props that potentially do the same thing.
      if (type === 'focus-outside' && onFocusOutside) {
        onFocusOutside(event);
      } else if (onClose) {
        onClose();
      }
    };
  }
  const [dialogRef, dialogProps] = use_dialog({
    constrainTabbing,
    focusOnMount,
    __unstableOnClose: onDialogClose,
    // @ts-expect-error The __unstableOnClose property needs to be deprecated first (see https://github.com/WordPress/gutenberg/pull/27675)
    onClose: onDialogClose
  });
  const {
    // Positioning coordinates
    x,
    y,
    // Object with "regular" refs to both "reference" and "floating"
    refs,
    // Type of CSS position property to use (absolute or fixed)
    strategy,
    update,
    placement: computedPlacement,
    middlewareData: {
      arrow: arrowData
    }
  } = (0,floating_ui_react_dom/* useFloating */.we)({
    placement: normalizedPlacementFromProps === 'overlay' ? undefined : normalizedPlacementFromProps,
    middleware,
    whileElementsMounted: (referenceParam, floatingParam, updateParam) => (0,floating_ui_dom/* autoUpdate */.ll)(referenceParam, floatingParam, updateParam, {
      layoutShift: false,
      animationFrame: true
    })
  });
  const arrowCallbackRef = (0,react.useCallback)(node => {
    arrowRef.current = node;
    update();
  }, [update]);

  // When any of the possible anchor "sources" change,
  // recompute the reference element (real or virtual) and its owner document.

  const anchorRefTop = anchorRef?.top;
  const anchorRefBottom = anchorRef?.bottom;
  const anchorRefStartContainer = anchorRef?.startContainer;
  const anchorRefCurrent = anchorRef?.current;
  (0,react.useLayoutEffect)(() => {
    const resultingReferenceElement = (0,utils/* getReferenceElement */._G)({
      anchor,
      anchorRef,
      anchorRect,
      getAnchorRect,
      fallbackReferenceElement
    });
    refs.setReference(resultingReferenceElement);
  }, [anchor, anchorRef, anchorRefTop, anchorRefBottom, anchorRefStartContainer, anchorRefCurrent, anchorRect, getAnchorRect, fallbackReferenceElement, refs]);
  const mergedFloatingRef = (0,use_merge_refs/* default */.A)([refs.setFloating, dialogRef, forwardedRef]);
  const style = isExpanded ? undefined : {
    position: strategy,
    top: 0,
    left: 0,
    // `x` and `y` are framer-motion specific props and are shorthands
    // for `translateX` and `translateY`. Currently it is not possible
    // to use `translateX` and `translateY` because those values would
    // be overridden by the return value of the
    // `placementToMotionAnimationProps` function.
    x: (0,utils/* computePopoverPosition */.WS)(x),
    y: (0,utils/* computePopoverPosition */.WS)(y)
  };
  const shouldReduceMotion = (0,use_reduced_motion/* default */.A)();
  const shouldAnimate = animate && !isExpanded && !shouldReduceMotion;
  const [animationFinished, setAnimationFinished] = (0,react.useState)(false);
  const {
    style: motionInlineStyles,
    ...otherMotionProps
  } = (0,react.useMemo)(() => (0,utils/* placementToMotionAnimationProps */.Vn)(computedPlacement), [computedPlacement]);
  const animationProps = shouldAnimate ? {
    style: {
      ...motionInlineStyles,
      ...style
    },
    onAnimationComplete: () => setAnimationFinished(true),
    ...otherMotionProps
  } : {
    animate: false,
    style
  };

  // When Floating UI has finished positioning and Framer Motion has finished animating
  // the popover, add the `is-positioned` class to signal that all transitions have finished.
  const isPositioned = (!shouldAnimate || animationFinished) && x !== null && y !== null;
  let content = /*#__PURE__*/(0,jsx_runtime.jsxs)(motion/* motion */.P.div, {
    className: (0,clsx/* default */.A)(className, {
      'is-expanded': isExpanded,
      'is-positioned': isPositioned,
      // Use the 'alternate' classname for 'toolbar' variant for back compat.
      [`is-${computedVariant === 'toolbar' ? 'alternate' : computedVariant}`]: computedVariant
    }),
    ...animationProps,
    ...contentProps,
    ref: mergedFloatingRef,
    ...dialogProps,
    tabIndex: -1,
    children: [isExpanded && /*#__PURE__*/(0,jsx_runtime.jsx)(scroll_lock, {}), isExpanded && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "components-popover__header",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "components-popover__header-title",
        children: headerTitle
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
        className: "components-popover__close",
        icon: library_close/* default */.A,
        onClick: onClose
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "components-popover__content",
      children: children
    }), hasArrow && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      ref: arrowCallbackRef,
      className: ['components-popover__arrow', `is-${computedPlacement.split('-')[0]}`].join(' '),
      style: {
        left: typeof arrowData?.x !== 'undefined' && Number.isFinite(arrowData.x) ? `${arrowData.x}px` : '',
        top: typeof arrowData?.y !== 'undefined' && Number.isFinite(arrowData.y) ? `${arrowData.y}px` : ''
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowTriangle, {})
    })]
  });
  const shouldRenderWithinSlot = slot.ref && !inline;
  const hasAnchor = anchorRef || anchorRect || anchor;
  if (shouldRenderWithinSlot) {
    content = /*#__PURE__*/(0,jsx_runtime.jsx)(slot_fill/* Fill */.SQ, {
      name: slotName,
      children: content
    });
  } else if (!inline) {
    content = (0,react_dom.createPortal)( /*#__PURE__*/(0,jsx_runtime.jsx)(style_provider/* StyleProvider */.N, {
      document: document,
      children: content
    }), getPopoverFallbackContainer());
  }
  if (hasAnchor) {
    return content;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      ref: anchorRefFallback
    }), content]
  });
};

/**
 * `Popover` renders its content in a floating modal. If no explicit anchor is passed via props, it anchors to its parent element by default.
 *
 * ```jsx
 * import { Button, Popover } from '@wordpress/components';
 * import { useState } from '@wordpress/element';
 *
 * const MyPopover = () => {
 * 	const [ isVisible, setIsVisible ] = useState( false );
 * 	const toggleVisible = () => {
 * 		setIsVisible( ( state ) => ! state );
 * 	};
 *
 * 	return (
 * 		<Button variant="secondary" onClick={ toggleVisible }>
 * 			Toggle Popover!
 * 			{ isVisible && <Popover>Popover is toggled!</Popover> }
 * 		</Button>
 * 	);
 * };
 * ```
 *
 */
const Popover = (0,context_connect/* contextConnect */.KZ)(UnforwardedPopover, 'Popover');
function PopoverSlot({
  name = SLOT_NAME
}, ref) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(slot_fill/* Slot */.DX, {
    bubblesVirtually: true,
    name: name,
    className: "popover-slot",
    ref: ref
  });
}

// @ts-expect-error For Legacy Reasons
Popover.Slot = (0,react.forwardRef)(PopoverSlot);
// @ts-expect-error For Legacy Reasons
Popover.__unstableSlotNameProvider = slotNameContext.Provider;
/* harmony default export */ const popover = (Popover);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-outside/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-viewport-match/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _use_media_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * @typedef {"huge" | "wide" | "large" | "medium" | "small" | "mobile"} WPBreakpoint
 */

/**
 * Hash of breakpoint names with pixel width at which it becomes effective.
 *
 * @see _breakpoints.scss
 *
 * @type {Record<WPBreakpoint, number>}
 */
const BREAKPOINTS = {
  huge: 1440,
  wide: 1280,
  large: 960,
  medium: 782,
  small: 600,
  mobile: 480
};

/**
 * @typedef {">=" | "<"} WPViewportOperator
 */

/**
 * Object mapping media query operators to the condition to be used.
 *
 * @type {Record<WPViewportOperator, string>}
 */
const CONDITIONS = {
  '>=': 'min-width',
  '<': 'max-width'
};

/**
 * Object mapping media query operators to a function that given a breakpointValue and a width evaluates if the operator matches the values.
 *
 * @type {Record<WPViewportOperator, (breakpointValue: number, width: number) => boolean>}
 */
const OPERATOR_EVALUATORS = {
  '>=': (breakpointValue, width) => width >= breakpointValue,
  '<': (breakpointValue, width) => width < breakpointValue
};
const ViewportMatchWidthContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)( /** @type {null | number} */null);

/**
 * Returns true if the viewport matches the given query, or false otherwise.
 *
 * @param {WPBreakpoint}       breakpoint      Breakpoint size name.
 * @param {WPViewportOperator} [operator=">="] Viewport operator.
 *
 * @example
 *
 * ```js
 * useViewportMatch( 'huge', '<' );
 * useViewportMatch( 'medium' );
 * ```
 *
 * @return {boolean} Whether viewport matches query.
 */
const useViewportMatch = (breakpoint, operator = '>=') => {
  const simulatedWidth = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(ViewportMatchWidthContext);
  const mediaQuery = !simulatedWidth && `(${CONDITIONS[operator]}: ${BREAKPOINTS[breakpoint]}px)`;
  const mediaQueryResult = (0,_use_media_query__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(mediaQuery || undefined);
  if (simulatedWidth) {
    return OPERATOR_EVALUATORS[operator](BREAKPOINTS[breakpoint], simulatedWidth);
  }
  return mediaQueryResult;
};
useViewportMatch.__experimentalWidthProvider = ViewportMatchWidthContext.Provider;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useViewportMatch);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+keycodes@4.0.1/node_modules/@wordpress/keycodes/build-module/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fm: () => (/* binding */ ENTER),
/* harmony export */   G_: () => (/* binding */ BACKSPACE),
/* harmony export */   JF: () => (/* binding */ rawShortcut),
/* harmony export */   M3: () => (/* binding */ LEFT),
/* harmony export */   NS: () => (/* binding */ RIGHT),
/* harmony export */   PX: () => (/* binding */ DOWN),
/* harmony export */   SJ: () => (/* binding */ DELETE),
/* harmony export */   UP: () => (/* binding */ UP),
/* harmony export */   _A: () => (/* binding */ shortcutAriaLabel),
/* harmony export */   _f: () => (/* binding */ ESCAPE),
/* harmony export */   dz: () => (/* binding */ displayShortcut),
/* harmony export */   kx: () => (/* binding */ isKeyboardEvent),
/* harmony export */   t6: () => (/* binding */ SPACE),
/* harmony export */   wn: () => (/* binding */ TAB)
/* harmony export */ });
/* unused harmony exports PAGEUP, PAGEDOWN, END, HOME, F10, ALT, CTRL, COMMAND, SHIFT, ZERO, modifiers, displayShortcutList */
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+keycodes@4.0.1/node_modules/@wordpress/keycodes/build-module/platform.js");
/**
 * Note: The order of the modifier keys in many of the [foo]Shortcut()
 * functions in this file are intentional and should not be changed. They're
 * designed to fit with the standard menu keyboard shortcuts shown in the
 * user's platform.
 *
 * For example, on MacOS menu shortcuts will place Shift before Command, but
 * on Windows Control will usually come first. So don't provide your own
 * shortcut combos directly to keyboardShortcut().
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/** @typedef {typeof ALT | CTRL | COMMAND | SHIFT } WPModifierPart */

/** @typedef {'primary' | 'primaryShift' | 'primaryAlt' | 'secondary' | 'access' | 'ctrl' | 'alt' | 'ctrlShift' | 'shift' | 'shiftAlt' | 'undefined'} WPKeycodeModifier */

/**
 * An object of handler functions for each of the possible modifier
 * combinations. A handler will return a value for a given key.
 *
 * @template T
 *
 * @typedef {Record<WPKeycodeModifier, T>} WPModifierHandler
 */

/**
 * @template T
 *
 * @typedef {(character: string, isApple?: () => boolean) => T} WPKeyHandler
 */
/** @typedef {(event: import('react').KeyboardEvent<HTMLElement> | KeyboardEvent, character: string, isApple?: () => boolean) => boolean} WPEventKeyHandler */

/** @typedef {( isApple: () => boolean ) => WPModifierPart[]} WPModifier */

/**
 * Keycode for BACKSPACE key.
 */
const BACKSPACE = 8;

/**
 * Keycode for TAB key.
 */
const TAB = 9;

/**
 * Keycode for ENTER key.
 */
const ENTER = 13;

/**
 * Keycode for ESCAPE key.
 */
const ESCAPE = 27;

/**
 * Keycode for SPACE key.
 */
const SPACE = 32;

/**
 * Keycode for PAGEUP key.
 */
const PAGEUP = 33;

/**
 * Keycode for PAGEDOWN key.
 */
const PAGEDOWN = 34;

/**
 * Keycode for END key.
 */
const END = 35;

/**
 * Keycode for HOME key.
 */
const HOME = 36;

/**
 * Keycode for LEFT key.
 */
const LEFT = 37;

/**
 * Keycode for UP key.
 */
const UP = 38;

/**
 * Keycode for RIGHT key.
 */
const RIGHT = 39;

/**
 * Keycode for DOWN key.
 */
const DOWN = 40;

/**
 * Keycode for DELETE key.
 */
const DELETE = 46;

/**
 * Keycode for F10 key.
 */
const F10 = 121;

/**
 * Keycode for ALT key.
 */
const ALT = 'alt';

/**
 * Keycode for CTRL key.
 */
const CTRL = 'ctrl';

/**
 * Keycode for COMMAND/META key.
 */
const COMMAND = 'meta';

/**
 * Keycode for SHIFT key.
 */
const SHIFT = 'shift';

/**
 * Keycode for ZERO key.
 */
const ZERO = 48;


/**
 * Capitalise the first character of a string.
 * @param {string} string String to capitalise.
 * @return {string} Capitalised string.
 */
function capitaliseFirstCharacter(string) {
  return string.length < 2 ? string.toUpperCase() : string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Map the values of an object with a specified callback and return the result object.
 *
 * @template {{ [s: string]: any; } | ArrayLike<any>} T
 *
 * @param {T}                     object Object to map values of.
 * @param {( value: any ) => any} mapFn  Mapping function
 *
 * @return {any} Active modifier constants.
 */
function mapValues(object, mapFn) {
  return Object.fromEntries(Object.entries(object).map(([key, value]) => [key, mapFn(value)]));
}

/**
 * Object that contains functions that return the available modifier
 * depending on platform.
 *
 * @type {WPModifierHandler< ( isApple: () => boolean ) => WPModifierPart[]>}
 */
const modifiers = {
  primary: _isApple => _isApple() ? [COMMAND] : [CTRL],
  primaryShift: _isApple => _isApple() ? [SHIFT, COMMAND] : [CTRL, SHIFT],
  primaryAlt: _isApple => _isApple() ? [ALT, COMMAND] : [CTRL, ALT],
  secondary: _isApple => _isApple() ? [SHIFT, ALT, COMMAND] : [CTRL, SHIFT, ALT],
  access: _isApple => _isApple() ? [CTRL, ALT] : [SHIFT, ALT],
  ctrl: () => [CTRL],
  alt: () => [ALT],
  ctrlShift: () => [CTRL, SHIFT],
  shift: () => [SHIFT],
  shiftAlt: () => [SHIFT, ALT],
  undefined: () => []
};

/**
 * An object that contains functions to get raw shortcuts.
 *
 * These are intended for user with the KeyboardShortcuts.
 *
 * @example
 * ```js
 * // Assuming macOS:
 * rawShortcut.primary( 'm' )
 * // "meta+m""
 * ```
 *
 * @type {WPModifierHandler<WPKeyHandler<string>>} Keyed map of functions to raw
 *                                                 shortcuts.
 */
const rawShortcut = mapValues(modifiers, ( /** @type {WPModifier} */modifier) => {
  return /** @type {WPKeyHandler<string>} */(character, _isApple = _platform__WEBPACK_IMPORTED_MODULE_1__/* .isAppleOS */ .H) => {
    return [...modifier(_isApple), character.toLowerCase()].join('+');
  };
});

/**
 * Return an array of the parts of a keyboard shortcut chord for display.
 *
 * @example
 * ```js
 * // Assuming macOS:
 * displayShortcutList.primary( 'm' );
 * // [ "⌘", "M" ]
 * ```
 *
 * @type {WPModifierHandler<WPKeyHandler<string[]>>} Keyed map of functions to
 *                                                   shortcut sequences.
 */
const displayShortcutList = mapValues(modifiers, ( /** @type {WPModifier} */modifier) => {
  return /** @type {WPKeyHandler<string[]>} */(character, _isApple = _platform__WEBPACK_IMPORTED_MODULE_1__/* .isAppleOS */ .H) => {
    const isApple = _isApple();
    const replacementKeyMap = {
      [ALT]: isApple ? '⌥' : 'Alt',
      [CTRL]: isApple ? '⌃' : 'Ctrl',
      // Make sure ⌃ is the U+2303 UP ARROWHEAD unicode character and not the caret character.
      [COMMAND]: '⌘',
      [SHIFT]: isApple ? '⇧' : 'Shift'
    };
    const modifierKeys = modifier(_isApple).reduce((accumulator, key) => {
      var _replacementKeyMap$ke;
      const replacementKey = (_replacementKeyMap$ke = replacementKeyMap[key]) !== null && _replacementKeyMap$ke !== void 0 ? _replacementKeyMap$ke : key;
      // If on the Mac, adhere to platform convention and don't show plus between keys.
      if (isApple) {
        return [...accumulator, replacementKey];
      }
      return [...accumulator, replacementKey, '+'];
    }, /** @type {string[]} */[]);
    return [...modifierKeys, capitaliseFirstCharacter(character)];
  };
});

/**
 * An object that contains functions to display shortcuts.
 *
 * @example
 * ```js
 * // Assuming macOS:
 * displayShortcut.primary( 'm' );
 * // "⌘M"
 * ```
 *
 * @type {WPModifierHandler<WPKeyHandler<string>>} Keyed map of functions to
 *                                                 display shortcuts.
 */
const displayShortcut = mapValues(displayShortcutList, ( /** @type {WPKeyHandler<string[]>} */shortcutList) => {
  return /** @type {WPKeyHandler<string>} */(character, _isApple = _platform__WEBPACK_IMPORTED_MODULE_1__/* .isAppleOS */ .H) => shortcutList(character, _isApple).join('');
});

/**
 * An object that contains functions to return an aria label for a keyboard
 * shortcut.
 *
 * @example
 * ```js
 * // Assuming macOS:
 * shortcutAriaLabel.primary( '.' );
 * // "Command + Period"
 * ```
 *
 * @type {WPModifierHandler<WPKeyHandler<string>>} Keyed map of functions to
 *                                                 shortcut ARIA labels.
 */
const shortcutAriaLabel = mapValues(modifiers, ( /** @type {WPModifier} */modifier) => {
  return /** @type {WPKeyHandler<string>} */(character, _isApple = _platform__WEBPACK_IMPORTED_MODULE_1__/* .isAppleOS */ .H) => {
    const isApple = _isApple();
    /** @type {Record<string,string>} */
    const replacementKeyMap = {
      [SHIFT]: 'Shift',
      [COMMAND]: isApple ? 'Command' : 'Control',
      [CTRL]: 'Control',
      [ALT]: isApple ? 'Option' : 'Alt',
      /* translators: comma as in the character ',' */
      ',': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Comma'),
      /* translators: period as in the character '.' */
      '.': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Period'),
      /* translators: backtick as in the character '`' */
      '`': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Backtick'),
      /* translators: tilde as in the character '~' */
      '~': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Tilde')
    };
    return [...modifier(_isApple), character].map(key => {
      var _replacementKeyMap$ke2;
      return capitaliseFirstCharacter((_replacementKeyMap$ke2 = replacementKeyMap[key]) !== null && _replacementKeyMap$ke2 !== void 0 ? _replacementKeyMap$ke2 : key);
    }).join(isApple ? ' ' : ' + ');
  };
});

/**
 * From a given KeyboardEvent, returns an array of active modifier constants for
 * the event.
 *
 * @param {import('react').KeyboardEvent<HTMLElement> | KeyboardEvent} event Keyboard event.
 *
 * @return {Array<WPModifierPart>} Active modifier constants.
 */
function getEventModifiers(event) {
  return /** @type {WPModifierPart[]} */[ALT, CTRL, COMMAND, SHIFT].filter(key => event[( /** @type {'altKey' | 'ctrlKey' | 'metaKey' | 'shiftKey'} */
  `${key}Key`)]);
}

/**
 * An object that contains functions to check if a keyboard event matches a
 * predefined shortcut combination.
 *
 * @example
 * ```js
 * // Assuming an event for ⌘M key press:
 * isKeyboardEvent.primary( event, 'm' );
 * // true
 * ```
 *
 * @type {WPModifierHandler<WPEventKeyHandler>} Keyed map of functions
 *                                                       to match events.
 */
const isKeyboardEvent = mapValues(modifiers, ( /** @type {WPModifier} */getModifiers) => {
  return /** @type {WPEventKeyHandler} */(event, character, _isApple = _platform__WEBPACK_IMPORTED_MODULE_1__/* .isAppleOS */ .H) => {
    const mods = getModifiers(_isApple);
    const eventMods = getEventModifiers(event);
    /** @type {Record<string,string>} */
    const replacementWithShiftKeyMap = {
      Comma: ',',
      Backslash: '\\',
      // Windows returns `\` for both IntlRo and IntlYen.
      IntlRo: '\\',
      IntlYen: '\\'
    };
    const modsDiff = mods.filter(mod => !eventMods.includes(mod));
    const eventModsDiff = eventMods.filter(mod => !mods.includes(mod));
    if (modsDiff.length > 0 || eventModsDiff.length > 0) {
      return false;
    }
    let key = event.key.toLowerCase();
    if (!character) {
      return mods.includes( /** @type {WPModifierPart} */key);
    }
    if (event.altKey && character.length === 1) {
      key = String.fromCharCode(event.keyCode).toLowerCase();
    }

    // `event.key` returns the value of the key pressed, taking into the state of
    // modifier keys such as `Shift`. If the shift key is pressed, a different
    // value may be returned depending on the keyboard layout. It is necessary to
    // convert to the physical key value that don't take into account keyboard
    // layout or modifier key state.
    if (event.shiftKey && character.length === 1 && replacementWithShiftKeyMap[event.code]) {
      key = replacementWithShiftKeyMap[event.code];
    }

    // For backwards compatibility.
    if (character === 'del') {
      character = 'delete';
    }
    return key === character.toLowerCase();
  };
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+keycodes@4.0.1/node_modules/@wordpress/keycodes/build-module/platform.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ isAppleOS)
/* harmony export */ });
/**
 * Return true if platform is MacOS.
 *
 * @param {Window?} _window window object by default; used for DI testing.
 *
 * @return {boolean} True if MacOS; false otherwise.
 */
function isAppleOS(_window = null) {
  if (!_window) {
    if (typeof window === 'undefined') {
      return false;
    }
    _window = window;
  }
  const {
    platform
  } = _window.navigator;
  return platform.indexOf('Mac') !== -1 || ['iPad', 'iPhone'].includes(platform);
}
//# sourceMappingURL=platform.js.map

/***/ })

}]);