"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[8376],{

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

/***/ "../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(obj, key, value) {
  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/dropdown/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Dropdown */
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+deprecated@4.0.1/node_modules/@wordpress/deprecated/build-module/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/use-context-system.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-connect.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js");
/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/popover/index.js");
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





const UnconnectedDropdown = (props, forwardedRef) => {
  const {
    renderContent,
    renderToggle,
    className,
    contentClassName,
    expandOnMobile,
    headerTitle,
    focusOnMount,
    popoverProps,
    onClose,
    onToggle,
    style,
    open,
    defaultOpen,
    // Deprecated props
    position,
    // From context system
    variant
  } = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .useContextSystem */ .A)(props, 'Dropdown');
  if (position !== undefined) {
    (0,_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)('`position` prop in wp.components.Dropdown', {
      since: '6.2',
      alternative: '`popoverProps.placement` prop',
      hint: 'Note that the `position` prop will override any values passed through the `popoverProps.placement` prop.'
    });
  }

  // Use internal state instead of a ref to make sure that the component
  // re-renders when the popover's anchor updates.
  const [fallbackPopoverAnchor, setFallbackPopoverAnchor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const containerRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  const [isOpen, setIsOpen] = (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useControlledValue */ .j)({
    defaultValue: defaultOpen,
    value: open,
    onChange: onToggle
  });

  /**
   * Closes the popover when focus leaves it unless the toggle was pressed or
   * focus has moved to a separate dialog. The former is to let the toggle
   * handle closing the popover and the latter is to preserve presence in
   * case a dialog has opened, allowing focus to return when it's dismissed.
   */
  function closeIfFocusOutside() {
    if (!containerRef.current) {
      return;
    }
    const {
      ownerDocument
    } = containerRef.current;
    const dialog = ownerDocument?.activeElement?.closest('[role="dialog"]');
    if (!containerRef.current.contains(ownerDocument.activeElement) && (!dialog || dialog.contains(containerRef.current))) {
      close();
    }
  }
  function close() {
    onClose?.();
    setIsOpen(false);
  }
  const args = {
    isOpen: !!isOpen,
    onToggle: () => setIsOpen(!isOpen),
    onClose: close
  };
  const popoverPropsHaveAnchor = !!popoverProps?.anchor ||
  // Note: `anchorRef`, `getAnchorRect` and `anchorRect` are deprecated and
  // be removed from `Popover` from WordPress 6.3
  !!popoverProps?.anchorRef || !!popoverProps?.getAnchorRect || !!popoverProps?.anchorRect;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: className,
    ref: (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)([containerRef, forwardedRef, setFallbackPopoverAnchor])
    // Some UAs focus the closest focusable parent when the toggle is
    // clicked. Making this div focusable ensures such UAs will focus
    // it and `closeIfFocusOutside` can tell if the toggle was clicked.
    ,
    tabIndex: -1,
    style: style,
    children: [renderToggle(args), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_popover__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay, {
      position: position,
      onClose: close,
      onFocusOutside: closeIfFocusOutside,
      expandOnMobile: expandOnMobile,
      headerTitle: headerTitle,
      focusOnMount: focusOnMount
      // This value is used to ensure that the dropdowns
      // align with the editor header by default.
      ,
      offset: 13,
      anchor: !popoverPropsHaveAnchor ? fallbackPopoverAnchor : undefined,
      variant: variant,
      ...popoverProps,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)('components-dropdown__content', popoverProps?.className, contentClassName),
      children: renderContent(args)
    })]
  });
};

/**
 * Renders a button that opens a floating content modal when clicked.
 *
 * ```jsx
 * import { Button, Dropdown } from '@wordpress/components';
 *
 * const MyDropdown = () => (
 *   <Dropdown
 *     className="my-container-class-name"
 *     contentClassName="my-dropdown-content-classname"
 *     popoverProps={ { placement: 'bottom-start' } }
 *     renderToggle={ ( { isOpen, onToggle } ) => (
 *       <Button
 *         variant="primary"
 *         onClick={ onToggle }
 *         aria-expanded={ isOpen }
 *       >
 *         Toggle Dropdown!
 *       </Button>
 *     ) }
 *     renderContent={ () => <div>This is the content of the dropdown.</div> }
 *   />
 * );
 * ```
 */
