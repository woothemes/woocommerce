"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[2173],{

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot-fill-context.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _wordpress_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+warning@3.0.1/node_modules/@wordpress/warning/build-module/index.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/utils/observable-map/index.js");
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */

const initialContextValue = {
  slots: (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__/* .observableMap */ .u)(),
  fills: (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__/* .observableMap */ .u)(),
  registerSlot: () => {
    globalThis.SCRIPT_DEBUG === true ? (0,_wordpress_warning__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('Components must be wrapped within `SlotFillProvider`. ' + 'See https://developer.wordpress.org/block-editor/components/slot-fill/') : void 0;
  },
  updateSlot: () => {},
  unregisterSlot: () => {},
  registerFill: () => {},
  unregisterFill: () => {},
  // This helps the provider know if it's using the default context value or not.
  isDefault: true
};
const SlotFillContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createContext)(initialContextValue);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SlotFillContext);
//# sourceMappingURL=slot-fill-context.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/use-slot.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useSlot)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-observable-value/index.js");
/* harmony import */ var _slot_fill_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot-fill-context.js");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

function useSlot(name) {
  const registry = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_slot_fill_context__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A);
  const slot = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(registry.slots, name);
  const api = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    updateSlot: fillProps => registry.updateSlot(name, fillProps),
    unregisterSlot: ref => registry.unregisterSlot(name, ref),
    registerFill: ref => registry.registerFill(name, ref),
    unregisterFill: ref => registry.unregisterFill(name, ref)
  }), [name, registry]);
  return {
    ...slot,
    ...api
  };
}
//# sourceMappingURL=use-slot.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/slot-fill/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SQ: () => (/* binding */ slot_fill_Fill),
  Kq: () => (/* binding */ Provider),
  DX: () => (/* binding */ slot_fill_Slot),
  VI: () => (/* binding */ createPrivateSlotFill),
  QJ: () => (/* binding */ createSlotFill)
});

// UNUSED EXPORTS: UnforwardedSlot, useSlot, useSlotFills

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/slot-fill/context.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */

const initialValue = {
  registerSlot: () => {},
  unregisterSlot: () => {},
  registerFill: () => {},
  unregisterFill: () => {},
  getSlot: () => undefined,
  getFills: () => [],
  subscribe: () => () => {}
};
const SlotFillContext = (0,react.createContext)(initialValue);
/* harmony default export */ const context = (SlotFillContext);
//# sourceMappingURL=context.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/slot-fill/use-slot.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

/**
 * React hook returning the active slot given a name.
 *
 * @param name Slot name.
 * @return Slot object.
 */
const useSlot = name => {
  const {
    getSlot,
    subscribe
  } = (0,react.useContext)(context);
  return (0,react.useSyncExternalStore)(subscribe, () => getSlot(name), () => getSlot(name));
};
/* harmony default export */ const use_slot = (useSlot);
//# sourceMappingURL=use-slot.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/slot-fill/fill.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


