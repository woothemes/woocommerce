"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[3505],{

/***/ "../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/22K762VQ.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ createCollectionStore)
/* harmony export */ });
/* harmony import */ var _EAHJFCU4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/EAHJFCU4.js");
/* harmony import */ var _Y3OOHFCN_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/Y3OOHFCN.js");
/* harmony import */ var _DLOEKDPY_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/DLOEKDPY.js");
/* harmony import */ var _4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/4R3V3JGP.js");
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
    if (elementA === elementB)
      return 0;
    if (!elementA || !elementB)
      return 0;
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
  return (0,_DLOEKDPY_js__WEBPACK_IMPORTED_MODULE_0__/* .getDocument */ .YE)(parentElement).body;
}
function getPrivateStore(store) {
  return store == null ? void 0 : store.__unstablePrivateStore;
}
function createCollectionStore(props = {}) {
  var _a;
  (0,_EAHJFCU4_js__WEBPACK_IMPORTED_MODULE_1__/* .throwOnConflictingProps */ .UE)(props, props.store);
  const syncState = (_a = props.store) == null ? void 0 : _a.getState();
  const items = (0,_Y3OOHFCN_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultValue */ .Jh)(
    props.items,
    syncState == null ? void 0 : syncState.items,
    props.defaultItems,
    []
  );
  const itemsMap = new Map(items.map((item) => [item.id, item]));
  const initialState = {
    items,
    renderedItems: (0,_Y3OOHFCN_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultValue */ .Jh)(syncState == null ? void 0 : syncState.renderedItems, [])
  };
  const syncPrivateStore = getPrivateStore(props.store);
  const privateStore = (0,_EAHJFCU4_js__WEBPACK_IMPORTED_MODULE_1__/* .createStore */ .y$)(
    { items, renderedItems: initialState.renderedItems },
    syncPrivateStore
  );
  const collection = (0,_EAHJFCU4_js__WEBPACK_IMPORTED_MODULE_1__/* .createStore */ .y$)(initialState, props.store);
  const sortItems = (renderedItems) => {
    const sortedItems = sortBasedOnDOMPosition(renderedItems);
    privateStore.setState("renderedItems", sortedItems);
    collection.setState("renderedItems", sortedItems);
  };
  (0,_EAHJFCU4_js__WEBPACK_IMPORTED_MODULE_1__/* .setup */ .mj)(collection, () => (0,_EAHJFCU4_js__WEBPACK_IMPORTED_MODULE_1__/* .init */ .Ts)(privateStore));
  (0,_EAHJFCU4_js__WEBPACK_IMPORTED_MODULE_1__/* .setup */ .mj)(privateStore, () => {
    return (0,_EAHJFCU4_js__WEBPACK_IMPORTED_MODULE_1__/* .batch */ .vA)(privateStore, ["items"], (state) => {
      collection.setState("items", state.items);
    });
  });
  (0,_EAHJFCU4_js__WEBPACK_IMPORTED_MODULE_1__/* .setup */ .mj)(privateStore, () => {
    return (0,_EAHJFCU4_js__WEBPACK_IMPORTED_MODULE_1__/* .batch */ .vA)(privateStore, ["renderedItems"], (state) => {
      let firstRun = true;
      let raf = requestAnimationFrame(() => {
        const { renderedItems } = collection.getState();
        if (state.renderedItems === renderedItems)
          return;
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
        if (!item.element)
          continue;
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
        const nextItem = (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__/* .__spreadValues */ .IA)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__/* .__spreadValues */ .IA)({}, prevItem), item);
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
        if (index === -1)
          return items2;
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
  return (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__/* .__spreadProps */ .ko)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__/* .__spreadValues */ .IA)({}, collection), {
    registerItem,
    renderItem: (item) => (0,_Y3OOHFCN_js__WEBPACK_IMPORTED_MODULE_2__/* .chain */ .cy)(
      registerItem(item),
      mergeItem(
        item,
        (getItems) => privateStore.setState("renderedItems", getItems)
      )
    ),
    item: (id) => {
      if (!id)
        return null;
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

/***/ "../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/7PRQYBBV.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M9: () => (/* binding */ flatten2DArray),
/* harmony export */   q7: () => (/* binding */ reverseArray)
/* harmony export */ });
/* unused harmony exports toArray, addItemToArray */
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

/***/ "../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/IERTEJ3A.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ createCompositeStore)
/* harmony export */ });
/* harmony import */ var _22K762VQ_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/22K762VQ.js");
/* harmony import */ var _EAHJFCU4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/EAHJFCU4.js");
/* harmony import */ var _Y3OOHFCN_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/Y3OOHFCN.js");
/* harmony import */ var _7PRQYBBV_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/7PRQYBBV.js");
/* harmony import */ var _4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/4R3V3JGP.js");
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
  if (orientation === "vertical")
    return "horizontal";
  if (orientation === "horizontal")
    return "vertical";
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
        verticalized.push((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_0__/* .__spreadProps */ .ko)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_0__/* .__spreadValues */ .IA)({}, item), {
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
  const collection = (0,_22K762VQ_js__WEBPACK_IMPORTED_MODULE_1__/* .createCollectionStore */ .I)(props);
  const activeId = (0,_Y3OOHFCN_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultValue */ .Jh)(
    props.activeId,
    syncState == null ? void 0 : syncState.activeId,
    props.defaultActiveId
  );
  const initialState = (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_0__/* .__spreadProps */ .ko)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_0__/* .__spreadValues */ .IA)({}, collection.getState()), {
    activeId,
    baseElement: (0,_Y3OOHFCN_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultValue */ .Jh)(syncState == null ? void 0 : syncState.baseElement, null),
    includesBaseElement: (0,_Y3OOHFCN_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultValue */ .Jh)(
      props.includesBaseElement,
      syncState == null ? void 0 : syncState.includesBaseElement,
      activeId === null
    ),
    moves: (0,_Y3OOHFCN_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultValue */ .Jh)(syncState == null ? void 0 : syncState.moves, 0),
    orientation: (0,_Y3OOHFCN_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultValue */ .Jh)(
      props.orientation,
      syncState == null ? void 0 : syncState.orientation,
      "both"
    ),
    rtl: (0,_Y3OOHFCN_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultValue */ .Jh)(props.rtl, syncState == null ? void 0 : syncState.rtl, false),
    virtualFocus: (0,_Y3OOHFCN_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultValue */ .Jh)(
      props.virtualFocus,
      syncState == null ? void 0 : syncState.virtualFocus,
      false
    ),
    focusLoop: (0,_Y3OOHFCN_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultValue */ .Jh)(props.focusLoop, syncState == null ? void 0 : syncState.focusLoop, false),
    focusWrap: (0,_Y3OOHFCN_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultValue */ .Jh)(props.focusWrap, syncState == null ? void 0 : syncState.focusWrap, false),
    focusShift: (0,_Y3OOHFCN_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultValue */ .Jh)(props.focusShift, syncState == null ? void 0 : syncState.focusShift, false)
  });
  const composite = (0,_EAHJFCU4_js__WEBPACK_IMPORTED_MODULE_3__/* .createStore */ .y$)(initialState, collection, props.store);
  (0,_EAHJFCU4_js__WEBPACK_IMPORTED_MODULE_3__/* .setup */ .mj)(
    composite,
    () => (0,_EAHJFCU4_js__WEBPACK_IMPORTED_MODULE_3__/* .sync */ .OH)(composite, ["renderedItems", "activeId"], (state) => {
      composite.setState("activeId", (activeId2) => {
        var _a2;
        if (activeId2 !== void 0)
          return activeId2;
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
  return (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_0__/* .__spreadProps */ .ko)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_0__/* .__spreadValues */ .IA)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_0__/* .__spreadValues */ .IA)({}, collection), composite), {
    setBaseElement: (element) => composite.setState("baseElement", element),
    setActiveId: (id) => composite.setState("activeId", id),
    move: (id) => {
      if (id === void 0)
        return;
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

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3IEDWLST.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Qh: () => (/* binding */ silentlyFocused),
/* harmony export */   WZ: () => (/* binding */ isItem),
/* harmony export */   _d: () => (/* binding */ flipItems),
/* harmony export */   es: () => (/* binding */ groupItemsByRows),
/* harmony export */   hZ: () => (/* binding */ getEnabledItem),
/* harmony export */   hk: () => (/* binding */ focusSilently),
/* harmony export */   oi: () => (/* binding */ findFirstEnabledItem)
/* harmony export */ });
/* unused harmony export selectTextField */
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
  if (!id)
    return null;
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
  if (isTextField(element)) {
    element.setSelectionRange(
      collapseToEnd ? element.value.length : 0,
      element.value.length
    );
  } else if (element.isContentEditable) {
    const selection = getDocument(element).getSelection();
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
  if (!element)
    return false;
  if (element === exclude)
    return false;
  const item = store.item(element.id);
  if (!item)
    return false;
  if (exclude && item.element === exclude)
    return false;
  return true;
}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4UUKJZ4V.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $I: () => (/* binding */ useCollectionContext),
/* harmony export */   LN: () => (/* binding */ CollectionContextProvider),
/* harmony export */   zX: () => (/* binding */ CollectionScopedContextProvider)
/* harmony export */ });
/* unused harmony exports useCollectionScopedContext, useCollectionProviderContext */
/* harmony import */ var _3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js");
"use client";


// src/collection/collection-context.tsx
var ctx = (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_0__/* .createStoreContext */ .B0)();
var useCollectionContext = ctx.useContext;
var useCollectionScopedContext = ctx.useScopedContext;
var useCollectionProviderContext = ctx.useProviderContext;
var CollectionContextProvider = ctx.ContextProvider;
var CollectionScopedContextProvider = ctx.ScopedContextProvider;




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/7GBW5FLS.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* binding */ useCompositeStore),
  Y: () => (/* binding */ useCompositeStoreProps)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/EKQEJRUF.js
