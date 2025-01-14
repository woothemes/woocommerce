"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[6435],{

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-constrained-tabbing/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+dom@4.0.1/node_modules/@wordpress/dom/build-module/index.js");
/* harmony import */ var _use_ref_effect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-ref-effect/index.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * In Dialogs/modals, the tabbing must be constrained to the content of
 * the wrapper element. This hook adds the behavior to the returned ref.
 *
 * @return {import('react').RefCallback<Element>} Element Ref.
 *
 * @example
 * ```js
 * import { useConstrainedTabbing } from '@wordpress/compose';
 *
 * const ConstrainedTabbingExample = () => {
 *     const constrainedTabbingRef = useConstrainedTabbing()
 *     return (
 *         <div ref={ constrainedTabbingRef }>
 *             <Button />
 *             <Button />
 *         </div>
 *     );
 * }
 * ```
 */
function useConstrainedTabbing() {
  return (0,_use_ref_effect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(( /** @type {HTMLElement} */node) => {
    function onKeyDown( /** @type {KeyboardEvent} */event) {
      const {
        key,
        shiftKey,
        target
      } = event;
      if (key !== 'Tab') {
        return;
      }
      const action = shiftKey ? 'findPrevious' : 'findNext';
      const nextElement = _wordpress_dom__WEBPACK_IMPORTED_MODULE_1__/* .focus */ .XC.tabbable[action]( /** @type {HTMLElement} */target) || null;

      // When the target element contains the element that is about to
      // receive focus, for example when the target is a tabbable
      // container, browsers may disagree on where to move focus next.
      // In this case we can't rely on native browsers behavior. We need
      // to manage focus instead.
      // See https://github.com/WordPress/gutenberg/issues/46041.
      if ( /** @type {HTMLElement} */target.contains(nextElement)) {
        event.preventDefault();
        nextElement?.focus();
        return;
      }

      // If the element that is about to receive focus is inside the
      // area, rely on native browsers behavior and let tabbing follow
      // the native tab sequence.
      if (node.contains(nextElement)) {
        return;
      }

      // If the element that is about to receive focus is outside the
      // area, move focus to a div and insert it at the start or end of
      // the area, depending on the direction. Without preventing default
      // behaviour, the browser will then move focus to the next element.
      const domAction = shiftKey ? 'append' : 'prepend';
      const {
        ownerDocument
      } = node;
      const trap = ownerDocument.createElement('div');
      trap.tabIndex = -1;
      node[domAction](trap);

      // Remove itself when the trap loses focus.
      trap.addEventListener('blur', () => node.removeChild(trap));
      trap.focus();
    }
    node.addEventListener('keydown', onKeyDown);
    return () => {
      node.removeEventListener('keydown', onKeyDown);
    };
  }, []);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useConstrainedTabbing);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-on-mount/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useFocusOnMount)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _wordpress_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+dom@4.0.1/node_modules/@wordpress/dom/build-module/index.js");
/* harmony import */ var _use_ref_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-ref-effect/index.js");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


/**
 * Hook used to focus the first tabbable element on mount.
 *
 * @param {boolean | 'firstElement'} focusOnMount Focus on mount mode.
 * @return {import('react').RefCallback<HTMLElement>} Ref callback.
 *
 * @example
 * ```js
 * import { useFocusOnMount } from '@wordpress/compose';
 *
 * const WithFocusOnMount = () => {
 *     const ref = useFocusOnMount()
 *     return (
 *         <div ref={ ref }>
 *             <Button />
 *             <Button />
 *         </div>
 *     );
 * }
 * ```
 */
