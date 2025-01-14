(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[2766],{

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Yr: () => (/* binding */ CONNECT_STATIC_NAMESPACE),
/* harmony export */   yG: () => (/* binding */ COMPONENT_NAMESPACE),
/* harmony export */   yy: () => (/* binding */ CONNECTED_NAMESPACE)
/* harmony export */ });
const COMPONENT_NAMESPACE = 'data-wp-component';
const CONNECTED_NAMESPACE = 'data-wp-c16t';

/**
 * Special key where the connected namespaces are stored.
 * This is attached to Context connected components as a static property.
 */
const CONNECT_STATIC_NAMESPACE = '__contextSystemKey__';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-connect.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KZ: () => (/* binding */ contextConnect),
/* harmony export */   SZ: () => (/* binding */ hasConnectNamespace),
/* harmony export */   zS: () => (/* binding */ contextConnectWithoutRef)
/* harmony export */ });
/* unused harmony export getConnectNamespace */
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _wordpress_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+warning@3.0.1/node_modules/@wordpress/warning/build-module/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/constants.js");
/* harmony import */ var _get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/get-styled-class-name-from-key.js");
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
 * Forwards ref (React.ForwardRef) and "Connects" (or registers) a component
 * within the Context system under a specified namespace.
 *
 * @param Component The component to register into the Context system.
 * @param namespace The namespace to register the component under.
 * @return The connected WordPressComponent
 */
function contextConnect(Component, namespace) {
  return _contextConnect(Component, namespace, {
    forwardsRef: true
  });
}

/**
 * "Connects" (or registers) a component within the Context system under a specified namespace.
 * Does not forward a ref.
 *
 * @param Component The component to register into the Context system.
 * @param namespace The namespace to register the component under.
 * @return The connected WordPressComponent
 */
function contextConnectWithoutRef(Component, namespace) {
  return _contextConnect(Component, namespace);
}

// This is an (experimental) evolution of the initial connect() HOC.
// The hope is that we can improve render performance by removing functional
// component wrappers.
function _contextConnect(Component, namespace, options) {
  const WrappedComponent = options?.forwardsRef ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Component) : Component;
  if (typeof namespace === 'undefined') {
    globalThis.SCRIPT_DEBUG === true ? (0,_wordpress_warning__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('contextConnect: Please provide a namespace') : void 0;
  }

  // @ts-expect-error internal property
  let mergedNamespace = WrappedComponent[_constants__WEBPACK_IMPORTED_MODULE_2__/* .CONNECT_STATIC_NAMESPACE */ .Yr] || [namespace];

  /**
   * Consolidate (merge) namespaces before attaching it to the WrappedComponent.
   */
  if (Array.isArray(namespace)) {
    mergedNamespace = [...mergedNamespace, ...namespace];
  }
  if (typeof namespace === 'string') {
    mergedNamespace = [...mergedNamespace, namespace];
  }

  // @ts-expect-error We can't rely on inferred types here because of the
  // `as` prop polymorphism we're handling in https://github.com/WordPress/gutenberg/blob/4f3a11243c365f94892e479bff0b922ccc4ccda3/packages/components/src/context/wordpress-component.ts#L32-L33
  return Object.assign(WrappedComponent, {
    [_constants__WEBPACK_IMPORTED_MODULE_2__/* .CONNECT_STATIC_NAMESPACE */ .Yr]: [...new Set(mergedNamespace)],
    displayName: namespace,
    selector: `.${(0,_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_3__/* .getStyledClassNameFromKey */ .o)(namespace)}`
  });
}

/**
 * Attempts to retrieve the connected namespace from a component.
 *
 * @param Component The component to retrieve a namespace from.
 * @return The connected namespaces.
 */
