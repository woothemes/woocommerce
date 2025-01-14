"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[5452],{

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

/***/ "../../node_modules/.pnpm/@wordpress+primitives@3.4.1/node_modules/@wordpress/primitives/build-module/svg/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t4: () => (/* binding */ SVG),
/* harmony export */   wA: () => (/* binding */ Path)
/* harmony export */ });
/* unused harmony exports Circle, G, Polygon, Rect, Defs, RadialGradient, LinearGradient, Stop */
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
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

const Circle = props => createElement('circle', props);
/**
 * @param {import('react').ComponentPropsWithoutRef<'g'>} props
 *
 * @return {JSX.Element} G component
 */

const G = props => createElement('g', props);
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

const Rect = props => createElement('rect', props);
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
/**
 *
 * @param {SVGProps} props isPressed indicates whether the SVG should appear as pressed.
 *                         Other props will be passed through to svg component.
 *
 * @return {JSX.Element} Stop component
 */

const SVG = _ref => {
  let {
    className,
    isPressed,
    ...props
  } = _ref;
  const appliedProps = { ...props,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, {
      'is-pressed': isPressed
    }) || undefined,
    'aria-hidden': true,
    focusable: false
  }; // Disable reason: We need to have a way to render HTML tag for web.
  // eslint-disable-next-line react/forbid-elements

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", appliedProps);
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../packages/js/components/src/pagination/page-size-picker.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ PageSizePicker),
/* harmony export */   v: () => (/* binding */ DEFAULT_PER_PAGE_OPTIONS)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/select-control/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");





/**
 * External dependencies
 */



