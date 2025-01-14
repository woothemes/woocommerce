"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[8789],{

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

/***/ "../../packages/js/product-editor/src/images/cash-register/stories/cash-register.story.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Default: () => (/* binding */ Default),
  "default": () => (/* binding */ cash_register_story)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js
var svg = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../packages/js/product-editor/src/images/cash-register/index.tsx
/**
 * External dependencies
 */


function CashRegister(_ref) {
  var _ref$colorOne = _ref.colorOne,
    colorOne = _ref$colorOne === void 0 ? '#E0E0E0' : _ref$colorOne,
    _ref$colorTwo = _ref.colorTwo,
    colorTwo = _ref$colorTwo === void 0 ? '#F0F0F0' : _ref$colorTwo,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? '88' : _ref$size,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* SVG */.t4, {
    width: size,
    height: size,
    viewBox: "0 0 88 88",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: style,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(svg.G, {
      clipPath: "url(#clip0_13540_198076)",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
        d: "M77.2539 14.7807L39.9517 14.6667C35.4172 14.6667 32.8506 17.199 32.8506 21.718V36.7241L10.818 36.6997C6.29575 36.6997 3.76167 39.2645 3.76167 43.7957L3.66797 81.0294L84.3632 81.0742V21.8319C84.3632 17.313 81.7965 14.7807 77.262 14.7807H77.2539Z",
        fill: colorOne
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
        d: "M47.5672 47.6794H40.2461V54.9953H47.5672V47.6794Z",
        fill: colorTwo
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
        d: "M62.3836 47.6794H55.0625V54.9953H62.3836V47.6794Z",
        fill: colorTwo
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
        d: "M77.0242 47.6794H69.7031V54.9953H77.0242V47.6794Z",
        fill: colorTwo
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
        d: "M47.5672 62.3232H40.2461V69.6391H47.5672V62.3232Z",
        fill: colorTwo
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
        d: "M62.3836 62.3232H55.0625V69.6391H62.3836V62.3232Z",
        fill: colorTwo
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
        d: "M76.9617 62.3232H69.6406V69.6391H76.9617V62.3232Z",
        fill: colorTwo
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
        d: "M77.0221 36.6795L40.3555 36.7243V22.0682L77.0221 22.0234V36.6795Z",
        fill: colorTwo
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
        d: "M88 80.8988V80.7034L0 80.6667V87.9581L88 87.9948V80.8988Z",
        fill: colorTwo
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
        d: "M29.4451 14.6667C27.844 14.6667 27.3225 16.6901 25.7621 16.6901C24.2018 16.6901 23.6844 14.6667 22.0832 14.6667C20.4821 14.6667 19.9607 16.6901 18.4003 16.6901C16.8399 16.6901 16.3225 14.6667 14.7173 14.6667C13.1121 14.6667 12.5947 16.6901 11.0344 16.6901C9.47399 16.6901 8.95658 14.6667 7.35547 14.6667V19.5643V62.3275H29.4451V14.6667Z",
        fill: colorTwo
      })]
    })
  });
}
try {
    // @ts-ignore
    CashRegister.displayName = "CashRegister";
    // @ts-ignore
    CashRegister.__docgenInfo = { "description": "", "displayName": "CashRegister", "props": { "colorOne": { "defaultValue": { value: "#E0E0E0" }, "description": "", "name": "colorOne", "required": false, "type": { "name": "string" } }, "colorTwo": { "defaultValue": { value: "#F0F0F0" }, "description": "", "name": "colorTwo", "required": false, "type": { "name": "string" } }, "size": { "defaultValue": { value: "88" }, "description": "", "name": "size", "required": false, "type": { "name": "string" } }, "style": { "defaultValue": { value: "{}" }, "description": "", "name": "style", "required": false, "type": { "name": "{}" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/product-editor/src/images/cash-register/index.tsx#CashRegister"] = { docgenInfo: CashRegister.__docgenInfo, name: "CashRegister", path: "../../packages/js/product-editor/src/images/cash-register/index.tsx#CashRegister" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ../../packages/js/product-editor/src/images/cash-register/stories/cash-register.story.tsx
/**
 * Internal dependencies
 */

/* harmony default export */ const cash_register_story = ({
  title: 'Product Editor/images/CashRegister',
  component: CashRegister,
  args: {
    size: '88',
    colorOne: '#E0E0E0',
    colorTwo: '#F0F0F0'
  }
});
var Default = CashRegister;
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "CashRegister",
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
        STORYBOOK_REACT_CLASSES["../../packages/js/product-editor/src/images/cash-register/stories/cash-register.story.tsx#Default"] = { docgenInfo: Default.__docgenInfo, name: "Default", path: "../../packages/js/product-editor/src/images/cash-register/stories/cash-register.story.tsx#Default" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ })

}]);