function getConnectNamespace(Component) {
  if (!Component) {
    return [];
  }
  let namespaces = [];

  // @ts-ignore internal property
  if (Component[_constants__WEBPACK_IMPORTED_MODULE_2__/* .CONNECT_STATIC_NAMESPACE */ .Yr]) {
    // @ts-ignore internal property
    namespaces = Component[_constants__WEBPACK_IMPORTED_MODULE_2__/* .CONNECT_STATIC_NAMESPACE */ .Yr];
  }

  // @ts-ignore
  if (Component.type && Component.type[_constants__WEBPACK_IMPORTED_MODULE_2__/* .CONNECT_STATIC_NAMESPACE */ .Yr]) {
    // @ts-ignore
    namespaces = Component.type[_constants__WEBPACK_IMPORTED_MODULE_2__/* .CONNECT_STATIC_NAMESPACE */ .Yr];
  }
  return namespaces;
}

/**
 * Checks to see if a component is connected within the Context system.
 *
 * @param Component The component to retrieve a namespace from.
 * @param match     The namespace to check.
 */
function hasConnectNamespace(Component, match) {
  if (!Component) {
    return false;
  }
  if (typeof match === 'string') {
    return getConnectNamespace(Component).includes(match);
  }
  if (Array.isArray(match)) {
    return match.some(result => getConnectNamespace(Component).includes(result));
  }
  return false;
}
//# sourceMappingURL=context-connect.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-system-provider.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aG: () => (/* binding */ ComponentsContext),
/* harmony export */   c7: () => (/* binding */ ContextSystemProvider),
/* harmony export */   rm: () => (/* binding */ useComponentsContext)
/* harmony export */ });
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/es6/index.js");
/* harmony import */ var fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var is_plain_object__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/is-plain-object@5.0.0/node_modules/is-plain-object/dist/is-plain-object.mjs");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _wordpress_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+warning@3.0.1/node_modules/@wordpress/warning/build-module/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/hooks/use-update-effect.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * External dependencies
 */




/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


const ComponentsContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createContext)( /** @type {Record<string, any>} */{});
const useComponentsContext = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useContext)(ComponentsContext);

/**
 * Consolidates incoming ContextSystem values with a (potential) parent ContextSystem value.
 *
 * Note: This function will warn if it detects an un-memoized `value`
 *
 * @param {Object}              props
 * @param {Record<string, any>} props.value
 * @return {Record<string, any>} The consolidated value.
 */
function useContextSystemBridge({
  value
}) {
  const parentContext = useComponentsContext();
  const valueRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(value);
  (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(() => {
    if (
    // Objects are equivalent.
    fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1___default()(valueRef.current, value) &&
    // But not the same reference.
    valueRef.current !== value) {
      globalThis.SCRIPT_DEBUG === true ? (0,_wordpress_warning__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(`Please memoize your context: ${JSON.stringify(value)}`) : void 0;
    }
  }, [value]);

  // `parentContext` will always be memoized (i.e., the result of this hook itself)
  // or the default value from when the `ComponentsContext` was originally
  // initialized (which will never change, it's a static variable)
  // so this memoization will prevent `deepmerge()` from rerunning unless
  // the references to `value` change OR the `parentContext` has an actual material change
  // (because again, it's guaranteed to be memoized or a static reference to the empty object
  // so we know that the only changes for `parentContext` are material ones... i.e., why we
  // don't have to warn in the `useUpdateEffect` hook above for `parentContext` and we only
  // need to bother with the `value`). The `useUpdateEffect` above will ensure that we are
  // correctly warning when the `value` isn't being properly memoized. All of that to say
  // that this should be super safe to assume that `useMemo` will only run on actual
  // changes to the two dependencies, therefore saving us calls to `deepmerge()`!
  const config = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    // Deep clone `parentContext` to avoid mutating it later.
    return deepmerge__WEBPACK_IMPORTED_MODULE_0___default()(parentContext !== null && parentContext !== void 0 ? parentContext : {}, value !== null && value !== void 0 ? value : {}, {
      isMergeableObject: is_plain_object__WEBPACK_IMPORTED_MODULE_6__/* .isPlainObject */ .Q
    });
  }, [parentContext, value]);
  return config;
}

