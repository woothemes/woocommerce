"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[5966],{

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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/form-toggle/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports noop, FormToggle */
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
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


const noop = () => {};

/**
 * FormToggle switches a single setting on or off.
 *
 * ```jsx
 * import { FormToggle } from '@wordpress/components';
 * import { useState } from '@wordpress/element';
 *
 * const MyFormToggle = () => {
 *   const [ isChecked, setChecked ] = useState( true );
 *
 *   return (
 *     <FormToggle
 *       checked={ isChecked }
 *       onChange={ () => setChecked( ( state ) => ! state ) }
 *     />
 *   );
 * };
 * ```
 */
function FormToggle(props, ref) {
  const {
    className,
    checked,
    id,
    disabled,
    onChange = noop,
    ...additionalProps
  } = props;
  const wrapperClasses = (0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('components-form-toggle', className, {
    'is-checked': checked,
    'is-disabled': disabled
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
    className: wrapperClasses,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
      className: "components-form-toggle__input",
      id: id,
      type: "checkbox",
      checked: checked,
      onChange: onChange,
      disabled: disabled,
      ...additionalProps,
      ref: ref
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
      className: "components-form-toggle__track"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
      className: "components-form-toggle__thumb"
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(FormToggle));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/navigable-container/menu.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (/* binding */ menu)
});

// UNUSED EXPORTS: NavigableMenu, UnforwardedNavigableMenu

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+dom@4.0.1/node_modules/@wordpress/dom/build-module/index.js + 2 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+dom@4.0.1/node_modules/@wordpress/dom/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/navigable-container/container.js
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
const MENU_ITEM_ROLES = ['menuitem', 'menuitemradio', 'menuitemcheckbox'];
function cycleValue(value, total, offset) {
  const nextValue = value + offset;
  if (nextValue < 0) {
    return total + nextValue;
  } else if (nextValue >= total) {
    return nextValue - total;
  }
  return nextValue;
}
class NavigableContainer extends react.Component {
  constructor(args) {
    super(args);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.bindContainer = this.bindContainer.bind(this);
    this.getFocusableContext = this.getFocusableContext.bind(this);
    this.getFocusableIndex = this.getFocusableIndex.bind(this);
  }
  componentDidMount() {
    if (!this.container) {
      return;
    }

    // We use DOM event listeners instead of React event listeners
    // because we want to catch events from the underlying DOM tree
    // The React Tree can be different from the DOM tree when using
    // portals. Block Toolbars for instance are rendered in a separate
    // React Trees.
    this.container.addEventListener('keydown', this.onKeyDown);
  }
  componentWillUnmount() {
    if (!this.container) {
      return;
    }
    this.container.removeEventListener('keydown', this.onKeyDown);
  }
  bindContainer(ref) {
    const {
      forwardedRef
    } = this.props;
    this.container = ref;
    if (typeof forwardedRef === 'function') {
      forwardedRef(ref);
    } else if (forwardedRef && 'current' in forwardedRef) {
      forwardedRef.current = ref;
    }
  }
  getFocusableContext(target) {
    if (!this.container) {
      return null;
    }
    const {
      onlyBrowserTabstops
    } = this.props;
    const finder = onlyBrowserTabstops ? build_module/* focus */.XC.tabbable : build_module/* focus */.XC.focusable;
    const focusables = finder.find(this.container);
    const index = this.getFocusableIndex(focusables, target);
    if (index > -1 && target) {
      return {
        index,
        target,
        focusables
      };
    }
    return null;
  }
  getFocusableIndex(focusables, target) {
    return focusables.indexOf(target);
  }
  onKeyDown(event) {
    if (this.props.onKeyDown) {
      this.props.onKeyDown(event);
    }
    const {
      getFocusableContext
    } = this;
    const {
      cycle = true,
      eventToOffset,
      onNavigate = noop,
      stopNavigationEvents
    } = this.props;
    const offset = eventToOffset(event);

    // eventToOffset returns undefined if the event is not handled by the component.
    if (offset !== undefined && stopNavigationEvents) {
      // Prevents arrow key handlers bound to the document directly interfering.
      event.stopImmediatePropagation();

      // When navigating a collection of items, prevent scroll containers
      // from scrolling. The preventDefault also prevents Voiceover from
      // 'handling' the event, as voiceover will try to use arrow keys
      // for highlighting text.
      const targetRole = event.target?.getAttribute('role');
      const targetHasMenuItemRole = !!targetRole && MENU_ITEM_ROLES.includes(targetRole);
      if (targetHasMenuItemRole) {
        event.preventDefault();
      }
    }
    if (!offset) {
      return;
    }
    const activeElement = event.target?.ownerDocument?.activeElement;
    if (!activeElement) {
      return;
    }
    const context = getFocusableContext(activeElement);
    if (!context) {
      return;
    }
    const {
      index,
      focusables
    } = context;
    const nextIndex = cycle ? cycleValue(index, focusables.length, offset) : index + offset;
    if (nextIndex >= 0 && nextIndex < focusables.length) {
      focusables[nextIndex].focus();
      onNavigate(nextIndex, focusables[nextIndex]);

      // `preventDefault()` on tab to avoid having the browser move the focus
      // after this component has already moved it.
      if (event.code === 'Tab') {
        event.preventDefault();
      }
    }
  }
  render() {
    const {
      children,
      stopNavigationEvents,
      eventToOffset,
      onNavigate,
      onKeyDown,
      cycle,
      onlyBrowserTabstops,
      forwardedRef,
      ...restProps
    } = this.props;
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      ref: this.bindContainer,
      ...restProps,
      children: children
    });
  }
}
const forwardedNavigableContainer = (props, ref) => {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(NavigableContainer, {
    ...props,
    forwardedRef: ref
  });
};
forwardedNavigableContainer.displayName = 'NavigableContainer';
/* harmony default export */ const container = ((0,react.forwardRef)(forwardedNavigableContainer));
//# sourceMappingURL=container.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/navigable-container/menu.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


