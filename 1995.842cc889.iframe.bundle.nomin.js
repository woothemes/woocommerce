"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[1995],{

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/card/card-footer/component.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ card_footer_component)
});

// UNUSED EXPORTS: CardFooter

// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-connect.js
var context_connect = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-connect.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/flex/component.js
var component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/flex/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/use-context-system.js + 1 modules
var use_context_system = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/use-context-system.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/card/styles.js
var styles = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/card/styles.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js
var use_cx = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/card/card-footer/hook.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




function useCardFooter(props) {
  const {
    className,
    justify,
    isBorderless = false,
    isShady = false,
    size = 'medium',
    ...otherProps
  } = (0,use_context_system/* useContextSystem */.A)(props, 'CardFooter');
  const cx = (0,use_cx/* useCx */.l)();
  const classes = (0,react.useMemo)(() => cx(styles/* Footer */.wi, styles/* borderRadius */.Vq, styles/* borderColor */.Cz, styles/* cardPaddings */.L7[size], isBorderless && styles/* borderless */.Gn, isShady && styles/* shady */.QC,
  // This classname is added for legacy compatibility reasons.
  'components-card__footer', className), [className, cx, isBorderless, isShady, size]);
  return {
    ...otherProps,
    className: classes,
    justify
  };
}
//# sourceMappingURL=hook.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/card/card-footer/component.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */





function UnconnectedCardFooter(props, forwardedRef) {
  const footerProps = useCardFooter(props);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(component/* default */.A, {
    ...footerProps,
    ref: forwardedRef
  });
}

/**
 * `CardFooter` renders an optional footer within a `Card`.
 *
 * ```jsx
 * import { Card, CardBody, CardFooter } from `@wordpress/components`;
 *
 * <Card>
 * 	<CardBody>...</CardBody>
 * 	<CardFooter>...</CardFooter>
 * </Card>
 * ```
 */
const CardFooter = (0,context_connect/* contextConnect */.KZ)(UnconnectedCardFooter, 'CardFooter');
/* harmony default export */ const card_footer_component = (CardFooter);
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/context.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ FlexContext),
/* harmony export */   a: () => (/* binding */ useFlexContext)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * WordPress dependencies
 */

const FlexContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  flexItemDisplay: undefined
});
const useFlexContext = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(FlexContext);
//# sourceMappingURL=context.js.map

/***/ }),

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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/flex/hook.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ useFlex)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+deprecated@4.0.1/node_modules/@wordpress/deprecated/build-module/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/use-context-system.js");
/* harmony import */ var _utils_use_responsive_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/use-responsive-value.js");
/* harmony import */ var _utils_space__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/space.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/styles.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js");
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */






function useDeprecatedProps(props) {
  const {
    isReversed,
    ...otherProps
  } = props;
  if (typeof isReversed !== 'undefined') {
    (0,_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)('Flex isReversed', {
      alternative: 'Flex direction="row-reverse" or "column-reverse"',
      since: '5.9'
    });
    return {
      ...otherProps,
      direction: isReversed ? 'row-reverse' : 'row'
    };
  }
  return otherProps;
}
function useFlex(props) {
  const {
    align,
    className,
    direction: directionProp = 'row',
    expanded = true,
    gap = 2,
    justify = 'space-between',
    wrap = false,
    ...otherProps
  } = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .useContextSystem */ .A)(useDeprecatedProps(props), 'Flex');
  const directionAsArray = Array.isArray(directionProp) ? directionProp : [directionProp];
  const direction = (0,_utils_use_responsive_value__WEBPACK_IMPORTED_MODULE_2__/* .useResponsiveValue */ .t)(directionAsArray);
  const isColumn = typeof direction === 'string' && !!direction.includes('column');
  const cx = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .useCx */ .l)();
  const classes = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => {
    const base = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__/* .css */ .AH)({
      alignItems: align !== null && align !== void 0 ? align : isColumn ? 'normal' : 'center',
      flexDirection: direction,
      flexWrap: wrap ? 'wrap' : undefined,
      gap: (0,_utils_space__WEBPACK_IMPORTED_MODULE_6__/* .space */ .x)(gap),
      justifyContent: justify,
      height: isColumn && expanded ? '100%' : undefined,
      width: !isColumn && expanded ? '100%' : undefined
    },  true ? "" : 0,  true ? "" : 0);
    return cx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .so, base, isColumn ? _styles__WEBPACK_IMPORTED_MODULE_7__/* .ItemsColumn */ .Z2 : _styles__WEBPACK_IMPORTED_MODULE_7__/* .ItemsRow */ .RI, className);
  }, [align, className, cx, direction, expanded, gap, isColumn, justify, wrap]);
  return {
    ...otherProps,
    className: classes,
    isColumn
  };
}
//# sourceMappingURL=hook.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/styles.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RI: () => (/* binding */ ItemsRow),
/* harmony export */   Z2: () => (/* binding */ ItemsColumn),
/* harmony export */   om: () => (/* binding */ block),
/* harmony export */   q7: () => (/* binding */ Item),
/* harmony export */   so: () => (/* binding */ Flex)
/* harmony export */ });
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
/**
 * External dependencies
 */