/**
 * A Provider component that can modify props for connected components within
 * the Context system.
 *
 * @example
 * ```jsx
 * <ContextSystemProvider value={{ Button: { size: 'small' }}}>
 *   <Button>...</Button>
 * </ContextSystemProvider>
 * ```
 *
 * @template {Record<string, any>} T
 * @param {Object}                    options
 * @param {import('react').ReactNode} options.children Children to render.
 * @param {T}                         options.value    Props to render into connected components.
 * @return {JSX.Element} A Provider wrapped component.
 */
const BaseContextSystemProvider = ({
  children,
  value
}) => {
  const contextValue = useContextSystemBridge({
    value
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ComponentsContext.Provider, {
    value: contextValue,
    children: children
  });
};
const ContextSystemProvider = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.memo)(BaseContextSystemProvider);
//# sourceMappingURL=context-system-provider.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/get-styled-class-name-from-key.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ getStyledClassNameFromKey)
/* harmony export */ });
/* harmony import */ var change_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/param-case@3.0.4/node_modules/param-case/dist.es2015/index.js");
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/memize@2.1.0/node_modules/memize/dist/index.js");
/**
 * External dependencies
 */



/**
 * Generates the connected component CSS className based on the namespace.
 *
 * @param namespace The name of the connected component.
 * @return The generated CSS className.
 */