var DEFAULT_PER_PAGE_OPTIONS = [25, 50, 75, 100];
function PageSizePicker(_ref) {
  var perPage = _ref.perPage,
    currentPage = _ref.currentPage,
    total = _ref.total,
    setCurrentPage = _ref.setCurrentPage,
    _ref$setPerPageChange = _ref.setPerPageChange,
    setPerPageChange = _ref$setPerPageChange === void 0 ? function () {} : _ref$setPerPageChange,
    _ref$perPageOptions = _ref.perPageOptions,
    perPageOptions = _ref$perPageOptions === void 0 ? DEFAULT_PER_PAGE_OPTIONS : _ref$perPageOptions,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Rows per page', 'woocommerce') : _ref$label;
  function perPageChange(newPerPage) {
    setPerPageChange(parseInt(newPerPage, 10));
    var newMaxPage = Math.ceil(total / parseInt(newPerPage, 10));
    if (currentPage > newMaxPage) {
      setCurrentPage(newMaxPage);
    }
  }

  // @todo Replace this with a styleized Select drop-down/control?
  var pickerOptions = perPageOptions.map(function (option) {
    return {
      value: option.toString(),
      label: option.toString()
    };
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    className: "woocommerce-pagination__per-page-picker",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      label: label,
      labelPosition: "side",
      value: perPage.toString(),
      onChange: perPageChange,
      options: pickerOptions
    })
  });
}
try {
    // @ts-ignore
    PageSizePicker.displayName = "PageSizePicker";
    // @ts-ignore
    PageSizePicker.__docgenInfo = { "description": "", "displayName": "PageSizePicker", "props": { "currentPage": { "defaultValue": null, "description": "", "name": "currentPage", "required": true, "type": { "name": "number" } }, "perPage": { "defaultValue": null, "description": "", "name": "perPage", "required": true, "type": { "name": "number" } }, "total": { "defaultValue": null, "description": "", "name": "total", "required": true, "type": { "name": "number" } }, "setCurrentPage": { "defaultValue": null, "description": "", "name": "setCurrentPage", "required": true, "type": { "name": "(page: number, action?: \"next\" | \"previous\" | \"goto\" | undefined) => void" } }, "setPerPageChange": { "defaultValue": { value: "() => {}" }, "description": "", "name": "setPerPageChange", "required": false, "type": { "name": "((perPage: number) => void)" } }, "perPageOptions": { "defaultValue": { value: "[ 25, 50, 75, 100 ]" }, "description": "", "name": "perPageOptions", "required": false, "type": { "name": "number[]" } }, "label": { "defaultValue": { value: "__( 'Rows per page', 'woocommerce' )" }, "description": "", "name": "label", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/pagination/page-size-picker.tsx#PageSizePicker"] = { docgenInfo: PageSizePicker.__docgenInfo, name: "PageSizePicker", path: "../../packages/js/components/src/pagination/page-size-picker.tsx#PageSizePicker" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../packages/js/components/src/pagination/pagination.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  d: () => (/* binding */ Pagination)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/icon/index.js + 1 modules
var icon = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/icon/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-left.js
var chevron_left = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-left.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-right.js
var chevron_right = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-right.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../packages/js/components/src/pagination/page-arrows.tsx
/**
 * External dependencies
 */





function PageArrows(_ref) {
  var pageCount = _ref.pageCount,
    currentPage = _ref.currentPage,
    _ref$showPageArrowsLa = _ref.showPageArrowsLabel,
    showPageArrowsLabel = _ref$showPageArrowsLa === void 0 ? true : _ref$showPageArrowsLa,
    setCurrentPage = _ref.setCurrentPage;
  function previousPage(event) {
    event.stopPropagation();
    if (currentPage - 1 < 1) {
      return;
    }
    setCurrentPage(currentPage - 1, 'previous');
  }
  function nextPage(event) {
    event.stopPropagation();
    if (currentPage + 1 > pageCount) {
      return;
    }
    setCurrentPage(currentPage + 1, 'next');
  }
  if (pageCount <= 1) {
    return null;
  }
  var previousLinkClass = classnames_default()('woocommerce-pagination__link', {
    'is-active': currentPage > 1
  });
  var nextLinkClass = classnames_default()('woocommerce-pagination__link', {
    'is-active': currentPage < pageCount
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "woocommerce-pagination__page-arrows",
    children: [showPageArrowsLabel && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: "woocommerce-pagination__page-arrows-label",
      role: "status",
      "aria-live": "polite",
      children: (0,build_module/* sprintf */.nv)(/* translators: 1: current page number, 2: total number of pages */
      (0,build_module.__)('Page %1$d of %2$d', 'woocommerce'), currentPage, pageCount)
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "woocommerce-pagination__page-arrows-buttons",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
        className: previousLinkClass,
        disabled: !(currentPage > 1),
        onClick: previousPage,
        label: (0,build_module.__)('Previous Page', 'woocommerce'),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(icon/* default */.A, {
          icon: chevron_left/* default */.A
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
        className: nextLinkClass,
        disabled: !(currentPage < pageCount),
        onClick: nextPage,
        label: (0,build_module.__)('Next Page', 'woocommerce'),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(icon/* default */.A, {
          icon: chevron_right/* default */.A
        })
      })]
    })]
  });
}
try {
    // @ts-ignore
    PageArrows.displayName = "PageArrows";
    // @ts-ignore
    PageArrows.__docgenInfo = { "description": "", "displayName": "PageArrows", "props": { "currentPage": { "defaultValue": null, "description": "", "name": "currentPage", "required": true, "type": { "name": "number" } }, "pageCount": { "defaultValue": null, "description": "", "name": "pageCount", "required": true, "type": { "name": "number" } }, "showPageArrowsLabel": { "defaultValue": { value: "true" }, "description": "", "name": "showPageArrowsLabel", "required": false, "type": { "name": "boolean" } }, "setCurrentPage": { "defaultValue": null, "description": "", "name": "setCurrentPage", "required": true, "type": { "name": "(page: number, action?: \"next\" | \"previous\" | \"goto\" | undefined) => void" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/pagination/page-arrows.tsx#PageArrows"] = { docgenInfo: PageArrows.__docgenInfo, name: "PageArrows", path: "../../packages/js/components/src/pagination/page-arrows.tsx#PageArrows" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.parse-int.js
var es_parse_int = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.parse-int.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.number.is-finite.js
var es_number_is_finite = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.number.is-finite.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.number.constructor.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
;// CONCATENATED MODULE: ../../packages/js/components/src/pagination/page-picker.tsx




/**
 * External dependencies
 */





function PagePicker(_ref) {
  var pageCount = _ref.pageCount,
    currentPage = _ref.currentPage,
    setCurrentPage = _ref.setCurrentPage;
  var _useState = (0,react.useState)(currentPage),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  function onInputChange(event) {
    setInputValue(parseInt(event.currentTarget.value, 10));
  }
  function onInputBlur(event) {
    var newPage = parseInt(event.target.value, 10);
    if (newPage !== currentPage && Number.isFinite(newPage) && newPage > 0 && pageCount && pageCount >= newPage) {
      setCurrentPage(newPage, 'goto');
    }
  }
  function selectInputValue(event) {
    event.currentTarget.select();
  }
  var isError = currentPage < 1 || currentPage > pageCount;
  var inputClass = classnames_default()('woocommerce-pagination__page-picker-input', {
    'has-error': isError
  });
  var instanceId = (0,lodash.uniqueId)('woocommerce-pagination-page-picker-');
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "woocommerce-pagination__page-picker",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("label", {
      htmlFor: instanceId,
      className: "woocommerce-pagination__page-picker-label",
      children: [(0,build_module.__)('Go to page', 'woocommerce'), /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
        id: instanceId,
        className: inputClass,
        "aria-invalid": isError,
        type: "number",
        onClick: selectInputValue,
        onChange: onInputChange,
        onBlur: onInputBlur,
        value: inputValue,
        min: 1,
        max: pageCount
      })]
    })
  });
}
try {
    // @ts-ignore
    PagePicker.displayName = "PagePicker";
    // @ts-ignore
    PagePicker.__docgenInfo = { "description": "", "displayName": "PagePicker", "props": { "currentPage": { "defaultValue": null, "description": "", "name": "currentPage", "required": true, "type": { "name": "number" } }, "pageCount": { "defaultValue": null, "description": "", "name": "pageCount", "required": true, "type": { "name": "number" } }, "setCurrentPage": { "defaultValue": null, "description": "", "name": "setCurrentPage", "required": true, "type": { "name": "(page: number, action?: \"next\" | \"previous\" | \"goto\" | undefined) => void" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/pagination/page-picker.tsx#PagePicker"] = { docgenInfo: PagePicker.__docgenInfo, name: "PagePicker", path: "../../packages/js/components/src/pagination/page-picker.tsx#PagePicker" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../../packages/js/components/src/pagination/page-size-picker.tsx
var page_size_picker = __webpack_require__("../../packages/js/components/src/pagination/page-size-picker.tsx");
;// CONCATENATED MODULE: ../../packages/js/components/src/pagination/pagination.tsx
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




function Pagination(_ref) {
  var page = _ref.page,
    _ref$onPageChange = _ref.onPageChange,
    onPageChange = _ref$onPageChange === void 0 ? function () {} : _ref$onPageChange,
    total = _ref.total,
    perPage = _ref.perPage,
    _ref$onPerPageChange = _ref.onPerPageChange,
    onPerPageChange = _ref$onPerPageChange === void 0 ? function () {} : _ref$onPerPageChange,
    _ref$showPagePicker = _ref.showPagePicker,
    showPagePicker = _ref$showPagePicker === void 0 ? true : _ref$showPagePicker,
    _ref$showPerPagePicke = _ref.showPerPagePicker,
    showPerPagePicker = _ref$showPerPagePicke === void 0 ? true : _ref$showPerPagePicke,
    _ref$showPageArrowsLa = _ref.showPageArrowsLabel,
    showPageArrowsLabel = _ref$showPageArrowsLa === void 0 ? true : _ref$showPageArrowsLa,
    className = _ref.className,
    _ref$perPageOptions = _ref.perPageOptions,
    perPageOptions = _ref$perPageOptions === void 0 ? page_size_picker/* DEFAULT_PER_PAGE_OPTIONS */.v : _ref$perPageOptions,
    children = _ref.children;
  var pageCount = Math.ceil(total / perPage);
  if (children && typeof children === 'function') {
    return children({
      pageCount: pageCount
    });
  }
  var classes = classnames_default()('woocommerce-pagination', className);
  if (pageCount <= 1) {
    return total > perPageOptions[0] && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: classes,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(page_size_picker/* PageSizePicker */.$, {
        currentPage: page,
        perPage: perPage,
        setCurrentPage: onPageChange,
        total: total,
        setPerPageChange: onPerPageChange,
        perPageOptions: perPageOptions
      })
    }) || null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: classes,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PageArrows, {
      currentPage: page,
      pageCount: pageCount,
      showPageArrowsLabel: showPageArrowsLabel,
      setCurrentPage: onPageChange
    }), showPagePicker && /*#__PURE__*/(0,jsx_runtime.jsx)(PagePicker, {
      currentPage: page,
      pageCount: pageCount,
      setCurrentPage: onPageChange
    }), showPerPagePicker && /*#__PURE__*/(0,jsx_runtime.jsx)(page_size_picker/* PageSizePicker */.$, {
      currentPage: page,
      perPage: perPage,
      setCurrentPage: onPageChange,
      total: total,
      setPerPageChange: onPerPageChange,
      perPageOptions: perPageOptions
    })]
  });
}
try {
    // @ts-ignore
    Pagination.displayName = "Pagination";
    // @ts-ignore
    Pagination.__docgenInfo = { "description": "", "displayName": "Pagination", "props": { "page": { "defaultValue": null, "description": "", "name": "page", "required": true, "type": { "name": "number" } }, "perPage": { "defaultValue": null, "description": "", "name": "perPage", "required": true, "type": { "name": "number" } }, "total": { "defaultValue": null, "description": "", "name": "total", "required": true, "type": { "name": "number" } }, "onPageChange": { "defaultValue": { value: "() => {}" }, "description": "", "name": "onPageChange", "required": false, "type": { "name": "((page: number, action?: \"next\" | \"previous\" | \"goto\") => void)" } }, "onPerPageChange": { "defaultValue": { value: "() => {}" }, "description": "", "name": "onPerPageChange", "required": false, "type": { "name": "((perPage: number) => void)" } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "showPagePicker": { "defaultValue": { value: "true" }, "description": "", "name": "showPagePicker", "required": false, "type": { "name": "boolean" } }, "showPerPagePicker": { "defaultValue": { value: "true" }, "description": "", "name": "showPerPagePicker", "required": false, "type": { "name": "boolean" } }, "showPageArrowsLabel": { "defaultValue": { value: "true" }, "description": "", "name": "showPageArrowsLabel", "required": false, "type": { "name": "boolean" } }, "perPageOptions": { "defaultValue": { value: "[ 25, 50, 75, 100 ]" }, "description": "", "name": "perPageOptions", "required": false, "type": { "name": "number[]" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/pagination/pagination.tsx#Pagination"] = { docgenInfo: Pagination.__docgenInfo, name: "Pagination", path: "../../packages/js/components/src/pagination/pagination.tsx#Pagination" };
}
catch (__react_docgen_typescript_loader_error) { }

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

/***/ "../../packages/js/components/src/pagination/stories/pagination.story.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CustomWithHook: () => (/* binding */ CustomWithHook),
  Default: () => (/* binding */ Default),
  "default": () => (/* binding */ pagination_story)
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../packages/js/components/src/pagination/pagination.tsx + 2 modules
var pagination = __webpack_require__("../../packages/js/components/src/pagination/pagination.tsx");
;// CONCATENATED MODULE: ../../packages/js/components/src/pagination/use-pagination.ts

/**
 * External dependencies
 */

function usePagination(_ref) {
  var totalCount = _ref.totalCount,
    _ref$defaultPerPage = _ref.defaultPerPage,
    defaultPerPage = _ref$defaultPerPage === void 0 ? 25 : _ref$defaultPerPage,
    onPageChange = _ref.onPageChange,
    onPerPageChange = _ref.onPerPageChange;
  var _useState = (0,react.useState)(1),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    currentPage = _useState2[0],
    _setCurrentPage = _useState2[1];
  var _useState3 = (0,react.useState)(defaultPerPage),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    perPage = _useState4[0],
    setPerPage = _useState4[1];
  var pageCount = Math.ceil(totalCount / perPage);
  var start = perPage * (currentPage - 1) + 1;
  var end = Math.min(perPage * currentPage, totalCount);
  return {
    start: start,
    end: end,
    currentPage: currentPage,
    perPage: perPage,
    pageCount: pageCount,
    setCurrentPage: function setCurrentPage(newPage) {
      _setCurrentPage(newPage);
      if (onPageChange) {
        onPageChange(newPage);
      }
    },
    setPerPageChange: function setPerPageChange(newPerPage) {
      _setCurrentPage(1);
      setPerPage(newPerPage);
      if (onPerPageChange) {
        onPerPageChange(newPerPage);
      }
    }
  };
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.parse-int.js
var es_parse_int = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.parse-int.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.number.is-finite.js
var es_number_is_finite = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.number.is-finite.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.number.constructor.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-left.js
var chevron_left = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-left.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-right.js
var chevron_right = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-right.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../packages/js/components/src/pagination/page-arrows-with-picker.tsx




/**
 * External dependencies
 */







function PageArrowsWithPicker(_ref) {
  var pageCount = _ref.pageCount,
    currentPage = _ref.currentPage,
    setCurrentPage = _ref.setCurrentPage;
  var _useState = (0,react.useState)(currentPage),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  (0,react.useEffect)(function () {
    if (currentPage !== inputValue) {
      setInputValue(currentPage);
    }
  }, [currentPage]);
  function onInputChange(event) {
    setInputValue(parseInt(event.currentTarget.value, 10));
  }
  function onInputBlur(event) {
    var newPage = parseInt(event.target.value, 10);
    if (newPage !== currentPage && Number.isFinite(newPage) && newPage > 0 && pageCount && pageCount >= newPage) {
      setCurrentPage(newPage, 'goto');
    } else {
      setInputValue(currentPage);
    }
  }
  function previousPage(event) {
    event.stopPropagation();
    if (currentPage - 1 < 1) {
      return;
    }
    setInputValue(currentPage - 1);
    setCurrentPage(currentPage - 1, 'previous');
  }
  function nextPage(event) {
    event.stopPropagation();
    if (currentPage + 1 > pageCount) {
      return;
    }
    setInputValue(currentPage + 1);
    setCurrentPage(currentPage + 1, 'next');
  }
  if (pageCount <= 1) {
    return null;
  }
  var previousLinkClass = classnames_default()('woocommerce-pagination__link', {
    'is-active': currentPage > 1
  });
  var nextLinkClass = classnames_default()('woocommerce-pagination__link', {
    'is-active': currentPage < pageCount
  });
  var isError = currentPage < 1 || currentPage > pageCount;
  var inputClass = classnames_default()('woocommerce-pagination__page-arrow-picker-input', {
    'has-error': isError
  });
  var instanceId = (0,lodash.uniqueId)('woocommerce-pagination-page-picker-');
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "woocommerce-pagination__page-arrows",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
      className: previousLinkClass,
      icon: chevron_left/* default */.A,
      disabled: !(currentPage > 1),
      onClick: previousPage,
      label: (0,build_module.__)('Previous Page', 'woocommerce')
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
      id: instanceId,
      className: inputClass,
      "aria-invalid": isError,
      type: "number",
      onChange: onInputChange,
      onBlur: onInputBlur,
      value: inputValue,
      min: 1,
      max: pageCount
    }), (0,build_module/* sprintf */.nv)(/* translators: %d: total number of pages */
    (0,build_module.__)('of %d', 'woocommerce'), pageCount), /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
      className: nextLinkClass,
      icon: chevron_right/* default */.A,
      disabled: !(currentPage < pageCount),
      onClick: nextPage,
      label: (0,build_module.__)('Next Page', 'woocommerce')
    })]
  });
}
try {
    // @ts-ignore
    PageArrowsWithPicker.displayName = "PageArrowsWithPicker";
    // @ts-ignore
    PageArrowsWithPicker.__docgenInfo = { "description": "", "displayName": "PageArrowsWithPicker", "props": { "currentPage": { "defaultValue": null, "description": "", "name": "currentPage", "required": true, "type": { "name": "number" } }, "pageCount": { "defaultValue": null, "description": "", "name": "pageCount", "required": true, "type": { "name": "number" } }, "setCurrentPage": { "defaultValue": null, "description": "", "name": "setCurrentPage", "required": true, "type": { "name": "(page: number, action?: \"next\" | \"previous\" | \"goto\" | undefined) => void" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/pagination/page-arrows-with-picker.tsx#PageArrowsWithPicker"] = { docgenInfo: PageArrowsWithPicker.__docgenInfo, name: "PageArrowsWithPicker", path: "../../packages/js/components/src/pagination/page-arrows-with-picker.tsx#PageArrowsWithPicker" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../../packages/js/components/src/pagination/page-size-picker.tsx
var page_size_picker = __webpack_require__("../../packages/js/components/src/pagination/page-size-picker.tsx");
;// CONCATENATED MODULE: ../../packages/js/components/src/pagination/stories/pagination.story.js












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


/* harmony default export */ const pagination_story = ({
  title: 'Components/Pagination',
  component: pagination/* Pagination */.d,
  args: {
    total: 500,
    showPagePicker: true,
    showPerPagePicker: true,
    showPageArrowsLabel: true
  },
  argTypes: {
    onPageChange: {
      action: 'onPageChange'
    },
    onPerPageChange: {
      action: 'onPerPageChange'
    }
  }
});
var Default = function Default(args) {
  var _useState = (0,react.useState)(2),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    statePage = _useState2[0],
    setPage = _useState2[1];
  var _useState3 = (0,react.useState)(50),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    statePerPage = _useState4[0],
    setPerPage = _useState4[1];
  return /*#__PURE__*/(0,jsx_runtime.jsx)(pagination/* Pagination */.d, _objectSpread({
    page: statePage,
    perPage: statePerPage,
    onPageChange: function onPageChange(newPage) {
      return setPage(newPage);
    },
    onPerPageChange: function onPerPageChange(newPerPage) {
      return setPerPage(newPerPage);
    }
  }, args));
};
var CustomWithHook = function CustomWithHook(args) {
  var paginationProps = usePagination({
    totalCount: args.total,
    defaultPerPage: 25,
    onPageChange: args.onPageChange,
    onPerPageChange: args.onPerPageChange
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: ["Viewing ", paginationProps.start, "-", paginationProps.end, " of", ' ', args.total, " items"]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(PageArrowsWithPicker, _objectSpread({}, paginationProps)), /*#__PURE__*/(0,jsx_runtime.jsx)(page_size_picker/* PageSizePicker */.$, _objectSpread(_objectSpread({}, paginationProps), {}, {
      total: args.total,
      perPageOptions: [5, 10, 25],
      label: ""
    }))]
  });
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [statePage, setPage] = useState(2);\n  const [statePerPage, setPerPage] = useState(50);\n  return <Pagination page={statePage} perPage={statePerPage} onPageChange={newPage => setPage(newPage)} onPerPageChange={newPerPage => setPerPage(newPerPage)} {...args} />;\n}",
      ...Default.parameters?.docs?.source
    }
  }
};
CustomWithHook.parameters = {
  ...CustomWithHook.parameters,
  docs: {
    ...CustomWithHook.parameters?.docs,
    source: {
      originalSource: "args => {\n  const paginationProps = usePagination({\n    totalCount: args.total,\n    defaultPerPage: 25,\n    onPageChange: args.onPageChange,\n    onPerPageChange: args.onPerPageChange\n  });\n  return <div>\n            <div>\n                Viewing {paginationProps.start}-{paginationProps.end} of{' '}\n                {args.total} items\n            </div>\n            <PaginationPageArrowsWithPicker {...paginationProps} />\n            <PaginationPageSizePicker {...paginationProps} total={args.total} perPageOptions={[5, 10, 25]} label=\"\" />\n        </div>;\n}",
      ...CustomWithHook.parameters?.docs?.source
    }
  }
};

/***/ })

}]);