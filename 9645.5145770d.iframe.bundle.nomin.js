"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[9645,2994],{

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4B73HROV.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cr: () => (/* binding */ TabScopedContextProvider),
/* harmony export */   M_: () => (/* binding */ useTabScopedContext),
/* harmony export */   np: () => (/* binding */ useTabProviderContext)
/* harmony export */ });
/* unused harmony exports useTabContext, TabContextProvider */
/* harmony import */ var _IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/IB7YUKH5.js");
/* harmony import */ var _3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js");
"use client";



// src/tab/tab-context.tsx
var ctx = (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_0__/* .createStoreContext */ .B0)(
  [_IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_1__/* .CompositeContextProvider */ .ws],
  [_IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_1__/* .CompositeScopedContextProvider */ .aN]
);
var useTabContext = ctx.useContext;
var useTabScopedContext = ctx.useScopedContext;
var useTabProviderContext = ctx.useProviderContext;
var TabContextProvider = ctx.ContextProvider;
var TabScopedContextProvider = ctx.ScopedContextProvider;




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/CQMDBRG5.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W: () => (/* binding */ useTabStore)
});

// UNUSED EXPORTS: useTabStoreProps

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/7GBW5FLS.js + 1 modules
var _7GBW5FLS = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/7GBW5FLS.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/EKQEJRUF.js
var EKQEJRUF = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/EKQEJRUF.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js
var _6O5OEQGF = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js
var _4R3V3JGP = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/IERTEJ3A.js
var IERTEJ3A = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/IERTEJ3A.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/22K762VQ.js
var _22K762VQ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/22K762VQ.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/EAHJFCU4.js
var EAHJFCU4 = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/EAHJFCU4.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/Y3OOHFCN.js
var Y3OOHFCN = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/Y3OOHFCN.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/4R3V3JGP.js
var _chunks_4R3V3JGP = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/4R3V3JGP.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/tab/tab-store.js
"use client";








// src/tab/tab-store.ts
function createTabStore(props = {}) {
  var _a;
  const syncState = (_a = props.store) == null ? void 0 : _a.getState();
  const composite = (0,IERTEJ3A/* createCompositeStore */.z)((0,_chunks_4R3V3JGP/* __spreadProps */.ko)((0,_chunks_4R3V3JGP/* __spreadValues */.IA)({}, props), {
    orientation: (0,Y3OOHFCN/* defaultValue */.Jh)(
      props.orientation,
      syncState == null ? void 0 : syncState.orientation,
      "horizontal"
    ),
    focusLoop: (0,Y3OOHFCN/* defaultValue */.Jh)(props.focusLoop, syncState == null ? void 0 : syncState.focusLoop, true)
  }));
  const panels = (0,_22K762VQ/* createCollectionStore */.I)();
  const initialState = (0,_chunks_4R3V3JGP/* __spreadProps */.ko)((0,_chunks_4R3V3JGP/* __spreadValues */.IA)({}, composite.getState()), {
    selectedId: (0,Y3OOHFCN/* defaultValue */.Jh)(
      props.selectedId,
      syncState == null ? void 0 : syncState.selectedId,
      props.defaultSelectedId,
      void 0
    ),
    selectOnMove: (0,Y3OOHFCN/* defaultValue */.Jh)(
      props.selectOnMove,
      syncState == null ? void 0 : syncState.selectOnMove,
      true
    )
  });
  const tab = (0,EAHJFCU4/* createStore */.y$)(initialState, composite, props.store);
  (0,EAHJFCU4/* setup */.mj)(
    tab,
    () => (0,EAHJFCU4/* sync */.OH)(tab, ["moves"], () => {
      const { activeId, selectOnMove } = tab.getState();
      if (!selectOnMove)
        return;
      if (!activeId)
        return;
      const tabItem = composite.item(activeId);
      if (!tabItem)
        return;
      if (tabItem.dimmed)
        return;
      if (tabItem.disabled)
        return;
      tab.setState("selectedId", tabItem.id);
    })
  );
  (0,EAHJFCU4/* setup */.mj)(
    tab,
    () => (0,EAHJFCU4/* batch */.vA)(
      tab,
      ["selectedId"],
      (state) => tab.setState("activeId", state.selectedId)
    )
  );
  (0,EAHJFCU4/* setup */.mj)(
    tab,
    () => (0,EAHJFCU4/* sync */.OH)(tab, ["selectedId", "renderedItems"], (state) => {
      if (state.selectedId !== void 0)
        return;
      const { activeId, renderedItems } = tab.getState();
      const tabItem = composite.item(activeId);
      if (tabItem && !tabItem.disabled && !tabItem.dimmed) {
        tab.setState("selectedId", tabItem.id);
      } else {
        const tabItem2 = renderedItems.find(
          (item) => !item.disabled && !item.dimmed
        );
        tab.setState("selectedId", tabItem2 == null ? void 0 : tabItem2.id);
      }
    })
  );
  (0,EAHJFCU4/* setup */.mj)(
    tab,
    () => (0,EAHJFCU4/* sync */.OH)(tab, ["renderedItems"], (state) => {
      const tabs = state.renderedItems;
      if (!tabs.length)
        return;
      return (0,EAHJFCU4/* sync */.OH)(panels, ["renderedItems"], (state2) => {
        const items = state2.renderedItems;
        const hasOrphanPanels = items.some((panel) => !panel.tabId);
        if (!hasOrphanPanels)
          return;
        items.forEach((panel, i) => {
          if (panel.tabId)
            return;
          const tabItem = tabs[i];
          if (!tabItem)
            return;
          panels.renderItem((0,_chunks_4R3V3JGP/* __spreadProps */.ko)((0,_chunks_4R3V3JGP/* __spreadValues */.IA)({}, panel), { tabId: tabItem.id }));
        });
      });
    })
  );
  return (0,_chunks_4R3V3JGP/* __spreadProps */.ko)((0,_chunks_4R3V3JGP/* __spreadValues */.IA)((0,_chunks_4R3V3JGP/* __spreadValues */.IA)({}, composite), tab), {
    panels,
    setSelectedId: (id) => tab.setState("selectedId", id),
    select: (id) => {
      tab.setState("selectedId", id);
      composite.move(id);
    }
  });
}


