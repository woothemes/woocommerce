(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[1336],{

/***/ "../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ _objectWithoutProperties)
});

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

/***/ }),

/***/ "../../packages/js/components/src/flag/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var emoji_flags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/emoji-flags@1.3.0/node_modules/emoji-flags/index.js");
/* harmony import */ var emoji_flags__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emoji_flags__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * External dependencies
 */






/**
 * Use the `Flag` component to display a country's flag using the operating system's emojis.
 *
 * @param {Object}  props
 * @param {string}  props.code
 * @param {Object}  props.order
 * @param {string}  props.className
 * @param {string}  props.size
 * @param {boolean} props.hideFromScreenReader
 * @return {Object} - React component.
 */

var Flag = function Flag(_ref) {
  var code = _ref.code,
    order = _ref.order,
    className = _ref.className,
    size = _ref.size,
    hideFromScreenReader = _ref.hideFromScreenReader;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_0___default()('woocommerce-flag', className);
  var _code = code || 'unknown';
  if (order && order.shipping && order.shipping.country) {
    _code = order.shipping.country;
  } else if (order && order.billing && order.billing.country) {
    _code = order.billing.country;
  }
  var inlineStyles = {
    fontSize: size
  };
  var emoji = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(emoji_flags__WEBPACK_IMPORTED_MODULE_1___default().countryCode(_code), 'emoji');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: classes,
    style: inlineStyles,
    "aria-hidden": hideFromScreenReader,
    children: [emoji && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      children: emoji
    }), !emoji && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      className: "woocommerce-flag__fallback",
      children: "Invalid country flag"
    })]
  });
};
Flag.propTypes = {
  /**
   * Two letter, three letter or three digit country code.
   */
  code: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  /**
   * An order can be passed instead of `code` and the code will automatically be pulled from the billing or shipping data.
   */
  order: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  /**
   * Additional CSS classes.
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  /**
   * Supply a font size to be applied to the emoji flag.
   */
  size: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Flag);

/***/ }),

/***/ "../../packages/js/components/src/section/context.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ Level)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * External dependencies
 */


/**
 * Context container for heading level. We start at 2 because the `h1` is defined in <Header />
 *
 * See https://medium.com/@Heydon/managing-heading-levels-in-design-systems-18be9a746fa3
 */
var Level = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)(2);

try {
    // @ts-ignore
    Context.displayName = "Context";
    // @ts-ignore
    Context.__docgenInfo = { "description": "Context lets components pass information deep down without explicitly\npassing props.\n\nCreated from {@link createContext}", "displayName": "Context", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/section/context.tsx#Context"] = { docgenInfo: Context.__docgenInfo, name: "Context", path: "../../packages/js/components/src/section/context.tsx#Context" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../packages/js/components/src/section/header.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ H)
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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../../packages/js/components/src/section/context.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");











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


/**
 * Internal dependencies
 */


/**
 * These components are used to frame out the page content for accessible heading hierarchy. Instead of defining fixed heading levels
 * (`h2`, `h3`, …) you can use `<H />` to create "section headings", which look to the parent `<Section />`s for the appropriate
 * heading level.
 *
 * @type {HTMLElement}
 */

function H(props) {
  var level = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_12__.useContext)(_context__WEBPACK_IMPORTED_MODULE_13__/* .Level */ .$);
  var Heading = 'h' + Math.min(level, 6);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Heading, _objectSpread({}, props));
}
try {
    // @ts-ignore
    H.displayName = "H";
    // @ts-ignore
    H.__docgenInfo = { "description": "These components are used to frame out the page content for accessible heading hierarchy. Instead of defining fixed heading levels\n(`h2`, `h3`, \u2026) you can use `<H />` to create \"section headings\", which look to the parent `<Section />`s for the appropriate\nheading level.", "displayName": "H", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/section/header.tsx#H"] = { docgenInfo: H.__docgenInfo, name: "H", path: "../../packages/js/components/src/section/header.tsx#H" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../packages/js/components/src/section/section.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ Section)
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
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../../packages/js/components/src/section/context.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");












var _excluded = ["component", "children"];
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

/**
 * Internal dependencies
 */


/**
 * The section wrapper, used to indicate a sub-section (and change the header level context).
 */
var Section = function Section(_ref) {
  var component = _ref.component,
    _children = _ref.children,
    props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(_ref, _excluded);
  var Component = component || 'div';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_context__WEBPACK_IMPORTED_MODULE_13__/* .Level */ .$.Consumer, {
    children: function children(level) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_context__WEBPACK_IMPORTED_MODULE_13__/* .Level */ .$.Provider, {
        value: level + 1,
        children: component === false ? _children : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Component, _objectSpread(_objectSpread({}, props), {}, {
          children: _children
        }))
      });
    }
  });
};
try {
    // @ts-ignore
    Section.displayName = "Section";
    // @ts-ignore
    Section.__docgenInfo = { "description": "The section wrapper, used to indicate a sub-section (and change the header level context).", "displayName": "Section", "props": { "component": { "defaultValue": null, "description": "The wrapper component for this section. Optional, defaults to `div`. If passed false, no wrapper is used. Additional props passed to Section are passed on to the component.", "name": "component", "required": false, "type": { "name": "string | false | ComponentType<{ className?: string; }>" } }, "className": { "defaultValue": null, "description": "Optional classname", "name": "className", "required": false, "type": { "name": "string" } }, "children": { "defaultValue": null, "description": "The children inside this section, rendered in the `component`. This increases the context level for the next heading used.", "name": "children", "required": true, "type": { "name": "ReactNode" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/section/section.tsx#Section"] = { docgenInfo: Section.__docgenInfo, name: "Section", path: "../../packages/js/components/src/section/section.tsx#Section" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-for-each.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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

"use strict";

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

"use strict";

var fails = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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

"use strict";

var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var forEach = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach !== forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-properties.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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

"use strict";

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

"use strict";

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

"use strict";

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

"use strict";

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

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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

/***/ "../../packages/js/components/src/flag/stories/flag.story.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Examples: () => (/* binding */ Examples),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../packages/js/components/src/section/header.tsx");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../packages/js/components/src/section/section.tsx");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../packages/js/components/src/flag/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * External dependencies
 */


var Examples = function Examples() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_1__.H, {
      children: "Default (inherits parent font size)"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_2__/* .Section */ .w, {
      component: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        code: "VU"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_1__.H, {
      children: "Large"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_2__/* .Section */ .w, {
      component: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        code: "VU",
        size: 48
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_1__.H, {
      children: "Invalid Country Code"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_2__/* .Section */ .w, {
      component: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        code: "invalid country code"
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'Components/Flag',
  component: _woocommerce_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A
});
Examples.parameters = {
  ...Examples.parameters,
  docs: {
    ...Examples.parameters?.docs,
    source: {
      originalSource: "() => <div>\n        <H>Default (inherits parent font size)</H>\n        <Section component={false}>\n            <Flag code=\"VU\" />\n        </Section>\n        <H>Large</H>\n        <Section component={false}>\n            <Flag code=\"VU\" size={48} />\n        </Section>\n        <H>Invalid Country Code</H>\n        <Section component={false}>\n            <Flag code=\"invalid country code\" />\n        </Section>\n    </div>",
      ...Examples.parameters?.docs?.source
    }
  }
};

/***/ })

}]);