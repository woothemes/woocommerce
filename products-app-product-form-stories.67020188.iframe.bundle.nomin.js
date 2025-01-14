"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[446],{

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

/***/ "../../packages/js/product-editor/src/products-app/product-form.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Default: () => (/* binding */ Default),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ product_form_stories)
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.bind.js
var es_function_bind = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.bind.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/v-stack/component.js + 1 modules
var component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/v-stack/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.4.1_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/normalize-fields.js + 19 modules
var normalize_fields = __webpack_require__("../../node_modules/.pnpm/@wordpress+dataviews@4.4.1_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/normalize-fields.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.4.1_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/dataforms-layouts/regular/index.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function FormRegular({
  data,
  fields,
  form,
  onChange
}) {
  const visibleFields = (0,react.useMemo)(() => {
    var _form$fields;
    return (0,normalize_fields/* normalizeFields */.t)(((_form$fields = form.fields) !== null && _form$fields !== void 0 ? _form$fields : []).map(fieldId => fields.find(({
      id
    }) => id === fieldId)).filter(field => !!field));
  }, [fields, form.fields]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(component/* default */.A, {
    spacing: 4,
    children: visibleFields.map(field => {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(field.Edit, {
        data: data,
        field: field,
        onChange: onChange
      }, field.id);
    })
  });
}
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/h-stack/component.js
var h_stack_component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/h-stack/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/heading/component.js + 1 modules
var heading_component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/heading/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/spacer/component.js + 1 modules
var spacer_component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/spacer/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/button/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/dropdown/index.js + 7 modules
var dropdown = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/dropdown/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.10.0/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.10.0/node_modules/@wordpress/i18n/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/close-small.js
var close_small = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/close-small.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.4.1_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/dataforms-layouts/panel/index.js
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */




function DropdownHeader({
  title,
  onClose
}) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(component/* default */.A, {
    className: "dataforms-layouts-panel__dropdown-header",
    spacing: 4,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(h_stack_component/* default */.A, {
      alignment: "center",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(heading_component/* default */.A, {
        level: 2,
        size: 13,
        children: title
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(spacer_component/* default */.A, {}), onClose && /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay
      // TODO: Switch to `true` (40px size) if possible
      , {
        __next40pxDefaultSize: false,
        className: "dataforms-layouts-panel__dropdown-header-action",
        label: (0,build_module.__)('Close'),
        icon: close_small/* default */.A,
        onClick: onClose
      })]
    })
  });
}
function FormField({
  data,
  field,
  onChange
}) {
  // Use internal state instead of a ref to make sure that the component
  // re-renders when the popover's anchor updates.
  const [popoverAnchor, setPopoverAnchor] = (0,react.useState)(null);
  // Memoize popoverProps to avoid returning a new object every time.
  const popoverProps = (0,react.useMemo)(() => ({
    // Anchor the popover to the middle of the entire row so that it doesn't
    // move around when the label changes.
    anchor: popoverAnchor,
    placement: 'left-start',
    offset: 36,
    shift: true
  }), [popoverAnchor]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(h_stack_component/* default */.A, {
    ref: setPopoverAnchor,
    className: "dataforms-layouts-panel__field",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "dataforms-layouts-panel__field-label",
      children: field.label
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(dropdown/* default */.A, {
        contentClassName: "dataforms-layouts-panel__field-dropdown",
        popoverProps: popoverProps,
        focusOnMount: true,
        toggleProps: {
          size: 'compact',
          variant: 'tertiary',
          tooltipPosition: 'middle left'
        },
        renderToggle: ({
          isOpen,
          onToggle
        }) => /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
          className: "dataforms-layouts-panel__field-control",
          size: "compact",
          variant: "tertiary",
          "aria-expanded": isOpen,
          "aria-label": (0,build_module/* sprintf */.nv)(
          // translators: %s: Field name.
          (0,build_module.__)('Edit %s'), field.label),
          onClick: onToggle,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(field.render, {
            item: data
          })
        }),
        renderContent: ({
          onClose
        }) => /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(DropdownHeader, {
            title: field.label,
            onClose: onClose
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(field.Edit, {
            data: data,
            field: field,
            onChange: onChange,
            hideLabelFromVision: true
          }, field.id)]
        })
      })
    })]
  });
}
function FormPanel({
  data,
  fields,
  form,
  onChange
}) {
  const visibleFields = (0,react.useMemo)(() => {
    var _form$fields;
    return (0,normalize_fields/* normalizeFields */.t)(((_form$fields = form.fields) !== null && _form$fields !== void 0 ? _form$fields : []).map(fieldId => fields.find(({
      id
    }) => id === fieldId)).filter(field => !!field));
  }, [fields, form.fields]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(component/* default */.A, {
    spacing: 2,
    children: visibleFields.map(field => {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(FormField, {
        data: data,
        field: field,
        onChange: onChange
      }, field.id);
    })
  });
}
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.4.1_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/dataforms-layouts/index.js
/**
 * Internal dependencies
 */


const FORM_LAYOUTS = [{
  type: 'regular',
  component: FormRegular
}, {
  type: 'panel',
  component: FormPanel
}];
function getFormLayout(type) {
  return FORM_LAYOUTS.find(layout => layout.type === type);
}
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.4.1_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/components/dataform/index.js
/**
 * Internal dependencies
 */



function DataForm({
  form,
  ...props
}) {
  var _form$type;
  const layout = getFormLayout((_form$type = form.type) !== null && _form$type !== void 0 ? _form$type : 'regular');
  if (!layout) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(layout.component, {
    form: form,
    ...props
  });
}
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../../packages/js/product-editor/src/products-app/utilites/product-data-view-data.tsx
var product_data_view_data = __webpack_require__("../../packages/js/product-editor/src/products-app/utilites/product-data-view-data.tsx");
;// CONCATENATED MODULE: ../../packages/js/product-editor/src/products-app/product-form.stories.tsx













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


// ProductForm component is just a wrapper around DataViews component. Currently, it is needed to experiment with the DataViews component in isolation.
// We expect that this component will be removed in the future, instead it will be used the component used in Products App.
var ProductForm = function ProductForm(_ref) {
  var fields = _ref.fields,
    form = _ref.form,
    productData = _ref.productData;
  var _useState = (0,react.useState)(productData),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    product = _useState2[0],
    setProduct = _useState2[1];
  return /*#__PURE__*/(0,jsx_runtime.jsx)(DataForm, {
    data: product,
    fields: fields,
    form: form,
    onChange: function onChange(newProduct) {
      return setProduct(function (prev) {
        return _objectSpread(_objectSpread({}, prev), newProduct);
      });
    }
  });
};
/* harmony default export */ const product_form_stories = ({
  title: 'Product Editor/Product App/Product Form',
  component: ProductForm
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - improve typing.
var Template = function Template(args) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ProductForm, _objectSpread({}, args));
};
var Default = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - Improve typing.
Default.args = {
  productData: product_data_view_data/* PRODUCTS_DATA */.O$[0],
  fields: product_data_view_data/* PRODUCT_FIELDS */.QH,
  form: {
    type: 'regular',
    fields: product_data_view_data/* PRODUCT_FIELDS_KEYS */.jz
  }
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "(args: unknown) => <ProductForm {...args} />",
      ...Default.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Default"];
try {
    // @ts-ignore
    Default.displayName = "Default";
    // @ts-ignore
    Default.__docgenInfo = { "description": "", "displayName": "Default", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/product-editor/src/products-app/product-form.stories.tsx#Default"] = { docgenInfo: Default.__docgenInfo, name: "Default", path: "../../packages/js/product-editor/src/products-app/product-form.stories.tsx#Default" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../node_modules/.pnpm/memize@2.1.0/node_modules/memize/dist/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ memize)
/* harmony export */ });
/**
 * Memize options object.
 *
 * @typedef MemizeOptions
 *
 * @property {number} [maxSize] Maximum size of the cache.
 */

/**
 * Internal cache entry.
 *
 * @typedef MemizeCacheNode
 *
 * @property {?MemizeCacheNode|undefined} [prev] Previous node.
 * @property {?MemizeCacheNode|undefined} [next] Next node.
 * @property {Array<*>}                   args   Function arguments for cache
 *                                               entry.
 * @property {*}                          val    Function result.
 */

/**
 * Properties of the enhanced function for controlling cache.
 *
 * @typedef MemizeMemoizedFunction
 *
 * @property {()=>void} clear Clear the cache.
 */

/**
 * Accepts a function to be memoized, and returns a new memoized function, with
 * optional options.
 *
 * @template {(...args: any[]) => any} F
 *
 * @param {F}             fn        Function to memoize.
 * @param {MemizeOptions} [options] Options object.
 *
 * @return {((...args: Parameters<F>) => ReturnType<F>) & MemizeMemoizedFunction} Memoized function.
 */
function memize(fn, options) {
	var size = 0;

	/** @type {?MemizeCacheNode|undefined} */
	var head;

	/** @type {?MemizeCacheNode|undefined} */
	var tail;

	options = options || {};

	function memoized(/* ...args */) {
		var node = head,
			len = arguments.length,
			args,
			i;

		searchCache: while (node) {
			// Perform a shallow equality test to confirm that whether the node
			// under test is a candidate for the arguments passed. Two arrays
			// are shallowly equal if their length matches and each entry is
			// strictly equal between the two sets. Avoid abstracting to a
			// function which could incur an arguments leaking deoptimization.

			// Check whether node arguments match arguments length
			if (node.args.length !== arguments.length) {
				node = node.next;
				continue;
			}

			// Check whether node arguments match arguments values
			for (i = 0; i < len; i++) {
				if (node.args[i] !== arguments[i]) {
					node = node.next;
					continue searchCache;
				}
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if (node !== head) {
				// As tail, shift to previous. Must only shift if not also
				// head, since if both head and tail, there is no previous.
				if (node === tail) {
					tail = node.prev;
				}

				// Adjust siblings to point to each other. If node was tail,
				// this also handles new tail's empty `next` assignment.
				/** @type {MemizeCacheNode} */ (node.prev).next = node.next;
				if (node.next) {
					node.next.prev = node.prev;
				}

				node.next = head;
				node.prev = null;
				/** @type {MemizeCacheNode} */ (head).prev = node;
				head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		// Create a copy of arguments (avoid leaking deoptimization)
		args = new Array(len);
		for (i = 0; i < len; i++) {
			args[i] = arguments[i];
		}

		node = {
			args: args,

			// Generate the result from original function
			val: fn.apply(null, args),
		};

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if (head) {
			head.prev = node;
			node.next = head;
		} else {
			// If no head, follows that there's no tail (at initial or reset)
			tail = node;
		}

		// Trim tail if we're reached max size and are pending cache insertion
		if (size === /** @type {MemizeOptions} */ (options).maxSize) {
			tail = /** @type {MemizeCacheNode} */ (tail).prev;
			/** @type {MemizeCacheNode} */ (tail).next = null;
		} else {
			size++;
		}

		head = node;

		return node.val;
	}

	memoized.clear = function () {
		head = null;
		tail = null;
		size = 0;
	};

	// Ignore reason: There's not a clear solution to create an intersection of
	// the function with additional properties, where the goal is to retain the
	// function signature of the incoming argument and add control properties
	// on the return value.

	// @ts-ignore
	return memoized;
}




/***/ })

}]);