function useFocusOnMount(focusOnMount = 'firstElement') {
  const focusOnMountRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(focusOnMount);

  /**
   * Sets focus on a DOM element.
   *
   * @param {HTMLElement} target The DOM element to set focus to.
   * @return {void}
   */
  const setFocus = target => {
    target.focus({
      // When focusing newly mounted dialogs,
      // the position of the popover is often not right on the first render
      // This prevents the layout shifts when focusing the dialogs.
      preventScroll: true
    });
  };

  /** @type {import('react').MutableRefObject<ReturnType<setTimeout> | undefined>} */
  const timerId = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    focusOnMountRef.current = focusOnMount;
  }, [focusOnMount]);
  return (0,_use_ref_effect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(node => {
    var _node$ownerDocument$a;
    if (!node || focusOnMountRef.current === false) {
      return;
    }
    if (node.contains((_node$ownerDocument$a = node.ownerDocument?.activeElement) !== null && _node$ownerDocument$a !== void 0 ? _node$ownerDocument$a : null)) {
      return;
    }
    if (focusOnMountRef.current === 'firstElement') {
      timerId.current = setTimeout(() => {
        const firstTabbable = _wordpress_dom__WEBPACK_IMPORTED_MODULE_2__/* .focus */ .XC.tabbable.find(node)[0];
        if (firstTabbable) {
          setFocus(firstTabbable);
        }
      }, 0);
      return;
    }
    setFocus(node);
    return () => {
      if (timerId.current) {
        clearTimeout(timerId.current);
      }
    };
  }, []);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-return/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * WordPress dependencies
 */


/** @type {Element|null} */
let origin = null;

/**
 * Adds the unmount behavior of returning focus to the element which had it
 * previously as is expected for roles like menus or dialogs.
 *
 * @param {() => void} [onFocusReturn] Overrides the default return behavior.
 * @return {import('react').RefCallback<HTMLElement>} Element Ref.
 *
 * @example
 * ```js
 * import { useFocusReturn } from '@wordpress/compose';
 *
 * const WithFocusReturn = () => {
 *     const ref = useFocusReturn()
 *     return (
 *         <div ref={ ref }>
 *             <Button />
 *             <Button />
 *         </div>
 *     );
 * }
 * ```
 */
function useFocusReturn(onFocusReturn) {
  /** @type {import('react').MutableRefObject<null | HTMLElement>} */
  const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  /** @type {import('react').MutableRefObject<null | Element>} */
  const focusedBeforeMount = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const onFocusReturnRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(onFocusReturn);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    onFocusReturnRef.current = onFocusReturn;
  }, [onFocusReturn]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(node => {
    if (node) {
      // Set ref to be used when unmounting.
      ref.current = node;

      // Only set when the node mounts.
      if (focusedBeforeMount.current) {
        return;
      }
      focusedBeforeMount.current = node.ownerDocument.activeElement;
    } else if (focusedBeforeMount.current) {
      const isFocused = ref.current?.contains(ref.current?.ownerDocument.activeElement);
      if (ref.current?.isConnected && !isFocused) {
        var _origin;
        (_origin = origin) !== null && _origin !== void 0 ? _origin : origin = focusedBeforeMount.current;
        return;
      }

      // Defer to the component's own explicit focus return behavior, if
      // specified. This allows for support that the `onFocusReturn`
      // decides to allow the default behavior to occur under some
      // conditions.
      if (onFocusReturnRef.current) {
        onFocusReturnRef.current();
      } else {
        /** @type {null|HTMLElement} */(!focusedBeforeMount.current.isConnected ? origin : focusedBeforeMount.current)?.focus();
      }
      origin = null;
    }
  }, []);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFocusReturn);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useMediaQuery)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * WordPress dependencies
 */

const matchMediaCache = new Map();

/**
 * A new MediaQueryList object for the media query
 *
 * @param {string} [query] Media Query.
 * @return {MediaQueryList|null} A new object for the media query
 */
function getMediaQueryList(query) {
  if (!query) {
    return null;
  }
  let match = matchMediaCache.get(query);
  if (match) {
    return match;
  }
  if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
    match = window.matchMedia(query);
    matchMediaCache.set(query, match);
    return match;
  }
  return null;
}

/**
 * Runs a media query and returns its value when it changes.
 *
 * @param {string} [query] Media Query.
 * @return {boolean} return value of the media query.
 */
