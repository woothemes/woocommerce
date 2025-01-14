"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[4638],{

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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/index.js":
/***/ (() => {

// Primitives.


// Components.























































































































// Higher-Order Components.









// Private APIs.

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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/text/component.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Text */
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-connect.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/view/component.js");
/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/text/hook.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * Internal dependencies
 */





/**
 * @param props
 * @param forwardedRef
 */
function UnconnectedText(props, forwardedRef) {
  const textProps = (0,_hook__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(props);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_view__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    as: "span",
    ...textProps,
    ref: forwardedRef
  });
}

/**
 * `Text` is a core component that renders text in the library, using the
 * library's typography system.
 *
 * `Text` can be used to render any text-content, like an HTML `p` or `span`.
 *
 * @example
 *
 * ```jsx
 * import { __experimentalText as Text } from `@wordpress/components`;
 *
 * function Example() {
 * 	return <Text>Code is Poetry</Text>;
 * }
 * ```
 */
const Text = (0,_context__WEBPACK_IMPORTED_MODULE_3__/* .contextConnect */ .KZ)(UnconnectedText, 'Text');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/colors-values.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ COLORS)
/* harmony export */ });
/**
 * Internal dependencies
 */
const white = '#fff';

// Matches the grays in @wordpress/base-styles
const GRAY = {
  900: '#1e1e1e',
  800: '#2f2f2f',
  /** Meets 4.6:1 text contrast against white. */
  700: '#757575',
  /** Meets 3:1 UI or large text contrast against white. */
  600: '#949494',
  400: '#ccc',
  /** Used for most borders. */
  300: '#ddd',
  /** Used sparingly for light borders. */
  200: '#e0e0e0',
  /** Used for light gray backgrounds. */
  100: '#f0f0f0'
};

// Matches @wordpress/base-styles
const ALERT = {
  yellow: '#f0b849',
  red: '#d94f4f',
  green: '#4ab866'
};

// Should match packages/components/src/utils/theme-variables.scss
const THEME = {
  accent: `var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9))`,
  accentDarker10: `var(--wp-components-color-accent-darker-10, var(--wp-admin-theme-color-darker-10, #2145e6))`,
  accentDarker20: `var(--wp-components-color-accent-darker-20, var(--wp-admin-theme-color-darker-20, #183ad6))`,
  /** Used when placing text on the accent color. */
  accentInverted: `var(--wp-components-color-accent-inverted, ${white})`,
  background: `var(--wp-components-color-background, ${white})`,
  foreground: `var(--wp-components-color-foreground, ${GRAY[900]})`,
  /** Used when placing text on the foreground color. */
  foregroundInverted: `var(--wp-components-color-foreground-inverted, ${white})`,
  gray: {
    /** @deprecated Use `COLORS.theme.foreground` instead. */
    900: `var(--wp-components-color-foreground, ${GRAY[900]})`,
    800: `var(--wp-components-color-gray-800, ${GRAY[800]})`,
    700: `var(--wp-components-color-gray-700, ${GRAY[700]})`,
    600: `var(--wp-components-color-gray-600, ${GRAY[600]})`,
    400: `var(--wp-components-color-gray-400, ${GRAY[400]})`,
    300: `var(--wp-components-color-gray-300, ${GRAY[300]})`,
    200: `var(--wp-components-color-gray-200, ${GRAY[200]})`,
    100: `var(--wp-components-color-gray-100, ${GRAY[100]})`
  }
};
const UI = {
  background: THEME.background,
  backgroundDisabled: THEME.gray[100],
  border: THEME.gray[600],
  borderHover: THEME.gray[700],
  borderFocus: THEME.accent,
  borderDisabled: THEME.gray[400],
  textDisabled: THEME.gray[600],
  // Matches @wordpress/base-styles
  darkGrayPlaceholder: `color-mix(in srgb, ${THEME.foreground}, transparent 38%)`,
  lightGrayPlaceholder: `color-mix(in srgb, ${THEME.background}, transparent 35%)`
};
const COLORS = Object.freeze({
  /**
   * The main gray color object.
   *
   * @deprecated Use semantic aliases in `COLORS.ui` or theme-ready variables in `COLORS.theme.gray`.
   */
  gray: GRAY,
  // TODO: Stop exporting this when everything is migrated to `theme` or `ui`
  white,
  alert: ALERT,
  /**
   * Theme-ready variables with fallbacks.
   *
   * Prefer semantic aliases in `COLORS.ui` when applicable.
   */
  theme: THEME,
  /**
   * Semantic aliases (prefer these over raw variables when applicable).
   */
  ui: UI
});
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (COLORS)));
//# sourceMappingURL=colors-values.js.map

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

/***/ "../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/check.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * WordPress dependencies
 */


