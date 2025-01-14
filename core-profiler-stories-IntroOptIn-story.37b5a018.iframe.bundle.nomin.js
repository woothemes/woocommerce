"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[169],{

/***/ "../../node_modules/.pnpm/@automattic+interpolate-components@1.2.1_@types+react@18.3.16_react@18.3.1/node_modules/@automattic/interpolate-components/dist/esm/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ interpolate)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@automattic+interpolate-components@1.2.1_@types+react@18.3.16_react@18.3.1/node_modules/@automattic/interpolate-components/dist/esm/tokenize.js
function identifyToken(item) {
  // {{/example}}
  if (item.startsWith('{{/')) {
    return {
      type: 'componentClose',
      value: item.replace(/\W/g, '')
    };
  } // {{example /}}


  if (item.endsWith('/}}')) {
    return {
      type: 'componentSelfClosing',
      value: item.replace(/\W/g, '')
    };
  } // {{example}}


  if (item.startsWith('{{')) {
    return {
      type: 'componentOpen',
      value: item.replace(/\W/g, '')
    };
  }

  return {
    type: 'string',
    value: item
  };
}

function tokenize(mixedString) {
  const tokenStrings = mixedString.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g); // split to components and strings

  return tokenStrings.map(identifyToken);
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@automattic+interpolate-components@1.2.1_@types+react@18.3.16_react@18.3.1/node_modules/@automattic/interpolate-components/dist/esm/index.js



function getCloseIndex(openIndex, tokens) {
  const openToken = tokens[openIndex];
  let nestLevel = 0;

  for (let i = openIndex + 1; i < tokens.length; i++) {
    const token = tokens[i];

    if (token.value === openToken.value) {
      if (token.type === 'componentOpen') {
        nestLevel++;
        continue;
      }

      if (token.type === 'componentClose') {
        if (nestLevel === 0) {
          return i;
        }

        nestLevel--;
      }
    }
  } // if we get this far, there was no matching close token


  throw new Error('Missing closing component token `' + openToken.value + '`');
}

function buildChildren(tokens, components) {
  let children = [];
  let openComponent;
  let openIndex;

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (token.type === 'string') {
      children.push(token.value);
      continue;
    } // component node should at least be set


    if (components[token.value] === undefined) {
      throw new Error(`Invalid interpolation, missing component node: \`${token.value}\``);
    } // should be either ReactElement or null (both type "object"), all other types deprecated


    if (typeof components[token.value] !== 'object') {
      throw new Error(`Invalid interpolation, component node must be a ReactElement or null: \`${token.value}\``);
    } // we should never see a componentClose token in this loop


    if (token.type === 'componentClose') {
      throw new Error(`Missing opening component token: \`${token.value}\``);
    }

    if (token.type === 'componentOpen') {
      openComponent = components[token.value];
      openIndex = i;
      break;
    } // componentSelfClosing token


    children.push(components[token.value]);
    continue;
  }

  if (openComponent) {
    const closeIndex = getCloseIndex(openIndex, tokens);
    const grandChildTokens = tokens.slice(openIndex + 1, closeIndex);
    const grandChildren = buildChildren(grandChildTokens, components);
    const clonedOpenComponent = /*#__PURE__*/(0,react.cloneElement)(openComponent, {}, grandChildren);
    children.push(clonedOpenComponent);

    if (closeIndex < tokens.length - 1) {
      const siblingTokens = tokens.slice(closeIndex + 1);
      const siblings = buildChildren(siblingTokens, components);
      children = children.concat(siblings);
    }
  }

  children = children.filter(Boolean);

  if (children.length === 0) {
    return null;
  }

  if (children.length === 1) {
    return children[0];
  }

  return /*#__PURE__*/(0,react.createElement)(react.Fragment, null, ...children);
}

function interpolate(options) {
  const {
    mixedString,
    components,
    throwErrors
  } = options;

  if (!components) {
    return mixedString;
  }

  if (typeof components !== 'object') {
    if (throwErrors) {
      throw new Error(`Interpolation Error: unable to process \`${mixedString}\` because components is not an object`);
    }

    return mixedString;
  }

  const tokens = tokenize(mixedString);

  try {
    return buildChildren(tokens, components);
  } catch (error) {
    if (throwErrors) {
      throw new Error(`Interpolation Error: unable to process \`${mixedString}\` because of error \`${error.message}\``);
    }

    return mixedString;
  }
}

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/checkbox-control/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export CheckboxControl */
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-ref-effect/index.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+deprecated@4.0.1/node_modules/@wordpress/deprecated/build-module/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/reset.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/check.js");
/* harmony import */ var _base_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/base-control/index.js");
/* harmony import */ var _h_stack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/h-stack/component.js");
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




/**
 * Checkboxes allow the user to select one or more items from a set.
 *
 * ```jsx
 * import { CheckboxControl } from '@wordpress/components';
 * import { useState } from '@wordpress/element';
 *
 * const MyCheckboxControl = () => {
 *   const [ isChecked, setChecked ] = useState( true );
 *   return (
 *     <CheckboxControl
 *       label="Is author"
 *       help="Is the user a author or not?"
 *       checked={ isChecked }
 *       onChange={ setChecked }
 *     />
 *   );
 * };
 * ```
 */
