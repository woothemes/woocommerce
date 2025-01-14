"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[3942],{

/***/ "../../packages/js/components/src/animation-slider/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/TransitionGroup.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");


















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
      (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)(this, result);
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
 * This component creates slideable content controlled by an animate prop to direct the contents to slide left or right.
 * All other props are passed to `CSSTransition`. More info at http://reactcommunity.org/react-transition-group/css-transition
 */

var AnimationSlider = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)(AnimationSlider, _Component);
  var _super = _createSuper(AnimationSlider);
  function AnimationSlider() {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A)(this, AnimationSlider);
    _this = _super.call(this);
    _this.state = {
      animate: null
    };
    _this.container = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_19__.createRef)();
    _this.onExited = _this.onExited.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A)(_this));
    return _this;
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A)(AnimationSlider, [{
    key: "onExited",
    value: function onExited() {
      var onExited = this.props.onExited;
      if (onExited) {
        onExited(this.container.current);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        _children = _this$props.children,
        animationKey = _this$props.animationKey,
        animate = _this$props.animate;
      var containerClasses = classnames__WEBPACK_IMPORTED_MODULE_15___default()('woocommerce-slide-animation', animate && "animate-".concat(animate));
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
        className: containerClasses,
        ref: this.container,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_transition_group__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_transition_group__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, _objectSpread(_objectSpread({
            timeout: 200,
            classNames: "slide"
          }, this.props), {}, {
            onExited: this.onExited,
            children: function children(status) {
              return _children({
                status: status
              });
            }
          }), animationKey)
        })
      });
    }
  }]);
  return AnimationSlider;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_19__.Component);
AnimationSlider.propTypes = {
  /**
   * A function returning rendered content with argument status, reflecting `CSSTransition` status.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().func).isRequired,
  /**
   * A unique identifier for each slideable page.
   */
  animationKey: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().any).isRequired,
  /**
   * null, 'left', 'right', to designate which direction to slide on a change.
   */
  animate: prop_types__WEBPACK_IMPORTED_MODULE_24___default().oneOf([null, 'left', 'right']),
  /**
   * A function to be executed after a transition is complete, passing the containing ref as the argument.
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimationSlider);

/***/ }),

/***/ "../../packages/js/components/src/dropdown-button/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+html-entities@4.0.1/node_modules/@wordpress/html-entities/build-module/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");


var _excluded = ["labels", "isOpen"];
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
 * A button useful for a launcher of a dropdown component. The button is 100% width of its container and displays
 * single or multiple lines rendered as `<span/>` elements.
 *
 * @param {Object} props Props passed to component.
 * @return {Object} -
 */

var DropdownButton = function DropdownButton(props) {
  var labels = props.labels,
    isOpen = props.isOpen,
    otherProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)(props, _excluded);
  var buttonClasses = classnames__WEBPACK_IMPORTED_MODULE_12___default()('woocommerce-dropdown-button', {
    'is-open': isOpen,
    'is-multi-line': labels.length > 1
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Ay, _objectSpread(_objectSpread({
    className: buttonClasses,
    "aria-expanded": isOpen
  }, otherProps), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
      className: "woocommerce-dropdown-button__labels",
      children: labels.map(function (label, i) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
          children: (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_16__/* .decodeEntities */ .S)(label)
        }, i);
      })
    })
  }));
};
DropdownButton.propTypes = {
  /**
   * An array of elements to be rendered as the content of the button.
   */
  labels: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().array).isRequired,
  /**
   * Boolean describing if the dropdown in open or not.
   */
  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownButton);

/***/ }),

/***/ "../../packages/js/components/src/filter-picker/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export DEFAULT_FILTER */
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/dropdown/index.js");
/* harmony import */ var _wordpress_dom__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+dom@4.0.1/node_modules/@wordpress/dom/build-module/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__("../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-left.js");
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("../../packages/js/navigation/src/index.js");
/* harmony import */ var _animation_slider__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__("../../packages/js/components/src/animation-slider/index.js");
/* harmony import */ var _dropdown_button__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("../../packages/js/components/src/dropdown-button/index.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("../../packages/js/components/src/search/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
















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
      (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}










function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A)(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A)(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A)(this, result);
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




