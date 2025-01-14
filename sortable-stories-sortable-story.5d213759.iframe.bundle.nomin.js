"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[5264],{

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

/***/ "../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ G),
/* harmony export */   jl: () => (/* binding */ Circle),
/* harmony export */   rw: () => (/* binding */ Rect),
/* harmony export */   t4: () => (/* binding */ SVG),
/* harmony export */   wA: () => (/* binding */ Path)
/* harmony export */ });
/* unused harmony exports Line, Polygon, Defs, RadialGradient, LinearGradient, Stop */
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
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

const Circle = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)('circle', props);

/**
 * @param {import('react').ComponentPropsWithoutRef<'g'>} props
 *
 * @return {JSX.Element} G component
 */
const G = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)('g', props);

/**
 * @param {import('react').ComponentPropsWithoutRef<'line'>} props
 *
 * @return {JSX.Element} Path component
 */
const Line = props => createElement('line', props);

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
const Rect = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)('rect', props);

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
const SVG = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(
/**
 * @param {SVGProps}                                    props isPressed indicates whether the SVG should appear as pressed.
 *                                                            Other props will be passed through to svg component.
 * @param {import('react').ForwardedRef<SVGSVGElement>} ref   The forwarded ref to the SVG element.
 *
 * @return {JSX.Element} Stop component
 */
({
  className,
  isPressed,
  ...props
}, ref) => {
  const appliedProps = {
    ...props,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(className, {
      'is-pressed': isPressed
    }) || undefined,
    'aria-hidden': true,
    focusable: false
  };

  // Disable reason: We need to have a way to render HTML tag for web.
  // eslint-disable-next-line react/forbid-elements
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    ...appliedProps,
    ref: ref
  });
});
SVG.displayName = 'SVG';
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export clsx */
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }),

/***/ "../../packages/js/components/src/sortable/stories/sortable.story.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Basic: () => (/* binding */ Basic),
  CustomHandle: () => (/* binding */ CustomHandle),
  "default": () => (/* binding */ sortable_story)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js
var icon = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js
var svg = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/wordpress.js
/**
 * WordPress dependencies
 */


const wordpress = /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* SVG */.t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24",
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
    d: "M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"
  })
});
/* harmony default export */ const library_wordpress = (wordpress);
//# sourceMappingURL=wordpress.js.map
// EXTERNAL MODULE: ../../packages/js/components/src/sortable/sortable.tsx
var sortable = __webpack_require__("../../packages/js/components/src/sortable/sortable.tsx");
// EXTERNAL MODULE: ../../packages/js/components/src/sortable/sortable-handle.tsx + 1 modules
var sortable_handle = __webpack_require__("../../packages/js/components/src/sortable/sortable-handle.tsx");
// EXTERNAL MODULE: ../../packages/js/components/src/list-item/list-item.tsx + 1 modules
var list_item = __webpack_require__("../../packages/js/components/src/list-item/list-item.tsx");
;// CONCATENATED MODULE: ../../packages/js/components/src/sortable/stories/sortable.story.tsx

/**
 * External dependencies
 */




/**
 * Internal dependencies
 */



var Basic = function Basic() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(sortable/* Sortable */.L, {
    onOrderChange: function onOrderChange(items) {
      return (
        // eslint-disable-next-line no-console
        console.log('Order changed: ' + items.map(function (item) {
          return item.key;
        }))
      );
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(list_item/* ListItem */.c, {
      children: "Item 1"
    }, 'item-1'), /*#__PURE__*/(0,jsx_runtime.jsx)(list_item/* ListItem */.c, {
      children: "Item 2"
    }, 'item-2'), /*#__PURE__*/(0,jsx_runtime.jsx)(list_item/* ListItem */.c, {
      children: "Item 3"
    }, 'item-3'), /*#__PURE__*/(0,jsx_runtime.jsx)(list_item/* ListItem */.c, {
      children: "Item 4"
    }, 'item-4'), /*#__PURE__*/(0,jsx_runtime.jsx)(list_item/* ListItem */.c, {
      children: "Item 5"
    }, 'item-5')]
  });
};
var CustomHandle = function CustomHandle() {
  var CustomListItem = function CustomListItem(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(sortable_handle/* SortableHandle */.D, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(icon/* default */.A, {
          icon: library_wordpress,
          size: 16
        })
      }), children]
    });
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(sortable/* Sortable */.L, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(CustomListItem, {
      children: "Item 1"
    }, "item-1"), /*#__PURE__*/(0,jsx_runtime.jsx)(CustomListItem, {
      children: "Item 2"
    }, "item-2"), /*#__PURE__*/(0,jsx_runtime.jsx)(CustomListItem, {
      children: "Item 3"
    }, "item-3"), /*#__PURE__*/(0,jsx_runtime.jsx)(CustomListItem, {
      children: "Item 4"
    }, "item-4"), /*#__PURE__*/(0,jsx_runtime.jsx)(CustomListItem, {
      children: "Item 5"
    }, "item-5")]
  });
};
/* harmony default export */ const sortable_story = ({
  title: 'Components/Sortable',
  component: sortable/* Sortable */.L
});
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "() => {\n  return <Sortable onOrderChange={items =>\n  // eslint-disable-next-line no-console\n  console.log('Order changed: ' + items.map(item => item.key))}>\n            <ListItem key={'item-1'}>Item 1</ListItem>\n            <ListItem key={'item-2'}>Item 2</ListItem>\n            <ListItem key={'item-3'}>Item 3</ListItem>\n            <ListItem key={'item-4'}>Item 4</ListItem>\n            <ListItem key={'item-5'}>Item 5</ListItem>\n        </Sortable>;\n}",
      ...Basic.parameters?.docs?.source
    }
  }
};
CustomHandle.parameters = {
  ...CustomHandle.parameters,
  docs: {
    ...CustomHandle.parameters?.docs,
    source: {
      originalSource: "() => {\n  type CustomListItemProps = {\n    children: React.ReactNode;\n    onDragEnd?: DragEventHandler<Element>;\n    onDragStart?: DragEventHandler<Element>;\n  };\n  const CustomListItem = ({\n    children\n  }: CustomListItemProps) => {\n    return <>\n                <SortableHandle>\n                    <Icon icon={wordpress} size={16} />\n                </SortableHandle>\n                {children}\n            </>;\n  };\n  return <Sortable>\n            <CustomListItem key=\"item-1\">Item 1</CustomListItem>\n            <CustomListItem key=\"item-2\">Item 2</CustomListItem>\n            <CustomListItem key=\"item-3\">Item 3</CustomListItem>\n            <CustomListItem key=\"item-4\">Item 4</CustomListItem>\n            <CustomListItem key=\"item-5\">Item 5</CustomListItem>\n        </Sortable>;\n}",
      ...CustomHandle.parameters?.docs?.source
    }
  }
};

/***/ })

}]);