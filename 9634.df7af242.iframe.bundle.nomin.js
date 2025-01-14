"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[9634],{

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/SOK7T35T.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P$: () => (/* binding */ useToolbarProviderContext),
/* harmony export */   _N: () => (/* binding */ ToolbarScopedContextProvider),
/* harmony export */   wU: () => (/* binding */ useToolbarContext)
/* harmony export */ });
/* unused harmony exports useToolbarScopedContext, ToolbarContextProvider */
/* harmony import */ var _IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/IB7YUKH5.js");
/* harmony import */ var _3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js");
"use client";



// src/toolbar/toolbar-context.tsx
var ctx = (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_0__/* .createStoreContext */ .B0)(
  [_IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_1__/* .CompositeContextProvider */ .ws],
  [_IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_1__/* .CompositeScopedContextProvider */ .aN]
);
var useToolbarContext = ctx.useContext;
var useToolbarScopedContext = ctx.useScopedContext;
var useToolbarProviderContext = ctx.useProviderContext;
var ToolbarContextProvider = ctx.ContextProvider;
var ToolbarScopedContextProvider = ctx.ScopedContextProvider;




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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/dropdown-menu/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ dropdown_menu)
});

// UNUSED EXPORTS: DropdownMenu

// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+primitives@3.4.1/node_modules/@wordpress/primitives/build-module/svg/index.js
var svg = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@3.4.1/node_modules/@wordpress/primitives/build-module/svg/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/menu.js
/**
 * WordPress dependencies
 */


const menu = /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* SVG */.t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
    d: "M5 5v1.5h14V5H5zm0 7.8h14v-1.5H5v1.5zM5 19h14v-1.5H5V19z"
  })
});
/* harmony default export */ const library_menu = (menu);
//# sourceMappingURL=menu.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/use-context-system.js + 1 modules
var use_context_system = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/use-context-system.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-connect.js
var context_connect = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-connect.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/dropdown/index.js
var dropdown = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/dropdown/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/navigable-container/menu.js + 1 modules
var navigable_container_menu = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/navigable-container/menu.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/dropdown-menu/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */






function mergeProps(defaultProps = {}, props = {}) {
  const mergedProps = {
    ...defaultProps,
    ...props
  };
  if (props.className && defaultProps.className) {
    mergedProps.className = (0,clsx/* default */.A)(props.className, defaultProps.className);
  }
  return mergedProps;
}
function isFunction(maybeFunc) {
  return typeof maybeFunc === 'function';
}
function UnconnectedDropdownMenu(dropdownMenuProps) {
  const {
    children,
    className,
    controls,
    icon = library_menu,
    label,
    popoverProps,
    toggleProps,
    menuProps,
    disableOpenOnArrowDown = false,
    text,
    noIcons,
    open,
    defaultOpen,
    onToggle: onToggleProp,
    // Context
    variant
  } = (0,use_context_system/* useContextSystem */.A)(dropdownMenuProps, 'DropdownMenu');
  if (!controls?.length && !isFunction(children)) {
    return null;
  }

  // Normalize controls to nested array of objects (sets of controls)
  let controlSets;
  if (controls?.length) {
    // @ts-expect-error The check below is needed because `DropdownMenus`
    // rendered by `ToolBarGroup` receive controls as a nested array.
    controlSets = controls;
    if (!Array.isArray(controlSets[0])) {
      // This is not ideal, but at this point we know that `controls` is
      // not a nested array, even if TypeScript doesn't.
      controlSets = [controls];
    }
  }
  const mergedPopoverProps = mergeProps({
    className: 'components-dropdown-menu__popover',
    variant
  }, popoverProps);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(dropdown/* default */.A, {
    className: className,
    popoverProps: mergedPopoverProps,
    renderToggle: ({
      isOpen,
      onToggle
    }) => {
      var _toggleProps$showTool;
      const openOnArrowDown = event => {
        if (disableOpenOnArrowDown) {
          return;
        }
        if (!isOpen && event.code === 'ArrowDown') {
          event.preventDefault();
          onToggle();
        }
      };
      const {
        as: Toggle = build_module_button/* default */.Ay,
        ...restToggleProps
      } = toggleProps !== null && toggleProps !== void 0 ? toggleProps : {};
      const mergedToggleProps = mergeProps({
        className: (0,clsx/* default */.A)('components-dropdown-menu__toggle', {
          'is-opened': isOpen
        })
      }, restToggleProps);
      return /*#__PURE__*/(0,jsx_runtime.jsx)(Toggle, {
        ...mergedToggleProps,
        icon: icon,
        onClick: event => {
          onToggle();
          if (mergedToggleProps.onClick) {
            mergedToggleProps.onClick(event);
          }
        },
        onKeyDown: event => {
          openOnArrowDown(event);
          if (mergedToggleProps.onKeyDown) {
            mergedToggleProps.onKeyDown(event);
          }
        },
        "aria-haspopup": "true",
        "aria-expanded": isOpen,
        label: label,
        text: text,
        showTooltip: (_toggleProps$showTool = toggleProps?.showTooltip) !== null && _toggleProps$showTool !== void 0 ? _toggleProps$showTool : true,
        children: mergedToggleProps.children
      });
    },
    renderContent: props => {
      const mergedMenuProps = mergeProps({
        'aria-label': label,
        className: (0,clsx/* default */.A)('components-dropdown-menu__menu', {
          'no-icons': noIcons
        })
      }, menuProps);
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(navigable_container_menu/* default */.Ay, {
        ...mergedMenuProps,
        role: "menu",
        children: [isFunction(children) ? children(props) : null, controlSets?.flatMap((controlSet, indexOfSet) => controlSet.map((control, indexOfControl) => /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
          onClick: event => {
            event.stopPropagation();
            props.onClose();
            if (control.onClick) {
              control.onClick();
            }
          },
          className: (0,clsx/* default */.A)('components-dropdown-menu__menu-item', {
            'has-separator': indexOfSet > 0 && indexOfControl === 0,
            'is-active': control.isActive,
            'is-icon-only': !control.title
          }),
          icon: control.icon,
          label: control.label,
          "aria-checked": control.role === 'menuitemcheckbox' || control.role === 'menuitemradio' ? control.isActive : undefined,
          role: control.role === 'menuitemcheckbox' || control.role === 'menuitemradio' ? control.role : 'menuitem',
          disabled: control.isDisabled,
          children: control.title
        }, [indexOfSet, indexOfControl].join())))]
      });
    },
    open: open,
    defaultOpen: defaultOpen,
    onToggle: onToggleProp
  });
}

