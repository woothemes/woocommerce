"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[9416],{

/***/ "../../packages/js/components/src/date-range-filter-picker/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ date_range_filter_picker)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.bind.js
var es_function_bind = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.bind.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/dropdown/index.js
var dropdown = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/dropdown/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js
var prop_types = __webpack_require__("../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+viewport@6.0.2_react@18.3.1/node_modules/@wordpress/viewport/build-module/index.js + 7 modules
var viewport_build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+viewport@6.0.2_react@18.3.1/node_modules/@wordpress/viewport/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.name.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/tab-panel/index.js
var tab_panel = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/tab-panel/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/moment@2.29.4/node_modules/moment/moment.js
var moment = __webpack_require__("../../node_modules/.pnpm/moment@2.29.4/node_modules/moment/moment.js");
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ../../packages/js/date/src/index.ts
var src = __webpack_require__("../../packages/js/date/src/index.ts");
// EXTERNAL MODULE: ../../packages/js/components/src/segmented-selection/index.js
var segmented_selection = __webpack_require__("../../packages/js/components/src/segmented-selection/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../packages/js/components/src/date-range-filter-picker/compare-periods.js







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


var ComparePeriods = /*#__PURE__*/function (_Component) {
  (0,inherits/* default */.A)(ComparePeriods, _Component);
  var _super = _createSuper(ComparePeriods);
  function ComparePeriods() {
    (0,classCallCheck/* default */.A)(this, ComparePeriods);
    return _super.apply(this, arguments);
  }
  (0,createClass/* default */.A)(ComparePeriods, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        onSelect = _this$props.onSelect,
        compare = _this$props.compare;
      return /*#__PURE__*/(0,jsx_runtime.jsx)(segmented_selection/* default */.A, {
        options: src/* periods */.RE,
        selected: compare,
        onSelect: onSelect,
        name: "compare",
        legend: (0,build_module.__)('compare to', 'woocommerce')
      });
    }
  }]);
  return ComparePeriods;
}(react.Component);
ComparePeriods.propTypes = {
  onSelect: (prop_types_default()).func.isRequired,
  compare: (prop_types_default()).string
};
/* harmony default export */ const compare_periods = (ComparePeriods);
// EXTERNAL MODULE: ../../packages/js/components/src/calendar/date-range.js + 1 modules
var date_range = __webpack_require__("../../packages/js/components/src/calendar/date-range.js");
// EXTERNAL MODULE: ../../packages/js/components/src/section/header.tsx
var header = __webpack_require__("../../packages/js/components/src/section/header.tsx");
// EXTERNAL MODULE: ../../packages/js/components/src/section/section.tsx
var section = __webpack_require__("../../packages/js/components/src/section/section.tsx");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
;// CONCATENATED MODULE: ../../packages/js/components/src/date-range-filter-picker/preset-periods.js







function preset_periods_createSuper(Derived) {
  var hasNativeReflectConstruct = preset_periods_isNativeReflectConstruct();
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
function preset_periods_isNativeReflectConstruct() {
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


var PresetPeriods = /*#__PURE__*/function (_Component) {
  (0,inherits/* default */.A)(PresetPeriods, _Component);
  var _super = preset_periods_createSuper(PresetPeriods);
  function PresetPeriods() {
    (0,classCallCheck/* default */.A)(this, PresetPeriods);
    return _super.apply(this, arguments);
  }
  (0,createClass/* default */.A)(PresetPeriods, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        onSelect = _this$props.onSelect,
        period = _this$props.period;
      return /*#__PURE__*/(0,jsx_runtime.jsx)(segmented_selection/* default */.A, {
        options: (0,lodash.filter)(src/* presetValues */.Ad, function (preset) {
          return preset.value !== 'custom';
        }),
        selected: period,
        onSelect: onSelect,
        name: "period",
        legend: (0,build_module.__)('select a preset period', 'woocommerce')
      });
    }
  }]);
  return PresetPeriods;
}(react.Component);
PresetPeriods.propTypes = {
  onSelect: (prop_types_default()).func.isRequired,
  period: (prop_types_default()).string
};
/* harmony default export */ const preset_periods = (PresetPeriods);
;// CONCATENATED MODULE: ../../packages/js/components/src/date-range-filter-picker/content.js










