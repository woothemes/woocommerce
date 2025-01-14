"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[2058],{

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/flex/component.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Flex */
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-connect.js");
/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/flex/hook.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/context.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/view/component.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */






function UnconnectedFlex(props, forwardedRef) {
  const {
    children,
    isColumn,
    ...otherProps
  } = (0,_hook__WEBPACK_IMPORTED_MODULE_1__/* .useFlex */ .v)(props);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_context__WEBPACK_IMPORTED_MODULE_2__/* .FlexContext */ .R.Provider, {
    value: {
      flexItemDisplay: isColumn ? 'block' : undefined
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_view__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      ...otherProps,
      ref: forwardedRef,
      children: children
    })
  });
}

/**
 * `Flex` is a primitive layout component that adaptively aligns child content
 * horizontally or vertically. `Flex` powers components like `HStack` and
 * `VStack`.
 *
 * `Flex` is used with any of its two sub-components, `FlexItem` and
 * `FlexBlock`.
 *
 * ```jsx
 * import { Flex, FlexBlock, FlexItem } from '@wordpress/components';
 *
 * function Example() {
 *   return (
 *     <Flex>
 *       <FlexItem>
 *         <p>Code</p>
 *       </FlexItem>
 *       <FlexBlock>
 *         <p>Poetry</p>
 *       </FlexBlock>
 *     </Flex>
 *   );
 * }
 * ```
 */
const Flex = (0,_context__WEBPACK_IMPORTED_MODULE_4__/* .contextConnect */ .KZ)(UnconnectedFlex, 'Flex');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Flex);
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/input-control/input-base.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ input_base)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js
var use_instance_id = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/input-control/styles/input-control-styles.js
var input_control_styles = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/input-control/styles/input-control-styles.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/input-control/backdrop.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


function Backdrop({
  disabled = false,
  isBorderless = false
}) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(input_control_styles/* BackdropUI */.Hr, {
    "aria-hidden": "true",
    className: "components-input-control__backdrop",
    disabled: disabled,
    isBorderless: isBorderless
  });
}
const MemoizedBackdrop = (0,react.memo)(Backdrop);
/* harmony default export */ const backdrop = (MemoizedBackdrop);
//# sourceMappingURL=backdrop.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/visually-hidden/component.js + 1 modules
var component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/visually-hidden/component.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/input-control/label.js
/**
 * Internal dependencies
 */



