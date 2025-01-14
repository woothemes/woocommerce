"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[901],{

/***/ "../../packages/js/components/src/table/summary.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   W: () => (/* binding */ TableSummaryPlaceholder)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

/**
 * A component to display summarized table data - the list of data passed in on a single line.
 */
var TableSummary = function TableSummary(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
    className: "woocommerce-table__summary",
    role: "complementary",
    children: data.map(function (_ref2, i) {
      var label = _ref2.label,
        value = _ref2.value;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
        className: "woocommerce-table__summary-item",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "woocommerce-table__summary-value",
          children: value
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "woocommerce-table__summary-label",
          children: label
        })]
      }, i);
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableSummary);

/**
 * A component to display a placeholder box for `TableSummary`. There is no prop for this component.
 *
 * @return {Object} -
 */
var TableSummaryPlaceholder = function TableSummaryPlaceholder() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
    className: "woocommerce-table__summary is-loading",
    role: "complementary",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
      className: "woocommerce-table__summary-item",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "is-placeholder"
      })
    })
  });
};
try {
    // @ts-ignore
    summary.displayName = "summary";
    // @ts-ignore
    summary.__docgenInfo = { "description": "A component to display summarized table data - the list of data passed in on a single line.", "displayName": "summary", "props": { "data": { "defaultValue": null, "description": "", "name": "data", "required": true, "type": { "name": "{ label: string; value: ReactNode; }[]" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/table/summary.tsx#summary"] = { docgenInfo: summary.__docgenInfo, name: "summary", path: "../../packages/js/components/src/table/summary.tsx#summary" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    TableSummaryPlaceholder.displayName = "TableSummaryPlaceholder";
    // @ts-ignore
    TableSummaryPlaceholder.__docgenInfo = { "description": "A component to display a placeholder box for `TableSummary`. There is no prop for this component.", "displayName": "TableSummaryPlaceholder", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/table/summary.tsx#TableSummaryPlaceholder"] = { docgenInfo: TableSummaryPlaceholder.__docgenInfo, name: "TableSummaryPlaceholder", path: "../../packages/js/components/src/table/summary.tsx#TableSummaryPlaceholder" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../packages/js/components/src/table/stories/table-summary-placeholder.story.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Basic: () => (/* binding */ Basic),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/card/card/component.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/card/card-footer/component.js");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../packages/js/components/src/table/summary.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * External dependencies
 */



var Basic = function Basic() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      justify: "center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_3__/* .TableSummaryPlaceholder */ .W, {})
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'Components/TableSummaryPlaceholder',
  component: _woocommerce_components__WEBPACK_IMPORTED_MODULE_3__/* .TableSummaryPlaceholder */ .W
});
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "() => {\n  return <Card>\n            {/* @ts-expect-error: justify is missing from the latest type def. */}\n            <CardFooter justify=\"center\">\n                <TableSummaryPlaceholder />\n            </CardFooter>\n        </Card>;\n}",
      ...Basic.parameters?.docs?.source
    }
  }
};

/***/ })

}]);