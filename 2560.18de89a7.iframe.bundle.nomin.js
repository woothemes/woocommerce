(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[2560],{

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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/icon/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ icon)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js
var svg = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/dashicon/index.js

/**
 * @typedef OwnProps
 *
 * @property {import('./types').IconKey} icon        Icon name
 * @property {string}                    [className] Class name
 * @property {number}                    [size]      Size of the icon
 */

/**
 * Internal dependencies
 */

function Dashicon({
  icon,
  className,
  size = 20,
  style = {},
  ...extraProps
}) {
  const iconClass = ['dashicon', 'dashicons', 'dashicons-' + icon, className].filter(Boolean).join(' ');

  // For retro-compatibility reasons (for example if people are overriding icon size with CSS), we add inline styles just if the size is different to the default
  const sizeStyles =
  // using `!=` to catch both 20 and "20"
  // eslint-disable-next-line eqeqeq
  20 != size ? {
    fontSize: `${size}px`,
    width: `${size}px`,
    height: `${size}px`
  } : {};
  const styles = {
    ...sizeStyles,
    ...style
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
    className: iconClass,
    style: styles,
    ...extraProps
  });
}
/* harmony default export */ const dashicon = (Dashicon);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/icon/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function Icon({
  icon = null,
  size = 'string' === typeof icon ? 20 : 24,
  ...additionalProps
}) {
  if ('string' === typeof icon) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(dashicon, {
      icon: icon,
      size: size,
      ...additionalProps
    });
  }
  if ((0,react.isValidElement)(icon) && dashicon === icon.type) {
    return (0,react.cloneElement)(icon, {
      ...additionalProps
    });
  }
  if ('function' === typeof icon) {
    return (0,react.createElement)(icon, {
      size,
      ...additionalProps
    });
  }
  if (icon && (icon.type === 'svg' || icon.type === svg/* SVG */.t4)) {
    const appliedProps = {
      ...icon.props,
      width: size,
      height: size,
      ...additionalProps
    };
    return /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* SVG */.t4, {
      ...appliedProps
    });
  }
  if ((0,react.isValidElement)(icon)) {
    return (0,react.cloneElement)(icon, {
      // @ts-ignore Just forwarding the size prop along
      size,
      ...additionalProps
    });
  }
  return icon;
}
/* harmony default export */ const icon = (Icon);
//# sourceMappingURL=index.js.map

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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/config-values.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/values.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../../node_modules/.pnpm/@wordpress+deprecated@4.0.1/node_modules/@wordpress/deprecated/build-module/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/page.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * WordPress dependencies
 */



const page = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .SVG */ .t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .Path */ .wA, {
    d: "M15.5 7.5h-7V9h7V7.5Zm-7 3.5h7v1.5h-7V11Zm7 3.5h-7V16h7v-1.5Z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .Path */ .wA, {
    d: "M17 4H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM7 5.5h10a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5Z"
  })]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (page);
//# sourceMappingURL=page.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ G),
/* harmony export */   jl: () => (/* binding */ Circle),
/* harmony export */   rw: () => (/* binding */ Rect),
/* harmony export */   t4: () => (/* binding */ SVG),
/* harmony export */   wA: () => (/* binding */ Path)
/* harmony export */ });
/* unused harmony exports Line, Polygon, Defs, RadialGradient, LinearGradient, Stop */
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
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

const Circle = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)('circle', props);

/**
 * @param {import('react').ComponentPropsWithoutRef<'g'>} props
 *
 * @return {JSX.Element} G component
 */
const G = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)('g', props);

/**
 * @param {import('react').ComponentPropsWithoutRef<'line'>} props
 *
 * @return {JSX.Element} Path component
 */
const Line = props => createElement('line', props);

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
const Rect = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)('rect', props);

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
const SVG = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(
/**
 * @param {SVGProps}                                    props isPressed indicates whether the SVG should appear as pressed.
 *                                                            Other props will be passed through to svg component.
 * @param {import('react').ForwardedRef<SVGSVGElement>} ref   The forwarded ref to the SVG element.
 *
 * @return {JSX.Element} Stop component
 */
({
  className,
  isPressed,
  ...props
}, ref) => {
  const appliedProps = {
    ...props,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(className, {
      'is-pressed': isPressed
    }) || undefined,
    'aria-hidden': true,
    focusable: false
  };

  // Disable reason: We need to have a way to render HTML tag for web.
  // eslint-disable-next-line react/forbid-elements
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    ...appliedProps,
    ref: ref
  });
});
SVG.displayName = 'SVG';
//# sourceMappingURL=index.js.map

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

/***/ "../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export clsx */
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ })

}]);