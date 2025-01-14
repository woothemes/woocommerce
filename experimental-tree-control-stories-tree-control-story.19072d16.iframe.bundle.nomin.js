"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[6755],{

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

/***/ "../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ "../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ _toPropertyKey)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/typeof.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function _toPrimitive(input, hint) {
  if ((0,esm_typeof/* default */.A)(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,esm_typeof/* default */.A)(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return (0,esm_typeof/* default */.A)(key) === "symbol" ? key : String(key);
}

/***/ }),

/***/ "../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/typeof.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
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

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useMergeRefs)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * WordPress dependencies
 */


/* eslint-disable jsdoc/valid-types */
/**
 * @template T
 * @typedef {T extends import('react').Ref<infer R> ? R : never} TypeFromRef
 */
/* eslint-enable jsdoc/valid-types */

/**
 * @template T
 * @param {import('react').Ref<T>} ref
 * @param {T}                      value
 */
function assignRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref && ref.hasOwnProperty('current')) {
    /* eslint-disable jsdoc/no-undefined-types */
    /** @type {import('react').MutableRefObject<T>} */ref.current = value;
    /* eslint-enable jsdoc/no-undefined-types */
  }
}

/**
 * Merges refs into one ref callback.
 *
 * It also ensures that the merged ref callbacks are only called when they
 * change (as a result of a `useCallback` dependency update) OR when the ref
 * value changes, just as React does when passing a single ref callback to the
 * component.
 *
 * As expected, if you pass a new function on every render, the ref callback
 * will be called after every render.
 *
 * If you don't wish a ref callback to be called after every render, wrap it
 * with `useCallback( callback, dependencies )`. When a dependency changes, the
 * old ref callback will be called with `null` and the new ref callback will be
 * called with the same value.
 *
 * To make ref callbacks easier to use, you can also pass the result of
 * `useRefEffect`, which makes cleanup easier by allowing you to return a
 * cleanup function instead of handling `null`.
 *
 * It's also possible to _disable_ a ref (and its behaviour) by simply not
 * passing the ref.
 *
 * ```jsx
 * const ref = useRefEffect( ( node ) => {
 *   node.addEventListener( ... );
 *   return () => {
 *     node.removeEventListener( ... );
 *   };
 * }, [ ...dependencies ] );
 * const otherRef = useRef();
 * const mergedRefs useMergeRefs( [
 *   enabled && ref,
 *   otherRef,
 * ] );
 * return <div ref={ mergedRefs } />;
 * ```
 *
 * @template {import('react').Ref<any>} TRef
 * @param {Array<TRef>} refs The refs to be merged.
 *
 * @return {import('react').RefCallback<TypeFromRef<TRef>>} The merged ref callback.
 */
function useMergeRefs(refs) {
  const element = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const isAttached = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const didElementChange = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  /* eslint-disable jsdoc/no-undefined-types */
  /** @type {import('react').MutableRefObject<TRef[]>} */
  /* eslint-enable jsdoc/no-undefined-types */
  const previousRefs = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  const currentRefs = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(refs);

  // Update on render before the ref callback is called, so the ref callback
  // always has access to the current refs.
  currentRefs.current = refs;

  // If any of the refs change, call the previous ref with `null` and the new
  // ref with the node, except when the element changes in the same cycle, in
  // which case the ref callbacks will already have been called.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    if (didElementChange.current === false && isAttached.current === true) {
      refs.forEach((ref, index) => {
        const previousRef = previousRefs.current[index];
        if (ref !== previousRef) {
          assignRef(previousRef, null);
          assignRef(ref, element.current);
        }
      });
    }
    previousRefs.current = refs;
  }, refs);

  // No dependencies, must be reset after every render so ref callbacks are
  // correctly called after a ref change.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    didElementChange.current = false;
  });

  // There should be no dependencies so that `callback` is only called when
  // the node changes.
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(value => {
    // Update the element so it can be used when calling ref callbacks on a
    // dependency change.
    assignRef(element, value);
    didElementChange.current = true;
    isAttached.current = value !== null;

    // When an element changes, the current ref callback should be called
    // with the new element and the previous one with `null`.
    const refsToAssign = value ? currentRefs.current : previousRefs.current;

    // Update the latest refs.
    for (const ref of refsToAssign) {
      assignRef(ref, value);
    }
  }, []);
}
//# sourceMappingURL=index.js.map

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