;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/CQMDBRG5.js
"use client";





// src/tab/tab-store.ts


function useTabStoreProps(store, update, props) {
  store = (0,_7GBW5FLS/* useCompositeStoreProps */.Y)(store, update, props);
  (0,EKQEJRUF/* useStoreProps */.Tz)(store, props, "selectedId", "setSelectedId");
  (0,EKQEJRUF/* useStoreProps */.Tz)(store, props, "selectOnMove");
  const [panels, updatePanels] = (0,EKQEJRUF/* useStore */.Pj)(() => store.panels, {});
  (0,_6O5OEQGF/* useUpdateEffect */.w5)(updatePanels, [store, updatePanels]);
  return (0,react.useMemo)(() => (0,_4R3V3JGP/* __spreadProps */.ko)((0,_4R3V3JGP/* __spreadValues */.IA)({}, store), { panels }), [store, panels]);
}
function useTabStore(props = {}) {
  const [store, update] = (0,EKQEJRUF/* useStore */.Pj)(createTabStore, props);
  return useTabStoreProps(store, update, props);
}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/tab/tab-list.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ TabList)
/* harmony export */ });
/* unused harmony export useTabList */
/* harmony import */ var _chunks_4B73HROV_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4B73HROV.js");
/* harmony import */ var _chunks_7QTPYGNZ_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/7QTPYGNZ.js");
/* harmony import */ var _chunks_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js");
/* harmony import */ var _chunks_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js");
/* harmony import */ var _chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/Y3OOHFCN.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
"use client";












// src/tab/tab-list.tsx


var useTabList = (0,_chunks_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__/* .createHook */ .ab)((_a) => {
  var _b = _a, { store } = _b, props = (0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__/* .__objRest */ .YG)(_b, ["store"]);
  const context = (0,_chunks_4B73HROV_js__WEBPACK_IMPORTED_MODULE_3__/* .useTabProviderContext */ .np)();
  store = store || context;
  (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__/* .invariant */ .V1)(
    store,
     false && 0
  );
  const orientation = store.useState(
    (state) => state.orientation === "both" ? void 0 : state.orientation
  );
  props = (0,_chunks_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_5__/* .useWrapElement */ .w7)(
    props,
    (element) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chunks_4B73HROV_js__WEBPACK_IMPORTED_MODULE_3__/* .TabScopedContextProvider */ .Cr, { value: store, children: element }),
    [store]
  );
  props = (0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadValues */ .IA)({
    role: "tablist",
    "aria-orientation": orientation
  }, props);
  props = (0,_chunks_7QTPYGNZ_js__WEBPACK_IMPORTED_MODULE_6__/* .useComposite */ .T)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadValues */ .IA)({ store }, props));
  return props;
});
var TabList = (0,_chunks_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__/* .createComponent */ .a0)((props) => {
  const htmlProps = useTabList(props);
  return (0,_chunks_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__/* .createElement */ .n)("div", htmlProps);
});
if (false) {}



