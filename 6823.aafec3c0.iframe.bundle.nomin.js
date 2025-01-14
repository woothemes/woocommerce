"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[6823],{

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/base-control/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   pu: () => (/* binding */ BaseControl)
/* harmony export */ });
/* unused harmony export VisualLabel */
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _visually_hidden__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/visually-hidden/component.js");
/* harmony import */ var _styles_base_control_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/base-control/styles/base-control-styles.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/use-context-system.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-connect.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */







/**
 * `BaseControl` is a component used to generate labels and help text for components handling user inputs.
 *
 * ```jsx
 * import { BaseControl, useBaseControlProps } from '@wordpress/components';
 *
 * // Render a `BaseControl` for a textarea input
 * const MyCustomTextareaControl = ({ children, ...baseProps }) => (
 * 	// `useBaseControlProps` is a convenience hook to get the props for the `BaseControl`
 * 	// and the inner control itself. Namely, it takes care of generating a unique `id`,
 * 	// properly associating it with the `label` and `help` elements.
 * 	const { baseControlProps, controlProps } = useBaseControlProps( baseProps );
 *
 * 	return (
 * 		<BaseControl { ...baseControlProps } __nextHasNoMarginBottom={ true }>
 * 			<textarea { ...controlProps }>
 * 			  { children }
 * 			</textarea>
 * 		</BaseControl>
 * 	);
 * );
 * ```
 */
const UnconnectedBaseControl = props => {
  const {
    __nextHasNoMarginBottom = false,
    id,
    label,
    hideLabelFromVision = false,
    help,
    className,
    children
  } = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .useContextSystem */ .A)(props, 'BaseControl');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_2__/* .Wrapper */ .mO, {
    className: className,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_2__/* .StyledField */ .mh, {
      className: "components-base-control__field"
      // TODO: Official deprecation for this should start after all internal usages have been migrated
      ,
      __nextHasNoMarginBottom: __nextHasNoMarginBottom,
      children: [label && id && (hideLabelFromVision ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_visually_hidden__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        as: "label",
        htmlFor: id,
        children: label
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_2__/* .StyledLabel */ .Gw, {
        className: "components-base-control__label",
        htmlFor: id,
        children: label
      })), label && !id && (hideLabelFromVision ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_visually_hidden__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        as: "label",
        children: label
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(VisualLabel, {
        children: label
      })), children]
    }), !!help && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_2__/* .StyledHelp */ .te, {
      id: id ? id + '__help' : undefined,
      className: "components-base-control__help",
      __nextHasNoMarginBottom: __nextHasNoMarginBottom,
      children: help
    })]
  });
};

/**
 * `BaseControl.VisualLabel` is used to render a purely visual label inside a `BaseControl` component.
 *
 * It should only be used in cases where the children being rendered inside `BaseControl` are already accessibly labeled,
 * e.g., a button, but we want an additional visual label for that section equivalent to the labels `BaseControl` would
 * otherwise use if the `label` prop was passed.
 *
 * @example
 * import { BaseControl } from '@wordpress/components';
 *
 * const MyBaseControl = () => (
 * 	<BaseControl help="This button is already accessibly labeled.">
 * 		<BaseControl.VisualLabel>Author</BaseControl.VisualLabel>
 * 		<Button>Select an author</Button>
 * 	</BaseControl>
 * );
 */