function Label({
  children,
  hideLabelFromVision,
  htmlFor,
  ...props
}) {
  if (!children) {
    return null;
  }
  if (hideLabelFromVision) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(component/* default */.A, {
      as: "label",
      htmlFor: htmlFor,
      children: children
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(input_control_styles/* LabelWrapper */.cR, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(input_control_styles/* Label */.JU, {
      htmlFor: htmlFor,
      ...props,
      children: children
    })
  });
}
//# sourceMappingURL=label.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/use-context-system.js + 1 modules
var use_context_system = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/use-context-system.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-system-provider.js
var context_system_provider = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-system-provider.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-connect.js
var context_connect = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-connect.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/use-deprecated-props.js
var use_deprecated_props = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/use-deprecated-props.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/input-control/input-base.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */







function useUniqueId(idProp) {
  const instanceId = (0,use_instance_id/* default */.A)(InputBase);
  const id = `input-base-control-${instanceId}`;
  return idProp || id;
}

// Adapter to map props for the new ui/flex component.
function getUIFlexProps(labelPosition) {
  const props = {};
  switch (labelPosition) {
    case 'top':
      props.direction = 'column';
      props.expanded = false;
      props.gap = 0;
      break;
    case 'bottom':
      props.direction = 'column-reverse';
      props.expanded = false;
      props.gap = 0;
      break;
    case 'edge':
      props.justify = 'space-between';
      break;
  }
  return props;
}
function InputBase(props, ref) {
  const {
    __next40pxDefaultSize,
    __unstableInputWidth,
    children,
    className,
    disabled = false,
    hideLabelFromVision = false,
    labelPosition,
    id: idProp,
    isBorderless = false,
    label,
    prefix,
    size = 'default',
    suffix,
    ...restProps
  } = (0,use_deprecated_props/* useDeprecated36pxDefaultSizeProp */.R)((0,use_context_system/* useContextSystem */.A)(props, 'InputBase'));
  const id = useUniqueId(idProp);
  const hideLabel = hideLabelFromVision || !label;
  const {
    paddingLeft,
    paddingRight
  } = (0,input_control_styles/* getSizeConfig */.E3)({
    inputSize: size,
    __next40pxDefaultSize
  });
  const prefixSuffixContextValue = (0,react.useMemo)(() => {
    return {
      InputControlPrefixWrapper: {
        paddingLeft
      },
      InputControlSuffixWrapper: {
        paddingRight
      }
    };
  }, [paddingLeft, paddingRight]);
  return (
    /*#__PURE__*/
    // @ts-expect-error The `direction` prop from Flex (FlexDirection) conflicts with legacy SVGAttributes `direction` (string) that come from React intrinsic prop definitions.
    (0,jsx_runtime.jsxs)(input_control_styles/* Root */.bL, {
      ...restProps,
      ...getUIFlexProps(labelPosition),
      className: className,
      gap: 2,
      ref: ref,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Label, {
        className: "components-input-control__label",
        hideLabelFromVision: hideLabelFromVision,
        labelPosition: labelPosition,
        htmlFor: id,
        children: label
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(input_control_styles/* Container */.mc, {
        __unstableInputWidth: __unstableInputWidth,
        className: "components-input-control__container",
        disabled: disabled,
        hideLabel: hideLabel,
        labelPosition: labelPosition,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(context_system_provider/* ContextSystemProvider */.c7, {
          value: prefixSuffixContextValue,
          children: [prefix && /*#__PURE__*/(0,jsx_runtime.jsx)(input_control_styles/* Prefix */.b3, {
            className: "components-input-control__prefix",
            children: prefix
          }), children, suffix && /*#__PURE__*/(0,jsx_runtime.jsx)(input_control_styles/* Suffix */.sZ, {
            className: "components-input-control__suffix",
            children: suffix
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(backdrop, {
          disabled: disabled,
          isBorderless: isBorderless
        })]
      })]
    })
  );
}

/**
 * `InputBase` is an internal component used to style the standard borders for an input,
 * as well as handle the layout for prefix/suffix elements.
 */
/* harmony default export */ const input_base = ((0,context_connect/* contextConnect */.KZ)(InputBase, 'InputBase'));
//# sourceMappingURL=input-base.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/input-control/styles/input-control-styles.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E3: () => (/* binding */ getSizeConfig),
/* harmony export */   Hr: () => (/* binding */ BackdropUI),
/* harmony export */   JU: () => (/* binding */ Label),
/* harmony export */   TA: () => (/* binding */ fontSizeStyles),
/* harmony export */   b3: () => (/* binding */ Prefix),
/* harmony export */   bL: () => (/* binding */ Root),
/* harmony export */   cR: () => (/* binding */ LabelWrapper),
/* harmony export */   mc: () => (/* binding */ Container),
/* harmony export */   pd: () => (/* binding */ Input),
/* harmony export */   sZ: () => (/* binding */ Suffix)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1__@types+react@18.3.16_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/flex/component.js");
/* harmony import */ var _flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/flex-item/component.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/text/component.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/colors-values.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/rtl.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/config-values.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/base-label.js");
/* harmony import */ var _utils_space__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/space.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






const Prefix = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("span",  true ? {
  target: "em5sgkm7"
} : 0)( true ? {
  name: "pvvbxf",
  styles: "box-sizing:border-box;display:block"
} : 0);
const Suffix = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("span",  true ? {
  target: "em5sgkm6"
} : 0)( true ? {
  name: "jgf79h",
  styles: "align-items:center;align-self:stretch;box-sizing:border-box;display:flex"
} : 0);
const backdropBorderColor = ({
  disabled,
  isBorderless
}) => {
  if (isBorderless) {
    return 'transparent';
  }
  if (disabled) {
    return _utils__WEBPACK_IMPORTED_MODULE_2__/* .COLORS */ .l.ui.borderDisabled;
  }
  return _utils__WEBPACK_IMPORTED_MODULE_2__/* .COLORS */ .l.ui.border;
};
const BackdropUI = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("div",  true ? {
  target: "em5sgkm5"
} : 0)("&&&{box-sizing:border-box;border-color:", backdropBorderColor, ";border-radius:inherit;border-style:solid;border-width:1px;bottom:0;left:0;margin:0;padding:0;pointer-events:none;position:absolute;right:0;top:0;", (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .rtl */ .h)({
  paddingLeft: 2
}), ";}" + ( true ? "" : 0));
const Root = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_flex__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,  true ? {
  target: "em5sgkm4"
} : 0)("box-sizing:border-box;position:relative;border-radius:2px;padding-top:0;&:focus-within:not( :has( :is( ", Prefix, ", ", Suffix, " ):focus-within ) ){", BackdropUI, "{border-color:", _utils__WEBPACK_IMPORTED_MODULE_2__/* .COLORS */ .l.ui.borderFocus, ";box-shadow:", _utils__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.controlBoxShadowFocus, ";outline:2px solid transparent;outline-offset:-2px;}}" + ( true ? "" : 0));
const containerDisabledStyles = ({
  disabled
}) => {
  const backgroundColor = disabled ? _utils__WEBPACK_IMPORTED_MODULE_2__/* .COLORS */ .l.ui.backgroundDisabled : _utils__WEBPACK_IMPORTED_MODULE_2__/* .COLORS */ .l.ui.background;
  return /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .css */ .AH)({
    backgroundColor
  },  true ? "" : 0,  true ? "" : 0);
};
var _ref =  true ? {
  name: "1d3w5wq",
  styles: "width:100%"
} : 0;
const containerWidthStyles = ({
  __unstableInputWidth,
  labelPosition
}) => {
  if (!__unstableInputWidth) {
    return _ref;
  }
  if (labelPosition === 'side') {
    return '';
  }
  if (labelPosition === 'edge') {
    return /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .css */ .AH)({
      flex: `0 0 ${__unstableInputWidth}`
    },  true ? "" : 0,  true ? "" : 0);
  }
  return /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .css */ .AH)({
    width: __unstableInputWidth
  },  true ? "" : 0,  true ? "" : 0);
};
const Container = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("div",  true ? {
  target: "em5sgkm3"
} : 0)("align-items:center;box-sizing:border-box;border-radius:inherit;display:flex;flex:1;position:relative;", containerDisabledStyles, " ", containerWidthStyles, ";" + ( true ? "" : 0));
const disabledStyles = ({
  disabled
}) => {
  if (!disabled) {
    return '';
  }
  return /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .css */ .AH)({
    color: _utils__WEBPACK_IMPORTED_MODULE_2__/* .COLORS */ .l.ui.textDisabled
  },  true ? "" : 0,  true ? "" : 0);
};
const fontSizeStyles = ({
  inputSize: size
}) => {
  const sizes = {
    default: '13px',
    small: '11px',
    compact: '13px',
    '__unstable-large': '13px'
  };
  const fontSize = sizes[size] || sizes.default;
  const fontSizeMobile = '16px';
  if (!fontSize) {
    return '';
  }
  return /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .css */ .AH)("font-size:", fontSizeMobile, ";@media ( min-width: 600px ){font-size:", fontSize, ";}" + ( true ? "" : 0),  true ? "" : 0);
};
const getSizeConfig = ({
  inputSize: size,
  __next40pxDefaultSize
}) => {
  // Paddings may be overridden by the custom paddings props.
  const sizes = {
    default: {
      height: 40,
      lineHeight: 1,
      minHeight: 40,
      paddingLeft: (0,_utils_space__WEBPACK_IMPORTED_MODULE_7__/* .space */ .x)(4),
      paddingRight: (0,_utils_space__WEBPACK_IMPORTED_MODULE_7__/* .space */ .x)(4)
    },
    small: {
      height: 24,
      lineHeight: 1,
      minHeight: 24,
      paddingLeft: (0,_utils_space__WEBPACK_IMPORTED_MODULE_7__/* .space */ .x)(2),
      paddingRight: (0,_utils_space__WEBPACK_IMPORTED_MODULE_7__/* .space */ .x)(2)
    },
    compact: {
      height: 32,
      lineHeight: 1,
      minHeight: 32,
      paddingLeft: (0,_utils_space__WEBPACK_IMPORTED_MODULE_7__/* .space */ .x)(2),
      paddingRight: (0,_utils_space__WEBPACK_IMPORTED_MODULE_7__/* .space */ .x)(2)
    },
    '__unstable-large': {
      height: 40,
      lineHeight: 1,
      minHeight: 40,
      paddingLeft: (0,_utils_space__WEBPACK_IMPORTED_MODULE_7__/* .space */ .x)(4),
      paddingRight: (0,_utils_space__WEBPACK_IMPORTED_MODULE_7__/* .space */ .x)(4)
    }
  };
  if (!__next40pxDefaultSize) {
    sizes.default = sizes.compact;
  }
  return sizes[size] || sizes.default;
};
const sizeStyles = props => {
  return /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .css */ .AH)(getSizeConfig(props),  true ? "" : 0,  true ? "" : 0);
};
const customPaddings = ({
  paddingInlineStart,
  paddingInlineEnd
}) => {
  return /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .css */ .AH)({
    paddingInlineStart,
    paddingInlineEnd
  },  true ? "" : 0,  true ? "" : 0);
};
const dragStyles = ({
  isDragging,
  dragCursor
}) => {
  let defaultArrowStyles;
  let activeDragCursorStyles;
  if (isDragging) {
    defaultArrowStyles = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .css */ .AH)("cursor:", dragCursor, ";user-select:none;&::-webkit-outer-spin-button,&::-webkit-inner-spin-button{-webkit-appearance:none!important;margin:0!important;}" + ( true ? "" : 0),  true ? "" : 0);
  }
  if (isDragging && dragCursor) {
    activeDragCursorStyles = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .css */ .AH)("&:active{cursor:", dragCursor, ";}" + ( true ? "" : 0),  true ? "" : 0);
  }
  return /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .css */ .AH)(defaultArrowStyles, " ", activeDragCursorStyles, ";" + ( true ? "" : 0),  true ? "" : 0);
};

