"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[8010],{

/***/ "../../packages/js/components/src/list-item/stories/list-item.story.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Basic: () => (/* binding */ Basic),
/* harmony export */   Draggable: () => (/* binding */ Draggable),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../packages/js/components/src/list-item/list-item.tsx");
/* harmony import */ var _sortable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../packages/js/components/src/sortable/sortable.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



var Basic = function Basic() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__/* .ListItem */ .c, {
      children: "Item 1"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__/* .ListItem */ .c, {
      children: "Item 2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__/* .ListItem */ .c, {
      children: "Item 3"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__/* .ListItem */ .c, {
      children: "Item 4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__/* .ListItem */ .c, {
      children: "Item 5"
    })]
  });
};
var Draggable = function Draggable() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_sortable__WEBPACK_IMPORTED_MODULE_3__/* .Sortable */ .L, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__/* .ListItem */ .c, {
      children: "Item 1"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__/* .ListItem */ .c, {
      children: "Item 2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__/* .ListItem */ .c, {
      children: "Item 3"
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'Components/ListItem',
  component: ___WEBPACK_IMPORTED_MODULE_2__/* .ListItem */ .c
});
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "() => {\n  return <>\n            <ListItem>Item 1</ListItem>\n            <ListItem>Item 2</ListItem>\n            <ListItem>Item 3</ListItem>\n            <ListItem>Item 4</ListItem>\n            <ListItem>Item 5</ListItem>\n        </>;\n}",
      ...Basic.parameters?.docs?.source
    }
  }
};
Draggable.parameters = {
  ...Draggable.parameters,
  docs: {
    ...Draggable.parameters?.docs,
    source: {
      originalSource: "() => {\n  return <Sortable>\n            <ListItem>Item 1</ListItem>\n            <ListItem>Item 2</ListItem>\n            <ListItem>Item 3</ListItem>\n        </Sortable>;\n}",
      ...Draggable.parameters?.docs?.source
    }
  }
};

/***/ })

}]);