function Fill({
  name,
  children
}) {
  const {
    registerFill,
    unregisterFill
  } = (0,react.useContext)(context);
  const slot = use_slot(name);
  const ref = (0,react.useRef)({
    name,
    children
  });
  (0,react.useLayoutEffect)(() => {
    const refValue = ref.current;
    registerFill(name, refValue);
    return () => unregisterFill(name, refValue);
    // Ignore reason: the useLayoutEffects here are written to fire at specific times, and introducing new dependencies could cause unexpected changes in behavior.
    // We'll leave them as-is until a more detailed investigation/refactor can be performed.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  (0,react.useLayoutEffect)(() => {
    ref.current.children = children;
    if (slot) {
      slot.forceUpdate();
    }
    // Ignore reason: the useLayoutEffects here are written to fire at specific times, and introducing new dependencies could cause unexpected changes in behavior.
    // We'll leave them as-is until a more detailed investigation/refactor can be performed.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);
  (0,react.useLayoutEffect)(() => {
    if (name === ref.current.name) {
      // Ignore initial effect.
      return;
    }
    unregisterFill(ref.current.name, ref.current);
    ref.current.name = name;
    registerFill(name, ref.current);
    // Ignore reason: the useLayoutEffects here are written to fire at specific times, and introducing new dependencies could cause unexpected changes in behavior.
    // We'll leave them as-is until a more detailed investigation/refactor can be performed.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);
  return null;
}
//# sourceMappingURL=fill.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+element@6.0.1/node_modules/@wordpress/element/build-module/utils.js
/**
 * Checks if the provided WP element is empty.
 *
 * @param {*} element WP element to check.
 * @return {boolean} True when an element is considered empty.
 */
const isEmptyElement = element => {
  if (typeof element === 'number') {
    return false;
  }
  if (typeof element?.valueOf() === 'string' || Array.isArray(element)) {
    return !element.length;
  }
  return !element;
};
//# sourceMappingURL=utils.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/slot-fill/slot.js
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
 * Whether the argument is a function.
 *
 * @param maybeFunc The argument to check.
 * @return True if the argument is a function, false otherwise.
 */
function isFunction(maybeFunc) {
  return typeof maybeFunc === 'function';
}
class SlotComponent extends react.Component {
  constructor(props) {
    super(props);
    this.isUnmounted = false;
  }
  componentDidMount() {
    const {
      registerSlot
    } = this.props;
    this.isUnmounted = false;
    registerSlot(this.props.name, this);
  }
  componentWillUnmount() {
    const {
      unregisterSlot
    } = this.props;
    this.isUnmounted = true;
    unregisterSlot(this.props.name, this);
  }
  componentDidUpdate(prevProps) {
    const {
      name,
      unregisterSlot,
      registerSlot
    } = this.props;
    if (prevProps.name !== name) {
      unregisterSlot(prevProps.name, this);
      registerSlot(name, this);
    }
  }
  forceUpdate() {
    if (this.isUnmounted) {
      return;
    }
    super.forceUpdate();
  }
  render() {
    var _getFills;
    const {
      children,
      name,
      fillProps = {},
      getFills
    } = this.props;
    const fills = ((_getFills = getFills(name, this)) !== null && _getFills !== void 0 ? _getFills : []).map(fill => {
      const fillChildren = isFunction(fill.children) ? fill.children(fillProps) : fill.children;
      return react.Children.map(fillChildren, (child, childIndex) => {
        if (!child || typeof child === 'string') {
          return child;
        }
        let childKey = childIndex;
        if (typeof child === 'object' && 'key' in child && child?.key) {
          childKey = child.key;
        }
        return (0,react.cloneElement)(child, {
          key: childKey
        });
      });
    }).filter(
    // In some cases fills are rendered only when some conditions apply.
    // This ensures that we only use non-empty fills when rendering, i.e.,
    // it allows us to render wrappers only when the fills are actually present.
    element => !isEmptyElement(element));
    return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: isFunction(children) ? children(fills) : fills
    });
  }
}
const Slot = props => /*#__PURE__*/(0,jsx_runtime.jsx)(context.Consumer, {
  children: ({
    registerSlot,
    unregisterSlot,
    getFills
  }) => /*#__PURE__*/(0,jsx_runtime.jsx)(SlotComponent, {
    ...props,
    registerSlot: registerSlot,
    unregisterSlot: unregisterSlot,
    getFills: getFills
  })
});
/* harmony default export */ const slot = (Slot);
//# sourceMappingURL=slot.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js
var react_dom = __webpack_require__("../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/use-slot.js
var bubbles_virtually_use_slot = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/use-slot.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/style-provider/index.js
var style_provider = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/style-provider/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/fill.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function useForceUpdate() {
  const [, setState] = (0,react.useState)({});
  const mounted = (0,react.useRef)(true);
  (0,react.useEffect)(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  return () => {
    if (mounted.current) {
      setState({});
    }
  };
}
function fill_Fill(props) {
  var _slot$fillProps;
  const {
    name,
    children
  } = props;
  const {
    registerFill,
    unregisterFill,
    ...slot
  } = (0,bubbles_virtually_use_slot/* default */.A)(name);
  const rerender = useForceUpdate();
  const ref = (0,react.useRef)({
    rerender
  });
  (0,react.useEffect)(() => {
    // We register fills so we can keep track of their existence.
    // Some Slot implementations need to know if there're already fills
    // registered so they can choose to render themselves or not.
    registerFill(ref);
    return () => {
      unregisterFill(ref);
    };
  }, [registerFill, unregisterFill]);
  if (!slot.ref || !slot.ref.current) {
    return null;
  }

  // When using a `Fill`, the `children` will be rendered in the document of the
  // `Slot`. This means that we need to wrap the `children` in a `StyleProvider`
  // to make sure we're referencing the right document/iframe (instead of the
  // context of the `Fill`'s parent).
  const wrappedChildren = /*#__PURE__*/(0,jsx_runtime.jsx)(style_provider/* default */.A, {
    document: slot.ref.current.ownerDocument,
    children: typeof children === 'function' ? children((_slot$fillProps = slot.fillProps) !== null && _slot$fillProps !== void 0 ? _slot$fillProps : {}) : children
  });
  return (0,react_dom.createPortal)(wrappedChildren, slot.ref.current);
}
//# sourceMappingURL=fill.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js
var use_merge_refs = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/view/component.js
var component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/view/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot-fill-context.js
var slot_fill_context = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot-fill-context.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function slot_Slot(props, forwardedRef) {
  const {
    name,
    fillProps = {},
    as,
    // `children` is not allowed. However, if it is passed,
    // it will be displayed as is, so remove `children`.
    // @ts-ignore
    children,
    ...restProps
  } = props;
  const {
    registerSlot,
    unregisterSlot,
    ...registry
  } = (0,react.useContext)(slot_fill_context/* default */.A);
  const ref = (0,react.useRef)(null);
  (0,react.useLayoutEffect)(() => {
    registerSlot(name, ref, fillProps);
    return () => {
      unregisterSlot(name, ref);
    };
    // Ignore reason: We don't want to unregister and register the slot whenever
    // `fillProps` change, which would cause the fill to be re-mounted. Instead,
    // we can just update the slot (see hook below).
    // For more context, see https://github.com/WordPress/gutenberg/pull/44403#discussion_r994415973
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registerSlot, unregisterSlot, name]);
  // fillProps may be an update that interacts with the layout, so we
  // useLayoutEffect.
  (0,react.useLayoutEffect)(() => {
    registry.updateSlot(name, fillProps);
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(component/* default */.A, {
    as: as,
    ref: (0,use_merge_refs/* default */.A)([forwardedRef, ref]),
    ...restProps
  });
}
/* harmony default export */ const bubbles_virtually_slot = ((0,react.forwardRef)(slot_Slot));
//# sourceMappingURL=slot.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.10.0/node_modules/@wordpress/is-shallow-equal/build-module/index.js + 1 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.10.0/node_modules/@wordpress/is-shallow-equal/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/utils/observable-map/index.js
var observable_map = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/utils/observable-map/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot-fill-provider.js
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


function createSlotRegistry() {
  const slots = (0,observable_map/* observableMap */.u)();
  const fills = (0,observable_map/* observableMap */.u)();
  const registerSlot = (name, ref, fillProps) => {
    const slot = slots.get(name);
    slots.set(name, {
      ...slot,
      ref: ref || slot?.ref,
      fillProps: fillProps || slot?.fillProps || {}
    });
  };
  const unregisterSlot = (name, ref) => {
    // Make sure we're not unregistering a slot registered by another element
    // See https://github.com/WordPress/gutenberg/pull/19242#issuecomment-590295412
    if (slots.get(name)?.ref === ref) {
      slots.delete(name);
    }
  };
  const updateSlot = (name, fillProps) => {
    const slot = slots.get(name);
    if (!slot) {
      return;
    }
    if ((0,build_module/* default */.Ay)(slot.fillProps, fillProps)) {
      return;
    }
    slot.fillProps = fillProps;
    const slotFills = fills.get(name);
    if (slotFills) {
      // Force update fills.
      slotFills.forEach(fill => fill.current.rerender());
    }
  };
  const registerFill = (name, ref) => {
    fills.set(name, [...(fills.get(name) || []), ref]);
  };
  const unregisterFill = (name, ref) => {
    const fillsForName = fills.get(name);
    if (!fillsForName) {
      return;
    }
    fills.set(name, fillsForName.filter(fillRef => fillRef !== ref));
  };
  return {
    slots,
    fills,
    registerSlot,
    updateSlot,
    unregisterSlot,
    registerFill,
    unregisterFill
  };
}
function SlotFillProvider({
  children
}) {
  const [registry] = (0,react.useState)(createSlotRegistry);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(slot_fill_context/* default */.A.Provider, {
    value: registry,
    children: children
  });
}
//# sourceMappingURL=slot-fill-provider.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/slot-fill/provider.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function provider_createSlotRegistry() {
  const slots = {};
  const fills = {};
  let listeners = [];
  function registerSlot(name, slot) {
    const previousSlot = slots[name];
    slots[name] = slot;
    triggerListeners();

    // Sometimes the fills are registered after the initial render of slot
    // But before the registerSlot call, we need to rerender the slot.
    forceUpdateSlot(name);

    // If a new instance of a slot is being mounted while another with the
    // same name exists, force its update _after_ the new slot has been
    // assigned into the instance, such that its own rendering of children
    // will be empty (the new Slot will subsume all fills for this name).
    if (previousSlot) {
      previousSlot.forceUpdate();
    }
  }
  function registerFill(name, instance) {
    fills[name] = [...(fills[name] || []), instance];
    forceUpdateSlot(name);
  }
  function unregisterSlot(name, instance) {
    // If a previous instance of a Slot by this name unmounts, do nothing,
    // as the slot and its fills should only be removed for the current
    // known instance.
    if (slots[name] !== instance) {
      return;
    }
    delete slots[name];
    triggerListeners();
  }
  function unregisterFill(name, instance) {
    var _fills$name$filter;
    fills[name] = (_fills$name$filter = fills[name]?.filter(fill => fill !== instance)) !== null && _fills$name$filter !== void 0 ? _fills$name$filter : [];
    forceUpdateSlot(name);
  }
  function getSlot(name) {
    return slots[name];
  }
  function getFills(name, slotInstance) {
    // Fills should only be returned for the current instance of the slot
    // in which they occupy.
    if (slots[name] !== slotInstance) {
      return [];
    }
    return fills[name];
  }
  function forceUpdateSlot(name) {
    const slot = getSlot(name);
    if (slot) {
      slot.forceUpdate();
    }
  }
  function triggerListeners() {
    listeners.forEach(listener => listener());
  }
  function subscribe(listener) {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }
  return {
    registerSlot,
    unregisterSlot,
    registerFill,
    unregisterFill,
    getSlot,
    getFills,
    subscribe
  };
}
function provider_SlotFillProvider({
  children
}) {
  const [contextValue] = (0,react.useState)(provider_createSlotRegistry);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(context.Provider, {
    value: contextValue,
    children: children
  });
}
/* harmony default export */ const provider = (provider_SlotFillProvider);
//# sourceMappingURL=provider.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/slot-fill/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */












function slot_fill_Fill(props) {
  // We're adding both Fills here so they can register themselves before
  // their respective slot has been registered. Only the Fill that has a slot
  // will render. The other one will return null.
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Fill, {
      ...props
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(fill_Fill, {
      ...props
    })]
  });
}
function UnforwardedSlot(props, ref) {
  const {
    bubblesVirtually,
    ...restProps
  } = props;
  if (bubblesVirtually) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(bubbles_virtually_slot, {
      ...restProps,
      ref: ref
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(slot, {
    ...restProps
  });
}
const slot_fill_Slot = (0,react.forwardRef)(UnforwardedSlot);
function Provider({
  children,
  passthrough = false
}) {
  const parent = (0,react.useContext)(slot_fill_context/* default */.A);
  if (!parent.isDefault && passthrough) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: children
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(provider, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(SlotFillProvider, {
      children: children
    })
  });
}
function createSlotFill(key) {
  const baseName = typeof key === 'symbol' ? key.description : key;
  const FillComponent = props => /*#__PURE__*/(0,jsx_runtime.jsx)(slot_fill_Fill, {
    name: key,
    ...props
  });
  FillComponent.displayName = `${baseName}Fill`;
  const SlotComponent = props => /*#__PURE__*/(0,jsx_runtime.jsx)(slot_fill_Slot, {
    name: key,
    ...props
  });
  SlotComponent.displayName = `${baseName}Slot`;
  SlotComponent.__unstableName = key;
  return {
    Fill: FillComponent,
    Slot: SlotComponent
  };
}
const createPrivateSlotFill = name => {
  const privateKey = Symbol(name);
  const privateSlotFill = createSlotFill(privateKey);
  return {
    privateKey,
    ...privateSlotFill
  };
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/style-provider/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   N: () => (/* binding */ StyleProvider)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js");
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */

const uuidCache = new Set();
// Use a weak map so that when the container is detached it's automatically
// dereferenced to avoid memory leak.
const containerCacheMap = new WeakMap();
const memoizedCreateCacheWithContainer = container => {
  if (containerCacheMap.has(container)) {
    return containerCacheMap.get(container);
  }

  // Emotion only accepts alphabetical and hyphenated keys so we just
  // strip the numbers from the UUID. It _should_ be fine.
  let key = uuid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A().replace(/[0-9]/g, '');
  while (uuidCache.has(key)) {
    key = uuid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A().replace(/[0-9]/g, '');
  }
  uuidCache.add(key);
  const cache = (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    container,
    key
  });
  containerCacheMap.set(container, cache);
  return cache;
};
function StyleProvider(props) {
  const {
    children,
    document
  } = props;
  if (!document) {
    return null;
  }
  const cache = memoizedCreateCacheWithContainer(document.head);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.C, {
    value: cache,
    children: children
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyleProvider);
//# sourceMappingURL=index.js.map

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

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-observable-value/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useObservableValue)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

/**
 * React hook that lets you observe an entry in an `ObservableMap`. The hook returns the
 * current value corresponding to the key, or `undefined` when there is no value stored.
 * It also observes changes to the value and triggers an update of the calling component
 * in case the value changes.
 *
 * @template K    The type of the keys in the map.
 * @template V    The type of the values in the map.
 * @param    map  The `ObservableMap` to observe.
 * @param    name The map key to observe.
 * @return   The value corresponding to the map key requested.
 */
function useObservableValue(map, name) {
  const [subscribe, getValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [listener => map.subscribe(name, listener), () => map.get(name)], [map, name]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore)(subscribe, getValue, getValue);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/utils/observable-map/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ observableMap)
/* harmony export */ });
/**
 * A constructor (factory) for `ObservableMap`, a map-like key/value data structure
 * where the individual entries are observable: using the `subscribe` method, you can
 * subscribe to updates for a particular keys. Each subscriber always observes one
 * specific key and is not notified about any unrelated changes (for different keys)
 * in the `ObservableMap`.
 *
 * @template K The type of the keys in the map.
 * @template V The type of the values in the map.
 * @return   A new instance of the `ObservableMap` type.
 */
function observableMap() {
  const map = new Map();
  const listeners = new Map();
  function callListeners(name) {
    const list = listeners.get(name);
    if (!list) {
      return;
    }
    for (const listener of list) {
      listener();
    }
  }
  return {
    get(name) {
      return map.get(name);
    },
    set(name, value) {
      map.set(name, value);
      callListeners(name);
    },
    delete(name) {
      map.delete(name);
      callListeners(name);
    },
    subscribe(name, listener) {
      let list = listeners.get(name);
      if (!list) {
        list = new Set();
        listeners.set(name, list);
      }
      list.add(listener);
      return () => {
        list.delete(listener);
        if (list.size === 0) {
          listeners.delete(name);
        }
      };
    }
  };
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.10.0/node_modules/@wordpress/is-shallow-equal/build-module/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (/* binding */ isShallowEqual)
});

// UNUSED EXPORTS: isShallowEqualArrays, isShallowEqualObjects

// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.10.0/node_modules/@wordpress/is-shallow-equal/build-module/objects.js
var objects = __webpack_require__("../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.10.0/node_modules/@wordpress/is-shallow-equal/build-module/objects.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.10.0/node_modules/@wordpress/is-shallow-equal/build-module/arrays.js
/**
 * Returns true if the two arrays are shallow equal, or false otherwise.
 *
 * @param {any[]} a First array to compare.
 * @param {any[]} b Second array to compare.
 *
 * @return {boolean} Whether the two arrays are shallow equal.
 */
function isShallowEqualArrays(a, b) {
  if (a === b) {
    return true;
  }
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0, len = a.length; i < len; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
//# sourceMappingURL=arrays.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.10.0/node_modules/@wordpress/is-shallow-equal/build-module/index.js
/**
 * Internal dependencies
 */





/**
 * @typedef {Record<string, any>} ComparableObject
 */

/**
 * Returns true if the two arrays or objects are shallow equal, or false
 * otherwise. Also handles primitive values, just in case.
 *
 * @param {unknown} a First object or array to compare.
 * @param {unknown} b Second object or array to compare.
 *
 * @return {boolean} Whether the two values are shallow equal.
 */
function isShallowEqual(a, b) {
  if (a && b) {
    if (a.constructor === Object && b.constructor === Object) {
      return (0,objects/* default */.A)(a, b);
    } else if (Array.isArray(a) && Array.isArray(b)) {
      return isShallowEqualArrays(a, b);
    }
  }
  return a === b;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.10.0/node_modules/@wordpress/is-shallow-equal/build-module/objects.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ isShallowEqualObjects)
/* harmony export */ });
/**
 * Returns true if the two objects are shallow equal, or false otherwise.
 *
 * @param {import('.').ComparableObject} a First object to compare.
 * @param {import('.').ComparableObject} b Second object to compare.
 *
 * @return {boolean} Whether the two objects are shallow equal.
 */
function isShallowEqualObjects(a, b) {
  if (a === b) {
    return true;
  }
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false;
  }
  let i = 0;
  while (i < aKeys.length) {
    const key = aKeys[i];
    const aValue = a[key];
    if (
    // In iterating only the keys of the first object after verifying
    // equal lengths, account for the case that an explicit `undefined`
    // value in the first is implicitly undefined in the second.
    //
    // Example: isShallowEqualObjects( { a: undefined }, { b: 5 } )
    aValue === undefined && !b.hasOwnProperty(key) || aValue !== b[key]) {
      return false;
    }
    i++;
  }
  return true;
}
//# sourceMappingURL=objects.js.map

/***/ })

}]);