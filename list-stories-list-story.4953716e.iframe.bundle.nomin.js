(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[7860],{

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

/***/ "../../node_modules/.pnpm/@wordpress+keycodes@4.0.1/node_modules/@wordpress/keycodes/build-module/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fm: () => (/* binding */ ENTER),
/* harmony export */   G_: () => (/* binding */ BACKSPACE),
/* harmony export */   JF: () => (/* binding */ rawShortcut),
/* harmony export */   M3: () => (/* binding */ LEFT),
/* harmony export */   NS: () => (/* binding */ RIGHT),
/* harmony export */   PX: () => (/* binding */ DOWN),
/* harmony export */   SJ: () => (/* binding */ DELETE),
/* harmony export */   UP: () => (/* binding */ UP),
/* harmony export */   _A: () => (/* binding */ shortcutAriaLabel),
/* harmony export */   _f: () => (/* binding */ ESCAPE),
/* harmony export */   dz: () => (/* binding */ displayShortcut),
/* harmony export */   kx: () => (/* binding */ isKeyboardEvent),
/* harmony export */   t6: () => (/* binding */ SPACE),
/* harmony export */   wn: () => (/* binding */ TAB)
/* harmony export */ });
/* unused harmony exports PAGEUP, PAGEDOWN, END, HOME, F10, ALT, CTRL, COMMAND, SHIFT, ZERO, modifiers, displayShortcutList */
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+keycodes@4.0.1/node_modules/@wordpress/keycodes/build-module/platform.js");
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
const rawShortcut = mapValues(modifiers, ( /** @type {WPModifier} */modifier) => {
  return /** @type {WPKeyHandler<string>} */(character, _isApple = _platform__WEBPACK_IMPORTED_MODULE_1__/* .isAppleOS */ .H) => {
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
const displayShortcutList = mapValues(modifiers, ( /** @type {WPModifier} */modifier) => {
  return /** @type {WPKeyHandler<string[]>} */(character, _isApple = _platform__WEBPACK_IMPORTED_MODULE_1__/* .isAppleOS */ .H) => {
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
const displayShortcut = mapValues(displayShortcutList, ( /** @type {WPKeyHandler<string[]>} */shortcutList) => {
  return /** @type {WPKeyHandler<string>} */(character, _isApple = _platform__WEBPACK_IMPORTED_MODULE_1__/* .isAppleOS */ .H) => shortcutList(character, _isApple).join('');
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
const shortcutAriaLabel = mapValues(modifiers, ( /** @type {WPModifier} */modifier) => {
  return /** @type {WPKeyHandler<string>} */(character, _isApple = _platform__WEBPACK_IMPORTED_MODULE_1__/* .isAppleOS */ .H) => {
    const isApple = _isApple();
    /** @type {Record<string,string>} */
    const replacementKeyMap = {
      [SHIFT]: 'Shift',
      [COMMAND]: isApple ? 'Command' : 'Control',
      [CTRL]: 'Control',
      [ALT]: isApple ? 'Option' : 'Alt',
      /* translators: comma as in the character ',' */
      ',': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Comma'),
      /* translators: period as in the character '.' */
      '.': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Period'),
      /* translators: backtick as in the character '`' */
      '`': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Backtick'),
      /* translators: tilde as in the character '~' */
      '~': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Tilde')
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
  return /** @type {WPModifierPart[]} */[ALT, CTRL, COMMAND, SHIFT].filter(key => event[( /** @type {'altKey' | 'ctrlKey' | 'metaKey' | 'shiftKey'} */
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
const isKeyboardEvent = mapValues(modifiers, ( /** @type {WPModifier} */getModifiers) => {
  return /** @type {WPEventKeyHandler} */(event, character, _isApple = _platform__WEBPACK_IMPORTED_MODULE_1__/* .isAppleOS */ .H) => {
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
      return mods.includes( /** @type {WPModifierPart} */key);
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

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+keycodes@4.0.1/node_modules/@wordpress/keycodes/build-module/platform.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ isAppleOS)
/* harmony export */ });
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

/***/ }),

/***/ "../../packages/js/components/src/link/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   N: () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../packages/js/navigation/src/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");












var _excluded = ["href", "children", "type"];
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
      (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
/**
 * External dependencies
 */




// eslint-disable-next-line @typescript-eslint/no-explicit-any
// we don't want to restrict this function at all

/**
 * Use `Link` to create a link to another resource. It accepts a type to automatically
 * create wp-admin links, wc-admin links, and external links.
 */
var Link = function Link(_ref) {
  var href = _ref.href,
    children = _ref.children,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'wc-admin' : _ref$type,
    props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A)(_ref, _excluded);
  // ( { children, href, type, ...props } ) => {
  // @todo Investigate further if we can use <Link /> directly.
  // With React Router 5+, <RouterLink /> cannot be used outside of the main <Router /> elements,
  // which seems to include components imported from @woocommerce/components. For now, we can use the history object directly.
  var wcAdminLinkHandler = function wcAdminLinkHandler(onClick, event) {
    // If cmd, ctrl, alt, or shift are used, use default behavior to allow opening in a new tab.
    if (event !== null && event !== void 0 && event.ctrlKey || event !== null && event !== void 0 && event.metaKey || event !== null && event !== void 0 && event.altKey || event !== null && event !== void 0 && event.shiftKey) {
      return;
    }
    event === null || event === void 0 || event.preventDefault();

    // If there is an onclick event, execute it.
    var onClickResult = onClick && event ? onClick(event) : true;

    // Mimic browser behavior and only continue if onClickResult is not explicitly false.
    if (onClickResult === false) {
      return;
    }
    if ((event === null || event === void 0 ? void 0 : event.target) instanceof Element) {
      var _event$target$closest;
      var closestEventTarget = (_event$target$closest = event.target.closest('a')) === null || _event$target$closest === void 0 ? void 0 : _event$target$closest.getAttribute('href');
      if (closestEventTarget) {
        (0,_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_12__/* .getHistory */ .JK)().push(closestEventTarget);
      } else {
        // eslint-disable-next-line no-console
        console.error('@woocommerce/components/link is trying to push an undefined state into navigation stack'); // This shouldn't happen as we wrap with <a> below
      }
    }
  };
  var passProps = _objectSpread(_objectSpread({}, props), {}, {
    'data-link-type': type
  });
  if (type === 'wc-admin') {
    passProps.onClick = (0,lodash__WEBPACK_IMPORTED_MODULE_11__.partial)(wcAdminLinkHandler, passProps.onClick);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("a", _objectSpread(_objectSpread({
    href: href
  }, passProps), {}, {
    children: children
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);
try {
    // @ts-ignore
    Link.displayName = "Link";
    // @ts-ignore
    Link.__docgenInfo = { "description": "Use `Link` to create a link to another resource. It accepts a type to automatically\ncreate wp-admin links, wc-admin links, and external links.", "displayName": "Link", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/link/index.tsx#Link"] = { docgenInfo: Link.__docgenInfo, name: "Link", path: "../../packages/js/components/src/link/index.tsx#Link" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    link.displayName = "link";
    // @ts-ignore
    link.__docgenInfo = { "description": "Use `Link` to create a link to another resource. It accepts a type to automatically\ncreate wp-admin links, wc-admin links, and external links.", "displayName": "link", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/link/index.tsx#link"] = { docgenInfo: link.__docgenInfo, name: "link", path: "../../packages/js/components/src/link/index.tsx#link" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/TransitionGroup.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ "../../packages/js/components/src/list/stories/list.story.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  BeforeAndAfter: () => (/* binding */ BeforeAndAfter),
  CustomStyleAndTags: () => (/* binding */ CustomStyleAndTags),
  Default: () => (/* binding */ Default),
  "default": () => (/* binding */ list_story)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/gridicons@3.4.2_react@18.3.1/node_modules/gridicons/dist/index.js
var dist = __webpack_require__("../../node_modules/.pnpm/gridicons@3.4.2_react@18.3.1/node_modules/gridicons/dist/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@storybook+addon-console@1.2.3_@storybook+addon-actions@7.6.19/node_modules/@storybook/addon-console/dist/index.js
var addon_console_dist = __webpack_require__("../../node_modules/.pnpm/@storybook+addon-console@1.2.3_@storybook+addon-actions@7.6.19/node_modules/@storybook/addon-console/dist/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@storybook+addon-docs@7.6.19_@types+react-dom@18.3.0_@types+react@18.3.16_encoding@0.1.13_rea_barajlbjibnyqhkihcf6w4vobe/node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs + 1 modules
var chunk_HLWAVYOI = __webpack_require__("../../node_modules/.pnpm/@storybook+addon-docs@7.6.19_@types+react-dom@18.3.0_@types+react@18.3.16_encoding@0.1.13_rea_barajlbjibnyqhkihcf6w4vobe/node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@storybook+blocks@7.6.19_@types+react-dom@18.3.0_@types+react@18.3.16_encoding@0.1.13_react-d_d63a7ghk6mydsplxtpjqbe2nye/node_modules/@storybook/blocks/dist/index.mjs + 12 modules
var blocks_dist = __webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.19_@types+react-dom@18.3.0_@types+react@18.3.16_encoding@0.1.13_react-d_d63a7ghk6mydsplxtpjqbe2nye/node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@storybook+addon-docs@7.6.19_@types+react-dom@18.3.0_@types+react@18.3.16_encoding@0.1.13_rea_barajlbjibnyqhkihcf6w4vobe/node_modules/@storybook/addon-docs/dist/index.mjs



// EXTERNAL MODULE: external "__STORYBOOK_MODULE_GLOBAL__"
var external_STORYBOOK_MODULE_GLOBAL_ = __webpack_require__("@storybook/global");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_PREVIEW_API__"
var external_STORYBOOK_MODULE_PREVIEW_API_ = __webpack_require__("@storybook/preview-api");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_CORE_EVENTS__"
var external_STORYBOOK_MODULE_CORE_EVENTS_ = __webpack_require__("@storybook/core-events");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@storybook+csf@0.1.2/node_modules/@storybook/csf/dist/index.mjs
var csf_dist = __webpack_require__("../../node_modules/.pnpm/@storybook+csf@0.1.2/node_modules/@storybook/csf/dist/index.mjs");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@storybook+addon-links@7.6.19_react@18.3.1/node_modules/@storybook/addon-links/dist/chunk-6GSMXRCY.mjs





var PARAM_KEY="links";var{document: chunk_6GSMXRCY_document,HTMLElement}=external_STORYBOOK_MODULE_GLOBAL_.global;function parseQuery(queryString){let query={},pairs=(queryString[0]==="?"?queryString.substring(1):queryString).split("&").filter(Boolean);for(let i=0;i<pairs.length;i++){let pair=pairs[i].split("=");query[decodeURIComponent(pair[0])]=decodeURIComponent(pair[1]||"");}return query}var chunk_6GSMXRCY_navigate=params=>external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel().emit(external_STORYBOOK_MODULE_CORE_EVENTS_.SELECT_STORY,params),hrefTo=(title,name)=>new Promise(resolve=>{let{location}=chunk_6GSMXRCY_document,query=parseQuery(location.search),existingId=[].concat(query.id)[0],titleToLink=title||existingId.split("--",2)[0],path=`/story/${toId(titleToLink,name)}`,sbPath=location.pathname.replace(/iframe\.html$/,""),url=`${location.origin+sbPath}?${Object.entries({path}).map(item=>`${item[0]}=${item[1]}`).join("&")}`;resolve(url);}),valueOrCall=args=>value=>typeof value=="function"?value(...args):value,linkTo=(idOrTitle,nameInput)=>(...args)=>{let resolver=valueOrCall(args),title=resolver(idOrTitle),name=nameInput?resolver(nameInput):!1;title?.match(/--/)&&!name?chunk_6GSMXRCY_navigate({storyId:title}):name&&title?chunk_6GSMXRCY_navigate({kind:title,story:name}):title?chunk_6GSMXRCY_navigate({kind:title}):name&&chunk_6GSMXRCY_navigate({story:name});},linksListener=e=>{let{target}=e;if(!(target instanceof HTMLElement))return;let element=target,{sbKind:kind,sbStory:story}=element.dataset;(kind||story)&&(e.preventDefault(),chunk_6GSMXRCY_navigate({kind,story}));},hasListener=!1,on=()=>{hasListener||(hasListener=!0,chunk_6GSMXRCY_document.addEventListener("click",linksListener));},off=()=>{hasListener&&(hasListener=!1,chunk_6GSMXRCY_document.removeEventListener("click",linksListener));},withLinks=(0,external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({name:"withLinks",parameterName:PARAM_KEY,wrapper:(getStory,context)=>(on(),external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel().once(external_STORYBOOK_MODULE_CORE_EVENTS_.STORY_CHANGED,off),getStory(context))});



;// CONCATENATED MODULE: ../../node_modules/.pnpm/@storybook+addon-links@7.6.19_react@18.3.1/node_modules/@storybook/addon-links/dist/index.mjs



var hasWarned=(/* unused pure expression or super */ null && (!1));function LinkTo(){return hasWarned||(console.error(dedent`
      LinkTo has moved to addon-links/react:
      import LinkTo from '@storybook/addon-links/react';
    `),hasWarned=!0),null}



// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js
var prop_types = __webpack_require__("../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/TransitionGroup.js + 2 modules
var TransitionGroup = __webpack_require__("../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/TransitionGroup.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/CSSTransition.js + 3 modules
var CSSTransition = __webpack_require__("../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/CSSTransition.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+deprecated@4.0.1/node_modules/@wordpress/deprecated/build-module/index.js
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+deprecated@4.0.1/node_modules/@wordpress/deprecated/build-module/index.js");
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+keycodes@4.0.1/node_modules/@wordpress/keycodes/build-module/index.js
var keycodes_build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+keycodes@4.0.1/node_modules/@wordpress/keycodes/build-module/index.js");
// EXTERNAL MODULE: ../../packages/js/components/src/link/index.tsx
var src_link = __webpack_require__("../../packages/js/components/src/link/index.tsx");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../packages/js/components/src/list/list-item.js











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


function handleKeyDown(event, onClick) {
  if (typeof onClick === 'function' && event.keyCode === keycodes_build_module/* ENTER */.Fm) {
    onClick();
  }
}
function getItemLinkType(item) {
  var href = item.href,
    linkType = item.linkType;
  if (linkType) {
    return linkType;
  }
  return href ? 'external' : null;
}

/**
 * List component to display a list of items.
 *
 * @param {Object} props props for list item
 */
function ListItem(props) {
  var item = props.item;
  var before = item.before,
    title = item.title,
    after = item.after,
    content = item.content,
    onClick = item.onClick,
    href = item.href,
    target = item.target,
    listItemTag = item.listItemTag;
  var hasAction = typeof onClick === 'function' || href;
  var InnerTag = href ? src_link/* default */.A : 'div';
  var innerTagProps = {
    className: 'woocommerce-list__item-inner',
    onClick: typeof onClick === 'function' ? onClick : null,
    'aria-disabled': hasAction ? 'false' : null,
    tabIndex: hasAction ? '0' : null,
    role: hasAction ? 'menuitem' : null,
    onKeyDown: function onKeyDown(e) {
      return hasAction ? handleKeyDown(e, onClick) : null;
    },
    target: href ? target : null,
    type: getItemLinkType(item),
    href: href,
    'data-list-item-tag': listItemTag
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(InnerTag, _objectSpread(_objectSpread({}, innerTagProps), {}, {
    children: [before && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "woocommerce-list__item-before",
      children: before
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "woocommerce-list__item-text",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "woocommerce-list__item-title",
        children: title
      }), content && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "woocommerce-list__item-content",
        children: content
      })]
    }), after && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "woocommerce-list__item-after",
      children: after
    })]
  }));
}
ListItem.propTypes = {
  /**
   * An array of list items.
   */
  item: prop_types_default().shape({
    /**
     * Content displayed after the list item text.
     */
    after: (prop_types_default()).node,
    /**
     * Content displayed before the list item text.
     */
    before: (prop_types_default()).node,
    /**
     * Additional class name to style the list item.
     */
    className: (prop_types_default()).string,
    /**
     * Content displayed beneath the list item title.
     */
    content: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).node]),
    /**
     * Href attribute used in a Link wrapped around the item.
     */
    href: (prop_types_default()).string,
    /**
     * Called when the list item is clicked.
     */
    onClick: (prop_types_default()).func,
    /**
     * Target attribute used for Link wrapper.
     */
    target: (prop_types_default()).string,
    /**
     * Title displayed for the list item.
     */
    title: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).node])
  }).isRequired
};
/* harmony default export */ const list_item = (ListItem);
;// CONCATENATED MODULE: ../../packages/js/components/src/list/index.js

/**
 * External dependencies
 */






/**
 * Internal dependencies
 */


/**
 * List component to display a list of items.
 *
 * @param {Object} props props for list
 */

function List(props) {
  var className = props.className,
    items = props.items,
    children = props.children;
  var listClassName = classnames_default()('woocommerce-list', className);
  (0,build_module/* default */.A)('List with items prop is deprecated', {
    version: '9.0.0',
    hint: 'See ExperimentalList / ExperimentalListItem for the new API that will replace this component in future versions.'
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TransitionGroup/* default */.A, {
    component: "ul",
    className: listClassName,
    role: "menu",
    children: items.map(function (item, index) {
      var itemClasses = item.className,
        href = item.href,
        key = item.key,
        onClick = item.onClick;
      var hasAction = typeof onClick === 'function' || href;
      var itemClassName = classnames_default()('woocommerce-list__item', itemClasses, {
        'has-action': hasAction
      });
      return /*#__PURE__*/(0,jsx_runtime.jsx)(CSSTransition/* default */.A, {
        timeout: 500,
        classNames: "woocommerce-list__item",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          className: itemClassName,
          children: children ? children(item, index) : /*#__PURE__*/(0,jsx_runtime.jsx)(list_item, {
            item: item
          })
        })
      }, key || index);
    })
  });
}
List.propTypes = {
  /**
   * Additional class name to style the component.
   */
  className: (prop_types_default()).string,
  /**
   * An array of list items.
   */
  items: prop_types_default().arrayOf(prop_types_default().shape({
    /**
     * Content displayed after the list item text.
     */
    after: (prop_types_default()).node,
    /**
     * Content displayed before the list item text.
     */
    before: (prop_types_default()).node,
    /**
     * Additional class name to style the list item.
     */
    className: (prop_types_default()).string,
    /**
     * Content displayed beneath the list item title.
     */
    content: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).node]),
    /**
     * Href attribute used in a Link wrapped around the item.
     */
    href: (prop_types_default()).string,
    /**
     * Called when the list item is clicked.
     */
    onClick: (prop_types_default()).func,
    /**
     * Target attribute used for Link wrapper.
     */
    target: (prop_types_default()).string,
    /**
     * Title displayed for the list item.
     */
    title: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).node]),
    /**
     * Unique key for list item.
     */
    key: (prop_types_default()).string
  }))
};
/* harmony default export */ const list = (List);
;// CONCATENATED MODULE: ../../packages/js/components/src/list/stories/style.scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../../packages/js/components/src/list/stories/list.story.js

/**
 * External dependencies
 */






/**
 * Internal dependencies
 */



function logItemClick(event) {
  var a = event.currentTarget;
  var itemDescription = a.href ? "[".concat(a.textContent, "](").concat(a.href, ") ").concat(a.dataset.linkType) : "[".concat(a.textContent, "]");
  var itemTag = a.dataset.listItemTag ? "'".concat(a.dataset.listItemTag, "'") : 'not set';
  var logMessage = "[".concat(itemDescription, " item clicked (tag: ").concat(itemTag, ")");

  // eslint-disable-next-line no-console
  console.log(logMessage);
  event.preventDefault();
  return false;
}
/* harmony default export */ const list_story = ({
  title: 'Components/List',
  component: list,
  decorators: [function (storyFn, context) {
    return (0,addon_console_dist/* withConsole */.QW)()(storyFn)(context);
  }, withLinks],
  parameters: {
    docs: {
      page: function page() {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(blocks_dist/* Title */.hE, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(blocks_dist/* Subtitle */.Pd, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(blocks_dist/* Description */.VY, {
            markdown: "[deprecated] and will be replaced by\n\t\t\t\t\t\t<a\n\t\t\t\t\t\t\tdata-sb-kind=\"woocommerce-admin-experimental-list\"\n\t\t\t\t\t\t\tdata-sb-story=\"default\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tExperimentalList\n\t\t\t\t\t\t</a>"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(blocks_dist/* Primary */.Tn, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(blocks_dist/* ArgsTable */.uY, {
            story: blocks_dist/* PRIMARY_STORY */.h1
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(blocks_dist/* Stories */.om, {})]
        });
      }
    }
  }
});
var Default = function Default() {
  var listItems = [{
    title: 'WooCommerce.com',
    href: 'https://woocommerce.com',
    onClick: logItemClick
  }, {
    title: 'WordPress.org',
    href: 'https://wordpress.org',
    onClick: logItemClick
  }, {
    title: 'A list item with no action'
  }, {
    title: 'Click me!',
    content: 'An alert will be triggered.',
    onClick: function onClick(event) {
      // eslint-disable-next-line no-alert
      window.alert('List item clicked');
      return logItemClick(event);
    }
  }];
  return /*#__PURE__*/(0,jsx_runtime.jsx)(list, {
    items: listItems
  });
};
Default.storyName = 'Default (deprecated)';
var BeforeAndAfter = function BeforeAndAfter() {
  var listItems = [{
    before: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* default */.A, {
      icon: "cart"
    }),
    after: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* default */.A, {
      icon: "chevron-right"
    }),
    title: 'WooCommerce.com',
    href: 'https://woocommerce.com',
    onClick: logItemClick
  }, {
    before: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* default */.A, {
      icon: "my-sites"
    }),
    after: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* default */.A, {
      icon: "chevron-right"
    }),
    title: 'WordPress.org',
    href: 'https://wordpress.org',
    onClick: logItemClick
  }, {
    before: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* default */.A, {
      icon: "link-break"
    }),
    title: 'A list item with no action',
    description: 'List item description text'
  }, {
    before: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* default */.A, {
      icon: "notice"
    }),
    title: 'Click me!',
    content: 'An alert will be triggered.',
    onClick: function onClick(event) {
      // eslint-disable-next-line no-alert
      window.alert('List item clicked');
      return logItemClick(event);
    }
  }];
  return /*#__PURE__*/(0,jsx_runtime.jsx)(list, {
    items: listItems
  });
};
BeforeAndAfter.storyName = 'Before and after (deprecated)';
var CustomStyleAndTags = function CustomStyleAndTags() {
  var listItems = [{
    before: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* default */.A, {
      icon: "cart"
    }),
    after: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* default */.A, {
      icon: "chevron-right"
    }),
    title: 'WooCommerce.com',
    href: 'https://woocommerce.com',
    onClick: logItemClick,
    listItemTag: 'woo.com-link'
  }, {
    before: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* default */.A, {
      icon: "my-sites"
    }),
    after: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* default */.A, {
      icon: "chevron-right"
    }),
    title: 'WordPress.org',
    href: 'https://wordpress.org',
    onClick: logItemClick,
    listItemTag: 'wordpress.org-link'
  }, {
    before: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* default */.A, {
      icon: "link-break"
    }),
    title: 'A list item with no action'
  }, {
    before: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* default */.A, {
      icon: "notice"
    }),
    title: 'Click me!',
    content: 'An alert will be triggered.',
    onClick: function onClick(event) {
      // eslint-disable-next-line no-alert
      window.alert('List item clicked');
      return logItemClick(event);
    },
    listItemTag: 'click-me'
  }];
  return /*#__PURE__*/(0,jsx_runtime.jsx)(list, {
    items: listItems,
    className: "storybook-custom-list"
  });
};
CustomStyleAndTags.storyName = 'Custom style and tags (deprecated)';
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "() => {\n  const listItems = [{\n    title: 'WooCommerce.com',\n    href: 'https://woocommerce.com',\n    onClick: logItemClick\n  }, {\n    title: 'WordPress.org',\n    href: 'https://wordpress.org',\n    onClick: logItemClick\n  }, {\n    title: 'A list item with no action'\n  }, {\n    title: 'Click me!',\n    content: 'An alert will be triggered.',\n    onClick: event => {\n      // eslint-disable-next-line no-alert\n      window.alert('List item clicked');\n      return logItemClick(event);\n    }\n  }];\n  return <List items={listItems} />;\n}",
      ...Default.parameters?.docs?.source
    }
  }
};
BeforeAndAfter.parameters = {
  ...BeforeAndAfter.parameters,
  docs: {
    ...BeforeAndAfter.parameters?.docs,
    source: {
      originalSource: "() => {\n  const listItems = [{\n    before: <Gridicon icon=\"cart\" />,\n    after: <Gridicon icon=\"chevron-right\" />,\n    title: 'WooCommerce.com',\n    href: 'https://woocommerce.com',\n    onClick: logItemClick\n  }, {\n    before: <Gridicon icon=\"my-sites\" />,\n    after: <Gridicon icon=\"chevron-right\" />,\n    title: 'WordPress.org',\n    href: 'https://wordpress.org',\n    onClick: logItemClick\n  }, {\n    before: <Gridicon icon=\"link-break\" />,\n    title: 'A list item with no action',\n    description: 'List item description text'\n  }, {\n    before: <Gridicon icon=\"notice\" />,\n    title: 'Click me!',\n    content: 'An alert will be triggered.',\n    onClick: event => {\n      // eslint-disable-next-line no-alert\n      window.alert('List item clicked');\n      return logItemClick(event);\n    }\n  }];\n  return <List items={listItems} />;\n}",
      ...BeforeAndAfter.parameters?.docs?.source
    }
  }
};
CustomStyleAndTags.parameters = {
  ...CustomStyleAndTags.parameters,
  docs: {
    ...CustomStyleAndTags.parameters?.docs,
    source: {
      originalSource: "() => {\n  const listItems = [{\n    before: <Gridicon icon=\"cart\" />,\n    after: <Gridicon icon=\"chevron-right\" />,\n    title: 'WooCommerce.com',\n    href: 'https://woocommerce.com',\n    onClick: logItemClick,\n    listItemTag: 'woo.com-link'\n  }, {\n    before: <Gridicon icon=\"my-sites\" />,\n    after: <Gridicon icon=\"chevron-right\" />,\n    title: 'WordPress.org',\n    href: 'https://wordpress.org',\n    onClick: logItemClick,\n    listItemTag: 'wordpress.org-link'\n  }, {\n    before: <Gridicon icon=\"link-break\" />,\n    title: 'A list item with no action'\n  }, {\n    before: <Gridicon icon=\"notice\" />,\n    title: 'Click me!',\n    content: 'An alert will be triggered.',\n    onClick: event => {\n      // eslint-disable-next-line no-alert\n      window.alert('List item clicked');\n      return logItemClick(event);\n    },\n    listItemTag: 'click-me'\n  }];\n  return <List items={listItems} className=\"storybook-custom-list\" />;\n}",
      ...CustomStyleAndTags.parameters?.docs?.source
    }
  }
};

/***/ })

}]);