var EKQEJRUF = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/EKQEJRUF.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js
var _6O5OEQGF = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/Y6GYTNQ2.js
"use client";



// src/collection/collection-store.ts

function useCollectionStoreProps(store, update, props) {
  (0,_6O5OEQGF/* useUpdateEffect */.w5)(update, [props.store]);
  (0,EKQEJRUF/* useStoreProps */.Tz)(store, props, "items", "setItems");
  return store;
}
function useCollectionStore(props = {}) {
  const [store, update] = useStore(Core.createCollectionStore, props);
  return useCollectionStoreProps(store, update, props);
}



// EXTERNAL MODULE: ../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/IERTEJ3A.js
var IERTEJ3A = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/IERTEJ3A.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/7GBW5FLS.js
"use client";



// src/composite/composite-store.ts

function useCompositeStoreProps(store, update, props) {
  store = useCollectionStoreProps(store, update, props);
  (0,EKQEJRUF/* useStoreProps */.Tz)(store, props, "activeId", "setActiveId");
  (0,EKQEJRUF/* useStoreProps */.Tz)(store, props, "includesBaseElement");
  (0,EKQEJRUF/* useStoreProps */.Tz)(store, props, "virtualFocus");
  (0,EKQEJRUF/* useStoreProps */.Tz)(store, props, "orientation");
  (0,EKQEJRUF/* useStoreProps */.Tz)(store, props, "rtl");
  (0,EKQEJRUF/* useStoreProps */.Tz)(store, props, "focusLoop");
  (0,EKQEJRUF/* useStoreProps */.Tz)(store, props, "focusWrap");
  (0,EKQEJRUF/* useStoreProps */.Tz)(store, props, "focusShift");
  return store;
}
function useCompositeStore(props = {}) {
  const [store, update] = (0,EKQEJRUF/* useStore */.Pj)(IERTEJ3A/* createCompositeStore */.z, props);
  return useCompositeStoreProps(store, update, props);
}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/7QTPYGNZ.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ useComposite),
/* harmony export */   e: () => (/* binding */ Composite)
/* harmony export */ });
/* harmony import */ var _3IEDWLST_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3IEDWLST.js");
/* harmony import */ var _IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/IB7YUKH5.js");
/* harmony import */ var _KK7H3W2B_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/KK7H3W2B.js");
/* harmony import */ var _3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js");
/* harmony import */ var _6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js");
/* harmony import */ var _4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _ariakit_core_utils_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/7PRQYBBV.js");
/* harmony import */ var _ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/DLOEKDPY.js");
/* harmony import */ var _ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/utils/events.js");
/* harmony import */ var _ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/utils/focus.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/Y3OOHFCN.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
"use client";