function getStyledClassName(namespace) {
  const kebab = (0,change_case__WEBPACK_IMPORTED_MODULE_0__/* .paramCase */ .c)(namespace);
  return `components-${kebab}`;
}
const getStyledClassNameFromKey = (0,memize__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(getStyledClassName);
//# sourceMappingURL=get-styled-class-name-from-key.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/use-context-system.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ useContextSystem)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+warning@3.0.1/node_modules/@wordpress/warning/build-module/index.js + 1 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+warning@3.0.1/node_modules/@wordpress/warning/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-system-provider.js
var context_system_provider = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-system-provider.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/constants.js
var constants = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/constants.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/utils.js
/**
 * Internal dependencies
 */


/**
 * Creates a dedicated context namespace HTML attribute for components.
 * ns is short for "namespace"
 *
 * @example
 * ```jsx
 * <div {...ns('Container')} />
 * ```
 *
 * @param {string} componentName The name for the component.
 * @return {Record<string, any>} A props object with the namespaced HTML attribute.
 */
function getNamespace(componentName) {
  return {
    [constants/* COMPONENT_NAMESPACE */.yG]: componentName
  };
}

/**
 * Creates a dedicated connected context namespace HTML attribute for components.
 * ns is short for "namespace"
 *
 * @example
 * ```jsx
 * <div {...cns()} />
 * ```
 *
 * @return {Record<string, any>} A props object with the namespaced HTML attribute.
 */
function getConnectedNamespace() {
  return {
    [constants/* CONNECTED_NAMESPACE */.yy]: true
  };
}
//# sourceMappingURL=utils.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/get-styled-class-name-from-key.js
var get_styled_class_name_from_key = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/get-styled-class-name-from-key.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js
var use_cx = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/use-context-system.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */





/**
 * @template TProps
 * @typedef {TProps & { className: string }} ConnectedProps
 */

/**
 * Custom hook that derives registered props from the Context system.
 * These derived props are then consolidated with incoming component props.
 *
 * @template {{ className?: string }} P
 * @param {P}      props     Incoming props from the component.
 * @param {string} namespace The namespace to register and to derive context props from.
 * @return {ConnectedProps<P>} The connected props.
 */
function useContextSystem(props, namespace) {
  const contextSystemProps = (0,context_system_provider/* useComponentsContext */.rm)();
  if (typeof namespace === 'undefined') {
    globalThis.SCRIPT_DEBUG === true ? (0,build_module/* default */.A)('useContextSystem: Please provide a namespace') : void 0;
  }
  const contextProps = contextSystemProps?.[namespace] || {};

  /* eslint-disable jsdoc/no-undefined-types */
  /** @type {ConnectedProps<P>} */
  // @ts-ignore We fill in the missing properties below
  const finalComponentProps = {
    ...getConnectedNamespace(),
    ...getNamespace(namespace)
  };
  /* eslint-enable jsdoc/no-undefined-types */

  const {
    _overrides: overrideProps,
    ...otherContextProps
  } = contextProps;
  const initialMergedProps = Object.entries(otherContextProps).length ? Object.assign({}, otherContextProps, props) : props;
  const cx = (0,use_cx/* useCx */.l)();
  const classes = cx((0,get_styled_class_name_from_key/* getStyledClassNameFromKey */.o)(namespace), props.className);

  // Provides the ability to customize the render of the component.
  const rendered = typeof initialMergedProps.renderChildren === 'function' ? initialMergedProps.renderChildren(initialMergedProps) : initialMergedProps.children;
  for (const key in initialMergedProps) {
    // @ts-ignore filling in missing props
    finalComponentProps[key] = initialMergedProps[key];
  }
  for (const key in overrideProps) {
    // @ts-ignore filling in missing props
    finalComponentProps[key] = overrideProps[key];
  }

  // Setting an `undefined` explicitly can cause unintended overwrites
  // when a `cloneElement()` is involved.
  if (rendered !== undefined) {
    // @ts-ignore
    finalComponentProps.children = rendered;
  }
  finalComponentProps.className = classes;
  return finalComponentProps;
}
//# sourceMappingURL=use-context-system.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/index.js":
/***/ (() => {

"use strict";
// Primitives.


// Components.























































































































// Higher-Order Components.









// Private APIs.

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/text/component.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/colors-values.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ useCx)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@emotion+utils@1.2.1/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@emotion+css@11.11.2/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * External dependencies
 */


// eslint-disable-next-line no-restricted-imports

// eslint-disable-next-line no-restricted-imports


/**
 * WordPress dependencies
 */

const isSerializedStyles = o => typeof o !== 'undefined' && o !== null && ['name', 'styles'].every(p => typeof o[p] !== 'undefined');

/**
 * Retrieve a `cx` function that knows how to handle `SerializedStyles`
 * returned by the `@emotion/react` `css` function in addition to what
 * `cx` normally knows how to handle. It also hooks into the Emotion
 * Cache, allowing `css` calls to work inside iframes.
 *
 * ```jsx
 * import { css } from '@emotion/react';
 *
 * const styles = css`
 * 	color: red
 * `;
 *
 * function RedText( { className, ...props } ) {
 * 	const cx = useCx();
 *
 * 	const classes = cx(styles, className);
 *
 * 	return <span className={classes} {...props} />;
 * }
 * ```
 */
const useCx = () => {
  const cache = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__._)();
  const cx = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)((...classNames) => {
    if (cache === null) {
      throw new Error('The `useCx` hook should be only used within a valid Emotion Cache Context');
    }
    return (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(...classNames.map(arg => {
      if (isSerializedStyles(arg)) {
        (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_3__/* .insertStyles */ .sk)(cache, arg, false);
        return `${cache.key}-${arg.name}`;
      }
      return arg;
    }));
  }, [cache]);
  return cx;
};
//# sourceMappingURL=use-cx.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/hooks/use-update-effect.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * WordPress dependencies
 */


/**
 * A `React.useEffect` that will not run on the first render.
 * Source:
 * https://github.com/ariakit/ariakit/blob/reakit/packages/reakit-utils/src/useUpdateEffect.ts
 *
 * @param {import('react').EffectCallback} effect
 * @param {import('react').DependencyList} deps
 */
function useUpdateEffect(effect, deps) {
  const mounted = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (mounted.current) {
      return effect();
    }
    mounted.current = true;
    return undefined;
    // Disable reasons:
    // 1. This hook needs to pass a dep list that isn't an array literal
    // 2. `effect` is missing from the array, and will need to be added carefully to avoid additional warnings
    // see https://github.com/WordPress/gutenberg/pull/41166
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUpdateEffect);
//# sourceMappingURL=use-update-effect.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/view/component.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export View */
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1__@types+react@18.3.16_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

const PolymorphicDiv = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("div",  true ? {
  target: "e19lxcc00"
} : 0)( true ? "" : 0);
function UnforwardedView({
  as,
  ...restProps
}, ref) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PolymorphicDiv, {
    as: as,
    ref: ref,
    ...restProps
  });
}