// TODO: Resolve need to use &&& to increase specificity
// https://github.com/WordPress/gutenberg/issues/18483

const Input = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("input",  true ? {
  target: "em5sgkm2"
} : 0)("&&&{background-color:transparent;box-sizing:border-box;border:none;box-shadow:none!important;color:", _utils__WEBPACK_IMPORTED_MODULE_2__/* .COLORS */ .l.theme.foreground, ";display:block;font-family:inherit;margin:0;outline:none;width:100%;", dragStyles, " ", disabledStyles, " ", fontSizeStyles, " ", sizeStyles, " ", customPaddings, " &::-webkit-input-placeholder{line-height:normal;}}" + ( true ? "" : 0));
const BaseLabel = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_text__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,  true ? {
  target: "em5sgkm1"
} : 0)("&&&{", _utils__WEBPACK_IMPORTED_MODULE_9__/* .baseLabelTypography */ .z, ";box-sizing:border-box;display:block;padding-top:0;padding-bottom:0;max-width:100%;z-index:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}" + ( true ? "" : 0));
const Label = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BaseLabel, {
  ...props,
  as: "label"
});
const LabelWrapper = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_flex__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,  true ? {
  target: "em5sgkm0"
} : 0)( true ? {
  name: "1b6uupn",
  styles: "max-width:calc( 100% - 10px )"
} : 0);
//# sourceMappingURL=input-control-styles.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/select-control/chevron-down.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js");
/* harmony import */ var _styles_select_control_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/select-control/styles/select-control-styles.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const SelectControlChevronDown = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles_select_control_styles__WEBPACK_IMPORTED_MODULE_1__/* .InputControlSuffixWrapperWithClickThrough */ .vt, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles_select_control_styles__WEBPACK_IMPORTED_MODULE_1__/* .DownArrowWrapper */ .ff, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
        size: _styles_select_control_styles__WEBPACK_IMPORTED_MODULE_1__/* .chevronIconSize */ .qO
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectControlChevronDown);
//# sourceMappingURL=chevron-down.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/select-control/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export SelectControl */
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _base_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/base-control/index.js");
/* harmony import */ var _input_control_input_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/input-control/input-base.js");
/* harmony import */ var _styles_select_control_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/select-control/styles/select-control-styles.js");
/* harmony import */ var _chevron_down__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/select-control/chevron-down.js");
/* harmony import */ var _utils_use_deprecated_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/use-deprecated-props.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */






function useUniqueId(idProp) {
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(SelectControl);
  const id = `inspector-select-control-${instanceId}`;
  return idProp || id;
}
function UnforwardedSelectControl(props, ref) {
  const {
    className,
    disabled = false,
    help,
    hideLabelFromVision,
    id: idProp,
    label,
    multiple = false,
    onChange,
    options = [],
    size = 'default',
    value: valueProp,
    labelPosition = 'top',
    children,
    prefix,
    suffix,
    __next40pxDefaultSize = false,
    __nextHasNoMarginBottom = false,
    ...restProps
  } = (0,_utils_use_deprecated_props__WEBPACK_IMPORTED_MODULE_2__/* .useDeprecated36pxDefaultSizeProp */ .R)(props);
  const id = useUniqueId(idProp);
  const helpId = help ? `${id}__help` : undefined;

  // Disable reason: A select with an onchange throws a warning.
  if (!options?.length && !children) {
    return null;
  }
  const handleOnChange = event => {
    if (props.multiple) {
      const selectedOptions = Array.from(event.target.options).filter(({
        selected
      }) => selected);
      const newValues = selectedOptions.map(({
        value
      }) => value);
      props.onChange?.(newValues, {
        event
      });
      return;
    }
    props.onChange?.(event.target.value, {
      event
    });
  };
  const classes = (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)('components-select-control', className);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_base_control__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {
    help: help,
    id: id,
    __nextHasNoMarginBottom: __nextHasNoMarginBottom,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_input_control_input_base__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
      className: classes,
      disabled: disabled,
      hideLabelFromVision: hideLabelFromVision,
      id: id,
      label: label,
      size: size,
      suffix: suffix || !multiple && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chevron_down__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {}),
      prefix: prefix,
      labelPosition: labelPosition,
      __next40pxDefaultSize: __next40pxDefaultSize,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles_select_control_styles__WEBPACK_IMPORTED_MODULE_7__/* .Select */ .l6, {
        ...restProps,
        __next40pxDefaultSize: __next40pxDefaultSize,
        "aria-describedby": helpId,
        className: "components-select-control__input",
        disabled: disabled,
        id: id,
        multiple: multiple,
        onChange: handleOnChange,
        ref: ref,
        selectSize: size,
        value: valueProp,
        children: children || options.map((option, index) => {
          const key = option.id || `${option.label}-${option.value}-${index}`;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
            value: option.value,
            disabled: option.disabled,
            hidden: option.hidden,
            children: option.label
          }, key);
        })
      })
    })
  });
}