const VisualLabel = ({
  className,
  children,
  ...props
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_2__/* .StyledVisualLabel */ .Om, {
    ...props,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)('components-base-control__label', className),
    children: children
  });
};
const BaseControl = Object.assign((0,_context__WEBPACK_IMPORTED_MODULE_5__/* .contextConnectWithoutRef */ .zS)(UnconnectedBaseControl, 'BaseControl'), {
  VisualLabel
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseControl);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/base-control/styles/base-control-styles.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gw: () => (/* binding */ StyledLabel),
/* harmony export */   Om: () => (/* binding */ StyledVisualLabel),
/* harmony export */   mO: () => (/* binding */ Wrapper),
/* harmony export */   mh: () => (/* binding */ StyledField),
/* harmony export */   te: () => (/* binding */ StyledHelp)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1__@types+react@18.3.16_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/font.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/box-sizing.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/base-label.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/colors-values.js");
/* harmony import */ var _utils_space__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/space.js");

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


const Wrapper = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("div",  true ? {
  target: "ej5x27r4"
} : 0)("font-family:", (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .font */ .g)('default.fontFamily'), ";font-size:", (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .font */ .g)('default.fontSize'), ";", _utils__WEBPACK_IMPORTED_MODULE_2__/* .boxSizingReset */ .r, ";" + ( true ? "" : 0));
const deprecatedMarginField = ({
  __nextHasNoMarginBottom = false
}) => {
  return !__nextHasNoMarginBottom && /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__/* .css */ .AH)("margin-bottom:", (0,_utils_space__WEBPACK_IMPORTED_MODULE_4__/* .space */ .x)(2), ";" + ( true ? "" : 0),  true ? "" : 0);
};
const StyledField = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("div",  true ? {
  target: "ej5x27r3"
} : 0)(deprecatedMarginField, " .components-panel__row &{margin-bottom:inherit;}" + ( true ? "" : 0));
const labelStyles = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__/* .css */ .AH)(_utils__WEBPACK_IMPORTED_MODULE_5__/* .baseLabelTypography */ .z, ";display:inline-block;margin-bottom:", (0,_utils_space__WEBPACK_IMPORTED_MODULE_4__/* .space */ .x)(2), ";padding:0;" + ( true ? "" : 0),  true ? "" : 0);
const StyledLabel = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("label",  true ? {
  target: "ej5x27r2"
} : 0)(labelStyles, ";" + ( true ? "" : 0));
var _ref =  true ? {
  name: "11yad0w",
  styles: "margin-bottom:revert"
} : 0;
const deprecatedMarginHelp = ({
  __nextHasNoMarginBottom = false
}) => {
  return !__nextHasNoMarginBottom && _ref;
};
const StyledHelp = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("p",  true ? {
  target: "ej5x27r1"
} : 0)("margin-top:", (0,_utils_space__WEBPACK_IMPORTED_MODULE_4__/* .space */ .x)(2), ";margin-bottom:0;font-size:", (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .font */ .g)('helpText.fontSize'), ";font-style:normal;color:", _utils__WEBPACK_IMPORTED_MODULE_6__/* .COLORS */ .l.gray[700], ";", deprecatedMarginHelp, ";" + ( true ? "" : 0));
const StyledVisualLabel = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("span",  true ? {
  target: "ej5x27r0"
} : 0)(labelStyles, ";" + ( true ? "" : 0));
//# sourceMappingURL=base-control-styles.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/base-label.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ baseLabelTypography)
/* harmony export */ });
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
/**
 * External dependencies
 */


// This is a very low-level mixin which you shouldn't have to use directly.
// Try to use BaseControl's StyledLabel or BaseControl.VisualLabel if you can.
const baseLabelTypography =  true ? {
  name: "9amh4a",
  styles: "font-size:11px;font-weight:500;line-height:1.4;text-transform:uppercase"
} : 0;
//# sourceMappingURL=base-label.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/box-sizing.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ boxSizingReset)
/* harmony export */ });
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
/**
 * External dependencies
 */

const boxSizingReset =  true ? {
  name: "kv6lnz",
  styles: "box-sizing:border-box;*,*::before,*::after{box-sizing:inherit;}"
} : 0;
//# sourceMappingURL=box-sizing.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/colors-values.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ COLORS)
/* harmony export */ });
/**
 * Internal dependencies
 */
const white = '#fff';

