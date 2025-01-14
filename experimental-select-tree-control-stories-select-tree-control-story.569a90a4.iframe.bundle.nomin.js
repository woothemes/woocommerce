"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[2721],{

/***/ "../../packages/js/components/src/experimental-select-control/combo-box.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ ComboBox)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-down.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");











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
      (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
/**
 * External dependencies
 */




var ToggleButton = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_11__.forwardRef)(function (props, ref) {
  // using forwardRef here because getToggleButtonProps injects a ref prop
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("button", _objectSpread(_objectSpread({
    className: "woocommerce-experimental-select-control__combox-box-toggle-button"
  }, props), {}, {
    ref: ref,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A
    })
  }));
});
var ComboBox = function ComboBox(_ref) {
  var children = _ref.children,
    comboBoxProps = _ref.comboBoxProps,
    _ref$getToggleButtonP = _ref.getToggleButtonProps,
    getToggleButtonProps = _ref$getToggleButtonP === void 0 ? function () {
      return {};
    } : _ref$getToggleButtonP,
    inputProps = _ref.inputProps,
    suffix = _ref.suffix,
    showToggleButton = _ref.showToggleButton;
  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_11__.useRef)(null);
  var maybeFocusInput = function maybeFocusInput(event) {
    if (!inputRef || !inputRef.current) {
      return;
    }
    if (document.activeElement !== inputRef.current) {
      event.preventDefault();
      inputRef.current.focus();
      event.stopPropagation();
    }
  };
  return (/*#__PURE__*/
    // Disable reason: The click event is purely for accidental clicks around the input.
    // Keyboard users are still able to tab to and interact with elements in the combobox.
    /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_12___default()('woocommerce-experimental-select-control__combo-box-wrapper', {
        'woocommerce-experimental-select-control__combo-box-wrapper--disabled': inputProps.disabled
      }),
      onMouseDown: maybeFocusInput,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: "woocommerce-experimental-select-control__items-wrapper",
        children: [children, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", _objectSpread(_objectSpread({}, comboBoxProps), {}, {
          className: "woocommerce-experimental-select-control__combox-box",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("input", _objectSpread(_objectSpread({}, inputProps), {}, {
            ref: function ref(node) {
              inputRef.current = node;
              if (typeof inputProps.ref === 'function') {
                inputProps.ref(node);
              }
            }
          }))
        }))]
      }), suffix && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: "woocommerce-experimental-select-control__suffix",
        children: suffix
      }), showToggleButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(ToggleButton, _objectSpread({}, getToggleButtonProps()))]
    })
  );
};
try {
    // @ts-ignore
    ComboBox.displayName = "ComboBox";
    // @ts-ignore
    ComboBox.__docgenInfo = { "description": "", "displayName": "ComboBox", "props": { "comboBoxProps": { "defaultValue": null, "description": "", "name": "comboBoxProps", "required": true, "type": { "name": "DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>" } }, "inputProps": { "defaultValue": null, "description": "", "name": "inputProps", "required": true, "type": { "name": "DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>" } }, "getToggleButtonProps": { "defaultValue": { value: "() => ( {} )" }, "description": "", "name": "getToggleButtonProps", "required": false, "type": { "name": "(() => Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, \"ref\">)" } }, "suffix": { "defaultValue": null, "description": "", "name": "suffix", "required": false, "type": { "name": "Element | null" } }, "showToggleButton": { "defaultValue": null, "description": "", "name": "showToggleButton", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/experimental-select-control/combo-box.tsx#ComboBox"] = { docgenInfo: ComboBox.__docgenInfo, name: "ComboBox", path: "../../packages/js/components/src/experimental-select-control/combo-box.tsx#ComboBox" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../packages/js/components/src/experimental-select-control/selected-items.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ SelectedItems)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+html-entities@4.0.1/node_modules/@wordpress/html-entities/build-module/index.js");
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../../packages/js/components/src/tag/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");

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
      (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(e, r, t[r]);
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


var PrivateSelectedItems = function PrivateSelectedItems(_ref, ref) {
  var isReadOnly = _ref.isReadOnly,
    items = _ref.items,
    getItemLabel = _ref.getItemLabel,
    getItemValue = _ref.getItemValue,
    getSelectedItemProps = _ref.getSelectedItemProps,
    onRemove = _ref.onRemove,
    onBlur = _ref.onBlur,
    onSelectedItemsEnd = _ref.onSelectedItemsEnd;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_13___default()('woocommerce-experimental-select-control__selected-items', {
    'is-read-only': isReadOnly
  });
  var lastRemoveButtonRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_15__.useRef)(null);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_15__.useImperativeHandle)(ref, function () {
    return function () {
      var _lastRemoveButtonRef$;
      return (_lastRemoveButtonRef$ = lastRemoveButtonRef.current) === null || _lastRemoveButtonRef$ === void 0 ? void 0 : _lastRemoveButtonRef$.focus();
    };
  }, []);
  if (isReadOnly) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
      className: classes,
      children: items.map(function (item) {
        return (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_16__/* .decodeEntities */ .S)(getItemLabel(item));
      }).join(', ')
    });
  }
  var focusSibling = function focusSibling(event) {
    var selectedItem = event.target.closest('.woocommerce-experimental-select-control__selected-item');
    var sibling = event.key === 'ArrowLeft' || event.key === 'Backspace' ? selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.previousSibling : selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.nextSibling;
    if (sibling) {
      var _querySelector;
      (_querySelector = sibling.querySelector('.woocommerce-tag__remove')) === null || _querySelector === void 0 || _querySelector.focus();
      return true;
    }
    return false;
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
    className: classes,
    children: items.map(function (item, index) {
      return (/*#__PURE__*/
        // Disable reason: We prevent the default action to keep the input focused on click.
        // Keyboard users are unaffected by this change.
        /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", _objectSpread(_objectSpread({
          className: "woocommerce-experimental-select-control__selected-item"
        }, getSelectedItemProps({
          selectedItem: item,
          index: index
        })), {}, {
          onMouseDown: function onMouseDown(event) {
            event.preventDefault();
          },
          onClick: function onClick(event) {
            event.preventDefault();
          },
          onKeyDown: function onKeyDown(event) {
            if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
              var focused = focusSibling(event);
              if (!focused && event.key === 'ArrowRight' && onSelectedItemsEnd) {
                onSelectedItemsEnd();
              }
            } else if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
              event.preventDefault(); // prevent unwanted scroll
            } else if (event.key === 'Backspace') {
              onRemove(item);
              focusSibling(event);
            }
          },
          onBlur: onBlur,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_tag__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
            id: getItemValue(item),
            remove: function remove() {
              return function () {
                return onRemove(item);
              };
            },
            label: getItemLabel(item),
            ref: index === items.length - 1 ? lastRemoveButtonRef : undefined
          })
        }), "selected-item-".concat(index))
      );
    })
  });
};
var SelectedItems = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_15__.forwardRef)(PrivateSelectedItems);
try {
    // @ts-ignore
    SelectedItems.displayName = "SelectedItems";
    // @ts-ignore
    SelectedItems.__docgenInfo = { "description": "", "displayName": "SelectedItems", "props": { "isReadOnly": { "defaultValue": null, "description": "", "name": "isReadOnly", "required": true, "type": { "name": "boolean" } }, "items": { "defaultValue": null, "description": "", "name": "items", "required": true, "type": { "name": "ItemType[]" } }, "getItemLabel": { "defaultValue": null, "description": "", "name": "getItemLabel", "required": true, "type": { "name": "getItemLabelType<ItemType>" } }, "getItemValue": { "defaultValue": null, "description": "", "name": "getItemValue", "required": true, "type": { "name": "getItemValueType<ItemType>" } }, "getSelectedItemProps": { "defaultValue": null, "description": "", "name": "getSelectedItemProps", "required": true, "type": { "name": "({ selectedItem: any, index: any }: { selectedItem: any; index: any; }) => { [key: string]: string; }" } }, "onRemove": { "defaultValue": null, "description": "", "name": "onRemove", "required": true, "type": { "name": "(item: ItemType) => void" } }, "onBlur": { "defaultValue": null, "description": "", "name": "onBlur", "required": false, "type": { "name": "((event: FocusEvent<Element, Element>) => void)" } }, "onSelectedItemsEnd": { "defaultValue": null, "description": "", "name": "onSelectedItemsEnd", "required": false, "type": { "name": "(() => void)" } }, "ref": { "defaultValue": null, "description": "", "name": "ref", "required": false, "type": { "name": "ForwardedRef<SelectedItemFocusHandle>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/experimental-select-control/selected-items.tsx#SelectedItems"] = { docgenInfo: SelectedItems.__docgenInfo, name: "SelectedItems", path: "../../packages/js/components/src/experimental-select-control/selected-items.tsx#SelectedItems" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../packages/js/components/src/experimental-select-control/suffix-icon.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ SuffixIcon)
/* harmony export */ });
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * External dependencies
 */




var SuffixIcon = function SuffixIcon(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    icon = _ref.icon;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('woocommerce-experimental-select-control__suffix-icon', className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      icon: icon,
      size: 24
    })
  });
};
try {
    // @ts-ignore
    SuffixIcon.displayName = "SuffixIcon";
    // @ts-ignore
    SuffixIcon.__docgenInfo = { "description": "", "displayName": "SuffixIcon", "props": { "icon": { "defaultValue": null, "description": "", "name": "icon", "required": true, "type": { "name": "Element" } }, "className": { "defaultValue": { value: "" }, "description": "", "name": "className", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/experimental-select-control/suffix-icon.tsx#SuffixIcon"] = { docgenInfo: SuffixIcon.__docgenInfo, name: "SuffixIcon", path: "../../packages/js/components/src/experimental-select-control/suffix-icon.tsx#SuffixIcon" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../packages/js/components/src/tag/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/popover/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close-small.js");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+html-entities@4.0.1/node_modules/@wordpress/html-entities/build-module/index.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");




/**
 * External dependencies
 */








var Tag = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(function (_ref, removeButtonRef) {
  var id = _ref.id,
    label = _ref.label,
    popoverContents = _ref.popoverContents,
    remove = _ref.remove,
    screenReaderLabel = _ref.screenReaderLabel,
    className = _ref.className;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(_useState, 2),
    isVisible = _useState2[0],
    setIsVisible = _useState2[1];
  var instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(Tag).toString();
  var labelId = "woocommerce-tag__label-".concat(instanceId);
  screenReaderLabel = screenReaderLabel || label;
  if (!label) {
    // A null label probably means something went wrong
    // @todo Maybe this should be a loading indicator?
    return null;
  }
  label = (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_9__/* .decodeEntities */ .S)(label);
  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('woocommerce-tag', className, {
    'has-remove': !!remove
  });
  var labelTextNode = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
      className: "screen-reader-text",
      children: screenReaderLabel
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
      "aria-hidden": "true",
      children: label
    })]
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
    className: classes,
    children: [popoverContents ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
      className: "woocommerce-tag__text",
      id: labelId,
      onClick: function onClick() {
        return setIsVisible(true);
      },
      children: labelTextNode
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
      className: "woocommerce-tag__text",
      id: labelId,
      children: labelTextNode
    }), popoverContents && isVisible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Ay, {
      onClose: function onClose() {
        return setIsVisible(false);
      },
      children: popoverContents
    }), remove && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
      className: "woocommerce-tag__remove",
      ref: removeButtonRef,
      onClick: remove(id),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__/* .sprintf */ .nv)(
      // translators: %s is the name of the tag being removed.
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Remove %s', 'woocommerce'), label),
      "aria-describedby": labelId,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A,
        size: 20,
        className: "clear-icon"
      })
    })]
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tag);
try {
    // @ts-ignore
    tag.displayName = "tag";
    // @ts-ignore
    tag.__docgenInfo = { "description": "", "displayName": "tag", "props": { "label": { "defaultValue": null, "description": "The name for this item, displayed as the tag's text.", "name": "label", "required": true, "type": { "name": "string" } }, "id": { "defaultValue": null, "description": "A unique ID for this item. This is used to identify the item when the remove button is clicked.", "name": "id", "required": false, "type": { "name": "string | number" } }, "popoverContents": { "defaultValue": null, "description": "Contents to display on click in a popover", "name": "popoverContents", "required": false, "type": { "name": "ReactNode" } }, "remove": { "defaultValue": null, "description": "A function called when the remove X is clicked. If not used, no X icon will display.", "name": "remove", "required": false, "type": { "name": "((id: string | number) => MouseEventHandler<HTMLButtonElement>)" } }, "screenReaderLabel": { "defaultValue": null, "description": "A more descriptive label for screen reader users. Defaults to the `name` prop.", "name": "screenReaderLabel", "required": false, "type": { "name": "string" } }, "className": { "defaultValue": null, "description": "Additional CSS classes.", "name": "className", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/tag/index.tsx#tag"] = { docgenInfo: tag.__docgenInfo, name: "tag", path: "../../packages/js/components/src/tag/index.tsx#tag" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../packages/js/components/src/experimental-select-tree-control/stories/select-tree-control.story.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  MultipleSelectTree: () => (/* binding */ MultipleSelectTree),
  SingleSelectTree: () => (/* binding */ SingleSelectTree),
  SingleWithinModalUsingBodyDropdownPlacement: () => (/* binding */ SingleWithinModalUsingBodyDropdownPlacement),
  "default": () => (/* binding */ select_tree_control_story)
});

// NAMESPACE OBJECT: ../../packages/js/components/src/experimental-select-tree-control/select-tree-menu.tsx
var select_tree_menu_namespaceObject = {};
__webpack_require__.r(select_tree_menu_namespaceObject);
__webpack_require__.d(select_tree_menu_namespaceObject, {
  e: () => (SelectTreeMenu)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.includes.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.includes.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.find.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.find-index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.is-array.js
var es_array_is_array = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.is-array.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.some.js
var es_array_some = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.some.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/slot-fill/index.js + 9 modules
var slot_fill = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/slot-fill/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/modal/index.js + 1 modules
var modal = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/modal/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js");
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close-small.js
var close_small = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close-small.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-up.js
var chevron_up = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-up.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-down.js
var chevron_down = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-down.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js
var use_instance_id = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/base-control/index.js
var base_control = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/base-control/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/text-control/index.js
var text_control = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/text-control/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+html-entities@4.0.1/node_modules/@wordpress/html-entities/build-module/index.js
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+html-entities@4.0.1/node_modules/@wordpress/html-entities/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var i18n_build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+a11y@4.0.1/node_modules/@wordpress/a11y/build-module/index.js + 5 modules
var a11y_build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+a11y@4.0.1/node_modules/@wordpress/a11y/build-module/index.js");
// EXTERNAL MODULE: ../../packages/js/components/src/experimental-tree-control/linked-tree-utils.ts
var linked_tree_utils = __webpack_require__("../../packages/js/components/src/experimental-tree-control/linked-tree-utils.ts");
// EXTERNAL MODULE: ../../packages/js/components/src/experimental-select-control/selected-items.tsx
var selected_items = __webpack_require__("../../packages/js/components/src/experimental-select-control/selected-items.tsx");
// EXTERNAL MODULE: ../../packages/js/components/src/experimental-select-control/combo-box.tsx
var combo_box = __webpack_require__("../../packages/js/components/src/experimental-select-control/combo-box.tsx");
// EXTERNAL MODULE: ../../packages/js/components/src/experimental-select-control/suffix-icon.tsx
var suffix_icon = __webpack_require__("../../packages/js/components/src/experimental-select-control/suffix-icon.tsx");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.exec.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.constructor.js
var es_regexp_constructor = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.constructor.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.to-string.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/popover/index.js + 3 modules
var popover = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/popover/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/spinner/index.js + 1 modules
var spinner = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/spinner/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../../packages/js/components/src/experimental-tree-control/tree.tsx + 7 modules
var tree = __webpack_require__("../../packages/js/components/src/experimental-tree-control/tree.tsx");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../packages/js/components/src/experimental-select-tree-control/select-tree-menu.tsx



var _excluded = ["isEventOutside", "isLoading", "isOpen", "className", "position", "scrollIntoViewOnOpen", "items", "treeRef", "onClose", "onEscape", "shouldShowCreateButton", "onFirstItemLoop", "onExpand"];
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


var SelectTreeMenu = function SelectTreeMenu(_ref) {
  var _selectControlMenuRef3;
  var isEventOutside = _ref.isEventOutside,
    isLoading = _ref.isLoading,
    isOpen = _ref.isOpen,
    className = _ref.className,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? 'bottom center' : _ref$position,
    _ref$scrollIntoViewOn = _ref.scrollIntoViewOnOpen,
    scrollIntoViewOnOpen = _ref$scrollIntoViewOn === void 0 ? false : _ref$scrollIntoViewOn,
    items = _ref.items,
    ref = _ref.treeRef,
    _ref$onClose = _ref.onClose,
    onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose,
    onEscape = _ref.onEscape,
    shouldShowCreateButton = _ref.shouldShowCreateButton,
    onFirstItemLoop = _ref.onFirstItemLoop,
    onExpand = _ref.onExpand,
    props = (0,objectWithoutProperties/* default */.A)(_ref, _excluded);
  var _useState = (0,react.useState)(),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    boundingRect = _useState2[0],
    setBoundingRect = _useState2[1];
  var selectControlMenuRef = (0,react.useRef)(null);
  (0,react.useLayoutEffect)(function () {
    var _selectControlMenuRef, _selectControlMenuRef2;
    if ((_selectControlMenuRef = selectControlMenuRef.current) !== null && _selectControlMenuRef !== void 0 && _selectControlMenuRef.parentElement && ((_selectControlMenuRef2 = selectControlMenuRef.current) === null || _selectControlMenuRef2 === void 0 ? void 0 : _selectControlMenuRef2.parentElement.clientWidth) > 0) {
      setBoundingRect(selectControlMenuRef.current.parentElement.getBoundingClientRect());
    }
  }, [selectControlMenuRef.current, (_selectControlMenuRef3 = selectControlMenuRef.current) === null || _selectControlMenuRef3 === void 0 ? void 0 : _selectControlMenuRef3.clientWidth]);

  // Scroll the selected item into view when the menu opens.
  (0,react.useEffect)(function () {
    if (isOpen && scrollIntoViewOnOpen) {
      var _selectControlMenuRef4, _selectControlMenuRef5;
      (_selectControlMenuRef4 = selectControlMenuRef.current) === null || _selectControlMenuRef4 === void 0 || (_selectControlMenuRef5 = _selectControlMenuRef4.scrollIntoView) === null || _selectControlMenuRef5 === void 0 || _selectControlMenuRef5.call(_selectControlMenuRef4);
    }
  }, [isOpen, scrollIntoViewOnOpen]);
  var shouldItemBeExpanded = function shouldItemBeExpanded(item) {
    var _item$children;
    if (!props.createValue || !((_item$children = item.children) !== null && _item$children !== void 0 && _item$children.length)) return false;
    return item.children.some(function (child) {
      if (new RegExp((0,lodash.escapeRegExp)(props.createValue || ''), 'ig').test(child.data.label)) {
        return true;
      }
      return shouldItemBeExpanded(child);
    });
  };

  /* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
  /* Disabled because of the onmouseup on the ul element below. */
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    ref: selectControlMenuRef,
    className: "woocommerce-experimental-select-tree-control__menu",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(popover/* default */.Ay, {
        focusOnMount: false,
        inline: true,
        className: classnames_default()('woocommerce-experimental-select-tree-control__popover-menu', className, {
          'is-open': isOpen,
          'has-results': items.length > 0
        }),
        position: position,
        flip: false,
        resize: false,
        animate: false,
        onFocusOutside: function onFocusOutside(event) {
          if (isEventOutside(event)) {
            onClose();
          }
        },
        children: isOpen && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          children: isLoading ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            style: {
              width: boundingRect === null || boundingRect === void 0 ? void 0 : boundingRect.width
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(spinner/* default */.Ay, {})
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(tree/* Tree */.P, _objectSpread(_objectSpread({}, props), {}, {
            ref: ref,
            items: items,
            onTreeBlur: onClose,
            onExpand: onExpand,
            shouldItemBeExpanded: shouldItemBeExpanded,
            shouldShowCreateButton: shouldShowCreateButton,
            onFirstItemLoop: onFirstItemLoop,
            onEscape: onEscape,
            style: {
              width: boundingRect === null || boundingRect === void 0 ? void 0 : boundingRect.width
            }
          }))
        })
      })
    })
  });
  /* eslint-enable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
};
try {
    // @ts-ignore
    SelectTreeMenu.displayName = "SelectTreeMenu";
    // @ts-ignore
    SelectTreeMenu.__docgenInfo = { "description": "", "displayName": "SelectTreeMenu", "props": { "isEventOutside": { "defaultValue": null, "description": "", "name": "isEventOutside", "required": true, "type": { "name": "(event: SyntheticEvent<Element, Event>) => boolean" } }, "isOpen": { "defaultValue": null, "description": "", "name": "isOpen", "required": true, "type": { "name": "boolean" } }, "isLoading": { "defaultValue": null, "description": "", "name": "isLoading", "required": false, "type": { "name": "boolean" } }, "position": { "defaultValue": { value: "bottom center" }, "description": "", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"bottom left left\"" }, { "value": "\"top\"" }, { "value": "\"middle\"" }, { "value": "\"bottom\"" }, { "value": "\"top center\"" }, { "value": "\"top left\"" }, { "value": "\"top right\"" }, { "value": "\"middle center\"" }, { "value": "\"middle left\"" }, { "value": "\"middle right\"" }, { "value": "\"bottom center\"" }, { "value": "\"bottom left\"" }, { "value": "\"bottom right\"" }, { "value": "\"top center left\"" }, { "value": "\"top center right\"" }, { "value": "\"top center top\"" }, { "value": "\"top center bottom\"" }, { "value": "\"top left left\"" }, { "value": "\"top left right\"" }, { "value": "\"top left top\"" }, { "value": "\"top left bottom\"" }, { "value": "\"top right left\"" }, { "value": "\"top right right\"" }, { "value": "\"top right top\"" }, { "value": "\"top right bottom\"" }, { "value": "\"middle center left\"" }, { "value": "\"middle center right\"" }, { "value": "\"middle center top\"" }, { "value": "\"middle center bottom\"" }, { "value": "\"middle left left\"" }, { "value": "\"middle left right\"" }, { "value": "\"middle left top\"" }, { "value": "\"middle left bottom\"" }, { "value": "\"middle right left\"" }, { "value": "\"middle right right\"" }, { "value": "\"middle right top\"" }, { "value": "\"middle right bottom\"" }, { "value": "\"bottom center left\"" }, { "value": "\"bottom center right\"" }, { "value": "\"bottom center top\"" }, { "value": "\"bottom center bottom\"" }, { "value": "\"bottom left right\"" }, { "value": "\"bottom left top\"" }, { "value": "\"bottom left bottom\"" }, { "value": "\"bottom right left\"" }, { "value": "\"bottom right right\"" }, { "value": "\"bottom right top\"" }, { "value": "\"bottom right bottom\"" }] } }, "scrollIntoViewOnOpen": { "defaultValue": { value: "false" }, "description": "", "name": "scrollIntoViewOnOpen", "required": false, "type": { "name": "boolean" } }, "highlightedIndex": { "defaultValue": null, "description": "", "name": "highlightedIndex", "required": false, "type": { "name": "number" } }, "items": { "defaultValue": null, "description": "", "name": "items", "required": true, "type": { "name": "LinkedTree[]" } }, "treeRef": { "defaultValue": null, "description": "", "name": "treeRef", "required": false, "type": { "name": "ForwardedRef<HTMLOListElement>" } }, "onClose": { "defaultValue": { value: "() => {}" }, "description": "", "name": "onClose", "required": false, "type": { "name": "(() => void)" } }, "onSelect": { "defaultValue": null, "description": "When `multiple` is true and a child item is selected, all its\nancestors and its descendants are also selected. If it's false\nonly the clicked item is selected.\n@param value The selection", "name": "onSelect", "required": false, "type": { "name": "((value: Item | Item[]) => void)" } }, "selected": { "defaultValue": null, "description": "It contains one item if `multiple` value is false or\na list of items if it is true.", "name": "selected", "required": false, "type": { "name": "Item | Item[]" } }, "onExpand": { "defaultValue": null, "description": "", "name": "onExpand", "required": false, "type": { "name": "((index: number, value: boolean) => void)" } }, "multiple": { "defaultValue": null, "description": "Whether the tree items are single or multiple selected.", "name": "multiple", "required": false, "type": { "name": "boolean" } }, "shouldNotRecursivelySelect": { "defaultValue": null, "description": "In `multiple` mode, when this flag is also set, selecting children does\nnot select their parents and selecting parents does not select their children.", "name": "shouldNotRecursivelySelect", "required": false, "type": { "name": "boolean" } }, "createValue": { "defaultValue": null, "description": "The value to be used for comparison to determine if 'create new' button should be shown.", "name": "createValue", "required": false, "type": { "name": "string" } }, "onCreateNew": { "defaultValue": null, "description": "Called when the 'create new' button is clicked.", "name": "onCreateNew", "required": false, "type": { "name": "(() => void)" } }, "shouldShowCreateButton": { "defaultValue": null, "description": "If passed, shows create button if return from callback is true", "name": "shouldShowCreateButton", "required": false, "type": { "name": "((value?: string) => boolean)" } }, "isExpanded": { "defaultValue": null, "description": "", "name": "isExpanded", "required": false, "type": { "name": "boolean" } }, "onRemove": { "defaultValue": null, "description": "When `multiple` is true and a child item is unselected, all its\nancestors (if no sibblings are selected) and its descendants\nare also unselected. If it's false only the clicked item is\nunselected.\n@param value The unselection", "name": "onRemove", "required": false, "type": { "name": "((value: Item | Item[]) => void)" } }, "shouldItemBeHighlighted": { "defaultValue": null, "description": "It provides a way to determine whether the current rendering\nitem is highlighted or not from outside the tree.\n@example <Tree\n\tshouldItemBeHighlighted={ isFirstChild }\n/>\n@param item The current linked tree item, useful to\ntraverse the entire linked tree from this item.\n@see {@link LinkedTree }", "name": "shouldItemBeHighlighted", "required": false, "type": { "name": "((item: LinkedTree) => boolean)" } }, "onTreeBlur": { "defaultValue": null, "description": "Called when the create button is clicked to help closing any related popover.", "name": "onTreeBlur", "required": false, "type": { "name": "(() => void)" } }, "onFirstItemLoop": { "defaultValue": null, "description": "", "name": "onFirstItemLoop", "required": false, "type": { "name": "((event: KeyboardEvent<HTMLDivElement>) => void)" } }, "onEscape": { "defaultValue": null, "description": "Called when the escape key is pressed.", "name": "onEscape", "required": false, "type": { "name": "(() => void)" } }, "getItemLabel": { "defaultValue": null, "description": "It gives a way to render a different Element as the\ntree item label.\n@example <Tree\n\tgetItemLabel={ ( item ) => <span>${ item.data.label }</span> }\n/>\n@param item The current rendering tree item\n@see {@link LinkedTree }", "name": "getItemLabel", "required": false, "type": { "name": "((item: LinkedTree) => Element)" } }, "shouldItemBeExpanded": { "defaultValue": null, "description": "Return if the tree item passed in should be expanded.\n@example <Tree\n\tshouldItemBeExpanded={\n\t\t( item ) => checkExpanded( item, filter )\n\t}\n/>\n@param item The tree item to determine if should be expanded.\n@see {@link LinkedTree }", "name": "shouldItemBeExpanded", "required": false, "type": { "name": "((item: LinkedTree) => boolean)" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/experimental-select-tree-control/select-tree-menu.tsx#SelectTreeMenu"] = { docgenInfo: SelectTreeMenu.__docgenInfo, name: "SelectTreeMenu", path: "../../packages/js/components/src/experimental-select-tree-control/select-tree-menu.tsx#SelectTreeMenu" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.sort.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.promise.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.replace.js");
;// CONCATENATED MODULE: ../../packages/js/components/src/utils.tsx
















function utils_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function utils_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? utils_ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : utils_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
/**
 * External dependencies
 */