const Dropdown = (0,_context__WEBPACK_IMPORTED_MODULE_8__/* .contextConnect */ .KZ)(UnconnectedDropdown, 'Dropdown');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);
//# sourceMappingURL=index.js.map

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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ useControlledValue)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * WordPress dependencies
 */

/**
 * Simplified and improved implementation of useControlledState.
 *
 * @param props
 * @param props.defaultValue
 * @param props.value
 * @param props.onChange
 * @return The controlled value and the value setter.
 */
function useControlledValue({
  defaultValue,
  onChange,
  value: valueProp
}) {
  const hasValue = typeof valueProp !== 'undefined';
  const initialValue = hasValue ? valueProp : defaultValue;
  const [state, setState] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue);
  const value = hasValue ? valueProp : state;
  let setValue;
  if (hasValue && typeof onChange === 'function') {
    setValue = onChange;
  } else if (!hasValue && typeof onChange === 'function') {
    setValue = nextValue => {
      onChange(nextValue);
      setState(nextValue);
    };
  } else {
    setValue = setState;
  }
  return [value, setValue];
}
//# sourceMappingURL=use-controlled-value.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/higher-order/compose.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/higher-order/pipe.js");
/**
 * Internal dependencies
 */


/**
 * Composes multiple higher-order components into a single higher-order component. Performs right-to-left function
 * composition, where each successive invocation is supplied the return value of the previous.
 *
 * This is inspired by `lodash`'s `flowRight` function.
 *
 * @see https://lodash.com/docs/4#flow-right
 */
const compose = (0,_pipe__WEBPACK_IMPORTED_MODULE_0__/* .basePipe */ .A)(true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compose);
//# sourceMappingURL=compose.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/higher-order/pipe.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ basePipe),
/* harmony export */   h: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Parts of this source were derived and modified from lodash,
 * released under the MIT license.
 *
 * https://github.com/lodash/lodash
 *
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 *
 * Based on Underscore.js, copyright Jeremy Ashkenas,
 * DocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>
 *
 * This software consists of voluntary contributions made by many
 * individuals. For exact contribution history, see the revision history
 * available at https://github.com/lodash/lodash
 *
 * The following license applies to all parts of this software except as
 * documented below:
 *
 * ====
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Creates a pipe function.
 *
 * Allows to choose whether to perform left-to-right or right-to-left composition.
 *
 * @see https://lodash.com/docs/4#flow
 *
 * @param {boolean} reverse True if right-to-left, false for left-to-right composition.
 */
const basePipe = (reverse = false) => (...funcs) => (...args) => {
  const functions = funcs.flat();
  if (reverse) {
    functions.reverse();
  }
  return functions.reduce((prev, func) => [func(...prev)], args)[0];
};

/**
 * Composes multiple higher-order components into a single higher-order component. Performs left-to-right function
 * composition, where each successive invocation is supplied the return value of the previous.
 *
 * This is inspired by `lodash`'s `flow` function.
 *
 * @see https://lodash.com/docs/4#flow
 */
const pipe = basePipe();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pipe);
//# sourceMappingURL=pipe.js.map

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

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/utils/create-higher-order-component/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ createHigherOrderComponent)
/* harmony export */ });
/* harmony import */ var change_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/pascal-case@3.1.2/node_modules/pascal-case/dist.es2015/index.js");
/**
 * External dependencies
 */

/**
 * Given a function mapping a component to an enhanced component and modifier
 * name, returns the enhanced component augmented with a generated displayName.
 *
 * @param mapComponent Function mapping component to enhanced component.
 * @param modifierName Seed name from which to generated display name.
 *
 * @return Component class with generated display name assigned.
 */