function content_createSuper(Derived) {
  var hasNativeReflectConstruct = content_isNativeReflectConstruct();
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
function content_isNativeReflectConstruct() {
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





var DatePickerContent = /*#__PURE__*/function (_Component) {
  (0,inherits/* default */.A)(DatePickerContent, _Component);
  var _super = content_createSuper(DatePickerContent);
  function DatePickerContent() {
    var _this;
    (0,classCallCheck/* default */.A)(this, DatePickerContent);
    _this = _super.call(this);
    _this.onTabSelect = _this.onTabSelect.bind((0,assertThisInitialized/* default */.A)(_this));
    _this.controlsRef = (0,react.createRef)();
    return _this;
  }
  (0,createClass/* default */.A)(DatePickerContent, [{
    key: "onTabSelect",
    value: function onTabSelect(tab) {
      var _this$props = this.props,
        onUpdate = _this$props.onUpdate,
        period = _this$props.period;

      /**
       * If the period is `custom` and the user switches tabs to view the presets,
       * then a preset should be selected. This logic selects the default, otherwise
       * `custom` value for period will result in no selection.
       */
      if (tab === 'period' && period === 'custom') {
        onUpdate({
          period: 'today'
        });
      }
    }
  }, {
    key: "isFutureDate",
    value: function isFutureDate(dateString) {
      return moment_default()().isBefore(moment_default()(dateString), 'day');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        period = _this$props2.period,
        compare = _this$props2.compare,
        after = _this$props2.after,
        before = _this$props2.before,
        onUpdate = _this$props2.onUpdate,
        onClose = _this$props2.onClose,
        onSelect = _this$props2.onSelect,
        isValidSelection = _this$props2.isValidSelection,
        resetCustomValues = _this$props2.resetCustomValues,
        focusedInput = _this$props2.focusedInput,
        afterText = _this$props2.afterText,
        beforeText = _this$props2.beforeText,
        afterError = _this$props2.afterError,
        beforeError = _this$props2.beforeError,
        shortDateFormat = _this$props2.shortDateFormat;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(header.H, {
          className: "screen-reader-text",
          tabIndex: "0",
          children: (0,build_module.__)('Select date range and comparison', 'woocommerce')
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(section/* Section */.w, {
          component: false,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(header.H, {
            className: "woocommerce-filters-date__text",
            children: (0,build_module.__)('select a date range', 'woocommerce')
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(tab_panel/* default */.A, {
            tabs: [{
              name: 'period',
              title: (0,build_module.__)('Presets', 'woocommerce'),
              className: 'woocommerce-filters-date__tab'
            }, {
              name: 'custom',
              title: (0,build_module.__)('Custom', 'woocommerce'),
              className: 'woocommerce-filters-date__tab'
            }],
            className: "woocommerce-filters-date__tabs",
            activeClass: "is-active",
            initialTabName: period === 'custom' ? 'custom' : 'period',
            onSelect: this.onTabSelect,
            children: function children(selected) {
              return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
                children: [selected.name === 'period' && /*#__PURE__*/(0,jsx_runtime.jsx)(preset_periods, {
                  onSelect: onUpdate,
                  period: period
                }), selected.name === 'custom' && /*#__PURE__*/(0,jsx_runtime.jsx)(date_range/* default */.A, {
                  after: after,
                  before: before,
                  onUpdate: onUpdate,
                  isInvalidDate: _this2.isFutureDate,
                  focusedInput: focusedInput,
                  afterText: afterText,
                  beforeText: beforeText,
                  afterError: afterError,
                  beforeError: beforeError,
                  shortDateFormat: shortDateFormat,
                  losesFocusTo: _this2.controlsRef.current
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: classnames_default()('woocommerce-filters-date__content-controls', {
                    'is-custom': selected.name === 'custom'
                  }),
                  ref: _this2.controlsRef,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(header.H, {
                    className: "woocommerce-filters-date__text",
                    children: (0,build_module.__)('compare to', 'woocommerce')
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(compare_periods, {
                    onSelect: onUpdate,
                    compare: compare
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "woocommerce-filters-date__button-group",
                    children: [selected.name === 'custom' && /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
                      className: "woocommerce-filters-date__button",
                      isSecondary: true,
                      onClick: resetCustomValues,
                      disabled: !(after || before),
                      children: (0,build_module.__)('Reset', 'woocommerce')
                    }), isValidSelection(selected.name) ? /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
                      className: "woocommerce-filters-date__button",
                      onClick: onSelect(selected.name, onClose),
                      isPrimary: true,
                      children: (0,build_module.__)('Update', 'woocommerce')
                    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
                      className: "woocommerce-filters-date__button",
                      isPrimary: true,
                      disabled: true,
                      children: (0,build_module.__)('Update', 'woocommerce')
                    })]
                  })]
                })]
              });
            }
          })]
        })]
      });
    }
  }]);
  return DatePickerContent;
}(react.Component);
DatePickerContent.propTypes = {
  period: (prop_types_default()).string.isRequired,
  compare: (prop_types_default()).string.isRequired,
  onUpdate: (prop_types_default()).func.isRequired,
  onClose: (prop_types_default()).func.isRequired,
  onSelect: (prop_types_default()).func.isRequired,
  resetCustomValues: (prop_types_default()).func.isRequired,
  focusedInput: (prop_types_default()).string,
  afterText: (prop_types_default()).string,
  beforeText: (prop_types_default()).string,
  afterError: (prop_types_default()).string,
  beforeError: (prop_types_default()).string,
  shortDateFormat: (prop_types_default()).string.isRequired
};
/* harmony default export */ const content = (DatePickerContent);
// EXTERNAL MODULE: ../../packages/js/components/src/dropdown-button/index.js
var dropdown_button = __webpack_require__("../../packages/js/components/src/dropdown-button/index.js");
;// CONCATENATED MODULE: ../../packages/js/components/src/date-range-filter-picker/index.js










