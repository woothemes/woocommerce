(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[3488],{

/***/ "../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/3UYWTADI.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ createPopoverStore)
/* harmony export */ });
/* harmony import */ var _YOHCVXJB_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/YOHCVXJB.js");
/* harmony import */ var _EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/EQQLU3CG.js");
/* harmony import */ var _PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js");
"use client";





// src/popover/popover-store.ts
function createPopoverStore(_a = {}) {
  var _b = _a, {
    popover: otherPopover
  } = _b, props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__/* .__objRest */ .YG)(_b, [
    "popover"
  ]);
  const store = (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_1__/* .mergeStore */ .od)(
    props.store,
    (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_1__/* .omit */ .cJ)(otherPopover, [
      "arrowElement",
      "anchorElement",
      "contentElement",
      "popoverElement",
      "disclosureElement"
    ])
  );
  (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_1__/* .throwOnConflictingProps */ .UE)(props, store);
  const syncState = store == null ? void 0 : store.getState();
  const dialog = (0,_YOHCVXJB_js__WEBPACK_IMPORTED_MODULE_2__/* .createDialogStore */ .Y)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__/* .__spreadProps */ .ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__/* .__spreadValues */ .IA)({}, props), { store }));
  const placement = (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_3__/* .defaultValue */ .Jh)(
    props.placement,
    syncState == null ? void 0 : syncState.placement,
    "bottom"
  );
  const initialState = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__/* .__spreadProps */ .ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__/* .__spreadValues */ .IA)({}, dialog.getState()), {
    placement,
    currentPlacement: placement,
    anchorElement: (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_3__/* .defaultValue */ .Jh)(syncState == null ? void 0 : syncState.anchorElement, null),
    popoverElement: (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_3__/* .defaultValue */ .Jh)(syncState == null ? void 0 : syncState.popoverElement, null),
    arrowElement: (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_3__/* .defaultValue */ .Jh)(syncState == null ? void 0 : syncState.arrowElement, null),
    rendered: Symbol("rendered")
  });
  const popover = (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_1__/* .createStore */ .y$)(initialState, dialog, store);
  return (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__/* .__spreadProps */ .ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__/* .__spreadValues */ .IA)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__/* .__spreadValues */ .IA)({}, dialog), popover), {
    setAnchorElement: (element) => popover.setState("anchorElement", element),
    setPopoverElement: (element) => popover.setState("popoverElement", element),
    setArrowElement: (element) => popover.setState("arrowElement", element),
    render: () => popover.setState("rendered", Symbol("rendered"))
  });
}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/6DHTHWXD.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ createCollectionStore)
/* harmony export */ });
/* harmony import */ var _EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/EQQLU3CG.js");
/* harmony import */ var _PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var _HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js");
"use client";





// src/collection/collection-store.ts
function isElementPreceding(a, b) {
  return Boolean(
    b.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_PRECEDING
  );
}
function sortBasedOnDOMPosition(items) {
  const pairs = items.map((item, index) => [index, item]);
  let isOrderDifferent = false;
  pairs.sort(([indexA, a], [indexB, b]) => {
    const elementA = a.element;
    const elementB = b.element;
    if (elementA === elementB) return 0;
    if (!elementA || !elementB) return 0;
    if (isElementPreceding(elementA, elementB)) {
      if (indexA > indexB) {
        isOrderDifferent = true;
      }
      return -1;
    }
    if (indexA < indexB) {
      isOrderDifferent = true;
    }
    return 1;
  });
  if (isOrderDifferent) {
    return pairs.map(([_, item]) => item);
  }
  return items;
}
function getCommonParent(items) {
  var _a;
  const firstItem = items.find((item) => !!item.element);
  const lastItem = [...items].reverse().find((item) => !!item.element);
  let parentElement = (_a = firstItem == null ? void 0 : firstItem.element) == null ? void 0 : _a.parentElement;
  while (parentElement && (lastItem == null ? void 0 : lastItem.element)) {
    const parent = parentElement;
    if (lastItem && parent.contains(lastItem.element)) {
      return parentElement;
    }
    parentElement = parentElement.parentElement;
  }
  return (0,_HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__/* .getDocument */ .YE)(parentElement).body;
}
function getPrivateStore(store) {
  return store == null ? void 0 : store.__unstablePrivateStore;
}
function createCollectionStore(props = {}) {
  var _a;
  (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_1__/* .throwOnConflictingProps */ .UE)(props, props.store);
  const syncState = (_a = props.store) == null ? void 0 : _a.getState();
  const items = (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultValue */ .Jh)(
    props.items,
    syncState == null ? void 0 : syncState.items,
    props.defaultItems,
    []
  );
  const itemsMap = new Map(items.map((item) => [item.id, item]));
  const initialState = {
    items,
    renderedItems: (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultValue */ .Jh)(syncState == null ? void 0 : syncState.renderedItems, [])
  };
  const syncPrivateStore = getPrivateStore(props.store);
  const privateStore = (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_1__/* .createStore */ .y$)(
    { items, renderedItems: initialState.renderedItems },
    syncPrivateStore
  );
  const collection = (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_1__/* .createStore */ .y$)(initialState, props.store);
  const sortItems = (renderedItems) => {
    const sortedItems = sortBasedOnDOMPosition(renderedItems);
    privateStore.setState("renderedItems", sortedItems);
    collection.setState("renderedItems", sortedItems);
  };
  (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_1__/* .setup */ .mj)(collection, () => (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_1__/* .init */ .Ts)(privateStore));
  (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_1__/* .setup */ .mj)(privateStore, () => {
    return (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_1__/* .batch */ .vA)(privateStore, ["items"], (state) => {
      collection.setState("items", state.items);
    });
  });
  (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_1__/* .setup */ .mj)(privateStore, () => {
    return (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_1__/* .batch */ .vA)(privateStore, ["renderedItems"], (state) => {
      let firstRun = true;
      let raf = requestAnimationFrame(() => {
        const { renderedItems } = collection.getState();
        if (state.renderedItems === renderedItems) return;
        sortItems(state.renderedItems);
      });
      if (typeof IntersectionObserver !== "function") {
        return () => cancelAnimationFrame(raf);
      }
      const ioCallback = () => {
        if (firstRun) {
          firstRun = false;
          return;
        }
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => sortItems(state.renderedItems));
      };
      const root = getCommonParent(state.renderedItems);
      const observer = new IntersectionObserver(ioCallback, { root });
      for (const item of state.renderedItems) {
        if (!item.element) continue;
        observer.observe(item.element);
      }
      return () => {
        cancelAnimationFrame(raf);
        observer.disconnect();
      };
    });
  });
  const mergeItem = (item, setItems, canDeleteFromMap = false) => {
    let prevItem;
    setItems((items2) => {
      const index = items2.findIndex(({ id }) => id === item.id);
      const nextItems = items2.slice();
      if (index !== -1) {
        prevItem = items2[index];
        const nextItem = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__/* .__spreadValues */ .IA)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__/* .__spreadValues */ .IA)({}, prevItem), item);
        nextItems[index] = nextItem;
        itemsMap.set(item.id, nextItem);
      } else {
        nextItems.push(item);
        itemsMap.set(item.id, item);
      }
      return nextItems;
    });
    const unmergeItem = () => {
      setItems((items2) => {
        if (!prevItem) {
          if (canDeleteFromMap) {
            itemsMap.delete(item.id);
          }
          return items2.filter(({ id }) => id !== item.id);
        }
        const index = items2.findIndex(({ id }) => id === item.id);
        if (index === -1) return items2;
        const nextItems = items2.slice();
        nextItems[index] = prevItem;
        itemsMap.set(item.id, prevItem);
        return nextItems;
      });
    };
    return unmergeItem;
  };
  const registerItem = (item) => mergeItem(
    item,
    (getItems) => privateStore.setState("items", getItems),
    true
  );
  return (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__/* .__spreadProps */ .ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__/* .__spreadValues */ .IA)({}, collection), {
    registerItem,
    renderItem: (item) => (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__/* .chain */ .cy)(
      registerItem(item),
      mergeItem(
        item,
        (getItems) => privateStore.setState("renderedItems", getItems)
      )
    ),
    item: (id) => {
      if (!id) return null;
      let item = itemsMap.get(id);
      if (!item) {
        const { items: items2 } = collection.getState();
        item = items2.find((item2) => item2.id === id);
        if (item) {
          itemsMap.set(id, item);
        }
      }
      return item || null;
    },
    // @ts-expect-error Internal
    __unstablePrivateStore: privateStore
  });
}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/6E4KKOSB.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ createDisclosureStore)
/* harmony export */ });
/* harmony import */ var _EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/EQQLU3CG.js");
/* harmony import */ var _PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js");
"use client";




// src/disclosure/disclosure-store.ts
function createDisclosureStore(props = {}) {
  const store = (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_0__/* .mergeStore */ .od)(
    props.store,
    (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_0__/* .omit */ .cJ)(props.disclosure, ["contentElement", "disclosureElement"])
  );
  (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_0__/* .throwOnConflictingProps */ .UE)(props, store);
  const syncState = store == null ? void 0 : store.getState();
  const open = (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_1__/* .defaultValue */ .Jh)(
    props.open,
    syncState == null ? void 0 : syncState.open,
    props.defaultOpen,
    false
  );
  const animated = (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_1__/* .defaultValue */ .Jh)(props.animated, syncState == null ? void 0 : syncState.animated, false);
  const initialState = {
    open,
    animated,
    animating: !!animated && open,
    mounted: open,
    contentElement: (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_1__/* .defaultValue */ .Jh)(syncState == null ? void 0 : syncState.contentElement, null),
    disclosureElement: (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_1__/* .defaultValue */ .Jh)(syncState == null ? void 0 : syncState.disclosureElement, null)
  };
  const disclosure = (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_0__/* .createStore */ .y$)(initialState, store);
  (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_0__/* .setup */ .mj)(
    disclosure,
    () => (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_0__/* .sync */ .OH)(disclosure, ["animated", "animating"], (state) => {
      if (state.animated) return;
      disclosure.setState("animating", false);
    })
  );
  (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_0__/* .setup */ .mj)(
    disclosure,
    () => (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_0__/* .subscribe */ .B1)(disclosure, ["open"], () => {
      if (!disclosure.getState().animated) return;
      disclosure.setState("animating", true);
    })
  );
  (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_0__/* .setup */ .mj)(
    disclosure,
    () => (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_0__/* .sync */ .OH)(disclosure, ["open", "animating"], (state) => {
      disclosure.setState("mounted", state.open || state.animating);
    })
  );
  return (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadProps */ .ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadValues */ .IA)({}, disclosure), {
    disclosure: props.disclosure,
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

/***/ "../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/7PRQYBBV.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $r: () => (/* binding */ toArray),
/* harmony export */   M9: () => (/* binding */ flatten2DArray),
/* harmony export */   q7: () => (/* binding */ reverseArray)
/* harmony export */ });
/* unused harmony export addItemToArray */
"use client";

// src/utils/array.ts
function toArray(arg) {
  if (Array.isArray(arg)) {
    return arg;
  }
  return typeof arg !== "undefined" ? [arg] : [];
}
function addItemToArray(array, item, index = -1) {
  if (!(index in array)) {
    return [...array, item];
  }
  return [...array.slice(0, index), item, ...array.slice(index)];
}
function flatten2DArray(array) {
  const flattened = [];
  for (const row of array) {
    flattened.push(...row);
  }
  return flattened;
}
function reverseArray(array) {
  return array.slice().reverse();
}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/D7EIQZAU.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ createCompositeStore)
/* harmony export */ });
/* harmony import */ var _6DHTHWXD_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/6DHTHWXD.js");
/* harmony import */ var _7PRQYBBV_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/7PRQYBBV.js");
/* harmony import */ var _EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/EQQLU3CG.js");
/* harmony import */ var _PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js");
"use client";






// src/composite/composite-store.ts
var NULL_ITEM = { id: null };
function findFirstEnabledItem(items, excludeId) {
  return items.find((item) => {
    if (excludeId) {
      return !item.disabled && item.id !== excludeId;
    }
    return !item.disabled;
  });
}
function getEnabledItems(items, excludeId) {
  return items.filter((item) => {
    if (excludeId) {
      return !item.disabled && item.id !== excludeId;
    }
    return !item.disabled;
  });
}
function getOppositeOrientation(orientation) {
  if (orientation === "vertical") return "horizontal";
  if (orientation === "horizontal") return "vertical";
  return;
}
function getItemsInRow(items, rowId) {
  return items.filter((item) => item.rowId === rowId);
}
function flipItems(items, activeId, shouldInsertNullItem = false) {
  const index = items.findIndex((item) => item.id === activeId);
  return [
    ...items.slice(index + 1),
    ...shouldInsertNullItem ? [NULL_ITEM] : [],
    ...items.slice(0, index)
  ];
}
function groupItemsByRows(items) {
  const rows = [];
  for (const item of items) {
    const row = rows.find((currentRow) => {
      var _a;
      return ((_a = currentRow[0]) == null ? void 0 : _a.rowId) === item.rowId;
    });
    if (row) {
      row.push(item);
    } else {
      rows.push([item]);
    }
  }
  return rows;
}
function getMaxRowLength(array) {
  let maxLength = 0;
  for (const { length } of array) {
    if (length > maxLength) {
      maxLength = length;
    }
  }
  return maxLength;
}
function createEmptyItem(rowId) {
  return {
    id: "__EMPTY_ITEM__",
    disabled: true,
    rowId
  };
}
function normalizeRows(rows, activeId, focusShift) {
  const maxLength = getMaxRowLength(rows);
  for (const row of rows) {
    for (let i = 0; i < maxLength; i += 1) {
      const item = row[i];
      if (!item || focusShift && item.disabled) {
        const isFirst = i === 0;
        const previousItem = isFirst && focusShift ? findFirstEnabledItem(row) : row[i - 1];
        row[i] = previousItem && activeId !== previousItem.id && focusShift ? previousItem : createEmptyItem(previousItem == null ? void 0 : previousItem.rowId);
      }
    }
  }
  return rows;
}
function verticalizeItems(items) {
  const rows = groupItemsByRows(items);
  const maxLength = getMaxRowLength(rows);
  const verticalized = [];
  for (let i = 0; i < maxLength; i += 1) {
    for (const row of rows) {
      const item = row[i];
      if (item) {
        verticalized.push((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__/* .__spreadProps */ .ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__/* .__spreadValues */ .IA)({}, item), {
          // If there's no rowId, it means that it's not a grid composite, but
          // a single row instead. So, instead of verticalizing it, that is,
          // assigning a different rowId based on the column index, we keep it
          // undefined so they will be part of the same row. This is useful
          // when using up/down on one-dimensional composites.
          rowId: item.rowId ? `${i}` : void 0
        }));
      }
    }
  }
  return verticalized;
}
function createCompositeStore(props = {}) {
  var _a;
  const syncState = (_a = props.store) == null ? void 0 : _a.getState();
  const collection = (0,_6DHTHWXD_js__WEBPACK_IMPORTED_MODULE_1__/* .createCollectionStore */ .I)(props);
  const activeId = (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultValue */ .Jh)(
    props.activeId,
    syncState == null ? void 0 : syncState.activeId,
    props.defaultActiveId
  );
  const initialState = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__/* .__spreadProps */ .ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__/* .__spreadValues */ .IA)({}, collection.getState()), {
    activeId,
    baseElement: (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultValue */ .Jh)(syncState == null ? void 0 : syncState.baseElement, null),
    includesBaseElement: (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultValue */ .Jh)(
      props.includesBaseElement,
      syncState == null ? void 0 : syncState.includesBaseElement,
      activeId === null
    ),
    moves: (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultValue */ .Jh)(syncState == null ? void 0 : syncState.moves, 0),
    orientation: (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultValue */ .Jh)(
      props.orientation,
      syncState == null ? void 0 : syncState.orientation,
      "both"
    ),
    rtl: (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultValue */ .Jh)(props.rtl, syncState == null ? void 0 : syncState.rtl, false),
    virtualFocus: (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultValue */ .Jh)(
      props.virtualFocus,
      syncState == null ? void 0 : syncState.virtualFocus,
      false
    ),
    focusLoop: (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultValue */ .Jh)(props.focusLoop, syncState == null ? void 0 : syncState.focusLoop, false),
    focusWrap: (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultValue */ .Jh)(props.focusWrap, syncState == null ? void 0 : syncState.focusWrap, false),
    focusShift: (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultValue */ .Jh)(props.focusShift, syncState == null ? void 0 : syncState.focusShift, false)
  });
  const composite = (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_3__/* .createStore */ .y$)(initialState, collection, props.store);
  (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_3__/* .setup */ .mj)(
    composite,
    () => (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_3__/* .sync */ .OH)(composite, ["renderedItems", "activeId"], (state) => {
      composite.setState("activeId", (activeId2) => {
        var _a2;
        if (activeId2 !== void 0) return activeId2;
        return (_a2 = findFirstEnabledItem(state.renderedItems)) == null ? void 0 : _a2.id;
      });
    })
  );
  const getNextId = (items, orientation, hasNullItem, skip) => {
    var _a2, _b;
    const { activeId: activeId2, rtl, focusLoop, focusWrap, includesBaseElement } = composite.getState();
    const isHorizontal = orientation !== "vertical";
    const isRTL = rtl && isHorizontal;
    const allItems = isRTL ? (0,_7PRQYBBV_js__WEBPACK_IMPORTED_MODULE_4__/* .reverseArray */ .q7)(items) : items;
    if (activeId2 == null) {
      return (_a2 = findFirstEnabledItem(allItems)) == null ? void 0 : _a2.id;
    }
    const activeItem = allItems.find((item) => item.id === activeId2);
    if (!activeItem) {
      return (_b = findFirstEnabledItem(allItems)) == null ? void 0 : _b.id;
    }
    const isGrid = !!activeItem.rowId;
    const activeIndex = allItems.indexOf(activeItem);
    const nextItems = allItems.slice(activeIndex + 1);
    const nextItemsInRow = getItemsInRow(nextItems, activeItem.rowId);
    if (skip !== void 0) {
      const nextEnabledItemsInRow = getEnabledItems(nextItemsInRow, activeId2);
      const nextItem2 = nextEnabledItemsInRow.slice(skip)[0] || // If we can't find an item, just return the last one.
      nextEnabledItemsInRow[nextEnabledItemsInRow.length - 1];
      return nextItem2 == null ? void 0 : nextItem2.id;
    }
    const oppositeOrientation = getOppositeOrientation(
      // If it's a grid and orientation is not set, it's a next/previous call,
      // which is inherently horizontal. up/down will call next with orientation
      // set to vertical by default (see below on up/down methods).
      isGrid ? orientation || "horizontal" : orientation
    );
    const canLoop = focusLoop && focusLoop !== oppositeOrientation;
    const canWrap = isGrid && focusWrap && focusWrap !== oppositeOrientation;
    hasNullItem = hasNullItem || !isGrid && canLoop && includesBaseElement;
    if (canLoop) {
      const loopItems = canWrap && !hasNullItem ? allItems : getItemsInRow(allItems, activeItem.rowId);
      const sortedItems = flipItems(loopItems, activeId2, hasNullItem);
      const nextItem2 = findFirstEnabledItem(sortedItems, activeId2);
      return nextItem2 == null ? void 0 : nextItem2.id;
    }
    if (canWrap) {
      const nextItem2 = findFirstEnabledItem(
        // We can use nextItems, which contains all the next items, including
        // items from other rows, to wrap between rows. However, if there is a
        // null item (the composite container), we'll only use the next items in
        // the row. So moving next from the last item will focus on the
        // composite container. On grid composites, horizontal navigation never
        // focuses on the composite container, only vertical.
        hasNullItem ? nextItemsInRow : nextItems,
        activeId2
      );
      const nextId = hasNullItem ? (nextItem2 == null ? void 0 : nextItem2.id) || null : nextItem2 == null ? void 0 : nextItem2.id;
      return nextId;
    }
    const nextItem = findFirstEnabledItem(nextItemsInRow, activeId2);
    if (!nextItem && hasNullItem) {
      return null;
    }
    return nextItem == null ? void 0 : nextItem.id;
  };
  return (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__/* .__spreadProps */ .ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__/* .__spreadValues */ .IA)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__/* .__spreadValues */ .IA)({}, collection), composite), {
    setBaseElement: (element) => composite.setState("baseElement", element),
    setActiveId: (id) => composite.setState("activeId", id),
    move: (id) => {
      if (id === void 0) return;
      composite.setState("activeId", id);
      composite.setState("moves", (moves) => moves + 1);
    },
    first: () => {
      var _a2;
      return (_a2 = findFirstEnabledItem(composite.getState().renderedItems)) == null ? void 0 : _a2.id;
    },
    last: () => {
      var _a2;
      return (_a2 = findFirstEnabledItem((0,_7PRQYBBV_js__WEBPACK_IMPORTED_MODULE_4__/* .reverseArray */ .q7)(composite.getState().renderedItems))) == null ? void 0 : _a2.id;
    },
    next: (skip) => {
      const { renderedItems, orientation } = composite.getState();
      return getNextId(renderedItems, orientation, false, skip);
    },
    previous: (skip) => {
      var _a2;
      const { renderedItems, orientation, includesBaseElement } = composite.getState();
      const isGrid = !!((_a2 = findFirstEnabledItem(renderedItems)) == null ? void 0 : _a2.rowId);
      const hasNullItem = !isGrid && includesBaseElement;
      return getNextId(
        (0,_7PRQYBBV_js__WEBPACK_IMPORTED_MODULE_4__/* .reverseArray */ .q7)(renderedItems),
        orientation,
        hasNullItem,
        skip
      );
    },
    down: (skip) => {
      const {
        activeId: activeId2,
        renderedItems,
        focusShift,
        focusLoop,
        includesBaseElement
      } = composite.getState();
      const shouldShift = focusShift && !skip;
      const verticalItems = verticalizeItems(
        (0,_7PRQYBBV_js__WEBPACK_IMPORTED_MODULE_4__/* .flatten2DArray */ .M9)(
          normalizeRows(groupItemsByRows(renderedItems), activeId2, shouldShift)
        )
      );
      const canLoop = focusLoop && focusLoop !== "horizontal";
      const hasNullItem = canLoop && includesBaseElement;
      return getNextId(verticalItems, "vertical", hasNullItem, skip);
    },
    up: (skip) => {
      const { activeId: activeId2, renderedItems, focusShift, includesBaseElement } = composite.getState();
      const shouldShift = focusShift && !skip;
      const verticalItems = verticalizeItems(
        (0,_7PRQYBBV_js__WEBPACK_IMPORTED_MODULE_4__/* .reverseArray */ .q7)(
          (0,_7PRQYBBV_js__WEBPACK_IMPORTED_MODULE_4__/* .flatten2DArray */ .M9)(
            normalizeRows(
              groupItemsByRows(renderedItems),
              activeId2,
              shouldShift
            )
          )
        )
      );
      const hasNullItem = includesBaseElement;
      return getNextId(verticalItems, "vertical", hasNullItem, skip);
    }
  });
}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/EACLTACN.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ createHovercardStore)
/* harmony export */ });
/* harmony import */ var _3UYWTADI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/3UYWTADI.js");
/* harmony import */ var _EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/EQQLU3CG.js");
/* harmony import */ var _PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js");
"use client";





// src/hovercard/hovercard-store.ts
function createHovercardStore(props = {}) {
  var _a;
  const syncState = (_a = props.store) == null ? void 0 : _a.getState();
  const popover = (0,_3UYWTADI_js__WEBPACK_IMPORTED_MODULE_0__/* .createPopoverStore */ .N)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadProps */ .ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadValues */ .IA)({}, props), {
    placement: (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultValue */ .Jh)(
      props.placement,
      syncState == null ? void 0 : syncState.placement,
      "bottom"
    )
  }));
  const timeout = (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultValue */ .Jh)(props.timeout, syncState == null ? void 0 : syncState.timeout, 500);
  const initialState = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadProps */ .ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadValues */ .IA)({}, popover.getState()), {
    timeout,
    showTimeout: (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultValue */ .Jh)(props.showTimeout, syncState == null ? void 0 : syncState.showTimeout),
    hideTimeout: (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultValue */ .Jh)(props.hideTimeout, syncState == null ? void 0 : syncState.hideTimeout),
    autoFocusOnShow: (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultValue */ .Jh)(syncState == null ? void 0 : syncState.autoFocusOnShow, false)
  });
  const hovercard = (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_3__/* .createStore */ .y$)(initialState, popover, props.store);
  return (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadProps */ .ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadValues */ .IA)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadValues */ .IA)({}, popover), hovercard), {
    setAutoFocusOnShow: (value) => hovercard.setState("autoFocusOnShow", value)
  });
}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/EQQLU3CG.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js");
"use client";



// src/utils/store.ts
function getInternal(store, key) {
  const internals = store.__unstableInternals;
  (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1)(internals, "Invalid store");
  return internals[key];
}
function createStore(initialState, ...stores) {
  let state = initialState;
  let prevStateBatch = state;
  let lastUpdate = Symbol();
  let destroy = _PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_0__/* .noop */ .lQ;
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
      if (instances.size) return;
      destroy();
    };
    if (initialized) return maybeDestroy;
    const desyncs = (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_0__/* .getKeys */ .xD)(state).map(
      (key) => (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_0__/* .chain */ .cy)(
        ...stores.map((store) => {
          var _a;
          const storeState = (_a = store == null ? void 0 : store.getState) == null ? void 0 : _a.call(store);
          if (!storeState) return;
          if (!(0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_0__/* .hasOwnProperty */ .mQ)(storeState, key)) return;
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
    for (const setup2 of setups) {
      teardowns.push(setup2());
    }
    const cleanups = stores.map(init);
    destroy = (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_0__/* .chain */ .cy)(...desyncs, ...teardowns, ...cleanups);
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
  const storePick = (keys) => createStore((0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_0__/* .pick */ .Up)(state, keys), finalStore);
  const storeOmit = (keys) => createStore((0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_0__/* .omit */ .cJ)(state, keys), finalStore);
  const getState = () => state;
  const setState = (key, value, fromStores = false) => {
    var _a;
    if (!(0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_0__/* .hasOwnProperty */ .mQ)(state, key)) return;
    const nextValue = (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_0__/* .applyState */ .Qh)(value, state[key]);
    if (nextValue === state[key]) return;
    if (!fromStores) {
      for (const store of stores) {
        (_a = store == null ? void 0 : store.setState) == null ? void 0 : _a.call(store, key, nextValue);
      }
    }
    const prevState = state;
    state = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadProps */ .ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadValues */ .IA)({}, state), { [key]: nextValue });
    const thisUpdate = Symbol();
    lastUpdate = thisUpdate;
    updatedKeys.add(key);
    const run = (listener, prev, uKeys) => {
      var _a2;
      const keys = listenerKeys.get(listener);
      const updated = (k) => uKeys ? uKeys.has(k) : k === key;
      if (!keys || keys.some(updated)) {
        (_a2 = disposables.get(listener)) == null ? void 0 : _a2();
        disposables.set(listener, listener(state, prev));
      }
    };
    for (const listener of listeners) {
      run(listener, prevState);
    }
    queueMicrotask(() => {
      if (lastUpdate !== thisUpdate) return;
      const snapshot = state;
      for (const listener of batchListeners) {
        run(listener, prevStateBatch, updatedKeys);
      }
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
  if (!store) return;
  return getInternal(store, "setup")(...args);
}
function init(store, ...args) {
  if (!store) return;
  return getInternal(store, "init")(...args);
}
function subscribe(store, ...args) {
  if (!store) return;
  return getInternal(store, "subscribe")(...args);
}
function sync(store, ...args) {
  if (!store) return;
  return getInternal(store, "sync")(...args);
}
function batch(store, ...args) {
  if (!store) return;
  return getInternal(store, "batch")(...args);
}
function omit2(store, ...args) {
  if (!store) return;
  return getInternal(store, "omit")(...args);
}
function pick2(store, ...args) {
  if (!store) return;
  return getInternal(store, "pick")(...args);
}
function mergeStore(...stores) {
  const initialState = stores.reduce((state, store2) => {
    var _a;
    const nextState = (_a = store2 == null ? void 0 : store2.getState) == null ? void 0 : _a.call(store2);
    if (!nextState) return state;
    return Object.assign(state, nextState);
  }, {});
  const store = createStore(initialState, ...stores);
  return store;
}
function throwOnConflictingProps(props, store) {
  if (true) return;
  if (!store) return;
  const defaultKeys = Object.entries(props).filter(([key, value]) => key.startsWith("default") && value !== void 0).map(([key]) => {
    var _a;
    const stateKey = key.replace("default", "");
    return `${((_a = stateKey[0]) == null ? void 0 : _a.toLowerCase()) || ""}${stateKey.slice(1)}`;
  });
  if (!defaultKeys.length) return;
  const storeState = store.getState();
  const conflictingProps = defaultKeys.filter(
    (key) => (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_0__/* .hasOwnProperty */ .mQ)(storeState, key)
  );
  if (!conflictingProps.length) return;
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

/***/ "../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bj: () => (/* binding */ isTextbox),
/* harmony export */   Bm: () => (/* binding */ isButton),
/* harmony export */   Mk: () => (/* binding */ getTextboxValue),
/* harmony export */   Sw: () => (/* binding */ canUseDOM),
/* harmony export */   Tc: () => (/* binding */ getPopupRole),
/* harmony export */   YE: () => (/* binding */ getDocument),
/* harmony export */   Zy: () => (/* binding */ getTextboxSelection),
/* harmony export */   bq: () => (/* binding */ getActiveElement),
/* harmony export */   cn: () => (/* binding */ getPopupItemRole),
/* harmony export */   eG: () => (/* binding */ setSelectionRange),
/* harmony export */   gR: () => (/* binding */ contains),
/* harmony export */   mB: () => (/* binding */ isTextField),
/* harmony export */   qj: () => (/* binding */ getScrollingElement),
/* harmony export */   qt: () => (/* binding */ isFrame),
/* harmony export */   zN: () => (/* binding */ isVisible),
/* harmony export */   zk: () => (/* binding */ getWindow)
/* harmony export */ });
/* unused harmony exports scrollIntoViewIfNeeded, isPartiallyHidden */
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
  if (tagName === "button") return true;
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
function isVisible(element) {
  if (typeof element.checkVisibility === "function") {
    return element.checkVisibility();
  }
  const htmlElement = element;
  return htmlElement.offsetWidth > 0 || htmlElement.offsetHeight > 0 || element.getClientRects().length > 0;
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
function isTextbox(element) {
  return element.isContentEditable || isTextField(element);
}
function getTextboxValue(element) {
  if (isTextField(element)) {
    return element.value;
  }
  if (element.isContentEditable) {
    const range = getDocument(element).createRange();
    range.selectNodeContents(element);
    return range.toString();
  }
  return "";
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
    tree: "treeitem"
  };
  const popupRole = getPopupRole(element);
  if (!popupRole) return fallback;
  const key = popupRole;
  return (_a = itemRoleByPopupRole[key]) != null ? _a : fallback;
}
function scrollIntoViewIfNeeded(element, arg) {
  if (isPartiallyHidden(element) && "scrollIntoView" in element) {
    element.scrollIntoView(arg);
  }
}
function getScrollingElement(element) {
  if (!element) return null;
  if (element.clientHeight && element.scrollHeight > element.clientHeight) {
    const { overflowY } = getComputedStyle(element);
    const isScrollable = overflowY !== "visible" && overflowY !== "hidden";
    if (isScrollable) return element;
  } else if (element.clientWidth && element.scrollWidth > element.clientWidth) {
    const { overflowX } = getComputedStyle(element);
    const isScrollable = overflowX !== "visible" && overflowX !== "hidden";
    if (isScrollable) return element;
  }
  return getScrollingElement(element.parentElement) || document.scrollingElement || document.body;
}
function isPartiallyHidden(element) {
  const elementRect = element.getBoundingClientRect();
  const scroller = getScrollingElement(element);
  if (!scroller) return false;
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

/***/ "../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $f: () => (/* binding */ disabledFromProps),
/* harmony export */   D_: () => (/* binding */ identity),
/* harmony export */   HR: () => (/* binding */ removeUndefinedValues),
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
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js");
"use client";


// src/utils/misc.ts
function noop(..._) {
}
function shallowEqual(a, b) {
  if (a === b) return true;
  if (!a) return false;
  if (!b) return false;
  if (typeof a !== "object") return false;
  if (typeof b !== "object") return false;
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  const { length } = aKeys;
  if (bKeys.length !== length) return false;
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
  if (Array.isArray(arg)) return !arg.length;
  if (isObject(arg)) return !Object.keys(arg).length;
  if (arg == null) return true;
  if (arg === "") return true;
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
  const result = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__/* .__spreadValues */ .IA)({}, object);
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
  if (condition) return;
  if (typeof message !== "string") throw new Error("Invariant failed");
  throw new Error(message);
}
function getKeys(obj) {
  return Object.keys(obj);
}
function isFalsyBooleanCallback(booleanOrCallback, ...args) {
  const result = typeof booleanOrCallback === "function" ? booleanOrCallback(...args) : booleanOrCallback;
  if (result == null) return false;
  return !result;
}
function disabledFromProps(props) {
  return props.disabled || props["aria-disabled"] === true || props["aria-disabled"] === "true";
}
function removeUndefinedValues(obj) {
  const result = {};
  for (const key in obj) {
    if (obj[key] !== void 0) {
      result[key] = obj[key];
    }
  }
  return result;
}
function defaultValue(...values) {
  for (const value of values) {
    if (value !== void 0) return value;
  }
  return void 0;
}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/US4USQPI.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CN: () => (/* binding */ isTouchDevice),
/* harmony export */   cX: () => (/* binding */ isMac),
/* harmony export */   f8: () => (/* binding */ isApple),
/* harmony export */   gm: () => (/* binding */ isFirefox),
/* harmony export */   nr: () => (/* binding */ isSafari)
/* harmony export */ });
/* harmony import */ var _HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js");
"use client";


// src/utils/platform.ts
function isTouchDevice() {
  return _HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__/* .canUseDOM */ .Sw && !!navigator.maxTouchPoints;
}
function isApple() {
  if (!_HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__/* .canUseDOM */ .Sw) return false;
  return /mac|iphone|ipad|ipod/i.test(navigator.platform);
}
function isSafari() {
  return _HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__/* .canUseDOM */ .Sw && isApple() && /apple/i.test(navigator.vendor);
}
function isFirefox() {
  return _HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__/* .canUseDOM */ .Sw && /firefox\//i.test(navigator.userAgent);
}
function isMac() {
  return _HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__/* .canUseDOM */ .Sw && navigator.platform.startsWith("Mac") && !isTouchDevice();
}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/YOHCVXJB.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ createDialogStore)
/* harmony export */ });
/* harmony import */ var _6E4KKOSB_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/6E4KKOSB.js");
"use client";


// src/dialog/dialog-store.ts
function createDialogStore(props = {}) {
  return (0,_6E4KKOSB_js__WEBPACK_IMPORTED_MODULE_0__/* .createDisclosureStore */ .h)(props);
}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/utils/events.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* unused harmony exports fireFocusEvent, getInputType */
/* harmony import */ var _chunks_US4USQPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/US4USQPI.js");
/* harmony import */ var _chunks_HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js");
/* harmony import */ var _chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js");
"use client";




// src/utils/events.ts
function isPortalEvent(event) {
  return Boolean(
    event.currentTarget && !(0,_chunks_HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__/* .contains */ .gR)(event.currentTarget, event.target)
  );
}
function isSelfTarget(event) {
  return event.target === event.currentTarget;
}
function isOpeningInNewTab(event) {
  const element = event.currentTarget;
  if (!element) return false;
  const isAppleDevice = (0,_chunks_US4USQPI_js__WEBPACK_IMPORTED_MODULE_1__/* .isApple */ .f8)();
  if (isAppleDevice && !event.metaKey) return false;
  if (!isAppleDevice && !event.ctrlKey) return false;
  const tagName = element.tagName.toLowerCase();
  if (tagName === "a") return true;
  if (tagName === "button" && element.type === "submit") return true;
  if (tagName === "input" && element.type === "submit") return true;
  return false;
}
function isDownloading(event) {
  const element = event.currentTarget;
  if (!element) return false;
  const tagName = element.tagName.toLowerCase();
  if (!event.altKey) return false;
  if (tagName === "a") return true;
  if (tagName === "button" && element.type === "submit") return true;
  if (tagName === "input" && element.type === "submit") return true;
  return false;
}
function fireEvent(element, type, eventInit) {
  const event = new Event(type, eventInit);
  return element.dispatchEvent(event);
}
function fireBlurEvent(element, eventInit) {
  const event = new FocusEvent("blur", eventInit);
  const defaultAllowed = element.dispatchEvent(event);
  const bubbleInit = (0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadProps */ .ko)((0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadValues */ .IA)({}, eventInit), { bubbles: true });
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
  return !relatedTarget || !(0,_chunks_HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__/* .contains */ .gR)(containerElement, relatedTarget);
}
function getInputType(event) {
  const nativeEvent = "nativeEvent" in event ? event.nativeEvent : event;
  if (!nativeEvent) return;
  if (!("inputType" in nativeEvent)) return;
  if (typeof nativeEvent.inputType !== "string") return;
  return nativeEvent.inputType;
}
function queueBeforeEvent(element, type, callback, timeout) {
  const createTimer = (callback2) => {
    if (timeout) {
      const timerId2 = setTimeout(callback2, timeout);
      return () => clearTimeout(timerId2);
    }
    const timerId = requestAnimationFrame(callback2);
    return () => cancelAnimationFrame(timerId);
  };
  const cancelTimer = createTimer(() => {
    element.removeEventListener(type, callSync, true);
    callback();
  });
  const callSync = () => {
    cancelTimer();
    callback();
  };
  element.addEventListener(type, callSync, { once: true, capture: true });
  return cancelTimer;
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
    for (const remove of children) {
      remove();
    }
  };
  return removeEventListener;
}



/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/utils/focus.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _chunks_HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js");
/* harmony import */ var _chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js");
"use client";



// src/utils/focus.ts
var selector = "input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], summary, iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false'])";
function hasNegativeTabIndex(element) {
  const tabIndex = Number.parseInt(element.getAttribute("tabindex") || "0", 10);
  return tabIndex < 0;
}
function isFocusable(element) {
  if (!element.matches(selector)) return false;
  if (!(0,_chunks_HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__/* .isVisible */ .zN)(element)) return false;
  if (element.closest("[inert]")) return false;
  return true;
}
function isTabbable(element) {
  if (!isFocusable(element)) return false;
  if (hasNegativeTabIndex(element)) return false;
  if (!("form" in element)) return true;
  if (!element.form) return true;
  if (element.checked) return true;
  if (element.type !== "radio") return true;
  const radioGroup = element.form.elements.namedItem(element.name);
  if (!radioGroup) return true;
  if (!("length" in radioGroup)) return true;
  const activeElement = (0,_chunks_HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__/* .getActiveElement */ .bq)(element);
  if (!activeElement) return true;
  if (activeElement === element) return true;
  if (!("form" in activeElement)) return true;
  if (activeElement.form !== element.form) return true;
  if (activeElement.name !== element.name) return true;
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
    if ((0,_chunks_HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__/* .isFrame */ .qt)(element) && element.contentDocument) {
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
    if ((0,_chunks_HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__/* .isFrame */ .qt)(element) && element.contentDocument) {
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
  const activeElement = (0,_chunks_HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__/* .getActiveElement */ .bq)(container);
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
  const activeElement = (0,_chunks_HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__/* .getActiveElement */ .bq)(container);
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
    element = element.closest(selector);
  }
  return element || null;
}
function hasFocus(element) {
  const activeElement = (0,_chunks_HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__/* .getActiveElement */ .bq)(element);
  if (!activeElement) return false;
  if (activeElement === element) return true;
  const activeDescendant = activeElement.getAttribute("aria-activedescendant");
  if (!activeDescendant) return false;
  return activeDescendant === element.id;
}
function hasFocusWithin(element) {
  const activeElement = (0,_chunks_HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__/* .getActiveElement */ .bq)(element);
  if (!activeElement) return false;
  if ((0,_chunks_HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__/* .contains */ .gR)(element, activeElement)) return true;
  const activeDescendant = activeElement.getAttribute("aria-activedescendant");
  if (!activeDescendant) return false;
  if (!("id" in element)) return false;
  if (activeDescendant === element.id) return true;
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
  for (const element of tabbableElements) {
    disableFocus(element);
  }
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
  for (const element of elements) {
    restoreTabIndex(element);
  }
}
function focusIntoView(element, options) {
  if (!("scrollIntoView" in element)) {
    element.focus();
  } else {
    element.focus({ preventScroll: true });
    element.scrollIntoView((0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadValues */ .IA)({ block: "nearest", inline: "nearest" }, options));
  }
}



/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/2GXGCHW6.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O$: () => (/* binding */ useStoreState),
/* harmony export */   Pj: () => (/* binding */ useStore),
/* harmony export */   Tz: () => (/* binding */ useStoreProps)
/* harmony export */ });
/* harmony import */ var _Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/Z32BISHQ.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var _ariakit_core_utils_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/EQQLU3CG.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var use_sync_external_store_shim_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/use-sync-external-store@1.2.0_react@18.3.1/node_modules/use-sync-external-store/shim/index.js");
"use client";



// src/utils/store.tsx




var { useSyncExternalStore } = use_sync_external_store_shim_index_js__WEBPACK_IMPORTED_MODULE_1__;
var noopSubscribe = () => () => {
};
function useStoreState(store, keyOrSelector = _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__/* .identity */ .D_) {
  const storeSubscribe = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (callback) => {
      if (!store) return noopSubscribe();
      return (0,_ariakit_core_utils_store__WEBPACK_IMPORTED_MODULE_3__/* .subscribe */ .B1)(store, null, callback);
    },
    [store]
  );
  const getSnapshot = () => {
    const key = typeof keyOrSelector === "string" ? keyOrSelector : null;
    const selector = typeof keyOrSelector === "function" ? keyOrSelector : null;
    const state = store == null ? void 0 : store.getState();
    if (selector) return selector(state);
    if (!state) return;
    if (!key) return;
    if (!(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__/* .hasOwnProperty */ .mQ)(state, key)) return;
    return state[key];
  };
  return useSyncExternalStore(storeSubscribe, getSnapshot, getSnapshot);
}
function useStoreProps(store, props, key, setKey) {
  const value = (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__/* .hasOwnProperty */ .mQ)(props, key) ? props[key] : void 0;
  const setValue = setKey ? props[setKey] : void 0;
  const propsRef = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__/* .useLiveRef */ .hX)({ value, setValue });
  (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__/* .useSafeLayoutEffect */ .UQ)(() => {
    return (0,_ariakit_core_utils_store__WEBPACK_IMPORTED_MODULE_3__/* .sync */ .OH)(store, [key], (state, prev) => {
      const { value: value2, setValue: setValue2 } = propsRef.current;
      if (!setValue2) return;
      if (state[key] === prev[key]) return;
      if (state[key] === value2) return;
      setValue2(state[key]);
    });
  }, [store, key]);
  (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__/* .useSafeLayoutEffect */ .UQ)(() => {
    if (value === void 0) return;
    store.setState(key, value);
    return (0,_ariakit_core_utils_store__WEBPACK_IMPORTED_MODULE_3__/* .batch */ .vA)(store, [key], () => {
      if (value === void 0) return;
      store.setState(key, value);
    });
  });
}
function useStore(createStore, props) {
  const [store, setStore] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => createStore(props));
  (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__/* .useSafeLayoutEffect */ .UQ)(() => (0,_ariakit_core_utils_store__WEBPACK_IMPORTED_MODULE_3__/* .init */ .Ts)(store), [store]);
  const useState2 = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (keyOrSelector) => useStoreState(store, keyOrSelector),
    [store]
  );
  const memoizedStore = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_5__/* .__spreadProps */ .ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_5__/* .__spreadValues */ .IA)({}, store), { useState: useState2 }),
    [store, useState2]
  );
  const updateStore = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__/* .useEvent */ ._q)(() => {
    setStore((store2) => createStore((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_5__/* .__spreadValues */ .IA)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_5__/* .__spreadValues */ .IA)({}, props), store2.getState())));
  });
  return [memoizedStore, updateStore];
}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3CCTMYB6.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ useCompositeItem),
/* harmony export */   l: () => (/* binding */ CompositeItem)
/* harmony export */ });
/* harmony import */ var _PLQDTVXM_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/PLQDTVXM.js");
/* harmony import */ var _NAXN2XAB_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/NAXN2XAB.js");
/* harmony import */ var _5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/5VQZOHHZ.js");
/* harmony import */ var _WENSINUV_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/WENSINUV.js");
/* harmony import */ var _HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js");
/* harmony import */ var _2GXGCHW6_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/2GXGCHW6.js");
/* harmony import */ var _Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/Z32BISHQ.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
/* harmony import */ var _ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js");
/* harmony import */ var _ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/utils/events.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var _ariakit_core_utils_platform__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/US4USQPI.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
"use client";









// src/composite/composite-item.tsx






var TagName = "button";
function isEditableElement(element) {
  if ((0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__/* .isTextbox */ .Bj)(element)) return true;
  return element.tagName === "INPUT" && !(0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__/* .isButton */ .Bm)(element);
}
function getNextPageOffset(scrollingElement, pageUp = false) {
  const height = scrollingElement.clientHeight;
  const { top } = scrollingElement.getBoundingClientRect();
  const pageSize = Math.max(height * 0.875, height - 40) * 1.5;
  const pageOffset = pageUp ? height - pageSize + top : pageSize + top;
  if (scrollingElement.tagName === "HTML") {
    return pageOffset + scrollingElement.scrollTop;
  }
  return pageOffset;
}
function getItemOffset(itemElement, pageUp = false) {
  const { top } = itemElement.getBoundingClientRect();
  if (pageUp) {
    return top + itemElement.clientHeight;
  }
  return top;
}
function findNextPageItemId(element, store, next, pageUp = false) {
  var _a;
  if (!store) return;
  if (!next) return;
  const { renderedItems } = store.getState();
  const scrollingElement = (0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__/* .getScrollingElement */ .qj)(element);
  if (!scrollingElement) return;
  const nextPageOffset = getNextPageOffset(scrollingElement, pageUp);
  let id;
  let prevDifference;
  for (let i = 0; i < renderedItems.length; i += 1) {
    const previousId = id;
    id = next(i);
    if (!id) break;
    if (id === previousId) continue;
    const itemElement = (_a = (0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_3__/* .getEnabledItem */ .hZ)(store, id)) == null ? void 0 : _a.element;
    if (!itemElement) continue;
    const itemOffset = getItemOffset(itemElement, pageUp);
    const difference = itemOffset - nextPageOffset;
    const absDifference = Math.abs(difference);
    if (pageUp && difference <= 0 || !pageUp && difference >= 0) {
      if (prevDifference !== void 0 && prevDifference < absDifference) {
        id = previousId;
      }
      break;
    }
    prevDifference = absDifference;
  }
  return id;
}
function targetIsAnotherItem(event, store) {
  if ((0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__/* .isSelfTarget */ .uh)(event)) return false;
  return (0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_3__/* .isItem */ .WZ)(store, event.target);
}
var useCompositeItem = (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_5__/* .createHook */ .ab)(
  function useCompositeItem2(_a) {
    var _b = _a, {
      store,
      rowId: rowIdProp,
      preventScrollOnKeyDown = false,
      moveOnKeyPress = true,
      tabbable = false,
      getItem: getItemProp,
      "aria-setsize": ariaSetSizeProp,
      "aria-posinset": ariaPosInSetProp
    } = _b, props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_6__/* .__objRest */ .YG)(_b, [
      "store",
      "rowId",
      "preventScrollOnKeyDown",
      "moveOnKeyPress",
      "tabbable",
      "getItem",
      "aria-setsize",
      "aria-posinset"
    ]);
    const context = (0,_WENSINUV_js__WEBPACK_IMPORTED_MODULE_7__/* .useCompositeContext */ .k)();
    store = store || context;
    const id = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_8__/* .useId */ .Bi)(props.id);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const row = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_WENSINUV_js__WEBPACK_IMPORTED_MODULE_7__/* .CompositeRowContext */ .$o);
    const rowId = (0,_2GXGCHW6_js__WEBPACK_IMPORTED_MODULE_9__/* .useStoreState */ .O$)(store, (state) => {
      if (rowIdProp) return rowIdProp;
      if (!state) return;
      if (!(row == null ? void 0 : row.baseElement)) return;
      if (row.baseElement !== state.baseElement) return;
      return row.id;
    });
    const disabled = (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_10__/* .disabledFromProps */ .$f)(props);
    const trulyDisabled = disabled && !props.accessibleWhenDisabled;
    const getItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
      (item) => {
        const nextItem = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_6__/* .__spreadProps */ .ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_6__/* .__spreadValues */ .IA)({}, item), {
          id: id || item.id,
          rowId,
          disabled: !!trulyDisabled
        });
        if (getItemProp) {
          return getItemProp(nextItem);
        }
        return nextItem;
      },
      [id, rowId, trulyDisabled, getItemProp]
    );
    const onFocusProp = props.onFocus;
    const hasFocusedComposite = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const onFocus = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_8__/* .useEvent */ ._q)((event) => {
      onFocusProp == null ? void 0 : onFocusProp(event);
      if (event.defaultPrevented) return;
      if ((0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__/* .isPortalEvent */ .ho)(event)) return;
      if (!id) return;
      if (!store) return;
      if (targetIsAnotherItem(event, store)) return;
      const { virtualFocus, baseElement: baseElement2 } = store.getState();
      store.setActiveId(id);
      if ((0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__/* .isTextbox */ .Bj)(event.currentTarget)) {
        (0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_3__/* .selectTextField */ .iT)(event.currentTarget);
      }
      if (!virtualFocus) return;
      if (!(0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__/* .isSelfTarget */ .uh)(event)) return;
      if (isEditableElement(event.currentTarget)) return;
      if (!(baseElement2 == null ? void 0 : baseElement2.isConnected)) return;
      if ((0,_ariakit_core_utils_platform__WEBPACK_IMPORTED_MODULE_11__/* .isSafari */ .nr)() && event.currentTarget.hasAttribute("data-autofocus")) {
        event.currentTarget.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        });
      }
      hasFocusedComposite.current = true;
      const fromComposite = event.relatedTarget === baseElement2 || (0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_3__/* .isItem */ .WZ)(store, event.relatedTarget);
      if (fromComposite) {
        (0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_3__/* .focusSilently */ .hk)(baseElement2);
      } else {
        baseElement2.focus();
      }
    });
    const onBlurCaptureProp = props.onBlurCapture;
    const onBlurCapture = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_8__/* .useEvent */ ._q)((event) => {
      onBlurCaptureProp == null ? void 0 : onBlurCaptureProp(event);
      if (event.defaultPrevented) return;
      const state = store == null ? void 0 : store.getState();
      if ((state == null ? void 0 : state.virtualFocus) && hasFocusedComposite.current) {
        hasFocusedComposite.current = false;
        event.preventDefault();
        event.stopPropagation();
      }
    });
    const onKeyDownProp = props.onKeyDown;
    const preventScrollOnKeyDownProp = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_8__/* .useBooleanEvent */ .O4)(preventScrollOnKeyDown);
    const moveOnKeyPressProp = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_8__/* .useBooleanEvent */ .O4)(moveOnKeyPress);
    const onKeyDown = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_8__/* .useEvent */ ._q)((event) => {
      onKeyDownProp == null ? void 0 : onKeyDownProp(event);
      if (event.defaultPrevented) return;
      if (!(0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__/* .isSelfTarget */ .uh)(event)) return;
      if (!store) return;
      const { currentTarget } = event;
      const state = store.getState();
      const item = store.item(id);
      const isGrid = !!(item == null ? void 0 : item.rowId);
      const isVertical = state.orientation !== "horizontal";
      const isHorizontal = state.orientation !== "vertical";
      const canHomeEnd = () => {
        if (isGrid) return true;
        if (isHorizontal) return true;
        if (!state.baseElement) return true;
        if (!(0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__/* .isTextField */ .mB)(state.baseElement)) return true;
        return false;
      };
      const keyMap = {
        ArrowUp: (isGrid || isVertical) && store.up,
        ArrowRight: (isGrid || isHorizontal) && store.next,
        ArrowDown: (isGrid || isVertical) && store.down,
        ArrowLeft: (isGrid || isHorizontal) && store.previous,
        Home: () => {
          if (!canHomeEnd()) return;
          if (!isGrid || event.ctrlKey) {
            return store == null ? void 0 : store.first();
          }
          return store == null ? void 0 : store.previous(-1);
        },
        End: () => {
          if (!canHomeEnd()) return;
          if (!isGrid || event.ctrlKey) {
            return store == null ? void 0 : store.last();
          }
          return store == null ? void 0 : store.next(-1);
        },
        PageUp: () => {
          return findNextPageItemId(currentTarget, store, store == null ? void 0 : store.up, true);
        },
        PageDown: () => {
          return findNextPageItemId(currentTarget, store, store == null ? void 0 : store.down);
        }
      };
      const action = keyMap[event.key];
      if (action) {
        if ((0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__/* .isTextbox */ .Bj)(currentTarget)) {
          const selection = (0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__/* .getTextboxSelection */ .Zy)(currentTarget);
          const isLeft = isHorizontal && event.key === "ArrowLeft";
          const isRight = isHorizontal && event.key === "ArrowRight";
          const isUp = isVertical && event.key === "ArrowUp";
          const isDown = isVertical && event.key === "ArrowDown";
          if (isRight || isDown) {
            const { length: valueLength } = (0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__/* .getTextboxValue */ .Mk)(currentTarget);
            if (selection.end !== valueLength) return;
          } else if ((isLeft || isUp) && selection.start !== 0) return;
        }
        const nextId = action();
        if (preventScrollOnKeyDownProp(event) || nextId !== void 0) {
          if (!moveOnKeyPressProp(event)) return;
          event.preventDefault();
          store.move(nextId);
        }
      }
    });
    const baseElement = (0,_2GXGCHW6_js__WEBPACK_IMPORTED_MODULE_9__/* .useStoreState */ .O$)(
      store,
      (state) => (state == null ? void 0 : state.baseElement) || void 0
    );
    const providerValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
      () => ({ id, baseElement }),
      [id, baseElement]
    );
    props = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_8__/* .useWrapElement */ .w7)(
      props,
      (element) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_WENSINUV_js__WEBPACK_IMPORTED_MODULE_7__/* .CompositeItemContext */ .U0.Provider, { value: providerValue, children: element }),
      [providerValue]
    );
    const isActiveItem = (0,_2GXGCHW6_js__WEBPACK_IMPORTED_MODULE_9__/* .useStoreState */ .O$)(
      store,
      (state) => !!state && state.activeId === id
    );
    const ariaSetSize = (0,_2GXGCHW6_js__WEBPACK_IMPORTED_MODULE_9__/* .useStoreState */ .O$)(store, (state) => {
      if (ariaSetSizeProp != null) return ariaSetSizeProp;
      if (!state) return;
      if (!(row == null ? void 0 : row.ariaSetSize)) return;
      if (row.baseElement !== state.baseElement) return;
      return row.ariaSetSize;
    });
    const ariaPosInSet = (0,_2GXGCHW6_js__WEBPACK_IMPORTED_MODULE_9__/* .useStoreState */ .O$)(store, (state) => {
      if (ariaPosInSetProp != null) return ariaPosInSetProp;
      if (!state) return;
      if (!(row == null ? void 0 : row.ariaPosInSet)) return;
      if (row.baseElement !== state.baseElement) return;
      const itemsInRow = state.renderedItems.filter(
        (item) => item.rowId === rowId
      );
      return row.ariaPosInSet + itemsInRow.findIndex((item) => item.id === id);
    });
    const isTabbable = (0,_2GXGCHW6_js__WEBPACK_IMPORTED_MODULE_9__/* .useStoreState */ .O$)(store, (state) => {
      if (!(state == null ? void 0 : state.renderedItems.length)) return true;
      if (state.virtualFocus) return false;
      if (tabbable) return true;
      return state.activeId === id;
    });
    props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_6__/* .__spreadProps */ .ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_6__/* .__spreadValues */ .IA)({
      id,
      "data-active-item": isActiveItem || void 0
    }, props), {
      ref: (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_8__/* .useMergeRefs */ .SV)(ref, props.ref),
      tabIndex: isTabbable ? props.tabIndex : -1,
      onFocus,
      onBlurCapture,
      onKeyDown
    });
    props = (0,_NAXN2XAB_js__WEBPACK_IMPORTED_MODULE_12__/* .useCommand */ .D)(props);
    props = (0,_PLQDTVXM_js__WEBPACK_IMPORTED_MODULE_13__/* .useCollectionItem */ .v)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_6__/* .__spreadProps */ .ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_6__/* .__spreadValues */ .IA)({
      store
    }, props), {
      getItem,
      shouldRegisterItem: id ? props.shouldRegisterItem : false
    }));
    return (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_10__/* .removeUndefinedValues */ .HR)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_6__/* .__spreadProps */ .ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_6__/* .__spreadValues */ .IA)({}, props), {
      "aria-setsize": ariaSetSize,
      "aria-posinset": ariaPosInSet
    }));
  }
);
var CompositeItem = (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_5__/* .memo */ .ph)(
  (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_5__/* .forwardRef */ .Rf)(function CompositeItem2(props) {
    const htmlProps = useCompositeItem(props);
    return (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_5__/* .createElement */ .n)(TagName, htmlProps);
  })
);




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/54MGSIOI.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s1: () => (/* binding */ PopoverScopedContextProvider),
/* harmony export */   wf: () => (/* binding */ PopoverContextProvider),
/* harmony export */   zG: () => (/* binding */ usePopoverProviderContext)
/* harmony export */ });
/* unused harmony exports usePopoverContext, usePopoverScopedContext */
/* harmony import */ var _DU4D3UCJ_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/DU4D3UCJ.js");
/* harmony import */ var _HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js");
"use client";



// src/popover/popover-context.tsx
var ctx = (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_0__/* .createStoreContext */ .B0)(
  [_DU4D3UCJ_js__WEBPACK_IMPORTED_MODULE_1__/* .DialogContextProvider */ .Zg],
  [_DU4D3UCJ_js__WEBPACK_IMPORTED_MODULE_1__/* .DialogScopedContextProvider */ .XP]
);
var usePopoverContext = ctx.useContext;
var usePopoverScopedContext = ctx.useScopedContext;
var usePopoverProviderContext = ctx.useProviderContext;
var PopoverContextProvider = ctx.ContextProvider;
var PopoverScopedContextProvider = ctx.ScopedContextProvider;




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/5VQZOHHZ.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Qh: () => (/* binding */ silentlyFocused),
/* harmony export */   WZ: () => (/* binding */ isItem),
/* harmony export */   _d: () => (/* binding */ flipItems),
/* harmony export */   es: () => (/* binding */ groupItemsByRows),
/* harmony export */   hZ: () => (/* binding */ getEnabledItem),
/* harmony export */   hk: () => (/* binding */ focusSilently),
/* harmony export */   iT: () => (/* binding */ selectTextField),
/* harmony export */   oi: () => (/* binding */ findFirstEnabledItem)
/* harmony export */ });
/* harmony import */ var _ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js");
"use client";

// src/composite/utils.ts

var NULL_ITEM = { id: null };
function flipItems(items, activeId, shouldInsertNullItem = false) {
  const index = items.findIndex((item) => item.id === activeId);
  return [
    ...items.slice(index + 1),
    ...shouldInsertNullItem ? [NULL_ITEM] : [],
    ...items.slice(0, index)
  ];
}
function findFirstEnabledItem(items, excludeId) {
  return items.find((item) => {
    if (excludeId) {
      return !item.disabled && item.id !== excludeId;
    }
    return !item.disabled;
  });
}
function getEnabledItem(store, id) {
  if (!id) return null;
  return store.item(id) || null;
}
function groupItemsByRows(items) {
  const rows = [];
  for (const item of items) {
    const row = rows.find((currentRow) => {
      var _a;
      return ((_a = currentRow[0]) == null ? void 0 : _a.rowId) === item.rowId;
    });
    if (row) {
      row.push(item);
    } else {
      rows.push([item]);
    }
  }
  return rows;
}
function selectTextField(element, collapseToEnd = false) {
  if ((0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_0__/* .isTextField */ .mB)(element)) {
    element.setSelectionRange(
      collapseToEnd ? element.value.length : 0,
      element.value.length
    );
  } else if (element.isContentEditable) {
    const selection = (0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_0__/* .getDocument */ .YE)(element).getSelection();
    selection == null ? void 0 : selection.selectAllChildren(element);
    if (collapseToEnd) {
      selection == null ? void 0 : selection.collapseToEnd();
    }
  }
}
var FOCUS_SILENTLY = Symbol("FOCUS_SILENTLY");
function focusSilently(element) {
  element[FOCUS_SILENTLY] = true;
  element.focus({ preventScroll: true });
}
function silentlyFocused(element) {
  const isSilentlyFocused = element[FOCUS_SILENTLY];
  delete element[FOCUS_SILENTLY];
  return isSilentlyFocused;
}
function isItem(store, element, exclude) {
  if (!element) return false;
  if (element === exclude) return false;
  const item = store.item(element.id);
  if (!item) return false;
  if (exclude && item.element === exclude) return false;
  return true;
}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/AXRBYZQP.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ Role)
/* harmony export */ });
/* unused harmony export useRole */
/* harmony import */ var _HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js");
"use client";


// src/role/role.tsx
var TagName = "div";
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
  "summary",
  "textarea",
  "ul",
  "svg"
];
var useRole = (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_0__/* .createHook */ .ab)(
  function useRole2(props) {
    return props;
  }
);
var Role = (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_0__/* .forwardRef */ .Rf)(
  // @ts-expect-error
  function Role2(props) {
    return (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_0__/* .createElement */ .n)(TagName, props);
  }
);
Object.assign(
  Role,
  elements.reduce((acc, element) => {
    acc[element] = (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_0__/* .forwardRef */ .Rf)(function Role3(props) {
      return (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_0__/* .createElement */ .n)(element, props);
    });
    return acc;
  }, {})
);




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/BSEL4YAF.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aT: () => (/* binding */ useDisclosureContent),
/* harmony export */   dK: () => (/* binding */ isHidden)
/* harmony export */ });
/* unused harmony export DisclosureContent */
/* harmony import */ var _DU4D3UCJ_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/DU4D3UCJ.js");
/* harmony import */ var _RGUP62TM_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/RGUP62TM.js");
/* harmony import */ var _HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js");
/* harmony import */ var _2GXGCHW6_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/2GXGCHW6.js");
/* harmony import */ var _Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/Z32BISHQ.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
"use client";







// src/disclosure/disclosure-content.tsx




var TagName = "div";
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
    const multiplier = currentTimeString.endsWith("ms") ? 1 : 1e3;
    const currentTime = Number.parseFloat(currentTimeString || "0s") * multiplier;
    if (currentTime > longestTime) return currentTime;
    return longestTime;
  }, 0);
}
function isHidden(mounted, hidden, alwaysVisible) {
  return !alwaysVisible && hidden !== false && (!mounted || !!hidden);
}
var useDisclosureContent = (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_3__/* .createHook */ .ab)(function useDisclosureContent2(_a) {
  var _b = _a, { store, alwaysVisible } = _b, props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__/* .__objRest */ .YG)(_b, ["store", "alwaysVisible"]);
  const context = (0,_RGUP62TM_js__WEBPACK_IMPORTED_MODULE_5__/* .useDisclosureProviderContext */ .vO)();
  store = store || context;
  (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_6__/* .invariant */ .V1)(
    store,
     false && 0
  );
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const id = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_7__/* .useId */ .Bi)(props.id);
  const [transition, setTransition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const open = store.useState("open");
  const mounted = store.useState("mounted");
  const animated = store.useState("animated");
  const contentElement = store.useState("contentElement");
  const otherElement = (0,_2GXGCHW6_js__WEBPACK_IMPORTED_MODULE_8__/* .useStoreState */ .O$)(store.disclosure, "contentElement");
  (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_7__/* .useSafeLayoutEffect */ .UQ)(() => {
    if (!ref.current) return;
    store == null ? void 0 : store.setContentElement(ref.current);
  }, [store]);
  (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_7__/* .useSafeLayoutEffect */ .UQ)(() => {
    let previousAnimated;
    store == null ? void 0 : store.setState("animated", (animated2) => {
      previousAnimated = animated2;
      return true;
    });
    return () => {
      if (previousAnimated === void 0) return;
      store == null ? void 0 : store.setState("animated", previousAnimated);
    };
  }, [store]);
  (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_7__/* .useSafeLayoutEffect */ .UQ)(() => {
    if (!animated) return;
    if (!(contentElement == null ? void 0 : contentElement.isConnected)) {
      setTransition(null);
      return;
    }
    return afterPaint(() => {
      setTransition(open ? "enter" : mounted ? "leave" : null);
    });
  }, [animated, contentElement, open, mounted]);
  (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_7__/* .useSafeLayoutEffect */ .UQ)(() => {
    if (!store) return;
    if (!animated) return;
    const stopAnimation = () => store == null ? void 0 : store.setState("animating", false);
    const stopAnimationSync = () => (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)(stopAnimation);
    if (!transition || !contentElement) {
      stopAnimation();
      return;
    }
    if (transition === "leave" && open) return;
    if (transition === "enter" && !open) return;
    if (typeof animated === "number") {
      const timeout2 = animated;
      return afterTimeout(timeout2, stopAnimationSync);
    }
    const {
      transitionDuration,
      animationDuration,
      transitionDelay,
      animationDelay
    } = getComputedStyle(contentElement);
    const {
      transitionDuration: transitionDuration2 = "0",
      animationDuration: animationDuration2 = "0",
      transitionDelay: transitionDelay2 = "0",
      animationDelay: animationDelay2 = "0"
    } = otherElement ? getComputedStyle(otherElement) : {};
    const delay = parseCSSTime(
      transitionDelay,
      animationDelay,
      transitionDelay2,
      animationDelay2
    );
    const duration = parseCSSTime(
      transitionDuration,
      animationDuration,
      transitionDuration2,
      animationDuration2
    );
    const timeout = delay + duration;
    if (!timeout) {
      if (transition === "enter") {
        store.setState("animated", false);
      }
      stopAnimation();
      return;
    }
    const frameRate = 1e3 / 60;
    const maxTimeout = Math.max(timeout - frameRate, 0);
    return afterTimeout(maxTimeout, stopAnimationSync);
  }, [store, animated, contentElement, otherElement, open, transition]);
  props = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_7__/* .useWrapElement */ .w7)(
    props,
    (element) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_DU4D3UCJ_js__WEBPACK_IMPORTED_MODULE_9__/* .DialogScopedContextProvider */ .XP, { value: store, children: element }),
    [store]
  );
  const hidden = isHidden(mounted, props.hidden, alwaysVisible);
  const styleProp = props.style;
  const style = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (hidden) return (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__/* .__spreadProps */ .ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__/* .__spreadValues */ .IA)({}, styleProp), { display: "none" });
    return styleProp;
  }, [hidden, styleProp]);
  props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__/* .__spreadProps */ .ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__/* .__spreadValues */ .IA)({
    id,
    "data-open": open || void 0,
    "data-enter": transition === "enter" || void 0,
    "data-leave": transition === "leave" || void 0,
    hidden
  }, props), {
    ref: (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_7__/* .useMergeRefs */ .SV)(id ? store.setContentElement : null, ref, props.ref),
    style
  });
  return (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_6__/* .removeUndefinedValues */ .HR)(props);
});
var DisclosureContentImpl = (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_3__/* .forwardRef */ .Rf)(function DisclosureContentImpl2(props) {
  const htmlProps = useDisclosureContent(props);
  return (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_3__/* .createElement */ .n)(TagName, htmlProps);
});
var DisclosureContent = (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_3__/* .forwardRef */ .Rf)(function DisclosureContent2(_a) {
  var _b = _a, {
    unmountOnHide
  } = _b, props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__/* .__objRest */ .YG)(_b, [
    "unmountOnHide"
  ]);
  const context = (0,_RGUP62TM_js__WEBPACK_IMPORTED_MODULE_5__/* .useDisclosureProviderContext */ .vO)();
  const store = props.store || context;
  const mounted = (0,_2GXGCHW6_js__WEBPACK_IMPORTED_MODULE_8__/* .useStoreState */ .O$)(
    store,
    (state) => !unmountOnHide || (state == null ? void 0 : state.mounted)
  );
  if (mounted === false) return null;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DisclosureContentImpl, (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__/* .__spreadValues */ .IA)({}, props));
});




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/CBC47ZYL.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ usePopoverStoreProps)
/* harmony export */ });
/* unused harmony export usePopoverStore */
/* harmony import */ var _QYS5FHDY_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/QYS5FHDY.js");
/* harmony import */ var _2GXGCHW6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/2GXGCHW6.js");
/* harmony import */ var _Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/Z32BISHQ.js");
"use client";




// src/popover/popover-store.ts

function usePopoverStoreProps(store, update, props) {
  (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_0__/* .useUpdateEffect */ .w5)(update, [props.popover]);
  (0,_2GXGCHW6_js__WEBPACK_IMPORTED_MODULE_1__/* .useStoreProps */ .Tz)(store, props, "placement");
  return (0,_QYS5FHDY_js__WEBPACK_IMPORTED_MODULE_2__/* .useDialogStoreProps */ .N)(store, update, props);
}
function usePopoverStore(props = {}) {
  const [store, update] = useStore(Core.createPopoverStore, props);
  return usePopoverStoreProps(store, update, props);
}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/CTQR3VDU.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Kw: () => (/* binding */ useHovercardProviderContext),
/* harmony export */   n0: () => (/* binding */ HovercardScopedContextProvider),
/* harmony export */   pR: () => (/* binding */ HovercardContextProvider)
/* harmony export */ });
/* unused harmony exports useHovercardContext, useHovercardScopedContext */
/* harmony import */ var _54MGSIOI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/54MGSIOI.js");
/* harmony import */ var _HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js");
"use client";



// src/hovercard/hovercard-context.tsx
var ctx = (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_0__/* .createStoreContext */ .B0)(
  [_54MGSIOI_js__WEBPACK_IMPORTED_MODULE_1__/* .PopoverContextProvider */ .wf],
  [_54MGSIOI_js__WEBPACK_IMPORTED_MODULE_1__/* .PopoverScopedContextProvider */ .s1]
);
var useHovercardContext = ctx.useContext;
var useHovercardScopedContext = ctx.useScopedContext;
var useHovercardProviderContext = ctx.useProviderContext;
var HovercardContextProvider = ctx.ContextProvider;
var HovercardScopedContextProvider = ctx.ScopedContextProvider;




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/DU4D3UCJ.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XP: () => (/* binding */ DialogScopedContextProvider),
/* harmony export */   YH: () => (/* binding */ DialogHeadingContext),
/* harmony export */   Zg: () => (/* binding */ DialogContextProvider),
/* harmony export */   cH: () => (/* binding */ useDialogProviderContext),
/* harmony export */   oL: () => (/* binding */ DialogDescriptionContext)
/* harmony export */ });
/* unused harmony exports useDialogContext, useDialogScopedContext */
/* harmony import */ var _RGUP62TM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/RGUP62TM.js");
/* harmony import */ var _HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
"use client";



// src/dialog/dialog-context.tsx

var ctx = (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__/* .createStoreContext */ .B0)(
  [_RGUP62TM_js__WEBPACK_IMPORTED_MODULE_2__/* .DisclosureContextProvider */ .sI],
  [_RGUP62TM_js__WEBPACK_IMPORTED_MODULE_2__/* .DisclosureScopedContextProvider */ .WT]
);
var useDialogContext = ctx.useContext;
var useDialogScopedContext = ctx.useScopedContext;
var useDialogProviderContext = ctx.useProviderContext;
var DialogContextProvider = ctx.ContextProvider;
var DialogScopedContextProvider = ctx.ScopedContextProvider;
var DialogHeadingContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);
var DialogDescriptionContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/FMYQNSCK.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $I: () => (/* binding */ useCollectionContext),
/* harmony export */   LN: () => (/* binding */ CollectionContextProvider),
/* harmony export */   zX: () => (/* binding */ CollectionScopedContextProvider)
/* harmony export */ });
/* unused harmony exports useCollectionScopedContext, useCollectionProviderContext */
/* harmony import */ var _HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js");
"use client";


// src/collection/collection-context.tsx
var ctx = (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_0__/* .createStoreContext */ .B0)();
var useCollectionContext = ctx.useContext;
var useCollectionScopedContext = ctx.useScopedContext;
var useCollectionProviderContext = ctx.useProviderContext;
var CollectionContextProvider = ctx.ContextProvider;
var CollectionScopedContextProvider = ctx.ScopedContextProvider;




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HGZKAGPL.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ useFocusable)
/* harmony export */ });
/* unused harmony export Focusable */
/* harmony import */ var _SWN3JYXT_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/SWN3JYXT.js");
/* harmony import */ var _HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js");
/* harmony import */ var _Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/Z32BISHQ.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
/* harmony import */ var _ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js");
/* harmony import */ var _ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/utils/events.js");
/* harmony import */ var _ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/utils/focus.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var _ariakit_core_utils_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/US4USQPI.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
"use client";





// src/focusable/focusable.tsx






var TagName = "div";
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
  if (tagName === "TEXTAREA" && !readOnly) return true;
  if (tagName === "SELECT" && !readOnly) return true;
  if (tagName === "INPUT" && !readOnly) {
    return alwaysFocusVisibleInputTypes.includes(type);
  }
  if (element.isContentEditable) return true;
  const role = element.getAttribute("role");
  if (role === "combobox" && element.dataset.name) {
    return true;
  }
  return false;
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
  if (!tagName) return true;
  return tagName === "button" || tagName === "summary" || tagName === "input" || tagName === "select" || tagName === "textarea" || tagName === "a";
}
function supportsDisabledAttribute(tagName) {
  if (!tagName) return true;
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
  return (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_2__/* .useEvent */ ._q)((event) => {
    onEvent == null ? void 0 : onEvent(event);
    if (event.defaultPrevented) return;
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
  if (event.metaKey) return;
  if (event.ctrlKey) return;
  if (event.altKey) return;
  isKeyboardModality = true;
}
var useFocusable = (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_3__/* .createHook */ .ab)(
  function useFocusable2(_a) {
    var _b = _a, {
      focusable = true,
      accessibleWhenDisabled,
      autoFocus,
      onFocusVisible
    } = _b, props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__/* .__objRest */ .YG)(_b, [
      "focusable",
      "accessibleWhenDisabled",
      "autoFocus",
      "onFocusVisible"
    ]);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      if (!focusable) return;
      (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__/* .addGlobalEventListener */ .dg)("mousedown", onGlobalMouseDown, true);
      (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__/* .addGlobalEventListener */ .dg)("keydown", onGlobalKeyDown, true);
    }, [focusable]);
    if (isSafariBrowser) {
      (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!focusable) return;
        const element = ref.current;
        if (!element) return;
        if (!isNativeCheckboxOrRadio(element)) return;
        const labels = getLabels(element);
        if (!labels) return;
        const onMouseUp = () => queueMicrotask(() => element.focus());
        for (const label of labels) {
          label.addEventListener("mouseup", onMouseUp);
        }
        return () => {
          for (const label of labels) {
            label.removeEventListener("mouseup", onMouseUp);
          }
        };
      }, [focusable]);
    }
    const disabled = focusable && (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_6__/* .disabledFromProps */ .$f)(props);
    const trulyDisabled = !!disabled && !accessibleWhenDisabled;
    const [focusVisible, setFocusVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      if (!focusable) return;
      if (trulyDisabled && focusVisible) {
        setFocusVisible(false);
      }
    }, [focusable, trulyDisabled, focusVisible]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      if (!focusable) return;
      if (!focusVisible) return;
      const element = ref.current;
      if (!element) return;
      if (typeof IntersectionObserver === "undefined") return;
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
    const onMouseDown = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_2__/* .useEvent */ ._q)((event) => {
      onMouseDownProp == null ? void 0 : onMouseDownProp(event);
      if (event.defaultPrevented) return;
      if (!focusable) return;
      const element = event.currentTarget;
      if (!isSafariBrowser) return;
      if ((0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__/* .isPortalEvent */ .ho)(event)) return;
      if (!(0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_8__/* .isButton */ .Bm)(element) && !isNativeCheckboxOrRadio(element)) return;
      let receivedFocus = false;
      const onFocus = () => {
        receivedFocus = true;
      };
      const options = { capture: true, once: true };
      element.addEventListener("focusin", onFocus, options);
      (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__/* .queueBeforeEvent */ .nz)(element, "mouseup", () => {
        element.removeEventListener("focusin", onFocus, true);
        if (receivedFocus) return;
        (0,_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_7__/* .focusIfNeeded */ ["do"])(element);
      });
    });
    const handleFocusVisible = (event, currentTarget) => {
      if (currentTarget) {
        event.currentTarget = currentTarget;
      }
      if (!focusable) return;
      const element = event.currentTarget;
      if (!element) return;
      if (!(0,_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_7__/* .hasFocus */ .AJ)(element)) return;
      onFocusVisible == null ? void 0 : onFocusVisible(event);
      if (event.defaultPrevented) return;
      setFocusVisible(true);
    };
    const onKeyDownCaptureProp = props.onKeyDownCapture;
    const onKeyDownCapture = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_2__/* .useEvent */ ._q)((event) => {
      onKeyDownCaptureProp == null ? void 0 : onKeyDownCaptureProp(event);
      if (event.defaultPrevented) return;
      if (!focusable) return;
      if (focusVisible) return;
      if (event.metaKey) return;
      if (event.altKey) return;
      if (event.ctrlKey) return;
      if (!(0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__/* .isSelfTarget */ .uh)(event)) return;
      const element = event.currentTarget;
      const applyFocusVisible = () => handleFocusVisible(event, element);
      (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__/* .queueBeforeEvent */ .nz)(element, "focusout", applyFocusVisible);
    });
    const onFocusCaptureProp = props.onFocusCapture;
    const onFocusCapture = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_2__/* .useEvent */ ._q)((event) => {
      onFocusCaptureProp == null ? void 0 : onFocusCaptureProp(event);
      if (event.defaultPrevented) return;
      if (!focusable) return;
      if (!(0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__/* .isSelfTarget */ .uh)(event)) {
        setFocusVisible(false);
        return;
      }
      const element = event.currentTarget;
      const applyFocusVisible = () => handleFocusVisible(event, element);
      if (isKeyboardModality || isAlwaysFocusVisible(event.target)) {
        (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__/* .queueBeforeEvent */ .nz)(event.target, "focusout", applyFocusVisible);
      } else {
        setFocusVisible(false);
      }
    });
    const onBlurProp = props.onBlur;
    const onBlur = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_2__/* .useEvent */ ._q)((event) => {
      onBlurProp == null ? void 0 : onBlurProp(event);
      if (!focusable) return;
      if (!(0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__/* .isFocusEventOutside */ .aG)(event)) return;
      setFocusVisible(false);
    });
    const autoFocusOnShow = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_SWN3JYXT_js__WEBPACK_IMPORTED_MODULE_9__/* .FocusableContext */ .g);
    const autoFocusRef = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_2__/* .useEvent */ ._q)((element) => {
      if (!focusable) return;
      if (!autoFocus) return;
      if (!element) return;
      if (!autoFocusOnShow) return;
      queueMicrotask(() => {
        if ((0,_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_7__/* .hasFocus */ .AJ)(element)) return;
        if (!(0,_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_7__/* .isFocusable */ .tp)(element)) return;
        element.focus();
      });
    });
    const tagName = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_2__/* .useTagName */ .vO)(ref);
    const nativeTabbable = focusable && isNativeTabbable(tagName);
    const supportsDisabled = focusable && supportsDisabledAttribute(tagName);
    const styleProp = props.style;
    const style = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
      if (trulyDisabled) {
        return (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__/* .__spreadValues */ .IA)({ pointerEvents: "none" }, styleProp);
      }
      return styleProp;
    }, [trulyDisabled, styleProp]);
    props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__/* .__spreadProps */ .ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__/* .__spreadValues */ .IA)({
      "data-focus-visible": focusable && focusVisible || void 0,
      "data-autofocus": autoFocus || void 0,
      "aria-disabled": disabled || void 0
    }, props), {
      ref: (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_2__/* .useMergeRefs */ .SV)(ref, autoFocusRef, props.ref),
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
    return (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_6__/* .removeUndefinedValues */ .HR)(props);
  }
);
var Focusable = (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_3__/* .forwardRef */ .Rf)(function Focusable2(props) {
  const htmlProps = useFocusable(props);
  return (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_3__/* .createElement */ .n)(TagName, htmlProps);
});




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B0: () => (/* binding */ createStoreContext),
/* harmony export */   Rf: () => (/* binding */ forwardRef2),
/* harmony export */   ab: () => (/* binding */ createHook),
/* harmony export */   n: () => (/* binding */ createElement),
/* harmony export */   ph: () => (/* binding */ memo2)
/* harmony export */ });
/* harmony import */ var _Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/Z32BISHQ.js");
/* harmony import */ var _SK3NAZA3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/SK3NAZA3.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
"use client";




// src/utils/system.tsx


function forwardRef2(render) {
  const Role = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => render((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadProps */ .ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadValues */ .IA)({}, props), { ref })));
  Role.displayName = render.displayName || render.name;
  return Role;
}
function memo2(Component, propsAreEqual) {
  return react__WEBPACK_IMPORTED_MODULE_0__.memo(Component, propsAreEqual);
}
function createElement(Type, props) {
  const _a = props, { wrapElement, render } = _a, rest = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__/* .__objRest */ .YG)(_a, ["wrapElement", "render"]);
  const mergedRef = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_3__/* .useMergeRefs */ .SV)(props.ref, (0,_SK3NAZA3_js__WEBPACK_IMPORTED_MODULE_4__/* .getRefProperty */ .v1)(render));
  let element;
  if (react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(render)) {
    const renderProps = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadProps */ .ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadValues */ .IA)({}, render.props), { ref: mergedRef });
    element = react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(render, (0,_SK3NAZA3_js__WEBPACK_IMPORTED_MODULE_4__/* .mergeProps */ .v6)(rest, renderProps));
  } else if (render) {
    element = render(rest);
  } else {
    element = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Type, (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadValues */ .IA)({}, rest));
  }
  if (wrapElement) {
    return wrapElement(element);
  }
  return element;
}
function createHook(useProps) {
  const useRole = (props = {}) => {
    return useProps(props);
  };
  useRole.displayName = useProps.name;
  return useRole;
}
function createStoreContext(providers = [], scopedProviders = []) {
  const context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0);
  const scopedContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0);
  const useContext2 = () => react__WEBPACK_IMPORTED_MODULE_0__.useContext(context);
  const useScopedContext = (onlyScoped = false) => {
    const scoped = react__WEBPACK_IMPORTED_MODULE_0__.useContext(scopedContext);
    const store = useContext2();
    if (onlyScoped) return scoped;
    return scoped || store;
  };
  const useProviderContext = () => {
    const scoped = react__WEBPACK_IMPORTED_MODULE_0__.useContext(scopedContext);
    const store = useContext2();
    if (scoped && scoped === store) return;
    return store;
  };
  const ContextProvider = (props) => {
    return providers.reduceRight(
      (children, Provider) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Provider, (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadProps */ .ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadValues */ .IA)({}, props), { children })),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(context.Provider, (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadValues */ .IA)({}, props))
    );
  };
  const ScopedContextProvider = (props) => {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ContextProvider, (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadProps */ .ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadValues */ .IA)({}, props), { children: scopedProviders.reduceRight(
      (children, Provider) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Provider, (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadProps */ .ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadValues */ .IA)({}, props), { children })),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(scopedContext.Provider, (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadValues */ .IA)({}, props))
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

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HQFKUKP3.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* binding */ useHovercard)
});

// UNUSED EXPORTS: Hovercard

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/X7QOZUD3.js
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
        if (where === 0) return true;
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
        if (where === 0) return true;
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
    } else if (y === yi && (x >= xj && x <= xi || x >= xi && x <= xj)) {
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



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/TT2355LN.js + 21 modules
var TT2355LN = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/TT2355LN.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/54MGSIOI.js
var _54MGSIOI = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/54MGSIOI.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js
var HKOOKEDE = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/Z32BISHQ.js
var Z32BISHQ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/Z32BISHQ.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js
var _3YLGPPWQ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js
var PBFD2E7P = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@floating-ui+core@1.5.2/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
var floating_ui_core = __webpack_require__("../../node_modules/.pnpm/@floating-ui+core@1.5.2/node_modules/@floating-ui/core/dist/floating-ui.core.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@floating-ui+dom@1.5.3/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs + 1 modules
var floating_ui_dom = __webpack_require__("../../node_modules/.pnpm/@floating-ui+dom@1.5.3/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/JS55N6L7.js
"use client";






// src/popover/popover.tsx




var TagName = "div";
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
  return (0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, rect), { toJSON: () => rect });
}
function getDOMRect(anchorRect) {
  if (!anchorRect) return createDOMRect();
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
  if (props.flip === false) return;
  const fallbackPlacements = typeof props.flip === "string" ? props.flip.split(" ") : void 0;
  (0,PBFD2E7P/* invariant */.V1)(
    !fallbackPlacements || fallbackPlacements.every(isValidPlacement),
     false && 0
  );
  return (0,floating_ui_core/* flip */.UU)({
    padding: props.overflowPadding,
    fallbackPlacements
  });
}
function getShiftMiddleware(props) {
  if (!props.slide && !props.overlap) return;
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
  if (!arrowElement) return;
  return (0,floating_ui_core/* arrow */.UE)({
    element: arrowElement,
    padding: props.arrowPadding
  });
}
var usePopover = (0,HKOOKEDE/* createHook */.ab)(
  function usePopover2(_a) {
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
    } = _b, props = (0,_3YLGPPWQ/* __objRest */.YG)(_b, [
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
    const context = (0,_54MGSIOI/* usePopoverProviderContext */.zG)();
    store = store || context;
    (0,PBFD2E7P/* invariant */.V1)(
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
    const defaultArrowElementRef = (0,react.useRef)(null);
    const [positioned, setPositioned] = (0,react.useState)(false);
    const { portalRef, domReady } = (0,Z32BISHQ/* usePortalRef */.TE)(portal, props.portalRef);
    const getAnchorRectProp = (0,Z32BISHQ/* useEvent */._q)(getAnchorRect);
    const updatePositionProp = (0,Z32BISHQ/* useEvent */._q)(updatePosition);
    const hasCustomUpdatePosition = !!updatePosition;
    (0,Z32BISHQ/* useSafeLayoutEffect */.UQ)(() => {
      if (!(popoverElement == null ? void 0 : popoverElement.isConnected)) return;
      popoverElement.style.setProperty(
        "--popover-overflow-padding",
        `${overflowPadding}px`
      );
      const anchor = getAnchorElement(anchorElement, getAnchorRectProp);
      const updatePosition2 = async () => {
        if (!mounted) return;
        if (!arrowElement) {
          defaultArrowElementRef.current = defaultArrowElementRef.current || document.createElement("div");
        }
        const arrow2 = arrowElement || defaultArrowElementRef.current;
        const middleware = [
          getOffsetMiddleware(arrow2, { gutter, shift: shift2 }),
          getFlipMiddleware({ flip: flip2, overflowPadding }),
          getShiftMiddleware({ slide, shift: shift2, overlap, overflowPadding }),
          getArrowMiddleware(arrow2, { arrowPadding }),
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
        if (arrow2 && pos.middlewareData.arrow) {
          const { x: arrowX, y: arrowY } = pos.middlewareData.arrow;
          const side = pos.placement.split("-")[0];
          const centerX = arrow2.clientWidth / 2;
          const centerY = arrow2.clientHeight / 2;
          const originX = arrowX != null ? arrowX + centerX : -centerX;
          const originY = arrowY != null ? arrowY + centerY : -centerY;
          popoverElement.style.setProperty(
            "--popover-transform-origin",
            {
              top: `${originX}px calc(100% + ${centerY}px)`,
              bottom: `${originX}px ${-centerY}px`,
              left: `calc(100% + ${centerX}px) ${originY}px`,
              right: `${-centerX}px ${originY}px`
            }[side]
          );
          Object.assign(arrow2.style, {
            left: arrowX != null ? `${arrowX}px` : "",
            top: arrowY != null ? `${arrowY}px` : "",
            [side]: "100%"
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
    (0,Z32BISHQ/* useSafeLayoutEffect */.UQ)(() => {
      if (!mounted) return;
      if (!domReady) return;
      if (!(popoverElement == null ? void 0 : popoverElement.isConnected)) return;
      if (!(contentElement == null ? void 0 : contentElement.isConnected)) return;
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
    props = (0,Z32BISHQ/* useWrapElement */.w7)(
      props,
      (element) => /* @__PURE__ */ (0,jsx_runtime.jsx)(
        "div",
        (0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, wrapperProps), {
          style: (0,_3YLGPPWQ/* __spreadValues */.IA)({
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
    props = (0,Z32BISHQ/* useWrapElement */.w7)(
      props,
      (element) => /* @__PURE__ */ (0,jsx_runtime.jsx)(_54MGSIOI/* PopoverScopedContextProvider */.s1, { value: store, children: element }),
      [store]
    );
    props = (0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({
      // data-placing is not part of the public API. We're setting this here so
      // we can wait for the popover to be positioned before other components
      // move focus into it. For example, this attribute is observed by the
      // Combobox component with the autoSelect behavior.
      "data-placing": !positioned || void 0
    }, props), {
      style: (0,_3YLGPPWQ/* __spreadValues */.IA)({
        position: "relative"
      }, props.style)
    });
    props = (0,TT2355LN/* useDialog */.sp)((0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({
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
var Popover = (0,TT2355LN/* createDialogComponent */.AV)(
  (0,HKOOKEDE/* forwardRef */.Rf)(function Popover2(props) {
    const htmlProps = usePopover(props);
    return (0,HKOOKEDE/* createElement */.n)(TagName, htmlProps);
  }),
  _54MGSIOI/* usePopoverProviderContext */.zG
);



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/CTQR3VDU.js
var CTQR3VDU = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/CTQR3VDU.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js
var HWOIWM4O = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/utils/events.js
var events = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/utils/events.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/utils/focus.js
var utils_focus = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/utils/focus.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/EQQLU3CG.js
var EQQLU3CG = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/EQQLU3CG.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HQFKUKP3.js
"use client";








// src/hovercard/hovercard.tsx







var HQFKUKP3_TagName = "div";
function isMovingOnHovercard(target, card, anchor, nested) {
  if ((0,utils_focus/* hasFocusWithin */.oW)(card)) return true;
  if (!target) return false;
  if ((0,HWOIWM4O/* contains */.gR)(card, target)) return true;
  if (anchor && (0,HWOIWM4O/* contains */.gR)(anchor, target)) return true;
  if (nested == null ? void 0 : nested.some((card2) => isMovingOnHovercard(target, card2, anchor))) {
    return true;
  }
  return false;
}
function useAutoFocusOnHide(_a) {
  var _b = _a, {
    store
  } = _b, props = (0,_3YLGPPWQ/* __objRest */.YG)(_b, [
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
  const onFocus = (0,Z32BISHQ/* useEvent */._q)((event) => {
    onFocusProp == null ? void 0 : onFocusProp(event);
    if (event.defaultPrevented) return;
    setAutoFocusOnHide(true);
  });
  const finalFocusRef = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    return (0,EQQLU3CG/* sync */.OH)(store, ["anchorElement"], (state) => {
      finalFocusRef.current = state.anchorElement;
    });
  }, []);
  props = (0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({
    autoFocusOnHide,
    finalFocus: finalFocusRef
  }, props), {
    onFocus
  });
  return props;
}
var NestedHovercardContext = (0,react.createContext)(null);
var useHovercard = (0,HKOOKEDE/* createHook */.ab)(
  function useHovercard2(_a) {
    var _b = _a, {
      store,
      modal = false,
      portal = !!modal,
      hideOnEscape = true,
      hideOnHoverOutside = true,
      disablePointerEventsOnApproach = !!hideOnHoverOutside
    } = _b, props = (0,_3YLGPPWQ/* __objRest */.YG)(_b, [
      "store",
      "modal",
      "portal",
      "hideOnEscape",
      "hideOnHoverOutside",
      "disablePointerEventsOnApproach"
    ]);
    const context = (0,CTQR3VDU/* useHovercardProviderContext */.Kw)();
    store = store || context;
    (0,PBFD2E7P/* invariant */.V1)(
      store,
       false && 0
    );
    const ref = (0,react.useRef)(null);
    const [nestedHovercards, setNestedHovercards] = (0,react.useState)([]);
    const hideTimeoutRef = (0,react.useRef)(0);
    const enterPointRef = (0,react.useRef)(null);
    const { portalRef, domReady } = (0,Z32BISHQ/* usePortalRef */.TE)(portal, props.portalRef);
    const isMouseMoving = (0,Z32BISHQ/* useIsMouseMoving */.P$)();
    const mayHideOnHoverOutside = !!hideOnHoverOutside;
    const hideOnHoverOutsideProp = (0,Z32BISHQ/* useBooleanEvent */.O4)(hideOnHoverOutside);
    const mayDisablePointerEvents = !!disablePointerEventsOnApproach;
    const disablePointerEventsProp = (0,Z32BISHQ/* useBooleanEvent */.O4)(
      disablePointerEventsOnApproach
    );
    const open = store.useState("open");
    const mounted = store.useState("mounted");
    (0,react.useEffect)(() => {
      if (!domReady) return;
      if (!mounted) return;
      if (!mayHideOnHoverOutside && !mayDisablePointerEvents) return;
      const element = ref.current;
      if (!element) return;
      const onMouseMove = (event) => {
        if (!store) return;
        if (!isMouseMoving()) return;
        const { anchorElement, hideTimeout, timeout } = store.getState();
        const enterPoint = enterPointRef.current;
        const [target] = event.composedPath();
        const anchor = anchorElement;
        if (isMovingOnHovercard(target, element, anchor, nestedHovercards)) {
          enterPointRef.current = target && anchor && (0,HWOIWM4O/* contains */.gR)(anchor, target) ? getEventPoint(event) : null;
          window.clearTimeout(hideTimeoutRef.current);
          hideTimeoutRef.current = 0;
          return;
        }
        if (hideTimeoutRef.current) return;
        if (enterPoint) {
          const currentPoint = getEventPoint(event);
          const polygon = getElementPolygon(element, enterPoint);
          if (isPointInPolygon(currentPoint, polygon)) {
            enterPointRef.current = currentPoint;
            if (!disablePointerEventsProp(event)) return;
            event.preventDefault();
            event.stopPropagation();
            return;
          }
        }
        if (!hideOnHoverOutsideProp(event)) return;
        hideTimeoutRef.current = window.setTimeout(() => {
          hideTimeoutRef.current = 0;
          store == null ? void 0 : store.hide();
        }, hideTimeout != null ? hideTimeout : timeout);
      };
      return (0,PBFD2E7P/* chain */.cy)(
        (0,events/* addGlobalEventListener */.dg)("mousemove", onMouseMove, true),
        () => clearTimeout(hideTimeoutRef.current)
      );
    }, [
      store,
      isMouseMoving,
      domReady,
      mounted,
      mayHideOnHoverOutside,
      mayDisablePointerEvents,
      nestedHovercards,
      disablePointerEventsProp,
      hideOnHoverOutsideProp
    ]);
    (0,react.useEffect)(() => {
      if (!domReady) return;
      if (!mounted) return;
      if (!mayDisablePointerEvents) return;
      const disableEvent = (event) => {
        const element = ref.current;
        if (!element) return;
        const enterPoint = enterPointRef.current;
        if (!enterPoint) return;
        const polygon = getElementPolygon(element, enterPoint);
        if (isPointInPolygon(getEventPoint(event), polygon)) {
          if (!disablePointerEventsProp(event)) return;
          event.preventDefault();
          event.stopPropagation();
        }
      };
      return (0,PBFD2E7P/* chain */.cy)(
        // Note: we may need to add pointer events here in the future.
        (0,events/* addGlobalEventListener */.dg)("mouseenter", disableEvent, true),
        (0,events/* addGlobalEventListener */.dg)("mouseover", disableEvent, true),
        (0,events/* addGlobalEventListener */.dg)("mouseout", disableEvent, true),
        (0,events/* addGlobalEventListener */.dg)("mouseleave", disableEvent, true)
      );
    }, [domReady, mounted, mayDisablePointerEvents, disablePointerEventsProp]);
    (0,react.useEffect)(() => {
      if (!domReady) return;
      if (open) return;
      store == null ? void 0 : store.setAutoFocusOnShow(false);
    }, [store, domReady, open]);
    const openRef = (0,Z32BISHQ/* useLiveRef */.hX)(open);
    (0,react.useEffect)(() => {
      if (!domReady) return;
      return () => {
        if (!openRef.current) {
          store == null ? void 0 : store.setAutoFocusOnShow(false);
        }
      };
    }, [store, domReady]);
    const registerOnParent = (0,react.useContext)(NestedHovercardContext);
    (0,Z32BISHQ/* useSafeLayoutEffect */.UQ)(() => {
      if (modal) return;
      if (!portal) return;
      if (!mounted) return;
      if (!domReady) return;
      const element = ref.current;
      if (!element) return;
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
    props = (0,Z32BISHQ/* useWrapElement */.w7)(
      props,
      (element) => /* @__PURE__ */ (0,jsx_runtime.jsx)(CTQR3VDU/* HovercardScopedContextProvider */.n0, { value: store, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(NestedHovercardContext.Provider, { value: registerNestedHovercard, children: element }) }),
      [store, registerNestedHovercard]
    );
    props = (0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, props), {
      ref: (0,Z32BISHQ/* useMergeRefs */.SV)(ref, props.ref)
    });
    props = useAutoFocusOnHide((0,_3YLGPPWQ/* __spreadValues */.IA)({ store }, props));
    const autoFocusOnShow = store.useState(
      (state) => modal || state.autoFocusOnShow
    );
    props = usePopover((0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({
      store,
      modal,
      portal,
      autoFocusOnShow
    }, props), {
      portalRef,
      hideOnEscape(event) {
        if ((0,PBFD2E7P/* isFalsyBooleanCallback */.zO)(hideOnEscape, event)) return false;
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
var Hovercard = (0,TT2355LN/* createDialogComponent */.AV)(
  (0,HKOOKEDE/* forwardRef */.Rf)(function Hovercard2(props) {
    const htmlProps = useHovercard(props);
    return (0,HKOOKEDE/* createElement */.n)(HQFKUKP3_TagName, htmlProps);
  }),
  CTQR3VDU/* useHovercardProviderContext */.Kw
);




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/K7FXVWIT.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ Radio),
/* harmony export */   z: () => (/* binding */ useRadio)
/* harmony export */ });
/* harmony import */ var _SOKV3TSX_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/SOKV3TSX.js");
/* harmony import */ var _3CCTMYB6_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3CCTMYB6.js");
/* harmony import */ var _HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js");
/* harmony import */ var _2GXGCHW6_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/2GXGCHW6.js");
/* harmony import */ var _Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/Z32BISHQ.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
"use client";







// src/radio/radio.tsx


var TagName = "input";
function getIsChecked(value, storeValue) {
  if (storeValue === void 0) return;
  if (value != null && storeValue != null) {
    return storeValue === value;
  }
  return !!storeValue;
}
function isNativeRadio(tagName, type) {
  return tagName === "input" && (!type || type === "radio");
}
var useRadio = (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__/* .createHook */ .ab)(function useRadio2(_a) {
  var _b = _a, {
    store,
    name,
    value,
    checked
  } = _b, props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__/* .__objRest */ .YG)(_b, [
    "store",
    "name",
    "value",
    "checked"
  ]);
  const context = (0,_SOKV3TSX_js__WEBPACK_IMPORTED_MODULE_3__/* .useRadioContext */ .c4)();
  store = store || context;
  const id = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__/* .useId */ .Bi)(props.id);
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const isChecked = (0,_2GXGCHW6_js__WEBPACK_IMPORTED_MODULE_5__/* .useStoreState */ .O$)(
    store,
    (state) => checked != null ? checked : getIsChecked(value, state == null ? void 0 : state.value)
  );
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!id) return;
    if (!isChecked) return;
    const isActiveItem = (store == null ? void 0 : store.getState().activeId) === id;
    if (isActiveItem) return;
    store == null ? void 0 : store.setActiveId(id);
  }, [store, isChecked, id]);
  const onChangeProp = props.onChange;
  const tagName = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__/* .useTagName */ .vO)(ref, TagName);
  const nativeRadio = isNativeRadio(tagName, props.type);
  const disabled = (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_6__/* .disabledFromProps */ .$f)(props);
  const [propertyUpdated, schedulePropertyUpdate] = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__/* .useForceUpdate */ .CH)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const element = ref.current;
    if (!element) return;
    if (nativeRadio) return;
    if (isChecked !== void 0) {
      element.checked = isChecked;
    }
    if (name !== void 0) {
      element.name = name;
    }
    if (value !== void 0) {
      element.value = `${value}`;
    }
  }, [propertyUpdated, nativeRadio, isChecked, name, value]);
  const onChange = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__/* .useEvent */ ._q)((event) => {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (!nativeRadio) {
      event.currentTarget.checked = true;
      schedulePropertyUpdate();
    }
    onChangeProp == null ? void 0 : onChangeProp(event);
    if (event.defaultPrevented) return;
    store == null ? void 0 : store.setValue(value);
  });
  const onClickProp = props.onClick;
  const onClick = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__/* .useEvent */ ._q)((event) => {
    onClickProp == null ? void 0 : onClickProp(event);
    if (event.defaultPrevented) return;
    if (nativeRadio) return;
    onChange(event);
  });
  const onFocusProp = props.onFocus;
  const onFocus = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__/* .useEvent */ ._q)((event) => {
    onFocusProp == null ? void 0 : onFocusProp(event);
    if (event.defaultPrevented) return;
    if (!nativeRadio) return;
    if (!store) return;
    const { moves, activeId } = store.getState();
    if (!moves) return;
    if (id && activeId !== id) return;
    onChange(event);
  });
  props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadProps */ .ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadValues */ .IA)({
    id,
    role: !nativeRadio ? "radio" : void 0,
    type: nativeRadio ? "radio" : void 0,
    "aria-checked": isChecked
  }, props), {
    ref: (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__/* .useMergeRefs */ .SV)(ref, props.ref),
    onChange,
    onClick,
    onFocus
  });
  props = (0,_3CCTMYB6_js__WEBPACK_IMPORTED_MODULE_7__/* .useCompositeItem */ .k)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadValues */ .IA)({
    store,
    clickOnEnter: !nativeRadio
  }, props));
  return (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_6__/* .removeUndefinedValues */ .HR)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadValues */ .IA)({
    name: nativeRadio ? name : void 0,
    value: nativeRadio ? value : void 0,
    checked: isChecked
  }, props));
});
var Radio = (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__/* .memo */ .ph)(
  (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__/* .forwardRef */ .Rf)(function Radio2(props) {
    const htmlProps = useRadio(props);
    return (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__/* .createElement */ .n)(TagName, htmlProps);
  })
);




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/KGK2TTFO.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ useDisclosureStore),
/* harmony export */   W: () => (/* binding */ useDisclosureStoreProps)
/* harmony export */ });
/* harmony import */ var _2GXGCHW6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/2GXGCHW6.js");
/* harmony import */ var _Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/Z32BISHQ.js");
/* harmony import */ var _ariakit_core_disclosure_disclosure_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/6E4KKOSB.js");
"use client";



// src/disclosure/disclosure-store.ts

function useDisclosureStoreProps(store, update, props) {
  (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_0__/* .useUpdateEffect */ .w5)(update, [props.store, props.disclosure]);
  (0,_2GXGCHW6_js__WEBPACK_IMPORTED_MODULE_1__/* .useStoreProps */ .Tz)(store, props, "open", "setOpen");
  (0,_2GXGCHW6_js__WEBPACK_IMPORTED_MODULE_1__/* .useStoreProps */ .Tz)(store, props, "mounted", "setMounted");
  (0,_2GXGCHW6_js__WEBPACK_IMPORTED_MODULE_1__/* .useStoreProps */ .Tz)(store, props, "animated");
  return Object.assign(store, { disclosure: props.disclosure });
}
function useDisclosureStore(props = {}) {
  const [store, update] = (0,_2GXGCHW6_js__WEBPACK_IMPORTED_MODULE_1__/* .useStore */ .Pj)(_ariakit_core_disclosure_disclosure_store__WEBPACK_IMPORTED_MODULE_2__/* .createDisclosureStore */ .h, props);
  return useDisclosureStoreProps(store, update, props);
}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/NAXN2XAB.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ useCommand)
/* harmony export */ });
/* unused harmony export Command */
/* harmony import */ var _HGZKAGPL_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HGZKAGPL.js");
/* harmony import */ var _HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js");
/* harmony import */ var _Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/Z32BISHQ.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
/* harmony import */ var _ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js");
/* harmony import */ var _ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/utils/events.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var _ariakit_core_utils_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/US4USQPI.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
"use client";





// src/command/command.tsx





var TagName = "button";
function isNativeClick(event) {
  if (!event.isTrusted) return false;
  const element = event.currentTarget;
  if (event.key === "Enter") {
    return (0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_1__/* .isButton */ .Bm)(element) || element.tagName === "SUMMARY" || element.tagName === "A";
  }
  if (event.key === " ") {
    return (0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_1__/* .isButton */ .Bm)(element) || element.tagName === "SUMMARY" || element.tagName === "INPUT" || element.tagName === "SELECT";
  }
  return false;
}
var symbol = Symbol("command");
var useCommand = (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_2__/* .createHook */ .ab)(
  function useCommand2(_a) {
    var _b = _a, { clickOnEnter = true, clickOnSpace = true } = _b, props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__/* .__objRest */ .YG)(_b, ["clickOnEnter", "clickOnSpace"]);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const tagName = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__/* .useTagName */ .vO)(ref);
    const type = props.type;
    const [isNativeButton, setIsNativeButton] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(
      () => !!tagName && (0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_1__/* .isButton */ .Bm)({ tagName, type })
    );
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      if (!ref.current) return;
      setIsNativeButton((0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_1__/* .isButton */ .Bm)(ref.current));
    }, []);
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const activeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const disabled = (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__/* .disabledFromProps */ .$f)(props);
    const [isDuplicate, metadataProps] = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__/* .useMetadataProps */ .P1)(props, symbol, true);
    const onKeyDownProp = props.onKeyDown;
    const onKeyDown = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__/* .useEvent */ ._q)((event) => {
      onKeyDownProp == null ? void 0 : onKeyDownProp(event);
      const element = event.currentTarget;
      if (event.defaultPrevented) return;
      if (isDuplicate) return;
      if (disabled) return;
      if (!(0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_6__/* .isSelfTarget */ .uh)(event)) return;
      if ((0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_1__/* .isTextField */ .mB)(element)) return;
      if (element.isContentEditable) return;
      const isEnter = clickOnEnter && event.key === "Enter";
      const isSpace = clickOnSpace && event.key === " ";
      const shouldPreventEnter = event.key === "Enter" && !clickOnEnter;
      const shouldPreventSpace = event.key === " " && !clickOnSpace;
      if (shouldPreventEnter || shouldPreventSpace) {
        event.preventDefault();
        return;
      }
      if (isEnter || isSpace) {
        const nativeClick = isNativeClick(event);
        if (isEnter) {
          if (!nativeClick) {
            event.preventDefault();
            const _a2 = event, { view } = _a2, eventInit = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__/* .__objRest */ .YG)(_a2, ["view"]);
            const click = () => (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_6__/* .fireClickEvent */ .hY)(element, eventInit);
            if ((0,_ariakit_core_utils_platform__WEBPACK_IMPORTED_MODULE_7__/* .isFirefox */ .gm)()) {
              (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_6__/* .queueBeforeEvent */ .nz)(element, "keyup", click);
            } else {
              queueMicrotask(click);
            }
          }
        } else if (isSpace) {
          activeRef.current = true;
          if (!nativeClick) {
            event.preventDefault();
            setActive(true);
          }
        }
      }
    });
    const onKeyUpProp = props.onKeyUp;
    const onKeyUp = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__/* .useEvent */ ._q)((event) => {
      onKeyUpProp == null ? void 0 : onKeyUpProp(event);
      if (event.defaultPrevented) return;
      if (isDuplicate) return;
      if (disabled) return;
      if (event.metaKey) return;
      const isSpace = clickOnSpace && event.key === " ";
      if (activeRef.current && isSpace) {
        activeRef.current = false;
        if (!isNativeClick(event)) {
          event.preventDefault();
          setActive(false);
          const element = event.currentTarget;
          const _a2 = event, { view } = _a2, eventInit = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__/* .__objRest */ .YG)(_a2, ["view"]);
          queueMicrotask(() => (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_6__/* .fireClickEvent */ .hY)(element, eventInit));
        }
      }
    });
    props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__/* .__spreadProps */ .ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__/* .__spreadValues */ .IA)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__/* .__spreadValues */ .IA)({
      "data-active": active || void 0,
      type: isNativeButton ? "button" : void 0
    }, metadataProps), props), {
      ref: (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__/* .useMergeRefs */ .SV)(ref, props.ref),
      onKeyDown,
      onKeyUp
    });
    props = (0,_HGZKAGPL_js__WEBPACK_IMPORTED_MODULE_8__/* .useFocusable */ .W)(props);
    return props;
  }
);
var Command = (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_2__/* .forwardRef */ .Rf)(function Command2(props) {
  const htmlProps = useCommand(props);
  return (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_2__/* .createElement */ .n)(TagName, htmlProps);
});




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/PLQDTVXM.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ useCollectionItem)
/* harmony export */ });
/* unused harmony export CollectionItem */
/* harmony import */ var _FMYQNSCK_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/FMYQNSCK.js");
/* harmony import */ var _HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js");
/* harmony import */ var _Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/Z32BISHQ.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
"use client";





// src/collection/collection-item.tsx


var TagName = "div";
var useCollectionItem = (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__/* .createHook */ .ab)(
  function useCollectionItem2(_a) {
    var _b = _a, {
      store,
      shouldRegisterItem = true,
      getItem = _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__/* .identity */ .D_,
      element: element
    } = _b, props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__/* .__objRest */ .YG)(_b, [
      "store",
      "shouldRegisterItem",
      "getItem",
      // @ts-expect-error This prop may come from a collection renderer.
      "element"
    ]);
    const context = (0,_FMYQNSCK_js__WEBPACK_IMPORTED_MODULE_4__/* .useCollectionContext */ .$I)();
    store = store || context;
    const id = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_5__/* .useId */ .Bi)(props.id);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(element);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      const element2 = ref.current;
      if (!id) return;
      if (!element2) return;
      if (!shouldRegisterItem) return;
      const item = getItem({ id, element: element2 });
      return store == null ? void 0 : store.renderItem(item);
    }, [id, shouldRegisterItem, getItem, store]);
    props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__/* .__spreadProps */ .ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__/* .__spreadValues */ .IA)({}, props), {
      ref: (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_5__/* .useMergeRefs */ .SV)(ref, props.ref)
    });
    return (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__/* .removeUndefinedValues */ .HR)(props);
  }
);
var CollectionItem = (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__/* .forwardRef */ .Rf)(function CollectionItem2(props) {
  const htmlProps = useCollectionItem(props);
  return (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__/* .createElement */ .n)(TagName, htmlProps);
});




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/QA27FYGF.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ useHovercardAnchor)
/* harmony export */ });
/* unused harmony export HovercardAnchor */
/* harmony import */ var _CTQR3VDU_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/CTQR3VDU.js");
/* harmony import */ var _HGZKAGPL_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HGZKAGPL.js");
/* harmony import */ var _HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js");
/* harmony import */ var _Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/Z32BISHQ.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
/* harmony import */ var _ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/utils/events.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
"use client";






// src/hovercard/hovercard-anchor.tsx



var TagName = "a";
var useHovercardAnchor = (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__/* .createHook */ .ab)(
  function useHovercardAnchor2(_a) {
    var _b = _a, { store, showOnHover = true } = _b, props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__/* .__objRest */ .YG)(_b, ["store", "showOnHover"]);
    const context = (0,_CTQR3VDU_js__WEBPACK_IMPORTED_MODULE_3__/* .useHovercardProviderContext */ .Kw)();
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
        if (!store) return;
        const { anchorElement } = store.getState();
        if (!anchorElement) return;
        if (event.target !== anchorElement) return;
        window.clearTimeout(showTimeoutRef.current);
        showTimeoutRef.current = 0;
      };
      return (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__/* .addGlobalEventListener */ .dg)("mouseleave", onMouseLeave, true);
    }, [store]);
    const onMouseMoveProp = props.onMouseMove;
    const showOnHoverProp = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_6__/* .useBooleanEvent */ .O4)(showOnHover);
    const isMouseMoving = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_6__/* .useIsMouseMoving */ .P$)();
    const onMouseMove = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_6__/* .useEvent */ ._q)((event) => {
      onMouseMoveProp == null ? void 0 : onMouseMoveProp(event);
      if (disabled) return;
      if (!store) return;
      if (event.defaultPrevented) return;
      if (showTimeoutRef.current) return;
      if (!isMouseMoving()) return;
      if (!showOnHoverProp(event)) return;
      const element = event.currentTarget;
      store.setAnchorElement(element);
      store.setDisclosureElement(element);
      const { showTimeout, timeout } = store.getState();
      const showHovercard = () => {
        showTimeoutRef.current = 0;
        if (!isMouseMoving()) return;
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
    });
    const onClickProp = props.onClick;
    const onClick = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_6__/* .useEvent */ ._q)((event) => {
      onClickProp == null ? void 0 : onClickProp(event);
      if (!store) return;
      window.clearTimeout(showTimeoutRef.current);
      showTimeoutRef.current = 0;
    });
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
      (element) => {
        if (!store) return;
        const { anchorElement } = store.getState();
        if (anchorElement == null ? void 0 : anchorElement.isConnected) return;
        store.setAnchorElement(element);
      },
      [store]
    );
    props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadProps */ .ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__/* .__spreadValues */ .IA)({}, props), {
      ref: (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_6__/* .useMergeRefs */ .SV)(ref, props.ref),
      onMouseMove,
      onClick
    });
    props = (0,_HGZKAGPL_js__WEBPACK_IMPORTED_MODULE_7__/* .useFocusable */ .W)(props);
    return props;
  }
);
var HovercardAnchor = (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__/* .forwardRef */ .Rf)(function HovercardAnchor2(props) {
  const htmlProps = useHovercardAnchor(props);
  return (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__/* .createElement */ .n)(TagName, htmlProps);
});




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/QYS5FHDY.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ useDialogStoreProps),
/* harmony export */   j: () => (/* binding */ useDialogStore)
/* harmony export */ });
/* harmony import */ var _KGK2TTFO_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/KGK2TTFO.js");
/* harmony import */ var _2GXGCHW6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/2GXGCHW6.js");
/* harmony import */ var _ariakit_core_dialog_dialog_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/YOHCVXJB.js");
"use client";



// src/dialog/dialog-store.ts

function useDialogStoreProps(store, update, props) {
  return (0,_KGK2TTFO_js__WEBPACK_IMPORTED_MODULE_0__/* .useDisclosureStoreProps */ .W)(store, update, props);
}
function useDialogStore(props = {}) {
  const [store, update] = (0,_2GXGCHW6_js__WEBPACK_IMPORTED_MODULE_1__/* .useStore */ .Pj)(_ariakit_core_dialog_dialog_store__WEBPACK_IMPORTED_MODULE_2__/* .createDialogStore */ .Y, props);
  return useDialogStoreProps(store, update, props);
}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/RGUP62TM.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WT: () => (/* binding */ DisclosureScopedContextProvider),
/* harmony export */   sI: () => (/* binding */ DisclosureContextProvider),
/* harmony export */   vO: () => (/* binding */ useDisclosureProviderContext)
/* harmony export */ });
/* unused harmony exports useDisclosureContext, useDisclosureScopedContext */
/* harmony import */ var _HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js");
"use client";


// src/disclosure/disclosure-context.tsx
var ctx = (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_0__/* .createStoreContext */ .B0)();
var useDisclosureContext = ctx.useContext;
var useDisclosureScopedContext = ctx.useScopedContext;
var useDisclosureProviderContext = ctx.useProviderContext;
var DisclosureContextProvider = ctx.ContextProvider;
var DisclosureScopedContextProvider = ctx.ScopedContextProvider;




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/SK3NAZA3.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cZ: () => (/* binding */ setRef),
/* harmony export */   v1: () => (/* binding */ getRefProperty),
/* harmony export */   v6: () => (/* binding */ mergeProps)
/* harmony export */ });
/* unused harmony export isValidElementWithRef */
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
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
  if (!element) return false;
  if (!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(element)) return false;
  if ("ref" in element.props) return true;
  if ("ref" in element) return true;
  return false;
}
function getRefProperty(element) {
  if (!isValidElementWithRef(element)) return null;
  const props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadValues */ .IA)({}, element.props);
  return props.ref || element.ref;
}
function mergeProps(base, overrides) {
  const props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadValues */ .IA)({}, base);
  for (const key in overrides) {
    if (!(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__/* .hasOwnProperty */ .mQ)(overrides, key)) continue;
    if (key === "className") {
      const prop = "className";
      props[prop] = base[prop] ? `${base[prop]} ${overrides[prop]}` : overrides[prop];
      continue;
    }
    if (key === "style") {
      const prop = "style";
      props[prop] = base[prop] ? (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadValues */ .IA)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadValues */ .IA)({}, base[prop]), overrides[prop]) : overrides[prop];
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

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/SOKV3TSX.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XF: () => (/* binding */ useRadioProviderContext),
/* harmony export */   aN: () => (/* binding */ RadioScopedContextProvider),
/* harmony export */   c4: () => (/* binding */ useRadioContext)
/* harmony export */ });
/* unused harmony exports useRadioScopedContext, RadioContextProvider */
/* harmony import */ var _WENSINUV_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/WENSINUV.js");
/* harmony import */ var _HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js");
"use client";



// src/radio/radio-context.tsx
var ctx = (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_0__/* .createStoreContext */ .B0)(
  [_WENSINUV_js__WEBPACK_IMPORTED_MODULE_1__/* .CompositeContextProvider */ .ws],
  [_WENSINUV_js__WEBPACK_IMPORTED_MODULE_1__/* .CompositeScopedContextProvider */ .aN]
);
var useRadioContext = ctx.useContext;
var useRadioScopedContext = ctx.useScopedContext;
var useRadioProviderContext = ctx.useProviderContext;
var RadioContextProvider = ctx.ContextProvider;
var RadioScopedContextProvider = ctx.ScopedContextProvider;




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/SWN3JYXT.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ FocusableContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
"use client";

// src/focusable/focusable-context.tsx

var FocusableContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(true);




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/TT2355LN.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AV: () => (/* binding */ createDialogComponent),
  sp: () => (/* binding */ useDialog)
});

// UNUSED EXPORTS: Dialog

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/63XF7ACK.js
"use client";

// src/dialog/utils/is-backdrop.ts
function _63XF7ACK_isBackdrop(element, ...ids) {
  if (!element) return false;
  const backdrop = element.getAttribute("data-backdrop");
  if (backdrop == null) return false;
  if (backdrop === "") return true;
  if (backdrop === "true") return true;
  if (!ids.length) return true;
  return ids.some((id) => backdrop === id);
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/K2ZF5NU7.js
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
    if (!isCurrent) return;
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
  if (!element) return () => {
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
  if (!element) return () => {
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



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js
var HWOIWM4O = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js
var PBFD2E7P = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/AOUGVQZ3.js
"use client";


// src/dialog/utils/walk-tree-outside.ts


var ignoreTags = ["SCRIPT", "STYLE"];
function getSnapshotPropertyName(id) {
  return `__ariakit-dialog-snapshot-${id}`;
}
function inSnapshot(id, element) {
  const doc = (0,HWOIWM4O/* getDocument */.YE)(element);
  const propertyName = getSnapshotPropertyName(id);
  if (!doc.body[propertyName]) return true;
  do {
    if (element === doc.body) return false;
    if (element[propertyName]) return true;
    if (!element.parentElement) return false;
    element = element.parentElement;
  } while (true);
}
function isValidElement(id, element, ignoredElements) {
  if (ignoreTags.includes(element.tagName)) return false;
  if (!inSnapshot(id, element)) return false;
  return !ignoredElements.some(
    (enabledElement) => enabledElement && (0,HWOIWM4O/* contains */.gR)(element, enabledElement)
  );
}
function AOUGVQZ3_walkTreeOutside(id, elements, callback, ancestorCallback) {
  for (let element of elements) {
    if (!(element == null ? void 0 : element.isConnected)) continue;
    const hasAncestorAlready = elements.some((maybeAncestor) => {
      if (!maybeAncestor) return false;
      if (maybeAncestor === element) return false;
      return maybeAncestor.contains(element);
    });
    const doc = (0,HWOIWM4O/* getDocument */.YE)(element);
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
  const { body } = (0,HWOIWM4O/* getDocument */.YE)(elements[0]);
  const cleanups = [];
  const markElement = (element) => {
    cleanups.push(setProperty(element, getSnapshotPropertyName(id), true));
  };
  AOUGVQZ3_walkTreeOutside(id, elements, markElement);
  return (0,PBFD2E7P/* chain */.cy)(setProperty(body, getSnapshotPropertyName(id), true), () => {
    for (const cleanup of cleanups) {
      cleanup();
    }
  });
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/2PGBN2Y4.js
"use client";




// src/dialog/utils/mark-tree-outside.ts

function getPropertyName(id = "", ancestor = false) {
  return `__ariakit-dialog-${ancestor ? "ancestor" : "outside"}${id ? `-${id}` : ""}`;
}
function markElement(element, id = "") {
  return (0,PBFD2E7P/* chain */.cy)(
    setProperty(element, getPropertyName(), true),
    setProperty(element, getPropertyName(id), true)
  );
}
function markAncestor(element, id = "") {
  return (0,PBFD2E7P/* chain */.cy)(
    setProperty(element, getPropertyName("", true), true),
    setProperty(element, getPropertyName(id, true), true)
  );
}
function isElementMarked(element, id) {
  const ancestorProperty = getPropertyName(id, true);
  if (element[ancestorProperty]) return true;
  const elementProperty = getPropertyName(id);
  do {
    if (element[elementProperty]) return true;
    if (!element.parentElement) return false;
    element = element.parentElement;
  } while (true);
}
function markTreeOutside(id, elements) {
  const cleanups = [];
  const ids = elements.map((el) => el == null ? void 0 : el.id);
  AOUGVQZ3_walkTreeOutside(
    id,
    elements,
    (element) => {
      if (_63XF7ACK_isBackdrop(element, ...ids)) return;
      cleanups.unshift(markElement(element, id));
    },
    (ancestor, element) => {
      const isAnotherDialogAncestor = element.hasAttribute("data-dialog") && element.id !== id;
      if (isAnotherDialogAncestor) return;
      cleanups.unshift(markAncestor(ancestor, id));
    }
  );
  const restoreAccessibilityTree = () => {
    for (const cleanup of cleanups) {
      cleanup();
    }
  };
  return restoreAccessibilityTree;
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/BSEL4YAF.js
var BSEL4YAF = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/BSEL4YAF.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/AXRBYZQP.js
var AXRBYZQP = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/AXRBYZQP.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/KGK2TTFO.js
var KGK2TTFO = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/KGK2TTFO.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/Z32BISHQ.js
var Z32BISHQ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/Z32BISHQ.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js
var _3YLGPPWQ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/UQBPM777.js
"use client";







// src/dialog/dialog-backdrop.tsx


function DialogBackdrop({
  store,
  backdrop,
  alwaysVisible,
  hidden
}) {
  const ref = (0,react.useRef)(null);
  const disclosure = (0,KGK2TTFO/* useDisclosureStore */.E)({ disclosure: store });
  const contentElement = store.useState("contentElement");
  (0,Z32BISHQ/* useSafeLayoutEffect */.UQ)(() => {
    const backdrop2 = ref.current;
    const dialog = contentElement;
    if (!backdrop2) return;
    if (!dialog) return;
    backdrop2.style.zIndex = getComputedStyle(dialog).zIndex;
  }, [contentElement]);
  (0,Z32BISHQ/* useSafeLayoutEffect */.UQ)(() => {
    const id = contentElement == null ? void 0 : contentElement.id;
    if (!id) return;
    const backdrop2 = ref.current;
    if (!backdrop2) return;
    return markAncestor(backdrop2, id);
  }, [contentElement]);
  const props = (0,BSEL4YAF/* useDisclosureContent */.aT)({
    ref,
    store: disclosure,
    role: "presentation",
    "data-backdrop": (contentElement == null ? void 0 : contentElement.id) || "",
    alwaysVisible,
    hidden: hidden != null ? hidden : void 0,
    style: {
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
  if (!backdrop) return null;
  if ((0,react.isValidElement)(backdrop)) {
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(AXRBYZQP/* Role */.X, (0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, props), { render: backdrop }));
  }
  const Component = typeof backdrop !== "boolean" ? backdrop : "div";
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(AXRBYZQP/* Role */.X, (0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, props), { render: /* @__PURE__ */ (0,jsx_runtime.jsx)(Component, {}) }));
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/ESSM74HH.js
"use client";




// src/dialog/utils/disable-accessibility-tree-outside.ts
function hideElementFromAccessibilityTree(element) {
  return setAttribute(element, "aria-hidden", "true");
}
function disableAccessibilityTreeOutside(id, elements) {
  const cleanups = [];
  const ids = elements.map((el) => el == null ? void 0 : el.id);
  walkTreeOutside(id, elements, (element) => {
    if (isBackdrop(element, ...ids)) return;
    cleanups.unshift(hideElementFromAccessibilityTree(element));
  });
  const restoreAccessibilityTree = () => {
    for (const cleanup of cleanups) {
      cleanup();
    }
  };
  return restoreAccessibilityTree;
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/677M2CI3.js
"use client";

// src/dialog/utils/supports-inert.ts
function supportsInert() {
  return "inert" in HTMLElement.prototype;
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/utils/focus.js
var utils_focus = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/utils/focus.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/NSFBIL2Z.js
"use client";






// src/dialog/utils/disable-tree.ts



function disableTree(element, ignoredElements) {
  if (!("style" in element)) return PBFD2E7P/* noop */.lQ;
  if (supportsInert()) {
    return setProperty(element, "inert", true);
  }
  const tabbableElements = (0,utils_focus/* getAllTabbableIn */.a9)(element, true);
  const enableElements = tabbableElements.map((element2) => {
    if (ignoredElements == null ? void 0 : ignoredElements.some((el) => el && (0,HWOIWM4O/* contains */.gR)(el, element2))) return PBFD2E7P/* noop */.lQ;
    const restoreFocusMethod = orchestrate(element2, "focus", () => {
      element2.focus = PBFD2E7P/* noop */.lQ;
      return () => {
        delete element2.focus;
      };
    });
    return (0,PBFD2E7P/* chain */.cy)(setAttribute(element2, "tabindex", "-1"), restoreFocusMethod);
  });
  return (0,PBFD2E7P/* chain */.cy)(
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
  AOUGVQZ3_walkTreeOutside(
    id,
    elements,
    (element) => {
      if (_63XF7ACK_isBackdrop(element, ...ids)) return;
      cleanups.unshift(disableTree(element, elements));
    },
    (element) => {
      if (!element.hasAttribute("role")) return;
      if (elements.some((el) => el && (0,HWOIWM4O/* contains */.gR)(el, element))) return;
      cleanups.unshift(setAttribute(element, "role", "none"));
    }
  );
  const restoreTreeOutside = () => {
    for (const cleanup of cleanups) {
      cleanup();
    }
  };
  return restoreTreeOutside;
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js
var react_dom = __webpack_require__("../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/YJS26JVG.js
"use client";


// src/dialog/utils/use-root-dialog.ts



function useRootDialog({
  attribute,
  contentId,
  contentElement,
  enabled
}) {
  const [updated, retry] = (0,Z32BISHQ/* useForceUpdate */.CH)();
  const isRootDialog = (0,react.useCallback)(() => {
    if (!enabled) return false;
    if (!contentElement) return false;
    const { body } = (0,HWOIWM4O/* getDocument */.YE)(contentElement);
    const id = body.getAttribute(attribute);
    return !id || id === contentId;
  }, [updated, enabled, contentElement, attribute, contentId]);
  (0,react.useEffect)(() => {
    if (!enabled) return;
    if (!contentId) return;
    if (!contentElement) return;
    const { body } = (0,HWOIWM4O/* getDocument */.YE)(contentElement);
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



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/US4USQPI.js
var US4USQPI = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/US4USQPI.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/KB6RR6FL.js
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
    if (!isRootDialog()) return;
    if (!contentElement) return;
    const doc = (0,HWOIWM4O/* getDocument */.YE)(contentElement);
    const win = (0,HWOIWM4O/* getWindow */.zk)(contentElement);
    const { documentElement, body } = doc;
    const cssScrollbarWidth = documentElement.style.getPropertyValue("--scrollbar-width");
    const scrollbarWidth = cssScrollbarWidth ? Number.parseInt(cssScrollbarWidth) : win.innerWidth - documentElement.clientWidth;
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
          win.scrollTo({ left: scrollX, top: scrollY, behavior: "instant" });
        }
      };
    };
    const isIOS = (0,US4USQPI/* isApple */.f8)() && !(0,US4USQPI/* isMac */.cX)();
    return (0,PBFD2E7P/* chain */.cy)(
      setScrollbarWidthProperty(),
      isIOS ? setIOSStyle() : setStyle()
    );
  }, [isRootDialog, contentElement]);
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/EQQLU3CG.js
var EQQLU3CG = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/EQQLU3CG.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/T3RMEPVH.js
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
      return (0,PBFD2E7P/* chain */.cy)((_a = context.add) == null ? void 0 : _a.call(context, dialog), () => {
        setDialogs((dialogs2) => dialogs2.filter((d) => d !== dialog));
      });
    },
    [context]
  );
  (0,Z32BISHQ/* useSafeLayoutEffect */.UQ)(() => {
    return (0,EQQLU3CG/* sync */.OH)(store, ["open", "contentElement"], (state) => {
      var _a;
      if (!state.open) return;
      if (!state.contentElement) return;
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



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/utils/events.js
var events = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/utils/events.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HLTQOHKZ.js
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



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/43UOHFGG.js
"use client";





// src/dialog/utils/use-hide-on-interact-outside.ts



function isInDocument(target) {
  if (target.tagName === "HTML") return true;
  return (0,HWOIWM4O/* contains */.gR)((0,HWOIWM4O/* getDocument */.YE)(target).body, target);
}
function isDisclosure(disclosure, target) {
  if (!disclosure) return false;
  if ((0,HWOIWM4O/* contains */.gR)(disclosure, target)) return true;
  const activeId = target.getAttribute("aria-activedescendant");
  if (activeId) {
    const activeElement = (0,HWOIWM4O/* getDocument */.YE)(disclosure).getElementById(activeId);
    if (activeElement) {
      return (0,HWOIWM4O/* contains */.gR)(disclosure, activeElement);
    }
  }
  return false;
}
function isMouseEventOnDialog(event, dialog) {
  if (!("clientY" in event)) return false;
  const rect = dialog.getBoundingClientRect();
  if (rect.width === 0 || rect.height === 0) return false;
  return rect.top <= event.clientY && event.clientY <= rect.top + rect.height && rect.left <= event.clientX && event.clientX <= rect.left + rect.width;
}
function useEventOutside({
  store,
  type,
  listener,
  capture,
  domReady
}) {
  const callListener = (0,Z32BISHQ/* useEvent */._q)(listener);
  const open = store.useState("open");
  const focusedRef = (0,react.useRef)(false);
  (0,Z32BISHQ/* useSafeLayoutEffect */.UQ)(() => {
    if (!open) return;
    if (!domReady) return;
    const { contentElement } = store.getState();
    if (!contentElement) return;
    const onFocus = () => {
      focusedRef.current = true;
    };
    contentElement.addEventListener("focusin", onFocus, true);
    return () => contentElement.removeEventListener("focusin", onFocus, true);
  }, [store, open, domReady]);
  (0,react.useEffect)(() => {
    if (!open) return;
    const onEvent = (event) => {
      const { contentElement, disclosureElement } = store.getState();
      const target = event.target;
      if (!contentElement) return;
      if (!target) return;
      if (!isInDocument(target)) return;
      if ((0,HWOIWM4O/* contains */.gR)(contentElement, target)) return;
      if (isDisclosure(disclosureElement, target)) return;
      if (target.hasAttribute("data-focus-trap")) return;
      if (isMouseEventOnDialog(event, contentElement)) return;
      const focused = focusedRef.current;
      if (focused && !isElementMarked(target, contentElement.id)) return;
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
  useEventOutside((0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, props), {
    type: "click",
    listener: (event) => {
      const { contentElement } = store.getState();
      const previousMouseDown = previousMouseDownRef.current;
      if (!previousMouseDown) return;
      if (!(0,HWOIWM4O/* isVisible */.zN)(previousMouseDown)) return;
      if (!isElementMarked(previousMouseDown, contentElement == null ? void 0 : contentElement.id)) return;
      if (!shouldHideOnInteractOutside(hideOnInteractOutside, event)) return;
      store.hide();
    }
  }));
  useEventOutside((0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, props), {
    type: "focusin",
    listener: (event) => {
      const { contentElement } = store.getState();
      if (!contentElement) return;
      if (event.target === (0,HWOIWM4O/* getDocument */.YE)(contentElement)) return;
      if (!shouldHideOnInteractOutside(hideOnInteractOutside, event)) return;
      store.hide();
    }
  }));
  useEventOutside((0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, props), {
    type: "contextmenu",
    listener: (event) => {
      if (!shouldHideOnInteractOutside(hideOnInteractOutside, event)) return;
      store.hide();
    }
  }));
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/6GXEOXGT.js
"use client";

// src/dialog/utils/prepend-hidden-dismiss.ts

function prependHiddenDismiss(container, onClick) {
  const document = (0,HWOIWM4O/* getDocument */.YE)(container);
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



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/SWN3JYXT.js
var SWN3JYXT = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/SWN3JYXT.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js
var HKOOKEDE = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HT3UEUDM.js
"use client";





// src/focusable/focusable-container.tsx

var TagName = "div";
var useFocusableContainer = (0,HKOOKEDE/* createHook */.ab)(function useFocusableContainer2(_a) {
  var _b = _a, { autoFocusOnShow = true } = _b, props = (0,_3YLGPPWQ/* __objRest */.YG)(_b, ["autoFocusOnShow"]);
  props = (0,Z32BISHQ/* useWrapElement */.w7)(
    props,
    (element) => /* @__PURE__ */ (0,jsx_runtime.jsx)(SWN3JYXT/* FocusableContext */.g.Provider, { value: autoFocusOnShow, children: element }),
    [autoFocusOnShow]
  );
  return props;
});
var FocusableContainer = (0,HKOOKEDE/* forwardRef */.Rf)(function FocusableContainer2(props) {
  const htmlProps = useFocusableContainer(props);
  return (0,HKOOKEDE/* createElement */.n)(TagName, htmlProps);
});



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/CZ4GFWYL.js
"use client";

// src/heading/heading-context.tsx

var HeadingContext = (0,react.createContext)(0);



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/5M6RIVE2.js
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



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/ILNAUGA4.js
"use client";



// src/visually-hidden/visually-hidden.tsx
var ILNAUGA4_TagName = "span";
var useVisuallyHidden = (0,HKOOKEDE/* createHook */.ab)(
  function useVisuallyHidden2(props) {
    props = (0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, props), {
      style: (0,_3YLGPPWQ/* __spreadValues */.IA)({
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
  }
);
var VisuallyHidden = (0,HKOOKEDE/* forwardRef */.Rf)(function VisuallyHidden2(props) {
  const htmlProps = useVisuallyHidden(props);
  return (0,HKOOKEDE/* createElement */.n)(ILNAUGA4_TagName, htmlProps);
});



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/LWDIJ7XK.js
"use client";




// src/focus-trap/focus-trap.tsx
var LWDIJ7XK_TagName = "span";
var useFocusTrap = (0,HKOOKEDE/* createHook */.ab)(
  function useFocusTrap2(props) {
    props = (0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({
      "data-focus-trap": "",
      tabIndex: 0,
      "aria-hidden": true
    }, props), {
      style: (0,_3YLGPPWQ/* __spreadValues */.IA)({
        // Prevents unintended scroll jumps.
        position: "fixed",
        top: 0,
        left: 0
      }, props.style)
    });
    props = useVisuallyHidden(props);
    return props;
  }
);
var FocusTrap = (0,HKOOKEDE/* forwardRef */.Rf)(function FocusTrap2(props) {
  const htmlProps = useFocusTrap(props);
  return (0,HKOOKEDE/* createElement */.n)(LWDIJ7XK_TagName, htmlProps);
});



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/AOQQTIBO.js
"use client";

// src/portal/portal-context.tsx

var PortalContext = (0,react.createContext)(null);



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/SK3NAZA3.js
var SK3NAZA3 = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/SK3NAZA3.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/UNZQGRPO.js
"use client";







// src/portal/portal.tsx






var UNZQGRPO_TagName = "div";
function getRootElement(element) {
  return (0,HWOIWM4O/* getDocument */.YE)(element).body;
}
function getPortalElement(element, portalElement) {
  if (!portalElement) {
    return (0,HWOIWM4O/* getDocument */.YE)(element).createElement("div");
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
var usePortal = (0,HKOOKEDE/* createHook */.ab)(function usePortal2(_a) {
  var _b = _a, {
    preserveTabOrder,
    preserveTabOrderAnchor,
    portalElement,
    portalRef,
    portal = true
  } = _b, props = (0,_3YLGPPWQ/* __objRest */.YG)(_b, [
    "preserveTabOrder",
    "preserveTabOrderAnchor",
    "portalElement",
    "portalRef",
    "portal"
  ]);
  const ref = (0,react.useRef)(null);
  const refProp = (0,Z32BISHQ/* useMergeRefs */.SV)(ref, props.ref);
  const context = (0,react.useContext)(PortalContext);
  const [portalNode, setPortalNode] = (0,react.useState)(null);
  const [anchorPortalNode, setAnchorPortalNode] = (0,react.useState)(
    null
  );
  const outerBeforeRef = (0,react.useRef)(null);
  const innerBeforeRef = (0,react.useRef)(null);
  const innerAfterRef = (0,react.useRef)(null);
  const outerAfterRef = (0,react.useRef)(null);
  (0,Z32BISHQ/* useSafeLayoutEffect */.UQ)(() => {
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
    (0,SK3NAZA3/* setRef */.cZ)(portalRef, portalEl);
    if (isPortalInDocument) return;
    return () => {
      portalEl.remove();
      (0,SK3NAZA3/* setRef */.cZ)(portalRef, null);
    };
  }, [portal, portalElement, context, portalRef]);
  (0,Z32BISHQ/* useSafeLayoutEffect */.UQ)(() => {
    if (!portal) return;
    if (!preserveTabOrder) return;
    if (!preserveTabOrderAnchor) return;
    const doc = (0,HWOIWM4O/* getDocument */.YE)(preserveTabOrderAnchor);
    const element = doc.createElement("span");
    element.style.position = "fixed";
    preserveTabOrderAnchor.insertAdjacentElement("afterend", element);
    setAnchorPortalNode(element);
    return () => {
      element.remove();
      setAnchorPortalNode(null);
    };
  }, [portal, preserveTabOrder, preserveTabOrderAnchor]);
  (0,react.useEffect)(() => {
    if (!portalNode) return;
    if (!preserveTabOrder) return;
    let raf = 0;
    const onFocus = (event) => {
      if (!(0,events/* isFocusEventOutside */.aG)(event)) return;
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
  props = (0,Z32BISHQ/* useWrapElement */.w7)(
    props,
    (element) => {
      element = // While the portal node is not in the DOM, we need to pass the
      // current context to the portal context, otherwise it's going to
      // reset to the body element on nested portals.
      /* @__PURE__ */ (0,jsx_runtime.jsx)(PortalContext.Provider, { value: portalNode || context, children: element });
      if (!portal) return element;
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
    [portalNode, context, portal, props.id, preserveTabOrder, anchorPortalNode]
  );
  props = (0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, props), {
    ref: refProp
  });
  return props;
});
var Portal = (0,HKOOKEDE/* forwardRef */.Rf)(function Portal2(props) {
  const htmlProps = usePortal(props);
  return (0,HKOOKEDE/* createElement */.n)(UNZQGRPO_TagName, htmlProps);
});



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/DU4D3UCJ.js
var DU4D3UCJ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/DU4D3UCJ.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HGZKAGPL.js
var HGZKAGPL = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HGZKAGPL.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/QYS5FHDY.js
var QYS5FHDY = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/QYS5FHDY.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/2GXGCHW6.js
var _2GXGCHW6 = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/2GXGCHW6.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/TT2355LN.js
"use client";





















// src/dialog/dialog.tsx







var TT2355LN_TagName = "div";
var isSafariBrowser = (0,US4USQPI/* isSafari */.nr)();
function isAlreadyFocusingAnotherElement(dialog) {
  const activeElement = (0,HWOIWM4O/* getActiveElement */.bq)();
  if (!activeElement) return false;
  if (dialog && (0,HWOIWM4O/* contains */.gR)(dialog, activeElement)) return false;
  if ((0,utils_focus/* isFocusable */.tp)(activeElement)) return true;
  return false;
}
function getElementFromProp(prop, focusable = false) {
  if (!prop) return null;
  const element = "current" in prop ? prop.current : prop;
  if (!element) return null;
  if (focusable) return (0,utils_focus/* isFocusable */.tp)(element) ? element : null;
  return element;
}
var useDialog = (0,HKOOKEDE/* createHook */.ab)(function useDialog2(_a) {
  var _b = _a, {
    store: storeProp,
    open: openProp,
    onClose,
    focusable = true,
    modal = true,
    portal = !!modal,
    backdrop = !!modal,
    hideOnEscape = true,
    hideOnInteractOutside = true,
    getPersistentElements,
    preventBodyScroll = !!modal,
    autoFocusOnShow = true,
    autoFocusOnHide = true,
    initialFocus,
    finalFocus,
    unmountOnHide,
    unstable_treeSnapshotKey
  } = _b, props = (0,_3YLGPPWQ/* __objRest */.YG)(_b, [
    "store",
    "open",
    "onClose",
    "focusable",
    "modal",
    "portal",
    "backdrop",
    "hideOnEscape",
    "hideOnInteractOutside",
    "getPersistentElements",
    "preventBodyScroll",
    "autoFocusOnShow",
    "autoFocusOnHide",
    "initialFocus",
    "finalFocus",
    "unmountOnHide",
    "unstable_treeSnapshotKey"
  ]);
  const context = (0,DU4D3UCJ/* useDialogProviderContext */.cH)();
  const ref = (0,react.useRef)(null);
  const store = (0,QYS5FHDY/* useDialogStore */.j)({
    store: storeProp || context,
    open: openProp,
    setOpen(open2) {
      if (open2) return;
      const dialog = ref.current;
      if (!dialog) return;
      const event = new Event("close", { bubbles: false, cancelable: true });
      if (onClose) {
        dialog.addEventListener("close", onClose, { once: true });
      }
      dialog.dispatchEvent(event);
      if (!event.defaultPrevented) return;
      store.setOpen(true);
    }
  });
  const { portalRef, domReady } = (0,Z32BISHQ/* usePortalRef */.TE)(portal, props.portalRef);
  const preserveTabOrderProp = props.preserveTabOrder;
  const preserveTabOrder = store.useState(
    (state) => preserveTabOrderProp && !modal && state.mounted
  );
  const id = (0,Z32BISHQ/* useId */.Bi)(props.id);
  const open = store.useState("open");
  const mounted = store.useState("mounted");
  const contentElement = store.useState("contentElement");
  const hidden = (0,BSEL4YAF/* isHidden */.dK)(mounted, props.hidden, props.alwaysVisible);
  usePreventBodyScroll(contentElement, id, preventBodyScroll && !hidden);
  useHideOnInteractOutside(store, hideOnInteractOutside, domReady);
  const { wrapElement, nestedDialogs } = useNestedDialogs(store);
  props = (0,Z32BISHQ/* useWrapElement */.w7)(props, wrapElement, [wrapElement]);
  (0,Z32BISHQ/* useSafeLayoutEffect */.UQ)(() => {
    if (!open) return;
    const dialog = ref.current;
    const activeElement = (0,HWOIWM4O/* getActiveElement */.bq)(dialog, true);
    if (!activeElement) return;
    if (activeElement.tagName === "BODY") return;
    if (dialog && (0,HWOIWM4O/* contains */.gR)(dialog, activeElement)) return;
    store.setDisclosureElement(activeElement);
  }, [store, open]);
  if (isSafariBrowser) {
    (0,react.useEffect)(() => {
      if (!mounted) return;
      const { disclosureElement } = store.getState();
      if (!disclosureElement) return;
      if (!(0,HWOIWM4O/* isButton */.Bm)(disclosureElement)) return;
      const onMouseDown = () => {
        let receivedFocus = false;
        const onFocus = () => {
          receivedFocus = true;
        };
        const options = { capture: true, once: true };
        disclosureElement.addEventListener("focusin", onFocus, options);
        (0,events/* queueBeforeEvent */.nz)(disclosureElement, "mouseup", () => {
          disclosureElement.removeEventListener("focusin", onFocus, true);
          if (receivedFocus) return;
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
    if (!modal) return;
    if (!mounted) return;
    if (!domReady) return;
    const dialog = ref.current;
    if (!dialog) return;
    const existingDismiss = dialog.querySelector("[data-dialog-dismiss]");
    if (existingDismiss) return;
    return prependHiddenDismiss(dialog, store.hide);
  }, [store, modal, mounted, domReady]);
  (0,Z32BISHQ/* useSafeLayoutEffect */.UQ)(() => {
    if (!supportsInert()) return;
    if (open) return;
    if (!mounted) return;
    if (!domReady) return;
    const dialog = ref.current;
    if (!dialog) return;
    return disableTree(dialog);
  }, [open, mounted, domReady]);
  const canTakeTreeSnapshot = open && domReady;
  (0,Z32BISHQ/* useSafeLayoutEffect */.UQ)(() => {
    if (!id) return;
    if (!canTakeTreeSnapshot) return;
    const dialog = ref.current;
    return createWalkTreeSnapshot(id, [dialog]);
  }, [id, canTakeTreeSnapshot, unstable_treeSnapshotKey]);
  const getPersistentElementsProp = (0,Z32BISHQ/* useEvent */._q)(getPersistentElements);
  (0,Z32BISHQ/* useSafeLayoutEffect */.UQ)(() => {
    if (!id) return;
    if (!canTakeTreeSnapshot) return;
    const { disclosureElement } = store.getState();
    const dialog = ref.current;
    const persistentElements = getPersistentElementsProp() || [];
    const allElements = [
      dialog,
      ...persistentElements,
      ...nestedDialogs.map((dialog2) => dialog2.getState().contentElement)
    ];
    if (modal) {
      return (0,PBFD2E7P/* chain */.cy)(
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
    modal,
    unstable_treeSnapshotKey
  ]);
  const mayAutoFocusOnShow = !!autoFocusOnShow;
  const autoFocusOnShowProp = (0,Z32BISHQ/* useBooleanEvent */.O4)(autoFocusOnShow);
  const [autoFocusEnabled, setAutoFocusEnabled] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    if (!open) return;
    if (!mayAutoFocusOnShow) return;
    if (!domReady) return;
    if (!(contentElement == null ? void 0 : contentElement.isConnected)) return;
    const element = getElementFromProp(initialFocus, true) || // If no initial focus is specified, we try to focus the first element
    // with the autofocus attribute. If it's an Ariakit component, the
    // Focusable component will consume the autoFocus prop and add the
    // data-autofocus attribute to the element instead.
    contentElement.querySelector(
      "[data-autofocus=true],[autofocus]"
    ) || // We have to fallback to the first focusable element otherwise portaled
    // dialogs with preserveTabOrder set to true will not receive focus
    // properly because the elements aren't tabbable until the dialog receives
    // focus.
    (0,utils_focus/* getFirstTabbableIn */.LC)(contentElement, true, portal && preserveTabOrder) || // Finally, we fallback to the dialog element itself.
    contentElement;
    const isElementFocusable = (0,utils_focus/* isFocusable */.tp)(element);
    if (!autoFocusOnShowProp(isElementFocusable ? element : null)) return;
    setAutoFocusEnabled(true);
    queueMicrotask(() => {
      element.focus();
      if (!isSafariBrowser) return;
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
  const autoFocusOnHideProp = (0,Z32BISHQ/* useBooleanEvent */.O4)(autoFocusOnHide);
  const [hasOpened, setHasOpened] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    if (!open) return;
    setHasOpened(true);
    return () => setHasOpened(false);
  }, [open]);
  const focusOnHide = (0,react.useCallback)(
    (dialog, retry = true) => {
      const { disclosureElement } = store.getState();
      if (isAlreadyFocusingAnotherElement(dialog)) return;
      let element = getElementFromProp(finalFocus) || disclosureElement;
      if (element == null ? void 0 : element.id) {
        const doc = (0,HWOIWM4O/* getDocument */.YE)(element);
        const selector = `[aria-activedescendant="${element.id}"]`;
        const composite = doc.querySelector(selector);
        if (composite) {
          element = composite;
        }
      }
      if (element && !(0,utils_focus/* isFocusable */.tp)(element)) {
        const maybeParentDialog = element.closest("[data-dialog]");
        if (maybeParentDialog == null ? void 0 : maybeParentDialog.id) {
          const doc = (0,HWOIWM4O/* getDocument */.YE)(maybeParentDialog);
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
      if (!autoFocusOnHideProp(isElementFocusable ? element : null)) return;
      if (!isElementFocusable) return;
      element == null ? void 0 : element.focus();
    },
    [store, finalFocus, autoFocusOnHideProp]
  );
  const focusedOnHideRef = (0,react.useRef)(false);
  (0,Z32BISHQ/* useSafeLayoutEffect */.UQ)(() => {
    if (open) return;
    if (!hasOpened) return;
    if (!mayAutoFocusOnHide) return;
    const dialog = ref.current;
    focusedOnHideRef.current = true;
    focusOnHide(dialog);
  }, [open, hasOpened, domReady, mayAutoFocusOnHide, focusOnHide]);
  (0,react.useEffect)(() => {
    if (!hasOpened) return;
    if (!mayAutoFocusOnHide) return;
    const dialog = ref.current;
    return () => {
      if (focusedOnHideRef.current) {
        focusedOnHideRef.current = false;
        return;
      }
      focusOnHide(dialog);
    };
  }, [hasOpened, mayAutoFocusOnHide, focusOnHide]);
  const hideOnEscapeProp = (0,Z32BISHQ/* useBooleanEvent */.O4)(hideOnEscape);
  (0,react.useEffect)(() => {
    if (!domReady) return;
    if (!mounted) return;
    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      if (event.defaultPrevented) return;
      const dialog = ref.current;
      if (!dialog) return;
      if (isElementMarked(dialog)) return;
      const target = event.target;
      if (!target) return;
      const { disclosureElement } = store.getState();
      const isValidTarget = () => {
        if (target.tagName === "BODY") return true;
        if ((0,HWOIWM4O/* contains */.gR)(dialog, target)) return true;
        if (!disclosureElement) return true;
        if ((0,HWOIWM4O/* contains */.gR)(disclosureElement, target)) return true;
        return false;
      };
      if (!isValidTarget()) return;
      if (!hideOnEscapeProp(event)) return;
      store.hide();
    };
    return (0,events/* addGlobalEventListener */.dg)("keydown", onKeyDown, true);
  }, [store, domReady, mounted, hideOnEscapeProp]);
  props = (0,Z32BISHQ/* useWrapElement */.w7)(
    props,
    (element) => /* @__PURE__ */ (0,jsx_runtime.jsx)(HeadingLevel, { level: modal ? 1 : void 0, children: element }),
    [modal]
  );
  const hiddenProp = props.hidden;
  const alwaysVisible = props.alwaysVisible;
  props = (0,Z32BISHQ/* useWrapElement */.w7)(
    props,
    (element) => {
      if (!backdrop) return element;
      return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0,jsx_runtime.jsx)(
          DialogBackdrop,
          {
            store,
            backdrop,
            hidden: hiddenProp,
            alwaysVisible
          }
        ),
        element
      ] });
    },
    [store, backdrop, hiddenProp, alwaysVisible]
  );
  const [headingId, setHeadingId] = (0,react.useState)();
  const [descriptionId, setDescriptionId] = (0,react.useState)();
  props = (0,Z32BISHQ/* useWrapElement */.w7)(
    props,
    (element) => /* @__PURE__ */ (0,jsx_runtime.jsx)(DU4D3UCJ/* DialogScopedContextProvider */.XP, { value: store, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(DU4D3UCJ/* DialogHeadingContext */.YH.Provider, { value: setHeadingId, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(DU4D3UCJ/* DialogDescriptionContext */.oL.Provider, { value: setDescriptionId, children: element }) }) }),
    [store]
  );
  props = (0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({
    id,
    "data-dialog": "",
    role: "dialog",
    tabIndex: focusable ? -1 : void 0,
    "aria-labelledby": headingId,
    "aria-describedby": descriptionId
  }, props), {
    ref: (0,Z32BISHQ/* useMergeRefs */.SV)(ref, props.ref)
  });
  props = useFocusableContainer((0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, props), {
    autoFocusOnShow: autoFocusEnabled
  }));
  props = (0,BSEL4YAF/* useDisclosureContent */.aT)((0,_3YLGPPWQ/* __spreadValues */.IA)({ store }, props));
  props = (0,HGZKAGPL/* useFocusable */.W)((0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, props), { focusable }));
  props = usePortal((0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({ portal }, props), { portalRef, preserveTabOrder }));
  return props;
});
function createDialogComponent(Component, useProviderContext = DU4D3UCJ/* useDialogProviderContext */.cH) {
  return (0,HKOOKEDE/* forwardRef */.Rf)(function DialogComponent(props) {
    const context = useProviderContext();
    const store = props.store || context;
    const mounted = (0,_2GXGCHW6/* useStoreState */.O$)(
      store,
      (state) => !props.unmountOnHide || (state == null ? void 0 : state.mounted) || !!props.open
    );
    if (!mounted) return null;
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(Component, (0,_3YLGPPWQ/* __spreadValues */.IA)({}, props));
  });
}
var Dialog = createDialogComponent(
  (0,HKOOKEDE/* forwardRef */.Rf)(function Dialog2(props) {
    const htmlProps = useDialog(props);
    return (0,HKOOKEDE/* createElement */.n)(TT2355LN_TagName, htmlProps);
  }),
  DU4D3UCJ/* useDialogProviderContext */.cH
);




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/TW35PKTK.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ useComposite),
/* harmony export */   e: () => (/* binding */ Composite)
/* harmony export */ });
/* harmony import */ var _5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/5VQZOHHZ.js");
/* harmony import */ var _WENSINUV_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/WENSINUV.js");
/* harmony import */ var _HGZKAGPL_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HGZKAGPL.js");
/* harmony import */ var _HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js");
/* harmony import */ var _Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/Z32BISHQ.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
/* harmony import */ var _ariakit_core_utils_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/7PRQYBBV.js");
/* harmony import */ var _ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js");
/* harmony import */ var _ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/utils/events.js");
/* harmony import */ var _ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/utils/focus.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
"use client";







// src/composite/composite.tsx







var TagName = "div";
function isGrid(items) {
  return items.some((item) => !!item.rowId);
}
function isPrintableKey(event) {
  const target = event.target;
  if (target && !(0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__/* .isTextField */ .mB)(target)) return false;
  return event.key.length === 1 && !event.ctrlKey && !event.metaKey;
}
function isModifierKey(event) {
  return event.key === "Shift" || event.key === "Control" || event.key === "Alt" || event.key === "Meta";
}
function useKeyboardEventProxy(store, onKeyboardEvent, previousElementRef) {
  return (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_3__/* .useEvent */ ._q)((event) => {
    var _a;
    onKeyboardEvent == null ? void 0 : onKeyboardEvent(event);
    if (event.defaultPrevented) return;
    if (event.isPropagationStopped()) return;
    if (!(0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__/* .isSelfTarget */ .uh)(event)) return;
    if (isModifierKey(event)) return;
    if (isPrintableKey(event)) return;
    const state = store.getState();
    const activeElement = (_a = (0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_5__/* .getEnabledItem */ .hZ)(store, state.activeId)) == null ? void 0 : _a.element;
    if (!activeElement) return;
    const _b = event, { view } = _b, eventInit = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_6__/* .__objRest */ .YG)(_b, ["view"]);
    const previousElement = previousElementRef == null ? void 0 : previousElementRef.current;
    if (activeElement !== previousElement) {
      activeElement.focus();
    }
    if (!(0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__/* .fireKeyboardEvent */ .sz)(activeElement, event.type, eventInit)) {
      event.preventDefault();
    }
    if (event.currentTarget.contains(activeElement)) {
      event.stopPropagation();
    }
  });
}
function findFirstEnabledItemInTheLastRow(items) {
  return (0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_5__/* .findFirstEnabledItem */ .oi)(
    (0,_ariakit_core_utils_array__WEBPACK_IMPORTED_MODULE_7__/* .flatten2DArray */ .M9)((0,_ariakit_core_utils_array__WEBPACK_IMPORTED_MODULE_7__/* .reverseArray */ .q7)((0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_5__/* .groupItemsByRows */ .es)(items)))
  );
}
function useScheduleFocus(store) {
  const [scheduled, setScheduled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const schedule = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => setScheduled(true), []);
  const activeItem = store.useState(
    (state) => (0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_5__/* .getEnabledItem */ .hZ)(store, state.activeId)
  );
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const activeElement = activeItem == null ? void 0 : activeItem.element;
    if (!scheduled) return;
    if (!activeElement) return;
    setScheduled(false);
    activeElement.focus({ preventScroll: true });
  }, [activeItem, scheduled]);
  return schedule;
}
var useComposite = (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_8__/* .createHook */ .ab)(
  function useComposite2(_a) {
    var _b = _a, {
      store,
      composite = true,
      focusOnMove = composite,
      moveOnKeyPress = true
    } = _b, props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_6__/* .__objRest */ .YG)(_b, [
      "store",
      "composite",
      "focusOnMove",
      "moveOnKeyPress"
    ]);
    const context = (0,_WENSINUV_js__WEBPACK_IMPORTED_MODULE_9__/* .useCompositeProviderContext */ .Lf)();
    store = store || context;
    (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_10__/* .invariant */ .V1)(
      store,
       false && 0
    );
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const previousElementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const scheduleFocus = useScheduleFocus(store);
    const moves = store.useState("moves");
    const [, setBaseElement] = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_3__/* .useTransactionState */ .XB)(
      composite ? store.setBaseElement : null
    );
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      var _a2;
      if (!store) return;
      if (!moves) return;
      if (!composite) return;
      if (!focusOnMove) return;
      const { activeId: activeId2 } = store.getState();
      const itemElement = (_a2 = (0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_5__/* .getEnabledItem */ .hZ)(store, activeId2)) == null ? void 0 : _a2.element;
      if (!itemElement) return;
      (0,_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_11__/* .focusIntoView */ .WA)(itemElement);
    }, [store, moves, composite, focusOnMove]);
    (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_3__/* .useSafeLayoutEffect */ .UQ)(() => {
      if (!store) return;
      if (!moves) return;
      if (!composite) return;
      const { baseElement, activeId: activeId2 } = store.getState();
      const isSelfAcive = activeId2 === null;
      if (!isSelfAcive) return;
      if (!baseElement) return;
      const previousElement = previousElementRef.current;
      previousElementRef.current = null;
      if (previousElement) {
        (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__/* .fireBlurEvent */ .c$)(previousElement, { relatedTarget: baseElement });
      }
      if (!(0,_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_11__/* .hasFocus */ .AJ)(baseElement)) {
        baseElement.focus();
      }
    }, [store, moves, composite]);
    const activeId = store.useState("activeId");
    const virtualFocus = store.useState("virtualFocus");
    (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_3__/* .useSafeLayoutEffect */ .UQ)(() => {
      var _a2;
      if (!store) return;
      if (!composite) return;
      if (!virtualFocus) return;
      const previousElement = previousElementRef.current;
      previousElementRef.current = null;
      if (!previousElement) return;
      const activeElement = (_a2 = (0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_5__/* .getEnabledItem */ .hZ)(store, activeId)) == null ? void 0 : _a2.element;
      const relatedTarget = activeElement || (0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__/* .getActiveElement */ .bq)(previousElement);
      if (relatedTarget === previousElement) return;
      (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__/* .fireBlurEvent */ .c$)(previousElement, { relatedTarget });
    }, [store, activeId, virtualFocus, composite]);
    const onKeyDownCapture = useKeyboardEventProxy(
      store,
      props.onKeyDownCapture,
      previousElementRef
    );
    const onKeyUpCapture = useKeyboardEventProxy(
      store,
      props.onKeyUpCapture,
      previousElementRef
    );
    const onFocusCaptureProp = props.onFocusCapture;
    const onFocusCapture = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_3__/* .useEvent */ ._q)((event) => {
      onFocusCaptureProp == null ? void 0 : onFocusCaptureProp(event);
      if (event.defaultPrevented) return;
      if (!store) return;
      const { virtualFocus: virtualFocus2 } = store.getState();
      if (!virtualFocus2) return;
      const previousActiveElement = event.relatedTarget;
      const isSilentlyFocused = (0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_5__/* .silentlyFocused */ .Qh)(event.currentTarget);
      if ((0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__/* .isSelfTarget */ .uh)(event) && isSilentlyFocused) {
        event.stopPropagation();
        previousElementRef.current = previousActiveElement;
      }
    });
    const onFocusProp = props.onFocus;
    const onFocus = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_3__/* .useEvent */ ._q)((event) => {
      onFocusProp == null ? void 0 : onFocusProp(event);
      if (event.defaultPrevented) return;
      if (!composite) return;
      if (!store) return;
      const { relatedTarget } = event;
      const { virtualFocus: virtualFocus2 } = store.getState();
      if (virtualFocus2) {
        if ((0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__/* .isSelfTarget */ .uh)(event) && !(0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_5__/* .isItem */ .WZ)(store, relatedTarget)) {
          queueMicrotask(scheduleFocus);
        }
      } else if ((0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__/* .isSelfTarget */ .uh)(event)) {
        store.setActiveId(null);
      }
    });
    const onBlurCaptureProp = props.onBlurCapture;
    const onBlurCapture = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_3__/* .useEvent */ ._q)((event) => {
      var _a2;
      onBlurCaptureProp == null ? void 0 : onBlurCaptureProp(event);
      if (event.defaultPrevented) return;
      if (!store) return;
      const { virtualFocus: virtualFocus2, activeId: activeId2 } = store.getState();
      if (!virtualFocus2) return;
      const activeElement = (_a2 = (0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_5__/* .getEnabledItem */ .hZ)(store, activeId2)) == null ? void 0 : _a2.element;
      const nextActiveElement = event.relatedTarget;
      const nextActiveElementIsItem = (0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_5__/* .isItem */ .WZ)(store, nextActiveElement);
      const previousElement = previousElementRef.current;
      previousElementRef.current = null;
      if ((0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__/* .isSelfTarget */ .uh)(event) && nextActiveElementIsItem) {
        if (nextActiveElement === activeElement) {
          if (previousElement && previousElement !== nextActiveElement) {
            (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__/* .fireBlurEvent */ .c$)(previousElement, event);
          }
        } else if (activeElement) {
          (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__/* .fireBlurEvent */ .c$)(activeElement, event);
        } else if (previousElement) {
          (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__/* .fireBlurEvent */ .c$)(previousElement, event);
        }
        event.stopPropagation();
      } else {
        const targetIsItem = (0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_5__/* .isItem */ .WZ)(store, event.target);
        if (!targetIsItem && activeElement) {
          (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__/* .fireBlurEvent */ .c$)(activeElement, event);
        }
      }
    });
    const onKeyDownProp = props.onKeyDown;
    const moveOnKeyPressProp = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_3__/* .useBooleanEvent */ .O4)(moveOnKeyPress);
    const onKeyDown = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_3__/* .useEvent */ ._q)((event) => {
      var _a2;
      onKeyDownProp == null ? void 0 : onKeyDownProp(event);
      if (event.defaultPrevented) return;
      if (!store) return;
      if (!(0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__/* .isSelfTarget */ .uh)(event)) return;
      const { orientation, items, renderedItems, activeId: activeId2 } = store.getState();
      const activeItem = (0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_5__/* .getEnabledItem */ .hZ)(store, activeId2);
      if ((_a2 = activeItem == null ? void 0 : activeItem.element) == null ? void 0 : _a2.isConnected) return;
      const isVertical = orientation !== "horizontal";
      const isHorizontal = orientation !== "vertical";
      const grid = isGrid(renderedItems);
      const isHorizontalKey = event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === "Home" || event.key === "End";
      if (isHorizontalKey && (0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__/* .isTextField */ .mB)(event.currentTarget)) return;
      const up = () => {
        if (grid) {
          const item = items && findFirstEnabledItemInTheLastRow(items);
          return item == null ? void 0 : item.id;
        }
        return store == null ? void 0 : store.last();
      };
      const keyMap = {
        ArrowUp: (grid || isVertical) && up,
        ArrowRight: (grid || isHorizontal) && store.first,
        ArrowDown: (grid || isVertical) && store.first,
        ArrowLeft: (grid || isHorizontal) && store.last,
        Home: store.first,
        End: store.last,
        PageUp: store.first,
        PageDown: store.last
      };
      const action = keyMap[event.key];
      if (action) {
        const id = action();
        if (id !== void 0) {
          if (!moveOnKeyPressProp(event)) return;
          event.preventDefault();
          store.move(id);
        }
      }
    });
    props = (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_3__/* .useWrapElement */ .w7)(
      props,
      (element) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_WENSINUV_js__WEBPACK_IMPORTED_MODULE_9__/* .CompositeContextProvider */ .ws, { value: store, children: element }),
      [store]
    );
    const activeDescendant = store.useState((state) => {
      var _a2;
      if (!store) return;
      if (!composite) return;
      if (!state.virtualFocus) return;
      return (_a2 = (0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_5__/* .getEnabledItem */ .hZ)(store, state.activeId)) == null ? void 0 : _a2.id;
    });
    props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_6__/* .__spreadProps */ .ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_6__/* .__spreadValues */ .IA)({
      "aria-activedescendant": activeDescendant
    }, props), {
      ref: (0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_3__/* .useMergeRefs */ .SV)(ref, setBaseElement, props.ref),
      onKeyDownCapture,
      onKeyUpCapture,
      onFocusCapture,
      onFocus,
      onBlurCapture,
      onKeyDown
    });
    const focusable = store.useState(
      (state) => composite && (state.virtualFocus || state.activeId === null)
    );
    props = (0,_HGZKAGPL_js__WEBPACK_IMPORTED_MODULE_12__/* .useFocusable */ .W)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_6__/* .__spreadValues */ .IA)({ focusable }, props));
    return props;
  }
);
var Composite = (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_8__/* .forwardRef */ .Rf)(function Composite2(props) {
  const htmlProps = useComposite(props);
  return (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_8__/* .createElement */ .n)(TagName, htmlProps);
});




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/UVQLZ7T5.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* binding */ useCompositeStore),
  Y: () => (/* binding */ useCompositeStoreProps)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/2GXGCHW6.js
var _2GXGCHW6 = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/2GXGCHW6.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/Z32BISHQ.js
var Z32BISHQ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/Z32BISHQ.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/TCAGH6BH.js
"use client";



// src/collection/collection-store.ts

function useCollectionStoreProps(store, update, props) {
  (0,Z32BISHQ/* useUpdateEffect */.w5)(update, [props.store]);
  (0,_2GXGCHW6/* useStoreProps */.Tz)(store, props, "items", "setItems");
  return store;
}
function useCollectionStore(props = {}) {
  const [store, update] = useStore(Core.createCollectionStore, props);
  return useCollectionStoreProps(store, update, props);
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/D7EIQZAU.js
var D7EIQZAU = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/D7EIQZAU.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/UVQLZ7T5.js
"use client";



// src/composite/composite-store.ts

function useCompositeStoreProps(store, update, props) {
  store = useCollectionStoreProps(store, update, props);
  (0,_2GXGCHW6/* useStoreProps */.Tz)(store, props, "activeId", "setActiveId");
  (0,_2GXGCHW6/* useStoreProps */.Tz)(store, props, "includesBaseElement");
  (0,_2GXGCHW6/* useStoreProps */.Tz)(store, props, "virtualFocus");
  (0,_2GXGCHW6/* useStoreProps */.Tz)(store, props, "orientation");
  (0,_2GXGCHW6/* useStoreProps */.Tz)(store, props, "rtl");
  (0,_2GXGCHW6/* useStoreProps */.Tz)(store, props, "focusLoop");
  (0,_2GXGCHW6/* useStoreProps */.Tz)(store, props, "focusWrap");
  (0,_2GXGCHW6/* useStoreProps */.Tz)(store, props, "focusShift");
  return store;
}
function useCompositeStore(props = {}) {
  const [store, update] = (0,_2GXGCHW6/* useStore */.Pj)(D7EIQZAU/* createCompositeStore */.z, props);
  return useCompositeStoreProps(store, update, props);
}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/WENSINUV.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $o: () => (/* binding */ CompositeRowContext),
/* harmony export */   Lf: () => (/* binding */ useCompositeProviderContext),
/* harmony export */   U0: () => (/* binding */ CompositeItemContext),
/* harmony export */   aN: () => (/* binding */ CompositeScopedContextProvider),
/* harmony export */   k: () => (/* binding */ useCompositeContext),
/* harmony export */   ws: () => (/* binding */ CompositeContextProvider)
/* harmony export */ });
/* unused harmony export useCompositeScopedContext */
/* harmony import */ var _FMYQNSCK_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/FMYQNSCK.js");
/* harmony import */ var _HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
"use client";



// src/composite/composite-context.tsx

var ctx = (0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__/* .createStoreContext */ .B0)(
  [_FMYQNSCK_js__WEBPACK_IMPORTED_MODULE_2__/* .CollectionContextProvider */ .LN],
  [_FMYQNSCK_js__WEBPACK_IMPORTED_MODULE_2__/* .CollectionScopedContextProvider */ .zX]
);
var useCompositeContext = ctx.useContext;
var useCompositeScopedContext = ctx.useScopedContext;
var useCompositeProviderContext = ctx.useProviderContext;
var CompositeContextProvider = ctx.ContextProvider;
var CompositeScopedContextProvider = ctx.ScopedContextProvider;
var CompositeItemContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(
  void 0
);
var CompositeRowContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(
  void 0
);




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/XMDAT5SM.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ useHovercardStoreProps)
/* harmony export */ });
/* unused harmony export useHovercardStore */
/* harmony import */ var _CBC47ZYL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/CBC47ZYL.js");
/* harmony import */ var _2GXGCHW6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/2GXGCHW6.js");
"use client";



// src/hovercard/hovercard-store.ts

function useHovercardStoreProps(store, update, props) {
  (0,_2GXGCHW6_js__WEBPACK_IMPORTED_MODULE_0__/* .useStoreProps */ .Tz)(store, props, "timeout");
  (0,_2GXGCHW6_js__WEBPACK_IMPORTED_MODULE_0__/* .useStoreProps */ .Tz)(store, props, "showTimeout");
  (0,_2GXGCHW6_js__WEBPACK_IMPORTED_MODULE_0__/* .useStoreProps */ .Tz)(store, props, "hideTimeout");
  return (0,_CBC47ZYL_js__WEBPACK_IMPORTED_MODULE_1__/* .usePopoverStoreProps */ .o)(store, update, props);
}
function useHovercardStore(props = {}) {
  const [store, update] = useStore(Core.createHovercardStore, props);
  return useHovercardStoreProps(store, update, props);
}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/Z32BISHQ.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bi: () => (/* binding */ useId),
/* harmony export */   CH: () => (/* binding */ useForceUpdate),
/* harmony export */   Cy: () => (/* binding */ useAttribute),
/* harmony export */   Kp: () => (/* binding */ useUpdateLayoutEffect),
/* harmony export */   O4: () => (/* binding */ useBooleanEvent),
/* harmony export */   P$: () => (/* binding */ useIsMouseMoving),
/* harmony export */   P1: () => (/* binding */ useMetadataProps),
/* harmony export */   SV: () => (/* binding */ useMergeRefs),
/* harmony export */   TE: () => (/* binding */ usePortalRef),
/* harmony export */   UQ: () => (/* binding */ useSafeLayoutEffect),
/* harmony export */   XB: () => (/* binding */ useTransactionState),
/* harmony export */   _q: () => (/* binding */ useEvent),
/* harmony export */   hX: () => (/* binding */ useLiveRef),
/* harmony export */   nf: () => (/* binding */ useInitialValue),
/* harmony export */   vO: () => (/* binding */ useTagName),
/* harmony export */   w5: () => (/* binding */ useUpdateEffect),
/* harmony export */   w7: () => (/* binding */ useWrapElement)
/* harmony export */ });
/* unused harmony exports useLazyValue, usePreviousValue, useDeferredValue */
/* harmony import */ var _SK3NAZA3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/SK3NAZA3.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
/* harmony import */ var _ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js");
/* harmony import */ var _ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/utils/events.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
"use client";



// src/utils/hooks.ts




var _React = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadValues */ .IA)({}, /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2))));
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
function useTransactionState(callback) {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  useSafeLayoutEffect(() => {
    if (state == null) return;
    if (!callback) return;
    let prevState = null;
    callback((prev) => {
      prevState = prev;
      return state;
    });
    return () => {
      callback(prevState);
    };
  }, [state, callback]);
  return [state, setState];
}
function useMergeRefs(...refs) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!refs.some(Boolean)) return;
    return (value) => {
      for (const ref of refs) {
        (0,_SK3NAZA3_js__WEBPACK_IMPORTED_MODULE_3__/* .setRef */ .cZ)(ref, value);
      }
    };
  }, refs);
}
function useId(defaultId) {
  if (useReactId) {
    const reactId = useReactId();
    if (defaultId) return defaultId;
    return reactId;
  }
  const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultId);
  useSafeLayoutEffect(() => {
    if (defaultId || id) return;
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
    if (typeof type2 !== "string") return;
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
  const [attribute, setAttribute] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue);
  useSafeLayoutEffect(() => {
    const element = refOrElement && "current" in refOrElement ? refOrElement.current : refOrElement;
    if (!element) return;
    const callback = () => {
      const value = element.getAttribute(attributeName);
      if (value == null) return;
      setAttribute(value);
    };
    const observer = new MutationObserver(callback);
    observer.observe(element, { attributeFilter: [attributeName] });
    callback();
    return () => observer.disconnect();
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
  const mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
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
  return (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadProps */ .ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadValues */ .IA)({}, props), { wrapElement });
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
    }, (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadProps */ .ko)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__/* .__spreadValues */ .IA)({}, parent), { [key]: value }));
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
  if (!hasMouseMovement(event)) return;
  mouseMoving = true;
}
function resetMouseMoving() {
  mouseMoving = false;
}




/***/ }),

/***/ "../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

"use strict";
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

/***/ "../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AH: () => (/* binding */ css),
/* harmony export */   i7: () => (/* binding */ keyframes)
/* harmony export */ });
/* unused harmony exports ClassNames, Global, createElement, jsx */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.3.1/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@emotion+serialize@1.1.2/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js");
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__);












var pkg = {
	name: "@emotion/react",
	version: "11.11.1",
	main: "dist/emotion-react.cjs.js",
	module: "dist/emotion-react.esm.js",
	browser: {
		"./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
	},
	exports: {
		".": {
			module: {
				worker: "./dist/emotion-react.worker.esm.js",
				browser: "./dist/emotion-react.browser.esm.js",
				"default": "./dist/emotion-react.esm.js"
			},
			"import": "./dist/emotion-react.cjs.mjs",
			"default": "./dist/emotion-react.cjs.js"
		},
		"./jsx-runtime": {
			module: {
				worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
				browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
				"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
			},
			"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
			"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
		},
		"./_isolated-hnrs": {
			module: {
				worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
				browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
				"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
			},
			"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
			"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
		},
		"./jsx-dev-runtime": {
			module: {
				worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
				browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
				"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
			},
			"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
			"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
		},
		"./package.json": "./package.json",
		"./types/css-prop": "./types/css-prop.d.ts",
		"./macro": {
			types: {
				"import": "./macro.d.mts",
				"default": "./macro.d.ts"
			},
			"default": "./macro.js"
		}
	},
	types: "types/index.d.ts",
	files: [
		"src",
		"dist",
		"jsx-runtime",
		"jsx-dev-runtime",
		"_isolated-hnrs",
		"types/*.d.ts",
		"macro.*"
	],
	sideEffects: false,
	author: "Emotion Contributors",
	license: "MIT",
	scripts: {
		"test:typescript": "dtslint types"
	},
	dependencies: {
		"@babel/runtime": "^7.18.3",
		"@emotion/babel-plugin": "^11.11.0",
		"@emotion/cache": "^11.11.0",
		"@emotion/serialize": "^1.1.2",
		"@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
		"@emotion/utils": "^1.2.1",
		"@emotion/weak-memoize": "^0.3.1",
		"hoist-non-react-statics": "^3.3.1"
	},
	peerDependencies: {
		react: ">=16.8.0"
	},
	peerDependenciesMeta: {
		"@types/react": {
			optional: true
		}
	},
	devDependencies: {
		"@definitelytyped/dtslint": "0.0.112",
		"@emotion/css": "11.11.0",
		"@emotion/css-prettifier": "1.1.3",
		"@emotion/server": "11.11.0",
		"@emotion/styled": "11.11.0",
		"html-tag-names": "^1.1.2",
		react: "16.14.0",
		"svg-tag-names": "^1.1.1",
		typescript: "^4.5.5"
	},
	repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
	publishConfig: {
		access: "public"
	},
	"umd:main": "dist/emotion-react.umd.min.js",
	preconstruct: {
		entrypoints: [
			"./index.js",
			"./jsx-runtime.js",
			"./jsx-dev-runtime.js",
			"./_isolated-hnrs.js"
		],
		umdName: "emotionReact",
		exports: {
			envConditions: [
				"browser",
				"worker"
			],
			extra: {
				"./types/css-prop": "./types/css-prop.d.ts",
				"./macro": {
					types: {
						"import": "./macro.d.mts",
						"default": "./macro.d.ts"
					},
					"default": "./macro.js"
				}
			}
		}
	}
};

var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !hasOwnProperty.call(props, 'css')) {
    // $FlowFixMe
    return React.createElement.apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  createElementArgArray[1] = createEmotionProps(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return React.createElement.apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false; // maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag

var Global = /* #__PURE__ */(/* unused pure expression or super */ null && (withEmotionCache(function (props, cache) {
  if (false) {}

  var styles = props.styles;
  var serialized = serializeStyles([styles], undefined, React.useContext(ThemeContext));

  if (!isBrowser$1) {
    var _ref;

    var serializedNames = serialized.name;
    var serializedStyles = serialized.styles;
    var next = serialized.next;

    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      serializedStyles += next.styles;
      next = next.next;
    }

    var shouldCache = cache.compat === true;
    var rules = cache.insert("", {
      name: serializedNames,
      styles: serializedStyles
    }, cache.sheet, shouldCache);

    if (shouldCache) {
      return null;
    }

    return /*#__PURE__*/React.createElement("style", (_ref = {}, _ref["data-emotion"] = cache.key + "-global " + serializedNames, _ref.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref.nonce = cache.sheet.nonce, _ref));
  } // yes, i know these hooks are used conditionally
  // but it is based on a constant that will never change at runtime
  // it's effectively like having two implementations and switching them out
  // so it's not actually breaking anything


  var sheetRef = React.useRef();
  useInsertionEffectWithLayoutFallback(function () {
    var key = cache.key + "-global"; // use case of https://github.com/emotion-js/emotion/issues/2675

    var sheet = new cache.sheet.constructor({
      key: key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false; // $FlowFixMe

    var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");

    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }

    if (node !== null) {
      rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s

      node.setAttribute('data-emotion', key);
      sheet.hydrate([node]);
    }

    sheetRef.current = [sheet, rehydrating];
    return function () {
      sheet.flush();
    };
  }, [cache]);
  useInsertionEffectWithLayoutFallback(function () {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0],
        rehydrating = sheetRefCurrent[1];

    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }

    if (serialized.next !== undefined) {
      // insert keyframes
      insertStyles(cache, serialized.next, true);
    }

    if (sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }

    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
})));

if (false) {}

function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_2__/* .serializeStyles */ .J)(args);
}

var keyframes = function keyframes() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            if (false) {}

            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
      serializedArr = _ref.serializedArr;
  useInsertionEffectAlwaysWithSyncFallback(function () {

    for (var i = 0; i < serializedArr.length; i++) {
      insertStyles(cache, serializedArr[i], false);
    }
  });

  return null;
};

var ClassNames = /* #__PURE__ */(/* unused pure expression or super */ null && (withEmotionCache(function (props, cache) {
  var hasRendered = false;
  var serializedArr = [];

  var css = function css() {
    if (hasRendered && "production" !== 'production') {}

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var serialized = serializeStyles(args, cache.registered);
    serializedArr.push(serialized); // registration has to happen here as the result of this might get consumed by `cx`

    registerStyles(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };

  var cx = function cx() {
    if (hasRendered && "production" !== 'production') {}

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return merge(cache.registered, css, classnames(args));
  };

  var content = {
    css: css,
    cx: cx,
    theme: React.useContext(ThemeContext)
  };
  var ele = props.children(content);
  hasRendered = true;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Insertion, {
    cache: cache,
    serializedArr: serializedArr
  }), ele);
})));

if (false) {}

if (false) { var globalKey, globalContext, isTestEnv, isBrowser; }




/***/ }),

/***/ "../../node_modules/.pnpm/@floating-ui+react-dom@2.0.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UE: () => (/* binding */ arrow),
/* harmony export */   we: () => (/* binding */ useFloating)
/* harmony export */ });
/* harmony import */ var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@floating-ui+core@1.5.2/node_modules/@floating-ui/core/dist/floating-ui.core.mjs");
/* harmony import */ var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@floating-ui+dom@1.5.3/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js");






/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = options => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, 'current');
  }
  return {
    name: 'arrow',
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === 'function' ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__/* .arrow */ .UE)({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      }
      if (element) {
        return (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__/* .arrow */ .UE)({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};

var index = typeof document !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

// Fork of `fast-deep-equal` that only does the comparisons we need and compares
// functions
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === 'function' && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a && b && typeof a === 'object') {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length) return false;
      for (i = length; i-- !== 0;) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0;) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0;) {
      const key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}

function getDPR(element) {
  if (typeof window === 'undefined') {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}

function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}

function useLatestRef(value) {
  const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}

/**
 * Provides data to position a floating element.
 * @see https://floating-ui.com/docs/useFloating
 */
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = react__WEBPACK_IMPORTED_MODULE_0__.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  const [_floating, _setFloating] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  const setReference = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(node => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(node => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const floatingRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const dataRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform);
  const update = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_3__/* .computePosition */ .rD)(referenceRef.current, floatingRef.current, config).then(data => {
      const fullData = {
        ...data,
        isPositioned: true
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData(data => ({
        ...data,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...(getDPR(elements.floating) >= 1.5 && {
          willChange: 'transform'
        })
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}




/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/base-control/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports VisualLabel, BaseControl */
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+deprecated@4.10.0/node_modules/@wordpress/deprecated/build-module/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _visually_hidden__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/visually-hidden/component.js");
/* harmony import */ var _styles_base_control_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/base-control/styles/base-control-styles.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/use-context-system.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-connect.js");
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





const UnconnectedBaseControl = props => {
  const {
    __nextHasNoMarginBottom = false,
    __associatedWPComponentName = 'BaseControl',
    id,
    label,
    hideLabelFromVision = false,
    help,
    className,
    children
  } = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .useContextSystem */ .A)(props, 'BaseControl');
  if (!__nextHasNoMarginBottom) {
    (0,_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(`Bottom margin styles for wp.components.${__associatedWPComponentName}`, {
      since: '6.7',
      version: '7.0',
      hint: 'Set the `__nextHasNoMarginBottom` prop to true to start opting into the new styles, which will become the default in a future version.'
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_3__/* .Wrapper */ .mO, {
    className: className,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_3__/* .StyledField */ .mh, {
      className: "components-base-control__field"
      // TODO: Official deprecation for this should start after all internal usages have been migrated
      ,
      __nextHasNoMarginBottom: __nextHasNoMarginBottom,
      children: [label && id && (hideLabelFromVision ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_visually_hidden__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
        as: "label",
        htmlFor: id,
        children: label
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_3__/* .StyledLabel */ .Gw, {
        className: "components-base-control__label",
        htmlFor: id,
        children: label
      })), label && !id && (hideLabelFromVision ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_visually_hidden__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
        as: "label",
        children: label
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(VisualLabel, {
        children: label
      })), children]
    }), !!help && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_3__/* .StyledHelp */ .te, {
      id: id ? id + '__help' : undefined,
      className: "components-base-control__help",
      __nextHasNoMarginBottom: __nextHasNoMarginBottom,
      children: help
    })]
  });
};
const UnforwardedVisualLabel = (props, ref) => {
  const {
    className,
    children,
    ...restProps
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_3__/* .StyledVisualLabel */ .Om, {
    ref: ref,
    ...restProps,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)('components-base-control__label', className),
    children: children
  });
};
const VisualLabel = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(UnforwardedVisualLabel);

/**
 * `BaseControl` is a component used to generate labels and help text for components handling user inputs.
 *
 * ```jsx
 * import { BaseControl, useBaseControlProps } from '@wordpress/components';
 *
 * // Render a `BaseControl` for a textarea input
 * const MyCustomTextareaControl = ({ children, ...baseProps }) => (
 * 	// `useBaseControlProps` is a convenience hook to get the props for the `BaseControl`
 * 	// and the inner control itself. Namely, it takes care of generating a unique `id`,
 * 	// properly associating it with the `label` and `help` elements.
 * 	const { baseControlProps, controlProps } = useBaseControlProps( baseProps );
 *
 * 	return (
 * 		<BaseControl { ...baseControlProps } __nextHasNoMarginBottom>
 * 			<textarea { ...controlProps }>
 * 			  { children }
 * 			</textarea>
 * 		</BaseControl>
 * 	);
 * );
 * ```
 */
const BaseControl = Object.assign((0,_context__WEBPACK_IMPORTED_MODULE_7__/* .contextConnectWithoutRef */ .zS)(UnconnectedBaseControl, 'BaseControl'), {
  /**
   * `BaseControl.VisualLabel` is used to render a purely visual label inside a `BaseControl` component.
   *
   * It should only be used in cases where the children being rendered inside `BaseControl` are already accessibly labeled,
   * e.g., a button, but we want an additional visual label for that section equivalent to the labels `BaseControl` would
   * otherwise use if the `label` prop was passed.
   *
   * ```jsx
   * import { BaseControl } from '@wordpress/components';
   *
   * const MyBaseControl = () => (
   * 	<BaseControl
   * 		__nextHasNoMarginBottom
   * 		help="This button is already accessibly labeled."
   * 	>
   * 		<BaseControl.VisualLabel>Author</BaseControl.VisualLabel>
   * 		<Button>Select an author</Button>
   * 	</BaseControl>
   * );
   * ```
   */
  VisualLabel
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseControl);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/base-control/styles/base-control-styles.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  mh: () => (/* binding */ StyledField),
  te: () => (/* binding */ StyledHelp),
  Gw: () => (/* binding */ StyledLabel),
  Om: () => (/* binding */ StyledVisualLabel),
  mO: () => (/* binding */ Wrapper)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1__@types+react@18.3.16_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js + 1 modules
var emotion_styled_base_browser_esm = __webpack_require__("../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1__@types+react@18.3.16_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__("../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/font.js + 1 modules
var font = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/font.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/box-sizing.js
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
/**
 * External dependencies
 */

const boxSizingReset =  true ? {
  name: "kv6lnz",
  styles: "box-sizing:border-box;*,*::before,*::after{box-sizing:inherit;}"
} : 0;
//# sourceMappingURL=box-sizing.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/base-label.js
var base_label = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/base-label.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/colors-values.js
var colors_values = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/colors-values.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/space.js
var space = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/space.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/base-control/styles/base-control-styles.js

function base_control_styles_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


const Wrapper = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",  true ? {
  target: "ej5x27r4"
} : 0)("font-family:", (0,font/* font */.g)('default.fontFamily'), ";font-size:", (0,font/* font */.g)('default.fontSize'), ";", boxSizingReset, ";" + ( true ? "" : 0));
const deprecatedMarginField = ({
  __nextHasNoMarginBottom = false
}) => {
  return !__nextHasNoMarginBottom && /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("margin-bottom:", (0,space/* space */.x)(2), ";" + ( true ? "" : 0),  true ? "" : 0);
};
const StyledField = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",  true ? {
  target: "ej5x27r3"
} : 0)(deprecatedMarginField, " .components-panel__row &{margin-bottom:inherit;}" + ( true ? "" : 0));
const labelStyles = /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)(base_label/* baseLabelTypography */.z, ";display:block;margin-bottom:", (0,space/* space */.x)(2), ";padding:0;" + ( true ? "" : 0),  true ? "" : 0);
const StyledLabel = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("label",  true ? {
  target: "ej5x27r2"
} : 0)(labelStyles, ";" + ( true ? "" : 0));
var _ref =  true ? {
  name: "11yad0w",
  styles: "margin-bottom:revert"
} : 0;
const deprecatedMarginHelp = ({
  __nextHasNoMarginBottom = false
}) => {
  return !__nextHasNoMarginBottom && _ref;
};
const StyledHelp = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("p",  true ? {
  target: "ej5x27r1"
} : 0)("margin-top:", (0,space/* space */.x)(2), ";margin-bottom:0;font-size:", (0,font/* font */.g)('helpText.fontSize'), ";font-style:normal;color:", colors_values/* COLORS */.l.gray[700], ";", deprecatedMarginHelp, ";" + ( true ? "" : 0));
const StyledVisualLabel = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("span",  true ? {
  target: "ej5x27r0"
} : 0)(labelStyles, ";" + ( true ? "" : 0));
//# sourceMappingURL=base-control-styles.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/button/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports UnforwardedButton, Button */
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+deprecated@4.10.0/node_modules/@wordpress/deprecated/build-module/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/tooltip/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/icon/index.js");
/* harmony import */ var _visually_hidden__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/visually-hidden/component.js");
/* harmony import */ var _popover_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/popover/utils.js");
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
  __experimentalIsFocusable,
  isDefault,
  isPrimary,
  isSecondary,
  isTertiary,
  isLink,
  isPressed,
  isSmall,
  size,
  variant,
  describedBy,
  ...otherProps
}) {
  let computedSize = size;
  let computedVariant = variant;
  const newProps = {
    accessibleWhenDisabled: __experimentalIsFocusable,
    // @todo Mark `isPressed` as deprecated
    'aria-pressed': isPressed,
    description: describedBy
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
    accessibleWhenDisabled,
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
    description,
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
  const trulyDisabled = disabled && !accessibleWhenDisabled;
  const Tag = href !== undefined && !disabled ? 'a' : 'button';
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
  if (disabled && accessibleWhenDisabled) {
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
  const descriptionId = description ? instanceId : undefined;
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
    text: children?.length && description ? description : label,
    shortcut,
    placement: tooltipPosition &&
    // Convert legacy `position` values to be used with the new `placement` prop
    (0,_popover_utils__WEBPACK_IMPORTED_MODULE_5__/* .positionToPlacement */ .YK)(tooltipPosition)
  } : {};
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tooltip__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay, {
      ...tooltipProps,
      children: element
    }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_visually_hidden__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        id: descriptionId,
        children: description
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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/constants.js":
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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-connect.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KZ: () => (/* binding */ contextConnect),
/* harmony export */   SZ: () => (/* binding */ hasConnectNamespace),
/* harmony export */   zS: () => (/* binding */ contextConnectWithoutRef)
/* harmony export */ });
/* unused harmony export getConnectNamespace */
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _wordpress_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+warning@3.10.0/node_modules/@wordpress/warning/build-module/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/constants.js");
/* harmony import */ var _get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/get-styled-class-name-from-key.js");
/* wp:polyfill */
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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-system-provider.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  aG: () => (/* binding */ ComponentsContext),
  c7: () => (/* binding */ ContextSystemProvider),
  rm: () => (/* binding */ useComponentsContext)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js
var cjs = __webpack_require__("../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js");
var cjs_default = /*#__PURE__*/__webpack_require__.n(cjs);
// EXTERNAL MODULE: ../../node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/es6/index.js
var es6 = __webpack_require__("../../node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/es6/index.js");
var es6_default = /*#__PURE__*/__webpack_require__.n(es6);
// EXTERNAL MODULE: ../../node_modules/.pnpm/is-plain-object@5.0.0/node_modules/is-plain-object/dist/is-plain-object.mjs
var is_plain_object = __webpack_require__("../../node_modules/.pnpm/is-plain-object@5.0.0/node_modules/is-plain-object/dist/is-plain-object.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+warning@3.10.0/node_modules/@wordpress/warning/build-module/index.js + 1 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+warning@3.10.0/node_modules/@wordpress/warning/build-module/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/hooks/use-update-effect.js
/**
 * WordPress dependencies
 */


/**
 * A `React.useEffect` that will not run on the first render.
 * Source:
 * https://github.com/ariakit/ariakit/blob/main/packages/ariakit-react-core/src/utils/hooks.ts
 *
 * @param {import('react').EffectCallback} effect
 * @param {import('react').DependencyList} deps
 */
function useUpdateEffect(effect, deps) {
  const mountedRef = (0,react.useRef)(false);
  (0,react.useEffect)(() => {
    if (mountedRef.current) {
      return effect();
    }
    mountedRef.current = true;
    return undefined;
    // Disable reasons:
    // 1. This hook needs to pass a dep list that isn't an array literal
    // 2. `effect` is missing from the array, and will need to be added carefully to avoid additional warnings
    // see https://github.com/WordPress/gutenberg/pull/41166
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  (0,react.useEffect)(() => () => {
    mountedRef.current = false;
  }, []);
}
/* harmony default export */ const use_update_effect = (useUpdateEffect);
//# sourceMappingURL=use-update-effect.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-system-provider.js
/**
 * External dependencies
 */




/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


const ComponentsContext = (0,react.createContext)(/** @type {Record<string, any>} */{});
const useComponentsContext = () => (0,react.useContext)(ComponentsContext);

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
  const valueRef = (0,react.useRef)(value);
  use_update_effect(() => {
    if (
    // Objects are equivalent.
    es6_default()(valueRef.current, value) &&
    // But not the same reference.
    valueRef.current !== value) {
      globalThis.SCRIPT_DEBUG === true ? (0,build_module/* default */.A)(`Please memoize your context: ${JSON.stringify(value)}`) : void 0;
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
  const config = (0,react.useMemo)(() => {
    // Deep clone `parentContext` to avoid mutating it later.
    return cjs_default()(parentContext !== null && parentContext !== void 0 ? parentContext : {}, value !== null && value !== void 0 ? value : {}, {
      isMergeableObject: is_plain_object/* isPlainObject */.Q
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
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ComponentsContext.Provider, {
    value: contextValue,
    children: children
  });
};
const ContextSystemProvider = (0,react.memo)(BaseContextSystemProvider);
//# sourceMappingURL=context-system-provider.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/get-styled-class-name-from-key.js":
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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/use-context-system.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ useContextSystem)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+warning@3.10.0/node_modules/@wordpress/warning/build-module/index.js + 1 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+warning@3.10.0/node_modules/@wordpress/warning/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-system-provider.js + 1 modules
var context_system_provider = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-system-provider.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/constants.js
var constants = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/constants.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/utils.js
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/get-styled-class-name-from-key.js
var get_styled_class_name_from_key = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/get-styled-class-name-from-key.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js
var use_cx = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/use-context-system.js
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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/dropdown/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ dropdown)
});

// UNUSED EXPORTS: Dropdown

// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js
var use_merge_refs = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+deprecated@4.10.0/node_modules/@wordpress/deprecated/build-module/index.js
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+deprecated@4.10.0/node_modules/@wordpress/deprecated/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/use-context-system.js + 1 modules
var use_context_system = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/use-context-system.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-connect.js
var context_connect = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-connect.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js
var use_controlled_value = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@floating-ui+core@1.5.2/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
var floating_ui_core = __webpack_require__("../../node_modules/.pnpm/@floating-ui+core@1.5.2/node_modules/@floating-ui/core/dist/floating-ui.core.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@floating-ui+react-dom@2.0.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var floating_ui_react_dom = __webpack_require__("../../node_modules/.pnpm/@floating-ui+react-dom@2.0.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@floating-ui+dom@1.5.3/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs + 1 modules
var floating_ui_dom = __webpack_require__("../../node_modules/.pnpm/@floating-ui+dom@1.5.3/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/render/dom/motion.mjs + 205 modules
var motion = __webpack_require__("../../node_modules/.pnpm/framer-motion@11.3.30_@emotion+is-prop-valid@1.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/render/dom/motion.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js
var react_dom = __webpack_require__("../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-viewport-match/index.js
var use_viewport_match = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-viewport-match/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.10.0/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var i18n_build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.10.0/node_modules/@wordpress/i18n/build-module/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+keycodes@4.10.0/node_modules/@wordpress/keycodes/build-module/platform.js
/**
 * Return true if platform is MacOS.
 *
 * @param {Window?} _window window object by default; used for DI testing.
 *
 * @return {boolean} True if MacOS; false otherwise.
 */
function isAppleOS(_window = null) {
  if (!_window) {
    if (typeof window === 'undefined') {
      return false;
    }
    _window = window;
  }
  const {
    platform
  } = _window.navigator;
  return platform.indexOf('Mac') !== -1 || ['iPad', 'iPhone'].includes(platform);
}
//# sourceMappingURL=platform.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+keycodes@4.10.0/node_modules/@wordpress/keycodes/build-module/index.js
/**
 * Note: The order of the modifier keys in many of the [foo]Shortcut()
 * functions in this file are intentional and should not be changed. They're
 * designed to fit with the standard menu keyboard shortcuts shown in the
 * user's platform.
 *
 * For example, on MacOS menu shortcuts will place Shift before Command, but
 * on Windows Control will usually come first. So don't provide your own
 * shortcut combos directly to keyboardShortcut().
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/** @typedef {typeof ALT | CTRL | COMMAND | SHIFT } WPModifierPart */

/** @typedef {'primary' | 'primaryShift' | 'primaryAlt' | 'secondary' | 'access' | 'ctrl' | 'alt' | 'ctrlShift' | 'shift' | 'shiftAlt' | 'undefined'} WPKeycodeModifier */

/**
 * An object of handler functions for each of the possible modifier
 * combinations. A handler will return a value for a given key.
 *
 * @template T
 *
 * @typedef {Record<WPKeycodeModifier, T>} WPModifierHandler
 */

/**
 * @template T
 *
 * @typedef {(character: string, isApple?: () => boolean) => T} WPKeyHandler
 */
/** @typedef {(event: import('react').KeyboardEvent<HTMLElement> | KeyboardEvent, character: string, isApple?: () => boolean) => boolean} WPEventKeyHandler */

/** @typedef {( isApple: () => boolean ) => WPModifierPart[]} WPModifier */

/**
 * Keycode for BACKSPACE key.
 */
const BACKSPACE = 8;

/**
 * Keycode for TAB key.
 */
const TAB = 9;

/**
 * Keycode for ENTER key.
 */
const ENTER = 13;

/**
 * Keycode for ESCAPE key.
 */
const ESCAPE = 27;

/**
 * Keycode for SPACE key.
 */
const SPACE = 32;

/**
 * Keycode for PAGEUP key.
 */
const PAGEUP = 33;

/**
 * Keycode for PAGEDOWN key.
 */
const PAGEDOWN = 34;

/**
 * Keycode for END key.
 */
const END = 35;

/**
 * Keycode for HOME key.
 */
const HOME = 36;

/**
 * Keycode for LEFT key.
 */
const LEFT = 37;

/**
 * Keycode for UP key.
 */
const UP = 38;

/**
 * Keycode for RIGHT key.
 */
const RIGHT = 39;

/**
 * Keycode for DOWN key.
 */
const DOWN = 40;

/**
 * Keycode for DELETE key.
 */
const DELETE = 46;

/**
 * Keycode for F10 key.
 */
const F10 = 121;

/**
 * Keycode for ALT key.
 */
const ALT = 'alt';

/**
 * Keycode for CTRL key.
 */
const CTRL = 'ctrl';

/**
 * Keycode for COMMAND/META key.
 */
const COMMAND = 'meta';

/**
 * Keycode for SHIFT key.
 */
const SHIFT = 'shift';

/**
 * Keycode for ZERO key.
 */
const ZERO = 48;


/**
 * Capitalise the first character of a string.
 * @param {string} string String to capitalise.
 * @return {string} Capitalised string.
 */
function capitaliseFirstCharacter(string) {
  return string.length < 2 ? string.toUpperCase() : string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Map the values of an object with a specified callback and return the result object.
 *
 * @template {{ [s: string]: any; } | ArrayLike<any>} T
 *
 * @param {T}                     object Object to map values of.
 * @param {( value: any ) => any} mapFn  Mapping function
 *
 * @return {any} Active modifier constants.
 */
function mapValues(object, mapFn) {
  return Object.fromEntries(Object.entries(object).map(([key, value]) => [key, mapFn(value)]));
}

/**
 * Object that contains functions that return the available modifier
 * depending on platform.
 *
 * @type {WPModifierHandler< ( isApple: () => boolean ) => WPModifierPart[]>}
 */
const modifiers = {
  primary: _isApple => _isApple() ? [COMMAND] : [CTRL],
  primaryShift: _isApple => _isApple() ? [SHIFT, COMMAND] : [CTRL, SHIFT],
  primaryAlt: _isApple => _isApple() ? [ALT, COMMAND] : [CTRL, ALT],
  secondary: _isApple => _isApple() ? [SHIFT, ALT, COMMAND] : [CTRL, SHIFT, ALT],
  access: _isApple => _isApple() ? [CTRL, ALT] : [SHIFT, ALT],
  ctrl: () => [CTRL],
  alt: () => [ALT],
  ctrlShift: () => [CTRL, SHIFT],
  shift: () => [SHIFT],
  shiftAlt: () => [SHIFT, ALT],
  undefined: () => []
};

/**
 * An object that contains functions to get raw shortcuts.
 *
 * These are intended for user with the KeyboardShortcuts.
 *
 * @example
 * ```js
 * // Assuming macOS:
 * rawShortcut.primary( 'm' )
 * // "meta+m""
 * ```
 *
 * @type {WPModifierHandler<WPKeyHandler<string>>} Keyed map of functions to raw
 *                                                 shortcuts.
 */
const rawShortcut = mapValues(modifiers, (/** @type {WPModifier} */modifier) => {
  return /** @type {WPKeyHandler<string>} */(character, _isApple = isAppleOS) => {
    return [...modifier(_isApple), character.toLowerCase()].join('+');
  };
});

/**
 * Return an array of the parts of a keyboard shortcut chord for display.
 *
 * @example
 * ```js
 * // Assuming macOS:
 * displayShortcutList.primary( 'm' );
 * // [ "⌘", "M" ]
 * ```
 *
 * @type {WPModifierHandler<WPKeyHandler<string[]>>} Keyed map of functions to
 *                                                   shortcut sequences.
 */
const displayShortcutList = mapValues(modifiers, (/** @type {WPModifier} */modifier) => {
  return /** @type {WPKeyHandler<string[]>} */(character, _isApple = isAppleOS) => {
    const isApple = _isApple();
    const replacementKeyMap = {
      [ALT]: isApple ? '⌥' : 'Alt',
      [CTRL]: isApple ? '⌃' : 'Ctrl',
      // Make sure ⌃ is the U+2303 UP ARROWHEAD unicode character and not the caret character.
      [COMMAND]: '⌘',
      [SHIFT]: isApple ? '⇧' : 'Shift'
    };
    const modifierKeys = modifier(_isApple).reduce((accumulator, key) => {
      var _replacementKeyMap$ke;
      const replacementKey = (_replacementKeyMap$ke = replacementKeyMap[key]) !== null && _replacementKeyMap$ke !== void 0 ? _replacementKeyMap$ke : key;
      // If on the Mac, adhere to platform convention and don't show plus between keys.
      if (isApple) {
        return [...accumulator, replacementKey];
      }
      return [...accumulator, replacementKey, '+'];
    }, /** @type {string[]} */[]);
    return [...modifierKeys, capitaliseFirstCharacter(character)];
  };
});

/**
 * An object that contains functions to display shortcuts.
 *
 * @example
 * ```js
 * // Assuming macOS:
 * displayShortcut.primary( 'm' );
 * // "⌘M"
 * ```
 *
 * @type {WPModifierHandler<WPKeyHandler<string>>} Keyed map of functions to
 *                                                 display shortcuts.
 */
const displayShortcut = mapValues(displayShortcutList, (/** @type {WPKeyHandler<string[]>} */shortcutList) => {
  return /** @type {WPKeyHandler<string>} */(character, _isApple = isAppleOS) => shortcutList(character, _isApple).join('');
});

/**
 * An object that contains functions to return an aria label for a keyboard
 * shortcut.
 *
 * @example
 * ```js
 * // Assuming macOS:
 * shortcutAriaLabel.primary( '.' );
 * // "Command + Period"
 * ```
 *
 * @type {WPModifierHandler<WPKeyHandler<string>>} Keyed map of functions to
 *                                                 shortcut ARIA labels.
 */
const shortcutAriaLabel = mapValues(modifiers, (/** @type {WPModifier} */modifier) => {
  return /** @type {WPKeyHandler<string>} */(character, _isApple = isAppleOS) => {
    const isApple = _isApple();
    /** @type {Record<string,string>} */
    const replacementKeyMap = {
      [SHIFT]: 'Shift',
      [COMMAND]: isApple ? 'Command' : 'Control',
      [CTRL]: 'Control',
      [ALT]: isApple ? 'Option' : 'Alt',
      /* translators: comma as in the character ',' */
      ',': (0,i18n_build_module.__)('Comma'),
      /* translators: period as in the character '.' */
      '.': (0,i18n_build_module.__)('Period'),
      /* translators: backtick as in the character '`' */
      '`': (0,i18n_build_module.__)('Backtick'),
      /* translators: tilde as in the character '~' */
      '~': (0,i18n_build_module.__)('Tilde')
    };
    return [...modifier(_isApple), character].map(key => {
      var _replacementKeyMap$ke2;
      return capitaliseFirstCharacter((_replacementKeyMap$ke2 = replacementKeyMap[key]) !== null && _replacementKeyMap$ke2 !== void 0 ? _replacementKeyMap$ke2 : key);
    }).join(isApple ? ' ' : ' + ');
  };
});

/**
 * From a given KeyboardEvent, returns an array of active modifier constants for
 * the event.
 *
 * @param {import('react').KeyboardEvent<HTMLElement> | KeyboardEvent} event Keyboard event.
 *
 * @return {Array<WPModifierPart>} Active modifier constants.
 */
function getEventModifiers(event) {
  return /** @type {WPModifierPart[]} */[ALT, CTRL, COMMAND, SHIFT].filter(key => event[(/** @type {'altKey' | 'ctrlKey' | 'metaKey' | 'shiftKey'} */
  `${key}Key`)]);
}

/**
 * An object that contains functions to check if a keyboard event matches a
 * predefined shortcut combination.
 *
 * @example
 * ```js
 * // Assuming an event for ⌘M key press:
 * isKeyboardEvent.primary( event, 'm' );
 * // true
 * ```
 *
 * @type {WPModifierHandler<WPEventKeyHandler>} Keyed map of functions
 *                                                       to match events.
 */
const isKeyboardEvent = mapValues(modifiers, (/** @type {WPModifier} */getModifiers) => {
  return /** @type {WPEventKeyHandler} */(event, character, _isApple = isAppleOS) => {
    const mods = getModifiers(_isApple);
    const eventMods = getEventModifiers(event);
    /** @type {Record<string,string>} */
    const replacementWithShiftKeyMap = {
      Comma: ',',
      Backslash: '\\',
      // Windows returns `\` for both IntlRo and IntlYen.
      IntlRo: '\\',
      IntlYen: '\\'
    };
    const modsDiff = mods.filter(mod => !eventMods.includes(mod));
    const eventModsDiff = eventMods.filter(mod => !mods.includes(mod));
    if (modsDiff.length > 0 || eventModsDiff.length > 0) {
      return false;
    }
    let key = event.key.toLowerCase();
    if (!character) {
      return mods.includes(/** @type {WPModifierPart} */key);
    }
    if (event.altKey && character.length === 1) {
      key = String.fromCharCode(event.keyCode).toLowerCase();
    }

    // `event.key` returns the value of the key pressed, taking into the state of
    // modifier keys such as `Shift`. If the shift key is pressed, a different
    // value may be returned depending on the keyboard layout. It is necessary to
    // convert to the physical key value that don't take into account keyboard
    // layout or modifier key state.
    if (event.shiftKey && character.length === 1 && replacementWithShiftKeyMap[event.code]) {
      key = replacementWithShiftKeyMap[event.code];
    }

    // For backwards compatibility.
    if (character === 'del') {
      character = 'delete';
    }
    return key === character.toLowerCase();
  };
});
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-constrained-tabbing/index.js
var use_constrained_tabbing = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-constrained-tabbing/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-on-mount/index.js
var use_focus_on_mount = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-on-mount/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-return/index.js
var use_focus_return = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-return/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-outside/index.js
/**
 * WordPress dependencies
 */


/**
 * Input types which are classified as button types, for use in considering
 * whether element is a (focus-normalized) button.
 */
const INPUT_BUTTON_TYPES = ['button', 'submit'];

/**
 * List of HTML button elements subject to focus normalization
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
 */

/**
 * Returns true if the given element is a button element subject to focus
 * normalization, or false otherwise.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
 *
 * @param eventTarget The target from a mouse or touch event.
 *
 * @return Whether the element is a button element subject to focus normalization.
 */
function isFocusNormalizedButton(eventTarget) {
  if (!(eventTarget instanceof window.HTMLElement)) {
    return false;
  }
  switch (eventTarget.nodeName) {
    case 'A':
    case 'BUTTON':
      return true;
    case 'INPUT':
      return INPUT_BUTTON_TYPES.includes(eventTarget.type);
  }
  return false;
}
/**
 * A react hook that can be used to check whether focus has moved outside the
 * element the event handlers are bound to.
 *
 * @param onFocusOutside A callback triggered when focus moves outside
 *                       the element the event handlers are bound to.
 *
 * @return An object containing event handlers. Bind the event handlers to a
 * wrapping element element to capture when focus moves outside that element.
 */
function useFocusOutside(onFocusOutside) {
  const currentOnFocusOutsideRef = (0,react.useRef)(onFocusOutside);
  (0,react.useEffect)(() => {
    currentOnFocusOutsideRef.current = onFocusOutside;
  }, [onFocusOutside]);
  const preventBlurCheckRef = (0,react.useRef)(false);
  const blurCheckTimeoutIdRef = (0,react.useRef)();

  /**
   * Cancel a blur check timeout.
   */
  const cancelBlurCheck = (0,react.useCallback)(() => {
    clearTimeout(blurCheckTimeoutIdRef.current);
  }, []);

  // Cancel blur checks on unmount.
  (0,react.useEffect)(() => {
    return () => cancelBlurCheck();
  }, []);

  // Cancel a blur check if the callback or ref is no longer provided.
  (0,react.useEffect)(() => {
    if (!onFocusOutside) {
      cancelBlurCheck();
    }
  }, [onFocusOutside, cancelBlurCheck]);

  /**
   * Handles a mousedown or mouseup event to respectively assign and
   * unassign a flag for preventing blur check on button elements. Some
   * browsers, namely Firefox and Safari, do not emit a focus event on
   * button elements when clicked, while others do. The logic here
   * intends to normalize this as treating click on buttons as focus.
   *
   * @param event
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
   */
  const normalizeButtonFocus = (0,react.useCallback)(event => {
    const {
      type,
      target
    } = event;
    const isInteractionEnd = ['mouseup', 'touchend'].includes(type);
    if (isInteractionEnd) {
      preventBlurCheckRef.current = false;
    } else if (isFocusNormalizedButton(target)) {
      preventBlurCheckRef.current = true;
    }
  }, []);

  /**
   * A callback triggered when a blur event occurs on the element the handler
   * is bound to.
   *
   * Calls the `onFocusOutside` callback in an immediate timeout if focus has
   * move outside the bound element and is still within the document.
   */
  const queueBlurCheck = (0,react.useCallback)(event => {
    // React does not allow using an event reference asynchronously
    // due to recycling behavior, except when explicitly persisted.
    event.persist();

    // Skip blur check if clicking button. See `normalizeButtonFocus`.
    if (preventBlurCheckRef.current) {
      return;
    }

    // The usage of this attribute should be avoided. The only use case
    // would be when we load modals that are not React components and
    // therefore don't exist in the React tree. An example is opening
    // the Media Library modal from another dialog.
    // This attribute should contain a selector of the related target
    // we want to ignore, because we still need to trigger the blur event
    // on all other cases.
    const ignoreForRelatedTarget = event.target.getAttribute('data-unstable-ignore-focus-outside-for-relatedtarget');
    if (ignoreForRelatedTarget && event.relatedTarget?.closest(ignoreForRelatedTarget)) {
      return;
    }
    blurCheckTimeoutIdRef.current = setTimeout(() => {
      // If document is not focused then focus should remain
      // inside the wrapped component and therefore we cancel
      // this blur event thereby leaving focus in place.
      // https://developer.mozilla.org/en-US/docs/Web/API/Document/hasFocus.
      if (!document.hasFocus()) {
        event.preventDefault();
        return;
      }
      if ('function' === typeof currentOnFocusOutsideRef.current) {
        currentOnFocusOutsideRef.current(event);
      }
    }, 0);
  }, []);
  return {
    onFocus: cancelBlurCheck,
    onMouseDown: normalizeButtonFocus,
    onMouseUp: normalizeButtonFocus,
    onTouchStart: normalizeButtonFocus,
    onTouchEnd: normalizeButtonFocus,
    onBlur: queueBlurCheck
  };
}
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-dialog/index.js
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
 * Returns a ref and props to apply to a dialog wrapper to enable the following behaviors:
 *  - constrained tabbing.
 *  - focus on mount.
 *  - return focus on unmount.
 *  - focus outside.
 *
 * @param options Dialog Options.
 */
function useDialog(options) {
  const currentOptions = (0,react.useRef)();
  const {
    constrainTabbing = options.focusOnMount !== false
  } = options;
  (0,react.useEffect)(() => {
    currentOptions.current = options;
  }, Object.values(options));
  const constrainedTabbingRef = (0,use_constrained_tabbing/* default */.A)();
  const focusOnMountRef = (0,use_focus_on_mount/* default */.A)(options.focusOnMount);
  const focusReturnRef = (0,use_focus_return/* default */.A)();
  const focusOutsideProps = useFocusOutside(event => {
    // This unstable prop  is here only to manage backward compatibility
    // for the Popover component otherwise, the onClose should be enough.
    if (currentOptions.current?.__unstableOnClose) {
      currentOptions.current.__unstableOnClose('focus-outside', event);
    } else if (currentOptions.current?.onClose) {
      currentOptions.current.onClose();
    }
  });
  const closeOnEscapeRef = (0,react.useCallback)(node => {
    if (!node) {
      return;
    }
    node.addEventListener('keydown', event => {
      // Close on escape.
      if (event.keyCode === ESCAPE && !event.defaultPrevented && currentOptions.current?.onClose) {
        event.preventDefault();
        currentOptions.current.onClose();
      }
    });
  }, []);
  return [(0,use_merge_refs/* default */.A)([constrainTabbing ? constrainedTabbingRef : null, options.focusOnMount !== false ? focusReturnRef : null, options.focusOnMount !== false ? focusOnMountRef : null, closeOnEscapeRef]), {
    ...focusOutsideProps,
    tabIndex: -1
  }];
}
/* harmony default export */ const use_dialog = (useDialog);
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-reduced-motion/index.js
var use_reduced_motion = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-reduced-motion/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/close.js
var library_close = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/close.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js
var svg = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/button/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/scroll-lock/index.js
/**
 * WordPress dependencies
 */


/*
 * Setting `overflow: hidden` on html and body elements resets body scroll in iOS.
 * Save scroll top so we can restore it after locking scroll.
 *
 * NOTE: It would be cleaner and possibly safer to find a localized solution such
 * as preventing default on certain touchmove events.
 */
let previousScrollTop = 0;
function setLocked(locked) {
  const scrollingElement = document.scrollingElement || document.body;
  if (locked) {
    previousScrollTop = scrollingElement.scrollTop;
  }
  const methodName = locked ? 'add' : 'remove';
  scrollingElement.classList[methodName]('lockscroll');

  // Adding the class to the document element seems to be necessary in iOS.
  document.documentElement.classList[methodName]('lockscroll');
  if (!locked) {
    scrollingElement.scrollTop = previousScrollTop;
  }
}
let lockCounter = 0;

/**
 * ScrollLock is a content-free React component for declaratively preventing
 * scroll bleed from modal UI to the page body. This component applies a
 * `lockscroll` class to the `document.documentElement` and
 * `document.scrollingElement` elements to stop the body from scrolling. When it
 * is present, the lock is applied.
 *
 * ```jsx
 * import { ScrollLock, Button } from '@wordpress/components';
 * import { useState } from '@wordpress/element';
 *
 * const MyScrollLock = () => {
 *   const [ isScrollLocked, setIsScrollLocked ] = useState( false );
 *
 *   const toggleLock = () => {
 *     setIsScrollLocked( ( locked ) => ! locked ) );
 *   };
 *
 *   return (
 *     <div>
 *       <Button variant="secondary" onClick={ toggleLock }>
 *         Toggle scroll lock
 *       </Button>
 *       { isScrollLocked && <ScrollLock /> }
 *       <p>
 *         Scroll locked:
 *         <strong>{ isScrollLocked ? 'Yes' : 'No' }</strong>
 *       </p>
 *     </div>
 *   );
 * };
 * ```
 */
function ScrollLock() {
  (0,react.useEffect)(() => {
    if (lockCounter === 0) {
      setLocked(true);
    }
    ++lockCounter;
    return () => {
      if (lockCounter === 1) {
        setLocked(false);
      }
      --lockCounter;
    };
  }, []);
  return null;
}
/* harmony default export */ const scroll_lock = (ScrollLock);
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/use-slot.js + 1 modules
var use_slot = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/use-slot.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/slot-fill/index.js + 9 modules
var slot_fill = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/slot-fill/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/popover/utils.js
var utils = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/popover/utils.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/popover/overlay-middlewares.js
/**
 * External dependencies
 */


function overlayMiddlewares() {
  return [{
    name: 'overlay',
    fn({
      rects
    }) {
      return rects.reference;
    }
  }, (0,floating_ui_core/* size */.Ej)({
    apply({
      rects,
      elements
    }) {
      var _elements$floating;
      const {
        firstElementChild
      } = (_elements$floating = elements.floating) !== null && _elements$floating !== void 0 ? _elements$floating : {};

      // Only HTMLElement instances have the `style` property.
      if (!(firstElementChild instanceof HTMLElement)) {
        return;
      }

      // Reduce the height of the popover to the available space.
      Object.assign(firstElementChild.style, {
        width: `${rects.reference.width}px`,
        height: `${rects.reference.height}px`
      });
    }
  })];
}
//# sourceMappingURL=overlay-middlewares.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/style-provider/index.js
var style_provider = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/style-provider/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/popover/index.js
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
 * Name of slot in which popover should fill.
 *
 * @type {string}
 */

const SLOT_NAME = 'Popover';

// An SVG displaying a triangle facing down, filled with a solid
// color and bordered in such a way to create an arrow-like effect.
// Keeping the SVG's viewbox squared simplify the arrow positioning
// calculations.
const ArrowTriangle = () => /*#__PURE__*/(0,jsx_runtime.jsxs)(svg/* SVG */.t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 100 100",
  className: "components-popover__triangle",
  role: "presentation",
  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
    className: "components-popover__triangle-bg",
    d: "M 0 0 L 50 50 L 100 0"
  }), /*#__PURE__*/(0,jsx_runtime.jsx)(svg/* Path */.wA, {
    className: "components-popover__triangle-border",
    d: "M 0 0 L 50 50 L 100 0",
    vectorEffect: "non-scaling-stroke"
  })]
});
const slotNameContext = (0,react.createContext)(undefined);
const fallbackContainerClassname = 'components-popover__fallback-container';
const getPopoverFallbackContainer = () => {
  let container = document.body.querySelector('.' + fallbackContainerClassname);
  if (!container) {
    container = document.createElement('div');
    container.className = fallbackContainerClassname;
    document.body.append(container);
  }
  return container;
};
const UnforwardedPopover = (props, forwardedRef) => {
  const {
    animate = true,
    headerTitle,
    constrainTabbing,
    onClose,
    children,
    className,
    noArrow = true,
    position,
    placement: placementProp = 'bottom-start',
    offset: offsetProp = 0,
    focusOnMount = 'firstElement',
    anchor,
    expandOnMobile,
    onFocusOutside,
    __unstableSlotName = SLOT_NAME,
    flip = true,
    resize = true,
    shift = false,
    inline = false,
    variant,
    style: contentStyle,
    // Deprecated props
    __unstableForcePosition,
    anchorRef,
    anchorRect,
    getAnchorRect,
    isAlternate,
    // Rest
    ...contentProps
  } = (0,use_context_system/* useContextSystem */.A)(props, 'Popover');
  let computedFlipProp = flip;
  let computedResizeProp = resize;
  if (__unstableForcePosition !== undefined) {
    (0,build_module/* default */.A)('`__unstableForcePosition` prop in wp.components.Popover', {
      since: '6.1',
      version: '6.3',
      alternative: '`flip={ false }` and  `resize={ false }`'
    });

    // Back-compat, set the `flip` and `resize` props
    // to `false` to replicate `__unstableForcePosition`.
    computedFlipProp = !__unstableForcePosition;
    computedResizeProp = !__unstableForcePosition;
  }
  if (anchorRef !== undefined) {
    (0,build_module/* default */.A)('`anchorRef` prop in wp.components.Popover', {
      since: '6.1',
      alternative: '`anchor` prop'
    });
  }
  if (anchorRect !== undefined) {
    (0,build_module/* default */.A)('`anchorRect` prop in wp.components.Popover', {
      since: '6.1',
      alternative: '`anchor` prop'
    });
  }
  if (getAnchorRect !== undefined) {
    (0,build_module/* default */.A)('`getAnchorRect` prop in wp.components.Popover', {
      since: '6.1',
      alternative: '`anchor` prop'
    });
  }
  const computedVariant = isAlternate ? 'toolbar' : variant;
  if (isAlternate !== undefined) {
    (0,build_module/* default */.A)('`isAlternate` prop in wp.components.Popover', {
      since: '6.2',
      alternative: "`variant` prop with the `'toolbar'` value"
    });
  }
  const arrowRef = (0,react.useRef)(null);
  const [fallbackReferenceElement, setFallbackReferenceElement] = (0,react.useState)(null);
  const anchorRefFallback = (0,react.useCallback)(node => {
    setFallbackReferenceElement(node);
  }, []);
  const isMobileViewport = (0,use_viewport_match/* default */.A)('medium', '<');
  const isExpanded = expandOnMobile && isMobileViewport;
  const hasArrow = !isExpanded && !noArrow;
  const normalizedPlacementFromProps = position ? (0,utils/* positionToPlacement */.YK)(position) : placementProp;
  const middleware = [...(placementProp === 'overlay' ? overlayMiddlewares() : []), (0,floating_ui_core/* offset */.cY)(offsetProp), computedFlipProp && (0,floating_ui_core/* flip */.UU)(), computedResizeProp && (0,floating_ui_core/* size */.Ej)({
    apply(sizeProps) {
      var _refs$floating$curren;
      const {
        firstElementChild
      } = (_refs$floating$curren = refs.floating.current) !== null && _refs$floating$curren !== void 0 ? _refs$floating$curren : {};

      // Only HTMLElement instances have the `style` property.
      if (!(firstElementChild instanceof HTMLElement)) {
        return;
      }

      // Reduce the height of the popover to the available space.
      Object.assign(firstElementChild.style, {
        maxHeight: `${sizeProps.availableHeight}px`,
        overflow: 'auto'
      });
    }
  }), shift && (0,floating_ui_core/* shift */.BN)({
    crossAxis: true,
    limiter: (0,floating_ui_core/* limitShift */.ER)(),
    padding: 1 // Necessary to avoid flickering at the edge of the viewport.
  }), (0,floating_ui_react_dom/* arrow */.UE)({
    element: arrowRef
  })];
  const slotName = (0,react.useContext)(slotNameContext) || __unstableSlotName;
  const slot = (0,use_slot/* default */.A)(slotName);
  let onDialogClose;
  if (onClose || onFocusOutside) {
    onDialogClose = (type, event) => {
      // Ideally the popover should have just a single onClose prop and
      // not three props that potentially do the same thing.
      if (type === 'focus-outside' && onFocusOutside) {
        onFocusOutside(event);
      } else if (onClose) {
        onClose();
      }
    };
  }
  const [dialogRef, dialogProps] = use_dialog({
    constrainTabbing,
    focusOnMount,
    __unstableOnClose: onDialogClose,
    // @ts-expect-error The __unstableOnClose property needs to be deprecated first (see https://github.com/WordPress/gutenberg/pull/27675)
    onClose: onDialogClose
  });
  const {
    // Positioning coordinates
    x,
    y,
    // Object with "regular" refs to both "reference" and "floating"
    refs,
    // Type of CSS position property to use (absolute or fixed)
    strategy,
    update,
    placement: computedPlacement,
    middlewareData: {
      arrow: arrowData
    }
  } = (0,floating_ui_react_dom/* useFloating */.we)({
    placement: normalizedPlacementFromProps === 'overlay' ? undefined : normalizedPlacementFromProps,
    middleware,
    whileElementsMounted: (referenceParam, floatingParam, updateParam) => (0,floating_ui_dom/* autoUpdate */.ll)(referenceParam, floatingParam, updateParam, {
      layoutShift: false,
      animationFrame: true
    })
  });
  const arrowCallbackRef = (0,react.useCallback)(node => {
    arrowRef.current = node;
    update();
  }, [update]);

  // When any of the possible anchor "sources" change,
  // recompute the reference element (real or virtual) and its owner document.

  const anchorRefTop = anchorRef?.top;
  const anchorRefBottom = anchorRef?.bottom;
  const anchorRefStartContainer = anchorRef?.startContainer;
  const anchorRefCurrent = anchorRef?.current;
  (0,react.useLayoutEffect)(() => {
    const resultingReferenceElement = (0,utils/* getReferenceElement */._G)({
      anchor,
      anchorRef,
      anchorRect,
      getAnchorRect,
      fallbackReferenceElement
    });
    refs.setReference(resultingReferenceElement);
  }, [anchor, anchorRef, anchorRefTop, anchorRefBottom, anchorRefStartContainer, anchorRefCurrent, anchorRect, getAnchorRect, fallbackReferenceElement, refs]);
  const mergedFloatingRef = (0,use_merge_refs/* default */.A)([refs.setFloating, dialogRef, forwardedRef]);
  const style = isExpanded ? undefined : {
    position: strategy,
    top: 0,
    left: 0,
    // `x` and `y` are framer-motion specific props and are shorthands
    // for `translateX` and `translateY`. Currently it is not possible
    // to use `translateX` and `translateY` because those values would
    // be overridden by the return value of the
    // `placementToMotionAnimationProps` function.
    x: (0,utils/* computePopoverPosition */.WS)(x),
    y: (0,utils/* computePopoverPosition */.WS)(y)
  };
  const shouldReduceMotion = (0,use_reduced_motion/* default */.A)();
  const shouldAnimate = animate && !isExpanded && !shouldReduceMotion;
  const [animationFinished, setAnimationFinished] = (0,react.useState)(false);
  const {
    style: motionInlineStyles,
    ...otherMotionProps
  } = (0,react.useMemo)(() => (0,utils/* placementToMotionAnimationProps */.Vn)(computedPlacement), [computedPlacement]);
  const animationProps = shouldAnimate ? {
    style: {
      ...contentStyle,
      ...motionInlineStyles,
      ...style
    },
    onAnimationComplete: () => setAnimationFinished(true),
    ...otherMotionProps
  } : {
    animate: false,
    style: {
      ...contentStyle,
      ...style
    }
  };

  // When Floating UI has finished positioning and Framer Motion has finished animating
  // the popover, add the `is-positioned` class to signal that all transitions have finished.
  const isPositioned = (!shouldAnimate || animationFinished) && x !== null && y !== null;
  let content = /*#__PURE__*/(0,jsx_runtime.jsxs)(motion/* motion */.P.div, {
    className: (0,clsx/* default */.A)(className, {
      'is-expanded': isExpanded,
      'is-positioned': isPositioned,
      // Use the 'alternate' classname for 'toolbar' variant for back compat.
      [`is-${computedVariant === 'toolbar' ? 'alternate' : computedVariant}`]: computedVariant
    }),
    ...animationProps,
    ...contentProps,
    ref: mergedFloatingRef,
    ...dialogProps,
    tabIndex: -1,
    children: [isExpanded && /*#__PURE__*/(0,jsx_runtime.jsx)(scroll_lock, {}), isExpanded && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "components-popover__header",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "components-popover__header-title",
        children: headerTitle
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
        className: "components-popover__close",
        icon: library_close/* default */.A,
        onClick: onClose
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "components-popover__content",
      children: children
    }), hasArrow && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      ref: arrowCallbackRef,
      className: ['components-popover__arrow', `is-${computedPlacement.split('-')[0]}`].join(' '),
      style: {
        left: typeof arrowData?.x !== 'undefined' && Number.isFinite(arrowData.x) ? `${arrowData.x}px` : '',
        top: typeof arrowData?.y !== 'undefined' && Number.isFinite(arrowData.y) ? `${arrowData.y}px` : ''
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowTriangle, {})
    })]
  });
  const shouldRenderWithinSlot = slot.ref && !inline;
  const hasAnchor = anchorRef || anchorRect || anchor;
  if (shouldRenderWithinSlot) {
    content = /*#__PURE__*/(0,jsx_runtime.jsx)(slot_fill/* Fill */.SQ, {
      name: slotName,
      children: content
    });
  } else if (!inline) {
    content = (0,react_dom.createPortal)(/*#__PURE__*/(0,jsx_runtime.jsx)(style_provider/* StyleProvider */.N, {
      document: document,
      children: content
    }), getPopoverFallbackContainer());
  }
  if (hasAnchor) {
    return content;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      ref: anchorRefFallback
    }), content]
  });
};

/**
 * `Popover` renders its content in a floating modal. If no explicit anchor is passed via props, it anchors to its parent element by default.
 *
 * ```jsx
 * import { Button, Popover } from '@wordpress/components';
 * import { useState } from '@wordpress/element';
 *
 * const MyPopover = () => {
 * 	const [ isVisible, setIsVisible ] = useState( false );
 * 	const toggleVisible = () => {
 * 		setIsVisible( ( state ) => ! state );
 * 	};
 *
 * 	return (
 * 		<Button variant="secondary" onClick={ toggleVisible }>
 * 			Toggle Popover!
 * 			{ isVisible && <Popover>Popover is toggled!</Popover> }
 * 		</Button>
 * 	);
 * };
 * ```
 *
 */
const Popover = (0,context_connect/* contextConnect */.KZ)(UnforwardedPopover, 'Popover');
function PopoverSlot({
  name = SLOT_NAME
}, ref) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(slot_fill/* Slot */.DX, {
    bubblesVirtually: true,
    name: name,
    className: "popover-slot",
    ref: ref
  });
}

// @ts-expect-error For Legacy Reasons
Popover.Slot = (0,react.forwardRef)(PopoverSlot);
// @ts-expect-error For Legacy Reasons
Popover.__unstableSlotNameProvider = slotNameContext.Provider;
/* harmony default export */ const popover = (Popover);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/dropdown/index.js
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
  } = (0,use_context_system/* useContextSystem */.A)(props, 'Dropdown');
  if (position !== undefined) {
    (0,build_module/* default */.A)('`position` prop in wp.components.Dropdown', {
      since: '6.2',
      alternative: '`popoverProps.placement` prop',
      hint: 'Note that the `position` prop will override any values passed through the `popoverProps.placement` prop.'
    });
  }

  // Use internal state instead of a ref to make sure that the component
  // re-renders when the popover's anchor updates.
  const [fallbackPopoverAnchor, setFallbackPopoverAnchor] = (0,react.useState)(null);
  const containerRef = (0,react.useRef)();
  const [isOpen, setIsOpen] = (0,use_controlled_value/* useControlledValue */.j)({
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
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: className,
    ref: (0,use_merge_refs/* default */.A)([containerRef, forwardedRef, setFallbackPopoverAnchor])
    // Some UAs focus the closest focusable parent when the toggle is
    // clicked. Making this div focusable ensures such UAs will focus
    // it and `closeIfFocusOutside` can tell if the toggle was clicked.
    ,
    tabIndex: -1,
    style: style,
    children: [renderToggle(args), isOpen && /*#__PURE__*/(0,jsx_runtime.jsx)(popover, {
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
      className: (0,clsx/* default */.A)('components-dropdown__content', popoverProps?.className, contentClassName),
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
const Dropdown = (0,context_connect/* contextConnect */.KZ)(UnconnectedDropdown, 'Dropdown');
/* harmony default export */ const dropdown = (Dropdown);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/flex/context.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/flex/flex-item/component.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ flex_item_component)
});

// UNUSED EXPORTS: FlexItem

// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-connect.js
var context_connect = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-connect.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/view/component.js
var component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/view/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__("../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/use-context-system.js + 1 modules
var use_context_system = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/use-context-system.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/flex/context.js
var context = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/flex/context.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/flex/styles.js
var styles = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/flex/styles.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js
var use_cx = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/flex/flex-item/hook.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */





function useFlexItem(props) {
  const {
    className,
    display: displayProp,
    isBlock = false,
    ...otherProps
  } = (0,use_context_system/* useContextSystem */.A)(props, 'FlexItem');
  const sx = {};
  const contextDisplay = (0,context/* useFlexContext */.a)().flexItemDisplay;
  sx.Base = /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)({
    display: displayProp || contextDisplay
  },  true ? "" : 0,  true ? "" : 0);
  const cx = (0,use_cx/* useCx */.l)();
  const classes = cx(styles/* Item */.q7, sx.Base, isBlock && styles/* block */.om, className);
  return {
    ...otherProps,
    className: classes
  };
}
//# sourceMappingURL=hook.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/flex/flex-item/component.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */





function UnconnectedFlexItem(props, forwardedRef) {
  const flexItemProps = useFlexItem(props);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(component/* default */.A, {
    ...flexItemProps,
    ref: forwardedRef
  });
}

/**
 * `FlexItem` is a primitive layout component that aligns content within layout
 * containers like `Flex`.
 *
 * ```jsx
 * import { Flex, FlexItem } from '@wordpress/components';
 *
 * function Example() {
 *   return (
 *     <Flex>
 *       <FlexItem>...</FlexItem>
 *     </Flex>
 *   );
 * }
 * ```
 */
const FlexItem = (0,context_connect/* contextConnect */.KZ)(UnconnectedFlexItem, 'FlexItem');
/* harmony default export */ const flex_item_component = (FlexItem);
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/flex/flex/component.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Flex */
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-connect.js");
/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/flex/flex/hook.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/flex/context.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/view/component.js");
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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/flex/flex/hook.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ useFlex)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+deprecated@4.10.0/node_modules/@wordpress/deprecated/build-module/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/use-context-system.js");
/* harmony import */ var _utils_use_responsive_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/use-responsive-value.js");
/* harmony import */ var _utils_space__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/space.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/flex/styles.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js");
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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/flex/styles.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/h-stack/component.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export HStack */
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-connect.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/view/component.js");
/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/h-stack/hook.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * Internal dependencies
 */





function UnconnectedHStack(props, forwardedRef) {
  const hStackProps = (0,_hook__WEBPACK_IMPORTED_MODULE_1__/* .useHStack */ .A)(props);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_view__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    ...hStackProps,
    ref: forwardedRef
  });
}

/**
 * `HStack` (Horizontal Stack) arranges child elements in a horizontal line.
 *
 * `HStack` can render anything inside.
 *
 * ```jsx
 * import {
 * 	__experimentalHStack as HStack,
 * 	__experimentalText as Text,
 * } from `@wordpress/components`;
 *
 * function Example() {
 * 	return (
 * 		<HStack>
 * 			<Text>Code</Text>
 * 			<Text>is</Text>
 * 			<Text>Poetry</Text>
 * 		</HStack>
 * 	);
 * }
 * ```
 */
const HStack = (0,_context__WEBPACK_IMPORTED_MODULE_3__/* .contextConnect */ .KZ)(UnconnectedHStack, 'HStack');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HStack);
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/h-stack/hook.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ useHStack)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/use-context-system.js + 1 modules
var use_context_system = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/use-context-system.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-connect.js
var context_connect = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-connect.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/flex/flex-item/component.js + 1 modules
var component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/flex/flex-item/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/flex/flex/hook.js
var hook = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/flex/flex/hook.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/values.js
var values = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/values.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/h-stack/utils.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


const H_ALIGNMENTS = {
  bottom: {
    align: 'flex-end',
    justify: 'center'
  },
  bottomLeft: {
    align: 'flex-end',
    justify: 'flex-start'
  },
  bottomRight: {
    align: 'flex-end',
    justify: 'flex-end'
  },
  center: {
    align: 'center',
    justify: 'center'
  },
  edge: {
    align: 'center',
    justify: 'space-between'
  },
  left: {
    align: 'center',
    justify: 'flex-start'
  },
  right: {
    align: 'center',
    justify: 'flex-end'
  },
  stretch: {
    align: 'stretch'
  },
  top: {
    align: 'flex-start',
    justify: 'center'
  },
  topLeft: {
    align: 'flex-start',
    justify: 'flex-start'
  },
  topRight: {
    align: 'flex-start',
    justify: 'flex-end'
  }
};
const V_ALIGNMENTS = {
  bottom: {
    justify: 'flex-end',
    align: 'center'
  },
  bottomLeft: {
    justify: 'flex-end',
    align: 'flex-start'
  },
  bottomRight: {
    justify: 'flex-end',
    align: 'flex-end'
  },
  center: {
    justify: 'center',
    align: 'center'
  },
  edge: {
    justify: 'space-between',
    align: 'center'
  },
  left: {
    justify: 'center',
    align: 'flex-start'
  },
  right: {
    justify: 'center',
    align: 'flex-end'
  },
  stretch: {
    align: 'stretch'
  },
  top: {
    justify: 'flex-start',
    align: 'center'
  },
  topLeft: {
    justify: 'flex-start',
    align: 'flex-start'
  },
  topRight: {
    justify: 'flex-start',
    align: 'flex-end'
  }
};
function getAlignmentProps(alignment, direction = 'row') {
  if (!(0,values/* isValueDefined */.J5)(alignment)) {
    return {};
  }
  const isVertical = direction === 'column';
  const props = isVertical ? V_ALIGNMENTS : H_ALIGNMENTS;
  const alignmentProps = alignment in props ? props[alignment] : {
    align: alignment
  };
  return alignmentProps;
}
//# sourceMappingURL=utils.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/get-valid-children.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Gets a collection of available children elements from a React component's children prop.
 *
 * @param children
 *
 * @return An array of available children.
 */
function getValidChildren(children) {
  if (typeof children === 'string') {
    return [children];
  }
  return react.Children.toArray(children).filter(child => (0,react.isValidElement)(child));
}
//# sourceMappingURL=get-valid-children.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/h-stack/hook.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */






function useHStack(props) {
  const {
    alignment = 'edge',
    children,
    direction,
    spacing = 2,
    ...otherProps
  } = (0,use_context_system/* useContextSystem */.A)(props, 'HStack');
  const align = getAlignmentProps(alignment, direction);
  const validChildren = getValidChildren(children);
  const clonedChildren = validChildren.map((child, index) => {
    const _isSpacer = (0,context_connect/* hasConnectNamespace */.SZ)(child, ['Spacer']);
    if (_isSpacer) {
      const childElement = child;
      const _key = childElement.key || `hstack-${index}`;
      return /*#__PURE__*/(0,jsx_runtime.jsx)(component/* default */.A, {
        isBlock: true,
        ...childElement.props
      }, _key);
    }
    return child;
  });
  const propsForFlex = {
    children: clonedChildren,
    direction,
    justify: 'center',
    ...align,
    ...otherProps,
    gap: spacing
  };

  // Omit `isColumn` because it's not used in HStack.
  const {
    isColumn,
    ...flexProps
  } = (0,hook/* useFlex */.v)(propsForFlex);
  return flexProps;
}
//# sourceMappingURL=hook.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/heading/component.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ heading_component)
});

// UNUSED EXPORTS: Heading

// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-connect.js
var context_connect = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-connect.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/view/component.js
var component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/view/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/use-context-system.js + 1 modules
var use_context_system = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/use-context-system.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/text/hook.js + 4 modules
var hook = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/text/hook.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/font-size.js
var font_size = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/font-size.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/colors-values.js
var colors_values = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/colors-values.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/config-values.js
var config_values = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/config-values.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/heading/hook.js
/**
 * Internal dependencies
 */





function useHeading(props) {
  const {
    as: asProp,
    level = 2,
    color = colors_values/* COLORS */.l.gray[900],
    isBlock = true,
    weight = config_values/* default */.A.fontWeightHeading,
    ...otherProps
  } = (0,use_context_system/* useContextSystem */.A)(props, 'Heading');
  const as = asProp || `h${level}`;
  const a11yProps = {};
  if (typeof as === 'string' && as[0] !== 'h') {
    // If not a semantic `h` element, add a11y props:
    a11yProps.role = 'heading';
    a11yProps['aria-level'] = typeof level === 'string' ? parseInt(level) : level;
  }
  const textProps = (0,hook/* default */.A)({
    color,
    isBlock,
    weight,
    size: (0,font_size/* getHeadingFontSize */.fM)(level),
    ...otherProps
  });
  return {
    ...textProps,
    ...a11yProps,
    as
  };
}
//# sourceMappingURL=hook.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/heading/component.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */





function UnconnectedHeading(props, forwardedRef) {
  const headerProps = useHeading(props);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(component/* default */.A, {
    ...headerProps,
    ref: forwardedRef
  });
}

/**
 * `Heading` renders headings and titles using the library's typography system.
 *
 * ```jsx
 * import { __experimentalHeading as Heading } from "@wordpress/components";
 *
 * function Example() {
 *   return <Heading>Code is Poetry</Heading>;
 * }
 * ```
 */
const Heading = (0,context_connect/* contextConnect */.KZ)(UnconnectedHeading, 'Heading');
/* harmony default export */ const heading_component = (Heading);
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/icon/index.js":
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
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/dashicon/index.js

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
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/icon/index.js
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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/input-control/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (/* binding */ input_control)
});

// UNUSED EXPORTS: InputControl, UnforwardedInputControl

// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js
var use_instance_id = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/input-control/input-base.js + 2 modules
var input_base = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/input-control/input-base.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@use-gesture+react@10.3.1_react@18.3.1/node_modules/@use-gesture/react/dist/use-gesture-react.esm.js + 3 modules
var use_gesture_react_esm = __webpack_require__("../../node_modules/.pnpm/@use-gesture+react@10.3.1_react@18.3.1/node_modules/@use-gesture/react/dist/use-gesture-react.esm.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/input-control/utils.js
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
 * Gets a CSS cursor value based on a drag direction.
 *
 * @param dragDirection The drag direction.
 * @return  The CSS cursor value.
 */
function getDragCursor(dragDirection) {
  let dragCursor = 'ns-resize';
  switch (dragDirection) {
    case 'n':
    case 's':
      dragCursor = 'ns-resize';
      break;
    case 'e':
    case 'w':
      dragCursor = 'ew-resize';
      break;
  }
  return dragCursor;
}

/**
 * Custom hook that renders a drag cursor when dragging.
 *
 * @param {boolean} isDragging    The dragging state.
 * @param {string}  dragDirection The drag direction.
 *
 * @return {string} The CSS cursor value.
 */
function useDragCursor(isDragging, dragDirection) {
  const dragCursor = getDragCursor(dragDirection);
  (0,react.useEffect)(() => {
    if (isDragging) {
      document.documentElement.style.cursor = dragCursor;
    } else {
      // @ts-expect-error
      document.documentElement.style.cursor = null;
    }
  }, [isDragging, dragCursor]);
  return dragCursor;
}
function useDraft(props) {
  const previousValueRef = (0,react.useRef)(props.value);
  const [draft, setDraft] = (0,react.useState)({});
  const value = draft.value !== undefined ? draft.value : props.value;

  // Determines when to discard the draft value to restore controlled status.
  // To do so, it tracks the previous value and marks the draft value as stale
  // after each render.
  (0,react.useLayoutEffect)(() => {
    const {
      current: previousValue
    } = previousValueRef;
    previousValueRef.current = props.value;
    if (draft.value !== undefined && !draft.isStale) {
      setDraft({
        ...draft,
        isStale: true
      });
    } else if (draft.isStale && props.value !== previousValue) {
      setDraft({});
    }
  }, [props.value, draft]);
  const onChange = (nextValue, extra) => {
    // Mutates the draft value to avoid an extra effect run.
    setDraft(current => Object.assign(current, {
      value: nextValue,
      isStale: false
    }));
    props.onChange(nextValue, extra);
  };
  const onBlur = event => {
    setDraft({});
    props.onBlur?.(event);
  };
  return {
    value,
    onBlur,
    onChange
  };
}
//# sourceMappingURL=utils.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/input-control/styles/input-control-styles.js
var input_control_styles = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/input-control/styles/input-control-styles.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/input-control/reducer/state.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

const initialStateReducer = state => state;
const initialInputControlState = {
  error: null,
  initialValue: '',
  isDirty: false,
  isDragEnabled: false,
  isDragging: false,
  isPressEnterToChange: false,
  value: ''
};
//# sourceMappingURL=state.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/input-control/reducer/actions.js
var actions = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/input-control/reducer/actions.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/input-control/reducer/reducer.js
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
 * Prepares initialState for the reducer.
 *
 * @param initialState The initial state.
 * @return Prepared initialState for the reducer
 */
function mergeInitialState(initialState = initialInputControlState) {
  const {
    value
  } = initialState;
  return {
    ...initialInputControlState,
    ...initialState,
    initialValue: value
  };
}

/**
 * Creates the base reducer which may be coupled to a specializing reducer.
 * As its final step, for all actions other than CONTROL, the base reducer
 * passes the state and action on through the specializing reducer. The
 * exception for CONTROL actions is because they represent controlled updates
 * from props and no case has yet presented for their specialization.
 *
 * @param composedStateReducers A reducer to specialize state changes.
 * @return The reducer.
 */
function inputControlStateReducer(composedStateReducers) {
  return (state, action) => {
    const nextState = {
      ...state
    };
    switch (action.type) {
      /*
       * Controlled updates
       */
      case actions/* CONTROL */.W3:
        nextState.value = action.payload.value;
        nextState.isDirty = false;
        nextState._event = undefined;
        // Returns immediately to avoid invoking additional reducers.
        return nextState;

      /**
       * Keyboard events
       */
      case actions/* PRESS_UP */.wX:
        nextState.isDirty = false;
        break;
      case actions/* PRESS_DOWN */.r7:
        nextState.isDirty = false;
        break;

      /**
       * Drag events
       */
      case actions/* DRAG_START */.Qf:
        nextState.isDragging = true;
        break;
      case actions/* DRAG_END */.Ry:
        nextState.isDragging = false;
        break;

      /**
       * Input events
       */
      case actions/* CHANGE */.PL:
        nextState.error = null;
        nextState.value = action.payload.value;
        if (state.isPressEnterToChange) {
          nextState.isDirty = true;
        }
        break;
      case actions/* COMMIT */.cJ:
        nextState.value = action.payload.value;
        nextState.isDirty = false;
        break;
      case actions/* RESET */.Ut:
        nextState.error = null;
        nextState.isDirty = false;
        nextState.value = action.payload.value || state.initialValue;
        break;

      /**
       * Validation
       */
      case actions/* INVALIDATE */.uY:
        nextState.error = action.payload.error;
        break;
    }
    nextState._event = action.payload.event;

    /**
     * Send the nextState + action to the composedReducers via
     * this "bridge" mechanism. This allows external stateReducers
     * to hook into actions, and modify state if needed.
     */
    return composedStateReducers(nextState, action);
  };
}

/**
 * A custom hook that connects and external stateReducer with an internal
 * reducer. This hook manages the internal state of InputControl.
 * However, by connecting an external stateReducer function, other
 * components can react to actions as well as modify state before it is
 * applied.
 *
 * This technique uses the "stateReducer" design pattern:
 * https://kentcdodds.com/blog/the-state-reducer-pattern/
 *
 * @param stateReducer    An external state reducer.
 * @param initialState    The initial state for the reducer.
 * @param onChangeHandler A handler for the onChange event.
 * @return State, dispatch, and a collection of actions.
 */
function useInputControlStateReducer(stateReducer = initialStateReducer, initialState = initialInputControlState, onChangeHandler) {
  const [state, dispatch] = (0,react.useReducer)(inputControlStateReducer(stateReducer), mergeInitialState(initialState));
  const createChangeEvent = type => (nextValue, event) => {
    dispatch({
      type,
      payload: {
        value: nextValue,
        event
      }
    });
  };
  const createKeyEvent = type => event => {
    dispatch({
      type,
      payload: {
        event
      }
    });
  };
  const createDragEvent = type => payload => {
    dispatch({
      type,
      payload
    });
  };

  /**
   * Actions for the reducer
   */
  const change = createChangeEvent(actions/* CHANGE */.PL);
  const invalidate = (error, event) => dispatch({
    type: actions/* INVALIDATE */.uY,
    payload: {
      error,
      event
    }
  });
  const reset = createChangeEvent(actions/* RESET */.Ut);
  const commit = createChangeEvent(actions/* COMMIT */.cJ);
  const dragStart = createDragEvent(actions/* DRAG_START */.Qf);
  const drag = createDragEvent(actions/* DRAG */.j);
  const dragEnd = createDragEvent(actions/* DRAG_END */.Ry);
  const pressUp = createKeyEvent(actions/* PRESS_UP */.wX);
  const pressDown = createKeyEvent(actions/* PRESS_DOWN */.r7);
  const pressEnter = createKeyEvent(actions/* PRESS_ENTER */.bR);
  const currentStateRef = (0,react.useRef)(state);
  const refPropsRef = (0,react.useRef)({
    value: initialState.value,
    onChangeHandler
  });

  // Freshens refs to props and state so that subsequent effects have access
  // to their latest values without their changes causing effect runs.
  (0,react.useLayoutEffect)(() => {
    currentStateRef.current = state;
    refPropsRef.current = {
      value: initialState.value,
      onChangeHandler
    };
  });

  // Propagates the latest state through onChange.
  (0,react.useLayoutEffect)(() => {
    if (currentStateRef.current._event !== undefined && state.value !== refPropsRef.current.value && !state.isDirty) {
      var _state$value;
      refPropsRef.current.onChangeHandler((_state$value = state.value) !== null && _state$value !== void 0 ? _state$value : '', {
        event: currentStateRef.current._event
      });
    }
  }, [state.value, state.isDirty]);

  // Updates the state from props.
  (0,react.useLayoutEffect)(() => {
    if (initialState.value !== currentStateRef.current.value && !currentStateRef.current.isDirty) {
      var _initialState$value;
      dispatch({
        type: actions/* CONTROL */.W3,
        payload: {
          value: (_initialState$value = initialState.value) !== null && _initialState$value !== void 0 ? _initialState$value : ''
        }
      });
    }
  }, [initialState.value]);
  return {
    change,
    commit,
    dispatch,
    drag,
    dragEnd,
    dragStart,
    invalidate,
    pressDown,
    pressEnter,
    pressUp,
    reset,
    state
  };
}
//# sourceMappingURL=reducer.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/with-ignore-ime-events.js
var with_ignore_ime_events = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/with-ignore-ime-events.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/input-control/input-field.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */






const noop = () => {};
function InputField({
  disabled = false,
  dragDirection = 'n',
  dragThreshold = 10,
  id,
  isDragEnabled = false,
  isPressEnterToChange = false,
  onBlur = noop,
  onChange = noop,
  onDrag = noop,
  onDragEnd = noop,
  onDragStart = noop,
  onKeyDown = noop,
  onValidate = noop,
  size = 'default',
  stateReducer = state => state,
  value: valueProp,
  type,
  ...props
}, ref) {
  const {
    // State.
    state,
    // Actions.
    change,
    commit,
    drag,
    dragEnd,
    dragStart,
    invalidate,
    pressDown,
    pressEnter,
    pressUp,
    reset
  } = useInputControlStateReducer(stateReducer, {
    isDragEnabled,
    value: valueProp,
    isPressEnterToChange
  }, onChange);
  const {
    value,
    isDragging,
    isDirty
  } = state;
  const wasDirtyOnBlur = (0,react.useRef)(false);
  const dragCursor = useDragCursor(isDragging, dragDirection);
  const handleOnBlur = event => {
    onBlur(event);

    /**
     * If isPressEnterToChange is set, this commits the value to
     * the onChange callback.
     */
    if (isDirty || !event.target.validity.valid) {
      wasDirtyOnBlur.current = true;
      handleOnCommit(event);
    }
  };
  const handleOnChange = event => {
    const nextValue = event.target.value;
    change(nextValue, event);
  };
  const handleOnCommit = event => {
    const nextValue = event.currentTarget.value;
    try {
      onValidate(nextValue);
      commit(nextValue, event);
    } catch (err) {
      invalidate(err, event);
    }
  };
  const handleOnKeyDown = event => {
    const {
      key
    } = event;
    onKeyDown(event);
    switch (key) {
      case 'ArrowUp':
        pressUp(event);
        break;
      case 'ArrowDown':
        pressDown(event);
        break;
      case 'Enter':
        pressEnter(event);
        if (isPressEnterToChange) {
          event.preventDefault();
          handleOnCommit(event);
        }
        break;
      case 'Escape':
        if (isPressEnterToChange && isDirty) {
          event.preventDefault();
          reset(valueProp, event);
        }
        break;
    }
  };
  const dragGestureProps = (0,use_gesture_react_esm.useDrag)(dragProps => {
    const {
      distance,
      dragging,
      event,
      target
    } = dragProps;

    // The `target` prop always references the `input` element while, by
    // default, the `dragProps.event.target` property would reference the real
    // event target (i.e. any DOM element that the pointer is hovering while
    // dragging). Ensuring that the `target` is always the `input` element
    // allows consumers of `InputControl` (or any higher-level control) to
    // check the input's validity by accessing `event.target.validity.valid`.
    dragProps.event = {
      ...dragProps.event,
      target
    };
    if (!distance) {
      return;
    }
    event.stopPropagation();

    /**
     * Quick return if no longer dragging.
     * This prevents unnecessary value calculations.
     */
    if (!dragging) {
      onDragEnd(dragProps);
      dragEnd(dragProps);
      return;
    }
    onDrag(dragProps);
    drag(dragProps);
    if (!isDragging) {
      onDragStart(dragProps);
      dragStart(dragProps);
    }
  }, {
    axis: dragDirection === 'e' || dragDirection === 'w' ? 'x' : 'y',
    threshold: dragThreshold,
    enabled: isDragEnabled,
    pointer: {
      capture: false
    }
  });
  const dragProps = isDragEnabled ? dragGestureProps() : {};
  /*
   * Works around the odd UA (e.g. Firefox) that does not focus inputs of
   * type=number when their spinner arrows are pressed.
   */
  let handleOnMouseDown;
  if (type === 'number') {
    handleOnMouseDown = event => {
      props.onMouseDown?.(event);
      if (event.currentTarget !== event.currentTarget.ownerDocument.activeElement) {
        event.currentTarget.focus();
      }
    };
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(input_control_styles/* Input */.pd, {
    ...props,
    ...dragProps,
    className: "components-input-control__input",
    disabled: disabled,
    dragCursor: dragCursor,
    isDragging: isDragging,
    id: id,
    onBlur: handleOnBlur,
    onChange: handleOnChange,
    onKeyDown: (0,with_ignore_ime_events/* withIgnoreIMEEvents */.n)(handleOnKeyDown),
    onMouseDown: handleOnMouseDown,
    ref: ref,
    inputSize: size
    // Fallback to `''` to avoid "uncontrolled to controlled" warning.
    // See https://github.com/WordPress/gutenberg/pull/47250 for details.
    ,
    value: value !== null && value !== void 0 ? value : '',
    type: type
  });
}
const ForwardedComponent = (0,react.forwardRef)(InputField);
/* harmony default export */ const input_field = (ForwardedComponent);
//# sourceMappingURL=input-field.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/space.js
var space = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/space.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/base-control/index.js
var base_control = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/base-control/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/use-deprecated-props.js
var use_deprecated_props = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/use-deprecated-props.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/input-control/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */







const input_control_noop = () => {};
function useUniqueId(idProp) {
  const instanceId = (0,use_instance_id/* default */.A)(InputControl);
  const id = `inspector-input-control-${instanceId}`;
  return idProp || id;
}
function UnforwardedInputControl(props, ref) {
  const {
    __next40pxDefaultSize,
    __unstableStateReducer: stateReducer = state => state,
    __unstableInputWidth,
    className,
    disabled = false,
    help,
    hideLabelFromVision = false,
    id: idProp,
    isPressEnterToChange = false,
    label,
    labelPosition = 'top',
    onChange = input_control_noop,
    onValidate = input_control_noop,
    onKeyDown = input_control_noop,
    prefix,
    size = 'default',
    style,
    suffix,
    value,
    ...restProps
  } = (0,use_deprecated_props/* useDeprecated36pxDefaultSizeProp */.R)(props);
  const id = useUniqueId(idProp);
  const classes = (0,clsx/* default */.A)('components-input-control', className);
  const draftHookProps = useDraft({
    value,
    onBlur: restProps.onBlur,
    onChange
  });
  const helpProp = !!help ? {
    'aria-describedby': `${id}__help`
  } : {};
  return /*#__PURE__*/(0,jsx_runtime.jsx)(base_control/* default */.Ay, {
    className: classes,
    help: help,
    id: id,
    __nextHasNoMarginBottom: true,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(input_base/* default */.A, {
      __next40pxDefaultSize: __next40pxDefaultSize,
      __unstableInputWidth: __unstableInputWidth,
      disabled: disabled,
      gap: 3,
      hideLabelFromVision: hideLabelFromVision,
      id: id,
      justify: "left",
      label: label,
      labelPosition: labelPosition,
      prefix: prefix,
      size: size,
      style: style,
      suffix: suffix,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(input_field, {
        ...restProps,
        ...helpProp,
        __next40pxDefaultSize: __next40pxDefaultSize,
        className: "components-input-control__input",
        disabled: disabled,
        id: id,
        isPressEnterToChange: isPressEnterToChange,
        onKeyDown: onKeyDown,
        onValidate: onValidate,
        paddingInlineStart: prefix ? (0,space/* space */.x)(1) : undefined,
        paddingInlineEnd: suffix ? (0,space/* space */.x)(1) : undefined,
        ref: ref,
        size: size,
        stateReducer: stateReducer,
        ...draftHookProps
      })
    })
  });
}

/**
 * InputControl components let users enter and edit text. This is an experimental component
 * intended to (in time) merge with or replace `TextControl`.
 *
 * ```jsx
 * import { __experimentalInputControl as InputControl } from '@wordpress/components';
 * import { useState } from 'react';
 *
 * const Example = () => {
 *   const [ value, setValue ] = useState( '' );
 *
 *   return (
 *  	<InputControl
 *  		value={ value }
 *  		onChange={ ( nextValue ) => setValue( nextValue ?? '' ) }
 *  	/>
 *   );
 * };
 * ```
 */
const InputControl = (0,react.forwardRef)(UnforwardedInputControl);
/* harmony default export */ const input_control = (InputControl);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/input-control/input-base.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ input_base)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js
var use_instance_id = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/input-control/styles/input-control-styles.js
var input_control_styles = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/input-control/styles/input-control-styles.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/input-control/backdrop.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


function Backdrop({
  disabled = false,
  isBorderless = false
}) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(input_control_styles/* BackdropUI */.Hr, {
    "aria-hidden": "true",
    className: "components-input-control__backdrop",
    disabled: disabled,
    isBorderless: isBorderless
  });
}
const MemoizedBackdrop = (0,react.memo)(Backdrop);
/* harmony default export */ const backdrop = (MemoizedBackdrop);
//# sourceMappingURL=backdrop.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/visually-hidden/component.js + 1 modules
var component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/visually-hidden/component.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/input-control/label.js
/**
 * Internal dependencies
 */



function Label({
  children,
  hideLabelFromVision,
  htmlFor,
  ...props
}) {
  if (!children) {
    return null;
  }
  if (hideLabelFromVision) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(component/* default */.A, {
      as: "label",
      htmlFor: htmlFor,
      children: children
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(input_control_styles/* LabelWrapper */.cR, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(input_control_styles/* Label */.JU, {
      htmlFor: htmlFor,
      ...props,
      children: children
    })
  });
}
//# sourceMappingURL=label.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/use-context-system.js + 1 modules
var use_context_system = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/use-context-system.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-system-provider.js + 1 modules
var context_system_provider = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-system-provider.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-connect.js
var context_connect = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-connect.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/use-deprecated-props.js
var use_deprecated_props = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/use-deprecated-props.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/input-control/input-base.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */






function useUniqueId(idProp) {
  const instanceId = (0,use_instance_id/* default */.A)(InputBase);
  const id = `input-base-control-${instanceId}`;
  return idProp || id;
}

// Adapter to map props for the new ui/flex component.
function getUIFlexProps(labelPosition) {
  const props = {};
  switch (labelPosition) {
    case 'top':
      props.direction = 'column';
      props.expanded = false;
      props.gap = 0;
      break;
    case 'bottom':
      props.direction = 'column-reverse';
      props.expanded = false;
      props.gap = 0;
      break;
    case 'edge':
      props.justify = 'space-between';
      break;
  }
  return props;
}
function InputBase(props, ref) {
  const {
    __next40pxDefaultSize,
    __unstableInputWidth,
    children,
    className,
    disabled = false,
    hideLabelFromVision = false,
    labelPosition,
    id: idProp,
    isBorderless = false,
    label,
    prefix,
    size = 'default',
    suffix,
    ...restProps
  } = (0,use_deprecated_props/* useDeprecated36pxDefaultSizeProp */.R)((0,use_context_system/* useContextSystem */.A)(props, 'InputBase'));
  const id = useUniqueId(idProp);
  const hideLabel = hideLabelFromVision || !label;
  const prefixSuffixContextValue = (0,react.useMemo)(() => {
    return {
      InputControlPrefixWrapper: {
        __next40pxDefaultSize,
        size
      },
      InputControlSuffixWrapper: {
        __next40pxDefaultSize,
        size
      }
    };
  }, [__next40pxDefaultSize, size]);
  return (
    /*#__PURE__*/
    // @ts-expect-error The `direction` prop from Flex (FlexDirection) conflicts with legacy SVGAttributes `direction` (string) that come from React intrinsic prop definitions.
    (0,jsx_runtime.jsxs)(input_control_styles/* Root */.bL, {
      ...restProps,
      ...getUIFlexProps(labelPosition),
      className: className,
      gap: 2,
      ref: ref,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Label, {
        className: "components-input-control__label",
        hideLabelFromVision: hideLabelFromVision,
        labelPosition: labelPosition,
        htmlFor: id,
        children: label
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(input_control_styles/* Container */.mc, {
        __unstableInputWidth: __unstableInputWidth,
        className: "components-input-control__container",
        disabled: disabled,
        hideLabel: hideLabel,
        labelPosition: labelPosition,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(context_system_provider/* ContextSystemProvider */.c7, {
          value: prefixSuffixContextValue,
          children: [prefix && /*#__PURE__*/(0,jsx_runtime.jsx)(input_control_styles/* Prefix */.b3, {
            className: "components-input-control__prefix",
            children: prefix
          }), children, suffix && /*#__PURE__*/(0,jsx_runtime.jsx)(input_control_styles/* Suffix */.sZ, {
            className: "components-input-control__suffix",
            children: suffix
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(backdrop, {
          disabled: disabled,
          isBorderless: isBorderless
        })]
      })]
    })
  );
}

/**
 * `InputBase` is an internal component used to style the standard borders for an input,
 * as well as handle the layout for prefix/suffix elements.
 */
/* harmony default export */ const input_base = ((0,context_connect/* contextConnect */.KZ)(InputBase, 'InputBase'));
//# sourceMappingURL=input-base.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/input-control/reducer/actions.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PL: () => (/* binding */ CHANGE),
/* harmony export */   Qf: () => (/* binding */ DRAG_START),
/* harmony export */   Ry: () => (/* binding */ DRAG_END),
/* harmony export */   Ut: () => (/* binding */ RESET),
/* harmony export */   W3: () => (/* binding */ CONTROL),
/* harmony export */   bR: () => (/* binding */ PRESS_ENTER),
/* harmony export */   cJ: () => (/* binding */ COMMIT),
/* harmony export */   j: () => (/* binding */ DRAG),
/* harmony export */   r7: () => (/* binding */ PRESS_DOWN),
/* harmony export */   uY: () => (/* binding */ INVALIDATE),
/* harmony export */   wX: () => (/* binding */ PRESS_UP)
/* harmony export */ });
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

const CHANGE = 'CHANGE';
const COMMIT = 'COMMIT';
const CONTROL = 'CONTROL';
const DRAG_END = 'DRAG_END';
const DRAG_START = 'DRAG_START';
const DRAG = 'DRAG';
const INVALIDATE = 'INVALIDATE';
const PRESS_DOWN = 'PRESS_DOWN';
const PRESS_ENTER = 'PRESS_ENTER';
const PRESS_UP = 'PRESS_UP';
const RESET = 'RESET';
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/input-control/styles/input-control-styles.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hr: () => (/* binding */ BackdropUI),
/* harmony export */   JU: () => (/* binding */ Label),
/* harmony export */   TA: () => (/* binding */ fontSizeStyles),
/* harmony export */   b3: () => (/* binding */ Prefix),
/* harmony export */   bC: () => (/* binding */ PrefixSuffixWrapper),
/* harmony export */   bL: () => (/* binding */ Root),
/* harmony export */   cR: () => (/* binding */ LabelWrapper),
/* harmony export */   mc: () => (/* binding */ Container),
/* harmony export */   pd: () => (/* binding */ Input),
/* harmony export */   sZ: () => (/* binding */ Suffix)
/* harmony export */ });
/* unused harmony export getSizeConfig */
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1__@types+react@18.3.16_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/flex/flex/component.js");
/* harmony import */ var _flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/flex/flex-item/component.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/text/component.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/colors-values.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/rtl.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/config-values.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/base-label.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */





const Prefix = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("span",  true ? {
  target: "em5sgkm8"
} : 0)( true ? {
  name: "pvvbxf",
  styles: "box-sizing:border-box;display:block"
} : 0);
const Suffix = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("span",  true ? {
  target: "em5sgkm7"
} : 0)( true ? {
  name: "jgf79h",
  styles: "align-items:center;align-self:stretch;box-sizing:border-box;display:flex"
} : 0);
const backdropBorderColor = ({
  disabled,
  isBorderless
}) => {
  if (isBorderless) {
    return 'transparent';
  }
  if (disabled) {
    return _utils__WEBPACK_IMPORTED_MODULE_2__/* .COLORS */ .l.ui.borderDisabled;
  }
  return _utils__WEBPACK_IMPORTED_MODULE_2__/* .COLORS */ .l.ui.border;
};
const BackdropUI = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("div",  true ? {
  target: "em5sgkm6"
} : 0)("&&&{box-sizing:border-box;border-color:", backdropBorderColor, ";border-radius:inherit;border-style:solid;border-width:1px;bottom:0;left:0;margin:0;padding:0;pointer-events:none;position:absolute;right:0;top:0;", (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .rtl */ .h)({
  paddingLeft: 2
}), ";}" + ( true ? "" : 0));
const Root = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_flex__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,  true ? {
  target: "em5sgkm5"
} : 0)("box-sizing:border-box;position:relative;border-radius:", _utils__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.radiusSmall, ";padding-top:0;&:focus-within:not( :has( :is( ", Prefix, ", ", Suffix, " ):focus-within ) ){", BackdropUI, "{border-color:", _utils__WEBPACK_IMPORTED_MODULE_2__/* .COLORS */ .l.ui.borderFocus, ";box-shadow:", _utils__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.controlBoxShadowFocus, ";outline:2px solid transparent;outline-offset:-2px;}}" + ( true ? "" : 0));
const containerDisabledStyles = ({
  disabled
}) => {
  const backgroundColor = disabled ? _utils__WEBPACK_IMPORTED_MODULE_2__/* .COLORS */ .l.ui.backgroundDisabled : _utils__WEBPACK_IMPORTED_MODULE_2__/* .COLORS */ .l.ui.background;
  return /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .css */ .AH)({
    backgroundColor
  },  true ? "" : 0,  true ? "" : 0);
};
var _ref =  true ? {
  name: "1d3w5wq",
  styles: "width:100%"
} : 0;
const containerWidthStyles = ({
  __unstableInputWidth,
  labelPosition
}) => {
  if (!__unstableInputWidth) {
    return _ref;
  }
  if (labelPosition === 'side') {
    return '';
  }
  if (labelPosition === 'edge') {
    return /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .css */ .AH)({
      flex: `0 0 ${__unstableInputWidth}`
    },  true ? "" : 0,  true ? "" : 0);
  }
  return /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .css */ .AH)({
    width: __unstableInputWidth
  },  true ? "" : 0,  true ? "" : 0);
};
const Container = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("div",  true ? {
  target: "em5sgkm4"
} : 0)("align-items:center;box-sizing:border-box;border-radius:inherit;display:flex;flex:1;position:relative;", containerDisabledStyles, " ", containerWidthStyles, ";" + ( true ? "" : 0));
const disabledStyles = ({
  disabled
}) => {
  if (!disabled) {
    return '';
  }
  return /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .css */ .AH)({
    color: _utils__WEBPACK_IMPORTED_MODULE_2__/* .COLORS */ .l.ui.textDisabled
  },  true ? "" : 0,  true ? "" : 0);
};
const fontSizeStyles = ({
  inputSize: size
}) => {
  const sizes = {
    default: '13px',
    small: '11px',
    compact: '13px',
    '__unstable-large': '13px'
  };
  const fontSize = sizes[size] || sizes.default;
  const fontSizeMobile = '16px';
  if (!fontSize) {
    return '';
  }
  return /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .css */ .AH)("font-size:", fontSizeMobile, ";@media ( min-width: 600px ){font-size:", fontSize, ";}" + ( true ? "" : 0),  true ? "" : 0);
};
const getSizeConfig = ({
  inputSize: size,
  __next40pxDefaultSize
}) => {
  // Paddings may be overridden by the custom paddings props.
  const sizes = {
    default: {
      height: 40,
      lineHeight: 1,
      minHeight: 40,
      paddingLeft: _utils__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.controlPaddingX,
      paddingRight: _utils__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.controlPaddingX
    },
    small: {
      height: 24,
      lineHeight: 1,
      minHeight: 24,
      paddingLeft: _utils__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.controlPaddingXSmall,
      paddingRight: _utils__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.controlPaddingXSmall
    },
    compact: {
      height: 32,
      lineHeight: 1,
      minHeight: 32,
      paddingLeft: _utils__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.controlPaddingXSmall,
      paddingRight: _utils__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.controlPaddingXSmall
    },
    '__unstable-large': {
      height: 40,
      lineHeight: 1,
      minHeight: 40,
      paddingLeft: _utils__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.controlPaddingX,
      paddingRight: _utils__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.controlPaddingX
    }
  };
  if (!__next40pxDefaultSize) {
    sizes.default = sizes.compact;
  }
  return sizes[size] || sizes.default;
};
const sizeStyles = props => {
  return /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .css */ .AH)(getSizeConfig(props),  true ? "" : 0,  true ? "" : 0);
};
const customPaddings = ({
  paddingInlineStart,
  paddingInlineEnd
}) => {
  return /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .css */ .AH)({
    paddingInlineStart,
    paddingInlineEnd
  },  true ? "" : 0,  true ? "" : 0);
};
const dragStyles = ({
  isDragging,
  dragCursor
}) => {
  let defaultArrowStyles;
  let activeDragCursorStyles;
  if (isDragging) {
    defaultArrowStyles = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .css */ .AH)("cursor:", dragCursor, ";user-select:none;&::-webkit-outer-spin-button,&::-webkit-inner-spin-button{-webkit-appearance:none!important;margin:0!important;}" + ( true ? "" : 0),  true ? "" : 0);
  }
  if (isDragging && dragCursor) {
    activeDragCursorStyles = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .css */ .AH)("&:active{cursor:", dragCursor, ";}" + ( true ? "" : 0),  true ? "" : 0);
  }
  return /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .css */ .AH)(defaultArrowStyles, " ", activeDragCursorStyles, ";" + ( true ? "" : 0),  true ? "" : 0);
};

// TODO: Resolve need to use &&& to increase specificity
// https://github.com/WordPress/gutenberg/issues/18483

const Input = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("input",  true ? {
  target: "em5sgkm3"
} : 0)("&&&{background-color:transparent;box-sizing:border-box;border:none;box-shadow:none!important;color:", _utils__WEBPACK_IMPORTED_MODULE_2__/* .COLORS */ .l.theme.foreground, ";display:block;font-family:inherit;margin:0;outline:none;width:100%;", dragStyles, " ", disabledStyles, " ", fontSizeStyles, " ", sizeStyles, " ", customPaddings, " &::-webkit-input-placeholder{line-height:normal;}}" + ( true ? "" : 0));
const BaseLabel = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_text__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,  true ? {
  target: "em5sgkm2"
} : 0)("&&&{", _utils__WEBPACK_IMPORTED_MODULE_8__/* .baseLabelTypography */ .z, ";box-sizing:border-box;display:block;padding-top:0;padding-bottom:0;max-width:100%;z-index:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}" + ( true ? "" : 0));
const Label = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BaseLabel, {
  ...props,
  as: "label"
});
const LabelWrapper = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_flex__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,  true ? {
  target: "em5sgkm1"
} : 0)( true ? {
  name: "1b6uupn",
  styles: "max-width:calc( 100% - 10px )"
} : 0);
const prefixSuffixWrapperStyles = ({
  variant = 'default',
  size,
  __next40pxDefaultSize,
  isPrefix
}) => {
  const {
    paddingLeft: padding
  } = getSizeConfig({
    inputSize: size,
    __next40pxDefaultSize
  });
  const paddingProperty = isPrefix ? 'paddingInlineStart' : 'paddingInlineEnd';
  if (variant === 'default') {
    return /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .css */ .AH)({
      [paddingProperty]: padding
    },  true ? "" : 0,  true ? "" : 0);
  }

  // If variant is 'icon' or 'control'
  return /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .css */ .AH)({
    display: 'flex',
    [paddingProperty]: padding - 4
  },  true ? "" : 0,  true ? "" : 0);
};
const PrefixSuffixWrapper = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("div",  true ? {
  target: "em5sgkm0"
} : 0)(prefixSuffixWrapperStyles, ";" + ( true ? "" : 0));
//# sourceMappingURL=input-control-styles.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/number-control/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ number_control)
});

// UNUSED EXPORTS: NumberControl

// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.10.0/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.10.0/node_modules/@wordpress/i18n/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/plus.js
var plus = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/plus.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/reset.js
var library_reset = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/reset.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js
var use_merge_refs = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+deprecated@4.10.0/node_modules/@wordpress/deprecated/build-module/index.js
var deprecated_build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+deprecated@4.10.0/node_modules/@wordpress/deprecated/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1__@types+react@18.3.16_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js + 1 modules
var emotion_styled_base_browser_esm = __webpack_require__("../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1__@types+react@18.3.16_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__("../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/input-control/index.js + 4 modules
var input_control = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/input-control/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/colors-values.js
var colors_values = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/colors-values.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/button/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/space.js
var space = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/space.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/number-control/styles/number-control-styles.js

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */




var _ref =  true ? {
  name: "euqsgg",
  styles: "input[type='number']::-webkit-outer-spin-button,input[type='number']::-webkit-inner-spin-button{-webkit-appearance:none!important;margin:0!important;}input[type='number']{-moz-appearance:textfield;}"
} : 0;
const htmlArrowStyles = ({
  hideHTMLArrows
}) => {
  if (!hideHTMLArrows) {
    return ``;
  }
  return _ref;
};
const Input = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)(input_control/* default */.Ay,  true ? {
  target: "ep09it41"
} : 0)(htmlArrowStyles, ";" + ( true ? "" : 0));
const SpinButton = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)(build_module_button/* default */.Ay,  true ? {
  target: "ep09it40"
} : 0)("&&&&&{color:", colors_values/* COLORS */.l.theme.accent, ";}" + ( true ? "" : 0));
const smallSpinButtons = /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("width:", (0,space/* space */.x)(5), ";min-width:", (0,space/* space */.x)(5), ";height:", (0,space/* space */.x)(5), ";" + ( true ? "" : 0),  true ? "" : 0);
const styles = {
  smallSpinButtons
};
//# sourceMappingURL=number-control-styles.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/input-control/reducer/actions.js
var actions = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/input-control/reducer/actions.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/math.js
var math = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/math.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/values.js
var values = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/values.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/h-stack/component.js
var component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/h-stack/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/spacer/component.js + 1 modules
var spacer_component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/spacer/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js
var use_cx = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/use-deprecated-props.js
var use_deprecated_props = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/use-deprecated-props.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/number-control/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */









const noop = () => {};
function UnforwardedNumberControl(props, forwardedRef) {
  const {
    __unstableStateReducer: stateReducerProp,
    className,
    dragDirection = 'n',
    hideHTMLArrows = false,
    spinControls = hideHTMLArrows ? 'none' : 'native',
    isDragEnabled = true,
    isShiftStepEnabled = true,
    label,
    max = Infinity,
    min = -Infinity,
    required = false,
    shiftStep = 10,
    step = 1,
    spinFactor = 1,
    type: typeProp = 'number',
    value: valueProp,
    size = 'default',
    suffix,
    onChange = noop,
    ...restProps
  } = (0,use_deprecated_props/* useDeprecated36pxDefaultSizeProp */.R)(props);
  if (hideHTMLArrows) {
    (0,deprecated_build_module/* default */.A)('wp.components.NumberControl hideHTMLArrows prop ', {
      alternative: 'spinControls="none"',
      since: '6.2',
      version: '6.3'
    });
  }
  const inputRef = (0,react.useRef)();
  const mergedRef = (0,use_merge_refs/* default */.A)([inputRef, forwardedRef]);
  const isStepAny = step === 'any';
  const baseStep = isStepAny ? 1 : (0,values/* ensureNumber */.GB)(step);
  const baseSpin = (0,values/* ensureNumber */.GB)(spinFactor) * baseStep;
  const baseValue = (0,math/* roundClamp */.ir)(0, min, max, baseStep);
  const constrainValue = (value, stepOverride) => {
    // When step is "any" clamp the value, otherwise round and clamp it.
    // Use '' + to convert to string for use in input value attribute.
    return isStepAny ? '' + Math.min(max, Math.max(min, (0,values/* ensureNumber */.GB)(value))) : '' + (0,math/* roundClamp */.ir)(value, min, max, stepOverride !== null && stepOverride !== void 0 ? stepOverride : baseStep);
  };
  const autoComplete = typeProp === 'number' ? 'off' : undefined;
  const classes = (0,clsx/* default */.A)('components-number-control', className);
  const cx = (0,use_cx/* useCx */.l)();
  const spinButtonClasses = cx(size === 'small' && styles.smallSpinButtons);
  const spinValue = (value, direction, event) => {
    event?.preventDefault();
    const shift = event?.shiftKey && isShiftStepEnabled;
    const delta = shift ? (0,values/* ensureNumber */.GB)(shiftStep) * baseSpin : baseSpin;
    let nextValue = (0,values/* isValueEmpty */.r6)(value) ? baseValue : value;
    if (direction === 'up') {
      nextValue = (0,math/* add */.WQ)(nextValue, delta);
    } else if (direction === 'down') {
      nextValue = (0,math/* subtract */.Re)(nextValue, delta);
    }
    return constrainValue(nextValue, shift ? delta : undefined);
  };

  /**
   * "Middleware" function that intercepts updates from InputControl.
   * This allows us to tap into actions to transform the (next) state for
   * InputControl.
   *
   * @return The updated state to apply to InputControl
   */
  const numberControlStateReducer = (state, action) => {
    const nextState = {
      ...state
    };
    const {
      type,
      payload
    } = action;
    const event = payload.event;
    const currentValue = nextState.value;

    /**
     * Handles custom UP and DOWN Keyboard events
     */
    if (type === actions/* PRESS_UP */.wX || type === actions/* PRESS_DOWN */.r7) {
      nextState.value = spinValue(currentValue, type === actions/* PRESS_UP */.wX ? 'up' : 'down', event);
    }

    /**
     * Handles drag to update events
     */
    if (type === actions/* DRAG */.j && isDragEnabled) {
      const [x, y] = payload.delta;
      const enableShift = payload.shiftKey && isShiftStepEnabled;
      const modifier = enableShift ? (0,values/* ensureNumber */.GB)(shiftStep) * baseSpin : baseSpin;
      let directionModifier;
      let delta;
      switch (dragDirection) {
        case 'n':
          delta = y;
          directionModifier = -1;
          break;
        case 'e':
          delta = x;
          directionModifier = (0,build_module/* isRTL */.V8)() ? -1 : 1;
          break;
        case 's':
          delta = y;
          directionModifier = 1;
          break;
        case 'w':
          delta = x;
          directionModifier = (0,build_module/* isRTL */.V8)() ? 1 : -1;
          break;
      }
      if (delta !== 0) {
        delta = Math.ceil(Math.abs(delta)) * Math.sign(delta);
        const distance = delta * modifier * directionModifier;
        nextState.value = constrainValue(
        // @ts-expect-error TODO: Investigate if it's ok for currentValue to be undefined
        (0,math/* add */.WQ)(currentValue, distance), enableShift ? modifier : undefined);
      }
    }

    /**
     * Handles commit (ENTER key press or blur)
     */
    if (type === actions/* PRESS_ENTER */.bR || type === actions/* COMMIT */.cJ) {
      const applyEmptyValue = required === false && currentValue === '';
      nextState.value = applyEmptyValue ? currentValue :
      // @ts-expect-error TODO: Investigate if it's ok for currentValue to be undefined
      constrainValue(currentValue);
    }
    return nextState;
  };
  const buildSpinButtonClickHandler = direction => event => onChange(String(spinValue(valueProp, direction, event)), {
    // Set event.target to the <input> so that consumers can use
    // e.g. event.target.validity.
    event: {
      ...event,
      target: inputRef.current
    }
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Input, {
    autoComplete: autoComplete,
    inputMode: "numeric",
    ...restProps,
    className: classes,
    dragDirection: dragDirection,
    hideHTMLArrows: spinControls !== 'native',
    isDragEnabled: isDragEnabled,
    label: label,
    max: max,
    min: min,
    ref: mergedRef,
    required: required,
    step: step,
    type: typeProp
    // @ts-expect-error TODO: Resolve discrepancy between `value` types in InputControl based components
    ,
    value: valueProp,
    __unstableStateReducer: (state, action) => {
      var _stateReducerProp;
      const baseState = numberControlStateReducer(state, action);
      return (_stateReducerProp = stateReducerProp?.(baseState, action)) !== null && _stateReducerProp !== void 0 ? _stateReducerProp : baseState;
    },
    size: size,
    suffix: spinControls === 'custom' ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [suffix, /*#__PURE__*/(0,jsx_runtime.jsx)(spacer_component/* default */.A, {
        marginBottom: 0,
        marginRight: 2,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(component/* default */.A, {
          spacing: 1,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SpinButton, {
            className: spinButtonClasses,
            icon: plus/* default */.A,
            size: "small",
            label: (0,build_module.__)('Increment'),
            onClick: buildSpinButtonClickHandler('up')
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(SpinButton, {
            className: spinButtonClasses,
            icon: library_reset/* default */.A,
            size: "small",
            label: (0,build_module.__)('Decrement'),
            onClick: buildSpinButtonClickHandler('down')
          })]
        })
      })]
    }) : suffix,
    onChange: onChange
  });
}
const NumberControl = (0,react.forwardRef)(UnforwardedNumberControl);
/* harmony default export */ const number_control = (NumberControl);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/popover/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vn: () => (/* binding */ placementToMotionAnimationProps),
/* harmony export */   WS: () => (/* binding */ computePopoverPosition),
/* harmony export */   YK: () => (/* binding */ positionToPlacement),
/* harmony export */   _G: () => (/* binding */ getReferenceElement)
/* harmony export */ });
/**
 * External dependencies
 */

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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/select-control/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ select_control)
});

// UNUSED EXPORTS: SelectControl

// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js
var use_instance_id = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/base-control/index.js
var base_control = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/base-control/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1__@types+react@18.3.16_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js + 1 modules
var emotion_styled_base_browser_esm = __webpack_require__("../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1__@types+react@18.3.16_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__("../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/colors-values.js
var colors_values = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/colors-values.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/config-values.js
var config_values = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/config-values.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/rtl.js
var rtl = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/rtl.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/space.js
var space = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/space.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/use-context-system.js + 1 modules
var use_context_system = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/use-context-system.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-connect.js
var context_connect = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-connect.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/input-control/styles/input-control-styles.js
var input_control_styles = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/input-control/styles/input-control-styles.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/input-control/input-suffix-wrapper.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */




function UnconnectedInputControlSuffixWrapper(props, forwardedRef) {
  const derivedProps = (0,use_context_system/* useContextSystem */.A)(props, 'InputControlSuffixWrapper');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(input_control_styles/* PrefixSuffixWrapper */.bC, {
    ...derivedProps,
    ref: forwardedRef
  });
}

/**
 * A convenience wrapper for the `suffix` when you want to apply
 * standard padding in accordance with the size variant.
 *
 * ```jsx
 * import {
 *   __experimentalInputControl as InputControl,
 *   __experimentalInputControlSuffixWrapper as InputControlSuffixWrapper,
 * } from '@wordpress/components';
 *
 * <InputControl
 *   suffix={<InputControlSuffixWrapper>%</InputControlSuffixWrapper>}
 * />
 * ```
 */
const InputControlSuffixWrapper = (0,context_connect/* contextConnect */.KZ)(UnconnectedInputControlSuffixWrapper, 'InputControlSuffixWrapper');
/* harmony default export */ const input_suffix_wrapper = (InputControlSuffixWrapper);
//# sourceMappingURL=input-suffix-wrapper.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/input-control/input-base.js + 2 modules
var input_base = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/input-control/input-base.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/select-control/styles/select-control-styles.js

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */





const disabledStyles = ({
  disabled
}) => {
  if (!disabled) {
    return '';
  }
  return /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("color:", colors_values/* COLORS */.l.ui.textDisabled, ";cursor:default;" + ( true ? "" : 0),  true ? "" : 0);
};
var _ref2 =  true ? {
  name: "1lv1yo7",
  styles: "display:inline-flex"
} : 0;
const inputBaseVariantStyles = ({
  variant
}) => {
  if (variant === 'minimal') {
    return _ref2;
  }
  return '';
};
const StyledInputBase = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)(input_base/* default */.A,  true ? {
  target: "e1mv6sxx3"
} : 0)("color:", colors_values/* COLORS */.l.theme.foreground, ";cursor:pointer;", disabledStyles, " ", inputBaseVariantStyles, ";" + ( true ? "" : 0));
const sizeStyles = ({
  __next40pxDefaultSize,
  multiple,
  selectSize = 'default'
}) => {
  if (multiple) {
    // When `multiple`, just use the native browser styles
    // without setting explicit height.
    return;
  }
  const sizes = {
    default: {
      height: 40,
      minHeight: 40,
      paddingTop: 0,
      paddingBottom: 0
    },
    small: {
      height: 24,
      minHeight: 24,
      paddingTop: 0,
      paddingBottom: 0
    },
    compact: {
      height: 32,
      minHeight: 32,
      paddingTop: 0,
      paddingBottom: 0
    },
    '__unstable-large': {
      height: 40,
      minHeight: 40,
      paddingTop: 0,
      paddingBottom: 0
    }
  };
  if (!__next40pxDefaultSize) {
    sizes.default = sizes.compact;
  }
  const style = sizes[selectSize] || sizes.default;
  return /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)(style,  true ? "" : 0,  true ? "" : 0);
};
const chevronIconSize = 18;
const sizePaddings = ({
  __next40pxDefaultSize,
  multiple,
  selectSize = 'default'
}) => {
  const padding = {
    default: config_values/* default */.A.controlPaddingX,
    small: config_values/* default */.A.controlPaddingXSmall,
    compact: config_values/* default */.A.controlPaddingXSmall,
    '__unstable-large': config_values/* default */.A.controlPaddingX
  };
  if (!__next40pxDefaultSize) {
    padding.default = padding.compact;
  }
  const selectedPadding = padding[selectSize] || padding.default;
  return (0,rtl/* rtl */.h)({
    paddingLeft: selectedPadding,
    paddingRight: selectedPadding + chevronIconSize,
    ...(multiple ? {
      paddingTop: selectedPadding,
      paddingBottom: selectedPadding
    } : {})
  });
};
const overflowStyles = ({
  multiple
}) => {
  return {
    overflow: multiple ? 'auto' : 'hidden'
  };
};
var _ref =  true ? {
  name: "n1jncc",
  styles: "field-sizing:content"
} : 0;
const variantStyles = ({
  variant
}) => {
  if (variant === 'minimal') {
    return _ref;
  }
  return '';
};

// TODO: Resolve need to use &&& to increase specificity
// https://github.com/WordPress/gutenberg/issues/18483

const Select = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("select",  true ? {
  target: "e1mv6sxx2"
} : 0)("&&&{appearance:none;background:transparent;box-sizing:border-box;border:none;box-shadow:none!important;color:currentColor;cursor:inherit;display:block;font-family:inherit;margin:0;width:100%;max-width:none;white-space:nowrap;text-overflow:ellipsis;", input_control_styles/* fontSizeStyles */.TA, ";", sizeStyles, ";", sizePaddings, ";", overflowStyles, " ", variantStyles, ";}" + ( true ? "" : 0));
const DownArrowWrapper = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",  true ? {
  target: "e1mv6sxx1"
} : 0)("margin-inline-end:", (0,space/* space */.x)(-1), ";line-height:0;path{fill:currentColor;}" + ( true ? "" : 0));
const InputControlSuffixWrapperWithClickThrough = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)(input_suffix_wrapper,  true ? {
  target: "e1mv6sxx0"
} : 0)("position:absolute;pointer-events:none;", (0,rtl/* rtl */.h)({
  right: 0
}), ";" + ( true ? "" : 0));
//# sourceMappingURL=select-control-styles.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/icon/index.js
var icon = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/icon/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js
var chevron_down = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/select-control/chevron-down.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const SelectControlChevronDown = () => {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(InputControlSuffixWrapperWithClickThrough, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(DownArrowWrapper, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(icon/* default */.A, {
        icon: chevron_down/* default */.A,
        size: chevronIconSize
      })
    })
  });
};
/* harmony default export */ const select_control_chevron_down = (SelectControlChevronDown);
//# sourceMappingURL=chevron-down.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/use-deprecated-props.js
var use_deprecated_props = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/use-deprecated-props.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/select-control/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */





function useUniqueId(idProp) {
  const instanceId = (0,use_instance_id/* default */.A)(SelectControl);
  const id = `inspector-select-control-${instanceId}`;
  return idProp || id;
}
function SelectOptions({
  options
}) {
  return options.map(({
    id,
    label,
    value,
    ...optionProps
  }, index) => {
    const key = id || `${label}-${value}-${index}`;
    return /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
      value: value,
      ...optionProps,
      children: label
    }, key);
  });
}
function UnforwardedSelectControl(props, ref) {
  const {
    className,
    disabled = false,
    help,
    hideLabelFromVision,
    id: idProp,
    label,
    multiple = false,
    onChange,
    options = [],
    size = 'default',
    value: valueProp,
    labelPosition = 'top',
    children,
    prefix,
    suffix,
    variant = 'default',
    __next40pxDefaultSize = false,
    __nextHasNoMarginBottom = false,
    ...restProps
  } = (0,use_deprecated_props/* useDeprecated36pxDefaultSizeProp */.R)(props);
  const id = useUniqueId(idProp);
  const helpId = help ? `${id}__help` : undefined;

  // Disable reason: A select with an onchange throws a warning.
  if (!options?.length && !children) {
    return null;
  }
  const handleOnChange = event => {
    if (props.multiple) {
      const selectedOptions = Array.from(event.target.options).filter(({
        selected
      }) => selected);
      const newValues = selectedOptions.map(({
        value
      }) => value);
      props.onChange?.(newValues, {
        event
      });
      return;
    }
    props.onChange?.(event.target.value, {
      event
    });
  };
  const classes = (0,clsx/* default */.A)('components-select-control', className);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(base_control/* default */.Ay, {
    help: help,
    id: id,
    __nextHasNoMarginBottom: __nextHasNoMarginBottom,
    __associatedWPComponentName: "SelectControl",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputBase, {
      className: classes,
      disabled: disabled,
      hideLabelFromVision: hideLabelFromVision,
      id: id,
      isBorderless: variant === 'minimal',
      label: label,
      size: size,
      suffix: suffix || !multiple && /*#__PURE__*/(0,jsx_runtime.jsx)(select_control_chevron_down, {}),
      prefix: prefix,
      labelPosition: labelPosition,
      __unstableInputWidth: variant === 'minimal' ? 'auto' : undefined,
      variant: variant,
      __next40pxDefaultSize: __next40pxDefaultSize,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Select, {
        ...restProps,
        __next40pxDefaultSize: __next40pxDefaultSize,
        "aria-describedby": helpId,
        className: "components-select-control__input",
        disabled: disabled,
        id: id,
        multiple: multiple,
        onChange: handleOnChange,
        ref: ref,
        selectSize: size,
        value: valueProp,
        variant: variant,
        children: children || /*#__PURE__*/(0,jsx_runtime.jsx)(SelectOptions, {
          options: options
        })
      })
    })
  });
}

/**
 * `SelectControl` allows users to select from a single or multiple option menu.
 * It functions as a wrapper around the browser's native `<select>` element.
 *
 * ```jsx
 * import { SelectControl } from '@wordpress/components';
 * import { useState } from '@wordpress/element';
 *
 * const MySelectControl = () => {
 *   const [ size, setSize ] = useState( '50%' );
 *
 *   return (
 *     <SelectControl
 *       __nextHasNoMarginBottom
 *       label="Size"
 *       value={ size }
 *       options={ [
 *         { label: 'Big', value: '100%' },
 *         { label: 'Medium', value: '50%' },
 *         { label: 'Small', value: '25%' },
 *       ] }
 *       onChange={ setSize }
 *     />
 *   );
 * };
 * ```
 */
const SelectControl = (0,react.forwardRef)(UnforwardedSelectControl);
/* harmony default export */ const select_control = (SelectControl);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot-fill-context.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _wordpress_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+warning@3.10.0/node_modules/@wordpress/warning/build-module/index.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/utils/observable-map/index.js");
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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/use-slot.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ useSlot)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-observable-value/index.js
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
  const [subscribe, getValue] = (0,react.useMemo)(() => [listener => map.subscribe(name, listener), () => map.get(name)], [map, name]);
  return (0,react.useSyncExternalStore)(subscribe, getValue, getValue);
}
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot-fill-context.js
var slot_fill_context = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot-fill-context.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/use-slot.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

function useSlot(name) {
  const registry = (0,react.useContext)(slot_fill_context/* default */.A);
  const slot = useObservableValue(registry.slots, name);
  const api = (0,react.useMemo)(() => ({
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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/slot-fill/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SQ: () => (/* binding */ slot_fill_Fill),
  DX: () => (/* binding */ slot_fill_Slot),
  VI: () => (/* binding */ createPrivateSlotFill)
});

// UNUSED EXPORTS: Provider, UnforwardedSlot, createSlotFill, useSlot, useSlotFills

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/slot-fill/context.js
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
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/slot-fill/use-slot.js
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
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/slot-fill/fill.js
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
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+element@6.10.0/node_modules/@wordpress/element/build-module/utils.js
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
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/slot-fill/slot.js
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/use-slot.js + 1 modules
var bubbles_virtually_use_slot = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/use-slot.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/style-provider/index.js
var style_provider = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/style-provider/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/fill.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function useForceUpdate() {
  const [, setState] = (0,react.useState)({});
  const mountedRef = (0,react.useRef)(true);
  (0,react.useEffect)(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);
  return () => {
    if (mountedRef.current) {
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js
var use_merge_refs = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/view/component.js
var component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/view/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot-fill-context.js
var slot_fill_context = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot-fill-context.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot.js
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/utils/observable-map/index.js
var observable_map = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/utils/observable-map/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot-fill-provider.js
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
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/slot-fill/provider.js
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
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/slot-fill/index.js
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
Provider.displayName = 'SlotFillProvider';
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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/spacer/component.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ spacer_component)
});

// UNUSED EXPORTS: Spacer

// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-connect.js
var context_connect = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-connect.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/view/component.js
var component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/view/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__("../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/use-context-system.js + 1 modules
var use_context_system = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/use-context-system.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/space.js
var space = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/space.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js
var use_cx = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/rtl.js
var rtl = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/rtl.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/spacer/hook.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */




const isDefined = o => typeof o !== 'undefined' && o !== null;
function useSpacer(props) {
  const {
    className,
    margin,
    marginBottom = 2,
    marginLeft,
    marginRight,
    marginTop,
    marginX,
    marginY,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingX,
    paddingY,
    ...otherProps
  } = (0,use_context_system/* useContextSystem */.A)(props, 'Spacer');
  const cx = (0,use_cx/* useCx */.l)();
  const classes = cx(isDefined(margin) && /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("margin:", (0,space/* space */.x)(margin), ";" + ( true ? "" : 0),  true ? "" : 0), isDefined(marginY) && /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("margin-bottom:", (0,space/* space */.x)(marginY), ";margin-top:", (0,space/* space */.x)(marginY), ";" + ( true ? "" : 0),  true ? "" : 0), isDefined(marginX) && /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("margin-left:", (0,space/* space */.x)(marginX), ";margin-right:", (0,space/* space */.x)(marginX), ";" + ( true ? "" : 0),  true ? "" : 0), isDefined(marginTop) && /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("margin-top:", (0,space/* space */.x)(marginTop), ";" + ( true ? "" : 0),  true ? "" : 0), isDefined(marginBottom) && /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("margin-bottom:", (0,space/* space */.x)(marginBottom), ";" + ( true ? "" : 0),  true ? "" : 0), isDefined(marginLeft) && (0,rtl/* rtl */.h)({
    marginLeft: (0,space/* space */.x)(marginLeft)
  })(), isDefined(marginRight) && (0,rtl/* rtl */.h)({
    marginRight: (0,space/* space */.x)(marginRight)
  })(), isDefined(padding) && /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("padding:", (0,space/* space */.x)(padding), ";" + ( true ? "" : 0),  true ? "" : 0), isDefined(paddingY) && /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("padding-bottom:", (0,space/* space */.x)(paddingY), ";padding-top:", (0,space/* space */.x)(paddingY), ";" + ( true ? "" : 0),  true ? "" : 0), isDefined(paddingX) && /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("padding-left:", (0,space/* space */.x)(paddingX), ";padding-right:", (0,space/* space */.x)(paddingX), ";" + ( true ? "" : 0),  true ? "" : 0), isDefined(paddingTop) && /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("padding-top:", (0,space/* space */.x)(paddingTop), ";" + ( true ? "" : 0),  true ? "" : 0), isDefined(paddingBottom) && /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("padding-bottom:", (0,space/* space */.x)(paddingBottom), ";" + ( true ? "" : 0),  true ? "" : 0), isDefined(paddingLeft) && (0,rtl/* rtl */.h)({
    paddingLeft: (0,space/* space */.x)(paddingLeft)
  })(), isDefined(paddingRight) && (0,rtl/* rtl */.h)({
    paddingRight: (0,space/* space */.x)(paddingRight)
  })(), className);
  return {
    ...otherProps,
    className: classes
  };
}
//# sourceMappingURL=hook.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/spacer/component.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */





function UnconnectedSpacer(props, forwardedRef) {
  const spacerProps = useSpacer(props);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(component/* default */.A, {
    ...spacerProps,
    ref: forwardedRef
  });
}

/**
 * `Spacer` is a primitive layout component that providers inner (`padding`) or outer (`margin`) space in-between components. It can also be used to adaptively provide space within an `HStack` or `VStack`.
 *
 * `Spacer` comes with a bunch of shorthand props to adjust `margin` and `padding`. The values of these props
 * can either be a number (which will act as a multiplier to the library's grid system base of 4px),
 * or a literal CSS value string.
 *
 * ```jsx
 * import { Spacer } from `@wordpress/components`
 *
 * function Example() {
 *   return (
 *     <View>
 *       <Spacer>
 *         <Heading>WordPress.org</Heading>
 *       </Spacer>
 *       <Text>
 *         Code is Poetry
 *       </Text>
 *     </View>
 *   );
 * }
 * ```
 */
const Spacer = (0,context_connect/* contextConnect */.KZ)(UnconnectedSpacer, 'Spacer');
/* harmony default export */ const spacer_component = (Spacer);
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/style-provider/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   N: () => (/* binding */ StyleProvider)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js");
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/* wp:polyfill */
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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/text/component.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Text */
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-connect.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/view/component.js");
/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/text/hook.js");
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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/text/hook.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ useText)
});

// NAMESPACE OBJECT: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/text/styles.js
var styles_namespaceObject = {};
__webpack_require__.r(styles_namespaceObject);
__webpack_require__.d(styles_namespaceObject, {
  Text: () => (Text),
  block: () => (block),
  destructive: () => (destructive),
  highlighterText: () => (highlighterText),
  muted: () => (muted),
  positive: () => (positive),
  upperCase: () => (upperCase)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__("../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/use-context-system.js + 1 modules
var use_context_system = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/use-context-system.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-connect.js
var context_connect = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-connect.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/truncate/hook.js + 2 modules
var hook = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/truncate/hook.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/memize@2.1.0/node_modules/memize/dist/index.js
var dist = __webpack_require__("../../node_modules/.pnpm/memize@2.1.0/node_modules/memize/dist/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/colord@2.9.3/node_modules/colord/index.mjs
var node_modules_colord = __webpack_require__("../../node_modules/.pnpm/colord@2.9.3/node_modules/colord/index.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/colord@2.9.3/node_modules/colord/plugins/names.mjs
var names = __webpack_require__("../../node_modules/.pnpm/colord@2.9.3/node_modules/colord/plugins/names.mjs");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/colors.js
/**
 * External dependencies
 */




/** @type {HTMLDivElement} */
let colorComputationNode;
(0,node_modules_colord/* extend */.X$)([names/* default */.A]);

/**
 * Generating a CSS compliant rgba() color value.
 *
 * @param {string} hexValue The hex value to convert to rgba().
 * @param {number} alpha    The alpha value for opacity.
 * @return {string} The converted rgba() color value.
 *
 * @example
 * rgba( '#000000', 0.5 )
 * // rgba(0, 0, 0, 0.5)
 */
function rgba(hexValue = '', alpha = 1) {
  return colord(hexValue).alpha(alpha).toRgbString();
}

/**
 * @return {HTMLDivElement | undefined} The HTML element for color computation.
 */
function getColorComputationNode() {
  if (typeof document === 'undefined') {
    return;
  }
  if (!colorComputationNode) {
    // Create a temporary element for style computation.
    const el = document.createElement('div');
    el.setAttribute('data-g2-color-computation-node', '');
    // Inject for window computed style.
    document.body.appendChild(el);
    colorComputationNode = el;
  }
  return colorComputationNode;
}

/**
 * @param {string | unknown} value
 *
 * @return {boolean} Whether the value is a valid color.
 */
function isColor(value) {
  if (typeof value !== 'string') {
    return false;
  }
  const test = (0,node_modules_colord/* colord */.Mj)(value);
  return test.isValid();
}

/**
 * Retrieves the computed background color. This is useful for getting the
 * value of a CSS variable color.
 *
 * @param {string | unknown} backgroundColor The background color to compute.
 *
 * @return {string} The computed background color.
 */
function _getComputedBackgroundColor(backgroundColor) {
  if (typeof backgroundColor !== 'string') {
    return '';
  }
  if (isColor(backgroundColor)) {
    return backgroundColor;
  }
  if (!backgroundColor.includes('var(')) {
    return '';
  }
  if (typeof document === 'undefined') {
    return '';
  }

  // Attempts to gracefully handle CSS variables color values.
  const el = getColorComputationNode();
  if (!el) {
    return '';
  }
  el.style.background = backgroundColor;
  // Grab the style.
  const computedColor = window?.getComputedStyle(el).background;
  // Reset.
  el.style.background = '';
  return computedColor || '';
}
const getComputedBackgroundColor = (0,dist/* default */.A)(_getComputedBackgroundColor);

/**
 * Get the text shade optimized for readability, based on a background color.
 *
 * @param {string | unknown} backgroundColor The background color.
 *
 * @return {string} The optimized text color (black or white).
 */
function getOptimalTextColor(backgroundColor) {
  const background = getComputedBackgroundColor(backgroundColor);
  return (0,node_modules_colord/* colord */.Mj)(background).isLight() ? '#000000' : '#ffffff';
}

/**
 * Get the text shade optimized for readability, based on a background color.
 *
 * @param {string | unknown} backgroundColor The background color.
 *
 * @return {string} The optimized text shade (dark or light).
 */
function getOptimalTextShade(backgroundColor) {
  const result = getOptimalTextColor(backgroundColor);
  return result === '#000000' ? 'dark' : 'light';
}
//# sourceMappingURL=colors.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/colors-values.js
var colors_values = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/colors-values.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/config-values.js
var config_values = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/config-values.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/text/styles.js
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */

const Text = /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("color:", colors_values/* COLORS */.l.gray[900], ";line-height:", config_values/* default */.A.fontLineHeightBase, ";margin:0;text-wrap:balance;text-wrap:pretty;" + ( true ? "" : 0),  true ? "" : 0);
const block =  true ? {
  name: "4zleql",
  styles: "display:block"
} : 0;
const positive = /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("color:", colors_values/* COLORS */.l.alert.green, ";" + ( true ? "" : 0),  true ? "" : 0);
const destructive = /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("color:", colors_values/* COLORS */.l.alert.red, ";" + ( true ? "" : 0),  true ? "" : 0);
const muted = /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("color:", colors_values/* COLORS */.l.gray[700], ";" + ( true ? "" : 0),  true ? "" : 0);
const highlighterText = /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("mark{background:", colors_values/* COLORS */.l.alert.yellow, ";border-radius:", config_values/* default */.A.radiusSmall, ";box-shadow:0 0 0 1px rgba( 0, 0, 0, 0.05 ) inset,0 -1px 0 rgba( 0, 0, 0, 0.1 ) inset;}" + ( true ? "" : 0),  true ? "" : 0);
const upperCase =  true ? {
  name: "50zrmy",
  styles: "text-transform:uppercase"
} : 0;
//# sourceMappingURL=styles.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/highlight-words-core@1.2.2/node_modules/highlight-words-core/dist/index.js
var highlight_words_core_dist = __webpack_require__("../../node_modules/.pnpm/highlight-words-core@1.2.2/node_modules/highlight-words-core/dist/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/text/utils.js
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */


/**
 * Source:
 * https://github.com/bvaughn/react-highlight-words/blob/HEAD/src/Highlighter.js
 */

/**
 * @typedef Options
 * @property {string}                                                     [activeClassName='']      Classname for active highlighted areas.
 * @property {number}                                                     [activeIndex=-1]          The index of the active highlighted area.
 * @property {import('react').AllHTMLAttributes<HTMLDivElement>['style']} [activeStyle]             Styles to apply to the active highlighted area.
 * @property {boolean}                                                    [autoEscape]              Whether to automatically escape text.
 * @property {boolean}                                                    [caseSensitive=false]     Whether to highlight in a case-sensitive manner.
 * @property {string}                                                     children                  Children to highlight.
 * @property {import('highlight-words-core').FindAllArgs['findChunks']}   [findChunks]              Custom `findChunks` function to pass to `highlight-words-core`.
 * @property {string | Record<string, unknown>}                           [highlightClassName='']   Classname to apply to highlighted text or a Record of classnames to apply to given text (which should be the key).
 * @property {import('react').AllHTMLAttributes<HTMLDivElement>['style']} [highlightStyle={}]       Styles to apply to highlighted text.
 * @property {keyof JSX.IntrinsicElements}                                [highlightTag='mark']     Tag to use for the highlighted text.
 * @property {import('highlight-words-core').FindAllArgs['sanitize']}     [sanitize]                Custom `santize` function to pass to `highlight-words-core`.
 * @property {string[]}                                                   [searchWords=[]]          Words to search for and highlight.
 * @property {string}                                                     [unhighlightClassName=''] Classname to apply to unhighlighted text.
 * @property {import('react').AllHTMLAttributes<HTMLDivElement>['style']} [unhighlightStyle]        Style to apply to unhighlighted text.
 */

/**
 * Maps props to lowercase names.
 *
 * @param object Props to map.
 * @return The mapped props.
 */
const lowercaseProps = object => {
  const mapped = {};
  for (const key in object) {
    mapped[key.toLowerCase()] = object[key];
  }
  return mapped;
};
const memoizedLowercaseProps = (0,dist/* default */.A)(lowercaseProps);

/**
 * @param options
 * @param options.activeClassName
 * @param options.activeIndex
 * @param options.activeStyle
 * @param options.autoEscape
 * @param options.caseSensitive
 * @param options.children
 * @param options.findChunks
 * @param options.highlightClassName
 * @param options.highlightStyle
 * @param options.highlightTag
 * @param options.sanitize
 * @param options.searchWords
 * @param options.unhighlightClassName
 * @param options.unhighlightStyle
 */
function createHighlighterText({
  activeClassName = '',
  activeIndex = -1,
  activeStyle,
  autoEscape,
  caseSensitive = false,
  children,
  findChunks,
  highlightClassName = '',
  highlightStyle = {},
  highlightTag = 'mark',
  sanitize,
  searchWords = [],
  unhighlightClassName = '',
  unhighlightStyle
}) {
  if (!children) {
    return null;
  }
  if (typeof children !== 'string') {
    return children;
  }
  const textToHighlight = children;
  const chunks = (0,highlight_words_core_dist.findAll)({
    autoEscape,
    caseSensitive,
    findChunks,
    sanitize,
    searchWords,
    textToHighlight
  });
  const HighlightTag = highlightTag;
  let highlightIndex = -1;
  let highlightClassNames = '';
  let highlightStyles;
  const textContent = chunks.map((chunk, index) => {
    const text = textToHighlight.substr(chunk.start, chunk.end - chunk.start);
    if (chunk.highlight) {
      highlightIndex++;
      let highlightClass;
      if (typeof highlightClassName === 'object') {
        if (!caseSensitive) {
          highlightClassName = memoizedLowercaseProps(highlightClassName);
          highlightClass = highlightClassName[text.toLowerCase()];
        } else {
          highlightClass = highlightClassName[text];
        }
      } else {
        highlightClass = highlightClassName;
      }
      const isActive = highlightIndex === +activeIndex;
      highlightClassNames = `${highlightClass} ${isActive ? activeClassName : ''}`;
      highlightStyles = isActive === true && activeStyle !== null ? Object.assign({}, highlightStyle, activeStyle) : highlightStyle;
      const props = {
        children: text,
        className: highlightClassNames,
        key: index,
        style: highlightStyles
      };

      // Don't attach arbitrary props to DOM elements; this triggers React DEV warnings (https://fb.me/react-unknown-prop)
      // Only pass through the highlightIndex attribute for custom components.
      if (typeof HighlightTag !== 'string') {
        props.highlightIndex = highlightIndex;
      }
      return (0,react.createElement)(HighlightTag, props);
    }
    return (0,react.createElement)('span', {
      children: text,
      className: unhighlightClassName,
      key: index,
      style: unhighlightStyle
    });
  });
  return textContent;
}
//# sourceMappingURL=utils.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/font-size.js
var font_size = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/font-size.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/space.js
var space = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/space.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/text/get-line-height.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



function getLineHeight(adjustLineHeightForInnerControls, lineHeight) {
  if (lineHeight) {
    return lineHeight;
  }
  if (!adjustLineHeightForInnerControls) {
    return;
  }
  let value = `calc(${config_values/* default */.A.controlHeight} + ${(0,space/* space */.x)(2)})`;
  switch (adjustLineHeightForInnerControls) {
    case 'large':
      value = `calc(${config_values/* default */.A.controlHeightLarge} + ${(0,space/* space */.x)(2)})`;
      break;
    case 'small':
      value = `calc(${config_values/* default */.A.controlHeightSmall} + ${(0,space/* space */.x)(2)})`;
      break;
    case 'xSmall':
      value = `calc(${config_values/* default */.A.controlHeightXSmall} + ${(0,space/* space */.x)(2)})`;
      break;
    default:
      break;
  }
  return value;
}
//# sourceMappingURL=get-line-height.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js
var use_cx = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/text/hook.js
function hook_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */










var _ref =  true ? {
  name: "50zrmy",
  styles: "text-transform:uppercase"
} : 0;
/**
 * @param {import('../context').WordPressComponentProps<import('./types').Props, 'span'>} props
 */
function useText(props) {
  const {
    adjustLineHeightForInnerControls,
    align,
    children,
    className,
    color,
    ellipsizeMode,
    isDestructive = false,
    display,
    highlightEscape = false,
    highlightCaseSensitive = false,
    highlightWords,
    highlightSanitize,
    isBlock = false,
    letterSpacing,
    lineHeight: lineHeightProp,
    optimizeReadabilityFor,
    size,
    truncate = false,
    upperCase = false,
    variant,
    weight = config_values/* default */.A.fontWeight,
    ...otherProps
  } = (0,use_context_system/* useContextSystem */.A)(props, 'Text');
  let content = children;
  const isHighlighter = Array.isArray(highlightWords);
  const isCaption = size === 'caption';
  if (isHighlighter) {
    if (typeof children !== 'string') {
      throw new TypeError('`children` of `Text` must only be `string` types when `highlightWords` is defined');
    }
    content = createHighlighterText({
      autoEscape: highlightEscape,
      children,
      caseSensitive: highlightCaseSensitive,
      searchWords: highlightWords,
      sanitize: highlightSanitize
    });
  }
  const cx = (0,use_cx/* useCx */.l)();
  const classes = (0,react.useMemo)(() => {
    const sx = {};
    const lineHeight = getLineHeight(adjustLineHeightForInnerControls, lineHeightProp);
    sx.Base = /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)({
      color,
      display,
      fontSize: (0,font_size/* getFontSize */.ny)(size),
      fontWeight: weight,
      lineHeight,
      letterSpacing,
      textAlign: align
    },  true ? "" : 0,  true ? "" : 0);
    sx.upperCase = _ref;
    sx.optimalTextColor = null;
    if (optimizeReadabilityFor) {
      const isOptimalTextColorDark = getOptimalTextShade(optimizeReadabilityFor) === 'dark';
      sx.optimalTextColor = isOptimalTextColorDark ? /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)({
        color: colors_values/* COLORS */.l.gray[900]
      },  true ? "" : 0,  true ? "" : 0) : /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)({
        color: colors_values/* COLORS */.l.white
      },  true ? "" : 0,  true ? "" : 0);
    }
    return cx(Text, sx.Base, sx.optimalTextColor, isDestructive && destructive, !!isHighlighter && highlighterText, isBlock && block, isCaption && muted, variant && styles_namespaceObject[variant], upperCase && sx.upperCase, className);
  }, [adjustLineHeightForInnerControls, align, className, color, cx, display, isBlock, isCaption, isDestructive, isHighlighter, letterSpacing, lineHeightProp, optimizeReadabilityFor, size, upperCase, variant, weight]);
  let finalEllipsizeMode;
  if (truncate === true) {
    finalEllipsizeMode = 'auto';
  }
  if (truncate === false) {
    finalEllipsizeMode = 'none';
  }
  const finalComponentProps = {
    ...otherProps,
    className: classes,
    children,
    ellipsizeMode: ellipsizeMode || finalEllipsizeMode
  };
  const truncateProps = (0,hook/* default */.A)(finalComponentProps);

  /**
   * Enhance child `<Link />` components to inherit font size.
   */
  if (!truncate && Array.isArray(children)) {
    content = react.Children.map(children, child => {
      if (typeof child !== 'object' || child === null || !('props' in child)) {
        return child;
      }
      const isLink = (0,context_connect/* hasConnectNamespace */.SZ)(child, ['Link']);
      if (isLink) {
        return (0,react.cloneElement)(child, {
          size: child.props.size || 'inherit'
        });
      }
      return child;
    });
  }
  return {
    ...truncateProps,
    children: truncate ? truncateProps.children : content
  };
}
//# sourceMappingURL=hook.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/toggle-group-control/context.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   H: () => (/* binding */ useToggleGroupControlContext)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

const ToggleGroupControlContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useToggleGroupControlContext = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(ToggleGroupControlContext);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleGroupControlContext);
//# sourceMappingURL=context.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control-option-base/component.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ component)
});

// NAMESPACE OBJECT: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control-option-base/styles.js
var styles_namespaceObject = {};
__webpack_require__.r(styles_namespaceObject);
__webpack_require__.d(styles_namespaceObject, {
  ButtonContentView: () => (ButtonContentView),
  LabelView: () => (LabelView),
  u: () => (buttonView),
  e: () => (labelBlock)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/K7FXVWIT.js
var K7FXVWIT = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/K7FXVWIT.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js
var use_instance_id = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/use-context-system.js + 1 modules
var use_context_system = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/use-context-system.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-connect.js
var context_connect = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-connect.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/toggle-group-control/context.js
var context = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/toggle-group-control/context.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1__@types+react@18.3.16_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js + 1 modules
var emotion_styled_base_browser_esm = __webpack_require__("../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1__@types+react@18.3.16_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__("../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/config-values.js
var config_values = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/config-values.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/colors-values.js
var colors_values = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/colors-values.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control-option-base/styles.js

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

const LabelView = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",  true ? {
  target: "et6ln9s1"
} : 0)( true ? {
  name: "sln1fl",
  styles: "display:inline-flex;max-width:100%;min-width:0;position:relative"
} : 0);
const labelBlock =  true ? {
  name: "82a6rk",
  styles: "flex:1"
} : 0;
const buttonView = ({
  isDeselectable,
  isIcon,
  isPressed,
  size
}) => /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("align-items:center;appearance:none;background:transparent;border:none;border-radius:", config_values/* default */.A.radiusXSmall, ";color:", colors_values/* COLORS */.l.gray[700], ";fill:currentColor;cursor:pointer;display:flex;font-family:inherit;height:100%;justify-content:center;line-height:100%;outline:none;padding:0 12px;position:relative;text-align:center;@media not ( prefers-reduced-motion ){transition:background ", config_values/* default */.A.transitionDurationFast, " linear,color ", config_values/* default */.A.transitionDurationFast, " linear,font-weight 60ms linear;}user-select:none;width:100%;z-index:2;&::-moz-focus-inner{border:0;}&[disabled]{opacity:0.4;cursor:default;}&:active{background:", config_values/* default */.A.controlBackgroundColor, ";}", isDeselectable && deselectable, " ", isIcon && isIconStyles({
  size
}), " ", isPressed && pressed, ";" + ( true ? "" : 0),  true ? "" : 0);
const pressed = /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("color:", colors_values/* COLORS */.l.white, ";&:active{background:transparent;}" + ( true ? "" : 0),  true ? "" : 0);
const deselectable = /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("color:", colors_values/* COLORS */.l.gray[900], ";&:focus{box-shadow:inset 0 0 0 1px ", colors_values/* COLORS */.l.white, ",0 0 0 ", config_values/* default */.A.borderWidthFocus, " ", colors_values/* COLORS */.l.theme.accent, ";outline:2px solid transparent;}" + ( true ? "" : 0),  true ? "" : 0);
const ButtonContentView = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",  true ? {
  target: "et6ln9s0"
} : 0)("display:flex;font-size:", config_values/* default */.A.fontSize, ";line-height:1;" + ( true ? "" : 0));
const isIconStyles = ({
  size = 'default'
}) => {
  const iconButtonSizes = {
    default: '30px',
    '__unstable-large': '32px'
  };
  return /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("color:", colors_values/* COLORS */.l.gray[900], ";height:", iconButtonSizes[size], ";aspect-ratio:1;padding-left:0;padding-right:0;" + ( true ? "" : 0),  true ? "" : 0);
};
//# sourceMappingURL=styles.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js
var use_cx = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/tooltip/index.js + 6 modules
var tooltip = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/tooltip/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control-option-base/component.js
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */







const {
  ButtonContentView: component_ButtonContentView,
  LabelView: component_LabelView
} = styles_namespaceObject;
const WithToolTip = ({
  showTooltip,
  text,
  children
}) => {
  if (showTooltip && text) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.Ay, {
      text: text,
      placement: "top",
      children: children
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: children
  });
};
function ToggleGroupControlOptionBase(props, forwardedRef) {
  const toggleGroupControlContext = (0,context/* useToggleGroupControlContext */.H)();
  const id = (0,use_instance_id/* default */.A)(ToggleGroupControlOptionBase, toggleGroupControlContext.baseId || 'toggle-group-control-option-base');
  const buttonProps = (0,use_context_system/* useContextSystem */.A)({
    ...props,
    id
  }, 'ToggleGroupControlOptionBase');
  const {
    isBlock = false,
    isDeselectable = false,
    size = 'default'
  } = toggleGroupControlContext;
  const {
    className,
    isIcon = false,
    value,
    children,
    showTooltip = false,
    disabled,
    ...otherButtonProps
  } = buttonProps;
  const isPressed = toggleGroupControlContext.value === value;
  const cx = (0,use_cx/* useCx */.l)();
  const labelViewClasses = (0,react.useMemo)(() => cx(isBlock && labelBlock), [cx, isBlock]);
  const itemClasses = (0,react.useMemo)(() => cx(buttonView({
    isDeselectable,
    isIcon,
    isPressed,
    size
  }), className), [cx, isDeselectable, isIcon, isPressed, size, className]);
  const buttonOnClick = () => {
    if (isDeselectable && isPressed) {
      toggleGroupControlContext.setValue(undefined);
    } else {
      toggleGroupControlContext.setValue(value);
    }
  };
  const commonProps = {
    ...otherButtonProps,
    className: itemClasses,
    'data-value': value,
    ref: forwardedRef
  };
  const labelRef = (0,react.useRef)(null);
  (0,react.useLayoutEffect)(() => {
    if (isPressed && labelRef.current) {
      toggleGroupControlContext.setSelectedElement(labelRef.current);
    }
  }, [isPressed, toggleGroupControlContext]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(component_LabelView, {
    ref: labelRef,
    className: labelViewClasses,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(WithToolTip, {
      showTooltip: showTooltip,
      text: otherButtonProps['aria-label'],
      children: isDeselectable ? /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
        ...commonProps,
        disabled: disabled,
        "aria-pressed": isPressed,
        type: "button",
        onClick: buttonOnClick,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(component_ButtonContentView, {
          children: children
        })
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(K7FXVWIT/* Radio */.s, {
        disabled: disabled,
        onFocusVisible: () => {
          const selectedValueIsEmpty = toggleGroupControlContext.value === null || toggleGroupControlContext.value === '';

          // Conditions ensure that the first visible focus to a radio group
          // without a selected option will not automatically select the option.
          if (!selectedValueIsEmpty || toggleGroupControlContext.activeItemIsNotFirstItem?.()) {
            toggleGroupControlContext.setValue(value);
          }
        },
        render: /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
          type: "button",
          ...commonProps
        }),
        value: value,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(component_ButtonContentView, {
          children: children
        })
      })
    })
  });
}

/**
 * `ToggleGroupControlOptionBase` is a form component and is meant to be used as an internal,
 * generic component for any children of `ToggleGroupControl`.
 *
 * @example
 * ```jsx
 * import {
 *   __experimentalToggleGroupControl as ToggleGroupControl,
 *   __experimentalToggleGroupControlOptionBase as ToggleGroupControlOptionBase,
 * } from '@wordpress/components';
 *
 * function Example() {
 *   return (
 *     <ToggleGroupControl label="my label" value="vertical" isBlock>
 *       <ToggleGroupControlOption value="horizontal" label="Horizontal" />
 *       <ToggleGroupControlOption value="vertical" label="Vertical" />
 *     </ToggleGroupControl>
 *   );
 * }
 * ```
 */
const ConnectedToggleGroupControlOptionBase = (0,context_connect/* contextConnect */.KZ)(ToggleGroupControlOptionBase, 'ToggleGroupControlOptionBase');
/* harmony default export */ const component = (ConnectedToggleGroupControlOptionBase);
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control-option/component.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export ToggleGroupControlOption */
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _toggle_group_control_option_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control-option-base/component.js");
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



function UnforwardedToggleGroupControlOption(props, ref) {
  const {
    label,
    ...restProps
  } = props;
  const optionLabel = restProps['aria-label'] || label;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_toggle_group_control_option_base__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    ...restProps,
    "aria-label": optionLabel,
    ref: ref,
    children: label
  });
}

/**
 * `ToggleGroupControlOption` is a form component and is meant to be used as a
 * child of `ToggleGroupControl`.
 *
 * ```jsx
 * import {
 *   __experimentalToggleGroupControl as ToggleGroupControl,
 *   __experimentalToggleGroupControlOption as ToggleGroupControlOption,
 * } from '@wordpress/components';
 *
 * function Example() {
 *   return (
 *     <ToggleGroupControl
 *       label="my label"
 *       value="vertical"
 *       isBlock
 *       __nextHasNoMarginBottom
 *     >
 *       <ToggleGroupControlOption value="horizontal" label="Horizontal" />
 *       <ToggleGroupControlOption value="vertical" label="Vertical" />
 *     </ToggleGroupControl>
 *   );
 * }
 * ```
 */
const ToggleGroupControlOption = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(UnforwardedToggleGroupControlOption);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleGroupControlOption);
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control/component.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ toggle_group_control_component)
});

// UNUSED EXPORTS: ToggleGroupControl

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/use-context-system.js + 1 modules
var use_context_system = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/use-context-system.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-connect.js
var context_connect = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-connect.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js
var use_cx = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/base-control/index.js
var base_control = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/base-control/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1__@types+react@18.3.16_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js + 1 modules
var emotion_styled_base_browser_esm = __webpack_require__("../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1__@types+react@18.3.16_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__("../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/colors-values.js
var colors_values = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/colors-values.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/config-values.js
var config_values = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/config-values.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control/styles.js

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

const toggleGroupControl = ({
  isBlock,
  isDeselectable,
  size
}) => /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("background:", colors_values/* COLORS */.l.ui.background, ";border:1px solid transparent;border-radius:", config_values/* default */.A.radiusSmall, ";display:inline-flex;min-width:0;position:relative;", toggleGroupControlSize(size), " ", !isDeselectable && enclosingBorders(isBlock), "@media not ( prefers-reduced-motion ){&[data-indicator-animated]::before{transition-property:transform,border-radius;transition-duration:0.2s;transition-timing-function:ease-out;}}&::before{content:'';position:absolute;pointer-events:none;background:", colors_values/* COLORS */.l.gray[900], ";outline:2px solid transparent;outline-offset:-3px;--antialiasing-factor:100;border-radius:calc(\n\t\t\t\t", config_values/* default */.A.radiusXSmall, " /\n\t\t\t\t\t(\n\t\t\t\t\t\tvar( --selected-width, 0 ) /\n\t\t\t\t\t\t\tvar( --antialiasing-factor )\n\t\t\t\t\t)\n\t\t\t)/", config_values/* default */.A.radiusXSmall, ";left:-1px;width:calc( var( --antialiasing-factor ) * 1px );height:calc( var( --selected-height, 0 ) * 1px );transform-origin:left top;transform:translateX( calc( var( --selected-left, 0 ) * 1px ) ) scaleX(\n\t\t\t\tcalc(\n\t\t\t\t\tvar( --selected-width, 0 ) / var( --antialiasing-factor )\n\t\t\t\t)\n\t\t\t);}" + ( true ? "" : 0),  true ? "" : 0);
const enclosingBorders = isBlock => {
  const enclosingBorder = /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("border-color:", colors_values/* COLORS */.l.ui.border, ";" + ( true ? "" : 0),  true ? "" : 0);
  return /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)(isBlock && enclosingBorder, " &:hover{border-color:", colors_values/* COLORS */.l.ui.borderHover, ";}&:focus-within{border-color:", colors_values/* COLORS */.l.ui.borderFocus, ";box-shadow:", config_values/* default */.A.controlBoxShadowFocus, ";z-index:1;outline:2px solid transparent;outline-offset:-2px;}" + ( true ? "" : 0),  true ? "" : 0);
};
var _ref =  true ? {
  name: "1aqh2c7",
  styles: "min-height:40px;padding:3px"
} : 0;
var _ref2 =  true ? {
  name: "1ndywgm",
  styles: "min-height:36px;padding:2px"
} : 0;
const toggleGroupControlSize = size => {
  const styles = {
    default: _ref2,
    '__unstable-large': _ref
  };
  return styles[size];
};
const block =  true ? {
  name: "7whenc",
  styles: "display:flex;width:100%"
} : 0;
const VisualLabelWrapper = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",  true ? {
  target: "eakva830"
} : 0)( true ? {
  name: "zjik7",
  styles: "display:flex"
} : 0);
//# sourceMappingURL=styles.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/UVQLZ7T5.js + 1 modules
var UVQLZ7T5 = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/UVQLZ7T5.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/2GXGCHW6.js
var _2GXGCHW6 = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/2GXGCHW6.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/D7EIQZAU.js
var D7EIQZAU = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/D7EIQZAU.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/EQQLU3CG.js
var EQQLU3CG = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/EQQLU3CG.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js
var PBFD2E7P = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js
var _3YLGPPWQ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/radio/radio-store.js
"use client";








// src/radio/radio-store.ts
function createRadioStore(_a = {}) {
  var props = (0,_3YLGPPWQ/* __objRest */.YG)(_a, []);
  var _a2;
  const syncState = (_a2 = props.store) == null ? void 0 : _a2.getState();
  const composite = (0,D7EIQZAU/* createCompositeStore */.z)((0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, props), {
    focusLoop: (0,PBFD2E7P/* defaultValue */.Jh)(props.focusLoop, syncState == null ? void 0 : syncState.focusLoop, true)
  }));
  const initialState = (0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, composite.getState()), {
    value: (0,PBFD2E7P/* defaultValue */.Jh)(
      props.value,
      syncState == null ? void 0 : syncState.value,
      props.defaultValue,
      null
    )
  });
  const radio = (0,EQQLU3CG/* createStore */.y$)(initialState, composite, props.store);
  return (0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, composite), radio), {
    setValue: (value) => radio.setState("value", value)
  });
}


;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/DYHFBFEH.js
"use client";



// src/radio/radio-store.ts

function useRadioStoreProps(store, update, props) {
  store = (0,UVQLZ7T5/* useCompositeStoreProps */.Y)(store, update, props);
  (0,_2GXGCHW6/* useStoreProps */.Tz)(store, props, "value", "setValue");
  return store;
}
function useRadioStore(props = {}) {
  const [store, update] = (0,_2GXGCHW6/* useStore */.Pj)(createRadioStore, props);
  return useRadioStoreProps(store, update, props);
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/SOKV3TSX.js
var SOKV3TSX = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/SOKV3TSX.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/TW35PKTK.js
var TW35PKTK = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/TW35PKTK.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js
var HKOOKEDE = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/Z32BISHQ.js
var Z32BISHQ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/Z32BISHQ.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js
var _chunks_3YLGPPWQ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/radio/radio-group.js
"use client";












// src/radio/radio-group.tsx


var TagName = "div";
var useRadioGroup = (0,HKOOKEDE/* createHook */.ab)(
  function useRadioGroup2(_a) {
    var _b = _a, { store } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, ["store"]);
    const context = (0,SOKV3TSX/* useRadioProviderContext */.XF)();
    store = store || context;
    (0,PBFD2E7P/* invariant */.V1)(
      store,
       false && 0
    );
    props = (0,Z32BISHQ/* useWrapElement */.w7)(
      props,
      (element) => /* @__PURE__ */ (0,jsx_runtime.jsx)(SOKV3TSX/* RadioScopedContextProvider */.aN, { value: store, children: element }),
      [store]
    );
    props = (0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      role: "radiogroup"
    }, props);
    props = (0,TW35PKTK/* useComposite */.T)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({ store }, props));
    return props;
  }
);
var RadioGroup = (0,HKOOKEDE/* forwardRef */.Rf)(function RadioGroup2(props) {
  const htmlProps = useRadioGroup(props);
  return (0,HKOOKEDE/* createElement */.n)(TagName, htmlProps);
});


// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js
var use_instance_id = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.10.0/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.10.0/node_modules/@wordpress/i18n/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/view/component.js
var component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/view/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/toggle-group-control/context.js
var context = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/toggle-group-control/context.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-previous/index.js
var use_previous = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-previous/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control/utils.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

/**
 * Used to determine, via an internal heuristics, whether an `undefined` value
 * received for the `value` prop should be interpreted as the component being
 * used in uncontrolled mode, or as an "empty" value for controlled mode.
 *
 * @param valueProp The received `value`
 */
function useComputeControlledOrUncontrolledValue(valueProp) {
  const isInitialRenderRef = (0,react.useRef)(true);
  const prevValueProp = (0,use_previous/* default */.A)(valueProp);
  const prevIsControlledRef = (0,react.useRef)(false);
  (0,react.useEffect)(() => {
    if (isInitialRenderRef.current) {
      isInitialRenderRef.current = false;
    }
  }, []);

  // Assume the component is being used in controlled mode on the first re-render
  // that has a different `valueProp` from the previous render.
  const isControlled = prevIsControlledRef.current || !isInitialRenderRef.current && prevValueProp !== valueProp;
  (0,react.useEffect)(() => {
    prevIsControlledRef.current = isControlled;
  }, [isControlled]);
  if (isControlled) {
    // When in controlled mode, use `''` instead of `undefined`
    return {
      value: valueProp !== null && valueProp !== void 0 ? valueProp : '',
      defaultValue: undefined
    };
  }

  // When in uncontrolled mode, the `value` should be intended as the initial value
  return {
    value: undefined,
    defaultValue: valueProp
  };
}
//# sourceMappingURL=utils.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control/as-radio-group.js
/**
 * External dependencies
 */




/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */




function UnforwardedToggleGroupControlAsRadioGroup({
  children,
  isAdaptiveWidth,
  label,
  onChange: onChangeProp,
  size,
  value: valueProp,
  id: idProp,
  setSelectedElement,
  ...otherProps
}, forwardedRef) {
  const generatedId = (0,use_instance_id/* default */.A)(ToggleGroupControlAsRadioGroup, 'toggle-group-control-as-radio-group');
  const baseId = idProp || generatedId;

  // Use a heuristic to understand if the component is being used in controlled
  // or uncontrolled mode, and consequently:
  // - when controlled, convert `undefined` values to `''` (ie. "no value")
  // - use the `value` prop as the `defaultValue` when uncontrolled
  const {
    value,
    defaultValue
  } = useComputeControlledOrUncontrolledValue(valueProp);

  // `useRadioStore`'s `setValue` prop can be called with `null`, while
  // the component's `onChange` prop only expects `undefined`
  const wrappedOnChangeProp = onChangeProp ? v => {
    onChangeProp(v !== null && v !== void 0 ? v : undefined);
  } : undefined;
  const radio = useRadioStore({
    defaultValue,
    value,
    setValue: wrappedOnChangeProp,
    rtl: (0,build_module/* isRTL */.V8)()
  });
  const selectedValue = (0,_2GXGCHW6/* useStoreState */.O$)(radio, 'value');
  const setValue = radio.setValue;

  // Ensures that the active id is also reset after the value is "reset" by the consumer.
  (0,react.useEffect)(() => {
    if (selectedValue === '') {
      radio.setActiveId(undefined);
    }
  }, [radio, selectedValue]);
  const groupContextValue = (0,react.useMemo)(() => ({
    activeItemIsNotFirstItem: () => radio.getState().activeId !== radio.first(),
    baseId,
    isBlock: !isAdaptiveWidth,
    size,
    // @ts-expect-error - This is wrong and we should fix it.
    value: selectedValue,
    // @ts-expect-error - This is wrong and we should fix it.
    setValue,
    setSelectedElement
  }), [baseId, isAdaptiveWidth, radio, selectedValue, setSelectedElement, setValue, size]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(context/* default */.A.Provider, {
    value: groupContextValue,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(RadioGroup, {
      store: radio,
      "aria-label": label,
      render: /*#__PURE__*/(0,jsx_runtime.jsx)(component/* default */.A, {}),
      ...otherProps,
      id: baseId,
      ref: forwardedRef,
      children: children
    })
  });
}
const ToggleGroupControlAsRadioGroup = (0,react.forwardRef)(UnforwardedToggleGroupControlAsRadioGroup);
//# sourceMappingURL=as-radio-group.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js
var use_controlled_value = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control/as-button-group.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */





function UnforwardedToggleGroupControlAsButtonGroup({
  children,
  isAdaptiveWidth,
  label,
  onChange,
  size,
  value: valueProp,
  id: idProp,
  setSelectedElement,
  ...otherProps
}, forwardedRef) {
  const generatedId = (0,use_instance_id/* default */.A)(ToggleGroupControlAsButtonGroup, 'toggle-group-control-as-button-group');
  const baseId = idProp || generatedId;

  // Use a heuristic to understand if the component is being used in controlled
  // or uncontrolled mode, and consequently:
  // - when controlled, convert `undefined` values to `''` (ie. "no value")
  // - use the `value` prop as the `defaultValue` when uncontrolled
  const {
    value,
    defaultValue
  } = useComputeControlledOrUncontrolledValue(valueProp);
  const [selectedValue, setSelectedValue] = (0,use_controlled_value/* useControlledValue */.j)({
    defaultValue,
    value,
    onChange
  });
  const groupContextValue = (0,react.useMemo)(() => ({
    baseId,
    value: selectedValue,
    setValue: setSelectedValue,
    isBlock: !isAdaptiveWidth,
    isDeselectable: true,
    size,
    setSelectedElement
  }), [baseId, selectedValue, setSelectedValue, isAdaptiveWidth, size, setSelectedElement]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(context/* default */.A.Provider, {
    value: groupContextValue,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(component/* default */.A, {
      "aria-label": label,
      ...otherProps,
      ref: forwardedRef,
      role: "group",
      children: children
    })
  });
}
const ToggleGroupControlAsButtonGroup = (0,react.forwardRef)(UnforwardedToggleGroupControlAsButtonGroup);
//# sourceMappingURL=as-button-group.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/element-rect.js + 3 modules
var element_rect = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/element-rect.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js
var use_merge_refs = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/hooks/use-animated-offset-rect.js + 1 modules
var use_animated_offset_rect = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/hooks/use-animated-offset-rect.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control/component.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */












function UnconnectedToggleGroupControl(props, forwardedRef) {
  const {
    __nextHasNoMarginBottom = false,
    __next40pxDefaultSize = false,
    className,
    isAdaptiveWidth = false,
    isBlock = false,
    isDeselectable = false,
    label,
    hideLabelFromVision = false,
    help,
    onChange,
    size = 'default',
    value,
    children,
    ...otherProps
  } = (0,use_context_system/* useContextSystem */.A)(props, 'ToggleGroupControl');
  const normalizedSize = __next40pxDefaultSize && size === 'default' ? '__unstable-large' : size;
  const [selectedElement, setSelectedElement] = (0,react.useState)();
  const [controlElement, setControlElement] = (0,react.useState)();
  const refs = (0,use_merge_refs/* default */.A)([setControlElement, forwardedRef]);
  const selectedRect = (0,element_rect/* useTrackElementOffsetRect */.ec)(value ? selectedElement : undefined);
  (0,use_animated_offset_rect/* useAnimatedOffsetRect */.M)(controlElement, selectedRect, {
    prefix: 'selected',
    dataAttribute: 'indicator-animated',
    transitionEndFilter: event => event.pseudoElement === '::before'
  });
  const cx = (0,use_cx/* useCx */.l)();
  const classes = (0,react.useMemo)(() => cx(toggleGroupControl({
    isBlock,
    isDeselectable,
    size: normalizedSize
  }), isBlock && block, className), [className, cx, isBlock, isDeselectable, normalizedSize]);
  const MainControl = isDeselectable ? ToggleGroupControlAsButtonGroup : ToggleGroupControlAsRadioGroup;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(base_control/* default */.Ay, {
    help: help,
    __nextHasNoMarginBottom: __nextHasNoMarginBottom,
    __associatedWPComponentName: "ToggleGroupControl",
    children: [!hideLabelFromVision && /*#__PURE__*/(0,jsx_runtime.jsx)(VisualLabelWrapper, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(base_control/* default.VisualLabel */.Ay.VisualLabel, {
        children: label
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(MainControl, {
      ...otherProps,
      setSelectedElement: setSelectedElement,
      className: classes,
      isAdaptiveWidth: isAdaptiveWidth,
      label: label,
      onChange: onChange,
      ref: refs,
      size: normalizedSize,
      value: value,
      children: children
    })]
  });
}

/**
 * `ToggleGroupControl` is a form component that lets users choose options
 * represented in horizontal segments. To render options for this control use
 * `ToggleGroupControlOption` component.
 *
 * This component is intended for selecting a single persistent value from a set of options,
 * similar to a how a radio button group would work. If you simply want a toggle to switch between views,
 * use a `TabPanel` instead.
 *
 * Only use this control when you know for sure the labels of items inside won't
 * wrap. For items with longer labels, you can consider a `SelectControl` or a
 * `CustomSelectControl` component instead.
 *
 * ```jsx
 * import {
 *   __experimentalToggleGroupControl as ToggleGroupControl,
 *   __experimentalToggleGroupControlOption as ToggleGroupControlOption,
 * } from '@wordpress/components';
 *
 * function Example() {
 *   return (
 *     <ToggleGroupControl
 *       label="my label"
 *       value="vertical"
 *       isBlock
 *       __nextHasNoMarginBottom
 *     >
 *       <ToggleGroupControlOption value="horizontal" label="Horizontal" />
 *       <ToggleGroupControlOption value="vertical" label="Vertical" />
 *     </ToggleGroupControl>
 *   );
 * }
 * ```
 */
const ToggleGroupControl = (0,context_connect/* contextConnect */.KZ)(UnconnectedToggleGroupControl, 'ToggleGroupControl');
/* harmony default export */ const toggle_group_control_component = (ToggleGroupControl);
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/tooltip/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (/* binding */ tooltip)
});

// UNUSED EXPORTS: TOOLTIP_DELAY, Tooltip

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/XMDAT5SM.js
var XMDAT5SM = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/XMDAT5SM.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/2GXGCHW6.js
var _2GXGCHW6 = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/2GXGCHW6.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/EACLTACN.js
var EACLTACN = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/EACLTACN.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/EQQLU3CG.js
var EQQLU3CG = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/EQQLU3CG.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js
var PBFD2E7P = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js
var _3YLGPPWQ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/tooltip/tooltip-store.js
"use client";








// src/tooltip/tooltip-store.ts
function createTooltipStore(props = {}) {
  var _a;
  if (false) {}
  const syncState = (_a = props.store) == null ? void 0 : _a.getState();
  const hovercard = (0,EACLTACN/* createHovercardStore */.y)((0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, props), {
    placement: (0,PBFD2E7P/* defaultValue */.Jh)(
      props.placement,
      syncState == null ? void 0 : syncState.placement,
      "top"
    ),
    hideTimeout: (0,PBFD2E7P/* defaultValue */.Jh)(props.hideTimeout, syncState == null ? void 0 : syncState.hideTimeout, 0)
  }));
  const initialState = (0,_3YLGPPWQ/* __spreadProps */.ko)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, hovercard.getState()), {
    type: (0,PBFD2E7P/* defaultValue */.Jh)(props.type, syncState == null ? void 0 : syncState.type, "description"),
    skipTimeout: (0,PBFD2E7P/* defaultValue */.Jh)(props.skipTimeout, syncState == null ? void 0 : syncState.skipTimeout, 300)
  });
  const tooltip = (0,EQQLU3CG/* createStore */.y$)(initialState, hovercard, props.store);
  return (0,_3YLGPPWQ/* __spreadValues */.IA)((0,_3YLGPPWQ/* __spreadValues */.IA)({}, hovercard), tooltip);
}


;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/2D53SX6Q.js
"use client";



// src/tooltip/tooltip-store.ts

function useTooltipStoreProps(store, update, props) {
  (0,_2GXGCHW6/* useStoreProps */.Tz)(store, props, "type");
  (0,_2GXGCHW6/* useStoreProps */.Tz)(store, props, "skipTimeout");
  return (0,XMDAT5SM/* useHovercardStoreProps */.B)(store, update, props);
}
function useTooltipStore(props = {}) {
  const [store, update] = (0,_2GXGCHW6/* useStore */.Pj)(createTooltipStore, props);
  return useTooltipStoreProps(store, update, props);
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/AXRBYZQP.js
var AXRBYZQP = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/AXRBYZQP.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/QA27FYGF.js
var QA27FYGF = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/QA27FYGF.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/CTQR3VDU.js
var CTQR3VDU = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/CTQR3VDU.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js
var HKOOKEDE = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/TWCRTUOB.js
"use client";



// src/tooltip/tooltip-context.tsx
var ctx = (0,HKOOKEDE/* createStoreContext */.B0)(
  [CTQR3VDU/* HovercardContextProvider */.pR],
  [CTQR3VDU/* HovercardScopedContextProvider */.n0]
);
var useTooltipContext = ctx.useContext;
var useTooltipScopedContext = ctx.useScopedContext;
var useTooltipProviderContext = ctx.useProviderContext;
var TooltipContextProvider = ctx.ContextProvider;
var TooltipScopedContextProvider = ctx.ScopedContextProvider;



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/Z32BISHQ.js
var Z32BISHQ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/Z32BISHQ.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js
var _chunks_3YLGPPWQ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/tooltip/tooltip-anchor.js
"use client";













// src/tooltip/tooltip-anchor.tsx



var TagName = "div";
var globalStore = (0,EQQLU3CG/* createStore */.y$)({
  activeStore: null
});
function createRemoveStoreCallback(store) {
  return () => {
    const { activeStore } = globalStore.getState();
    if (activeStore !== store) return;
    globalStore.setState("activeStore", null);
  };
}
var useTooltipAnchor = (0,HKOOKEDE/* createHook */.ab)(
  function useTooltipAnchor2(_a) {
    var _b = _a, { store, showOnHover = true } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, ["store", "showOnHover"]);
    const context = useTooltipProviderContext();
    store = store || context;
    (0,PBFD2E7P/* invariant */.V1)(
      store,
       false && 0
    );
    const canShowOnHoverRef = (0,react.useRef)(false);
    (0,react.useEffect)(() => {
      return (0,EQQLU3CG/* sync */.OH)(store, ["mounted"], (state) => {
        if (state.mounted) return;
        canShowOnHoverRef.current = false;
      });
    }, [store]);
    (0,react.useEffect)(() => {
      if (!store) return;
      return (0,PBFD2E7P/* chain */.cy)(
        // Immediately remove the current store from the global store when
        // the component unmounts. This is useful, for example, to avoid
        // showing tooltips immediately on serial tests.
        createRemoveStoreCallback(store),
        (0,EQQLU3CG/* sync */.OH)(store, ["mounted", "skipTimeout"], (state) => {
          if (!store) return;
          if (state.mounted) {
            const { activeStore } = globalStore.getState();
            if (activeStore !== store) {
              activeStore == null ? void 0 : activeStore.hide();
            }
            return globalStore.setState("activeStore", store);
          }
          const id = setTimeout(
            createRemoveStoreCallback(store),
            state.skipTimeout
          );
          return () => clearTimeout(id);
        })
      );
    }, [store]);
    const onMouseEnterProp = props.onMouseEnter;
    const onMouseEnter = (0,Z32BISHQ/* useEvent */._q)((event) => {
      onMouseEnterProp == null ? void 0 : onMouseEnterProp(event);
      canShowOnHoverRef.current = true;
    });
    const onFocusVisibleProp = props.onFocusVisible;
    const onFocusVisible = (0,Z32BISHQ/* useEvent */._q)((event) => {
      onFocusVisibleProp == null ? void 0 : onFocusVisibleProp(event);
      if (event.defaultPrevented) return;
      store == null ? void 0 : store.setAnchorElement(event.currentTarget);
      store == null ? void 0 : store.show();
    });
    const onBlurProp = props.onBlur;
    const onBlur = (0,Z32BISHQ/* useEvent */._q)((event) => {
      onBlurProp == null ? void 0 : onBlurProp(event);
      if (event.defaultPrevented) return;
      const { activeStore } = globalStore.getState();
      canShowOnHoverRef.current = false;
      if (activeStore === store) {
        globalStore.setState("activeStore", null);
      }
    });
    const type = store.useState("type");
    const contentId = store.useState((state) => {
      var _a2;
      return (_a2 = state.contentElement) == null ? void 0 : _a2.id;
    });
    props = (0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      "aria-labelledby": type === "label" ? contentId : void 0
    }, props), {
      onMouseEnter,
      onFocusVisible,
      onBlur
    });
    props = (0,QA27FYGF/* useHovercardAnchor */.p)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({
      store,
      showOnHover(event) {
        if (!canShowOnHoverRef.current) return false;
        if ((0,PBFD2E7P/* isFalsyBooleanCallback */.zO)(showOnHover, event)) return false;
        const { activeStore } = globalStore.getState();
        if (!activeStore) return true;
        store == null ? void 0 : store.show();
        return false;
      }
    }, props));
    return props;
  }
);
var TooltipAnchor = (0,HKOOKEDE/* forwardRef */.Rf)(function TooltipAnchor2(props) {
  const htmlProps = useTooltipAnchor(props);
  return (0,HKOOKEDE/* createElement */.n)(TagName, htmlProps);
});


// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HQFKUKP3.js + 2 modules
var HQFKUKP3 = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/HQFKUKP3.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/TT2355LN.js + 21 modules
var TT2355LN = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/TT2355LN.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js
var HWOIWM4O = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.4.9/node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.4.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/tooltip/tooltip.js
"use client";










































// src/tooltip/tooltip.tsx



var tooltip_TagName = "div";
var useTooltip = (0,HKOOKEDE/* createHook */.ab)(
  function useTooltip2(_a) {
    var _b = _a, {
      store,
      portal = true,
      gutter = 8,
      preserveTabOrder = false,
      hideOnHoverOutside = true,
      hideOnInteractOutside = true
    } = _b, props = (0,_chunks_3YLGPPWQ/* __objRest */.YG)(_b, [
      "store",
      "portal",
      "gutter",
      "preserveTabOrder",
      "hideOnHoverOutside",
      "hideOnInteractOutside"
    ]);
    const context = useTooltipProviderContext();
    store = store || context;
    (0,PBFD2E7P/* invariant */.V1)(
      store,
       false && 0
    );
    props = (0,Z32BISHQ/* useWrapElement */.w7)(
      props,
      (element) => /* @__PURE__ */ (0,jsx_runtime.jsx)(TooltipScopedContextProvider, { value: store, children: element }),
      [store]
    );
    const role = store.useState(
      (state) => state.type === "description" ? "tooltip" : "none"
    );
    props = (0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({ role }, props);
    props = (0,HQFKUKP3/* useHovercard */.a)((0,_chunks_3YLGPPWQ/* __spreadProps */.ko)((0,_chunks_3YLGPPWQ/* __spreadValues */.IA)({}, props), {
      store,
      portal,
      gutter,
      preserveTabOrder,
      hideOnHoverOutside(event) {
        if ((0,PBFD2E7P/* isFalsyBooleanCallback */.zO)(hideOnHoverOutside, event)) return false;
        const anchorElement = store == null ? void 0 : store.getState().anchorElement;
        if (!anchorElement) return true;
        if ("focusVisible" in anchorElement.dataset) return false;
        return true;
      },
      hideOnInteractOutside: (event) => {
        if ((0,PBFD2E7P/* isFalsyBooleanCallback */.zO)(hideOnInteractOutside, event)) return false;
        const anchorElement = store == null ? void 0 : store.getState().anchorElement;
        if (!anchorElement) return true;
        if ((0,HWOIWM4O/* contains */.gR)(anchorElement, event.target)) return false;
        return true;
      }
    }));
    return props;
  }
);
var Tooltip = (0,TT2355LN/* createDialogComponent */.AV)(
  (0,HKOOKEDE/* forwardRef */.Rf)(function Tooltip2(props) {
    const htmlProps = useTooltip(props);
    return (0,HKOOKEDE/* createElement */.n)(tooltip_TagName, htmlProps);
  }),
  useTooltipProviderContext
);


// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js
var use_instance_id = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+deprecated@4.10.0/node_modules/@wordpress/deprecated/build-module/index.js
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+deprecated@4.10.0/node_modules/@wordpress/deprecated/build-module/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/shortcut/index.js

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
  return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
    className: className,
    "aria-label": ariaLabel,
    children: displayText
  });
}
/* harmony default export */ const build_module_shortcut = (Shortcut);
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/popover/utils.js
var utils = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/popover/utils.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/tooltip/index.js
/**
 * External dependencies
 */




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
    className,
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
  const mounted = (0,_2GXGCHW6/* useStoreState */.O$)(tooltipStore, 'mounted');
  if (isNestedInTooltip) {
    return isOnlyChild ? /*#__PURE__*/(0,jsx_runtime.jsx)(AXRBYZQP/* Role */.X, {
      ...restProps,
      render: children
    }) : children;
  }

  // TODO: this is a temporary workaround to minimize the effects of the
  // Ariakit upgrade. Ariakit doesn't pass the `aria-describedby` prop to
  // the tooltip anchor anymore since 0.4.0, so we need to add it manually.
  // The `aria-describedby` attribute is added only if the anchor doesn't have
  // one already, and if the tooltip text is not the same as the anchor's
  // `aria-label`
  // See: https://github.com/WordPress/gutenberg/pull/64066
  // See: https://github.com/WordPress/gutenberg/pull/65989
  function addDescribedById(element) {
    return describedById && mounted && element.props['aria-describedby'] === undefined && element.props['aria-label'] !== text ? (0,react.cloneElement)(element, {
      'aria-describedby': describedById
    }) : element;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(TooltipInternalContext.Provider, {
    value: CONTEXT_VALUE,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TooltipAnchor, {
      onClick: hideOnClick ? tooltipStore.hide : undefined,
      store: tooltipStore,
      render: isOnlyChild ? addDescribedById(children) : undefined,
      ref: ref,
      children: isOnlyChild ? undefined : children
    }), isOnlyChild && (text || shortcut) && /*#__PURE__*/(0,jsx_runtime.jsxs)(Tooltip, {
      ...restProps,
      className: (0,clsx/* default */.A)('components-tooltip', className),
      unmountOnHide: true,
      gutter: 4,
      id: describedById,
      overflowPadding: 0.5,
      store: tooltipStore,
      children: [text, shortcut && /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_shortcut, {
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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/truncate/hook.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ useTruncate)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__("../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/use-context-system.js + 1 modules
var use_context_system = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/use-context-system.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/truncate/styles.js
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
/**
 * External dependencies
 */

const Truncate =  true ? {
  name: "hdknak",
  styles: "display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"
} : 0;
//# sourceMappingURL=styles.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/values.js
var values = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/values.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/truncate/utils.js
/**
 * Internal dependencies
 */

const TRUNCATE_ELLIPSIS = '…';
const TRUNCATE_TYPE = {
  auto: 'auto',
  head: 'head',
  middle: 'middle',
  tail: 'tail',
  none: 'none'
};
const TRUNCATE_DEFAULT_PROPS = {
  ellipsis: TRUNCATE_ELLIPSIS,
  ellipsizeMode: TRUNCATE_TYPE.auto,
  limit: 0,
  numberOfLines: 0
};

// Source
// https://github.com/kahwee/truncate-middle
function truncateMiddle(word, headLength, tailLength, ellipsis) {
  if (typeof word !== 'string') {
    return '';
  }
  const wordLength = word.length;
  // Setting default values
  // eslint-disable-next-line no-bitwise
  const frontLength = ~~headLength; // Will cast to integer
  // eslint-disable-next-line no-bitwise
  const backLength = ~~tailLength;
  /* istanbul ignore next */
  const truncateStr = (0,values/* isValueDefined */.J5)(ellipsis) ? ellipsis : TRUNCATE_ELLIPSIS;
  if (frontLength === 0 && backLength === 0 || frontLength >= wordLength || backLength >= wordLength || frontLength + backLength >= wordLength) {
    return word;
  } else if (backLength === 0) {
    return word.slice(0, frontLength) + truncateStr;
  }
  return word.slice(0, frontLength) + truncateStr + word.slice(wordLength - backLength);
}
function truncateContent(words = '', props) {
  const mergedProps = {
    ...TRUNCATE_DEFAULT_PROPS,
    ...props
  };
  const {
    ellipsis,
    ellipsizeMode,
    limit
  } = mergedProps;
  if (ellipsizeMode === TRUNCATE_TYPE.none) {
    return words;
  }
  let truncateHead;
  let truncateTail;
  switch (ellipsizeMode) {
    case TRUNCATE_TYPE.head:
      truncateHead = 0;
      truncateTail = limit;
      break;
    case TRUNCATE_TYPE.middle:
      truncateHead = Math.floor(limit / 2);
      truncateTail = Math.floor(limit / 2);
      break;
    default:
      truncateHead = limit;
      truncateTail = 0;
  }
  const truncatedContent = ellipsizeMode !== TRUNCATE_TYPE.auto ? truncateMiddle(words, truncateHead, truncateTail, ellipsis) : words;
  return truncatedContent;
}
//# sourceMappingURL=utils.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js
var use_cx = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/truncate/hook.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */





function useTruncate(props) {
  const {
    className,
    children,
    ellipsis = TRUNCATE_ELLIPSIS,
    ellipsizeMode = TRUNCATE_TYPE.auto,
    limit = 0,
    numberOfLines = 0,
    ...otherProps
  } = (0,use_context_system/* useContextSystem */.A)(props, 'Truncate');
  const cx = (0,use_cx/* useCx */.l)();
  let childrenAsText;
  if (typeof children === 'string') {
    childrenAsText = children;
  } else if (typeof children === 'number') {
    childrenAsText = children.toString();
  }
  const truncatedContent = childrenAsText ? truncateContent(childrenAsText, {
    ellipsis,
    ellipsizeMode,
    limit,
    numberOfLines
  }) : children;
  const shouldTruncate = !!childrenAsText && ellipsizeMode === TRUNCATE_TYPE.auto;
  const classes = (0,react.useMemo)(() => {
    // The `word-break: break-all` property first makes sure a text line
    // breaks even when it contains 'unbreakable' content such as long URLs.
    // See https://github.com/WordPress/gutenberg/issues/60860.
    const truncateLines = /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)(numberOfLines === 1 ? 'word-break: break-all;' : '', " -webkit-box-orient:vertical;-webkit-line-clamp:", numberOfLines, ";display:-webkit-box;overflow:hidden;" + ( true ? "" : 0),  true ? "" : 0);
    return cx(shouldTruncate && !numberOfLines && Truncate, shouldTruncate && !!numberOfLines && truncateLines, className);
  }, [className, cx, numberOfLines, shouldTruncate]);
  return {
    ...otherProps,
    className: classes,
    children: truncatedContent
  };
}
//# sourceMappingURL=hook.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/base-label.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ baseLabelTypography)
/* harmony export */ });
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
/**
 * External dependencies
 */


// This is a very low-level mixin which you shouldn't have to use directly.
// Try to use BaseControl's StyledLabel or BaseControl.VisualLabel if you can.
const baseLabelTypography =  true ? {
  name: "9amh4a",
  styles: "font-size:11px;font-weight:500;line-height:1.4;text-transform:uppercase"
} : 0;
//# sourceMappingURL=base-label.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/colors-values.js":
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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/config-values.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _space__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/space.js");
/* harmony import */ var _colors_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/colors-values.js");
/**
 * Internal dependencies
 */


const CONTROL_HEIGHT = '36px';
const CONTROL_PROPS = {
  // These values should be shared with TextControl.
  controlPaddingX: 12,
  controlPaddingXSmall: 8,
  controlPaddingXLarge: 12 * 1.3334,
  // TODO: Deprecate

  controlBackgroundColor: _colors_values__WEBPACK_IMPORTED_MODULE_0__/* .COLORS */ .l.white,
  controlBoxShadowFocus: `0 0 0 0.5px ${_colors_values__WEBPACK_IMPORTED_MODULE_0__/* .COLORS */ .l.theme.accent}`,
  controlHeight: CONTROL_HEIGHT,
  controlHeightXSmall: `calc( ${CONTROL_HEIGHT} * 0.6 )`,
  controlHeightSmall: `calc( ${CONTROL_HEIGHT} * 0.8 )`,
  controlHeightLarge: `calc( ${CONTROL_HEIGHT} * 1.2 )`,
  controlHeightXLarge: `calc( ${CONTROL_HEIGHT} * 1.4 )`
};

// Using Object.assign to avoid creating circular references when emitting
// TypeScript type declarations.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign({}, CONTROL_PROPS, {
  colorDivider: 'rgba(0, 0, 0, 0.1)',
  colorScrollbarThumb: 'rgba(0, 0, 0, 0.2)',
  colorScrollbarThumbHover: 'rgba(0, 0, 0, 0.5)',
  colorScrollbarTrack: 'rgba(0, 0, 0, 0.04)',
  elevationIntensity: 1,
  radiusXSmall: '1px',
  radiusSmall: '2px',
  radiusMedium: '4px',
  radiusLarge: '8px',
  radiusFull: '9999px',
  radiusRound: '50%',
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
  cardPaddingXSmall: `${(0,_space__WEBPACK_IMPORTED_MODULE_1__/* .space */ .x)(2)}`,
  cardPaddingSmall: `${(0,_space__WEBPACK_IMPORTED_MODULE_1__/* .space */ .x)(4)}`,
  cardPaddingMedium: `${(0,_space__WEBPACK_IMPORTED_MODULE_1__/* .space */ .x)(4)} ${(0,_space__WEBPACK_IMPORTED_MODULE_1__/* .space */ .x)(6)}`,
  cardPaddingLarge: `${(0,_space__WEBPACK_IMPORTED_MODULE_1__/* .space */ .x)(6)} ${(0,_space__WEBPACK_IMPORTED_MODULE_1__/* .space */ .x)(8)}`,
  elevationXSmall: `0 1px 1px rgba(0, 0, 0, 0.03), 0 1px 2px rgba(0, 0, 0, 0.02), 0 3px 3px rgba(0, 0, 0, 0.02), 0 4px 4px rgba(0, 0, 0, 0.01)`,
  elevationSmall: `0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 3px rgba(0, 0, 0, 0.04), 0 6px 6px rgba(0, 0, 0, 0.03), 0 8px 8px rgba(0, 0, 0, 0.02)`,
  elevationMedium: `0 2px 3px rgba(0, 0, 0, 0.05), 0 4px 5px rgba(0, 0, 0, 0.04), 0 12px 12px rgba(0, 0, 0, 0.03), 0 16px 16px rgba(0, 0, 0, 0.02)`,
  elevationLarge: `0 5px 15px rgba(0, 0, 0, 0.08), 0 15px 27px rgba(0, 0, 0, 0.07), 0 30px 36px rgba(0, 0, 0, 0.04), 0 50px 43px rgba(0, 0, 0, 0.02)`,
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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/element-rect.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ec: () => (/* binding */ useTrackElementOffsetRect)
});

// UNUSED EXPORTS: NULL_ELEMENT_OFFSET_RECT, getElementOffsetRect

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-event/index.js
var use_event = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-event/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-resize-observer/use-resize-observer.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


// This is the current implementation of `useResizeObserver`.
//
// The legacy implementation is still supported for backwards compatibility.
// This is achieved by overloading the exported function with both signatures,
// and detecting which API is being used at runtime.
function useResizeObserver(callback, resizeObserverOptions = {}) {
  const callbackEvent = (0,use_event/* default */.A)(callback);
  const observedElementRef = (0,react.useRef)();
  const resizeObserverRef = (0,react.useRef)();
  return (0,use_event/* default */.A)(element => {
    var _resizeObserverRef$cu;
    if (element === observedElementRef.current) {
      return;
    }

    // Set up `ResizeObserver`.
    (_resizeObserverRef$cu = resizeObserverRef.current) !== null && _resizeObserverRef$cu !== void 0 ? _resizeObserverRef$cu : resizeObserverRef.current = new ResizeObserver(callbackEvent);
    const {
      current: resizeObserver
    } = resizeObserverRef;

    // Unobserve previous element.
    if (observedElementRef.current) {
      resizeObserver.unobserve(observedElementRef.current);
    }

    // Observe new element.
    observedElementRef.current = element;
    if (element) {
      resizeObserver.observe(element, resizeObserverOptions);
    }
  });
}
//# sourceMappingURL=use-resize-observer.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-resize-observer/legacy/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


// We're only using the first element of the size sequences, until future versions of the spec solidify on how
// exactly it'll be used for fragments in multi-column scenarios:
// From the spec:
// > The box size properties are exposed as FrozenArray in order to support elements that have multiple fragments,
// > which occur in multi-column scenarios. However the current definitions of content rect and border box do not
// > mention how those boxes are affected by multi-column layout. In this spec, there will only be a single
// > ResizeObserverSize returned in the FrozenArray, which will correspond to the dimensions of the first column.
// > A future version of this spec will extend the returned FrozenArray to contain the per-fragment size information.
// (https://drafts.csswg.org/resize-observer/#resize-observer-entry-interface)
//
// Also, testing these new box options revealed that in both Chrome and FF everything is returned in the callback,
// regardless of the "box" option.
// The spec states the following on this:
// > This does not have any impact on which box dimensions are returned to the defined callback when the event
// > is fired, it solely defines which box the author wishes to observe layout changes on.
// (https://drafts.csswg.org/resize-observer/#resize-observer-interface)
// I'm not exactly clear on what this means, especially when you consider a later section stating the following:
// > This section is non-normative. An author may desire to observe more than one CSS box.
// > In this case, author will need to use multiple ResizeObservers.
// (https://drafts.csswg.org/resize-observer/#resize-observer-interface)
// Which is clearly not how current browser implementations behave, and seems to contradict the previous quote.
// For this reason I decided to only return the requested size,
// even though it seems we have access to results for all box types.
// This also means that we get to keep the current api, being able to return a simple { width, height } pair,
// regardless of box option.
const extractSize = entry => {
  let entrySize;
  if (!entry.contentBoxSize) {
    // The dimensions in `contentBoxSize` and `contentRect` are equivalent according to the spec.
    // See the 6th step in the description for the RO algorithm:
    // https://drafts.csswg.org/resize-observer/#create-and-populate-resizeobserverentry-h
    // > Set this.contentRect to logical this.contentBoxSize given target and observedBox of "content-box".
    // In real browser implementations of course these objects differ, but the width/height values should be equivalent.
    entrySize = [entry.contentRect.width, entry.contentRect.height];
  } else if (entry.contentBoxSize[0]) {
    const contentBoxSize = entry.contentBoxSize[0];
    entrySize = [contentBoxSize.inlineSize, contentBoxSize.blockSize];
  } else {
    // TS complains about this, because the RO entry type follows the spec and does not reflect Firefox's buggy
    // behaviour of returning objects instead of arrays for `borderBoxSize` and `contentBoxSize`.
    const contentBoxSize = entry.contentBoxSize;
    entrySize = [contentBoxSize.inlineSize, contentBoxSize.blockSize];
  }
  const [width, height] = entrySize.map(d => Math.round(d));
  return {
    width,
    height
  };
};
const RESIZE_ELEMENT_STYLES = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  pointerEvents: 'none',
  opacity: 0,
  overflow: 'hidden',
  zIndex: -1
};
function ResizeElement({
  onResize
}) {
  const resizeElementRef = useResizeObserver(entries => {
    const newSize = extractSize(entries.at(-1)); // Entries are never empty.
    onResize(newSize);
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    ref: resizeElementRef,
    style: RESIZE_ELEMENT_STYLES,
    "aria-hidden": "true"
  });
}
function sizeEquals(a, b) {
  return a.width === b.width && a.height === b.height;
}
const NULL_SIZE = {
  width: null,
  height: null
};

/**
 * Hook which allows to listen to the resize event of any target element when it changes size.
 * _Note: `useResizeObserver` will report `null` sizes until after first render.
 *
 * @example
 *
 * ```js
 * const App = () => {
 * 	const [ resizeListener, sizes ] = useResizeObserver();
 *
 * 	return (
 * 		<div>
 * 			{ resizeListener }
 * 			Your content here
 * 		</div>
 * 	);
 * };
 * ```
 */
function useLegacyResizeObserver() {
  const [size, setSize] = (0,react.useState)(NULL_SIZE);

  // Using a ref to track the previous width / height to avoid unnecessary renders.
  const previousSizeRef = (0,react.useRef)(NULL_SIZE);
  const handleResize = (0,react.useCallback)(newSize => {
    if (!sizeEquals(previousSizeRef.current, newSize)) {
      previousSizeRef.current = newSize;
      setSize(newSize);
    }
  }, []);
  const resizeElement = /*#__PURE__*/(0,jsx_runtime.jsx)(ResizeElement, {
    onResize: handleResize
  });
  return [resizeElement, size];
}
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-resize-observer/index.js
/**
 * Internal dependencies
 */


/**
 * External dependencies
 */

/**
 * Sets up a [`ResizeObserver`](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API)
 * for an HTML or SVG element.
 *
 * Pass the returned setter as a callback ref to the React element you want
 * to observe, or use it in layout effects for advanced use cases.
 *
 * @example
 *
 * ```tsx
 * const setElement = useResizeObserver(
 * 	( resizeObserverEntries ) => console.log( resizeObserverEntries ),
 * 	{ box: 'border-box' }
 * );
 * <div ref={ setElement } />;
 *
 * // The setter can be used in other ways, for example:
 * useLayoutEffect( () => {
 * 	setElement( document.querySelector( `data-element-id="${ elementId }"` ) );
 * }, [ elementId ] );
 * ```
 *
 * @param callback The `ResizeObserver` callback - [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/ResizeObserver#callback).
 * @param options  Options passed to `ResizeObserver.observe` when called - [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/observe#options). Changes will be ignored.
 */

/**
 * **This is a legacy API and should not be used.**
 *
 * @deprecated Use the other `useResizeObserver` API instead: `const ref = useResizeObserver( ( entries ) => { ... } )`.
 *
 * Hook which allows to listen to the resize event of any target element when it changes size.
 * _Note: `useResizeObserver` will report `null` sizes until after first render.
 *
 * @example
 *
 * ```js
 * const App = () => {
 * 	const [ resizeListener, sizes ] = useResizeObserver();
 *
 * 	return (
 * 		<div>
 * 			{ resizeListener }
 * 			Your content here
 * 		</div>
 * 	);
 * };
 * ```
 */

function use_resize_observer_useResizeObserver(callback, options = {}) {
  return callback ? useResizeObserver(callback, options) : useLegacyResizeObserver();
}
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/element-rect.js
/* eslint-disable jsdoc/require-param */
/**
 * WordPress dependencies
 */



/**
 * The position and dimensions of an element, relative to its offset parent.
 */

/**
 * An `ElementOffsetRect` object with all values set to zero.
 */
const NULL_ELEMENT_OFFSET_RECT = {
  element: undefined,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 0,
  height: 0
};

/**
 * Returns the position and dimensions of an element, relative to its offset
 * parent, with subpixel precision. Values reflect the real measures before any
 * potential scaling distortions along the X and Y axes.
 *
 * Useful in contexts where plain `getBoundingClientRect` calls or `ResizeObserver`
 * entries are not suitable, such as when the element is transformed, and when
 * `element.offset<Top|Left|Width|Height>` methods are not precise enough.
 *
 * **Note:** in some contexts, like when the scale is 0, this method will fail
 * because it's impossible to calculate a scaling ratio. When that happens, it
 * will return `undefined`.
 */
function getElementOffsetRect(element) {
  var _offsetParent$getBoun, _offsetParent$scrollL, _offsetParent$scrollT;
  // Position and dimension values computed with `getBoundingClientRect` have
  // subpixel precision, but are affected by distortions since they represent
  // the "real" measures, or in other words, the actual final values as rendered
  // by the browser.
  const rect = element.getBoundingClientRect();
  if (rect.width === 0 || rect.height === 0) {
    return;
  }
  const offsetParent = element.offsetParent;
  const offsetParentRect = (_offsetParent$getBoun = offsetParent?.getBoundingClientRect()) !== null && _offsetParent$getBoun !== void 0 ? _offsetParent$getBoun : NULL_ELEMENT_OFFSET_RECT;
  const offsetParentScrollX = (_offsetParent$scrollL = offsetParent?.scrollLeft) !== null && _offsetParent$scrollL !== void 0 ? _offsetParent$scrollL : 0;
  const offsetParentScrollY = (_offsetParent$scrollT = offsetParent?.scrollTop) !== null && _offsetParent$scrollT !== void 0 ? _offsetParent$scrollT : 0;

  // Computed widths and heights have subpixel precision, and are not affected
  // by distortions.
  const computedWidth = parseFloat(getComputedStyle(element).width);
  const computedHeight = parseFloat(getComputedStyle(element).height);

  // We can obtain the current scale factor for the element by comparing "computed"
  // dimensions with the "real" ones.
  const scaleX = computedWidth / rect.width;
  const scaleY = computedHeight / rect.height;
  return {
    element,
    // To obtain the adjusted values for the position:
    // 1. Compute the element's position relative to the offset parent.
    // 2. Correct for the scale factor.
    // 3. Adjust for the scroll position of the offset parent.
    top: (rect.top - offsetParentRect?.top) * scaleY + offsetParentScrollY,
    right: (offsetParentRect?.right - rect.right) * scaleX - offsetParentScrollX,
    bottom: (offsetParentRect?.bottom - rect.bottom) * scaleY - offsetParentScrollY,
    left: (rect.left - offsetParentRect?.left) * scaleX + offsetParentScrollX,
    // Computed dimensions don't need any adjustments.
    width: computedWidth,
    height: computedHeight
  };
}
const POLL_RATE = 100;

/**
 * Tracks the position and dimensions of an element, relative to its offset
 * parent. The element can be changed dynamically.
 *
 * When no element is provided (`null` or `undefined`), the hook will return
 * a "null" rect, in which all values are `0` and `element` is `undefined`.
 *
 * **Note:** sometimes, the measurement will fail (see `getElementOffsetRect`'s
 * documentation for more details). When that happens, this hook will attempt
 * to measure again after a frame, and if that fails, it will poll every 100
 * milliseconds until it succeeds.
 */
function useTrackElementOffsetRect(targetElement) {
  const [indicatorPosition, setIndicatorPosition] = (0,react.useState)(NULL_ELEMENT_OFFSET_RECT);
  const intervalRef = (0,react.useRef)();
  const measure = (0,use_event/* default */.A)(() => {
    if (targetElement) {
      const elementOffsetRect = getElementOffsetRect(targetElement);
      if (elementOffsetRect) {
        setIndicatorPosition(elementOffsetRect);
        clearInterval(intervalRef.current);
        return true;
      }
    } else {
      clearInterval(intervalRef.current);
    }
    return false;
  });
  const setElement = use_resize_observer_useResizeObserver(() => {
    if (!measure()) {
      requestAnimationFrame(() => {
        if (!measure()) {
          intervalRef.current = setInterval(measure, POLL_RATE);
        }
      });
    }
  });
  (0,react.useLayoutEffect)(() => {
    setElement(targetElement);
    if (!targetElement) {
      setIndicatorPosition(NULL_ELEMENT_OFFSET_RECT);
    }
  }, [setElement, targetElement]);
  return indicatorPosition;
}

/* eslint-enable jsdoc/require-param */
//# sourceMappingURL=element-rect.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/font-size.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fM: () => (/* binding */ getHeadingFontSize),
/* harmony export */   ny: () => (/* binding */ getFontSize)
/* harmony export */ });
/* unused harmony exports BASE_FONT_SIZE, PRESET_FONT_SIZES, HEADING_FONT_SIZES */
/* harmony import */ var _config_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/config-values.js");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

const BASE_FONT_SIZE = 13;
const PRESET_FONT_SIZES = {
  body: BASE_FONT_SIZE,
  caption: 10,
  footnote: 11,
  largeTitle: 28,
  subheadline: 12,
  title: 20
};
const HEADING_FONT_SIZES = [1, 2, 3, 4, 5, 6].flatMap(n => [n, n.toString()]);
function getFontSize(size = BASE_FONT_SIZE) {
  if (size in PRESET_FONT_SIZES) {
    return getFontSize(PRESET_FONT_SIZES[size]);
  }
  if (typeof size !== 'number') {
    const parsed = parseFloat(size);
    if (Number.isNaN(parsed)) {
      return size;
    }
    size = parsed;
  }
  const ratio = `(${size} / ${BASE_FONT_SIZE})`;
  return `calc(${ratio} * ${_config_values__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.fontSize})`;
}
function getHeadingFontSize(size = 3) {
  if (!HEADING_FONT_SIZES.includes(size)) {
    return getFontSize(size);
  }
  const headingSize = `fontSizeH${size}`;
  return _config_values__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A[headingSize];
}
//# sourceMappingURL=font-size.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/font.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: () => (/* binding */ font)
});

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/font-values.js
/* harmony default export */ const font_values = ({
  'default.fontFamily': "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
  'default.fontSize': '13px',
  'helpText.fontSize': '12px',
  mobileTextMinFontSize: '16px'
});
//# sourceMappingURL=font-values.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/font.js
/**
 * Internal dependencies
 */


/**
 *
 * @param {keyof FONT} value Path of value from `FONT`
 * @return {string} Font rule value
 */
function font(value) {
  var _FONT$value;
  return (_FONT$value = font_values[value]) !== null && _FONT$value !== void 0 ? _FONT$value : '';
}
//# sourceMappingURL=font.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/hooks/use-animated-offset-rect.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  M: () => (/* binding */ useAnimatedOffsetRect)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-event/index.js
var use_event = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-event/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/hooks/use-on-value-update.js
/* eslint-disable jsdoc/require-param */
/**
 * WordPress dependencies
 */



/**
 * Context object for the `onUpdate` callback of `useOnValueUpdate`.
 */

/**
 * Calls the `onUpdate` callback when the `value` changes.
 */
function useOnValueUpdate(
/**
 * The value to watch for changes.
 */
value,
/**
 * Callback to fire when the value changes.
 */
onUpdate) {
  const previousValueRef = (0,react.useRef)(value);
  const updateCallbackEvent = (0,use_event/* default */.A)(onUpdate);
  (0,react.useLayoutEffect)(() => {
    if (previousValueRef.current !== value) {
      updateCallbackEvent({
        previousValue: previousValueRef.current
      });
      previousValueRef.current = value;
    }
  }, [updateCallbackEvent, value]);
}
/* eslint-enable jsdoc/require-param */
//# sourceMappingURL=use-on-value-update.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/hooks/use-animated-offset-rect.js
/* eslint-disable jsdoc/require-param */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



/**
 * A utility used to animate something in a container component based on the "offset
 * rect" (position relative to the container and size) of a subelement. For example,
 * this is useful to render an indicator for the selected option of a component, and
 * to animate it when the selected option changes.
 *
 * Takes in a container element and the up-to-date "offset rect" of the target
 * subelement, obtained with `useTrackElementOffsetRect`. Then it does the following:
 *
 * - Adds CSS variables with rect information to the container, so that the indicator
 *   can be rendered and animated with them. These are kept up-to-date, enabling CSS
 *   transitions on change.
 * - Sets an attribute (`data-subelement-animated` by default) when the tracked
 *   element changes, so that the target (e.g. the indicator) can be animated to its
 *   new size and position.
 * - Removes the attribute when the animation is done.
 *
 * The need for the attribute is due to the fact that the rect might update in
 * situations other than when the tracked element changes, e.g. the tracked element
 * might be resized. In such cases, there is no need to animate the indicator, and
 * the change in size or position of the indicator needs to be reflected immediately.
 */
function useAnimatedOffsetRect(
/**
 * The container element.
 */
container,
/**
 * The rect of the tracked element.
 */
rect, {
  prefix = 'subelement',
  dataAttribute = `${prefix}-animated`,
  transitionEndFilter = () => true
} = {}) {
  const setProperties = (0,use_event/* default */.A)(() => {
    Object.keys(rect).forEach(property => property !== 'element' && container?.style.setProperty(`--${prefix}-${property}`, String(rect[property])));
  });
  (0,react.useLayoutEffect)(() => {
    setProperties();
  }, [rect, setProperties]);
  useOnValueUpdate(rect.element, ({
    previousValue
  }) => {
    // Only enable the animation when moving from one element to another.
    if (rect.element && previousValue) {
      container?.setAttribute(`data-${dataAttribute}`, '');
    }
  });
  (0,react.useLayoutEffect)(() => {
    function onTransitionEnd(event) {
      if (transitionEndFilter(event)) {
        container?.removeAttribute(`data-${dataAttribute}`);
      }
    }
    container?.addEventListener('transitionend', onTransitionEnd);
    return () => container?.removeEventListener('transitionend', onTransitionEnd);
  }, [dataAttribute, container, transitionEndFilter]);
}
/* eslint-enable jsdoc/require-param */
//# sourceMappingURL=use-animated-offset-rect.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js":
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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/math.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Re: () => (/* binding */ subtract),
/* harmony export */   WQ: () => (/* binding */ add),
/* harmony export */   ir: () => (/* binding */ roundClamp),
/* harmony export */   qE: () => (/* binding */ clamp)
/* harmony export */ });
/* unused harmony export getNumber */
/**
 * Parses and retrieves a number value.
 *
 * @param {unknown} value The incoming value.
 *
 * @return {number} The parsed number value.
 */
function getNumber(value) {
  const number = Number(value);
  return isNaN(number) ? 0 : number;
}

/**
 * Safely adds 2 values.
 *
 * @param {Array<number|string>} args Values to add together.
 *
 * @return {number} The sum of values.
 */
function add(...args) {
  return args.reduce(/** @type {(sum:number, arg: number|string) => number} */
  (sum, arg) => sum + getNumber(arg), 0);
}

/**
 * Safely subtracts 2 values.
 *
 * @param {Array<number|string>} args Values to subtract together.
 *
 * @return {number} The difference of the values.
 */
function subtract(...args) {
  return args.reduce(/** @type {(diff:number, arg: number|string, index:number) => number} */
  (diff, arg, index) => {
    const value = getNumber(arg);
    return index === 0 ? value : diff - value;
  }, 0);
}

/**
 * Determines the decimal position of a number value.
 *
 * @param {number} value The number to evaluate.
 *
 * @return {number} The number of decimal places.
 */
function getPrecision(value) {
  const split = (value + '').split('.');
  return split[1] !== undefined ? split[1].length : 0;
}

/**
 * Clamps a value based on a min/max range.
 *
 * @param {number} value The value.
 * @param {number} min   The minimum range.
 * @param {number} max   The maximum range.
 *
 * @return {number} The clamped value.
 */
function clamp(value, min, max) {
  const baseValue = getNumber(value);
  return Math.max(min, Math.min(baseValue, max));
}

/**
 * Clamps a value based on a min/max range with rounding
 *
 * @param {number | string} value The value.
 * @param {number}          min   The minimum range.
 * @param {number}          max   The maximum range.
 * @param {number}          step  A multiplier for the value.
 *
 * @return {number} The rounded and clamped value.
 */
function roundClamp(value = 0, min = Infinity, max = Infinity, step = 1) {
  const baseValue = getNumber(value);
  const stepValue = getNumber(step);
  const precision = getPrecision(step);
  const rounded = Math.round(baseValue / stepValue) * stepValue;
  const clampedValue = clamp(rounded, min, max);
  return precision ? getNumber(clampedValue.toFixed(precision)) : clampedValue;
}
//# sourceMappingURL=math.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/rtl.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ rtl)
/* harmony export */ });
/* unused harmony export convertLTRToRTL */
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.10.0/node_modules/@wordpress/i18n/build-module/index.js");
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

const LOWER_LEFT_REGEXP = new RegExp(/-left/g);
const LOWER_RIGHT_REGEXP = new RegExp(/-right/g);
const UPPER_LEFT_REGEXP = new RegExp(/Left/g);
const UPPER_RIGHT_REGEXP = new RegExp(/Right/g);

/**
 * Flips a CSS property from left <-> right.
 *
 * @param {string} key The CSS property name.
 *
 * @return {string} The flipped CSS property name, if applicable.
 */
function getConvertedKey(key) {
  if (key === 'left') {
    return 'right';
  }
  if (key === 'right') {
    return 'left';
  }
  if (LOWER_LEFT_REGEXP.test(key)) {
    return key.replace(LOWER_LEFT_REGEXP, '-right');
  }
  if (LOWER_RIGHT_REGEXP.test(key)) {
    return key.replace(LOWER_RIGHT_REGEXP, '-left');
  }
  if (UPPER_LEFT_REGEXP.test(key)) {
    return key.replace(UPPER_LEFT_REGEXP, 'Right');
  }
  if (UPPER_RIGHT_REGEXP.test(key)) {
    return key.replace(UPPER_RIGHT_REGEXP, 'Left');
  }
  return key;
}

/**
 * An incredibly basic ltr -> rtl converter for style properties
 *
 * @param {import('react').CSSProperties} ltrStyles
 *
 * @return {import('react').CSSProperties} Converted ltr -> rtl styles
 */
const convertLTRToRTL = (ltrStyles = {}) => {
  return Object.fromEntries(Object.entries(ltrStyles).map(([key, value]) => [getConvertedKey(key), value]));
};

/**
 * A higher-order function that create an incredibly basic ltr -> rtl style converter for CSS objects.
 *
 * @param {import('react').CSSProperties} ltrStyles   Ltr styles. Converts and renders from ltr -> rtl styles, if applicable.
 * @param {import('react').CSSProperties} [rtlStyles] Rtl styles. Renders if provided.
 *
 * @return {() => import('@emotion/react').SerializedStyles} A function to output CSS styles for Emotion's renderer
 */
function rtl(ltrStyles = {}, rtlStyles) {
  return () => {
    if (rtlStyles) {
      // @ts-ignore: `css` types are wrong, it can accept an object: https://emotion.sh/docs/object-styles#with-css
      return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__/* .isRTL */ .V8)() ? /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .css */ .AH)(rtlStyles,  true ? "" : 0,  true ? "" : 0) : /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .css */ .AH)(ltrStyles,  true ? "" : 0,  true ? "" : 0);
    }

    // @ts-ignore: `css` types are wrong, it can accept an object: https://emotion.sh/docs/object-styles#with-css
    return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__/* .isRTL */ .V8)() ? /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .css */ .AH)(convertLTRToRTL(ltrStyles),  true ? "" : 0,  true ? "" : 0) : /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .css */ .AH)(ltrStyles,  true ? "" : 0,  true ? "" : 0);
  };
}

/**
 * Call this in the `useMemo` dependency array to ensure that subsequent renders will
 * cause rtl styles to update based on the `isRTL` return value even if all other dependencies
 * remain the same.
 *
 * @example
 * const styles = useMemo( () => {
 *   return css`
 *     ${ rtl( { marginRight: '10px' } ) }
 *   `;
 * }, [ rtl.watch() ] );
 */
rtl.watch = () => (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__/* .isRTL */ .V8)();
//# sourceMappingURL=rtl.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/space.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ space)
/* harmony export */ });
/**
 * The argument value for the `space()` utility function.
 *
 * When this is a number or a numeric string, it will be interpreted as a
 * multiplier for the grid base value (4px). For example, `space( 2 )` will be 8px.
 *
 * Otherwise, it will be interpreted as a literal CSS length value. For example,
 * `space( 'auto' )` will be 'auto', and `space( '2px' )` will be 2px.
 */

const GRID_BASE = '4px';

/**
 * A function that handles numbers, numeric strings, and unit values.
 *
 * When given a number or a numeric string, it will return the grid-based
 * value as a factor of GRID_BASE, defined above.
 *
 * When given a unit value or one of the named CSS values like `auto`,
 * it will simply return the value back.
 *
 * @param value A number, numeric string, or a unit value.
 */
function space(value) {
  if (typeof value === 'undefined') {
    return undefined;
  }

  // Handle empty strings, if it's the number 0 this still works.
  if (!value) {
    return '0';
  }
  const asInt = typeof value === 'number' ? value : Number(value);

  // Test if the input has a unit, was NaN, or was one of the named CSS values (like `auto`), in which case just use that value.
  if (typeof window !== 'undefined' && window.CSS?.supports?.('margin', value.toString()) || Number.isNaN(asInt)) {
    return value.toString();
  }
  return `calc(${GRID_BASE} * ${value})`;
}
//# sourceMappingURL=space.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/use-deprecated-props.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useDeprecated36pxDefaultSizeProp)
/* harmony export */ });
function useDeprecated36pxDefaultSizeProp(props) {
  const {
    __next36pxDefaultSize,
    __next40pxDefaultSize,
    ...otherProps
  } = props;
  return {
    ...otherProps,
    __next40pxDefaultSize: __next40pxDefaultSize !== null && __next40pxDefaultSize !== void 0 ? __next40pxDefaultSize : __next36pxDefaultSize
  };
}
//# sourceMappingURL=use-deprecated-props.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/use-responsive-value.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/values.js":
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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/with-ignore-ime-events.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ withIgnoreIMEEvents)
/* harmony export */ });
/**
 * A higher-order function that wraps a keydown event handler to ensure it is not an IME event.
 *
 * In CJK languages, an IME (Input Method Editor) is used to input complex characters.
 * During an IME composition, keydown events (e.g. Enter or Escape) can be fired
 * which are intended to control the IME and not the application.
 * These events should be ignored by any application logic.
 *
 * @param keydownHandler The keydown event handler to execute after ensuring it was not an IME event.
 *
 * @return A wrapped version of the given event handler that ignores IME events.
 */
function withIgnoreIMEEvents(keydownHandler) {
  return event => {
    const {
      isComposing
    } = 'nativeEvent' in event ? event.nativeEvent : event;
    if (isComposing ||
    // Workaround for Mac Safari where the final Enter/Backspace of an IME composition
    // is `isComposing=false`, even though it's technically still part of the composition.
    // These can only be detected by keyCode.
    event.keyCode === 229) {
      return;
    }
    keydownHandler(event);
  };
}
//# sourceMappingURL=with-ignore-ime-events.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/v-stack/component.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ v_stack_component)
});

// UNUSED EXPORTS: VStack

// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-connect.js
var context_connect = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-connect.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/view/component.js
var component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/view/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/use-context-system.js + 1 modules
var use_context_system = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/use-context-system.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/h-stack/hook.js + 2 modules
var hook = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/h-stack/hook.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/v-stack/hook.js
/**
 * Internal dependencies
 */



function useVStack(props) {
  const {
    expanded = false,
    alignment = 'stretch',
    ...otherProps
  } = (0,use_context_system/* useContextSystem */.A)(props, 'VStack');
  const hStackProps = (0,hook/* useHStack */.A)({
    direction: 'column',
    expanded,
    alignment,
    ...otherProps
  });
  return hStackProps;
}
//# sourceMappingURL=hook.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/v-stack/component.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */





function UnconnectedVStack(props, forwardedRef) {
  const vStackProps = useVStack(props);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(component/* default */.A, {
    ...vStackProps,
    ref: forwardedRef
  });
}

/**
 * `VStack` (or Vertical Stack) is a layout component that arranges child
 * elements in a vertical line.
 *
 * `VStack` can render anything inside.
 *
 * ```jsx
 * import {
 * 	__experimentalText as Text,
 * 	__experimentalVStack as VStack,
 * } from `@wordpress/components`;
 *
 * function Example() {
 * 	return (
 * 		<VStack>
 * 			<Text>Code</Text>
 * 			<Text>is</Text>
 * 			<Text>Poetry</Text>
 * 		</VStack>
 * 	);
 * }
 * ```
 */
const VStack = (0,context_connect/* contextConnect */.KZ)(UnconnectedVStack, 'VStack');
/* harmony default export */ const v_stack_component = (VStack);
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/view/component.js":
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

/***/ "../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/visually-hidden/component.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ visually_hidden_component)
});

// UNUSED EXPORTS: VisuallyHidden

// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/use-context-system.js + 1 modules
var use_context_system = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/use-context-system.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-connect.js
var context_connect = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/context/context-connect.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/visually-hidden/styles.js
/**
 * External dependencies
 */

const visuallyHidden = {
  border: 0,
  clip: 'rect(1px, 1px, 1px, 1px)',
  WebkitClipPath: 'inset( 50% )',
  clipPath: 'inset( 50% )',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  width: '1px',
  wordWrap: 'normal'
};
//# sourceMappingURL=styles.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/view/component.js
var component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/view/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/visually-hidden/component.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */





function UnconnectedVisuallyHidden(props, forwardedRef) {
  const {
    style: styleProp,
    ...contextProps
  } = (0,use_context_system/* useContextSystem */.A)(props, 'VisuallyHidden');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(component/* default */.A, {
    ref: forwardedRef,
    ...contextProps,
    style: {
      ...visuallyHidden,
      ...(styleProp || {})
    }
  });
}

/**
 * `VisuallyHidden` is a component used to render text intended to be visually
 * hidden, but will show for alternate devices, for example a screen reader.
 *
 * ```jsx
 * import { VisuallyHidden } from `@wordpress/components`;
 *
 * function Example() {
 *   return (
 *     <VisuallyHidden>
 *       <label>Code is Poetry</label>
 *     </VisuallyHidden>
 *   );
 * }
 * ```
 */
const VisuallyHidden = (0,context_connect/* contextConnect */.KZ)(UnconnectedVisuallyHidden, 'VisuallyHidden');
/* harmony default export */ const visually_hidden_component = (VisuallyHidden);
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-constrained-tabbing/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+dom@4.10.0/node_modules/@wordpress/dom/build-module/index.js");
/* harmony import */ var _use_ref_effect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-ref-effect/index.js");
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
  return (0,_use_ref_effect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((/** @type {HTMLElement} */node) => {
    function onKeyDown(/** @type {KeyboardEvent} */event) {
      const {
        key,
        shiftKey,
        target
      } = event;
      if (key !== 'Tab') {
        return;
      }
      const action = shiftKey ? 'findPrevious' : 'findNext';
      const nextElement = _wordpress_dom__WEBPACK_IMPORTED_MODULE_1__/* .focus */ .XC.tabbable[action](/** @type {HTMLElement} */target) || null;

      // When the target element contains the element that is about to
      // receive focus, for example when the target is a tabbable
      // container, browsers may disagree on where to move focus next.
      // In this case we can't rely on native browsers behavior. We need
      // to manage focus instead.
      // See https://github.com/WordPress/gutenberg/issues/46041.
      if (/** @type {HTMLElement} */target.contains(nextElement)) {
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

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-event/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useEvent)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * WordPress dependencies
 */


/**
 * Any function.
 */

/**
 * Creates a stable callback function that has access to the latest state and
 * can be used within event handlers and effect callbacks. Throws when used in
 * the render phase.
 *
 * @param callback The callback function to wrap.
 *
 * @example
 *
 * ```tsx
 * function Component( props ) {
 *   const onClick = useEvent( props.onClick );
 *   useEffect( () => {
 *     onClick();
 *     // Won't trigger the effect again when props.onClick is updated.
 *   }, [ onClick ] );
 *   // Won't re-render Button when props.onClick is updated (if `Button` is
 *   // wrapped in `React.memo`).
 *   return <Button onClick={ onClick } />;
 * }
 * ```
 */
function useEvent(
/**
 * The callback function to wrap.
 */
callback) {
  const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(() => {
    throw new Error('Callbacks created with `useEvent` cannot be called during rendering.');
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useInsertionEffect)(() => {
    ref.current = callback;
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((...args) => ref.current?.(...args), []);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-on-mount/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useFocusOnMount)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _wordpress_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+dom@4.10.0/node_modules/@wordpress/dom/build-module/index.js");
/* harmony import */ var _use_ref_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-ref-effect/index.js");
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
  const timerIdRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
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
    if (focusOnMountRef.current !== 'firstElement') {
      setFocus(node);
      return;
    }
    timerIdRef.current = setTimeout(() => {
      const firstTabbable = _wordpress_dom__WEBPACK_IMPORTED_MODULE_2__/* .focus */ .XC.tabbable.find(node)[0];
      if (firstTabbable) {
        setFocus(firstTabbable);
      }
    }, 0);
    return () => {
      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current);
      }
    };
  }, []);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-return/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * WordPress dependencies
 */

const instanceMap = new WeakMap();

/**
 * Creates a new id for a given object.
 *
 * @param object Object reference to create an id for.
 * @return The instance id (index).
 */
function createId(object) {
  const instances = instanceMap.get(object) || 0;
  instanceMap.set(object, instances + 1);
  return instances;
}

/**
 * Specify the useInstanceId *function* signatures.
 *
 * More accurately, useInstanceId distinguishes between three different
 * signatures:
 *
 * 1. When only object is given, the returned value is a number
 * 2. When object and prefix is given, the returned value is a string
 * 3. When preferredId is given, the returned value is the type of preferredId
 *
 * @param object Object reference to create an id for.
 */

/**
 * Provides a unique instance ID.
 *
 * @param object        Object reference to create an id for.
 * @param [prefix]      Prefix for the unique id.
 * @param [preferredId] Default ID to use.
 * @return The unique instance id.
 */
function useInstanceId(object, prefix, preferredId) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (preferredId) {
      return preferredId;
    }
    const id = createId(object);
    return prefix ? `${prefix}-${id}` : id;
  }, [object, preferredId, prefix]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInstanceId);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  const isAttachedRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const didElementChangeRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  /* eslint-disable jsdoc/no-undefined-types */
  /** @type {import('react').MutableRefObject<TRef[]>} */
  /* eslint-enable jsdoc/no-undefined-types */
  const previousRefsRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  const currentRefsRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(refs);

  // Update on render before the ref callback is called, so the ref callback
  // always has access to the current refs.
  currentRefsRef.current = refs;

  // If any of the refs change, call the previous ref with `null` and the new
  // ref with the node, except when the element changes in the same cycle, in
  // which case the ref callbacks will already have been called.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    if (didElementChangeRef.current === false && isAttachedRef.current === true) {
      refs.forEach((ref, index) => {
        const previousRef = previousRefsRef.current[index];
        if (ref !== previousRef) {
          assignRef(previousRef, null);
          assignRef(ref, element.current);
        }
      });
    }
    previousRefsRef.current = refs;
  }, refs);

  // No dependencies, must be reset after every render so ref callbacks are
  // correctly called after a ref change.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    didElementChangeRef.current = false;
  });

  // There should be no dependencies so that `callback` is only called when
  // the node changes.
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(value => {
    // Update the element so it can be used when calling ref callbacks on a
    // dependency change.
    assignRef(element, value);
    didElementChangeRef.current = true;
    isAttachedRef.current = value !== null;

    // When an element changes, the current ref callback should be called
    // with the new element and the previous one with `null`.
    const refsToAssign = value ? currentRefsRef.current : previousRefsRef.current;

    // Update the latest refs.
    for (const ref of refsToAssign) {
      assignRef(ref, value);
    }
  }, []);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-previous/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-reduced-motion/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _use_media_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js");
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

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-ref-effect/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  const cleanupRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(node => {
    if (node) {
      cleanupRef.current = callback(node);
    } else if (cleanupRef.current) {
      cleanupRef.current();
    }
  }, dependencies);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-viewport-match/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _use_media_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * @typedef {"xhuge" | "huge" | "wide" | "xlarge" | "large" | "medium" | "small" | "mobile"} WPBreakpoint
 */

/**
 * Hash of breakpoint names with pixel width at which it becomes effective.
 *
 * @see _breakpoints.scss
 *
 * @type {Record<WPBreakpoint, number>}
 */
const BREAKPOINTS = {
  xhuge: 1920,
  huge: 1440,
  wide: 1280,
  xlarge: 1080,
  large: 960,
  medium: 782,
  small: 600,
  mobile: 480
};

/**
 * @typedef {">=" | "<"} WPViewportOperator
 */

/**
 * Object mapping media query operators to the condition to be used.
 *
 * @type {Record<WPViewportOperator, string>}
 */
const CONDITIONS = {
  '>=': 'min-width',
  '<': 'max-width'
};

/**
 * Object mapping media query operators to a function that given a breakpointValue and a width evaluates if the operator matches the values.
 *
 * @type {Record<WPViewportOperator, (breakpointValue: number, width: number) => boolean>}
 */
const OPERATOR_EVALUATORS = {
  '>=': (breakpointValue, width) => width >= breakpointValue,
  '<': (breakpointValue, width) => width < breakpointValue
};
const ViewportMatchWidthContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)(/** @type {null | number} */null);

/**
 * Returns true if the viewport matches the given query, or false otherwise.
 *
 * @param {WPBreakpoint}       breakpoint      Breakpoint size name.
 * @param {WPViewportOperator} [operator=">="] Viewport operator.
 *
 * @example
 *
 * ```js
 * useViewportMatch( 'huge', '<' );
 * useViewportMatch( 'medium' );
 * ```
 *
 * @return {boolean} Whether viewport matches query.
 */
const useViewportMatch = (breakpoint, operator = '>=') => {
  const simulatedWidth = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(ViewportMatchWidthContext);
  const mediaQuery = !simulatedWidth && `(${CONDITIONS[operator]}: ${BREAKPOINTS[breakpoint]}px)`;
  const mediaQueryResult = (0,_use_media_query__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(mediaQuery || undefined);
  if (simulatedWidth) {
    return OPERATOR_EVALUATORS[operator](BREAKPOINTS[breakpoint], simulatedWidth);
  }
  return mediaQueryResult;
};
useViewportMatch.__experimentalWidthProvider = ViewportMatchWidthContext.Provider;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useViewportMatch);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/utils/observable-map/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ observableMap)
/* harmony export */ });
/* wp:polyfill */
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

/***/ "../../node_modules/.pnpm/@wordpress+dataviews@4.4.1_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/normalize-fields.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  t: () => (/* binding */ normalizeFields)
});

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.4.1_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/field-types/integer.js
/**
 * Internal dependencies
 */

function sort(a, b, direction) {
  return direction === 'asc' ? a - b : b - a;
}
function isValid(value, context) {
  // TODO: this implicitely means the value is required.
  if (value === '') {
    return false;
  }
  if (!Number.isInteger(Number(value))) {
    return false;
  }
  if (context?.elements) {
    const validValues = context?.elements.map(f => f.value);
    if (!validValues.includes(Number(value))) {
      return false;
    }
  }
  return true;
}
/* harmony default export */ const integer = ({
  sort,
  isValid,
  Edit: 'integer'
});
//# sourceMappingURL=integer.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.4.1_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/field-types/text.js
/**
 * Internal dependencies
 */

function text_sort(valueA, valueB, direction) {
  return direction === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
}
function text_isValid(value, context) {
  if (context?.elements) {
    const validValues = context?.elements?.map(f => f.value);
    if (!validValues.includes(value)) {
      return false;
    }
  }
  return true;
}
/* harmony default export */ const field_types_text = ({
  sort: text_sort,
  isValid: text_isValid,
  Edit: 'text'
});
//# sourceMappingURL=text.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.4.1_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/field-types/datetime.js
/**
 * Internal dependencies
 */

function datetime_sort(a, b, direction) {
  const timeA = new Date(a).getTime();
  const timeB = new Date(b).getTime();
  return direction === 'asc' ? timeA - timeB : timeB - timeA;
}
function datetime_isValid(value, context) {
  if (context?.elements) {
    const validValues = context?.elements.map(f => f.value);
    if (!validValues.includes(value)) {
      return false;
    }
  }
  return true;
}
/* harmony default export */ const datetime = ({
  sort: datetime_sort,
  isValid: datetime_isValid,
  Edit: 'datetime'
});
//# sourceMappingURL=datetime.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.4.1_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/field-types/index.js
/**
 * Internal dependencies
 */





/**
 *
 * @param {FieldType} type The field type definition to get.
 *
 * @return A field type definition.
 */
function getFieldTypeDefinition(type) {
  if ('integer' === type) {
    return integer;
  }
  if ('text' === type) {
    return field_types_text;
  }
  if ('datetime' === type) {
    return datetime;
  }
  return {
    sort: (a, b, direction) => {
      if (typeof a === 'number' && typeof b === 'number') {
        return direction === 'asc' ? a - b : b - a;
      }
      return direction === 'asc' ? a.localeCompare(b) : b.localeCompare(a);
    },
    isValid: (value, context) => {
      if (context?.elements) {
        const validValues = context?.elements?.map(f => f.value);
        if (!validValues.includes(value)) {
          return false;
        }
      }
      return true;
    },
    Edit: () => null
  };
}
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/base-control/index.js
var base_control = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/base-control/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/visually-hidden/component.js + 1 modules
var component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/visually-hidden/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfMinute.mjs
var startOfMinute = __webpack_require__("../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfMinute.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/format.mjs + 29 modules
var format = __webpack_require__("../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/format.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/set.mjs
var set = __webpack_require__("../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/set.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setMonth.mjs + 1 modules
var setMonth = __webpack_require__("../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setMonth.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.10.0/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.10.0/node_modules/@wordpress/i18n/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/select-control/index.js + 3 modules
var select_control = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/select-control/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/moment@2.29.4/node_modules/moment/moment.js
var moment = __webpack_require__("../../node_modules/.pnpm/moment@2.29.4/node_modules/moment/moment.js");
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ../../node_modules/.pnpm/moment-timezone@0.5.43/node_modules/moment-timezone/moment-timezone.js
var moment_timezone = __webpack_require__("../../node_modules/.pnpm/moment-timezone@0.5.43/node_modules/moment-timezone/moment-timezone.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/moment-timezone@0.5.43/node_modules/moment-timezone/moment-timezone-utils.js
var moment_timezone_utils = __webpack_require__("../../node_modules/.pnpm/moment-timezone@0.5.43/node_modules/moment-timezone/moment-timezone-utils.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+date@5.10.0/node_modules/@wordpress/date/build-module/index.js
/**
 * External dependencies
 */




/**
 * WordPress dependencies
 */


/** @typedef {import('moment').Moment} Moment */
/** @typedef {import('moment').LocaleSpecification} MomentLocaleSpecification */

/**
 * @typedef MeridiemConfig
 * @property {string} am Lowercase AM.
 * @property {string} AM Uppercase AM.
 * @property {string} pm Lowercase PM.
 * @property {string} PM Uppercase PM.
 */

/**
 * @typedef FormatsConfig
 * @property {string} time                Time format.
 * @property {string} date                Date format.
 * @property {string} datetime            Datetime format.
 * @property {string} datetimeAbbreviated Abbreviated datetime format.
 */

/**
 * @typedef TimezoneConfig
 * @property {string} offset          Offset setting.
 * @property {string} offsetFormatted Offset setting with decimals formatted to minutes.
 * @property {string} string          The timezone as a string (e.g., `'America/Los_Angeles'`).
 * @property {string} abbr            Abbreviation for the timezone.
 */

/* eslint-disable jsdoc/valid-types */
/**
 * @typedef L10nSettings
 * @property {string}                                     locale        Moment locale.
 * @property {MomentLocaleSpecification['months']}        months        Locale months.
 * @property {MomentLocaleSpecification['monthsShort']}   monthsShort   Locale months short.
 * @property {MomentLocaleSpecification['weekdays']}      weekdays      Locale weekdays.
 * @property {MomentLocaleSpecification['weekdaysShort']} weekdaysShort Locale weekdays short.
 * @property {MeridiemConfig}                             meridiem      Meridiem config.
 * @property {MomentLocaleSpecification['relativeTime']}  relative      Relative time config.
 * @property {0|1|2|3|4|5|6}                              startOfWeek   Day that the week starts on.
 */
/* eslint-enable jsdoc/valid-types */

/**
 * @typedef DateSettings
 * @property {L10nSettings}   l10n     Localization settings.
 * @property {FormatsConfig}  formats  Date/time formats config.
 * @property {TimezoneConfig} timezone Timezone settings.
 */

const WP_ZONE = 'WP';

// This regular expression tests positive for UTC offsets as described in ISO 8601.
// See: https://en.wikipedia.org/wiki/ISO_8601#Time_offsets_from_UTC
const VALID_UTC_OFFSET = /^[+-][0-1][0-9](:?[0-9][0-9])?$/;

// Changes made here will likely need to be synced with Core in the file
// src/wp-includes/script-loader.php in `wp_default_packages_inline_scripts()`.
/** @type {DateSettings} */
let settings = {
  l10n: {
    locale: 'en',
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    meridiem: {
      am: 'am',
      pm: 'pm',
      AM: 'AM',
      PM: 'PM'
    },
    relative: {
      future: '%s from now',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years'
    },
    startOfWeek: 0
  },
  formats: {
    time: 'g: i a',
    date: 'F j, Y',
    datetime: 'F j, Y g: i a',
    datetimeAbbreviated: 'M j, Y g: i a'
  },
  timezone: {
    offset: '0',
    offsetFormatted: '0',
    string: '',
    abbr: ''
  }
};

/**
 * Adds a locale to moment, using the format supplied by `wp_localize_script()`.
 *
 * @param {DateSettings} dateSettings Settings, including locale data.
 */
function setSettings(dateSettings) {
  settings = dateSettings;
  setupWPTimezone();

  // Does moment already have a locale with the right name?
  if (momentLib.locales().includes(dateSettings.l10n.locale)) {
    // Is that locale misconfigured, e.g. because we are on a site running
    // WordPress < 6.0?
    if (momentLib.localeData(dateSettings.l10n.locale).longDateFormat('LTS') === null) {
      // Delete the misconfigured locale.
      // @ts-ignore Type definitions are incorrect - null is permitted.
      momentLib.defineLocale(dateSettings.l10n.locale, null);
    } else {
      // We have a properly configured locale, so no need to create one.
      return;
    }
  }

  // defineLocale() will modify the current locale, so back it up.
  const currentLocale = momentLib.locale();

  // Create locale.
  momentLib.defineLocale(dateSettings.l10n.locale, {
    // Inherit anything missing from English. We don't load
    // moment-with-locales.js so English is all there is.
    parentLocale: 'en',
    months: dateSettings.l10n.months,
    monthsShort: dateSettings.l10n.monthsShort,
    weekdays: dateSettings.l10n.weekdays,
    weekdaysShort: dateSettings.l10n.weekdaysShort,
    meridiem(hour, minute, isLowercase) {
      if (hour < 12) {
        return isLowercase ? dateSettings.l10n.meridiem.am : dateSettings.l10n.meridiem.AM;
      }
      return isLowercase ? dateSettings.l10n.meridiem.pm : dateSettings.l10n.meridiem.PM;
    },
    longDateFormat: {
      LT: dateSettings.formats.time,
      LTS: momentLib.localeData('en').longDateFormat('LTS'),
      L: momentLib.localeData('en').longDateFormat('L'),
      LL: dateSettings.formats.date,
      LLL: dateSettings.formats.datetime,
      LLLL: momentLib.localeData('en').longDateFormat('LLLL')
    },
    // From human_time_diff?
    // Set to `(number, withoutSuffix, key, isFuture) => {}` instead.
    relativeTime: dateSettings.l10n.relative
  });

  // Restore the locale to what it was.
  momentLib.locale(currentLocale);
}

/**
 * Returns the currently defined date settings.
 *
 * @return {DateSettings} Settings, including locale data.
 */
function getSettings() {
  return settings;
}

/**
 * Returns the currently defined date settings.
 *
 * @deprecated
 * @return {DateSettings} Settings, including locale data.
 */
function __experimentalGetSettings() {
  deprecated('wp.date.__experimentalGetSettings', {
    since: '6.1',
    alternative: 'wp.date.getSettings'
  });
  return getSettings();
}
function setupWPTimezone() {
  // Get the current timezone settings from the WP timezone string.
  const currentTimezone = moment_default().tz.zone(settings.timezone.string);

  // Check to see if we have a valid TZ data, if so, use it for the custom WP_ZONE timezone, otherwise just use the offset.
  if (currentTimezone) {
    // Create WP timezone based off settings.timezone.string.  We need to include the additional data so that we
    // don't lose information about daylight savings time and other items.
    // See https://github.com/WordPress/gutenberg/pull/48083
    moment_default().tz.add(moment_default().tz.pack({
      name: WP_ZONE,
      abbrs: currentTimezone.abbrs,
      untils: currentTimezone.untils,
      offsets: currentTimezone.offsets
    }));
  } else {
    // Create WP timezone based off dateSettings.
    moment_default().tz.add(moment_default().tz.pack({
      name: WP_ZONE,
      abbrs: [WP_ZONE],
      untils: [null],
      offsets: [-settings.timezone.offset * 60 || 0]
    }));
  }
}

// Date constants.
/**
 * Number of seconds in one minute.
 *
 * @type {number}
 */
const MINUTE_IN_SECONDS = 60;
/**
 * Number of minutes in one hour.
 *
 * @type {number}
 */
const HOUR_IN_MINUTES = 60;
/**
 * Number of seconds in one hour.
 *
 * @type {number}
 */
const HOUR_IN_SECONDS = 60 * MINUTE_IN_SECONDS;

/**
 * Map of PHP formats to Moment.js formats.
 *
 * These are used internally by {@link wp.date.format}, and are either
 * a string representing the corresponding Moment.js format code, or a
 * function which returns the formatted string.
 *
 * This should only be used through {@link wp.date.format}, not
 * directly.
 */
const formatMap = {
  // Day.
  d: 'DD',
  D: 'ddd',
  j: 'D',
  l: 'dddd',
  N: 'E',
  /**
   * Gets the ordinal suffix.
   *
   * @param {Moment} momentDate Moment instance.
   *
   * @return {string} Formatted date.
   */
  S(momentDate) {
    // Do - D.
    const num = momentDate.format('D');
    const withOrdinal = momentDate.format('Do');
    return withOrdinal.replace(num, '');
  },
  w: 'd',
  /**
   * Gets the day of the year (zero-indexed).
   *
   * @param {Moment} momentDate Moment instance.
   *
   * @return {string} Formatted date.
   */
  z(momentDate) {
    // DDD - 1.
    return (parseInt(momentDate.format('DDD'), 10) - 1).toString();
  },
  // Week.
  W: 'W',
  // Month.
  F: 'MMMM',
  m: 'MM',
  M: 'MMM',
  n: 'M',
  /**
   * Gets the days in the month.
   *
   * @param {Moment} momentDate Moment instance.
   *
   * @return {number} Formatted date.
   */
  t(momentDate) {
    return momentDate.daysInMonth();
  },
  // Year.
  /**
   * Gets whether the current year is a leap year.
   *
   * @param {Moment} momentDate Moment instance.
   *
   * @return {string} Formatted date.
   */
  L(momentDate) {
    return momentDate.isLeapYear() ? '1' : '0';
  },
  o: 'GGGG',
  Y: 'YYYY',
  y: 'YY',
  // Time.
  a: 'a',
  A: 'A',
  /**
   * Gets the current time in Swatch Internet Time (.beats).
   *
   * @param {Moment} momentDate Moment instance.
   *
   * @return {number} Formatted date.
   */
  B(momentDate) {
    const timezoned = moment_default()(momentDate).utcOffset(60);
    const seconds = parseInt(timezoned.format('s'), 10),
      minutes = parseInt(timezoned.format('m'), 10),
      hours = parseInt(timezoned.format('H'), 10);
    return parseInt(((seconds + minutes * MINUTE_IN_SECONDS + hours * HOUR_IN_SECONDS) / 86.4).toString(), 10);
  },
  g: 'h',
  G: 'H',
  h: 'hh',
  H: 'HH',
  i: 'mm',
  s: 'ss',
  u: 'SSSSSS',
  v: 'SSS',
  // Timezone.
  e: 'zz',
  /**
   * Gets whether the timezone is in DST currently.
   *
   * @param {Moment} momentDate Moment instance.
   *
   * @return {string} Formatted date.
   */
  I(momentDate) {
    return momentDate.isDST() ? '1' : '0';
  },
  O: 'ZZ',
  P: 'Z',
  T: 'z',
  /**
   * Gets the timezone offset in seconds.
   *
   * @param {Moment} momentDate Moment instance.
   *
   * @return {number} Formatted date.
   */
  Z(momentDate) {
    // Timezone offset in seconds.
    const offset = momentDate.format('Z');
    const sign = offset[0] === '-' ? -1 : 1;
    const parts = offset.substring(1).split(':').map(n => parseInt(n, 10));
    return sign * (parts[0] * HOUR_IN_MINUTES + parts[1]) * MINUTE_IN_SECONDS;
  },
  // Full date/time.
  c: 'YYYY-MM-DDTHH:mm:ssZ',
  // .toISOString.
  /**
   * Formats the date as RFC2822.
   *
   * @param {Moment} momentDate Moment instance.
   *
   * @return {string} Formatted date.
   */
  r(momentDate) {
    return momentDate.locale('en').format('ddd, DD MMM YYYY HH:mm:ss ZZ');
  },
  U: 'X'
};

/**
 * Formats a date. Does not alter the date's timezone.
 *
 * @param {string}                             dateFormat PHP-style formatting string.
 *                                                        See php.net/date.
 * @param {Moment | Date | string | undefined} dateValue  Date object or string,
 *                                                        parsable by moment.js.
 *
 * @return {string} Formatted date.
 */
function build_module_format(dateFormat, dateValue = new Date()) {
  let i, char;
  const newFormat = [];
  const momentDate = momentLib(dateValue);
  for (i = 0; i < dateFormat.length; i++) {
    char = dateFormat[i];
    // Is this an escape?
    if ('\\' === char) {
      // Add next character, then move on.
      i++;
      newFormat.push('[' + dateFormat[i] + ']');
      continue;
    }
    if (char in formatMap) {
      const formatter = formatMap[(/** @type {keyof formatMap} */char)];
      if (typeof formatter !== 'string') {
        // If the format is a function, call it.
        newFormat.push('[' + formatter(momentDate) + ']');
      } else {
        // Otherwise, add as a formatting string.
        newFormat.push(formatter);
      }
    } else {
      newFormat.push('[' + char + ']');
    }
  }
  // Join with [] between to separate characters, and replace
  // unneeded separators with static text.
  return momentDate.format(newFormat.join('[]'));
}

/**
 * Formats a date (like `date()` in PHP).
 *
 * @param {string}                             dateFormat PHP-style formatting string.
 *                                                        See php.net/date.
 * @param {Moment | Date | string | undefined} dateValue  Date object or string, parsable
 *                                                        by moment.js.
 * @param {string | number | undefined}        timezone   Timezone to output result in or a
 *                                                        UTC offset. Defaults to timezone from
 *                                                        site.
 *
 * @see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 * @see https://en.wikipedia.org/wiki/ISO_8601#Time_offsets_from_UTC
 *
 * @return {string} Formatted date in English.
 */
function date(dateFormat, dateValue = new Date(), timezone) {
  const dateMoment = buildMoment(dateValue, timezone);
  return build_module_format(dateFormat, dateMoment);
}

/**
 * Formats a date (like `date()` in PHP), in the UTC timezone.
 *
 * @param {string}                             dateFormat PHP-style formatting string.
 *                                                        See php.net/date.
 * @param {Moment | Date | string | undefined} dateValue  Date object or string,
 *                                                        parsable by moment.js.
 *
 * @return {string} Formatted date in English.
 */
function gmdate(dateFormat, dateValue = new Date()) {
  const dateMoment = momentLib(dateValue).utc();
  return build_module_format(dateFormat, dateMoment);
}

/**
 * Formats a date (like `wp_date()` in PHP), translating it into site's locale.
 *
 * Backward Compatibility Notice: if `timezone` is set to `true`, the function
 * behaves like `gmdateI18n`.
 *
 * @param {string}                                dateFormat PHP-style formatting string.
 *                                                           See php.net/date.
 * @param {Moment | Date | string | undefined}    dateValue  Date object or string, parsable by
 *                                                           moment.js.
 * @param {string | number | boolean | undefined} timezone   Timezone to output result in or a
 *                                                           UTC offset. Defaults to timezone from
 *                                                           site. Notice: `boolean` is effectively
 *                                                           deprecated, but still supported for
 *                                                           backward compatibility reasons.
 *
 * @see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 * @see https://en.wikipedia.org/wiki/ISO_8601#Time_offsets_from_UTC
 *
 * @return {string} Formatted date.
 */
function dateI18n(dateFormat, dateValue = new Date(), timezone) {
  if (true === timezone) {
    return gmdateI18n(dateFormat, dateValue);
  }
  if (false === timezone) {
    timezone = undefined;
  }
  const dateMoment = buildMoment(dateValue, timezone);
  dateMoment.locale(settings.l10n.locale);
  return build_module_format(dateFormat, dateMoment);
}

/**
 * Formats a date (like `wp_date()` in PHP), translating it into site's locale
 * and using the UTC timezone.
 *
 * @param {string}                             dateFormat PHP-style formatting string.
 *                                                        See php.net/date.
 * @param {Moment | Date | string | undefined} dateValue  Date object or string,
 *                                                        parsable by moment.js.
 *
 * @return {string} Formatted date.
 */
function gmdateI18n(dateFormat, dateValue = new Date()) {
  const dateMoment = momentLib(dateValue).utc();
  dateMoment.locale(settings.l10n.locale);
  return build_module_format(dateFormat, dateMoment);
}

/**
 * Check whether a date is considered in the future according to the WordPress settings.
 *
 * @param {string} dateValue Date String or Date object in the Defined WP Timezone.
 *
 * @return {boolean} Is in the future.
 */
function isInTheFuture(dateValue) {
  const now = momentLib.tz(WP_ZONE);
  const momentObject = momentLib.tz(dateValue, WP_ZONE);
  return momentObject.isAfter(now);
}

/**
 * Create and return a JavaScript Date Object from a date string in the WP timezone.
 *
 * @param {string?} dateString Date formatted in the WP timezone.
 *
 * @return {Date} Date
 */
function getDate(dateString) {
  if (!dateString) {
    return momentLib.tz(WP_ZONE).toDate();
  }
  return momentLib.tz(dateString, WP_ZONE).toDate();
}

/**
 * Returns a human-readable time difference between two dates, like human_time_diff() in PHP.
 *
 * @param {Moment | Date | string}             from From date, in the WP timezone.
 * @param {Moment | Date | string | undefined} to   To date, formatted in the WP timezone.
 *
 * @return {string} Human-readable time difference.
 */
function humanTimeDiff(from, to) {
  const fromMoment = momentLib.tz(from, WP_ZONE);
  const toMoment = to ? momentLib.tz(to, WP_ZONE) : momentLib.tz(WP_ZONE);
  return fromMoment.from(toMoment);
}

/**
 * Creates a moment instance using the given timezone or, if none is provided, using global settings.
 *
 * @param {Moment | Date | string | undefined} dateValue Date object or string, parsable
 *                                                       by moment.js.
 * @param {string | number | undefined}        timezone  Timezone to output result in or a
 *                                                       UTC offset. Defaults to timezone from
 *                                                       site.
 *
 * @see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 * @see https://en.wikipedia.org/wiki/ISO_8601#Time_offsets_from_UTC
 *
 * @return {Moment} a moment instance.
 */
function buildMoment(dateValue, timezone = '') {
  const dateMoment = momentLib(dateValue);
  if (timezone && !isUTCOffset(timezone)) {
    // The ! isUTCOffset() check guarantees that timezone is a string.
    return dateMoment.tz(/** @type {string} */timezone);
  }
  if (timezone && isUTCOffset(timezone)) {
    return dateMoment.utcOffset(timezone);
  }
  if (settings.timezone.string) {
    return dateMoment.tz(settings.timezone.string);
  }
  return dateMoment.utcOffset(+settings.timezone.offset);
}

/**
 * Returns whether a certain UTC offset is valid or not.
 *
 * @param {number|string} offset a UTC offset.
 *
 * @return {boolean} whether a certain UTC offset is valid or not.
 */
function isUTCOffset(offset) {
  if ('number' === typeof offset) {
    return true;
  }
  return VALID_UTC_OFFSET.test(offset);
}
setupWPTimezone();
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/tooltip/index.js + 6 modules
var tooltip = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/tooltip/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1__@types+react@18.3.16_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js + 1 modules
var emotion_styled_base_browser_esm = __webpack_require__("../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1__@types+react@18.3.16_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__("../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/config-values.js
var config_values = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/config-values.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/colors-values.js
var colors_values = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/colors-values.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/space.js
var space = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/space.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/input-control/styles/input-control-styles.js
var input_control_styles = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/input-control/styles/input-control-styles.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/number-control/index.js + 1 modules
var number_control = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/number-control/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/date-time/time/styles.js

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




const Wrapper = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",  true ? {
  target: "evcr2319"
} : 0)("box-sizing:border-box;font-size:", config_values/* default */.A.fontSize, ";" + ( true ? "" : 0));
const Fieldset = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("fieldset",  true ? {
  target: "evcr2318"
} : 0)("border:0;margin:0 0 ", (0,space/* space */.x)(2 * 2), " 0;padding:0;&:last-child{margin-bottom:0;}" + ( true ? "" : 0));
const TimeWrapper = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",  true ? {
  target: "evcr2317"
} : 0)( true ? {
  name: "pd0mhc",
  styles: "direction:ltr;display:flex"
} : 0);
const baseInput = /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("&&& ", input_control_styles/* Input */.pd, "{padding-left:", (0,space/* space */.x)(2), ";padding-right:", (0,space/* space */.x)(2), ";text-align:center;}" + ( true ? "" : 0),  true ? "" : 0);
const HoursInput = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)(number_control/* default */.A,  true ? {
  target: "evcr2316"
} : 0)(baseInput, " width:", (0,space/* space */.x)(9), ";&&& ", input_control_styles/* Input */.pd, "{padding-right:0;}&&& ", input_control_styles/* BackdropUI */.Hr, "{border-right:0;border-top-right-radius:0;border-bottom-right-radius:0;}" + ( true ? "" : 0));
const TimeSeparator = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("span",  true ? {
  target: "evcr2315"
} : 0)("border-top:", config_values/* default */.A.borderWidth, " solid ", colors_values/* COLORS */.l.gray[700], ";border-bottom:", config_values/* default */.A.borderWidth, " solid ", colors_values/* COLORS */.l.gray[700], ";font-size:", config_values/* default */.A.fontSize, ";line-height:calc(\n\t\t", config_values/* default */.A.controlHeight, " - ", config_values/* default */.A.borderWidth, " * 2\n\t);display:inline-block;" + ( true ? "" : 0));
const MinutesInput = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)(number_control/* default */.A,  true ? {
  target: "evcr2314"
} : 0)(baseInput, " width:", (0,space/* space */.x)(9), ";&&& ", input_control_styles/* Input */.pd, "{padding-left:0;}&&& ", input_control_styles/* BackdropUI */.Hr, "{border-left:0;border-top-left-radius:0;border-bottom-left-radius:0;}" + ( true ? "" : 0));

// Ideally we wouldn't need a wrapper, but can't otherwise target the
// <BaseControl> in <SelectControl>
const MonthSelectWrapper = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",  true ? {
  target: "evcr2313"
} : 0)( true ? {
  name: "1ff36h2",
  styles: "flex-grow:1"
} : 0);
const DayInput = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)(number_control/* default */.A,  true ? {
  target: "evcr2312"
} : 0)(baseInput, " width:", (0,space/* space */.x)(9), ";" + ( true ? "" : 0));
const YearInput = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)(number_control/* default */.A,  true ? {
  target: "evcr2311"
} : 0)(baseInput, " width:", (0,space/* space */.x)(14), ";" + ( true ? "" : 0));
const TimeZone = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",  true ? {
  target: "evcr2310"
} : 0)( true ? {
  name: "ebu3jh",
  styles: "text-decoration:underline dotted"
} : 0);
//# sourceMappingURL=styles.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/date-time/time/timezone.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



/**
 * Displays timezone information when user timezone is different from site
 * timezone.
 */

const timezone_TimeZone = () => {
  const {
    timezone
  } = getSettings();

  // Convert timezone offset to hours.
  const userTimezoneOffset = -1 * (new Date().getTimezoneOffset() / 60);

  // System timezone and user timezone match, nothing needed.
  // Compare as numbers because it comes over as string.
  if (Number(timezone.offset) === userTimezoneOffset) {
    return null;
  }
  const offsetSymbol = Number(timezone.offset) >= 0 ? '+' : '';
  const zoneAbbr = '' !== timezone.abbr && isNaN(Number(timezone.abbr)) ? timezone.abbr : `UTC${offsetSymbol}${timezone.offsetFormatted}`;

  // Replace underscore with space in strings like `America/Costa_Rica`.
  const prettyTimezoneString = timezone.string.replace('_', ' ');
  const timezoneDetail = 'UTC' === timezone.string ? (0,build_module.__)('Coordinated Universal Time') : `(${zoneAbbr}) ${prettyTimezoneString}`;

  // When the prettyTimezoneString is empty, there is no additional timezone
  // detail information to show in a Tooltip.
  const hasNoAdditionalTimezoneDetail = prettyTimezoneString.trim().length === 0;
  return hasNoAdditionalTimezoneDetail ? /*#__PURE__*/(0,jsx_runtime.jsx)(TimeZone, {
    className: "components-datetime__timezone",
    children: zoneAbbr
  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.Ay, {
    placement: "top",
    text: timezoneDetail,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(TimeZone, {
      className: "components-datetime__timezone",
      children: zoneAbbr
    })
  });
};
/* harmony default export */ const timezone = (timezone_TimeZone);
//# sourceMappingURL=timezone.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/h-stack/component.js
var h_stack_component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/h-stack/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/spacer/component.js + 1 modules
var spacer_component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/spacer/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/toDate.mjs
var toDate = __webpack_require__("../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/toDate.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/input-control/reducer/actions.js
var actions = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/input-control/reducer/actions.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/date-time/utils.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



/**
 * Like date-fn's toDate, but tries to guess the format when a string is
 * given.
 *
 * @param input Value to turn into a date.
 */
function inputToDate(input) {
  if (typeof input === 'string') {
    return new Date(input);
  }
  return (0,toDate/* toDate */.a)(input);
}

/**
 * Converts a 12-hour time to a 24-hour time.
 * @param hours
 * @param isPm
 */
function from12hTo24h(hours, isPm) {
  return isPm ? (hours % 12 + 12) % 24 : hours % 12;
}

/**
 * Converts a 24-hour time to a 12-hour time.
 * @param hours
 */
function from24hTo12h(hours) {
  return hours % 12 || 12;
}

/**
 * Creates an InputControl reducer used to pad an input so that it is always a
 * given width. For example, the hours and minutes inputs are padded to 2 so
 * that '4' appears as '04'.
 *
 * @param pad How many digits the value should be.
 */
function buildPadInputStateReducer(pad) {
  return (state, action) => {
    const nextState = {
      ...state
    };
    if (action.type === actions/* COMMIT */.cJ || action.type === actions/* PRESS_UP */.wX || action.type === actions/* PRESS_DOWN */.r7) {
      if (nextState.value !== undefined) {
        nextState.value = nextState.value.toString().padStart(pad, '0');
      }
    }
    return nextState;
  };
}

/**
 * Validates the target of a React event to ensure it is an input element and
 * that the input is valid.
 * @param event
 */
function validateInputElementTarget(event) {
  var _ownerDocument$defaul;
  // `instanceof` checks need to get the instance definition from the
  // corresponding window object — therefore, the following logic makes
  // the component work correctly even when rendered inside an iframe.
  const HTMLInputElementInstance = (_ownerDocument$defaul = event.target?.ownerDocument.defaultView?.HTMLInputElement) !== null && _ownerDocument$defaul !== void 0 ? _ownerDocument$defaul : HTMLInputElement;
  if (!(event.target instanceof HTMLInputElementInstance)) {
    return false;
  }
  return event.target.validity.valid;
}
//# sourceMappingURL=utils.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/date-time/constants.js
const TIMEZONELESS_FORMAT = "yyyy-MM-dd'T'HH:mm:ss";
//# sourceMappingURL=constants.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js
var use_controlled_value = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control/component.js + 7 modules
var toggle_group_control_component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control-option/component.js
var toggle_group_control_option_component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control-option/component.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/date-time/time/time-input/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */







function TimeInput({
  value: valueProp,
  defaultValue,
  is12Hour,
  label,
  minutesProps,
  onChange
}) {
  const [value = {
    hours: new Date().getHours(),
    minutes: new Date().getMinutes()
  }, setValue] = (0,use_controlled_value/* useControlledValue */.j)({
    value: valueProp,
    onChange,
    defaultValue
  });
  const dayPeriod = parseDayPeriod(value.hours);
  const hours12Format = from24hTo12h(value.hours);
  const buildNumberControlChangeCallback = method => {
    return (_value, {
      event
    }) => {
      if (!validateInputElementTarget(event)) {
        return;
      }

      // We can safely assume value is a number if target is valid.
      const numberValue = Number(_value);
      setValue({
        ...value,
        [method]: method === 'hours' && is12Hour ? from12hTo24h(numberValue, dayPeriod === 'PM') : numberValue
      });
    };
  };
  const buildAmPmChangeCallback = _value => {
    return () => {
      if (dayPeriod === _value) {
        return;
      }
      setValue({
        ...value,
        hours: from12hTo24h(hours12Format, _value === 'PM')
      });
    };
  };
  function parseDayPeriod(_hours) {
    return _hours < 12 ? 'AM' : 'PM';
  }
  const Wrapper = label ? Fieldset : react.Fragment;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Wrapper, {
    children: [label && /*#__PURE__*/(0,jsx_runtime.jsx)(base_control/* default.VisualLabel */.Ay.VisualLabel, {
      as: "legend",
      children: label
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(h_stack_component/* default */.A, {
      alignment: "left",
      expanded: false,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(TimeWrapper, {
        className: "components-datetime__time-field components-datetime__time-field-time" // Unused, for backwards compatibility.
        ,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(HoursInput, {
          className: "components-datetime__time-field-hours-input" // Unused, for backwards compatibility.
          ,
          label: (0,build_module.__)('Hours'),
          hideLabelFromVision: true,
          __next40pxDefaultSize: true,
          value: String(is12Hour ? hours12Format : value.hours).padStart(2, '0'),
          step: 1,
          min: is12Hour ? 1 : 0,
          max: is12Hour ? 12 : 23,
          required: true,
          spinControls: "none",
          isPressEnterToChange: true,
          isDragEnabled: false,
          isShiftStepEnabled: false,
          onChange: buildNumberControlChangeCallback('hours'),
          __unstableStateReducer: buildPadInputStateReducer(2)
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(TimeSeparator, {
          className: "components-datetime__time-separator" // Unused, for backwards compatibility.
          ,
          "aria-hidden": "true",
          children: ":"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(MinutesInput, {
          className: (0,clsx/* default */.A)('components-datetime__time-field-minutes-input',
          // Unused, for backwards compatibility.
          minutesProps?.className),
          label: (0,build_module.__)('Minutes'),
          hideLabelFromVision: true,
          __next40pxDefaultSize: true,
          value: String(value.minutes).padStart(2, '0'),
          step: 1,
          min: 0,
          max: 59,
          required: true,
          spinControls: "none",
          isPressEnterToChange: true,
          isDragEnabled: false,
          isShiftStepEnabled: false,
          onChange: (...args) => {
            buildNumberControlChangeCallback('minutes')(...args);
            minutesProps?.onChange?.(...args);
          },
          __unstableStateReducer: buildPadInputStateReducer(2),
          ...minutesProps
        })]
      }), is12Hour && /*#__PURE__*/(0,jsx_runtime.jsxs)(toggle_group_control_component/* default */.A, {
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true,
        isBlock: true,
        label: (0,build_module.__)('Select AM or PM'),
        hideLabelFromVision: true,
        value: dayPeriod,
        onChange: newValue => {
          buildAmPmChangeCallback(newValue)();
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(toggle_group_control_option_component/* default */.A, {
          value: "AM",
          label: (0,build_module.__)('AM')
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(toggle_group_control_option_component/* default */.A, {
          value: "PM",
          label: (0,build_module.__)('PM')
        })]
      })]
    })]
  });
}
/* harmony default export */ const time_input = ((/* unused pure expression or super */ null && (TimeInput)));
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/date-time/time/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */











const VALID_DATE_ORDERS = ['dmy', 'mdy', 'ymd'];

/**
 * TimePicker is a React component that renders a clock for time selection.
 *
 * ```jsx
 * import { TimePicker } from '@wordpress/components';
 * import { useState } from '@wordpress/element';
 *
 * const MyTimePicker = () => {
 *   const [ time, setTime ] = useState( new Date() );
 *
 *   return (
 *     <TimePicker
 *       currentTime={ date }
 *       onChange={ ( newTime ) => setTime( newTime ) }
 *       is12Hour
 *     />
 *   );
 * };
 * ```
 */
function TimePicker({
  is12Hour,
  currentTime,
  onChange,
  dateOrder: dateOrderProp,
  hideLabelFromVision = false
}) {
  const [date, setDate] = (0,react.useState)(() =>
  // Truncate the date at the minutes, see: #15495.
  currentTime ? (0,startOfMinute/* startOfMinute */.c)(inputToDate(currentTime)) : new Date());

  // Reset the state when currentTime changed.
  // TODO: useEffect() shouldn't be used like this, causes an unnecessary render
  (0,react.useEffect)(() => {
    setDate(currentTime ? (0,startOfMinute/* startOfMinute */.c)(inputToDate(currentTime)) : new Date());
  }, [currentTime]);
  const monthOptions = [{
    value: '01',
    label: (0,build_module.__)('January')
  }, {
    value: '02',
    label: (0,build_module.__)('February')
  }, {
    value: '03',
    label: (0,build_module.__)('March')
  }, {
    value: '04',
    label: (0,build_module.__)('April')
  }, {
    value: '05',
    label: (0,build_module.__)('May')
  }, {
    value: '06',
    label: (0,build_module.__)('June')
  }, {
    value: '07',
    label: (0,build_module.__)('July')
  }, {
    value: '08',
    label: (0,build_module.__)('August')
  }, {
    value: '09',
    label: (0,build_module.__)('September')
  }, {
    value: '10',
    label: (0,build_module.__)('October')
  }, {
    value: '11',
    label: (0,build_module.__)('November')
  }, {
    value: '12',
    label: (0,build_module.__)('December')
  }];
  const {
    day,
    month,
    year,
    minutes,
    hours
  } = (0,react.useMemo)(() => ({
    day: (0,format/* format */.GP)(date, 'dd'),
    month: (0,format/* format */.GP)(date, 'MM'),
    year: (0,format/* format */.GP)(date, 'yyyy'),
    minutes: (0,format/* format */.GP)(date, 'mm'),
    hours: (0,format/* format */.GP)(date, 'HH'),
    am: (0,format/* format */.GP)(date, 'a')
  }), [date]);
  const buildNumberControlChangeCallback = method => {
    const callback = (value, {
      event
    }) => {
      if (!validateInputElementTarget(event)) {
        return;
      }

      // We can safely assume value is a number if target is valid.
      const numberValue = Number(value);
      const newDate = (0,set/* set */.h)(date, {
        [method]: numberValue
      });
      setDate(newDate);
      onChange?.((0,format/* format */.GP)(newDate, TIMEZONELESS_FORMAT));
    };
    return callback;
  };
  const onTimeInputChangeCallback = ({
    hours: newHours,
    minutes: newMinutes
  }) => {
    const newDate = (0,set/* set */.h)(date, {
      hours: newHours,
      minutes: newMinutes
    });
    setDate(newDate);
    onChange?.((0,format/* format */.GP)(newDate, TIMEZONELESS_FORMAT));
  };
  const dayField = /*#__PURE__*/(0,jsx_runtime.jsx)(DayInput, {
    className: "components-datetime__time-field components-datetime__time-field-day" // Unused, for backwards compatibility.
    ,
    label: (0,build_module.__)('Day'),
    hideLabelFromVision: true,
    __next40pxDefaultSize: true,
    value: day,
    step: 1,
    min: 1,
    max: 31,
    required: true,
    spinControls: "none",
    isPressEnterToChange: true,
    isDragEnabled: false,
    isShiftStepEnabled: false,
    onChange: buildNumberControlChangeCallback('date')
  }, "day");
  const monthField = /*#__PURE__*/(0,jsx_runtime.jsx)(MonthSelectWrapper, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(select_control/* default */.A, {
      className: "components-datetime__time-field components-datetime__time-field-month" // Unused, for backwards compatibility.
      ,
      label: (0,build_module.__)('Month'),
      hideLabelFromVision: true,
      __next40pxDefaultSize: true,
      __nextHasNoMarginBottom: true,
      value: month,
      options: monthOptions,
      onChange: value => {
        const newDate = (0,setMonth/* setMonth */.Z)(date, Number(value) - 1);
        setDate(newDate);
        onChange?.((0,format/* format */.GP)(newDate, TIMEZONELESS_FORMAT));
      }
    })
  }, "month");
  const yearField = /*#__PURE__*/(0,jsx_runtime.jsx)(YearInput, {
    className: "components-datetime__time-field components-datetime__time-field-year" // Unused, for backwards compatibility.
    ,
    label: (0,build_module.__)('Year'),
    hideLabelFromVision: true,
    __next40pxDefaultSize: true,
    value: year,
    step: 1,
    min: 1,
    max: 9999,
    required: true,
    spinControls: "none",
    isPressEnterToChange: true,
    isDragEnabled: false,
    isShiftStepEnabled: false,
    onChange: buildNumberControlChangeCallback('year'),
    __unstableStateReducer: buildPadInputStateReducer(4)
  }, "year");
  const defaultDateOrder = is12Hour ? 'mdy' : 'dmy';
  const dateOrder = dateOrderProp && VALID_DATE_ORDERS.includes(dateOrderProp) ? dateOrderProp : defaultDateOrder;
  const fields = dateOrder.split('').map(field => {
    switch (field) {
      case 'd':
        return dayField;
      case 'm':
        return monthField;
      case 'y':
        return yearField;
      default:
        return null;
    }
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Wrapper, {
    className: "components-datetime__time" // Unused, for backwards compatibility.
    ,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Fieldset, {
      children: [hideLabelFromVision ? /*#__PURE__*/(0,jsx_runtime.jsx)(component/* default */.A, {
        as: "legend",
        children: (0,build_module.__)('Time')
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(base_control/* default.VisualLabel */.Ay.VisualLabel, {
        as: "legend",
        className: "components-datetime__time-legend" // Unused, for backwards compatibility.
        ,
        children: (0,build_module.__)('Time')
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(h_stack_component/* default */.A, {
        className: "components-datetime__time-wrapper" // Unused, for backwards compatibility.
        ,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TimeInput, {
          value: {
            hours: Number(hours),
            minutes: Number(minutes)
          },
          is12Hour: is12Hour,
          onChange: onTimeInputChangeCallback
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(spacer_component/* default */.A, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(timezone, {})]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Fieldset, {
      children: [hideLabelFromVision ? /*#__PURE__*/(0,jsx_runtime.jsx)(component/* default */.A, {
        as: "legend",
        children: (0,build_module.__)('Date')
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(base_control/* default.VisualLabel */.Ay.VisualLabel, {
        as: "legend",
        className: "components-datetime__time-legend" // Unused, for backwards compatibility.
        ,
        children: (0,build_module.__)('Date')
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(h_stack_component/* default */.A, {
        className: "components-datetime__time-wrapper" // Unused, for backwards compatibility.
        ,
        children: fields
      })]
    })]
  });
}

/**
 * A component to input a time.
 *
 * Values are passed as an object in 24-hour format (`{ hours: number, minutes: number }`).
 *
 * ```jsx
 * import { TimePicker } from '@wordpress/components';
 * import { useState } from '@wordpress/element';
 *
 * const MyTimeInput = () => {
 * 	const [ time, setTime ] = useState( { hours: 13, minutes: 30 } );
 *
 * 	return (
 * 		<TimePicker.TimeInput
 * 			value={ time }
 * 			onChange={ setTime }
 * 			label="Time"
 * 		/>
 * 	);
 * };
 * ```
 */
TimePicker.TimeInput = TimeInput;
Object.assign(TimePicker.TimeInput, {
  displayName: 'TimePicker.TimeInput'
});
/* harmony default export */ const time = (TimePicker);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.4.1_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/dataform-controls/datetime.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function DateTime({
  data,
  field,
  onChange,
  hideLabelFromVision
}) {
  const {
    id,
    label
  } = field;
  const value = field.getValue({
    item: data
  });
  const onChangeControl = (0,react.useCallback)(newValue => onChange({
    [id]: newValue
  }), [id, onChange]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("fieldset", {
    className: "dataviews-controls__datetime",
    children: [!hideLabelFromVision && /*#__PURE__*/(0,jsx_runtime.jsx)(base_control/* default.VisualLabel */.Ay.VisualLabel, {
      as: "legend",
      children: label
    }), hideLabelFromVision && /*#__PURE__*/(0,jsx_runtime.jsx)(component/* default */.A, {
      as: "legend",
      children: label
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(time, {
      currentTime: value,
      onChange: onChangeControl,
      hideLabelFromVision: true
    })]
  });
}
//# sourceMappingURL=datetime.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.4.1_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/dataform-controls/integer.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

function Integer({
  data,
  field,
  onChange,
  hideLabelFromVision
}) {
  var _field$getValue;
  const {
    id,
    label,
    description
  } = field;
  const value = (_field$getValue = field.getValue({
    item: data
  })) !== null && _field$getValue !== void 0 ? _field$getValue : '';
  const onChangeControl = (0,react.useCallback)(newValue => onChange({
    [id]: Number(newValue)
  }), [id, onChange]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(number_control/* default */.A, {
    label: label,
    help: description,
    value: value,
    onChange: onChangeControl,
    __next40pxDefaultSize: true,
    hideLabelFromVision: hideLabelFromVision
  });
}
//# sourceMappingURL=integer.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js
var use_instance_id = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.10.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/v-stack/component.js + 1 modules
var v_stack_component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/v-stack/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/base-control/styles/base-control-styles.js + 1 modules
var base_control_styles = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/base-control/styles/base-control-styles.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/radio-control/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */





function generateOptionDescriptionId(radioGroupId, index) {
  return `${radioGroupId}-${index}-option-description`;
}
function generateOptionId(radioGroupId, index) {
  return `${radioGroupId}-${index}`;
}
function generateHelpId(radioGroupId) {
  return `${radioGroupId}__help`;
}

/**
 * Render a user interface to select the user type using radio inputs.
 *
 * ```jsx
 * import { RadioControl } from '@wordpress/components';
 * import { useState } from '@wordpress/element';
 *
 * const MyRadioControl = () => {
 *   const [ option, setOption ] = useState( 'a' );
 *
 *   return (
 *     <RadioControl
 *       label="User type"
 *       help="The type of the current user"
 *       selected={ option }
 *       options={ [
 *         { label: 'Author', value: 'a' },
 *         { label: 'Editor', value: 'e' },
 *       ] }
 *       onChange={ ( value ) => setOption( value ) }
 *     />
 *   );
 * };
 * ```
 */
function RadioControl(props) {
  const {
    label,
    className,
    selected,
    help,
    onChange,
    hideLabelFromVision,
    options = [],
    id: preferredId,
    ...additionalProps
  } = props;
  const id = (0,use_instance_id/* default */.A)(RadioControl, 'inspector-radio-control', preferredId);
  const onChangeValue = event => onChange(event.target.value);
  if (!options?.length) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("fieldset", {
    id: id,
    className: (0,clsx/* default */.A)(className, 'components-radio-control'),
    "aria-describedby": !!help ? generateHelpId(id) : undefined,
    children: [hideLabelFromVision ? /*#__PURE__*/(0,jsx_runtime.jsx)(component/* default */.A, {
      as: "legend",
      children: label
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(base_control/* default.VisualLabel */.Ay.VisualLabel, {
      as: "legend",
      children: label
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(v_stack_component/* default */.A, {
      spacing: 3,
      className: (0,clsx/* default */.A)('components-radio-control__group-wrapper', {
        'has-help': !!help
      }),
      children: options.map((option, index) => /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "components-radio-control__option",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("input", {
          id: generateOptionId(id, index),
          className: "components-radio-control__input",
          type: "radio",
          name: id,
          value: option.value,
          onChange: onChangeValue,
          checked: option.value === selected,
          "aria-describedby": !!option.description ? generateOptionDescriptionId(id, index) : undefined,
          ...additionalProps
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
          className: "components-radio-control__label",
          htmlFor: generateOptionId(id, index),
          children: option.label
        }), !!option.description ? /*#__PURE__*/(0,jsx_runtime.jsx)(base_control_styles/* StyledHelp */.te, {
          __nextHasNoMarginBottom: true,
          id: generateOptionDescriptionId(id, index),
          className: "components-radio-control__option-description",
          children: option.description
        }) : null]
      }, generateOptionId(id, index)))
    }), !!help && /*#__PURE__*/(0,jsx_runtime.jsx)(base_control_styles/* StyledHelp */.te, {
      __nextHasNoMarginBottom: true,
      id: generateHelpId(id),
      className: "components-base-control__help",
      children: help
    })]
  });
}
/* harmony default export */ const radio_control = (RadioControl);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.4.1_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/dataform-controls/radio.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

function Radio({
  data,
  field,
  onChange,
  hideLabelFromVision
}) {
  const {
    id,
    label
  } = field;
  const value = field.getValue({
    item: data
  });
  const onChangeControl = (0,react.useCallback)(newValue => onChange({
    [id]: newValue
  }), [id, onChange]);
  if (field.elements) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(radio_control, {
      label: label,
      onChange: onChangeControl,
      options: field.elements,
      selected: value,
      hideLabelFromVision: hideLabelFromVision
    });
  }
  return null;
}
//# sourceMappingURL=radio.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.4.1_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/dataform-controls/select.js
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */

function Select({
  data,
  field,
  onChange,
  hideLabelFromVision
}) {
  var _field$getValue, _field$elements;
  const {
    id,
    label
  } = field;
  const value = (_field$getValue = field.getValue({
    item: data
  })) !== null && _field$getValue !== void 0 ? _field$getValue : '';
  const onChangeControl = (0,react.useCallback)(newValue => onChange({
    [id]: newValue
  }), [id, onChange]);
  const elements = [
  /*
   * Value can be undefined when:
   *
   * - the field is not required
   * - in bulk editing
   *
   */
  {
    label: (0,build_module.__)('Select item'),
    value: ''
  }, ...((_field$elements = field?.elements) !== null && _field$elements !== void 0 ? _field$elements : [])];
  return /*#__PURE__*/(0,jsx_runtime.jsx)(select_control/* default */.A, {
    label: label,
    value: value,
    options: elements,
    onChange: onChangeControl,
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true,
    hideLabelFromVision: hideLabelFromVision
  });
}
//# sourceMappingURL=select.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.10.0_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18._ldt3lue5rqdu3lktt5wbnn3eyi/node_modules/@wordpress/components/build-module/text-control/index.js
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function UnforwardedTextControl(props, ref) {
  const {
    __nextHasNoMarginBottom,
    __next40pxDefaultSize = false,
    label,
    hideLabelFromVision,
    value,
    help,
    id: idProp,
    className,
    onChange,
    type = 'text',
    ...additionalProps
  } = props;
  const id = (0,use_instance_id/* default */.A)(TextControl, 'inspector-text-control', idProp);
  const onChangeValue = event => onChange(event.target.value);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(base_control/* default */.Ay, {
    __nextHasNoMarginBottom: __nextHasNoMarginBottom,
    __associatedWPComponentName: "TextControl",
    label: label,
    hideLabelFromVision: hideLabelFromVision,
    id: id,
    help: help,
    className: className,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
      className: (0,clsx/* default */.A)('components-text-control__input', {
        'is-next-40px-default-size': __next40pxDefaultSize
      }),
      type: type,
      id: id,
      value: value,
      onChange: onChangeValue,
      "aria-describedby": !!help ? id + '__help' : undefined,
      ref: ref,
      ...additionalProps
    })
  });
}

/**
 * TextControl components let users enter and edit text.
 *
 * ```jsx
 * import { TextControl } from '@wordpress/components';
 * import { useState } from '@wordpress/element';
 *
 * const MyTextControl = () => {
 *   const [ className, setClassName ] = useState( '' );
 *
 *   return (
 *     <TextControl
 *       __nextHasNoMarginBottom
 *       label="Additional CSS Class"
 *       value={ className }
 *       onChange={ ( value ) => setClassName( value ) }
 *     />
 *   );
 * };
 * ```
 */
const TextControl = (0,react.forwardRef)(UnforwardedTextControl);
/* harmony default export */ const text_control = (TextControl);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.4.1_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/dataform-controls/text.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

function Text({
  data,
  field,
  onChange,
  hideLabelFromVision
}) {
  const {
    id,
    label,
    placeholder
  } = field;
  const value = field.getValue({
    item: data
  });
  const onChangeControl = (0,react.useCallback)(newValue => onChange({
    [id]: newValue
  }), [id, onChange]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(text_control, {
    label: label,
    placeholder: placeholder,
    value: value !== null && value !== void 0 ? value : '',
    onChange: onChangeControl,
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true,
    hideLabelFromVision: hideLabelFromVision
  });
}
//# sourceMappingURL=text.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.4.1_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/dataform-controls/index.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */






const FORM_CONTROLS = {
  datetime: DateTime,
  integer: Integer,
  radio: Radio,
  select: Select,
  text: Text
};
function getControl(field, fieldTypeDefinition) {
  if (typeof field.Edit === 'function') {
    return field.Edit;
  }
  if (typeof field.Edit === 'string') {
    return getControlByType(field.Edit);
  }
  if (field.elements) {
    return getControlByType('select');
  }
  if (typeof fieldTypeDefinition.Edit === 'string') {
    return getControlByType(fieldTypeDefinition.Edit);
  }
  return fieldTypeDefinition.Edit;
}
function getControlByType(type) {
  if (Object.keys(FORM_CONTROLS).includes(type)) {
    return FORM_CONTROLS[type];
  }
  throw 'Control ' + type + ' not found';
}
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dataviews@4.4.1_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/dataviews/build-module/normalize-fields.js
/**
 * Internal dependencies
 */



/**
 * Apply default values and normalize the fields config.
 *
 * @param fields Fields config.
 * @return Normalized fields config.
 */
function normalizeFields(fields) {
  return fields.map(field => {
    var _field$sort, _field$isValid, _field$enableHiding, _field$enableSorting;
    const fieldTypeDefinition = getFieldTypeDefinition(field.type);
    const getValue = field.getValue || (({
      item
    }) => item[field.id]);
    const sort = (_field$sort = field.sort) !== null && _field$sort !== void 0 ? _field$sort : function sort(a, b, direction) {
      return fieldTypeDefinition.sort(getValue({
        item: a
      }), getValue({
        item: b
      }), direction);
    };
    const isValid = (_field$isValid = field.isValid) !== null && _field$isValid !== void 0 ? _field$isValid : function isValid(item, context) {
      return fieldTypeDefinition.isValid(getValue({
        item
      }), context);
    };
    const Edit = getControl(field, fieldTypeDefinition);
    const renderFromElements = ({
      item
    }) => {
      const value = getValue({
        item
      });
      return field?.elements?.find(element => element.value === value)?.label || getValue({
        item
      });
    };
    const render = field.render || (field.elements ? renderFromElements : getValue);
    return {
      ...field,
      label: field.label || field.id,
      header: field.header || field.label || field.id,
      getValue,
      render,
      sort,
      isValid,
      Edit,
      enableHiding: (_field$enableHiding = field.enableHiding) !== null && _field$enableHiding !== void 0 ? _field$enableHiding : true,
      enableSorting: (_field$enableSorting = field.enableSorting) !== null && _field$enableSorting !== void 0 ? _field$enableSorting : true
    };
  });
}
//# sourceMappingURL=normalize-fields.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+deprecated@4.10.0/node_modules/@wordpress/deprecated/build-module/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ deprecated)
/* harmony export */ });
/* unused harmony export logged */
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+hooks@4.10.0/node_modules/@wordpress/hooks/build-module/index.js");
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

/***/ "../../node_modules/.pnpm/@wordpress+dom@4.10.0/node_modules/@wordpress/dom/build-module/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  XC: () => (/* binding */ build_module_focus)
});

// UNUSED EXPORTS: __unstableStripHTML, computeCaretRect, documentHasSelection, documentHasTextSelection, documentHasUncollapsedSelection, getFilesFromDataTransfer, getOffsetParent, getPhrasingContentSchema, getRectangleFromRange, getScrollContainer, insertAfter, isEmpty, isEntirelySelected, isFormElement, isHorizontalEdge, isNumberInput, isPhrasingContent, isRTL, isSelectionForward, isTextContent, isTextField, isVerticalEdge, placeCaretAtHorizontalEdge, placeCaretAtVerticalEdge, remove, removeInvalidHTML, replace, replaceTag, safeHTML, unwrap, wrap

// NAMESPACE OBJECT: ../../node_modules/.pnpm/@wordpress+dom@4.10.0/node_modules/@wordpress/dom/build-module/focusable.js
var focusable_namespaceObject = {};
__webpack_require__.r(focusable_namespaceObject);
__webpack_require__.d(focusable_namespaceObject, {
  find: () => (find)
});

// NAMESPACE OBJECT: ../../node_modules/.pnpm/@wordpress+dom@4.10.0/node_modules/@wordpress/dom/build-module/tabbable.js
var tabbable_namespaceObject = {};
__webpack_require__.r(tabbable_namespaceObject);
__webpack_require__.d(tabbable_namespaceObject, {
  find: () => (tabbable_find),
  findNext: () => (findNext),
  findPrevious: () => (findPrevious),
  isTabbableIndex: () => (isTabbableIndex)
});

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dom@4.10.0/node_modules/@wordpress/dom/build-module/focusable.js
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
      return isValidFocusableArea(/** @type {HTMLAreaElement} */element);
    }
    return true;
  });
}
//# sourceMappingURL=focusable.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dom@4.10.0/node_modules/@wordpress/dom/build-module/tabbable.js
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
  return function collapseRadioGroup(/** @type {MaybeHTMLInputElement[]} */result, /** @type {MaybeHTMLInputElement} */element) {
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
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+dom@4.10.0/node_modules/@wordpress/dom/build-module/index.js
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

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+hooks@4.10.0/node_modules/@wordpress/hooks/build-module/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  se: () => (/* binding */ defaultHooks),
  Eo: () => (/* binding */ doAction)
});

// UNUSED EXPORTS: actions, addAction, addFilter, applyFilters, applyFiltersAsync, createHooks, currentAction, currentFilter, didAction, didFilter, doActionAsync, doingAction, doingFilter, filters, hasAction, hasFilter, removeAction, removeAllActions, removeAllFilters, removeFilter

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+hooks@4.10.0/node_modules/@wordpress/hooks/build-module/validateNamespace.js
/**
 * Validate a namespace string.
 *
 * @param {string} namespace The namespace to validate - should take the form
 *                           `vendor/plugin/function`.
 *
 * @return {boolean} Whether the namespace is valid.
 */
function validateNamespace(namespace) {
  if ('string' !== typeof namespace || '' === namespace) {
    // eslint-disable-next-line no-console
    console.error('The namespace must be a non-empty string.');
    return false;
  }
  if (!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(namespace)) {
    // eslint-disable-next-line no-console
    console.error('The namespace can only contain numbers, letters, dashes, periods, underscores and slashes.');
    return false;
  }
  return true;
}
/* harmony default export */ const build_module_validateNamespace = (validateNamespace);
//# sourceMappingURL=validateNamespace.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+hooks@4.10.0/node_modules/@wordpress/hooks/build-module/validateHookName.js
/**
 * Validate a hookName string.
 *
 * @param {string} hookName The hook name to validate. Should be a non empty string containing
 *                          only numbers, letters, dashes, periods and underscores. Also,
 *                          the hook name cannot begin with `__`.
 *
 * @return {boolean} Whether the hook name is valid.
 */
function validateHookName(hookName) {
  if ('string' !== typeof hookName || '' === hookName) {
    // eslint-disable-next-line no-console
    console.error('The hook name must be a non-empty string.');
    return false;
  }
  if (/^__/.test(hookName)) {
    // eslint-disable-next-line no-console
    console.error('The hook name cannot begin with `__`.');
    return false;
  }
  if (!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(hookName)) {
    // eslint-disable-next-line no-console
    console.error('The hook name can only contain numbers, letters, dashes, periods and underscores.');
    return false;
  }
  return true;
}
/* harmony default export */ const build_module_validateHookName = (validateHookName);
//# sourceMappingURL=validateHookName.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+hooks@4.10.0/node_modules/@wordpress/hooks/build-module/createAddHook.js
/**
 * Internal dependencies
 */



/**
 * @callback AddHook
 *
 * Adds the hook to the appropriate hooks container.
 *
 * @param {string}               hookName      Name of hook to add
 * @param {string}               namespace     The unique namespace identifying the callback in the form `vendor/plugin/function`.
 * @param {import('.').Callback} callback      Function to call when the hook is run
 * @param {number}               [priority=10] Priority of this hook
 */

/**
 * Returns a function which, when invoked, will add a hook.
 *
 * @param {import('.').Hooks}    hooks    Hooks instance.
 * @param {import('.').StoreKey} storeKey
 *
 * @return {AddHook} Function that adds a new hook.
 */
function createAddHook(hooks, storeKey) {
  return function addHook(hookName, namespace, callback, priority = 10) {
    const hooksStore = hooks[storeKey];
    if (!build_module_validateHookName(hookName)) {
      return;
    }
    if (!build_module_validateNamespace(namespace)) {
      return;
    }
    if ('function' !== typeof callback) {
      // eslint-disable-next-line no-console
      console.error('The hook callback must be a function.');
      return;
    }

    // Validate numeric priority
    if ('number' !== typeof priority) {
      // eslint-disable-next-line no-console
      console.error('If specified, the hook priority must be a number.');
      return;
    }
    const handler = {
      callback,
      priority,
      namespace
    };
    if (hooksStore[hookName]) {
      // Find the correct insert index of the new hook.
      const handlers = hooksStore[hookName].handlers;

      /** @type {number} */
      let i;
      for (i = handlers.length; i > 0; i--) {
        if (priority >= handlers[i - 1].priority) {
          break;
        }
      }
      if (i === handlers.length) {
        // If append, operate via direct assignment.
        handlers[i] = handler;
      } else {
        // Otherwise, insert before index via splice.
        handlers.splice(i, 0, handler);
      }

      // We may also be currently executing this hook.  If the callback
      // we're adding would come after the current callback, there's no
      // problem; otherwise we need to increase the execution index of
      // any other runs by 1 to account for the added element.
      hooksStore.__current.forEach(hookInfo => {
        if (hookInfo.name === hookName && hookInfo.currentIndex >= i) {
          hookInfo.currentIndex++;
        }
      });
    } else {
      // This is the first hook of its type.
      hooksStore[hookName] = {
        handlers: [handler],
        runs: 0
      };
    }
    if (hookName !== 'hookAdded') {
      hooks.doAction('hookAdded', hookName, namespace, callback, priority);
    }
  };
}
/* harmony default export */ const build_module_createAddHook = (createAddHook);
//# sourceMappingURL=createAddHook.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+hooks@4.10.0/node_modules/@wordpress/hooks/build-module/createRemoveHook.js
/**
 * Internal dependencies
 */



/**
 * @callback RemoveHook
 * Removes the specified callback (or all callbacks) from the hook with a given hookName
 * and namespace.
 *
 * @param {string} hookName  The name of the hook to modify.
 * @param {string} namespace The unique namespace identifying the callback in the
 *                           form `vendor/plugin/function`.
 *
 * @return {number | undefined} The number of callbacks removed.
 */

/**
 * Returns a function which, when invoked, will remove a specified hook or all
 * hooks by the given name.
 *
 * @param {import('.').Hooks}    hooks             Hooks instance.
 * @param {import('.').StoreKey} storeKey
 * @param {boolean}              [removeAll=false] Whether to remove all callbacks for a hookName,
 *                                                 without regard to namespace. Used to create
 *                                                 `removeAll*` functions.
 *
 * @return {RemoveHook} Function that removes hooks.
 */
function createRemoveHook(hooks, storeKey, removeAll = false) {
  return function removeHook(hookName, namespace) {
    const hooksStore = hooks[storeKey];
    if (!build_module_validateHookName(hookName)) {
      return;
    }
    if (!removeAll && !build_module_validateNamespace(namespace)) {
      return;
    }

    // Bail if no hooks exist by this name.
    if (!hooksStore[hookName]) {
      return 0;
    }
    let handlersRemoved = 0;
    if (removeAll) {
      handlersRemoved = hooksStore[hookName].handlers.length;
      hooksStore[hookName] = {
        runs: hooksStore[hookName].runs,
        handlers: []
      };
    } else {
      // Try to find the specified callback to remove.
      const handlers = hooksStore[hookName].handlers;
      for (let i = handlers.length - 1; i >= 0; i--) {
        if (handlers[i].namespace === namespace) {
          handlers.splice(i, 1);
          handlersRemoved++;
          // This callback may also be part of a hook that is
          // currently executing.  If the callback we're removing
          // comes after the current callback, there's no problem;
          // otherwise we need to decrease the execution index of any
          // other runs by 1 to account for the removed element.
          hooksStore.__current.forEach(hookInfo => {
            if (hookInfo.name === hookName && hookInfo.currentIndex >= i) {
              hookInfo.currentIndex--;
            }
          });
        }
      }
    }
    if (hookName !== 'hookRemoved') {
      hooks.doAction('hookRemoved', hookName, namespace);
    }
    return handlersRemoved;
  };
}
/* harmony default export */ const build_module_createRemoveHook = (createRemoveHook);
//# sourceMappingURL=createRemoveHook.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+hooks@4.10.0/node_modules/@wordpress/hooks/build-module/createHasHook.js
/**
 * @callback HasHook
 *
 * Returns whether any handlers are attached for the given hookName and optional namespace.
 *
 * @param {string} hookName    The name of the hook to check for.
 * @param {string} [namespace] Optional. The unique namespace identifying the callback
 *                             in the form `vendor/plugin/function`.
 *
 * @return {boolean} Whether there are handlers that are attached to the given hook.
 */
/**
 * Returns a function which, when invoked, will return whether any handlers are
 * attached to a particular hook.
 *
 * @param {import('.').Hooks}    hooks    Hooks instance.
 * @param {import('.').StoreKey} storeKey
 *
 * @return {HasHook} Function that returns whether any handlers are
 *                   attached to a particular hook and optional namespace.
 */
function createHasHook(hooks, storeKey) {
  return function hasHook(hookName, namespace) {
    const hooksStore = hooks[storeKey];

    // Use the namespace if provided.
    if ('undefined' !== typeof namespace) {
      return hookName in hooksStore && hooksStore[hookName].handlers.some(hook => hook.namespace === namespace);
    }
    return hookName in hooksStore;
  };
}
/* harmony default export */ const build_module_createHasHook = (createHasHook);
//# sourceMappingURL=createHasHook.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+hooks@4.10.0/node_modules/@wordpress/hooks/build-module/createRunHook.js
/**
 * Returns a function which, when invoked, will execute all callbacks
 * registered to a hook of the specified type, optionally returning the final
 * value of the call chain.
 *
 * @param {import('.').Hooks}    hooks          Hooks instance.
 * @param {import('.').StoreKey} storeKey
 * @param {boolean}              returnFirstArg Whether each hook callback is expected to return its first argument.
 * @param {boolean}              async          Whether the hook callback should be run asynchronously
 *
 * @return {(hookName:string, ...args: unknown[]) => undefined|unknown} Function that runs hook callbacks.
 */
function createRunHook(hooks, storeKey, returnFirstArg, async) {
  return function runHook(hookName, ...args) {
    const hooksStore = hooks[storeKey];
    if (!hooksStore[hookName]) {
      hooksStore[hookName] = {
        handlers: [],
        runs: 0
      };
    }
    hooksStore[hookName].runs++;
    const handlers = hooksStore[hookName].handlers;

    // The following code is stripped from production builds.
    if (false) {}
    if (!handlers || !handlers.length) {
      return returnFirstArg ? args[0] : undefined;
    }
    const hookInfo = {
      name: hookName,
      currentIndex: 0
    };
    async function asyncRunner() {
      try {
        hooksStore.__current.add(hookInfo);
        let result = returnFirstArg ? args[0] : undefined;
        while (hookInfo.currentIndex < handlers.length) {
          const handler = handlers[hookInfo.currentIndex];
          result = await handler.callback.apply(null, args);
          if (returnFirstArg) {
            args[0] = result;
          }
          hookInfo.currentIndex++;
        }
        return returnFirstArg ? result : undefined;
      } finally {
        hooksStore.__current.delete(hookInfo);
      }
    }
    function syncRunner() {
      try {
        hooksStore.__current.add(hookInfo);
        let result = returnFirstArg ? args[0] : undefined;
        while (hookInfo.currentIndex < handlers.length) {
          const handler = handlers[hookInfo.currentIndex];
          result = handler.callback.apply(null, args);
          if (returnFirstArg) {
            args[0] = result;
          }
          hookInfo.currentIndex++;
        }
        return returnFirstArg ? result : undefined;
      } finally {
        hooksStore.__current.delete(hookInfo);
      }
    }
    return (async ? asyncRunner : syncRunner)();
  };
}
/* harmony default export */ const build_module_createRunHook = (createRunHook);
//# sourceMappingURL=createRunHook.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+hooks@4.10.0/node_modules/@wordpress/hooks/build-module/createCurrentHook.js
/**
 * Returns a function which, when invoked, will return the name of the
 * currently running hook, or `null` if no hook of the given type is currently
 * running.
 *
 * @param {import('.').Hooks}    hooks    Hooks instance.
 * @param {import('.').StoreKey} storeKey
 *
 * @return {() => string | null} Function that returns the current hook name or null.
 */
function createCurrentHook(hooks, storeKey) {
  return function currentHook() {
    var _currentArray$at$name;
    const hooksStore = hooks[storeKey];
    const currentArray = Array.from(hooksStore.__current);
    return (_currentArray$at$name = currentArray.at(-1)?.name) !== null && _currentArray$at$name !== void 0 ? _currentArray$at$name : null;
  };
}
/* harmony default export */ const build_module_createCurrentHook = (createCurrentHook);
//# sourceMappingURL=createCurrentHook.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+hooks@4.10.0/node_modules/@wordpress/hooks/build-module/createDoingHook.js
/**
 * @callback DoingHook
 * Returns whether a hook is currently being executed.
 *
 * @param {string} [hookName] The name of the hook to check for.  If
 *                            omitted, will check for any hook being executed.
 *
 * @return {boolean} Whether the hook is being executed.
 */

/**
 * Returns a function which, when invoked, will return whether a hook is
 * currently being executed.
 *
 * @param {import('.').Hooks}    hooks    Hooks instance.
 * @param {import('.').StoreKey} storeKey
 *
 * @return {DoingHook} Function that returns whether a hook is currently
 *                     being executed.
 */
function createDoingHook(hooks, storeKey) {
  return function doingHook(hookName) {
    const hooksStore = hooks[storeKey];

    // If the hookName was not passed, check for any current hook.
    if ('undefined' === typeof hookName) {
      return hooksStore.__current.size > 0;
    }

    // Find if the `hookName` hook is in `__current`.
    return Array.from(hooksStore.__current).some(hook => hook.name === hookName);
  };
}
/* harmony default export */ const build_module_createDoingHook = (createDoingHook);
//# sourceMappingURL=createDoingHook.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+hooks@4.10.0/node_modules/@wordpress/hooks/build-module/createDidHook.js
/**
 * Internal dependencies
 */


/**
 * @callback DidHook
 *
 * Returns the number of times an action has been fired.
 *
 * @param {string} hookName The hook name to check.
 *
 * @return {number | undefined} The number of times the hook has run.
 */

/**
 * Returns a function which, when invoked, will return the number of times a
 * hook has been called.
 *
 * @param {import('.').Hooks}    hooks    Hooks instance.
 * @param {import('.').StoreKey} storeKey
 *
 * @return {DidHook} Function that returns a hook's call count.
 */
function createDidHook(hooks, storeKey) {
  return function didHook(hookName) {
    const hooksStore = hooks[storeKey];
    if (!build_module_validateHookName(hookName)) {
      return;
    }
    return hooksStore[hookName] && hooksStore[hookName].runs ? hooksStore[hookName].runs : 0;
  };
}
/* harmony default export */ const build_module_createDidHook = (createDidHook);
//# sourceMappingURL=createDidHook.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+hooks@4.10.0/node_modules/@wordpress/hooks/build-module/createHooks.js
/* wp:polyfill */
/**
 * Internal dependencies
 */








/**
 * Internal class for constructing hooks. Use `createHooks()` function
 *
 * Note, it is necessary to expose this class to make its type public.
 *
 * @private
 */
class _Hooks {
  constructor() {
    /** @type {import('.').Store} actions */
    this.actions = Object.create(null);
    this.actions.__current = new Set();

    /** @type {import('.').Store} filters */
    this.filters = Object.create(null);
    this.filters.__current = new Set();
    this.addAction = build_module_createAddHook(this, 'actions');
    this.addFilter = build_module_createAddHook(this, 'filters');
    this.removeAction = build_module_createRemoveHook(this, 'actions');
    this.removeFilter = build_module_createRemoveHook(this, 'filters');
    this.hasAction = build_module_createHasHook(this, 'actions');
    this.hasFilter = build_module_createHasHook(this, 'filters');
    this.removeAllActions = build_module_createRemoveHook(this, 'actions', true);
    this.removeAllFilters = build_module_createRemoveHook(this, 'filters', true);
    this.doAction = build_module_createRunHook(this, 'actions', false, false);
    this.doActionAsync = build_module_createRunHook(this, 'actions', false, true);
    this.applyFilters = build_module_createRunHook(this, 'filters', true, false);
    this.applyFiltersAsync = build_module_createRunHook(this, 'filters', true, true);
    this.currentAction = build_module_createCurrentHook(this, 'actions');
    this.currentFilter = build_module_createCurrentHook(this, 'filters');
    this.doingAction = build_module_createDoingHook(this, 'actions');
    this.doingFilter = build_module_createDoingHook(this, 'filters');
    this.didAction = build_module_createDidHook(this, 'actions');
    this.didFilter = build_module_createDidHook(this, 'filters');
  }
}

/** @typedef {_Hooks} Hooks */

/**
 * Returns an instance of the hooks object.
 *
 * @return {Hooks} A Hooks instance.
 */
function createHooks() {
  return new _Hooks();
}
/* harmony default export */ const build_module_createHooks = (createHooks);
//# sourceMappingURL=createHooks.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+hooks@4.10.0/node_modules/@wordpress/hooks/build-module/index.js
/**
 * Internal dependencies
 */


/** @typedef {(...args: any[])=>any} Callback */

/**
 * @typedef Handler
 * @property {Callback} callback  The callback
 * @property {string}   namespace The namespace
 * @property {number}   priority  The namespace
 */

/**
 * @typedef Hook
 * @property {Handler[]} handlers Array of handlers
 * @property {number}    runs     Run counter
 */

/**
 * @typedef Current
 * @property {string} name         Hook name
 * @property {number} currentIndex The index
 */

/**
 * @typedef {Record<string, Hook> & {__current: Set<Current>}} Store
 */

/**
 * @typedef {'actions' | 'filters'} StoreKey
 */

/**
 * @typedef {import('./createHooks').Hooks} Hooks
 */

const defaultHooks = build_module_createHooks();
const {
  addAction,
  addFilter,
  removeAction,
  removeFilter,
  hasAction,
  hasFilter,
  removeAllActions,
  removeAllFilters,
  doAction,
  doActionAsync,
  applyFilters,
  applyFiltersAsync,
  currentAction,
  currentFilter,
  doingAction,
  doingFilter,
  didAction,
  didFilter,
  actions,
  filters
} = defaultHooks;

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+i18n@5.10.0/node_modules/@wordpress/i18n/build-module/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  __: () => (/* reexport */ __),
  _n: () => (/* reexport */ _n),
  _x: () => (/* reexport */ _x),
  V8: () => (/* reexport */ isRTL),
  nv: () => (/* reexport */ sprintf_sprintf)
});

// UNUSED EXPORTS: _nx, createI18n, defaultI18n, getLocaleData, hasTranslation, resetLocaleData, setLocaleData, subscribe

// EXTERNAL MODULE: ../../node_modules/.pnpm/memize@2.1.0/node_modules/memize/dist/index.js
var dist = __webpack_require__("../../node_modules/.pnpm/memize@2.1.0/node_modules/memize/dist/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/sprintf-js@1.1.3/node_modules/sprintf-js/src/sprintf.js
var sprintf = __webpack_require__("../../node_modules/.pnpm/sprintf-js@1.1.3/node_modules/sprintf-js/src/sprintf.js");
var sprintf_default = /*#__PURE__*/__webpack_require__.n(sprintf);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.10.0/node_modules/@wordpress/i18n/build-module/sprintf.js
/**
 * External dependencies
 */



/**
 * Log to console, once per message; or more precisely, per referentially equal
 * argument set. Because Jed throws errors, we log these to the console instead
 * to avoid crashing the application.
 *
 * @param {...*} args Arguments to pass to `console.error`
 */
const logErrorOnce = (0,dist/* default */.A)(console.error); // eslint-disable-line no-console

/**
 * Returns a formatted string. If an error occurs in applying the format, the
 * original format string is returned.
 *
 * @param {string} format The format of the string to generate.
 * @param {...*}   args   Arguments to apply to the format.
 *
 * @see https://www.npmjs.com/package/sprintf-js
 *
 * @return {string} The formatted string.
 */
function sprintf_sprintf(format, ...args) {
  try {
    return sprintf_default().sprintf(format, ...args);
  } catch (error) {
    if (error instanceof Error) {
      logErrorOnce('sprintf error: \n\n' + error.toString());
    }
    return format;
  }
}
//# sourceMappingURL=sprintf.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/tannin@1.2.0/node_modules/tannin/index.js + 4 modules
var node_modules_tannin = __webpack_require__("../../node_modules/.pnpm/tannin@1.2.0/node_modules/tannin/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.10.0/node_modules/@wordpress/i18n/build-module/create-i18n.js
/* wp:polyfill */
/**
 * External dependencies
 */


/**
 * @typedef {Record<string,any>} LocaleData
 */

/**
 * Default locale data to use for Tannin domain when not otherwise provided.
 * Assumes an English plural forms expression.
 *
 * @type {LocaleData}
 */
const DEFAULT_LOCALE_DATA = {
  '': {
    /** @param {number} n */
    plural_forms(n) {
      return n === 1 ? 0 : 1;
    }
  }
};

/*
 * Regular expression that matches i18n hooks like `i18n.gettext`, `i18n.ngettext`,
 * `i18n.gettext_domain` or `i18n.ngettext_with_context` or `i18n.has_translation`.
 */
const I18N_HOOK_REGEXP = /^i18n\.(n?gettext|has_translation)(_|$)/;

/**
 * @typedef {(domain?: string) => LocaleData} GetLocaleData
 *
 * Returns locale data by domain in a
 * Jed-formatted JSON object shape.
 *
 * @see http://messageformat.github.io/Jed/
 */
/**
 * @typedef {(data?: LocaleData, domain?: string) => void} SetLocaleData
 *
 * Merges locale data into the Tannin instance by domain. Note that this
 * function will overwrite the domain configuration. Accepts data in a
 * Jed-formatted JSON object shape.
 *
 * @see http://messageformat.github.io/Jed/
 */
/**
 * @typedef {(data?: LocaleData, domain?: string) => void} AddLocaleData
 *
 * Merges locale data into the Tannin instance by domain. Note that this
 * function will also merge the domain configuration. Accepts data in a
 * Jed-formatted JSON object shape.
 *
 * @see http://messageformat.github.io/Jed/
 */
/**
 * @typedef {(data?: LocaleData, domain?: string) => void} ResetLocaleData
 *
 * Resets all current Tannin instance locale data and sets the specified
 * locale data for the domain. Accepts data in a Jed-formatted JSON object shape.
 *
 * @see http://messageformat.github.io/Jed/
 */
/** @typedef {() => void} SubscribeCallback */
/** @typedef {() => void} UnsubscribeCallback */
/**
 * @typedef {(callback: SubscribeCallback) => UnsubscribeCallback} Subscribe
 *
 * Subscribes to changes of locale data
 */
/**
 * @typedef {(domain?: string) => string} GetFilterDomain
 * Retrieve the domain to use when calling domain-specific filters.
 */
/**
 * @typedef {(text: string, domain?: string) => string} __
 *
 * Retrieve the translation of text.
 *
 * @see https://developer.wordpress.org/reference/functions/__/
 */
/**
 * @typedef {(text: string, context: string, domain?: string) => string} _x
 *
 * Retrieve translated string with gettext context.
 *
 * @see https://developer.wordpress.org/reference/functions/_x/
 */
/**
 * @typedef {(single: string, plural: string, number: number, domain?: string) => string} _n
 *
 * Translates and retrieves the singular or plural form based on the supplied
 * number.
 *
 * @see https://developer.wordpress.org/reference/functions/_n/
 */
/**
 * @typedef {(single: string, plural: string, number: number, context: string, domain?: string) => string} _nx
 *
 * Translates and retrieves the singular or plural form based on the supplied
 * number, with gettext context.
 *
 * @see https://developer.wordpress.org/reference/functions/_nx/
 */
/**
 * @typedef {() => boolean} IsRtl
 *
 * Check if current locale is RTL.
 *
 * **RTL (Right To Left)** is a locale property indicating that text is written from right to left.
 * For example, the `he` locale (for Hebrew) specifies right-to-left. Arabic (ar) is another common
 * language written RTL. The opposite of RTL, LTR (Left To Right) is used in other languages,
 * including English (`en`, `en-US`, `en-GB`, etc.), Spanish (`es`), and French (`fr`).
 */
/**
 * @typedef {(single: string, context?: string, domain?: string) => boolean} HasTranslation
 *
 * Check if there is a translation for a given string in singular form.
 */
/** @typedef {import('@wordpress/hooks').Hooks} Hooks */

/**
 * An i18n instance
 *
 * @typedef I18n
 * @property {GetLocaleData}   getLocaleData   Returns locale data by domain in a Jed-formatted JSON object shape.
 * @property {SetLocaleData}   setLocaleData   Merges locale data into the Tannin instance by domain. Note that this
 *                                             function will overwrite the domain configuration. Accepts data in a
 *                                             Jed-formatted JSON object shape.
 * @property {AddLocaleData}   addLocaleData   Merges locale data into the Tannin instance by domain. Note that this
 *                                             function will also merge the domain configuration. Accepts data in a
 *                                             Jed-formatted JSON object shape.
 * @property {ResetLocaleData} resetLocaleData Resets all current Tannin instance locale data and sets the specified
 *                                             locale data for the domain. Accepts data in a Jed-formatted JSON object shape.
 * @property {Subscribe}       subscribe       Subscribes to changes of Tannin locale data.
 * @property {__}              __              Retrieve the translation of text.
 * @property {_x}              _x              Retrieve translated string with gettext context.
 * @property {_n}              _n              Translates and retrieves the singular or plural form based on the supplied
 *                                             number.
 * @property {_nx}             _nx             Translates and retrieves the singular or plural form based on the supplied
 *                                             number, with gettext context.
 * @property {IsRtl}           isRTL           Check if current locale is RTL.
 * @property {HasTranslation}  hasTranslation  Check if there is a translation for a given string.
 */

/**
 * Create an i18n instance
 *
 * @param {LocaleData} [initialData]   Locale data configuration.
 * @param {string}     [initialDomain] Domain for which configuration applies.
 * @param {Hooks}      [hooks]         Hooks implementation.
 *
 * @return {I18n} I18n instance.
 */
const createI18n = (initialData, initialDomain, hooks) => {
  /**
   * The underlying instance of Tannin to which exported functions interface.
   *
   * @type {Tannin}
   */
  const tannin = new node_modules_tannin/* default */.A({});
  const listeners = new Set();
  const notifyListeners = () => {
    listeners.forEach(listener => listener());
  };

  /**
   * Subscribe to changes of locale data.
   *
   * @param {SubscribeCallback} callback Subscription callback.
   * @return {UnsubscribeCallback} Unsubscribe callback.
   */
  const subscribe = callback => {
    listeners.add(callback);
    return () => listeners.delete(callback);
  };

  /** @type {GetLocaleData} */
  const getLocaleData = (domain = 'default') => tannin.data[domain];

  /**
   * @param {LocaleData} [data]
   * @param {string}     [domain]
   */
  const doSetLocaleData = (data, domain = 'default') => {
    tannin.data[domain] = {
      ...tannin.data[domain],
      ...data
    };

    // Populate default domain configuration (supported locale date which omits
    // a plural forms expression).
    tannin.data[domain][''] = {
      ...DEFAULT_LOCALE_DATA[''],
      ...tannin.data[domain]?.['']
    };

    // Clean up cached plural forms functions cache as it might be updated.
    delete tannin.pluralForms[domain];
  };

  /** @type {SetLocaleData} */
  const setLocaleData = (data, domain) => {
    doSetLocaleData(data, domain);
    notifyListeners();
  };

  /** @type {AddLocaleData} */
  const addLocaleData = (data, domain = 'default') => {
    tannin.data[domain] = {
      ...tannin.data[domain],
      ...data,
      // Populate default domain configuration (supported locale date which omits
      // a plural forms expression).
      '': {
        ...DEFAULT_LOCALE_DATA[''],
        ...tannin.data[domain]?.[''],
        ...data?.['']
      }
    };

    // Clean up cached plural forms functions cache as it might be updated.
    delete tannin.pluralForms[domain];
    notifyListeners();
  };

  /** @type {ResetLocaleData} */
  const resetLocaleData = (data, domain) => {
    // Reset all current Tannin locale data.
    tannin.data = {};

    // Reset cached plural forms functions cache.
    tannin.pluralForms = {};
    setLocaleData(data, domain);
  };

  /**
   * Wrapper for Tannin's `dcnpgettext`. Populates default locale data if not
   * otherwise previously assigned.
   *
   * @param {string|undefined} domain   Domain to retrieve the translated text.
   * @param {string|undefined} context  Context information for the translators.
   * @param {string}           single   Text to translate if non-plural. Used as
   *                                    fallback return value on a caught error.
   * @param {string}           [plural] The text to be used if the number is
   *                                    plural.
   * @param {number}           [number] The number to compare against to use
   *                                    either the singular or plural form.
   *
   * @return {string} The translated string.
   */
  const dcnpgettext = (domain = 'default', context, single, plural, number) => {
    if (!tannin.data[domain]) {
      // Use `doSetLocaleData` to set silently, without notifying listeners.
      doSetLocaleData(undefined, domain);
    }
    return tannin.dcnpgettext(domain, context, single, plural, number);
  };

  /** @type {GetFilterDomain} */
  const getFilterDomain = (domain = 'default') => domain;

  /** @type {__} */
  const __ = (text, domain) => {
    let translation = dcnpgettext(domain, undefined, text);
    if (!hooks) {
      return translation;
    }

    /**
     * Filters text with its translation.
     *
     * @param {string} translation Translated text.
     * @param {string} text        Text to translate.
     * @param {string} domain      Text domain. Unique identifier for retrieving translated strings.
     */
    translation = /** @type {string} */
    /** @type {*} */hooks.applyFilters('i18n.gettext', translation, text, domain);
    return /** @type {string} */ /** @type {*} */hooks.applyFilters('i18n.gettext_' + getFilterDomain(domain), translation, text, domain);
  };

  /** @type {_x} */
  const _x = (text, context, domain) => {
    let translation = dcnpgettext(domain, context, text);
    if (!hooks) {
      return translation;
    }

    /**
     * Filters text with its translation based on context information.
     *
     * @param {string} translation Translated text.
     * @param {string} text        Text to translate.
     * @param {string} context     Context information for the translators.
     * @param {string} domain      Text domain. Unique identifier for retrieving translated strings.
     */
    translation = /** @type {string} */
    /** @type {*} */hooks.applyFilters('i18n.gettext_with_context', translation, text, context, domain);
    return /** @type {string} */ /** @type {*} */hooks.applyFilters('i18n.gettext_with_context_' + getFilterDomain(domain), translation, text, context, domain);
  };

  /** @type {_n} */
  const _n = (single, plural, number, domain) => {
    let translation = dcnpgettext(domain, undefined, single, plural, number);
    if (!hooks) {
      return translation;
    }

    /**
     * Filters the singular or plural form of a string.
     *
     * @param {string} translation Translated text.
     * @param {string} single      The text to be used if the number is singular.
     * @param {string} plural      The text to be used if the number is plural.
     * @param {string} number      The number to compare against to use either the singular or plural form.
     * @param {string} domain      Text domain. Unique identifier for retrieving translated strings.
     */
    translation = /** @type {string} */
    /** @type {*} */hooks.applyFilters('i18n.ngettext', translation, single, plural, number, domain);
    return /** @type {string} */ /** @type {*} */hooks.applyFilters('i18n.ngettext_' + getFilterDomain(domain), translation, single, plural, number, domain);
  };

  /** @type {_nx} */
  const _nx = (single, plural, number, context, domain) => {
    let translation = dcnpgettext(domain, context, single, plural, number);
    if (!hooks) {
      return translation;
    }

    /**
     * Filters the singular or plural form of a string with gettext context.
     *
     * @param {string} translation Translated text.
     * @param {string} single      The text to be used if the number is singular.
     * @param {string} plural      The text to be used if the number is plural.
     * @param {string} number      The number to compare against to use either the singular or plural form.
     * @param {string} context     Context information for the translators.
     * @param {string} domain      Text domain. Unique identifier for retrieving translated strings.
     */
    translation = /** @type {string} */
    /** @type {*} */hooks.applyFilters('i18n.ngettext_with_context', translation, single, plural, number, context, domain);
    return /** @type {string} */ /** @type {*} */hooks.applyFilters('i18n.ngettext_with_context_' + getFilterDomain(domain), translation, single, plural, number, context, domain);
  };

  /** @type {IsRtl} */
  const isRTL = () => {
    return 'rtl' === _x('ltr', 'text direction');
  };

  /** @type {HasTranslation} */
  const hasTranslation = (single, context, domain) => {
    const key = context ? context + '\u0004' + single : single;
    let result = !!tannin.data?.[domain !== null && domain !== void 0 ? domain : 'default']?.[key];
    if (hooks) {
      /**
       * Filters the presence of a translation in the locale data.
       *
       * @param {boolean} hasTranslation Whether the translation is present or not..
       * @param {string}  single         The singular form of the translated text (used as key in locale data)
       * @param {string}  context        Context information for the translators.
       * @param {string}  domain         Text domain. Unique identifier for retrieving translated strings.
       */
      result = /** @type { boolean } */
      /** @type {*} */hooks.applyFilters('i18n.has_translation', result, single, context, domain);
      result = /** @type { boolean } */
      /** @type {*} */hooks.applyFilters('i18n.has_translation_' + getFilterDomain(domain), result, single, context, domain);
    }
    return result;
  };
  if (initialData) {
    setLocaleData(initialData, initialDomain);
  }
  if (hooks) {
    /**
     * @param {string} hookName
     */
    const onHookAddedOrRemoved = hookName => {
      if (I18N_HOOK_REGEXP.test(hookName)) {
        notifyListeners();
      }
    };
    hooks.addAction('hookAdded', 'core/i18n', onHookAddedOrRemoved);
    hooks.addAction('hookRemoved', 'core/i18n', onHookAddedOrRemoved);
  }
  return {
    getLocaleData,
    setLocaleData,
    addLocaleData,
    resetLocaleData,
    subscribe,
    __,
    _x,
    _n,
    _nx,
    isRTL,
    hasTranslation
  };
};
//# sourceMappingURL=create-i18n.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+hooks@4.10.0/node_modules/@wordpress/hooks/build-module/index.js + 10 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+hooks@4.10.0/node_modules/@wordpress/hooks/build-module/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.10.0/node_modules/@wordpress/i18n/build-module/default-i18n.js
/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */

const i18n = createI18n(undefined, undefined, build_module/* defaultHooks */.se);

/**
 * Default, singleton instance of `I18n`.
 */
/* harmony default export */ const default_i18n = ((/* unused pure expression or super */ null && (i18n)));

/*
 * Comments in this file are duplicated from ./i18n due to
 * https://github.com/WordPress/gutenberg/pull/20318#issuecomment-590837722
 */

/**
 * @typedef {import('./create-i18n').LocaleData} LocaleData
 * @typedef {import('./create-i18n').SubscribeCallback} SubscribeCallback
 * @typedef {import('./create-i18n').UnsubscribeCallback} UnsubscribeCallback
 */

/**
 * Returns locale data by domain in a Jed-formatted JSON object shape.
 *
 * @see http://messageformat.github.io/Jed/
 *
 * @param {string} [domain] Domain for which to get the data.
 * @return {LocaleData} Locale data.
 */
const getLocaleData = i18n.getLocaleData.bind(i18n);

/**
 * Merges locale data into the Tannin instance by domain. Accepts data in a
 * Jed-formatted JSON object shape.
 *
 * @see http://messageformat.github.io/Jed/
 *
 * @param {LocaleData} [data]   Locale data configuration.
 * @param {string}     [domain] Domain for which configuration applies.
 */
const setLocaleData = i18n.setLocaleData.bind(i18n);

/**
 * Resets all current Tannin instance locale data and sets the specified
 * locale data for the domain. Accepts data in a Jed-formatted JSON object shape.
 *
 * @see http://messageformat.github.io/Jed/
 *
 * @param {LocaleData} [data]   Locale data configuration.
 * @param {string}     [domain] Domain for which configuration applies.
 */
const resetLocaleData = i18n.resetLocaleData.bind(i18n);

/**
 * Subscribes to changes of locale data
 *
 * @param {SubscribeCallback} callback Subscription callback
 * @return {UnsubscribeCallback} Unsubscribe callback
 */
const subscribe = i18n.subscribe.bind(i18n);

/**
 * Retrieve the translation of text.
 *
 * @see https://developer.wordpress.org/reference/functions/__/
 *
 * @param {string} text     Text to translate.
 * @param {string} [domain] Domain to retrieve the translated text.
 *
 * @return {string} Translated text.
 */
const __ = i18n.__.bind(i18n);

/**
 * Retrieve translated string with gettext context.
 *
 * @see https://developer.wordpress.org/reference/functions/_x/
 *
 * @param {string} text     Text to translate.
 * @param {string} context  Context information for the translators.
 * @param {string} [domain] Domain to retrieve the translated text.
 *
 * @return {string} Translated context string without pipe.
 */
const _x = i18n._x.bind(i18n);

/**
 * Translates and retrieves the singular or plural form based on the supplied
 * number.
 *
 * @see https://developer.wordpress.org/reference/functions/_n/
 *
 * @param {string} single   The text to be used if the number is singular.
 * @param {string} plural   The text to be used if the number is plural.
 * @param {number} number   The number to compare against to use either the
 *                          singular or plural form.
 * @param {string} [domain] Domain to retrieve the translated text.
 *
 * @return {string} The translated singular or plural form.
 */
const _n = i18n._n.bind(i18n);

/**
 * Translates and retrieves the singular or plural form based on the supplied
 * number, with gettext context.
 *
 * @see https://developer.wordpress.org/reference/functions/_nx/
 *
 * @param {string} single   The text to be used if the number is singular.
 * @param {string} plural   The text to be used if the number is plural.
 * @param {number} number   The number to compare against to use either the
 *                          singular or plural form.
 * @param {string} context  Context information for the translators.
 * @param {string} [domain] Domain to retrieve the translated text.
 *
 * @return {string} The translated singular or plural form.
 */
const _nx = i18n._nx.bind(i18n);

/**
 * Check if current locale is RTL.
 *
 * **RTL (Right To Left)** is a locale property indicating that text is written from right to left.
 * For example, the `he` locale (for Hebrew) specifies right-to-left. Arabic (ar) is another common
 * language written RTL. The opposite of RTL, LTR (Left To Right) is used in other languages,
 * including English (`en`, `en-US`, `en-GB`, etc.), Spanish (`es`), and French (`fr`).
 *
 * @return {boolean} Whether locale is RTL.
 */
const isRTL = i18n.isRTL.bind(i18n);

/**
 * Check if there is a translation for a given string (in singular form).
 *
 * @param {string} single    Singular form of the string to look up.
 * @param {string} [context] Context information for the translators.
 * @param {string} [domain]  Domain to retrieve the translated text.
 * @return {boolean} Whether the translation exists or not.
 */
const hasTranslation = i18n.hasTranslation.bind(i18n);
//# sourceMappingURL=default-i18n.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.10.0/node_modules/@wordpress/i18n/build-module/index.js



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/icon/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@3.4.1/node_modules/@wordpress/primitives/build-module/svg/index.js");
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

/***/ "../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/close-small.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@3.4.1/node_modules/@wordpress/primitives/build-module/svg/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * WordPress dependencies
 */


const closeSmall = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .SVG */ .t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .Path */ .wA, {
    d: "M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closeSmall);
//# sourceMappingURL=close-small.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/plus.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@3.4.1/node_modules/@wordpress/primitives/build-module/svg/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * WordPress dependencies
 */


const plus = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .SVG */ .t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .Path */ .wA, {
    d: "M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plus);
//# sourceMappingURL=plus.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.10.0/node_modules/@wordpress/is-shallow-equal/build-module/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

"use strict";
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

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+warning@3.10.0/node_modules/@wordpress/warning/build-module/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ warning)
});

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+warning@3.10.0/node_modules/@wordpress/warning/build-module/utils.js
/* wp:polyfill */
/**
 * Object map tracking messages which have been logged, for use in ensuring a
 * message is only logged once.
 */
const logged = new Set();
//# sourceMappingURL=utils.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+warning@3.10.0/node_modules/@wordpress/warning/build-module/index.js
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
 * @param message Message to show in the warning.
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

/***/ "../../node_modules/.pnpm/colord@2.9.3/node_modules/colord/index.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mj: () => (/* binding */ w),
/* harmony export */   X$: () => (/* binding */ k)
/* harmony export */ });
/* unused harmony exports Colord, getFormat, random */
var r={grad:.9,turn:360,rad:360/(2*Math.PI)},t=function(r){return"string"==typeof r?r.length>0:"number"==typeof r},n=function(r,t,n){return void 0===t&&(t=0),void 0===n&&(n=Math.pow(10,t)),Math.round(n*r)/n+0},e=function(r,t,n){return void 0===t&&(t=0),void 0===n&&(n=1),r>n?n:r>t?r:t},u=function(r){return(r=isFinite(r)?r%360:0)>0?r:r+360},a=function(r){return{r:e(r.r,0,255),g:e(r.g,0,255),b:e(r.b,0,255),a:e(r.a)}},o=function(r){return{r:n(r.r),g:n(r.g),b:n(r.b),a:n(r.a,3)}},i=/^#([0-9a-f]{3,8})$/i,s=function(r){var t=r.toString(16);return t.length<2?"0"+t:t},h=function(r){var t=r.r,n=r.g,e=r.b,u=r.a,a=Math.max(t,n,e),o=a-Math.min(t,n,e),i=o?a===t?(n-e)/o:a===n?2+(e-t)/o:4+(t-n)/o:0;return{h:60*(i<0?i+6:i),s:a?o/a*100:0,v:a/255*100,a:u}},b=function(r){var t=r.h,n=r.s,e=r.v,u=r.a;t=t/360*6,n/=100,e/=100;var a=Math.floor(t),o=e*(1-n),i=e*(1-(t-a)*n),s=e*(1-(1-t+a)*n),h=a%6;return{r:255*[e,i,o,o,s,e][h],g:255*[s,e,e,i,o,o][h],b:255*[o,o,s,e,e,i][h],a:u}},g=function(r){return{h:u(r.h),s:e(r.s,0,100),l:e(r.l,0,100),a:e(r.a)}},d=function(r){return{h:n(r.h),s:n(r.s),l:n(r.l),a:n(r.a,3)}},f=function(r){return b((n=(t=r).s,{h:t.h,s:(n*=((e=t.l)<50?e:100-e)/100)>0?2*n/(e+n)*100:0,v:e+n,a:t.a}));var t,n,e},c=function(r){return{h:(t=h(r)).h,s:(u=(200-(n=t.s))*(e=t.v)/100)>0&&u<200?n*e/100/(u<=100?u:200-u)*100:0,l:u/2,a:t.a};var t,n,e,u},l=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,p=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,v=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,m=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,y={string:[[function(r){var t=i.exec(r);return t?(r=t[1]).length<=4?{r:parseInt(r[0]+r[0],16),g:parseInt(r[1]+r[1],16),b:parseInt(r[2]+r[2],16),a:4===r.length?n(parseInt(r[3]+r[3],16)/255,2):1}:6===r.length||8===r.length?{r:parseInt(r.substr(0,2),16),g:parseInt(r.substr(2,2),16),b:parseInt(r.substr(4,2),16),a:8===r.length?n(parseInt(r.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(r){var t=v.exec(r)||m.exec(r);return t?t[2]!==t[4]||t[4]!==t[6]?null:a({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:void 0===t[7]?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(t){var n=l.exec(t)||p.exec(t);if(!n)return null;var e,u,a=g({h:(e=n[1],u=n[2],void 0===u&&(u="deg"),Number(e)*(r[u]||1)),s:Number(n[3]),l:Number(n[4]),a:void 0===n[5]?1:Number(n[5])/(n[6]?100:1)});return f(a)},"hsl"]],object:[[function(r){var n=r.r,e=r.g,u=r.b,o=r.a,i=void 0===o?1:o;return t(n)&&t(e)&&t(u)?a({r:Number(n),g:Number(e),b:Number(u),a:Number(i)}):null},"rgb"],[function(r){var n=r.h,e=r.s,u=r.l,a=r.a,o=void 0===a?1:a;if(!t(n)||!t(e)||!t(u))return null;var i=g({h:Number(n),s:Number(e),l:Number(u),a:Number(o)});return f(i)},"hsl"],[function(r){var n=r.h,a=r.s,o=r.v,i=r.a,s=void 0===i?1:i;if(!t(n)||!t(a)||!t(o))return null;var h=function(r){return{h:u(r.h),s:e(r.s,0,100),v:e(r.v,0,100),a:e(r.a)}}({h:Number(n),s:Number(a),v:Number(o),a:Number(s)});return b(h)},"hsv"]]},N=function(r,t){for(var n=0;n<t.length;n++){var e=t[n][0](r);if(e)return[e,t[n][1]]}return[null,void 0]},x=function(r){return"string"==typeof r?N(r.trim(),y.string):"object"==typeof r&&null!==r?N(r,y.object):[null,void 0]},I=function(r){return x(r)[1]},M=function(r,t){var n=c(r);return{h:n.h,s:e(n.s+100*t,0,100),l:n.l,a:n.a}},H=function(r){return(299*r.r+587*r.g+114*r.b)/1e3/255},$=function(r,t){var n=c(r);return{h:n.h,s:n.s,l:e(n.l+100*t,0,100),a:n.a}},j=function(){function r(r){this.parsed=x(r)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return r.prototype.isValid=function(){return null!==this.parsed},r.prototype.brightness=function(){return n(H(this.rgba),2)},r.prototype.isDark=function(){return H(this.rgba)<.5},r.prototype.isLight=function(){return H(this.rgba)>=.5},r.prototype.toHex=function(){return r=o(this.rgba),t=r.r,e=r.g,u=r.b,i=(a=r.a)<1?s(n(255*a)):"","#"+s(t)+s(e)+s(u)+i;var r,t,e,u,a,i},r.prototype.toRgb=function(){return o(this.rgba)},r.prototype.toRgbString=function(){return r=o(this.rgba),t=r.r,n=r.g,e=r.b,(u=r.a)<1?"rgba("+t+", "+n+", "+e+", "+u+")":"rgb("+t+", "+n+", "+e+")";var r,t,n,e,u},r.prototype.toHsl=function(){return d(c(this.rgba))},r.prototype.toHslString=function(){return r=d(c(this.rgba)),t=r.h,n=r.s,e=r.l,(u=r.a)<1?"hsla("+t+", "+n+"%, "+e+"%, "+u+")":"hsl("+t+", "+n+"%, "+e+"%)";var r,t,n,e,u},r.prototype.toHsv=function(){return r=h(this.rgba),{h:n(r.h),s:n(r.s),v:n(r.v),a:n(r.a,3)};var r},r.prototype.invert=function(){return w({r:255-(r=this.rgba).r,g:255-r.g,b:255-r.b,a:r.a});var r},r.prototype.saturate=function(r){return void 0===r&&(r=.1),w(M(this.rgba,r))},r.prototype.desaturate=function(r){return void 0===r&&(r=.1),w(M(this.rgba,-r))},r.prototype.grayscale=function(){return w(M(this.rgba,-1))},r.prototype.lighten=function(r){return void 0===r&&(r=.1),w($(this.rgba,r))},r.prototype.darken=function(r){return void 0===r&&(r=.1),w($(this.rgba,-r))},r.prototype.rotate=function(r){return void 0===r&&(r=15),this.hue(this.hue()+r)},r.prototype.alpha=function(r){return"number"==typeof r?w({r:(t=this.rgba).r,g:t.g,b:t.b,a:r}):n(this.rgba.a,3);var t},r.prototype.hue=function(r){var t=c(this.rgba);return"number"==typeof r?w({h:r,s:t.s,l:t.l,a:t.a}):n(t.h)},r.prototype.isEqual=function(r){return this.toHex()===w(r).toHex()},r}(),w=function(r){return r instanceof j?r:new j(r)},S=[],k=function(r){r.forEach(function(r){S.indexOf(r)<0&&(r(j,y),S.push(r))})},E=function(){return new j({r:255*Math.random(),g:255*Math.random(),b:255*Math.random()})};


/***/ }),

/***/ "../../node_modules/.pnpm/colord@2.9.3/node_modules/colord/plugins/names.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(e,f){var a={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},r={};for(var d in a)r[a[d]]=d;var l={};e.prototype.toName=function(f){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var d,i,n=r[this.toHex()];if(n)return n;if(null==f?void 0:f.closest){var o=this.toRgb(),t=1/0,b="black";if(!l.length)for(var c in a)l[c]=new e(a[c]).toRgb();for(var g in a){var u=(d=o,i=l[g],Math.pow(d.r-i.r,2)+Math.pow(d.g-i.g,2)+Math.pow(d.b-i.b,2));u<t&&(t=u,b=g)}return b}};f.string.push([function(f){var r=f.toLowerCase(),d="transparent"===r?"#0000":a[r];return d?new e(d).toRgb():null},"name"])}


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-for-each.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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

"use strict";

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

"use strict";

var fails = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-bind.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/a-callable.js");
var isObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/is-object.js");
var hasOwn = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/has-own-property.js");
var arraySlice = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-slice.js");
var NATIVE_BIND = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-bind-native.js");

var $Function = Function;
var concat = uncurryThis([].concat);
var join = uncurryThis([].join);
var factories = {};

var construct = function (C, argsLength, args) {
  if (!hasOwn(factories, argsLength)) {
    var list = [];
    var i = 0;
    for (; i < argsLength; i++) list[i] = 'a[' + i + ']';
    factories[argsLength] = $Function('C,a', 'return new C(' + join(list, ',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
// eslint-disable-next-line es/no-function-prototype-bind -- detection
module.exports = NATIVE_BIND ? $Function.bind : function bind(that /* , ...args */) {
  var F = aCallable(this);
  var Prototype = F.prototype;
  var partArgs = arraySlice(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = concat(partArgs, arraySlice(arguments));
    return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
  };
  if (isObject(Prototype)) boundFunction.prototype = Prototype;
  return boundFunction;
};


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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

"use strict";

var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var forEach = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach !== forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.bind.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4`
var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var bind = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-bind.js");

// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
// eslint-disable-next-line es/no-function-prototype-bind -- detection
$({ target: 'Function', proto: true, forced: Function.bind !== bind }, {
  bind: bind
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-properties.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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

"use strict";

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

"use strict";

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

"use strict";

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

"use strict";

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

"use strict";

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

/***/ "../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/set.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ set)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _setMonth_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setMonth.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/toDate.mjs");




/**
 * @name set
 * @category Common Helpers
 * @summary Set date values to a given date.
 *
 * @description
 * Set date values to a given date.
 *
 * Sets time values to date from object `values`.
 * A value is not set if it is undefined or null or doesn't exist in `values`.
 *
 * Note about bundle size: `set` does not internally use `setX` functions from date-fns but instead opts
 * to use native `Date#setX` methods. If you use this function, you may not want to include the
 * other `setX` functions that date-fns provides if you are concerned about the bundle size.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param values - The date values to be set
 *
 * @returns The new date with options set
 *
 * @example
 * // Transform 1 September 2014 into 20 October 2015 in a single line:
 * const result = set(new Date(2014, 8, 20), { year: 2015, month: 9, date: 20 })
 * //=> Tue Oct 20 2015 00:00:00
 *
 * @example
 * // Set 12 PM to 1 September 2014 01:23:45 to 1 September 2014 12:00:00:
 * const result = set(new Date(2014, 8, 1, 1, 23, 45), { hours: 12 })
 * //=> Mon Sep 01 2014 12:23:45
 */

function set(date, values) {
  let _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__/* .toDate */ .a)(date);

  // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
  if (isNaN(+_date)) {
    return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__/* .constructFrom */ .w)(date, NaN);
  }

  if (values.year != null) {
    _date.setFullYear(values.year);
  }

  if (values.month != null) {
    _date = (0,_setMonth_mjs__WEBPACK_IMPORTED_MODULE_2__/* .setMonth */ .Z)(_date, values.month);
  }

  if (values.date != null) {
    _date.setDate(values.date);
  }

  if (values.hours != null) {
    _date.setHours(values.hours);
  }

  if (values.minutes != null) {
    _date.setMinutes(values.minutes);
  }

  if (values.seconds != null) {
    _date.setSeconds(values.seconds);
  }

  if (values.milliseconds != null) {
    _date.setMilliseconds(values.milliseconds);
  }

  return _date;
}

// Fallback for modularized imports:
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (set)));


/***/ }),

/***/ "../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setMonth.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ setMonth)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/constructFrom.mjs
var constructFrom = __webpack_require__("../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/constructFrom.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/toDate.mjs
var toDate = __webpack_require__("../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/toDate.mjs");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/getDaysInMonth.mjs



/**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The number of days in a month
 *
 * @example
 * // How many days are in February 2000?
 * const result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */
function getDaysInMonth(date) {
  const _date = (0,toDate/* toDate */.a)(date);
  const year = _date.getFullYear();
  const monthIndex = _date.getMonth();
  const lastDayOfMonth = (0,constructFrom/* constructFrom */.w)(date, 0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate();
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_getDaysInMonth = ((/* unused pure expression or super */ null && (getDaysInMonth)));

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/setMonth.mjs




/**
 * @name setMonth
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param month - The month index to set (0-11)
 *
 * @returns The new date with the month set
 *
 * @example
 * // Set February to 1 September 2014:
 * const result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */
function setMonth(date, month) {
  const _date = (0,toDate/* toDate */.a)(date);
  const year = _date.getFullYear();
  const day = _date.getDate();

  const dateWithDesiredMonth = (0,constructFrom/* constructFrom */.w)(date, 0);
  dateWithDesiredMonth.setFullYear(year, month, 15);
  dateWithDesiredMonth.setHours(0, 0, 0, 0);
  const daysInMonth = getDaysInMonth(dateWithDesiredMonth);
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  _date.setMonth(month, Math.min(day, daysInMonth));
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_setMonth = ((/* unused pure expression or super */ null && (setMonth)));


/***/ }),

/***/ "../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfMinute.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ startOfMinute)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/toDate.mjs");


/**
 * @name startOfMinute
 * @category Minute Helpers
 * @summary Return the start of a minute for the given date.
 *
 * @description
 * Return the start of a minute for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a minute
 *
 * @example
 * // The start of a minute for 1 December 2014 22:15:45.400:
 * const result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:00
 */
function startOfMinute(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__/* .toDate */ .a)(date);
  _date.setSeconds(0, 0);
  return _date;
}

// Fallback for modularized imports:
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (startOfMinute)));


/***/ }),

/***/ "../../node_modules/.pnpm/highlight-words-core@1.2.2/node_modules/highlight-words-core/dist/index.js":
/***/ ((module) => {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_187__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_187__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_187__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_187__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_187__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_187__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __nested_webpack_require_1468__) {

	module.exports = __nested_webpack_require_1468__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __nested_webpack_require_1587__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __nested_webpack_require_1587__(2);
	
	Object.defineProperty(exports, 'combineChunks', {
	  enumerable: true,
	  get: function get() {
	    return _utils.combineChunks;
	  }
	});
	Object.defineProperty(exports, 'fillInChunks', {
	  enumerable: true,
	  get: function get() {
	    return _utils.fillInChunks;
	  }
	});
	Object.defineProperty(exports, 'findAll', {
	  enumerable: true,
	  get: function get() {
	    return _utils.findAll;
	  }
	});
	Object.defineProperty(exports, 'findChunks', {
	  enumerable: true,
	  get: function get() {
	    return _utils.findChunks;
	  }
	});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	
	/**
	 * Creates an array of chunk objects representing both higlightable and non highlightable pieces of text that match each search word.
	 * @return Array of "chunks" (where a Chunk is { start:number, end:number, highlight:boolean })
	 */
	var findAll = exports.findAll = function findAll(_ref) {
	  var autoEscape = _ref.autoEscape,
	      _ref$caseSensitive = _ref.caseSensitive,
	      caseSensitive = _ref$caseSensitive === undefined ? false : _ref$caseSensitive,
	      _ref$findChunks = _ref.findChunks,
	      findChunks = _ref$findChunks === undefined ? defaultFindChunks : _ref$findChunks,
	      sanitize = _ref.sanitize,
	      searchWords = _ref.searchWords,
	      textToHighlight = _ref.textToHighlight;
	  return fillInChunks({
	    chunksToHighlight: combineChunks({
	      chunks: findChunks({
	        autoEscape: autoEscape,
	        caseSensitive: caseSensitive,
	        sanitize: sanitize,
	        searchWords: searchWords,
	        textToHighlight: textToHighlight
	      })
	    }),
	    totalLength: textToHighlight ? textToHighlight.length : 0
	  });
	};
	
	/**
	 * Takes an array of {start:number, end:number} objects and combines chunks that overlap into single chunks.
	 * @return {start:number, end:number}[]
	 */
	
	
	var combineChunks = exports.combineChunks = function combineChunks(_ref2) {
	  var chunks = _ref2.chunks;
	
	  chunks = chunks.sort(function (first, second) {
	    return first.start - second.start;
	  }).reduce(function (processedChunks, nextChunk) {
	    // First chunk just goes straight in the array...
	    if (processedChunks.length === 0) {
	      return [nextChunk];
	    } else {
	      // ... subsequent chunks get checked to see if they overlap...
	      var prevChunk = processedChunks.pop();
	      if (nextChunk.start <= prevChunk.end) {
	        // It may be the case that prevChunk completely surrounds nextChunk, so take the
	        // largest of the end indeces.
	        var endIndex = Math.max(prevChunk.end, nextChunk.end);
	        processedChunks.push({ highlight: false, start: prevChunk.start, end: endIndex });
	      } else {
	        processedChunks.push(prevChunk, nextChunk);
	      }
	      return processedChunks;
	    }
	  }, []);
	
	  return chunks;
	};
	
	/**
	 * Examine text for any matches.
	 * If we find matches, add them to the returned array as a "chunk" object ({start:number, end:number}).
	 * @return {start:number, end:number}[]
	 */
	var defaultFindChunks = function defaultFindChunks(_ref3) {
	  var autoEscape = _ref3.autoEscape,
	      caseSensitive = _ref3.caseSensitive,
	      _ref3$sanitize = _ref3.sanitize,
	      sanitize = _ref3$sanitize === undefined ? defaultSanitize : _ref3$sanitize,
	      searchWords = _ref3.searchWords,
	      textToHighlight = _ref3.textToHighlight;
	
	  textToHighlight = sanitize(textToHighlight);
	
	  return searchWords.filter(function (searchWord) {
	    return searchWord;
	  }) // Remove empty words
	  .reduce(function (chunks, searchWord) {
	    searchWord = sanitize(searchWord);
	
	    if (autoEscape) {
	      searchWord = escapeRegExpFn(searchWord);
	    }
	
	    var regex = new RegExp(searchWord, caseSensitive ? 'g' : 'gi');
	
	    var match = void 0;
	    while (match = regex.exec(textToHighlight)) {
	      var _start = match.index;
	      var _end = regex.lastIndex;
	      // We do not return zero-length matches
	      if (_end > _start) {
	        chunks.push({ highlight: false, start: _start, end: _end });
	      }
	
	      // Prevent browsers like Firefox from getting stuck in an infinite loop
	      // See http://www.regexguru.com/2008/04/watch-out-for-zero-length-matches/
	      if (match.index === regex.lastIndex) {
	        regex.lastIndex++;
	      }
	    }
	
	    return chunks;
	  }, []);
	};
	// Allow the findChunks to be overridden in findAll,
	// but for backwards compatibility we export as the old name
	exports.findChunks = defaultFindChunks;
	
	/**
	 * Given a set of chunks to highlight, create an additional set of chunks
	 * to represent the bits of text between the highlighted text.
	 * @param chunksToHighlight {start:number, end:number}[]
	 * @param totalLength number
	 * @return {start:number, end:number, highlight:boolean}[]
	 */
	
	var fillInChunks = exports.fillInChunks = function fillInChunks(_ref4) {
	  var chunksToHighlight = _ref4.chunksToHighlight,
	      totalLength = _ref4.totalLength;
	
	  var allChunks = [];
	  var append = function append(start, end, highlight) {
	    if (end - start > 0) {
	      allChunks.push({
	        start: start,
	        end: end,
	        highlight: highlight
	      });
	    }
	  };
	
	  if (chunksToHighlight.length === 0) {
	    append(0, totalLength, false);
	  } else {
	    var lastIndex = 0;
	    chunksToHighlight.forEach(function (chunk) {
	      append(lastIndex, chunk.start, false);
	      append(chunk.start, chunk.end, true);
	      lastIndex = chunk.end;
	    });
	    append(lastIndex, totalLength, false);
	  }
	  return allChunks;
	};
	
	function defaultSanitize(string) {
	  return string;
	}
	
	function escapeRegExpFn(string) {
	  return string.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
	}

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


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

/***/ "../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";
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

"use strict";


if (true) {
  module.exports = __webpack_require__("../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js");
} else {}


/***/ })

}]);