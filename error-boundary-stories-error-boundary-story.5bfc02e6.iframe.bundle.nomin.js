"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[2590],{

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.bind.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


// TODO: Remove from `core-js@4`
var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var bind = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-bind.js");

// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
// eslint-disable-next-line es/no-function-prototype-bind -- detection
$({ target: 'Function', proto: true, forced: Function.bind !== bind }, {
  bind: bind
});


/***/ }),

/***/ "../../packages/js/components/src/error-boundary/stories/error-boundary.story.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CustomActionCallback: () => (/* binding */ CustomActionCallback),
  CustomActionLabel: () => (/* binding */ CustomActionLabel),
  CustomErrorMessage: () => (/* binding */ CustomErrorMessage),
  Default: () => (/* binding */ Default),
  WithoutActionButton: () => (/* binding */ WithoutActionButton),
  "default": () => (/* binding */ error_boundary_story)
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.reflect.construct.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/createClass.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/inherits.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
// EXTERNAL MODULE: ../../packages/js/components/src/empty-content/index.js
var empty_content = __webpack_require__("../../packages/js/components/src/empty-content/index.js");
;// CONCATENATED MODULE: ../../packages/js/components/src/error-boundary/constants.ts
var alertIcon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguNTc0NjUgMy4yMTYzNUwxLjUxNjMyIDE0Ljk5OTdDMS4zNzA3OSAxNS4yNTE3IDEuMjkzNzkgMTUuNTM3NCAxLjI5Mjk4IDE1LjgyODRDMS4yOTIxNiAxNi4xMTk1IDEuMzY3NTYgMTYuNDA1NiAxLjUxMTY3IDE2LjY1ODVDMS42NTU3OSAxNi45MTEzIDEuODYzNTkgMTcuMTIyIDIuMTE0NDEgMTcuMjY5NkMyLjM2NTIzIDE3LjQxNzEgMi42NTAzMiAxNy40OTY1IDIuOTQxMzIgMTcuNDk5N0gxNy4wNThDMTcuMzQ5IDE3LjQ5NjUgMTcuNjM0MSAxNy40MTcxIDE3Ljg4NDkgMTcuMjY5NkMxOC4xMzU3IDE3LjEyMiAxOC4zNDM1IDE2LjkxMTMgMTguNDg3NiAxNi42NTg1QzE4LjYzMTcgMTYuNDA1NiAxOC43MDcxIDE2LjExOTUgMTguNzA2MyAxNS44Mjg0QzE4LjcwNTUgMTUuNTM3NCAxOC42Mjg1IDE1LjI1MTcgMTguNDgzIDE0Ljk5OTdMMTEuNDI0NyAzLjIxNjM1QzExLjI3NjEgMi45NzE0NCAxMS4wNjY5IDIuNzY4OTUgMTAuODE3MyAyLjYyODQyQzEwLjU2NzcgMi40ODc4OSAxMC4yODYxIDIuNDE0MDYgOS45OTk2NSAyLjQxNDA2QzkuNzEzMjEgMi40MTQwNiA5LjQzMTU5IDIuNDg3ODkgOS4xODE5OSAyLjYyODQyQzguOTMyMzggMi43Njg5NSA4LjcyMzIxIDIuOTcxNDQgOC41NzQ2NSAzLjIxNjM1VjMuMjE2MzVaIiBzdHJva2U9IiMxZTFlMWUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMCA3LjVWMTAuODMzMyIgc3Ryb2tlPSIjMWUxZTFlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTAgMTQuMTY4SDEwLjAwODMiIHN0cm9rZT0iIzFlMWUxZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==';
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../packages/js/components/src/error-boundary/index.tsx