/**
 * `View` is a core component that renders everything in the library.
 * It is the principle component in the entire library.
 *
 * ```jsx
 * import { View } from `@wordpress/components`;
 *
 * function Example() {
 * 	return (
 * 		<View>
 * 			 Code is Poetry
 * 		</View>
 * 	);
 * }
 * ```
 */
const View = Object.assign((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(UnforwardedView), {
  selector: '.components-view'
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+warning@3.0.1/node_modules/@wordpress/warning/build-module/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ warning)
});

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+warning@3.0.1/node_modules/@wordpress/warning/build-module/utils.js
/**
 * Object map tracking messages which have been logged, for use in ensuring a
 * message is only logged once.
 *
 * @type {Set<string>}
 */
const logged = new Set();
//# sourceMappingURL=utils.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+warning@3.0.1/node_modules/@wordpress/warning/build-module/index.js
/**
 * Internal dependencies
 */

function isDev() {
  // eslint-disable-next-line @wordpress/wp-global-usage
  return globalThis.SCRIPT_DEBUG === true;
}

/**
 * Shows a warning with `message` if environment is not `production`.
 *
 * @param {string} message Message to show in the warning.
 *
 * @example
 * ```js
 * import warning from '@wordpress/warning';
 *
 * function MyComponent( props ) {
 *   if ( ! props.title ) {
 *     warning( '`props.title` was not passed' );
 *   }
 *   ...
 * }
 * ```
 */
function warning(message) {
  if (!isDev()) {
    return;
  }

  // Skip if already logged.
  if (logged.has(message)) {
    return;
  }

  // eslint-disable-next-line no-console
  console.warn(message);

  // Throwing an error and catching it immediately to improve debugging
  // A consumer can use 'pause on caught exceptions'
  // https://github.com/facebook/react/issues/4216
  try {
    throw Error(message);
  } catch (x) {
    // Do nothing.
  }
  logged.add(message);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../packages/js/components/src/experimental.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/text/component.js");
/**
 * External dependencies
 */


/**
 * Export experimental components within the components package to prevent a circular
 * dependency with woocommerce/experimental. Only for internal use.
 */
var Text = _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Text || _wordpress_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A;

/***/ }),

/***/ "../../packages/js/components/src/pill/pill.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ Pill)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _experimental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../packages/js/components/src/experimental.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


function Pill(_ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_experimental__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .E, {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('woocommerce-pill', className),
    variant: "caption",
    as: "span",
    size: "12",
    lineHeight: "16px",
    children: children
  });
}

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

/***/ "../../node_modules/.pnpm/memize@2.1.0/node_modules/memize/dist/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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




/***/ }),

/***/ "../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ "../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js");
} else {}


/***/ }),

/***/ "../../packages/js/components/src/pill/stories/pill.story.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../packages/js/components/src/pill/pill.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'Components/Pill',
  component: ___WEBPACK_IMPORTED_MODULE_1__/* .Pill */ .a
});
function Default() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__/* .Pill */ .a, {
    children: "Content"
  });
}
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "function Default() {\n  return <Pill>Content</Pill>;\n}",
      ...Default.parameters?.docs?.source
    }
  }
};

/***/ })

}]);