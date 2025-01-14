"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[5633],{

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

/***/ "../../packages/js/product-editor/src/images/shopping-bags/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ ShoppingBags)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * External dependencies
 */


function ShoppingBags(_ref) {
  var _ref$colorOne = _ref.colorOne,
    colorOne = _ref$colorOne === void 0 ? '#E0E0E0' : _ref$colorOne,
    _ref$colorTwo = _ref.colorTwo,
    colorTwo = _ref$colorTwo === void 0 ? '#F0F0F0' : _ref$colorTwo,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? '88' : _ref$size,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__/* .SVG */ .t4, {
    width: size,
    height: size,
    viewBox: "0 0 88 88",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: style,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__/* .Path */ .wA, {
      d: "M59.5299 29.3511H6.48494C4.38544 44.6382 0.74386 74.8826 0.105058 79.5685C-0.505262 84.0386 1.48031 87.9998 7.72592 87.9998H58.293C64.5386 87.9998 66.5241 84.0386 65.9138 79.5685C65.275 74.8826 61.6294 44.6382 59.534 29.3511H59.5299Z",
      fill: colorOne
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__/* .Path */ .wA, {
      d: "M45.1549 17.5C42.7177 15.6069 39.3976 14.6787 35.0155 14.6665C34.987 14.6665 31.024 14.6665 30.9996 14.6665C26.6175 14.6787 23.3014 15.6069 20.8601 17.5C17.9916 19.7269 16.5391 23.106 16.5391 27.5476V40.2454H23.8629V28.5898C23.8629 25.569 25.2422 22.0393 30.9833 21.9986C31.0159 21.9986 35.0033 21.9986 35.0358 21.9986C40.7769 22.0393 42.1562 25.569 42.1562 28.5898V40.2454H49.4801V27.5476C49.4801 23.106 48.0275 19.7269 45.159 17.5H45.1549Z",
      fill: colorTwo
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__/* .Path */ .wA, {
      d: "M47.3921 47.6711L44.0312 87.9998H87.9987L84.2676 47.6711H47.3921Z",
      fill: colorTwo
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__/* .Path */ .wA, {
      d: "M66.0147 65.9912C60.2736 65.9912 56.8477 62.4738 56.8477 56.5828V51.3188H60.5096V56.5828C60.5096 62.3272 64.6516 62.3272 66.0147 62.3272C67.3777 62.3272 71.5197 62.3272 71.5197 56.5828V51.3188H75.1817V56.5828C75.1817 62.4738 71.7557 65.9912 66.0147 65.9912Z",
      fill: colorOne
    })]
  });
}
try {
    // @ts-ignore
    ShoppingBags.displayName = "ShoppingBags";
    // @ts-ignore
    ShoppingBags.__docgenInfo = { "description": "", "displayName": "ShoppingBags", "props": { "colorOne": { "defaultValue": { value: "#E0E0E0" }, "description": "", "name": "colorOne", "required": false, "type": { "name": "string" } }, "colorTwo": { "defaultValue": { value: "#F0F0F0" }, "description": "", "name": "colorTwo", "required": false, "type": { "name": "string" } }, "size": { "defaultValue": { value: "88" }, "description": "", "name": "size", "required": false, "type": { "name": "string" } }, "style": { "defaultValue": { value: "{}" }, "description": "", "name": "style", "required": false, "type": { "name": "{}" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/product-editor/src/images/shopping-bags/index.tsx#ShoppingBags"] = { docgenInfo: ShoppingBags.__docgenInfo, name: "ShoppingBags", path: "../../packages/js/product-editor/src/images/shopping-bags/index.tsx#ShoppingBags" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export clsx */
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

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

/***/ "../../packages/js/product-editor/src/images/shopping-bags/stories/shopping-bags.story.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../packages/js/product-editor/src/images/shopping-bags/index.tsx");
/**
 * Internal dependencies
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'Product Editor/images/ShoppingBags',
  component: _index__WEBPACK_IMPORTED_MODULE_0__/* .ShoppingBags */ .M,
  args: {
    size: '88',
    colorOne: '#E0E0E0',
    colorTwo: '#F0F0F0'
  }
});
var Default = _index__WEBPACK_IMPORTED_MODULE_0__/* .ShoppingBags */ .M;
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "ShoppingBags",
      ...Default.parameters?.docs?.source
    }
  }
};
try {
    // @ts-ignore
    Default.displayName = "Default";
    // @ts-ignore
    Default.__docgenInfo = { "description": "", "displayName": "Default", "props": { "colorOne": { "defaultValue": null, "description": "", "name": "colorOne", "required": false, "type": { "name": "string" } }, "colorTwo": { "defaultValue": null, "description": "", "name": "colorTwo", "required": false, "type": { "name": "string" } }, "size": { "defaultValue": null, "description": "", "name": "size", "required": false, "type": { "name": "string" } }, "style": { "defaultValue": null, "description": "", "name": "style", "required": false, "type": { "name": "{}" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/product-editor/src/images/shopping-bags/stories/shopping-bags.story.tsx#Default"] = { docgenInfo: Default.__docgenInfo, name: "Default", path: "../../packages/js/product-editor/src/images/shopping-bags/stories/shopping-bags.story.tsx#Default" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ })

}]);