/**
 *
 * The DropdownMenu displays a list of actions (each contained in a MenuItem,
 * MenuItemsChoice, or MenuGroup) in a compact way. It appears in a Popover
 * after the user has interacted with an element (a button or icon) or when
 * they perform a specific action.
 *
 * Render a Dropdown Menu with a set of controls:
 *
 * ```jsx
 * import { DropdownMenu } from '@wordpress/components';
 * import {
 * 	more,
 * 	arrowLeft,
 * 	arrowRight,
 * 	arrowUp,
 * 	arrowDown,
 * } from '@wordpress/icons';
 *
 * const MyDropdownMenu = () => (
 * 	<DropdownMenu
 * 		icon={ more }
 * 		label="Select a direction"
 * 		controls={ [
 * 			{
 * 				title: 'Up',
 * 				icon: arrowUp,
 * 				onClick: () => console.log( 'up' ),
 * 			},
 * 			{
 * 				title: 'Right',
 * 				icon: arrowRight,
 * 				onClick: () => console.log( 'right' ),
 * 			},
 * 			{
 * 				title: 'Down',
 * 				icon: arrowDown,
 * 				onClick: () => console.log( 'down' ),
 * 			},
 * 			{
 * 				title: 'Left',
 * 				icon: arrowLeft,
 * 				onClick: () => console.log( 'left' ),
 * 			},
 * 		] }
 * 	/>
 * );
 * ```
 *
 * Alternatively, specify a `children` function which returns elements valid for
 * use in a DropdownMenu: `MenuItem`, `MenuItemsChoice`, or `MenuGroup`.
 *
 * ```jsx
 * import { DropdownMenu, MenuGroup, MenuItem } from '@wordpress/components';
 * import { more, arrowUp, arrowDown, trash } from '@wordpress/icons';
 *
 * const MyDropdownMenu = () => (
 * 	<DropdownMenu icon={ more } label="Select a direction">
 * 		{ ( { onClose } ) => (
 * 			<>
 * 				<MenuGroup>
 * 					<MenuItem icon={ arrowUp } onClick={ onClose }>
 * 						Move Up
 * 					</MenuItem>
 * 					<MenuItem icon={ arrowDown } onClick={ onClose }>
 * 						Move Down
 * 					</MenuItem>
 * 				</MenuGroup>
 * 				<MenuGroup>
 * 					<MenuItem icon={ trash } onClick={ onClose }>
 * 						Remove
 * 					</MenuItem>
 * 				</MenuGroup>
 * 			</>
 * 		) }
 * 	</DropdownMenu>
 * );
 * ```
 *
 */