function CheckboxControl(props) {
  const {
    __nextHasNoMarginBottom,
    label,
    className,
    heading,
    checked,
    indeterminate,
    help,
    id: idProp,
    onChange,
    ...additionalProps
  } = props;
  if (heading) {
    (0,_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('`heading` prop in `CheckboxControl`', {
      alternative: 'a separate element to implement a heading',
      since: '5.8'
    });
  }
  const [showCheckedIcon, setShowCheckedIcon] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [showIndeterminateIcon, setShowIndeterminateIcon] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);

  // Run the following callback every time the `ref` (and the additional
  // dependencies) change.
  const ref = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(node => {
    if (!node) {
      return;
    }

    // It cannot be set using an HTML attribute.
    node.indeterminate = !!indeterminate;
    setShowCheckedIcon(node.matches(':checked'));
    setShowIndeterminateIcon(node.matches(':indeterminate'));
  }, [checked, indeterminate]);
  const id = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(CheckboxControl, 'inspector-checkbox-control', idProp);
  const onChangeValue = event => onChange(event.target.checked);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_base_control__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay, {
    __nextHasNoMarginBottom: __nextHasNoMarginBottom,
    label: heading,
    id: id,
    help: help && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
      className: "components-checkbox-control__help",
      children: help
    }),
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)('components-checkbox-control', className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_h_stack__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      spacing: 0,
      justify: "start",
      alignment: "top",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        className: "components-checkbox-control__input-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
          ref: ref,
          id: id,
          className: "components-checkbox-control__input",
          type: "checkbox",
          value: "1",
          onChange: onChangeValue,
          checked: checked,
          "aria-describedby": !!help ? id + '__help' : undefined,
          ...additionalProps
        }), showIndeterminateIcon ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
          icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,
          className: "components-checkbox-control__indeterminate",
          role: "presentation"
        }) : null, showCheckedIcon ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
          icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,
          className: "components-checkbox-control__checked",
          role: "presentation"
        }) : null]
      }), label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
        className: "components-checkbox-control__label",
        htmlFor: id,
        children: label
      })]
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckboxControl);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/values.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GB: () => (/* binding */ ensureNumber),
/* harmony export */   J5: () => (/* binding */ isValueDefined),
/* harmony export */   r6: () => (/* binding */ isValueEmpty),
/* harmony export */   vD: () => (/* binding */ getDefinedValue)
/* harmony export */ });
/* unused harmony export stringToNumber */
/* eslint-disable jsdoc/valid-types */
/**
 * Determines if a value is null or undefined.
 *
 * @template T
 *
 * @param {T} value The value to check.
 * @return {value is Exclude<T, null | undefined>} Whether value is not null or undefined.
 */
function isValueDefined(value) {
  return value !== undefined && value !== null;
}
/* eslint-enable jsdoc/valid-types */

/* eslint-disable jsdoc/valid-types */
/**
 * Determines if a value is empty, null, or undefined.
 *
 * @param {string | number | null | undefined} value The value to check.
 * @return {value is ("" | null | undefined)} Whether value is empty.
 */
function isValueEmpty(value) {
  const isEmptyString = value === '';
  return !isValueDefined(value) || isEmptyString;
}
/* eslint-enable jsdoc/valid-types */

/**
 * Get the first defined/non-null value from an array.
 *
 * @template T
 *
 * @param {Array<T | null | undefined>} values        Values to derive from.
 * @param {T}                           fallbackValue Fallback value if there are no defined values.
 * @return {T} A defined value or the fallback value.
 */
function getDefinedValue(values = [], fallbackValue) {
  var _values$find;
  return (_values$find = values.find(isValueDefined)) !== null && _values$find !== void 0 ? _values$find : fallbackValue;
}

/**
 * Converts a string to a number.
 *
 * @param {string} value
 * @return {number} String as a number.
 */
const stringToNumber = value => {
  return parseFloat(value);
};

/**
 * Regardless of the input being a string or a number, returns a number.
 *
 * Returns `undefined` in case the string is `undefined` or not a valid numeric value.
 *
 * @param {string | number} value
 * @return {number} The parsed number.
 */
const ensureNumber = value => {
  return typeof value === 'string' ? stringToNumber(value) : value;
};
//# sourceMappingURL=values.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-ref-effect/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useRefEffect)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Effect-like ref callback. Just like with `useEffect`, this allows you to
 * return a cleanup function to be run if the ref changes or one of the
 * dependencies changes. The ref is provided as an argument to the callback
 * functions. The main difference between this and `useEffect` is that
 * the `useEffect` callback is not called when the ref changes, but this is.
 * Pass the returned ref callback as the component's ref and merge multiple refs
 * with `useMergeRefs`.
 *
 * It's worth noting that if the dependencies array is empty, there's not
 * strictly a need to clean up event handlers for example, because the node is
 * to be removed. It *is* necessary if you add dependencies because the ref
 * callback will be called multiple times for the same node.
 *
 * @param callback     Callback with ref as argument.
 * @param dependencies Dependencies of the callback.
 *
 * @return Ref callback.
 */
