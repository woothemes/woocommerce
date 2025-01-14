"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[2214],{

/***/ "../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/4R3V3JGP.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IA: () => (/* binding */ __spreadValues),
/* harmony export */   YG: () => (/* binding */ __objRest),
/* harmony export */   ko: () => (/* binding */ __spreadProps)
/* harmony export */ });
"use client";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/DLOEKDPY.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bm: () => (/* binding */ isButton),
/* harmony export */   Sw: () => (/* binding */ canUseDOM),
/* harmony export */   Tc: () => (/* binding */ getPopupRole),
/* harmony export */   YE: () => (/* binding */ getDocument),
/* harmony export */   bq: () => (/* binding */ getActiveElement),
/* harmony export */   cK: () => (/* binding */ matches),
/* harmony export */   cn: () => (/* binding */ getPopupItemRole),
/* harmony export */   gR: () => (/* binding */ contains),
/* harmony export */   kp: () => (/* binding */ closest),
/* harmony export */   mB: () => (/* binding */ isTextField),
/* harmony export */   qj: () => (/* binding */ getScrollingElement),
/* harmony export */   qt: () => (/* binding */ isFrame),
/* harmony export */   zN: () => (/* binding */ isVisible),
/* harmony export */   zk: () => (/* binding */ getWindow)
/* harmony export */ });
/* unused harmony exports getTextboxSelection, scrollIntoViewIfNeeded, isPartiallyHidden, setSelectionRange */
"use client";

// src/utils/dom.ts
var canUseDOM = checkIsBrowser();
function checkIsBrowser() {
  var _a;
  return typeof window !== "undefined" && !!((_a = window.document) == null ? void 0 : _a.createElement);
}
function getDocument(node) {
  return node ? node.ownerDocument || node : document;
}
function getWindow(node) {
  return getDocument(node).defaultView || window;
}
function getActiveElement(node, activeDescendant = false) {
  const { activeElement } = getDocument(node);
  if (!(activeElement == null ? void 0 : activeElement.nodeName)) {
    return null;
  }
  if (isFrame(activeElement) && activeElement.contentDocument) {
    return getActiveElement(
      activeElement.contentDocument.body,
      activeDescendant
    );
  }
  if (activeDescendant) {
    const id = activeElement.getAttribute("aria-activedescendant");
    if (id) {
      const element = getDocument(activeElement).getElementById(id);
      if (element) {
        return element;
      }
    }
  }
  return activeElement;
}
function contains(parent, child) {
  return parent === child || parent.contains(child);
}
function isFrame(element) {
  return element.tagName === "IFRAME";
}
function isButton(element) {
  const tagName = element.tagName.toLowerCase();
  if (tagName === "button")
    return true;
  if (tagName === "input" && element.type) {
    return buttonInputTypes.indexOf(element.type) !== -1;
  }
  return false;
}
var buttonInputTypes = [
  "button",
  "color",
  "file",
  "image",
  "reset",
  "submit"
];
function matches(element, selectors) {
  if ("matches" in element) {
    return element.matches(selectors);
  }
  if ("msMatchesSelector" in element) {
    return element.msMatchesSelector(selectors);
  }
  return element.webkitMatchesSelector(selectors);
}
function isVisible(element) {
  const htmlElement = element;
  return htmlElement.offsetWidth > 0 || htmlElement.offsetHeight > 0 || element.getClientRects().length > 0;
}
function closest(element, selectors) {
  if ("closest" in element)
    return element.closest(selectors);
  do {
    if (matches(element, selectors))
      return element;
    element = element.parentElement || element.parentNode;
  } while (element !== null && element.nodeType === 1);
  return null;
}
function isTextField(element) {
  try {
    const isTextInput = element instanceof HTMLInputElement && element.selectionStart !== null;
    const isTextArea = element.tagName === "TEXTAREA";
    return isTextInput || isTextArea || false;
  } catch (error) {
    return false;
  }
}
function getPopupRole(element, fallback) {
  const allowedPopupRoles = ["dialog", "menu", "listbox", "tree", "grid"];
  const role = element == null ? void 0 : element.getAttribute("role");
  if (role && allowedPopupRoles.indexOf(role) !== -1) {
    return role;
  }
  return fallback;
}
function getPopupItemRole(element, fallback) {
  var _a;
  const itemRoleByPopupRole = {
    menu: "menuitem",
    listbox: "option",
    tree: "treeitem",
    grid: "gridcell"
  };
  const popupRole = getPopupRole(element);
  if (!popupRole)
    return fallback;
  const key = popupRole;
  return (_a = itemRoleByPopupRole[key]) != null ? _a : fallback;
}
function getTextboxSelection(element) {
  let start = 0;
  let end = 0;
  if (isTextField(element)) {
    start = element.selectionStart || 0;
    end = element.selectionEnd || 0;
  } else if (element.isContentEditable) {
    const selection = getDocument(element).getSelection();
    if ((selection == null ? void 0 : selection.rangeCount) && selection.anchorNode && contains(element, selection.anchorNode) && selection.focusNode && contains(element, selection.focusNode)) {
      const range = selection.getRangeAt(0);
      const nextRange = range.cloneRange();
      nextRange.selectNodeContents(element);
      nextRange.setEnd(range.startContainer, range.startOffset);
      start = nextRange.toString().length;
      nextRange.setEnd(range.endContainer, range.endOffset);
      end = nextRange.toString().length;
    }
  }
  return { start, end };
}
function scrollIntoViewIfNeeded(element, arg) {
  if (isPartiallyHidden(element) && "scrollIntoView" in element) {
    element.scrollIntoView(arg);
  }
}
function getScrollingElement(element) {
  if (!element)
    return null;
  if (element.clientHeight && element.scrollHeight > element.clientHeight) {
    const { overflowY } = getComputedStyle(element);
    const isScrollable = overflowY !== "visible" && overflowY !== "hidden";
    if (isScrollable)
      return element;
  } else if (element.clientWidth && element.scrollWidth > element.clientWidth) {
    const { overflowX } = getComputedStyle(element);
    const isScrollable = overflowX !== "visible" && overflowX !== "hidden";
    if (isScrollable)
      return element;
  }
  return getScrollingElement(element.parentElement) || document.scrollingElement || document.body;
}
function isPartiallyHidden(element) {
  const elementRect = element.getBoundingClientRect();
  const scroller = getScrollingElement(element);
  if (!scroller)
    return false;
  const scrollerRect = scroller.getBoundingClientRect();
  const isHTML = scroller.tagName === "HTML";
  const scrollerTop = isHTML ? scrollerRect.top + scroller.scrollTop : scrollerRect.top;
  const scrollerBottom = isHTML ? scroller.clientHeight : scrollerRect.bottom;
  const scrollerLeft = isHTML ? scrollerRect.left + scroller.scrollLeft : scrollerRect.left;
  const scrollerRight = isHTML ? scroller.clientWidth : scrollerRect.right;
  const top = elementRect.top < scrollerTop;
  const left = elementRect.left < scrollerLeft;
  const bottom = elementRect.bottom > scrollerBottom;
  const right = elementRect.right > scrollerRight;
  return top || left || bottom || right;
}
function setSelectionRange(element, ...args) {
  if (/text|search|password|tel|url/i.test(element.type)) {
    element.setSelectionRange(...args);
  }
}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/EAHJFCU4.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B1: () => (/* binding */ subscribe),
/* harmony export */   OH: () => (/* binding */ sync),
/* harmony export */   Ts: () => (/* binding */ init),
/* harmony export */   UE: () => (/* binding */ throwOnConflictingProps),
/* harmony export */   Up: () => (/* binding */ pick2),
/* harmony export */   cJ: () => (/* binding */ omit2),
/* harmony export */   mj: () => (/* binding */ setup),
/* harmony export */   od: () => (/* binding */ mergeStore),
/* harmony export */   vA: () => (/* binding */ batch),
/* harmony export */   y$: () => (/* binding */ createStore)
/* harmony export */ });
/* harmony import */ var _Y3OOHFCN_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/Y3OOHFCN.js");
/* harmony import */ var _4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/4R3V3JGP.js");
"use client";



// src/utils/store.ts
function getInternal(store, key) {
  const internals = store.__unstableInternals;
  (0,_Y3OOHFCN_js__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1)(internals, "Invalid store");
  return internals[key];
}
function createStore(initialState, ...stores) {
  let state = initialState;
  let prevStateBatch = state;
  let lastUpdate = Symbol();
  let destroy = _Y3OOHFCN_js__WEBPACK_IMPORTED_MODULE_0__/* .noop */ .lQ;
  const instances = /* @__PURE__ */ new Set();
  const updatedKeys = /* @__PURE__ */ new Set();
  const setups = /* @__PURE__ */ new Set();
  const listeners = /* @__PURE__ */ new Set();
  const batchListeners = /* @__PURE__ */ new Set();
  const disposables = /* @__PURE__ */ new WeakMap();
  const listenerKeys = /* @__PURE__ */ new WeakMap();
  const storeSetup = (callback) => {
    setups.add(callback);
    return () => setups.delete(callback);
  };
  const storeInit = () => {
    const initialized = instances.size;
    const instance = Symbol();
    instances.add(instance);
    const maybeDestroy = () => {
      instances.delete(instance);
      if (instances.size)
        return;
      destroy();
    };
    if (initialized)
      return maybeDestroy;
    const desyncs = (0,_Y3OOHFCN_js__WEBPACK_IMPORTED_MODULE_0__/* .getKeys */ .xD)(state).map(
      (key) => (0,_Y3OOHFCN_js__WEBPACK_IMPORTED_MODULE_0__/* .chain */ .cy)(
        ...stores.map((store) => {
          var _a;
          const storeState = (_a = store == null ? void 0 : store.getState) == null ? void 0 : _a.call(store);
          if (!storeState)
            return;
          if (!(0,_Y3OOHFCN_js__WEBPACK_IMPORTED_MODULE_0__/* .hasOwnProperty */ .mQ)(storeState, key))
            return;
          return sync(store, [key], (state2) => {
            setState(
              key,
              state2[key],
              // @ts-expect-error - Not public API. This is just to prevent
              // infinite loops.
              true
            );
          });
        })
      )
    );
    const teardowns = [];
    setups.forEach((setup2) => teardowns.push(setup2()));
    const cleanups = stores.map(init);
    destroy = (0,_Y3OOHFCN_js__WEBPACK_IMPORTED_MODULE_0__/* .chain */ .cy)(...desyncs, ...teardowns, ...cleanups);
    return maybeDestroy;
  };
  const sub = (keys, listener, set = listeners) => {
    set.add(listener);
    listenerKeys.set(listener, keys);
    return () => {
      var _a;
      (_a = disposables.get(listener)) == null ? void 0 : _a();
      disposables.delete(listener);
      listenerKeys.delete(listener);
      set.delete(listener);
    };
  };
  const storeSubscribe = (keys, listener) => sub(keys, listener);
  const storeSync = (keys, listener) => {
    disposables.set(listener, listener(state, state));
    return sub(keys, listener);
  };
  const storeBatch = (keys, listener) => {
    disposables.set(listener, listener(state, prevStateBatch));
    return sub(keys, listener, batchListeners);
  };
  const storePick = (keys) => createStore((0,_Y3OOHFCN_js__WEBPACK_IMPORTED_MODULE_0__/* .pick */ .Up)(state, keys), finalStore);
  const storeOmit = (keys) => createStore((0,_Y3OOHFCN_js__WEBPACK_IMPORTED_MODULE_0__/* .omit */ .cJ)(state, keys), finalStore);
  const getState = () => state;
  const setState = (key, value, fromStores = false) => {
    if (!(0,_Y3OOHFCN_js__WEBPACK_IMPORTED_MODULE_0__/* .hasOwnProperty */ .mQ)(state, key))
      return;
    const nextValue = (0,_Y3OOHFCN_js__WEBPACK_IMPORTED_MODULE_0__/* .applyState */ .Qh)(value, state[key]);
    if (nextValue === state[key])
      return;
    if (!fromStores) {
      stores.forEach((store) => {
        var _a;
        (_a = store == null ? void 0 : store.setState) == null ? void 0 : _a.call(store, key, nextValue);
      });
    }
    const prevState = state;
    state = (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadProps */ .ko)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadValues */ .IA)({}, state), { [key]: nextValue });
    const thisUpdate = Symbol();
    lastUpdate = thisUpdate;
    updatedKeys.add(key);
    const run = (listener, prev, uKeys) => {
      var _a;
      const keys = listenerKeys.get(listener);
      const updated = (k) => uKeys ? uKeys.has(k) : k === key;
      if (!keys || keys.some(updated)) {
        (_a = disposables.get(listener)) == null ? void 0 : _a();
        disposables.set(listener, listener(state, prev));
      }
    };
    listeners.forEach((listener) => {
      run(listener, prevState);
    });
    queueMicrotask(() => {
      if (lastUpdate !== thisUpdate)
        return;
      const snapshot = state;
      batchListeners.forEach((listener) => {
        run(listener, prevStateBatch, updatedKeys);
      });
      prevStateBatch = snapshot;
      updatedKeys.clear();
    });
  };
  const finalStore = {
    getState,
    setState,
    __unstableInternals: {
      setup: storeSetup,
      init: storeInit,
      subscribe: storeSubscribe,
      sync: storeSync,
      batch: storeBatch,
      pick: storePick,
      omit: storeOmit
    }
  };
  return finalStore;
}
function setup(store, ...args) {
  if (!store)
    return;
  return getInternal(store, "setup")(...args);
}
function init(store, ...args) {
  if (!store)
    return;
  return getInternal(store, "init")(...args);
}
function subscribe(store, ...args) {
  if (!store)
    return;
  return getInternal(store, "subscribe")(...args);
}
function sync(store, ...args) {
  if (!store)
    return;
  return getInternal(store, "sync")(...args);
}
function batch(store, ...args) {
  if (!store)
    return;
  return getInternal(store, "batch")(...args);
}
function omit2(store, ...args) {
  if (!store)
    return;
  return getInternal(store, "omit")(...args);
}
function pick2(store, ...args) {
  if (!store)
    return;
  return getInternal(store, "pick")(...args);
}
function mergeStore(...stores) {
  const initialState = stores.reduce((state, store2) => {
    var _a;
    const nextState = (_a = store2 == null ? void 0 : store2.getState) == null ? void 0 : _a.call(store2);
    if (!nextState)
      return state;
    return (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadValues */ .IA)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadValues */ .IA)({}, state), nextState);
  }, {});
  const store = createStore(initialState, ...stores);
  return store;
}
function throwOnConflictingProps(props, store) {
  if (true)
    return;
  if (!store)
    return;
  const defaultKeys = Object.entries(props).filter(([key, value]) => key.startsWith("default") && value !== void 0).map(([key]) => {
    var _a;
    const stateKey = key.replace("default", "");
    return `${((_a = stateKey[0]) == null ? void 0 : _a.toLowerCase()) || ""}${stateKey.slice(1)}`;
  });
  if (!defaultKeys.length)
    return;
  const storeState = store.getState();
  const conflictingProps = defaultKeys.filter(
    (key) => (0,_Y3OOHFCN_js__WEBPACK_IMPORTED_MODULE_0__/* .hasOwnProperty */ .mQ)(storeState, key)
  );
  if (!conflictingProps.length)
    return;
  throw new Error(
    `Passing a store prop in conjunction with a default state is not supported.

const store = useSelectStore();
<SelectProvider store={store} defaultValue="Apple" />
                ^             ^

Instead, pass the default state to the topmost store:

const store = useSelectStore({ defaultValue: "Apple" });
<SelectProvider store={store} />

See https://github.com/ariakit/ariakit/pull/2745 for more details.

If there's a particular need for this, please submit a feature request at https://github.com/ariakit/ariakit
`
  );
}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/MHPO2BXA.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cX: () => (/* binding */ isMac),
/* harmony export */   f8: () => (/* binding */ isApple),
/* harmony export */   gm: () => (/* binding */ isFirefox),
/* harmony export */   nr: () => (/* binding */ isSafari)
/* harmony export */ });
/* unused harmony export isTouchDevice */
/* harmony import */ var _DLOEKDPY_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/DLOEKDPY.js");
"use client";


// src/utils/platform.ts
function isTouchDevice() {
  return _DLOEKDPY_js__WEBPACK_IMPORTED_MODULE_0__/* .canUseDOM */ .Sw && !!navigator.maxTouchPoints;
}
function isApple() {
  if (!_DLOEKDPY_js__WEBPACK_IMPORTED_MODULE_0__/* .canUseDOM */ .Sw)
    return false;
  return /mac|iphone|ipad|ipod/i.test(navigator.platform);
}
function isSafari() {
  return _DLOEKDPY_js__WEBPACK_IMPORTED_MODULE_0__/* .canUseDOM */ .Sw && isApple() && /apple/i.test(navigator.vendor);
}
function isFirefox() {
  return _DLOEKDPY_js__WEBPACK_IMPORTED_MODULE_0__/* .canUseDOM */ .Sw && /firefox\//i.test(navigator.userAgent);
}
function isMac() {
  return _DLOEKDPY_js__WEBPACK_IMPORTED_MODULE_0__/* .canUseDOM */ .Sw && navigator.platform.startsWith("Mac") && !isTouchDevice();
}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/SOLWE6E5.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  y: () => (/* binding */ createHovercardStore)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/SX2XFD6A.js
var SX2XFD6A = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/SX2XFD6A.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/EAHJFCU4.js
var EAHJFCU4 = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/EAHJFCU4.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/Y3OOHFCN.js
var Y3OOHFCN = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/Y3OOHFCN.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/4R3V3JGP.js
var _4R3V3JGP = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/4R3V3JGP.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/AF6IUUFN.js
"use client";





// src/popover/popover-store.ts
function createPopoverStore(_a = {}) {
  var _b = _a, {
    popover: otherPopover
  } = _b, props = (0,_4R3V3JGP/* __objRest */.YG)(_b, [
    "popover"
  ]);
  const store = (0,EAHJFCU4/* mergeStore */.od)(
    props.store,
    (0,EAHJFCU4/* omit */.cJ)(otherPopover, [
      "arrowElement",
      "anchorElement",
      "contentElement",
      "popoverElement",
      "disclosureElement"
    ])
  );
  (0,EAHJFCU4/* throwOnConflictingProps */.UE)(props, store);
  const syncState = store == null ? void 0 : store.getState();
  const dialog = (0,SX2XFD6A/* createDialogStore */.Y)((0,_4R3V3JGP/* __spreadProps */.ko)((0,_4R3V3JGP/* __spreadValues */.IA)({}, props), { store }));
  const placement = (0,Y3OOHFCN/* defaultValue */.Jh)(
    props.placement,
    syncState == null ? void 0 : syncState.placement,
    "bottom"
  );
  const initialState = (0,_4R3V3JGP/* __spreadProps */.ko)((0,_4R3V3JGP/* __spreadValues */.IA)({}, dialog.getState()), {
    placement,
    currentPlacement: placement,
    anchorElement: (0,Y3OOHFCN/* defaultValue */.Jh)(syncState == null ? void 0 : syncState.anchorElement, null),
    popoverElement: (0,Y3OOHFCN/* defaultValue */.Jh)(syncState == null ? void 0 : syncState.popoverElement, null),
    arrowElement: (0,Y3OOHFCN/* defaultValue */.Jh)(syncState == null ? void 0 : syncState.arrowElement, null),
    rendered: Symbol("rendered")
  });
  const popover = (0,EAHJFCU4/* createStore */.y$)(initialState, dialog, store);
  return (0,_4R3V3JGP/* __spreadProps */.ko)((0,_4R3V3JGP/* __spreadValues */.IA)((0,_4R3V3JGP/* __spreadValues */.IA)({}, dialog), popover), {
    setAnchorElement: (element) => popover.setState("anchorElement", element),
    setPopoverElement: (element) => popover.setState("popoverElement", element),
    setArrowElement: (element) => popover.setState("arrowElement", element),
    render: () => popover.setState("rendered", Symbol("rendered"))
  });
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/SOLWE6E5.js
"use client";





// src/hovercard/hovercard-store.ts
function createHovercardStore(props = {}) {
  var _a;
  const syncState = (_a = props.store) == null ? void 0 : _a.getState();
  const popover = createPopoverStore((0,_4R3V3JGP/* __spreadProps */.ko)((0,_4R3V3JGP/* __spreadValues */.IA)({}, props), {
    placement: (0,Y3OOHFCN/* defaultValue */.Jh)(
      props.placement,
      syncState == null ? void 0 : syncState.placement,
      "bottom"
    )
  }));
  const timeout = (0,Y3OOHFCN/* defaultValue */.Jh)(props.timeout, syncState == null ? void 0 : syncState.timeout, 500);
  const initialState = (0,_4R3V3JGP/* __spreadProps */.ko)((0,_4R3V3JGP/* __spreadValues */.IA)({}, popover.getState()), {
    timeout,
    showTimeout: (0,Y3OOHFCN/* defaultValue */.Jh)(props.showTimeout, syncState == null ? void 0 : syncState.showTimeout),
    hideTimeout: (0,Y3OOHFCN/* defaultValue */.Jh)(props.hideTimeout, syncState == null ? void 0 : syncState.hideTimeout),
    autoFocusOnShow: (0,Y3OOHFCN/* defaultValue */.Jh)(syncState == null ? void 0 : syncState.autoFocusOnShow, false)
  });
  const hovercard = (0,EAHJFCU4/* createStore */.y$)(initialState, popover, props.store);
  return (0,_4R3V3JGP/* __spreadProps */.ko)((0,_4R3V3JGP/* __spreadValues */.IA)((0,_4R3V3JGP/* __spreadValues */.IA)({}, popover), hovercard), {
    setAutoFocusOnShow: (value) => hovercard.setState("autoFocusOnShow", value)
  });
}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/SX2XFD6A.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ createDialogStore)
/* harmony export */ });
/* harmony import */ var _Z5IGYIPT_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/Z5IGYIPT.js");
"use client";


// src/dialog/dialog-store.ts
function createDialogStore(props = {}) {
  return (0,_Z5IGYIPT_js__WEBPACK_IMPORTED_MODULE_0__/* .createDisclosureStore */ .h)(props);
}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/Y3OOHFCN.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $f: () => (/* binding */ disabledFromProps),
/* harmony export */   D_: () => (/* binding */ identity),
/* harmony export */   J2: () => (/* binding */ normalizeString),
/* harmony export */   Jh: () => (/* binding */ defaultValue),
/* harmony export */   Qh: () => (/* binding */ applyState),
/* harmony export */   Up: () => (/* binding */ pick),
/* harmony export */   V1: () => (/* binding */ invariant),
/* harmony export */   bN: () => (/* binding */ shallowEqual),
/* harmony export */   cJ: () => (/* binding */ omit),
/* harmony export */   cy: () => (/* binding */ chain),
/* harmony export */   lQ: () => (/* binding */ noop),
/* harmony export */   mQ: () => (/* binding */ hasOwnProperty),
/* harmony export */   xD: () => (/* binding */ getKeys),
/* harmony export */   zO: () => (/* binding */ isFalsyBooleanCallback)
/* harmony export */ });
/* unused harmony exports isObject, isEmpty, isInteger, cx, beforePaint, afterPaint */
/* harmony import */ var _4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/4R3V3JGP.js");
"use client";


// src/utils/misc.ts
function noop(..._) {
}
function shallowEqual(a, b) {
  if (a === b)
    return true;
  if (!a)
    return false;
  if (!b)
    return false;
  if (typeof a !== "object")
    return false;
  if (typeof b !== "object")
    return false;
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  const { length } = aKeys;
  if (bKeys.length !== length)
    return false;
  for (const key of aKeys) {
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}
function applyState(argument, currentValue) {
  if (isUpdater(argument)) {
    const value = isLazyValue(currentValue) ? currentValue() : currentValue;
    return argument(value);
  }
  return argument;
}
function isUpdater(argument) {
  return typeof argument === "function";
}
function isLazyValue(value) {
  return typeof value === "function";
}
function isObject(arg) {
  return typeof arg === "object" && arg != null;
}
function isEmpty(arg) {
  if (Array.isArray(arg))
    return !arg.length;
  if (isObject(arg))
    return !Object.keys(arg).length;
  if (arg == null)
    return true;
  if (arg === "")
    return true;
  return false;
}
function isInteger(arg) {
  if (typeof arg === "number") {
    return Math.floor(arg) === arg;
  }
  return String(Math.floor(Number(arg))) === arg;
}
function hasOwnProperty(object, prop) {
  if (typeof Object.hasOwn === "function") {
    return Object.hasOwn(object, prop);
  }
  return Object.prototype.hasOwnProperty.call(object, prop);
}
function chain(...fns) {
  return (...args) => {
    for (const fn of fns) {
      if (typeof fn === "function") {
        fn(...args);
      }
    }
  };
}
function cx(...args) {
  return args.filter(Boolean).join(" ") || void 0;
}
function normalizeString(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function omit(object, keys) {
  const result = (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_0__/* .__spreadValues */ .IA)({}, object);
  for (const key of keys) {
    if (hasOwnProperty(result, key)) {
      delete result[key];
    }
  }
  return result;
}
function pick(object, paths) {
  const result = {};
  for (const key of paths) {
    if (hasOwnProperty(object, key)) {
      result[key] = object[key];
    }
  }
  return result;
}
function identity(value) {
  return value;
}
function beforePaint(cb = noop) {
  const raf = requestAnimationFrame(cb);
  return () => cancelAnimationFrame(raf);
}
function afterPaint(cb = noop) {
  let raf = requestAnimationFrame(() => {
    raf = requestAnimationFrame(cb);
  });
  return () => cancelAnimationFrame(raf);
}
function invariant(condition, message) {
  if (condition)
    return;
  if (typeof message !== "string")
    throw new Error("Invariant failed");
  throw new Error(message);
}
function getKeys(obj) {
  return Object.keys(obj);
}
function isFalsyBooleanCallback(booleanOrCallback, ...args) {
  const result = typeof booleanOrCallback === "function" ? booleanOrCallback(...args) : booleanOrCallback;
  if (result == null)
    return false;
  return !result;
}
function disabledFromProps(props) {
  return props.disabled || props["aria-disabled"] === true || props["aria-disabled"] === "true";
}
function defaultValue(...values) {
  for (const value of values) {
    if (value !== void 0)
      return value;
  }
  return void 0;
}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/Z5IGYIPT.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ createDisclosureStore)
/* harmony export */ });
/* harmony import */ var _EAHJFCU4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/EAHJFCU4.js");
/* harmony import */ var _Y3OOHFCN_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/Y3OOHFCN.js");
/* harmony import */ var _4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/4R3V3JGP.js");
"use client";