/**
 * `SelectControl` allows users to select from a single or multiple option menu.
 * It functions as a wrapper around the browser's native `<select>` element.
 *
 * ```jsx
 * import { SelectControl } from '@wordpress/components';
 * import { useState } from '@wordpress/element';
 *
 * const MySelectControl = () => {
 *   const [ size, setSize ] = useState( '50%' );
 *
 *   return (
 *     <SelectControl
 *       label="Size"
 *       value={ size }
 *       options={ [
 *         { label: 'Big', value: '100%' },
 *         { label: 'Medium', value: '50%' },
 *         { label: 'Small', value: '25%' },
 *       ] }
 *       onChange={ setSize }
 *     />
 *   );
 * };
 * ```
 */
const SelectControl = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.forwardRef)(UnforwardedSelectControl);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectControl);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/select-control/styles/select-control-styles.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ff: () => (/* binding */ DownArrowWrapper),
  vt: () => (/* binding */ InputControlSuffixWrapperWithClickThrough),
  l6: () => (/* binding */ Select),
  qO: () => (/* binding */ chevronIconSize)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1__@types+react@18.3.16_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js + 1 modules
var emotion_styled_base_browser_esm = __webpack_require__("../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1__@types+react@18.3.16_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__("../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/colors-values.js
var colors_values = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/colors-values.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/rtl.js
var rtl = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/rtl.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/space.js
var space = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/space.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/spacer/component.js + 1 modules
var component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/spacer/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/use-context-system.js + 1 modules
var use_context_system = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/use-context-system.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-connect.js
var context_connect = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-connect.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/input-control/input-suffix-wrapper.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



function UnconnectedInputControlSuffixWrapper(props, forwardedRef) {
  const derivedProps = (0,use_context_system/* useContextSystem */.A)(props, 'InputControlSuffixWrapper');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(component/* default */.A, {
    marginBottom: 0,
    ...derivedProps,
    ref: forwardedRef
  });
}

/**
 * A convenience wrapper for the `suffix` when you want to apply
 * standard padding in accordance with the size variant.
 *
 * ```jsx
 * import {
 *   __experimentalInputControl as InputControl,
 *   __experimentalInputControlSuffixWrapper as InputControlSuffixWrapper,
 * } from '@wordpress/components';
 *
 * <InputControl
 *   suffix={<InputControlSuffixWrapper>%</InputControlSuffixWrapper>}
 * />
 * ```
 */
const InputControlSuffixWrapper = (0,context_connect/* contextConnect */.KZ)(UnconnectedInputControlSuffixWrapper, 'InputControlSuffixWrapper');
/* harmony default export */ const input_suffix_wrapper = (InputControlSuffixWrapper);
//# sourceMappingURL=input-suffix-wrapper.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/input-control/styles/input-control-styles.js
var input_control_styles = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/input-control/styles/input-control-styles.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/select-control/styles/select-control-styles.js

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */




const disabledStyles = ({
  disabled
}) => {
  if (!disabled) {
    return '';
  }
  return /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)({
    color: colors_values/* COLORS */.l.ui.textDisabled
  },  true ? "" : 0,  true ? "" : 0);
};
const sizeStyles = ({
  __next40pxDefaultSize,
  multiple,
  selectSize = 'default'
}) => {
  if (multiple) {
    // When `multiple`, just use the native browser styles
    // without setting explicit height.
    return;
  }
  const sizes = {
    default: {
      height: 40,
      minHeight: 40,
      paddingTop: 0,
      paddingBottom: 0
    },
    small: {
      height: 24,
      minHeight: 24,
      paddingTop: 0,
      paddingBottom: 0
    },
    compact: {
      height: 32,
      minHeight: 32,
      paddingTop: 0,
      paddingBottom: 0
    },
    '__unstable-large': {
      height: 40,
      minHeight: 40,
      paddingTop: 0,
      paddingBottom: 0
    }
  };
  if (!__next40pxDefaultSize) {
    sizes.default = sizes.compact;
  }
  const style = sizes[selectSize] || sizes.default;
  return /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)(style,  true ? "" : 0,  true ? "" : 0);
};
const chevronIconSize = 18;
const sizePaddings = ({
  __next40pxDefaultSize,
  multiple,
  selectSize = 'default'
}) => {
  const padding = {
    default: 16,
    small: 8,
    compact: 8,
    '__unstable-large': 16
  };
  if (!__next40pxDefaultSize) {
    padding.default = padding.compact;
  }
  const selectedPadding = padding[selectSize] || padding.default;
  return (0,rtl/* rtl */.h)({
    paddingLeft: selectedPadding,
    paddingRight: selectedPadding + chevronIconSize,
    ...(multiple ? {
      paddingTop: selectedPadding,
      paddingBottom: selectedPadding
    } : {})
  });
};
const overflowStyles = ({
  multiple
}) => {
  return {
    overflow: multiple ? 'auto' : 'hidden'
  };
};