var DEFAULT_FILTER = 'all';

/**
 * Modify a url query parameter via a dropdown selection of configurable options.
 * This component manipulates the `filter` query parameter.
 */
var FilterPicker = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A)(FilterPicker, _Component);
  var _super = _createSuper(FilterPicker);
  function FilterPicker(props) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A)(this, FilterPicker);
    _this = _super.call(this, props);
    var selectedFilter = _this.getFilter();
    _this.state = {
      nav: selectedFilter.path || [],
      animate: null,
      selectedTag: null
    };
    _this.selectSubFilter = _this.selectSubFilter.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A)(_this));
    _this.getVisibleFilters = _this.getVisibleFilters.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A)(_this));
    _this.updateSelectedTag = _this.updateSelectedTag.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A)(_this));
    _this.onTagChange = _this.onTagChange.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A)(_this));
    _this.onContentMount = _this.onContentMount.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A)(_this));
    _this.goBack = _this.goBack.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A)(_this));
    if (selectedFilter.settings && selectedFilter.settings.getLabels) {
      var query = _this.props.query;
      var _selectedFilter$setti = selectedFilter.settings,
        filterParam = _selectedFilter$setti.param,
        getLabels = _selectedFilter$setti.getLabels;
      getLabels(query[filterParam], query).then(_this.updateSelectedTag);
    }
    return _this;
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A)(FilterPicker, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var prevQuery = _ref.query;
      var _this$props = this.props,
        nextQuery = _this$props.query,
        config = _this$props.config;
      if (prevQuery[config.param] !== nextQuery[[config.param]]) {
        var selectedFilter = this.getFilter();
        if (selectedFilter && selectedFilter.component === 'Search') {
          /* eslint-disable react/no-did-update-set-state */
          this.setState({
            nav: selectedFilter.path || []
          });
          /* eslint-enable react/no-did-update-set-state */
          var _selectedFilter$setti2 = selectedFilter.settings,
            filterParam = _selectedFilter$setti2.param,
            getLabels = _selectedFilter$setti2.getLabels;
          getLabels(nextQuery[filterParam], nextQuery).then(this.updateSelectedTag);
        }
      }
    }
  }, {
    key: "updateSelectedTag",
    value: function updateSelectedTag(tags) {
      this.setState({
        selectedTag: tags[0]
      });
    }
  }, {
    key: "getFilter",
    value: function getFilter(value) {
      var _this$props2 = this.props,
        config = _this$props2.config,
        query = _this$props2.query;
      var allFilters = (0,_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_24__/* .flattenFilters */ .SI)(config.filters);
      value = value || query[config.param] || config.defaultValue || DEFAULT_FILTER;
      return (0,lodash__WEBPACK_IMPORTED_MODULE_23__.find)(allFilters, {
        value: value
      }) || {};
    }
  }, {
    key: "getButtonLabel",
    value: function getButtonLabel(selectedFilter) {
      if (selectedFilter.component === 'Search') {
        var selectedTag = this.state.selectedTag;
        return [selectedTag && selectedTag.label, (0,lodash__WEBPACK_IMPORTED_MODULE_23__.get)(selectedFilter, 'settings.labels.button')];
      }
      return selectedFilter ? [selectedFilter.label] : [];
    }
  }, {
    key: "getVisibleFilters",
    value: function getVisibleFilters(filters, nav) {
      if (nav.length === 0) {
        return filters;
      }
      var value = nav[0];
      var nextFilters = (0,lodash__WEBPACK_IMPORTED_MODULE_23__.find)(filters, {
        value: value
      });
      return this.getVisibleFilters(nextFilters && nextFilters.subFilters, nav.slice(1));
    }
  }, {
    key: "selectSubFilter",
    value: function selectSubFilter(value) {
      // Add the value onto the nav path
      this.setState(function (prevState) {
        return {
          nav: [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .A)(prevState.nav), [value]),
          animate: 'left'
        };
      });
    }
  }, {
    key: "goBack",
    value: function goBack() {
      // Remove the last item from the nav path
      this.setState(function (prevState) {
        return {
          nav: prevState.nav.slice(0, -1),
          animate: 'right'
        };
      });
    }
  }, {
    key: "getAllFilterParams",
    value: function getAllFilterParams() {
      var config = this.props.config;
      var params = [];
      var getParam = function getParam(filters) {
        filters.forEach(function (filter) {
          if (filter.settings && !params.includes(filter.settings.param)) {
            params.push(filter.settings.param);
          }
          if (filter.subFilters) {
            getParam(filter.subFilters);
          }
        });
      };
      getParam(config.filters);
      return params;
    }
  }, {
    key: "update",
    value: function update(value) {
      var additionalQueries = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _this$props3 = this.props,
        path = _this$props3.path,
        query = _this$props3.query,
        config = _this$props3.config,
        onFilterSelect = _this$props3.onFilterSelect,
        advancedFilters = _this$props3.advancedFilters;
      var update = _objectSpread((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)({}, config.param, (config.defaultValue || DEFAULT_FILTER) === value ? undefined : value), additionalQueries);
      // Keep any url parameters as designated by the config
      config.staticParams.forEach(function (param) {
        update[param] = query[param];
      });

      // Remove all of this filter's params not associated with the update while
      // leaving any other params from any other filter an extension may have added.
      this.getAllFilterParams().forEach(function (param) {
        if (!update[param]) {
          // Explicitly give value of undefined so it can be removed from the query.
          update[param] = undefined;
        }
      });

      // If the main filter is being set to anything but advanced, remove any advancedFilters.
      if (config.param === 'filter' && value !== 'advanced') {
        var resetAdvancedFilters = (0,_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_24__/* .getQueryFromActiveFilters */ .Sz)([], query, advancedFilters.filters || {});
        update = _objectSpread(_objectSpread({}, update), resetAdvancedFilters);
      }
      (0,_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_24__/* .updateQueryString */ .Ze)(update, path, query);
      onFilterSelect(update);
    }
  }, {
    key: "onTagChange",
    value: function onTagChange(filter, onClose, config, tags) {
      var tag = (0,lodash__WEBPACK_IMPORTED_MODULE_23__.last)(tags);
      var value = filter.value,
        settings = filter.settings;
      var filterParam = settings.param;
      if (tag) {
        this.update(value, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)({}, filterParam, tag.key));
        onClose();
      } else {
        this.update(config.defaultValue || DEFAULT_FILTER);
      }
      this.updateSelectedTag([tag]);
    }
  }, {
    key: "renderButton",
    value: function renderButton(filter, onClose, config) {
      var _this2 = this;
      if (filter.component) {
        var _filter$settings = filter.settings,
          type = _filter$settings.type,
          labels = _filter$settings.labels,
          autocompleter = _filter$settings.autocompleter;
        var persistedFilter = this.getFilter();
        var selectedTag = persistedFilter.value === filter.value ? this.state.selectedTag : null;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_search__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A, {
          autocompleter: autocompleter,
          className: "woocommerce-filters-filter__search",
          type: type,
          placeholder: labels.placeholder,
          selected: selectedTag ? [selectedTag] : [],
          onChange: (0,lodash__WEBPACK_IMPORTED_MODULE_23__.partial)(this.onTagChange, filter, onClose, config),
          inlineTags: true,
          staticResults: true
        });
      }
      var selectFilter = function selectFilter(event) {
        onClose(event);
        _this2.update(filter.value, filter.query || {});
        _this2.setState({
          selectedTag: null
        });
      };
      var selectSubFilter = (0,lodash__WEBPACK_IMPORTED_MODULE_23__.partial)(this.selectSubFilter, filter.value);
      var selectedFilter = this.getFilter();
      var buttonIsSelected = selectedFilter.value === filter.value || selectedFilter.path && (0,lodash__WEBPACK_IMPORTED_MODULE_23__.includes)(selectedFilter.path, filter.value);
      var onClick = function onClick(event) {
        if (buttonIsSelected) {
          // Don't navigate if the button is already selected.
          onClose(event);
          return;
        }
        if (filter.subFilters) {
          selectSubFilter(event);
          return;
        }
        selectFilter(event);
      };
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Ay, {
        className: "woocommerce-filters-filter__button",
        onClick: onClick,
        children: filter.label
      });
    }
  }, {
    key: "onContentMount",
    value: function onContentMount(content) {
      var nav = this.state.nav;
      var parentFilter = nav.length ? this.getFilter(nav[nav.length - 1]) : false;
      var focusableIndex = parentFilter ? 1 : 0;
      var focusable = _wordpress_dom__WEBPACK_IMPORTED_MODULE_33__/* .focus */ .XC.tabbable.find(content)[focusableIndex];
      setTimeout(function () {
        focusable.focus();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var config = this.props.config;
      var _this$state = this.state,
        nav = _this$state.nav,
        animate = _this$state.animate;
      var visibleFilters = this.getVisibleFilters(config.filters, nav);
      var parentFilter = nav.length ? this.getFilter(nav[nav.length - 1]) : false;
      var selectedFilter = this.getFilter();
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("div", {
        className: "woocommerce-filters-filter",
        children: [config.label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("span", {
          className: "woocommerce-filters-label",
          children: [config.label, ":"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A, {
          contentClassName: "woocommerce-filters-filter__content",
          popoverProps: {
            placement: 'bottom'
          },
          expandOnMobile: true,
          headerTitle: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_21__.__)('filter report to show:', 'woocommerce'),
          renderToggle: function renderToggle(_ref2) {
            var isOpen = _ref2.isOpen,
              onToggle = _ref2.onToggle;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_dropdown_button__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A, {
              onClick: onToggle,
              isOpen: isOpen,
              labels: _this3.getButtonLabel(selectedFilter)
            });
          },
          renderContent: function renderContent(_ref3) {
            var onClose = _ref3.onClose;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_animation_slider__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .A, {
              animationKey: nav,
              animate: animate,
              onExited: _this3.onContentMount,
              children: function children() {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("ul", {
                  className: "woocommerce-filters-filter__content-list",
                  children: [parentFilter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)("li", {
                    className: "woocommerce-filters-filter__content-list-item",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Ay, {
                      className: "woocommerce-filters-filter__button",
                      onClick: _this3.goBack,
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .A, {
                        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A
                      }), parentFilter.label]
                    })
                  }), visibleFilters.map(function (filter) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)("li", {
                      className: classnames__WEBPACK_IMPORTED_MODULE_22___default()('woocommerce-filters-filter__content-list-item', {
                        'is-selected': selectedFilter.value === filter.value || selectedFilter.path && (0,lodash__WEBPACK_IMPORTED_MODULE_23__.includes)(selectedFilter.path, filter.value)
                      }),
                      children: _this3.renderButton(filter, onClose, config)
                    }, filter.value);
                  })]
                });
              }
            });
          }
        })]
      });
    }
  }]);
  return FilterPicker;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_39__.Component);