function useMediaQuery(query) {
  const source = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const mediaQueryList = getMediaQueryList(query);
    return {
      /** @type {(onStoreChange: () => void) => () => void} */
      subscribe(onStoreChange) {
        if (!mediaQueryList) {
          return () => {};
        }

        // Avoid a fatal error when browsers don't support `addEventListener` on MediaQueryList.
        mediaQueryList.addEventListener?.('change', onStoreChange);
        return () => {
          mediaQueryList.removeEventListener?.('change', onStoreChange);
        };
      },
      getValue() {
        var _mediaQueryList$match;
        return (_mediaQueryList$match = mediaQueryList?.matches) !== null && _mediaQueryList$match !== void 0 ? _mediaQueryList$match : false;
      }
    };
  }, [query]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore)(source.subscribe, source.getValue, () => false);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-reduced-motion/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _use_media_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js");
/**
 * Internal dependencies
 */


/**
 * Hook returning whether the user has a preference for reduced motion.
 *
 * @return {boolean} Reduced motion preference value.
 */
const useReducedMotion = () => (0,_use_media_query__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)('(prefers-reduced-motion: reduce)');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useReducedMotion);
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

/***/ "../../node_modules/.pnpm/@wordpress+dom@4.0.1/node_modules/@wordpress/dom/build-module/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  XC: () => (/* binding */ build_module_focus)
});

// UNUSED EXPORTS: __unstableStripHTML, computeCaretRect, documentHasSelection, documentHasTextSelection, documentHasUncollapsedSelection, getFilesFromDataTransfer, getOffsetParent, getPhrasingContentSchema, getRectangleFromRange, getScrollContainer, insertAfter, isEmpty, isEntirelySelected, isFormElement, isHorizontalEdge, isNumberInput, isPhrasingContent, isRTL, isTextContent, isTextField, isVerticalEdge, placeCaretAtHorizontalEdge, placeCaretAtVerticalEdge, remove, removeInvalidHTML, replace, replaceTag, safeHTML, unwrap, wrap

// NAMESPACE OBJECT: ../../node_modules/.pnpm/@wordpress+dom@4.0.1/node_modules/@wordpress/dom/build-module/focusable.js
var focusable_namespaceObject = {};
__webpack_require__.r(focusable_namespaceObject);
__webpack_require__.d(focusable_namespaceObject, {
  find: () => (find)
});

// NAMESPACE OBJECT: ../../node_modules/.pnpm/@wordpress+dom@4.0.1/node_modules/@wordpress/dom/build-module/tabbable.js
var tabbable_namespaceObject = {};
__webpack_require__.r(tabbable_namespaceObject);
__webpack_require__.d(tabbable_namespaceObject, {
  find: () => (tabbable_find),
  findNext: () => (findNext),
  findPrevious: () => (findPrevious),
  isTabbableIndex: () => (isTabbableIndex)
});

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dom@4.0.1/node_modules/@wordpress/dom/build-module/focusable.js
/**
 * References:
 *
 * Focusable:
 *  - https://www.w3.org/TR/html5/editing.html#focus-management
 *
 * Sequential focus navigation:
 *  - https://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
 *
 * Disabled elements:
 *  - https://www.w3.org/TR/html5/disabled-elements.html#disabled-elements
 *
 * getClientRects algorithm (requiring layout box):
 *  - https://www.w3.org/TR/cssom-view-1/#extension-to-the-element-interface
 *
 * AREA elements associated with an IMG:
 *  - https://w3c.github.io/html/editing.html#data-model
 */

/**
 * Returns a CSS selector used to query for focusable elements.
 *
 * @param {boolean} sequential If set, only query elements that are sequentially
 *                             focusable. Non-interactive elements with a
 *                             negative `tabindex` are focusable but not
 *                             sequentially focusable.
 *                             https://html.spec.whatwg.org/multipage/interaction.html#the-tabindex-attribute
 *
 * @return {string} CSS selector.
 */