/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/tab/tab-panel.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ TabPanel)
/* harmony export */ });
/* unused harmony export useTabPanel */
/* harmony import */ var _chunks_UH3I23HL_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/UH3I23HL.js");
/* harmony import */ var _chunks_4B73HROV_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4B73HROV.js");
/* harmony import */ var _chunks_CLE7NTOY_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/CLE7NTOY.js");
/* harmony import */ var _chunks_KK7H3W2B_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/KK7H3W2B.js");
/* harmony import */ var _chunks_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js");
/* harmony import */ var _chunks_SFCBA2JZ_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/SFCBA2JZ.js");
/* harmony import */ var _chunks_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js");
/* harmony import */ var _chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/utils/focus.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/Y3OOHFCN.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
"use client";
















// src/tab/tab-panel.tsx




var useTabPanel = (0,_chunks_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_2__/* .createHook */ .ab)(
  (_a) => {
    var _b = _a, { store, tabId: tabIdProp, getItem: getItemProp } = _b, props = (0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__/* .__objRest */ .YG)(_b, ["store", "tabId", "getItem"]);
    const context = (0,_chunks_4B73HROV_js__WEBPACK_IMPORTED_MODULE_4__/* .useTabProviderContext */ .np)();
    store = store || context;
    (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__/* .invariant */ .V1)(
      store,
       false && 0
    );
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const id = (0,_chunks_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__/* .useId */ .Bi)(props.id);
    const [hasTabbableChildren, setHasTabbableChildren] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      const element = ref.current;
      if (!element)
        return;
      const tabbable = (0,_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_7__/* .getAllTabbableIn */ .a9)(element);
      setHasTabbableChildren(!!tabbable.length);
    }, []);
    const getItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
      (item) => {
        const nextItem = (0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__/* .__spreadProps */ .ko)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__/* .__spreadValues */ .IA)({}, item), { id: id || item.id, tabId: tabIdProp });
        if (getItemProp) {
          return getItemProp(nextItem);
        }
        return nextItem;
      },
      [id, tabIdProp, getItemProp]
    );
    props = (0,_chunks_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__/* .useWrapElement */ .w7)(
      props,
      (element) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chunks_4B73HROV_js__WEBPACK_IMPORTED_MODULE_4__/* .TabScopedContextProvider */ .Cr, { value: store, children: element }),
      [store]
    );
    const tabId = store.panels.useState(
      () => {
        var _a2;
        return tabIdProp || ((_a2 = store == null ? void 0 : store.panels.item(id)) == null ? void 0 : _a2.tabId);
      }
    );
    const open = store.useState(
      (state) => !!tabId && state.selectedId === tabId
    );
    props = (0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__/* .__spreadProps */ .ko)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__/* .__spreadValues */ .IA)({
      id,
      role: "tabpanel",
      "aria-labelledby": tabId || void 0
    }, props), {
      ref: (0,_chunks_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__/* .useMergeRefs */ .SV)(ref, props.ref)
    });
    const disclosure = (0,_chunks_SFCBA2JZ_js__WEBPACK_IMPORTED_MODULE_8__/* .useDisclosureStore */ .E)({ open });
    props = (0,_chunks_KK7H3W2B_js__WEBPACK_IMPORTED_MODULE_9__/* .useFocusable */ .W)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__/* .__spreadValues */ .IA)({ focusable: !hasTabbableChildren }, props));
    props = (0,_chunks_CLE7NTOY_js__WEBPACK_IMPORTED_MODULE_10__/* .useDisclosureContent */ .aT)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__/* .__spreadValues */ .IA)({ store: disclosure }, props));
    props = (0,_chunks_UH3I23HL_js__WEBPACK_IMPORTED_MODULE_11__/* .useCollectionItem */ .v)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__/* .__spreadProps */ .ko)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__/* .__spreadValues */ .IA)({ store: store.panels }, props), { getItem }));
    return props;
  }
);
var TabPanel = (0,_chunks_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_2__/* .createComponent */ .a0)((props) => {
  const htmlProps = useTabPanel(props);
  return (0,_chunks_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_2__/* .createElement */ .n)("div", htmlProps);
});
if (false) {}