function date_range_filter_picker_createSuper(Derived) {
  var hasNativeReflectConstruct = date_range_filter_picker_isNativeReflectConstruct();
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
function date_range_filter_picker_isNativeReflectConstruct() {
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



var shortDateFormat = (0,build_module.__)('MM/DD/YYYY', 'woocommerce');

/**
 * Select a range of dates or single dates.
 */
var DateRangeFilterPicker = /*#__PURE__*/function (_Component) {
  (0,inherits/* default */.A)(DateRangeFilterPicker, _Component);
  var _super = date_range_filter_picker_createSuper(DateRangeFilterPicker);
  function DateRangeFilterPicker(props) {
    var _this;
    (0,classCallCheck/* default */.A)(this, DateRangeFilterPicker);
    _this = _super.call(this, props);
    _this.state = _this.getResetState();
    _this.update = _this.update.bind((0,assertThisInitialized/* default */.A)(_this));
    _this.onSelect = _this.onSelect.bind((0,assertThisInitialized/* default */.A)(_this));
    _this.isValidSelection = _this.isValidSelection.bind((0,assertThisInitialized/* default */.A)(_this));
    _this.resetCustomValues = _this.resetCustomValues.bind((0,assertThisInitialized/* default */.A)(_this));
    return _this;
  }
  (0,createClass/* default */.A)(DateRangeFilterPicker, [{
    key: "formatDate",
    value: function formatDate(date, format) {
      if (date && date._isAMomentObject && typeof date.format === 'function') {
        return date.format(format);
      }
      return '';
    }
  }, {
    key: "getResetState",
    value: function getResetState() {
      var _this$props$dateQuery = this.props.dateQuery,
        period = _this$props$dateQuery.period,
        compare = _this$props$dateQuery.compare,
        before = _this$props$dateQuery.before,
        after = _this$props$dateQuery.after;
      return {
        period: period,
        compare: compare,
        before: before,
        after: after,
        focusedInput: 'startDate',
        afterText: this.formatDate(after, shortDateFormat),
        beforeText: this.formatDate(before, shortDateFormat),
        afterError: null,
        beforeError: null
      };
    }
  }, {
    key: "update",
    value: function update(_update) {
      this.setState(_update);
    }
  }, {
    key: "onSelect",
    value: function onSelect(selectedTab, onClose) {
      var _this2 = this;
      var _this$props = this.props,
        isoDateFormat = _this$props.isoDateFormat,
        onRangeSelect = _this$props.onRangeSelect;
      return function (event) {
        var _this2$state = _this2.state,
          period = _this2$state.period,
          compare = _this2$state.compare,
          after = _this2$state.after,
          before = _this2$state.before;
        var data = {
          period: selectedTab === 'custom' ? 'custom' : period,
          compare: compare
        };
        if (selectedTab === 'custom') {
          data.after = _this2.formatDate(after, isoDateFormat);
          data.before = _this2.formatDate(before, isoDateFormat);
        } else {
          data.after = undefined;
          data.before = undefined;
        }
        onRangeSelect(data);
        onClose(event);
      };
    }
  }, {
    key: "getButtonLabel",
    value: function getButtonLabel() {
      var _this$props$dateQuery2 = this.props.dateQuery,
        primaryDate = _this$props$dateQuery2.primaryDate,
        secondaryDate = _this$props$dateQuery2.secondaryDate;
      return ["".concat(primaryDate.label, " (").concat(primaryDate.range, ")"), "".concat((0,build_module.__)('vs.', 'woocommerce'), " ").concat(secondaryDate.label, " (").concat(secondaryDate.range, ")")];
    }
  }, {
    key: "isValidSelection",
    value: function isValidSelection(selectedTab) {
      var _this$state = this.state,
        compare = _this$state.compare,
        after = _this$state.after,
        before = _this$state.before;
      if (selectedTab === 'custom') {
        return compare && after && before;
      }
      return true;
    }
  }, {
    key: "resetCustomValues",
    value: function resetCustomValues() {
      this.setState({
        after: null,
        before: null,
        focusedInput: 'startDate',
        afterText: '',
        beforeText: '',
        afterError: null,
        beforeError: null
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$state2 = this.state,
        period = _this$state2.period,
        compare = _this$state2.compare,
        after = _this$state2.after,
        before = _this$state2.before,
        focusedInput = _this$state2.focusedInput,
        afterText = _this$state2.afterText,
        beforeText = _this$state2.beforeText,
        afterError = _this$state2.afterError,
        beforeError = _this$state2.beforeError;
      var _this$props2 = this.props,
        isViewportMobile = _this$props2.isViewportMobile,
        _this$props2$focusOnM = _this$props2.focusOnMount,
        focusOnMount = _this$props2$focusOnM === void 0 ? true : _this$props2$focusOnM,
        _this$props2$popoverP = _this$props2.popoverProps,
        popoverProps = _this$props2$popoverP === void 0 ? {
          inline: true
        } : _this$props2$popoverP;
      if (!popoverProps.placement) {
        popoverProps.placement = 'bottom';
      }
      var contentClasses = classnames_default()('woocommerce-filters-date__content', {
        'is-mobile': isViewportMobile
      });
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "woocommerce-filters-filter",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
          className: "woocommerce-filters-label",
          children: [(0,build_module.__)('Date range', 'woocommerce'), ":"]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(dropdown/* default */.A, {
          contentClassName: contentClasses,
          expandOnMobile: true,
          focusOnMount: focusOnMount,
          popoverProps: popoverProps,
          renderToggle: function renderToggle(_ref) {
            var isOpen = _ref.isOpen,
              onToggle = _ref.onToggle;
            return /*#__PURE__*/(0,jsx_runtime.jsx)(dropdown_button/* default */.A, {
              onClick: onToggle,
              isOpen: isOpen,
              labels: _this3.getButtonLabel()
            });
          },
          renderContent: function renderContent(_ref2) {
            var onClose = _ref2.onClose;
            return /*#__PURE__*/(0,jsx_runtime.jsx)(content, {
              period: period,
              compare: compare,
              after: after,
              before: before,
              onUpdate: _this3.update,
              onClose: onClose,
              onSelect: _this3.onSelect,
              isValidSelection: _this3.isValidSelection,
              resetCustomValues: _this3.resetCustomValues,
              focusedInput: focusedInput,
              afterText: afterText,
              beforeText: beforeText,
              afterError: afterError,
              beforeError: beforeError,
              shortDateFormat: shortDateFormat
            });
          }
        })]
      });
    }
  }]);
  return DateRangeFilterPicker;
}(react.Component);
DateRangeFilterPicker.propTypes = {
  /**
   * Callback called when selection is made.
   */
  onRangeSelect: (prop_types_default()).func.isRequired,
  /**
   * The date query string represented in object form.
   */
  dateQuery: prop_types_default().shape({
    period: (prop_types_default()).string.isRequired,
    compare: (prop_types_default()).string.isRequired,
    before: (prop_types_default()).object,
    after: (prop_types_default()).object,
    primaryDate: prop_types_default().shape({
      label: (prop_types_default()).string.isRequired,
      range: (prop_types_default()).string.isRequired
    }).isRequired,
    secondaryDate: prop_types_default().shape({
      label: (prop_types_default()).string.isRequired,
      range: (prop_types_default()).string.isRequired
    }).isRequired
  }).isRequired
};
/* harmony default export */ const date_range_filter_picker = ((0,viewport_build_module/* withViewportMatch */.uE)({
  isViewportMobile: '< medium'
})(DateRangeFilterPicker));

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

/***/ "../../packages/js/components/src/segmented-selection/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");










