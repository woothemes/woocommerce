"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[8044],{

/***/ "../../plugins/woocommerce/client/admin/client/customize-store/design-with-ai/stories/LookAndFeel.story.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LookAndFeelPage: () => (/* binding */ LookAndFeelPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../plugins/woocommerce/client/admin/client/customize-store/design-with-ai/pages/index.tsx");
/* harmony import */ var _WithCustomizeYourStoreLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../plugins/woocommerce/client/admin/client/customize-store/design-with-ai/stories/WithCustomizeYourStoreLayout.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * Internal dependencies
 */




var LookAndFeelPage = function LookAndFeelPage() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_pages__WEBPACK_IMPORTED_MODULE_0__/* .LookAndFeel */ .lf, {
    context: {
      lookAndFeel: {
        choice: ''
      }
    },
    sendEvent: function sendEvent() {}
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'WooCommerce Admin/Customize Store/Design with AI/Look and Feel',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__/* .LookAndFeel */ .lf,
  decorators: [_WithCustomizeYourStoreLayout__WEBPACK_IMPORTED_MODULE_1__/* .WithCustomizeYourStoreLayout */ .G]
});
LookAndFeelPage.parameters = {
  ...LookAndFeelPage.parameters,
  docs: {
    ...LookAndFeelPage.parameters?.docs,
    source: {
      originalSource: "() => <LookAndFeel context={{\n  lookAndFeel: {\n    choice: ''\n  }\n} as designWithAiStateMachineContext} sendEvent={() => {}} />",
      ...LookAndFeelPage.parameters?.docs?.source
    }
  }
};

/***/ })

}]);