function useRefEffect(callback, dependencies) {
  const cleanup = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(node => {
    if (node) {
      cleanup.current = callback(node);
    } else if (cleanup.current) {
      cleanup.current();
    }
  }, dependencies);
}
//# sourceMappingURL=index.js.map

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

/***/ "../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/check.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@3.4.1/node_modules/@wordpress/primitives/build-module/svg/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * WordPress dependencies
 */


const check = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .SVG */ .t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .Path */ .wA, {
    d: "M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (check);
//# sourceMappingURL=check.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/reset.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@3.4.1/node_modules/@wordpress/primitives/build-module/svg/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * WordPress dependencies
 */


const reset = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .SVG */ .t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .Path */ .wA, {
    d: "M7 11.5h10V13H7z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reset);
//# sourceMappingURL=reset.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+primitives@3.4.1/node_modules/@wordpress/primitives/build-module/svg/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t4: () => (/* binding */ SVG),
/* harmony export */   wA: () => (/* binding */ Path)
/* harmony export */ });
/* unused harmony exports Circle, G, Polygon, Rect, Defs, RadialGradient, LinearGradient, Stop */
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/** @typedef {{isPressed?: boolean} & import('react').ComponentPropsWithoutRef<'svg'>} SVGProps */

/**
 * @param {import('react').ComponentPropsWithoutRef<'circle'>} props
 *
 * @return {JSX.Element} Circle component
 */

const Circle = props => createElement('circle', props);
/**
 * @param {import('react').ComponentPropsWithoutRef<'g'>} props
 *
 * @return {JSX.Element} G component
 */

const G = props => createElement('g', props);
/**
 * @param {import('react').ComponentPropsWithoutRef<'path'>} props
 *
 * @return {JSX.Element} Path component
 */

const Path = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)('path', props);
/**
 * @param {import('react').ComponentPropsWithoutRef<'polygon'>} props
 *
 * @return {JSX.Element} Polygon component
 */

const Polygon = props => createElement('polygon', props);
/**
 * @param {import('react').ComponentPropsWithoutRef<'rect'>} props
 *
 * @return {JSX.Element} Rect component
 */

const Rect = props => createElement('rect', props);
/**
 * @param {import('react').ComponentPropsWithoutRef<'defs'>} props
 *
 * @return {JSX.Element} Defs component
 */

const Defs = props => createElement('defs', props);
/**
 * @param {import('react').ComponentPropsWithoutRef<'radialGradient'>} props
 *
 * @return {JSX.Element} RadialGradient component
 */

const RadialGradient = props => createElement('radialGradient', props);
/**
 * @param {import('react').ComponentPropsWithoutRef<'linearGradient'>} props
 *
 * @return {JSX.Element} LinearGradient component
 */

const LinearGradient = props => createElement('linearGradient', props);
/**
 * @param {import('react').ComponentPropsWithoutRef<'stop'>} props
 *
 * @return {JSX.Element} Stop component
 */

const Stop = props => createElement('stop', props);
/**
 *
 * @param {SVGProps} props isPressed indicates whether the SVG should appear as pressed.
 *                         Other props will be passed through to svg component.
 *
 * @return {JSX.Element} Stop component
 */

const SVG = _ref => {
  let {
    className,
    isPressed,
    ...props
  } = _ref;
  const appliedProps = { ...props,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, {
      'is-pressed': isPressed
    }) || undefined,
    'aria-hidden': true,
    focusable: false
  }; // Disable reason: We need to have a way to render HTML tag for web.
  // eslint-disable-next-line react/forbid-elements

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", appliedProps);
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../plugins/woocommerce/client/admin/client/utils/admin-settings.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Qk: () => (/* binding */ getAdminSetting),
/* harmony export */   ad: () => (/* binding */ isNewBranding)
/* harmony export */ });
/* unused harmony exports ADMIN_URL, COUNTRIES, CURRENCY, LOCALE, SITE_TITLE, WC_ASSET_URL, ORDER_STATUSES, setAdminSetting */
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./setting.mock.js");




/**
 * External dependencies
 */



// Remove mutable data from settings object to prevent access. Data stores should be used instead.
var mutableSources = ['wcAdminSettings', 'preloadSettings'];
var adminSettings = (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_5__/* .getSetting */ .P)('admin', {});
var ADMIN_SETTINGS_SOURCE = Object.keys(adminSettings).reduce(function (source, key) {
  if (!mutableSources.includes(key)) {
    source[key] = adminSettings[key];
  }
  return source;
}, {});

/**
 * Retrieves a setting value from the setting state.
 *
 * @param {string}   name                    The identifier for the setting.
 * @param {*}        [fallback=false]        The value to use as a fallback
 *                                           if the setting is not in the
 *                                           state.
 * @param {Function} [filter=( val ) => val] A callback for filtering the
 *                                           value before it's returned.
 *                                           Receives both the found value
 *                                           (if it exists for the key) and
 *                                           the provided fallback arg.
 *
 * @return {*}  The value present in the settings state for the given
 *                   name.
 */