// src/composite/composite.tsx







function isGrid(items) {
  return items.some((item) => !!item.rowId);
}
function isPrintableKey(event) {
  const target = event.target;
  if (target && !(0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__/* .isTextField */ .mB)(target))
    return false;
  return event.key.length === 1 && !event.ctrlKey && !event.metaKey;
}
function isModifierKey(event) {
  return event.key === "Shift" || event.key === "Control" || event.key === "Alt" || event.key === "Meta";
}
function useKeyboardEventProxy(store, onKeyboardEvent, previousElementRef) {
  return (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_3__/* .useEvent */ ._q)((event) => {
    var _a;
    onKeyboardEvent == null ? void 0 : onKeyboardEvent(event);
    if (event.defaultPrevented)
      return;
    if (event.isPropagationStopped())
      return;
    if (!(0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__/* .isSelfTarget */ .uh)(event))
      return;
    if (isModifierKey(event))
      return;
    if (isPrintableKey(event))
      return;
    const state = store.getState();
    const activeElement = (_a = (0,_3IEDWLST_js__WEBPACK_IMPORTED_MODULE_5__/* .getEnabledItem */ .hZ)(store, state.activeId)) == null ? void 0 : _a.element;
    if (!activeElement)
      return;
    const _b = event, { view } = _b, eventInit = (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_6__/* .__objRest */ .YG)(_b, ["view"]);
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
  return (0,_3IEDWLST_js__WEBPACK_IMPORTED_MODULE_5__/* .findFirstEnabledItem */ .oi)(
    (0,_ariakit_core_utils_array__WEBPACK_IMPORTED_MODULE_7__/* .flatten2DArray */ .M9)((0,_ariakit_core_utils_array__WEBPACK_IMPORTED_MODULE_7__/* .reverseArray */ .q7)((0,_3IEDWLST_js__WEBPACK_IMPORTED_MODULE_5__/* .groupItemsByRows */ .es)(items)))
  );
}
function useScheduleFocus(store) {
  const [scheduled, setScheduled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const schedule = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => setScheduled(true), []);
  const activeItem = store.useState(
    (state) => (0,_3IEDWLST_js__WEBPACK_IMPORTED_MODULE_5__/* .getEnabledItem */ .hZ)(store, state.activeId)
  );
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const activeElement = activeItem == null ? void 0 : activeItem.element;
    if (!scheduled)
      return;
    if (!activeElement)
      return;
    setScheduled(false);
    activeElement.focus({ preventScroll: true });
  }, [activeItem, scheduled]);
  return schedule;
}
var useComposite = (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_8__/* .createHook */ .ab)(
  (_a) => {
    var _b = _a, {
      store,
      composite = true,
      focusOnMove = composite,
      moveOnKeyPress = true
    } = _b, props = (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_6__/* .__objRest */ .YG)(_b, [
      "store",
      "composite",
      "focusOnMove",
      "moveOnKeyPress"
    ]);
    const context = (0,_IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_9__/* .useCompositeProviderContext */ .Lf)();
    store = store || context;
    (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_10__/* .invariant */ .V1)(
      store,
       false && 0
    );
    const previousElementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const scheduleFocus = useScheduleFocus(store);
    const moves = store.useState("moves");
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      var _a2;
      if (!store)
        return;
      if (!moves)
        return;
      if (!composite)
        return;
      if (!focusOnMove)
        return;
      const { activeId: activeId2 } = store.getState();
      const itemElement = (_a2 = (0,_3IEDWLST_js__WEBPACK_IMPORTED_MODULE_5__/* .getEnabledItem */ .hZ)(store, activeId2)) == null ? void 0 : _a2.element;
      if (!itemElement)
        return;
      (0,_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_11__/* .focusIntoView */ .WA)(itemElement);
    }, [store, moves, composite, focusOnMove]);
    (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_3__/* .useSafeLayoutEffect */ .UQ)(() => {
      if (!store)
        return;
      if (!moves)
        return;
      if (!composite)
        return;
      const { baseElement, activeId: activeId2 } = store.getState();
      const isSelfAcive = activeId2 === null;
      if (!isSelfAcive)
        return;
      if (!baseElement)
        return;
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
    (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_3__/* .useSafeLayoutEffect */ .UQ)(() => {
      var _a2;
      if (!store)
        return;
      if (!composite)
        return;
      if (!virtualFocus)
        return;
      const previousElement = previousElementRef.current;
      previousElementRef.current = null;
      if (!previousElement)
        return;
      const activeElement = (_a2 = (0,_3IEDWLST_js__WEBPACK_IMPORTED_MODULE_5__/* .getEnabledItem */ .hZ)(store, activeId)) == null ? void 0 : _a2.element;
      const relatedTarget = activeElement || (0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__/* .getActiveElement */ .bq)(previousElement);
      if (relatedTarget === previousElement)
        return;
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
    const onFocusCapture = (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_3__/* .useEvent */ ._q)((event) => {
      onFocusCaptureProp == null ? void 0 : onFocusCaptureProp(event);
      if (event.defaultPrevented)
        return;
      if (!store)
        return;
      const { virtualFocus: virtualFocus2 } = store.getState();
      if (!virtualFocus2)
        return;
      const previousActiveElement = event.relatedTarget;
      const isSilentlyFocused = (0,_3IEDWLST_js__WEBPACK_IMPORTED_MODULE_5__/* .silentlyFocused */ .Qh)(event.currentTarget);
      if ((0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__/* .isSelfTarget */ .uh)(event) && isSilentlyFocused) {
        event.stopPropagation();
        previousElementRef.current = previousActiveElement;
      }
    });
    const onFocusProp = props.onFocus;
    const onFocus = (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_3__/* .useEvent */ ._q)((event) => {
      onFocusProp == null ? void 0 : onFocusProp(event);
      if (event.defaultPrevented)
        return;
      if (!composite)
        return;
      if (!store)
        return;
      const { relatedTarget } = event;
      const { virtualFocus: virtualFocus2 } = store.getState();
      if (virtualFocus2) {
        if ((0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__/* .isSelfTarget */ .uh)(event) && !(0,_3IEDWLST_js__WEBPACK_IMPORTED_MODULE_5__/* .isItem */ .WZ)(store, relatedTarget)) {
          queueMicrotask(scheduleFocus);
        }
      } else if ((0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__/* .isSelfTarget */ .uh)(event)) {
        store.setActiveId(null);
      }
    });
    const onBlurCaptureProp = props.onBlurCapture;
    const onBlurCapture = (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_3__/* .useEvent */ ._q)((event) => {
      var _a2;
      onBlurCaptureProp == null ? void 0 : onBlurCaptureProp(event);
      if (event.defaultPrevented)
        return;
      if (!store)
        return;
      const { virtualFocus: virtualFocus2, activeId: activeId2 } = store.getState();
      if (!virtualFocus2)
        return;
      const activeElement = (_a2 = (0,_3IEDWLST_js__WEBPACK_IMPORTED_MODULE_5__/* .getEnabledItem */ .hZ)(store, activeId2)) == null ? void 0 : _a2.element;
      const nextActiveElement = event.relatedTarget;
      const nextActiveElementIsItem = (0,_3IEDWLST_js__WEBPACK_IMPORTED_MODULE_5__/* .isItem */ .WZ)(store, nextActiveElement);
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
        const targetIsItem = (0,_3IEDWLST_js__WEBPACK_IMPORTED_MODULE_5__/* .isItem */ .WZ)(store, event.target);
        if (!targetIsItem && activeElement) {
          (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__/* .fireBlurEvent */ .c$)(activeElement, event);
        }
      }
    });
    const onKeyDownProp = props.onKeyDown;
    const moveOnKeyPressProp = (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_3__/* .useBooleanEvent */ .O4)(moveOnKeyPress);
    const onKeyDown = (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_3__/* .useEvent */ ._q)((event) => {
      var _a2;
      onKeyDownProp == null ? void 0 : onKeyDownProp(event);
      if (event.defaultPrevented)
        return;
      if (!store)
        return;
      if (!(0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__/* .isSelfTarget */ .uh)(event))
        return;
      const { orientation, items, renderedItems, activeId: activeId2 } = store.getState();
      const activeItem = (0,_3IEDWLST_js__WEBPACK_IMPORTED_MODULE_5__/* .getEnabledItem */ .hZ)(store, activeId2);
      if ((_a2 = activeItem == null ? void 0 : activeItem.element) == null ? void 0 : _a2.isConnected)
        return;
      const isVertical = orientation !== "horizontal";
      const isHorizontal = orientation !== "vertical";
      const grid = isGrid(renderedItems);
      const isHorizontalKey = event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === "Home" || event.key === "End";
      if (isHorizontalKey && (0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__/* .isTextField */ .mB)(event.currentTarget))
        return;
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
          if (!moveOnKeyPressProp(event))
            return;
          event.preventDefault();
          store.move(id);
        }
      }
    });
    props = (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_3__/* .useWrapElement */ .w7)(
      props,
      (element) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_9__/* .CompositeContextProvider */ .ws, { value: store, children: element }),
      [store]
    );
    const activeDescendant = store.useState((state) => {
      var _a2;
      if (!store)
        return;
      if (!composite)
        return;
      if (!state.virtualFocus)
        return;
      return (_a2 = (0,_3IEDWLST_js__WEBPACK_IMPORTED_MODULE_5__/* .getEnabledItem */ .hZ)(store, state.activeId)) == null ? void 0 : _a2.id;
    });
    props = (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_6__/* .__spreadProps */ .ko)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_6__/* .__spreadValues */ .IA)({
      "aria-activedescendant": activeDescendant
    }, props), {
      ref: (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_3__/* .useMergeRefs */ .SV)(composite ? store.setBaseElement : null, props.ref),
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
    props = (0,_KK7H3W2B_js__WEBPACK_IMPORTED_MODULE_12__/* .useFocusable */ .W)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_6__/* .__spreadValues */ .IA)({ focusable }, props));
    return props;
  }
);
var Composite = (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_8__/* .createComponent */ .a0)((props) => {
  const htmlProps = useComposite(props);
  return (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_8__/* .createElement */ .n)("div", htmlProps);
});
if (false) {}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/IB7YUKH5.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $o: () => (/* binding */ CompositeRowContext),
/* harmony export */   Lf: () => (/* binding */ useCompositeProviderContext),
/* harmony export */   U0: () => (/* binding */ CompositeItemContext),
/* harmony export */   aN: () => (/* binding */ CompositeScopedContextProvider),
/* harmony export */   k: () => (/* binding */ useCompositeContext),
/* harmony export */   ws: () => (/* binding */ CompositeContextProvider)
/* harmony export */ });
/* unused harmony export useCompositeScopedContext */
/* harmony import */ var _4UUKJZ4V_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4UUKJZ4V.js");
/* harmony import */ var _3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
"use client";