/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/tab/tab.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ Tab)
/* harmony export */ });
/* unused harmony export useTab */
/* harmony import */ var _chunks_QZLXIDNP_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/QZLXIDNP.js");
/* harmony import */ var _chunks_4B73HROV_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4B73HROV.js");
/* harmony import */ var _chunks_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js");
/* harmony import */ var _chunks_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js");
/* harmony import */ var _chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/Y3OOHFCN.js");
"use client";















// src/tab/tab.ts


var useTab = (0,_chunks_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__/* .createHook */ .ab)(
  (_a) => {
    var _b = _a, {
      store,
      accessibleWhenDisabled = true,
      getItem: getItemProp
    } = _b, props = (0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__/* .__objRest */ .YG)(_b, [
      "store",
      "accessibleWhenDisabled",
      "getItem"
    ]);
    const context = (0,_chunks_4B73HROV_js__WEBPACK_IMPORTED_MODULE_3__/* .useTabScopedContext */ .M_)();
    store = store || context;
    (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__/* .invariant */ .V1)(
      store,
       false && 0
    );
    const defaultId = (0,_chunks_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_5__/* .useId */ .Bi)();
    const id = props.id || defaultId;
    const dimmed = (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__/* .disabledFromProps */ .$f)(props);
    const getItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
      (item) => {
        const nextItem = (0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadProps */ .ko)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadValues */ .IA)({}, item), { dimmed });
        if (getItemProp) {
          return getItemProp(nextItem);
        }
        return nextItem;
      },
      [dimmed, getItemProp]
    );
    const onClickProp = props.onClick;
    const onClick = (0,_chunks_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_5__/* .useEvent */ ._q)((event) => {
      onClickProp == null ? void 0 : onClickProp(event);
      if (event.defaultPrevented)
        return;
      store == null ? void 0 : store.setSelectedId(id);
    });
    const panelId = store.panels.useState(
      (state) => {
        var _a2;
        return (_a2 = state.items.find((item) => item.tabId === id)) == null ? void 0 : _a2.id;
      }
    );
    const selected = store.useState((state) => !!id && state.selectedId === id);
    props = (0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadProps */ .ko)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadValues */ .IA)({
      id,
      role: "tab",
      "aria-selected": selected,
      "aria-controls": panelId || void 0
    }, props), {
      onClick
    });
    props = (0,_chunks_QZLXIDNP_js__WEBPACK_IMPORTED_MODULE_6__/* .useCompositeItem */ .k)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadProps */ .ko)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadValues */ .IA)({
      store
    }, props), {
      accessibleWhenDisabled,
      getItem,
      shouldRegisterItem: !!defaultId ? props.shouldRegisterItem : false
    }));
    return props;
  }
);
var Tab = (0,_chunks_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__/* .createMemoComponent */ .MA)((props) => {
  const htmlProps = useTab(props);
  return (0,_chunks_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__/* .createElement */ .n)("button", htmlProps);
});
if (false) {}



/***/ }),

/***/ "../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/extends.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


/***/ }),

/***/ "../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ _inheritsLoose)
});

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}


/***/ }),

/***/ "../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}


/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/tab-panel/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export TabPanel */
/* harmony import */ var _ariakit_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/CQMDBRG5.js");
/* harmony import */ var _ariakit_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/tab/tab-list.js");
/* harmony import */ var _ariakit_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/tab/tab.js");
/* harmony import */ var _ariakit_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/tab/tab-panel.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-previous/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
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




// Separate the actual tab name from the instance ID. This is
// necessary because Ariakit internally uses the element ID when
// a new tab is selected, but our implementation looks specifically
// for the tab name to be passed to the `onSelect` callback.
const extractTabName = id => {
  if (typeof id === 'undefined' || id === null) {
    return;
  }
  return id.match(/^tab-panel-[0-9]*-(.*)/)?.[1];
};

/**
 * TabPanel is an ARIA-compliant tabpanel.
 *
 * TabPanels organize content across different screens, data sets, and interactions.
 * It has two sections: a list of tabs, and the view to show when tabs are chosen.
 *
 * ```jsx
 * import { TabPanel } from '@wordpress/components';
 *
 * const onSelect = ( tabName ) => {
 *   console.log( 'Selecting tab', tabName );
 * };
 *
 * const MyTabPanel = () => (
 *   <TabPanel
 *     className="my-tab-panel"
 *     activeClass="active-tab"
 *     onSelect={ onSelect }
 *     tabs={ [
 *       {
 *         name: 'tab1',
 *         title: 'Tab 1',
 *         className: 'tab-one',
 *       },
 *       {
 *         name: 'tab2',
 *         title: 'Tab 2',
 *         className: 'tab-two',
 *       },
 *     ] }
 *   >
 *     { ( tab ) => <p>{ tab.title }</p> }
 *   </TabPanel>
 * );
 * ```
 */