function getAdminSetting(name) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var filter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (val) {
    return val;
  };
  if (mutableSources.includes(name)) {
    throw new Error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Mutable settings should be accessed via data store.', 'woocommerce'));
  }
  var value = ADMIN_SETTINGS_SOURCE.hasOwnProperty(name) ? ADMIN_SETTINGS_SOURCE[name] : fallback;
  return filter(value, fallback);
}
var ADMIN_URL = (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_5__/* .getSetting */ .P)('adminUrl');
var COUNTRIES = (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_5__/* .getSetting */ .P)('countries');
var CURRENCY = (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_5__/* .getSetting */ .P)('currency');
var LOCALE = (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_5__/* .getSetting */ .P)('locale');
var SITE_TITLE = (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_5__/* .getSetting */ .P)('siteTitle');
var WC_ASSET_URL = (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_5__/* .getSetting */ .P)('wcAssetUrl');
var ORDER_STATUSES = getAdminSetting('orderStatuses');

/**
 * Sets a value to a property on the settings state.
 *
 * NOTE: This feature is to be removed in favour of data stores when a full migration
 * is complete.
 *
 * @deprecated
 *
 * @param {string}   name                    The setting property key for the
 *                                           setting being mutated.
 * @param {*}        value                   The value to set.
 * @param {Function} [filter=( val ) => val] Allows for providing a callback
 *                                           to sanitize the setting (eg.
 *                                           ensure it's a number)
 */
function setAdminSetting(name, value) {
  var filter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (val) {
    return val;
  };
  if (mutableSources.includes(name)) {
    throw new Error(__('Mutable settings should be mutated via data store.', 'woocommerce'));
  }
  ADMIN_SETTINGS_SOURCE[name] = filter(value);
}

/**
 * Returns whether the new branding is enabled
 *
 * @return {boolean} Whether branding is enabled
 */
var isNewBranding = function isNewBranding() {
  var _experimentalFlags$is;
  var experimentalFlags = adminSettings.__experimentalFlags || {};
  return (_experimentalFlags$is = experimentalFlags.isNewBranding) !== null && _experimentalFlags$is !== void 0 ? _experimentalFlags$is : false;
};

/***/ }),

/***/ "./setting.mock.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ getSetting)
/* harmony export */ });
// @woocommerce/settings mocked module for storybook webpack resolve.alias config
// see ./webpack.config.js

function getSetting() {
  return {};
}

/***/ }),

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

/***/ "../../plugins/woocommerce/client/admin/client/core-profiler/components/heading/heading.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ Heading)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