// src/composite/composite-context.tsx

var ctx = (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__/* .createStoreContext */ .B0)(
  [_4UUKJZ4V_js__WEBPACK_IMPORTED_MODULE_2__/* .CollectionContextProvider */ .LN],
  [_4UUKJZ4V_js__WEBPACK_IMPORTED_MODULE_2__/* .CollectionScopedContextProvider */ .zX]
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

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/NWCBQ4CV.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ useCommand)
/* harmony export */ });
/* unused harmony export Command */
/* harmony import */ var _KK7H3W2B_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/KK7H3W2B.js");
/* harmony import */ var _3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js");
/* harmony import */ var _6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js");
/* harmony import */ var _4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/DLOEKDPY.js");
/* harmony import */ var _ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/utils/events.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/Y3OOHFCN.js");
/* harmony import */ var _ariakit_core_utils_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/MHPO2BXA.js");
"use client";





// src/command/command.ts





function isNativeClick(event) {
  if (!event.isTrusted)
    return false;
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
var useCommand = (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_2__/* .createHook */ .ab)(
  (_a) => {
    var _b = _a, { clickOnEnter = true, clickOnSpace = true } = _b, props = (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__/* .__objRest */ .YG)(_b, ["clickOnEnter", "clickOnSpace"]);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const tagName = (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_4__/* .useTagName */ .vO)(ref, props.as);
    const type = props.type;
    const [isNativeButton, setIsNativeButton] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(
      () => !!tagName && (0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_1__/* .isButton */ .Bm)({ tagName, type })
    );
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      if (!ref.current)
        return;
      setIsNativeButton((0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_1__/* .isButton */ .Bm)(ref.current));
    }, []);
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const activeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const disabled = (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__/* .disabledFromProps */ .$f)(props);
    const [isDuplicate, metadataProps] = (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_4__/* .useMetadataProps */ .P1)(props, symbol, true);
    const onKeyDownProp = props.onKeyDown;
    const onKeyDown = (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_4__/* .useEvent */ ._q)((event) => {
      onKeyDownProp == null ? void 0 : onKeyDownProp(event);
      const element = event.currentTarget;
      if (event.defaultPrevented)
        return;
      if (isDuplicate)
        return;
      if (disabled)
        return;
      if (!(0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_6__/* .isSelfTarget */ .uh)(event))
        return;
      if ((0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_1__/* .isTextField */ .mB)(element))
        return;
      if (element.isContentEditable)
        return;
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
            const _a2 = event, { view } = _a2, eventInit = (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__/* .__objRest */ .YG)(_a2, ["view"]);
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
    const onKeyUp = (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_4__/* .useEvent */ ._q)((event) => {
      onKeyUpProp == null ? void 0 : onKeyUpProp(event);
      if (event.defaultPrevented)
        return;
      if (isDuplicate)
        return;
      if (disabled)
        return;
      if (event.metaKey)
        return;
      const isSpace = clickOnSpace && event.key === " ";
      if (activeRef.current && isSpace) {
        activeRef.current = false;
        if (!isNativeClick(event)) {
          event.preventDefault();
          setActive(false);
          const element = event.currentTarget;
          const _a2 = event, { view } = _a2, eventInit = (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__/* .__objRest */ .YG)(_a2, ["view"]);
          queueMicrotask(() => (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_6__/* .fireClickEvent */ .hY)(element, eventInit));
        }
      }
    });
    props = (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__/* .__spreadProps */ .ko)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__/* .__spreadValues */ .IA)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__/* .__spreadValues */ .IA)({
      "data-active": active ? "" : void 0,
      type: isNativeButton ? "button" : void 0
    }, metadataProps), props), {
      ref: (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_4__/* .useMergeRefs */ .SV)(ref, props.ref),
      onKeyDown,
      onKeyUp
    });
    props = (0,_KK7H3W2B_js__WEBPACK_IMPORTED_MODULE_8__/* .useFocusable */ .W)(props);
    return props;
  }
);
var Command = (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_2__/* .createComponent */ .a0)((props) => {
  props = useCommand(props);
  return (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_2__/* .createElement */ .n)("button", props);
});
if (false) {}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/QZLXIDNP.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ useCompositeItem),
/* harmony export */   l: () => (/* binding */ CompositeItem)
/* harmony export */ });
/* harmony import */ var _NWCBQ4CV_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/NWCBQ4CV.js");
/* harmony import */ var _UH3I23HL_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/UH3I23HL.js");
/* harmony import */ var _3IEDWLST_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3IEDWLST.js");
/* harmony import */ var _IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/IB7YUKH5.js");
/* harmony import */ var _3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js");
/* harmony import */ var _EKQEJRUF_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/EKQEJRUF.js");
/* harmony import */ var _6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js");
/* harmony import */ var _4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/DLOEKDPY.js");
/* harmony import */ var _ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/utils/events.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/Y3OOHFCN.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
"use client";