const DropdownMenu = (0,context_connect/* contextConnectWithoutRef */.zS)(UnconnectedDropdownMenu, 'DropdownMenu');
/* harmony default export */ const dropdown_menu = (DropdownMenu);
//# sourceMappingURL=index.js.map

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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/menu-group/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export MenuGroup */
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");
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


/**
 * `MenuGroup` wraps a series of related `MenuItem` components into a common
 * section.
 *
 * ```jsx
 * import { MenuGroup, MenuItem } from '@wordpress/components';
 *
 * const MyMenuGroup = () => (
 *   <MenuGroup label="Settings">
 *     <MenuItem>Setting 1</MenuItem>
 *     <MenuItem>Setting 2</MenuItem>
 *   </MenuGroup>
 * );
 * ```
 */
function MenuGroup(props) {
  const {
    children,
    className = '',
    label,
    hideSeparator
  } = props;
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(MenuGroup);
  if (!_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Children.count(children)) {
    return null;
  }
  const labelId = `components-menu-group-label-${instanceId}`;
  const classNames = (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(className, 'components-menu-group', {
    'has-hidden-separator': hideSeparator
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: classNames,
    children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "components-menu-group__label",
      id: labelId,
      "aria-hidden": "true",
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      role: "group",
      "aria-labelledby": label ? labelId : undefined,
      children: children
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuGroup);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/menu-item/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export MenuItem */
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _shortcut__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/shortcut/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/icon/index.js");
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





function UnforwardedMenuItem(props, ref) {
  let {
    children,
    info,
    className,
    icon,
    iconPosition = 'right',
    shortcut,
    isSelected,
    role = 'menuitem',
    suffix,
    ...buttonProps
  } = props;
  className = (0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('components-menu-item__button', className);
  if (info) {
    children = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
      className: "components-menu-item__info-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: "components-menu-item__item",
        children: children
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: "components-menu-item__info",
        children: info
      })]
    });
  }
  if (icon && typeof icon !== 'string') {
    icon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.cloneElement)(icon, {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('components-menu-items__item-icon', {
        'has-icon-right': iconPosition === 'right'
      })
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Ay, {
    ref: ref
    // Make sure aria-checked matches spec https://www.w3.org/TR/wai-aria-1.1/#aria-checked
    ,
    "aria-checked": role === 'menuitemcheckbox' || role === 'menuitemradio' ? isSelected : undefined,
    role: role,
    icon: iconPosition === 'left' ? icon : undefined,
    className: className,
    ...buttonProps,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
      className: "components-menu-item__item",
      children: children
    }), !suffix && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shortcut__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      className: "components-menu-item__shortcut",
      shortcut: shortcut
    }), !suffix && icon && iconPosition === 'right' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
      icon: icon
    }), suffix]
  });
}

/**
 * MenuItem is a component which renders a button intended to be used in combination with the `DropdownMenu` component.
 *
 * ```jsx
 * import { MenuItem } from '@wordpress/components';
 * import { useState } from '@wordpress/element';
 *
 * const MyMenuItem = () => {
 * 	const [ isActive, setIsActive ] = useState( true );
 *
 * 	return (
 * 		<MenuItem
 * 			icon={ isActive ? 'yes' : 'no' }
 * 			isSelected={ isActive }
 * 			role="menuitemcheckbox"
 * 			onClick={ () => setIsActive( ( state ) => ! state ) }
 * 		>
 * 			Toggle
 * 		</MenuItem>
 * 	);
 * };
 * ```
 */
const MenuItem = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(UnforwardedMenuItem);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuItem);
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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/toolbar/toolbar-button/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ toolbar_button)
});

// UNUSED EXPORTS: ToolbarButton

// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/toolbar/toolbar-item/index.js + 1 modules
var toolbar_item = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/toolbar/toolbar-item/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/toolbar/toolbar-context/index.js
var toolbar_context = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/toolbar/toolbar-context/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/toolbar/toolbar-button/toolbar-button-container.js