function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(this, result);
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
 * Create a panel of styled selectable options rendering stylized checkboxes and labels
 */

var SegmentedSelection = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(SegmentedSelection, _Component);
  var _super = _createSuper(SegmentedSelection);
  function SegmentedSelection() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(this, SegmentedSelection);
    return _super.apply(this, arguments);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(SegmentedSelection, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        className = _this$props.className,
        options = _this$props.options,
        selected = _this$props.selected,
        onSelect = _this$props.onSelect,
        name = _this$props.name,
        legend = _this$props.legend;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("fieldset", {
        className: "woocommerce-segmented-selection",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("legend", {
          className: "screen-reader-text",
          children: legend
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(className, 'woocommerce-segmented-selection__container'),
          children: options.map(function (_ref) {
            var value = _ref.value,
              label = _ref.label;
            if (!value || !label) {
              return null;
            }
            var id = (0,lodash__WEBPACK_IMPORTED_MODULE_7__.uniqueId)("".concat(value, "_"));
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "woocommerce-segmented-selection__item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                className: "woocommerce-segmented-selection__input",
                type: "radio",
                name: name,
                id: id,
                checked: selected === value,
                onChange: (0,lodash__WEBPACK_IMPORTED_MODULE_7__.partial)(onSelect, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)({}, name, value))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("label", {
                htmlFor: id,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                  className: "woocommerce-segmented-selection__label",
                  children: label
                })
              })]
            }, value);
          })
        })]
      });
    }
  }]);
  return SegmentedSelection;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_13__.Component);
