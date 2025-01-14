"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[4322],{

/***/ "../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/dropdown/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Dropdown */
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+deprecated@4.0.1/node_modules/@wordpress/deprecated/build-module/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/use-context-system.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-connect.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js");
/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/popover/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */





const UnconnectedDropdown = (props, forwardedRef) => {
  const {
    renderContent,
    renderToggle,
    className,
    contentClassName,
    expandOnMobile,
    headerTitle,
    focusOnMount,
    popoverProps,
    onClose,
    onToggle,
    style,
    open,
    defaultOpen,
    // Deprecated props
    position,
    // From context system
    variant
  } = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .useContextSystem */ .A)(props, 'Dropdown');
  if (position !== undefined) {
    (0,_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)('`position` prop in wp.components.Dropdown', {
      since: '6.2',
      alternative: '`popoverProps.placement` prop',
      hint: 'Note that the `position` prop will override any values passed through the `popoverProps.placement` prop.'
    });
  }

  // Use internal state instead of a ref to make sure that the component
  // re-renders when the popover's anchor updates.
  const [fallbackPopoverAnchor, setFallbackPopoverAnchor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const containerRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  const [isOpen, setIsOpen] = (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useControlledValue */ .j)({
    defaultValue: defaultOpen,
    value: open,
    onChange: onToggle
  });

  /**
   * Closes the popover when focus leaves it unless the toggle was pressed or
   * focus has moved to a separate dialog. The former is to let the toggle
   * handle closing the popover and the latter is to preserve presence in
   * case a dialog has opened, allowing focus to return when it's dismissed.
   */
  function closeIfFocusOutside() {
    if (!containerRef.current) {
      return;
    }
    const {
      ownerDocument
    } = containerRef.current;
    const dialog = ownerDocument?.activeElement?.closest('[role="dialog"]');
    if (!containerRef.current.contains(ownerDocument.activeElement) && (!dialog || dialog.contains(containerRef.current))) {
      close();
    }
  }
  function close() {
    onClose?.();
    setIsOpen(false);
  }
  const args = {
    isOpen: !!isOpen,
    onToggle: () => setIsOpen(!isOpen),
    onClose: close
  };
  const popoverPropsHaveAnchor = !!popoverProps?.anchor ||
  // Note: `anchorRef`, `getAnchorRect` and `anchorRect` are deprecated and
  // be removed from `Popover` from WordPress 6.3
  !!popoverProps?.anchorRef || !!popoverProps?.getAnchorRect || !!popoverProps?.anchorRect;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: className,
    ref: (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)([containerRef, forwardedRef, setFallbackPopoverAnchor])
    // Some UAs focus the closest focusable parent when the toggle is
    // clicked. Making this div focusable ensures such UAs will focus
    // it and `closeIfFocusOutside` can tell if the toggle was clicked.
    ,
    tabIndex: -1,
    style: style,
    children: [renderToggle(args), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_popover__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay, {
      position: position,
      onClose: close,
      onFocusOutside: closeIfFocusOutside,
      expandOnMobile: expandOnMobile,
      headerTitle: headerTitle,
      focusOnMount: focusOnMount
      // This value is used to ensure that the dropdowns
      // align with the editor header by default.
      ,
      offset: 13,
      anchor: !popoverPropsHaveAnchor ? fallbackPopoverAnchor : undefined,
      variant: variant,
      ...popoverProps,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)('components-dropdown__content', popoverProps?.className, contentClassName),
      children: renderContent(args)
    })]
  });
};

/**
 * Renders a button that opens a floating content modal when clicked.
 *
 * ```jsx
 * import { Button, Dropdown } from '@wordpress/components';
 *
 * const MyDropdown = () => (
 *   <Dropdown
 *     className="my-container-class-name"
 *     contentClassName="my-dropdown-content-classname"
 *     popoverProps={ { placement: 'bottom-start' } }
 *     renderToggle={ ( { isOpen, onToggle } ) => (
 *       <Button
 *         variant="primary"
 *         onClick={ onToggle }
 *         aria-expanded={ isOpen }
 *       >
 *         Toggle Dropdown!
 *       </Button>
 *     ) }
 *     renderContent={ () => <div>This is the content of the dropdown.</div> }
 *   />
 * );
 * ```
 */
const Dropdown = (0,_context__WEBPACK_IMPORTED_MODULE_8__/* .contextConnect */ .KZ)(UnconnectedDropdown, 'Dropdown');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":
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

/***/ "../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-left.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * WordPress dependencies
 */


const chevronLeft = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .SVG */ .t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .Path */ .wA, {
    d: "M14.6 7l-1.2-1L8 12l5.4 6 1.2-1-4.6-5z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chevronLeft);
//# sourceMappingURL=chevron-left.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/engine-is-bun.js":
/***/ ((module) => {


/* global Bun -- Bun case */
module.exports = typeof Bun == 'function' && Bun && typeof Bun.version == 'string';


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

/***/ "../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/TransitionGroup.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ esm_TransitionGroup)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/extends.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js + 1 modules
var inheritsLoose = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/TransitionGroupContext.js
var TransitionGroupContext = __webpack_require__("../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/TransitionGroupContext.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/utils/ChildMapping.js

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0,react.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0,react.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0,react.isValidElement)(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = (0,react.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0,react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0,react.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0,react.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0,react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/TransitionGroup.js









var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* default */.A)(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = (0,esm_extends/* default */.A)({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = (0,objectWithoutPropertiesLoose/* default */.A)(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/react.createElement(TransitionGroupContext/* default */.A.Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/react.createElement(TransitionGroupContext/* default */.A.Provider, {
      value: contextValue
    }, /*#__PURE__*/react.createElement(Component, props, children));
  };

  return TransitionGroup;
}(react.Component);

TransitionGroup.propTypes =  false ? 0 : {};
TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ const esm_TransitionGroup = (TransitionGroup);

/***/ })

}]);