// Matches the grays in @wordpress/base-styles
const GRAY = {
  900: '#1e1e1e',
  800: '#2f2f2f',
  /** Meets 4.6:1 text contrast against white. */
  700: '#757575',
  /** Meets 3:1 UI or large text contrast against white. */
  600: '#949494',
  400: '#ccc',
  /** Used for most borders. */
  300: '#ddd',
  /** Used sparingly for light borders. */
  200: '#e0e0e0',
  /** Used for light gray backgrounds. */
  100: '#f0f0f0'
};

// Matches @wordpress/base-styles
const ALERT = {
  yellow: '#f0b849',
  red: '#d94f4f',
  green: '#4ab866'
};

// Should match packages/components/src/utils/theme-variables.scss
const THEME = {
  accent: `var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9))`,
  accentDarker10: `var(--wp-components-color-accent-darker-10, var(--wp-admin-theme-color-darker-10, #2145e6))`,
  accentDarker20: `var(--wp-components-color-accent-darker-20, var(--wp-admin-theme-color-darker-20, #183ad6))`,
  /** Used when placing text on the accent color. */
  accentInverted: `var(--wp-components-color-accent-inverted, ${white})`,
  background: `var(--wp-components-color-background, ${white})`,
  foreground: `var(--wp-components-color-foreground, ${GRAY[900]})`,
  /** Used when placing text on the foreground color. */
  foregroundInverted: `var(--wp-components-color-foreground-inverted, ${white})`,
  gray: {
    /** @deprecated Use `COLORS.theme.foreground` instead. */
    900: `var(--wp-components-color-foreground, ${GRAY[900]})`,
    800: `var(--wp-components-color-gray-800, ${GRAY[800]})`,
    700: `var(--wp-components-color-gray-700, ${GRAY[700]})`,
    600: `var(--wp-components-color-gray-600, ${GRAY[600]})`,
    400: `var(--wp-components-color-gray-400, ${GRAY[400]})`,
    300: `var(--wp-components-color-gray-300, ${GRAY[300]})`,
    200: `var(--wp-components-color-gray-200, ${GRAY[200]})`,
    100: `var(--wp-components-color-gray-100, ${GRAY[100]})`
  }
};
const UI = {
  background: THEME.background,
  backgroundDisabled: THEME.gray[100],
  border: THEME.gray[600],
  borderHover: THEME.gray[700],
  borderFocus: THEME.accent,
  borderDisabled: THEME.gray[400],
  textDisabled: THEME.gray[600],
  // Matches @wordpress/base-styles
  darkGrayPlaceholder: `color-mix(in srgb, ${THEME.foreground}, transparent 38%)`,
  lightGrayPlaceholder: `color-mix(in srgb, ${THEME.background}, transparent 35%)`
};
const COLORS = Object.freeze({
  /**
   * The main gray color object.
   *
   * @deprecated Use semantic aliases in `COLORS.ui` or theme-ready variables in `COLORS.theme.gray`.
   */
  gray: GRAY,
  // TODO: Stop exporting this when everything is migrated to `theme` or `ui`
  white,
  alert: ALERT,
  /**
   * Theme-ready variables with fallbacks.
   *
   * Prefer semantic aliases in `COLORS.ui` when applicable.
   */
  theme: THEME,
  /**
   * Semantic aliases (prefer these over raw variables when applicable).
   */
  ui: UI
});
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (COLORS)));
//# sourceMappingURL=colors-values.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/font.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: () => (/* binding */ font)
});

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/font-values.js
/* harmony default export */ const font_values = ({
  'default.fontFamily': "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
  'default.fontSize': '13px',
  'helpText.fontSize': '12px',
  mobileTextMinFontSize: '16px'
});
//# sourceMappingURL=font-values.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/font.js
/**
 * Internal dependencies
 */


/**
 *
 * @param {keyof FONT} value Path of value from `FONT`
 * @return {string} Font rule value
 */
function font(value) {
  var _FONT$value;
  return (_FONT$value = font_values[value]) !== null && _FONT$value !== void 0 ? _FONT$value : '';
}
//# sourceMappingURL=font.js.map

/***/ })

}]);