// src/composite/composite-item.tsx





function isEditableElement(element) {
  if (element.isContentEditable)
    return true;
  if ((0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__/* .isTextField */ .mB)(element))
    return true;
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
  if (!store)
    return;
  if (!next)
    return;
  const { renderedItems } = store.getState();
  const scrollingElement = (0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__/* .getScrollingElement */ .qj)(element);
  if (!scrollingElement)
    return;
  const nextPageOffset = getNextPageOffset(scrollingElement, pageUp);
  let id;
  let prevDifference;
  for (let i = 0; i < renderedItems.length; i += 1) {
    const previousId = id;
    id = next(i);
    if (!id)
      break;
    if (id === previousId)
      continue;
    const itemElement = (_a = (0,_3IEDWLST_js__WEBPACK_IMPORTED_MODULE_3__/* .getEnabledItem */ .hZ)(store, id)) == null ? void 0 : _a.element;
    if (!itemElement)
      continue;
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
  if ((0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__/* .isSelfTarget */ .uh)(event))
    return false;
  return (0,_3IEDWLST_js__WEBPACK_IMPORTED_MODULE_3__/* .isItem */ .WZ)(store, event.target);
}
function useRole(ref, props) {
  const roleProp = props.role;
  const [role, setRole] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(roleProp);
  (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_5__/* .useSafeLayoutEffect */ .UQ)(() => {
    const element = ref.current;
    if (!element)
      return;
    setRole(element.getAttribute("role") || roleProp);
  }, [roleProp]);
  return role;
}
function requiresAriaSelected(role) {
  return role === "option" || role === "treeitem";
}
function supportsAriaSelected(role) {
  if (role === "option")
    return true;
  if (role === "tab")
    return true;
  if (role === "treeitem")
    return true;
  if (role === "gridcell")
    return true;
  if (role === "row")
    return true;
  if (role === "columnheader")
    return true;
  if (role === "rowheader")
    return true;
  return false;
}
var useCompositeItem = (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_6__/* .createHook */ .ab)(
  (_a) => {
    var _b = _a, {
      store,
      rowId: rowIdProp,
      preventScrollOnKeyDown = false,
      moveOnKeyPress = true,
      tabbable = false,
      getItem: getItemProp,
      "aria-setsize": ariaSetSizeProp,
      "aria-posinset": ariaPosInSetProp
    } = _b, props = (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_7__/* .__objRest */ .YG)(_b, [
      "store",
      "rowId",
      "preventScrollOnKeyDown",
      "moveOnKeyPress",
      "tabbable",
      "getItem",
      "aria-setsize",
      "aria-posinset"
    ]);
    const context = (0,_IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_8__/* .useCompositeContext */ .k)();
    store = store || context;
    const id = (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_5__/* .useId */ .Bi)(props.id);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const row = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_8__/* .CompositeRowContext */ .$o);
    const rowId = (0,_EKQEJRUF_js__WEBPACK_IMPORTED_MODULE_9__/* .useStoreState */ .O$)(store, (state) => {
      if (rowIdProp)
        return rowIdProp;
      if (!state)
        return;
      if (!(row == null ? void 0 : row.baseElement))
        return;
      if (row.baseElement !== state.baseElement)
        return;
      return row.id;
    });
    const disabled = (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_10__/* .disabledFromProps */ .$f)(props);
    const trulyDisabled = disabled && !props.accessibleWhenDisabled;
    const getItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
      (item) => {
        const nextItem = (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_7__/* .__spreadProps */ .ko)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_7__/* .__spreadValues */ .IA)({}, item), {
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
    const onFocus = (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_5__/* .useEvent */ ._q)((event) => {
      onFocusProp == null ? void 0 : onFocusProp(event);
      if (event.defaultPrevented)
        return;
      if ((0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__/* .isPortalEvent */ .ho)(event))
        return;
      if (!id)
        return;
      if (!store)
        return;
      const { activeId, virtualFocus: virtualFocus2, baseElement: baseElement2 } = store.getState();
      if (targetIsAnotherItem(event, store))
        return;
      if (activeId !== id) {
        store.setActiveId(id);
      }
      if (!virtualFocus2)
        return;
      if (!(0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__/* .isSelfTarget */ .uh)(event))
        return;
      if (isEditableElement(event.currentTarget))
        return;
      if (!(baseElement2 == null ? void 0 : baseElement2.isConnected))
        return;
      hasFocusedComposite.current = true;
      const fromComposite = event.relatedTarget === baseElement2 || (0,_3IEDWLST_js__WEBPACK_IMPORTED_MODULE_3__/* .isItem */ .WZ)(store, event.relatedTarget);
      if (fromComposite) {
        (0,_3IEDWLST_js__WEBPACK_IMPORTED_MODULE_3__/* .focusSilently */ .hk)(baseElement2);
      } else {
        baseElement2.focus();
      }
    });
    const onBlurCaptureProp = props.onBlurCapture;
    const onBlurCapture = (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_5__/* .useEvent */ ._q)((event) => {
      onBlurCaptureProp == null ? void 0 : onBlurCaptureProp(event);
      if (event.defaultPrevented)
        return;
      const state = store == null ? void 0 : store.getState();
      if ((state == null ? void 0 : state.virtualFocus) && hasFocusedComposite.current) {
        hasFocusedComposite.current = false;
        event.preventDefault();
        event.stopPropagation();
      }
    });
    const onKeyDownProp = props.onKeyDown;
    const preventScrollOnKeyDownProp = (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_5__/* .useBooleanEvent */ .O4)(preventScrollOnKeyDown);
    const moveOnKeyPressProp = (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_5__/* .useBooleanEvent */ .O4)(moveOnKeyPress);
    const onKeyDown = (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_5__/* .useEvent */ ._q)((event) => {
      onKeyDownProp == null ? void 0 : onKeyDownProp(event);
      if (event.defaultPrevented)
        return;
      if (!(0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__/* .isSelfTarget */ .uh)(event))
        return;
      if (!store)
        return;
      const { currentTarget } = event;
      const state = store.getState();
      const item = store.item(id);
      const isGrid = !!(item == null ? void 0 : item.rowId);
      const isVertical = state.orientation !== "horizontal";
      const isHorizontal = state.orientation !== "vertical";
      const canHomeEnd = () => {
        if (isGrid)
          return true;
        if (isHorizontal)
          return true;
        if (!state.baseElement)
          return true;
        if (!(0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__/* .isTextField */ .mB)(state.baseElement))
          return true;
        return false;
      };
      const keyMap = {
        ArrowUp: (isGrid || isVertical) && store.up,
        ArrowRight: (isGrid || isHorizontal) && store.next,
        ArrowDown: (isGrid || isVertical) && store.down,
        ArrowLeft: (isGrid || isHorizontal) && store.previous,
        Home: () => {
          if (!canHomeEnd())
            return;
          if (!isGrid || event.ctrlKey) {
            return store == null ? void 0 : store.first();
          }
          return store == null ? void 0 : store.previous(-1);
        },
        End: () => {
          if (!canHomeEnd())
            return;
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
        const nextId = action();
        if (preventScrollOnKeyDownProp(event) || nextId !== void 0) {
          if (!moveOnKeyPressProp(event))
            return;
          event.preventDefault();
          store.move(nextId);
        }
      }
    });
    const baseElement = (0,_EKQEJRUF_js__WEBPACK_IMPORTED_MODULE_9__/* .useStoreState */ .O$)(
      store,
      (state) => (state == null ? void 0 : state.baseElement) || void 0
    );
    const providerValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
      () => ({ id, baseElement }),
      [id, baseElement]
    );
    props = (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_5__/* .useWrapElement */ .w7)(
      props,
      (element) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_8__/* .CompositeItemContext */ .U0.Provider, { value: providerValue, children: element }),
      [providerValue]
    );
    const isActiveItem = (0,_EKQEJRUF_js__WEBPACK_IMPORTED_MODULE_9__/* .useStoreState */ .O$)(
      store,
      (state) => !!state && state.activeId === id
    );
    const virtualFocus = (0,_EKQEJRUF_js__WEBPACK_IMPORTED_MODULE_9__/* .useStoreState */ .O$)(store, "virtualFocus");
    const role = useRole(ref, props);
    let ariaSelected;
    if (isActiveItem) {
      if (requiresAriaSelected(role)) {
        ariaSelected = true;
      } else if (virtualFocus && supportsAriaSelected(role)) {
        ariaSelected = true;
      }
    }
    const ariaSetSize = (0,_EKQEJRUF_js__WEBPACK_IMPORTED_MODULE_9__/* .useStoreState */ .O$)(store, (state) => {
      if (ariaSetSizeProp != null)
        return ariaSetSizeProp;
      if (!state)
        return;
      if (!(row == null ? void 0 : row.ariaSetSize))
        return;
      if (row.baseElement !== state.baseElement)
        return;
      return row.ariaSetSize;
    });
    const ariaPosInSet = (0,_EKQEJRUF_js__WEBPACK_IMPORTED_MODULE_9__/* .useStoreState */ .O$)(store, (state) => {
      if (ariaPosInSetProp != null)
        return ariaPosInSetProp;
      if (!state)
        return;
      if (!(row == null ? void 0 : row.ariaPosInSet))
        return;
      if (row.baseElement !== state.baseElement)
        return;
      const itemsInRow = state.renderedItems.filter(
        (item) => item.rowId === rowId
      );
      return row.ariaPosInSet + itemsInRow.findIndex((item) => item.id === id);
    });
    const isTabbable = (0,_EKQEJRUF_js__WEBPACK_IMPORTED_MODULE_9__/* .useStoreState */ .O$)(store, (state) => {
      if (!(state == null ? void 0 : state.renderedItems.length))
        return true;
      if (state.virtualFocus)
        return false;
      if (tabbable)
        return true;
      return state.activeId === id;
    });
    props = (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_7__/* .__spreadProps */ .ko)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_7__/* .__spreadValues */ .IA)({
      id,
      "aria-selected": ariaSelected,
      "data-active-item": isActiveItem ? "" : void 0
    }, props), {
      ref: (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_5__/* .useMergeRefs */ .SV)(ref, props.ref),
      tabIndex: isTabbable ? props.tabIndex : -1,
      onFocus,
      onBlurCapture,
      onKeyDown
    });
    props = (0,_NWCBQ4CV_js__WEBPACK_IMPORTED_MODULE_11__/* .useCommand */ .D)(props);
    props = (0,_UH3I23HL_js__WEBPACK_IMPORTED_MODULE_12__/* .useCollectionItem */ .v)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_7__/* .__spreadProps */ .ko)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_7__/* .__spreadValues */ .IA)({
      store
    }, props), {
      getItem,
      shouldRegisterItem: !!id ? props.shouldRegisterItem : false
    }));
    return (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_7__/* .__spreadProps */ .ko)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_7__/* .__spreadValues */ .IA)({}, props), {
      "aria-setsize": ariaSetSize,
      "aria-posinset": ariaPosInSet
    });
  }
);
var CompositeItem = (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_6__/* .createMemoComponent */ .MA)(
  (props) => {
    const htmlProps = useCompositeItem(props);
    return (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_6__/* .createElement */ .n)("button", htmlProps);
  }
);
if (false) {}