// src/disclosure/disclosure-store.ts
function createDisclosureStore(props = {}) {
  const store = (0,_EAHJFCU4_js__WEBPACK_IMPORTED_MODULE_0__/* .mergeStore */ .od)(
    props.store,
    (0,_EAHJFCU4_js__WEBPACK_IMPORTED_MODULE_0__/* .omit */ .cJ)(props.disclosure, ["contentElement", "disclosureElement"])
  );
  (0,_EAHJFCU4_js__WEBPACK_IMPORTED_MODULE_0__/* .throwOnConflictingProps */ .UE)(props, store);
  const syncState = store == null ? void 0 : store.getState();
  const open = (0,_Y3OOHFCN_js__WEBPACK_IMPORTED_MODULE_1__/* .defaultValue */ .Jh)(
    props.open,
    syncState == null ? void 0 : syncState.open,
    props.defaultOpen,
    false
  );
  const animated = (0,_Y3OOHFCN_js__WEBPACK_IMPORTED_MODULE_1__/* .defaultValue */ .Jh)(props.animated, syncState == null ? void 0 : syncState.animated, false);
  const initialState = {
    open,
    animated,
    animating: !!animated && open,
    mounted: open,
    contentElement: (0,_Y3OOHFCN_js__WEBPACK_IMPORTED_MODULE_1__/* .defaultValue */ .Jh)(syncState == null ? void 0 : syncState.contentElement, null),
    disclosureElement: (0,_Y3OOHFCN_js__WEBPACK_IMPORTED_MODULE_1__/* .defaultValue */ .Jh)(syncState == null ? void 0 : syncState.disclosureElement, null)
  };
  const disclosure = (0,_EAHJFCU4_js__WEBPACK_IMPORTED_MODULE_0__/* .createStore */ .y$)(initialState, store);
  (0,_EAHJFCU4_js__WEBPACK_IMPORTED_MODULE_0__/* .setup */ .mj)(
    disclosure,
    () => (0,_EAHJFCU4_js__WEBPACK_IMPORTED_MODULE_0__/* .sync */ .OH)(disclosure, ["animated", "animating"], (state) => {
      if (state.animated)
        return;
      disclosure.setState("animating", false);
    })
  );
  (0,_EAHJFCU4_js__WEBPACK_IMPORTED_MODULE_0__/* .setup */ .mj)(
    disclosure,
    () => (0,_EAHJFCU4_js__WEBPACK_IMPORTED_MODULE_0__/* .subscribe */ .B1)(disclosure, ["open"], () => {
      if (!disclosure.getState().animated)
        return;
      disclosure.setState("animating", true);
    })
  );
  (0,_EAHJFCU4_js__WEBPACK_IMPORTED_MODULE_0__/* .setup */ .mj)(
    disclosure,
    () => (0,_EAHJFCU4_js__WEBPACK_IMPORTED_MODULE_0__/* .sync */ .OH)(disclosure, ["open", "animating"], (state) => {
      disclosure.setState("mounted", state.open || state.animating);
    })
  );
  return (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadProps */ .ko)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadValues */ .IA)({}, disclosure), {
    setOpen: (value) => disclosure.setState("open", value),
    show: () => disclosure.setState("open", true),
    hide: () => disclosure.setState("open", false),
    toggle: () => disclosure.setState("open", (open2) => !open2),
    stopAnimation: () => disclosure.setState("animating", false),
    setContentElement: (value) => disclosure.setState("contentElement", value),
    setDisclosureElement: (value) => disclosure.setState("disclosureElement", value)
  });
}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/utils/events.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $b: () => (/* binding */ isOpeningInNewTab),
/* harmony export */   RN: () => (/* binding */ isDownloading),
/* harmony export */   aG: () => (/* binding */ isFocusEventOutside),
/* harmony export */   c$: () => (/* binding */ fireBlurEvent),
/* harmony export */   dg: () => (/* binding */ addGlobalEventListener),
/* harmony export */   hY: () => (/* binding */ fireClickEvent),
/* harmony export */   ho: () => (/* binding */ isPortalEvent),
/* harmony export */   nz: () => (/* binding */ queueBeforeEvent),
/* harmony export */   rC: () => (/* binding */ fireEvent),
/* harmony export */   sz: () => (/* binding */ fireKeyboardEvent),
/* harmony export */   uh: () => (/* binding */ isSelfTarget)
/* harmony export */ });
/* unused harmony export fireFocusEvent */
/* harmony import */ var _chunks_MHPO2BXA_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/MHPO2BXA.js");
/* harmony import */ var _chunks_DLOEKDPY_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/DLOEKDPY.js");
/* harmony import */ var _chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/4R3V3JGP.js");
"use client";




// src/utils/events.ts
function isPortalEvent(event) {
  return Boolean(
    event.currentTarget && !(0,_chunks_DLOEKDPY_js__WEBPACK_IMPORTED_MODULE_0__/* .contains */ .gR)(event.currentTarget, event.target)
  );
}
function isSelfTarget(event) {
  return event.target === event.currentTarget;
}
function isOpeningInNewTab(event) {
  const element = event.currentTarget;
  if (!element)
    return false;
  const isAppleDevice = (0,_chunks_MHPO2BXA_js__WEBPACK_IMPORTED_MODULE_1__/* .isApple */ .f8)();
  if (isAppleDevice && !event.metaKey)
    return false;
  if (!isAppleDevice && !event.ctrlKey)
    return false;
  const tagName = element.tagName.toLowerCase();
  if (tagName === "a")
    return true;
  if (tagName === "button" && element.type === "submit")
    return true;
  if (tagName === "input" && element.type === "submit")
    return true;
  return false;
}
function isDownloading(event) {
  const element = event.currentTarget;
  if (!element)
    return false;
  const tagName = element.tagName.toLowerCase();
  if (!event.altKey)
    return false;
  if (tagName === "a")
    return true;
  if (tagName === "button" && element.type === "submit")
    return true;
  if (tagName === "input" && element.type === "submit")
    return true;
  return false;
}
function fireEvent(element, type, eventInit) {
  const event = new Event(type, eventInit);
  return element.dispatchEvent(event);
}
function fireBlurEvent(element, eventInit) {
  const event = new FocusEvent("blur", eventInit);
  const defaultAllowed = element.dispatchEvent(event);
  const bubbleInit = (0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadProps */ .ko)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadValues */ .IA)({}, eventInit), { bubbles: true });
  element.dispatchEvent(new FocusEvent("focusout", bubbleInit));
  return defaultAllowed;
}
function fireFocusEvent(element, eventInit) {
  const event = new FocusEvent("focus", eventInit);
  const defaultAllowed = element.dispatchEvent(event);
  const bubbleInit = __spreadProps(__spreadValues({}, eventInit), { bubbles: true });
  element.dispatchEvent(new FocusEvent("focusin", bubbleInit));
  return defaultAllowed;
}
function fireKeyboardEvent(element, type, eventInit) {
  const event = new KeyboardEvent(type, eventInit);
  return element.dispatchEvent(event);
}
function fireClickEvent(element, eventInit) {
  const event = new MouseEvent("click", eventInit);
  return element.dispatchEvent(event);
}
function isFocusEventOutside(event, container) {
  const containerElement = container || event.currentTarget;
  const relatedTarget = event.relatedTarget;
  return !relatedTarget || !(0,_chunks_DLOEKDPY_js__WEBPACK_IMPORTED_MODULE_0__/* .contains */ .gR)(containerElement, relatedTarget);
}
function queueBeforeEvent(element, type, callback) {
  const raf = requestAnimationFrame(() => {
    element.removeEventListener(type, callImmediately, true);
    callback();
  });
  const callImmediately = () => {
    cancelAnimationFrame(raf);
    callback();
  };
  element.addEventListener(type, callImmediately, {
    once: true,
    capture: true
  });
  return raf;
}
function addGlobalEventListener(type, listener, options, scope = window) {
  const children = [];
  try {
    scope.document.addEventListener(type, listener, options);
    for (const frame of Array.from(scope.frames)) {
      children.push(addGlobalEventListener(type, listener, options, frame));
    }
  } catch (e) {
  }
  const removeEventListener = () => {
    try {
      scope.document.removeEventListener(type, listener, options);
    } catch (e) {
    }
    children.forEach((remove) => remove());
  };
  return removeEventListener;
}



/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/utils/focus.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AJ: () => (/* binding */ hasFocus),
/* harmony export */   LC: () => (/* binding */ getFirstTabbableIn),
/* harmony export */   QZ: () => (/* binding */ restoreFocusIn),
/* harmony export */   WA: () => (/* binding */ focusIntoView),
/* harmony export */   XJ: () => (/* binding */ getPreviousTabbable),
/* harmony export */   a9: () => (/* binding */ getAllTabbableIn),
/* harmony export */   "do": () => (/* binding */ focusIfNeeded),
/* harmony export */   gw: () => (/* binding */ disableFocusIn),
/* harmony export */   oW: () => (/* binding */ hasFocusWithin),
/* harmony export */   tp: () => (/* binding */ isFocusable),
/* harmony export */   vF: () => (/* binding */ getNextTabbable)
/* harmony export */ });
/* unused harmony exports disableFocus, getAllFocusable, getAllFocusableIn, getAllTabbable, getClosestFocusable, getFirstFocusable, getFirstFocusableIn, getFirstTabbable, getLastTabbable, getLastTabbableIn, getNextTabbableIn, getPreviousTabbableIn, isTabbable */
/* harmony import */ var _chunks_DLOEKDPY_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/DLOEKDPY.js");
/* harmony import */ var _chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/4R3V3JGP.js");
"use client";



// src/utils/focus.ts
var selector = "input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false'])";
function hasNegativeTabIndex(element) {
  const tabIndex = parseInt(element.getAttribute("tabindex") || "0", 10);
  return tabIndex < 0;
}
function isFocusable(element) {
  if (!(0,_chunks_DLOEKDPY_js__WEBPACK_IMPORTED_MODULE_0__/* .matches */ .cK)(element, selector))
    return false;
  if (!(0,_chunks_DLOEKDPY_js__WEBPACK_IMPORTED_MODULE_0__/* .isVisible */ .zN)(element))
    return false;
  if ((0,_chunks_DLOEKDPY_js__WEBPACK_IMPORTED_MODULE_0__/* .closest */ .kp)(element, "[inert]"))
    return false;
  return true;
}
function isTabbable(element) {
  if (!isFocusable(element))
    return false;
  if (hasNegativeTabIndex(element))
    return false;
  if (!("form" in element))
    return true;
  if (!element.form)
    return true;
  if (element.checked)
    return true;
  if (element.type !== "radio")
    return true;
  const radioGroup = element.form.elements.namedItem(element.name);
  if (!radioGroup)
    return true;
  if (!("length" in radioGroup))
    return true;
  const activeElement = (0,_chunks_DLOEKDPY_js__WEBPACK_IMPORTED_MODULE_0__/* .getActiveElement */ .bq)(element);
  if (!activeElement)
    return true;
  if (activeElement === element)
    return true;
  if (!("form" in activeElement))
    return true;
  if (activeElement.form !== element.form)
    return true;
  if (activeElement.name !== element.name)
    return true;
  return false;
}
function getAllFocusableIn(container, includeContainer) {
  const elements = Array.from(
    container.querySelectorAll(selector)
  );
  if (includeContainer) {
    elements.unshift(container);
  }
  const focusableElements = elements.filter(isFocusable);
  focusableElements.forEach((element, i) => {
    if ((0,_chunks_DLOEKDPY_js__WEBPACK_IMPORTED_MODULE_0__/* .isFrame */ .qt)(element) && element.contentDocument) {
      const frameBody = element.contentDocument.body;
      focusableElements.splice(i, 1, ...getAllFocusableIn(frameBody));
    }
  });
  return focusableElements;
}
function getAllFocusable(includeBody) {
  return getAllFocusableIn(document.body, includeBody);
}
function getFirstFocusableIn(container, includeContainer) {
  const [first] = getAllFocusableIn(container, includeContainer);
  return first || null;
}
function getFirstFocusable(includeBody) {
  return getFirstFocusableIn(document.body, includeBody);
}
function getAllTabbableIn(container, includeContainer, fallbackToFocusable) {
  const elements = Array.from(
    container.querySelectorAll(selector)
  );
  const tabbableElements = elements.filter(isTabbable);
  if (includeContainer && isTabbable(container)) {
    tabbableElements.unshift(container);
  }
  tabbableElements.forEach((element, i) => {
    if ((0,_chunks_DLOEKDPY_js__WEBPACK_IMPORTED_MODULE_0__/* .isFrame */ .qt)(element) && element.contentDocument) {
      const frameBody = element.contentDocument.body;
      const allFrameTabbable = getAllTabbableIn(
        frameBody,
        false,
        fallbackToFocusable
      );
      tabbableElements.splice(i, 1, ...allFrameTabbable);
    }
  });
  if (!tabbableElements.length && fallbackToFocusable) {
    return elements;
  }
  return tabbableElements;
}
function getAllTabbable(fallbackToFocusable) {
  return getAllTabbableIn(document.body, false, fallbackToFocusable);
}
function getFirstTabbableIn(container, includeContainer, fallbackToFocusable) {
  const [first] = getAllTabbableIn(
    container,
    includeContainer,
    fallbackToFocusable
  );
  return first || null;
}
function getFirstTabbable(fallbackToFocusable) {
  return getFirstTabbableIn(document.body, false, fallbackToFocusable);
}
function getLastTabbableIn(container, includeContainer, fallbackToFocusable) {
  const allTabbable = getAllTabbableIn(
    container,
    includeContainer,
    fallbackToFocusable
  );
  return allTabbable[allTabbable.length - 1] || null;
}
function getLastTabbable(fallbackToFocusable) {
  return getLastTabbableIn(document.body, false, fallbackToFocusable);
}
function getNextTabbableIn(container, includeContainer, fallbackToFirst, fallbackToFocusable) {
  const activeElement = (0,_chunks_DLOEKDPY_js__WEBPACK_IMPORTED_MODULE_0__/* .getActiveElement */ .bq)(container);
  const allFocusable = getAllFocusableIn(container, includeContainer);
  const activeIndex = allFocusable.indexOf(activeElement);
  const nextFocusableElements = allFocusable.slice(activeIndex + 1);
  return nextFocusableElements.find(isTabbable) || (fallbackToFirst ? allFocusable.find(isTabbable) : null) || (fallbackToFocusable ? nextFocusableElements[0] : null) || null;
}
function getNextTabbable(fallbackToFirst, fallbackToFocusable) {
  return getNextTabbableIn(
    document.body,
    false,
    fallbackToFirst,
    fallbackToFocusable
  );
}
function getPreviousTabbableIn(container, includeContainer, fallbackToLast, fallbackToFocusable) {
  const activeElement = (0,_chunks_DLOEKDPY_js__WEBPACK_IMPORTED_MODULE_0__/* .getActiveElement */ .bq)(container);
  const allFocusable = getAllFocusableIn(container, includeContainer).reverse();
  const activeIndex = allFocusable.indexOf(activeElement);
  const previousFocusableElements = allFocusable.slice(activeIndex + 1);
  return previousFocusableElements.find(isTabbable) || (fallbackToLast ? allFocusable.find(isTabbable) : null) || (fallbackToFocusable ? previousFocusableElements[0] : null) || null;
}
function getPreviousTabbable(fallbackToFirst, fallbackToFocusable) {
  return getPreviousTabbableIn(
    document.body,
    false,
    fallbackToFirst,
    fallbackToFocusable
  );
}
function getClosestFocusable(element) {
  while (element && !isFocusable(element)) {
    element = closest(element, selector);
  }
  return element || null;
}
function hasFocus(element) {
  const activeElement = (0,_chunks_DLOEKDPY_js__WEBPACK_IMPORTED_MODULE_0__/* .getActiveElement */ .bq)(element);
  if (!activeElement)
    return false;
  if (activeElement === element)
    return true;
  const activeDescendant = activeElement.getAttribute("aria-activedescendant");
  if (!activeDescendant)
    return false;
  return activeDescendant === element.id;
}
function hasFocusWithin(element) {
  const activeElement = (0,_chunks_DLOEKDPY_js__WEBPACK_IMPORTED_MODULE_0__/* .getActiveElement */ .bq)(element);
  if (!activeElement)
    return false;
  if ((0,_chunks_DLOEKDPY_js__WEBPACK_IMPORTED_MODULE_0__/* .contains */ .gR)(element, activeElement))
    return true;
  const activeDescendant = activeElement.getAttribute("aria-activedescendant");
  if (!activeDescendant)
    return false;
  if (!("id" in element))
    return false;
  if (activeDescendant === element.id)
    return true;
  return !!element.querySelector(`#${CSS.escape(activeDescendant)}`);
}
function focusIfNeeded(element) {
  if (!hasFocusWithin(element) && isFocusable(element)) {
    element.focus();
  }
}
function disableFocus(element) {
  var _a;
  const currentTabindex = (_a = element.getAttribute("tabindex")) != null ? _a : "";
  element.setAttribute("data-tabindex", currentTabindex);
  element.setAttribute("tabindex", "-1");
}
function disableFocusIn(container, includeContainer) {
  const tabbableElements = getAllTabbableIn(container, includeContainer);
  tabbableElements.forEach(disableFocus);
}
function restoreFocusIn(container) {
  const elements = container.querySelectorAll("[data-tabindex]");
  const restoreTabIndex = (element) => {
    const tabindex = element.getAttribute("data-tabindex");
    element.removeAttribute("data-tabindex");
    if (tabindex) {
      element.setAttribute("tabindex", tabindex);
    } else {
      element.removeAttribute("tabindex");
    }
  };
  if (container.hasAttribute("data-tabindex")) {
    restoreTabIndex(container);
  }
  elements.forEach(restoreTabIndex);
}
function focusIntoView(element, options) {
  if (!("scrollIntoView" in element)) {
    element.focus();
  } else {
    element.focus({ preventScroll: true });
    element.scrollIntoView((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadValues */ .IA)({ block: "nearest", inline: "nearest" }, options));
  }
}



/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B0: () => (/* binding */ createStoreContext),
/* harmony export */   MA: () => (/* binding */ createMemoComponent),
/* harmony export */   a0: () => (/* binding */ createComponent),
/* harmony export */   ab: () => (/* binding */ createHook),
/* harmony export */   n: () => (/* binding */ createElement)
/* harmony export */ });
/* unused harmony exports forwardRef, memo */
/* harmony import */ var _6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js");
/* harmony import */ var _XM66DUTO_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/XM66DUTO.js");
/* harmony import */ var _4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/Y3OOHFCN.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
"use client";




// src/utils/system.tsx



function isRenderProp(children) {
  return typeof children === "function";
}
function forwardRef2(render) {
  const Role = React.forwardRef((props, ref) => render(__spreadProps(__spreadValues({}, props), { ref })));
  Role.displayName = render.displayName || render.name;
  return Role;
}
function memo2(Component, propsAreEqual) {
  const Role = React.memo(Component, propsAreEqual);
  Role.displayName = Component.displayName || Component.name;
  return Role;
}
function createComponent(render) {
  const Role = (props, ref) => render((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadValues */ .IA)({ ref }, props));
  return react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(Role);
}
function createMemoComponent(render) {
  const Role = createComponent(render);
  return react__WEBPACK_IMPORTED_MODULE_0__.memo(Role);
}
function createElement(Type, props) {
  const _a = props, { as: As, wrapElement, render } = _a, rest = (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__/* .__objRest */ .YG)(_a, ["as", "wrapElement", "render"]);
  let element;
  const mergedRef = (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_3__/* .useMergeRefs */ .SV)(props.ref, (0,_XM66DUTO_js__WEBPACK_IMPORTED_MODULE_4__/* .getRefProperty */ .v1)(render));
  if (false) {}
  if (As && typeof As !== "string") {
    element = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(As, (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadProps */ .ko)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadValues */ .IA)({}, rest), { render }));
  } else if (react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(render)) {
    const renderProps = (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadProps */ .ko)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadValues */ .IA)({}, render.props), { ref: mergedRef });
    element = react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(render, (0,_XM66DUTO_js__WEBPACK_IMPORTED_MODULE_4__/* .mergeProps */ .v6)(rest, renderProps));
  } else if (render) {
    element = render(rest);
  } else if (isRenderProp(props.children)) {
    if (false) {}
    const _b = rest, { children } = _b, otherProps = (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__/* .__objRest */ .YG)(_b, ["children"]);
    element = props.children(otherProps);
  } else if (As) {
    element = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(As, (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadValues */ .IA)({}, rest));
  } else {
    element = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Type, (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadValues */ .IA)({}, rest));
  }
  if (wrapElement) {
    return wrapElement(element);
  }
  return element;
}
function createHook(useProps) {
  const useRole = (props = {}) => {
    const htmlProps = useProps(props);
    const copy = {};
    for (const prop in htmlProps) {
      if ((0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__/* .hasOwnProperty */ .mQ)(htmlProps, prop) && htmlProps[prop] !== void 0) {
        copy[prop] = htmlProps[prop];
      }
    }
    return copy;
  };
  return useRole;
}
function createStoreContext(providers = [], scopedProviders = []) {
  const context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0);
  const scopedContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0);
  const useContext2 = () => react__WEBPACK_IMPORTED_MODULE_0__.useContext(context);
  const useScopedContext = (onlyScoped = false) => {
    const scoped = react__WEBPACK_IMPORTED_MODULE_0__.useContext(scopedContext);
    const store = useContext2();
    if (onlyScoped)
      return scoped;
    return scoped || store;
  };
  const useProviderContext = () => {
    const scoped = react__WEBPACK_IMPORTED_MODULE_0__.useContext(scopedContext);
    const store = useContext2();
    if (scoped && scoped === store)
      return;
    return store;
  };
  const ContextProvider = (props) => {
    return providers.reduceRight(
      (children, Provider) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Provider, (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadProps */ .ko)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadValues */ .IA)({}, props), { children })),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(context.Provider, (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadValues */ .IA)({}, props))
    );
  };
  const ScopedContextProvider = (props) => {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ContextProvider, (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadProps */ .ko)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadValues */ .IA)({}, props), { children: scopedProviders.reduceRight(
      (children, Provider) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Provider, (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadProps */ .ko)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadValues */ .IA)({}, props), { children })),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(scopedContext.Provider, (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadValues */ .IA)({}, props))
    ) }));
  };
  return {
    context,
    scopedContext,
    useContext: useContext2,
    useScopedContext,
    useProviderContext,
    ContextProvider,
    ScopedContextProvider
  };
}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IA: () => (/* binding */ __spreadValues),
/* harmony export */   YG: () => (/* binding */ __objRest),
/* harmony export */   ko: () => (/* binding */ __spreadProps)
/* harmony export */ });
"use client";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bi: () => (/* binding */ useId),
/* harmony export */   CH: () => (/* binding */ useForceUpdate),
/* harmony export */   O4: () => (/* binding */ useBooleanEvent),
/* harmony export */   P$: () => (/* binding */ useIsMouseMoving),
/* harmony export */   P1: () => (/* binding */ useMetadataProps),
/* harmony export */   SV: () => (/* binding */ useMergeRefs),
/* harmony export */   TE: () => (/* binding */ usePortalRef),
/* harmony export */   UQ: () => (/* binding */ useSafeLayoutEffect),
/* harmony export */   _q: () => (/* binding */ useEvent),
/* harmony export */   hX: () => (/* binding */ useLiveRef),
/* harmony export */   nf: () => (/* binding */ useInitialValue),
/* harmony export */   vO: () => (/* binding */ useTagName),
/* harmony export */   w5: () => (/* binding */ useUpdateEffect),
/* harmony export */   w7: () => (/* binding */ useWrapElement)
/* harmony export */ });
/* unused harmony exports useLazyValue, usePreviousValue, useRefId, useDeferredValue, useAttribute, useUpdateLayoutEffect, useControlledState */
/* harmony import */ var _XM66DUTO_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/XM66DUTO.js");
/* harmony import */ var _4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/DLOEKDPY.js");
/* harmony import */ var _ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/utils/events.js");
"use client";



