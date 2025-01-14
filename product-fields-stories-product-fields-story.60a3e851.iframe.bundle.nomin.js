"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[3358],{

/***/ "../../packages/js/components/src/tooltip/tooltip.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ Tooltip)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/popover/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/help.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");

/**
 * External dependencies
 */







var Tooltip = function Tooltip(_ref) {
  var _ref$children = _ref.children,
    children = _ref$children === void 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A
    }) : _ref$children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$helperText = _ref.helperText,
    helperText = _ref$helperText === void 0 ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Help', 'woocommerce') : _ref$helperText,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? 'top center' : _ref$position,
    text = _ref.text;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(_useState, 2),
    isPopoverVisible = _useState2[0],
    setIsPopoverVisible = _useState2[1];
  var uniqueIdentifier = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(Tooltip, 'product_tooltip');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('woocommerce-tooltip', uniqueIdentifier),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('woocommerce-tooltip__button', className),
        onKeyDown: function onKeyDown(event) {
          if (event.key !== 'Enter') {
            return;
          }
          setIsPopoverVisible(true);
        },
        onClick: function onClick() {
          return setIsPopoverVisible(!isPopoverVisible);
        },
        label: helperText,
        children: children
      }), isPopoverVisible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {
        focusOnMount: true,
        position: position,
        inline: true,
        className: "woocommerce-tooltip__text",
        onFocusOutside: function onFocusOutside(event) {
          var _event$currentTarget;
          if ((_event$currentTarget = event.currentTarget) !== null && _event$currentTarget !== void 0 && _event$currentTarget.classList.contains(uniqueIdentifier)) {
            return;
          }
          setIsPopoverVisible(false);
        },
        onKeyDown: function onKeyDown(event) {
          if (event.key !== 'Escape') {
            return;
          }
          setIsPopoverVisible(false);
        },
        children: text
      })]
    })
  });
};
try {
    // @ts-ignore
    Tooltip.displayName = "Tooltip";
    // @ts-ignore
    Tooltip.__docgenInfo = { "description": "", "displayName": "Tooltip", "props": { "helperText": { "defaultValue": { value: "__( 'Help', 'woocommerce' )" }, "description": "", "name": "helperText", "required": false, "type": { "name": "string" } }, "position": { "defaultValue": { value: "top center" }, "description": "", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"top center\"" }, { "value": "\"top left\"" }, { "value": "\"top right\"" }, { "value": "\"middle center\"" }, { "value": "\"middle left\"" }, { "value": "\"middle right\"" }, { "value": "\"bottom center\"" }, { "value": "\"bottom left\"" }, { "value": "\"bottom right\"" }] } }, "text": { "defaultValue": null, "description": "", "name": "text", "required": true, "type": { "name": "string | Element" } }, "className": { "defaultValue": { value: "" }, "description": "", "name": "className", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/tooltip/tooltip.tsx#Tooltip"] = { docgenInfo: Tooltip.__docgenInfo, name: "Tooltip", path: "../../packages/js/components/src/tooltip/tooltip.tsx#Tooltip" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../packages/js/components/src/product-fields/stories/product-fields.story.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Basic: () => (/* binding */ Basic),
  ToggleWithTooltip: () => (/* binding */ ToggleWithTooltip),
  "default": () => (/* binding */ product_fields_story)
});

// NAMESPACE OBJECT: ../../packages/js/components/src/product-fields/store/selectors.ts
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, {
  getProductField: () => (getProductField),
  getRegisteredProductFields: () => (getRegisteredProductFields)
});