FilterPicker.propTypes = {
  /**
   * An array of filters and subFilters to construct the menu.
   */
  config: prop_types__WEBPACK_IMPORTED_MODULE_40___default().shape({
    /**
     * A label above the filter selector.
     */
    label: (prop_types__WEBPACK_IMPORTED_MODULE_40___default().string),
    /**
     * Url parameters to persist when selecting a new filter.
     */
    staticParams: (prop_types__WEBPACK_IMPORTED_MODULE_40___default().array).isRequired,
    /**
     * The url parameter this filter will modify.
     */
    param: (prop_types__WEBPACK_IMPORTED_MODULE_40___default().string).isRequired,
    /**
     * The default parameter value to use instead of 'all'.
     */
    defaultValue: (prop_types__WEBPACK_IMPORTED_MODULE_40___default().string),
    /**
     * Determine if the filter should be shown. Supply a function with the query object as an argument returning a boolean.
     */
    showFilters: (prop_types__WEBPACK_IMPORTED_MODULE_40___default().func).isRequired,
    /**
     * An array of filter a user can select.
     */
    filters: prop_types__WEBPACK_IMPORTED_MODULE_40___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_40___default().shape({
      /**
       * The chart display mode to use for charts displayed when this filter is active.
       */
      chartMode: prop_types__WEBPACK_IMPORTED_MODULE_40___default().oneOf(['item-comparison', 'time-comparison']),
      /**
       * A custom component used instead of a button, might have special handling for filtering. TBD, not yet implemented.
       */
      component: (prop_types__WEBPACK_IMPORTED_MODULE_40___default().string),
      /**
       * The label for this filter. Optional only for custom component filters.
       */
      label: (prop_types__WEBPACK_IMPORTED_MODULE_40___default().string),
      /**
       * An array representing the "path" to this filter, if nested.
       */
      path: (prop_types__WEBPACK_IMPORTED_MODULE_40___default().string),
      /**
       * An array of more filter objects that act as "children" to this item.
       * This set of filters is shown if the parent filter is clicked.
       */
      subFilters: (prop_types__WEBPACK_IMPORTED_MODULE_40___default().array),
      /**
       * The value for this filter, used to set the `filter` query param when clicked, if there are no `subFilters`.
       */
      value: (prop_types__WEBPACK_IMPORTED_MODULE_40___default().string).isRequired
    }))
  }).isRequired,
  /**
   * The `path` parameter supplied by React-Router.
   */
  path: (prop_types__WEBPACK_IMPORTED_MODULE_40___default().string).isRequired,
  /**
   * The query string represented in object form.
   */
  query: (prop_types__WEBPACK_IMPORTED_MODULE_40___default().object),
  /**
   * Function to be called after filter selection.
   */
  onFilterSelect: (prop_types__WEBPACK_IMPORTED_MODULE_40___default().func),
  /**
   * Advanced Filters configuration object.
   */
  advancedFilters: (prop_types__WEBPACK_IMPORTED_MODULE_40___default().object)
};
FilterPicker.defaultProps = {
  query: {},
  onFilterSelect: function onFilterSelect() {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterPicker);

/***/ }),