// src/utils/hooks.ts





var _React = (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadValues */ .IA)({}, /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2))));
var useReactId = _React.useId;
var useReactDeferredValue = _React.useDeferredValue;
var useReactInsertionEffect = _React.useInsertionEffect;
var useSafeLayoutEffect = _ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__/* .canUseDOM */ .Sw ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
function useInitialValue(value) {
  const [initialValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);
  return initialValue;
}
function useLazyValue(init) {
  const ref = useRef();
  if (ref.current === void 0) {
    ref.current = init();
  }
  return ref.current;
}
function useLiveRef(value) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
  useSafeLayoutEffect(() => {
    ref.current = value;
  });
  return ref;
}
function usePreviousValue(value) {
  const [previousValue, setPreviousValue] = useState(value);
  if (value !== previousValue) {
    setPreviousValue(value);
  }
  return previousValue;
}
function useEvent(callback) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  if (useReactInsertionEffect) {
    useReactInsertionEffect(() => {
      ref.current = callback;
    });
  } else {
    ref.current = callback;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((...args) => {
    var _a;
    return (_a = ref.current) == null ? void 0 : _a.call(ref, ...args);
  }, []);
}
function useMergeRefs(...refs) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!refs.some(Boolean))
      return;
    return (value) => {
      refs.forEach((ref) => (0,_XM66DUTO_js__WEBPACK_IMPORTED_MODULE_3__/* .setRef */ .cZ)(ref, value));
    };
  }, refs);
}
function useRefId(ref, deps) {
  const [id, setId] = useState(void 0);
  useSafeLayoutEffect(() => {
    var _a;
    setId((_a = ref == null ? void 0 : ref.current) == null ? void 0 : _a.id);
  }, deps);
  return id;
}
function useId(defaultId) {
  if (useReactId) {
    const reactId = useReactId();
    if (defaultId)
      return defaultId;
    return reactId;
  }
  const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultId);
  useSafeLayoutEffect(() => {
    if (defaultId || id)
      return;
    const random = Math.random().toString(36).substr(2, 6);
    setId(`id-${random}`);
  }, [defaultId, id]);
  return defaultId || id;
}
function useDeferredValue(value) {
  if (useReactDeferredValue) {
    return useReactDeferredValue(value);
  }
  const [deferredValue, setDeferredValue] = useState(value);
  useEffect(() => {
    const raf = requestAnimationFrame(() => setDeferredValue(value));
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return deferredValue;
}
function useTagName(refOrElement, type) {
  const stringOrUndefined = (type2) => {
    if (typeof type2 !== "string")
      return;
    return type2;
  };
  const [tagName, setTagName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => stringOrUndefined(type));
  useSafeLayoutEffect(() => {
    const element = refOrElement && "current" in refOrElement ? refOrElement.current : refOrElement;
    setTagName((element == null ? void 0 : element.tagName.toLowerCase()) || stringOrUndefined(type));
  }, [refOrElement, type]);
  return tagName;
}
function useAttribute(refOrElement, attributeName, defaultValue) {
  const [attribute, setAttribute] = useState(defaultValue);
  useSafeLayoutEffect(() => {
    const element = refOrElement && "current" in refOrElement ? refOrElement.current : refOrElement;
    const value = element == null ? void 0 : element.getAttribute(attributeName);
    if (value == null)
      return;
    setAttribute(value);
  }, [refOrElement, attributeName]);
  return attribute;
}
function useUpdateEffect(effect, deps) {
  const mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (mounted.current) {
      return effect();
    }
    mounted.current = true;
  }, deps);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(
    () => () => {
      mounted.current = false;
    },
    []
  );
}
function useUpdateLayoutEffect(effect, deps) {
  const mounted = useRef(false);
  useSafeLayoutEffect(() => {
    if (mounted.current) {
      return effect();
    }
    mounted.current = true;
  }, deps);
  useSafeLayoutEffect(
    () => () => {
      mounted.current = false;
    },
    []
  );
}
function useControlledState(defaultState, state, setState) {
  const [localState, setLocalState] = useState(defaultState);
  const nextState = state !== void 0 ? state : localState;
  const stateRef = useLiveRef(state);
  const setStateRef = useLiveRef(setState);
  const nextStateRef = useLiveRef(nextState);
  const setNextState = useCallback((prevValue) => {
    const setStateProp = setStateRef.current;
    if (setStateProp) {
      if (isSetNextState(setStateProp)) {
        setStateProp(prevValue);
      } else {
        const nextValue = applyState(prevValue, nextStateRef.current);
        nextStateRef.current = nextValue;
        setStateProp(nextValue);
      }
    }
    if (stateRef.current === void 0) {
      setLocalState(prevValue);
    }
  }, []);
  defineSetNextState(setNextState);
  return [nextState, setNextState];
}
var SET_NEXT_STATE = Symbol("setNextState");
function isSetNextState(arg) {
  return arg[SET_NEXT_STATE] === true;
}
function defineSetNextState(arg) {
  if (!isSetNextState(arg)) {
    Object.defineProperty(arg, SET_NEXT_STATE, { value: true });
  }
}
function useForceUpdate() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(() => [], []);
}
function useBooleanEvent(booleanOrCallback) {
  return useEvent(
    typeof booleanOrCallback === "function" ? booleanOrCallback : () => booleanOrCallback
  );
}
function useWrapElement(props, callback, deps = []) {
  const wrapElement = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    (element) => {
      if (props.wrapElement) {
        element = props.wrapElement(element);
      }
      return callback(element);
    },
    [...deps, props.wrapElement]
  );
  return (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadProps */ .ko)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadValues */ .IA)({}, props), { wrapElement });
}
function usePortalRef(portalProp = false, portalRefProp) {
  const [portalNode, setPortalNode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const portalRef = useMergeRefs(setPortalNode, portalRefProp);
  const domReady = !portalProp || portalNode;
  return { portalRef, portalNode, domReady };
}
function useMetadataProps(props, key, value) {
  const parent = props.onLoadedMetadataCapture;
  const onLoadedMetadataCapture = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return Object.assign(() => {
    }, (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadProps */ .ko)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadValues */ .IA)({}, parent), { [key]: value }));
  }, [parent, key, value]);
  return [parent == null ? void 0 : parent[key], { onLoadedMetadataCapture }];
}
function useIsMouseMoving() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__/* .addGlobalEventListener */ .dg)("mousemove", setMouseMoving, true);
    (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__/* .addGlobalEventListener */ .dg)("mousedown", resetMouseMoving, true);
    (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__/* .addGlobalEventListener */ .dg)("mouseup", resetMouseMoving, true);
    (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__/* .addGlobalEventListener */ .dg)("keydown", resetMouseMoving, true);
    (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__/* .addGlobalEventListener */ .dg)("scroll", resetMouseMoving, true);
  }, []);
  const isMouseMoving = useEvent(() => mouseMoving);
  return isMouseMoving;
}
var mouseMoving = false;
var previousScreenX = 0;
var previousScreenY = 0;
function hasMouseMovement(event) {
  const movementX = event.movementX || event.screenX - previousScreenX;
  const movementY = event.movementY || event.screenY - previousScreenY;
  previousScreenX = event.screenX;
  previousScreenY = event.screenY;
  return movementX || movementY || "production" === "test";
}
function setMouseMoving(event) {
  if (!hasMouseMovement(event))
    return;
  mouseMoving = true;
}
function resetMouseMoving() {
  mouseMoving = false;
}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/7H5KSHHF.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s1: () => (/* binding */ PopoverScopedContextProvider),
/* harmony export */   wf: () => (/* binding */ PopoverContextProvider),
/* harmony export */   zG: () => (/* binding */ usePopoverProviderContext)
/* harmony export */ });
/* unused harmony exports usePopoverContext, usePopoverScopedContext */
/* harmony import */ var _G6BJYYBK_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/G6BJYYBK.js");
/* harmony import */ var _3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js");
"use client";



// src/popover/popover-context.tsx
var ctx = (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_0__/* .createStoreContext */ .B0)(
  [_G6BJYYBK_js__WEBPACK_IMPORTED_MODULE_1__/* .DialogContextProvider */ .Zg],
  [_G6BJYYBK_js__WEBPACK_IMPORTED_MODULE_1__/* .DialogScopedContextProvider */ .XP]
);
var usePopoverContext = ctx.useContext;
var usePopoverScopedContext = ctx.useScopedContext;
var usePopoverProviderContext = ctx.useProviderContext;
var PopoverContextProvider = ctx.ContextProvider;
var PopoverScopedContextProvider = ctx.ScopedContextProvider;




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/7X4DYKYU.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ useHovercardAnchor)
/* harmony export */ });
/* unused harmony export HovercardAnchor */
/* harmony import */ var _TI7CMBHW_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/TI7CMBHW.js");
/* harmony import */ var _KK7H3W2B_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/KK7H3W2B.js");
/* harmony import */ var _3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js");
/* harmony import */ var _6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js");
/* harmony import */ var _4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/utils/events.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/Y3OOHFCN.js");
"use client";






// src/hovercard/hovercard-anchor.ts



var useHovercardAnchor = (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__/* .createHook */ .ab)(
  (_a) => {
    var _b = _a, { store, showOnHover = true } = _b, props = (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__/* .__objRest */ .YG)(_b, ["store", "showOnHover"]);
    const context = (0,_TI7CMBHW_js__WEBPACK_IMPORTED_MODULE_3__/* .useHovercardProviderContext */ .Kw)();
    store = store || context;
    (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__/* .invariant */ .V1)(
      store,
       false && 0
    );
    const disabled = (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__/* .disabledFromProps */ .$f)(props);
    const showTimeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => () => window.clearTimeout(showTimeoutRef.current), []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      const onMouseLeave = (event) => {
        if (!store)
          return;
        const { anchorElement } = store.getState();
        if (!anchorElement)
          return;
        if (event.target !== anchorElement)
          return;
        window.clearTimeout(showTimeoutRef.current);
        showTimeoutRef.current = 0;
      };
      return (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__/* .addGlobalEventListener */ .dg)("mouseleave", onMouseLeave, true);
    }, [store]);
    const onMouseMoveProp = props.onMouseMove;
    const showOnHoverProp = (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__/* .useBooleanEvent */ .O4)(showOnHover);
    const isMouseMoving = (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__/* .useIsMouseMoving */ .P$)();
    const onMouseMove = (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__/* .useEvent */ ._q)(
      (event) => {
        onMouseMoveProp == null ? void 0 : onMouseMoveProp(event);
        if (disabled)
          return;
        if (!store)
          return;
        if (event.defaultPrevented)
          return;
        if (showTimeoutRef.current)
          return;
        if (!isMouseMoving())
          return;
        if (!showOnHoverProp(event))
          return;
        const element = event.currentTarget;
        store.setAnchorElement(element);
        store.setDisclosureElement(element);
        const { showTimeout, timeout } = store.getState();
        const showHovercard = () => {
          showTimeoutRef.current = 0;
          if (!isMouseMoving())
            return;
          store == null ? void 0 : store.setAnchorElement(element);
          store == null ? void 0 : store.show();
          queueMicrotask(() => {
            store == null ? void 0 : store.setDisclosureElement(element);
          });
        };
        const timeoutMs = showTimeout != null ? showTimeout : timeout;
        if (timeoutMs === 0) {
          showHovercard();
        } else {
          showTimeoutRef.current = window.setTimeout(showHovercard, timeoutMs);
        }
      }
    );
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
      (element) => {
        if (!store)
          return;
        const { anchorElement } = store.getState();
        if (anchorElement == null ? void 0 : anchorElement.isConnected)
          return;
        store.setAnchorElement(element);
      },
      [store]
    );
    props = (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadProps */ .ko)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadValues */ .IA)({}, props), {
      ref: (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__/* .useMergeRefs */ .SV)(ref, props.ref),
      onMouseMove
    });
    props = (0,_KK7H3W2B_js__WEBPACK_IMPORTED_MODULE_7__/* .useFocusable */ .W)(props);
    return props;
  }
);
var HovercardAnchor = (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__/* .createComponent */ .a0)(
  (props) => {
    const htmlProps = useHovercardAnchor(props);
    return (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__/* .createElement */ .n)("a", htmlProps);
  }
);
if (false) {}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/CLE7NTOY.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aT: () => (/* binding */ useDisclosureContent),
/* harmony export */   dK: () => (/* binding */ isHidden)
/* harmony export */ });
/* unused harmony export DisclosureContent */
/* harmony import */ var _G6BJYYBK_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/G6BJYYBK.js");
/* harmony import */ var _OAYFXAQ2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/OAYFXAQ2.js");
/* harmony import */ var _3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js");
/* harmony import */ var _EKQEJRUF_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/EKQEJRUF.js");
/* harmony import */ var _6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js");
/* harmony import */ var _4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/Y3OOHFCN.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
"use client";







// src/disclosure/disclosure-content.tsx



function afterTimeout(timeoutMs, cb) {
  const timeoutId = setTimeout(cb, timeoutMs);
  return () => clearTimeout(timeoutId);
}
function afterPaint(cb) {
  let raf = requestAnimationFrame(() => {
    raf = requestAnimationFrame(cb);
  });
  return () => cancelAnimationFrame(raf);
}
function parseCSSTime(...times) {
  return times.join(", ").split(", ").reduce((longestTime, currentTimeString) => {
    const currentTime = parseFloat(currentTimeString || "0s") * 1e3;
    if (currentTime > longestTime)
      return currentTime;
    return longestTime;
  }, 0);
}
function isHidden(mounted, hidden, alwaysVisible) {
  return !alwaysVisible && hidden !== false && (!mounted || !!hidden);
}
var useDisclosureContent = (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_2__/* .createHook */ .ab)(
  (_a) => {
    var _b = _a, { store, alwaysVisible } = _b, props = (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__/* .__objRest */ .YG)(_b, ["store", "alwaysVisible"]);
    const context = (0,_OAYFXAQ2_js__WEBPACK_IMPORTED_MODULE_4__/* .useDisclosureProviderContext */ .vO)();
    store = store || context;
    (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__/* .invariant */ .V1)(
      store,
       false && 0
    );
    const id = (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__/* .useId */ .Bi)(props.id);
    const [transition, setTransition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const open = store.useState("open");
    const mounted = store.useState("mounted");
    const animated = store.useState("animated");
    const contentElement = store.useState("contentElement");
    (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__/* .useSafeLayoutEffect */ .UQ)(() => {
      if (!animated)
        return;
      if (!(contentElement == null ? void 0 : contentElement.isConnected)) {
        setTransition(null);
        return;
      }
      return afterPaint(() => {
        setTransition(open ? "enter" : "leave");
      });
    }, [animated, contentElement, open]);
    (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__/* .useSafeLayoutEffect */ .UQ)(() => {
      if (!store)
        return;
      if (!animated)
        return;
      if (!contentElement)
        return;
      if (!transition)
        return;
      if (transition === "enter" && !open)
        return;
      if (transition === "leave" && open)
        return;
      if (typeof animated === "number") {
        const timeoutMs2 = animated;
        return afterTimeout(timeoutMs2, store.stopAnimation);
      }
      const {
        transitionDuration,
        animationDuration,
        transitionDelay,
        animationDelay
      } = getComputedStyle(contentElement);
      const delay = parseCSSTime(transitionDelay, animationDelay);
      const duration = parseCSSTime(transitionDuration, animationDuration);
      const timeoutMs = delay + duration;
      if (!timeoutMs)
        return;
      return afterTimeout(timeoutMs, store.stopAnimation);
    }, [store, animated, contentElement, open, transition]);
    props = (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__/* .useWrapElement */ .w7)(
      props,
      (element) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_G6BJYYBK_js__WEBPACK_IMPORTED_MODULE_7__/* .DialogScopedContextProvider */ .XP, { value: store, children: element }),
      [store]
    );
    const hidden = isHidden(mounted, props.hidden, alwaysVisible);
    const style = hidden ? (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__/* .__spreadProps */ .ko)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__/* .__spreadValues */ .IA)({}, props.style), { display: "none" }) : props.style;
    props = (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__/* .__spreadProps */ .ko)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__/* .__spreadValues */ .IA)({
      id,
      "data-enter": transition === "enter" ? "" : void 0,
      "data-leave": transition === "leave" ? "" : void 0,
      hidden
    }, props), {
      ref: (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__/* .useMergeRefs */ .SV)(id ? store.setContentElement : null, props.ref),
      style
    });
    return props;
  }
);
var DisclosureContentImpl = (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_2__/* .createComponent */ .a0)(
  (props) => {
    const htmlProps = useDisclosureContent(props);
    return (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_2__/* .createElement */ .n)("div", htmlProps);
  }
);
var DisclosureContent = (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_2__/* .createComponent */ .a0)(
  (_a) => {
    var _b = _a, { unmountOnHide } = _b, props = (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__/* .__objRest */ .YG)(_b, ["unmountOnHide"]);
    const context = (0,_OAYFXAQ2_js__WEBPACK_IMPORTED_MODULE_4__/* .useDisclosureProviderContext */ .vO)();
    const store = props.store || context;
    const mounted = (0,_EKQEJRUF_js__WEBPACK_IMPORTED_MODULE_8__/* .useStoreState */ .O$)(
      store,
      (state) => !unmountOnHide || (state == null ? void 0 : state.mounted)
    );
    if (mounted === false)
      return null;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DisclosureContentImpl, (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__/* .__spreadValues */ .IA)({}, props));
  }
);
if (false) {}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/EKQEJRUF.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O$: () => (/* binding */ useStoreState),
/* harmony export */   Pj: () => (/* binding */ useStore),
/* harmony export */   Tz: () => (/* binding */ useStoreProps)
/* harmony export */ });
/* harmony import */ var _6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js");
/* harmony import */ var _4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/Y3OOHFCN.js");
/* harmony import */ var _ariakit_core_utils_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/EAHJFCU4.js");
/* harmony import */ var use_sync_external_store_shim_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/use-sync-external-store@1.2.0_react@18.3.1/node_modules/use-sync-external-store/shim/index.js");
"use client";



// src/utils/store.tsx




var { useSyncExternalStore } = use_sync_external_store_shim_index_js__WEBPACK_IMPORTED_MODULE_1__;
var noopSubscribe = () => () => {
};
function useStoreState(store, keyOrSelector = _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__/* .identity */ .D_) {
  const storeSubscribe = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (callback) => {
      if (!store)
        return noopSubscribe();
      return (0,_ariakit_core_utils_store__WEBPACK_IMPORTED_MODULE_3__/* .subscribe */ .B1)(store, null, callback);
    },
    [store]
  );
  const getSnapshot = () => {
    const key = typeof keyOrSelector === "string" ? keyOrSelector : null;
    const selector = typeof keyOrSelector === "function" ? keyOrSelector : null;
    const state = store == null ? void 0 : store.getState();
    if (selector)
      return selector(state);
    if (!state)
      return;
    if (!key)
      return;
    if (!(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__/* .hasOwnProperty */ .mQ)(state, key))
      return;
    return state[key];
  };
  return useSyncExternalStore(storeSubscribe, getSnapshot, getSnapshot);
}
function useStoreProps(store, props, key, setKey) {
  const value = (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__/* .hasOwnProperty */ .mQ)(props, key) ? props[key] : void 0;
  const setValue = setKey ? props[setKey] : void 0;
  const propsRef = (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_4__/* .useLiveRef */ .hX)({ value, setValue });
  (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_4__/* .useSafeLayoutEffect */ .UQ)(() => {
    return (0,_ariakit_core_utils_store__WEBPACK_IMPORTED_MODULE_3__/* .sync */ .OH)(store, [key], (state, prev) => {
      const { value: value2, setValue: setValue2 } = propsRef.current;
      if (!setValue2)
        return;
      if (state[key] === prev[key])
        return;
      if (state[key] === value2)
        return;
      setValue2(state[key]);
    });
  }, [store, key]);
  (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_4__/* .useSafeLayoutEffect */ .UQ)(() => {
    if (value === void 0)
      return;
    store.setState(key, value);
    return (0,_ariakit_core_utils_store__WEBPACK_IMPORTED_MODULE_3__/* .batch */ .vA)(store, [key], () => {
      if (value === void 0)
        return;
      store.setState(key, value);
    });
  });
}
function useStore(createStore, props) {
  const [store, setStore] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => createStore(props));
  (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_4__/* .useSafeLayoutEffect */ .UQ)(() => (0,_ariakit_core_utils_store__WEBPACK_IMPORTED_MODULE_3__/* .init */ .Ts)(store), [store]);
  const useState2 = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (keyOrSelector) => useStoreState(store, keyOrSelector),
    [store]
  );
  const memoizedStore = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_5__/* .__spreadProps */ .ko)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_5__/* .__spreadValues */ .IA)({}, store), { useState: useState2 }),
    [store, useState2]
  );
  const updateStore = (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_4__/* .useEvent */ ._q)(() => {
    setStore((store2) => createStore((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_5__/* .__spreadValues */ .IA)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_5__/* .__spreadValues */ .IA)({}, props), store2.getState())));
  });
  return [memoizedStore, updateStore];
}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/FSFPRQFR.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ Role)
/* harmony export */ });
/* unused harmony export useRole */
/* harmony import */ var _3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js");
"use client";


// src/role/role.ts
var elements = [
  "a",
  "button",
  "details",
  "dialog",
  "div",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "section",
  "select",
  "span",
  "textarea",
  "ul",
  "svg"
];
var useRole = (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_0__/* .createHook */ .ab)((props) => {
  return props;
});
var Role = (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_0__/* .createComponent */ .a0)((props) => {
  return (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_0__/* .createElement */ .n)("div", props);
});
if (false) {}
Object.assign(
  Role,
  elements.reduce((acc, element) => {
    acc[element] = (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_0__/* .createComponent */ .a0)((props) => {
      return (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_0__/* .createElement */ .n)(element, props);
    });
    return acc;
  }, {})
);




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/G6BJYYBK.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XP: () => (/* binding */ DialogScopedContextProvider),
/* harmony export */   YH: () => (/* binding */ DialogHeadingContext),
/* harmony export */   Zg: () => (/* binding */ DialogContextProvider),
/* harmony export */   cH: () => (/* binding */ useDialogProviderContext),
/* harmony export */   oL: () => (/* binding */ DialogDescriptionContext)
/* harmony export */ });
/* unused harmony exports useDialogContext, useDialogScopedContext */
/* harmony import */ var _OAYFXAQ2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/OAYFXAQ2.js");
/* harmony import */ var _3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
"use client";



// src/dialog/dialog-context.tsx

var ctx = (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__/* .createStoreContext */ .B0)(
  [_OAYFXAQ2_js__WEBPACK_IMPORTED_MODULE_2__/* .DisclosureContextProvider */ .sI],
  [_OAYFXAQ2_js__WEBPACK_IMPORTED_MODULE_2__/* .DisclosureScopedContextProvider */ .WT]
);
var useDialogContext = ctx.useContext;
var useDialogScopedContext = ctx.useScopedContext;
var useDialogProviderContext = ctx.useProviderContext;
var DialogContextProvider = ctx.ContextProvider;
var DialogScopedContextProvider = ctx.ScopedContextProvider;
var DialogHeadingContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);
var DialogDescriptionContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/KK7H3W2B.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ useFocusable)
/* harmony export */ });
/* unused harmony export Focusable */
/* harmony import */ var _SHA3WOPI_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/SHA3WOPI.js");
/* harmony import */ var _3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js");
/* harmony import */ var _6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js");
/* harmony import */ var _4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/DLOEKDPY.js");
/* harmony import */ var _ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/utils/events.js");
/* harmony import */ var _ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/utils/focus.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/Y3OOHFCN.js");
/* harmony import */ var _ariakit_core_utils_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/MHPO2BXA.js");
"use client";





// src/focusable/focusable.ts