const Flex =  true ? {
  name: "zjik7",
  styles: "display:flex"
} : 0;
const Item =  true ? {
  name: "qgaee5",
  styles: "display:block;max-height:100%;max-width:100%;min-height:0;min-width:0"
} : 0;
const block =  true ? {
  name: "82a6rk",
  styles: "flex:1"
} : 0;

/**
 * Workaround to optimize DOM rendering.
 * We'll enhance alignment with naive parent flex assumptions.
 *
 * Trade-off:
 * Far less DOM less. However, UI rendering is not as reliable.
 */

/**
 * Improves stability of width/height rendering.
 * https://github.com/ItsJonQ/g2/pull/149
 */
const ItemsColumn =  true ? {
  name: "13nosa1",
  styles: ">*{min-height:0;}"
} : 0;
const ItemsRow =  true ? {
  name: "1pwxzk4",
  styles: ">*{min-width:0;}"
} : 0;
//# sourceMappingURL=styles.js.map

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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/config-values.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _space__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/space.js");
/* harmony import */ var _colors_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/colors-values.js");
/**
 * Internal dependencies
 */


const CONTROL_HEIGHT = '36px';
const CONTROL_PADDING_X = '12px';
const CONTROL_PROPS = {
  controlSurfaceColor: _colors_values__WEBPACK_IMPORTED_MODULE_0__/* .COLORS */ .l.white,
  controlTextActiveColor: _colors_values__WEBPACK_IMPORTED_MODULE_0__/* .COLORS */ .l.theme.accent,
  controlPaddingX: CONTROL_PADDING_X,
  controlPaddingXLarge: `calc(${CONTROL_PADDING_X} * 1.3334)`,
  controlPaddingXSmall: `calc(${CONTROL_PADDING_X} / 1.3334)`,
  controlBackgroundColor: _colors_values__WEBPACK_IMPORTED_MODULE_0__/* .COLORS */ .l.white,
  controlBorderRadius: '2px',
  controlBoxShadow: 'transparent',
  controlBoxShadowFocus: `0 0 0 0.5px ${_colors_values__WEBPACK_IMPORTED_MODULE_0__/* .COLORS */ .l.theme.accent}`,
  controlDestructiveBorderColor: _colors_values__WEBPACK_IMPORTED_MODULE_0__/* .COLORS */ .l.alert.red,
  controlHeight: CONTROL_HEIGHT,
  controlHeightXSmall: `calc( ${CONTROL_HEIGHT} * 0.6 )`,
  controlHeightSmall: `calc( ${CONTROL_HEIGHT} * 0.8 )`,
  controlHeightLarge: `calc( ${CONTROL_HEIGHT} * 1.2 )`,
  controlHeightXLarge: `calc( ${CONTROL_HEIGHT} * 1.4 )`
};
const TOGGLE_GROUP_CONTROL_PROPS = {
  toggleGroupControlBackgroundColor: CONTROL_PROPS.controlBackgroundColor,
  toggleGroupControlBorderColor: _colors_values__WEBPACK_IMPORTED_MODULE_0__/* .COLORS */ .l.ui.border,
  toggleGroupControlBackdropBackgroundColor: CONTROL_PROPS.controlSurfaceColor,
  toggleGroupControlBackdropBorderColor: _colors_values__WEBPACK_IMPORTED_MODULE_0__/* .COLORS */ .l.ui.border,
  toggleGroupControlButtonColorActive: CONTROL_PROPS.controlBackgroundColor
};