const UnforwardedTabPanel = ({
  className,
  children,
  tabs,
  selectOnMove = true,
  initialTabName,
  orientation = 'horizontal',
  activeClass = 'is-active',
  onSelect
}, ref) => {
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(TabPanel, 'tab-panel');
  const prependInstanceId = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(tabName => {
    if (typeof tabName === 'undefined') {
      return;
    }
    return `${instanceId}-${tabName}`;
  }, [instanceId]);
  const tabStore = _ariakit_react__WEBPACK_IMPORTED_MODULE_3__/* .useTabStore */ .W({
    setSelectedId: newTabValue => {
      if (typeof newTabValue === 'undefined' || newTabValue === null) {
        return;
      }
      const newTab = tabs.find(t => prependInstanceId(t.name) === newTabValue);
      if (newTab?.disabled || newTab === selectedTab) {
        return;
      }
      const simplifiedTabName = extractTabName(newTabValue);
      if (typeof simplifiedTabName === 'undefined') {
        return;
      }
      onSelect?.(simplifiedTabName);
    },
    orientation,
    selectOnMove,
    defaultSelectedId: prependInstanceId(initialTabName)
  });
  const selectedTabName = extractTabName(tabStore.useState('selectedId'));
  const setTabStoreSelectedId = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(tabName => {
    tabStore.setState('selectedId', prependInstanceId(tabName));
  }, [prependInstanceId, tabStore]);
  const selectedTab = tabs.find(({
    name
  }) => name === selectedTabName);
  const previousSelectedTabName = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(selectedTabName);

  // Ensure `onSelect` is called when the initial tab is selected.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (previousSelectedTabName !== selectedTabName && selectedTabName === initialTabName && !!selectedTabName) {
      onSelect?.(selectedTabName);
    }
  }, [selectedTabName, initialTabName, onSelect, previousSelectedTabName]);

  // Handle selecting the initial tab.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect)(() => {
    // If there's a selected tab, don't override it.
    if (selectedTab) {
      return;
    }
    const initialTab = tabs.find(tab => tab.name === initialTabName);
    // Wait for the denoted initial tab to be declared before making a
    // selection. This ensures that if a tab is declared lazily it can
    // still receive initial selection.
    if (initialTabName && !initialTab) {
      return;
    }
    if (initialTab && !initialTab.disabled) {
      // Select the initial tab if it's not disabled.
      setTabStoreSelectedId(initialTab.name);
    } else {
      // Fallback to the first enabled tab when the initial tab is
      // disabled or it can't be found.
      const firstEnabledTab = tabs.find(tab => !tab.disabled);
      if (firstEnabledTab) {
        setTabStoreSelectedId(firstEnabledTab.name);
      }
    }
  }, [tabs, selectedTab, initialTabName, instanceId, setTabStoreSelectedId]);

  // Handle the currently selected tab becoming disabled.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    // This effect only runs when the selected tab is defined and becomes disabled.
    if (!selectedTab?.disabled) {
      return;
    }
    const firstEnabledTab = tabs.find(tab => !tab.disabled);
    // If the currently selected tab becomes disabled, select the first enabled tab.
    // (if there is one).
    if (firstEnabledTab) {
      setTabStoreSelectedId(firstEnabledTab.name);
    }
  }, [tabs, selectedTab?.disabled, setTabStoreSelectedId, instanceId]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: className,
    ref: ref,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ariakit_react__WEBPACK_IMPORTED_MODULE_5__/* .TabList */ .w, {
      store: tabStore,
      className: "components-tab-panel__tabs",
      children: tabs.map(tab => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ariakit_react__WEBPACK_IMPORTED_MODULE_6__/* .Tab */ .o, {
          id: prependInstanceId(tab.name),
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)('components-tab-panel__tabs-item', tab.className, {
            [activeClass]: tab.name === selectedTabName
          }),
          disabled: tab.disabled,
          "aria-controls": `${prependInstanceId(tab.name)}-view`,
          render: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
            icon: tab.icon,
            label: tab.icon && tab.title,
            showTooltip: !!tab.icon
          }),
          children: !tab.icon && tab.title
        }, tab.name);
      })
    }), selectedTab && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ariakit_react__WEBPACK_IMPORTED_MODULE_9__/* .TabPanel */ .K, {
      id: `${prependInstanceId(selectedTab.name)}-view`,
      store: tabStore,
      tabId: prependInstanceId(selectedTab.name),
      className: "components-tab-panel__tab-content",
      children: children(selectedTab)
    })]
  });
};
const TabPanel = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(UnforwardedTabPanel);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabPanel);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-previous/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ usePrevious)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * WordPress dependencies
 */