/**
 * Internal dependencies
 */

const ToolbarButtonContainer = ({
  children,
  className
}) => /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
  className: className,
  children: children
});
/* harmony default export */ const toolbar_button_container = (ToolbarButtonContainer);
//# sourceMappingURL=toolbar-button-container.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/toolbar/toolbar-button/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */





function UnforwardedToolbarButton({
  children,
  className,
  containerClassName,
  extraProps,
  isActive,
  isDisabled,
  title,
  ...props
}, ref) {
  const accessibleToolbarState = (0,react.useContext)(toolbar_context/* default */.A);
  if (!accessibleToolbarState) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(toolbar_button_container, {
      className: containerClassName,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
        ref: ref,
        icon: props.icon,
        label: title,
        shortcut: props.shortcut,
        "data-subscript": props.subscript,
        onClick: event => {
          event.stopPropagation();
          // TODO: Possible bug; maybe use onClick instead of props.onClick.
          if (props.onClick) {
            props.onClick(event);
          }
        },
        className: (0,clsx/* default */.A)('components-toolbar__control', className),
        isPressed: isActive,
        disabled: isDisabled,
        "data-toolbar-item": true,
        ...extraProps,
        ...props,
        children: children
      })
    });
  }

  // ToobarItem will pass all props to the render prop child, which will pass
  // all props to Button. This means that ToolbarButton has the same API as
  // Button.
  return /*#__PURE__*/(0,jsx_runtime.jsx)(toolbar_item/* default */.A, {
    className: (0,clsx/* default */.A)('components-toolbar-button', className),
    ...extraProps,
    ...props,
    ref: ref,
    children: toolbarItemProps => /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
      label: title,
      isPressed: isActive,
      disabled: isDisabled,
      ...toolbarItemProps,
      children: children
    })
  });
}

/**
 * ToolbarButton can be used to add actions to a toolbar, usually inside a Toolbar
 * or ToolbarGroup when used to create general interfaces.
 *
 * ```jsx
 * import { Toolbar, ToolbarButton } from '@wordpress/components';
 * import { edit } from '@wordpress/icons';
 *
 * function MyToolbar() {
 *   return (
 *		<Toolbar label="Options">
 *			<ToolbarButton
 *				icon={ edit }
 *				label="Edit"
 *				onClick={ () => alert( 'Editing' ) }
 *			/>
 *		</Toolbar>
 *   );
 * }
 * ```
 */
const ToolbarButton = (0,react.forwardRef)(UnforwardedToolbarButton);
/* harmony default export */ const toolbar_button = (ToolbarButton);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/toolbar/toolbar-context/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * External dependencies
 */
// eslint-disable-next-line no-restricted-imports

/**
 * WordPress dependencies
 */

const ToolbarContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToolbarContext);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/toolbar/toolbar-group/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ toolbar_group)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/toolbar/toolbar-button/index.js + 1 modules
var toolbar_button = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/toolbar/toolbar-button/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/toolbar/toolbar-group/toolbar-group-container.js

/**
 * Internal dependencies
 */

const ToolbarGroupContainer = ({
  className,
  children,
  ...props
}) => /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
  className: className,
  ...props,
  children: children
});
/* harmony default export */ const toolbar_group_container = (ToolbarGroupContainer);
//# sourceMappingURL=toolbar-group-container.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/dropdown-menu/index.js + 1 modules
var dropdown_menu = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/dropdown-menu/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/toolbar/toolbar-context/index.js
var toolbar_context = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/toolbar/toolbar-context/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/toolbar/toolbar-item/index.js + 1 modules
var toolbar_item = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/toolbar/toolbar-item/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/toolbar/toolbar-group/toolbar-group-collapsed.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




function ToolbarGroupCollapsed({
  controls = [],
  toggleProps,
  ...props
}) {
  // It'll contain state if `ToolbarGroup` is being used within
  // `<Toolbar label="label" />`
  const accessibleToolbarState = (0,react.useContext)(toolbar_context/* default */.A);
  const renderDropdownMenu = internalToggleProps => /*#__PURE__*/(0,jsx_runtime.jsx)(dropdown_menu/* default */.A, {
    controls: controls,
    toggleProps: {
      ...internalToggleProps,
      'data-toolbar-item': true
    },
    ...props
  });
  if (accessibleToolbarState) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(toolbar_item/* default */.A, {
      ...toggleProps,
      children: renderDropdownMenu
    });
  }
  return renderDropdownMenu(toggleProps);
}
/* harmony default export */ const toolbar_group_collapsed = (ToolbarGroupCollapsed);
//# sourceMappingURL=toolbar-group-collapsed.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/toolbar/toolbar-group/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */






function isNestedArray(arr) {
  return Array.isArray(arr) && Array.isArray(arr[0]);
}

/**
 * Renders a collapsible group of controls
 *
 * The `controls` prop accepts an array of sets. A set is an array of controls.
 * Controls have the following shape:
 *
 * ```
 * {
 *   icon: string,
 *   title: string,
 *   subscript: string,
 *   onClick: Function,
 *   isActive: boolean,
 *   isDisabled: boolean
 * }
 * ```
 *
 * For convenience it is also possible to pass only an array of controls. It is
 * then assumed this is the only set.
 *
 * Either `controls` or `children` is required, otherwise this components
 * renders nothing.
 *
 * @param props               Component props.
 * @param [props.controls]    The controls to render in this toolbar.
 * @param [props.children]    Any other things to render inside the toolbar besides the controls.
 * @param [props.className]   Class to set on the container div.
 * @param [props.isCollapsed] Turns ToolbarGroup into a dropdown menu.
 * @param [props.title]       ARIA label for dropdown menu if is collapsed.
 */
function ToolbarGroup({
  controls = [],
  children,
  className,
  isCollapsed,
  title,
  ...props
}) {
  // It'll contain state if `ToolbarGroup` is being used within
  // `<Toolbar label="label" />`
  const accessibleToolbarState = (0,react.useContext)(toolbar_context/* default */.A);
  if ((!controls || !controls.length) && !children) {
    return null;
  }
  const finalClassName = (0,clsx/* default */.A)(
  // Unfortunately, there's legacy code referencing to `.components-toolbar`
  // So we can't get rid of it
  accessibleToolbarState ? 'components-toolbar-group' : 'components-toolbar', className);

  // Normalize controls to nested array of objects (sets of controls)
  let controlSets;
  if (isNestedArray(controls)) {
    controlSets = controls;
  } else {
    controlSets = [controls];
  }
  if (isCollapsed) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(toolbar_group_collapsed, {
      label: title,
      controls: controlSets,
      className: finalClassName,
      children: children,
      ...props
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(toolbar_group_container, {
    className: finalClassName,
    ...props,
    children: [controlSets?.flatMap((controlSet, indexOfSet) => controlSet.map((control, indexOfControl) => /*#__PURE__*/(0,jsx_runtime.jsx)(toolbar_button/* default */.A, {
      containerClassName: indexOfSet > 0 && indexOfControl === 0 ? 'has-left-divider' : undefined,
      ...control
    }, [indexOfSet, indexOfControl].join()))), children]
  });
}
/* harmony default export */ const toolbar_group = (ToolbarGroup);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/toolbar/toolbar-item/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ toolbar_item)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/QZLXIDNP.js
var QZLXIDNP = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/QZLXIDNP.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/SOK7T35T.js
var SOK7T35T = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/SOK7T35T.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js
var _3ORBWXWF = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js
var _4R3V3JGP = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/7NHUGSTF.js
"use client";





// src/toolbar/toolbar-item.ts
var useToolbarItem = (0,_3ORBWXWF/* createHook */.ab)(
  (_a) => {
    var _b = _a, { store } = _b, props = (0,_4R3V3JGP/* __objRest */.YG)(_b, ["store"]);
    const context = (0,SOK7T35T/* useToolbarContext */.wU)();
    store = store || context;
    props = (0,QZLXIDNP/* useCompositeItem */.k)((0,_4R3V3JGP/* __spreadValues */.IA)({ store }, props));
    return props;
  }
);
var ToolbarItem = (0,_3ORBWXWF/* createMemoComponent */.MA)((props) => {
  const htmlProps = useToolbarItem(props);
  return (0,_3ORBWXWF/* createElement */.n)("button", htmlProps);
});
if (false) {}



// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+warning@3.0.1/node_modules/@wordpress/warning/build-module/index.js + 1 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+warning@3.0.1/node_modules/@wordpress/warning/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/toolbar/toolbar-context/index.js
var toolbar_context = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/toolbar/toolbar-context/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/toolbar/toolbar-item/index.js
/**
 * External dependencies
 */
// eslint-disable-next-line no-restricted-imports

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function toolbar_item_ToolbarItem({
  children,
  as: Component,
  ...props
}, ref) {
  const accessibleToolbarStore = (0,react.useContext)(toolbar_context/* default */.A);
  const isRenderProp = typeof children === 'function';
  if (!isRenderProp && !Component) {
    globalThis.SCRIPT_DEBUG === true ? (0,build_module/* default */.A)('`ToolbarItem` is a generic headless component. You must pass either a `children` prop as a function or an `as` prop as a component. ' + 'See https://developer.wordpress.org/block-editor/components/toolbar-item/') : void 0;
    return null;
  }
  const allProps = {
    ...props,
    ref,
    'data-toolbar-item': true
  };
  if (!accessibleToolbarStore) {
    if (Component) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
        ...allProps,
        children: children
      });
    }
    if (!isRenderProp) {
      return null;
    }
    return children(allProps);
  }
  const render = isRenderProp ? children : Component && /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
    children: children
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ToolbarItem, {
    ...allProps,
    store: accessibleToolbarStore,
    render: render
  });
}
/* harmony default export */ const toolbar_item = ((0,react.forwardRef)(toolbar_item_ToolbarItem));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/toolbar/toolbar/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ toolbar)
});

