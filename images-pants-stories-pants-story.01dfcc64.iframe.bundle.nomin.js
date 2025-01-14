"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[4565],{

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * WordPress dependencies
 */

const instanceMap = new WeakMap();

/**
 * Creates a new id for a given object.
 *
 * @param object Object reference to create an id for.
 * @return The instance id (index).
 */
function createId(object) {
  const instances = instanceMap.get(object) || 0;
  instanceMap.set(object, instances + 1);
  return instances;
}

/**
 * Specify the useInstanceId *function* signatures.
 *
 * More accurately, useInstanceId distinguishes between three different
 * signatures:
 *
 * 1. When only object is given, the returned value is a number
 * 2. When object and prefix is given, the returned value is a string
 * 3. When preferredId is given, the returned value is the type of preferredId
 *
 * @param object Object reference to create an id for.
 */

/**
 * Provides a unique instance ID.
 *
 * @param object        Object reference to create an id for.
 * @param [prefix]      Prefix for the unique id.
 * @param [preferredId] Default ID to use.
 * @return The unique instance id.
 */
function useInstanceId(object, prefix, preferredId) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (preferredId) {
      return preferredId;
    }
    const id = createId(object);
    return prefix ? `${prefix}-${id}` : id;
  }, [object, preferredId, prefix]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInstanceId);
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

/***/ "../../packages/js/product-editor/src/images/pants/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ Pants)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * External dependencies
 */



function Pants(_ref) {
  var _ref$colorOne = _ref.colorOne,
    colorOne = _ref$colorOne === void 0 ? '#DDDDDD' : _ref$colorOne,
    _ref$colorTwo = _ref.colorTwo,
    colorTwo = _ref$colorTwo === void 0 ? '#F0F0F0' : _ref$colorTwo,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 50 : _ref$size,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style;
  var clipPathId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(Pants, 'pants');
  var rate = 50 / 72;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__/* .SVG */ .t4, {
    width: size,
    height: Math.round(size / rate),
    viewBox: "0 0 50 72",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: style,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.G, {
      clipPath: "url(#".concat(clipPathId, ")"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__/* .Path */ .wA, {
        d: "M44.6084 21.3845C40.788 21.6427 35.5059 20.8456 35.1404 16.333C34.8746 13.0889 34.5867 9.04771 34.3431 5.7811H42.9474L42.3273 0H8.34205L7.72192 5.7811H16.3262C16.0826 9.04771 15.8057 13.0889 15.5289 16.333C15.1635 20.8456 9.87022 21.6314 6.06086 21.3845L0.667969 72H14.0007C14.0007 72 21.7745 32.0711 22.904 26.0318C23.4909 22.9111 24.3989 22.2264 25.3291 22.2264C26.2593 22.2264 27.1673 22.9224 27.7543 26.0318C28.8948 32.0599 36.6575 72 36.6575 72H49.9903L44.5974 21.3845H44.6084Z",
        fill: colorTwo
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__/* .Path */ .wA, {
        d: "M15.5383 16.3332C15.8041 13.089 16.092 9.04785 16.3356 5.78125H7.73137L6.07031 21.3846C9.89074 21.6428 15.1729 20.8458 15.5383 16.3332Z",
        fill: colorOne
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__/* .Path */ .wA, {
        d: "M35.1293 16.3332C35.4948 20.8458 40.788 21.6316 44.5974 21.3846L42.9363 5.78125H34.332C34.5757 9.04785 34.8525 13.089 35.1293 16.3332Z",
        fill: colorOne
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", {
        id: clipPathId,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__/* .Rect */ .rw, {
          width: "49.3334",
          height: "72",
          fill: "white",
          transform: "translate( 0.667969 )"
        })
      })
    })]
  });
}
try {
    // @ts-ignore
    Pants.displayName = "Pants";
    // @ts-ignore
    Pants.__docgenInfo = { "description": "", "displayName": "Pants", "props": { "colorOne": { "defaultValue": { value: "#DDDDDD" }, "description": "", "name": "colorOne", "required": false, "type": { "name": "string" } }, "colorTwo": { "defaultValue": { value: "#F0F0F0" }, "description": "", "name": "colorTwo", "required": false, "type": { "name": "string" } }, "size": { "defaultValue": { value: "50" }, "description": "", "name": "size", "required": false, "type": { "name": "number" } }, "style": { "defaultValue": { value: "{}" }, "description": "", "name": "style", "required": false, "type": { "name": "{}" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/product-editor/src/images/pants/index.tsx#Pants"] = { docgenInfo: Pants.__docgenInfo, name: "Pants", path: "../../packages/js/product-editor/src/images/pants/index.tsx#Pants" };
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

/***/ "../../packages/js/product-editor/src/images/pants/stories/pants.story.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../packages/js/product-editor/src/images/pants/index.tsx");
/**
 * Internal dependencies
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'Product Editor/images/Pants',
  component: _index__WEBPACK_IMPORTED_MODULE_0__/* .Pants */ .t,
  args: {
    size: 50,
    colorOne: '#E0E0E0',
    colorTwo: '#F0F0F0'
  }
});
var Default = _index__WEBPACK_IMPORTED_MODULE_0__/* .Pants */ .t;
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "Pants",
      ...Default.parameters?.docs?.source
    }
  }
};
try {
    // @ts-ignore
    Default.displayName = "Default";
    // @ts-ignore
    Default.__docgenInfo = { "description": "", "displayName": "Default", "props": { "colorOne": { "defaultValue": null, "description": "", "name": "colorOne", "required": false, "type": { "name": "string" } }, "colorTwo": { "defaultValue": null, "description": "", "name": "colorTwo", "required": false, "type": { "name": "string" } }, "size": { "defaultValue": null, "description": "", "name": "size", "required": false, "type": { "name": "number" } }, "style": { "defaultValue": null, "description": "", "name": "style", "required": false, "type": { "name": "{}" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/product-editor/src/images/pants/stories/pants.story.tsx#Default"] = { docgenInfo: Default.__docgenInfo, name: "Default", path: "../../packages/js/product-editor/src/images/pants/stories/pants.story.tsx#Default" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ })

}]);