var isSafariBrowser = (0,_ariakit_core_utils_platform__WEBPACK_IMPORTED_MODULE_1__/* .isSafari */ .nr)();
var alwaysFocusVisibleInputTypes = [
  "text",
  "search",
  "url",
  "tel",
  "email",
  "password",
  "number",
  "date",
  "month",
  "week",
  "time",
  "datetime",
  "datetime-local"
];
function isAlwaysFocusVisible(element) {
  const { tagName, readOnly, type } = element;
  if (tagName === "TEXTAREA" && !readOnly)
    return true;
  if (tagName === "SELECT" && !readOnly)
    return true;
  if (tagName === "INPUT" && !readOnly) {
    return alwaysFocusVisibleInputTypes.includes(type);
  }
  if (element.isContentEditable)
    return true;
  return false;
}
function isAlwaysFocusVisibleDelayed(element) {
  const role = element.getAttribute("role");
  if (role !== "combobox")
    return false;
  return !!element.dataset.name;
}
function getLabels(element) {
  if ("labels" in element) {
    return element.labels;
  }
  return null;
}
function isNativeCheckboxOrRadio(element) {
  const tagName = element.tagName.toLowerCase();
  if (tagName === "input" && element.type) {
    return element.type === "radio" || element.type === "checkbox";
  }
  return false;
}
function isNativeTabbable(tagName) {
  if (!tagName)
    return true;
  return tagName === "button" || tagName === "input" || tagName === "select" || tagName === "textarea" || tagName === "a";
}
function supportsDisabledAttribute(tagName) {
  if (!tagName)
    return true;
  return tagName === "button" || tagName === "input" || tagName === "select" || tagName === "textarea";
}
function getTabIndex(focusable, trulyDisabled, nativeTabbable, supportsDisabled, tabIndexProp) {
  if (!focusable) {
    return tabIndexProp;
  }
  if (trulyDisabled) {
    if (nativeTabbable && !supportsDisabled) {
      return -1;
    }
    return;
  }
  if (nativeTabbable) {
    return tabIndexProp;
  }
  return tabIndexProp || 0;
}
function useDisableEvent(onEvent, disabled) {
  return (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_2__/* .useEvent */ ._q)((event) => {
    onEvent == null ? void 0 : onEvent(event);
    if (event.defaultPrevented)
      return;
    if (disabled) {
      event.stopPropagation();
      event.preventDefault();
    }
  });
}
var isKeyboardModality = true;
function onGlobalMouseDown(event) {
  const target = event.target;
  if (target && "hasAttribute" in target) {
    if (!target.hasAttribute("data-focus-visible")) {
      isKeyboardModality = false;
    }
  }
}
function onGlobalKeyDown(event) {
  if (event.metaKey)
    return;
  if (event.ctrlKey)
    return;
  if (event.altKey)
    return;
  isKeyboardModality = true;
}
var useFocusable = (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_3__/* .createHook */ .ab)(
  (_a) => {
    var _b = _a, {
      focusable = true,
      accessibleWhenDisabled,
      autoFocus,
      onFocusVisible
    } = _b, props = (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_4__/* .__objRest */ .YG)(_b, [
      "focusable",
      "accessibleWhenDisabled",
      "autoFocus",
      "onFocusVisible"
    ]);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      if (!focusable)
        return;
      (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__/* .addGlobalEventListener */ .dg)("mousedown", onGlobalMouseDown, true);
      (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__/* .addGlobalEventListener */ .dg)("keydown", onGlobalKeyDown, true);
    }, [focusable]);
    if (isSafariBrowser) {
      (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!focusable)
          return;
        const element = ref.current;
        if (!element)
          return;
        if (!isNativeCheckboxOrRadio(element))
          return;
        const labels = getLabels(element);
        if (!labels)
          return;
        const onMouseUp = () => queueMicrotask(() => element.focus());
        labels.forEach((label) => label.addEventListener("mouseup", onMouseUp));
        return () => {
          labels.forEach(
            (label) => label.removeEventListener("mouseup", onMouseUp)
          );
        };
      }, [focusable]);
    }
    const disabled = focusable && (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_6__/* .disabledFromProps */ .$f)(props);
    const trulyDisabled = !!disabled && !accessibleWhenDisabled;
    const [focusVisible, setFocusVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      if (!focusable)
        return;
      if (trulyDisabled && focusVisible) {
        setFocusVisible(false);
      }
    }, [focusable, trulyDisabled, focusVisible]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      if (!focusable)
        return;
      if (!focusVisible)
        return;
      const element = ref.current;
      if (!element)
        return;
      if (typeof IntersectionObserver === "undefined")
        return;
      const observer = new IntersectionObserver(() => {
        if (!(0,_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_7__/* .isFocusable */ .tp)(element)) {
          setFocusVisible(false);
        }
      });
      observer.observe(element);
      return () => observer.disconnect();
    }, [focusable, focusVisible]);
    const onKeyPressCapture = useDisableEvent(
      props.onKeyPressCapture,
      disabled
    );
    const onMouseDownCapture = useDisableEvent(
      props.onMouseDownCapture,
      disabled
    );
    const onClickCapture = useDisableEvent(props.onClickCapture, disabled);
    const onMouseDownProp = props.onMouseDown;
    const onMouseDown = (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_2__/* .useEvent */ ._q)((event) => {
      onMouseDownProp == null ? void 0 : onMouseDownProp(event);
      if (event.defaultPrevented)
        return;
      if (!focusable)
        return;
      const element = event.currentTarget;
      if (!isSafariBrowser)
        return;
      if ((0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__/* .isPortalEvent */ .ho)(event))
        return;
      if (!(0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_8__/* .isButton */ .Bm)(element) && !isNativeCheckboxOrRadio(element))
        return;
      let receivedFocus = false;
      const onFocus = () => {
        receivedFocus = true;
      };
      const options = { capture: true, once: true };
      element.addEventListener("focusin", onFocus, options);
      (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__/* .queueBeforeEvent */ .nz)(element, "mouseup", () => {
        element.removeEventListener("focusin", onFocus, true);
        if (receivedFocus)
          return;
        (0,_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_7__/* .focusIfNeeded */ ["do"])(element);
      });
    });
    const handleFocusVisible = (event, currentTarget) => {
      if (currentTarget) {
        event.currentTarget = currentTarget;
      }
      if (!focusable)
        return;
      const element = event.currentTarget;
      if (!element)
        return;
      if (!(0,_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_7__/* .hasFocus */ .AJ)(element))
        return;
      onFocusVisible == null ? void 0 : onFocusVisible(event);
      if (event.defaultPrevented)
        return;
      setFocusVisible(true);
    };
    const onKeyDownCaptureProp = props.onKeyDownCapture;
    const onKeyDownCapture = (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_2__/* .useEvent */ ._q)(
      (event) => {
        onKeyDownCaptureProp == null ? void 0 : onKeyDownCaptureProp(event);
        if (event.defaultPrevented)
          return;
        if (!focusable)
          return;
        if (focusVisible)
          return;
        if (event.metaKey)
          return;
        if (event.altKey)
          return;
        if (event.ctrlKey)
          return;
        if (!(0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__/* .isSelfTarget */ .uh)(event))
          return;
        const element = event.currentTarget;
        queueMicrotask(() => handleFocusVisible(event, element));
      }
    );
    const onFocusCaptureProp = props.onFocusCapture;
    const onFocusCapture = (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_2__/* .useEvent */ ._q)((event) => {
      onFocusCaptureProp == null ? void 0 : onFocusCaptureProp(event);
      if (event.defaultPrevented)
        return;
      if (!focusable)
        return;
      if (!(0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__/* .isSelfTarget */ .uh)(event)) {
        setFocusVisible(false);
        return;
      }
      const element = event.currentTarget;
      const applyFocusVisible = () => handleFocusVisible(event, element);
      if (isKeyboardModality || isAlwaysFocusVisible(event.target)) {
        queueMicrotask(applyFocusVisible);
      } else if (isAlwaysFocusVisibleDelayed(event.target)) {
        (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__/* .queueBeforeEvent */ .nz)(event.target, "focusout", applyFocusVisible);
      } else {
        setFocusVisible(false);
      }
    });
    const onBlurProp = props.onBlur;
    const onBlur = (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_2__/* .useEvent */ ._q)((event) => {
      onBlurProp == null ? void 0 : onBlurProp(event);
      if (!focusable)
        return;
      if (!(0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__/* .isFocusEventOutside */ .aG)(event))
        return;
      setFocusVisible(false);
    });
    const autoFocusOnShow = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_SHA3WOPI_js__WEBPACK_IMPORTED_MODULE_9__/* .FocusableContext */ .g);
    const autoFocusRef = (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_2__/* .useEvent */ ._q)((element) => {
      if (!focusable)
        return;
      if (!autoFocus)
        return;
      if (!element)
        return;
      if (!autoFocusOnShow)
        return;
      queueMicrotask(() => {
        if ((0,_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_7__/* .hasFocus */ .AJ)(element))
          return;
        if (!(0,_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_7__/* .isFocusable */ .tp)(element))
          return;
        element.focus();
      });
    });
    const tagName = (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_2__/* .useTagName */ .vO)(ref, props.as);
    const nativeTabbable = focusable && isNativeTabbable(tagName);
    const supportsDisabled = focusable && supportsDisabledAttribute(tagName);
    const style = trulyDisabled ? (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_4__/* .__spreadValues */ .IA)({ pointerEvents: "none" }, props.style) : props.style;
    props = (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_4__/* .__spreadProps */ .ko)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_4__/* .__spreadValues */ .IA)({
      "data-focus-visible": focusable && focusVisible ? "" : void 0,
      "data-autofocus": autoFocus ? true : void 0,
      "aria-disabled": disabled ? true : void 0
    }, props), {
      ref: (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_2__/* .useMergeRefs */ .SV)(ref, autoFocusRef, props.ref),
      style,
      tabIndex: getTabIndex(
        focusable,
        trulyDisabled,
        nativeTabbable,
        supportsDisabled,
        props.tabIndex
      ),
      disabled: supportsDisabled && trulyDisabled ? true : void 0,
      // TODO: Test Focusable contentEditable.
      contentEditable: disabled ? void 0 : props.contentEditable,
      onKeyPressCapture,
      onClickCapture,
      onMouseDownCapture,
      onMouseDown,
      onKeyDownCapture,
      onFocusCapture,
      onBlur
    });
    return props;
  }
);
var Focusable = (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_3__/* .createComponent */ .a0)((props) => {
  props = useFocusable(props);
  return (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_3__/* .createElement */ .n)("div", props);
});
if (false) {}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/NERBASET.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AV: () => (/* binding */ createDialogComponent),
  sp: () => (/* binding */ useDialog)
});

// UNUSED EXPORTS: Dialog

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/MKDDWKFK.js
"use client";