function createHigherOrderComponent(mapComponent, modifierName) {
  return Inner => {
    const Outer = mapComponent(Inner);
    Outer.displayName = hocName(modifierName, Inner);
    return Outer;
  };
}

/**
 * Returns a displayName for a higher-order component, given a wrapper name.
 *
 * @example
 *     hocName( 'MyMemo', Widget ) === 'MyMemo(Widget)';
 *     hocName( 'MyMemo', <div /> ) === 'MyMemo(Component)';
 *
 * @param name  Name assigned to higher-order component's wrapper component.
 * @param Inner Wrapped component inside higher-order component.
 * @return       Wrapped name of higher-order component.
 */
const hocName = (name, Inner) => {
  const inner = Inner.displayName || Inner.name || 'Component';
  const outer = (0,change_case__WEBPACK_IMPORTED_MODULE_0__/* .pascalCase */ .fL)(name !== null && name !== void 0 ? name : '');
  return `${outer}(${inner})`;
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/utils/debounce/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ debounce)
/* harmony export */ });
/**
 * Parts of this source were derived and modified from lodash,
 * released under the MIT license.
 *
 * https://github.com/lodash/lodash
 *
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 *
 * Based on Underscore.js, copyright Jeremy Ashkenas,
 * DocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>
 *
 * This software consists of voluntary contributions made by many
 * individuals. For exact contribution history, see the revision history
 * available at https://github.com/lodash/lodash
 *
 * The following license applies to all parts of this software except as
 * documented below:
 *
 * ====
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * A simplified and properly typed version of lodash's `debounce`, that
 * always uses timers instead of sometimes using rAF.
 *
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel delayed
 * `func` invocations and a `flush` method to immediately invoke them. Provide
 * `options` to indicate whether `func` should be invoked on the leading and/or
 * trailing edge of the `wait` timeout. The `func` is invoked with the last
 * arguments provided to the debounced function. Subsequent calls to the debounced
 * function return the result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * @param {Function}                   func             The function to debounce.
 * @param {number}                     wait             The number of milliseconds to delay.
 * @param {Partial< DebounceOptions >} options          The options object.
 * @param {boolean}                    options.leading  Specify invoking on the leading edge of the timeout.
 * @param {number}                     options.maxWait  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean}                    options.trailing Specify invoking on the trailing edge of the timeout.
 *
 * @return Returns the new debounced function.
 */
const debounce = (func, wait, options) => {
  let lastArgs;
  let lastThis;
  let maxWait = 0;
  let result;
  let timerId;
  let lastCallTime;
  let lastInvokeTime = 0;
  let leading = false;
  let maxing = false;
  let trailing = true;
  if (options) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    if (options.maxWait !== undefined) {
      maxWait = Math.max(options.maxWait, wait);
    }
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    const args = lastArgs;
    const thisArg = lastThis;
    lastArgs = undefined;
    lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function startTimer(pendingFunc, waitTime) {
    timerId = setTimeout(pendingFunc, waitTime);
  }
  function cancelTimer() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
  }
  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    startTimer(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }
  function getTimeSinceLastCall(time) {
    return time - (lastCallTime || 0);
  }
  function remainingWait(time) {
    const timeSinceLastCall = getTimeSinceLastCall(time);
    const timeSinceLastInvoke = time - lastInvokeTime;
    const timeWaiting = wait - timeSinceLastCall;
    return maxing ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    const timeSinceLastCall = getTimeSinceLastCall(time);
    const timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    const time = Date.now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    startTimer(timerExpired, remainingWait(time));
    return undefined;
  }
  function clearTimer() {
    timerId = undefined;
  }
  function trailingEdge(time) {
    clearTimer();

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }
  function cancel() {
    cancelTimer();
    lastInvokeTime = 0;
    clearTimer();
    lastArgs = lastCallTime = lastThis = undefined;
  }
  function flush() {
    return pending() ? trailingEdge(Date.now()) : result;
  }
  function pending() {
    return timerId !== undefined;
  }
  function debounced(...args) {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);
    lastArgs = args;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (!pending()) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        startTimer(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (!pending()) {
      startTimer(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  debounced.pending = pending;
  return debounced;
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+html-entities@4.0.1/node_modules/@wordpress/html-entities/build-module/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ decodeEntities)
/* harmony export */ });
/** @type {HTMLTextAreaElement} */
let _decodeTextArea;