// TODO: Resolve need to use &&& to increase specificity
// https://github.com/WordPress/gutenberg/issues/18483

const Select = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("select",  true ? {
  target: "e1mv6sxx2"
} : 0)("&&&{appearance:none;background:transparent;box-sizing:border-box;border:none;box-shadow:none!important;color:", colors_values/* COLORS */.l.gray[900], ";display:block;font-family:inherit;margin:0;width:100%;max-width:none;cursor:pointer;white-space:nowrap;text-overflow:ellipsis;", disabledStyles, ";", input_control_styles/* fontSizeStyles */.TA, ";", sizeStyles, ";", sizePaddings, ";", overflowStyles, ";}" + ( true ? "" : 0));
const DownArrowWrapper = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",  true ? {
  target: "e1mv6sxx1"
} : 0)("margin-inline-end:", (0,space/* space */.x)(-1), ";line-height:0;" + ( true ? "" : 0));
const InputControlSuffixWrapperWithClickThrough = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)(input_suffix_wrapper,  true ? {
  target: "e1mv6sxx0"
} : 0)("position:absolute;pointer-events:none;", (0,rtl/* rtl */.h)({
  right: 0
}), ";" + ( true ? "" : 0));
//# sourceMappingURL=select-control-styles.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/spacer/component.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ spacer_component)
});

// UNUSED EXPORTS: Spacer

// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-connect.js
var context_connect = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-connect.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/view/component.js
var component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/view/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__("../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/use-context-system.js + 1 modules
var use_context_system = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/use-context-system.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/space.js
var space = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/space.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js
var use_cx = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/rtl.js
var rtl = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/rtl.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/spacer/hook.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */




const isDefined = o => typeof o !== 'undefined' && o !== null;
function useSpacer(props) {
  const {
    className,
    margin,
    marginBottom = 2,
    marginLeft,
    marginRight,
    marginTop,
    marginX,
    marginY,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingX,
    paddingY,
    ...otherProps
  } = (0,use_context_system/* useContextSystem */.A)(props, 'Spacer');
  const cx = (0,use_cx/* useCx */.l)();
  const classes = cx(isDefined(margin) && /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("margin:", (0,space/* space */.x)(margin), ";" + ( true ? "" : 0),  true ? "" : 0), isDefined(marginY) && /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("margin-bottom:", (0,space/* space */.x)(marginY), ";margin-top:", (0,space/* space */.x)(marginY), ";" + ( true ? "" : 0),  true ? "" : 0), isDefined(marginX) && /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("margin-left:", (0,space/* space */.x)(marginX), ";margin-right:", (0,space/* space */.x)(marginX), ";" + ( true ? "" : 0),  true ? "" : 0), isDefined(marginTop) && /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("margin-top:", (0,space/* space */.x)(marginTop), ";" + ( true ? "" : 0),  true ? "" : 0), isDefined(marginBottom) && /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("margin-bottom:", (0,space/* space */.x)(marginBottom), ";" + ( true ? "" : 0),  true ? "" : 0), isDefined(marginLeft) && (0,rtl/* rtl */.h)({
    marginLeft: (0,space/* space */.x)(marginLeft)
  })(), isDefined(marginRight) && (0,rtl/* rtl */.h)({
    marginRight: (0,space/* space */.x)(marginRight)
  })(), isDefined(padding) && /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("padding:", (0,space/* space */.x)(padding), ";" + ( true ? "" : 0),  true ? "" : 0), isDefined(paddingY) && /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("padding-bottom:", (0,space/* space */.x)(paddingY), ";padding-top:", (0,space/* space */.x)(paddingY), ";" + ( true ? "" : 0),  true ? "" : 0), isDefined(paddingX) && /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("padding-left:", (0,space/* space */.x)(paddingX), ";padding-right:", (0,space/* space */.x)(paddingX), ";" + ( true ? "" : 0),  true ? "" : 0), isDefined(paddingTop) && /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("padding-top:", (0,space/* space */.x)(paddingTop), ";" + ( true ? "" : 0),  true ? "" : 0), isDefined(paddingBottom) && /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("padding-bottom:", (0,space/* space */.x)(paddingBottom), ";" + ( true ? "" : 0),  true ? "" : 0), isDefined(paddingLeft) && (0,rtl/* rtl */.h)({
    paddingLeft: (0,space/* space */.x)(paddingLeft)
  })(), isDefined(paddingRight) && (0,rtl/* rtl */.h)({
    paddingRight: (0,space/* space */.x)(paddingRight)
  })(), className);
  return {
    ...otherProps,
    className: classes
  };
}
//# sourceMappingURL=hook.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/spacer/component.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */





function UnconnectedSpacer(props, forwardedRef) {
  const spacerProps = useSpacer(props);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(component/* default */.A, {
    ...spacerProps,
    ref: forwardedRef
  });
}

/**
 * `Spacer` is a primitive layout component that providers inner (`padding`) or outer (`margin`) space in-between components. It can also be used to adaptively provide space within an `HStack` or `VStack`.
 *
 * `Spacer` comes with a bunch of shorthand props to adjust `margin` and `padding`. The values of these props
 * can either be a number (which will act as a multiplier to the library's grid system base of 4px),
 * or a literal CSS value string.
 *
 * ```jsx
 * import { Spacer } from `@wordpress/components`
 *
 * function Example() {
 *   return (
 *     <View>
 *       <Spacer>
 *         <Heading>WordPress.org</Heading>
 *       </Spacer>
 *       <Text>
 *         Code is Poetry
 *       </Text>
 *     </View>
 *   );
 * }
 * ```
 */
const Spacer = (0,context_connect/* contextConnect */.KZ)(UnconnectedSpacer, 'Spacer');
/* harmony default export */ const spacer_component = (Spacer);
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/text/component.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Text */
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-connect.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/view/component.js");
/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/text/hook.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * Internal dependencies
 */





/**
 * @param props
 * @param forwardedRef
 */
function UnconnectedText(props, forwardedRef) {
  const textProps = (0,_hook__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(props);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_view__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    as: "span",
    ...textProps,
    ref: forwardedRef
  });
}

/**
 * `Text` is a core component that renders text in the library, using the
 * library's typography system.
 *
 * `Text` can be used to render any text-content, like an HTML `p` or `span`.
 *
 * @example
 *
 * ```jsx
 * import { __experimentalText as Text } from `@wordpress/components`;
 *
 * function Example() {
 * 	return <Text>Code is Poetry</Text>;
 * }
 * ```
 */
const Text = (0,_context__WEBPACK_IMPORTED_MODULE_3__/* .contextConnect */ .KZ)(UnconnectedText, 'Text');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/rtl.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ rtl)
/* harmony export */ });
/* unused harmony export convertLTRToRTL */
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

const LOWER_LEFT_REGEXP = new RegExp(/-left/g);
const LOWER_RIGHT_REGEXP = new RegExp(/-right/g);
const UPPER_LEFT_REGEXP = new RegExp(/Left/g);
const UPPER_RIGHT_REGEXP = new RegExp(/Right/g);

/**
 * Flips a CSS property from left <-> right.
 *
 * @param {string} key The CSS property name.
 *
 * @return {string} The flipped CSS property name, if applicable.
 */