// src/dialog/utils/is-backdrop.ts
function MKDDWKFK_isBackdrop(element, ...ids) {
  if (!element)
    return false;
  const backdrop = element.getAttribute("data-backdrop");
  if (backdrop == null)
    return false;
  if (backdrop === "")
    return true;
  if (backdrop === "true")
    return true;
  if (!ids.length)
    return true;
  return ids.some((id) => backdrop === id);
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/X6WIMZJE.js
"use client";

// src/dialog/utils/orchestrate.ts
var cleanups = /* @__PURE__ */ new WeakMap();
function orchestrate(element, key, setup) {
  if (!cleanups.has(element)) {
    cleanups.set(element, /* @__PURE__ */ new Map());
  }
  const elementCleanups = cleanups.get(element);
  const prevCleanup = elementCleanups.get(key);
  if (!prevCleanup) {
    elementCleanups.set(key, setup());
    return () => {
      var _a;
      (_a = elementCleanups.get(key)) == null ? void 0 : _a();
      elementCleanups.delete(key);
    };
  }
  const cleanup = setup();
  const nextCleanup = () => {
    cleanup();
    prevCleanup();
    elementCleanups.delete(key);
  };
  elementCleanups.set(key, nextCleanup);
  return () => {
    const isCurrent = elementCleanups.get(key) === nextCleanup;
    if (!isCurrent)
      return;
    cleanup();
    elementCleanups.set(key, prevCleanup);
  };
}
function setAttribute(element, attr, value) {
  const setup = () => {
    const previousValue = element.getAttribute(attr);
    element.setAttribute(attr, value);
    return () => {
      if (previousValue == null) {
        element.removeAttribute(attr);
      } else {
        element.setAttribute(attr, previousValue);
      }
    };
  };
  return orchestrate(element, attr, setup);
}
function setProperty(element, property, value) {
  const setup = () => {
    const exists = property in element;
    const previousValue = element[property];
    element[property] = value;
    return () => {
      if (!exists) {
        delete element[property];
      } else {
        element[property] = previousValue;
      }
    };
  };
  return orchestrate(element, property, setup);
}
function assignStyle(element, style) {
  if (!element)
    return () => {
    };
  const setup = () => {
    const prevStyle = element.style.cssText;
    Object.assign(element.style, style);
    return () => {
      element.style.cssText = prevStyle;
    };
  };
  return orchestrate(element, "style", setup);
}
function setCSSProperty(element, property, value) {
  if (!element)
    return () => {
    };
  const setup = () => {
    const previousValue = element.style.getPropertyValue(property);
    element.style.setProperty(property, value);
    return () => {
      if (previousValue) {
        element.style.setProperty(property, previousValue);
      } else {
        element.style.removeProperty(property);
      }
    };
  };
  return orchestrate(element, property, setup);
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/DLOEKDPY.js
var DLOEKDPY = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/DLOEKDPY.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/Y3OOHFCN.js
var Y3OOHFCN = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/Y3OOHFCN.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/72E5EPFF.js
"use client";


// src/dialog/utils/walk-tree-outside.ts


var ignoreTags = ["SCRIPT", "STYLE"];
function getSnapshotPropertyName(id) {
  return `__ariakit-dialog-snapshot-${id}`;
}
function inSnapshot(id, element) {
  const doc = (0,DLOEKDPY/* getDocument */.YE)(element);
  const propertyName = getSnapshotPropertyName(id);
  if (!doc.body[propertyName])
    return true;
  do {
    if (element === doc.body)
      return false;
    if (!!element[propertyName])
      return true;
    if (!element.parentElement)
      return false;
    element = element.parentElement;
  } while (true);
}
function isValidElement(id, element, ignoredElements) {
  if (ignoreTags.includes(element.tagName))
    return false;
  if (!inSnapshot(id, element))
    return false;
  return !ignoredElements.some(
    (enabledElement) => enabledElement && (0,DLOEKDPY/* contains */.gR)(element, enabledElement)
  );
}
function _72E5EPFF_walkTreeOutside(id, elements, callback, ancestorCallback) {
  for (let element of elements) {
    if (!(element == null ? void 0 : element.isConnected))
      continue;
    const hasAncestorAlready = elements.some((maybeAncestor) => {
      if (!maybeAncestor)
        return false;
      if (maybeAncestor === element)
        return false;
      return maybeAncestor.contains(element);
    });
    const doc = (0,DLOEKDPY/* getDocument */.YE)(element);
    const originalElement = element;
    while (element.parentElement && element !== doc.body) {
      ancestorCallback == null ? void 0 : ancestorCallback(element.parentElement, originalElement);
      if (!hasAncestorAlready) {
        for (const child of element.parentElement.children) {
          if (isValidElement(id, child, elements)) {
            callback(child, originalElement);
          }
        }
      }
      element = element.parentElement;
    }
  }
}
function createWalkTreeSnapshot(id, elements) {
  const { body } = (0,DLOEKDPY/* getDocument */.YE)(elements[0]);
  const cleanups = [];
  const markElement = (element) => {
    cleanups.push(setProperty(element, getSnapshotPropertyName(id), true));
  };
  _72E5EPFF_walkTreeOutside(id, elements, markElement);
  return (0,Y3OOHFCN/* chain */.cy)(
    setProperty(body, getSnapshotPropertyName(id), true),
    () => cleanups.forEach((fn) => fn())
  );
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/TL67WVI6.js
"use client";




// src/dialog/utils/mark-tree-outside.ts

function getPropertyName(id = "", ancestor = false) {
  return `__ariakit-dialog-${ancestor ? "ancestor" : "outside"}${id ? `-${id}` : ""}`;
}
function markElement(element, id = "") {
  return (0,Y3OOHFCN/* chain */.cy)(
    setProperty(element, getPropertyName(), true),
    setProperty(element, getPropertyName(id), true)
  );
}
function markAncestor(element, id = "") {
  return (0,Y3OOHFCN/* chain */.cy)(
    setProperty(element, getPropertyName("", true), true),
    setProperty(element, getPropertyName(id, true), true)
  );
}
function isElementMarked(element, id) {
  const ancestorProperty = getPropertyName(id, true);
  if (element[ancestorProperty])
    return true;
  const elementProperty = getPropertyName(id);
  do {
    if (element[elementProperty])
      return true;
    if (!element.parentElement)
      return false;
    element = element.parentElement;
  } while (true);
}
function markTreeOutside(id, elements) {
  const cleanups = [];
  const ids = elements.map((el) => el == null ? void 0 : el.id);
  _72E5EPFF_walkTreeOutside(
    id,
    elements,
    (element) => {
      if (MKDDWKFK_isBackdrop(element, ...ids))
        return;
      cleanups.unshift(markElement(element, id));
    },
    (ancestor, element) => {
      const isAnotherDialogAncestor = element.hasAttribute("data-dialog") && element.id !== id;
      if (isAnotherDialogAncestor)
        return;
      cleanups.unshift(markAncestor(ancestor, id));
    }
  );
  const restoreAccessibilityTree = () => {
    cleanups.forEach((fn) => fn());
  };
  return restoreAccessibilityTree;
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/FSFPRQFR.js
var FSFPRQFR = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/FSFPRQFR.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/CLE7NTOY.js
var CLE7NTOY = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/CLE7NTOY.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/SFCBA2JZ.js
var SFCBA2JZ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/SFCBA2JZ.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js
var _6O5OEQGF = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js
var _4R3V3JGP = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/LWHPHW7Q.js
"use client";







// src/dialog/dialog-backdrop.tsx


function DialogBackdrop({
  store,
  backdrop,
  backdropProps,
  alwaysVisible,
  hidden
}) {
  const ref = (0,react.useRef)(null);
  const disclosure = (0,SFCBA2JZ/* useDisclosureStore */.E)({ disclosure: store });
  const contentElement = store.useState("contentElement");
  (0,_6O5OEQGF/* useSafeLayoutEffect */.UQ)(() => {
    const backdrop2 = ref.current;
    const dialog = contentElement;
    if (!backdrop2)
      return;
    if (!dialog)
      return;
    backdrop2.style.zIndex = getComputedStyle(dialog).zIndex;
  }, [contentElement]);
  (0,_6O5OEQGF/* useSafeLayoutEffect */.UQ)(() => {
    const id = contentElement == null ? void 0 : contentElement.id;
    if (!id)
      return;
    const backdrop2 = ref.current;
    if (!backdrop2)
      return;
    return markAncestor(backdrop2, id);
  }, [contentElement]);
  if (hidden != null) {
    backdropProps = (0,_4R3V3JGP/* __spreadProps */.ko)((0,_4R3V3JGP/* __spreadValues */.IA)({}, backdropProps), { hidden });
  }
  const props = (0,CLE7NTOY/* useDisclosureContent */.aT)((0,_4R3V3JGP/* __spreadProps */.ko)((0,_4R3V3JGP/* __spreadValues */.IA)({
    store: disclosure,
    role: "presentation",
    "data-backdrop": (contentElement == null ? void 0 : contentElement.id) || "",
    alwaysVisible
  }, backdropProps), {
    ref: (0,_6O5OEQGF/* useMergeRefs */.SV)(backdropProps == null ? void 0 : backdropProps.ref, ref),
    style: (0,_4R3V3JGP/* __spreadValues */.IA)({
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, backdropProps == null ? void 0 : backdropProps.style)
  }));
  if (!backdrop)
    return null;
  if ((0,react.isValidElement)(backdrop)) {
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(FSFPRQFR/* Role */.X, (0,_4R3V3JGP/* __spreadProps */.ko)((0,_4R3V3JGP/* __spreadValues */.IA)({}, props), { render: backdrop }));
  }
  const Component = typeof backdrop !== "boolean" ? backdrop : "div";
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(FSFPRQFR/* Role */.X, (0,_4R3V3JGP/* __spreadProps */.ko)((0,_4R3V3JGP/* __spreadValues */.IA)({}, props), { render: /* @__PURE__ */ (0,jsx_runtime.jsx)(Component, {}) }));
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/BULCTPRV.js
"use client";




// src/dialog/utils/disable-accessibility-tree-outside.ts
function hideElementFromAccessibilityTree(element) {
  return setAttribute(element, "aria-hidden", "true");
}
function disableAccessibilityTreeOutside(id, elements) {
  const cleanups = [];
  const ids = elements.map((el) => el == null ? void 0 : el.id);
  walkTreeOutside(id, elements, (element) => {
    if (isBackdrop(element, ...ids))
      return;
    cleanups.unshift(hideElementFromAccessibilityTree(element));
  });
  const restoreAccessibilityTree = () => {
    cleanups.forEach((fn) => fn());
  };
  return restoreAccessibilityTree;
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/677M2CI3.js
"use client";

// src/dialog/utils/supports-inert.ts
function supportsInert() {
  return "inert" in HTMLElement.prototype;
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/utils/focus.js
var utils_focus = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/utils/focus.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/TQYOGOE2.js
"use client";






// src/dialog/utils/disable-tree.ts



function disableTree(element, ignoredElements) {
  if (!("style" in element))
    return Y3OOHFCN/* noop */.lQ;
  if (supportsInert()) {
    return setProperty(element, "inert", true);
  }
  const tabbableElements = (0,utils_focus/* getAllTabbableIn */.a9)(element, true);
  const enableElements = tabbableElements.map((element2) => {
    if (ignoredElements == null ? void 0 : ignoredElements.some((el) => el && (0,DLOEKDPY/* contains */.gR)(el, element2)))
      return Y3OOHFCN/* noop */.lQ;
    return setAttribute(element2, "tabindex", "-1");
  });
  return (0,Y3OOHFCN/* chain */.cy)(
    ...enableElements,
    hideElementFromAccessibilityTree(element),
    assignStyle(element, {
      pointerEvents: "none",
      userSelect: "none",
      cursor: "default"
    })
  );
}
function disableTreeOutside(id, elements) {
  const cleanups = [];
  const ids = elements.map((el) => el == null ? void 0 : el.id);
  _72E5EPFF_walkTreeOutside(id, elements, (element) => {
    if (MKDDWKFK_isBackdrop(element, ...ids))
      return;
    cleanups.unshift(disableTree(element, elements));
  });
  const restoreTreeOutside = () => {
    cleanups.forEach((fn) => fn());
  };
  return restoreTreeOutside;
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js
var react_dom = __webpack_require__("../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/CS347UVZ.js
"use client";


// src/dialog/utils/use-root-dialog.ts



function useRootDialog({
  attribute,
  contentId,
  contentElement,
  enabled
}) {
  const [updated, retry] = (0,_6O5OEQGF/* useForceUpdate */.CH)();
  const isRootDialog = (0,react.useCallback)(() => {
    if (!enabled)
      return false;
    if (!contentElement)
      return false;
    const { body } = (0,DLOEKDPY/* getDocument */.YE)(contentElement);
    const id = body.getAttribute(attribute);
    return !id || id === contentId;
  }, [updated, enabled, contentElement, attribute, contentId]);
  (0,react.useEffect)(() => {
    if (!enabled)
      return;
    if (!contentId)
      return;
    if (!contentElement)
      return;
    const { body } = (0,DLOEKDPY/* getDocument */.YE)(contentElement);
    if (isRootDialog()) {
      body.setAttribute(attribute, contentId);
      return () => body.removeAttribute(attribute);
    }
    const observer = new MutationObserver(() => (0,react_dom.flushSync)(retry));
    observer.observe(body, { attributeFilter: [attribute] });
    return () => observer.disconnect();
  }, [updated, enabled, contentId, contentElement, isRootDialog, attribute]);
  return isRootDialog;
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/MHPO2BXA.js
var MHPO2BXA = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/MHPO2BXA.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/6BJGLK2C.js
"use client";



// src/dialog/utils/use-prevent-body-scroll.ts




function getPaddingProperty(documentElement) {
  const documentLeft = documentElement.getBoundingClientRect().left;
  const scrollbarX = Math.round(documentLeft) + documentElement.scrollLeft;
  return scrollbarX ? "paddingLeft" : "paddingRight";
}
function usePreventBodyScroll(contentElement, contentId, enabled) {
  const isRootDialog = useRootDialog({
    attribute: "data-dialog-prevent-body-scroll",
    contentElement,
    contentId,
    enabled
  });
  (0,react.useEffect)(() => {
    if (!isRootDialog())
      return;
    if (!contentElement)
      return;
    const doc = (0,DLOEKDPY/* getDocument */.YE)(contentElement);
    const win = (0,DLOEKDPY/* getWindow */.zk)(contentElement);
    const { documentElement, body } = doc;
    const cssScrollbarWidth = documentElement.style.getPropertyValue("--scrollbar-width");
    const scrollbarWidth = cssScrollbarWidth ? parseInt(cssScrollbarWidth) : win.innerWidth - documentElement.clientWidth;
    const setScrollbarWidthProperty = () => setCSSProperty(
      documentElement,
      "--scrollbar-width",
      `${scrollbarWidth}px`
    );
    const paddingProperty = getPaddingProperty(documentElement);
    const setStyle = () => assignStyle(body, {
      overflow: "hidden",
      [paddingProperty]: `${scrollbarWidth}px`
    });
    const setIOSStyle = () => {
      var _a, _b;
      const { scrollX, scrollY, visualViewport } = win;
      const offsetLeft = (_a = visualViewport == null ? void 0 : visualViewport.offsetLeft) != null ? _a : 0;
      const offsetTop = (_b = visualViewport == null ? void 0 : visualViewport.offsetTop) != null ? _b : 0;
      const restoreStyle = assignStyle(body, {
        position: "fixed",
        overflow: "hidden",
        top: `${-(scrollY - Math.floor(offsetTop))}px`,
        left: `${-(scrollX - Math.floor(offsetLeft))}px`,
        right: "0",
        [paddingProperty]: `${scrollbarWidth}px`
      });
      return () => {
        restoreStyle();
        if (true) {
          win.scrollTo(scrollX, scrollY);
        }
      };
    };
    const isIOS = (0,MHPO2BXA/* isApple */.f8)() && !(0,MHPO2BXA/* isMac */.cX)();
    return (0,Y3OOHFCN/* chain */.cy)(
      setScrollbarWidthProperty(),
      isIOS ? setIOSStyle() : setStyle()
    );
  }, [isRootDialog, contentElement]);
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/EAHJFCU4.js
var EAHJFCU4 = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/EAHJFCU4.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/IUB2BTEK.js
"use client";


// src/dialog/utils/use-nested-dialogs.tsx




var NestedDialogsContext = (0,react.createContext)({});
function useNestedDialogs(store) {
  const context = (0,react.useContext)(NestedDialogsContext);
  const [dialogs, setDialogs] = (0,react.useState)([]);
  const add = (0,react.useCallback)(
    (dialog) => {
      var _a;
      setDialogs((dialogs2) => [...dialogs2, dialog]);
      return (0,Y3OOHFCN/* chain */.cy)((_a = context.add) == null ? void 0 : _a.call(context, dialog), () => {
        setDialogs((dialogs2) => dialogs2.filter((d) => d !== dialog));
      });
    },
    [context]
  );
  (0,_6O5OEQGF/* useSafeLayoutEffect */.UQ)(() => {
    return (0,EAHJFCU4/* sync */.OH)(store, ["open", "contentElement"], (state) => {
      var _a;
      if (!state.open)
        return;
      if (!state.contentElement)
        return;
      return (_a = context.add) == null ? void 0 : _a.call(context, store);
    });
  }, [store, context]);
  const providerValue = (0,react.useMemo)(() => ({ store, add }), [store, add]);
  const wrapElement = (0,react.useCallback)(
    (element) => /* @__PURE__ */ (0,jsx_runtime.jsx)(NestedDialogsContext.Provider, { value: providerValue, children: element }),
    [providerValue]
  );
  return { wrapElement, nestedDialogs: dialogs };
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/utils/events.js
var events = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/utils/events.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/OOBDFMJL.js
"use client";

// src/dialog/utils/use-previous-mouse-down-ref.ts


function usePreviousMouseDownRef(enabled) {
  const previousMouseDownRef = (0,react.useRef)();
  (0,react.useEffect)(() => {
    if (!enabled) {
      previousMouseDownRef.current = null;
      return;
    }
    const onMouseDown = (event) => {
      previousMouseDownRef.current = event.target;
    };
    return (0,events/* addGlobalEventListener */.dg)("mousedown", onMouseDown, true);
  }, [enabled]);
  return previousMouseDownRef;
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/XHJGS6Z5.js
"use client";





// src/dialog/utils/use-hide-on-interact-outside.ts



function isInDocument(target) {
  if (target.tagName === "HTML")
    return true;
  return (0,DLOEKDPY/* contains */.gR)((0,DLOEKDPY/* getDocument */.YE)(target).body, target);
}
function isDisclosure(disclosure, target) {
  if (!disclosure)
    return false;
  if ((0,DLOEKDPY/* contains */.gR)(disclosure, target))
    return true;
  const activeId = target.getAttribute("aria-activedescendant");
  if (activeId) {
    const activeElement = (0,DLOEKDPY/* getDocument */.YE)(disclosure).getElementById(activeId);
    if (activeElement) {
      return (0,DLOEKDPY/* contains */.gR)(disclosure, activeElement);
    }
  }
  return false;
}
function isMouseEventOnDialog(event, dialog) {
  if (!("clientY" in event))
    return false;
  const rect = dialog.getBoundingClientRect();
  if (rect.width === 0 || rect.height === 0)
    return false;
  return rect.top <= event.clientY && event.clientY <= rect.top + rect.height && rect.left <= event.clientX && event.clientX <= rect.left + rect.width;
}
function useEventOutside({
  store,
  type,
  listener,
  capture,
  domReady
}) {
  const callListener = (0,_6O5OEQGF/* useEvent */._q)(listener);
  const open = store.useState("open");
  const focusedRef = (0,react.useRef)(false);
  (0,_6O5OEQGF/* useSafeLayoutEffect */.UQ)(() => {
    if (!open)
      return;
    if (!domReady)
      return;
    const { contentElement } = store.getState();
    if (!contentElement)
      return;
    const onFocus = () => {
      focusedRef.current = true;
    };
    contentElement.addEventListener("focusin", onFocus, true);
    return () => contentElement.removeEventListener("focusin", onFocus, true);
  }, [store, open, domReady]);
  (0,react.useEffect)(() => {
    if (!open)
      return;
    const onEvent = (event) => {
      const { contentElement, disclosureElement } = store.getState();
      const target = event.target;
      if (!contentElement)
        return;
      if (!target)
        return;
      if (!isInDocument(target))
        return;
      if ((0,DLOEKDPY/* contains */.gR)(contentElement, target))
        return;
      if (isDisclosure(disclosureElement, target))
        return;
      if (target.hasAttribute("data-focus-trap"))
        return;
      if (isMouseEventOnDialog(event, contentElement))
        return;
      const focused = focusedRef.current;
      if (focused && !isElementMarked(target, contentElement.id))
        return;
      callListener(event);
    };
    return (0,events/* addGlobalEventListener */.dg)(type, onEvent, capture);
  }, [open, capture]);
}
function shouldHideOnInteractOutside(hideOnInteractOutside, event) {
  if (typeof hideOnInteractOutside === "function") {
    return hideOnInteractOutside(event);
  }
  return !!hideOnInteractOutside;
}
function useHideOnInteractOutside(store, hideOnInteractOutside, domReady) {
  const open = store.useState("open");
  const previousMouseDownRef = usePreviousMouseDownRef(open);
  const props = { store, domReady, capture: true };
  useEventOutside((0,_4R3V3JGP/* __spreadProps */.ko)((0,_4R3V3JGP/* __spreadValues */.IA)({}, props), {
    type: "click",
    listener: (event) => {
      const { contentElement } = store.getState();
      const previousMouseDown = previousMouseDownRef.current;
      if (!previousMouseDown)
        return;
      if (!(0,DLOEKDPY/* isVisible */.zN)(previousMouseDown))
        return;
      if (!isElementMarked(previousMouseDown, contentElement == null ? void 0 : contentElement.id))
        return;
      if (!shouldHideOnInteractOutside(hideOnInteractOutside, event))
        return;
      store.hide();
    }
  }));
  useEventOutside((0,_4R3V3JGP/* __spreadProps */.ko)((0,_4R3V3JGP/* __spreadValues */.IA)({}, props), {
    type: "focusin",
    listener: (event) => {
      const { contentElement } = store.getState();
      if (!contentElement)
        return;
      if (event.target === (0,DLOEKDPY/* getDocument */.YE)(contentElement))
        return;
      if (!shouldHideOnInteractOutside(hideOnInteractOutside, event))
        return;
      store.hide();
    }
  }));
  useEventOutside((0,_4R3V3JGP/* __spreadProps */.ko)((0,_4R3V3JGP/* __spreadValues */.IA)({}, props), {
    type: "contextmenu",
    listener: (event) => {
      if (!shouldHideOnInteractOutside(hideOnInteractOutside, event))
        return;
      store.hide();
    }
  }));
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/6GXEOXGT.js
"use client";

// src/dialog/utils/prepend-hidden-dismiss.ts

function prependHiddenDismiss(container, onClick) {
  const document = (0,DLOEKDPY/* getDocument */.YE)(container);
  const button = document.createElement("button");
  button.type = "button";
  button.tabIndex = -1;
  button.textContent = "Dismiss popup";
  Object.assign(button.style, {
    border: "0px",
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: "0px",
    position: "absolute",
    whiteSpace: "nowrap",
    width: "1px"
  });
  button.addEventListener("click", onClick);
  container.prepend(button);
  const removeHiddenDismiss = () => {
    button.removeEventListener("click", onClick);
    button.remove();
  };
  return removeHiddenDismiss;
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/SHA3WOPI.js
var SHA3WOPI = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/SHA3WOPI.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js
var _3ORBWXWF = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HPP6CWMY.js
"use client";





// src/focusable/focusable-container.tsx

var useFocusableContainer = (0,_3ORBWXWF/* createHook */.ab)(
  (_a) => {
    var _b = _a, { autoFocusOnShow = true } = _b, props = (0,_4R3V3JGP/* __objRest */.YG)(_b, ["autoFocusOnShow"]);
    props = (0,_6O5OEQGF/* useWrapElement */.w7)(
      props,
      (element) => /* @__PURE__ */ (0,jsx_runtime.jsx)(SHA3WOPI/* FocusableContext */.g.Provider, { value: autoFocusOnShow, children: element }),
      [autoFocusOnShow]
    );
    return props;
  }
);
var FocusableContainer = (0,_3ORBWXWF/* createComponent */.a0)(
  (props) => {
    const htmlProps = useFocusableContainer(props);
    return (0,_3ORBWXWF/* createElement */.n)("div", htmlProps);
  }
);
if (false) {}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/XPF5GU3Q.js
"use client";

// src/heading/heading-context.ts

var HeadingContext = (0,react.createContext)(0);



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/UYRJLDVS.js
"use client";


// src/heading/heading-level.tsx


function HeadingLevel({ level, children }) {
  const contextLevel = (0,react.useContext)(HeadingContext);
  const nextLevel = Math.max(
    Math.min(level || contextLevel + 1, 6),
    1
  );
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(HeadingContext.Provider, { value: nextLevel, children });
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/BG6HZDS7.js
"use client";



// src/visually-hidden/visually-hidden.ts
var useVisuallyHidden = (0,_3ORBWXWF/* createHook */.ab)((props) => {
  props = (0,_4R3V3JGP/* __spreadProps */.ko)((0,_4R3V3JGP/* __spreadValues */.IA)({}, props), {
    style: (0,_4R3V3JGP/* __spreadValues */.IA)({
      border: 0,
      clip: "rect(0 0 0 0)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      whiteSpace: "nowrap",
      width: "1px"
    }, props.style)
  });
  return props;
});
var VisuallyHidden = (0,_3ORBWXWF/* createComponent */.a0)(
  (props) => {
    const htmlProps = useVisuallyHidden(props);
    return (0,_3ORBWXWF/* createElement */.n)("span", htmlProps);
  }
);
if (false) {}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/CHKJ74UC.js
"use client";




// src/focus-trap/focus-trap.ts
var useFocusTrap = (0,_3ORBWXWF/* createHook */.ab)((props) => {
  props = (0,_4R3V3JGP/* __spreadProps */.ko)((0,_4R3V3JGP/* __spreadValues */.IA)({
    "data-focus-trap": "",
    tabIndex: 0,
    "aria-hidden": true
  }, props), {
    style: (0,_4R3V3JGP/* __spreadValues */.IA)({
      // Prevents unintended scroll jumps.
      position: "fixed",
      top: 0,
      left: 0
    }, props.style)
  });
  props = useVisuallyHidden(props);
  return props;
});
var FocusTrap = (0,_3ORBWXWF/* createComponent */.a0)((props) => {
  const htmlProps = useFocusTrap(props);
  return (0,_3ORBWXWF/* createElement */.n)("span", htmlProps);
});
if (false) {}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/7452U3HH.js
"use client";

// src/portal/portal-context.ts

var PortalContext = (0,react.createContext)(null);



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/XM66DUTO.js
var XM66DUTO = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/XM66DUTO.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/JPXNJYSO.js
"use client";







// src/portal/portal.tsx






function getRootElement(element) {
  return (0,DLOEKDPY/* getDocument */.YE)(element).body;
}
function getPortalElement(element, portalElement) {
  if (!portalElement) {
    return (0,DLOEKDPY/* getDocument */.YE)(element).createElement("div");
  }
  if (typeof portalElement === "function") {
    return portalElement(element);
  }
  return portalElement;
}
function getRandomId(prefix = "id") {
  return `${prefix ? `${prefix}-` : ""}${Math.random().toString(36).substr(2, 6)}`;
}
function queueFocus(element) {
  queueMicrotask(() => {
    element == null ? void 0 : element.focus();
  });
}
var usePortal = (0,_3ORBWXWF/* createHook */.ab)(
  (_a) => {
    var _b = _a, {
      preserveTabOrder,
      preserveTabOrderAnchor,
      portalElement,
      portalRef,
      portal = true
    } = _b, props = (0,_4R3V3JGP/* __objRest */.YG)(_b, [
      "preserveTabOrder",
      "preserveTabOrderAnchor",
      "portalElement",
      "portalRef",
      "portal"
    ]);
    const ref = (0,react.useRef)(null);
    const refProp = (0,_6O5OEQGF/* useMergeRefs */.SV)(ref, props.ref);
    const context = (0,react.useContext)(PortalContext);
    const [portalNode, setPortalNode] = (0,react.useState)(null);
    const [anchorPortalNode, setAnchorPortalNode] = (0,react.useState)(null);
    const outerBeforeRef = (0,react.useRef)(null);
    const innerBeforeRef = (0,react.useRef)(null);
    const innerAfterRef = (0,react.useRef)(null);
    const outerAfterRef = (0,react.useRef)(null);
    (0,_6O5OEQGF/* useSafeLayoutEffect */.UQ)(() => {
      const element = ref.current;
      if (!element || !portal) {
        setPortalNode(null);
        return;
      }
      const portalEl = getPortalElement(element, portalElement);
      if (!portalEl) {
        setPortalNode(null);
        return;
      }
      const isPortalInDocument = portalEl.isConnected;
      if (!isPortalInDocument) {
        const rootElement = context || getRootElement(element);
        rootElement.appendChild(portalEl);
      }
      if (!portalEl.id) {
        portalEl.id = element.id ? `portal/${element.id}` : getRandomId();
      }
      setPortalNode(portalEl);
      (0,XM66DUTO/* setRef */.cZ)(portalRef, portalEl);
      if (isPortalInDocument)
        return;
      return () => {
        portalEl.remove();
        (0,XM66DUTO/* setRef */.cZ)(portalRef, null);
      };
    }, [portal, portalElement, context, portalRef]);
    (0,_6O5OEQGF/* useSafeLayoutEffect */.UQ)(() => {
      if (!preserveTabOrder)
        return;
      if (!preserveTabOrderAnchor)
        return;
      const doc = (0,DLOEKDPY/* getDocument */.YE)(preserveTabOrderAnchor);
      const element = doc.createElement("span");
      element.style.position = "fixed";
      preserveTabOrderAnchor.insertAdjacentElement("afterend", element);
      setAnchorPortalNode(element);
      return () => {
        element.remove();
        setAnchorPortalNode(null);
      };
    }, [preserveTabOrder, preserveTabOrderAnchor]);
    (0,react.useEffect)(() => {
      if (!portalNode)
        return;
      if (!preserveTabOrder)
        return;
      let raf = 0;
      const onFocus = (event) => {
        if (!(0,events/* isFocusEventOutside */.aG)(event))
          return;
        const focusing = event.type === "focusin";
        cancelAnimationFrame(raf);
        if (focusing) {
          return (0,utils_focus/* restoreFocusIn */.QZ)(portalNode);
        }
        raf = requestAnimationFrame(() => {
          (0,utils_focus/* disableFocusIn */.gw)(portalNode, true);
        });
      };
      portalNode.addEventListener("focusin", onFocus, true);
      portalNode.addEventListener("focusout", onFocus, true);
      return () => {
        cancelAnimationFrame(raf);
        portalNode.removeEventListener("focusin", onFocus, true);
        portalNode.removeEventListener("focusout", onFocus, true);
      };
    }, [portalNode, preserveTabOrder]);
    props = (0,_6O5OEQGF/* useWrapElement */.w7)(
      props,
      (element) => {
        element = // While the portal node is not in the DOM, we need to pass the
        // current context to the portal context, otherwise it's going to
        // reset to the body element on nested portals.
        /* @__PURE__ */ (0,jsx_runtime.jsx)(PortalContext.Provider, { value: portalNode || context, children: element });
        if (!portal)
          return element;
        if (!portalNode) {
          return /* @__PURE__ */ (0,jsx_runtime.jsx)(
            "span",
            {
              ref: refProp,
              id: props.id,
              style: { position: "fixed" },
              hidden: true
            }
          );
        }
        element = /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
          preserveTabOrder && portalNode && /* @__PURE__ */ (0,jsx_runtime.jsx)(
            FocusTrap,
            {
              ref: innerBeforeRef,
              className: "__focus-trap-inner-before",
              onFocus: (event) => {
                if ((0,events/* isFocusEventOutside */.aG)(event, portalNode)) {
                  queueFocus((0,utils_focus/* getNextTabbable */.vF)());
                } else {
                  queueFocus(outerBeforeRef.current);
                }
              }
            }
          ),
          element,
          preserveTabOrder && portalNode && /* @__PURE__ */ (0,jsx_runtime.jsx)(
            FocusTrap,
            {
              ref: innerAfterRef,
              className: "__focus-trap-inner-after",
              onFocus: (event) => {
                if ((0,events/* isFocusEventOutside */.aG)(event, portalNode)) {
                  queueFocus((0,utils_focus/* getPreviousTabbable */.XJ)());
                } else {
                  queueFocus(outerAfterRef.current);
                }
              }
            }
          )
        ] });
        if (portalNode) {
          element = (0,react_dom.createPortal)(element, portalNode);
        }
        let preserveTabOrderElement = /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
          preserveTabOrder && portalNode && /* @__PURE__ */ (0,jsx_runtime.jsx)(
            FocusTrap,
            {
              ref: outerBeforeRef,
              className: "__focus-trap-outer-before",
              onFocus: (event) => {
                const fromOuter = event.relatedTarget === outerAfterRef.current;
                if (!fromOuter && (0,events/* isFocusEventOutside */.aG)(event, portalNode)) {
                  queueFocus(innerBeforeRef.current);
                } else {
                  queueFocus((0,utils_focus/* getPreviousTabbable */.XJ)());
                }
              }
            }
          ),
          preserveTabOrder && // We're using position: fixed here so that the browser doesn't
          // add margin to the element when setting gap on a parent element.
          /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { "aria-owns": portalNode == null ? void 0 : portalNode.id, style: { position: "fixed" } }),
          preserveTabOrder && portalNode && /* @__PURE__ */ (0,jsx_runtime.jsx)(
            FocusTrap,
            {
              ref: outerAfterRef,
              className: "__focus-trap-outer-after",
              onFocus: (event) => {
                if ((0,events/* isFocusEventOutside */.aG)(event, portalNode)) {
                  queueFocus(innerAfterRef.current);
                } else {
                  const nextTabbable = (0,utils_focus/* getNextTabbable */.vF)();
                  if (nextTabbable === innerBeforeRef.current) {
                    requestAnimationFrame(() => {
                      var _a2;
                      return (_a2 = (0,utils_focus/* getNextTabbable */.vF)()) == null ? void 0 : _a2.focus();
                    });
                    return;
                  }
                  queueFocus(nextTabbable);
                }
              }
            }
          )
        ] });
        if (anchorPortalNode && preserveTabOrder) {
          preserveTabOrderElement = (0,react_dom.createPortal)(
            preserveTabOrderElement,
            anchorPortalNode
          );
        }
        return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
          preserveTabOrderElement,
          element
        ] });
      },
      [
        portalNode,
        context,
        portal,
        props.id,
        preserveTabOrder,
        anchorPortalNode
      ]
    );
    props = (0,_4R3V3JGP/* __spreadProps */.ko)((0,_4R3V3JGP/* __spreadValues */.IA)({}, props), {
      ref: refProp
    });
    return props;
  }
);
var Portal = (0,_3ORBWXWF/* createComponent */.a0)((props) => {
  const htmlProps = usePortal(props);
  return (0,_3ORBWXWF/* createElement */.n)("div", htmlProps);
});
if (false) {}



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/G6BJYYBK.js
var G6BJYYBK = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/G6BJYYBK.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/KK7H3W2B.js
var KK7H3W2B = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/KK7H3W2B.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/ZSELSBRM.js
var ZSELSBRM = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/ZSELSBRM.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/EKQEJRUF.js
var EKQEJRUF = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/EKQEJRUF.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/NERBASET.js
"use client";




















// src/dialog/dialog.tsx







var isSafariBrowser = (0,MHPO2BXA/* isSafari */.nr)();
function isAlreadyFocusingAnotherElement(dialog) {
  const activeElement = (0,DLOEKDPY/* getActiveElement */.bq)();
  if (!activeElement)
    return false;
  if (dialog && (0,DLOEKDPY/* contains */.gR)(dialog, activeElement))
    return false;
  if ((0,utils_focus/* isFocusable */.tp)(activeElement))
    return true;
  return false;
}
function getElementFromProp(prop, focusable = false) {
  if (!prop)
    return null;
  const element = "current" in prop ? prop.current : prop;
  if (!element)
    return null;
  if (focusable)
    return (0,utils_focus/* isFocusable */.tp)(element) ? element : null;
  return element;
}
var useDialog = (0,_3ORBWXWF/* createHook */.ab)(
  (_a) => {
    var _b = _a, {
      store: storeProp,
      open: openProp,
      onClose,
      focusable = true,
      modal = true,
      portal = !!modal,
      backdrop = !!modal,
      backdropProps,
      hideOnEscape = true,
      hideOnInteractOutside = true,
      getPersistentElements,
      preventBodyScroll = !!modal,
      autoFocusOnShow = true,
      autoFocusOnHide = true,
      initialFocus,
      finalFocus,
      unmountOnHide
    } = _b, props = (0,_4R3V3JGP/* __objRest */.YG)(_b, [
      "store",
      "open",
      "onClose",
      "focusable",
      "modal",
      "portal",
      "backdrop",
      "backdropProps",
      "hideOnEscape",
      "hideOnInteractOutside",
      "getPersistentElements",
      "preventBodyScroll",
      "autoFocusOnShow",
      "autoFocusOnHide",
      "initialFocus",
      "finalFocus",
      "unmountOnHide"
    ]);
    const context = (0,G6BJYYBK/* useDialogProviderContext */.cH)();
    const ref = (0,react.useRef)(null);
    const store = (0,ZSELSBRM/* useDialogStore */.j)({
      store: storeProp || context,
      open: openProp,
      setOpen(open2) {
        if (open2)
          return;
        const dialog = ref.current;
        if (!dialog)
          return;
        const event = new Event("close", { bubbles: false, cancelable: true });
        if (onClose) {
          dialog.addEventListener("close", onClose, { once: true });
        }
        dialog.dispatchEvent(event);
        if (!event.defaultPrevented)
          return;
        store.setOpen(true);
      }
    });
    const { portalRef, domReady } = (0,_6O5OEQGF/* usePortalRef */.TE)(portal, props.portalRef);
    const preserveTabOrderProp = props.preserveTabOrder;
    const preserveTabOrder = store.useState(
      (state) => preserveTabOrderProp && !modal && state.mounted
    );
    const id = (0,_6O5OEQGF/* useId */.Bi)(props.id);
    const open = store.useState("open");
    const mounted = store.useState("mounted");
    const contentElement = store.useState("contentElement");
    const hidden = (0,CLE7NTOY/* isHidden */.dK)(mounted, props.hidden, props.alwaysVisible);
    usePreventBodyScroll(contentElement, id, preventBodyScroll && !hidden);
    useHideOnInteractOutside(store, hideOnInteractOutside, domReady);
    const { wrapElement, nestedDialogs } = useNestedDialogs(store);
    props = (0,_6O5OEQGF/* useWrapElement */.w7)(props, wrapElement, [wrapElement]);
    if (false) {}
    (0,_6O5OEQGF/* useSafeLayoutEffect */.UQ)(() => {
      if (!open)
        return;
      const dialog = ref.current;
      const activeElement = (0,DLOEKDPY/* getActiveElement */.bq)(dialog, true);
      if (!activeElement)
        return;
      if (activeElement.tagName === "BODY")
        return;
      if (dialog && (0,DLOEKDPY/* contains */.gR)(dialog, activeElement))
        return;
      store.setDisclosureElement(activeElement);
    }, [store, open]);
    if (isSafariBrowser) {
      (0,react.useEffect)(() => {
        if (!mounted)
          return;
        const { disclosureElement } = store.getState();
        if (!disclosureElement)
          return;
        if (!(0,DLOEKDPY/* isButton */.Bm)(disclosureElement))
          return;
        const onMouseDown = () => {
          let receivedFocus = false;
          const onFocus = () => {
            receivedFocus = true;
          };
          const options = { capture: true, once: true };
          disclosureElement.addEventListener("focusin", onFocus, options);
          (0,events/* queueBeforeEvent */.nz)(disclosureElement, "mouseup", () => {
            disclosureElement.removeEventListener("focusin", onFocus, true);
            if (receivedFocus)
              return;
            (0,utils_focus/* focusIfNeeded */["do"])(disclosureElement);
          });
        };
        disclosureElement.addEventListener("mousedown", onMouseDown);
        return () => {
          disclosureElement.removeEventListener("mousedown", onMouseDown);
        };
      }, [store, mounted]);
    }
    (0,react.useEffect)(() => {
      if (!modal)
        return;
      if (!mounted)
        return;
      if (!domReady)
        return;
      const dialog = ref.current;
      if (!dialog)
        return;
      const existingDismiss = dialog.querySelector("[data-dialog-dismiss]");
      if (existingDismiss)
        return;
      return prependHiddenDismiss(dialog, store.hide);
    }, [store, modal, mounted, domReady]);
    (0,_6O5OEQGF/* useSafeLayoutEffect */.UQ)(() => {
      if (open)
        return;
      if (!mounted)
        return;
      if (!domReady)
        return;
      const dialog = ref.current;
      if (!dialog)
        return;
      return disableTree(dialog);
    }, [open, mounted, domReady]);
    const canTakeTreeSnapshot = open && domReady;
    (0,_6O5OEQGF/* useSafeLayoutEffect */.UQ)(() => {
      if (!id)
        return;
      if (!canTakeTreeSnapshot)
        return;
      const dialog = ref.current;
      return createWalkTreeSnapshot(id, [dialog]);
    }, [id, canTakeTreeSnapshot]);
    const getPersistentElementsProp = (0,_6O5OEQGF/* useEvent */._q)(getPersistentElements);
    (0,_6O5OEQGF/* useSafeLayoutEffect */.UQ)(() => {
      if (!id)
        return;
      if (!canTakeTreeSnapshot)
        return;
      const { disclosureElement } = store.getState();
      const dialog = ref.current;
      const persistentElements = getPersistentElementsProp() || [];
      const allElements = [
        dialog,
        ...persistentElements,
        ...nestedDialogs.map((dialog2) => dialog2.getState().contentElement)
      ];
      if (modal) {
        return (0,Y3OOHFCN/* chain */.cy)(
          markTreeOutside(id, allElements),
          disableTreeOutside(id, allElements)
        );
      }
      return markTreeOutside(id, [disclosureElement, ...allElements]);
    }, [
      id,
      store,
      canTakeTreeSnapshot,
      getPersistentElementsProp,
      nestedDialogs,
      modal
    ]);
    const mayAutoFocusOnShow = !!autoFocusOnShow;
    const autoFocusOnShowProp = (0,_6O5OEQGF/* useBooleanEvent */.O4)(autoFocusOnShow);
    const [autoFocusEnabled, setAutoFocusEnabled] = (0,react.useState)(false);
    (0,react.useEffect)(() => {
      if (!open)
        return;
      if (!mayAutoFocusOnShow)
        return;
      if (!domReady)
        return;
      if (!(contentElement == null ? void 0 : contentElement.isConnected))
        return;
      const element = getElementFromProp(initialFocus, true) || // If no initial focus is specified, we try to focus the first element
      // with the autofocus attribute. If it's an Ariakit component, the
      // Focusable component will consume the autoFocus prop and add the
      // data-autofocus attribute to the element instead.
      contentElement.querySelector(
        "[data-autofocus=true],[autofocus]"
      ) || // We have to fallback to the first focusable element otherwise portaled
      // dialogs with preserveTabOrder set to true will not receive focus
      // properly because the elements aren't tabbable until the dialog
      // receives focus.
      (0,utils_focus/* getFirstTabbableIn */.LC)(contentElement, true, portal && preserveTabOrder) || // Finally, we fallback to the dialog element itself.
      contentElement;
      const isElementFocusable = (0,utils_focus/* isFocusable */.tp)(element);
      if (!autoFocusOnShowProp(isElementFocusable ? element : null))
        return;
      setAutoFocusEnabled(true);
      queueMicrotask(() => {
        element.focus();
        if (!isSafariBrowser)
          return;
        element.scrollIntoView({ block: "nearest", inline: "nearest" });
      });
    }, [
      open,
      mayAutoFocusOnShow,
      domReady,
      contentElement,
      initialFocus,
      portal,
      preserveTabOrder,
      autoFocusOnShowProp
    ]);
    const mayAutoFocusOnHide = !!autoFocusOnHide;
    const autoFocusOnHideProp = (0,_6O5OEQGF/* useBooleanEvent */.O4)(autoFocusOnHide);
    const [hasOpened, setHasOpened] = (0,react.useState)(false);
    (0,react.useEffect)(() => {
      if (!open)
        return;
      setHasOpened(true);
      return () => setHasOpened(false);
    }, [open]);
    const focusOnHide = (0,react.useCallback)(
      (dialog, retry = true) => {
        const { disclosureElement } = store.getState();
        if (isAlreadyFocusingAnotherElement(dialog))
          return;
        let element = getElementFromProp(finalFocus) || disclosureElement;
        if (element == null ? void 0 : element.id) {
          const doc = (0,DLOEKDPY/* getDocument */.YE)(element);
          const selector = `[aria-activedescendant="${element.id}"]`;
          const composite = doc.querySelector(selector);
          if (composite) {
            element = composite;
          }
        }
        if (element && !(0,utils_focus/* isFocusable */.tp)(element)) {
          const maybeParentDialog = (0,DLOEKDPY/* closest */.kp)(element, "[data-dialog]");
          if (maybeParentDialog && maybeParentDialog.id) {
            const doc = (0,DLOEKDPY/* getDocument */.YE)(maybeParentDialog);
            const selector = `[aria-controls~="${maybeParentDialog.id}"]`;
            const control = doc.querySelector(selector);
            if (control) {
              element = control;
            }
          }
        }
        const isElementFocusable = element && (0,utils_focus/* isFocusable */.tp)(element);
        if (!isElementFocusable && retry) {
          requestAnimationFrame(() => focusOnHide(dialog, false));
          return;
        }
        if (!autoFocusOnHideProp(isElementFocusable ? element : null))
          return;
        if (!isElementFocusable)
          return;
        element == null ? void 0 : element.focus();
      },
      [store, finalFocus, autoFocusOnHideProp]
    );
    (0,_6O5OEQGF/* useSafeLayoutEffect */.UQ)(() => {
      if (open)
        return;
      if (!hasOpened)
        return;
      if (!mayAutoFocusOnHide)
        return;
      const dialog = ref.current;
      focusOnHide(dialog);
    }, [open, hasOpened, domReady, mayAutoFocusOnHide, focusOnHide]);
    (0,react.useEffect)(() => {
      if (!hasOpened)
        return;
      if (!mayAutoFocusOnHide)
        return;
      const dialog = ref.current;
      return () => focusOnHide(dialog);
    }, [hasOpened, mayAutoFocusOnHide, focusOnHide]);
    const hideOnEscapeProp = (0,_6O5OEQGF/* useBooleanEvent */.O4)(hideOnEscape);
    (0,react.useEffect)(() => {
      if (!domReady)
        return;
      if (!mounted)
        return;
      const onKeyDown = (event) => {
        if (event.key !== "Escape")
          return;
        if (event.defaultPrevented)
          return;
        const dialog = ref.current;
        if (!dialog)
          return;
        if (isElementMarked(dialog))
          return;
        const target = event.target;
        if (!target)
          return;
        const { disclosureElement } = store.getState();
        const isValidTarget = () => {
          if (target.tagName === "BODY")
            return true;
          if ((0,DLOEKDPY/* contains */.gR)(dialog, target))
            return true;
          if (!disclosureElement)
            return true;
          if ((0,DLOEKDPY/* contains */.gR)(disclosureElement, target))
            return true;
          return false;
        };
        if (!isValidTarget())
          return;
        if (!hideOnEscapeProp(event))
          return;
        store.hide();
      };
      return (0,events/* addGlobalEventListener */.dg)("keydown", onKeyDown, true);
    }, [store, domReady, mounted, hideOnEscapeProp]);
    props = (0,_6O5OEQGF/* useWrapElement */.w7)(
      props,
      (element) => /* @__PURE__ */ (0,jsx_runtime.jsx)(HeadingLevel, { level: modal ? 1 : void 0, children: element }),
      [modal]
    );
    const hiddenProp = props.hidden;
    const alwaysVisible = props.alwaysVisible;
    props = (0,_6O5OEQGF/* useWrapElement */.w7)(
      props,
      (element) => {
        if (!backdrop)
          return element;
        return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
          /* @__PURE__ */ (0,jsx_runtime.jsx)(
            DialogBackdrop,
            {
              store,
              backdrop,
              backdropProps,
              hidden: hiddenProp,
              alwaysVisible
            }
          ),
          element
        ] });
      },
      [store, backdrop, backdropProps, hiddenProp, alwaysVisible]
    );
    const [headingId, setHeadingId] = (0,react.useState)();
    const [descriptionId, setDescriptionId] = (0,react.useState)();
    props = (0,_6O5OEQGF/* useWrapElement */.w7)(
      props,
      (element) => /* @__PURE__ */ (0,jsx_runtime.jsx)(G6BJYYBK/* DialogScopedContextProvider */.XP, { value: store, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(G6BJYYBK/* DialogHeadingContext */.YH.Provider, { value: setHeadingId, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(G6BJYYBK/* DialogDescriptionContext */.oL.Provider, { value: setDescriptionId, children: element }) }) }),
      [store]
    );
    props = (0,_4R3V3JGP/* __spreadProps */.ko)((0,_4R3V3JGP/* __spreadValues */.IA)({
      id,
      "data-dialog": "",
      role: "dialog",
      tabIndex: focusable ? -1 : void 0,
      "aria-labelledby": headingId,
      "aria-describedby": descriptionId
    }, props), {
      ref: (0,_6O5OEQGF/* useMergeRefs */.SV)(ref, props.ref)
    });
    props = useFocusableContainer((0,_4R3V3JGP/* __spreadProps */.ko)((0,_4R3V3JGP/* __spreadValues */.IA)({}, props), {
      autoFocusOnShow: autoFocusEnabled
    }));
    props = (0,CLE7NTOY/* useDisclosureContent */.aT)((0,_4R3V3JGP/* __spreadValues */.IA)({ store }, props));
    props = (0,KK7H3W2B/* useFocusable */.W)((0,_4R3V3JGP/* __spreadProps */.ko)((0,_4R3V3JGP/* __spreadValues */.IA)({}, props), { focusable }));
    props = usePortal((0,_4R3V3JGP/* __spreadProps */.ko)((0,_4R3V3JGP/* __spreadValues */.IA)({ portal }, props), { portalRef, preserveTabOrder }));
    return props;
  }
);
function createDialogComponent(Component, useProviderContext = G6BJYYBK/* useDialogProviderContext */.cH) {
  return (0,_3ORBWXWF/* createComponent */.a0)((props) => {
    const context = useProviderContext();
    const store = props.store || context;
    const mounted = (0,EKQEJRUF/* useStoreState */.O$)(
      store,
      (state) => !props.unmountOnHide || (state == null ? void 0 : state.mounted) || !!props.open
    );
    if (!mounted)
      return null;
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(Component, (0,_4R3V3JGP/* __spreadValues */.IA)({}, props));
  });
}
var Dialog = createDialogComponent(
  (0,_3ORBWXWF/* createComponent */.a0)((props) => {
    const htmlProps = useDialog(props);
    return (0,_3ORBWXWF/* createElement */.n)("div", htmlProps);
  }),
  G6BJYYBK/* useDialogProviderContext */.cH
);
if (false) {}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/OAYFXAQ2.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WT: () => (/* binding */ DisclosureScopedContextProvider),
/* harmony export */   sI: () => (/* binding */ DisclosureContextProvider),
/* harmony export */   vO: () => (/* binding */ useDisclosureProviderContext)
/* harmony export */ });
/* unused harmony exports useDisclosureContext, useDisclosureScopedContext */
/* harmony import */ var _3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js");
"use client";


// src/disclosure/disclosure-context.tsx
var ctx = (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_0__/* .createStoreContext */ .B0)();
var useDisclosureContext = ctx.useContext;
var useDisclosureScopedContext = ctx.useScopedContext;
var useDisclosureProviderContext = ctx.useProviderContext;
var DisclosureContextProvider = ctx.ContextProvider;
var DisclosureScopedContextProvider = ctx.ScopedContextProvider;




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/QWSZGSIG.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* binding */ useHovercard)
});

