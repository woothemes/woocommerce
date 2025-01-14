"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[2780],{

/***/ "../../packages/js/components/src/link/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   N: () => (/* binding */ Link)
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
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../packages/js/navigation/src/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");












var _excluded = ["href", "children", "type"];
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




// eslint-disable-next-line @typescript-eslint/no-explicit-any
// we don't want to restrict this function at all

/**
 * Use `Link` to create a link to another resource. It accepts a type to automatically
 * create wp-admin links, wc-admin links, and external links.
 */
var Link = function Link(_ref) {
  var href = _ref.href,
    children = _ref.children,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'wc-admin' : _ref$type,
    props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A)(_ref, _excluded);
  // ( { children, href, type, ...props } ) => {
  // @todo Investigate further if we can use <Link /> directly.
  // With React Router 5+, <RouterLink /> cannot be used outside of the main <Router /> elements,
  // which seems to include components imported from @woocommerce/components. For now, we can use the history object directly.
  var wcAdminLinkHandler = function wcAdminLinkHandler(onClick, event) {
    // If cmd, ctrl, alt, or shift are used, use default behavior to allow opening in a new tab.
    if (event !== null && event !== void 0 && event.ctrlKey || event !== null && event !== void 0 && event.metaKey || event !== null && event !== void 0 && event.altKey || event !== null && event !== void 0 && event.shiftKey) {
      return;
    }
    event === null || event === void 0 || event.preventDefault();

    // If there is an onclick event, execute it.
    var onClickResult = onClick && event ? onClick(event) : true;

    // Mimic browser behavior and only continue if onClickResult is not explicitly false.
    if (onClickResult === false) {
      return;
    }
    if ((event === null || event === void 0 ? void 0 : event.target) instanceof Element) {
      var _event$target$closest;
      var closestEventTarget = (_event$target$closest = event.target.closest('a')) === null || _event$target$closest === void 0 ? void 0 : _event$target$closest.getAttribute('href');
      if (closestEventTarget) {
        (0,_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_12__/* .getHistory */ .JK)().push(closestEventTarget);
      } else {
        // eslint-disable-next-line no-console
        console.error('@woocommerce/components/link is trying to push an undefined state into navigation stack'); // This shouldn't happen as we wrap with <a> below
      }
    }
  };
  var passProps = _objectSpread(_objectSpread({}, props), {}, {
    'data-link-type': type
  });
  if (type === 'wc-admin') {
    passProps.onClick = (0,lodash__WEBPACK_IMPORTED_MODULE_11__.partial)(wcAdminLinkHandler, passProps.onClick);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("a", _objectSpread(_objectSpread({
    href: href
  }, passProps), {}, {
    children: children
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);
try {
    // @ts-ignore
    Link.displayName = "Link";
    // @ts-ignore
    Link.__docgenInfo = { "description": "Use `Link` to create a link to another resource. It accepts a type to automatically\ncreate wp-admin links, wc-admin links, and external links.", "displayName": "Link", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/link/index.tsx#Link"] = { docgenInfo: Link.__docgenInfo, name: "Link", path: "../../packages/js/components/src/link/index.tsx#Link" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    link.displayName = "link";
    // @ts-ignore
    link.__docgenInfo = { "description": "Use `Link` to create a link to another resource. It accepts a type to automatically\ncreate wp-admin links, wc-admin links, and external links.", "displayName": "link", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/link/index.tsx#link"] = { docgenInfo: link.__docgenInfo, name: "link", path: "../../packages/js/components/src/link/index.tsx#link" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../packages/js/components/src/abbreviated-card/stories/abbreviated-card.story.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Basic: () => (/* binding */ Basic),
  "default": () => (/* binding */ abbreviated_card_story)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/page.js
var page = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/page.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/card/card/component.js + 6 modules
var component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/card/card/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/card/card-body/component.js + 4 modules
var card_body_component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/card/card-body/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/icon/index.js + 1 modules
var build_module_icon = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/icon/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js
var prop_types = __webpack_require__("../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ../../packages/js/components/src/link/index.tsx
var src_link = __webpack_require__("../../packages/js/components/src/link/index.tsx");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../packages/js/components/src/abbreviated-card/index.js
/**
 * External dependencies
 */





/**
 * Internal dependencies
 */


var AbbreviatedCard = function AbbreviatedCard(_ref) {
  var children = _ref.children,
    className = _ref.className,
    href = _ref.href,
    icon = _ref.icon,
    onClick = _ref.onClick,
    type = _ref.type;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(component/* default */.A, {
    className: classnames_default()('woocommerce-abbreviated-card', className),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(card_body_component/* default */.A, {
      size: null,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(src_link/* default */.A, {
        href: href,
        onClick: onClick,
        type: type,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "woocommerce-abbreviated-card__icon",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_icon/* default */.A, {
            icon: icon
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "woocommerce-abbreviated-card__content",
          children: children
        })]
      })
    })
  });
};
AbbreviatedCard.propTypes = {
  /**
   * The Abbreviated Card content.
   */
  children: (prop_types_default()).node.isRequired,
  /**
   * Additional CSS classes.
   */
  className: (prop_types_default()).string,
  /**
   * The resource to link to.
   */
  href: (prop_types_default()).string.isRequired,
  /**
   * Icon for the Abbreviated Card.
   */
  icon: (prop_types_default()).element.isRequired,
  /**
   * Called when the card is clicked.
   */
  onClick: (prop_types_default()).func,
  /**
   * Type of link.
   */
  type: prop_types_default().oneOf(['wp-admin', 'wc-admin', 'external'])
};
/* harmony default export */ const abbreviated_card = (AbbreviatedCard);
;// CONCATENATED MODULE: ../../packages/js/components/src/abbreviated-card/stories/abbreviated-card.story.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


var Basic = function Basic() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(abbreviated_card, {
    icon: page/* default */.A,
    href: "#",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
      children: "Title"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
      children: "Abbreviated card content"
    })]
  });
};
/* harmony default export */ const abbreviated_card_story = ({
  title: 'Components/AbbreviatedCard',
  component: abbreviated_card
});
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "() => <AbbreviatedCard icon={page} href=\"#\">\n        <h3>Title</h3>\n        <p>Abbreviated card content</p>\n    </AbbreviatedCard>",
      ...Basic.parameters?.docs?.source
    }
  }
};

/***/ })

}]);