/**
 * Returns an object with the children and props that will be used by `cloneElement`. They will change depending on the
 * type of children passed in.
 *
 * @param {Node}   children    - Node children.
 * @param {number} order       - Node order.
 * @param {Array}  props       - Fill props.
 * @param {Object} injectProps - Props to inject.
 * @return {Object} Object with the keys: children and props.
 */
function getChildrenAndProps(children, order, props, injectProps) {
  if (typeof children === 'function') {
    return {
      children: children(utils_objectSpread(utils_objectSpread({}, props), {}, {
        order: order
      }, injectProps)),
      props: utils_objectSpread({
        order: order
      }, injectProps)
    };
  } else if (/*#__PURE__*/isValidElement(children)) {
    // This checks whether 'children' is a react element or a standard HTML element.
    if (typeof (children === null || children === void 0 ? void 0 : children.type) === 'function') {
      return {
        children: children,
        props: utils_objectSpread(utils_objectSpread({}, props), {}, {
          order: order
        }, injectProps)
      };
    }
    return {
      children: children,
      props: utils_objectSpread({
        order: order
      }, injectProps)
    };
  }
  throw Error('Invalid children type');
}

/**
 * Ordered fill item.
 *
 * @param {Node}   children    - Node children.
 * @param {number} order       - Node order.
 * @param {Array}  props       - Fill props.
 * @param {Object} injectProps - Props to inject.
 * @return {Node} Node.
 */