// UNUSED EXPORTS: Hovercard

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/YMV43K4F.js
"use client";

// src/hovercard/utils/polygon.ts
function getEventPoint(event) {
  return [event.clientX, event.clientY];
}
function isPointInPolygon(point, polygon) {
  const [x, y] = point;
  let inside = false;
  const length = polygon.length;
  for (let l = length, i = 0, j = l - 1; i < l; j = i++) {
    const [xi, yi] = polygon[i];
    const [xj, yj] = polygon[j];
    const [, vy] = polygon[j === 0 ? l - 1 : j - 1] || [0, 0];
    const where = (yi - yj) * (x - xi) - (xi - xj) * (y - yi);
    if (yj < yi) {
      if (y >= yj && y < yi) {
        if (where === 0)
          return true;
        if (where > 0) {
          if (y === yj) {
            if (y > vy) {
              inside = !inside;
            }
          } else {
            inside = !inside;
          }
        }
      }
    } else if (yi < yj) {
      if (y > yi && y <= yj) {
        if (where === 0)
          return true;
        if (where < 0) {
          if (y === yj) {
            if (y < vy) {
              inside = !inside;
            }
          } else {
            inside = !inside;
          }
        }
      }
    } else if (y == yi && (x >= xj && x <= xi || x >= xi && x <= xj)) {
      return true;
    }
  }
  return inside;
}
function getEnterPointPlacement(enterPoint, rect) {
  const { top, right, bottom, left } = rect;
  const [x, y] = enterPoint;
  const placementX = x < left ? "left" : x > right ? "right" : null;
  const placementY = y < top ? "top" : y > bottom ? "bottom" : null;
  return [placementX, placementY];
}
function getElementPolygon(element, enterPoint) {
  const rect = element.getBoundingClientRect();
  const { top, right, bottom, left } = rect;
  const [x, y] = getEnterPointPlacement(enterPoint, rect);
  const polygon = [enterPoint];
  if (x) {
    if (y !== "top") {
      polygon.push([x === "left" ? left : right, top]);
    }
    polygon.push([x === "left" ? right : left, top]);
    polygon.push([x === "left" ? right : left, bottom]);
    if (y !== "bottom") {
      polygon.push([x === "left" ? left : right, bottom]);
    }
  } else if (y === "top") {
    polygon.push([left, top]);
    polygon.push([left, bottom]);
    polygon.push([right, bottom]);
    polygon.push([right, top]);
  } else {
    polygon.push([left, bottom]);
    polygon.push([left, top]);
    polygon.push([right, top]);
    polygon.push([right, bottom]);
  }
  return polygon;
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/NERBASET.js + 21 modules
var NERBASET = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/NERBASET.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/7H5KSHHF.js
var _7H5KSHHF = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/7H5KSHHF.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js
var _3ORBWXWF = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js
var _6O5OEQGF = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js
var _4R3V3JGP = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/Y3OOHFCN.js
var Y3OOHFCN = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/Y3OOHFCN.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@floating-ui+core@1.5.2/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
var floating_ui_core = __webpack_require__("../../node_modules/.pnpm/@floating-ui+core@1.5.2/node_modules/@floating-ui/core/dist/floating-ui.core.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@floating-ui+dom@1.5.3/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs + 1 modules
var floating_ui_dom = __webpack_require__("../../node_modules/.pnpm/@floating-ui+dom@1.5.3/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/IRX7SFUJ.js
"use client";






// src/popover/popover.tsx




function createDOMRect(x = 0, y = 0, width = 0, height = 0) {
  if (typeof DOMRect === "function") {
    return new DOMRect(x, y, width, height);
  }
  const rect = {
    x,
    y,
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x
  };
  return (0,_4R3V3JGP/* __spreadProps */.ko)((0,_4R3V3JGP/* __spreadValues */.IA)({}, rect), { toJSON: () => rect });
}
function getDOMRect(anchorRect) {
  if (!anchorRect)
    return createDOMRect();
  const { x, y, width, height } = anchorRect;
  return createDOMRect(x, y, width, height);
}
function getAnchorElement(anchorElement, getAnchorRect) {
  const contextElement = anchorElement || void 0;
  return {
    contextElement,
    getBoundingClientRect: () => {
      const anchor = anchorElement;
      const anchorRect = getAnchorRect == null ? void 0 : getAnchorRect(anchor);
      if (anchorRect || !anchor) {
        return getDOMRect(anchorRect);
      }
      return anchor.getBoundingClientRect();
    }
  };
}
function isValidPlacement(flip2) {
  return /^(?:top|bottom|left|right)(?:-(?:start|end))?$/.test(flip2);
}
function roundByDPR(value) {
  const dpr = window.devicePixelRatio || 1;
  return Math.round(value * dpr) / dpr;
}
function getOffsetMiddleware(arrowElement, props) {
  return (0,floating_ui_core/* offset */.cY)(({ placement }) => {
    var _a;
    const arrowOffset = ((arrowElement == null ? void 0 : arrowElement.clientHeight) || 0) / 2;
    const finalGutter = typeof props.gutter === "number" ? props.gutter + arrowOffset : (_a = props.gutter) != null ? _a : arrowOffset;
    const hasAlignment = !!placement.split("-")[1];
    return {
      crossAxis: !hasAlignment ? props.shift : void 0,
      mainAxis: finalGutter,
      alignmentAxis: props.shift
    };
  });
}
function getFlipMiddleware(props) {
  if (props.flip === false)
    return;
  const fallbackPlacements = typeof props.flip === "string" ? props.flip.split(" ") : void 0;
  (0,Y3OOHFCN/* invariant */.V1)(
    !fallbackPlacements || fallbackPlacements.every(isValidPlacement),
     false && 0
  );
  return (0,floating_ui_core/* flip */.UU)({
    padding: props.overflowPadding,
    fallbackPlacements
  });
}
function getShiftMiddleware(props) {
  if (!props.slide && !props.overlap)
    return;
  return (0,floating_ui_core/* shift */.BN)({
    mainAxis: props.slide,
    crossAxis: props.overlap,
    padding: props.overflowPadding,
    limiter: (0,floating_ui_core/* limitShift */.ER)()
  });
}
function getSizeMiddleware(props) {
  return (0,floating_ui_core/* size */.Ej)({
    padding: props.overflowPadding,
    apply({ elements, availableWidth, availableHeight, rects }) {
      const wrapper = elements.floating;
      const referenceWidth = Math.round(rects.reference.width);
      availableWidth = Math.floor(availableWidth);
      availableHeight = Math.floor(availableHeight);
      wrapper.style.setProperty(
        "--popover-anchor-width",
        `${referenceWidth}px`
      );
      wrapper.style.setProperty(
        "--popover-available-width",
        `${availableWidth}px`
      );
      wrapper.style.setProperty(
        "--popover-available-height",
        `${availableHeight}px`
      );
      if (props.sameWidth) {
        wrapper.style.width = `${referenceWidth}px`;
      }
      if (props.fitViewport) {
        wrapper.style.maxWidth = `${availableWidth}px`;
        wrapper.style.maxHeight = `${availableHeight}px`;
      }
    }
  });
}
function getArrowMiddleware(arrowElement, props) {
  if (!arrowElement)
    return;
  return (0,floating_ui_core/* arrow */.UE)({
    element: arrowElement,
    padding: props.arrowPadding
  });
}
var usePopover = (0,_3ORBWXWF/* createHook */.ab)(
  (_a) => {
    var _b = _a, {
      store,
      modal = false,
      portal = !!modal,
      preserveTabOrder = true,
      autoFocusOnShow = true,
      wrapperProps,
      fixed = false,
      flip: flip2 = true,
      shift: shift2 = 0,
      slide = true,
      overlap = false,
      sameWidth = false,
      fitViewport = false,
      gutter,
      arrowPadding = 4,
      overflowPadding = 8,
      getAnchorRect,
      updatePosition
    } = _b, props = (0,_4R3V3JGP/* __objRest */.YG)(_b, [
      "store",
      "modal",
      "portal",
      "preserveTabOrder",
      "autoFocusOnShow",
      "wrapperProps",
      "fixed",
      "flip",
      "shift",
      "slide",
      "overlap",
      "sameWidth",
      "fitViewport",
      "gutter",
      "arrowPadding",
      "overflowPadding",
      "getAnchorRect",
      "updatePosition"
    ]);
    const context = (0,_7H5KSHHF/* usePopoverProviderContext */.zG)();
    store = store || context;
    (0,Y3OOHFCN/* invariant */.V1)(
      store,
       false && 0
    );
    const arrowElement = store.useState("arrowElement");
    const anchorElement = store.useState("anchorElement");
    const disclosureElement = store.useState("disclosureElement");
    const popoverElement = store.useState("popoverElement");
    const contentElement = store.useState("contentElement");
    const placement = store.useState("placement");
    const mounted = store.useState("mounted");
    const rendered = store.useState("rendered");
    const [positioned, setPositioned] = (0,react.useState)(false);
    const { portalRef, domReady } = (0,_6O5OEQGF/* usePortalRef */.TE)(portal, props.portalRef);
    const getAnchorRectProp = (0,_6O5OEQGF/* useEvent */._q)(getAnchorRect);
    const updatePositionProp = (0,_6O5OEQGF/* useEvent */._q)(updatePosition);
    const hasCustomUpdatePosition = !!updatePosition;
    (0,_6O5OEQGF/* useSafeLayoutEffect */.UQ)(() => {
      if (!(popoverElement == null ? void 0 : popoverElement.isConnected))
        return;
      popoverElement.style.setProperty(
        "--popover-overflow-padding",
        `${overflowPadding}px`
      );
      const anchor = getAnchorElement(anchorElement, getAnchorRectProp);
      const updatePosition2 = async () => {
        if (!mounted)
          return;
        const middleware = [
          getOffsetMiddleware(arrowElement, { gutter, shift: shift2 }),
          getFlipMiddleware({ flip: flip2, overflowPadding }),
          getShiftMiddleware({ slide, shift: shift2, overlap, overflowPadding }),
          getArrowMiddleware(arrowElement, { arrowPadding }),
          getSizeMiddleware({
            sameWidth,
            fitViewport,
            overflowPadding
          })
        ];
        const pos = await (0,floating_ui_dom/* computePosition */.rD)(anchor, popoverElement, {
          placement,
          strategy: fixed ? "fixed" : "absolute",
          middleware
        });
        store == null ? void 0 : store.setState("currentPlacement", pos.placement);
        setPositioned(true);
        const x = roundByDPR(pos.x);
        const y = roundByDPR(pos.y);
        Object.assign(popoverElement.style, {
          top: "0",
          left: "0",
          transform: `translate3d(${x}px,${y}px,0)`
        });
        if (arrowElement && pos.middlewareData.arrow) {
          const { x: arrowX, y: arrowY } = pos.middlewareData.arrow;
          const dir = pos.placement.split("-")[0];
          Object.assign(arrowElement.style, {
            left: arrowX != null ? `${arrowX}px` : "",
            top: arrowY != null ? `${arrowY}px` : "",
            [dir]: "100%"
          });
        }
      };
      const update = async () => {
        if (hasCustomUpdatePosition) {
          await updatePositionProp({ updatePosition: updatePosition2 });
          setPositioned(true);
        } else {
          await updatePosition2();
        }
      };
      const cancelAutoUpdate = (0,floating_ui_dom/* autoUpdate */.ll)(anchor, popoverElement, update, {
        // JSDOM doesn't support ResizeObserver
        elementResize: typeof ResizeObserver === "function"
      });
      return () => {
        setPositioned(false);
        cancelAutoUpdate();
      };
    }, [
      store,
      rendered,
      popoverElement,
      arrowElement,
      anchorElement,
      popoverElement,
      placement,
      mounted,
      domReady,
      fixed,
      flip2,
      shift2,
      slide,
      overlap,
      sameWidth,
      fitViewport,
      gutter,
      arrowPadding,
      overflowPadding,
      getAnchorRectProp,
      hasCustomUpdatePosition,
      updatePositionProp
    ]);
    (0,_6O5OEQGF/* useSafeLayoutEffect */.UQ)(() => {
      if (!mounted)
        return;
      if (!domReady)
        return;
      if (!(popoverElement == null ? void 0 : popoverElement.isConnected))
        return;
      if (!(contentElement == null ? void 0 : contentElement.isConnected))
        return;
      const applyZIndex = () => {
        popoverElement.style.zIndex = getComputedStyle(contentElement).zIndex;
      };
      applyZIndex();
      let raf = requestAnimationFrame(() => {
        raf = requestAnimationFrame(applyZIndex);
      });
      return () => cancelAnimationFrame(raf);
    }, [mounted, domReady, popoverElement, contentElement]);
    const position = fixed ? "fixed" : "absolute";
    props = (0,_6O5OEQGF/* useWrapElement */.w7)(
      props,
      (element) => /* @__PURE__ */ (0,jsx_runtime.jsx)(
        "div",
        (0,_4R3V3JGP/* __spreadProps */.ko)((0,_4R3V3JGP/* __spreadValues */.IA)({
          role: "presentation"
        }, wrapperProps), {
          style: (0,_4R3V3JGP/* __spreadValues */.IA)({
            // https://floating-ui.com/docs/computeposition#initial-layout
            position,
            top: 0,
            left: 0,
            width: "max-content"
          }, wrapperProps == null ? void 0 : wrapperProps.style),
          ref: store == null ? void 0 : store.setPopoverElement,
          children: element
        })
      ),
      [store, position, wrapperProps]
    );
    props = (0,_6O5OEQGF/* useWrapElement */.w7)(
      props,
      (element) => /* @__PURE__ */ (0,jsx_runtime.jsx)(_7H5KSHHF/* PopoverScopedContextProvider */.s1, { value: store, children: element }),
      [store]
    );
    props = (0,_4R3V3JGP/* __spreadProps */.ko)((0,_4R3V3JGP/* __spreadValues */.IA)({
      // data-placing is not part of the public API. We're setting this here so
      // we can wait for the popover to be positioned before other components
      // move focus into it. For example, this attribute is observed by the
      // Combobox component with the autoSelect behavior.
      "data-placing": !positioned ? "" : void 0
    }, props), {
      style: (0,_4R3V3JGP/* __spreadValues */.IA)({
        position: "relative"
      }, props.style)
    });
    props = (0,NERBASET/* useDialog */.sp)((0,_4R3V3JGP/* __spreadProps */.ko)((0,_4R3V3JGP/* __spreadValues */.IA)({
      store,
      modal,
      portal,
      preserveTabOrder,
      preserveTabOrderAnchor: disclosureElement || anchorElement,
      autoFocusOnShow: positioned && autoFocusOnShow
    }, props), {
      portalRef
    }));
    return props;
  }
);
var Popover = (0,NERBASET/* createDialogComponent */.AV)(
  (0,_3ORBWXWF/* createComponent */.a0)((props) => {
    const htmlProps = usePopover(props);
    return (0,_3ORBWXWF/* createElement */.n)("div", htmlProps);
  }),
  _7H5KSHHF/* usePopoverProviderContext */.zG
);
if (false) {}



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/TI7CMBHW.js
var TI7CMBHW = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/TI7CMBHW.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/DLOEKDPY.js
var DLOEKDPY = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/DLOEKDPY.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/utils/events.js
var events = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/utils/events.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/utils/focus.js
var utils_focus = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/utils/focus.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/EAHJFCU4.js
var EAHJFCU4 = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/EAHJFCU4.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/QWSZGSIG.js
"use client";








// src/hovercard/hovercard.tsx







function isMovingOnHovercard(target, card, anchor, nested) {
  if ((0,utils_focus/* hasFocusWithin */.oW)(card))
    return true;
  if (!target)
    return false;
  if ((0,DLOEKDPY/* contains */.gR)(card, target))
    return true;
  if (anchor && (0,DLOEKDPY/* contains */.gR)(anchor, target))
    return true;
  if (nested == null ? void 0 : nested.some((card2) => isMovingOnHovercard(target, card2, anchor))) {
    return true;
  }
  return false;
}
function useAutoFocusOnHide(_a) {
  var _b = _a, {
    store
  } = _b, props = (0,_4R3V3JGP/* __objRest */.YG)(_b, [
    "store"
  ]);
  const [autoFocusOnHide, setAutoFocusOnHide] = (0,react.useState)(false);
  const mounted = store.useState("mounted");
  (0,react.useEffect)(() => {
    if (!mounted) {
      setAutoFocusOnHide(false);
    }
  }, [mounted]);
  const onFocusProp = props.onFocus;
  const onFocus = (0,_6O5OEQGF/* useEvent */._q)((event) => {
    onFocusProp == null ? void 0 : onFocusProp(event);
    if (event.defaultPrevented)
      return;
    setAutoFocusOnHide(true);
  });
  const finalFocusRef = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    return (0,EAHJFCU4/* sync */.OH)(store, ["anchorElement"], (state) => {
      finalFocusRef.current = state.anchorElement;
    });
  }, []);
  props = (0,_4R3V3JGP/* __spreadProps */.ko)((0,_4R3V3JGP/* __spreadValues */.IA)({
    autoFocusOnHide,
    finalFocus: finalFocusRef
  }, props), {
    onFocus
  });
  return props;
}
var NestedHovercardContext = (0,react.createContext)(null);
var useHovercard = (0,_3ORBWXWF/* createHook */.ab)(
  (_a) => {
    var _b = _a, {
      store,
      modal = false,
      portal = !!modal,
      hideOnEscape = true,
      hideOnHoverOutside = true,
      disablePointerEventsOnApproach = !!hideOnHoverOutside
    } = _b, props = (0,_4R3V3JGP/* __objRest */.YG)(_b, [
      "store",
      "modal",
      "portal",
      "hideOnEscape",
      "hideOnHoverOutside",
      "disablePointerEventsOnApproach"
    ]);
    const context = (0,TI7CMBHW/* useHovercardProviderContext */.Kw)();
    store = store || context;
    (0,Y3OOHFCN/* invariant */.V1)(
      store,
       false && 0
    );
    const ref = (0,react.useRef)(null);
    const [nestedHovercards, setNestedHovercards] = (0,react.useState)([]);
    const hideTimeoutRef = (0,react.useRef)(0);
    const enterPointRef = (0,react.useRef)(null);
    const { portalRef, domReady } = (0,_6O5OEQGF/* usePortalRef */.TE)(portal, props.portalRef);
    const mayHideOnHoverOutside = !!hideOnHoverOutside;
    const hideOnHoverOutsideProp = (0,_6O5OEQGF/* useBooleanEvent */.O4)(hideOnHoverOutside);
    const mayDisablePointerEvents = !!disablePointerEventsOnApproach;
    const disablePointerEventsProp = (0,_6O5OEQGF/* useBooleanEvent */.O4)(
      disablePointerEventsOnApproach
    );
    const open = store.useState("open");
    const mounted = store.useState("mounted");
    (0,react.useEffect)(() => {
      if (!domReady)
        return;
      if (!mounted)
        return;
      if (!mayHideOnHoverOutside && !mayDisablePointerEvents)
        return;
      const element = ref.current;
      if (!element)
        return;
      const onMouseMove = (event) => {
        if (!store)
          return;
        const { anchorElement, hideTimeout, timeout } = store.getState();
        const enterPoint = enterPointRef.current;
        const [target] = event.composedPath();
        const anchor = anchorElement;
        if (isMovingOnHovercard(target, element, anchor, nestedHovercards)) {
          enterPointRef.current = target && anchor && (0,DLOEKDPY/* contains */.gR)(anchor, target) ? getEventPoint(event) : null;
          window.clearTimeout(hideTimeoutRef.current);
          hideTimeoutRef.current = 0;
          return;
        }
        if (hideTimeoutRef.current)
          return;
        if (enterPoint) {
          const currentPoint = getEventPoint(event);
          const polygon = getElementPolygon(element, enterPoint);
          if (isPointInPolygon(currentPoint, polygon)) {
            enterPointRef.current = currentPoint;
            if (!disablePointerEventsProp(event))
              return;
            event.preventDefault();
            event.stopPropagation();
            return;
          }
        }
        if (!hideOnHoverOutsideProp(event))
          return;
        hideTimeoutRef.current = window.setTimeout(() => {
          hideTimeoutRef.current = 0;
          store == null ? void 0 : store.hide();
        }, hideTimeout != null ? hideTimeout : timeout);
      };
      return (0,Y3OOHFCN/* chain */.cy)(
        (0,events/* addGlobalEventListener */.dg)("mousemove", onMouseMove, true),
        () => clearTimeout(hideTimeoutRef.current)
      );
    }, [
      store,
      domReady,
      mounted,
      mayHideOnHoverOutside,
      mayDisablePointerEvents,
      nestedHovercards,
      disablePointerEventsProp,
      hideOnHoverOutsideProp
    ]);
    (0,react.useEffect)(() => {
      if (!domReady)
        return;
      if (!mounted)
        return;
      if (!mayDisablePointerEvents)
        return;
      const disableEvent = (event) => {
        const element = ref.current;
        if (!element)
          return;
        const enterPoint = enterPointRef.current;
        if (!enterPoint)
          return;
        const polygon = getElementPolygon(element, enterPoint);
        if (isPointInPolygon(getEventPoint(event), polygon)) {
          if (!disablePointerEventsProp(event))
            return;
          event.preventDefault();
          event.stopPropagation();
        }
      };
      return (0,Y3OOHFCN/* chain */.cy)(
        // Note: we may need to add pointer events here in the future.
        (0,events/* addGlobalEventListener */.dg)("mouseenter", disableEvent, true),
        (0,events/* addGlobalEventListener */.dg)("mouseover", disableEvent, true),
        (0,events/* addGlobalEventListener */.dg)("mouseout", disableEvent, true),
        (0,events/* addGlobalEventListener */.dg)("mouseleave", disableEvent, true)
      );
    }, [domReady, mounted, mayDisablePointerEvents, disablePointerEventsProp]);
    (0,react.useEffect)(() => {
      if (!domReady)
        return;
      if (open)
        return;
      store == null ? void 0 : store.setAutoFocusOnShow(false);
    }, [store, domReady, open]);
    const openRef = (0,_6O5OEQGF/* useLiveRef */.hX)(open);
    (0,react.useEffect)(() => {
      if (!domReady)
        return;
      return () => {
        if (!openRef.current) {
          store == null ? void 0 : store.setAutoFocusOnShow(false);
        }
      };
    }, [store, domReady]);
    const registerOnParent = (0,react.useContext)(NestedHovercardContext);
    (0,_6O5OEQGF/* useSafeLayoutEffect */.UQ)(() => {
      if (modal)
        return;
      if (!portal)
        return;
      if (!mounted)
        return;
      if (!domReady)
        return;
      const element = ref.current;
      if (!element)
        return;
      return registerOnParent == null ? void 0 : registerOnParent(element);
    }, [modal, portal, mounted, domReady]);
    const registerNestedHovercard = (0,react.useCallback)(
      (element) => {
        setNestedHovercards((prevElements) => [...prevElements, element]);
        const parentUnregister = registerOnParent == null ? void 0 : registerOnParent(element);
        return () => {
          setNestedHovercards(
            (prevElements) => prevElements.filter((item) => item !== element)
          );
          parentUnregister == null ? void 0 : parentUnregister();
        };
      },
      [registerOnParent]
    );
    props = (0,_6O5OEQGF/* useWrapElement */.w7)(
      props,
      (element) => /* @__PURE__ */ (0,jsx_runtime.jsx)(TI7CMBHW/* HovercardScopedContextProvider */.n0, { value: store, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(NestedHovercardContext.Provider, { value: registerNestedHovercard, children: element }) }),
      [store, registerNestedHovercard]
    );
    props = (0,_4R3V3JGP/* __spreadProps */.ko)((0,_4R3V3JGP/* __spreadValues */.IA)({}, props), {
      ref: (0,_6O5OEQGF/* useMergeRefs */.SV)(ref, props.ref)
    });
    props = useAutoFocusOnHide((0,_4R3V3JGP/* __spreadValues */.IA)({ store }, props));
    const autoFocusOnShow = store.useState(
      (state) => modal || state.autoFocusOnShow
    );
    props = usePopover((0,_4R3V3JGP/* __spreadProps */.ko)((0,_4R3V3JGP/* __spreadValues */.IA)({
      store,
      modal,
      portal,
      autoFocusOnShow
    }, props), {
      portalRef,
      hideOnEscape(event) {
        if ((0,Y3OOHFCN/* isFalsyBooleanCallback */.zO)(hideOnEscape, event))
          return false;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            store == null ? void 0 : store.hide();
          });
        });
        return true;
      }
    }));
    return props;
  }
);
var Hovercard = (0,NERBASET/* createDialogComponent */.AV)(
  (0,_3ORBWXWF/* createComponent */.a0)((props) => {
    const htmlProps = useHovercard(props);
    return (0,_3ORBWXWF/* createElement */.n)("div", htmlProps);
  }),
  TI7CMBHW/* useHovercardProviderContext */.Kw
);
if (false) {}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/SFCBA2JZ.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ useDisclosureStore),
/* harmony export */   W: () => (/* binding */ useDisclosureStoreProps)
/* harmony export */ });
/* harmony import */ var _EKQEJRUF_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/EKQEJRUF.js");
/* harmony import */ var _6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js");
/* harmony import */ var _ariakit_core_disclosure_disclosure_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/Z5IGYIPT.js");
"use client";