var Heading = function Heading(_ref) {
  var className = _ref.className,
    title = _ref.title,
    subTitle = _ref.subTitle;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('woocommerce-profiler-heading', className),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
      className: "woocommerce-profiler-heading__title",
      children: title
    }), subTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
      className: "woocommerce-profiler-heading__subtitle",
      children: subTitle
    })]
  });
};
try {
    // @ts-ignore
    Heading.displayName = "Heading";
    // @ts-ignore
    Heading.__docgenInfo = { "description": "", "displayName": "Heading", "props": { "title": { "defaultValue": null, "description": "", "name": "title", "required": true, "type": { "name": "string | Element" } }, "subTitle": { "defaultValue": null, "description": "", "name": "subTitle", "required": false, "type": { "name": "string | Element" } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../plugins/woocommerce/client/admin/client/core-profiler/components/heading/heading.tsx#Heading"] = { docgenInfo: Heading.__docgenInfo, name: "Heading", path: "../../plugins/woocommerce/client/admin/client/core-profiler/components/heading/heading.tsx#Heading" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../plugins/woocommerce/client/admin/client/core-profiler/components/navigation/navigation.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  V: () => (/* binding */ Navigation)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
// EXTERNAL MODULE: ../../plugins/woocommerce/client/admin/client/utils/admin-settings.js
var admin_settings = __webpack_require__("../../plugins/woocommerce/client/admin/client/utils/admin-settings.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../plugins/woocommerce/client/admin/client/core-profiler/components/navigation/woologo.tsx
/**
 * Internal dependencies
 */


/* eslint-disable max-len */

var WooLogo = function WooLogo() {
  return (0,admin_settings/* isNewBranding */.ad)() ? /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
    width: "91",
    height: "24",
    viewBox: "0 0 91 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "wc-icon wc-icon__woo-logo new-branding",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M79.0537 0C72.2755 0 67.0874 5.10851 67.0874 12C67.0874 18.8915 72.2755 24 79.0537 24C85.832 24 91.0002 18.8915 91.0002 12C91.0002 5.10851 85.7923 0 79.0537 0ZM79.0537 16.6277C76.5094 16.6277 74.7602 14.6644 74.7602 12C74.7602 9.33555 76.4895 7.37228 79.0537 7.37228C81.6179 7.37228 83.3473 9.33555 83.3473 12C83.3473 14.6644 81.5981 16.6277 79.0537 16.6277Z",
      fill: "#873DFF"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M53.7285 0C46.9503 0 41.7622 5.10851 41.7622 12C41.7622 18.8915 46.9701 24 53.7285 24C60.4869 24 65.675 18.8915 65.675 12C65.675 5.10851 60.4671 0 53.7285 0ZM53.7285 16.6277C51.1842 16.6277 49.435 14.6644 49.435 12C49.435 9.33555 51.1643 7.37228 53.7285 7.37228C56.2928 7.37228 58.0221 9.33555 58.0221 12C58.0221 14.6644 56.2928 16.6277 53.7285 16.6277Z",
      fill: "#873DFF"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M11.688 24C14.3715 24 16.5183 22.6577 18.1483 19.5726L21.7461 12.7813V18.5509C21.7461 21.9365 23.9327 24 27.3317 24C29.9556 24 31.8837 22.798 33.792 19.5726L42.1207 5.44908C43.9494 2.36394 42.6574 0 38.6421 0C36.4953 0 35.1039 0.721201 33.8516 3.08514L28.107 13.9232V4.28714C28.107 1.40234 26.7553 0 24.2308 0C22.2629 0 20.6926 0.861435 19.4602 3.26544L14.0535 13.9032V4.38731C14.0535 1.30217 12.8012 0 9.74004 0H3.53822C1.19266 0 0 1.10184 0 3.14524C0 5.18864 1.23241 6.33054 3.53822 6.33054H6.08255V18.5309C6.10243 21.9365 8.3486 24 11.688 24Z",
      fill: "#873DFF"
    })]
  }) : /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
    preserveAspectRatio: "xMidYMid",
    version: "1.1",
    viewBox: "0 0 256 153",
    xmlns: "http://www.w3.org/2000/svg",
    className: "wc-icon wc-icon__woo-logo",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "m23.759 0h208.38c13.187 0 23.863 10.675 23.863 23.863v79.542c0 13.187-10.675 23.863-23.863 23.863h-74.727l10.257 25.118-45.109-25.118h-98.695c-13.187 0-23.863-10.675-23.863-23.863v-79.542c-0.10466-13.083 10.571-23.863 23.758-23.863z",
      fill: "#7f54b3"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "m14.578 21.75c1.4569-1.9772 3.6423-3.0179 6.5561-3.226 5.3073-0.41626 8.3252 2.0813 9.0537 7.4927 3.226 21.75 6.7642 40.169 10.511 55.259l22.79-43.395c2.0813-3.9545 4.6829-6.0358 7.8049-6.2439 4.5789-0.3122 7.3886 2.6016 8.5333 8.7415 2.6016 13.841 5.9317 25.6 9.8862 35.59 2.7057-26.433 7.2846-45.476 13.737-57.236 1.561-2.9138 3.8504-4.3707 6.8683-4.5789 2.3935-0.20813 4.5789 0.52033 6.5561 2.0813 1.9772 1.561 3.0179 3.5382 3.226 5.9317 0.10406 1.8732-0.20813 3.4341-1.0407 4.9951-4.0585 7.4927-7.3886 20.085-10.094 37.567-2.6016 16.963-3.5382 30.179-2.9138 39.649 0.20813 2.6016-0.20813 4.8911-1.2488 6.8683-1.2488 2.2894-3.122 3.5382-5.5154 3.7463-2.7057 0.20813-5.5154-1.0406-8.2211-3.8504-9.678-9.8862-17.379-24.663-22.998-44.332-6.7642 13.32-11.759 23.311-14.985 29.971-6.1398 11.759-11.343 17.795-15.714 18.107-2.8098 0.20813-5.2033-2.1854-7.2846-7.1805-5.3073-13.633-11.031-39.961-17.171-78.985-0.41626-2.7057 0.20813-5.0992 1.665-6.9724zm223.64 16.338c-3.7463-6.5561-9.2618-10.511-16.65-12.072-1.9772-0.41626-3.8504-0.62439-5.6195-0.62439-9.9902 0-18.107 5.2033-24.455 15.61-5.4114 8.8455-8.1171 18.628-8.1171 29.346 0 8.013 1.665 14.881 4.9951 20.605 3.7463 6.5561 9.2618 10.511 16.65 12.072 1.9772 0.41626 3.8504 0.62439 5.6195 0.62439 10.094 0 18.211-5.2033 24.455-15.61 5.4114-8.9496 8.1171-18.732 8.1171-29.45 0.10406-8.1171-1.665-14.881-4.9951-20.501zm-13.112 28.826c-1.4569 6.8683-4.0585 11.967-7.9089 15.402-3.0179 2.7057-5.8276 3.8504-8.4293 3.3301-2.4976-0.52033-4.5789-2.7057-6.1398-6.7642-1.2488-3.226-1.8732-6.452-1.8732-9.4699 0-2.6016 0.20813-5.2033 0.72846-7.5967 0.93659-4.2667 2.7057-8.4293 5.5154-12.384 3.4341-5.0992 7.0764-7.1805 10.823-6.452 2.4976 0.52033 4.5789 2.7057 6.1398 6.7642 1.2488 3.226 1.8732 6.452 1.8732 9.4699 0 2.7057-0.20813 5.3073-0.72846 7.7008zm-52.033-28.826c-3.7463-6.5561-9.3659-10.511-16.65-12.072-1.9772-0.41626-3.8504-0.62439-5.6195-0.62439-9.9902 0-18.107 5.2033-24.455 15.61-5.4114 8.8455-8.1171 18.628-8.1171 29.346 0 8.013 1.665 14.881 4.9951 20.605 3.7463 6.5561 9.2618 10.511 16.65 12.072 1.9772 0.41626 3.8504 0.62439 5.6195 0.62439 10.094 0 18.211-5.2033 24.455-15.61 5.4114-8.9496 8.1171-18.732 8.1171-29.45 0-8.1171-1.665-14.881-4.9951-20.501zm-13.216 28.826c-1.4569 6.8683-4.0585 11.967-7.9089 15.402-3.0179 2.7057-5.8276 3.8504-8.4293 3.3301-2.4976-0.52033-4.5789-2.7057-6.1398-6.7642-1.2488-3.226-1.8732-6.452-1.8732-9.4699 0-2.6016 0.20813-5.2033 0.72846-7.5967 0.93658-4.2667 2.7057-8.4293 5.5154-12.384 3.4341-5.0992 7.0764-7.1805 10.823-6.452 2.4976 0.52033 4.5789 2.7057 6.1398 6.7642 1.2488 3.226 1.8732 6.452 1.8732 9.4699 0.10406 2.7057-0.20813 5.3073-0.72846 7.7008z",
      fill: "#fff"
    })]
  });
};
/* eslint-enable max-len */