// Using Object.assign to avoid creating circular references when emitting
// TypeScript type declarations.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign({}, CONTROL_PROPS, TOGGLE_GROUP_CONTROL_PROPS, {
  colorDivider: 'rgba(0, 0, 0, 0.1)',
  colorScrollbarThumb: 'rgba(0, 0, 0, 0.2)',
  colorScrollbarThumbHover: 'rgba(0, 0, 0, 0.5)',
  colorScrollbarTrack: 'rgba(0, 0, 0, 0.04)',
  elevationIntensity: 1,
  radiusBlockUi: '2px',
  borderWidth: '1px',
  borderWidthFocus: '1.5px',
  borderWidthTab: '4px',
  spinnerSize: 16,
  fontSize: '13px',
  fontSizeH1: 'calc(2.44 * 13px)',
  fontSizeH2: 'calc(1.95 * 13px)',
  fontSizeH3: 'calc(1.56 * 13px)',
  fontSizeH4: 'calc(1.25 * 13px)',
  fontSizeH5: '13px',
  fontSizeH6: 'calc(0.8 * 13px)',
  fontSizeInputMobile: '16px',
  fontSizeMobile: '15px',
  fontSizeSmall: 'calc(0.92 * 13px)',
  fontSizeXSmall: 'calc(0.75 * 13px)',
  fontLineHeightBase: '1.4',
  fontWeight: 'normal',
  fontWeightHeading: '600',
  gridBase: '4px',
  cardBorderRadius: '2px',
  cardPaddingXSmall: `${(0,_space__WEBPACK_IMPORTED_MODULE_1__/* .space */ .x)(2)}`,
  cardPaddingSmall: `${(0,_space__WEBPACK_IMPORTED_MODULE_1__/* .space */ .x)(4)}`,
  cardPaddingMedium: `${(0,_space__WEBPACK_IMPORTED_MODULE_1__/* .space */ .x)(4)} ${(0,_space__WEBPACK_IMPORTED_MODULE_1__/* .space */ .x)(6)}`,
  cardPaddingLarge: `${(0,_space__WEBPACK_IMPORTED_MODULE_1__/* .space */ .x)(6)} ${(0,_space__WEBPACK_IMPORTED_MODULE_1__/* .space */ .x)(8)}`,
  popoverShadow: `0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)`,
  surfaceBackgroundColor: _colors_values__WEBPACK_IMPORTED_MODULE_0__/* .COLORS */ .l.white,
  surfaceBackgroundSubtleColor: '#F3F3F3',
  surfaceBackgroundTintColor: '#F5F5F5',
  surfaceBorderColor: 'rgba(0, 0, 0, 0.1)',
  surfaceBorderBoldColor: 'rgba(0, 0, 0, 0.15)',
  surfaceBorderSubtleColor: 'rgba(0, 0, 0, 0.05)',
  surfaceBackgroundTertiaryColor: _colors_values__WEBPACK_IMPORTED_MODULE_0__/* .COLORS */ .l.white,
  surfaceColor: _colors_values__WEBPACK_IMPORTED_MODULE_0__/* .COLORS */ .l.white,
  transitionDuration: '200ms',
  transitionDurationFast: '160ms',
  transitionDurationFaster: '120ms',
  transitionDurationFastest: '100ms',
  transitionTimingFunction: 'cubic-bezier(0.08, 0.52, 0.52, 1)',
  transitionTimingFunctionControl: 'cubic-bezier(0.12, 0.8, 0.32, 1)'
}));
//# sourceMappingURL=config-values.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/use-responsive-value.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ useResponsiveValue)
/* harmony export */ });
/* unused harmony export useBreakpointIndex */
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * WordPress dependencies
 */

const breakpoints = ['40em', '52em', '64em'];
const useBreakpointIndex = (options = {}) => {
  const {
    defaultIndex = 0
  } = options;
  if (typeof defaultIndex !== 'number') {
    throw new TypeError(`Default breakpoint index should be a number. Got: ${defaultIndex}, ${typeof defaultIndex}`);
  } else if (defaultIndex < 0 || defaultIndex > breakpoints.length - 1) {
    throw new RangeError(`Default breakpoint index out of range. Theme has ${breakpoints.length} breakpoints, got index ${defaultIndex}`);
  }
  const [value, setValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultIndex);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const getIndex = () => breakpoints.filter(bp => {
      return typeof window !== 'undefined' ? window.matchMedia(`screen and (min-width: ${bp})`).matches : false;
    }).length;
    const onResize = () => {
      const newValue = getIndex();
      if (value !== newValue) {
        setValue(newValue);
      }
    };
    onResize();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', onResize);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', onResize);
      }
    };
  }, [value]);
  return value;
};
function useResponsiveValue(values, options = {}) {
  const index = useBreakpointIndex(options);

  // Allow calling the function with a "normal" value without having to check on the outside.
  if (!Array.isArray(values) && typeof values !== 'function') {
    return values;
  }
  const array = values || [];

  /* eslint-disable jsdoc/no-undefined-types */
  return /** @type {T[]} */array[/* eslint-enable jsdoc/no-undefined-types */
  index >= array.length ? array.length - 1 : index];
}
//# sourceMappingURL=use-responsive-value.js.map

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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/view/component.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "../../node_modules/.pnpm/@wordpress+deprecated@4.0.1/node_modules/@wordpress/deprecated/build-module/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ deprecated)
/* harmony export */ });
/* unused harmony export logged */
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+hooks@4.0.1/node_modules/@wordpress/hooks/build-module/index.js");
/**
 * WordPress dependencies
 */