// src/disclosure/disclosure-store.ts

function useDisclosureStoreProps(store, update, props) {
  (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_0__/* .useUpdateEffect */ .w5)(update, [props.store, props.disclosure]);
  (0,_EKQEJRUF_js__WEBPACK_IMPORTED_MODULE_1__/* .useStoreProps */ .Tz)(store, props, "open", "setOpen");
  (0,_EKQEJRUF_js__WEBPACK_IMPORTED_MODULE_1__/* .useStoreProps */ .Tz)(store, props, "mounted", "setMounted");
  (0,_EKQEJRUF_js__WEBPACK_IMPORTED_MODULE_1__/* .useStoreProps */ .Tz)(store, props, "animated");
  return store;
}
function useDisclosureStore(props = {}) {
  const [store, update] = (0,_EKQEJRUF_js__WEBPACK_IMPORTED_MODULE_1__/* .useStore */ .Pj)(_ariakit_core_disclosure_disclosure_store__WEBPACK_IMPORTED_MODULE_2__/* .createDisclosureStore */ .h, props);
  return useDisclosureStoreProps(store, update, props);
}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/SHA3WOPI.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ FocusableContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
"use client";

// src/focusable/focusable-context.ts

var FocusableContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(true);




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/TI7CMBHW.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Kw: () => (/* binding */ useHovercardProviderContext),
/* harmony export */   n0: () => (/* binding */ HovercardScopedContextProvider),
/* harmony export */   pR: () => (/* binding */ HovercardContextProvider)
/* harmony export */ });
/* unused harmony exports useHovercardContext, useHovercardScopedContext */
/* harmony import */ var _7H5KSHHF_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/7H5KSHHF.js");
/* harmony import */ var _3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js");
"use client";



// src/hovercard/hovercard-context.tsx
var ctx = (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_0__/* .createStoreContext */ .B0)(
  [_7H5KSHHF_js__WEBPACK_IMPORTED_MODULE_1__/* .PopoverContextProvider */ .wf],
  [_7H5KSHHF_js__WEBPACK_IMPORTED_MODULE_1__/* .PopoverScopedContextProvider */ .s1]
);
var useHovercardContext = ctx.useContext;
var useHovercardScopedContext = ctx.useScopedContext;
var useHovercardProviderContext = ctx.useProviderContext;
var HovercardContextProvider = ctx.ContextProvider;
var HovercardScopedContextProvider = ctx.ScopedContextProvider;




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/XM66DUTO.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cZ: () => (/* binding */ setRef),
/* harmony export */   v1: () => (/* binding */ getRefProperty),
/* harmony export */   v6: () => (/* binding */ mergeProps)
/* harmony export */ });
/* unused harmony export isValidElementWithRef */
/* harmony import */ var _4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/Y3OOHFCN.js");
"use client";


// src/utils/misc.ts


function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}
function isValidElementWithRef(element) {
  if (!element)
    return false;
  if (!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(element))
    return false;
  if (!("ref" in element))
    return false;
  return true;
}
function getRefProperty(element) {
  if (!isValidElementWithRef(element))
    return null;
  return element.ref;
}
function mergeProps(base, overrides) {
  const props = (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadValues */ .IA)({}, base);
  for (const key in overrides) {
    if (!(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__/* .hasOwnProperty */ .mQ)(overrides, key))
      continue;
    if (key === "className") {
      const prop = "className";
      props[prop] = base[prop] ? `${base[prop]} ${overrides[prop]}` : overrides[prop];
      continue;
    }
    if (key === "style") {
      const prop = "style";
      props[prop] = base[prop] ? (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadValues */ .IA)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadValues */ .IA)({}, base[prop]), overrides[prop]) : overrides[prop];
      continue;
    }
    const overrideValue = overrides[key];
    if (typeof overrideValue === "function" && key.startsWith("on")) {
      const baseValue = base[key];
      if (typeof baseValue === "function") {
        props[key] = (...args) => {
          overrideValue(...args);
          baseValue(...args);
        };
        continue;
      }
    }
    props[key] = overrideValue;
  }
  return props;
}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/ZSELSBRM.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ useDialogStoreProps),
/* harmony export */   j: () => (/* binding */ useDialogStore)
/* harmony export */ });
/* harmony import */ var _SFCBA2JZ_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/SFCBA2JZ.js");
/* harmony import */ var _EKQEJRUF_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/EKQEJRUF.js");
/* harmony import */ var _ariakit_core_dialog_dialog_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/SX2XFD6A.js");
"use client";



// src/dialog/dialog-store.ts

function useDialogStoreProps(store, update, props) {
  return (0,_SFCBA2JZ_js__WEBPACK_IMPORTED_MODULE_0__/* .useDisclosureStoreProps */ .W)(store, update, props);
}
function useDialogStore(props = {}) {
  const [store, update] = (0,_EKQEJRUF_js__WEBPACK_IMPORTED_MODULE_1__/* .useStore */ .Pj)(_ariakit_core_dialog_dialog_store__WEBPACK_IMPORTED_MODULE_2__/* .createDialogStore */ .Y, props);
  return useDialogStoreProps(store, update, props);
}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/ZU7LQC5V.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* binding */ useHovercardStoreProps)
});

// UNUSED EXPORTS: useHovercardStore

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/ZSELSBRM.js
var ZSELSBRM = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/ZSELSBRM.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/EKQEJRUF.js
var EKQEJRUF = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/EKQEJRUF.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js
var _6O5OEQGF = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/MG4P3223.js
"use client";




// src/popover/popover-store.ts

function usePopoverStoreProps(store, update, props) {
  (0,_6O5OEQGF/* useUpdateEffect */.w5)(update, [props.popover]);
  store = (0,ZSELSBRM/* useDialogStoreProps */.N)(store, update, props);
  (0,EKQEJRUF/* useStoreProps */.Tz)(store, props, "placement");
  return store;
}
function usePopoverStore(props = {}) {
  const [store, update] = useStore(Core.createPopoverStore, props);
  return usePopoverStoreProps(store, update, props);
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/ZU7LQC5V.js
"use client";



// src/hovercard/hovercard-store.ts

function useHovercardStoreProps(store, update, props) {
  store = usePopoverStoreProps(store, update, props);
  (0,EKQEJRUF/* useStoreProps */.Tz)(store, props, "timeout");
  (0,EKQEJRUF/* useStoreProps */.Tz)(store, props, "showTimeout");
  (0,EKQEJRUF/* useStoreProps */.Tz)(store, props, "hideTimeout");
  return store;
}
function useHovercardStore(props = {}) {
  const [store, update] = useStore(Core.createHovercardStore, props);
  return useHovercardStoreProps(store, update, props);
}




/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $n: () => (/* binding */ Button),
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export UnforwardedButton */
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+deprecated@4.0.1/node_modules/@wordpress/deprecated/build-module/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/tooltip/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/icon/index.js");
/* harmony import */ var _visually_hidden__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/visually-hidden/component.js");
/* harmony import */ var _popover_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/popover/utils.js");
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







const disabledEventsOnDisabledButton = ['onMouseDown', 'onClick'];
function useDeprecatedProps({
  isDefault,
  isPrimary,
  isSecondary,
  isTertiary,
  isLink,
  isPressed,
  isSmall,
  size,
  variant,
  ...otherProps
}) {
  let computedSize = size;
  let computedVariant = variant;
  const newProps = {
    // @todo Mark `isPressed` as deprecated
    'aria-pressed': isPressed
  };
  if (isSmall) {
    var _computedSize;
    (_computedSize = computedSize) !== null && _computedSize !== void 0 ? _computedSize : computedSize = 'small';
  }
  if (isPrimary) {
    var _computedVariant;
    (_computedVariant = computedVariant) !== null && _computedVariant !== void 0 ? _computedVariant : computedVariant = 'primary';
  }
  if (isTertiary) {
    var _computedVariant2;
    (_computedVariant2 = computedVariant) !== null && _computedVariant2 !== void 0 ? _computedVariant2 : computedVariant = 'tertiary';
  }
  if (isSecondary) {
    var _computedVariant3;
    (_computedVariant3 = computedVariant) !== null && _computedVariant3 !== void 0 ? _computedVariant3 : computedVariant = 'secondary';
  }
  if (isDefault) {
    var _computedVariant4;
    (0,_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('wp.components.Button `isDefault` prop', {
      since: '5.4',
      alternative: 'variant="secondary"'
    });
    (_computedVariant4 = computedVariant) !== null && _computedVariant4 !== void 0 ? _computedVariant4 : computedVariant = 'secondary';
  }
  if (isLink) {
    var _computedVariant5;
    (_computedVariant5 = computedVariant) !== null && _computedVariant5 !== void 0 ? _computedVariant5 : computedVariant = 'link';
  }
  return {
    ...newProps,
    ...otherProps,
    size: computedSize,
    variant: computedVariant
  };
}
function UnforwardedButton(props, ref) {
  const {
    __next40pxDefaultSize,
    isBusy,
    isDestructive,
    className,
    disabled,
    icon,
    iconPosition = 'left',
    iconSize,
    showTooltip,
    tooltipPosition,
    shortcut,
    label,
    children,
    size = 'default',
    text,
    variant,
    __experimentalIsFocusable: isFocusable,
    describedBy,
    ...buttonOrAnchorProps
  } = useDeprecatedProps(props);
  const {
    href,
    target,
    'aria-checked': ariaChecked,
    'aria-pressed': ariaPressed,
    'aria-selected': ariaSelected,
    ...additionalProps
  } = 'href' in buttonOrAnchorProps ? buttonOrAnchorProps : {
    href: undefined,
    target: undefined,
    ...buttonOrAnchorProps
  };
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(Button, 'components-button__description');
  const hasChildren = 'string' === typeof children && !!children || Array.isArray(children) && children?.[0] && children[0] !== null &&
  // Tooltip should not considered as a child
  children?.[0]?.props?.className !== 'components-tooltip';
  const truthyAriaPressedValues = [true, 'true', 'mixed'];
  const classes = (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)('components-button', className, {
    'is-next-40px-default-size': __next40pxDefaultSize,
    'is-secondary': variant === 'secondary',
    'is-primary': variant === 'primary',
    'is-small': size === 'small',
    'is-compact': size === 'compact',
    'is-tertiary': variant === 'tertiary',
    'is-pressed': truthyAriaPressedValues.includes(ariaPressed),
    'is-pressed-mixed': ariaPressed === 'mixed',
    'is-busy': isBusy,
    'is-link': variant === 'link',
    'is-destructive': isDestructive,
    'has-text': !!icon && (hasChildren || text),
    'has-icon': !!icon
  });
  const trulyDisabled = disabled && !isFocusable;
  const Tag = href !== undefined && !trulyDisabled ? 'a' : 'button';
  const buttonProps = Tag === 'button' ? {
    type: 'button',
    disabled: trulyDisabled,
    'aria-checked': ariaChecked,
    'aria-pressed': ariaPressed,
    'aria-selected': ariaSelected
  } : {};
  const anchorProps = Tag === 'a' ? {
    href,
    target
  } : {};
  const disableEventProps = {};
  if (disabled && isFocusable) {
    // In this case, the button will be disabled, but still focusable and
    // perceivable by screen reader users.
    buttonProps['aria-disabled'] = true;
    anchorProps['aria-disabled'] = true;
    for (const disabledEvent of disabledEventsOnDisabledButton) {
      disableEventProps[disabledEvent] = event => {
        if (event) {
          event.stopPropagation();
          event.preventDefault();
        }
      };
    }
  }

  // Should show the tooltip if...
  const shouldShowTooltip = !trulyDisabled && (
  // An explicit tooltip is passed or...
  showTooltip && !!label ||
  // There's a shortcut or...
  !!shortcut ||
  // There's a label and...
  !!label &&
  // The children are empty and...
  !children?.length &&
  // The tooltip is not explicitly disabled.
  false !== showTooltip);
  const descriptionId = describedBy ? instanceId : undefined;
  const describedById = additionalProps['aria-describedby'] || descriptionId;
  const commonProps = {
    className: classes,
    'aria-label': additionalProps['aria-label'] || label,
    'aria-describedby': describedById,
    ref
  };
  const elementChildren = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [icon && iconPosition === 'left' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      icon: icon,
      size: iconSize
    }), text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: text
    }), children, icon && iconPosition === 'right' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      icon: icon,
      size: iconSize
    })]
  });
  const element = Tag === 'a' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
    ...anchorProps,
    ...additionalProps,
    ...disableEventProps,
    ...commonProps,
    children: elementChildren
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
    ...buttonProps,
    ...additionalProps,
    ...disableEventProps,
    ...commonProps,
    children: elementChildren
  });

  // In order to avoid some React reconciliation issues, we are always rendering
  // the `Tooltip` component even when `shouldShowTooltip` is `false`.
  // In order to make sure that the tooltip doesn't show when it shouldn't,
  // we don't pass the props to the `Tooltip` component.
  const tooltipProps = shouldShowTooltip ? {
    text: children?.length && describedBy ? describedBy : label,
    shortcut,
    placement: tooltipPosition &&
    // Convert legacy `position` values to be used with the new `placement` prop
    (0,_popover_utils__WEBPACK_IMPORTED_MODULE_5__/* .positionToPlacement */ .YK)(tooltipPosition)
  } : {};
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tooltip__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay, {
      ...tooltipProps,
      children: element
    }), describedBy && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_visually_hidden__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        id: descriptionId,
        children: describedBy
      })
    })]
  });
}