function UnforwardedNavigableMenu({
  role = 'menu',
  orientation = 'vertical',
  ...rest
}, ref) {
  const eventToOffset = evt => {
    const {
      code
    } = evt;
    let next = ['ArrowDown'];
    let previous = ['ArrowUp'];
    if (orientation === 'horizontal') {
      next = ['ArrowRight'];
      previous = ['ArrowLeft'];
    }
    if (orientation === 'both') {
      next = ['ArrowRight', 'ArrowDown'];
      previous = ['ArrowLeft', 'ArrowUp'];
    }
    if (next.includes(code)) {
      return 1;
    } else if (previous.includes(code)) {
      return -1;
    } else if (['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(code)) {
      // Key press should be handled, e.g. have event propagation and
      // default behavior handled by NavigableContainer but not result
      // in an offset.
      return 0;
    }
    return undefined;
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(container, {
    ref: ref,
    stopNavigationEvents: true,
    onlyBrowserTabstops: false,
    role: role,
    "aria-orientation": role !== 'presentation' && (orientation === 'vertical' || orientation === 'horizontal') ? orientation : undefined,
    eventToOffset: eventToOffset,
    ...rest
  });
}

/**
 * A container for a navigable menu.
 *
 *  ```jsx
 *  import {
 *    NavigableMenu,
 *    Button,
 *  } from '@wordpress/components';
 *
 *  function onNavigate( index, target ) {
 *    console.log( `Navigates to ${ index }`, target );
 *  }
 *
 *  const MyNavigableContainer = () => (
 *    <div>
 *      <span>Navigable Menu:</span>
 *      <NavigableMenu onNavigate={ onNavigate } orientation="horizontal">
 *        <Button variant="secondary">Item 1</Button>
 *        <Button variant="secondary">Item 2</Button>
 *        <Button variant="secondary">Item 3</Button>
 *      </NavigableMenu>
 *    </div>
 *  );
 *  ```
 */
const NavigableMenu = (0,react.forwardRef)(UnforwardedNavigableMenu);
/* harmony default export */ const menu = (NavigableMenu);
//# sourceMappingURL=menu.js.map

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

/***/ "../../packages/js/components/src/ellipsis-menu/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/navigable-container/menu.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/dropdown/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var gridicons_dist_ellipsis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/gridicons@3.4.2_react@18.3.1/node_modules/gridicons/dist/ellipsis.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * External dependencies
 */







/**
 * This is a dropdown menu hidden behind a vertical ellipsis icon. When clicked, the inner MenuItems are displayed.
 */

var EllipsisMenu = function EllipsisMenu(_ref) {
  var label = _ref.label,
    renderContent = _ref.renderContent,
    className = _ref.className,
    onToggle = _ref.onToggle,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? 'bottom-start' : _ref$placement;
  if (!renderContent) {
    return null;
  }
  var renderEllipsis = function renderEllipsis(_ref2) {
    var toggleHandlerOverride = _ref2.onToggle,
      isOpen = _ref2.isOpen;
    var toggleClassname = classnames__WEBPACK_IMPORTED_MODULE_0___default()('woocommerce-ellipsis-menu__toggle', {
      'is-opened': isOpen
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
      className: toggleClassname,
      onClick: function onClick(e) {
        if (onToggle) {
          onToggle(e);
        }
        if (toggleHandlerOverride) {
          toggleHandlerOverride();
        }
      },
      title: label,
      "aria-expanded": isOpen,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(gridicons_dist_ellipsis__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {})
      })
    });
  };
  var renderMenu = function renderMenu(renderContentArgs) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay, {
      className: "woocommerce-ellipsis-menu__content",
      children: renderContent(renderContentArgs)
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, 'woocommerce-ellipsis-menu'),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      contentClassName: "woocommerce-ellipsis-menu__popover",
      popoverProps: {
        placement: placement
      },
      renderToggle: renderEllipsis,
      renderContent: renderMenu
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EllipsisMenu);
try {
    // @ts-ignore
    ellipsismenu.displayName = "ellipsismenu";
    // @ts-ignore
    ellipsismenu.__docgenInfo = { "description": "This is a dropdown menu hidden behind a vertical ellipsis icon. When clicked, the inner MenuItems are displayed.", "displayName": "ellipsismenu", "props": { "label": { "defaultValue": null, "description": "The label shown when hovering/focusing on the icon button.", "name": "label", "required": true, "type": { "name": "string" } }, "renderContent": { "defaultValue": null, "description": "A function returning `MenuTitle`/`MenuItem` components as a render prop. Arguments from Dropdown passed as function arguments.", "name": "renderContent", "required": false, "type": { "name": "((props: CallbackProps) => Element | ReactNode)" } }, "className": { "defaultValue": null, "description": "Classname to add to ellipsis menu.", "name": "className", "required": false, "type": { "name": "string" } }, "onToggle": { "defaultValue": null, "description": "Callback function when dropdown button is clicked, it provides the click event.", "name": "onToggle", "required": false, "type": { "name": "((e: MouseEvent<Element, MouseEvent> | KeyboardEvent<Element>) => void)" } }, "placement": { "defaultValue": { value: "bottom-start" }, "description": "Placement of the dropdown menu. Default is 'bottom-start'.", "name": "placement", "required": false, "type": { "name": "any" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/ellipsis-menu/index.tsx#ellipsismenu"] = { docgenInfo: ellipsismenu.__docgenInfo, name: "ellipsismenu", path: "../../packages/js/components/src/ellipsis-menu/index.tsx#ellipsismenu" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../packages/js/components/src/ellipsis-menu/menu-item.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/base-control/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/form-toggle/index.js");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+keycodes@4.0.1/node_modules/@wordpress/keycodes/build-module/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * External dependencies
 */




var MenuItem = function MenuItem(_ref) {
  var checked = _ref.checked,
    children = _ref.children,
    _ref$isCheckbox = _ref.isCheckbox,
    isCheckbox = _ref$isCheckbox === void 0 ? false : _ref$isCheckbox,
    _ref$isClickable = _ref.isClickable,
    isClickable = _ref$isClickable === void 0 ? false : _ref$isClickable,
    _ref$onInvoke = _ref.onInvoke,
    onInvoke = _ref$onInvoke === void 0 ? function () {} : _ref$onInvoke;
  var container = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var onClick = function onClick(event) {
    if (isClickable) {
      event.preventDefault();
      onInvoke();
    }
  };
  var onKeyDown = function onKeyDown(event) {
    var eventTarget = event.target;
    if (eventTarget.isSameNode(event.currentTarget)) {
      if (event.keyCode === _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2__/* .ENTER */ .Fm || event.keyCode === _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2__/* .SPACE */ .t6) {
        event.preventDefault();
        onInvoke();
      }
      if (event.keyCode === _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2__.UP) {
        event.preventDefault();
      }
      if (event.keyCode === _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2__/* .DOWN */ .PX) {
        var _eventTarget$parentNo;
        event.preventDefault();
        var nextElementToFocus = eventTarget.nextSibling || ((_eventTarget$parentNo = eventTarget.parentNode) === null || _eventTarget$parentNo === void 0 ? void 0 : _eventTarget$parentNo.querySelector('.woocommerce-ellipsis-menu__item'));
        nextElementToFocus.focus();
      }
    }
  };
  if (isCheckbox) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      "aria-checked": checked,
      ref: container,
      role: "menuitemcheckbox",
      tabIndex: 0,
      onKeyDown: onKeyDown,
      onClick: onClick,
      className: "woocommerce-ellipsis-menu__item",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Ay, {
        className: "components-toggle-control",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
          "aria-hidden": "true",
          checked: checked,
          onChange: onInvoke,
          onClick: function onClick(e) {
            return e.stopPropagation();
          },
          tabIndex: -1
        }), children]
      })
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    role: "menuitem",
    tabIndex: 0,
    onKeyDown: onKeyDown,
    onClick: onClick,
    className: "woocommerce-ellipsis-menu__item",
    children: children
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuItem);
try {
    // @ts-ignore
    menuitem.displayName = "menuitem";
    // @ts-ignore
    menuitem.__docgenInfo = { "description": "", "displayName": "menuitem", "props": { "checked": { "defaultValue": null, "description": "Whether the menu item is checked or not. Only relevant for menu items with `isCheckbox`.", "name": "checked", "required": false, "type": { "name": "boolean" } }, "children": { "defaultValue": null, "description": "A renderable component (or string) which will be displayed as the content of this item. Generally a `ToggleControl`.", "name": "children", "required": false, "type": { "name": "ReactNode" } }, "isCheckbox": { "defaultValue": { value: "false" }, "description": "Whether the menu item is a checkbox (will render a FormToggle and use the `menuitemcheckbox` role).", "name": "isCheckbox", "required": false, "type": { "name": "boolean" } }, "isClickable": { "defaultValue": { value: "false" }, "description": "Boolean to control whether the MenuItem should handle the click event. Defaults to false, assuming your child component\nhandles the click event.", "name": "isClickable", "required": false, "type": { "name": "boolean" } }, "onInvoke": { "defaultValue": { value: "() => {}" }, "description": "A function called when this item is activated via keyboard ENTER or SPACE; or when the item is clicked\n(only if `isClickable` is set).", "name": "onInvoke", "required": false, "type": { "name": "(() => void)" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/ellipsis-menu/menu-item.tsx#menuitem"] = { docgenInfo: menuitem.__docgenInfo, name: "menuitem", path: "../../packages/js/components/src/ellipsis-menu/menu-item.tsx#menuitem" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../packages/js/components/src/ellipsis-menu/menu-title.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * External dependencies
 */



/**
 * `MenuTitle` is another valid Menu child, but this does not have any accessibility attributes associated
 * (so this should not be used in place of the `EllipsisMenu` prop `label`).
 */

var MenuTitle = function MenuTitle(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "woocommerce-ellipsis-menu__title",
    children: children
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuTitle);
try {
    // @ts-ignore
    menutitle.displayName = "menutitle";
    // @ts-ignore
    menutitle.__docgenInfo = { "description": "`MenuTitle` is another valid Menu child, but this does not have any accessibility attributes associated\n(so this should not be used in place of the `EllipsisMenu` prop `label`).", "displayName": "menutitle", "props": { "children": { "defaultValue": null, "description": "A renderable component (or string) which will be displayed as the content of this item.", "name": "children", "required": true, "type": { "name": "ReactNode" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/ellipsis-menu/menu-title.tsx#menutitle"] = { docgenInfo: menutitle.__docgenInfo, name: "menutitle", path: "../../packages/js/components/src/ellipsis-menu/menu-title.tsx#menutitle" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../node_modules/.pnpm/gridicons@3.4.2_react@18.3.1/node_modules/gridicons/dist/cross-small.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
__webpack_unused_export__ = ({value:!0}),exports.A=_default;var _react=_interopRequireDefault(__webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js")),_excluded=["size","onClick","icon","className"];function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _extends(){return _extends=Object.assign?Object.assign.bind():function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function _default(a){var b=a.size,c=void 0===b?24:b,d=a.onClick,e=a.icon,f=a.className,g=_objectWithoutProperties(a,_excluded),h=["gridicon","gridicons-cross-small",f,!1,!1,!1].filter(Boolean).join(" ");return _react["default"].createElement("svg",_extends({className:h,height:c,width:c,onClick:d},g,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M17.705 7.705l-1.41-1.41L12 10.59 7.705 6.295l-1.41 1.41L10.59 12l-4.295 4.295 1.41 1.41L12 13.41l4.295 4.295 1.41-1.41L13.41 12l4.295-4.295z"})))}


/***/ }),

/***/ "../../node_modules/.pnpm/gridicons@3.4.2_react@18.3.1/node_modules/gridicons/dist/ellipsis.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
__webpack_unused_export__ = ({value:!0}),exports.A=_default;var _react=_interopRequireDefault(__webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js")),_excluded=["size","onClick","icon","className"];function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _extends(){return _extends=Object.assign?Object.assign.bind():function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function _default(a){var b=a.size,c=void 0===b?24:b,d=a.onClick,e=a.icon,f=a.className,g=_objectWithoutProperties(a,_excluded),h=["gridicon","gridicons-ellipsis",f,!1,!1,!1].filter(Boolean).join(" ");return _react["default"].createElement("svg",_extends({className:h,height:c,width:c,onClick:d},g,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M7 12a2 2 0 11-4.001-.001A2 2 0 017 12zm12-2a2 2 0 10.001 4.001A2 2 0 0019 10zm-7 0a2 2 0 10.001 4.001A2 2 0 0012 10z"})))}


/***/ }),