/* harmony default export */ const woologo = (WooLogo);
;// CONCATENATED MODULE: ../../plugins/woocommerce/client/admin/client/core-profiler/components/progress-bar/progress-bar.tsx
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



var ProgressBar = function ProgressBar(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$percent = _ref.percent,
    percent = _ref$percent === void 0 ? 0 : _ref$percent,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#674399' : _ref$color,
    _ref$bgcolor = _ref.bgcolor,
    bgcolor = _ref$bgcolor === void 0 ? 'var(--wp-admin-theme-color)' : _ref$bgcolor;
  var containerStyles = {
    backgroundColor: bgcolor
  };
  var fillerStyles = {
    backgroundColor: color,
    width: "".concat(percent, "%"),
    display: percent === 0 ? 'none' : 'inherit'
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "woocommerce-profiler-progress-bar ".concat(className),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "woocommerce-profiler-progress-bar__container",
      style: containerStyles,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "woocommerce-profiler-progress-bar__filler",
        style: fillerStyles
      })
    })
  });
};
/* harmony default export */ const progress_bar = (ProgressBar);
try {
    // @ts-ignore
    progressbar.displayName = "progressbar";
    // @ts-ignore
    progressbar.__docgenInfo = { "description": "", "displayName": "progressbar", "props": { "className": { "defaultValue": { value: "" }, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "percent": { "defaultValue": { value: "0" }, "description": "", "name": "percent", "required": false, "type": { "name": "number" } }, "color": { "defaultValue": { value: "#674399" }, "description": "", "name": "color", "required": false, "type": { "name": "string" } }, "bgcolor": { "defaultValue": { value: "var(--wp-admin-theme-color)" }, "description": "", "name": "bgcolor", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../plugins/woocommerce/client/admin/client/core-profiler/components/progress-bar/progress-bar.tsx#progressbar"] = { docgenInfo: progressbar.__docgenInfo, name: "progressbar", path: "../../plugins/woocommerce/client/admin/client/core-profiler/components/progress-bar/progress-bar.tsx#progressbar" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ../../plugins/woocommerce/client/admin/client/core-profiler/components/navigation/navigation.tsx
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




var Navigation = function Navigation(_ref) {
  var _ref$percentage = _ref.percentage,
    percentage = _ref$percentage === void 0 ? 0 : _ref$percentage,
    onSkip = _ref.onSkip,
    _ref$skipText = _ref.skipText,
    skipText = _ref$skipText === void 0 ? (0,build_module.__)('Skip this step', 'woocommerce') : _ref$skipText,
    _ref$showProgress = _ref.showProgress,
    showProgress = _ref$showProgress === void 0 ? true : _ref$showProgress,
    _ref$showLogo = _ref.showLogo,
    showLogo = _ref$showLogo === void 0 ? true : _ref$showLogo,
    _ref$classNames = _ref.classNames,
    classNames = _ref$classNames === void 0 ? {} : _ref$classNames,
    _ref$progressBarColor = _ref.progressBarColor,
    progressBarColor = _ref$progressBarColor === void 0 ? 'var(--wp-admin-theme-color)' : _ref$progressBarColor;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: (0,clsx/* default */.A)('woocommerce-profiler-navigation-container', classNames),
    children: [showProgress && /*#__PURE__*/(0,jsx_runtime.jsx)(progress_bar, {
      className: 'progress-bar',
      percent: percentage,
      color: progressBarColor,
      bgcolor: 'transparent'
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "woocommerce-profiler-navigation",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "woocommerce-profiler-navigation-col-left",
        children: showLogo && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "woologo",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(woologo, {})
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "woocommerce-profiler-navigation-col-right",
        children: typeof onSkip === 'function' && /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
          onClick: onSkip,
          className: (0,clsx/* default */.A)('woocommerce-profiler-navigation-skip-link', classNames.mobile ? 'mobile' : ''),
          isLink: true,
          children: skipText
        })
      })]
    })]
  });
};
try {
    // @ts-ignore
    Navigation.displayName = "Navigation";
    // @ts-ignore
    Navigation.__docgenInfo = { "description": "", "displayName": "Navigation", "props": { "onSkip": { "defaultValue": null, "description": "", "name": "onSkip", "required": false, "type": { "name": "(() => void)" } }, "percentage": { "defaultValue": { value: "0" }, "description": "", "name": "percentage", "required": false, "type": { "name": "number" } }, "previous": { "defaultValue": null, "description": "", "name": "previous", "required": false, "type": { "name": "string" } }, "showProgress": { "defaultValue": { value: "true" }, "description": "", "name": "showProgress", "required": false, "type": { "name": "boolean" } }, "showLogo": { "defaultValue": { value: "true" }, "description": "", "name": "showLogo", "required": false, "type": { "name": "boolean" } }, "classNames": { "defaultValue": { value: "{}" }, "description": "", "name": "classNames", "required": false, "type": { "name": "{ mobile?: boolean; }" } }, "skipText": { "defaultValue": { value: "__( 'Skip this step', 'woocommerce' )" }, "description": "", "name": "skipText", "required": false, "type": { "name": "string" } }, "progressBarColor": { "defaultValue": { value: "var(--wp-admin-theme-color)" }, "description": "", "name": "progressBarColor", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../plugins/woocommerce/client/admin/client/core-profiler/components/navigation/navigation.tsx#Navigation"] = { docgenInfo: Navigation.__docgenInfo, name: "Navigation", path: "../../plugins/woocommerce/client/admin/client/core-profiler/components/navigation/navigation.tsx#Navigation" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../plugins/woocommerce/client/admin/client/core-profiler/stories/WithSetupWizardLayout.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ WithSetupWizardLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");

var WithSetupWizardLayout = function WithSetupWizardLayout(Story) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "woocommerce-profile-wizard__body woocommerce-admin-full-screen",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story, {})
  });
};
try {
    // @ts-ignore
    WithSetupWizardLayout.displayName = "WithSetupWizardLayout";
    // @ts-ignore
    WithSetupWizardLayout.__docgenInfo = { "description": "", "displayName": "WithSetupWizardLayout", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../plugins/woocommerce/client/admin/client/core-profiler/stories/WithSetupWizardLayout.tsx#WithSetupWizardLayout"] = { docgenInfo: WithSetupWizardLayout.__docgenInfo, name: "WithSetupWizardLayout", path: "../../plugins/woocommerce/client/admin/client/core-profiler/stories/WithSetupWizardLayout.tsx#WithSetupWizardLayout" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../plugins/woocommerce/client/admin/client/core-profiler/stories/IntroOptIn.story.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Basic: () => (/* binding */ Basic),
  "default": () => (/* binding */ IntroOptIn_story)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/checkbox-control/index.js
var checkbox_control = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/checkbox-control/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@automattic+interpolate-components@1.2.1_@types+react@18.3.16_react@18.3.1/node_modules/@automattic/interpolate-components/dist/esm/index.js + 1 modules
var esm = __webpack_require__("../../node_modules/.pnpm/@automattic+interpolate-components@1.2.1_@types+react@18.3.16_react@18.3.1/node_modules/@automattic/interpolate-components/dist/esm/index.js");
// EXTERNAL MODULE: ../../packages/js/components/src/link/index.tsx
var src_link = __webpack_require__("../../packages/js/components/src/link/index.tsx");
// EXTERNAL MODULE: ../../plugins/woocommerce/client/admin/client/core-profiler/components/heading/heading.tsx
var heading = __webpack_require__("../../plugins/woocommerce/client/admin/client/core-profiler/components/heading/heading.tsx");
// EXTERNAL MODULE: ../../plugins/woocommerce/client/admin/client/core-profiler/components/navigation/navigation.tsx + 2 modules
var navigation = __webpack_require__("../../plugins/woocommerce/client/admin/client/core-profiler/components/navigation/navigation.tsx");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../plugins/woocommerce/client/admin/client/core-profiler/pages/IntroOptIn.tsx

/**
 * External dependencies
 */






/**
 * Internal dependencies
 */




var IntroOptIn = function IntroOptIn(_ref) {
  var _context$userProfile, _context$userProfile2, _context$coreProfiler;
  var sendEvent = _ref.sendEvent,
    navigationProgress = _ref.navigationProgress,
    context = _ref.context;
  var hasCompletedIntroOptInPreviously = ((_context$userProfile = context.userProfile) === null || _context$userProfile === void 0 ? void 0 : _context$userProfile.completed) || ((_context$userProfile2 = context.userProfile) === null || _context$userProfile2 === void 0 ? void 0 : _context$userProfile2.skipped) || ((_context$coreProfiler = context.coreProfilerCompletedSteps) === null || _context$coreProfiler === void 0 ? void 0 : _context$coreProfiler['intro-opt-in']);
  var optInCheckboxInitialStatus = hasCompletedIntroOptInPreviously && context.optInDataSharing || !hasCompletedIntroOptInPreviously;
  var _useState = (0,react.useState)(optInCheckboxInitialStatus),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    iOptInDataSharing = _useState2[0],
    setIsOptInDataSharing = _useState2[1];

  // we want the checkbox to be checked if
  // 1. the user has previously completed the profiler and opted in
  //  1a. the user has completed the intro-opt-in step previously and opted in
  // 2. the user has not previously completed the profiler
  // conversely, the checkbox should be unchecked if
  // 1. the user has previously completed the profiler and opted out
  //  1a. the user has completed the intro-opt-in step previously and opted out
  // a user has completed the profiler if context.userProfile.completed is true or
  // context.userProfile.skipped is true

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "woocommerce-profiler-intro-opt-in",
    "data-testid": "core-profiler-intro-opt-in-screen",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(navigation/* Navigation */.V, {
      percentage: navigationProgress
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "woocommerce-profiler-page__content woocommerce-profiler-intro-opt-in__content",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "woocommerce-profiler-welcome-image"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(heading/* Heading */.D, {
        title: (0,build_module.__)('Welcome to Woo!', 'woocommerce'),
        subTitle: (0,esm/* default */.A)({
          mixedString: (0,build_module.__)('It’s great to have you here with us! We’ll be guiding you through the setup process – first, answer a few questions to tailor your experience.', 'woocommerce'),
          components: {
            br: /*#__PURE__*/(0,jsx_runtime.jsx)("br", {})
          }
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
        className: "woocommerce-profiler-setup-store__button",
        variant: "primary",
        onClick: function onClick() {
          return sendEvent({
            type: 'INTRO_COMPLETED',
            payload: {
              optInDataSharing: iOptInDataSharing
            }
          });
        },
        children: (0,build_module.__)('Set up my store', 'woocommerce')
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
        className: "woocommerce-profiler-setup-store__button",
        variant: "tertiary",
        onClick: function onClick() {
          return sendEvent({
            type: 'INTRO_SKIPPED',
            payload: {
              optInDataSharing: iOptInDataSharing
            }
          });
        },
        children: (0,build_module.__)('Skip guided setup', 'woocommerce')
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "woocommerce-profiler-intro-opt-in__footer",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_control/* default */.A, {
          className: "core-profiler__checkbox",
          label: (0,esm/* default */.A)({
            mixedString: (0,build_module.__)('I agree to share my data to tailor my store setup experience, get more relevant content, and help make WooCommerce better for everyone. You can opt out at any time in WooCommerce settings. {{link}}Learn more about usage tracking.{{/link}}', 'woocommerce'),
            components: {
              link: /*#__PURE__*/(0,jsx_runtime.jsx)(src_link/* Link */.N, {
                href: "https://woocommerce.com/usage-tracking?utm_medium=product",
                target: "_blank",
                type: "external"
              })
            }
          }),
          checked: iOptInDataSharing,
          onChange: setIsOptInDataSharing
        })
      })]
    })]
  });
};
try {
    // @ts-ignore
    IntroOptIn.displayName = "IntroOptIn";
    // @ts-ignore
    IntroOptIn.__docgenInfo = { "description": "", "displayName": "IntroOptIn", "props": { "sendEvent": { "defaultValue": null, "description": "", "name": "sendEvent", "required": true, "type": { "name": "(event: IntroOptInEvent) => void" } }, "navigationProgress": { "defaultValue": null, "description": "", "name": "navigationProgress", "required": true, "type": { "name": "number" } }, "context": { "defaultValue": null, "description": "", "name": "context", "required": true, "type": { "name": "Pick<CoreProfilerStateMachineContext, \"userProfile\" | \"optInDataSharing\" | \"coreProfilerCompletedSteps\">" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../plugins/woocommerce/client/admin/client/core-profiler/pages/IntroOptIn.tsx#IntroOptIn"] = { docgenInfo: IntroOptIn.__docgenInfo, name: "IntroOptIn", path: "../../plugins/woocommerce/client/admin/client/core-profiler/pages/IntroOptIn.tsx#IntroOptIn" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../../plugins/woocommerce/client/admin/client/core-profiler/stories/WithSetupWizardLayout.tsx
var WithSetupWizardLayout = __webpack_require__("../../plugins/woocommerce/client/admin/client/core-profiler/stories/WithSetupWizardLayout.tsx");
;// CONCATENATED MODULE: ../../plugins/woocommerce/client/admin/client/core-profiler/stories/IntroOptIn.story.tsx
/**
 * Internal dependencies
 */





var Basic = function Basic() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(IntroOptIn, {
    sendEvent: function sendEvent() {},
    navigationProgress: 20,
    context: {
      optInDataSharing: true,
      userProfile: {}
    }
  });
};
/* harmony default export */ const IntroOptIn_story = ({
  title: 'WooCommerce Admin/Core Profiler/IntroOptIn',
  component: IntroOptIn,
  decorators: [WithSetupWizardLayout/* WithSetupWizardLayout */.b]
});
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "() => <IntroOptIn sendEvent={() => {}} navigationProgress={20} context={{\n  optInDataSharing: true,\n  userProfile: {}\n} as CoreProfilerStateMachineContext} />",
      ...Basic.parameters?.docs?.source
    }
  }
};

/***/ })

}]);