/**
 * Lets users take actions and make choices with a single click or tap.
 *
 * ```jsx
 * import { Button } from '@wordpress/components';
 * const Mybutton = () => (
 *   <Button
 *     variant="primary"
 *     onClick={ handleClick }
 *   >
 *     Click here
 *   </Button>
 * );
 * ```
 */
const Button = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.forwardRef)(UnforwardedButton);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/icon/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/popover/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vn: () => (/* binding */ placementToMotionAnimationProps),
/* harmony export */   WS: () => (/* binding */ computePopoverPosition),
/* harmony export */   YK: () => (/* binding */ positionToPlacement),
/* harmony export */   _G: () => (/* binding */ getReferenceElement)
/* harmony export */ });
/**
 * External dependencies
 */
// eslint-disable-next-line no-restricted-imports

/**
 * Internal dependencies
 */

const POSITION_TO_PLACEMENT = {
  bottom: 'bottom',
  top: 'top',
  'middle left': 'left',
  'middle right': 'right',
  'bottom left': 'bottom-end',
  'bottom center': 'bottom',
  'bottom right': 'bottom-start',
  'top left': 'top-end',
  'top center': 'top',
  'top right': 'top-start',
  'middle left left': 'left',
  'middle left right': 'left',
  'middle left bottom': 'left-end',
  'middle left top': 'left-start',
  'middle right left': 'right',
  'middle right right': 'right',
  'middle right bottom': 'right-end',
  'middle right top': 'right-start',
  'bottom left left': 'bottom-end',
  'bottom left right': 'bottom-end',
  'bottom left bottom': 'bottom-end',
  'bottom left top': 'bottom-end',
  'bottom center left': 'bottom',
  'bottom center right': 'bottom',
  'bottom center bottom': 'bottom',
  'bottom center top': 'bottom',
  'bottom right left': 'bottom-start',
  'bottom right right': 'bottom-start',
  'bottom right bottom': 'bottom-start',
  'bottom right top': 'bottom-start',
  'top left left': 'top-end',
  'top left right': 'top-end',
  'top left bottom': 'top-end',
  'top left top': 'top-end',
  'top center left': 'top',
  'top center right': 'top',
  'top center bottom': 'top',
  'top center top': 'top',
  'top right left': 'top-start',
  'top right right': 'top-start',
  'top right bottom': 'top-start',
  'top right top': 'top-start',
  // `middle`/`middle center [corner?]` positions are associated to a fallback
  // `bottom` placement because there aren't any corresponding placement values.
  middle: 'bottom',
  'middle center': 'bottom',
  'middle center bottom': 'bottom',
  'middle center left': 'bottom',
  'middle center right': 'bottom',
  'middle center top': 'bottom'
};

/**
 * Converts the `Popover`'s legacy "position" prop to the new "placement" prop
 * (used by `floating-ui`).
 *
 * @param position The legacy position
 * @return The corresponding placement
 */
const positionToPlacement = position => {
  var _POSITION_TO_PLACEMEN;
  return (_POSITION_TO_PLACEMEN = POSITION_TO_PLACEMENT[position]) !== null && _POSITION_TO_PLACEMEN !== void 0 ? _POSITION_TO_PLACEMEN : 'bottom';
};

/**
 * @typedef AnimationOrigin
 * @type {Object}
 * @property {number} originX A number between 0 and 1 (in CSS logical properties jargon, 0 is "start", 0.5 is "center", and 1 is "end")
 * @property {number} originY A number between 0 and 1 (0 is top, 0.5 is center, and 1 is bottom)
 */

const PLACEMENT_TO_ANIMATION_ORIGIN = {
  top: {
    originX: 0.5,
    originY: 1
  },
  // open from bottom, center
  'top-start': {
    originX: 0,
    originY: 1
  },
  // open from bottom, left
  'top-end': {
    originX: 1,
    originY: 1
  },
  // open from bottom, right
  right: {
    originX: 0,
    originY: 0.5
  },
  // open from middle, left
  'right-start': {
    originX: 0,
    originY: 0
  },
  // open from top, left
  'right-end': {
    originX: 0,
    originY: 1
  },
  // open from bottom, left
  bottom: {
    originX: 0.5,
    originY: 0
  },
  // open from top, center
  'bottom-start': {
    originX: 0,
    originY: 0
  },
  // open from top, left
  'bottom-end': {
    originX: 1,
    originY: 0
  },
  // open from top, right
  left: {
    originX: 1,
    originY: 0.5
  },
  // open from middle, right
  'left-start': {
    originX: 1,
    originY: 0
  },
  // open from top, right
  'left-end': {
    originX: 1,
    originY: 1
  },
  // open from bottom, right
  overlay: {
    originX: 0.5,
    originY: 0.5
  } // open from center, center
};

/**
 * Given the floating-ui `placement`, compute the framer-motion props for the
 * popover's entry animation.
 *
 * @param placement A placement string from floating ui
 * @return The object containing the motion props
 */
const placementToMotionAnimationProps = placement => {
  const translateProp = placement.startsWith('top') || placement.startsWith('bottom') ? 'translateY' : 'translateX';
  const translateDirection = placement.startsWith('top') || placement.startsWith('left') ? 1 : -1;
  return {
    style: PLACEMENT_TO_ANIMATION_ORIGIN[placement],
    initial: {
      opacity: 0,
      scale: 0,
      [translateProp]: `${2 * translateDirection}em`
    },
    animate: {
      opacity: 1,
      scale: 1,
      [translateProp]: 0
    },
    transition: {
      duration: 0.1,
      ease: [0, 0, 0.2, 1]
    }
  };
};
function isTopBottom(anchorRef) {
  return !!anchorRef?.top;
}
function isRef(anchorRef) {
  return !!anchorRef?.current;
}
const getReferenceElement = ({
  anchor,
  anchorRef,
  anchorRect,
  getAnchorRect,
  fallbackReferenceElement
}) => {
  var _referenceElement;
  let referenceElement = null;
  if (anchor) {
    referenceElement = anchor;
  } else if (isTopBottom(anchorRef)) {
    // Create a virtual element for the ref. The expectation is that
    // if anchorRef.top is defined, then anchorRef.bottom is defined too.
    // Seems to be used by the block toolbar, when multiple blocks are selected
    // (top and bottom blocks are used to calculate the resulting rect).
    referenceElement = {
      getBoundingClientRect() {
        const topRect = anchorRef.top.getBoundingClientRect();
        const bottomRect = anchorRef.bottom.getBoundingClientRect();
        return new window.DOMRect(topRect.x, topRect.y, topRect.width, bottomRect.bottom - topRect.top);
      }
    };
  } else if (isRef(anchorRef)) {
    // Standard React ref.
    referenceElement = anchorRef.current;
  } else if (anchorRef) {
    // If `anchorRef` holds directly the element's value (no `current` key)
    // This is a weird scenario and should be deprecated.
    referenceElement = anchorRef;
  } else if (anchorRect) {
    // Create a virtual element for the ref.
    referenceElement = {
      getBoundingClientRect() {
        return anchorRect;
      }
    };
  } else if (getAnchorRect) {
    // Create a virtual element for the ref.
    referenceElement = {
      getBoundingClientRect() {
        var _rect$x, _rect$y, _rect$width, _rect$height;
        const rect = getAnchorRect(fallbackReferenceElement);
        return new window.DOMRect((_rect$x = rect.x) !== null && _rect$x !== void 0 ? _rect$x : rect.left, (_rect$y = rect.y) !== null && _rect$y !== void 0 ? _rect$y : rect.top, (_rect$width = rect.width) !== null && _rect$width !== void 0 ? _rect$width : rect.right - rect.left, (_rect$height = rect.height) !== null && _rect$height !== void 0 ? _rect$height : rect.bottom - rect.top);
      }
    };
  } else if (fallbackReferenceElement) {
    // If no explicit ref is passed via props, fall back to
    // anchoring to the popover's parent node.
    referenceElement = fallbackReferenceElement.parentElement;
  }

  // Convert any `undefined` value to `null`.
  return (_referenceElement = referenceElement) !== null && _referenceElement !== void 0 ? _referenceElement : null;
};

/**
 * Computes the final coordinate that needs to be applied to the floating
 * element when applying transform inline styles, defaulting to `undefined`
 * if the provided value is `null` or `NaN`.
 *
 * @param c input coordinate (usually as returned from floating-ui)
 * @return The coordinate's value to be used for inline styles. An `undefined`
 *         return value means "no style set" for this coordinate.
 */
const computePopoverPosition = c => c === null || Number.isNaN(c) ? undefined : Math.round(c);
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/shortcut/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");

/**
 * Internal dependencies
 */

/**
 * Shortcut component is used to display keyboard shortcuts, and it can be customized with a custom display and aria label if needed.
 *
 * ```jsx
 * import { Shortcut } from '@wordpress/components';
 *
 * const MyShortcut = () => {
 * 	return (
 * 		<Shortcut shortcut={{ display: 'Ctrl + S', ariaLabel: 'Save' }} />
 * 	);
 * };
 * ```
 */
function Shortcut(props) {
  const {
    shortcut,
    className
  } = props;
  if (!shortcut) {
    return null;
  }
  let displayText;
  let ariaLabel;
  if (typeof shortcut === 'string') {
    displayText = shortcut;
  }
  if (shortcut !== null && typeof shortcut === 'object') {
    displayText = shortcut.display;
    ariaLabel = shortcut.ariaLabel;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
    className: className,
    "aria-label": ariaLabel,
    children: displayText
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shortcut);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/tooltip/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (/* binding */ tooltip)
});

// UNUSED EXPORTS: TOOLTIP_DELAY, Tooltip

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/ZU7LQC5V.js + 1 modules
var ZU7LQC5V = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/ZU7LQC5V.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/EKQEJRUF.js
var EKQEJRUF = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/EKQEJRUF.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/SOLWE6E5.js + 1 modules
var SOLWE6E5 = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/SOLWE6E5.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/EAHJFCU4.js
var EAHJFCU4 = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/EAHJFCU4.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/Y3OOHFCN.js
var Y3OOHFCN = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/Y3OOHFCN.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/4R3V3JGP.js
var _4R3V3JGP = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/4R3V3JGP.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/tooltip/tooltip-store.js
"use client";








// src/tooltip/tooltip-store.ts
function createTooltipStore(props = {}) {
  var _a;
  const syncState = (_a = props.store) == null ? void 0 : _a.getState();
  const hovercard = (0,SOLWE6E5/* createHovercardStore */.y)((0,_4R3V3JGP/* __spreadProps */.ko)((0,_4R3V3JGP/* __spreadValues */.IA)({}, props), {
    placement: (0,Y3OOHFCN/* defaultValue */.Jh)(
      props.placement,
      syncState == null ? void 0 : syncState.placement,
      "top"
    ),
    hideTimeout: (0,Y3OOHFCN/* defaultValue */.Jh)(props.hideTimeout, syncState == null ? void 0 : syncState.hideTimeout, 0)
  }));
  const initialState = (0,_4R3V3JGP/* __spreadProps */.ko)((0,_4R3V3JGP/* __spreadValues */.IA)({}, hovercard.getState()), {
    type: (0,Y3OOHFCN/* defaultValue */.Jh)(props.type, syncState == null ? void 0 : syncState.type, "description"),
    skipTimeout: (0,Y3OOHFCN/* defaultValue */.Jh)(props.skipTimeout, syncState == null ? void 0 : syncState.skipTimeout, 300)
  });
  const tooltip = (0,EAHJFCU4/* createStore */.y$)(initialState, hovercard, props.store);
  return (0,_4R3V3JGP/* __spreadValues */.IA)((0,_4R3V3JGP/* __spreadValues */.IA)({}, hovercard), tooltip);
}


;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/2QMN5E6B.js
"use client";



// src/tooltip/tooltip-store.ts

function useTooltipStoreProps(store, update, props) {
  store = (0,ZU7LQC5V/* useHovercardStoreProps */.B)(store, update, props);
  (0,EKQEJRUF/* useStoreProps */.Tz)(store, props, "type");
  (0,EKQEJRUF/* useStoreProps */.Tz)(store, props, "skipTimeout");
  return store;
}
function useTooltipStore(props = {}) {
  const [store, update] = (0,EKQEJRUF/* useStore */.Pj)(createTooltipStore, props);
  return useTooltipStoreProps(store, update, props);
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/FSFPRQFR.js
var FSFPRQFR = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/FSFPRQFR.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/7X4DYKYU.js
var _7X4DYKYU = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/7X4DYKYU.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/TI7CMBHW.js
var TI7CMBHW = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/TI7CMBHW.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js
var _3ORBWXWF = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/MNFF5YOJ.js
"use client";



// src/tooltip/tooltip-context.tsx
var ctx = (0,_3ORBWXWF/* createStoreContext */.B0)(
  [TI7CMBHW/* HovercardContextProvider */.pR],
  [TI7CMBHW/* HovercardScopedContextProvider */.n0]
);
var useTooltipContext = ctx.useContext;
var useTooltipScopedContext = ctx.useScopedContext;
var useTooltipProviderContext = ctx.useProviderContext;
var TooltipContextProvider = ctx.ContextProvider;
var TooltipScopedContextProvider = ctx.ScopedContextProvider;



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js
var _6O5OEQGF = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js
var _chunks_4R3V3JGP = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/tooltip/tooltip-anchor.js
"use client";













// src/tooltip/tooltip-anchor.ts



var globalStore = (0,EAHJFCU4/* createStore */.y$)({
  activeStore: null
});
var useTooltipAnchor = (0,_3ORBWXWF/* createHook */.ab)(
  (_a) => {
    var _b = _a, { store, showOnHover = true } = _b, props = (0,_chunks_4R3V3JGP/* __objRest */.YG)(_b, ["store", "showOnHover"]);
    const context = useTooltipProviderContext();
    store = store || context;
    (0,Y3OOHFCN/* invariant */.V1)(
      store,
       false && 0
    );
    const canShowOnHoverRef = (0,react.useRef)(false);
    (0,react.useEffect)(() => {
      return (0,EAHJFCU4/* sync */.OH)(store, ["mounted"], (state) => {
        if (state.mounted)
          return;
        canShowOnHoverRef.current = false;
      });
    }, [store]);
    (0,react.useEffect)(() => {
      return (0,EAHJFCU4/* sync */.OH)(store, ["mounted", "skipTimeout"], (state) => {
        if (!store)
          return;
        if (state.mounted) {
          const { activeStore } = globalStore.getState();
          if (activeStore !== store) {
            activeStore == null ? void 0 : activeStore.hide();
          }
          return globalStore.setState("activeStore", store);
        }
        const id = setTimeout(() => {
          const { activeStore } = globalStore.getState();
          if (activeStore !== store)
            return;
          globalStore.setState("activeStore", null);
        }, state.skipTimeout);
        return () => clearTimeout(id);
      });
    }, [store]);
    const onMouseEnterProp = props.onMouseEnter;
    const onMouseEnter = (0,_6O5OEQGF/* useEvent */._q)((event) => {
      onMouseEnterProp == null ? void 0 : onMouseEnterProp(event);
      canShowOnHoverRef.current = true;
    });
    const onFocusVisibleProp = props.onFocusVisible;
    const onFocusVisible = (0,_6O5OEQGF/* useEvent */._q)((event) => {
      onFocusVisibleProp == null ? void 0 : onFocusVisibleProp(event);
      if (event.defaultPrevented)
        return;
      store == null ? void 0 : store.setAnchorElement(event.currentTarget);
      store == null ? void 0 : store.show();
    });
    const onBlurProp = props.onBlur;
    const onBlur = (0,_6O5OEQGF/* useEvent */._q)((event) => {
      onBlurProp == null ? void 0 : onBlurProp(event);
      if (event.defaultPrevented)
        return;
      const { activeStore } = globalStore.getState();
      if (activeStore === store) {
        globalStore.setState("activeStore", null);
      }
    });
    const type = store.useState("type");
    const contentId = store.useState((state) => {
      var _a2;
      return (_a2 = state.contentElement) == null ? void 0 : _a2.id;
    });
    props = (0,_chunks_4R3V3JGP/* __spreadProps */.ko)((0,_chunks_4R3V3JGP/* __spreadValues */.IA)({
      "aria-labelledby": type === "label" ? contentId : void 0,
      "aria-describedby": type === "description" ? contentId : void 0
    }, props), {
      onMouseEnter,
      onFocusVisible,
      onBlur
    });
    props = (0,_7X4DYKYU/* useHovercardAnchor */.p)((0,_chunks_4R3V3JGP/* __spreadValues */.IA)({
      store,
      showOnHover: (event) => {
        if (!canShowOnHoverRef.current)
          return false;
        if ((0,Y3OOHFCN/* isFalsyBooleanCallback */.zO)(showOnHover, event))
          return false;
        const { activeStore } = globalStore.getState();
        if (!activeStore)
          return true;
        store == null ? void 0 : store.show();
        return false;
      }
    }, props));
    return props;
  }
);
var TooltipAnchor = (0,_3ORBWXWF/* createComponent */.a0)((props) => {
  const htmlProps = useTooltipAnchor(props);
  return (0,_3ORBWXWF/* createElement */.n)("div", htmlProps);
});
if (false) {}


// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/QWSZGSIG.js + 2 modules
var QWSZGSIG = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/QWSZGSIG.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/NERBASET.js + 21 modules
var NERBASET = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/NERBASET.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/DLOEKDPY.js
var DLOEKDPY = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/DLOEKDPY.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/tooltip/tooltip.js
"use client";










































// src/tooltip/tooltip.tsx



var useTooltip = (0,_3ORBWXWF/* createHook */.ab)(
  (_a) => {
    var _b = _a, {
      store,
      portal = true,
      gutter = 8,
      preserveTabOrder = false,
      hideOnHoverOutside = true,
      hideOnInteractOutside = true
    } = _b, props = (0,_chunks_4R3V3JGP/* __objRest */.YG)(_b, [
      "store",
      "portal",
      "gutter",
      "preserveTabOrder",
      "hideOnHoverOutside",
      "hideOnInteractOutside"
    ]);
    const context = useTooltipProviderContext();
    store = store || context;
    (0,Y3OOHFCN/* invariant */.V1)(
      store,
       false && 0
    );
    props = (0,_6O5OEQGF/* useWrapElement */.w7)(
      props,
      (element) => /* @__PURE__ */ (0,jsx_runtime.jsx)(TooltipScopedContextProvider, { value: store, children: element }),
      [store]
    );
    const role = store.useState(
      (state) => state.type === "description" ? "tooltip" : "none"
    );
    props = (0,_chunks_4R3V3JGP/* __spreadValues */.IA)({ role }, props);
    props = (0,QWSZGSIG/* useHovercard */.a)((0,_chunks_4R3V3JGP/* __spreadProps */.ko)((0,_chunks_4R3V3JGP/* __spreadValues */.IA)({}, props), {
      store,
      portal,
      gutter,
      preserveTabOrder,
      hideOnHoverOutside: (event) => {
        if ((0,Y3OOHFCN/* isFalsyBooleanCallback */.zO)(hideOnHoverOutside, event))
          return false;
        const anchorElement = store == null ? void 0 : store.getState().anchorElement;
        if (!anchorElement)
          return true;
        if ("focusVisible" in anchorElement.dataset)
          return false;
        return true;
      },
      hideOnInteractOutside: (event) => {
        if ((0,Y3OOHFCN/* isFalsyBooleanCallback */.zO)(hideOnInteractOutside, event))
          return false;
        const anchorElement = store == null ? void 0 : store.getState().anchorElement;
        if (!anchorElement)
          return true;
        if ((0,DLOEKDPY/* contains */.gR)(anchorElement, event.target))
          return false;
        return true;
      }
    }));
    return props;
  }
);
var Tooltip = (0,NERBASET/* createDialogComponent */.AV)(
  (0,_3ORBWXWF/* createComponent */.a0)((props) => {
    const htmlProps = useTooltip(props);
    return (0,_3ORBWXWF/* createElement */.n)("div", htmlProps);
  }),
  useTooltipProviderContext
);
if (false) {}


// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js
var use_instance_id = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+deprecated@4.0.1/node_modules/@wordpress/deprecated/build-module/index.js
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+deprecated@4.0.1/node_modules/@wordpress/deprecated/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/shortcut/index.js
var build_module_shortcut = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/shortcut/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/popover/utils.js
var utils = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/popover/utils.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/tooltip/index.js
/**
 * External dependencies
 */
// eslint-disable-next-line no-restricted-imports


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */





const TooltipInternalContext = (0,react.createContext)({
  isNestedInTooltip: false
});

/**
 * Time over anchor to wait before showing tooltip
 */
const TOOLTIP_DELAY = 700;
const CONTEXT_VALUE = {
  isNestedInTooltip: true
};
function UnforwardedTooltip(props, ref) {
  const {
    children,
    delay = TOOLTIP_DELAY,
    hideOnClick = true,
    placement,
    position,
    shortcut,
    text,
    ...restProps
  } = props;
  const {
    isNestedInTooltip
  } = (0,react.useContext)(TooltipInternalContext);
  const baseId = (0,use_instance_id/* default */.A)(tooltip_Tooltip, 'tooltip');
  const describedById = text || shortcut ? baseId : undefined;
  const isOnlyChild = react.Children.count(children) === 1;
  // console error if more than one child element is added
  if (!isOnlyChild) {
    if (false) {}
  }

  // Compute tooltip's placement:
  // - give priority to `placement` prop, if defined
  // - otherwise, compute it from the legacy `position` prop (if defined)
  // - finally, fallback to the default placement: 'bottom'
  let computedPlacement;
  if (placement !== undefined) {
    computedPlacement = placement;
  } else if (position !== undefined) {
    computedPlacement = (0,utils/* positionToPlacement */.YK)(position);
    (0,build_module/* default */.A)('`position` prop in wp.components.tooltip', {
      since: '6.4',
      alternative: '`placement` prop'
    });
  }
  computedPlacement = computedPlacement || 'bottom';
  const tooltipStore = useTooltipStore({
    placement: computedPlacement,
    showTimeout: delay
  });
  if (isNestedInTooltip) {
    return isOnlyChild ? /*#__PURE__*/(0,jsx_runtime.jsx)(FSFPRQFR/* Role */.X, {
      ...restProps,
      render: children
    }) : children;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(TooltipInternalContext.Provider, {
    value: CONTEXT_VALUE,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TooltipAnchor, {
      onClick: hideOnClick ? tooltipStore.hide : undefined,
      store: tooltipStore,
      render: isOnlyChild ? children : undefined,
      ref: ref,
      children: isOnlyChild ? undefined : children
    }), isOnlyChild && (text || shortcut) && /*#__PURE__*/(0,jsx_runtime.jsxs)(Tooltip, {
      ...restProps,
      className: "components-tooltip",
      unmountOnHide: true,
      gutter: 4,
      id: describedById,
      overflowPadding: 0.5,
      store: tooltipStore,
      children: [text, shortcut && /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_shortcut/* default */.A, {
        className: text ? 'components-tooltip__shortcut' : '',
        shortcut: shortcut
      })]
    })]
  });
}
const tooltip_Tooltip = (0,react.forwardRef)(UnforwardedTooltip);
/* harmony default export */ const tooltip = (tooltip_Tooltip);
//# sourceMappingURL=index.js.map

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

/***/ })

}]);