const check = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .SVG */ .t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .Path */ .wA, {
    d: "M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (check);
//# sourceMappingURL=check.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-down.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * WordPress dependencies
 */


const chevronDown = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .SVG */ .t4, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .Path */ .wA, {
    d: "M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chevronDown);
//# sourceMappingURL=chevron-down.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-up.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * WordPress dependencies
 */


const chevronUp = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .SVG */ .t4, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .Path */ .wA, {
    d: "M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chevronUp);
//# sourceMappingURL=chevron-up.js.map

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

/***/ "../../packages/js/experimental/src/vertical-css-transition/vertical-css-transition.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ VerticalCSSTransition)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");

























var _excluded = ["children", "defaultStyle"];
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}


function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
/**
 * External dependencies
 */



function getContainerHeight(container) {
  var containerHeight = 0;
  var _iterator = _createForOfIteratorHelper(container.children),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var child = _step.value;
      containerHeight += child.clientHeight;
      var style = window.getComputedStyle(child);
      containerHeight += parseInt(style.marginTop, 10) || 0;
      containerHeight += parseInt(style.marginBottom, 10) || 0;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return containerHeight;
}

/**
 * VerticalCSSTransition is a wrapper for CSSTransition, automatically adding a vertical height transition.
 * The maxHeight is calculated through JS, something CSS does not support.
 */
var VerticalCSSTransition = function VerticalCSSTransition(_ref) {
  var _children = _ref.children,
    defaultStyle = _ref.defaultStyle,
    props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A)(_ref, _excluded);
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_27__.useState)(0),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A)(_useState, 2),
    containerHeight = _useState2[0],
    setContainerHeight = _useState2[1];
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_27__.useState)(props["in"] || false),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A)(_useState3, 2),
    transitionIn = _useState4[0],
    setTransitionIn = _useState4[1];
  var cssTransitionRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_27__.useRef)(null);
  var collapseContainerRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_27__.useCallback)(function (containerElement) {
    if (containerElement) {
      setContainerHeight(getContainerHeight(containerElement));
    }
  }, [_children]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_27__.useEffect)(function () {
    setTransitionIn(props["in"] || false);
  }, [props["in"]]);
  var getTimeouts = function getTimeouts() {
    var timeout = props.timeout;
    var exit, enter, appear;
    if (typeof timeout === 'number') {
      exit = enter = appear = timeout;
    }
    if (timeout !== undefined && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter;
      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }
    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };
  var transitionStyles = {
    entered: {
      maxHeight: containerHeight
    },
    entering: {
      maxHeight: containerHeight
    },
    exiting: {
      maxHeight: 0
    },
    exited: {
      maxHeight: 0
    }
  };
  var getTransitionStyle = function getTransitionStyle(state) {
    var timeouts = getTimeouts();
    var appearing = cssTransitionRef.current && cssTransitionRef.current.context && cssTransitionRef.current.context.isMounting;
    var duration;
    if (state.startsWith('enter')) {
      duration = timeouts[appearing ? 'enter' : 'appear'];
    } else {
      duration = timeouts.exit;
    }
    var styles = _objectSpread(_objectSpread({
      transitionProperty: 'max-height',
      transitionDuration: duration === undefined ? '500ms' : duration + 'ms',
      overflow: 'hidden'
    }, defaultStyle || {}), state in transitionStyles ? transitionStyles[state] : {});
    // only include transition styles when entering or exiting.
    if (state !== 'entering' && state !== 'exiting') {
      delete styles.transitionDuration;
      delete styles.transition;
      delete styles.transitionProperty;
    }
    // Remove maxHeight when entered, so we do not need to worry about nested items changing height while expanded.
    if (state === 'entered' && props["in"]) {
      delete styles.maxHeight;
    }
    return styles;
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(react_transition_group__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A, _objectSpread(_objectSpread({}, props), {}, {
    "in": transitionIn,
    ref: cssTransitionRef,
    children: function children(state) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)("div", {
        className: "vertical-css-transition-container",
        style: getTransitionStyle(state),
        ref: collapseContainerRef,
        children: _children
      });
    }
  }));
};
try {
    // @ts-ignore
    VerticalCSSTransition.displayName = "VerticalCSSTransition";
    // @ts-ignore
    VerticalCSSTransition.__docgenInfo = { "description": "VerticalCSSTransition is a wrapper for CSSTransition, automatically adding a vertical height transition.\nThe maxHeight is calculated through JS, something CSS does not support.", "displayName": "VerticalCSSTransition", "props": { "classNames": { "defaultValue": null, "description": "The animation `classNames` applied to the component as it enters or exits.\nA single name can be provided and it will be suffixed for each stage: e.g.\n\n`classNames=\"fade\"` applies `fade-enter`, `fade-enter-active`,\n`fade-exit`, `fade-exit-active`, `fade-appear`, and `fade-appear-active`.\n\nEach individual classNames can also be specified independently like:\n\n```js\nclassNames={{\n  appear: 'my-appear',\n  appearActive: 'my-appear-active',\n  appearDone: 'my-appear-done',\n  enter: 'my-enter',\n  enterActive: 'my-enter-active',\n  enterDone: 'my-enter-done',\n  exit: 'my-exit',\n  exitActive: 'my-exit-active',\n  exitDone: 'my-exit-done'\n}}\n```", "name": "classNames", "required": false, "type": { "name": "string | CSSTransitionClassNames" } }, "defaultStyle": { "defaultValue": null, "description": "", "name": "defaultStyle", "required": false, "type": { "name": "CSSProperties" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/experimental/src/vertical-css-transition/vertical-css-transition.tsx#VerticalCSSTransition"] = { docgenInfo: VerticalCSSTransition.__docgenInfo, name: "VerticalCSSTransition", path: "../../packages/js/experimental/src/vertical-css-transition/vertical-css-transition.tsx#VerticalCSSTransition" };
}
catch (__react_docgen_typescript_loader_error) { }

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

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.includes.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var $includes = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-includes.js").includes);
var fails = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js");
var addToUnscopables = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/add-to-unscopables.js");

// FF99+ bug
var BROKEN_ON_SPARSE = fails(function () {
  // eslint-disable-next-line es/no-array-prototype-includes -- detection
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.includes.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js");
var notARegExp = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-string.js");
var correctIsRegExpLogic = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/correct-is-regexp-logic.js");

var stringIndexOf = uncurryThis(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString(requireObjectCoercible(this)),
      toString(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
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

/***/ "../../node_modules/.pnpm/gridicons@3.4.2_react@18.3.1/node_modules/gridicons/dist/ellipsis.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
__webpack_unused_export__ = ({value:!0}),exports.A=_default;var _react=_interopRequireDefault(__webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js")),_excluded=["size","onClick","icon","className"];function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _extends(){return _extends=Object.assign?Object.assign.bind():function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function _default(a){var b=a.size,c=void 0===b?24:b,d=a.onClick,e=a.icon,f=a.className,g=_objectWithoutProperties(a,_excluded),h=["gridicon","gridicons-ellipsis",f,!1,!1,!1].filter(Boolean).join(" ");return _react["default"].createElement("svg",_extends({className:h,height:c,width:c,onClick:d},g,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M7 12a2 2 0 11-4.001-.001A2 2 0 017 12zm12-2a2 2 0 10.001 4.001A2 2 0 0019 10zm-7 0a2 2 0 10.001 4.001A2 2 0 0012 10z"})))}


/***/ }),

/***/ "../../node_modules/.pnpm/gridicons@3.4.2_react@18.3.1/node_modules/gridicons/dist/notice-outline.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
__webpack_unused_export__ = ({value:!0}),exports.A=_default;var _react=_interopRequireDefault(__webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js")),_excluded=["size","onClick","icon","className"];function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _extends(){return _extends=Object.assign?Object.assign.bind():function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function _default(a){var b=a.size,c=void 0===b?24:b,d=a.onClick,e=a.icon,f=a.className,g=_objectWithoutProperties(a,_excluded),h=["gridicon","gridicons-notice-outline",f,!!function isModulo18(a){return 0==a%18}(c)&&"needs-offset",!1,!1].filter(Boolean).join(" ");return _react["default"].createElement("svg",_extends({className:h,height:c,width:c,onClick:d},g,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 13h-2v2h2v-2zm-2-2h2l.5-6h-3l.5 6z"})))}


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

/***/ }),

/***/ "../../packages/js/experimental/src/experimental-list/stories/experimental-list.story.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CollapsibleListExample: () => (/* binding */ CollapsibleListExample),
  Primary: () => (/* binding */ Primary),
  TaskItemExample: () => (/* binding */ TaskItemExample),
  "default": () => (/* binding */ experimental_list_story)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.for-each.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-properties.js