/**
 * Decodes the HTML entities from a given string.
 *
 * @param {string} html String that contain HTML entities.
 *
 * @example
 * ```js
 * import { decodeEntities } from '@wordpress/html-entities';
 *
 * const result = decodeEntities( '&aacute;' );
 * console.log( result ); // result will be "á"
 * ```
 *
 * @return {string} The decoded string.
 */
function decodeEntities(html) {
  // Not a string, or no entities to decode.
  if ('string' !== typeof html || -1 === html.indexOf('&')) {
    return html;
  }

  // Create a textarea for decoding entities, that we can reuse.
  if (undefined === _decodeTextArea) {
    if (document.implementation && document.implementation.createHTMLDocument) {
      _decodeTextArea = document.implementation.createHTMLDocument('').createElement('textarea');
    } else {
      _decodeTextArea = document.createElement('textarea');
    }
  }
  _decodeTextArea.innerHTML = html;
  const decoded = _decodeTextArea.textContent;
  _decodeTextArea.innerHTML = '';

  /**
   * Cast to string, HTMLTextAreaElement should always have `string` textContent.
   *
   * > The `textContent` property of the `Node` interface represents the text content of the
   * > node and its descendants.
   * >
   * > Value: A string or `null`
   * >
   * > * If the node is a `document` or a Doctype, `textContent` returns `null`.
   * > * If the node is a CDATA section, comment, processing instruction, or text node,
   * >   textContent returns the text inside the node, i.e., the `Node.nodeValue`.
   * > * For other node types, `textContent returns the concatenation of the textContent of
   * >   every child node, excluding comments and processing instructions. (This is an empty
   * >   string if the node has no children.)
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
   */
  return /** @type {string} */decoded;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":
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

/***/ "../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/calendar.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * WordPress dependencies
 */


const calendar = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .SVG */ .t4, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .Path */ .wA, {
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V7h15v12zM9 10H7v2h2v-2zm0 4H7v2h2v-2zm4-4h-2v2h2v-2zm4 0h-2v2h2v-2zm-4 4h-2v2h2v-2zm4 0h-2v2h2v-2z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calendar);
//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-for-each.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var $forEach = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-iteration.js").forEach);
var arrayMethodIsStrict = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


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

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-method-is-strict.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var fails = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/does-not-exceed-safe-integer.js":
/***/ ((module) => {


var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.exec.js");
var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this-clause.js");
var defineBuiltIn = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/define-built-in.js");
var regexpExec = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/regexp-exec.js");
var fails = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/well-known-symbol.js");
var createNonEnumerableProperty = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/create-non-enumerable-property.js");

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) !== 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () {
      execCalled = true;
      return null;
    };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var uncurriedNativeRegExpMethod = uncurryThis(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });

    defineBuiltIn(String.prototype, KEY, methods[0]);
    defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-regexp.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var isObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) === 'RegExp');
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/regexp-exec-abstract.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var call = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/an-object.js");
var isCallable = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-callable.js");
var classof = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/regexp-exec.js");