/***/ "../../packages/js/components/src/filter-picker/stories/filter-picker.story.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Basic: () => (/* binding */ Basic),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../packages/js/components/src/filter-picker/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");






/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


var query = {
  meal: 'breakfast'
};
var config = {
  label: 'Meal',
  staticParams: [],
  param: 'meal',
  showFilters: function showFilters() {
    return true;
  },
  filters: [{
    label: 'Breakfast',
    value: 'breakfast'
  }, {
    label: 'Lunch',
    value: 'lunch',
    subFilters: [{
      label: 'Meat',
      value: 'meat',
      path: ['lunch']
    }, {
      label: 'Vegan',
      value: 'vegan',
      path: ['lunch']
    }, {
      label: 'Pescatarian',
      value: 'fish',
      path: ['lunch'],
      subFilters: [{
        label: 'Snapper',
        value: 'snapper',
        path: ['lunch', 'fish']
      }, {
        label: 'Cod',
        value: 'cod',
        path: ['lunch', 'fish']
      },
      // Specify a custom component to render (Work in Progress)
      {
        label: 'Other',
        value: 'other_fish',
        path: ['lunch', 'fish'],
        component: 'OtherFish'
      }]
    }]
  }, {
    label: 'Dinner',
    value: 'dinner'
  }]
};
var Basic = function Basic(_ref) {
  var _ref$path = _ref.path,
    path = _ref$path === void 0 ? new URL(document.location).searchParams.get('path') : _ref$path;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    config: config,
    path: path,
    query: query
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'Components/FilterPicker',
  component: ___WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A
});
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "({\n  path = new URL(document.location).searchParams.get('path')\n}) => {\n  return <FilterPicker config={config} path={path} query={query} />;\n}",
      ...Basic.parameters?.docs?.source
    }
  }
};

/***/ })

}]);