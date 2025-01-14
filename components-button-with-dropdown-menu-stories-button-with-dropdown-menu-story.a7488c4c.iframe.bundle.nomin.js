"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[8431],{

/***/ "../../packages/js/product-editor/src/components/button-with-dropdown-menu/stories/button-with-dropdown-menu.story.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Default: () => (/* binding */ Default),
  "default": () => (/* binding */ button_with_dropdown_menu_story)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.for-each.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-properties.js
var es_object_define_properties = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-properties.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-property.js
var es_object_define_property = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-property.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.6.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-down.js
var chevron_down = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.6.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-down.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/flex/component.js
var component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/flex/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/flex-item/component.js
var flex_item_component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/flex/flex-item/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/dropdown-menu/index.js + 1 modules
var dropdown_menu = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/dropdown-menu/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../packages/js/product-editor/src/components/button-with-dropdown-menu/index.tsx












var _excluded = ["dropdownButtonLabel", "controls", "defaultOpen", "popoverProps", "className", "renderMenu", "onToggle"];
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
/**
 * External dependencies
 */





/**
 * Internal dependencies
 */


function ButtonWithDropdownMenu(_ref) {
  var _ref$dropdownButtonLa = _ref.dropdownButtonLabel,
    dropdownButtonLabel = _ref$dropdownButtonLa === void 0 ? (0,build_module.__)('More options', 'woocommerce') : _ref$dropdownButtonLa,
    controls = _ref.controls,
    _ref$defaultOpen = _ref.defaultOpen,
    defaultOpen = _ref$defaultOpen === void 0 ? false : _ref$defaultOpen,
    _ref$popoverProps = _ref.popoverProps,
    _ref$popoverProps2 = _ref$popoverProps === void 0 ? {
      placement: 'bottom-end',
      position: 'bottom left left',
      offset: 0
    } : _ref$popoverProps,
    _ref$popoverProps2$pl = _ref$popoverProps2.placement,
    placement = _ref$popoverProps2$pl === void 0 ? 'bottom-end' : _ref$popoverProps2$pl,
    _ref$popoverProps2$po = _ref$popoverProps2.position,
    position = _ref$popoverProps2$po === void 0 ? 'bottom left left' : _ref$popoverProps2$po,
    _ref$popoverProps2$of = _ref$popoverProps2.offset,
    offset = _ref$popoverProps2$of === void 0 ? 0 : _ref$popoverProps2$of,
    className = _ref.className,
    renderMenu = _ref.renderMenu,
    onToggle = _ref.onToggle,
    props = (0,objectWithoutProperties/* default */.A)(_ref, _excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(component/* default */.A, {
    className: "woocommerce-button-with-dropdown-menu".concat(className !== null && className !== void 0 && className.length ? ' ' + className : ''),
    justify: "left",
    gap: 0,
    expanded: false,
    role: "group",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(flex_item_component/* default */.A, {
      role: "none",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, _objectSpread(_objectSpread({}, props), {}, {
        className: "woocommerce-button-with-dropdown-menu__main-button"
      }))
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(flex_item_component/* default */.A, {
      role: "none",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(dropdown_menu/* default */.A, {
        toggleProps: {
          className: 'woocommerce-button-with-dropdown-menu__dropdown-button',
          variant: props.variant
        },
        controls: controls,
        icon: chevron_down/* default */.A,
        label: dropdownButtonLabel,
        popoverProps: {
          placement: placement,
          position: position,
          offset: offset
        },
        defaultOpen: defaultOpen,
        onToggle: onToggle,
        children: renderMenu
      })
    })]
  });
}
try {
    // @ts-ignore
    ButtonWithDropdownMenu.displayName = "ButtonWithDropdownMenu";
    // @ts-ignore
    ButtonWithDropdownMenu.__docgenInfo = { "description": "", "displayName": "ButtonWithDropdownMenu", "props": { "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "href": { "defaultValue": null, "description": "If provided, renders `a` instead of `button`.", "name": "href", "required": false, "type": { "name": "string" } }, "dropdownButtonLabel": { "defaultValue": { value: "__( 'More options', 'woocommerce' )" }, "description": "", "name": "dropdownButtonLabel", "required": false, "type": { "name": "string" } }, "defaultOpen": { "defaultValue": { value: "false" }, "description": "", "name": "defaultOpen", "required": false, "type": { "name": "boolean" } }, "controls": { "defaultValue": null, "description": "", "name": "controls", "required": false, "type": { "name": "DropdownOption[]" } }, "popoverProps": { "defaultValue": null, "description": "", "name": "popoverProps", "required": false, "type": { "name": "PopoverProps" } }, "renderMenu": { "defaultValue": null, "description": "", "name": "renderMenu", "required": false, "type": { "name": "((props: { onClose: () => void; }) => ReactNode)" } }, "onToggle": { "defaultValue": null, "description": "", "name": "onToggle", "required": false, "type": { "name": "((isOpen: boolean) => void)" } }, "__next40pxDefaultSize": { "defaultValue": { value: "false" }, "description": "Start opting into the larger default height that will become the\ndefault size in a future version.", "name": "__next40pxDefaultSize", "required": false, "type": { "name": "boolean" } }, "children": { "defaultValue": null, "description": "The button's children.", "name": "children", "required": false, "type": { "name": "ReactNode" } }, "describedBy": { "defaultValue": null, "description": "An accessible description for the button.", "name": "describedBy", "required": false, "type": { "name": "string" } }, "icon": { "defaultValue": null, "description": "If provided, renders an Icon component inside the button.", "name": "icon", "required": false, "type": { "name": "IconType | null" } }, "iconPosition": { "defaultValue": { value: "'left'" }, "description": "If provided with `icon`, sets the position of icon relative to the `text`.", "name": "iconPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"left\"" }, { "value": "\"right\"" }] } }, "iconSize": { "defaultValue": null, "description": "If provided with `icon`, sets the icon size.\nPlease refer to the Icon component for more details regarding\nthe default value of its `size` prop.", "name": "iconSize", "required": false, "type": { "name": "number" } }, "isBusy": { "defaultValue": null, "description": "Indicates activity while a action is being performed.", "name": "isBusy", "required": false, "type": { "name": "boolean" } }, "isDestructive": { "defaultValue": null, "description": "Renders a red text-based button style to indicate destructive behavior.", "name": "isDestructive", "required": false, "type": { "name": "boolean" } }, "isPressed": { "defaultValue": null, "description": "Renders a pressed button style.", "name": "isPressed", "required": false, "type": { "name": "boolean" } }, "label": { "defaultValue": null, "description": "Sets the `aria-label` of the component, if none is provided.\nSets the Tooltip content if `showTooltip` is provided.", "name": "label", "required": false, "type": { "name": "string" } }, "shortcut": { "defaultValue": null, "description": "If provided with `showTooltip`, appends the Shortcut label to the tooltip content.\nIf an object is provided, it should contain `display` and `ariaLabel` keys.", "name": "shortcut", "required": false, "type": { "name": "string | { display: string; ariaLabel: string; }" } }, "showTooltip": { "defaultValue": null, "description": "If provided, renders a Tooltip component for the button.", "name": "showTooltip", "required": false, "type": { "name": "boolean" } }, "size": { "defaultValue": { value: "'default'" }, "description": "The size of the button.\n\n- `'default'`: For normal text-label buttons, unless it is a toggle button.\n- `'compact'`: For toggle buttons, icon buttons, and buttons when used in context of either.\n- `'small'`: For icon buttons associated with more advanced or auxiliary features.\n\nIf the deprecated `isSmall` prop is also defined, this prop will take precedence.", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"small\"" }, { "value": "\"default\"" }, { "value": "\"compact\"" }] } }, "text": { "defaultValue": null, "description": "If provided, displays the given text inside the button. If the button contains children elements, the text is displayed before them.", "name": "text", "required": false, "type": { "name": "string" } }, "tooltipPosition": { "defaultValue": null, "description": "If provided with `showTooltip`, sets the position of the tooltip.\nPlease refer to the Tooltip component for more details regarding the defaults.", "name": "tooltipPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"bottom left left\"" }, { "value": "\"top\"" }, { "value": "\"middle\"" }, { "value": "\"bottom\"" }, { "value": "\"top center\"" }, { "value": "\"top left\"" }, { "value": "\"top right\"" }, { "value": "\"middle center\"" }, { "value": "\"middle left\"" }, { "value": "\"middle right\"" }, { "value": "\"bottom center\"" }, { "value": "\"bottom left\"" }, { "value": "\"bottom right\"" }, { "value": "\"top center left\"" }, { "value": "\"top center right\"" }, { "value": "\"top center top\"" }, { "value": "\"top center bottom\"" }, { "value": "\"top left left\"" }, { "value": "\"top left right\"" }, { "value": "\"top left top\"" }, { "value": "\"top left bottom\"" }, { "value": "\"top right left\"" }, { "value": "\"top right right\"" }, { "value": "\"top right top\"" }, { "value": "\"top right bottom\"" }, { "value": "\"middle center left\"" }, { "value": "\"middle center right\"" }, { "value": "\"middle center top\"" }, { "value": "\"middle center bottom\"" }, { "value": "\"middle left left\"" }, { "value": "\"middle left right\"" }, { "value": "\"middle left top\"" }, { "value": "\"middle left bottom\"" }, { "value": "\"middle right left\"" }, { "value": "\"middle right right\"" }, { "value": "\"middle right top\"" }, { "value": "\"middle right bottom\"" }, { "value": "\"bottom center left\"" }, { "value": "\"bottom center right\"" }, { "value": "\"bottom center top\"" }, { "value": "\"bottom center bottom\"" }, { "value": "\"bottom left right\"" }, { "value": "\"bottom left top\"" }, { "value": "\"bottom left bottom\"" }, { "value": "\"bottom right left\"" }, { "value": "\"bottom right right\"" }, { "value": "\"bottom right top\"" }, { "value": "\"bottom right bottom\"" }] } }, "variant": { "defaultValue": null, "description": "Specifies the button's style.\nThe accepted values are:\n'primary' (the primary button styles)\n'secondary' (the default button styles)\n'tertiary' (the text-based button styles)\n'link' (the link button styles)", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"link\"" }, { "value": "\"secondary\"" }, { "value": "\"primary\"" }, { "value": "\"tertiary\"" }] } }, "__experimentalIsFocusable": { "defaultValue": { value: "false" }, "description": "Whether to keep the button focusable when disabled.", "name": "__experimentalIsFocusable", "required": false, "type": { "name": "boolean" } }, "disabled": { "defaultValue": null, "description": "Whether the button is disabled.\n\nIf `true`, this will force a `button` element to be rendered, even when an `href` is given.", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "isDefault": { "defaultValue": null, "description": "Gives the button a default style.\n@deprecated Use the `'secondary'` value on the `variant` prop instead.\n@ignore", "name": "isDefault", "required": false, "type": { "name": "boolean" } }, "isLink": { "defaultValue": null, "description": "Gives the button a link style.\n@deprecated Use the `'link'` value on the `variant` prop instead.\n@ignore", "name": "isLink", "required": false, "type": { "name": "boolean" } }, "isPrimary": { "defaultValue": null, "description": "Gives the button a primary style.\n@deprecated Use the `'primary'` value on the `variant` prop instead.\n@ignore", "name": "isPrimary", "required": false, "type": { "name": "boolean" } }, "isSecondary": { "defaultValue": null, "description": "Gives the button a default style.\n@deprecated Use the `'secondary'` value on the `variant` prop instead.\n@ignore", "name": "isSecondary", "required": false, "type": { "name": "boolean" } }, "isTertiary": { "defaultValue": null, "description": "Gives the button a text-based style.\n@deprecated Use the `'tertiary'` value on the `variant` prop instead.\n@ignore", "name": "isTertiary", "required": false, "type": { "name": "boolean" } }, "isSmall": { "defaultValue": null, "description": "Decreases the size of the button.\n@deprecated Use the `'small'` value on the `size` prop instead.\n@ignore", "name": "isSmall", "required": false, "type": { "name": "boolean" } }, "target": { "defaultValue": null, "description": "If provided with `href`, sets the `target` attribute to the `a`.", "name": "target", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/product-editor/src/components/button-with-dropdown-menu/index.tsx#ButtonWithDropdownMenu"] = { docgenInfo: ButtonWithDropdownMenu.__docgenInfo, name: "ButtonWithDropdownMenu", path: "../../packages/js/product-editor/src/components/button-with-dropdown-menu/index.tsx#ButtonWithDropdownMenu" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ../../packages/js/product-editor/src/components/button-with-dropdown-menu/stories/button-with-dropdown-menu.story.tsx











function button_with_dropdown_menu_story_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function button_with_dropdown_menu_story_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? button_with_dropdown_menu_story_ownKeys(Object(t), !0).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : button_with_dropdown_menu_story_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


/* harmony default export */ const button_with_dropdown_menu_story = ({
  title: 'Product Editor/components/ButtonWithDropdownMenu',
  component: ButtonWithDropdownMenu
});
var Default = function Default(args) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      minHeight: '300px'
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ButtonWithDropdownMenu, button_with_dropdown_menu_story_objectSpread({}, args))
  });
};
Default.args = {
  children: 'Add to store',
  dropdownButtonLabel: 'More options',
  variant: 'secondary',
  defaultOpen: false,
  popoverProps: {
    placement: 'bottom-end',
    position: 'bottom left left',
    offset: 0
  },
  controls: [{
    title: 'First Menu Item Label',
    onClick: function noRefCheck() {}
  }, {
    onClick: function noRefCheck() {},
    title: 'Second Menu Item Label'
  }],
  className: 'my-custom-classname',
  onClick: console.log // eslint-disable-line no-console
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "(args: ButtonWithDropdownMenuProps) => {\n  return <div style={{\n    display: 'flex',\n    justifyContent: 'center',\n    minHeight: '300px'\n  }}>\n            <ButtonWithDropdownMenu {...args} />\n        </div>;\n}",
      ...Default.parameters?.docs?.source
    }
  }
};
try {
    // @ts-ignore
    Default.displayName = "Default";
    // @ts-ignore
    Default.__docgenInfo = { "description": "", "displayName": "Default", "props": { "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "href": { "defaultValue": null, "description": "If provided, renders `a` instead of `button`.", "name": "href", "required": false, "type": { "name": "string" } }, "dropdownButtonLabel": { "defaultValue": null, "description": "", "name": "dropdownButtonLabel", "required": false, "type": { "name": "string" } }, "defaultOpen": { "defaultValue": null, "description": "", "name": "defaultOpen", "required": false, "type": { "name": "boolean" } }, "controls": { "defaultValue": null, "description": "", "name": "controls", "required": false, "type": { "name": "DropdownOption[]" } }, "popoverProps": { "defaultValue": null, "description": "", "name": "popoverProps", "required": false, "type": { "name": "PopoverProps" } }, "renderMenu": { "defaultValue": null, "description": "", "name": "renderMenu", "required": false, "type": { "name": "((props: { onClose: () => void; }) => ReactNode)" } }, "onToggle": { "defaultValue": null, "description": "", "name": "onToggle", "required": false, "type": { "name": "((isOpen: boolean) => void)" } }, "__next40pxDefaultSize": { "defaultValue": { value: "false" }, "description": "Start opting into the larger default height that will become the\ndefault size in a future version.", "name": "__next40pxDefaultSize", "required": false, "type": { "name": "boolean" } }, "children": { "defaultValue": null, "description": "The button's children.", "name": "children", "required": false, "type": { "name": "ReactNode" } }, "describedBy": { "defaultValue": null, "description": "An accessible description for the button.", "name": "describedBy", "required": false, "type": { "name": "string" } }, "icon": { "defaultValue": null, "description": "If provided, renders an Icon component inside the button.", "name": "icon", "required": false, "type": { "name": "IconType | null" } }, "iconPosition": { "defaultValue": { value: "'left'" }, "description": "If provided with `icon`, sets the position of icon relative to the `text`.", "name": "iconPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"left\"" }, { "value": "\"right\"" }] } }, "iconSize": { "defaultValue": null, "description": "If provided with `icon`, sets the icon size.\nPlease refer to the Icon component for more details regarding\nthe default value of its `size` prop.", "name": "iconSize", "required": false, "type": { "name": "number" } }, "isBusy": { "defaultValue": null, "description": "Indicates activity while a action is being performed.", "name": "isBusy", "required": false, "type": { "name": "boolean" } }, "isDestructive": { "defaultValue": null, "description": "Renders a red text-based button style to indicate destructive behavior.", "name": "isDestructive", "required": false, "type": { "name": "boolean" } }, "isPressed": { "defaultValue": null, "description": "Renders a pressed button style.", "name": "isPressed", "required": false, "type": { "name": "boolean" } }, "label": { "defaultValue": null, "description": "Sets the `aria-label` of the component, if none is provided.\nSets the Tooltip content if `showTooltip` is provided.", "name": "label", "required": false, "type": { "name": "string" } }, "shortcut": { "defaultValue": null, "description": "If provided with `showTooltip`, appends the Shortcut label to the tooltip content.\nIf an object is provided, it should contain `display` and `ariaLabel` keys.", "name": "shortcut", "required": false, "type": { "name": "string | { display: string; ariaLabel: string; }" } }, "showTooltip": { "defaultValue": null, "description": "If provided, renders a Tooltip component for the button.", "name": "showTooltip", "required": false, "type": { "name": "boolean" } }, "size": { "defaultValue": { value: "'default'" }, "description": "The size of the button.\n\n- `'default'`: For normal text-label buttons, unless it is a toggle button.\n- `'compact'`: For toggle buttons, icon buttons, and buttons when used in context of either.\n- `'small'`: For icon buttons associated with more advanced or auxiliary features.\n\nIf the deprecated `isSmall` prop is also defined, this prop will take precedence.", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"small\"" }, { "value": "\"default\"" }, { "value": "\"compact\"" }] } }, "text": { "defaultValue": null, "description": "If provided, displays the given text inside the button. If the button contains children elements, the text is displayed before them.", "name": "text", "required": false, "type": { "name": "string" } }, "tooltipPosition": { "defaultValue": null, "description": "If provided with `showTooltip`, sets the position of the tooltip.\nPlease refer to the Tooltip component for more details regarding the defaults.", "name": "tooltipPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"bottom left left\"" }, { "value": "\"top\"" }, { "value": "\"middle\"" }, { "value": "\"bottom\"" }, { "value": "\"top center\"" }, { "value": "\"top left\"" }, { "value": "\"top right\"" }, { "value": "\"middle center\"" }, { "value": "\"middle left\"" }, { "value": "\"middle right\"" }, { "value": "\"bottom center\"" }, { "value": "\"bottom left\"" }, { "value": "\"bottom right\"" }, { "value": "\"top center left\"" }, { "value": "\"top center right\"" }, { "value": "\"top center top\"" }, { "value": "\"top center bottom\"" }, { "value": "\"top left left\"" }, { "value": "\"top left right\"" }, { "value": "\"top left top\"" }, { "value": "\"top left bottom\"" }, { "value": "\"top right left\"" }, { "value": "\"top right right\"" }, { "value": "\"top right top\"" }, { "value": "\"top right bottom\"" }, { "value": "\"middle center left\"" }, { "value": "\"middle center right\"" }, { "value": "\"middle center top\"" }, { "value": "\"middle center bottom\"" }, { "value": "\"middle left left\"" }, { "value": "\"middle left right\"" }, { "value": "\"middle left top\"" }, { "value": "\"middle left bottom\"" }, { "value": "\"middle right left\"" }, { "value": "\"middle right right\"" }, { "value": "\"middle right top\"" }, { "value": "\"middle right bottom\"" }, { "value": "\"bottom center left\"" }, { "value": "\"bottom center right\"" }, { "value": "\"bottom center top\"" }, { "value": "\"bottom center bottom\"" }, { "value": "\"bottom left right\"" }, { "value": "\"bottom left top\"" }, { "value": "\"bottom left bottom\"" }, { "value": "\"bottom right left\"" }, { "value": "\"bottom right right\"" }, { "value": "\"bottom right top\"" }, { "value": "\"bottom right bottom\"" }] } }, "variant": { "defaultValue": null, "description": "Specifies the button's style.\nThe accepted values are:\n'primary' (the primary button styles)\n'secondary' (the default button styles)\n'tertiary' (the text-based button styles)\n'link' (the link button styles)", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"link\"" }, { "value": "\"secondary\"" }, { "value": "\"primary\"" }, { "value": "\"tertiary\"" }] } }, "__experimentalIsFocusable": { "defaultValue": { value: "false" }, "description": "Whether to keep the button focusable when disabled.", "name": "__experimentalIsFocusable", "required": false, "type": { "name": "boolean" } }, "disabled": { "defaultValue": null, "description": "Whether the button is disabled.\n\nIf `true`, this will force a `button` element to be rendered, even when an `href` is given.", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "isDefault": { "defaultValue": null, "description": "Gives the button a default style.\n@deprecated Use the `'secondary'` value on the `variant` prop instead.\n@ignore", "name": "isDefault", "required": false, "type": { "name": "boolean" } }, "isLink": { "defaultValue": null, "description": "Gives the button a link style.\n@deprecated Use the `'link'` value on the `variant` prop instead.\n@ignore", "name": "isLink", "required": false, "type": { "name": "boolean" } }, "isPrimary": { "defaultValue": null, "description": "Gives the button a primary style.\n@deprecated Use the `'primary'` value on the `variant` prop instead.\n@ignore", "name": "isPrimary", "required": false, "type": { "name": "boolean" } }, "isSecondary": { "defaultValue": null, "description": "Gives the button a default style.\n@deprecated Use the `'secondary'` value on the `variant` prop instead.\n@ignore", "name": "isSecondary", "required": false, "type": { "name": "boolean" } }, "isTertiary": { "defaultValue": null, "description": "Gives the button a text-based style.\n@deprecated Use the `'tertiary'` value on the `variant` prop instead.\n@ignore", "name": "isTertiary", "required": false, "type": { "name": "boolean" } }, "isSmall": { "defaultValue": null, "description": "Decreases the size of the button.\n@deprecated Use the `'small'` value on the `size` prop instead.\n@ignore", "name": "isSmall", "required": false, "type": { "name": "boolean" } }, "target": { "defaultValue": null, "description": "If provided with `href`, sets the `target` attribute to the `a`.", "name": "target", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/product-editor/src/components/button-with-dropdown-menu/stories/button-with-dropdown-menu.story.tsx#Default"] = { docgenInfo: Default.__docgenInfo, name: "Default", path: "../../packages/js/product-editor/src/components/button-with-dropdown-menu/stories/button-with-dropdown-menu.story.tsx#Default" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ })

}]);