SegmentedSelection.propTypes = {
  /**
   * Additional CSS classes.
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string),
  /**
   * An Array of options to render. The array needs to be composed of objects with properties `label` and `value`.
   */
  options: prop_types__WEBPACK_IMPORTED_MODULE_14___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_14___default().shape({
    value: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string).isRequired,
    label: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string).isRequired
  })).isRequired,
  /**
   * Value of selected item.
   */
  selected: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string),
  /**
   * Callback to be executed after selection
   */
  onSelect: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func).isRequired,
  /**
   * This will be the key in the key and value arguments supplied to `onSelect`.
   */
  name: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string).isRequired,
  /**
   * Create a legend visible to screen readers.
   */
  legend: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SegmentedSelection);

/***/ }),

/***/ "../../packages/js/components/src/date-range-filter-picker/stories/date-range-filter-picker.story.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Basic: () => (/* binding */ Basic),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../packages/js/components/src/date-range-filter-picker/index.js");
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../packages/js/date/src/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * External dependencies
 */



/**
 * External dependencies
 */


var query = {};
var defaultDateRange = 'period=month&compare=previous_year';
var storeGetDateParamsFromQuery = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.partialRight)(_woocommerce_date__WEBPACK_IMPORTED_MODULE_0__/* .getDateParamsFromQuery */ .vW, defaultDateRange);
var storeGetCurrentDates = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.partialRight)(_woocommerce_date__WEBPACK_IMPORTED_MODULE_0__/* .getCurrentDates */ .lI, defaultDateRange);
var _storeGetDateParamsFr = storeGetDateParamsFromQuery(query),
  period = _storeGetDateParamsFr.period,
  compare = _storeGetDateParamsFr.compare,
  before = _storeGetDateParamsFr.before,
  after = _storeGetDateParamsFr.after;
var _storeGetCurrentDates = storeGetCurrentDates(query),
  primaryDate = _storeGetCurrentDates.primary,
  secondaryDate = _storeGetCurrentDates.secondary;
var dateQuery = {
  period: period,
  compare: compare,
  before: before,
  after: after,
  primaryDate: primaryDate,
  secondaryDate: secondaryDate
};
var Basic = function Basic() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    query: query,
    onRangeSelect: function onRangeSelect() {},
    dateQuery: dateQuery,
    isoDateFormat: _woocommerce_date__WEBPACK_IMPORTED_MODULE_0__/* .isoDateFormat */ .r3
  }, "daterange");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'Components/DateRangeFilterPicker',
  component: _woocommerce_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A
});
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "() => <DateRangeFilterPicker key=\"daterange\" query={query} onRangeSelect={() => {}} dateQuery={dateQuery} isoDateFormat={isoDateFormat} />",
      ...Basic.parameters?.docs?.source
    }
  }
};

/***/ })

}]);