/***/ "../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-down.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js");
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

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/advance-string-index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var charAt = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/string-multibyte.js").charAt);

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/get-substitution.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js");
var toObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-object.js");

var floor = Math.floor;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
// eslint-disable-next-line redos/no-vulnerable -- safe
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice(str, 0, position);
      case "'": return stringSlice(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.is-array.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var isArray = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-array.js");

// `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.name.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var DESCRIPTORS = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/descriptors.js");
var FUNCTION_NAME_EXISTS = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-name.js").EXISTS);
var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js");
var defineBuiltInAccessor = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/define-built-in-accessor.js");

var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineBuiltInAccessor(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.replace.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var apply = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-apply.js");
var call = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var fails = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js");
var anObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/an-object.js");
var isCallable = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-callable.js");
var isNullOrUndefined = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-null-or-undefined.js");
var toIntegerOrInfinity = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-integer-or-infinity.js");
var toLength = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/advance-string-index.js");
var getMethod = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/get-method.js");
var getSubstitution = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/get-substitution.js");
var regExpExec = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/regexp-exec-abstract.js");
var wellKnownSymbol = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/well-known-symbol.js");

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      var fullUnicode;
      if (global) {
        fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }

      var results = [];
      var result;
      while (true) {
        result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        var replacement;
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          replacement = toString(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }

      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),

/***/ "../../packages/js/components/src/experimental-tree-control/stories/tree-control.story.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CustomItemLabel: () => (/* binding */ CustomItemLabel),
  CustomItemLabelOnSearch: () => (/* binding */ CustomItemLabelOnSearch),
  ExpandOnFilter: () => (/* binding */ ExpandOnFilter),
  HighlightFirstMatchingItem: () => (/* binding */ HighlightFirstMatchingItem),
  SelectionMultiple: () => (/* binding */ SelectionMultiple),
  SelectionSingle: () => (/* binding */ SelectionSingle),
  SimpleTree: () => (/* binding */ SimpleTree),
  "default": () => (/* binding */ tree_control_story)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.some.js
var es_array_some = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.some.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.exec.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.constructor.js
var es_regexp_constructor = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.constructor.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.to-string.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.replace.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@automattic+interpolate-components@1.2.1_@types+react@18.3.16_react@18.3.1/node_modules/@automattic/interpolate-components/dist/esm/index.js + 1 modules
var esm = __webpack_require__("../../node_modules/.pnpm/@automattic+interpolate-components@1.2.1_@types+react@18.3.16_react@18.3.1/node_modules/@automattic/interpolate-components/dist/esm/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/base-control/index.js
var base_control = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/base-control/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/text-control/index.js
var text_control = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/text-control/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
// EXTERNAL MODULE: ../../packages/js/components/src/experimental-tree-control/linked-tree-utils.ts
var linked_tree_utils = __webpack_require__("../../packages/js/components/src/experimental-tree-control/linked-tree-utils.ts");
// EXTERNAL MODULE: ../../packages/js/components/src/experimental-tree-control/tree.tsx + 7 modules
var tree = __webpack_require__("../../packages/js/components/src/experimental-tree-control/tree.tsx");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../packages/js/components/src/experimental-tree-control/tree-control.tsx












var _excluded = ["items"];
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



var TreeControl = /*#__PURE__*/(0,react.forwardRef)(function ForwardedTree(_ref, ref) {
  var items = _ref.items,
    props = (0,objectWithoutProperties/* default */.A)(_ref, _excluded);
  var linkedTree = (0,linked_tree_utils/* createLinkedTree */.YD)(items, props.createValue);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(tree/* Tree */.P, _objectSpread(_objectSpread({}, props), {}, {
    ref: ref,
    items: linkedTree
  }));
});
try {
    // @ts-ignore
    TreeControl.displayName = "TreeControl";
    // @ts-ignore
    TreeControl.__docgenInfo = { "description": "", "displayName": "TreeControl", "props": { "onSelect": { "defaultValue": null, "description": "When `multiple` is true and a child item is selected, all its\nancestors and its descendants are also selected. If it's false\nonly the clicked item is selected.\n@param value The selection", "name": "onSelect", "required": false, "type": { "name": "((value: Item | Item[]) => void)" } }, "items": { "defaultValue": null, "description": "", "name": "items", "required": true, "type": { "name": "Item[]" } }, "selected": { "defaultValue": null, "description": "It contains one item if `multiple` value is false or\na list of items if it is true.", "name": "selected", "required": false, "type": { "name": "Item | Item[]" } }, "onExpand": { "defaultValue": null, "description": "", "name": "onExpand", "required": false, "type": { "name": "((index: number, value: boolean) => void)" } }, "highlightedIndex": { "defaultValue": null, "description": "", "name": "highlightedIndex", "required": false, "type": { "name": "number" } }, "multiple": { "defaultValue": null, "description": "Whether the tree items are single or multiple selected.", "name": "multiple", "required": false, "type": { "name": "boolean" } }, "shouldNotRecursivelySelect": { "defaultValue": null, "description": "In `multiple` mode, when this flag is also set, selecting children does\nnot select their parents and selecting parents does not select their children.", "name": "shouldNotRecursivelySelect", "required": false, "type": { "name": "boolean" } }, "createValue": { "defaultValue": null, "description": "The value to be used for comparison to determine if 'create new' button should be shown.", "name": "createValue", "required": false, "type": { "name": "string" } }, "onCreateNew": { "defaultValue": null, "description": "Called when the 'create new' button is clicked.", "name": "onCreateNew", "required": false, "type": { "name": "(() => void)" } }, "shouldShowCreateButton": { "defaultValue": null, "description": "If passed, shows create button if return from callback is true", "name": "shouldShowCreateButton", "required": false, "type": { "name": "((value?: string) => boolean)" } }, "isExpanded": { "defaultValue": null, "description": "", "name": "isExpanded", "required": false, "type": { "name": "boolean" } }, "onRemove": { "defaultValue": null, "description": "When `multiple` is true and a child item is unselected, all its\nancestors (if no sibblings are selected) and its descendants\nare also unselected. If it's false only the clicked item is\nunselected.\n@param value The unselection", "name": "onRemove", "required": false, "type": { "name": "((value: Item | Item[]) => void)" } }, "shouldItemBeHighlighted": { "defaultValue": null, "description": "It provides a way to determine whether the current rendering\nitem is highlighted or not from outside the tree.\n@example <Tree\n\tshouldItemBeHighlighted={ isFirstChild }\n/>\n@param item The current linked tree item, useful to\ntraverse the entire linked tree from this item.\n@see {@link LinkedTree }", "name": "shouldItemBeHighlighted", "required": false, "type": { "name": "((item: LinkedTree) => boolean)" } }, "onTreeBlur": { "defaultValue": null, "description": "Called when the create button is clicked to help closing any related popover.", "name": "onTreeBlur", "required": false, "type": { "name": "(() => void)" } }, "onFirstItemLoop": { "defaultValue": null, "description": "", "name": "onFirstItemLoop", "required": false, "type": { "name": "((event: KeyboardEvent<HTMLDivElement>) => void)" } }, "onEscape": { "defaultValue": null, "description": "Called when the escape key is pressed.", "name": "onEscape", "required": false, "type": { "name": "(() => void)" } }, "getItemLabel": { "defaultValue": null, "description": "It gives a way to render a different Element as the\ntree item label.\n@example <Tree\n\tgetItemLabel={ ( item ) => <span>${ item.data.label }</span> }\n/>\n@param item The current rendering tree item\n@see {@link LinkedTree }", "name": "getItemLabel", "required": false, "type": { "name": "((item: LinkedTree) => Element)" } }, "shouldItemBeExpanded": { "defaultValue": null, "description": "Return if the tree item passed in should be expanded.\n@example <Tree\n\tshouldItemBeExpanded={\n\t\t( item ) => checkExpanded( item, filter )\n\t}\n/>\n@param item The tree item to determine if should be expanded.\n@see {@link LinkedTree }", "name": "shouldItemBeExpanded", "required": false, "type": { "name": "((item: LinkedTree) => boolean)" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/experimental-tree-control/tree-control.tsx#TreeControl"] = { docgenInfo: TreeControl.__docgenInfo, name: "TreeControl", path: "../../packages/js/components/src/experimental-tree-control/tree-control.tsx#TreeControl" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ../../packages/js/components/src/experimental-tree-control/tree.scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../../packages/js/components/src/experimental-tree-control/stories/tree-control.story.tsx










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
var SimpleTree = function SimpleTree() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(base_control/* default */.Ay, {
    label: "Simple tree",
    id: "simple-tree",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(TreeControl, {
      id: "simple-tree",
      items: listItems
    })
  });
};
function _shouldItemBeExpanded(item, filter) {
  var _item$children;
  if (!filter || !((_item$children = item.children) !== null && _item$children !== void 0 && _item$children.length)) return false;
  return item.children.some(function (child) {
    if (new RegExp(filter, 'ig').test(child.data.label)) {
      return true;
    }
    return _shouldItemBeExpanded(child, filter);
  });
}
var ExpandOnFilter = function ExpandOnFilter() {
  var _useState = (0,react.useState)(''),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    filter = _useState2[0],
    setFilter = _useState2[1];
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(text_control/* default */.A, {
      value: filter,
      onChange: setFilter
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(base_control/* default */.Ay, {
      label: "Expand on filter",
      id: "expand-on-filter",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(TreeControl, {
        id: "expand-on-filter",
        items: listItems,
        shouldItemBeExpanded: function shouldItemBeExpanded(item) {
          return _shouldItemBeExpanded(item, filter);
        }
      })
    })]
  });
};
var CustomItemLabel = function CustomItemLabel() {
  function renderCustomItemLabel(item) {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        display: 'flex',
        gap: 8
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        style: {
          width: 36,
          height: 36,
          backgroundColor: '#ccc',
          borderRadius: 2
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          flexDirection: 'column'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
          children: item.data.label
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("small", {
          children: "Some item description"
        })]
      })]
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(base_control/* default */.Ay, {
    label: "Custom item label",
    id: "custom-item-label",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(TreeControl, {
      id: "custom-item-label",
      items: listItems,
      getItemLabel: renderCustomItemLabel
    })
  });
};
function _getItemLabel(item, text) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
    children: text ? (0,esm/* default */.A)({
      mixedString: item.data.label.replace(new RegExp(text, 'ig'), function (group) {
        return "{{bold}}".concat(group, "{{/bold}}");
      }),
      components: {
        bold: /*#__PURE__*/(0,jsx_runtime.jsx)("b", {})
      }
    }) : item.data.label
  });
}
var CustomItemLabelOnSearch = function CustomItemLabelOnSearch() {
  var _useState3 = (0,react.useState)(''),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    text = _useState4[0],
    setText = _useState4[1];
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(text_control/* default */.A, {
      value: text,
      onChange: setText
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(base_control/* default */.Ay, {
      label: "Custom item label on search",
      id: "custom-item-label-on-search",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(TreeControl, {
        id: "custom-item-label-on-search",
        items: listItems,
        getItemLabel: function getItemLabel(item) {
          return _getItemLabel(item, text);
        },
        shouldItemBeExpanded: (0,react.useCallback)(function (item) {
          return _shouldItemBeExpanded(item, text);
        }, [text])
      })
    })]
  });
};
var SelectionSingle = function SelectionSingle() {
  var _useState5 = (0,react.useState)(listItems[1]),
    _useState6 = (0,slicedToArray/* default */.A)(_useState5, 2),
    selected = _useState6[0],
    setSelected = _useState6[1];
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(base_control/* default */.Ay, {
      label: "Single selection",
      id: "single-selection",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(TreeControl, {
        id: "single-selection",
        items: listItems,
        selected: selected,
        onSelect: function onSelect(value) {
          return setSelected(value);
        }
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("pre", {
      children: JSON.stringify(selected, null, 2)
    })]
  });
};
var SelectionMultiple = function SelectionMultiple() {
  var _useState7 = (0,react.useState)([listItems[0], listItems[1]]),
    _useState8 = (0,slicedToArray/* default */.A)(_useState7, 2),
    selected = _useState8[0],
    setSelected = _useState8[1];
  function handleSelect(values) {
    setSelected(function (items) {
      var newItems = values.filter(function (_ref) {
        var value = _ref.value;
        return !items.some(function (item) {
          return item.value === value;
        });
      });
      return [].concat((0,toConsumableArray/* default */.A)(items), (0,toConsumableArray/* default */.A)(newItems));
    });
  }
  function handleRemove(values) {
    setSelected(function (items) {
      return items.filter(function (item) {
        return !values.some(function (_ref2) {
          var value = _ref2.value;
          return item.value === value;
        });
      });
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(base_control/* default */.Ay, {
      label: "Multiple selection",
      id: "multiple-selection",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(TreeControl, {
        id: "multiple-selection",
        items: listItems,
        multiple: true,
        selected: selected,
        onSelect: handleSelect,
        onRemove: handleRemove
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("pre", {
      children: JSON.stringify(selected, null, 2)
    })]
  });
};
function getFirstMatchingItem(item, text, memo) {
  if (!text) return false;
  if (memo[text] === item.data.value) return true;
  var matcher = new RegExp(text, 'ig');
  if (matcher.test(item.data.label)) {
    if (!memo[text]) {
      memo[text] = item.data.value;
      return true;
    }
  }
  return false;
}
var HighlightFirstMatchingItem = function HighlightFirstMatchingItem() {
  var _useState9 = (0,react.useState)(''),
    _useState10 = (0,slicedToArray/* default */.A)(_useState9, 2),
    text = _useState10[0],
    setText = _useState10[1];
  var memo = (0,react.useRef)({});
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(text_control/* default */.A, {
      value: text,
      onChange: setText
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(base_control/* default */.Ay, {
      label: "Highlight first matching item",
      id: "highlight-first-matching-item",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(TreeControl, {
        id: "highlight-first-matching-item",
        items: listItems,
        getItemLabel: function getItemLabel(item) {
          return _getItemLabel(item, text);
        },
        shouldItemBeExpanded: (0,react.useCallback)(function (item) {
          return _shouldItemBeExpanded(item, text);
        }, [text]),
        shouldItemBeHighlighted: function shouldItemBeHighlighted(item) {
          return getFirstMatchingItem(item, text, memo.current);
        }
      })
    })]
  });
};
/* harmony default export */ const tree_control_story = ({
  title: 'Experimental/TreeControl',
  component: TreeControl
});
SimpleTree.parameters = {
  ...SimpleTree.parameters,
  docs: {
    ...SimpleTree.parameters?.docs,
    source: {
      originalSource: "() => {\n  return <BaseControl label=\"Simple tree\" id=\"simple-tree\">\n            <TreeControl id=\"simple-tree\" items={listItems} />\n        </BaseControl>;\n}",
      ...SimpleTree.parameters?.docs?.source
    }
  }
};
ExpandOnFilter.parameters = {
  ...ExpandOnFilter.parameters,
  docs: {
    ...ExpandOnFilter.parameters?.docs,
    source: {
      originalSource: "() => {\n  const [filter, setFilter] = useState('');\n  return <>\n            <TextControl value={filter} onChange={setFilter} />\n            <BaseControl label=\"Expand on filter\" id=\"expand-on-filter\">\n                <TreeControl id=\"expand-on-filter\" items={listItems} shouldItemBeExpanded={item => shouldItemBeExpanded(item, filter)} />\n            </BaseControl>\n        </>;\n}",
      ...ExpandOnFilter.parameters?.docs?.source
    }
  }
};
CustomItemLabel.parameters = {
  ...CustomItemLabel.parameters,
  docs: {
    ...CustomItemLabel.parameters?.docs,
    source: {
      originalSource: "() => {\n  function renderCustomItemLabel(item: LinkedTree) {\n    return <div style={{\n      display: 'flex',\n      gap: 8\n    }}>\n                <div style={{\n        width: 36,\n        height: 36,\n        backgroundColor: '#ccc',\n        borderRadius: 2\n      }} />\n                <div style={{\n        display: 'flex',\n        flexDirection: 'column'\n      }}>\n                    <strong>{item.data.label}</strong>\n                    <small>Some item description</small>\n                </div>\n            </div>;\n  }\n  return <BaseControl label=\"Custom item label\" id=\"custom-item-label\">\n            <TreeControl id=\"custom-item-label\" items={listItems} getItemLabel={renderCustomItemLabel} />\n        </BaseControl>;\n}",
      ...CustomItemLabel.parameters?.docs?.source
    }
  }
};
CustomItemLabelOnSearch.parameters = {
  ...CustomItemLabelOnSearch.parameters,
  docs: {
    ...CustomItemLabelOnSearch.parameters?.docs,
    source: {
      originalSource: "() => {\n  const [text, setText] = useState('');\n  return <>\n            <TextControl value={text} onChange={setText} />\n            <BaseControl label=\"Custom item label on search\" id=\"custom-item-label-on-search\">\n                <TreeControl id=\"custom-item-label-on-search\" items={listItems} getItemLabel={item => getItemLabel(item, text)} shouldItemBeExpanded={useCallback(item => shouldItemBeExpanded(item, text), [text])} />\n            </BaseControl>\n        </>;\n}",
      ...CustomItemLabelOnSearch.parameters?.docs?.source
    }
  }
};
SelectionSingle.parameters = {
  ...SelectionSingle.parameters,
  docs: {
    ...SelectionSingle.parameters?.docs,
    source: {
      originalSource: "() => {\n  const [selected, setSelected] = useState(listItems[1]);\n  return <>\n            <BaseControl label=\"Single selection\" id=\"single-selection\">\n                <TreeControl id=\"single-selection\" items={listItems} selected={selected} onSelect={(value: Item) => setSelected(value)} />\n            </BaseControl>\n\n            <pre>{JSON.stringify(selected, null, 2)}</pre>\n        </>;\n}",
      ...SelectionSingle.parameters?.docs?.source
    }
  }
};
SelectionMultiple.parameters = {
  ...SelectionMultiple.parameters,
  docs: {
    ...SelectionMultiple.parameters?.docs,
    source: {
      originalSource: "() => {\n  const [selected, setSelected] = useState([listItems[0], listItems[1]]);\n  function handleSelect(values: Item[]) {\n    setSelected(items => {\n      const newItems = values.filter(({\n        value\n      }) => !items.some(item => item.value === value));\n      return [...items, ...newItems];\n    });\n  }\n  function handleRemove(values: Item[]) {\n    setSelected(items => items.filter(item => !values.some(({\n      value\n    }) => item.value === value)));\n  }\n  return <>\n            <BaseControl label=\"Multiple selection\" id=\"multiple-selection\">\n                <TreeControl id=\"multiple-selection\" items={listItems} multiple selected={selected} onSelect={handleSelect} onRemove={handleRemove} />\n            </BaseControl>\n\n            <pre>{JSON.stringify(selected, null, 2)}</pre>\n        </>;\n}",
      ...SelectionMultiple.parameters?.docs?.source
    }
  }
};
HighlightFirstMatchingItem.parameters = {
  ...HighlightFirstMatchingItem.parameters,
  docs: {
    ...HighlightFirstMatchingItem.parameters?.docs,
    source: {
      originalSource: "() => {\n  const [text, setText] = useState('');\n  const memo = useRef<Record<string, string>>({});\n  return <>\n            <TextControl value={text} onChange={setText} />\n            <BaseControl label=\"Highlight first matching item\" id=\"highlight-first-matching-item\">\n                <TreeControl id=\"highlight-first-matching-item\" items={listItems} getItemLabel={item => getItemLabel(item, text)} shouldItemBeExpanded={useCallback(item => shouldItemBeExpanded(item, text), [text])} shouldItemBeHighlighted={item => getFirstMatchingItem(item, text, memo.current)} />\n            </BaseControl>\n        </>;\n}",
      ...HighlightFirstMatchingItem.parameters?.docs?.source
    }
  }
};
try {
    // @ts-ignore
    SimpleTree.displayName = "SimpleTree";
    // @ts-ignore
    SimpleTree.__docgenInfo = { "description": "", "displayName": "SimpleTree", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/experimental-tree-control/stories/tree-control.story.tsx#SimpleTree"] = { docgenInfo: SimpleTree.__docgenInfo, name: "SimpleTree", path: "../../packages/js/components/src/experimental-tree-control/stories/tree-control.story.tsx#SimpleTree" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    ExpandOnFilter.displayName = "ExpandOnFilter";
    // @ts-ignore
    ExpandOnFilter.__docgenInfo = { "description": "", "displayName": "ExpandOnFilter", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/experimental-tree-control/stories/tree-control.story.tsx#ExpandOnFilter"] = { docgenInfo: ExpandOnFilter.__docgenInfo, name: "ExpandOnFilter", path: "../../packages/js/components/src/experimental-tree-control/stories/tree-control.story.tsx#ExpandOnFilter" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    CustomItemLabel.displayName = "CustomItemLabel";
    // @ts-ignore
    CustomItemLabel.__docgenInfo = { "description": "", "displayName": "CustomItemLabel", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/experimental-tree-control/stories/tree-control.story.tsx#CustomItemLabel"] = { docgenInfo: CustomItemLabel.__docgenInfo, name: "CustomItemLabel", path: "../../packages/js/components/src/experimental-tree-control/stories/tree-control.story.tsx#CustomItemLabel" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    CustomItemLabelOnSearch.displayName = "CustomItemLabelOnSearch";
    // @ts-ignore
    CustomItemLabelOnSearch.__docgenInfo = { "description": "", "displayName": "CustomItemLabelOnSearch", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/experimental-tree-control/stories/tree-control.story.tsx#CustomItemLabelOnSearch"] = { docgenInfo: CustomItemLabelOnSearch.__docgenInfo, name: "CustomItemLabelOnSearch", path: "../../packages/js/components/src/experimental-tree-control/stories/tree-control.story.tsx#CustomItemLabelOnSearch" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    SelectionSingle.displayName = "SelectionSingle";
    // @ts-ignore
    SelectionSingle.__docgenInfo = { "description": "", "displayName": "SelectionSingle", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/experimental-tree-control/stories/tree-control.story.tsx#SelectionSingle"] = { docgenInfo: SelectionSingle.__docgenInfo, name: "SelectionSingle", path: "../../packages/js/components/src/experimental-tree-control/stories/tree-control.story.tsx#SelectionSingle" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    SelectionMultiple.displayName = "SelectionMultiple";
    // @ts-ignore
    SelectionMultiple.__docgenInfo = { "description": "", "displayName": "SelectionMultiple", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/experimental-tree-control/stories/tree-control.story.tsx#SelectionMultiple"] = { docgenInfo: SelectionMultiple.__docgenInfo, name: "SelectionMultiple", path: "../../packages/js/components/src/experimental-tree-control/stories/tree-control.story.tsx#SelectionMultiple" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    HighlightFirstMatchingItem.displayName = "HighlightFirstMatchingItem";
    // @ts-ignore
    HighlightFirstMatchingItem.__docgenInfo = { "description": "", "displayName": "HighlightFirstMatchingItem", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/experimental-tree-control/stories/tree-control.story.tsx#HighlightFirstMatchingItem"] = { docgenInfo: HighlightFirstMatchingItem.__docgenInfo, name: "HighlightFirstMatchingItem", path: "../../packages/js/components/src/experimental-tree-control/stories/tree-control.story.tsx#HighlightFirstMatchingItem" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ })

}]);