/***/ }),

/***/ "../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/UH3I23HL.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ useCollectionItem)
/* harmony export */ });
/* unused harmony export CollectionItem */
/* harmony import */ var _4UUKJZ4V_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4UUKJZ4V.js");
/* harmony import */ var _3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js");
/* harmony import */ var _6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js");
/* harmony import */ var _4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@ariakit+core@0.3.11/node_modules/@ariakit/core/esm/__chunks/Y3OOHFCN.js");
"use client";





// src/collection/collection-item.ts


var useCollectionItem = (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__/* .createHook */ .ab)(
  (_a) => {
    var _b = _a, {
      store,
      shouldRegisterItem = true,
      getItem = _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__/* .identity */ .D_,
      element: element
    } = _b, props = (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__/* .__objRest */ .YG)(_b, [
      "store",
      "shouldRegisterItem",
      "getItem",
      // @ts-expect-error This prop may come from a collection renderer.
      "element"
    ]);
    const context = (0,_4UUKJZ4V_js__WEBPACK_IMPORTED_MODULE_4__/* .useCollectionContext */ .$I)();
    store = store || context;
    const id = (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_5__/* .useId */ .Bi)(props.id);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(element);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      const element2 = ref.current;
      if (!id)
        return;
      if (!element2)
        return;
      if (!shouldRegisterItem)
        return;
      const item = getItem({ id, element: element2 });
      return store == null ? void 0 : store.renderItem(item);
    }, [id, shouldRegisterItem, getItem, store]);
    props = (0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__/* .__spreadProps */ .ko)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__/* .__spreadValues */ .IA)({}, props), {
      ref: (0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_5__/* .useMergeRefs */ .SV)(ref, props.ref)
    });
    return props;
  }
);
var CollectionItem = (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__/* .createComponent */ .a0)(
  (props) => {
    const htmlProps = useCollectionItem(props);
    return (0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__/* .createElement */ .n)("div", htmlProps);
  }
);
if (false) {}




/***/ })

}]);