var es_object_define_properties = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-properties.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-property.js
var es_object_define_property = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-property.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.bind.js
var es_function_bind = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.bind.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@storybook+addon-console@1.2.3_@storybook+addon-actions@6.5.17-alpha.0_react-dom@18.3.1_react@18.3.1__react@18.3.1_/node_modules/@storybook/addon-console/dist/index.js
var dist = __webpack_require__("../../node_modules/.pnpm/@storybook+addon-console@1.2.3_@storybook+addon-actions@6.5.17-alpha.0_react-dom@18.3.1_react@18.3.1__react@18.3.1_/node_modules/@storybook/addon-console/dist/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/TransitionGroup.js + 2 modules
var TransitionGroup = __webpack_require__("../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/TransitionGroup.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/CSSTransition.js + 3 modules
var CSSTransition = __webpack_require__("../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/CSSTransition.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../packages/js/experimental/src/experimental-list/experimental-list.tsx


var _excluded = ["children", "listType", "animation"],
  _excluded2 = ["onExited", "in", "enter", "exit"];
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}











/**
 * External dependencies
 */



/**
 * Internal dependencies
 */

var ExperimentalList = function ExperimentalList(_ref) {
  var children = _ref.children,
    listType = _ref.listType,
    _ref$animation = _ref.animation,
    animation = _ref$animation === void 0 ? 'none' : _ref$animation,
    otherProps = (0,objectWithoutProperties/* default */.A)(_ref, _excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TransitionGroup/* default */.A, _objectSpread(_objectSpread({
    component: listType || 'ul',
    className: "woocommerce-experimental-list"
  }, otherProps), {}, {
    children: react.Children.map(children, function (child) {
      if ((0,react.isValidElement)(child)) {
        var _child$props = child.props,
          onExited = _child$props.onExited,
          inTransition = _child$props["in"],
          enter = _child$props.enter,
          exit = _child$props.exit,
          remainingProps = (0,objectWithoutProperties/* default */.A)(_child$props, _excluded2);
        var animationProp = remainingProps.animation || animation;
        return /*#__PURE__*/(0,jsx_runtime.jsx)(CSSTransition/* default */.A, {
          timeout: 500,
          onExited: onExited,
          "in": inTransition,
          enter: enter,
          exit: exit,
          classNames: "woocommerce-list__item",
          children: (0,react.cloneElement)(child, _objectSpread({
            animation: animationProp
          }, remainingProps))
        });
      }
      return child;
      // TODO - create a less restrictive type definition for children of react-transition-group. React.Children.map seems incompatible with the type expected by `children`.
    })
  }));
};
try {
    // @ts-ignore
    ExperimentalList.displayName = "ExperimentalList";
    // @ts-ignore
    ExperimentalList.__docgenInfo = { "description": "", "displayName": "ExperimentalList", "props": { "listType": { "defaultValue": null, "description": "", "name": "listType", "required": false, "type": { "name": "enum", "value": [{ "value": "\"ol\"" }, { "value": "\"ul\"" }] } }, "animation": { "defaultValue": { value: "none" }, "description": "", "name": "animation", "required": false, "type": { "name": "enum", "value": [{ "value": "\"none\"" }, { "value": "\"custom\"" }, { "value": "\"slide-right\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/experimental/src/experimental-list/experimental-list.tsx#ExperimentalList"] = { docgenInfo: ExperimentalList.__docgenInfo, name: "ExperimentalList", path: "../../packages/js/experimental/src/experimental-list/experimental-list.tsx#ExperimentalList" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+keycodes@4.0.1/node_modules/@wordpress/keycodes/build-module/index.js
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+keycodes@4.0.1/node_modules/@wordpress/keycodes/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ../../packages/js/experimental/src/experimental-list/experimental-list-item.tsx


var experimental_list_item_excluded = ["children", "disableGutters", "animation", "className", "exit", "enter", "onExited", "in"];
function experimental_list_item_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function experimental_list_item_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? experimental_list_item_ownKeys(Object(t), !0).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : experimental_list_item_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}











/**
 * External dependencies
 */




function handleKeyDown(event, onClick) {
  if (typeof onClick === 'function' && event.keyCode === build_module/* ENTER */.Fm) {
    onClick(event);
  }
}
var ExperimentalListItem = function ExperimentalListItem(_ref) {
  var children = _ref.children,
    _ref$disableGutters = _ref.disableGutters,
    disableGutters = _ref$disableGutters === void 0 ? false : _ref$disableGutters,
    _ref$animation = _ref.animation,
    animation = _ref$animation === void 0 ? 'none' : _ref$animation,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    exit = _ref.exit,
    enter = _ref.enter,
    onExited = _ref.onExited,
    transitionIn = _ref["in"],
    otherProps = (0,objectWithoutProperties/* default */.A)(_ref, experimental_list_item_excluded);
  // for styling purposes only
  var hasAction = !!(otherProps !== null && otherProps !== void 0 && otherProps.onClick);
  var roleProps = hasAction ? {
    role: 'button',
    onKeyDown: function onKeyDown(e) {
      return handleKeyDown(e, otherProps.onClick);
    },
    tabIndex: 0
  } : {};
  var tagClasses = classnames_default()({
    'has-action': hasAction,
    'has-gutters': !disableGutters,
    // since there is only one valid animation right now, any other value disables them.
    'transitions-disabled': animation !== 'slide-right'
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(CSSTransition/* default */.A, {
    timeout: 500,
    classNames: className || 'woocommerce-list__item',
    "in": transitionIn,
    exit: exit,
    enter: enter,
    onExited: onExited,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("li", experimental_list_item_objectSpread(experimental_list_item_objectSpread(experimental_list_item_objectSpread({}, roleProps), otherProps), {}, {
      className: "woocommerce-experimental-list__item ".concat(tagClasses, " ").concat(className),
      children: children
    }))
  });
};
try {
    // @ts-ignore
    ExperimentalListItem.displayName = "ExperimentalListItem";
    // @ts-ignore
    ExperimentalListItem.__docgenInfo = { "description": "", "displayName": "ExperimentalListItem", "props": { "disableGutters": { "defaultValue": { value: "false" }, "description": "", "name": "disableGutters", "required": false, "type": { "name": "boolean" } }, "animation": { "defaultValue": { value: "none" }, "description": "", "name": "animation", "required": false, "type": { "name": "enum", "value": [{ "value": "\"none\"" }, { "value": "\"custom\"" }, { "value": "\"slide-right\"" }] } }, "className": { "defaultValue": { value: "" }, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "in": { "defaultValue": null, "description": "", "name": "in", "required": false, "type": { "name": "boolean" } }, "exit": { "defaultValue": null, "description": "", "name": "exit", "required": false, "type": { "name": "boolean" } }, "enter": { "defaultValue": null, "description": "", "name": "enter", "required": false, "type": { "name": "boolean" } }, "onExited": { "defaultValue": null, "description": "", "name": "onExited", "required": false, "type": { "name": "(() => void)" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/experimental/src/experimental-list/experimental-list-item.tsx#ExperimentalListItem"] = { docgenInfo: ExperimentalListItem.__docgenInfo, name: "ExperimentalListItem", path: "../../packages/js/experimental/src/experimental-list/experimental-list-item.tsx#ExperimentalListItem" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.date.to-string.js
var es_date_to_string = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.date.to-string.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.to-string.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.name.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.from.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.iterator.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.exec.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.description.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.iterator.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.iterator.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.iterator.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.is-array.js
var es_array_is_array = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.is-array.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.parse-int.js
var es_parse_int = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.parse-int.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.includes.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.includes.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.slice.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.timers.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js
var icon = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-down.js
var chevron_down = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-down.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-up.js
var chevron_up = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-up.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/Transition.js + 1 modules
var Transition = __webpack_require__("../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/Transition.js");
;// CONCATENATED MODULE: ../../packages/js/experimental/src/experimental-list/collapsible-list/index.tsx























var collapsible_list_excluded = ["children", "collapsed", "collapseLabel", "expandLabel", "show", "onCollapse", "onExpand", "direction"],
  collapsible_list_excluded2 = ["onExited", "in", "enter", "exit"];
function collapsible_list_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function collapsible_list_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? collapsible_list_ownKeys(Object(t), !0).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : collapsible_list_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}









function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
/**
 * External dependencies
 */





/**
 * Internal dependencies
 */



var defaultStyle = {
  transitionProperty: 'max-height',
  transitionDuration: '500ms',
  maxHeight: 0,
  overflow: 'hidden'
};
function getContainerHeight(collapseContainer) {
  var containerHeight = 0;
  if (collapseContainer) {
    var _iterator = _createForOfIteratorHelper(collapseContainer.children),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var child = _step.value;
        containerHeight += child.clientHeight;
        var style = window.getComputedStyle(child);
        containerHeight += parseInt(style.marginTop, 10) || 0;
        containerHeight += parseInt(style.marginBottom, 10) || 0;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return containerHeight;
}

/**
 * This functions returns a new list of shown children depending on the new children updates.
 * If one is removed, it will remove it from the show array.
 * If one is added, it will add it back to the shown list, making use of the new children list to keep order.
 *
 * @param {Array.<import('react').ReactElement>} currentChildren      a list of the current children.
 * @param {Array.<import('react').ReactElement>} currentShownChildren a list of the current shown children.
 * @param {Array.<import('react').ReactElement>} newChildren          a list of the new children.
 * @return {Array.<import('react').ReactElement>} new list of children that should be shown.
 */
function getUpdatedShownChildren(currentChildren, currentShownChildren, newChildren) {
  if (newChildren.length < currentChildren.length) {
    var newChildrenKeys = newChildren.map(function (child) {
      return child.key;
    });
    // Filter out removed child
    return currentShownChildren.filter(function (item) {
      return item.key && newChildrenKeys.includes(item.key);
    });
  }
  var currentShownChildrenKeys = currentShownChildren.map(function (child) {
    return child.key;
  });
  var currentChildrenKeys = currentChildren.map(function (child) {
    return child.key;
  });
  // Add new child back in.
  return newChildren.filter(function (child) {
    return child.key && (currentShownChildrenKeys.includes(child.key) || !currentChildrenKeys.includes(child.key));
  });
}
var getTransitionStyle = function getTransitionStyle(state, isCollapsed, elementRef) {
  var maxHeight = 0;
  if ((state === 'entered' || state === 'entering') && elementRef) {
    maxHeight = getContainerHeight(elementRef);
  }
  var styles = collapsible_list_objectSpread(collapsible_list_objectSpread({}, defaultStyle), {}, {
    maxHeight: maxHeight
  });

  // only include transition styles when entering or exiting.
  if (state !== 'entering' && state !== 'exiting') {
    delete styles.transitionDuration;
    delete styles.transition;
    delete styles.transitionProperty;
  }
  // Remove maxHeight when entered, so we do not need to worry about nested items changing height while expanded.
  if (state === 'entered' && !isCollapsed) {
    delete styles.maxHeight;
  }
  return styles;
};
var ExperimentalCollapsibleList = function ExperimentalCollapsibleList(_ref) {
  var children = _ref.children,
    _ref$collapsed = _ref.collapsed,
    collapsed = _ref$collapsed === void 0 ? true : _ref$collapsed,
    collapseLabel = _ref.collapseLabel,
    expandLabel = _ref.expandLabel,
    _ref$show = _ref.show,
    show = _ref$show === void 0 ? 0 : _ref$show,
    onCollapse = _ref.onCollapse,
    onExpand = _ref.onExpand,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? 'up' : _ref$direction,
    listProps = (0,objectWithoutProperties/* default */.A)(_ref, collapsible_list_excluded);
  var _useState = (0,react.useState)(collapsed),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    isCollapsed = _useState2[0],
    setCollapsed = _useState2[1];
  var _useState3 = (0,react.useState)(collapsed),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    isTransitionComponentCollapsed = _useState4[0],
    setTransitionComponentCollapsed = _useState4[1];
  var _useState5 = (0,react.useState)({
      collapse: collapseLabel,
      expand: expandLabel
    }),
    _useState6 = (0,slicedToArray/* default */.A)(_useState5, 2),
    footerLabels = _useState6[0],
    setFooterLabels = _useState6[1];
  var _useState7 = (0,react.useState)({
      all: [],
      shown: [],
      hidden: []
    }),
    _useState8 = (0,slicedToArray/* default */.A)(_useState7, 2),
    displayedChildren = _useState8[0],
    setDisplayedChildren = _useState8[1];
  var collapseContainerRef = (0,react.useRef)(null);
  var updateChildren = function updateChildren() {
    var shownChildren = [];
    var allChildren = react.Children.map(children, function (child) {
      return (0,react.isValidElement)(child) && 'key' in child ? child : null;
    }) || [];
    var hiddenChildren = allChildren;
    if (show > 0) {
      shownChildren = allChildren.slice(0, show);
      hiddenChildren = allChildren.slice(show);
    }
    if (hiddenChildren.length > 0) {
      // Only update when footer will be shown, this way it won't update mid transition if the outer component
      // updates the label as well.
      setFooterLabels({
        expand: expandLabel,
        collapse: collapseLabel
      });
    }
    setDisplayedChildren({
      all: allChildren,
      shown: shownChildren,
      hidden: hiddenChildren
    });
  };

  // This allows for an extra render cycle that adds the maxHeight back in before the exiting transition.
  // This way the exiting transition still works correctly.
  (0,react.useEffect)(function () {
    setTransitionComponentCollapsed(isCollapsed);
  }, [isCollapsed]);
  (0,react.useEffect)(function () {
    var allChildren = react.Children.map(children, function (child) {
      return (0,react.isValidElement)(child) && 'key' in child ? child : null;
    }) || [];
    if (displayedChildren.all.length > 0 && isCollapsed && listProps.animation !== 'none') {
      setDisplayedChildren(collapsible_list_objectSpread(collapsible_list_objectSpread({}, displayedChildren), {}, {
        shown: getUpdatedShownChildren(displayedChildren.all, displayedChildren.shown, allChildren)
      }));
      // Update the hidden children after the remove/add transition is done, making the transition less busy.
      setTimeout(function () {
        updateChildren();
      }, 500);
    } else {
      updateChildren();
    }
  }, [children]);
  var triggerCallbacks = function triggerCallbacks(newCollapseValue) {
    if (onCollapse && newCollapseValue) {
      onCollapse();
    }
    if (onExpand && !newCollapseValue) {
      onExpand();
    }
  };
  var clickHandler = (0,react.useCallback)(function () {
    setCollapsed(!isCollapsed);
    triggerCallbacks(!isCollapsed);
  }, [isCollapsed]);
  var listClasses = classnames_default()(listProps.className || '', 'woocommerce-experimental-list');
  var wrapperClasses = classnames_default()({
    'woocommerce-experimental-list-wrapper': !isCollapsed
  });
  var hiddenChildren = displayedChildren.hidden.length > 0 ? /*#__PURE__*/(0,jsx_runtime.jsxs)(ExperimentalListItem, {
    className: "list-item-collapse",
    onClick: clickHandler,
    animation: "none",
    disableGutters: true,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("p", {
      children: isCollapsed ? footerLabels.expand : footerLabels.collapse
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(icon/* default */.A, {
      className: "list-item-collapse__icon",
      size: 30,
      icon: isCollapsed ? chevron_down/* default */.A : chevron_up/* default */.A
    })]
  }, "collapse-item") : null;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ExperimentalList, collapsible_list_objectSpread(collapsible_list_objectSpread({}, listProps), {}, {
    className: listClasses,
    children: [direction === 'down' && hiddenChildren].concat((0,toConsumableArray/* default */.A)(displayedChildren.shown), [/*#__PURE__*/(0,jsx_runtime.jsx)(Transition/* default */.Ay, {
      timeout: 500,
      "in": !isTransitionComponentCollapsed,
      mountOnEnter: true,
      unmountOnExit: false,
      children: function children(state) {
        var transitionStyles = getTransitionStyle(state, isCollapsed, collapseContainerRef.current);
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: wrapperClasses,
          ref: collapseContainerRef,
          style: transitionStyles,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(TransitionGroup/* default */.A, {
            className: "woocommerce-experimental-list",
            children: react.Children.map(displayedChildren.hidden, function (child) {
              var _child$props = child.props,
                onExited = _child$props.onExited,
                inTransition = _child$props["in"],
                enter = _child$props.enter,
                exit = _child$props.exit,
                remainingProps = (0,objectWithoutProperties/* default */.A)(_child$props, collapsible_list_excluded2);
              var animationProp = remainingProps.animation || listProps.animation;
              return /*#__PURE__*/(0,jsx_runtime.jsx)(CSSTransition/* default */.A, {
                timeout: 500,
                onExited: onExited,
                "in": inTransition,
                enter: enter,
                exit: exit,
                classNames: "woocommerce-list__item",
                children: (0,react.cloneElement)(child, collapsible_list_objectSpread({
                  animation: animationProp
                }, remainingProps))
              }, child.key);
            })
          })
        });
      }
    }, "remaining-children"), direction === 'up' && hiddenChildren])
  }));
};
try {
    // @ts-ignore
    ExperimentalCollapsibleList.displayName = "ExperimentalCollapsibleList";
    // @ts-ignore
    ExperimentalCollapsibleList.__docgenInfo = { "description": "", "displayName": "ExperimentalCollapsibleList", "props": { "collapseLabel": { "defaultValue": null, "description": "", "name": "collapseLabel", "required": true, "type": { "name": "string" } }, "expandLabel": { "defaultValue": null, "description": "", "name": "expandLabel", "required": true, "type": { "name": "string" } }, "collapsed": { "defaultValue": { value: "true" }, "description": "", "name": "collapsed", "required": false, "type": { "name": "boolean" } }, "show": { "defaultValue": { value: "0" }, "description": "", "name": "show", "required": false, "type": { "name": "number" } }, "onCollapse": { "defaultValue": null, "description": "", "name": "onCollapse", "required": false, "type": { "name": "(() => void)" } }, "onExpand": { "defaultValue": null, "description": "", "name": "onExpand", "required": false, "type": { "name": "(() => void)" } }, "direction": { "defaultValue": { value: "up" }, "description": "", "name": "direction", "required": false, "type": { "name": "enum", "value": [{ "value": "\"up\"" }, { "value": "\"down\"" }] } }, "listType": { "defaultValue": null, "description": "", "name": "listType", "required": false, "type": { "name": "enum", "value": [{ "value": "\"ol\"" }, { "value": "\"ul\"" }] } }, "animation": { "defaultValue": null, "description": "", "name": "animation", "required": false, "type": { "name": "enum", "value": [{ "value": "\"none\"" }, { "value": "\"custom\"" }, { "value": "\"slide-right\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/experimental/src/experimental-list/collapsible-list/index.tsx#ExperimentalCollapsibleList"] = { docgenInfo: ExperimentalCollapsibleList.__docgenInfo, name: "ExperimentalCollapsibleList", path: "../../packages/js/experimental/src/experimental-list/collapsible-list/index.tsx#ExperimentalCollapsibleList" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var i18n_build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/check.js
var check = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/check.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/tooltip/index.js + 5 modules
var build_module_tooltip = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/tooltip/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/gridicons@3.4.2_react@18.3.1/node_modules/gridicons/dist/notice-outline.js
var notice_outline = __webpack_require__("../../node_modules/.pnpm/gridicons@3.4.2_react@18.3.1/node_modules/gridicons/dist/notice-outline.js");
// EXTERNAL MODULE: ../../packages/js/components/src/ellipsis-menu/index.tsx
var ellipsis_menu = __webpack_require__("../../packages/js/components/src/ellipsis-menu/index.tsx");
// EXTERNAL MODULE: ../../node_modules/.pnpm/dompurify@2.5.7/node_modules/dompurify/dist/purify.js
var purify = __webpack_require__("../../node_modules/.pnpm/dompurify@2.5.7/node_modules/dompurify/dist/purify.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/index.js
var components_build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/text/component.js
var component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/text/component.js");
;// CONCATENATED MODULE: ../../packages/js/experimental/src/index.js











function src_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function src_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? src_ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : src_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
/**
 * External dependencies
 */


/**
 * Prioritize exports of non-experimental components over experimental.
 */
var Navigation = (/* unused pure expression or super */ null && (NavigationComponent || __experimentalNavigation));
var NavigationBackButton = (/* unused pure expression or super */ null && (NavigationBackButtonComponent || __experimentalNavigationBackButton));
var NavigationGroup = (/* unused pure expression or super */ null && (NavigationGroupComponent || __experimentalNavigationGroup));
var NavigationMenu = (/* unused pure expression or super */ null && (NavigationMenuComponent || __experimentalNavigationMenu));
var NavigationItem = (/* unused pure expression or super */ null && (NavigationItemComponent || __experimentalNavigationItem));
var Text = components_build_module.Text || component/* default */.A;

// Add a fallback for useSlotFills hook to not break in older versions of wp.components.
// This hook was introduced in wp.components@21.2.0.
var useSlotFills = (/* unused pure expression or super */ null && (useSlotFillsHook || function () {
  return null;
}));
var useSlot = function useSlot(name) {
  var _useSlot = useSlotHook || __experimentalUseSlot;
  var slot = _useSlot(name);
  var fills = useSlotFills(name);

  /*
   * Since wp.components@21.2.0, the slot object no longer contains the fills prop.
   * Add fills prop to the slot object for backward compatibility.
   */
  if (typeof useSlotFillsHook === 'function') {
    return src_objectSpread(src_objectSpread({}, slot), {}, {
      fills: fills
    });
  }
  return slot;
};






// EXTERNAL MODULE: ../../packages/js/experimental/src/vertical-css-transition/vertical-css-transition.tsx
var vertical_css_transition = __webpack_require__("../../packages/js/experimental/src/vertical-css-transition/vertical-css-transition.tsx");
;// CONCATENATED MODULE: ../../packages/js/experimental/src/experimental-list/task-item/index.tsx













var task_item_excluded = ["completed", "title", "badge", "onDelete", "onCollapse", "onDismiss", "onSnooze", "onExpand", "onClick", "additionalInfo", "time", "content", "expandable", "expanded", "showActionButton", "level", "action", "actionLabel"];
function task_item_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function task_item_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? task_item_ownKeys(Object(t), !0).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : task_item_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
/**
 * External dependencies
 */









/**
 * Internal dependencies
 */



var ALLOWED_TAGS = ['a', 'b', 'em', 'i', 'strong', 'p', 'br'];
var ALLOWED_ATTR = ['target', 'href', 'rel', 'name', 'download'];
var sanitizeHTML = function sanitizeHTML(html) {
  return {
    __html: (0,purify.sanitize)(html, {
      ALLOWED_TAGS: ALLOWED_TAGS,
      ALLOWED_ATTR: ALLOWED_ATTR
    })
  };
};
var OptionalTaskTooltip = function OptionalTaskTooltip(_ref) {
  var level = _ref.level,
    completed = _ref.completed,
    children = _ref.children;
  var tooltip = '';
  if (level === 1 && !completed) {
    tooltip = (0,i18n_build_module.__)('This task is required to keep your store running', 'woocommerce');
  } else if (level === 2 && !completed) {
    tooltip = (0,i18n_build_module.__)('This task is required to set up your extension', 'woocommerce');
  }
  if (tooltip === '') {
    return children;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_tooltip/* default */.Ay, {
    text: tooltip,
    children: children
  });
};
var OptionalExpansionWrapper = function OptionalExpansionWrapper(_ref2) {
  var children = _ref2.children,
    expandable = _ref2.expandable,
    expanded = _ref2.expanded;
  if (!expandable) {
    return expanded ? /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: children
    }) : null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(vertical_css_transition/* VerticalCSSTransition */.H, {
    timeout: 500,
    "in": expanded,
    classNames: "woocommerce-task-list__item-expandable-content",
    defaultStyle: {
      transitionProperty: 'max-height, opacity'
    },
    children: children
  });
};
var TaskItem = function TaskItem(_ref3) {
  var completed = _ref3.completed,
    title = _ref3.title,
    badge = _ref3.badge,
    onDelete = _ref3.onDelete,
    onCollapse = _ref3.onCollapse,
    onDismiss = _ref3.onDismiss,
    onSnooze = _ref3.onSnooze,
    onExpand = _ref3.onExpand,
    onClick = _ref3.onClick,
    additionalInfo = _ref3.additionalInfo,
    time = _ref3.time,
    content = _ref3.content,
    _ref3$expandable = _ref3.expandable,
    expandable = _ref3$expandable === void 0 ? false : _ref3$expandable,
    _ref3$expanded = _ref3.expanded,
    expanded = _ref3$expanded === void 0 ? false : _ref3$expanded,
    showActionButton = _ref3.showActionButton,
    _ref3$level = _ref3.level,
    level = _ref3$level === void 0 ? 3 : _ref3$level,
    action = _ref3.action,
    actionLabel = _ref3.actionLabel,
    listItemProps = (0,objectWithoutProperties/* default */.A)(_ref3, task_item_excluded);
  var _useState = (0,react.useState)(expanded),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    isTaskExpanded = _useState2[0],
    setTaskExpanded = _useState2[1];
  (0,react.useEffect)(function () {
    setTaskExpanded(expanded);
  }, [expanded]);
  var className = classnames_default()('woocommerce-task-list__item', {
    complete: completed,
    expanded: isTaskExpanded,
    'level-2': level === 2 && !completed,
    'level-1': level === 1 && !completed
  });
  if (showActionButton === undefined) {
    showActionButton = expandable;
  }
  var showEllipsisMenu = (onDismiss || onSnooze) && !completed || onDelete && completed;
  var toggleActionVisibility = function toggleActionVisibility() {
    setTaskExpanded(!isTaskExpanded);
    if (isTaskExpanded && onExpand) {
      onExpand();
    }
    if (!isTaskExpanded && onCollapse) {
      onCollapse();
    }
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ExperimentalListItem, task_item_objectSpread(task_item_objectSpread({
    disableGutters: true,
    className: className,
    onClick: expandable && showActionButton ? toggleActionVisibility : onClick
  }, listItemProps), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(OptionalTaskTooltip, {
      level: level,
      completed: completed,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "woocommerce-task-list__item-before",
        children: level === 1 && !completed ? /*#__PURE__*/(0,jsx_runtime.jsx)(notice_outline/* default */.A, {
          size: 36
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "woocommerce-task__icon",
          children: completed && /*#__PURE__*/(0,jsx_runtime.jsx)(icon/* default */.A, {
            icon: check/* default */.A
          })
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "woocommerce-task-list__item-text",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Text, {
        as: "div",
        size: "14",
        lineHeight: completed ? '18px' : '20px',
        weight: completed ? 'normal' : '600',
        variant: completed ? 'body.small' : 'button',
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
          className: "woocommerce-task-list__item-title",
          children: [title, badge && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "woocommerce-task-list__item-badge",
            children: badge
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(OptionalExpansionWrapper, {
          expandable: expandable,
          expanded: isTaskExpanded,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "woocommerce-task-list__item-expandable-content",
            children: [content, expandable && !completed && additionalInfo && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "woocommerce-task__additional-info",
              dangerouslySetInnerHTML: sanitizeHTML(additionalInfo)
            }), !completed && showActionButton && /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
              className: "woocommerce-task-list__item-action",
              isPrimary: true,
              onClick: function onClick(event) {
                event.stopPropagation();
                action(event, {
                  isExpanded: true
                });
              },
              children: actionLabel || title
            })]
          })
        }), !expandable && !completed && additionalInfo && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "woocommerce-task__additional-info",
          dangerouslySetInnerHTML: sanitizeHTML(additionalInfo)
        }), time && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "woocommerce-task__estimated-time",
          children: time
        })]
      })
    }), showEllipsisMenu && /*#__PURE__*/(0,jsx_runtime.jsx)(ellipsis_menu/* default */.A, {
      label: (0,i18n_build_module.__)('Task Options', 'woocommerce'),
      className: "woocommerce-task-list__item-after",
      onToggle: function onToggle(e) {
        return e.stopPropagation();
      },
      renderContent: function renderContent() {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "woocommerce-task-card__section-controls",
          children: [onDismiss && !completed && /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
            onClick: function onClick(e) {
              e.stopPropagation();
              onDismiss();
            },
            children: (0,i18n_build_module.__)('Dismiss', 'woocommerce')
          }), onSnooze && !completed && /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
            onClick: function onClick(e) {
              e.stopPropagation();
              onSnooze();
            },
            children: (0,i18n_build_module.__)('Remind me later', 'woocommerce')
          }), onDelete && completed && /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
            onClick: function onClick(e) {
              e.stopPropagation();
              onDelete();
            },
            children: (0,i18n_build_module.__)('Delete', 'woocommerce')
          })]
        });
      }
    })]
  }));
};
try {
    // @ts-ignore
    TaskItem.displayName = "TaskItem";
    // @ts-ignore
    TaskItem.__docgenInfo = { "description": "", "displayName": "TaskItem", "props": { "title": { "defaultValue": null, "description": "", "name": "title", "required": true, "type": { "name": "string" } }, "completed": { "defaultValue": null, "description": "", "name": "completed", "required": true, "type": { "name": "boolean" } }, "onClick": { "defaultValue": null, "description": "", "name": "onClick", "required": false, "type": { "name": "MouseEventHandler<HTMLElement>" } }, "onCollapse": { "defaultValue": null, "description": "", "name": "onCollapse", "required": false, "type": { "name": "(() => void)" } }, "onDelete": { "defaultValue": null, "description": "", "name": "onDelete", "required": false, "type": { "name": "(() => void)" } }, "onDismiss": { "defaultValue": null, "description": "", "name": "onDismiss", "required": false, "type": { "name": "(() => void)" } }, "onSnooze": { "defaultValue": null, "description": "", "name": "onSnooze", "required": false, "type": { "name": "(() => void)" } }, "onExpand": { "defaultValue": null, "description": "", "name": "onExpand", "required": false, "type": { "name": "(() => void)" } }, "badge": { "defaultValue": null, "description": "", "name": "badge", "required": false, "type": { "name": "string" } }, "additionalInfo": { "defaultValue": null, "description": "", "name": "additionalInfo", "required": false, "type": { "name": "string" } }, "time": { "defaultValue": null, "description": "", "name": "time", "required": false, "type": { "name": "string" } }, "content": { "defaultValue": null, "description": "", "name": "content", "required": true, "type": { "name": "string" } }, "expandable": { "defaultValue": { value: "false" }, "description": "", "name": "expandable", "required": false, "type": { "name": "boolean" } }, "expanded": { "defaultValue": { value: "false" }, "description": "", "name": "expanded", "required": false, "type": { "name": "boolean" } }, "showActionButton": { "defaultValue": null, "description": "", "name": "showActionButton", "required": false, "type": { "name": "boolean" } }, "level": { "defaultValue": { value: "3" }, "description": "", "name": "level", "required": false, "type": { "name": "enum", "value": [{ "value": "2" }, { "value": "1" }, { "value": "3" }] } }, "action": { "defaultValue": null, "description": "", "name": "action", "required": true, "type": { "name": "(event?: MouseEvent<Element, MouseEvent> | KeyboardEvent<Element> | undefined, args?: ActionArgs | undefined) => void" } }, "actionLabel": { "defaultValue": null, "description": "", "name": "actionLabel", "required": false, "type": { "name": "string" } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/experimental/src/experimental-list/task-item/index.tsx#TaskItem"] = { docgenInfo: TaskItem.__docgenInfo, name: "TaskItem", path: "../../packages/js/experimental/src/experimental-list/task-item/index.tsx#TaskItem" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ../../packages/js/experimental/src/experimental-list/stories/style.scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../../packages/js/experimental/src/experimental-list/stories/experimental-list.story.tsx












function experimental_list_story_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function experimental_list_story_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? experimental_list_story_ownKeys(Object(t), !0).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : experimental_list_story_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */




/* harmony default export */ const experimental_list_story = ({
  title: 'Experimental/List',
  component: ExperimentalList,
  decorators: [function (storyFn, context) {
    return (0,dist/* withConsole */.QW)()(storyFn)(context);
  }],
  argTypes: {
    direction: {
      control: {
        type: 'select',
        options: ['up', 'down']
      }
    }
  }
});
var Template = function Template(args) {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ExperimentalList, experimental_list_story_objectSpread(experimental_list_story_objectSpread({}, args), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ExperimentalListItem, {
      disableGutters: true,
      onClick: function onClick() {},
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: "Without gutters no padding is added to the list item."
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ExperimentalListItem, {
      onClick: function onClick() {},
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: "Any markup can go here."
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ExperimentalListItem, {
      onClick: function onClick() {},
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: "Any markup can go here."
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ExperimentalListItem, {
      onClick: function onClick() {},
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: "Any markup can go here."
      })
    })]
  }));
};
var Primary = Template.bind({
  onClick: function onClick() {}
});
Primary.args = {
  listType: 'ul',
  animation: 'slide-right'
};
var CollapsibleListExample = function CollapsibleListExample(args) {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ExperimentalCollapsibleList, experimental_list_story_objectSpread(experimental_list_story_objectSpread({
    collapseLabel: "Show less",
    expandLabel: "Show more items",
    show: 2,
    onCollapse: function onCollapse() {
      // eslint-disable-next-line no-console
      console.log('collapsed');
    },
    onExpand: function onExpand() {
      // eslint-disable-next-line no-console
      console.log('expanded');
    },
    direction: "up"
  }, args), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ExperimentalListItem, {
      onClick: function onClick() {},
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: "Any markup can go here."
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ExperimentalListItem, {
      onClick: function onClick() {},
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: "Any markup can go here."
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ExperimentalListItem, {
      onClick: function onClick() {},
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: ["Any markup can go here.", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "Bigger task item", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "Another line"]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ExperimentalListItem, {
      onClick: function onClick() {},
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: "Any markup can go here."
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ExperimentalListItem, {
      onClick: function onClick() {},
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: "Any markup can go here."
      })
    })]
  }));
};
CollapsibleListExample.storyName = 'List with CollapsibleListItem.';
var TaskItemExample = function TaskItemExample(args) {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ExperimentalList, experimental_list_story_objectSpread(experimental_list_story_objectSpread({}, args), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TaskItem, {
      action: function action() {
        return (
          // eslint-disable-next-line no-console
          console.log('Primary action clicked')
        );
      },
      actionLabel: "Primary action",
      completed: false,
      content: "Task content",
      expandable: true,
      expanded: true,
      level: 1,
      onClick: function onClick() {
        return (
          // eslint-disable-next-line no-console
          console.log('Task clicked')
        );
      },
      onCollapse: function onCollapse() {
        return (
          // eslint-disable-next-line no-console
          console.log('Task will be expanded')
        );
      },
      onExpand: function onExpand() {
        return (
          // eslint-disable-next-line no-console
          console.log('Task will be collapsed')
        );
      },
      showActionButton: true,
      title: "A high-priority task"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(TaskItem, {
      action: function action() {
        return (
          // eslint-disable-next-line no-console
          console.log('Primary action clicked')
        );
      },
      actionLabel: "Primary action",
      completed: false,
      content: "Task content",
      expandable: false,
      expanded: true,
      level: 1,
      onClick: function onClick() {
        return (
          // eslint-disable-next-line no-console
          console.log('Task clicked')
        );
      },
      showActionButton: false,
      title: "A high-priority task without `Primary action`",
      badge: "Badge content"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(TaskItem, {
      action: function action() {},
      completed: false,
      content: "Task content",
      expandable: false,
      expanded: true,
      level: 2,
      onClick: function onClick() {
        return (
          // eslint-disable-next-line no-console
          console.log('Task clicked')
        );
      },
      title: "Setup task",
      onDismiss: function onDismiss() {
        return (
          // eslint-disable-next-line no-console
          console.log('Task dismissed')
        );
      },
      onSnooze: function onSnooze() {
        return (
          // eslint-disable-next-line no-console
          console.log('Task snoozed')
        );
      },
      time: "5 minutes"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(TaskItem, {
      action: function action() {},
      completed: false,
      content: "Task content",
      expandable: false,
      expanded: true,
      level: 3,
      onClick: function onClick() {
        return (
          // eslint-disable-next-line no-console
          console.log('Task clicked')
        );
      },
      title: "A low-priority task",
      onDismiss: function onDismiss() {
        return (
          // eslint-disable-next-line no-console
          console.log('Task dismissed')
        );
      },
      onSnooze: function onSnooze() {
        return (
          // eslint-disable-next-line no-console
          console.log('Task snoozed')
        );
      },
      time: "3 minutes"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(TaskItem, {
      action: function action() {},
      completed: true,
      content: "Task content",
      expandable: false,
      expanded: true,
      level: 3,
      onClick: function onClick() {
        return (
          // eslint-disable-next-line no-console
          console.log('Task clicked')
        );
      },
      title: "Another low-priority task",
      onDelete: function onDelete() {
        return (
          // eslint-disable-next-line no-console
          console.log('Task deleted')
        );
      }
    })]
  }));
};
TaskItemExample.storyName = 'TaskItems.';
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...Primary.parameters?.docs,
    source: {
      originalSource: "Template.bind({\n  onClick: () => {}\n})",
      ...Primary.parameters?.docs?.source
    }
  }
};
CollapsibleListExample.parameters = {
  ...CollapsibleListExample.parameters,
  docs: {
    ...CollapsibleListExample.parameters?.docs,
    source: {
      originalSource: "args => {\n  return <CollapsibleList collapseLabel=\"Show less\" expandLabel=\"Show more items\" show={2} onCollapse={() => {\n    // eslint-disable-next-line no-console\n    console.log('collapsed');\n  }} onExpand={() => {\n    // eslint-disable-next-line no-console\n    console.log('expanded');\n  }} direction=\"up\" {...args}>\n            <ListItem onClick={() => {}}>\n                <div>Any markup can go here.</div>\n            </ListItem>\n            <ListItem onClick={() => {}}>\n                <div>Any markup can go here.</div>\n            </ListItem>\n            <ListItem onClick={() => {}}>\n                <div>\n                    Any markup can go here.\n                    <br />\n                    Bigger task item\n                    <br />\n                    Another line\n                </div>\n            </ListItem>\n            <ListItem onClick={() => {}}>\n                <div>Any markup can go here.</div>\n            </ListItem>\n            <ListItem onClick={() => {}}>\n                <div>Any markup can go here.</div>\n            </ListItem>\n        </CollapsibleList>;\n}",
      ...CollapsibleListExample.parameters?.docs?.source
    }
  }
};
TaskItemExample.parameters = {
  ...TaskItemExample.parameters,
  docs: {
    ...TaskItemExample.parameters?.docs,
    source: {
      originalSource: "args => <List {...args}>\n        <TaskItem action={() =>\n  // eslint-disable-next-line no-console\n  console.log('Primary action clicked')} actionLabel=\"Primary action\" completed={false} content=\"Task content\" expandable={true} expanded={true} level={1} onClick={() =>\n  // eslint-disable-next-line no-console\n  console.log('Task clicked')} onCollapse={() =>\n  // eslint-disable-next-line no-console\n  console.log('Task will be expanded')} onExpand={() =>\n  // eslint-disable-next-line no-console\n  console.log('Task will be collapsed')} showActionButton={true} title=\"A high-priority task\" />\n        <TaskItem action={() =>\n  // eslint-disable-next-line no-console\n  console.log('Primary action clicked')} actionLabel=\"Primary action\" completed={false} content=\"Task content\" expandable={false} expanded={true} level={1} onClick={() =>\n  // eslint-disable-next-line no-console\n  console.log('Task clicked')} showActionButton={false} title=\"A high-priority task without `Primary action`\" badge=\"Badge content\" />\n        <TaskItem action={() => {}} completed={false} content=\"Task content\" expandable={false} expanded={true} level={2} onClick={() =>\n  // eslint-disable-next-line no-console\n  console.log('Task clicked')} title=\"Setup task\" onDismiss={() =>\n  // eslint-disable-next-line no-console\n  console.log('Task dismissed')} onSnooze={() =>\n  // eslint-disable-next-line no-console\n  console.log('Task snoozed')} time=\"5 minutes\" />\n        <TaskItem action={() => {}} completed={false} content=\"Task content\" expandable={false} expanded={true} level={3} onClick={() =>\n  // eslint-disable-next-line no-console\n  console.log('Task clicked')} title=\"A low-priority task\" onDismiss={() =>\n  // eslint-disable-next-line no-console\n  console.log('Task dismissed')} onSnooze={() =>\n  // eslint-disable-next-line no-console\n  console.log('Task snoozed')} time=\"3 minutes\" />\n        <TaskItem action={() => {}} completed={true} content=\"Task content\" expandable={false} expanded={true} level={3} onClick={() =>\n  // eslint-disable-next-line no-console\n  console.log('Task clicked')} title=\"Another low-priority task\" onDelete={() =>\n  // eslint-disable-next-line no-console\n  console.log('Task deleted')} />\n    </List>",
      ...TaskItemExample.parameters?.docs?.source
    }
  }
};

/***/ })

}]);