var $TypeError = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = call(exec, R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call(regexpExec, R, S);
  throw new $TypeError('RegExp#exec called on incompatible receiver');
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var fails = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/length-of-array-like.js");
var doesNotExceedSafeInteger = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/does-not-exceed-safe-integer.js");
var createProperty = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/engine-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat');

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var $filter = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-iteration.js").filter);
var arrayMethodHasSpeciesSupport = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.for-each.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var forEach = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach !== forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.join.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/indexed-object.js");
var toIndexedObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-indexed-object.js");
var arrayMethodIsStrict = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-method-is-strict.js");

var nativeJoin = uncurryThis([].join);

var ES3_STRINGS = IndexedObject !== Object;
var FORCED = ES3_STRINGS || !arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: FORCED }, {
  join: function join(separator) {
    return nativeJoin(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


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

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.date.to-string.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


// TODO: Remove from `core-js@4`
var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js");
var defineBuiltIn = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/define-built-in.js");

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = uncurryThis(DatePrototype[TO_STRING]);
var thisTimeValue = uncurryThis(DatePrototype.getTime);

// `Date.prototype.toString` method
// https://tc39.es/ecma262/#sec-date.prototype.tostring
if (String(new Date(NaN)) !== INVALID_DATE) {
  defineBuiltIn(DatePrototype, TO_STRING, function toString() {
    var value = thisTimeValue(this);
    // eslint-disable-next-line no-self-compare -- NaN check
    return value === value ? nativeDateToString(this) : INVALID_DATE;
  });
}


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

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-properties.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/descriptors.js");
var defineProperties = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-define-properties.js").f);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
$({ target: 'Object', stat: true, forced: Object.defineProperties !== defineProperties, sham: !DESCRIPTORS }, {
  defineProperties: defineProperties
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-property.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/descriptors.js");
var defineProperty = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-define-property.js").f);

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
// eslint-disable-next-line es/no-object-defineproperty -- safe
$({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty, sham: !DESCRIPTORS }, {
  defineProperty: defineProperty
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptor.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var fails = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js");
var toIndexedObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-indexed-object.js");
var nativeGetOwnPropertyDescriptor = (__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-get-own-property-descriptor.js").f);
var DESCRIPTORS = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/descriptors.js");

var FORCED = !DESCRIPTORS || fails(function () { nativeGetOwnPropertyDescriptor(1); });

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptors.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/descriptors.js");
var ownKeys = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/own-keys.js");
var toIndexedObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-indexed-object.js");
var getOwnPropertyDescriptorModule = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-get-own-property-descriptor.js");
var createProperty = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/create-property.js");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var toObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-object.js");
var nativeKeys = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-keys.js");
var fails = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var global = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/dom-iterables.js");
var DOMTokenListPrototype = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/dom-token-list-prototype.js");
var forEach = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/create-non-enumerable-property.js");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),

/***/ "../../node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var reactIs = __webpack_require__("../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "../../node_modules/.pnpm/pascal-case@3.1.2/node_modules/pascal-case/dist.es2015/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fL: () => (/* binding */ pascalCase),
/* harmony export */   l3: () => (/* binding */ pascalCaseTransform)
/* harmony export */ });
/* unused harmony export pascalCaseTransformMerge */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/tslib@2.6.3/node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var no_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/no-case@3.0.4/node_modules/no-case/dist.es2015/index.js");


function pascalCaseTransform(input, index) {
    var firstChar = input.charAt(0);
    var lowerChars = input.substr(1).toLowerCase();
    if (index > 0 && firstChar >= "0" && firstChar <= "9") {
        return "_" + firstChar + lowerChars;
    }
    return "" + firstChar.toUpperCase() + lowerChars;
}
function pascalCaseTransformMerge(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}
function pascalCase(input, options) {
    if (options === void 0) { options = {}; }
    return (0,no_case__WEBPACK_IMPORTED_MODULE_0__/* .noCase */ .W)(input, (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .Cl)({ delimiter: "", transform: pascalCaseTransform }, options));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js":
/***/ ((__unused_webpack_module, exports) => {

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),

/***/ "../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__("../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js");
} else {}


/***/ })

}]);