// UNUSED EXPORTS: Toolbar

// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+deprecated@4.0.1/node_modules/@wordpress/deprecated/build-module/index.js
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+deprecated@4.0.1/node_modules/@wordpress/deprecated/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/toolbar/toolbar-group/index.js + 2 modules
var toolbar_group = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/toolbar/toolbar-group/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/7GBW5FLS.js + 1 modules
var _7GBW5FLS = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/7GBW5FLS.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/EKQEJRUF.js
var EKQEJRUF = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/EKQEJRUF.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/IERTEJ3A.js
var IERTEJ3A = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/IERTEJ3A.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/Y3OOHFCN.js
var Y3OOHFCN = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/Y3OOHFCN.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/4R3V3JGP.js
var _4R3V3JGP = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/4R3V3JGP.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/toolbar/toolbar-store.js
"use client";








// src/toolbar/toolbar-store.ts
function createToolbarStore(props = {}) {
  var _a;
  const syncState = (_a = props.store) == null ? void 0 : _a.getState();
  return (0,IERTEJ3A/* createCompositeStore */.z)((0,_4R3V3JGP/* __spreadProps */.ko)((0,_4R3V3JGP/* __spreadValues */.IA)({}, props), {
    orientation: (0,Y3OOHFCN/* defaultValue */.Jh)(
      props.orientation,
      syncState == null ? void 0 : syncState.orientation,
      "horizontal"
    ),
    focusLoop: (0,Y3OOHFCN/* defaultValue */.Jh)(props.focusLoop, syncState == null ? void 0 : syncState.focusLoop, true)
  }));
}


;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/BPNXFCFY.js
"use client";



// src/toolbar/toolbar-store.ts