function buildSelector(sequential) {
  return [sequential ? '[tabindex]:not([tabindex^="-"])' : '[tabindex]', 'a[href]', 'button:not([disabled])', 'input:not([type="hidden"]):not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'iframe:not([tabindex^="-"])', 'object', 'embed', 'area[href]', '[contenteditable]:not([contenteditable=false])'].join(',');
}

/**
 * Returns true if the specified element is visible (i.e. neither display: none
 * nor visibility: hidden).
 *
 * @param {HTMLElement} element DOM element to test.
 *
 * @return {boolean} Whether element is visible.
 */
function isVisible(element) {
  return element.offsetWidth > 0 || element.offsetHeight > 0 || element.getClientRects().length > 0;
}

/**
 * Returns true if the specified area element is a valid focusable element, or
 * false otherwise. Area is only focusable if within a map where a named map
 * referenced by an image somewhere in the document.
 *
 * @param {HTMLAreaElement} element DOM area element to test.
 *
 * @return {boolean} Whether area element is valid for focus.
 */
function isValidFocusableArea(element) {
  /** @type {HTMLMapElement | null} */
  const map = element.closest('map[name]');
  if (!map) {
    return false;
  }

  /** @type {HTMLImageElement | null} */
  const img = element.ownerDocument.querySelector('img[usemap="#' + map.name + '"]');
  return !!img && isVisible(img);
}

/**
 * Returns all focusable elements within a given context.
 *
 * @param {Element} context              Element in which to search.
 * @param {Object}  options
 * @param {boolean} [options.sequential] If set, only return elements that are
 *                                       sequentially focusable.
 *                                       Non-interactive elements with a
 *                                       negative `tabindex` are focusable but
 *                                       not sequentially focusable.
 *                                       https://html.spec.whatwg.org/multipage/interaction.html#the-tabindex-attribute
 *
 * @return {HTMLElement[]} Focusable elements.
 */
function find(context, {
  sequential = false
} = {}) {
  /** @type {NodeListOf<HTMLElement>} */
  const elements = context.querySelectorAll(buildSelector(sequential));
  return Array.from(elements).filter(element => {
    if (!isVisible(element)) {
      return false;
    }
    const {
      nodeName
    } = element;
    if ('AREA' === nodeName) {
      return isValidFocusableArea( /** @type {HTMLAreaElement} */element);
    }
    return true;
  });
}
//# sourceMappingURL=focusable.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dom@4.0.1/node_modules/@wordpress/dom/build-module/tabbable.js
/**
 * Internal dependencies
 */


/**
 * Returns the tab index of the given element. In contrast with the tabIndex
 * property, this normalizes the default (0) to avoid browser inconsistencies,
 * operating under the assumption that this function is only ever called with a
 * focusable node.
 *
 * @see https://bugzilla.mozilla.org/show_bug.cgi?id=1190261
 *
 * @param {Element} element Element from which to retrieve.
 *
 * @return {number} Tab index of element (default 0).
 */
function getTabIndex(element) {
  const tabIndex = element.getAttribute('tabindex');
  return tabIndex === null ? 0 : parseInt(tabIndex, 10);
}

/**
 * Returns true if the specified element is tabbable, or false otherwise.
 *
 * @param {Element} element Element to test.
 *
 * @return {boolean} Whether element is tabbable.
 */
function isTabbableIndex(element) {
  return getTabIndex(element) !== -1;
}

/** @typedef {HTMLElement & { type?: string, checked?: boolean, name?: string }} MaybeHTMLInputElement */

/**
 * Returns a stateful reducer function which constructs a filtered array of
 * tabbable elements, where at most one radio input is selected for a given
 * name, giving priority to checked input, falling back to the first
 * encountered.
 *
 * @return {(acc: MaybeHTMLInputElement[], el: MaybeHTMLInputElement) => MaybeHTMLInputElement[]} Radio group collapse reducer.
 */
function createStatefulCollapseRadioGroup() {
  /** @type {Record<string, MaybeHTMLInputElement>} */
  const CHOSEN_RADIO_BY_NAME = {};
  return function collapseRadioGroup( /** @type {MaybeHTMLInputElement[]} */result, /** @type {MaybeHTMLInputElement} */element) {
    const {
      nodeName,
      type,
      checked,
      name
    } = element;

    // For all non-radio tabbables, construct to array by concatenating.
    if (nodeName !== 'INPUT' || type !== 'radio' || !name) {
      return result.concat(element);
    }
    const hasChosen = CHOSEN_RADIO_BY_NAME.hasOwnProperty(name);

    // Omit by skipping concatenation if the radio element is not chosen.
    const isChosen = checked || !hasChosen;
    if (!isChosen) {
      return result;
    }

    // At this point, if there had been a chosen element, the current
    // element is checked and should take priority. Retroactively remove
    // the element which had previously been considered the chosen one.
    if (hasChosen) {
      const hadChosenElement = CHOSEN_RADIO_BY_NAME[name];
      result = result.filter(e => e !== hadChosenElement);
    }
    CHOSEN_RADIO_BY_NAME[name] = element;
    return result.concat(element);
  };
}

/**
 * An array map callback, returning an object with the element value and its
 * array index location as properties. This is used to emulate a proper stable
 * sort where equal tabIndex should be left in order of their occurrence in the
 * document.
 *
 * @param {HTMLElement} element Element.
 * @param {number}      index   Array index of element.
 *
 * @return {{ element: HTMLElement, index: number }} Mapped object with element, index.
 */
function mapElementToObjectTabbable(element, index) {
  return {
    element,
    index
  };
}

/**
 * An array map callback, returning an element of the given mapped object's
 * element value.
 *
 * @param {{ element: HTMLElement }} object Mapped object with element.
 *
 * @return {HTMLElement} Mapped object element.
 */
function mapObjectTabbableToElement(object) {
  return object.element;
}

/**
 * A sort comparator function used in comparing two objects of mapped elements.
 *
 * @see mapElementToObjectTabbable
 *
 * @param {{ element: HTMLElement, index: number }} a First object to compare.
 * @param {{ element: HTMLElement, index: number }} b Second object to compare.
 *
 * @return {number} Comparator result.
 */
function compareObjectTabbables(a, b) {
  const aTabIndex = getTabIndex(a.element);
  const bTabIndex = getTabIndex(b.element);
  if (aTabIndex === bTabIndex) {
    return a.index - b.index;
  }
  return aTabIndex - bTabIndex;
}

/**
 * Givin focusable elements, filters out tabbable element.
 *
 * @param {HTMLElement[]} focusables Focusable elements to filter.
 *
 * @return {HTMLElement[]} Tabbable elements.
 */
function filterTabbable(focusables) {
  return focusables.filter(isTabbableIndex).map(mapElementToObjectTabbable).sort(compareObjectTabbables).map(mapObjectTabbableToElement).reduce(createStatefulCollapseRadioGroup(), []);
}

/**
 * @param {Element} context
 * @return {HTMLElement[]} Tabbable elements within the context.
 */
function tabbable_find(context) {
  return filterTabbable(find(context));
}

/**
 * Given a focusable element, find the preceding tabbable element.
 *
 * @param {Element} element The focusable element before which to look. Defaults
 *                          to the active element.
 *
 * @return {HTMLElement|undefined} Preceding tabbable element.
 */
function findPrevious(element) {
  return filterTabbable(find(element.ownerDocument.body)).reverse().find(focusable =>
  // eslint-disable-next-line no-bitwise
  element.compareDocumentPosition(focusable) & element.DOCUMENT_POSITION_PRECEDING);
}

/**
 * Given a focusable element, find the next tabbable element.
 *
 * @param {Element} element The focusable element after which to look. Defaults
 *                          to the active element.
 *
 * @return {HTMLElement|undefined} Next tabbable element.
 */
function findNext(element) {
  return filterTabbable(find(element.ownerDocument.body)).find(focusable =>
  // eslint-disable-next-line no-bitwise
  element.compareDocumentPosition(focusable) & element.DOCUMENT_POSITION_FOLLOWING);
}
//# sourceMappingURL=tabbable.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dom@4.0.1/node_modules/@wordpress/dom/build-module/index.js
/**
 * Internal dependencies
 */



/**
 * Object grouping `focusable` and `tabbable` utils
 * under the keys with the same name.
 */
const build_module_focus = {
  focusable: focusable_namespaceObject,
  tabbable: tabbable_namespaceObject
};



//# sourceMappingURL=index.js.map

/***/ })

}]);