/**
 * Object map tracking messages which have been logged, for use in ensuring a
 * message is only logged once.
 *
 * @type {Record<string, true | undefined>}
 */
const logged = Object.create(null);

/**
 * Logs a message to notify developers about a deprecated feature.
 *
 * @param {string} feature               Name of the deprecated feature.
 * @param {Object} [options]             Personalisation options
 * @param {string} [options.since]       Version in which the feature was deprecated.
 * @param {string} [options.version]     Version in which the feature will be removed.
 * @param {string} [options.alternative] Feature to use instead
 * @param {string} [options.plugin]      Plugin name if it's a plugin feature
 * @param {string} [options.link]        Link to documentation
 * @param {string} [options.hint]        Additional message to help transition away from the deprecated feature.
 *
 * @example
 * ```js
 * import deprecated from '@wordpress/deprecated';
 *
 * deprecated( 'Eating meat', {
 * 	since: '2019.01.01'
 * 	version: '2020.01.01',
 * 	alternative: 'vegetables',
 * 	plugin: 'the earth',
 * 	hint: 'You may find it beneficial to transition gradually.',
 * } );
 *
 * // Logs: 'Eating meat is deprecated since version 2019.01.01 and will be removed from the earth in version 2020.01.01. Please use vegetables instead. Note: You may find it beneficial to transition gradually.'
 * ```
 */
function deprecated(feature, options = {}) {
  const {
    since,
    version,
    alternative,
    plugin,
    link,
    hint
  } = options;
  const pluginMessage = plugin ? ` from ${plugin}` : '';
  const sinceMessage = since ? ` since version ${since}` : '';
  const versionMessage = version ? ` and will be removed${pluginMessage} in version ${version}` : '';
  const useInsteadMessage = alternative ? ` Please use ${alternative} instead.` : '';
  const linkMessage = link ? ` See: ${link}` : '';
  const hintMessage = hint ? ` Note: ${hint}` : '';
  const message = `${feature} is deprecated${sinceMessage}${versionMessage}.${useInsteadMessage}${linkMessage}${hintMessage}`;

  // Skip if already logged.
  if (message in logged) {
    return;
  }

  /**
   * Fires whenever a deprecated feature is encountered
   *
   * @param {string}  feature             Name of the deprecated feature.
   * @param {?Object} options             Personalisation options
   * @param {string}  options.since       Version in which the feature was deprecated.
   * @param {?string} options.version     Version in which the feature will be removed.
   * @param {?string} options.alternative Feature to use instead
   * @param {?string} options.plugin      Plugin name if it's a plugin feature
   * @param {?string} options.link        Link to documentation
   * @param {?string} options.hint        Additional message to help transition away from the deprecated feature.
   * @param {?string} message             Message sent to console.warn
   */
  (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__/* .doAction */ .Eo)('deprecated', feature, options, message);

  // eslint-disable-next-line no-console
  console.warn(message);
  logged[message] = true;
}

/** @typedef {import('utility-types').NonUndefined<Parameters<typeof deprecated>[1]>} DeprecatedOptions */
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+warning@3.0.1/node_modules/@wordpress/warning/build-module/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-iteration.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var bind = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-bind-context.js");
var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/length-of-array-like.js");
var arraySpeciesCreate = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-species-create.js");

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE === 1;
  var IS_FILTER = TYPE === 2;
  var IS_SOME = TYPE === 3;
  var IS_EVERY = TYPE === 4;
  var IS_FIND_INDEX = TYPE === 6;
  var IS_FILTER_REJECT = TYPE === 7;
  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(self);
    var boundFunction = bind(callbackfn, that);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-method-has-species-support.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var fails = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-species-constructor.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isArray = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-array.js");
var isConstructor = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-constructor.js");
var isObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-object.js");
var wellKnownSymbol = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-species-create.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var arraySpeciesConstructor = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-species-constructor.js");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-array.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var classof = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var $map = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-iteration.js").map);
var arrayMethodHasSpeciesSupport = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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



if (true) {
  module.exports = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js");
} else {}


/***/ })

}]);