/***/ "../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ "../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js");
} else {}


/***/ }),

/***/ "../../packages/js/components/src/ellipsis-menu/stories/ellipsis-menu.story.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Basic: () => (/* binding */ Basic),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var gridicons_dist_cross_small__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/gridicons@3.4.2_react@18.3.1/node_modules/gridicons/dist/cross-small.js");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../packages/js/components/src/ellipsis-menu/index.tsx");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../packages/js/components/src/ellipsis-menu/menu-title.tsx");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../packages/js/components/src/ellipsis-menu/menu-item.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");

/**
 * External dependencies
 */





var ExampleEllipsisMenu = function ExampleEllipsisMenu() {
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)({
      showCustomers: true,
      showOrders: true
    }),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_useState, 2),
    _useState2$ = _useState2[0],
    showCustomers = _useState2$.showCustomers,
    showOrders = _useState2$.showOrders,
    setState = _useState2[1];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    label: "Choose which analytics to display",
    renderContent: function renderContent(_ref) {
      var onToggle = _ref.onToggle;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
          children: "Display stats"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
          isCheckbox: true,
          isClickable: true,
          checked: showCustomers,
          onInvoke: function onInvoke() {
            return setState({
              showOrders: showOrders,
              showCustomers: !showCustomers
            });
          },
          children: "Show Customers"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
          isCheckbox: true,
          isClickable: true,
          checked: showOrders,
          onInvoke: function onInvoke() {
            return setState({
              showCustomers: showCustomers,
              showOrders: !showOrders
            });
          },
          children: "Show Orders"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
          isClickable: true,
          onInvoke: onToggle,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(gridicons_dist_cross_small__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, {})
          }), "Close Menu"]
        })]
      });
    }
  });
};
var Basic = function Basic() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ExampleEllipsisMenu, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'Components/EllipsisMenu',
  component: _woocommerce_components__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A
});
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "() => <ExampleEllipsisMenu />",
      ...Basic.parameters?.docs?.source
    }
  }
};

/***/ })

}]);