function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = (0,getPrototypeOf/* default */.A)(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = (0,getPrototypeOf/* default */.A)(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return (0,possibleConstructorReturn/* default */.A)(this, result);
  };
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



var ErrorBoundary = /*#__PURE__*/function (_Component) {
  (0,inherits/* default */.A)(ErrorBoundary, _Component);
  var _super = _createSuper(ErrorBoundary);
  function ErrorBoundary(props) {
    var _this;
    (0,classCallCheck/* default */.A)(this, ErrorBoundary);
    _this = _super.call(this, props);
    (0,defineProperty/* default */.A)((0,assertThisInitialized/* default */.A)(_this), "handleReload", function () {
      window.location.reload();
    });
    (0,defineProperty/* default */.A)((0,assertThisInitialized/* default */.A)(_this), "handleAction", function () {
      var _this$props = _this.props,
        actionCallback = _this$props.actionCallback,
        resetErrorAfterAction = _this$props.resetErrorAfterAction;
      if (actionCallback) {
        actionCallback(_this.state.error);
      } else {
        _this.handleReload();
      }
      if (resetErrorAfterAction) {
        _this.setState({
          hasError: false,
          error: null,
          errorInfo: null
        });
      }
    });
    _this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
    return _this;
  }
  (0,createClass/* default */.A)(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(_error, errorInfo) {
      this.setState({
        errorInfo: errorInfo
      });
      if (this.props.onError) {
        this.props.onError(_error, errorInfo);
      }
      // TODO: Log error to error tracking service
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        children = _this$props2.children,
        errorMessage = _this$props2.errorMessage,
        showActionButton = _this$props2.showActionButton,
        actionLabel = _this$props2.actionLabel;
      if (this.state.hasError) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "woocommerce-error-boundary",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(empty_content/* default */.A, {
            title: "",
            actionLabel: "",
            message: errorMessage || (0,build_module.__)('Oops, something went wrong. Please try again', 'woocommerce'),
            secondaryActionLabel: actionLabel || (0,build_module.__)('Reload', 'woocommerce'),
            secondaryActionURL: null,
            secondaryActionCallback: showActionButton ? this.handleAction : undefined,
            illustrationWidth: 36,
            illustrationHeight: 36,
            illustration: alertIcon
          })
        });
      }
      return children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        hasError: true,
        error: error
      };
    }
  }]);
  return ErrorBoundary;
}(react.Component);
(0,defineProperty/* default */.A)(ErrorBoundary, "defaultProps", {
  showActionButton: true,
  resetErrorAfterAction: true
});
try {
    // @ts-ignore
    ErrorBoundary.displayName = "ErrorBoundary";
    // @ts-ignore
    ErrorBoundary.__docgenInfo = { "description": "", "displayName": "ErrorBoundary", "props": { "children": { "defaultValue": null, "description": "The content to be rendered inside the ErrorBoundary component.", "name": "children", "required": true, "type": { "name": "ReactNode" } }, "errorMessage": { "defaultValue": null, "description": "The custom error message to be displayed. Defaults to a generic message.", "name": "errorMessage", "required": false, "type": { "name": "ReactNode" } }, "showActionButton": { "defaultValue": { value: "true" }, "description": "Determines whether to show an action button. Defaults to true.", "name": "showActionButton", "required": false, "type": { "name": "boolean" } }, "actionLabel": { "defaultValue": null, "description": "The label to be used for the action button. Defaults to 'Reload'.", "name": "actionLabel", "required": false, "type": { "name": "string" } }, "actionCallback": { "defaultValue": null, "description": "The callback function to be executed when the action button is clicked. Defaults to window.location.reload.\n@param error - The error that was caught.", "name": "actionCallback", "required": false, "type": { "name": "((error: Error) => void)" } }, "resetErrorAfterAction": { "defaultValue": { value: "true" }, "description": "Determines whether to reset the error boundary state after the action is performed. Defaults to true.", "name": "resetErrorAfterAction", "required": false, "type": { "name": "boolean" } }, "onError": { "defaultValue": null, "description": "Callback function to be executed when an error is caught.\n@param error - The error that was caught.\n@param errorInfo - The error info object.", "name": "onError", "required": false, "type": { "name": "((error: Error, errorInfo: ErrorInfo) => void)" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/error-boundary/index.tsx#ErrorBoundary"] = { docgenInfo: ErrorBoundary.__docgenInfo, name: "ErrorBoundary", path: "../../packages/js/components/src/error-boundary/index.tsx#ErrorBoundary" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ../../packages/js/components/src/error-boundary/stories/error-boundary.story.tsx












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
// ErrorBoundary.stories.tsx

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


var ChildComponent = function ChildComponent() {
  throw new Error('This is a test error');
};
var Template = function Template(args) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ErrorBoundary, _objectSpread(_objectSpread({}, args), {}, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ChildComponent, {})
  }));
};
var Default = Template.bind({});
Default.args = {};
var CustomErrorMessage = Template.bind({});
CustomErrorMessage.args = {
  errorMessage: 'Custom error message'
};
var WithoutActionButton = Template.bind({});
WithoutActionButton.args = {
  showActionButton: false
};
var CustomActionLabel = Template.bind({});
CustomActionLabel.args = {
  actionLabel: 'Retry'
};
var CustomActionCallback = Template.bind({});
CustomActionCallback.args = {
  actionCallback: function actionCallback() {
    // eslint-disable-next-line no-alert
    window.alert('Custom action callback triggered');
  }
};
/* harmony default export */ const error_boundary_story = ({
  title: 'Experimental/Error Boundary',
  component: ErrorBoundary,
  argTypes: {
    errorMessage: {
      control: 'text',
      defaultValue: 'Oops, something went wrong. Please try again'
    },
    showActionButton: {
      control: 'boolean',
      defaultValue: true
    },
    actionLabel: {
      control: 'text',
      defaultValue: 'Reload'
    },
    actionCallback: {
      action: 'clicked'
    }
  }
});
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => <ErrorBoundary {...args}>\n        <ChildComponent />\n    </ErrorBoundary>",
      ...Default.parameters?.docs?.source
    }
  }
};
CustomErrorMessage.parameters = {
  ...CustomErrorMessage.parameters,
  docs: {
    ...CustomErrorMessage.parameters?.docs,
    source: {
      originalSource: "args => <ErrorBoundary {...args}>\n        <ChildComponent />\n    </ErrorBoundary>",
      ...CustomErrorMessage.parameters?.docs?.source
    }
  }
};
WithoutActionButton.parameters = {
  ...WithoutActionButton.parameters,
  docs: {
    ...WithoutActionButton.parameters?.docs,
    source: {
      originalSource: "args => <ErrorBoundary {...args}>\n        <ChildComponent />\n    </ErrorBoundary>",
      ...WithoutActionButton.parameters?.docs?.source
    }
  }
};
CustomActionLabel.parameters = {
  ...CustomActionLabel.parameters,
  docs: {
    ...CustomActionLabel.parameters?.docs,
    source: {
      originalSource: "args => <ErrorBoundary {...args}>\n        <ChildComponent />\n    </ErrorBoundary>",
      ...CustomActionLabel.parameters?.docs?.source
    }
  }
};
CustomActionCallback.parameters = {
  ...CustomActionCallback.parameters,
  docs: {
    ...CustomActionCallback.parameters?.docs,
    source: {
      originalSource: "args => <ErrorBoundary {...args}>\n        <ChildComponent />\n    </ErrorBoundary>",
      ...CustomActionCallback.parameters?.docs?.source
    }
  }
};

/***/ })

}]);