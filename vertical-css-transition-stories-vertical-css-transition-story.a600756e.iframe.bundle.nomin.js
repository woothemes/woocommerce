"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[7158],{

/***/ "../../packages/js/experimental/src/vertical-css-transition/vertical-css-transition.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ VerticalCSSTransition)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");

























var _excluded = ["children", "defaultStyle"];
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
      (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}


function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
/**
 * External dependencies
 */



function getContainerHeight(container) {
  var containerHeight = 0;
  var _iterator = _createForOfIteratorHelper(container.children),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var child = _step.value;
      containerHeight += child.clientHeight;
      var style = window.getComputedStyle(child);
      containerHeight += parseInt(style.marginTop, 10) || 0;
      containerHeight += parseInt(style.marginBottom, 10) || 0;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return containerHeight;
}

/**
 * VerticalCSSTransition is a wrapper for CSSTransition, automatically adding a vertical height transition.
 * The maxHeight is calculated through JS, something CSS does not support.
 */
var VerticalCSSTransition = function VerticalCSSTransition(_ref) {
  var _children = _ref.children,
    defaultStyle = _ref.defaultStyle,
    props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A)(_ref, _excluded);
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_27__.useState)(0),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A)(_useState, 2),
    containerHeight = _useState2[0],
    setContainerHeight = _useState2[1];
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_27__.useState)(props["in"] || false),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A)(_useState3, 2),
    transitionIn = _useState4[0],
    setTransitionIn = _useState4[1];
  var cssTransitionRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_27__.useRef)(null);
  var collapseContainerRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_27__.useCallback)(function (containerElement) {
    if (containerElement) {
      setContainerHeight(getContainerHeight(containerElement));
    }
  }, [_children]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_27__.useEffect)(function () {
    setTransitionIn(props["in"] || false);
  }, [props["in"]]);
  var getTimeouts = function getTimeouts() {
    var timeout = props.timeout;
    var exit, enter, appear;
    if (typeof timeout === 'number') {
      exit = enter = appear = timeout;
    }
    if (timeout !== undefined && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter;
      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }
    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };
  var transitionStyles = {
    entered: {
      maxHeight: containerHeight
    },
    entering: {
      maxHeight: containerHeight
    },
    exiting: {
      maxHeight: 0
    },
    exited: {
      maxHeight: 0
    }
  };
  var getTransitionStyle = function getTransitionStyle(state) {
    var timeouts = getTimeouts();
    var appearing = cssTransitionRef.current && cssTransitionRef.current.context && cssTransitionRef.current.context.isMounting;
    var duration;
    if (state.startsWith('enter')) {
      duration = timeouts[appearing ? 'enter' : 'appear'];
    } else {
      duration = timeouts.exit;
    }
    var styles = _objectSpread(_objectSpread({
      transitionProperty: 'max-height',
      transitionDuration: duration === undefined ? '500ms' : duration + 'ms',
      overflow: 'hidden'
    }, defaultStyle || {}), state in transitionStyles ? transitionStyles[state] : {});
    // only include transition styles when entering or exiting.
    if (state !== 'entering' && state !== 'exiting') {
      delete styles.transitionDuration;
      delete styles.transition;
      delete styles.transitionProperty;
    }
    // Remove maxHeight when entered, so we do not need to worry about nested items changing height while expanded.
    if (state === 'entered' && props["in"]) {
      delete styles.maxHeight;
    }
    return styles;
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(react_transition_group__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A, _objectSpread(_objectSpread({}, props), {}, {
    "in": transitionIn,
    ref: cssTransitionRef,
    children: function children(state) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)("div", {
        className: "vertical-css-transition-container",
        style: getTransitionStyle(state),
        ref: collapseContainerRef,
        children: _children
      });
    }
  }));
};
try {
    // @ts-ignore
    VerticalCSSTransition.displayName = "VerticalCSSTransition";
    // @ts-ignore
    VerticalCSSTransition.__docgenInfo = { "description": "VerticalCSSTransition is a wrapper for CSSTransition, automatically adding a vertical height transition.\nThe maxHeight is calculated through JS, something CSS does not support.", "displayName": "VerticalCSSTransition", "props": { "classNames": { "defaultValue": null, "description": "The animation `classNames` applied to the component as it enters or exits.\nA single name can be provided and it will be suffixed for each stage: e.g.\n\n`classNames=\"fade\"` applies `fade-enter`, `fade-enter-active`,\n`fade-exit`, `fade-exit-active`, `fade-appear`, and `fade-appear-active`.\n\nEach individual classNames can also be specified independently like:\n\n```js\nclassNames={{\n  appear: 'my-appear',\n  appearActive: 'my-appear-active',\n  appearDone: 'my-appear-done',\n  enter: 'my-enter',\n  enterActive: 'my-enter-active',\n  enterDone: 'my-enter-done',\n  exit: 'my-exit',\n  exitActive: 'my-exit-active',\n  exitDone: 'my-exit-done'\n}}\n```", "name": "classNames", "required": false, "type": { "name": "string | CSSTransitionClassNames" } }, "defaultStyle": { "defaultValue": null, "description": "", "name": "defaultStyle", "required": false, "type": { "name": "CSSProperties" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/experimental/src/vertical-css-transition/vertical-css-transition.tsx#VerticalCSSTransition"] = { docgenInfo: VerticalCSSTransition.__docgenInfo, name: "VerticalCSSTransition", path: "../../packages/js/experimental/src/vertical-css-transition/vertical-css-transition.tsx#VerticalCSSTransition" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../packages/js/experimental/src/vertical-css-transition/stories/vertical-css-transition.story.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Primary: () => (/* binding */ Primary),
  "default": () => (/* binding */ vertical_css_transition_story)
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/@storybook+addon-console@1.2.3_@storybook+addon-actions@6.5.17-alpha.0_react-dom@18.3.1_react@18.3.1__react@18.3.1_/node_modules/@storybook/addon-console/dist/index.js
var dist = __webpack_require__("../../node_modules/.pnpm/@storybook+addon-console@1.2.3_@storybook+addon-actions@6.5.17-alpha.0_react-dom@18.3.1_react@18.3.1__react@18.3.1_/node_modules/@storybook/addon-console/dist/index.js");
// EXTERNAL MODULE: ../../packages/js/experimental/src/vertical-css-transition/vertical-css-transition.tsx
var vertical_css_transition = __webpack_require__("../../packages/js/experimental/src/vertical-css-transition/vertical-css-transition.tsx");
;// CONCATENATED MODULE: ../../packages/js/experimental/src/vertical-css-transition/stories/style.scss
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../packages/js/experimental/src/vertical-css-transition/stories/vertical-css-transition.story.tsx













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



/* harmony default export */ const vertical_css_transition_story = ({
  title: 'Experimental/VerticalCSSTransition',
  component: vertical_css_transition/* VerticalCSSTransition */.H,
  decorators: [function (storyFn, context) {
    return (0,dist/* withConsole */.QW)()(storyFn)(context);
  }]
});
var Parent = function Parent(args) {
  var _useState = (0,react.useState)(true),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    expanded = _useState2[0],
    setExpanded = _useState2[1];
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("button", {
      onClick: function onClick() {
        return setExpanded(!expanded);
      },
      children: expanded ? 'collapse' : 'expand'
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(vertical_css_transition/* VerticalCSSTransition */.H, _objectSpread(_objectSpread({}, args), {}, {
      "in": expanded,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          children: "some content"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          children: ["some more content ", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), " line 2 ", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), " line 3"]
        })]
      })
    }))]
  });
};
var Template = function Template(args) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Parent, _objectSpread({}, args));
};
var Primary = Template.bind({
  onClick: function onClick() {}
});
Primary.args = {
  appear: true,
  timeout: 500,
  classNames: 'collapsible-content',
  defaultStyle: {
    transitionProperty: 'max-height, opacity'
  }
};
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...Primary.parameters?.docs,
    source: {
      originalSource: "Template.bind({\n  onClick: () => {}\n})",
      ...Primary.parameters?.docs?.source
    }
  }
};

/***/ })

}]);