/**
 * Use something's value from the previous render.
 * Based on https://usehooks.com/usePrevious/.
 *
 * @param value The value to track.
 *
 * @return The value from the previous render.
 */
function usePrevious(value) {
  const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  // Store current value in ref.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    ref.current = value;
  }, [value]); // Re-run when value changes.

  // Return previous value (happens before update in useEffect above).
  return ref.current;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-left.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * WordPress dependencies
 */


const chevronLeft = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .SVG */ .t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .Path */ .wA, {
    d: "M14.6 7l-1.2-1L8 12l5.4 6 1.2-1-4.6-5z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chevronLeft);
//# sourceMappingURL=chevron-left.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/CSSTransition.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ esm_CSSTransition)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/extends.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js + 1 modules
var inheritsLoose = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hasClass.js
/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/addClass.js

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass_addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass_removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/Transition.js + 1 modules
var Transition = __webpack_require__("../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/Transition.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/utils/reflow.js
var reflow = __webpack_require__("../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/utils/reflow.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/CSSTransition.js











var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return addClass_addClass(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return removeClass_removeClass(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* default */.A)(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      if (node) (0,reflow/* forceReflow */.F)(node);
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = (0,objectWithoutPropertiesLoose/* default */.A)(_this$props, ["classNames"]);

    return /*#__PURE__*/react.createElement(Transition/* default */.Ay, (0,esm_extends/* default */.A)({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(react.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  false ? 0 : {};
/* harmony default export */ const esm_CSSTransition = (CSSTransition);

/***/ }),

/***/ "../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/Transition.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (/* binding */ esm_Transition)
});

// UNUSED EXPORTS: ENTERED, ENTERING, EXITED, EXITING, UNMOUNTED

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js + 1 modules
var inheritsLoose = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js
var react_dom = __webpack_require__("../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/config.js
/* harmony default export */ const config = ({
  disabled: false
});
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/TransitionGroupContext.js
var TransitionGroupContext = __webpack_require__("../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/TransitionGroupContext.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/utils/reflow.js
var reflow = __webpack_require__("../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/utils/reflow.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/Transition.js









var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* default */.A)(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom.findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
          // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
          // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.

          if (node) (0,reflow/* forceReflow */.F)(node);
        }

        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : react_dom.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = (0,objectWithoutPropertiesLoose/* default */.A)(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react.createElement(TransitionGroupContext/* default */.A.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react.cloneElement(react.Children.only(children), childProps))
    );
  };

  return Transition;
}(react.Component);

Transition.contextType = TransitionGroupContext/* default */.A;
Transition.propTypes =  false ? 0 : {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ const esm_Transition = (Transition);

/***/ }),

/***/ "../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/TransitionGroup.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ esm_TransitionGroup)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/extends.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js + 1 modules
var inheritsLoose = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/TransitionGroupContext.js
var TransitionGroupContext = __webpack_require__("../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/TransitionGroupContext.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/utils/ChildMapping.js

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0,react.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0,react.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0,react.isValidElement)(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = (0,react.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0,react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0,react.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0,react.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0,react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/TransitionGroup.js









var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* default */.A)(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = (0,esm_extends/* default */.A)({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = (0,objectWithoutPropertiesLoose/* default */.A)(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/react.createElement(TransitionGroupContext/* default */.A.Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/react.createElement(TransitionGroupContext/* default */.A.Provider, {
      value: contextValue
    }, /*#__PURE__*/react.createElement(Component, props, children));
  };

  return TransitionGroup;
}(react.Component);

TransitionGroup.propTypes =  false ? 0 : {};
TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ const esm_TransitionGroup = (TransitionGroup);

/***/ }),

/***/ "../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/TransitionGroupContext.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0__.createContext(null));

/***/ }),

/***/ "../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/utils/reflow.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ forceReflow)
/* harmony export */ });
var forceReflow = function forceReflow(node) {
  return node.scrollTop;
};

/***/ })

}]);