function getConvertedKey(key) {
  if (key === 'left') {
    return 'right';
  }
  if (key === 'right') {
    return 'left';
  }
  if (LOWER_LEFT_REGEXP.test(key)) {
    return key.replace(LOWER_LEFT_REGEXP, '-right');
  }
  if (LOWER_RIGHT_REGEXP.test(key)) {
    return key.replace(LOWER_RIGHT_REGEXP, '-left');
  }
  if (UPPER_LEFT_REGEXP.test(key)) {
    return key.replace(UPPER_LEFT_REGEXP, 'Right');
  }
  if (UPPER_RIGHT_REGEXP.test(key)) {
    return key.replace(UPPER_RIGHT_REGEXP, 'Left');
  }
  return key;
}

/**
 * An incredibly basic ltr -> rtl converter for style properties
 *
 * @param {import('react').CSSProperties} ltrStyles
 *
 * @return {import('react').CSSProperties} Converted ltr -> rtl styles
 */
const convertLTRToRTL = (ltrStyles = {}) => {
  return Object.fromEntries(Object.entries(ltrStyles).map(([key, value]) => [getConvertedKey(key), value]));
};

/**
 * A higher-order function that create an incredibly basic ltr -> rtl style converter for CSS objects.
 *
 * @param {import('react').CSSProperties} ltrStyles   Ltr styles. Converts and renders from ltr -> rtl styles, if applicable.
 * @param {import('react').CSSProperties} [rtlStyles] Rtl styles. Renders if provided.
 *
 * @return {() => import('@emotion/react').SerializedStyles} A function to output CSS styles for Emotion's renderer
 */
function rtl(ltrStyles = {}, rtlStyles) {
  return () => {
    if (rtlStyles) {
      // @ts-ignore: `css` types are wrong, it can accept an object: https://emotion.sh/docs/object-styles#with-css
      return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__/* .isRTL */ .V8)() ? /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .css */ .AH)(rtlStyles,  true ? "" : 0,  true ? "" : 0) : /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .css */ .AH)(ltrStyles,  true ? "" : 0,  true ? "" : 0);
    }

    // @ts-ignore: `css` types are wrong, it can accept an object: https://emotion.sh/docs/object-styles#with-css
    return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__/* .isRTL */ .V8)() ? /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .css */ .AH)(convertLTRToRTL(ltrStyles),  true ? "" : 0,  true ? "" : 0) : /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .css */ .AH)(ltrStyles,  true ? "" : 0,  true ? "" : 0);
  };
}

/**
 * Call this in the `useMemo` dependency array to ensure that subsequent renders will
 * cause rtl styles to update based on the `isRTL` return value even if all other dependencies
 * remain the same.
 *
 * @example
 * const styles = useMemo( () => {
 *   return css`
 *     ${ rtl( { marginRight: '10px' } ) }
 *   `;
 * }, [ rtl.watch() ] );
 */
rtl.watch = () => (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__/* .isRTL */ .V8)();
//# sourceMappingURL=rtl.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/use-deprecated-props.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useDeprecated36pxDefaultSizeProp)
/* harmony export */ });
function useDeprecated36pxDefaultSizeProp(props) {
  const {
    __next36pxDefaultSize,
    __next40pxDefaultSize,
    ...otherProps
  } = props;
  return {
    ...otherProps,
    __next40pxDefaultSize: __next40pxDefaultSize !== null && __next40pxDefaultSize !== void 0 ? __next40pxDefaultSize : __next36pxDefaultSize
  };
}
//# sourceMappingURL=use-deprecated-props.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/icon/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * WordPress dependencies
 */


/** @typedef {{icon: JSX.Element, size?: number} & import('@wordpress/primitives').SVGProps} IconProps */

/**
 * Return an SVG icon.
 *
 * @param {IconProps}                                 props icon is the SVG component to render
 *                                                          size is a number specifiying the icon size in pixels
 *                                                          Other props will be passed to wrapped SVG component
 * @param {import('react').ForwardedRef<HTMLElement>} ref   The forwarded ref to the SVG element.
 *
 * @return {JSX.Element}  Icon component
 */
function Icon({
  icon,
  size = 24,
  ...props
}, ref) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(icon, {
    width: size,
    height: size,
    ...props,
    ref
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Icon));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@3.4.1/node_modules/@wordpress/primitives/build-module/svg/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * WordPress dependencies
 */


const chevronDown = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .SVG */ .t4, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .Path */ .wA, {
    d: "M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chevronDown);
//# sourceMappingURL=chevron-down.js.map

/***/ })

}]);