// NAMESPACE OBJECT: ../../packages/js/components/src/product-fields/store/actions.ts
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, {
  registerProductField: () => (registerProductField)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.name.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.find.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js");
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+data@10.0.2_react@18.3.1/node_modules/@wordpress/data/build-module/registry.js + 2 modules
var registry = __webpack_require__("../../node_modules/.pnpm/@wordpress+data@10.0.2_react@18.3.1/node_modules/@wordpress/data/build-module/registry.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+data@10.0.2_react@18.3.1/node_modules/@wordpress/data/build-module/components/registry-provider/context.js
var context = __webpack_require__("../../node_modules/.pnpm/@wordpress+data@10.0.2_react@18.3.1/node_modules/@wordpress/data/build-module/components/registry-provider/context.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+data@10.0.2_react@18.3.1/node_modules/@wordpress/data/build-module/redux-store/index.js + 18 modules
var redux_store = __webpack_require__("../../node_modules/.pnpm/@wordpress+data@10.0.2_react@18.3.1/node_modules/@wordpress/data/build-module/redux-store/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+data@10.0.2_react@18.3.1/node_modules/@wordpress/data/build-module/index.js
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+data@10.0.2_react@18.3.1/node_modules/@wordpress/data/build-module/index.js");
;// CONCATENATED MODULE: ../../packages/js/components/src/product-fields/store/action-types.ts
var TYPES = /*#__PURE__*/function (TYPES) {
  TYPES["REGISTER_FIELD"] = "REGISTER_FIELD";
  return TYPES;
}({});
/* harmony default export */ const action_types = (TYPES);
;// CONCATENATED MODULE: ../../packages/js/components/src/product-fields/store/reducer.ts












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
 * Internal dependencies
 */

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    fields: {}
  };
  var payload = arguments.length > 1 ? arguments[1] : undefined;
  if (payload && 'type' in payload) {
    switch (payload.type) {
      case action_types.REGISTER_FIELD:
        return _objectSpread(_objectSpread({}, state), {}, {
          fields: _objectSpread(_objectSpread({}, state.fields), {}, (0,defineProperty/* default */.A)({}, payload.field.name, payload.field))
        });
      default:
        return state;
    }
  }
  return state;
};
/* harmony default export */ const store_reducer = (reducer);
// EXTERNAL MODULE: ../../node_modules/.pnpm/memoize-one@6.0.0/node_modules/memoize-one/dist/memoize-one.esm.js
var memoize_one_esm = __webpack_require__("../../node_modules/.pnpm/memoize-one@6.0.0/node_modules/memoize-one/dist/memoize-one.esm.js");
;// CONCATENATED MODULE: ../../packages/js/components/src/product-fields/store/selectors.ts


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */

function getProductField(state, name) {
  return state.fields[name] || null;
}
var getRegisteredProductFields = (0,memoize_one_esm/* default */.A)(function (state) {
  return Object.keys(state.fields);
}, function (_ref, _ref2) {
  var _ref3 = (0,slicedToArray/* default */.A)(_ref, 1),
    newState = _ref3[0];
  var _ref4 = (0,slicedToArray/* default */.A)(_ref2, 1),
    oldState = _ref4[0];
  return newState.fields === oldState.fields;
});
;// CONCATENATED MODULE: ../../packages/js/components/src/product-fields/store/actions.ts
/**
 * Internal dependencies
 */

function registerProductField(field) {
  return {
    type: action_types.REGISTER_FIELD,
    field: field
  };
}
;// CONCATENATED MODULE: ../../packages/js/components/src/product-fields/store/constants.ts
var STORE_NAME = 'wc/admin/product/fields';
;// CONCATENATED MODULE: ../../packages/js/components/src/product-fields/store/index.ts
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */




var store = (0,redux_store/* default */.A)(STORE_NAME, {
  reducer: store_reducer,
  selectors: selectors_namespaceObject,
  actions: actions_namespaceObject
});
(0,build_module/* register */.kz)(store);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+data@10.0.2_react@18.3.1/node_modules/@wordpress/data/build-module/select.js
var build_module_select = __webpack_require__("../../node_modules/.pnpm/@wordpress+data@10.0.2_react@18.3.1/node_modules/@wordpress/data/build-module/select.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/input-control/index.js + 4 modules
var input_control = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/input-control/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../packages/js/components/src/product-fields/api/render.tsx











function render_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function render_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? render_ownKeys(Object(t), !0).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : render_ownKeys(Object(t)).forEach(function (r) {
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


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function renderField(name, props) {
  var fieldConfig = (0,build_module_select/* select */.L)(store).getProductField(name);
  if (fieldConfig.render) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(fieldConfig.render, render_objectSpread({}, props));
  }
  if (fieldConfig.type) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(input_control/* default */.Ay, render_objectSpread({
      type: fieldConfig.type
    }, props));
  }
  return null;
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+data@10.0.2_react@18.3.1/node_modules/@wordpress/data/build-module/dispatch.js
var dispatch = __webpack_require__("../../node_modules/.pnpm/@wordpress+data@10.0.2_react@18.3.1/node_modules/@wordpress/data/build-module/dispatch.js");
;// CONCATENATED MODULE: ../../packages/js/components/src/product-fields/api/registration.ts











function registration_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function registration_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? registration_ownKeys(Object(t), !0).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : registration_ownKeys(Object(t)).forEach(function (r) {
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

/**
 * Registers a new product field provided a unique name and an object defining its
 * behavior. Once registered, the field is made available to use with the product form API.
 *
 * @param {string|Object} fieldName Field name.
 * @param {Object}        settings  Field settings.
 *
 * @example
 * ```js
 * import { registerProductField } from '@woocommerce/components'
 *
 * registerProductFieldType( 'attributes-field', {
 * } );
 * ```
 */
function registration_registerProductField(fieldName, settings) {
  if ((0,build_module_select/* select */.L)(store).getProductField(fieldName)) {
    // eslint-disable-next-line no-console
    console.error('Product Field "' + fieldName + '" is already registered.');
    return;
  }
  (0,dispatch/* dispatch */.J)(store).registerProductField(registration_objectSpread({
    attributes: {}
  }, settings));
  return (0,build_module_select/* select */.L)(store).getProductField(fieldName);
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/select-control/index.js
var select_control = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/select-control/index.js");
;// CONCATENATED MODULE: ../../packages/js/components/src/product-fields/fields/basic-select-control/render.tsx
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */

var SelectControlField = function SelectControlField(_ref) {
  var label = _ref.label,
    value = _ref.value,
    onChange = _ref.onChange,
    multiple = _ref.multiple,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(select_control/* default */.A, {
      multiple: multiple,
      label: label,
      options: options,
      onChange: onChange,
      value: value
    })
  });
};
/* harmony default export */ const basic_select_control_render = (SelectControlField);
try {
    // @ts-ignore
    render.displayName = "render";
    // @ts-ignore
    render.__docgenInfo = { "description": "", "displayName": "render", "props": { "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string | string[]" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": true, "type": { "name": "(value: string | string[]) => void" } }, "label": { "defaultValue": null, "description": "", "name": "label", "required": true, "type": { "name": "string" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "multiple": { "defaultValue": null, "description": "", "name": "multiple", "required": false, "type": { "name": "boolean" } }, "options": { "defaultValue": { value: "[]" }, "description": "", "name": "options", "required": false, "type": { "name": "{ label: string; value: string; id?: string; disabled?: boolean; hidden?: boolean | undefined; }[] | undefined" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/product-fields/fields/basic-select-control/render.tsx#render"] = { docgenInfo: render.__docgenInfo, name: "render", path: "../../packages/js/components/src/product-fields/fields/basic-select-control/render.tsx#render" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ../../packages/js/components/src/product-fields/fields/basic-select-control/index.ts
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


var basicSelectControlSettings = {
  name: 'basic-select-control',
  render: basic_select_control_render
};
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/checkbox-control/index.js
var checkbox_control = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/checkbox-control/index.js");
;// CONCATENATED MODULE: ../../packages/js/components/src/product-fields/fields/checkbox/render.tsx
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */

var CheckboxField = function CheckboxField(_ref) {
  var label = _ref.label,
    value = _ref.value,
    onChange = _ref.onChange;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_control/* default */.A, {
    label: label,
    onChange: onChange,
    checked: value
  });
};
/* harmony default export */ const checkbox_render = (CheckboxField);
try {
    // @ts-ignore
    render.displayName = "render";
    // @ts-ignore
    render.__docgenInfo = { "description": "", "displayName": "render", "props": { "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "boolean" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": true, "type": { "name": "(value: boolean) => void" } }, "label": { "defaultValue": null, "description": "", "name": "label", "required": true, "type": { "name": "string" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/product-fields/fields/checkbox/render.tsx#render"] = { docgenInfo: render.__docgenInfo, name: "render", path: "../../packages/js/components/src/product-fields/fields/checkbox/render.tsx#render" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ../../packages/js/components/src/product-fields/fields/checkbox/index.ts
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


var checkboxSettings = {
  name: 'checkbox',
  render: checkbox_render
};
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/radio-control/index.js
var radio_control = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/radio-control/index.js");
;// CONCATENATED MODULE: ../../packages/js/components/src/product-fields/fields/radio/render.tsx
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */

var RadioField = function RadioField(_ref) {
  var label = _ref.label,
    value = _ref.value,
    onChange = _ref.onChange,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(radio_control/* default */.A, {
    label: label,
    options: options,
    onChange: onChange,
    selected: value
  });
};
/* harmony default export */ const radio_render = (RadioField);
try {
    // @ts-ignore
    render.displayName = "render";
    // @ts-ignore
    render.__docgenInfo = { "description": "", "displayName": "render", "props": { "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": true, "type": { "name": "(value: string) => void" } }, "label": { "defaultValue": null, "description": "", "name": "label", "required": true, "type": { "name": "string" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "options": { "defaultValue": { value: "[]" }, "description": "", "name": "options", "required": false, "type": { "name": "{ label: string; value: string; }[]" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/product-fields/fields/radio/render.tsx#render"] = { docgenInfo: render.__docgenInfo, name: "render", path: "../../packages/js/components/src/product-fields/fields/radio/render.tsx#render" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ../../packages/js/components/src/product-fields/fields/radio/index.ts
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


var radioSettings = {
  name: 'radio',
  render: radio_render
};
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/text-control/index.js
var text_control = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/text-control/index.js");
;// CONCATENATED MODULE: ../../packages/js/components/src/product-fields/fields/text/render.tsx
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */

var TextField = function TextField(_ref) {
  var label = _ref.label,
    value = _ref.value,
    onChange = _ref.onChange;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(text_control/* default */.A, {
    label: label,
    onChange: onChange,
    value: value
  });
};
/* harmony default export */ const text_render = (TextField);
try {
    // @ts-ignore
    render.displayName = "render";
    // @ts-ignore
    render.__docgenInfo = { "description": "", "displayName": "render", "props": { "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "string" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": true, "type": { "name": "(value: string) => void" } }, "label": { "defaultValue": null, "description": "", "name": "label", "required": true, "type": { "name": "string" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/product-fields/fields/text/render.tsx#render"] = { docgenInfo: render.__docgenInfo, name: "render", path: "../../packages/js/components/src/product-fields/fields/text/render.tsx#render" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ../../packages/js/components/src/product-fields/fields/text/index.ts
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


var textSettings = {
  name: 'text',
  render: text_render
};
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/toggle-control/index.js
var toggle_control = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/toggle-control/index.js");
// EXTERNAL MODULE: ../../packages/js/components/src/tooltip/tooltip.tsx
var tooltip_tooltip = __webpack_require__("../../packages/js/components/src/tooltip/tooltip.tsx");
;// CONCATENATED MODULE: ../../packages/js/components/src/product-fields/fields/toggle/render.tsx
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



var ToggleField = function ToggleField(_ref) {
  var label = _ref.label,
    value = _ref.value,
    onChange = _ref.onChange,
    tooltip = _ref.tooltip,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(toggle_control/* default */.A, {
    label: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [label, tooltip && /*#__PURE__*/(0,jsx_runtime.jsx)(tooltip_tooltip/* Tooltip */.m, {
        text: tooltip
      })]
    }),
    checked: value,
    onChange: onChange
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore disabled prop exists
    ,

    disabled: disabled
  });
};
/* harmony default export */ const toggle_render = (ToggleField);
try {
    // @ts-ignore
    render.displayName = "render";
    // @ts-ignore
    render.__docgenInfo = { "description": "", "displayName": "render", "props": { "value": { "defaultValue": null, "description": "", "name": "value", "required": true, "type": { "name": "boolean" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": true, "type": { "name": "(value: boolean) => void" } }, "label": { "defaultValue": null, "description": "", "name": "label", "required": true, "type": { "name": "string" } }, "disabled": { "defaultValue": { value: "false" }, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "tooltip": { "defaultValue": null, "description": "", "name": "tooltip", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/product-fields/fields/toggle/render.tsx#render"] = { docgenInfo: render.__docgenInfo, name: "render", path: "../../packages/js/components/src/product-fields/fields/toggle/render.tsx#render" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ../../packages/js/components/src/product-fields/fields/toggle/index.ts
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


var toggleSettings = {
  name: 'toggle',
  render: toggle_render
};
;// CONCATENATED MODULE: ../../packages/js/components/src/product-fields/fields/index.ts








/**
 * Internal dependencies
 */






var getAllProductFields = function getAllProductFields() {
  return [].concat((0,toConsumableArray/* default */.A)(['number'].map(function (type) {
    return {
      name: type,
      type: type
    };
  })), [textSettings, toggleSettings, radioSettings, basicSelectControlSettings, checkboxSettings]).filter(Boolean);
};
var registerCoreProductFields = function registerCoreProductFields() {
  var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getAllProductFields();
  fields.forEach(function (field) {
    registration_registerProductField(field.name, field);
  });
};
;// CONCATENATED MODULE: ../../packages/js/components/src/product-fields/stories/product-fields.story.tsx


function product_fields_story_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function product_fields_story_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? product_fields_story_ownKeys(Object(t), !0).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : product_fields_story_ownKeys(Object(t)).forEach(function (r) {
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




var product_fields_story_registry = (0,registry/* createRegistry */.I)();
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore No types for this exist yet.
product_fields_story_registry.register(store);
registerCoreProductFields();
var fieldConfigs = [{
  name: 'text-field',
  type: 'text',
  label: 'Text field'
}, {
  name: 'number-field',
  type: 'number',
  label: 'Number field'
}, {
  name: 'toggle-field',
  type: 'toggle',
  label: 'Toggle field'
}, {
  name: 'checkbox-field',
  type: 'checkbox',
  label: 'Checkbox field'
}, {
  name: 'radio-field',
  type: 'radio',
  label: 'Radio field',
  options: [{
    label: 'Option',
    value: 'option'
  }, {
    label: 'Option 2',
    value: 'option2'
  }, {
    label: 'Option 3',
    value: 'option3'
  }]
}, {
  name: 'basic-select-control-field',
  type: 'basic-select-control',
  label: 'Basic select control field',
  options: [{
    label: 'Option',
    value: 'option'
  }, {
    label: 'Option 2',
    value: 'option2'
  }, {
    label: 'Option 3',
    value: 'option3'
  }]
}];
var RenderField = function RenderField() {
  var _useState = (0,react.useState)(fieldConfigs[0].name || undefined),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    selectedField = _useState2[0],
    setSelectedField = _useState2[1];
  var _useState3 = (0,react.useState)(),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    value = _useState4[0],
    setValue = _useState4[1];
  var handleChange = function handleChange(event) {
    setSelectedField(event.target.value);
  };
  var selectedFieldConfig = fieldConfigs.find(function (f) {
    return f.name === selectedField;
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("select", {
      value: selectedField,
      onChange: handleChange,
      children: fieldConfigs.map(function (field) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
          value: field.name,
          children: field.label
        }, field.name);
      })
    }), selectedFieldConfig && renderField(selectedFieldConfig.type, product_fields_story_objectSpread({
      value: value,
      onChange: setValue
    }, selectedFieldConfig))]
  });
};
var Basic = function Basic() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(context/* default */.Ay, {
    value: product_fields_story_registry,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(RenderField, {})
  });
};
var ToggleWithTooltip = function ToggleWithTooltip() {
  var _useState5 = (0,react.useState)(),
    _useState6 = (0,slicedToArray/* default */.A)(_useState5, 2),
    value = _useState6[0],
    setValue = _useState6[1];
  return /*#__PURE__*/(0,jsx_runtime.jsx)(context/* default */.Ay, {
    value: product_fields_story_registry,
    children: renderField('toggle', {
      value: value,
      onChange: setValue,
      name: 'toggle',
      label: 'Toggle with Tooltip',
      tooltip: 'This is a sample tooltip'
    })
  });
};
/* harmony default export */ const product_fields_story = ({
  title: 'Experimental/product-fields',
  component: Basic
});
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "() => {\n  return <RegistryProvider value={registry}>\n            <RenderField />\n        </RegistryProvider>;\n}",
      ...Basic.parameters?.docs?.source
    }
  }
};
ToggleWithTooltip.parameters = {
  ...ToggleWithTooltip.parameters,
  docs: {
    ...ToggleWithTooltip.parameters?.docs,
    source: {
      originalSource: "() => {\n  const [value, setValue] = useState();\n  return <RegistryProvider value={registry}>\n            {renderField('toggle', {\n      value,\n      onChange: setValue,\n      name: 'toggle',\n      label: 'Toggle with Tooltip',\n      tooltip: 'This is a sample tooltip'\n    })}\n        </RegistryProvider>;\n}",
      ...ToggleWithTooltip.parameters?.docs?.source
    }
  }
};
try {
    // @ts-ignore
    Basic.displayName = "Basic";
    // @ts-ignore
    Basic.__docgenInfo = { "description": "", "displayName": "Basic", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/product-fields/stories/product-fields.story.tsx#Basic"] = { docgenInfo: Basic.__docgenInfo, name: "Basic", path: "../../packages/js/components/src/product-fields/stories/product-fields.story.tsx#Basic" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    ToggleWithTooltip.displayName = "ToggleWithTooltip";
    // @ts-ignore
    ToggleWithTooltip.__docgenInfo = { "description": "", "displayName": "ToggleWithTooltip", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/product-fields/stories/product-fields.story.tsx#ToggleWithTooltip"] = { docgenInfo: ToggleWithTooltip.__docgenInfo, name: "ToggleWithTooltip", path: "../../packages/js/components/src/product-fields/stories/product-fields.story.tsx#ToggleWithTooltip" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ })

}]);