function useToolbarStoreProps(store, update, props) {
  return (0,_7GBW5FLS/* useCompositeStoreProps */.Y)(store, update, props);
}
function useToolbarStore(props = {}) {
  const [store, update] = (0,EKQEJRUF/* useStore */.Pj)(createToolbarStore, props);
  return useToolbarStoreProps(store, update, props);
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/7QTPYGNZ.js
var _7QTPYGNZ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/7QTPYGNZ.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/SOK7T35T.js
var SOK7T35T = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/SOK7T35T.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js
var _3ORBWXWF = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js
var _6O5OEQGF = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js
var _chunks_4R3V3JGP = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/toolbar/toolbar.js
"use client";
















// src/toolbar/toolbar.tsx

var useToolbar = (0,_3ORBWXWF/* createHook */.ab)(
  (_a) => {
    var _b = _a, {
      store: storeProp,
      orientation: orientationProp,
      virtualFocus,
      focusLoop,
      rtl
    } = _b, props = (0,_chunks_4R3V3JGP/* __objRest */.YG)(_b, [
      "store",
      "orientation",
      "virtualFocus",
      "focusLoop",
      "rtl"
    ]);
    const context = (0,SOK7T35T/* useToolbarProviderContext */.P$)();
    storeProp = storeProp || context;
    const store = useToolbarStore({
      store: storeProp,
      orientation: orientationProp,
      virtualFocus,
      focusLoop,
      rtl
    });
    const orientation = store.useState(
      (state) => state.orientation === "both" ? void 0 : state.orientation
    );
    props = (0,_6O5OEQGF/* useWrapElement */.w7)(
      props,
      (element) => /* @__PURE__ */ (0,jsx_runtime.jsx)(SOK7T35T/* ToolbarScopedContextProvider */._N, { value: store, children: element }),
      [store]
    );
    props = (0,_chunks_4R3V3JGP/* __spreadValues */.IA)({
      role: "toolbar",
      "aria-orientation": orientation
    }, props);
    props = (0,_7QTPYGNZ/* useComposite */.T)((0,_chunks_4R3V3JGP/* __spreadValues */.IA)({ store }, props));
    return props;
  }
);
var Toolbar = (0,_3ORBWXWF/* createComponent */.a0)((props) => {
  const htmlProps = useToolbar(props);
  return (0,_3ORBWXWF/* createElement */.n)("div", htmlProps);
});
if (false) {}


// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var i18n_build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/toolbar/toolbar-context/index.js
var toolbar_context = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/toolbar/toolbar-context/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/toolbar/toolbar/toolbar-container.js
/**
 * External dependencies
 */
// eslint-disable-next-line no-restricted-imports

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function UnforwardedToolbarContainer({
  label,
  ...props
}, ref) {
  const toolbarStore = useToolbarStore({
    focusLoop: true,
    rtl: (0,i18n_build_module/* isRTL */.V8)()
  });
  return (
    /*#__PURE__*/
    // This will provide state for `ToolbarButton`'s
    (0,jsx_runtime.jsx)(toolbar_context/* default */.A.Provider, {
      value: toolbarStore,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Toolbar, {
        ref: ref,
        "aria-label": label,
        store: toolbarStore,
        ...props
      })
    })
  );
}
const ToolbarContainer = (0,react.forwardRef)(UnforwardedToolbarContainer);
/* harmony default export */ const toolbar_container = (ToolbarContainer);
//# sourceMappingURL=toolbar-container.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-system-provider.js
var context_system_provider = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-system-provider.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/toolbar/toolbar/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




function UnforwardedToolbar({
  className,
  label,
  variant,
  ...props
}, ref) {
  const isVariantDefined = variant !== undefined;
  const contextSystemValue = (0,react.useMemo)(() => {
    if (isVariantDefined) {
      return {};
    }
    return {
      DropdownMenu: {
        variant: 'toolbar'
      },
      Dropdown: {
        variant: 'toolbar'
      }
    };
  }, [isVariantDefined]);
  if (!label) {
    (0,build_module/* default */.A)('Using Toolbar without label prop', {
      since: '5.6',
      alternative: 'ToolbarGroup component',
      link: 'https://developer.wordpress.org/block-editor/components/toolbar/'
    });
    // Extracting title from `props` because `ToolbarGroup` doesn't accept it.
    const {
      title: _title,
      ...restProps
    } = props;
    return /*#__PURE__*/(0,jsx_runtime.jsx)(toolbar_group/* default */.A, {
      isCollapsed: false,
      ...restProps,
      className: className
    });
  }
  // `ToolbarGroup` already uses components-toolbar for compatibility reasons.
  const finalClassName = (0,clsx/* default */.A)('components-accessible-toolbar', className, variant && `is-${variant}`);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(context_system_provider/* ContextSystemProvider */.c7, {
    value: contextSystemValue,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(toolbar_container, {
      className: finalClassName,
      label: label,
      ref: ref,
      ...props
    })
  });
}

/**
 * Renders a toolbar.
 *
 * To add controls, simply pass `ToolbarButton` components as children.
 *
 * ```jsx
 * import { Toolbar, ToolbarButton } from '@wordpress/components';
 * import { formatBold, formatItalic, link } from '@wordpress/icons';
 *
 * function MyToolbar() {
 *   return (
 *     <Toolbar label="Options">
 *       <ToolbarButton icon={ formatBold } label="Bold" />
 *       <ToolbarButton icon={ formatItalic } label="Italic" />
 *       <ToolbarButton icon={ link } label="Link" />
 *     </Toolbar>
 *   );
 * }
 * ```
 */
const toolbar_Toolbar = (0,react.forwardRef)(UnforwardedToolbar);
/* harmony default export */ const toolbar = (toolbar_Toolbar);
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

/***/ })

}]);