function createOrderedChildren(children, order, props, injectProps) {
  var _getChildrenAndProps = getChildrenAndProps(children, order, props, injectProps),
    childrenToRender = _getChildrenAndProps.children,
    propsToRender = _getChildrenAndProps.props;
  if (!childrenToRender || typeof childrenToRender === 'string') {
    return childrenToRender;
  }
  return cloneElement(childrenToRender, propsToRender);
}


/**
 * Sort fills by order for slot children.
 *
 * @param {Array} fills - slot's `Fill`s.
 * @return {Node} Node.
 */
var sortFillsByOrder = function sortFillsByOrder(fills) {
  // Copy fills array here because its type is readonly array that doesn't have .sort method in Typescript definition.
  var sortedFills = Children.toArray(fills).sort(function (a, b) {
    if (_typeof(a) === 'object' && 'key' in a && _typeof(b) === 'object' && 'key' in b) {
      return a.props.order - b.props.order;
    }
    return 0;
  });
  return /*#__PURE__*/_jsx(Fragment, {
    children: sortedFills
  });
};
var escapeHTML = function escapeHTML(string) {
  return string.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;');
};
try {
    // @ts-ignore
    createOrderedChildren.displayName = "createOrderedChildren";
    // @ts-ignore
    createOrderedChildren.__docgenInfo = { "description": "Ordered fill item.", "displayName": "createOrderedChildren", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/utils.tsx#createOrderedChildren"] = { docgenInfo: createOrderedChildren.__docgenInfo, name: "createOrderedChildren", path: "../../packages/js/components/src/utils.tsx#createOrderedChildren" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    sortFillsByOrder.displayName = "sortFillsByOrder";
    // @ts-ignore
    sortFillsByOrder.__docgenInfo = { "description": "Sort fills by order for slot children.", "displayName": "sortFillsByOrder", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/utils.tsx#sortFillsByOrder"] = { docgenInfo: sortFillsByOrder.__docgenInfo, name: "sortFillsByOrder", path: "../../packages/js/components/src/utils.tsx#sortFillsByOrder" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    escapeHTML.displayName = "escapeHTML";
    // @ts-ignore
    escapeHTML.__docgenInfo = { "description": "", "displayName": "escapeHTML", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/utils.tsx#escapeHTML"] = { docgenInfo: escapeHTML.__docgenInfo, name: "escapeHTML", path: "../../packages/js/components/src/utils.tsx#escapeHTML" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ../../packages/js/components/src/experimental-select-tree-control/select-tree.tsx



var select_tree_excluded = ["items", "treeRef", "isLoading", "disabled", "initialInputValue", "onInputChange", "shouldShowCreateButton", "help", "isClearingAllowed", "onClear"];
function select_tree_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function select_tree_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? select_tree_ownKeys(Object(t), !0).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : select_tree_ownKeys(Object(t)).forEach(function (r) {
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







function isBlurEvent(event) {
  return event.type === 'blur';
}
var SelectTree = function SelectTree(_ref) {
  var items = _ref.items,
    ref = _ref.treeRef,
    isLoading = _ref.isLoading,
    disabled = _ref.disabled,
    initialInputValue = _ref.initialInputValue,
    onInputChange = _ref.onInputChange,
    shouldShowCreateButton = _ref.shouldShowCreateButton,
    help = _ref.help,
    _ref$isClearingAllowe = _ref.isClearingAllowed,
    isClearingAllowed = _ref$isClearingAllowe === void 0 ? false : _ref$isClearingAllowe,
    _ref$onClear = _ref.onClear,
    onClear = _ref$onClear === void 0 ? function () {} : _ref$onClear,
    props = (0,objectWithoutProperties/* default */.A)(_ref, select_tree_excluded);
  var _useState = (0,react.useState)([]),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    linkedTree = _useState2[0],
    setLinkedTree = _useState2[1];
  var _useState3 = (0,react.useState)(-1),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    highlightedIndex = _useState4[0],
    setHighlightedIndex = _useState4[1];

  // whenever the items change, the linked tree needs to be recalculated
  (0,react.useEffect)(function () {
    setLinkedTree((0,linked_tree_utils/* createLinkedTree */.YD)(items, props.createValue));
  }, [items.length]);

  // reset highlighted index when the input value changes
  (0,react.useEffect)(function () {
    return setHighlightedIndex(-1);
  }, [props.createValue]);
  var selectTreeInstanceId = (0,use_instance_id/* default */.A)(SelectTree, 'woocommerce-experimental-select-tree-control__dropdown');
  var menuInstanceId = (0,use_instance_id/* default */.A)(SelectTree, 'woocommerce-select-tree-control__menu');
  var selectedItemsFocusHandle = (0,react.useRef)(null);
  function isEventOutside(event) {
    var _document$getElementB, _document$getElementB2, _target;
    var target = event.currentTarget;
    if (isBlurEvent(event)) {
      target = event.relatedTarget;
    }
    var isInsideSelect = (_document$getElementB = document.getElementById(selectTreeInstanceId)) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.contains(target);
    var isInsidePopover = (_document$getElementB2 = document.getElementById(menuInstanceId)) === null || _document$getElementB2 === void 0 || (_document$getElementB2 = _document$getElementB2.closest('.woocommerce-experimental-select-tree-control__popover-menu')) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.contains(target);
    var isInRemoveTag = (_target = target) === null || _target === void 0 ? void 0 : _target.classList.contains('woocommerce-tag__remove');
    return !isInsideSelect && !isInRemoveTag && !isInsidePopover;
  }
  var recalculateInputValue = function recalculateInputValue() {
    if (onInputChange) {
      if (!props.multiple && props.selected) {
        onInputChange(props.selected.label);
      } else {
        onInputChange('');
      }
    }
  };
  var focusOnInput = function focusOnInput() {
    var _document$querySelect;
    (_document$querySelect = document.querySelector("#".concat(props.id, "-input"))) === null || _document$querySelect === void 0 || _document$querySelect.focus();
  };
  var _useState5 = (0,react.useState)(false),
    _useState6 = (0,slicedToArray/* default */.A)(_useState5, 2),
    isFocused = _useState6[0],
    setIsFocused = _useState6[1];
  var _useState7 = (0,react.useState)(false),
    _useState8 = (0,slicedToArray/* default */.A)(_useState7, 2),
    isOpen = _useState8[0],
    setIsOpen = _useState8[1];
  var _useState9 = (0,react.useState)(''),
    _useState10 = (0,slicedToArray/* default */.A)(_useState9, 2),
    inputValue = _useState10[0],
    setInputValue = _useState10[1];
  var isReadOnly = !isOpen && !isFocused;
  (0,react.useEffect)(function () {
    if (initialInputValue !== undefined && isFocused) {
      setInputValue(initialInputValue);
    }
  }, [isFocused]);

  // Scroll the newly highlighted item into view
  (0,react.useEffect)(function () {
    var _document$querySelect2, _document$querySelect3;
    return (_document$querySelect2 = document.querySelector('.experimental-woocommerce-tree-item--highlighted')) === null || _document$querySelect2 === void 0 || (_document$querySelect3 = _document$querySelect2.scrollIntoView) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.call(_document$querySelect2, {
      block: 'nearest'
    });
  }, [highlightedIndex]);
  var placeholder = '';
  if (Array.isArray(props.selected)) {
    placeholder = props.selected.length === 0 ? props.placeholder : '';
  } else if (props.selected) {
    placeholder = props.placeholder;
  }

  // reset highlighted index when the input value changes
  (0,react.useEffect)(function () {
    if (highlightedIndex === items.length && !(shouldShowCreateButton !== null && shouldShowCreateButton !== void 0 && shouldShowCreateButton(props.createValue))) {
      setHighlightedIndex(items.length - 1);
    }
  }, [props.createValue]);
  var inputProps = {
    className: 'woocommerce-experimental-select-control__input',
    id: "".concat(props.id, "-input"),
    'aria-autocomplete': 'list',
    'aria-activedescendant': highlightedIndex >= 0 ? "woocommerce-experimental-tree-control__menu-item-".concat(highlightedIndex) : undefined,
    'aria-controls': menuInstanceId,
    'aria-owns': menuInstanceId,
    role: 'combobox',
    autoComplete: 'off',
    'aria-expanded': isOpen,
    'aria-haspopup': 'tree',
    disabled: disabled,
    onFocus: function onFocus(event) {
      var _props$selected;
      if (props.multiple) {
        (0,a11y_build_module/* speak */.L)((0,i18n_build_module.__)('To select existing items, type its exact label and separate with commas or the Enter key.', 'woocommerce'));
      }
      if (!isOpen) {
        setIsOpen(true);
      }
      setIsFocused(true);
      if (Array.isArray(props.selected) && (_props$selected = props.selected) !== null && _props$selected !== void 0 && _props$selected.some(function (item) {
        return item.label === event.target.value;
      })) {
        setInputValue('');
      }
    },
    onBlur: function onBlur(event) {
      event.preventDefault();
      if (isEventOutside(event)) {
        setIsOpen(false);
        setIsFocused(false);
        recalculateInputValue();
      }
    },
    onKeyDown: function onKeyDown(event) {
      setIsOpen(true);
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        if (
        // is advancing from the last menu item to the create button
        highlightedIndex === items.length - 1 && shouldShowCreateButton !== null && shouldShowCreateButton !== void 0 && shouldShowCreateButton(props.createValue)) {
          setHighlightedIndex(items.length);
        } else {
          var visibleNodeIndex = (0,linked_tree_utils/* getVisibleNodeIndex */.p_)(linkedTree, Math.min(highlightedIndex + 1, items.length), 'down');
          if (visibleNodeIndex !== undefined) {
            setHighlightedIndex(visibleNodeIndex);
          }
        }
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        if (highlightedIndex > 0) {
          var _visibleNodeIndex = (0,linked_tree_utils/* getVisibleNodeIndex */.p_)(linkedTree, Math.max(highlightedIndex - 1, -1), 'up');
          if (_visibleNodeIndex !== undefined) {
            setHighlightedIndex(_visibleNodeIndex);
          }
        } else {
          setHighlightedIndex(-1);
        }
      } else if (event.key === 'Tab' || event.key === 'Escape') {
        setIsOpen(false);
        recalculateInputValue();
      } else if (event.key === 'Enter' || event.key === ',') {
        event.preventDefault();
        if (highlightedIndex === items.length && shouldShowCreateButton) {
          var _props$onCreateNew;
          (_props$onCreateNew = props.onCreateNew) === null || _props$onCreateNew === void 0 || _props$onCreateNew.call(props);
        } else if (
        // is selecting an item
        highlightedIndex !== -1) {
          var nodeData = (0,linked_tree_utils/* getNodeDataByIndex */.g_)(linkedTree, highlightedIndex);
          if (!nodeData) {
            return;
          }
          if (props.multiple && Array.isArray(props.selected)) {
            if (!Boolean(props.selected.find(function (i) {
              return i.label === nodeData.label;
            }))) {
              if (props.onSelect) {
                props.onSelect(nodeData);
              }
            } else if (props.onRemove) {
              props.onRemove(nodeData);
            }
            setInputValue('');
          } else {
            var _props$onSelect;
            onInputChange === null || onInputChange === void 0 || onInputChange(nodeData.label);
            (_props$onSelect = props.onSelect) === null || _props$onSelect === void 0 || _props$onSelect.call(props, nodeData);
            setIsOpen(false);
            setIsFocused(false);
            focusOnInput();
          }
        } else if (inputValue) {
          var _props$selected2;
          // no highlighted item, but there is an input value, check if it matches any item

          var item = items.find(function (i) {
            return i.label === escapeHTML(inputValue);
          });
          var isAlreadySelected = Array.isArray(props.selected) ? Boolean(props.selected.find(function (i) {
            return i.label === escapeHTML(inputValue);
          })) : ((_props$selected2 = props.selected) === null || _props$selected2 === void 0 ? void 0 : _props$selected2.label) === escapeHTML(inputValue);
          if (item && !isAlreadySelected) {
            var _props$onSelect2;
            (_props$onSelect2 = props.onSelect) === null || _props$onSelect2 === void 0 || _props$onSelect2.call(props, item);
            setInputValue('');
            recalculateInputValue();
          }
        }
      } else if (event.key === 'Backspace' &&
      // test if the cursor is at the beginning of the input with nothing selected
      event.target.selectionStart === 0 && event.target.selectionEnd === 0 && selectedItemsFocusHandle.current) {
        selectedItemsFocusHandle.current();
      } else if (event.key === 'ArrowRight') {
        setLinkedTree((0,linked_tree_utils/* toggleNode */.TN)(linkedTree, highlightedIndex, true));
      } else if (event.key === 'ArrowLeft') {
        setLinkedTree((0,linked_tree_utils/* toggleNode */.TN)(linkedTree, highlightedIndex, false));
      } else if (event.key === 'Home') {
        event.preventDefault();
        setHighlightedIndex(0);
      } else if (event.key === 'End') {
        event.preventDefault();
        setHighlightedIndex(items.length - 1);
      }
    },
    onChange: function onChange(event) {
      if (onInputChange) {
        onInputChange(event.target.value);
      }
      setInputValue(event.target.value);
    },
    placeholder: placeholder,
    value: inputValue
  };
  var handleClear = function handleClear() {
    if (isClearingAllowed) {
      onClear();
    }
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    id: selectTreeInstanceId,
    className: "woocommerce-experimental-select-tree-control__dropdown",
    tabIndex: -1,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: classnames_default()('woocommerce-experimental-select-control', {
        'is-read-only': isReadOnly,
        'is-focused': isFocused,
        'is-multiple': props.multiple,
        'has-selected-items': Array.isArray(props.selected) && props.selected.length
      }),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(base_control/* default */.Ay, {
        label: props.label,
        id: "".concat(props.id, "-input"),
        help: props.multiple && !help ? (0,i18n_build_module.__)('Separate with commas or the Enter key.', 'woocommerce') : help,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [props.multiple ? /*#__PURE__*/(0,jsx_runtime.jsx)(combo_box/* ComboBox */.a, {
            comboBoxProps: {
              className: 'woocommerce-experimental-select-control__combo-box-wrapper'
            },
            inputProps: inputProps,
            suffix: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "woocommerce-experimental-select-control__suffix-items",
              children: [isClearingAllowed && isOpen && /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
                label: (0,i18n_build_module.__)('Remove all', 'woocommerce'),
                onClick: handleClear,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(suffix_icon/* SuffixIcon */.f, {
                  className: "woocommerce-experimental-select-control__icon-clear",
                  icon: close_small/* default */.A
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(suffix_icon/* SuffixIcon */.f, {
                icon: isOpen ? chevron_up/* default */.A : chevron_down/* default */.A
              })]
            }),
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(selected_items/* SelectedItems */.K, {
              isReadOnly: isReadOnly,
              ref: selectedItemsFocusHandle,
              items: !Array.isArray(props.selected) ? [props.selected] : props.selected,
              getItemLabel: function getItemLabel(item) {
                return (item === null || item === void 0 ? void 0 : item.label) || '';
              },
              getItemValue: function getItemValue(item) {
                return (item === null || item === void 0 ? void 0 : item.value) || '';
              },
              onRemove: function onRemove(item) {
                if (item && !Array.isArray(item) && props.onRemove) {
                  props.onRemove(item);
                }
              },
              onBlur: function onBlur(event) {
                if (isEventOutside(event)) {
                  setIsOpen(false);
                  setIsFocused(false);
                }
              },
              onSelectedItemsEnd: focusOnInput,
              getSelectedItemProps: function getSelectedItemProps() {
                return {};
              }
            })
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(text_control/* default */.A, select_tree_objectSpread(select_tree_objectSpread({}, inputProps), {}, {
            value: (0,build_module/* decodeEntities */.S)(props.createValue || ''),
            onChange: function onChange(value) {
              if (onInputChange) onInputChange(value);
              var item = items.find(function (i) {
                return i.label === escapeHTML(value);
              });
              if (props.onSelect && item) {
                props.onSelect(item);
              }
              if (!value && props.onRemove) {
                props.onRemove(props.selected);
              }
            }
          })), /*#__PURE__*/(0,jsx_runtime.jsx)(SelectTreeMenu, select_tree_objectSpread(select_tree_objectSpread({}, props), {}, {
            onSelect: function onSelect(item) {
              if (!props.multiple && onInputChange) {
                onInputChange(item.label);
                setIsOpen(false);
                setIsFocused(false);
                focusOnInput();
              }
              if (props.onSelect) {
                props.onSelect(item);
              }
            },
            id: menuInstanceId,
            ref: ref,
            isEventOutside: isEventOutside,
            isLoading: isLoading,
            isOpen: isOpen,
            highlightedIndex: highlightedIndex,
            onExpand: function onExpand(index, value) {
              setLinkedTree((0,linked_tree_utils/* toggleNode */.TN)(linkedTree, index, value));
            },
            items: linkedTree,
            shouldShowCreateButton: shouldShowCreateButton,
            onEscape: function onEscape() {
              focusOnInput();
              setIsOpen(false);
            },
            onClose: function onClose() {
              setIsOpen(false);
            },
            onFirstItemLoop: focusOnInput
          }))]
        })
      })
    })
  });
};
try {
    // @ts-ignore
    SelectTree.displayName = "SelectTree";
    // @ts-ignore
    SelectTree.__docgenInfo = { "description": "", "displayName": "SelectTree", "props": { "id": { "defaultValue": null, "description": "", "name": "id", "required": true, "type": { "name": "string" } }, "selected": { "defaultValue": null, "description": "It contains one item if `multiple` value is false or\na list of items if it is true.", "name": "selected", "required": false, "type": { "name": "Item | Item[]" } }, "treeRef": { "defaultValue": null, "description": "", "name": "treeRef", "required": false, "type": { "name": "ForwardedRef<HTMLOListElement>" } }, "isLoading": { "defaultValue": null, "description": "", "name": "isLoading", "required": false, "type": { "name": "boolean" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "label": { "defaultValue": null, "description": "", "name": "label", "required": true, "type": { "name": "string | Element" } }, "help": { "defaultValue": null, "description": "", "name": "help", "required": false, "type": { "name": "string | Element" } }, "onInputChange": { "defaultValue": null, "description": "", "name": "onInputChange", "required": false, "type": { "name": "((value: string) => void)" } }, "initialInputValue": { "defaultValue": null, "description": "", "name": "initialInputValue", "required": false, "type": { "name": "string" } }, "isClearingAllowed": { "defaultValue": { value: "false" }, "description": "", "name": "isClearingAllowed", "required": false, "type": { "name": "boolean" } }, "onClear": { "defaultValue": { value: "() => {}" }, "description": "", "name": "onClear", "required": false, "type": { "name": "(() => void)" } }, "placeholder": { "defaultValue": null, "description": "", "name": "placeholder", "required": false, "type": { "name": "string" } }, "onSelect": { "defaultValue": null, "description": "When `multiple` is true and a child item is selected, all its\nancestors and its descendants are also selected. If it's false\nonly the clicked item is selected.\n@param value The selection", "name": "onSelect", "required": false, "type": { "name": "((value: Item | Item[]) => void)" } }, "onExpand": { "defaultValue": null, "description": "", "name": "onExpand", "required": false, "type": { "name": "((index: number, value: boolean) => void)" } }, "highlightedIndex": { "defaultValue": null, "description": "", "name": "highlightedIndex", "required": false, "type": { "name": "number" } }, "multiple": { "defaultValue": null, "description": "Whether the tree items are single or multiple selected.", "name": "multiple", "required": false, "type": { "name": "boolean" } }, "shouldNotRecursivelySelect": { "defaultValue": null, "description": "In `multiple` mode, when this flag is also set, selecting children does\nnot select their parents and selecting parents does not select their children.", "name": "shouldNotRecursivelySelect", "required": false, "type": { "name": "boolean" } }, "createValue": { "defaultValue": null, "description": "The value to be used for comparison to determine if 'create new' button should be shown.", "name": "createValue", "required": false, "type": { "name": "string" } }, "onCreateNew": { "defaultValue": null, "description": "Called when the 'create new' button is clicked.", "name": "onCreateNew", "required": false, "type": { "name": "(() => void)" } }, "shouldShowCreateButton": { "defaultValue": null, "description": "If passed, shows create button if return from callback is true", "name": "shouldShowCreateButton", "required": false, "type": { "name": "((value?: string) => boolean)" } }, "isExpanded": { "defaultValue": null, "description": "", "name": "isExpanded", "required": false, "type": { "name": "boolean" } }, "onRemove": { "defaultValue": null, "description": "When `multiple` is true and a child item is unselected, all its\nancestors (if no sibblings are selected) and its descendants\nare also unselected. If it's false only the clicked item is\nunselected.\n@param value The unselection", "name": "onRemove", "required": false, "type": { "name": "((value: Item | Item[]) => void)" } }, "shouldItemBeHighlighted": { "defaultValue": null, "description": "It provides a way to determine whether the current rendering\nitem is highlighted or not from outside the tree.\n@example <Tree\n\tshouldItemBeHighlighted={ isFirstChild }\n/>\n@param item The current linked tree item, useful to\ntraverse the entire linked tree from this item.\n@see {@link LinkedTree }", "name": "shouldItemBeHighlighted", "required": false, "type": { "name": "((item: LinkedTree) => boolean)" } }, "onTreeBlur": { "defaultValue": null, "description": "Called when the create button is clicked to help closing any related popover.", "name": "onTreeBlur", "required": false, "type": { "name": "(() => void)" } }, "onFirstItemLoop": { "defaultValue": null, "description": "", "name": "onFirstItemLoop", "required": false, "type": { "name": "((event: KeyboardEvent<HTMLDivElement>) => void)" } }, "onEscape": { "defaultValue": null, "description": "Called when the escape key is pressed.", "name": "onEscape", "required": false, "type": { "name": "(() => void)" } }, "getItemLabel": { "defaultValue": null, "description": "It gives a way to render a different Element as the\ntree item label.\n@example <Tree\n\tgetItemLabel={ ( item ) => <span>${ item.data.label }</span> }\n/>\n@param item The current rendering tree item\n@see {@link LinkedTree }", "name": "getItemLabel", "required": false, "type": { "name": "((item: LinkedTree) => Element)" } }, "shouldItemBeExpanded": { "defaultValue": null, "description": "Return if the tree item passed in should be expanded.\n@example <Tree\n\tshouldItemBeExpanded={\n\t\t( item ) => checkExpanded( item, filter )\n\t}\n/>\n@param item The tree item to determine if should be expanded.\n@see {@link LinkedTree }", "name": "shouldItemBeExpanded", "required": false, "type": { "name": "((item: LinkedTree) => boolean)" } }, "items": { "defaultValue": null, "description": "", "name": "items", "required": true, "type": { "name": "Item[]" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/experimental-select-tree-control/select-tree.tsx#SelectTree"] = { docgenInfo: SelectTree.__docgenInfo, name: "SelectTree", path: "../../packages/js/components/src/experimental-select-tree-control/select-tree.tsx#SelectTree" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ../../packages/js/components/src/experimental-select-tree-control/stories/select-tree-control.story.tsx











/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



var listItems = [{
  value: '1',
  label: 'Technology'
}, {
  value: '1.1',
  label: 'Notebooks',
  parent: '1'
}, {
  value: '1.2',
  label: 'Phones',
  parent: '1'
}, {
  value: '1.2.1',
  label: 'iPhone',
  parent: '1.2'
}, {
  value: '1.2.1.1',
  label: 'iPhone 14 Pro',
  parent: '1.2.1'
}, {
  value: '1.2.1.2',
  label: 'iPhone 14 Pro Max',
  parent: '1.2.1'
}, {
  value: '1.2.2',
  label: 'Samsung',
  parent: '1.2'
}, {
  value: '1.2.2.1',
  label: 'Samsung Galaxy 22 Plus',
  parent: '1.2.2'
}, {
  value: '1.2.2.2',
  label: 'Samsung Galaxy 22 Ultra',
  parent: '1.2.2'
}, {
  value: '1.3',
  label: 'Wearables',
  parent: '1'
}, {
  value: '2',
  label: 'Hardware'
}, {
  value: '2.1',
  label: 'CPU',
  parent: '2'
}, {
  value: '2.2',
  label: 'GPU',
  parent: '2'
}, {
  value: '2.3',
  label: 'Memory RAM',
  parent: '2'
}, {
  value: '3',
  label: 'Other'
}];
var filterItems = function filterItems(items, searchValue) {
  var filteredItems = items.filter(function (e) {
    return e.label.includes(searchValue);
  });
  var itemsToIterate = (0,toConsumableArray/* default */.A)(filteredItems);
  var _loop = function _loop() {
    // The filter should include the parents of the filtered items
    var element = itemsToIterate.pop();
    if (element) {
      var parent = listItems.find(function (item) {
        return item.value === element.parent;
      });
      if (parent && !filteredItems.includes(parent)) {
        filteredItems.push(parent);
        itemsToIterate.push(parent);
      }
    }
  };
  while (itemsToIterate.length > 0) {
    _loop();
  }
  return filteredItems;
};
var MultipleSelectTree = function MultipleSelectTree() {
  var _React$useState = react.useState(''),
    _React$useState2 = (0,slicedToArray/* default */.A)(_React$useState, 2),
    value = _React$useState2[0],
    setValue = _React$useState2[1];
  var _React$useState3 = react.useState([]),
    _React$useState4 = (0,slicedToArray/* default */.A)(_React$useState3, 2),
    selected = _React$useState4[0],
    setSelected = _React$useState4[1];
  var items = filterItems(listItems, value);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(SelectTree, {
    id: "multiple-select-tree",
    label: "Multiple Select Tree",
    multiple: true,
    items: items,
    selected: selected,
    shouldNotRecursivelySelect: true,
    shouldShowCreateButton: function shouldShowCreateButton(typedValue) {
      return !value || listItems.findIndex(function (item) {
        return item.label === typedValue;
      }) === -1;
    },
    createValue: value
    // eslint-disable-next-line no-alert
    ,

    onCreateNew: function onCreateNew() {
      return alert('create new called');
    },
    onInputChange: function onInputChange(a) {
      return setValue(a || '');
    },
    onSelect: function onSelect(selectedItems) {
      if (Array.isArray(selectedItems)) {
        setSelected([].concat((0,toConsumableArray/* default */.A)(selected), (0,toConsumableArray/* default */.A)(selectedItems)));
      }
    },
    onRemove: function onRemove(removedItems) {
      var newValues = Array.isArray(removedItems) ? selected.filter(function (item) {
        return !removedItems.some(function (_ref) {
          var removedValue = _ref.value;
          return item.value === removedValue;
        });
      }) : selected.filter(function (item) {
        return item.value !== removedItems.value;
      });
      setSelected(newValues);
    }
  });
};
var SingleWithinModalUsingBodyDropdownPlacement = function SingleWithinModalUsingBodyDropdownPlacement() {
  var _useState = (0,react.useState)(true),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    isOpen = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = (0,react.useState)(''),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    value = _useState4[0],
    setValue = _useState4[1];
  var _useState5 = (0,react.useState)([]),
    _useState6 = (0,slicedToArray/* default */.A)(_useState5, 2),
    selected = _useState6[0],
    setSelected = _useState6[1];
  var items = filterItems(listItems, value);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(slot_fill/* Provider */.Kq, {
    children: ["Selected: ", JSON.stringify(selected), /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
      onClick: function onClick() {
        return setOpen(true);
      },
      children: "Show Dropdown in Modal"
    }), isOpen && /*#__PURE__*/(0,jsx_runtime.jsx)(modal/* default */.A, {
      title: "Dropdown Modal",
      onRequestClose: function onRequestClose() {
        return setOpen(false);
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(SelectTree, {
        id: "multiple-select-tree",
        label: "Multiple Select Tree",
        multiple: true,
        items: items,
        selected: selected,
        shouldNotRecursivelySelect: true,
        shouldShowCreateButton: function shouldShowCreateButton(typedValue) {
          return !value || listItems.findIndex(function (item) {
            return item.label === typedValue;
          }) === -1;
        },
        createValue: value
        // eslint-disable-next-line no-alert
        ,

        onCreateNew: function onCreateNew() {
          return alert('create new called');
        },
        onInputChange: function onInputChange(a) {
          return setValue(a || '');
        },
        onSelect: function onSelect(selectedItems) {
          if (Array.isArray(selectedItems)) {
            setSelected([].concat((0,toConsumableArray/* default */.A)(selected), (0,toConsumableArray/* default */.A)(selectedItems)));
          }
        },
        onRemove: function onRemove(removedItems) {
          var newValues = Array.isArray(removedItems) ? selected.filter(function (item) {
            return !removedItems.some(function (_ref2) {
              var removedValue = _ref2.value;
              return item.value === removedValue;
            });
          }) : selected.filter(function (item) {
            return item.value !== removedItems.value;
          });
          setSelected(newValues);
        }
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(select_tree_menu_namespaceObject.SelectTreeMenuSlot, {})]
  });
};
var SingleSelectTree = function SingleSelectTree() {
  var _React$useState5 = react.useState(''),
    _React$useState6 = (0,slicedToArray/* default */.A)(_React$useState5, 2),
    value = _React$useState6[0],
    setValue = _React$useState6[1];
  var _React$useState7 = react.useState(),
    _React$useState8 = (0,slicedToArray/* default */.A)(_React$useState7, 2),
    selected = _React$useState8[0],
    setSelected = _React$useState8[1];
  var items = filterItems(listItems, value);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(SelectTree, {
    id: "single-select-tree",
    label: "Single Select Tree",
    items: items,
    selected: selected,
    shouldNotRecursivelySelect: true,
    shouldShowCreateButton: function shouldShowCreateButton(typedValue) {
      return !value || listItems.findIndex(function (item) {
        return item.label === typedValue;
      }) === -1;
    },
    createValue: value
    // eslint-disable-next-line no-alert
    ,

    onCreateNew: function onCreateNew() {
      return alert('create new called');
    },
    onInputChange: function onInputChange(a) {
      return setValue(a || '');
    },
    onSelect: function onSelect(selectedItems) {
      setSelected(selectedItems);
    },
    onRemove: function onRemove() {
      return setSelected(undefined);
    }
  });
};
/* harmony default export */ const select_tree_control_story = ({
  title: 'Experimental/SelectTreeControl',
  component: SelectTree
});
MultipleSelectTree.parameters = {
  ...MultipleSelectTree.parameters,
  docs: {
    ...MultipleSelectTree.parameters?.docs,
    source: {
      originalSource: "() => {\n  const [value, setValue] = React.useState('');\n  const [selected, setSelected] = React.useState<Item[]>([]);\n  const items = filterItems(listItems, value);\n  return <SelectTree id=\"multiple-select-tree\" label=\"Multiple Select Tree\" multiple items={items} selected={selected} shouldNotRecursivelySelect shouldShowCreateButton={typedValue => !value || listItems.findIndex(item => item.label === typedValue) === -1} createValue={value}\n  // eslint-disable-next-line no-alert\n  onCreateNew={() => alert('create new called')} onInputChange={a => setValue(a || '')} onSelect={selectedItems => {\n    if (Array.isArray(selectedItems)) {\n      setSelected([...selected, ...selectedItems]);\n    }\n  }} onRemove={removedItems => {\n    const newValues = Array.isArray(removedItems) ? selected.filter(item => !removedItems.some(({\n      value: removedValue\n    }) => item.value === removedValue)) : selected.filter(item => item.value !== removedItems.value);\n    setSelected(newValues);\n  }} />;\n}",
      ...MultipleSelectTree.parameters?.docs?.source
    }
  }
};
SingleWithinModalUsingBodyDropdownPlacement.parameters = {
  ...SingleWithinModalUsingBodyDropdownPlacement.parameters,
  docs: {
    ...SingleWithinModalUsingBodyDropdownPlacement.parameters?.docs,
    source: {
      originalSource: "() => {\n  const [isOpen, setOpen] = useState(true);\n  const [value, setValue] = useState('');\n  const [selected, setSelected] = useState<Item[]>([]);\n  const items = filterItems(listItems, value);\n  return <SlotFillProvider>\n            Selected: {JSON.stringify(selected)}\n            <Button onClick={() => setOpen(true)}>\n                Show Dropdown in Modal\n            </Button>\n            {isOpen && <Modal title=\"Dropdown Modal\" onRequestClose={() => setOpen(false)}>\n                    <SelectTree id=\"multiple-select-tree\" label=\"Multiple Select Tree\" multiple items={items} selected={selected} shouldNotRecursivelySelect shouldShowCreateButton={typedValue => !value || listItems.findIndex(item => item.label === typedValue) === -1} createValue={value}\n      // eslint-disable-next-line no-alert\n      onCreateNew={() => alert('create new called')} onInputChange={a => setValue(a || '')} onSelect={selectedItems => {\n        if (Array.isArray(selectedItems)) {\n          setSelected([...selected, ...selectedItems]);\n        }\n      }} onRemove={removedItems => {\n        const newValues = Array.isArray(removedItems) ? selected.filter(item => !removedItems.some(({\n          value: removedValue\n        }) => item.value === removedValue)) : selected.filter(item => item.value !== removedItems.value);\n        setSelected(newValues);\n      }} />\n                </Modal>}\n            <SelectTreeMenuSlot />\n        </SlotFillProvider>;\n}",
      ...SingleWithinModalUsingBodyDropdownPlacement.parameters?.docs?.source
    }
  }
};
SingleSelectTree.parameters = {
  ...SingleSelectTree.parameters,
  docs: {
    ...SingleSelectTree.parameters?.docs,
    source: {
      originalSource: "() => {\n  const [value, setValue] = React.useState('');\n  const [selected, setSelected] = React.useState<Item | undefined>();\n  const items = filterItems(listItems, value);\n  return <SelectTree id=\"single-select-tree\" label=\"Single Select Tree\" items={items} selected={selected} shouldNotRecursivelySelect shouldShowCreateButton={typedValue => !value || listItems.findIndex(item => item.label === typedValue) === -1} createValue={value}\n  // eslint-disable-next-line no-alert\n  onCreateNew={() => alert('create new called')} onInputChange={a => setValue(a || '')} onSelect={selectedItems => {\n    setSelected(selectedItems as Item);\n  }} onRemove={() => setSelected(undefined)} />;\n}",
      ...SingleSelectTree.parameters?.docs?.source
    }
  }
};
try {
    // @ts-ignore
    MultipleSelectTree.displayName = "MultipleSelectTree";
    // @ts-ignore
    MultipleSelectTree.__docgenInfo = { "description": "", "displayName": "MultipleSelectTree", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/experimental-select-tree-control/stories/select-tree-control.story.tsx#MultipleSelectTree"] = { docgenInfo: MultipleSelectTree.__docgenInfo, name: "MultipleSelectTree", path: "../../packages/js/components/src/experimental-select-tree-control/stories/select-tree-control.story.tsx#MultipleSelectTree" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    SingleWithinModalUsingBodyDropdownPlacement.displayName = "SingleWithinModalUsingBodyDropdownPlacement";
    // @ts-ignore
    SingleWithinModalUsingBodyDropdownPlacement.__docgenInfo = { "description": "", "displayName": "SingleWithinModalUsingBodyDropdownPlacement", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/experimental-select-tree-control/stories/select-tree-control.story.tsx#SingleWithinModalUsingBodyDropdownPlacement"] = { docgenInfo: SingleWithinModalUsingBodyDropdownPlacement.__docgenInfo, name: "SingleWithinModalUsingBodyDropdownPlacement", path: "../../packages/js/components/src/experimental-select-tree-control/stories/select-tree-control.story.tsx#SingleWithinModalUsingBodyDropdownPlacement" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    SingleSelectTree.displayName = "SingleSelectTree";
    // @ts-ignore
    SingleSelectTree.__docgenInfo = { "description": "", "displayName": "SingleSelectTree", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/experimental-select-tree-control/stories/select-tree-control.story.tsx#SingleSelectTree"] = { docgenInfo: SingleSelectTree.__docgenInfo, name: "SingleSelectTree", path: "../../packages/js/components/src/experimental-select-tree-control/stories/select-tree-control.story.tsx#SingleSelectTree" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ })

}]);