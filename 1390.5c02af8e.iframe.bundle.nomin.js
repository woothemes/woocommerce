"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[1390],{

/***/ "../../packages/js/onboarding/src/components/Loader/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* reexport */ Loader)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.timers.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.promise.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/components/Loader/ProgressBar.tsx

/**
 * External dependencies
 */

var ProgressBar_ProgressBar = function ProgressBar(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$percent = _ref.percent,
    percent = _ref$percent === void 0 ? 0 : _ref$percent,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#674399' : _ref$color,
    _ref$bgcolor = _ref.bgcolor,
    bgcolor = _ref$bgcolor === void 0 ? 'var(--wp-admin-theme-color)' : _ref$bgcolor;
  var containerStyles = {
    backgroundColor: bgcolor
  };
  var fillerStyles = {
    backgroundColor: color,
    width: "".concat(percent, "%"),
    display: percent === 0 ? 'none' : 'inherit'
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "woocommerce-onboarding-progress-bar ".concat(className),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "woocommerce-onboarding-progress-bar__container",
      style: containerStyles,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "woocommerce-onboarding-progress-bar__filler",
        style: fillerStyles
      })
    })
  });
};
/* harmony default export */ const Loader_ProgressBar = (ProgressBar_ProgressBar);
try {
    // @ts-ignore
    ProgressBar_ProgressBar.displayName = "ProgressBar";
    // @ts-ignore
    ProgressBar_ProgressBar.__docgenInfo = { "description": "", "displayName": "ProgressBar", "props": { "className": { "defaultValue": { value: "" }, "description": "Component classname", "name": "className", "required": false, "type": { "name": "string" } }, "percent": { "defaultValue": { value: "0" }, "description": "Progress percentage (0 to 100)", "name": "percent", "required": false, "type": { "name": "number" } }, "color": { "defaultValue": { value: "#674399" }, "description": "Color of the progress bar", "name": "color", "required": false, "type": { "name": "string" } }, "bgcolor": { "defaultValue": { value: "var(--wp-admin-theme-color)" }, "description": "Background color of the progress container", "name": "bgcolor", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/onboarding/src/components/Loader/ProgressBar.tsx#ProgressBar"] = { docgenInfo: ProgressBar_ProgressBar.__docgenInfo, name: "ProgressBar", path: "../../packages/js/onboarding/src/components/Loader/ProgressBar.tsx#ProgressBar" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/components/Loader/Loader.tsx




/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


var Loader = function Loader(_ref) {
  var children = _ref.children,
    className = _ref.className;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: classnames_default()('woocommerce-onboarding-loader', className),
    children: children
  });
};
Loader.Layout = function (_ref2) {
  var children = _ref2.children,
    className = _ref2.className;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: classnames_default()('woocommerce-onboarding-loader-wrapper', className),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: classnames_default()('woocommerce-onboarding-loader-container', className),
      children: children
    })
  });
};
Loader.Illustration = function (_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: children
  });
};
Loader.Title = function (_ref4) {
  var children = _ref4.children,
    className = _ref4.className;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("h1", {
    className: classnames_default()('woocommerce-onboarding-loader__title', className),
    children: children
  });
};
Loader.ProgressBar = function (_ref5) {
  var progress = _ref5.progress,
    className = _ref5.className;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Loader_ProgressBar, {
    className: classnames_default()('progress-bar', className),
    percent: progress !== null && progress !== void 0 ? progress : 0,
    color: 'var(--wp-admin-theme-color)',
    bgcolor: '#E0E0E0'
  });
};
Loader.Subtext = function (_ref6) {
  var children = _ref6.children,
    className = _ref6.className;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
    className: classnames_default()('woocommerce-onboarding-loader__paragraph', className),
    children: children
  });
};
var LoaderSequence = function LoaderSequence(_ref7) {
  var interval = _ref7.interval,
    _ref7$shouldLoop = _ref7.shouldLoop,
    shouldLoop = _ref7$shouldLoop === void 0 ? true : _ref7$shouldLoop,
    children = _ref7.children,
    _ref7$onChange = _ref7.onChange,
    onChange = _ref7$onChange === void 0 ? function () {} : _ref7$onChange;
  var _useState = (0,react.useState)(0),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    index = _useState2[0],
    setIndex = _useState2[1];
  var childCount = react.Children.count(children);
  (0,react.useEffect)(function () {
    var rotateInterval = setInterval(function () {
      setIndex(function (prevIndex) {
        var nextIndex = prevIndex + 1;
        if (shouldLoop) {
          var updatedIndex = nextIndex % childCount;
          onChange(updatedIndex);
          return updatedIndex;
        }
        if (nextIndex < childCount) {
          onChange(nextIndex);
          return nextIndex;
        }
        clearInterval(rotateInterval);
        return prevIndex;
      });
    }, interval);
    return function () {
      return clearInterval(rotateInterval);
    };
  }, [interval, children, shouldLoop, childCount]);
  var childToDisplay = react.Children.toArray(children)[index];
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: childToDisplay
  });
};
Loader.Sequence = LoaderSequence; // eslint rule-of-hooks can't handle the compound component definition directly
try {
    // @ts-ignore
    Loader.displayName = "Loader";
    // @ts-ignore
    Loader.__docgenInfo = { "description": "", "displayName": "Loader", "props": { "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/onboarding/src/components/Loader/Loader.tsx#Loader"] = { docgenInfo: Loader.__docgenInfo, name: "Loader", path: "../../packages/js/onboarding/src/components/Loader/Loader.tsx#Loader" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    Layout.displayName = "Loader.Layout";
    // @ts-ignore
    Layout.__docgenInfo = { "description": "", "displayName": "Loader.Layout", "props": { "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/onboarding/src/components/Loader/Loader.tsx#Loader.Layout"] = { docgenInfo: Loader.Layout.__docgenInfo, name: "Loader.Layout", path: "../../packages/js/onboarding/src/components/Loader/Loader.tsx#Loader.Layout" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    Illustration.displayName = "Loader.Illustration";
    // @ts-ignore
    Illustration.__docgenInfo = { "description": "", "displayName": "Loader.Illustration", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/onboarding/src/components/Loader/Loader.tsx#Loader.Illustration"] = { docgenInfo: Loader.Illustration.__docgenInfo, name: "Loader.Illustration", path: "../../packages/js/onboarding/src/components/Loader/Loader.tsx#Loader.Illustration" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    Title.displayName = "Loader.Title";
    // @ts-ignore
    Title.__docgenInfo = { "description": "", "displayName": "Loader.Title", "props": { "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/onboarding/src/components/Loader/Loader.tsx#Loader.Title"] = { docgenInfo: Loader.Title.__docgenInfo, name: "Loader.Title", path: "../../packages/js/onboarding/src/components/Loader/Loader.tsx#Loader.Title" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    ProgressBar.displayName = "Loader.ProgressBar";
    // @ts-ignore
    ProgressBar.__docgenInfo = { "description": "", "displayName": "Loader.ProgressBar", "props": { "progress": { "defaultValue": null, "description": "", "name": "progress", "required": true, "type": { "name": "number" } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/onboarding/src/components/Loader/Loader.tsx#Loader.ProgressBar"] = { docgenInfo: Loader.ProgressBar.__docgenInfo, name: "Loader.ProgressBar", path: "../../packages/js/onboarding/src/components/Loader/Loader.tsx#Loader.ProgressBar" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    Subtext.displayName = "Loader.Subtext";
    // @ts-ignore
    Subtext.__docgenInfo = { "description": "", "displayName": "Loader.Subtext", "props": { "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/onboarding/src/components/Loader/Loader.tsx#Loader.Subtext"] = { docgenInfo: Loader.Subtext.__docgenInfo, name: "Loader.Subtext", path: "../../packages/js/onboarding/src/components/Loader/Loader.tsx#Loader.Subtext" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    Sequence.displayName = "Loader.Sequence";
    // @ts-ignore
    Sequence.__docgenInfo = { "description": "", "displayName": "Loader.Sequence", "props": { "interval": { "defaultValue": null, "description": "", "name": "interval", "required": true, "type": { "name": "number" } }, "shouldLoop": { "defaultValue": { value: "true" }, "description": "", "name": "shouldLoop", "required": false, "type": { "name": "boolean" } }, "onChange": { "defaultValue": { value: "() => {}" }, "description": "", "name": "onChange", "required": false, "type": { "name": "((index: number) => void)" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/onboarding/src/components/Loader/Loader.tsx#Loader.Sequence"] = { docgenInfo: Loader.Sequence.__docgenInfo, name: "Loader.Sequence", path: "../../packages/js/onboarding/src/components/Loader/Loader.tsx#Loader.Sequence" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/components/Loader/index.ts


/***/ }),

/***/ "../../packages/js/onboarding/src/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  aH: () => (/* reexport */ Loader/* Loader */.a),
  b$: () => (/* reexport */ findCountryOption),
  JJ: () => (/* reexport */ getCountry)
});

// UNUSED EXPORTS: Affirm, AfterPay, Amex, ApplePay, ClearPay, Diners, Discover, GooglePay, Ideal, Klarna, MasterCard, RecommendedRibbon, SetupRequired, TaskReferralRecord, Visa, WCPayAcceptedMethods, WCPayBanner, WCPayBannerBody, WCPayBannerFooter, WCPayBannerImage, WCPayBannerImageCut, WCPayBannerText, WCPayBenefits, WCPayCard, WCPayCardBody, WCPayCardFooter, WCPayCardHeader, WCPayLogo, Woo, WooOnboardingTask, WooOnboardingTaskListHeader, WooOnboardingTaskListItem, WooPaymentGatewayConfigure, WooPaymentGatewaySetup, WooPaymentsMethodsLogos, accessTaskReferralStorage, createStorageUtils

// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.description.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/images/cards/visa.js
/**
 * External dependencies
 */


/* harmony default export */ const visa = (function () {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
    width: "64",
    height: "40",
    viewBox: "0 0 64 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("rect", {
      width: "64",
      height: "40",
      rx: "3",
      fill: "white"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M28.6564 27.2545H24.7949L27.2102 13.2538H31.0714L28.6564 27.2545Z",
      fill: "#1C34C3"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M42.6537 13.5961C41.8921 13.3128 40.684 13 39.1903 13C35.3769 13 32.6916 14.9064 32.6751 17.6319C32.6435 19.6428 34.5977 20.7597 36.0594 21.4302C37.5534 22.1154 38.0612 22.5626 38.0612 23.1733C38.046 24.1112 36.854 24.5436 35.7422 24.5436C34.2006 24.5436 33.3745 24.3207 32.1191 23.7989L31.6107 23.5752L31.0703 26.718C31.976 27.1048 33.6446 27.4481 35.3769 27.4631C39.4287 27.4631 42.0665 25.5863 42.0977 22.6818C42.1131 21.088 41.0812 19.8667 38.8564 18.8688C37.5058 18.2282 36.6787 17.7962 36.6787 17.1408C36.6946 16.5449 37.3783 15.9346 38.9029 15.9346C40.1582 15.9047 41.0806 16.1876 41.7793 16.4707L42.1286 16.6194L42.6537 13.5961Z",
      fill: "#1C34C3"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M49.5665 13.2538H52.5534L55.6686 27.2543H52.0933C52.0933 27.2543 51.7434 25.6456 51.6325 25.1541H46.6747C46.5313 25.5263 45.8642 27.2543 45.8642 27.2543H41.8125L47.5482 14.4154C47.9456 13.5068 48.6454 13.2538 49.5665 13.2538ZM49.3285 18.3773C49.3285 18.3773 48.1049 21.4902 47.7869 22.2945H50.9965C50.8377 21.5945 50.1064 18.2432 50.1064 18.2432L49.8366 17.0368C49.7229 17.3475 49.5586 17.7746 49.4478 18.0626C49.3726 18.2579 49.322 18.3893 49.3285 18.3773Z",
      fill: "#1C34C3"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.06356 13.2538H14.2763C15.1184 13.2833 15.8017 13.5365 16.0241 14.4307L17.3743 20.8634C17.3744 20.8638 17.3745 20.8643 17.3747 20.8647L17.7879 22.8009L21.5696 13.2538H25.6528L19.5832 27.2396H15.4998L12.058 15.0743C10.8705 14.4234 9.51527 13.8999 8 13.5367L8.06356 13.2538Z",
      fill: "#1C34C3"
    })]
  });
});
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/images/cards/mastercard.js
/**
 * External dependencies
 */


/* harmony default export */ const mastercard = (function () {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
    width: "64",
    height: "40",
    viewBox: "0 0 64 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("rect", {
      width: "64",
      height: "40",
      fill: "white"
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("g", {
      clipPath: "url(#clip0_1_132)",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
        d: "M37.376 10.284H26.56V29.716H37.376V10.284Z",
        fill: "#FF5A00"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
        d: "M27.28 20C27.28 16.052 29.136 12.548 31.984 10.284C29.888 8.636 27.244 7.64 24.36 7.64C17.528 7.64 12 13.168 12 20C12 26.832 17.528 32.36 24.36 32.36C27.244 32.36 29.888 31.364 31.984 29.716C29.132 27.484 27.28 23.948 27.28 20Z",
        fill: "#EB001B"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
        d: "M51.968 20C51.968 26.832 46.44 32.36 39.608 32.36C36.724 32.36 34.08 31.364 31.984 29.716C34.868 27.448 36.688 23.948 36.688 20C36.688 16.052 34.832 12.548 31.984 10.284C34.076 8.636 36.72 7.64 39.604 7.64C46.44 7.64 51.968 13.204 51.968 20Z",
        fill: "#F79E1B"
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("defs", {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("clipPath", {
        id: "clip0_1_132",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("rect", {
          width: "40",
          height: "24.72",
          fill: "white",
          transform: "translate(12 7.64)"
        })
      })
    })]
  });
});
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/images/cards/maestro.js
/**
 * External dependencies
 */


/* harmony default export */ const maestro = (function () {
  return /*#__PURE__*/_jsxs("svg", {
    width: "51",
    height: "35",
    viewBox: "0 0 51 35",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/_jsx("rect", {
      x: "0.5",
      y: "0.5",
      width: "49.6897",
      height: "34",
      rx: "3.5",
      fill: "white",
      stroke: "#F3F3F3"
    }), /*#__PURE__*/_jsx("path", {
      d: "M29.9708 22.8244H21.3047V7.35352H29.9708V22.8244Z",
      fill: "#6C6BBD"
    }), /*#__PURE__*/_jsx("path", {
      d: "M21.8549 15.0891C21.8549 11.9507 23.3341 9.15521 25.6375 7.35365C23.9531 6.03626 21.8272 5.24995 19.5168 5.24995C14.0471 5.24995 9.61328 9.65501 9.61328 15.0891C9.61328 20.5232 14.0471 24.9282 19.5168 24.9282C21.8272 24.9282 23.9531 24.1419 25.6375 22.8245C23.3341 21.023 21.8549 18.2274 21.8549 15.0891Z",
      fill: "#EB001B"
    }), /*#__PURE__*/_jsx("path", {
      d: "M41.6626 15.0891C41.6626 20.5232 37.2288 24.9282 31.7591 24.9282C29.4487 24.9282 27.3228 24.1419 25.6377 22.8245C27.9418 21.023 29.421 18.2274 29.421 15.0891C29.421 11.9507 27.9418 9.15521 25.6377 7.35365C27.3228 6.03626 29.4487 5.24995 31.7591 5.24995C37.2288 5.24995 41.6626 9.65501 41.6626 15.0891Z",
      fill: "#0099DF"
    }), /*#__PURE__*/_jsx("path", {
      d: "M32.9036 27.1956C33.0188 27.1956 33.1845 27.2175 33.311 27.2669L33.1347 27.8024C33.0138 27.753 32.8929 27.7367 32.777 27.7367C32.403 27.7367 32.216 27.9769 32.216 28.4085V29.8735H31.6436V27.2613H32.2103V27.5784C32.3589 27.3489 32.5736 27.1956 32.9036 27.1956Z",
      fill: "#231F20"
    }), /*#__PURE__*/_jsx("path", {
      d: "M30.7887 27.7807H29.8536V28.9611C29.8536 29.2232 29.9468 29.3984 30.2333 29.3984C30.382 29.3984 30.569 29.3489 30.739 29.2507L30.904 29.7368C30.7226 29.8625 30.4367 29.9395 30.1893 29.9395C29.5123 29.9395 29.2762 29.5785 29.2762 28.9717V27.7807H28.7422V27.2615H29.2762V26.469H29.8536V27.2615H30.7887V27.7807Z",
      fill: "#231F20"
    }), /*#__PURE__*/_jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M24.1754 27.1958C24.9128 27.1958 25.4191 27.7532 25.4247 28.5676C25.4247 28.6433 25.4192 28.7135 25.4135 28.7842L25.4134 28.7859H23.4607C23.5432 29.2557 23.8788 29.4252 24.2472 29.4252C24.511 29.4252 24.7919 29.327 25.0116 29.1519L25.2925 29.5729C24.9732 29.8406 24.6105 29.9388 24.2144 29.9388C23.4273 29.9388 22.8662 29.3977 22.8662 28.5676C22.8662 27.7532 23.4052 27.1958 24.1754 27.1958ZM24.1648 27.7036C23.7574 27.7036 23.5269 27.9607 23.4658 28.3379H24.8304C24.77 27.9332 24.5332 27.7036 24.1648 27.7036Z",
      fill: "#231F20"
    }), /*#__PURE__*/_jsx("path", {
      d: "M27.9386 27.9283C27.7793 27.8295 27.455 27.7038 27.1193 27.7038C26.8057 27.7038 26.6187 27.8189 26.6187 28.0103C26.6187 28.1848 26.8164 28.2342 27.0639 28.2668L27.3334 28.3049C27.9058 28.3875 28.2522 28.6277 28.2522 29.0868C28.2522 29.5841 27.812 29.9395 27.0532 29.9395C26.6237 29.9395 26.2277 29.83 25.9141 29.6004L26.1836 29.1575C26.3763 29.3052 26.6628 29.4309 27.0589 29.4309C27.4493 29.4309 27.6584 29.3164 27.6584 29.1137C27.6584 28.9667 27.5098 28.8842 27.1962 28.841L26.9266 28.8028C26.3379 28.7203 26.0186 28.4582 26.0186 28.0322C26.0186 27.513 26.4481 27.1958 27.1137 27.1958C27.5318 27.1958 27.9115 27.289 28.1861 27.4692L27.9386 27.9283Z",
      fill: "#231F20"
    }), /*#__PURE__*/_jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M35.561 27.3015C35.3872 27.2308 35.1982 27.1958 34.9942 27.1958C34.7902 27.1958 34.6013 27.2308 34.4275 27.3015C34.2537 27.3716 34.1044 27.4685 33.9785 27.5918C33.8526 27.715 33.7537 27.8608 33.6819 28.0284C33.6101 28.1967 33.5742 28.3793 33.5742 28.5764C33.5742 28.7734 33.6101 28.9561 33.6819 29.1243C33.7537 29.292 33.8526 29.4384 33.9785 29.5616C34.1044 29.6848 34.2537 29.7812 34.4275 29.8519C34.6013 29.9219 34.7902 29.9569 34.9942 29.9569C35.1982 29.9569 35.3872 29.9219 35.561 29.8519C35.7348 29.7812 35.8853 29.6848 36.0118 29.5616C36.139 29.4384 36.2379 29.292 36.3097 29.1243C36.3815 28.9561 36.4174 28.7734 36.4174 28.5764C36.4174 28.3793 36.3815 28.1967 36.3097 28.0284C36.2379 27.8608 36.139 27.715 36.0118 27.5918C35.8853 27.4685 35.7348 27.3716 35.561 27.3015ZM34.666 27.7969C34.7674 27.7563 34.8763 27.7356 34.9941 27.7356C35.1118 27.7356 35.2214 27.7563 35.3221 27.7969C35.4235 27.8382 35.5117 27.8958 35.5854 27.9696C35.6603 28.0434 35.7182 28.1322 35.761 28.2354C35.8032 28.3386 35.824 28.4525 35.824 28.5763C35.824 28.7008 35.8032 28.8141 35.761 28.9173C35.7182 29.0205 35.6603 29.1093 35.5854 29.1831C35.5117 29.2569 35.4235 29.3145 35.3221 29.3558C35.2214 29.3971 35.1118 29.4171 34.9941 29.4171C34.8763 29.4171 34.7674 29.3971 34.666 29.3558C34.5652 29.3145 34.4777 29.2569 34.404 29.1831C34.3303 29.1093 34.2724 29.0205 34.2302 28.9173C34.188 28.8141 34.1672 28.7008 34.1672 28.5763C34.1672 28.4525 34.188 28.3386 34.2302 28.2354C34.2724 28.1322 34.3303 28.0434 34.404 27.9696C34.4777 27.8958 34.5652 27.8382 34.666 27.7969Z",
      fill: "#231F20"
    }), /*#__PURE__*/_jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M22.2524 27.2615V28.5676V29.8737H21.6806V29.5566C21.4986 29.7918 21.224 29.9394 20.85 29.9394C20.1126 29.9394 19.5352 29.3652 19.5352 28.5676C19.5352 27.7694 20.1126 27.1958 20.85 27.1958C21.224 27.1958 21.4986 27.3434 21.6806 27.5786V27.2615H22.2524ZM20.9211 27.7312C20.4262 27.7312 20.1233 28.1084 20.1233 28.5675C20.1233 29.0267 20.4262 29.4033 20.9211 29.4033C21.394 29.4033 21.7133 29.0429 21.7133 28.5675C21.7133 28.0921 21.394 27.7312 20.9211 27.7312Z",
      fill: "#231F20"
    }), /*#__PURE__*/_jsx("path", {
      d: "M19.0293 29.8735V28.234C19.0293 27.6166 18.6332 27.2012 17.9953 27.1956C17.6597 27.19 17.3127 27.2938 17.0709 27.6604C16.8896 27.3707 16.603 27.1956 16.2013 27.1956C15.9211 27.1956 15.6459 27.2775 15.4312 27.5834V27.2613H14.8594V29.8735H15.4368V28.4254C15.4368 27.9719 15.69 27.7311 16.0804 27.7311C16.4601 27.7311 16.6528 27.9769 16.6528 28.4198V29.8735H17.2302V28.4254C17.2302 27.9719 17.4947 27.7311 17.8738 27.7311C18.2649 27.7311 18.4519 27.9769 18.4519 28.4198V29.8735H19.0293V29.8735Z",
      fill: "#231F20"
    })]
  });
});
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/images/cards/amex.js
/**
 * External dependencies
 */


/* harmony default export */ const amex = (function () {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
    width: "64",
    height: "40",
    viewBox: "0 0 64 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("g", {
      clipPath: "url(#clip0_7623_49052)",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("rect", {
        width: "64",
        height: "40",
        rx: "3",
        fill: "white"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
        d: "M56.5333 9.81335L57.8133 6.33335L64 6.38669V0.0533428L0 0V40L64 40.0533V33.7333L58.1467 33.68L56.1067 31.2934L53.9867 33.68H38.3067V20.9734H33.1333L39.6 6.33335H45.8933L47.4133 9.65334V6.33335H55.2267L56.5333 9.81335ZM52.12 12.12L52.1067 10.72L52.64 12.12L55.24 19.0667H57.8267L60.44 12.12L60.9467 10.7333V19.0667L64 19.12V8.45334L59.1467 8.4L57.0933 13.8134L56.5467 15.28L55.9867 13.8134L53.92 8.4H49.4V19.0667H52.12V12.12ZM46.2667 19.0667H49.4L44.7067 8.4H41.0667L36.3466 19.0667H39.44L40.2667 17.0134H45.44L46.2667 19.0667ZM42.32 12.0134L42.8533 10.68L43.3867 12.0134L44.4933 14.7066H41.2133L42.32 12.0134ZM40.4933 20.9866V31.6134H49.4V29.3066H43.2133V27.4534H49.28V25.16H43.2133V23.2934H49.4V20.9866H40.4933ZM59.3067 31.6134H62.84L57.8533 26.28L62.84 20.9866H59.36L56.1467 24.44L52.9467 20.9866H49.4L54.3733 26.32L49.4 31.6134H52.84L56.08 28.1467L59.3067 31.6134ZM60.6533 26.2666L64 29.3867V23.2934L60.6533 26.2666Z",
        fill: "#006FCF"
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("defs", {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("clipPath", {
        id: "clip0_7623_49052",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("rect", {
          width: "64",
          height: "40",
          rx: "3",
          fill: "white"
        })
      })
    })]
  });
});
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/images/cards/applepay.js
/**
 * External dependencies
 */


/* harmony default export */ const applepay = (function () {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
    width: "64",
    height: "40",
    viewBox: "0 0 64 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("rect", {
      width: "64",
      height: "40",
      fill: "white"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M18.92 13.32C18.42 13.92 17.6 14.41 16.79 14.34C16.69 13.52 17.09 12.64 17.55 12.1C18.05 11.48 18.95 11.03 19.67 11C19.75 11.86 19.42 12.7 18.92 13.32ZM19.66 14.5C19.0027 14.5012 18.3538 14.6481 17.76 14.93C17.4955 15.0585 17.2118 15.143 16.92 15.18C16.67 15.18 16.37 15.06 16.03 14.92C15.59 14.75 15.09 14.54 14.56 14.55C13.9502 14.5664 13.3555 14.7433 12.8358 15.0628C12.3161 15.3823 11.8899 15.8332 11.6 16.37C10.33 18.57 11.27 21.85 12.5 23.65C13.1 24.54 13.82 25.51 14.77 25.48C15.19 25.46 15.49 25.34 15.8 25.2C16.16 25.05 16.53 24.89 17.11 24.89C17.67 24.89 18.03 25.04 18.37 25.19C18.69 25.34 19 25.47 19.47 25.46C20.45 25.45 21.07 24.57 21.67 23.68C22.32 22.73 22.6 21.79 22.64 21.65V21.64L22.63 21.62C22.41 21.52 20.75 20.76 20.73 18.7C20.7357 18.1518 20.8788 17.6138 21.146 17.1351C21.4133 16.6565 21.7963 16.2525 22.26 15.96L22.29 15.94C21.9942 15.5116 21.6023 15.1583 21.1457 14.9083C20.689 14.6583 20.1803 14.5185 19.66 14.5ZM26.46 25.37V12.02H31.42C32.0003 11.994 32.5796 12.0899 33.1205 12.3013C33.6615 12.5128 34.1522 12.8352 34.5611 13.2478C34.9699 13.6604 35.2878 14.154 35.4943 14.697C35.7008 15.2399 35.7913 15.82 35.76 16.4C35.76 19 33.94 20.8 31.35 20.8H28.5V25.37H26.45H26.46ZM28.51 13.77H30.87C32.65 13.77 33.67 14.73 33.67 16.41C33.67 18.1 32.65 19.07 30.87 19.07H28.5V13.77H28.51ZM42.53 23.77C42.2261 24.3011 41.7838 24.7397 41.2502 25.0391C40.7165 25.3385 40.1116 25.4874 39.5 25.47C37.6 25.47 36.27 24.32 36.27 22.59C36.27 20.89 37.56 19.89 39.94 19.75L42.49 19.6V18.86C42.49 17.77 41.79 17.18 40.54 17.18C39.5 17.18 38.75 17.72 38.6 18.54H36.75C36.81 16.81 38.42 15.56 40.6 15.56C42.94 15.56 44.47 16.8 44.47 18.72V25.37H42.57V23.77H42.53ZM40.05 23.89C38.96 23.89 38.27 23.36 38.27 22.54C38.27 21.7 38.94 21.22 40.22 21.14L42.49 20.99V21.75C42.49 23 41.44 23.89 40.05 23.89ZM50.76 25.89C49.94 28.23 49 29 47 29C46.7392 29.0015 46.4785 28.9848 46.22 28.95V27.35L46.82 27.38C47.72 27.38 48.24 27 48.55 25.99L48.74 25.4L45.26 15.68H47.41L49.82 23.58H49.86L52.28 15.68H54.36L50.76 25.89Z",
      fill: "black"
    })]
  });
});
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/images/cards/cb.js
/**
 * External dependencies
 */


/* harmony default export */ const cb = (function () {
  return /*#__PURE__*/_jsxs("svg", {
    width: "52",
    height: "35",
    viewBox: "0 0 52 35",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/_jsx("rect", {
      x: "1.18945",
      y: "0.5",
      width: "49.6897",
      height: "34",
      rx: "2.5",
      fill: "url(#paint0_linear)",
      stroke: "#F1F1F1"
    }), /*#__PURE__*/_jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M19.7636 16.9816H26.6269C26.5657 15.4963 26.2201 13.9649 25.1717 12.9813C23.9229 11.8096 21.7355 11.375 19.781 11.375C17.7466 11.375 15.4968 11.8517 14.2414 13.1088C13.1588 14.1918 12.9248 15.9341 12.9248 17.4997C12.9248 19.1395 13.3827 21.0469 14.5571 22.1456C15.8059 23.3147 17.8294 23.625 19.781 23.625C21.6767 23.625 23.7302 23.2746 24.9718 22.1647C26.2099 21.0561 26.6377 19.1888 26.6377 17.4997V17.4918H19.7636V16.9816ZM27.0876 17.4921V23.3511H36.6352V23.3432C38.0322 23.267 39.1436 22.0059 39.1436 20.4575C39.1436 18.9084 38.0322 17.5664 36.6352 17.4895V17.4921H27.0876ZM36.5263 11.6203C37.8879 11.6203 38.9687 12.8032 38.9687 14.2957C38.9687 15.7087 37.9762 16.8626 36.7135 16.9816H27.0873V11.6118H36.2251C36.2813 11.6049 36.3468 11.6097 36.4108 11.6144C36.4508 11.6174 36.4901 11.6203 36.5263 11.6203Z",
      fill: "#FEFEFE"
    }), /*#__PURE__*/_jsx("defs", {
      children: /*#__PURE__*/_jsxs("linearGradient", {
        id: "paint0_linear",
        x1: "14.4385",
        y1: "-4.43215",
        x2: "2.09335",
        y2: "33.4202",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/_jsx("stop", {
          stopColor: "#222E72"
        }), /*#__PURE__*/_jsx("stop", {
          offset: "0.591647",
          stopColor: "#40CBFF"
        }), /*#__PURE__*/_jsx("stop", {
          offset: "1",
          stopColor: "#3CB792"
        })]
      })
    })]
  });
});
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/images/cards/diners.js
/**
 * External dependencies
 */


/* harmony default export */ const diners = (function () {
  return /*#__PURE__*/_jsxs("svg", {
    width: "64",
    height: "40",
    viewBox: "0 0 39 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/_jsx("rect", {
      x: "0.899902",
      y: "0.723633",
      width: "37.4",
      height: "23",
      rx: "1.5",
      fill: "#0079BE"
    }), /*#__PURE__*/_jsx("rect", {
      x: "0.899902",
      y: "0.723633",
      width: "37.4",
      height: "23",
      rx: "1.5",
      stroke: "#DDDDDD"
    }), /*#__PURE__*/_jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M29.5551 12.2932C29.5551 7.52058 25.5717 4.22171 21.2071 4.22363H17.4517C13.0353 4.22171 9.3999 7.52154 9.3999 12.2932C9.3999 16.6582 13.0348 20.2447 17.4517 20.2235H21.2076C25.5717 20.2447 29.5556 16.6568 29.5556 12.2932H29.5551Z",
      fill: "white"
    }), /*#__PURE__*/_jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.4747 4.89941C13.439 4.90085 10.1684 8.17812 10.168 12.2239C10.1689 16.2688 13.439 19.5461 17.4747 19.5475C21.5114 19.5461 24.7825 16.2688 24.7829 12.2239C24.7825 8.1786 21.5114 4.90085 17.4747 4.89941Z",
      fill: "#0079BE"
    }), /*#__PURE__*/_jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.8559 12.2045C12.8568 11.2668 13.1411 10.3512 13.6717 9.57803C14.2023 8.80485 14.9542 8.21017 15.8289 7.87207V16.5359C14.9541 16.1982 14.202 15.6038 13.6713 14.8308C13.1406 14.0577 12.8562 13.1422 12.8555 12.2045H12.8559ZM19.1445 16.5378V7.87207C20.0198 8.2095 20.7725 8.80395 21.3035 9.57723C21.8346 10.3505 22.1192 11.2664 22.1199 12.2045C22.1192 13.1427 21.8346 14.0587 21.3035 14.8321C20.7725 15.6055 20.0199 16.2002 19.1445 16.5378Z",
      fill: "white"
    })]
  });
});
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/images/cards/discover.js
/**
 * External dependencies
 */


/* harmony default export */ const discover = (function () {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 95.69 62.85",
    height: "40",
    width: "61",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("defs", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("clipPath", {
        id: "clip-path",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
          fill: "none",
          d: "M53.91 31.28a6.56 6.56 0 1 1-6.56-6.55 6.56 6.56 0 0 1 6.56 6.55Z"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("clipPath", {
        id: "clip-path-2",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
          fill: "none",
          d: "M90.39 2.3H5.3a3 3 0 0 0-3 3v52.25a3 3 0 0 0 3 3h85.09a3 3 0 0 0 3-3V5.3a3 3 0 0 0-3-3Zm-1.48 29.13a28.13 28.13 0 0 1-28.13 28.12H5.3a2 2 0 0 1-2-2V5.3a2 2 0 0 1 2-2h55.48a28.13 28.13 0 0 1 28.13 28.13Z"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("clipPath", {
        id: "clip-path-3",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("circle", {
          fill: "none",
          cx: "47.88",
          cy: "31.43",
          r: "54.04"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("linearGradient", {
        id: "linear-gradient",
        x1: "50.71",
        y1: "36.53",
        x2: "46.17",
        y2: "29.43",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          offset: "0",
          stopColor: "#ff9200"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          offset: ".21",
          stopColor: "#ff8d00"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          offset: ".45",
          stopColor: "#ff8000"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          offset: ".62",
          stopColor: "#ff7100"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          offset: ".82",
          stopColor: "#ff5e00"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          offset: "1",
          stopColor: "#ff5200"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("linearGradient", {
        id: "linear-gradient-2",
        x1: "49.99",
        y1: "36.44",
        x2: "43.36",
        y2: "23.47",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          offset: "0",
          stopColor: "#ff7100",
          stopOpacity: "0"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          offset: ".03",
          stopColor: "#ff6e00",
          stopOpacity: ".03"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          offset: ".21",
          stopColor: "#ff5a00",
          stopOpacity: ".25"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          offset: ".39",
          stopColor: "#ff4900",
          stopOpacity: ".42"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          offset: ".56",
          stopColor: "#ff3c00",
          stopOpacity: ".56"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          offset: ".72",
          stopColor: "#f30",
          stopOpacity: ".66"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          offset: ".86",
          stopColor: "#ff2d00",
          stopOpacity: ".72"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          offset: ".98",
          stopColor: "#ff2b00",
          stopOpacity: ".74"
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("g", {
      style: {
        isolation: 'isolate'
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("g", {
        id: "Mark",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
          d: "M3.3 5.3v52.25a2 2 0 0 0 2 2h55.48a28.13 28.13 0 0 0 28.13-28.12A28.13 28.13 0 0 0 60.78 3.3H5.3a2 2 0 0 0-2 2Z",
          style: {
            fill: '#fff'
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
          fill: "#261f20",
          d: "M10.06 25.1H6.51v12.38H10a6.45 6.45 0 0 0 4.42-1.43 6.2 6.2 0 0 0 2.28-4.75c0-3.65-2.7-6.2-6.64-6.2Zm2.82 9.3a4.57 4.57 0 0 1-3.31 1h-.64v-8.2h.64a4.5 4.5 0 0 1 3.31 1 4.21 4.21 0 0 1 1.34 3.08 4.26 4.26 0 0 1-1.34 3.12ZM17.82 25.1h2.41v12.38h-2.41zM26.13 29.85c-1.45-.53-1.87-.89-1.87-1.55s.76-1.38 1.8-1.38a2.47 2.47 0 0 1 1.94 1l1.27-1.66a5.41 5.41 0 0 0-3.64-1.37 3.64 3.64 0 0 0-3.86 3.55c0 1.7.78 2.58 3.05 3.39a9.05 9.05 0 0 1 1.66.71 1.46 1.46 0 0 1 .73 1.28 1.76 1.76 0 0 1-1.88 1.74 2.84 2.84 0 0 1-2.63-1.65l-1.56 1.5a4.8 4.8 0 0 0 4.28 2.36 4 4 0 0 0 4.27-4.06c0-1.96-.81-2.85-3.56-3.86ZM30.46 31.3A6.4 6.4 0 0 0 37 37.76a6.65 6.65 0 0 0 3-.76v-2.8a3.88 3.88 0 0 1-2.92 1.35 4 4 0 0 1-4.16-4.27A4.12 4.12 0 0 1 37 27a4 4 0 0 1 3 1.4v-2.81a6.15 6.15 0 0 0-3-.77 6.51 6.51 0 0 0-6.54 6.48ZM59.16 33.42l-3.3-8.32h-2.64l5.26 12.7h1.3l5.34-12.7h-2.61l-3.35 8.32zM66.22 37.48h6.84v-2.09h-4.43v-3.34h4.27v-2.1h-4.27V27.2h4.43v-2.1h-6.84v12.38zM82.63 28.76c0-2.32-1.6-3.66-4.39-3.66h-3.58v12.38h2.41v-5h.32l3.34 5h3l-3.9-5.21a3.3 3.3 0 0 0 2.8-3.51Zm-4.85 2h-.71v-3.71h.75c1.5 0 2.32.63 2.32 1.84s-.82 1.91-2.36 1.91ZM84.55 25.75c0-.21-.15-.33-.41-.33h-.35v1.09h.26v-.42l.3.42h.32l-.36-.45a.3.3 0 0 0 .24-.31Zm-.46.15v-.28c.13 0 .2 0 .2.14s-.07.14-.2.14Z"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
          fill: "#261f20",
          d: "M84.19 25a1 1 0 0 0 0 1.9 1 1 0 0 0 0-1.9Zm0 1.73a.78.78 0 0 1 0-1.56.78.78 0 0 1 0 1.56Z"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
          d: "M53.91 31.28a6.56 6.56 0 1 1-6.55-6.55 6.56 6.56 0 0 1 6.55 6.55Z",
          style: {
            fill: "url(#linear-gradient)"
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
          d: "M53.91 31.28a6.56 6.56 0 1 1-6.55-6.55 6.56 6.56 0 0 1 6.55 6.55Z",
          style: {
            opacity: 0.65,
            fill: "url(#linear-gradient-2)",
            mixBlendMode: 'multiply'
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("g", {
          style: {
            opacity: 0.5,
            mixBlendMode: 'multiply'
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("g", {
            style: {
              clipPath: "url('#clip-path')"
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.38 24.63a6.69 6.69 0 1 1-6.68 6.68 6.67 6.67 0 0 1 6.68-6.68Z",
              style: {
                fill: '#020000'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.39 24.64a6.69 6.69 0 1 1-6.68 6.68 6.68 6.68 0 0 1 6.68-6.68Z",
              style: {
                fill: '#030100'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.4 24.65a6.69 6.69 0 1 1-6.69 6.68 6.67 6.67 0 0 1 6.69-6.68Z",
              style: {
                fill: '#050100'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.4 24.66a6.68 6.68 0 1 1-6.68 6.68 6.68 6.68 0 0 1 6.68-6.68Z",
              style: {
                fill: '#070200'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.41 24.67a6.68 6.68 0 1 1-6.68 6.68 6.68 6.68 0 0 1 6.68-6.68Z",
              style: {
                fill: '#080200'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.42 24.68a6.68 6.68 0 1 1-6.68 6.68 6.68 6.68 0 0 1 6.68-6.68Z",
              style: {
                fill: '#0a0300'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.43 24.69a6.68 6.68 0 1 1-6.68 6.68 6.67 6.67 0 0 1 6.68-6.68Z",
              style: {
                fill: '#0c0300'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.43 24.7a6.68 6.68 0 0 1 6.71 6.64 6.75 6.75 0 0 1-6.71 6.72 6.68 6.68 0 0 1 0-13.36Z",
              style: {
                fill: '#0e0400'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.44 24.71a6.67 6.67 0 0 1 6.71 6.63 6.75 6.75 0 0 1-6.71 6.73 6.68 6.68 0 0 1 0-13.36Z",
              style: {
                fill: '#0f0400'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.45 24.73a6.67 6.67 0 0 1 6.71 6.62 6.76 6.76 0 0 1-6.71 6.73 6.68 6.68 0 1 1 0-13.35Z",
              style: {
                fill: '#110500'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.45 24.74a6.66 6.66 0 0 1 6.72 6.61 6.76 6.76 0 0 1-6.72 6.74 6.68 6.68 0 0 1 0-13.35Z",
              style: {
                fill: '#130500'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.46 24.75a6.66 6.66 0 0 1 6.72 6.6 6.76 6.76 0 0 1-6.72 6.74 6.67 6.67 0 1 1 0-13.34Z",
              style: {
                fill: '#140600'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.47 24.76a6.66 6.66 0 0 1 6.72 6.6 6.78 6.78 0 0 1-6.72 6.74 6.67 6.67 0 0 1 0-13.34Z",
              style: {
                fill: '#160600'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.48 24.77a6.66 6.66 0 0 1 6.72 6.59 6.78 6.78 0 0 1-6.72 6.75 6.67 6.67 0 0 1 0-13.34Z",
              style: {
                fill: '#180600'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.48 24.78a6.66 6.66 0 0 1 6.73 6.59 6.79 6.79 0 0 1-6.73 6.75 6.67 6.67 0 1 1 0-13.34Z",
              style: {
                fill: '#190700'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.49 24.79a6.66 6.66 0 0 1 6.73 6.58 6.8 6.8 0 0 1-6.73 6.76 6.67 6.67 0 0 1 0-13.34Z",
              style: {
                fill: '#1b0700'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.5 24.8a6.65 6.65 0 0 1 6.73 6.57 6.81 6.81 0 0 1-6.73 6.77 6.67 6.67 0 0 1 0-13.34Z",
              style: {
                fill: '#1d0800'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.5 24.81a6.66 6.66 0 0 1 6.74 6.57 6.81 6.81 0 0 1-6.74 6.77 6.67 6.67 0 0 1 0-13.34Z",
              style: {
                fill: '#1f0800'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.51 24.82a6.66 6.66 0 0 1 6.74 6.56 6.82 6.82 0 0 1-6.74 6.77 6.67 6.67 0 0 1 0-13.33Z",
              style: {
                fill: '#200900'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.52 24.84a6.65 6.65 0 0 1 6.74 6.55 6.82 6.82 0 0 1-6.74 6.77 6.66 6.66 0 0 1 0-13.32Z",
              style: {
                fill: '#220900'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.53 24.85a6.64 6.64 0 0 1 6.74 6.54 6.83 6.83 0 0 1-6.74 6.78 6.66 6.66 0 1 1 0-13.32Z",
              style: {
                fill: '#240a00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.53 24.86a6.65 6.65 0 0 1 6.75 6.54 6.84 6.84 0 0 1-6.75 6.78 6.66 6.66 0 0 1 0-13.32Z",
              style: {
                fill: '#250a00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.54 24.87a6.65 6.65 0 0 1 6.75 6.53 6.85 6.85 0 0 1-6.75 6.79 6.66 6.66 0 1 1 0-13.32Z",
              style: {
                fill: '#270b00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.55 24.88a6.65 6.65 0 0 1 6.75 6.52 6.86 6.86 0 0 1-6.75 6.8 6.66 6.66 0 1 1 0-13.32Z",
              style: {
                fill: '#290b00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.55 24.89a6.65 6.65 0 0 1 6.76 6.52 6.86 6.86 0 0 1-6.76 6.8 6.66 6.66 0 0 1 0-13.32Z",
              style: {
                fill: '#2a0c00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.56 24.9a6.64 6.64 0 0 1 6.76 6.51 6.86 6.86 0 0 1-6.76 6.8 6.66 6.66 0 0 1 0-13.31Z",
              style: {
                fill: '#2c0c00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.57 24.91a6.64 6.64 0 0 1 6.76 6.51 6.88 6.88 0 0 1-6.76 6.8 6.66 6.66 0 1 1 0-13.31Z",
              style: {
                fill: '#2e0d00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.58 24.92a6.65 6.65 0 0 1 6.76 6.5 6.88 6.88 0 0 1-6.76 6.81 6.66 6.66 0 1 1 0-13.31Z",
              style: {
                fill: '#300d00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.58 24.94a6.63 6.63 0 0 1 6.77 6.49 6.89 6.89 0 0 1-6.77 6.81 6.65 6.65 0 1 1 0-13.3Z",
              style: {
                fill: '#310d00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.59 25a6.63 6.63 0 0 1 6.77 6.48 6.9 6.9 0 0 1-6.77 6.82 6.65 6.65 0 0 1 0-13.3Z",
              style: {
                fill: '#330e00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.6 25a6.63 6.63 0 0 1 6.77 6.47 6.91 6.91 0 0 1-6.77 6.83 6.65 6.65 0 0 1 0-13.3Z",
              style: {
                fill: '#350e00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.6 25a6.63 6.63 0 0 1 6.78 6.47 6.91 6.91 0 0 1-6.78 6.83 6.65 6.65 0 0 1 0-13.3Z",
              style: {
                fill: '#360f00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.61 25a6.63 6.63 0 0 1 6.78 6.46 6.93 6.93 0 0 1-6.78 6.84 6.65 6.65 0 1 1 0-13.3Z",
              style: {
                fill: '#380f00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.62 25a6.63 6.63 0 0 1 6.78 6.46 6.92 6.92 0 0 1-6.78 6.83 6.65 6.65 0 1 1 0-13.29Z",
              style: {
                fill: '#3a1000'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.63 25a6.62 6.62 0 0 1 6.78 6.45 6.93 6.93 0 0 1-6.78 6.84 6.65 6.65 0 1 1 0-13.29Z",
              style: {
                fill: '#3b1000'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.63 25a6.63 6.63 0 0 1 6.79 6.45 6.94 6.94 0 0 1-6.79 6.84 6.65 6.65 0 0 1 0-13.29Z",
              style: {
                fill: '#3d1100'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.64 25a6.63 6.63 0 0 1 6.79 6.44 7 7 0 0 1-6.79 6.85 6.65 6.65 0 0 1 0-13.29Z",
              style: {
                fill: '#3f1100'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.65 25a6.64 6.64 0 0 1 6.79 6.43 7 7 0 0 1-6.79 6.86 6.65 6.65 0 0 1 0-13.29Z",
              style: {
                fill: '#411200'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.65 25.05a6.62 6.62 0 0 1 6.8 6.42 7 7 0 0 1-6.8 6.86 6.64 6.64 0 0 1 0-13.28Z",
              style: {
                fill: '#421200'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.66 25.06a6.62 6.62 0 0 1 6.8 6.41 7 7 0 0 1-6.8 6.87 6.64 6.64 0 1 1 0-13.28Z",
              style: {
                fill: '#441300'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.67 25.07a6.62 6.62 0 0 1 6.8 6.41 7 7 0 0 1-6.8 6.86 6.64 6.64 0 1 1 0-13.27Z",
              style: {
                fill: '#461300'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.68 25.08a6.62 6.62 0 0 1 6.8 6.4 7 7 0 0 1-6.8 6.87 6.64 6.64 0 1 1 0-13.27Z",
              style: {
                fill: '#471300'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.68 25.09a6.61 6.61 0 0 1 6.81 6.39 7 7 0 0 1-6.81 6.88 6.64 6.64 0 0 1 0-13.27Z",
              style: {
                fill: '#491400'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.69 25.1a6.61 6.61 0 0 1 6.81 6.39 7 7 0 0 1-6.81 6.88 6.64 6.64 0 0 1 0-13.27Z",
              style: {
                fill: '#4b1400'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.7 25.11a6.61 6.61 0 0 1 6.81 6.38 7 7 0 0 1-6.81 6.89 6.64 6.64 0 1 1 0-13.27Z",
              style: {
                fill: '#4c1500'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.7 25.12c3.67.06 6.82 2.71 6.82 6.38a7 7 0 0 1-6.82 6.89 6.64 6.64 0 0 1 0-13.27Z",
              style: {
                fill: '#4e1500'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.71 25.13c3.66.06 6.82 2.71 6.82 6.37a7 7 0 0 1-6.82 6.9 6.64 6.64 0 0 1 0-13.27Z",
              style: {
                fill: '#501600'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.72 25.15c3.66.05 6.82 2.69 6.82 6.36a7 7 0 0 1-6.82 6.9 6.63 6.63 0 0 1 0-13.26Z",
              style: {
                fill: '#521600'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.73 25.16c3.66.05 6.82 2.69 6.82 6.35a7 7 0 0 1-6.82 6.9 6.63 6.63 0 1 1 0-13.25Z",
              style: {
                fill: '#531700'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.73 25.17c3.66 0 6.83 2.68 6.83 6.34a7 7 0 0 1-6.83 6.91 6.63 6.63 0 0 1 0-13.25Z",
              style: {
                fill: '#551700'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.74 25.18c3.66.06 6.83 2.68 6.83 6.34a7 7 0 0 1-6.83 6.91 6.63 6.63 0 1 1 0-13.25Z",
              style: {
                fill: '#571800'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.75 25.19c3.66.06 6.83 2.67 6.83 6.33a7.06 7.06 0 0 1-6.83 6.92 6.63 6.63 0 1 1 0-13.25Z",
              style: {
                fill: '#581800'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.75 25.2c3.66.06 6.84 2.67 6.84 6.33a7.07 7.07 0 0 1-6.84 6.92 6.63 6.63 0 0 1 0-13.25Z",
              style: {
                fill: '#5a1900'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.76 25.21c3.66.06 6.84 2.66 6.84 6.32a7.08 7.08 0 0 1-6.84 6.93 6.63 6.63 0 0 1 0-13.25Z",
              style: {
                fill: '#5c1900'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.77 25.22c3.65.06 6.84 2.66 6.84 6.32a7.08 7.08 0 0 1-6.84 6.93 6.63 6.63 0 0 1 0-13.25Z",
              style: {
                fill: '#5e1a00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.78 25.23c3.65.07 6.84 2.65 6.84 6.31a7.08 7.08 0 0 1-6.84 6.93 6.62 6.62 0 0 1 0-13.24Z",
              style: {
                fill: '#5f1a00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.78 25.24c3.66.07 6.85 2.65 6.85 6.3a7.09 7.09 0 0 1-6.85 6.94 6.62 6.62 0 0 1 0-13.24Z",
              style: {
                fill: '#611a00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.79 25.26c3.65.06 6.85 2.63 6.85 6.29a7.1 7.1 0 0 1-6.85 6.94 6.62 6.62 0 1 1 0-13.23Z",
              style: {
                fill: '#631b00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.8 25.27c3.65.06 6.85 2.63 6.85 6.28a7.11 7.11 0 0 1-6.85 7 6.62 6.62 0 1 1 0-13.23Z",
              style: {
                fill: '#641b00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.8 25.28c3.66.07 6.86 2.62 6.86 6.28a7.12 7.12 0 0 1-6.86 7 6.62 6.62 0 0 1 0-13.23Z",
              style: {
                fill: '#661c00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.81 25.29c3.65.07 6.86 2.62 6.86 6.27a7.14 7.14 0 0 1-6.86 7 6.62 6.62 0 0 1 0-13.23Z",
              style: {
                fill: '#681c00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.82 25.3c3.65.07 6.86 2.61 6.86 6.27a7.14 7.14 0 0 1-6.86 7 6.62 6.62 0 0 1 0-13.23Z",
              style: {
                fill: '#691d00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.83 25.31c3.65.07 6.86 2.61 6.86 6.26a7.14 7.14 0 0 1-6.86 7 6.57 6.57 0 0 1-6.62-6.61 6.64 6.64 0 0 1 6.62-6.65Z",
              style: {
                fill: '#6b1d00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.83 25.32c3.65.07 6.87 2.6 6.87 6.25a7.15 7.15 0 0 1-6.87 7 6.57 6.57 0 0 1-6.61-6.61 6.64 6.64 0 0 1 6.61-6.64Z",
              style: {
                fill: '#6d1e00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.84 25.33c3.65.08 6.87 2.6 6.87 6.25a7.15 7.15 0 0 1-6.87 7 6.57 6.57 0 0 1-6.61-6.61 6.64 6.64 0 0 1 6.61-6.64Z",
              style: {
                fill: '#6f1e00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.85 25.34c3.65.08 6.87 2.59 6.87 6.24a7.16 7.16 0 0 1-6.87 7A6.57 6.57 0 0 1 41.24 32a6.64 6.64 0 0 1 6.61-6.66Z",
              style: {
                fill: '#701f00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.85 25.35c3.65.08 6.88 2.59 6.88 6.24a7.17 7.17 0 0 1-6.88 7 6.56 6.56 0 0 1-6.6-6.59 6.63 6.63 0 0 1 6.6-6.65Z",
              style: {
                fill: '#721f00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.86 25.37c3.65.07 6.88 2.57 6.88 6.22a7.18 7.18 0 0 1-6.88 7 6.61 6.61 0 0 1 0-13.21Z",
              style: {
                fill: '#742000'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.87 25.38c3.65.08 6.88 2.57 6.88 6.22a7.19 7.19 0 0 1-6.88 7 6.61 6.61 0 1 1 0-13.21Z",
              style: {
                fill: '#752000'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.88 25.39c3.64.08 6.88 2.56 6.88 6.21a7.2 7.2 0 0 1-6.88 7 6.61 6.61 0 1 1 0-13.21Z",
              style: {
                fill: '#772000'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.88 25.4c3.65.08 6.89 2.56 6.89 6.2a7.2 7.2 0 0 1-6.89 7 6.56 6.56 0 0 1-6.6-6.6 6.62 6.62 0 0 1 6.6-6.6Z",
              style: {
                fill: '#792100'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.89 25.41c3.64.08 6.89 2.55 6.89 6.2a7.2 7.2 0 0 1-6.89 7 6.55 6.55 0 0 1-6.6-6.6 6.62 6.62 0 0 1 6.6-6.6Z",
              style: {
                fill: '#7a2100'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.9 25.42c3.64.08 6.89 2.55 6.89 6.19a7.21 7.21 0 0 1-6.89 7A6.54 6.54 0 0 1 41.3 32a6.62 6.62 0 0 1 6.6-6.58Z",
              style: {
                fill: '#7c2200'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.9 25.43c3.65.09 6.89 2.54 6.89 6.19a7.21 7.21 0 0 1-6.89 7A6.55 6.55 0 0 1 41.31 32a6.62 6.62 0 0 1 6.59-6.57Z",
              style: {
                fill: '#7e2200'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.91 25.44c3.64.09 6.89 2.54 6.89 6.18a7.22 7.22 0 0 1-6.89 7 6.56 6.56 0 0 1-6.6-6.6 6.64 6.64 0 0 1 6.6-6.58Z",
              style: {
                fill: '#802300'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.92 25.45c3.64.09 6.89 2.53 6.89 6.17a7.23 7.23 0 0 1-6.89 7 6.56 6.56 0 0 1-6.6-6.6 6.64 6.64 0 0 1 6.6-6.57Z",
              style: {
                fill: '#812300'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.93 25.47c3.64.08 6.89 2.52 6.89 6.16a7.24 7.24 0 0 1-6.89 7 6.55 6.55 0 0 1-6.6-6.6 6.62 6.62 0 0 1 6.6-6.56Z",
              style: {
                fill: '#832400'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.93 25.48c3.64.08 6.9 2.51 6.9 6.15a7.24 7.24 0 0 1-6.9 7 6.54 6.54 0 0 1-6.59-6.59 6.61 6.61 0 0 1 6.59-6.56Z",
              style: {
                fill: '#852400'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M47.94 25.49c3.64.09 6.9 2.51 6.9 6.15a7.25 7.25 0 0 1-6.9 7 6.54 6.54 0 0 1-6.59-6.59 6.61 6.61 0 0 1 6.59-6.56Z",
              style: {
                fill: '#862500'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48 25.5c3.64.09 6.9 2.5 6.9 6.14a7.26 7.26 0 0 1-6.9 7 6.53 6.53 0 0 1-6.59-6.59A6.61 6.61 0 0 1 48 25.5Z",
              style: {
                fill: '#882500'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48 25.51c3.64.09 6.91 2.5 6.91 6.14a7.27 7.27 0 0 1-6.91 7 6.54 6.54 0 0 1-6.59-6.59A6.63 6.63 0 0 1 48 25.51Z",
              style: {
                fill: '#8a2600'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48 25.52c3.64.09 6.91 2.49 6.91 6.13A7.28 7.28 0 0 1 48 38.7a6.54 6.54 0 0 1-6.59-6.59A6.63 6.63 0 0 1 48 25.52Z",
              style: {
                fill: '#8b2600'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48 25.53c3.64.1 6.91 2.49 6.91 6.12A7.28 7.28 0 0 1 48 38.71a6.54 6.54 0 0 1-6.59-6.59A6.63 6.63 0 0 1 48 25.53Z",
              style: {
                fill: '#8d2600'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48 25.54c3.63.1 6.91 2.48 6.91 6.12A7.29 7.29 0 0 1 48 38.72a6.53 6.53 0 0 1-6.59-6.59A6.62 6.62 0 0 1 48 25.54Z",
              style: {
                fill: '#8f2700'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48 25.55c3.64.1 6.92 2.48 6.92 6.11A7.3 7.3 0 0 1 48 38.73a6.53 6.53 0 0 1-6.58-6.59A6.62 6.62 0 0 1 48 25.55Z",
              style: {
                fill: '#912700'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48 25.56c3.63.1 6.92 2.47 6.92 6.11A7.3 7.3 0 0 1 48 38.73a6.54 6.54 0 0 1-6.59-6.58A6.63 6.63 0 0 1 48 25.56Z",
              style: {
                fill: '#922800'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48 25.58c3.63.09 6.92 2.46 6.92 6.09A7.31 7.31 0 0 1 48 38.74a6.54 6.54 0 0 1-6.59-6.58A6.62 6.62 0 0 1 48 25.58Z",
              style: {
                fill: '#942800'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48 25.59c3.64.1 6.93 2.45 6.93 6.09A7.32 7.32 0 0 1 48 38.75a6.53 6.53 0 0 1-6.58-6.58A6.62 6.62 0 0 1 48 25.59Z",
              style: {
                fill: '#962900'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48 25.6c3.63.1 6.93 2.45 6.93 6.08A7.33 7.33 0 0 1 48 38.76a6.53 6.53 0 0 1-6.58-6.58A6.62 6.62 0 0 1 48 25.6Z",
              style: {
                fill: '#972900'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48 25.61c3.63.1 6.93 2.44 6.93 6.07A7.34 7.34 0 0 1 48 38.77a6.52 6.52 0 0 1-6.58-6.58A6.62 6.62 0 0 1 48 25.61Z",
              style: {
                fill: '#992a00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48 25.62c3.63.1 6.93 2.43 6.93 6.07A7.35 7.35 0 0 1 48 38.78a6.52 6.52 0 0 1-6.58-6.58A6.62 6.62 0 0 1 48 25.62Z",
              style: {
                fill: '#9b2a00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48 25.63c3.63.11 6.94 2.43 6.94 6.06a7.35 7.35 0 0 1-6.94 7.1 6.53 6.53 0 0 1-6.58-6.58A6.62 6.62 0 0 1 48 25.63Z",
              style: {
                fill: '#9c2b00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48 25.64c3.63.11 6.94 2.42 6.94 6.06A7.35 7.35 0 0 1 48 38.79a6.52 6.52 0 0 1-6.58-6.57A6.62 6.62 0 0 1 48 25.64Z",
              style: {
                fill: '#9e2b00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.05 25.65c3.63.11 6.94 2.42 6.94 6.05a7.36 7.36 0 0 1-6.94 7.1 6.52 6.52 0 0 1-6.58-6.57 6.62 6.62 0 0 1 6.58-6.58Z",
              style: {
                fill: '#a02c00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.05 25.66c3.63.11 7 2.41 7 6.05a7.37 7.37 0 0 1-7 7.1 6.51 6.51 0 0 1-6.57-6.57 6.61 6.61 0 0 1 6.57-6.58Z",
              style: {
                fill: '#a22c00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.06 25.67c3.63.11 6.95 2.41 6.95 6a7.38 7.38 0 0 1-6.95 7.11 6.51 6.51 0 0 1-6.57-6.57 6.61 6.61 0 0 1 6.57-6.54Z",
              style: {
                fill: '#a32d00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.07 25.69c3.63.11 7 2.39 7 6a7.39 7.39 0 0 1-7 7.12 6.51 6.51 0 0 1-6.57-6.57 6.6 6.6 0 0 1 6.57-6.55Z",
              style: {
                fill: '#a52d00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.08 25.7c3.62.11 7 2.39 7 6a7.4 7.4 0 0 1-7 7.12 6.53 6.53 0 0 1-6.58-6.57 6.61 6.61 0 0 1 6.58-6.55Z",
              style: {
                fill: '#a72d00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.08 25.71c3.63.11 7 2.38 7 6a7.41 7.41 0 0 1-7 7.13 6.51 6.51 0 0 1-6.57-6.57 6.6 6.6 0 0 1 6.57-6.56Z",
              style: {
                fill: '#a82e00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.09 25.72c3.63.11 7 2.38 7 6a7.41 7.41 0 0 1-7 7.12 6.5 6.5 0 0 1-6.57-6.56 6.6 6.6 0 0 1 6.57-6.56Z",
              style: {
                fill: '#aa2e00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.1 25.73c3.62.11 7 2.37 7 6a7.42 7.42 0 0 1-7 7.13 6.5 6.5 0 0 1-6.57-6.56 6.6 6.6 0 0 1 6.57-6.57Z",
              style: {
                fill: '#ac2f00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.1 25.74c3.63.12 7 2.37 7 6a7.43 7.43 0 0 1-7 7.14 6.5 6.5 0 0 1-6.56-6.56 6.6 6.6 0 0 1 6.56-6.58Z",
              style: {
                fill: '#ad2f00'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.11 25.75c3.62.12 7 2.36 7 6a7.44 7.44 0 0 1-7 7.14 6.49 6.49 0 0 1-6.56-6.56 6.6 6.6 0 0 1 6.56-6.58Z",
              style: {
                fill: '#af3000'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.12 25.76c3.62.12 7 2.36 7 6a7.44 7.44 0 0 1-7 7.15 6.5 6.5 0 0 1-6.57-6.56 6.62 6.62 0 0 1 6.57-6.59Z",
              style: {
                fill: '#b13000'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.13 25.77c3.62.12 7 2.35 7 6s-3.35 7.15-7 7.15a6.5 6.5 0 0 1-6.57-6.56 6.62 6.62 0 0 1 6.57-6.59Z",
              style: {
                fill: '#b33100'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.13 25.79c3.62.12 7 2.34 7 6a7.46 7.46 0 0 1-7 7.16 6.5 6.5 0 0 1-6.56-6.56 6.59 6.59 0 0 1 6.56-6.6Z",
              style: {
                fill: '#b43100'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.14 25.8c3.62.12 7 2.33 7 6s-3.36 7.16-7 7.16a6.49 6.49 0 0 1-6.56-6.56 6.59 6.59 0 0 1 6.56-6.6Z",
              style: {
                fill: '#b63200'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.15 25.81c3.62.12 7 2.33 7 6s-3.36 7.16-7 7.16a6.48 6.48 0 0 1-6.56-6.55 6.59 6.59 0 0 1 6.56-6.61Z",
              style: {
                fill: '#b83200'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.15 25.82c3.62.12 7 2.32 7 5.94s-3.36 7.17-7 7.17a6.48 6.48 0 0 1-6.55-6.55 6.59 6.59 0 0 1 6.55-6.56Z",
              style: {
                fill: '#b93300'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M55.15 31.77c0 3.62-3.37 7.17-7 7.17a6.49 6.49 0 0 1-6.56-6.55 6.61 6.61 0 0 1 6.56-6.56c3.63.17 7 2.32 7 5.94Z",
              style: {
                fill: '#b30'
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.17 25.84c3.62.12 7 2.32 7 5.94s-3.38 7.22-7 7.22a6.49 6.49 0 0 1-6.56-6.56 6.6 6.6 0 0 1 6.56-6.6Z",
              style: {
                fill: '#bc3502',
                opacity: 0.99
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.17 25.85c3.62.12 7 2.33 7 5.95s-3.38 7.2-7 7.2a6.49 6.49 0 0 1-6.55-6.56 6.59 6.59 0 0 1 6.55-6.59Z",
              style: {
                fill: '#bc3705',
                opacity: 0.98
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.18 25.85c3.62.13 7 2.34 7 6S51.8 39 48.18 39a6.49 6.49 0 0 1-6.56-6.56 6.61 6.61 0 0 1 6.56-6.59Z",
              style: {
                fill: '#bd3907',
                opacity: 0.97
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.18 25.86c3.62.12 7 2.34 7 6a7.45 7.45 0 0 1-7 7.15 6.48 6.48 0 0 1-6.55-6.55 6.6 6.6 0 0 1 6.55-6.6Z",
              style: {
                fill: '#bd3a09',
                opacity: 0.96
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.19 25.87c3.62.12 7 2.35 7 6a7.44 7.44 0 0 1-7 7.14 6.49 6.49 0 0 1-6.56-6.55 6.61 6.61 0 0 1 6.56-6.59Z",
              style: {
                fill: '#be3c0c',
                opacity: 0.95
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.19 25.88c3.62.12 7 2.35 7 6a7.44 7.44 0 0 1-7 7.14 6.48 6.48 0 0 1-6.55-6.55 6.6 6.6 0 0 1 6.55-6.59Z",
              style: {
                fill: '#bf3e0e',
                opacity: 0.95
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.2 25.89c3.62.12 7 2.36 7 6a7.42 7.42 0 0 1-7 7.13 6.5 6.5 0 0 1-6.56-6.56 6.6 6.6 0 0 1 6.56-6.57Z",
              style: {
                fill: '#bf4010',
                opacity: 0.94
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.21 25.9c3.61.11 6.95 2.36 6.95 6a7.42 7.42 0 0 1-6.95 7.1 6.5 6.5 0 0 1-6.56-6.56 6.59 6.59 0 0 1 6.56-6.54Z",
              style: {
                fill: '#c04213',
                opacity: 0.93
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.21 25.9c3.62.12 7 2.37 7 6a7.42 7.42 0 0 1-7 7.13 6.49 6.49 0 0 1-6.55-6.56 6.59 6.59 0 0 1 6.55-6.57Z",
              style: {
                fill: '#c14415',
                opacity: 0.92
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.22 25.91c3.62.12 7 2.38 7 6a7.41 7.41 0 0 1-7 7.12 6.5 6.5 0 0 1-6.56-6.56 6.59 6.59 0 0 1 6.56-6.56Z",
              style: {
                fill: '#c14617',
                opacity: 0.91
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.22 25.92c3.62.11 7 2.38 7 6a7.4 7.4 0 0 1-7 7.11 6.48 6.48 0 0 1-6.55-6.55 6.59 6.59 0 0 1 6.55-6.56Z",
              style: {
                fill: '#c24719',
                opacity: 0.9
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.23 25.93c3.62.11 6.94 2.39 6.94 6A7.38 7.38 0 0 1 48.23 39a6.49 6.49 0 0 1-6.56-6.55 6.59 6.59 0 0 1 6.56-6.52Z",
              style: {
                fill: '#c2491c',
                opacity: 0.89
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.23 25.94c3.62.11 6.94 2.39 6.94 6a7.38 7.38 0 0 1-6.94 7.1 6.49 6.49 0 0 1-6.55-6.56 6.59 6.59 0 0 1 6.55-6.54Z",
              style: {
                fill: '#c34b1e',
                opacity: 0.88
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.24 26c3.62.11 6.93 2.39 6.93 6a7.36 7.36 0 0 1-6.93 7.1 6.51 6.51 0 0 1-6.56-6.56A6.59 6.59 0 0 1 48.24 26Z",
              style: {
                fill: '#c44d20',
                opacity: 0.87
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.25 26c3.61.1 6.93 2.4 6.93 6a7.36 7.36 0 0 1-6.93 7.09 6.49 6.49 0 0 1-6.56-6.56A6.59 6.59 0 0 1 48.25 26Z",
              style: {
                fill: '#c44f23',
                opacity: 0.86
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.25 26c3.62.11 6.93 2.41 6.93 6a7.36 7.36 0 0 1-6.93 7.09 6.51 6.51 0 0 1-6.56-6.56A6.61 6.61 0 0 1 48.25 26Z",
              style: {
                fill: '#c55125',
                opacity: 0.85
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.26 26c3.62.11 6.92 2.42 6.92 6a7.33 7.33 0 0 1-6.92 7.07 6.5 6.5 0 0 1-6.56-6.55A6.6 6.6 0 0 1 48.26 26Z",
              style: {
                fill: '#c65327',
                opacity: 0.85
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.26 26c3.62.11 6.92 2.42 6.92 6a7.33 7.33 0 0 1-6.92 7.07 6.48 6.48 0 0 1-6.55-6.55A6.59 6.59 0 0 1 48.26 26Z",
              style: {
                fill: '#c6542a',
                opacity: 0.84
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.27 26c3.62.1 6.91 2.42 6.91 6a7.32 7.32 0 0 1-6.91 7.07 6.51 6.51 0 0 1-6.56-6.56A6.59 6.59 0 0 1 48.27 26Z",
              style: {
                fill: '#c7562c',
                opacity: 0.83
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.27 26c3.62.1 6.91 2.43 6.91 6a7.31 7.31 0 0 1-6.91 7.06 6.5 6.5 0 0 1-6.55-6.56 6.58 6.58 0 0 1 6.55-6.5Z",
              style: {
                fill: '#c7582e',
                opacity: 0.82
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.28 26c3.62.1 6.91 2.43 6.91 6.05a7.31 7.31 0 0 1-6.91 7.06 6.51 6.51 0 0 1-6.56-6.56A6.59 6.59 0 0 1 48.28 26Z",
              style: {
                fill: '#c85a31',
                opacity: 0.81
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.28 26c3.62.1 6.91 2.45 6.91 6.07a7.3 7.3 0 0 1-6.91 7.05 6.5 6.5 0 0 1-6.55-6.56A6.59 6.59 0 0 1 48.28 26Z",
              style: {
                fill: '#c95c33',
                opacity: 0.8
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.29 26c3.62.1 6.9 2.45 6.9 6.07a7.29 7.29 0 0 1-6.9 7 6.5 6.5 0 0 1-6.56-6.55A6.6 6.6 0 0 1 48.29 26Z",
              style: {
                fill: '#c95e35',
                opacity: 0.79
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.3 26c3.61.1 6.89 2.45 6.89 6.07a7.27 7.27 0 0 1-6.89 7 6.49 6.49 0 0 1-6.56-6.55A6.59 6.59 0 0 1 48.3 26Z",
              style: {
                fill: '#ca6038',
                opacity: 0.78
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.3 26c3.62.1 6.89 2.46 6.89 6.08a7.27 7.27 0 0 1-6.89 7 6.51 6.51 0 0 1-6.56-6.56A6.59 6.59 0 0 1 48.3 26Z",
              style: {
                fill: '#ca613a',
                opacity: 0.77
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.31 26.05c3.62.09 6.88 2.46 6.88 6.08a7.26 7.26 0 0 1-6.88 7 6.51 6.51 0 0 1-6.56-6.56 6.59 6.59 0 0 1 6.56-6.52Z",
              style: {
                fill: '#cb633c',
                opacity: 0.76
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.31 26.06c3.62.09 6.89 2.47 6.89 6.09a7.26 7.26 0 0 1-6.89 7 6.5 6.5 0 0 1-6.55-6.56 6.58 6.58 0 0 1 6.55-6.53Z",
              style: {
                fill: '#cc653f',
                opacity: 0.75
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.32 26.06c3.62.1 6.88 2.48 6.88 6.1a7.25 7.25 0 0 1-6.88 7 6.51 6.51 0 0 1-6.56-6.56 6.6 6.6 0 0 1 6.56-6.54Z",
              style: {
                fill: '#cc6741',
                opacity: 0.75
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.32 26.07c3.62.09 6.88 2.48 6.88 6.1a7.23 7.23 0 0 1-6.88 7 6.5 6.5 0 0 1-6.55-6.55 6.59 6.59 0 0 1 6.55-6.55Z",
              style: {
                fill: '#cd6943',
                opacity: 0.74
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.33 26.08c3.62.09 6.87 2.49 6.87 6.11a7.22 7.22 0 0 1-6.87 7 6.5 6.5 0 0 1-6.56-6.55 6.59 6.59 0 0 1 6.56-6.56Z",
              style: {
                fill: '#ce6b46',
                opacity: 0.73
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.33 26.09c3.62.09 6.87 2.49 6.87 6.11a7.22 7.22 0 0 1-6.87 7 6.5 6.5 0 0 1-6.55-6.55 6.58 6.58 0 0 1 6.55-6.56Z",
              style: {
                fill: '#ce6c48',
                opacity: 0.72
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.34 26.1c3.62.09 6.86 2.5 6.86 6.12a7.21 7.21 0 0 1-6.86 7 6.56 6.56 0 1 1 0-13.11Z",
              style: {
                fill: '#cf6e4a',
                opacity: 0.71
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.35 26.11c3.62.08 6.86 2.5 6.86 6.12a7.21 7.21 0 0 1-6.86 7 6.51 6.51 0 0 1-6.56-6.56 6.58 6.58 0 0 1 6.56-6.56Z",
              style: {
                fill: '#cf704c',
                opacity: 0.7
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.35 26.11c3.62.09 6.86 2.51 6.86 6.13a7.2 7.2 0 0 1-6.86 7 6.5 6.5 0 0 1-6.55-6.56 6.58 6.58 0 0 1 6.55-6.57Z",
              style: {
                fill: '#d0724f',
                opacity: 0.69
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.36 26.12c3.62.09 6.85 2.52 6.85 6.14a7.19 7.19 0 0 1-6.85 7 6.52 6.52 0 0 1-6.56-6.56 6.59 6.59 0 0 1 6.56-6.58Z",
              style: {
                fill: '#d17451',
                opacity: 0.68
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.36 26.13c3.62.09 6.85 2.52 6.85 6.14a7.18 7.18 0 0 1-6.85 7 6.5 6.5 0 0 1-6.55-6.55 6.58 6.58 0 0 1 6.55-6.59Z",
              style: {
                fill: '#d17653',
                opacity: 0.67
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.37 26.14c3.62.08 6.84 2.53 6.84 6.15a7.16 7.16 0 0 1-6.84 7 6.51 6.51 0 0 1-6.56-6.55 6.59 6.59 0 0 1 6.56-6.6Z",
              style: {
                fill: '#d27856',
                opacity: 0.66
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.37 26.15c3.62.08 6.84 2.53 6.84 6.15a7.16 7.16 0 0 1-6.84 7 6.51 6.51 0 0 1-6.55-6.56 6.58 6.58 0 0 1 6.55-6.59Z",
              style: {
                fill: '#d27958',
                opacity: 0.65
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.38 26.16c3.62.08 6.84 2.53 6.84 6.15a7.15 7.15 0 0 1-6.84 7 6.52 6.52 0 0 1-6.56-6.56 6.59 6.59 0 0 1 6.56-6.59Z",
              style: {
                fill: '#d37b5a',
                opacity: 0.65
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.38 26.16c3.62.08 6.84 2.55 6.84 6.17a7.14 7.14 0 0 1-6.84 7 6.51 6.51 0 0 1-6.55-6.56 6.59 6.59 0 0 1 6.55-6.61Z",
              style: {
                fill: '#d47d5d',
                opacity: 0.64
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.39 26.17c3.62.08 6.83 2.55 6.83 6.17a7.14 7.14 0 0 1-6.83 6.95 6.53 6.53 0 0 1-6.56-6.56 6.6 6.6 0 0 1 6.56-6.56Z",
              style: {
                fill: '#d47f5f',
                opacity: 0.63
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.4 26.18c3.62.08 6.82 2.56 6.82 6.18a7.12 7.12 0 0 1-6.82 6.93 6.51 6.51 0 0 1-6.56-6.55 6.58 6.58 0 0 1 6.56-6.56Z",
              style: {
                fill: '#d58161',
                opacity: 0.62
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.4 26.19c3.62.08 6.82 2.56 6.82 6.18a7.12 7.12 0 0 1-6.82 6.93 6.5 6.5 0 0 1-6.55-6.55 6.57 6.57 0 0 1 6.55-6.56Z",
              style: {
                fill: '#d68364',
                opacity: 0.61
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.41 26.2c3.62.07 6.81 2.56 6.81 6.18a7.1 7.1 0 0 1-6.81 6.93 6.56 6.56 0 1 1 0-13.11Z",
              style: {
                fill: '#d68566',
                opacity: 0.6
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.41 26.21c3.62.07 6.82 2.57 6.82 6.19a7.11 7.11 0 0 1-6.82 6.92 6.56 6.56 0 0 1 0-13.11Z",
              style: {
                fill: '#d78668',
                opacity: 0.59
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.42 26.22c3.62.07 6.81 2.57 6.81 6.19a7.1 7.1 0 0 1-6.81 6.92 6.56 6.56 0 1 1 0-13.11Z",
              style: {
                fill: '#d7886b',
                opacity: 0.58
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.42 26.22c3.62.08 6.81 2.59 6.81 6.21a7.08 7.08 0 0 1-6.81 6.91 6.51 6.51 0 0 1-6.55-6.56 6.59 6.59 0 0 1 6.55-6.56Z",
              style: {
                fill: '#d88a6d',
                opacity: 0.57
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.43 26.23c3.62.07 6.8 2.59 6.8 6.21a7.07 7.07 0 0 1-6.8 6.9 6.52 6.52 0 0 1-6.56-6.55 6.59 6.59 0 0 1 6.56-6.56Z",
              style: {
                fill: '#d98c6f',
                opacity: 0.56
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.44 26.24c3.62.07 6.79 2.59 6.79 6.21a7.05 7.05 0 0 1-6.79 6.9 6.56 6.56 0 1 1 0-13.11Z",
              style: {
                fill: '#d98e72',
                opacity: 0.55
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.44 26.25c3.62.07 6.79 2.6 6.79 6.22a7.05 7.05 0 0 1-6.79 6.89 6.56 6.56 0 1 1 0-13.11Z",
              style: {
                fill: '#da9074',
                opacity: 0.55
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.45 26.26c3.62.06 6.78 2.6 6.78 6.22a7 7 0 0 1-6.78 6.89 6.56 6.56 0 1 1 0-13.11Z",
              style: {
                fill: '#db9276',
                opacity: 0.54
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.45 26.27c3.62.06 6.79 2.61 6.79 6.23a7 7 0 0 1-6.79 6.88 6.56 6.56 0 0 1 0-13.11Z",
              style: {
                fill: '#db9379',
                opacity: 0.53
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.46 26.27c3.62.07 6.78 2.62 6.78 6.24a7 7 0 0 1-6.78 6.88 6.56 6.56 0 0 1 0-13.12Z",
              style: {
                fill: '#dc957b',
                opacity: 0.52
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.46 26.28c3.62.07 6.78 2.62 6.78 6.24a7 7 0 0 1-6.78 6.87 6.56 6.56 0 0 1 0-13.11Z",
              style: {
                fill: '#dc977d',
                opacity: 0.51
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.47 26.29c3.62.06 6.77 2.63 6.77 6.25a7 7 0 0 1-6.77 6.86 6.56 6.56 0 1 1 0-13.11Z",
              style: {
                fill: '#dd9980',
                opacity: 0.5
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.47 26.3c3.62.06 6.77 2.63 6.77 6.25a7 7 0 0 1-6.77 6.86 6.56 6.56 0 0 1 0-13.11Z",
              style: {
                fill: '#de9b82',
                opacity: 0.49
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.48 26.31c3.62.06 6.76 2.64 6.76 6.26a7 7 0 0 1-6.76 6.85 6.56 6.56 0 1 1 0-13.11Z",
              style: {
                fill: '#de9d84',
                opacity: 0.48
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.49 26.32c3.62.06 6.76 2.64 6.76 6.26a7 7 0 0 1-6.76 6.85 6.56 6.56 0 1 1 0-13.11Z",
              style: {
                fill: '#df9f86',
                opacity: 0.47
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.49 26.32c3.62.06 6.76 2.65 6.76 6.27a7 7 0 0 1-6.76 6.85 6.56 6.56 0 0 1 0-13.12Z",
              style: {
                fill: '#dfa089',
                opacity: 0.46
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.5 26.33c3.62.06 6.75 2.66 6.75 6.28a7 7 0 0 1-6.75 6.83 6.56 6.56 0 1 1 0-13.11Z",
              style: {
                fill: '#e0a28b',
                opacity: 0.45
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.5 26.34c3.62.06 6.75 2.66 6.75 6.28a7 7 0 0 1-6.75 6.83 6.56 6.56 0 0 1 0-13.11Z",
              style: {
                fill: '#e1a48d',
                opacity: 0.45
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.51 26.35c3.62 0 6.74 2.67 6.74 6.29a7 7 0 0 1-6.74 6.82 6.56 6.56 0 1 1 0-13.11Z",
              style: {
                fill: '#e1a690',
                opacity: 0.44
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.51 26.36c3.62.05 6.74 2.67 6.74 6.29a7 7 0 0 1-6.74 6.82 6.56 6.56 0 0 1 0-13.11Z",
              style: {
                fill: '#e2a892',
                opacity: 0.43
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.52 26.37c3.62.05 6.74 2.67 6.74 6.29a6.94 6.94 0 0 1-6.74 6.82 6.56 6.56 0 1 1 0-13.11Z",
              style: {
                fill: '#e3aa94',
                opacity: 0.42
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.52 26.37c3.62.06 6.74 2.69 6.74 6.31a6.93 6.93 0 0 1-6.74 6.81 6.56 6.56 0 0 1 0-13.12Z",
              style: {
                fill: '#e3ac97',
                opacity: 0.41
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.53 26.38a6.54 6.54 0 0 1 6.73 6.31 6.93 6.93 0 0 1-6.73 6.81 6.56 6.56 0 0 1 0-13.12Z",
              style: {
                fill: '#e4ad99',
                opacity: 0.4
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.54 26.39a6.54 6.54 0 0 1 6.72 6.32 6.9 6.9 0 0 1-6.72 6.79 6.56 6.56 0 1 1 0-13.11Z",
              style: {
                fill: '#e4af9b',
                opacity: 0.39
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.54 26.4a6.54 6.54 0 0 1 6.72 6.32 6.9 6.9 0 0 1-6.72 6.79 6.56 6.56 0 0 1 0-13.11Z",
              style: {
                fill: '#e5b19e',
                opacity: 0.38
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.55 26.41a6.52 6.52 0 0 1 6.71 6.32 6.89 6.89 0 0 1-6.71 6.79 6.56 6.56 0 1 1 0-13.11Z",
              style: {
                fill: '#e6b3a0',
                opacity: 0.37
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.55 26.42a6.54 6.54 0 0 1 6.72 6.33 6.89 6.89 0 0 1-6.72 6.78 6.56 6.56 0 0 1 0-13.11Z",
              style: {
                fill: '#e6b5a2',
                opacity: 0.36
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.56 26.43a6.53 6.53 0 0 1 6.71 6.33 6.88 6.88 0 0 1-6.71 6.78 6.56 6.56 0 1 1 0-13.11Z",
              style: {
                fill: '#e7b7a5',
                opacity: 0.35
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.56 26.43a6.55 6.55 0 0 1 6.71 6.35 6.88 6.88 0 0 1-6.71 6.77 6.56 6.56 0 0 1 0-13.12Z",
              style: {
                fill: '#e8b9a7',
                opacity: 0.35
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.57 26.44a6.54 6.54 0 0 1 6.7 6.35 6.86 6.86 0 0 1-6.7 6.76 6.56 6.56 0 1 1 0-13.11Z",
              style: {
                fill: '#e8baa9',
                opacity: 0.34
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.58 26.45a6.53 6.53 0 0 1 6.69 6.35 6.84 6.84 0 0 1-6.69 6.76 6.56 6.56 0 1 1 0-13.11Z",
              style: {
                fill: '#e9bcac',
                opacity: 0.33
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.58 26.46a6.53 6.53 0 0 1 6.69 6.36 6.84 6.84 0 0 1-6.69 6.75 6.56 6.56 0 1 1 0-13.11Z",
              style: {
                fill: '#e9beae',
                opacity: 0.32
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.59 26.47a6.53 6.53 0 0 1 6.69 6.36 6.84 6.84 0 0 1-6.69 6.75 6.56 6.56 0 1 1 0-13.11Z",
              style: {
                fill: '#eac0b0',
                opacity: 0.31
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.59 26.48a6.54 6.54 0 0 1 6.69 6.37 6.83 6.83 0 0 1-6.69 6.74 6.56 6.56 0 0 1 0-13.11Z",
              style: {
                fill: '#ebc2b3',
                opacity: 0.3
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.6 26.48a6.54 6.54 0 0 1 6.68 6.38 6.82 6.82 0 0 1-6.68 6.74 6.56 6.56 0 0 1 0-13.12Z",
              style: {
                fill: '#ebc4b5',
                opacity: 0.29
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.6 26.49a6.54 6.54 0 0 1 6.68 6.38 6.81 6.81 0 0 1-6.68 6.73 6.56 6.56 0 0 1 0-13.11Z",
              style: {
                fill: '#ecc6b7',
                opacity: 0.28
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.61 26.5a6.54 6.54 0 0 1 6.67 6.39 6.8 6.8 0 0 1-6.67 6.72 6.56 6.56 0 1 1 0-13.11Z",
              style: {
                fill: '#ecc7b9',
                opacity: 0.27
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.61 26.51a6.54 6.54 0 0 1 6.67 6.39 6.79 6.79 0 0 1-6.67 6.72 6.56 6.56 0 0 1 0-13.11Z",
              style: {
                fill: '#edc9bc',
                opacity: 0.26
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.62 26.52a6.54 6.54 0 0 1 6.67 6.4 6.79 6.79 0 0 1-6.67 6.71 6.56 6.56 0 1 1 0-13.11Z",
              style: {
                fill: '#eecbbe',
                opacity: 0.25
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.63 26.53a6.53 6.53 0 0 1 6.66 6.4 6.78 6.78 0 0 1-6.66 6.71 6.56 6.56 0 1 1 0-13.11Z",
              style: {
                fill: '#eecdc0',
                opacity: 0.25
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.63 26.53a6.54 6.54 0 0 1 6.66 6.41 6.77 6.77 0 0 1-6.66 6.71 6.56 6.56 0 0 1 0-13.12Z",
              style: {
                fill: '#efcfc3',
                opacity: 0.24
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.64 26.54A6.54 6.54 0 0 1 55.29 33a6.75 6.75 0 0 1-6.65 6.69 6.56 6.56 0 1 1 0-13.11Z",
              style: {
                fill: '#f0d1c5',
                opacity: 0.23
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.64 26.55A6.54 6.54 0 0 1 55.29 33a6.75 6.75 0 0 1-6.65 6.69 6.56 6.56 0 0 1 0-13.11Z",
              style: {
                fill: '#f0d2c7',
                opacity: 0.22
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.65 26.56A6.54 6.54 0 0 1 55.29 33a6.74 6.74 0 0 1-6.64 6.68 6.56 6.56 0 1 1 0-13.11Z",
              style: {
                fill: '#f1d4ca',
                opacity: 0.21
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.65 26.57A6.54 6.54 0 0 1 55.3 33a6.74 6.74 0 0 1-6.65 6.68 6.56 6.56 0 0 1 0-13.11Z",
              style: {
                fill: '#f1d6cc',
                opacity: 0.2
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.66 26.58A6.54 6.54 0 0 1 55.3 33a6.73 6.73 0 0 1-6.64 6.68 6.56 6.56 0 1 1 0-13.11Z",
              style: {
                fill: '#f2d8ce',
                opacity: 0.19
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.66 26.58A6.55 6.55 0 0 1 55.3 33a6.72 6.72 0 0 1-6.64 6.67 6.56 6.56 0 0 1 0-13.12Z",
              style: {
                fill: '#f3dad1',
                opacity: 0.18
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.67 26.59A6.54 6.54 0 0 1 55.3 33a6.71 6.71 0 0 1-6.63 6.66 6.56 6.56 0 1 1 0-13.11Z",
              style: {
                fill: '#f3dcd3',
                opacity: 0.17
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.68 26.6a6.54 6.54 0 0 1 6.62 6.46 6.69 6.69 0 0 1-6.62 6.65 6.56 6.56 0 1 1 0-13.11Z",
              style: {
                fill: '#f4ded5',
                opacity: 0.16
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.68 26.61a6.54 6.54 0 0 1 6.62 6.46 6.69 6.69 0 0 1-6.62 6.65 6.56 6.56 0 0 1 0-13.11Z",
              style: {
                fill: '#f4dfd8',
                opacity: 0.15
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.69 26.62a6.54 6.54 0 0 1 6.62 6.46 6.69 6.69 0 0 1-6.62 6.65 6.56 6.56 0 1 1 0-13.11Z",
              style: {
                fill: '#f5e1da',
                opacity: 0.15
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.69 26.63a6.55 6.55 0 0 1 6.62 6.47 6.68 6.68 0 0 1-6.62 6.64 6.56 6.56 0 0 1 0-13.11Z",
              style: {
                fill: '#f6e3dc',
                opacity: 0.14
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.7 26.63a6.55 6.55 0 0 1 6.61 6.48 6.68 6.68 0 0 1-6.61 6.64 6.56 6.56 0 0 1 0-13.12Z",
              style: {
                fill: '#f6e5df',
                opacity: 0.13
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.7 26.64a6.56 6.56 0 0 1 6.61 6.49 6.67 6.67 0 0 1-6.61 6.63 6.56 6.56 0 0 1 0-13.12Z",
              style: {
                fill: '#f7e7e1',
                opacity: 0.12
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.71 26.65a6.55 6.55 0 0 1 6.6 6.49 6.65 6.65 0 0 1-6.6 6.62 6.56 6.56 0 1 1 0-13.11Z",
              style: {
                fill: '#f8e9e3',
                opacity: 0.11
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.72 26.66a6.54 6.54 0 0 1 6.59 6.49 6.63 6.63 0 0 1-6.59 6.62 6.56 6.56 0 1 1 0-13.11Z",
              style: {
                fill: '#f8ebe6',
                opacity: 0.1
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.72 26.67a6.55 6.55 0 0 1 6.6 6.5 6.64 6.64 0 0 1-6.6 6.61 6.56 6.56 0 1 1 0-13.11Z",
              style: {
                fill: '#f9ece8',
                opacity: 0.09
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.73 26.68a6.54 6.54 0 0 1 6.59 6.5 6.63 6.63 0 0 1-6.59 6.61 6.56 6.56 0 1 1 0-13.11Z",
              style: {
                fill: '#f9eeea',
                opacity: 0.08
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.73 26.69a6.55 6.55 0 0 1 6.59 6.51 6.62 6.62 0 0 1-6.59 6.6 6.56 6.56 0 0 1 0-13.11Z",
              style: {
                fill: '#faf0ec',
                opacity: 0.07
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.74 26.69a6.56 6.56 0 1 1-6.56 6.56 6.55 6.55 0 0 1 6.56-6.56Z",
              style: {
                fill: '#fbf2ef',
                opacity: 0.06
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.74 26.7a6.56 6.56 0 1 1-6.55 6.56 6.55 6.55 0 0 1 6.55-6.56Z",
              style: {
                fill: '#fbf4f1',
                opacity: 0.05
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.75 26.71a6.56 6.56 0 1 1-6.56 6.56 6.55 6.55 0 0 1 6.56-6.56Z",
              style: {
                fill: '#fcf6f3',
                opacity: 0.05
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.75 26.72a6.56 6.56 0 1 1-6.55 6.55 6.55 6.55 0 0 1 6.55-6.55Z",
              style: {
                fill: '#fdf8f6',
                opacity: 0.04
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.76 26.73a6.56 6.56 0 1 1-6.56 6.55 6.56 6.56 0 0 1 6.56-6.55Z",
              style: {
                fill: '#fdf9f8',
                opacity: 0.03
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.77 26.74a6.56 6.56 0 1 1-6.56 6.55 6.55 6.55 0 0 1 6.56-6.55Z",
              style: {
                fill: '#fefbfa',
                opacity: 0.02
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M48.77 26.74a6.56 6.56 0 1 1-6.55 6.56 6.56 6.56 0 0 1 6.55-6.56Z",
              style: {
                fill: '#fefdfd',
                opacity: 0.01
              }
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("g", {
          style: {
            clipPath: "url(#clip-path-2)"
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("g", {
            style: {
              clipPath: "url(#clip-path-3)"
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 47.879 31.429)",
              style: {
                fill: '#e04e15'
              },
              d: "M-6.16-22.61h108.07V85.46H-6.16z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 48.999 33.37)",
              style: {
                fill: '#e04f15'
              },
              d: "M-5.03-20.66h108.07V87.41H-5.03z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "matrix(.87 -.5 .5 .87 -10.95 29.8)",
              style: {
                fill: '#e15015'
              },
              d: "M-3.91-18.71h108.07V89.36H-3.91z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 51.253 37.273)",
              style: {
                fill: '#e15115'
              },
              d: "M-2.78-16.77h108.07V91.3H-2.78z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "matrix(.87 -.5 .5 .87 -12.59 31.44)",
              style: {
                fill: '#e25215'
              },
              d: "M-1.66-14.82h108.07V93.25H-1.66z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 53.507 41.177)",
              style: {
                fill: '#e25316'
              },
              d: "M-.53-12.87h108.07V95.2H-.53z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 54.627 43.117)",
              style: {
                fill: '#e35416'
              },
              d: "M.59-10.92h108.07V97.15H.59z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 55.747 45.057)",
              style: {
                fill: '#e35516'
              },
              d: "M1.72-8.97h108.07V99.1H1.72z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "matrix(.87 -.5 .5 .87 -15.89 34.74)",
              style: {
                fill: '#e35616'
              },
              d: "M2.84-7.02h108.07v108.07H2.84z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              fill: "#e45716",
              d: "M-15.812 29.176 77.78-24.86l54.035 93.591-93.59 54.035z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              fill: "#e45716",
              d: "M-14.687 31.124 78.904-22.91l54.035 93.592-93.59 54.035z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "matrix(.87 -.5 .5 .87 -18.36 37.21)",
              style: {
                fill: '#e55816'
              },
              d: "M6.22-1.18h108.07v108.07H6.22z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 61.375 54.805)",
              style: {
                fill: '#e55916'
              },
              d: "M7.34.77h108.07v108.07H7.34z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 62.495 56.746)",
              style: {
                fill: '#e55a16'
              },
              d: "M8.47 2.72h108.07v108.07H8.47z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "matrix(.87 -.5 .5 .87 -20.83 39.68)",
              style: {
                fill: '#e65b16'
              },
              d: "M9.59 4.67h108.07v108.07H9.59z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "matrix(.87 -.5 .5 .87 -21.65 40.5)",
              style: {
                fill: '#e65c17'
              },
              d: "M10.72 6.62h108.07v108.07H10.72z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "matrix(.87 -.5 .5 .87 -22.47 41.33)",
              style: {
                fill: '#e75d17'
              },
              d: "M11.84 8.56h108.07v108.07H11.84z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 67.003 64.553)",
              style: {
                fill: '#e75e17'
              },
              d: "M12.97 10.51h108.07v108.07H12.97z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 68.123 66.494)",
              style: {
                fill: '#e85f17'
              },
              d: "M14.09 12.46h108.07v108.07H14.09z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 69.262 68.439)",
              style: {
                fill: '#e86017'
              },
              d: "M15.22 14.41h108.07v108.07H15.22z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 69.68 69.19)",
              style: {
                fill: '#e86117'
              },
              d: "M15.65 15.16h108.07v108.07H15.65z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 70.118 69.948)",
              style: {
                fill: '#e96217'
              },
              d: "M16.09 15.92h108.07v108.07H16.09z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 70.555 70.705)",
              style: {
                fill: '#e96317'
              },
              d: "M16.52 16.67h108.07v108.07H16.52z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 70.992 71.462)",
              style: {
                fill: '#e96418'
              },
              d: "M16.96 17.42h108.07v108.07H16.96z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "matrix(.87 -.5 .5 .87 -26.54 45.39)",
              style: {
                fill: '#e96518'
              },
              d: "M17.39 18.18h108.07v108.07H17.39z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 71.871 72.958)",
              style: {
                fill: '#ea6618'
              },
              d: "M17.82 18.93h108.07V127H17.82z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 72.29 73.71)",
              style: {
                fill: '#ea6718'
              },
              d: "M18.26 19.68h108.07v108.07H18.26z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 72.727 74.467)",
              style: {
                fill: '#ea6818'
              },
              d: "M18.69 20.43h108.07V128.5H18.69z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 73.164 75.224)",
              style: {
                fill: '#ea6918'
              },
              d: "M19.13 21.19H127.2v108.07H19.13z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 73.6 75.981)",
              style: {
                fill: '#eb6a18'
              },
              d: "M19.56 21.94h108.07v108.07H19.56z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 74.038 76.738)",
              style: {
                fill: '#eb6b19'
              },
              d: "M20 22.69h108.07v108.07H20z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 74.48 77.477)",
              style: {
                fill: '#eb6c19'
              },
              d: "M20.43 23.45H128.5v108.07H20.43z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "matrix(.87 -.5 .5 .87 -29.08 47.93)",
              style: {
                fill: '#eb6d19'
              },
              d: "M20.87 24.2h108.07v108.07H20.87z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 75.336 78.986)",
              style: {
                fill: '#ec6e19'
              },
              d: "M21.3 24.95h108.07v108.07H21.3z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "matrix(.87 -.5 .5 .87 -29.72 48.57)",
              style: {
                fill: '#ec6f19'
              },
              d: "M21.74 25.71h108.07v108.07H21.74z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 76.21 80.5)",
              style: {
                fill: '#ec7019'
              },
              d: "M22.17 26.46h108.07v108.07H22.17z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 76.647 81.258)",
              style: {
                fill: '#ec7119'
              },
              d: "M22.61 27.21h108.07v108.07H22.61z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 77.084 82.015)",
              style: {
                fill: '#ed7219'
              },
              d: "M23.04 27.97h108.07v108.07H23.04z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 77.508 82.748)",
              style: {
                fill: '#ed731a'
              },
              d: "M23.48 28.72h108.07v108.07H23.48z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 77.945 83.505)",
              style: {
                fill: '#ed741a'
              },
              d: "M23.91 29.47h108.07v108.07H23.91z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 78.382 84.262)",
              style: {
                fill: '#ed751a'
              },
              d: "M24.35 30.23h108.07V138.3H24.35z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 78.82 85.02)",
              style: {
                fill: '#ee761a'
              },
              d: "M24.78 30.98h108.07v108.07H24.78z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 79.256 85.777)",
              style: {
                fill: '#ee771a'
              },
              d: "M25.22 31.73h108.07V139.8H25.22z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "matrix(.87 -.5 .5 .87 -32.59 51.44)",
              style: {
                fill: '#ee781a'
              },
              d: "M25.65 32.49h108.07v108.07H25.65z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 80.117 87.267)",
              style: {
                fill: '#ef791a'
              },
              d: "M26.09 33.24h108.07v108.07H26.09z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 80.554 88.024)",
              style: {
                fill: '#ef7a1b'
              },
              d: "M26.52 33.99h108.07v108.07H26.52z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 80.991 88.781)",
              style: {
                fill: '#ef7b1b'
              },
              d: "M26.96 34.75h108.07v108.07H26.96z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "matrix(.87 -.5 .5 .87 -33.86 52.71)",
              style: {
                fill: '#ef7c1b'
              },
              d: "M27.39 35.5h108.07v108.07H27.39z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "matrix(.87 -.5 .5 .87 -34.18 53.03)",
              style: {
                fill: '#f07d1b'
              },
              d: "M27.83 36.25H135.9v108.07H27.83z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "matrix(.87 -.5 .5 .87 -34.5 53.35)",
              style: {
                fill: '#f07e1b'
              },
              d: "M28.26 37.01h108.07v108.07H28.26z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 82.745 91.791)",
              style: {
                fill: '#f07f1b'
              },
              d: "M28.7 37.76h108.07v108.07H28.7z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "matrix(.87 -.5 .5 .87 -35.13 53.98)",
              style: {
                fill: '#f0801b'
              },
              d: "M29.13 38.51H137.2v108.07H29.13z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "matrix(.87 -.5 .5 .87 -35.45 54.3)",
              style: {
                fill: '#f1801c'
              },
              d: "M29.57 39.27h108.07v108.07H29.57z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 84.037 94.058)",
              style: {
                fill: '#f1811c'
              },
              d: "M30 40.02h108.07v108.07H30z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 84.474 94.815)",
              style: {
                fill: '#f1821c'
              },
              d: "M30.44 40.77h108.07v108.07H30.44z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 84.912 95.572)",
              style: {
                fill: '#f1831c'
              },
              d: "M30.87 41.53h108.07V149.6H30.87z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 85.354 96.31)",
              style: {
                fill: '#f2841c'
              },
              d: "M31.31 42.28h108.07v108.07H31.31z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 85.772 97.063)",
              style: {
                fill: '#f2851c'
              },
              d: "M31.74 43.03h108.07V151.1H31.74z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 86.21 97.82)",
              style: {
                fill: '#f2861c'
              },
              d: "M32.18 43.79h108.07v108.07H32.18z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 86.646 98.577)",
              style: {
                fill: '#f2871d'
              },
              d: "M32.61 44.54h108.07v108.07H32.61z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 87.084 99.334)",
              style: {
                fill: '#f3881d'
              },
              d: "M33.05 45.29h108.07v108.07H33.05z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 87.52 100.091)",
              style: {
                fill: '#f3891d'
              },
              d: "M33.48 46.04h108.07v108.07H33.48z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 87.963 100.83)",
              style: {
                fill: '#f38a1d'
              },
              d: "M33.92 46.8h108.07v108.07H33.92z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 88.381 101.582)",
              style: {
                fill: '#f48b1d'
              },
              d: "M34.35 47.55h108.07v108.07H34.35z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "matrix(.87 -.5 .5 .87 -39.27 58.12)",
              style: {
                fill: '#f48c1d'
              },
              d: "M34.79 48.3h108.07v108.07H34.79z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "matrix(.87 -.5 .5 .87 -39.59 58.44)",
              style: {
                fill: '#f48d1d'
              },
              d: "M35.22 49.06h108.07v108.07H35.22z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "matrix(.87 -.5 .5 .87 -39.91 58.76)",
              style: {
                fill: '#f48e1e'
              },
              d: "M35.66 49.81h108.07v108.07H35.66z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 90.13 104.61)",
              style: {
                fill: '#f58f1e'
              },
              d: "M36.09 50.56h108.07v108.07H36.09z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 90.572 105.349)",
              style: {
                fill: '#f5901e'
              },
              d: "M36.52 51.32h108.07v108.07H36.52z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 90.99 106.1)",
              style: {
                fill: '#f5911e'
              },
              d: "M36.96 52.07h108.07v108.07H36.96z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "matrix(.87 -.5 .5 .87 -41.18 60.03)",
              style: {
                fill: '#f5921e'
              },
              d: "M37.39 52.82h108.07v108.07H37.39z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "matrix(.87 -.5 .5 .87 -41.5 60.35)",
              style: {
                fill: '#f6931e'
              },
              d: "M37.83 53.58H145.9v108.07H37.83z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 92.302 108.372)",
              style: {
                fill: '#f6941e'
              },
              d: "M38.26 54.33h108.07V162.4H38.26z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 92.739 109.13)",
              style: {
                fill: '#f6951e'
              },
              d: "M38.7 55.08h108.07v108.07H38.7z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 93.181 109.868)",
              style: {
                fill: '#f6961f'
              },
              d: "M39.13 55.84H147.2v108.07H39.13z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 93.6 110.62)",
              style: {
                fill: '#f7971f'
              },
              d: "M39.57 56.59h108.07v108.07H39.57z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 94.037 111.377)",
              style: {
                fill: '#f7981f'
              },
              d: "M40 57.34h108.07v108.07H40z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 94.474 112.134)",
              style: {
                fill: '#f7991f'
              },
              d: "M40.44 58.1h108.07v108.07H40.44z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "matrix(.87 -.5 .5 .87 -43.73 62.58)",
              style: {
                fill: '#f79a1f'
              },
              d: "M40.87 58.85h108.07v108.07H40.87z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 95.348 113.648)",
              style: {
                fill: '#f89b1f'
              },
              d: "M41.31 59.6h108.07v108.07H41.31z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 95.79 114.387)",
              style: {
                fill: '#f89c1f'
              },
              d: "M41.74 60.36h108.07v108.07H41.74z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "matrix(.87 -.5 .5 .87 -44.68 63.53)",
              style: {
                fill: '#f89d20'
              },
              d: "M42.18 61.11h108.07v108.07H42.18z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 96.646 115.896)",
              style: {
                fill: '#f89e20'
              },
              d: "M42.61 61.86h108.07v108.07H42.61z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 97.083 116.653)",
              style: {
                fill: '#f99f20'
              },
              d: "M43.05 62.62h108.07v108.07H43.05z"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              transform: "rotate(-30 97.52 117.41)",
              style: {
                fill: '#f9a020'
              },
              d: "M43.48 63.37h108.07v108.07H43.48z"
            })]
          })
        })]
      })
    })]
  });
});
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/images/cards/jcb.js
/**
 * External dependencies
 */


/* harmony default export */ const jcb = (function () {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
    width: "51",
    height: "35",
    viewBox: "0 0 51 35",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("rect", {
      x: "0.878906",
      y: "0.5",
      width: "49",
      height: "34",
      rx: "3.5",
      fill: "white",
      stroke: "#F3F3F3"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M33.473 17.5973H33.494H33.5346H33.5752H33.6158H33.6564H33.697H33.7376H33.7782H33.8188H33.8594H33.9H33.9406H33.9812H34.0218H34.0624H34.103H34.1436H34.1842H34.2248H34.2654H34.306H34.3466H34.3872H34.4278H34.4684H34.509H34.5496H34.5902H34.6308H34.6714H34.712H34.7527H34.7932H34.8338H34.8745H34.915H34.9556H34.9963H35.0368H35.0774H35.1181H35.1586H35.1992H35.2399H35.2805H35.321H35.3617H35.4023H35.4428H35.4835H35.5241H35.5646H35.6053H35.6459H35.6864H35.7271H35.7677H35.8083H35.8489H35.8895H35.9233L35.9301 17.5975C35.9426 17.5978 35.9563 17.5984 35.9707 17.5991C35.9837 17.5999 35.9973 17.6008 36.0113 17.6018C36.0246 17.6028 36.0383 17.604 36.0519 17.6052C36.0656 17.6065 36.0792 17.6079 36.0925 17.6093C36.1064 17.6109 36.1201 17.6126 36.1331 17.6143C36.1476 17.6163 36.1613 17.6183 36.1737 17.6205C36.1826 17.622 36.1909 17.6235 36.1982 17.6251L36.2143 17.6288C36.2279 17.632 36.2414 17.6354 36.2549 17.6392C36.2685 17.643 36.282 17.647 36.2955 17.6513C36.3091 17.6557 36.3227 17.6603 36.3361 17.6653C36.3497 17.6702 36.3632 17.6755 36.3767 17.681C36.3903 17.6866 36.4039 17.6926 36.4173 17.6987C36.431 17.705 36.4445 17.7116 36.4579 17.7185C36.4716 17.7254 36.4851 17.7328 36.4985 17.7403C36.5122 17.7481 36.5257 17.7562 36.5391 17.7646C36.5528 17.7732 36.5664 17.7821 36.5797 17.7913C36.5934 17.8008 36.607 17.8105 36.6203 17.8206C36.634 17.8311 36.6476 17.8419 36.6609 17.8531C36.6747 17.8646 36.6882 17.8766 36.7015 17.8889C36.7154 17.9017 36.7289 17.9148 36.7421 17.9284C36.7561 17.9426 36.7695 17.9574 36.7827 17.9725C36.7967 17.9885 36.8102 18.005 36.8233 18.0219C36.8374 18.0401 36.8509 18.0587 36.8639 18.0779C36.8781 18.0989 36.8917 18.1205 36.9045 18.1426C36.919 18.1675 36.9325 18.1932 36.9451 18.2196C36.96 18.2508 36.9736 18.283 36.9857 18.3161C37.002 18.3606 37.0156 18.4067 37.0263 18.4544C37.0449 18.5369 37.0549 18.6238 37.0549 18.7145C37.0549 18.8057 37.0449 18.893 37.0263 18.9758C37.0156 19.0235 37.002 19.0698 36.9857 19.1143C36.9736 19.1476 36.96 19.1798 36.9451 19.2111C36.9325 19.2375 36.919 19.2632 36.9045 19.2882C36.8917 19.3103 36.8782 19.3319 36.8639 19.3529C36.8509 19.3721 36.8374 19.3908 36.8233 19.409C36.8102 19.4259 36.7967 19.4423 36.7827 19.4584C36.7695 19.4734 36.756 19.4881 36.7421 19.5024C36.7289 19.516 36.7153 19.5291 36.7015 19.5419C36.6882 19.5541 36.6747 19.566 36.6609 19.5775C36.6476 19.5886 36.6341 19.5995 36.6203 19.6099C36.607 19.62 36.5934 19.6297 36.5797 19.6391C36.5664 19.6483 36.5528 19.6572 36.5391 19.6657C36.5257 19.674 36.5122 19.6821 36.4985 19.6898C36.4851 19.6974 36.4716 19.7046 36.4579 19.7116C36.4445 19.7184 36.431 19.7249 36.4173 19.7312C36.4039 19.7373 36.3903 19.7432 36.3767 19.7488C36.3632 19.7542 36.3497 19.7595 36.3361 19.7644C36.3227 19.7692 36.3091 19.7738 36.2955 19.7781C36.282 19.7824 36.2685 19.7863 36.2549 19.7901C36.2414 19.7937 36.2279 19.7971 36.2143 19.8003L36.1982 19.8039C36.1909 19.8056 36.1826 19.8073 36.1737 19.8089C36.1613 19.8111 36.1476 19.8132 36.1331 19.8152C36.1201 19.8169 36.1064 19.8186 36.0925 19.8202C36.0792 19.8217 36.0656 19.823 36.0519 19.8243C36.0383 19.8255 36.0246 19.8266 36.0113 19.8276C35.9973 19.8286 35.9837 19.8295 35.9707 19.8301C35.9563 19.8309 35.9426 19.8314 35.9301 19.8317L35.9083 19.832H35.8895H35.8489H35.8083H35.7677H35.7271H35.6864H35.6459H35.6053H35.5646H35.5241H35.4835H35.4428H35.4023H35.3617H35.321H35.2805H35.2399H35.1992H35.1586H35.1181H35.0774H35.0368H34.9963H34.9556H34.915H34.8745H34.8338H34.7932H34.7527H34.712H34.6714H34.6308H34.5902H34.5496H34.509H34.4684H34.4278H34.3872H34.3466H34.306H34.2654H34.2248H34.1842H34.1436H34.103H34.0624H34.0218H33.9812H33.9406H33.9H33.8594H33.8188H33.7782H33.7376H33.697H33.6564H33.6158H33.5752H33.5346H33.494H33.473V17.5973ZM36.7423 15.0681C36.7586 15.1431 36.7673 15.2226 36.7673 15.3062C36.7673 15.3898 36.7586 15.4691 36.7423 15.5441C36.7318 15.5923 36.7181 15.6385 36.7016 15.6829C36.6896 15.7153 36.676 15.7467 36.661 15.7769C36.6485 15.8023 36.6349 15.8269 36.6204 15.8508C36.6076 15.8718 36.594 15.8923 36.5798 15.9122C36.5668 15.9303 36.5533 15.9478 36.5392 15.9649C36.5261 15.9807 36.5126 15.9961 36.4986 16.011C36.4855 16.0251 36.472 16.0387 36.4581 16.0518C36.4448 16.0644 36.4313 16.0765 36.4174 16.0883C36.4042 16.0996 36.3906 16.1104 36.3768 16.121C36.3636 16.1311 36.35 16.1409 36.3363 16.1504C36.3229 16.1596 36.3094 16.1684 36.2956 16.1769C36.2823 16.1852 36.2687 16.1931 36.255 16.2007C36.2417 16.2082 36.2281 16.2154 36.2145 16.2222C36.2011 16.2289 36.1875 16.2353 36.1738 16.2415C36.1604 16.2475 36.1469 16.2532 36.1332 16.2586C36.1198 16.2639 36.1063 16.269 36.0926 16.2737C36.0792 16.2784 36.0657 16.2829 36.0521 16.287C36.0386 16.2911 36.0251 16.295 36.0114 16.2985C35.998 16.3021 35.9845 16.3053 35.9708 16.3083C35.9574 16.3113 35.9439 16.3139 35.9303 16.3164L35.9204 16.3182C35.9125 16.3195 35.902 16.3211 35.8896 16.3227C35.8777 16.3242 35.8639 16.3258 35.849 16.3273C35.8362 16.3286 35.8225 16.3299 35.8085 16.3311C35.7952 16.3322 35.7815 16.3332 35.7678 16.334C35.7542 16.3349 35.7405 16.3357 35.7272 16.3362C35.7132 16.3368 35.6995 16.3372 35.6867 16.3372L35.6802 16.3373H35.6461H35.6054H35.5648H35.5243H35.4836H35.443H35.4025H35.3619H35.3212H35.2807H35.2401H35.1994H35.1589H35.1183H35.0776H35.037H34.9965H34.9559H34.9152H34.8747H34.8341H34.7934H34.7529H34.7123H34.6716H34.6311H34.5905H34.5499H34.5092H34.4687H34.4281H34.3874H34.3469H34.3063H34.2657H34.2251H34.1845H34.1439H34.1033H34.0627H34.0221H33.9814H33.9409H33.9003H33.8597H33.8191H33.7785H33.7379H33.6973H33.6567H33.6161H33.5754H33.5349H33.4943H33.473V14.2751H33.4943H33.5349H33.5754H33.6161H33.6567H33.6973H33.7379H33.7785H33.8191H33.8597H33.9003H33.9409H33.9814H34.0221H34.0627H34.1033H34.1439H34.1845H34.2251H34.2657H34.3063H34.3469H34.3874H34.4281H34.4687H34.5092H34.5499H34.5905H34.6311H34.6716H34.7123H34.7529H34.7934H34.8341H34.8747H34.9152H34.9559H34.9965H35.037H35.0776H35.1183H35.1589H35.1994H35.2401H35.2807H35.3212H35.3619H35.4025H35.443H35.4836H35.5243H35.5648H35.6054H35.6461H35.6867H35.7037L35.7272 14.2759C35.7405 14.2764 35.7542 14.2772 35.7678 14.2781C35.7815 14.279 35.7952 14.28 35.8085 14.2811C35.8225 14.2822 35.8362 14.2835 35.849 14.2848C35.8639 14.2862 35.8777 14.2877 35.8896 14.2891C35.902 14.2905 35.9125 14.2919 35.9204 14.293L35.9303 14.2948C35.9439 14.2972 35.9574 14.3 35.9708 14.303C35.9845 14.306 35.998 14.3093 36.0114 14.3129C36.0251 14.3165 36.0386 14.3203 36.0521 14.3245C36.0657 14.3287 36.0792 14.3331 36.0926 14.3378C36.1063 14.3427 36.1198 14.3477 36.1332 14.3531C36.1469 14.3585 36.1604 14.3643 36.1738 14.3703C36.1875 14.3765 36.2011 14.3829 36.2145 14.3896C36.2281 14.3965 36.2417 14.4036 36.255 14.4111C36.2687 14.4187 36.2823 14.4267 36.2956 14.435C36.3094 14.4435 36.3229 14.4523 36.3363 14.4615C36.35 14.4709 36.3636 14.4808 36.3768 14.491C36.3906 14.5015 36.4042 14.5124 36.4174 14.5237C36.4313 14.5355 36.4448 14.5476 36.4581 14.5602C36.472 14.5733 36.4855 14.5869 36.4986 14.601C36.5126 14.6159 36.5261 14.6313 36.5392 14.6471C36.5533 14.6642 36.5668 14.6818 36.5798 14.6999C36.594 14.7197 36.6076 14.7402 36.6204 14.7613C36.6349 14.7851 36.6485 14.8097 36.661 14.8351C36.676 14.8654 36.6896 14.8968 36.7016 14.9292C36.7181 14.9736 36.7318 15.0199 36.7423 15.0681ZM41.7774 4.375H41.7941L41.794 25.5542C41.794 25.6807 41.7882 25.8059 41.7774 25.9296C41.7679 26.0385 41.7543 26.1462 41.7368 26.2526C41.725 26.324 41.7115 26.3948 41.6962 26.465C41.6838 26.5221 41.6703 26.5789 41.6556 26.6351C41.6429 26.6836 41.6293 26.7318 41.615 26.7796C41.602 26.8228 41.5886 26.8658 41.5744 26.9085C41.5614 26.9472 41.5478 26.9855 41.5338 27.0237C41.5207 27.0593 41.5071 27.0946 41.4932 27.1297C41.48 27.1627 41.4665 27.1954 41.4526 27.228C41.4394 27.2588 41.4258 27.2895 41.4119 27.3199C41.3987 27.3489 41.3852 27.3778 41.3714 27.4064C41.3581 27.4339 41.3446 27.4612 41.3307 27.4883C41.3175 27.5143 41.3039 27.5402 41.2901 27.5659C41.2769 27.5906 41.2632 27.615 41.2495 27.6394C41.2362 27.663 41.2227 27.6865 41.2089 27.7098C41.1956 27.7325 41.182 27.755 41.1683 27.7775C41.1549 27.7993 41.1414 27.8211 41.1277 27.8427C41.1144 27.8635 41.1007 27.8842 41.0871 27.9049C41.0737 27.9249 41.0601 27.9448 41.0465 27.9647C41.0331 27.9841 41.0195 28.0036 41.0058 28.0228C40.9924 28.0416 40.979 28.0603 40.9653 28.0789C40.9519 28.097 40.9383 28.1148 40.9246 28.1327C40.9112 28.1503 40.8977 28.1678 40.884 28.1852C40.8706 28.2022 40.8571 28.2191 40.8434 28.2359C40.83 28.2523 40.8164 28.2686 40.8028 28.2849C40.7893 28.3009 40.7759 28.3171 40.7622 28.3329C40.7488 28.3484 40.7352 28.3637 40.7216 28.379C40.7082 28.3941 40.6946 28.4091 40.681 28.424C40.6675 28.4387 40.6541 28.4534 40.6404 28.4679C40.627 28.4821 40.6134 28.4961 40.5998 28.5102C40.5863 28.5241 40.5729 28.5382 40.5592 28.5519C40.5458 28.5654 40.5321 28.5786 40.5186 28.5919C40.5051 28.605 40.4916 28.6182 40.4779 28.6313C40.4645 28.644 40.451 28.6567 40.4374 28.6693C40.4239 28.6818 40.4103 28.6942 40.3967 28.7065C40.3833 28.7187 40.3698 28.7308 40.3561 28.7428C40.3427 28.7546 40.3291 28.7664 40.3155 28.7781C40.302 28.7896 40.2886 28.8012 40.2749 28.8126C40.2615 28.8239 40.2479 28.8349 40.2343 28.846C40.2208 28.857 40.2073 28.8681 40.1937 28.8789C40.1803 28.8896 40.1667 28.9001 40.1531 28.9106C40.1396 28.9211 40.1261 28.9316 40.1125 28.942C40.0991 28.9521 40.0854 28.9621 40.0719 28.9721C40.0583 28.9821 40.0449 28.9921 40.0313 29.002C40.0178 29.0117 40.0042 29.0211 39.9907 29.0306C39.9771 29.0401 39.9637 29.0496 39.95 29.059C39.9366 29.0682 39.923 29.0772 39.9095 29.0862C39.896 29.0953 39.8825 29.1043 39.8688 29.1132C39.8554 29.122 39.8418 29.1306 39.8282 29.1392C39.8147 29.1477 39.8012 29.1563 39.7876 29.1647C39.7742 29.1731 39.7606 29.1813 39.747 29.1895L39.7064 29.2137C39.6929 29.2216 39.6794 29.2295 39.6658 29.2373C39.6524 29.2451 39.6388 29.2526 39.6252 29.2602C39.6117 29.2678 39.5982 29.2754 39.5846 29.2828C39.5711 29.2901 39.5575 29.2972 39.544 29.3044C39.5304 29.3115 39.517 29.3189 39.5034 29.326C39.4899 29.3329 39.4763 29.3395 39.4628 29.3463C39.4492 29.3531 39.4358 29.36 39.4221 29.3666C39.4087 29.3732 39.3951 29.3796 39.3816 29.3861L39.3409 29.4052L39.3003 29.4237C39.2868 29.4298 39.2733 29.4357 39.2597 29.4416C39.2462 29.4475 39.2327 29.4536 39.2191 29.4593C39.2057 29.4651 39.1921 29.4704 39.1785 29.476C39.165 29.4816 39.1515 29.4873 39.1379 29.4927C39.1244 29.4981 39.1109 29.5032 39.0973 29.5085C39.0838 29.5137 39.0703 29.5189 39.0567 29.524L39.0161 29.5391C39.0026 29.544 38.989 29.5487 38.9755 29.5535C38.9619 29.5583 38.9485 29.5632 38.9349 29.5679C38.9214 29.5724 38.9078 29.5767 38.8942 29.5811L38.8537 29.5944C38.8402 29.5987 38.8266 29.6028 38.813 29.607L38.7724 29.6192C38.7589 29.6232 38.7454 29.6273 38.7318 29.6311C38.7184 29.635 38.7048 29.6385 38.6912 29.6422C38.6777 29.6459 38.6642 29.6497 38.6506 29.6533L38.61 29.6636L38.5694 29.6735L38.5288 29.6833C38.5153 29.6864 38.5017 29.6892 38.4882 29.6922C38.4746 29.6952 38.4611 29.6983 38.4476 29.7011L38.407 29.7093L38.3663 29.7171C38.3528 29.7196 38.3393 29.7224 38.3257 29.7248C38.3123 29.7272 38.2987 29.7293 38.2851 29.7316L38.2445 29.7383L38.2039 29.7445L38.1633 29.7502C38.1498 29.7521 38.1363 29.7542 38.1227 29.7559C38.1092 29.7577 38.0956 29.759 38.0821 29.7606C38.0686 29.7622 38.0551 29.7638 38.0415 29.7653C38.028 29.7667 38.0145 29.7682 38.0009 29.7695C37.9874 29.7709 37.9738 29.772 37.9603 29.7732C37.9467 29.7744 37.9332 29.7757 37.9197 29.7768C37.9062 29.7778 37.8926 29.7787 37.8791 29.7796L37.8384 29.7822C37.8249 29.783 37.8114 29.784 37.7978 29.7847C37.7844 29.7854 37.7708 29.7857 37.7572 29.7863L37.7166 29.7878L37.676 29.7889C37.6625 29.7892 37.649 29.7892 37.6354 29.7894L37.5948 29.7899L37.5864 29.79H37.5542H37.5136H37.473H37.4324H37.3917H37.3512H37.3105H37.2699H37.2293H37.1887H37.1481H37.1075H37.0669H37.0263H36.9857H36.9451H36.9045H36.8638H36.8233H36.7826H36.742H36.7014H36.6608H36.6202H36.5796H36.539H36.4984H36.4578H36.4172H36.3766H36.3359H36.2954H36.2547H36.2141H36.1735H36.1329H36.0923H36.0517H36.0111H35.9705H35.9299H35.8893H35.8487H35.808H35.7675H35.7268H35.6862H35.6456H35.605H35.5644H35.5238H35.4832H35.4426H35.402H35.3614H35.3208H35.2801H35.2396H35.1989H35.1583H35.1177H35.0771H35.0365H34.9959H34.9553H34.9147H34.8741H34.8335H34.7929H34.7522H34.7117H34.671H34.6304H34.5898H34.5492H34.5086H34.468H34.4274H34.3868H34.3462H34.3056H34.265H34.2243H34.1838H34.1431H34.1025H34.0619H34.0213H33.9807H33.9401H33.8995H33.8589H33.8183H33.7777H33.7371H33.6964H33.6559H33.6152H33.5746H33.534H33.4934H33.4528H33.4122H33.3716H33.331H33.2904H33.2498H33.2092H33.1685H33.128H33.0873H33.0467H33.0061H32.9655H32.9249H32.8843H32.8437H32.8031H32.7625H32.7219H32.6813H32.6406H32.6H32.5594H32.5188H32.4782H32.4376H32.397H32.3564H32.3158H32.2752H32.2346H32.194H32.1534H32.1127H32.0721H32.0315H31.9909H31.9503H31.9097H31.8691H31.8285H31.7879H31.7473H31.7067H31.666H31.6255H31.5848H31.5442H31.5036H31.416V21.1545H31.5036H31.5442H31.5848H31.6255H31.666H31.7067H31.7473H31.7879H31.8285H31.8691H31.9097H31.9503H31.9909H32.0315H32.0721H32.1127H32.1534H32.194H32.2346H32.2752H32.3158H32.3564H32.397H32.4376H32.4782H32.5188H32.5594H32.6H32.6406H32.6813H32.7219H32.7625H32.8031H32.8437H32.8843H32.9249H32.9655H33.0061H33.0467H33.0873H33.128H33.1685H33.2092H33.2498H33.2904H33.331H33.3716H33.4122H33.4528H33.4934H33.534H33.5746H33.6152H33.6559H33.6964H33.7371H33.7777H33.8183H33.8589H33.8995H33.9401H33.9807H34.0213H34.0619H34.1025H34.1431H34.1838H34.2243H34.265H34.3056H34.3462H34.3868H34.4274H34.468H34.5086H34.5492H34.5898H34.6304H34.671H34.7117H34.7522H34.7929H34.8335H34.8741H34.9147H34.9553H34.9959H35.0365H35.0771H35.1177H35.1583H35.1989H35.2396H35.2801H35.3208H35.3614H35.402H35.4426H35.4832H35.5238H35.5644H35.605H35.6456H35.6862H35.7268H35.7675H35.808H35.8487H35.8893H35.9299H35.9705H36.0111H36.0517H36.0923H36.1329H36.1735H36.2141H36.2547H36.2954H36.3359H36.3766H36.4172H36.4578H36.4984H36.539H36.5796H36.6202H36.6608H36.7014H36.742H36.7826H36.8233H36.8638H36.9045H36.9451H36.9857H37.0263H37.0669H37.1075H37.1481H37.1887H37.2293H37.2699H37.3105H37.3512H37.3917H37.4324H37.473H37.5136H37.5542H37.5948H37.6354H37.676H37.7166H37.7572H37.7978H37.8384H37.8791H37.9197H37.9412L37.9603 21.1543L38.0009 21.154L38.0415 21.1532C38.0551 21.1528 38.0686 21.1526 38.0821 21.1521C38.0957 21.1517 38.1092 21.151 38.1227 21.1504L38.1633 21.1485L38.2039 21.146L38.2445 21.1432L38.2851 21.14L38.3257 21.1363C38.3393 21.135 38.3529 21.1337 38.3663 21.1323C38.3799 21.1309 38.3934 21.1293 38.407 21.1277L38.4476 21.1227C38.4611 21.1209 38.4747 21.1192 38.4882 21.1173C38.5018 21.1154 38.5153 21.1133 38.5288 21.1113C38.5424 21.1092 38.5559 21.1072 38.5694 21.105L38.61 21.0981L38.6506 21.0908C38.6642 21.0882 38.6778 21.0858 38.6912 21.0831C38.7048 21.0804 38.7183 21.0775 38.7318 21.0746L38.7724 21.0658C38.786 21.0627 38.7996 21.0597 38.813 21.0565C38.8267 21.0533 38.8402 21.0498 38.8537 21.0465C38.8672 21.0431 38.8808 21.0396 38.8942 21.0361C38.9078 21.0325 38.9214 21.0288 38.9349 21.0251C38.9485 21.0213 38.962 21.0174 38.9755 21.0134C38.9891 21.0095 39.0026 21.0054 39.0161 21.0013L39.0567 20.9885C39.0703 20.9841 39.0838 20.9796 39.0973 20.975C39.1109 20.9704 39.1245 20.9658 39.1379 20.961C39.1515 20.9562 39.1651 20.9514 39.1785 20.9464C39.1922 20.9413 39.2056 20.9361 39.2191 20.9308C39.2327 20.9256 39.2463 20.9202 39.2597 20.9147C39.2733 20.9092 39.2869 20.9037 39.3003 20.898C39.314 20.8923 39.3275 20.8864 39.3409 20.8804C39.3546 20.8744 39.3681 20.8682 39.3816 20.862C39.3951 20.8557 39.4087 20.8493 39.4221 20.8429C39.4357 20.8363 39.4493 20.8297 39.4628 20.823C39.4764 20.8161 39.4899 20.8091 39.5034 20.802C39.517 20.7949 39.5305 20.7875 39.544 20.7801C39.5576 20.7727 39.5712 20.7651 39.5846 20.7574C39.5982 20.7496 39.6118 20.7417 39.6252 20.7337C39.6388 20.7256 39.6524 20.7174 39.6658 20.709C39.6795 20.7004 39.693 20.6917 39.7064 20.683C39.7201 20.674 39.7336 20.6649 39.747 20.6558C39.7607 20.6464 39.7742 20.6369 39.7876 20.6274C39.8013 20.6176 39.8148 20.6077 39.8282 20.5976C39.8419 20.5874 39.8555 20.577 39.8688 20.5665C39.8825 20.5558 39.8961 20.5449 39.9095 20.5339C39.9232 20.5226 39.9367 20.5112 39.95 20.4996C39.9638 20.4878 39.9773 20.4757 39.9907 20.4636C40.0044 20.451 40.0179 20.4383 40.0313 20.4255C40.045 20.4123 40.0586 20.3989 40.0719 20.3854C40.0857 20.3714 40.0992 20.3572 40.1125 20.3428C40.1263 20.328 40.1398 20.3129 40.1531 20.2977C40.1669 20.2819 40.1805 20.2658 40.1937 20.2496C40.2075 20.2327 40.2211 20.2156 40.2343 20.1983C40.2481 20.1801 40.2618 20.1618 40.2749 20.1432C40.2889 20.1235 40.3023 20.1034 40.3155 20.0831C40.3295 20.0616 40.343 20.0399 40.3561 20.0179C40.3702 19.9942 40.3837 19.9701 40.3967 19.9458C40.4109 19.9193 40.4245 19.8926 40.4374 19.8654C40.4517 19.835 40.4652 19.8041 40.4779 19.7728C40.4926 19.7368 40.5061 19.7004 40.5186 19.6634C40.5338 19.6177 40.5473 19.5711 40.5592 19.5237C40.5765 19.4544 40.5901 19.3833 40.5998 19.3104C40.6116 19.222 40.6178 19.1312 40.6178 19.0378C40.6178 18.9469 40.6116 18.8586 40.5998 18.7728C40.5901 18.7024 40.5765 18.6337 40.5592 18.5668C40.5473 18.5213 40.5338 18.4766 40.5186 18.4327C40.5061 18.3968 40.4926 18.3613 40.4779 18.3266C40.4653 18.2964 40.4517 18.2667 40.4374 18.2375C40.4245 18.2112 40.4109 18.1853 40.3967 18.1598C40.3837 18.1363 40.3702 18.113 40.3561 18.0901C40.3431 18.0689 40.3295 18.0479 40.3155 18.0273C40.3024 18.0078 40.2889 17.9884 40.2749 17.9694C40.2618 17.9514 40.2482 17.9337 40.2343 17.9163C40.2211 17.8995 40.2075 17.883 40.1937 17.8667C40.1804 17.851 40.1669 17.8355 40.1531 17.8202C40.1398 17.8055 40.1263 17.791 40.1125 17.7767C40.0992 17.7628 40.0856 17.7492 40.0719 17.7357C40.0586 17.7226 40.045 17.7097 40.0313 17.697C40.0179 17.6846 40.0044 17.6724 39.9907 17.6604C39.9773 17.6486 39.9638 17.637 39.95 17.6255C39.9367 17.6143 39.9232 17.6033 39.9095 17.5924C39.8961 17.5817 39.8825 17.5712 39.8688 17.5608C39.8554 17.5507 39.8419 17.5407 39.8282 17.5307C39.8148 17.5211 39.8013 17.5115 39.7876 17.502C39.7742 17.4928 39.7607 17.4836 39.747 17.4745C39.7336 17.4657 39.7201 17.4569 39.7064 17.4482C39.693 17.4398 39.6795 17.4314 39.6658 17.4231C39.6524 17.415 39.6389 17.407 39.6252 17.3991C39.6118 17.3913 39.5982 17.3837 39.5846 17.3761C39.5712 17.3687 39.5576 17.3614 39.544 17.3541C39.5305 17.347 39.517 17.3399 39.5034 17.333C39.4899 17.3261 39.4764 17.3193 39.4628 17.3126C39.4493 17.3061 39.4358 17.2995 39.4221 17.2931C39.4087 17.2868 39.3951 17.2807 39.3816 17.2746C39.3681 17.2685 39.3546 17.2626 39.3409 17.2567C39.3275 17.251 39.3139 17.2453 39.3003 17.2396C39.2868 17.2341 39.2734 17.2285 39.2597 17.2231C39.2463 17.2178 39.2327 17.2126 39.2191 17.2074C39.2057 17.2023 39.1921 17.1974 39.1785 17.1925C39.165 17.1876 39.1515 17.1828 39.1379 17.1781C39.1244 17.1734 39.1109 17.1688 39.0973 17.1642C39.0838 17.1598 39.0703 17.1554 39.0567 17.1511C39.0432 17.1468 39.0296 17.1427 39.0161 17.1386L38.9755 17.1266C38.962 17.1227 38.9485 17.1188 38.9349 17.1151C38.9214 17.1114 38.9078 17.1078 38.8942 17.1043C38.8808 17.1008 38.8672 17.0974 38.8537 17.094C38.8402 17.0906 38.8266 17.0873 38.813 17.0841C38.7996 17.0809 38.786 17.0779 38.7724 17.0748C38.759 17.0718 38.7454 17.069 38.7318 17.0661C38.7183 17.0633 38.7048 17.0604 38.6912 17.0577L38.6506 17.0499L38.61 17.0426C38.5965 17.0403 38.583 17.0379 38.5694 17.0357L38.5288 17.0292C38.5153 17.0272 38.5017 17.0252 38.4882 17.0233L38.4476 17.0178L38.407 17.0126L38.3663 17.008L38.3257 17.0037L38.2851 16.9999L38.2445 16.9965L38.207 16.9936L38.207 16.9446L38.2445 16.9387L38.2851 16.932C38.2987 16.9296 38.3123 16.9273 38.3257 16.9248L38.3663 16.9169C38.38 16.9142 38.3935 16.9114 38.407 16.9085L38.4476 16.8996C38.4611 16.8965 38.4747 16.8934 38.4882 16.8902C38.5018 16.8869 38.5153 16.8834 38.5288 16.8799C38.5424 16.8764 38.5559 16.8728 38.5694 16.8691C38.583 16.8654 38.5965 16.8616 38.61 16.8577C38.6236 16.8538 38.6372 16.8498 38.6506 16.8457C38.6642 16.8416 38.6778 16.8373 38.6912 16.833C38.7049 16.8286 38.7184 16.824 38.7318 16.8195C38.7455 16.8148 38.759 16.81 38.7724 16.8052C38.7861 16.8003 38.7996 16.7954 38.813 16.7903C38.8267 16.7852 38.8402 16.7799 38.8537 16.7746C38.8673 16.7692 38.8808 16.7637 38.8942 16.7581C38.9079 16.7524 38.9214 16.7467 38.9349 16.7408C38.9485 16.7348 38.962 16.7287 38.9755 16.7225C38.9891 16.7162 39.0026 16.7098 39.0161 16.7033C39.0297 16.6967 39.0433 16.6899 39.0567 16.6831C39.0703 16.6761 39.0839 16.6691 39.0973 16.662C39.111 16.6547 39.1245 16.6472 39.1379 16.6398C39.1516 16.6321 39.1651 16.6243 39.1785 16.6165C39.1922 16.6084 39.2057 16.6003 39.2191 16.592C39.2328 16.5836 39.2463 16.575 39.2597 16.5664C39.2734 16.5575 39.2869 16.5485 39.3003 16.5394C39.314 16.53 39.3276 16.5206 39.3409 16.511C39.3547 16.5012 39.3682 16.4912 39.3816 16.4812C39.3953 16.4708 39.4088 16.4604 39.4221 16.4498C39.4359 16.4389 39.4494 16.4279 39.4628 16.4167C39.4765 16.4052 39.49 16.3935 39.5034 16.3817C39.5172 16.3695 39.5307 16.3571 39.544 16.3446C39.5577 16.3317 39.5713 16.3186 39.5846 16.3054C39.5984 16.2917 39.6119 16.2779 39.6252 16.2639C39.639 16.2493 39.6526 16.2345 39.6658 16.2195C39.6796 16.2039 39.6932 16.1881 39.7064 16.1721C39.7203 16.1554 39.7338 16.1385 39.747 16.1214C39.7609 16.1033 39.7745 16.085 39.7876 16.0665C39.8016 16.0469 39.8151 16.027 39.8282 16.007C39.8422 15.9856 39.8558 15.9639 39.8688 15.942C39.8829 15.9183 39.8965 15.8942 39.9095 15.8699C39.9237 15.8432 39.9372 15.8162 39.95 15.7888C39.9645 15.7581 39.978 15.7268 39.9907 15.6953C40.0054 15.6586 40.0189 15.6214 40.0313 15.5836C40.0467 15.5362 40.0603 15.488 40.0719 15.4393C40.0906 15.3601 40.1042 15.2793 40.1125 15.1971C40.1191 15.1322 40.1225 15.0665 40.1225 15.0001C40.1225 14.93 40.1191 14.8616 40.1125 14.795C40.1041 14.7098 40.0905 14.6275 40.0719 14.5481C40.0603 14.4985 40.0467 14.45 40.0313 14.4027C40.0189 14.3648 40.0054 14.3277 39.9907 14.2913C39.978 14.26 39.9644 14.2292 39.95 14.199C39.9372 14.172 39.9236 14.1455 39.9095 14.1194C39.8965 14.0955 39.8829 14.072 39.8688 14.0488C39.8557 14.0273 39.8422 14.0061 39.8282 13.9852C39.8151 13.9656 39.8015 13.9464 39.7876 13.9274C39.7745 13.9095 39.7609 13.8917 39.747 13.8743C39.7338 13.8576 39.7203 13.8411 39.7064 13.8249C39.6932 13.8095 39.6796 13.7943 39.6658 13.7793C39.6526 13.7649 39.639 13.7506 39.6252 13.7366C39.6119 13.723 39.5984 13.7097 39.5846 13.6965C39.5713 13.6837 39.5577 13.6711 39.544 13.6587C39.5307 13.6466 39.5171 13.6347 39.5034 13.623C39.49 13.6116 39.4765 13.6004 39.4628 13.5893C39.4494 13.5785 39.4359 13.5678 39.4221 13.5574C39.4088 13.5471 39.3952 13.5371 39.3816 13.5272C39.3682 13.5174 39.3546 13.5079 39.3409 13.4984C39.3275 13.4892 39.314 13.4801 39.3003 13.4711C39.2869 13.4623 39.2734 13.4537 39.2597 13.4451C39.2463 13.4367 39.2328 13.4285 39.2191 13.4204C39.2057 13.4124 39.1922 13.4045 39.1785 13.3968C39.1651 13.3891 39.1516 13.3816 39.1379 13.3742C39.1245 13.3669 39.111 13.3598 39.0973 13.3527C39.0839 13.3458 39.0703 13.339 39.0567 13.3322C39.0432 13.3256 39.0297 13.319 39.0161 13.3126C39.0026 13.3062 38.9891 13.2999 38.9755 13.2938C38.962 13.2878 38.9485 13.282 38.9349 13.2761C38.9214 13.2704 38.9078 13.2647 38.8942 13.2591C38.8808 13.2536 38.8672 13.2482 38.8537 13.2429C38.8402 13.2376 38.8267 13.2324 38.813 13.2273C38.7996 13.2223 38.7861 13.2174 38.7724 13.2126C38.759 13.2078 38.7454 13.2031 38.7318 13.1985C38.7184 13.194 38.7048 13.1895 38.6912 13.1852C38.6778 13.1808 38.6642 13.1766 38.6506 13.1724C38.6371 13.1683 38.6236 13.1641 38.61 13.1602C38.5965 13.1563 38.583 13.1525 38.5694 13.1488C38.5559 13.1451 38.5424 13.1415 38.5288 13.1379L38.4882 13.1275C38.4747 13.1242 38.4612 13.1209 38.4476 13.1177C38.4341 13.1145 38.4206 13.1115 38.407 13.1085L38.3663 13.0998C38.3528 13.097 38.3394 13.0941 38.3257 13.0915C38.3123 13.0888 38.2987 13.0864 38.2851 13.0839L38.2445 13.0767C38.231 13.0744 38.2175 13.0721 38.2039 13.0699L38.1633 13.0637L38.1227 13.0579L38.0821 13.0525L38.0415 13.0477L38.0009 13.0433L37.9603 13.0392L37.9197 13.0356L37.8791 13.0324L37.8384 13.0295L37.7978 13.0272L37.7817 13.0263L37.7572 13.0247L37.7166 13.0223L37.676 13.0201L37.6354 13.0179L37.5948 13.016L37.5542 13.0142L37.5136 13.0127L37.473 13.0114L37.4324 13.0105L37.3917 13.01L37.3694 13.0099H37.3512H37.3105H37.2699H37.2293H37.1887H37.1481H37.1075H37.0669H37.0263H36.9857H36.9451H36.9045H36.8638H36.8233H36.7826H36.742H36.7014H36.6608H36.6202H36.5796H36.539H36.4984H36.4578H36.4172H36.3766H36.3359H36.2954H36.2547H36.2141H36.1735H36.1329H36.0923H36.0517H36.0111H35.9705H35.9299H35.8893H35.8487H35.808H35.7675H35.7268H35.6862H35.6456H35.605H35.5644H35.5238H35.4832H35.4426H35.402H35.3614H35.3208H35.2801H35.2396H35.1989H35.1583H35.1177H35.0771H35.0365H34.9959H34.9553H34.9147H34.8741H34.8335H34.7929H34.7522H34.7117H34.671H34.6304H34.5898H34.5492H34.5086H34.468H34.4274H34.3868H34.3462H34.3056H34.265H34.2243H34.1838H34.1431H34.1025H34.0619H34.0213H33.9807H33.9401H33.8995H33.8589H33.8183H33.7777H33.7371H33.6964H33.6559H33.6152H33.5746H33.534H33.4934H33.4528H33.4122H33.3716H33.331H33.2904H33.2498H33.2092H33.1685H33.128H33.0873H33.0467H33.0061H32.9655H32.9249H32.8843H32.8437H32.8031H32.7625H32.7219H32.6813H32.6406H32.6H32.5594H32.5188H32.4782H32.4376H32.397H32.3564H32.3158H32.2752H32.2346H32.194H32.1534H32.1127H32.0721H32.0315H31.9909H31.9503H31.9097H31.8691H31.8285H31.7879H31.7473H31.7067H31.666H31.6255H31.5848H31.5442H31.5036H31.416V8.61119C31.416 8.31526 31.4463 8.02649 31.5036 7.74768C31.5159 7.68797 31.5295 7.62877 31.5442 7.57005C31.5569 7.5198 31.5705 7.46992 31.5848 7.42041C31.5977 7.37619 31.6112 7.33227 31.6255 7.28866C31.6385 7.24881 31.6519 7.20917 31.666 7.16986C31.6791 7.1334 31.6926 7.09714 31.7067 7.06115C31.7198 7.02754 31.7333 6.99409 31.7473 6.96092C31.7605 6.92961 31.774 6.89843 31.7879 6.8675C31.8011 6.83812 31.8147 6.80894 31.8285 6.77994C31.8417 6.75225 31.8553 6.72477 31.8691 6.69742C31.8824 6.67113 31.896 6.64504 31.9097 6.61905C31.923 6.594 31.9365 6.56913 31.9503 6.5444C31.9636 6.5204 31.9772 6.49662 31.9909 6.47293C32.0043 6.44996 32.0178 6.42708 32.0315 6.40441C32.0449 6.38242 32.0584 6.3606 32.0721 6.33888C32.0854 6.31784 32.0991 6.297 32.1127 6.27622C32.1261 6.25589 32.1396 6.23563 32.1534 6.21554C32.1668 6.19585 32.1802 6.17616 32.194 6.15671C32.2073 6.13787 32.2209 6.11927 32.2346 6.10066C32.2479 6.08236 32.2615 6.0642 32.2752 6.04614C32.2887 6.02835 32.3021 6.01049 32.3158 5.99294C32.3291 5.97586 32.3428 5.95905 32.3564 5.94218C32.3698 5.92554 32.3833 5.90904 32.397 5.89264C32.4105 5.87644 32.4239 5.86024 32.4376 5.84425C32.451 5.82866 32.4646 5.81335 32.4782 5.79796C32.4917 5.78271 32.5051 5.76743 32.5188 5.75239C32.5322 5.73765 32.5458 5.72304 32.5594 5.70847C32.5729 5.6941 32.5864 5.67984 32.6 5.66564C32.6135 5.65164 32.627 5.63765 32.6406 5.62382C32.6541 5.61024 32.6677 5.59685 32.6813 5.58347C32.6948 5.57015 32.7082 5.5567 32.7219 5.54358C32.7352 5.53074 32.7489 5.5182 32.7625 5.50553C32.776 5.49292 32.7894 5.48028 32.8031 5.46785C32.8165 5.45561 32.8301 5.44362 32.8437 5.43159C32.8572 5.41963 32.8707 5.40767 32.8843 5.39587C32.8978 5.38425 32.9113 5.3728 32.9249 5.36134C32.9384 5.34999 32.9519 5.33868 32.9655 5.32749C32.979 5.31641 32.9925 5.30547 33.0061 5.29459L33.0467 5.26243L33.0873 5.23112C33.1008 5.22085 33.1144 5.21066 33.128 5.20056C33.1414 5.19056 33.1549 5.1806 33.1685 5.17074L33.2092 5.1417C33.2226 5.13218 33.2362 5.12272 33.2498 5.11337L33.2904 5.08568L33.331 5.05875C33.3445 5.0499 33.358 5.04109 33.3716 5.03242L33.4122 5.00687C33.4257 4.99843 33.4392 4.98999 33.4528 4.98172C33.4663 4.97352 33.4799 4.96556 33.4934 4.95753C33.507 4.9495 33.5204 4.9414 33.534 4.93354C33.5474 4.92578 33.5611 4.91829 33.5746 4.91067C33.5882 4.90304 33.6016 4.89528 33.6152 4.88783C33.6287 4.88047 33.6423 4.87336 33.6559 4.86614C33.6694 4.85892 33.6828 4.85167 33.6964 4.84459C33.7099 4.83757 33.7235 4.83076 33.7371 4.82392C33.7506 4.81711 33.7641 4.81026 33.7777 4.80359L33.8183 4.78383C33.8318 4.77736 33.8453 4.77106 33.8589 4.76472C33.8724 4.75842 33.8859 4.75201 33.8995 4.74585C33.913 4.73975 33.9266 4.73392 33.9401 4.72795C33.9536 4.72199 33.9671 4.71592 33.9807 4.7101C33.9942 4.70434 34.0078 4.69885 34.0213 4.69322C34.0348 4.68763 34.0483 4.68197 34.0619 4.67651L34.1025 4.66042L34.1431 4.64487C34.1567 4.63972 34.1702 4.6345 34.1838 4.62952C34.1972 4.62457 34.2108 4.61993 34.2243 4.61511C34.2379 4.6103 34.2514 4.60539 34.265 4.60071C34.2784 4.59607 34.292 4.5917 34.3056 4.58719L34.3462 4.57394C34.3597 4.56961 34.3732 4.56523 34.3868 4.56103C34.4003 4.55686 34.4139 4.55293 34.4274 4.5489C34.4409 4.54484 34.4544 4.54063 34.468 4.53674C34.4815 4.53287 34.4951 4.52928 34.5086 4.52555C34.5221 4.52183 34.5356 4.51807 34.5492 4.51447L34.5898 4.5039C34.6033 4.50048 34.6169 4.49723 34.6304 4.49394C34.644 4.49065 34.6574 4.48713 34.671 4.48398C34.6845 4.48086 34.6981 4.47801 34.7117 4.475L34.7522 4.46608L34.7929 4.45765C34.8063 4.45494 34.8199 4.45239 34.8335 4.44982C34.847 4.44721 34.8605 4.44443 34.8741 4.44196C34.8876 4.43948 34.9012 4.43738 34.9147 4.43508L34.9553 4.4283C34.9688 4.42613 34.9824 4.4239 34.9959 4.42186C35.0094 4.41983 35.023 4.41803 35.0365 4.41614C35.0501 4.41424 35.0635 4.41217 35.0771 4.41041C35.0906 4.40865 35.1042 4.40709 35.1177 4.40546L35.1583 4.40079C35.1719 4.3993 35.1854 4.39764 35.1989 4.39628C35.2124 4.39492 35.226 4.39387 35.2396 4.39265L35.2801 4.38903L35.3208 4.38595C35.3343 4.38496 35.3478 4.38418 35.3614 4.38334C35.3749 4.38252 35.3884 4.38147 35.402 4.38076C35.4155 4.38005 35.4291 4.37964 35.4426 4.37907L35.4832 4.37754C35.4968 4.3771 35.5103 4.37652 35.5238 4.37622C35.5373 4.37591 35.5509 4.37588 35.5644 4.37568C35.5779 4.37547 35.5915 4.37524 35.605 4.37517L35.6152 4.37503H35.6456H35.6862H35.7268H35.7675H35.808H35.8487H35.8893H35.9299H35.9705H36.0111H36.0517H36.0923H36.1329H36.1735H36.2141H36.2547H36.2954H36.3359H36.3766H36.4172H36.4578H36.4984H36.539H36.5796H36.6202H36.6608H36.7014H36.742H36.7826H36.8233H36.8638H36.9045H36.9451H36.9857H37.0263H37.0669H37.1075H37.1481H37.1887H37.2293H37.2699H37.3105H37.3512H37.3917H37.4324H37.473H37.5136H37.5542H37.5948H37.6354H37.676H37.7166H37.7572H37.7978H37.8384H37.8791H37.9197H37.9603H38.0009H38.0415H38.0821H38.1227H38.1633H38.2039H38.2445H38.2851H38.3257H38.3663H38.407H38.4476H38.4882H38.5288H38.5694H38.61H38.6506H38.6912H38.7318H38.7724H38.813H38.8537H38.8942H38.9349H38.9755H39.0161H39.0567H39.0973H39.1379H39.1785H39.2191H39.2597H39.3003H39.3409H39.3816H39.4221H39.4628H39.5034H39.544H39.5846H39.6252H39.6658H39.7064H39.747H39.7876H39.8282H39.8688H39.9095H39.95H39.9907H40.0313H40.0719H40.1125H40.1531H40.1937H40.2343H40.2749H40.3155H40.3561H40.3967H40.4374H40.4779H40.5186H40.5592H40.5998H40.6404H40.681H40.7216H40.7622H40.8028H40.8434H40.884H40.9246H40.9653H41.0058H41.0465H41.0871H41.1277H41.1683H41.2089H41.2495H41.2901H41.3307H41.3714H41.4119H41.4526H41.4932H41.5338H41.5744H41.615H41.6556H41.6962H41.7368H41.7774V4.375Z",
      fill: "#54B230"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.1377 19.0723V8.61115C8.1377 8.31608 8.16772 8.02805 8.22476 7.74998C8.23702 7.69027 8.25061 7.63111 8.26532 7.57235C8.27791 7.52203 8.29147 7.47212 8.30584 7.42254C8.31867 7.37836 8.3322 7.33451 8.34637 7.29093C8.35936 7.25105 8.37279 7.21133 8.38692 7.17196C8.40001 7.13553 8.41341 7.09931 8.42744 7.06336C8.44054 7.02974 8.45407 6.99623 8.468 6.96302C8.48116 6.93171 8.49466 6.9006 8.50852 6.8697C8.52172 6.84032 8.53525 6.81118 8.54904 6.78217C8.56224 6.75445 8.57583 6.72694 8.5896 6.69956C8.60283 6.67326 8.61636 6.64717 8.63012 6.62121C8.64338 6.59617 8.65691 6.5713 8.67064 6.54656C8.68394 6.52261 8.69744 6.49879 8.7112 6.47513C8.72453 6.45216 8.73796 6.42925 8.75172 6.40655C8.76505 6.38459 8.77858 6.3628 8.79228 6.34112C8.80554 6.32011 8.81917 6.29923 8.8328 6.27846C8.84616 6.25813 8.85963 6.23787 8.87332 6.21777C8.88679 6.19805 8.90011 6.17836 8.91388 6.15888C8.92717 6.14007 8.94081 6.1215 8.9544 6.1029C8.9678 6.0846 8.98129 6.06644 8.99496 6.04838C9.00839 6.03062 9.02178 6.01273 9.03548 5.99518C9.04881 5.97813 9.06244 5.96136 9.076 5.94452C9.0894 5.92788 9.10289 5.91131 9.11656 5.89487C9.12999 5.87871 9.14342 5.86258 9.15708 5.84662C9.17044 5.831 9.18404 5.81565 9.19764 5.80023C9.21107 5.78495 9.2245 5.7697 9.23816 5.75466C9.25152 5.73992 9.26512 5.72538 9.27868 5.71084C9.29211 5.69644 9.30561 5.68217 9.31924 5.66798C9.33267 5.65398 9.34613 5.63999 9.35976 5.62616C9.37316 5.61257 9.38675 5.59919 9.40032 5.5858C9.41381 5.57249 9.42717 5.55907 9.44084 5.54595C9.4542 5.53311 9.46783 5.52057 9.48136 5.5079C9.49486 5.49526 9.50825 5.48259 9.52192 5.47015C9.53531 5.45795 9.54891 5.44599 9.56244 5.43396C9.57594 5.422 9.58936 5.41 9.603 5.39821C9.61642 5.38659 9.62995 5.37517 9.64352 5.36372C9.65695 5.35237 9.67044 5.34101 9.68404 5.32983C9.69747 5.31878 9.71103 5.30784 9.7246 5.29693C9.73806 5.28612 9.75152 5.27541 9.76512 5.26477C9.77855 5.25423 9.79211 5.24383 9.80567 5.23346C9.81914 5.22319 9.83263 5.21296 9.8462 5.20286L9.88672 5.17311C9.90018 5.16332 9.91368 5.15359 9.92728 5.14397C9.9407 5.13445 9.95423 5.12503 9.9678 5.11567C9.98126 5.10635 9.99476 5.0971 10.0083 5.08795C10.0218 5.07891 10.0353 5.07 10.0489 5.06108C10.0623 5.05224 10.0758 5.04333 10.0894 5.03462C10.1028 5.02601 10.1164 5.01761 10.13 5.00914C10.1435 5.0007 10.1569 4.99216 10.1705 4.98389C10.1839 4.97573 10.1975 4.9678 10.211 4.95977C10.2245 4.95173 10.2379 4.94357 10.2516 4.93567C10.265 4.92791 10.2786 4.92049 10.2921 4.91287C10.3056 4.90524 10.319 4.89752 10.3326 4.89003C10.3461 4.88264 10.3596 4.87553 10.3732 4.86831C10.3867 4.86109 10.4001 4.85384 10.4137 4.84676C10.4271 4.83974 10.4407 4.83286 10.4542 4.82598L10.4948 4.80572C10.5083 4.79905 10.5217 4.79237 10.5353 4.78586C10.5488 4.77939 10.5623 4.77312 10.5758 4.76679C10.5894 4.76045 10.6028 4.75398 10.6164 4.74781C10.6298 4.74168 10.6434 4.73592 10.6569 4.72995C10.6704 4.72399 10.6839 4.71792 10.6974 4.71209C10.7109 4.70633 10.7245 4.70078 10.738 4.69515L10.7785 4.67848L10.819 4.66228L10.8596 4.64676C10.8731 4.64161 10.8865 4.63629 10.9001 4.63128C10.9135 4.62633 10.9272 4.62172 10.9407 4.61691C10.9542 4.6121 10.9676 4.60722 10.9812 4.60254L11.0217 4.58889L11.0623 4.57564C11.0758 4.5713 11.0892 4.56686 11.1028 4.56266C11.1162 4.55849 11.1298 4.55453 11.1433 4.55049C11.1568 4.54643 11.1703 4.54229 11.1839 4.53836C11.1973 4.53447 11.2109 4.53084 11.2244 4.52708L11.265 4.516C11.2784 4.51241 11.2919 4.50875 11.3055 4.50529C11.3189 4.50183 11.3325 4.49868 11.346 4.49536C11.3595 4.49204 11.373 4.48858 11.3866 4.4854C11.4 4.48225 11.4136 4.4793 11.4271 4.47628L11.4676 4.46741C11.4811 4.46449 11.4946 4.46154 11.5082 4.4588C11.5216 4.45609 11.5352 4.45358 11.5487 4.45097C11.5622 4.44836 11.5757 4.44565 11.5892 4.44318C11.6027 4.4407 11.6162 4.43847 11.6298 4.43613L11.6703 4.42935C11.6838 4.42718 11.6973 4.42485 11.7108 4.42278C11.7243 4.42071 11.7379 4.41898 11.7514 4.41705C11.7648 4.41515 11.7783 4.41312 11.7919 4.41133L11.8324 4.40621L11.873 4.40157C11.8865 4.40004 11.8999 4.39828 11.9135 4.39689C11.927 4.3955 11.9405 4.39448 11.954 4.39323L11.9946 4.38964C12.0081 4.38849 12.0216 4.38737 12.0351 4.38639C12.0486 4.3854 12.0621 4.38462 12.0757 4.38378C12.0892 4.38293 12.1027 4.38195 12.1162 4.3812C12.1297 4.38046 12.1432 4.37995 12.1567 4.37934L12.1973 4.37778C12.2108 4.3773 12.2242 4.37659 12.2378 4.37625C12.2513 4.37591 12.2648 4.37595 12.2783 4.37575C12.2918 4.37554 12.3053 4.3753 12.3189 4.37524L12.3594 4.375H12.3999H12.4405H12.481H12.5215H12.5621H12.6026H12.6431H12.6837H12.7242H12.7647H12.8053H12.8458H12.8863H12.9269H12.9674H13.008H13.0485H13.089H13.1296H13.1701H13.2107H13.2512H13.2917H13.3323H13.3728H13.4133H13.4539H13.4944H13.5349H13.5755H13.616H13.6565H13.6971H13.7376H13.7781H13.8187H13.8592H13.8997H13.9403H13.9808H14.0213H14.0619H14.1024H14.143H14.1835H14.224H14.2646H14.3051H14.3457H14.3862H14.4267H14.4673H14.5078H14.5483H14.5889H14.6294H14.6699H14.7105H14.751H14.7915H14.8321H14.8726H14.9131H14.9537H14.9942H15.0347H15.0753H15.1158H15.1563H15.1969H15.2374H15.278H15.3185H15.359H15.3996H15.4401H15.4807H15.5212H15.5617H15.6023H15.6428H15.6833H15.7239H15.7644H15.8049H15.8455H15.886H15.9265H15.9671H16.0076H16.0481H16.0887H16.1292H16.1697H16.2103H16.2508H16.2914H16.3319H16.3724H16.413H16.4535H16.494H16.5346H16.5751H16.6157H16.6562H16.6967H16.7373H16.7778H16.8183H16.8589H16.8994H16.9399H16.9805H17.021H17.0615H17.1021H17.1426H17.1831H17.2237H17.2642H17.3047H17.3453H17.3858H17.4264H17.4669H17.5074H17.548H17.5885H17.629H17.6696H17.7101H17.7506H17.7912H17.8317H17.8722H17.9128H17.9533H17.9938H18.0344H18.0749H18.1154H18.156H18.1965H18.237H18.2776H18.3181H18.3586H18.3992H18.4397H18.4803H18.5147V25.5542C18.5147 25.7384 18.5029 25.9199 18.4803 26.098C18.4694 26.1837 18.4556 26.2685 18.4397 26.3525C18.4276 26.4165 18.4141 26.4799 18.3992 26.5427C18.3866 26.5957 18.3732 26.6483 18.3586 26.7005C18.3459 26.7463 18.3323 26.7917 18.3181 26.8368C18.3052 26.8777 18.2917 26.9182 18.2776 26.9586C18.2646 26.9959 18.2511 27.033 18.237 27.0698C18.224 27.1042 18.2105 27.1384 18.1965 27.1723C18.1834 27.2043 18.1699 27.2361 18.156 27.2676C18.1428 27.2976 18.1293 27.3273 18.1154 27.357C18.1023 27.3852 18.0887 27.4132 18.0749 27.4411C18.0617 27.4679 18.0482 27.4945 18.0344 27.5209C18.0211 27.5463 18.0076 27.5717 17.9938 27.5968C17.9805 27.6211 17.9671 27.6454 17.9533 27.6694C17.94 27.6926 17.9265 27.7156 17.9128 27.7385C17.8995 27.7607 17.8859 27.7826 17.8722 27.8045C17.8589 27.8259 17.8454 27.8471 17.8317 27.8682C17.8183 27.8889 17.8049 27.9095 17.7912 27.9298C17.7778 27.9496 17.7643 27.9692 17.7506 27.9887C17.7373 28.0078 17.7238 28.0267 17.7101 28.0456C17.6967 28.0641 17.6832 28.0826 17.6696 28.1009C17.6562 28.1188 17.6427 28.1365 17.629 28.1542C17.6157 28.1714 17.6021 28.1885 17.5885 28.2056C17.5751 28.2224 17.5616 28.2392 17.548 28.2558C17.5346 28.2721 17.521 28.2881 17.5074 28.3041C17.494 28.3199 17.4805 28.3356 17.4669 28.3512C17.4534 28.3665 17.44 28.382 17.4264 28.3972C17.413 28.412 17.3994 28.4266 17.3858 28.4413C17.3723 28.4558 17.359 28.4704 17.3453 28.4847C17.3319 28.4988 17.3183 28.5126 17.3047 28.5265C17.2913 28.5402 17.2778 28.5539 17.2642 28.5674C17.2508 28.5808 17.2373 28.5941 17.2237 28.6073C17.2103 28.6203 17.1967 28.6331 17.1831 28.6459C17.1697 28.6586 17.1562 28.6713 17.1426 28.6839C17.1292 28.6962 17.1156 28.7082 17.1021 28.7204C17.0886 28.7325 17.0752 28.7447 17.0615 28.7566C17.0482 28.7682 17.0345 28.7796 17.021 28.7911C17.0075 28.8026 16.9941 28.8142 16.9805 28.8255C16.9671 28.8366 16.9535 28.8475 16.9399 28.8584C16.9264 28.8693 16.913 28.8803 16.8994 28.8911C16.886 28.9016 16.8724 28.9119 16.8589 28.9223C16.8454 28.9327 16.832 28.9431 16.8183 28.9533C16.8049 28.9634 16.7913 28.9732 16.7778 28.9831C16.7643 28.993 16.7509 29.003 16.7373 29.0127C16.7239 29.0222 16.7103 29.0316 16.6967 29.041C16.6832 29.0504 16.6698 29.0599 16.6562 29.0692C16.6428 29.0782 16.6292 29.0871 16.6157 29.096C16.6021 29.105 16.5887 29.1141 16.5751 29.1229C16.5617 29.1315 16.5481 29.1398 16.5346 29.1484C16.5211 29.1569 16.5076 29.1655 16.494 29.1738C16.4806 29.1821 16.467 29.1901 16.4535 29.1981C16.44 29.2062 16.4266 29.2143 16.413 29.2223C16.3995 29.2301 16.386 29.2377 16.3724 29.2454C16.359 29.2531 16.3455 29.2608 16.3319 29.2682C16.3184 29.2757 16.3049 29.2831 16.2914 29.2904L16.2508 29.3119C16.2373 29.319 16.2239 29.3261 16.2103 29.333C16.1968 29.3399 16.1833 29.3466 16.1697 29.3533C16.1562 29.36 16.1428 29.367 16.1292 29.3735C16.1158 29.38 16.1022 29.3862 16.0887 29.3926C16.0752 29.399 16.0617 29.4054 16.0481 29.4117C16.0347 29.4178 16.0211 29.4237 16.0076 29.4298L15.9671 29.4476L15.9265 29.4649C15.9131 29.4706 15.8995 29.4761 15.886 29.4816C15.8725 29.4871 15.859 29.4928 15.8455 29.4982C15.832 29.5035 15.8185 29.5085 15.8049 29.5136C15.7914 29.5188 15.778 29.5241 15.7644 29.5292C15.7509 29.5342 15.7374 29.539 15.7239 29.5438L15.6833 29.5582L15.6428 29.5722C15.6293 29.5767 15.6158 29.5811 15.6023 29.5854C15.5887 29.5899 15.5753 29.5944 15.5617 29.5987C15.5483 29.6029 15.5347 29.6068 15.5212 29.6109L15.4807 29.6231L15.4401 29.6347C15.4266 29.6385 15.4131 29.6421 15.3996 29.6457C15.386 29.6494 15.3726 29.6533 15.359 29.6567C15.3456 29.6602 15.332 29.6633 15.3185 29.6667C15.305 29.6701 15.2915 29.6734 15.278 29.6767L15.2374 29.6861L15.1969 29.695C15.1834 29.6979 15.1699 29.7011 15.1563 29.7039C15.1429 29.7067 15.1293 29.709 15.1158 29.7117C15.1023 29.7143 15.0888 29.717 15.0753 29.7195L15.0347 29.7269C15.0213 29.7292 15.0077 29.7314 14.9942 29.7336C14.9807 29.7358 14.9672 29.7383 14.9537 29.7404C14.9402 29.7425 14.9267 29.7442 14.9131 29.7462L14.8726 29.7519C14.8591 29.7538 14.8456 29.7556 14.8321 29.7573C14.8186 29.759 14.805 29.7604 14.7915 29.762C14.778 29.7635 14.7645 29.7652 14.751 29.7667C14.7375 29.7681 14.724 29.7693 14.7105 29.7706L14.6699 29.7742C14.6564 29.7754 14.6429 29.7768 14.6294 29.7778C14.6159 29.7788 14.6024 29.7795 14.5889 29.7804L14.5483 29.783L14.5078 29.7851C14.4943 29.7858 14.4808 29.7862 14.4673 29.7867C14.4537 29.7872 14.4402 29.7878 14.4267 29.7883C14.4132 29.7886 14.3997 29.7888 14.3862 29.789L14.3457 29.7895C14.3331 29.7896 14.3207 29.79 14.3081 29.79H14.2646H14.224H14.1835H14.143H14.1024H14.0619H14.0213H13.9808H13.9403H13.8997H13.8592H13.8187H13.7781H13.7376H13.6971H13.6565H13.616H13.5755H13.5349H13.4944H13.4539H13.4133H13.3728H13.3323H13.2917H13.2512H13.2107H13.1701H13.1296H13.089H13.0485H13.008H12.9674H12.9269H12.8863H12.8458H12.8053H12.7647H12.7242H12.6837H12.6431H12.6026H12.5621H12.5215H12.481H12.4405H12.3999H12.3594H12.3189H12.2783H12.2378H12.1973H12.1567H12.1162H12.0757H12.0351H11.9946H11.954H11.9135H11.873H11.8324H11.7919H11.7514H11.7108H11.6703H11.6298H11.5892H11.5487H11.5082H11.4676H11.4271H11.3866H11.346H11.3055H11.265H11.2244H11.1839H11.1433H11.1028H11.0623H11.0217H10.9812H10.9407H10.9001H10.8596H10.819H10.7785H10.738H10.6974H10.6569H10.6164H10.5758H10.5353H10.4948H10.4542H10.4137H10.3732H10.3326H10.2921H10.2516H10.211H10.1705H10.13H10.0894H10.0489H10.0083H9.9678H9.92728H9.88672H9.8462H9.80567H9.76512H9.7246H9.68404H9.64352H9.603H9.56244H9.52192H9.48136H9.44084H9.40032H9.35976H9.31924H9.27868H9.23816H9.19764H9.15708H9.11656H9.076H9.03548H8.99496H8.9544H8.91388H8.87332H8.8328H8.79228H8.75172H8.7112H8.67064H8.63012H8.5896H8.54904H8.50852H8.468H8.42744H8.38692H8.34637H8.30584H8.26532H8.22476H8.1377V20.8632C8.1377 20.8632 8.16765 20.8715 8.22476 20.886L8.26532 20.8962L8.30584 20.9062L8.34637 20.916L8.38692 20.9256L8.42744 20.9351L8.468 20.9445L8.50852 20.9537L8.54904 20.9628L8.5896 20.9717L8.63012 20.9805L8.67064 20.9893L8.7112 20.9979L8.75172 21.0064L8.79228 21.0147L8.8328 21.023L8.87332 21.0311L8.91388 21.0392L8.9544 21.0471L8.99496 21.055L9.03548 21.0628L9.076 21.0704L9.11656 21.078L9.15708 21.0854L9.19764 21.0928L9.23816 21.1001L9.27868 21.1072L9.31924 21.1143L9.35976 21.1212L9.40032 21.1281L9.44084 21.1349L9.48136 21.1416L9.52192 21.1482L9.56244 21.1547L9.603 21.1612L9.64352 21.1675L9.68404 21.1738L9.7246 21.1799L9.76512 21.186L9.80567 21.1919L9.8462 21.1978L9.88672 21.2036L9.92728 21.2093L9.9678 21.2149L10.0083 21.2205L10.0489 21.2259L10.0894 21.2313L10.13 21.2366L10.1705 21.2417L10.211 21.2468L10.2516 21.2518L10.2921 21.2568L10.3326 21.2615L10.3732 21.2663L10.4137 21.2709L10.4542 21.2755L10.4948 21.28L10.5353 21.2844L10.5758 21.2887L10.6164 21.2929L10.6569 21.297L10.6974 21.301L10.738 21.305L10.7785 21.3089L10.819 21.3126L10.8596 21.3164L10.9001 21.3199L10.9407 21.3234L10.9812 21.3269L11.0217 21.3302L11.0623 21.3335L11.1028 21.3366L11.1433 21.3397L11.1839 21.3426L11.2244 21.3455L11.265 21.3483L11.3055 21.351L11.346 21.3536L11.3866 21.3562L11.4271 21.3586L11.4676 21.361L11.5082 21.3632L11.5487 21.3654L11.5892 21.3675L11.6298 21.3694L11.6703 21.3713L11.7108 21.3731L11.7514 21.3748L11.7919 21.3765L11.8324 21.3779L11.873 21.3793L11.9135 21.3807L11.954 21.3819L11.9946 21.3831L12.0351 21.3841L12.0757 21.385L12.1162 21.386L12.1567 21.3867L12.1973 21.3873L12.2378 21.388L12.2783 21.3884L12.3189 21.3888L12.3594 21.3891L12.3999 21.3892L12.4405 21.3893L12.481 21.3893L12.5215 21.389L12.5621 21.3888L12.6026 21.3885L12.6431 21.3883L12.6837 21.3875L12.7242 21.3868L12.7647 21.3861L12.8053 21.3853L12.8458 21.3843L12.8863 21.383L12.9269 21.3818L12.9674 21.3805L13.008 21.3791L13.0485 21.3773L13.089 21.3756L13.1296 21.3737L13.1701 21.3719L13.2107 21.3697L13.2512 21.3673L13.2917 21.3649L13.3323 21.3626L13.3728 21.3599L13.4133 21.3569L13.4539 21.354L13.4944 21.3511L13.5349 21.3478L13.5755 21.3443L13.616 21.3408L13.6565 21.3372L13.6971 21.3334L13.7376 21.3292L13.7781 21.3251L13.8187 21.3209L13.8592 21.3164L13.8997 21.3116L13.9403 21.3068L13.9808 21.302L14.0213 21.2967L14.0619 21.2912L14.1024 21.2858L14.143 21.2802C14.1566 21.2782 14.1699 21.2761 14.1835 21.2741L14.224 21.2679L14.2646 21.2618L14.3051 21.2553C14.3187 21.2531 14.3321 21.2507 14.3457 21.2484L14.3862 21.2416C14.3996 21.2393 14.4134 21.2371 14.4267 21.2347C14.4404 21.2323 14.4537 21.2296 14.4673 21.2271L14.5078 21.2195L14.5483 21.2119L14.5889 21.2039C14.6025 21.2012 14.6159 21.1983 14.6294 21.1955L14.6699 21.1871L14.7105 21.1785C14.7242 21.1756 14.7374 21.1724 14.751 21.1694L14.7915 21.1601C14.805 21.157 14.8187 21.1541 14.8321 21.151C14.8458 21.1477 14.8591 21.1443 14.8726 21.141L14.9131 21.1309C14.9266 21.1276 14.9403 21.1243 14.9537 21.1209C14.9673 21.1174 14.9807 21.1138 14.9942 21.1102L15.0347 21.0993C15.0482 21.0956 15.0619 21.0921 15.0753 21.0883C15.0889 21.0846 15.1023 21.0806 15.1158 21.0768L15.1563 21.065C15.1698 21.061 15.1835 21.0571 15.1969 21.0531L15.2374 21.0406L15.278 21.0278C15.2914 21.0235 15.3052 21.0193 15.3185 21.015L15.359 21.0014L15.3996 20.9876C15.413 20.9829 15.4268 20.9784 15.4401 20.9737C15.4538 20.9689 15.4671 20.9638 15.4807 20.9589L15.5212 20.9441C15.5347 20.939 15.5483 20.9341 15.5617 20.9289C15.5754 20.9237 15.5887 20.9183 15.6023 20.913C15.6158 20.9077 15.6294 20.9024 15.6428 20.897L15.6833 20.8804L15.7239 20.8632C15.7373 20.8575 15.7511 20.852 15.7644 20.8461C15.7781 20.8401 15.7914 20.8339 15.8049 20.8278L15.8455 20.8094L15.886 20.7904C15.8996 20.784 15.9131 20.7774 15.9265 20.7708C15.94 20.7642 15.9538 20.7577 15.9671 20.751C15.9808 20.7441 15.9941 20.737 16.0076 20.73C16.0211 20.723 16.0348 20.7161 16.0481 20.7091C16.0618 20.7018 16.0752 20.6944 16.0887 20.687C16.1023 20.6796 16.1158 20.6721 16.1292 20.6646C16.1428 20.6569 16.1563 20.6492 16.1697 20.6415C16.1834 20.6336 16.1969 20.6255 16.2103 20.6175C16.2239 20.6094 16.2375 20.6013 16.2508 20.5931C16.2645 20.5847 16.2779 20.5761 16.2914 20.5676C16.3049 20.559 16.3186 20.5504 16.3319 20.5417C16.3456 20.5328 16.359 20.5236 16.3724 20.5145C16.386 20.5053 16.3996 20.4963 16.413 20.487C16.4267 20.4774 16.44 20.4677 16.4535 20.458C16.4671 20.4482 16.4807 20.4384 16.494 20.4286C16.5077 20.4184 16.5211 20.408 16.5346 20.3977C16.5482 20.3872 16.5618 20.3767 16.5751 20.3661C16.5888 20.3552 16.6023 20.3442 16.6157 20.3331C16.6293 20.3218 16.6428 20.3104 16.6562 20.299C16.6698 20.2873 16.6834 20.2757 16.6967 20.2639C16.7105 20.2517 16.7238 20.2393 16.7373 20.2269C16.7508 20.2144 16.7645 20.2019 16.7778 20.1892C16.7915 20.176 16.805 20.1627 16.8183 20.1493C16.832 20.1356 16.8455 20.1218 16.8589 20.108C16.8725 20.0938 16.8861 20.0797 16.8994 20.0653C16.9132 20.0503 16.9265 20.0351 16.9399 20.0199C16.9537 20.0043 16.9672 19.9885 16.9805 19.9727C16.9942 19.9564 17.0078 19.9401 17.021 19.9236C17.0347 19.9064 17.0483 19.8892 17.0615 19.8718C17.0754 19.8536 17.0888 19.8352 17.1021 19.8168C17.1159 19.7976 17.1293 19.7783 17.1426 19.7589C17.1564 19.7386 17.1699 19.7182 17.1831 19.6976C17.197 19.6761 17.2105 19.6543 17.2237 19.6324C17.2375 19.6093 17.2511 19.5861 17.2642 19.5627C17.2781 19.5378 17.2916 19.5128 17.3047 19.4876C17.3187 19.4606 17.3322 19.4335 17.3453 19.4061C17.3594 19.3767 17.3728 19.3471 17.3858 19.3172C17.3999 19.2847 17.4135 19.2521 17.4264 19.2191C17.4406 19.1827 17.4541 19.1461 17.4669 19.1091C17.4814 19.0672 17.4948 19.0248 17.5074 18.982C17.5222 18.9321 17.5356 18.8816 17.548 18.8307C17.5632 18.7675 17.5768 18.7036 17.5885 18.639C17.6059 18.5428 17.6193 18.4451 17.629 18.346C17.6426 18.208 17.6493 18.0674 17.6493 17.9246V13.01H17.5885H17.548H17.5074H17.4669H17.4264H17.3858H17.3453H17.3047H17.2642H17.2237H17.1831H17.1426H17.1021H17.0615H17.021H16.9805H16.9399H16.8994H16.8589H16.8183H16.7778H16.7373H16.6967H16.6562H16.6157H16.5751H16.5346H16.494H16.4535H16.413H16.3724H16.3319H16.2914H16.2508H16.2103H16.1697H16.1292H16.0887H16.0481H16.0076H15.9671H15.9265H15.886H15.8455H15.8049H15.7644H15.7239H15.6833H15.6428H15.6023H15.5617H15.5212H15.4807H15.4401H15.3996H15.359H15.3185H15.278H15.2374H15.1969H15.1563H15.1158H15.0753H15.0347H14.9942H14.9537H14.9131H14.8726H14.8321H14.7915H14.751H14.7105H14.6699H14.6294H14.5889H14.5483H14.5078H14.4673H14.4267H14.3862H14.3457H14.3051H14.2646H14.224H14.1835H14.143H14.1024H14.0619L14.0312 17.9246C14.0312 18.0016 14.0278 18.0773 14.0213 18.1515C14.0131 18.2461 13.9995 18.3383 13.9808 18.4279C13.9693 18.4833 13.9557 18.5377 13.9403 18.591C13.928 18.6335 13.9145 18.6753 13.8997 18.7164C13.8872 18.7514 13.8736 18.7858 13.8592 18.8198C13.8464 18.8501 13.8329 18.8799 13.8187 18.9093C13.8057 18.9361 13.7923 18.9626 13.7781 18.9885C13.7652 19.0125 13.7516 19.0359 13.7376 19.0592C13.7245 19.081 13.711 19.1026 13.6971 19.1238C13.6839 19.1438 13.6704 19.1634 13.6565 19.1828C13.6433 19.2013 13.6299 19.2196 13.616 19.2376C13.6028 19.2547 13.5893 19.2714 13.5755 19.288C13.5622 19.3039 13.5487 19.3196 13.5349 19.3351C13.5217 19.35 13.5082 19.3647 13.4944 19.3792C13.4811 19.3931 13.4676 19.407 13.4539 19.4206C13.4406 19.4337 13.4271 19.4467 13.4133 19.4594C13.4 19.4718 13.3865 19.4839 13.3728 19.4958C13.3595 19.5075 13.346 19.519 13.3323 19.5302C13.3189 19.5412 13.3054 19.552 13.2917 19.5627C13.2784 19.5731 13.2648 19.5833 13.2512 19.5934C13.2378 19.6032 13.2243 19.6129 13.2107 19.6224C13.1973 19.6318 13.1838 19.6409 13.1701 19.65C13.1567 19.6588 13.1432 19.6674 13.1296 19.676C13.1162 19.6843 13.1027 19.6925 13.089 19.7006C13.0757 19.7085 13.0621 19.7162 13.0485 19.7239C13.0351 19.7314 13.0216 19.7386 13.008 19.7459C12.9946 19.753 12.9811 19.76 12.9674 19.7668C12.954 19.7735 12.9405 19.7801 12.9269 19.7866C12.9135 19.793 12.9 19.7993 12.8863 19.8055C12.8729 19.8115 12.8595 19.8175 12.8458 19.8232C12.8325 19.8289 12.8189 19.8344 12.8053 19.8399C12.7919 19.8453 12.7783 19.8505 12.7647 19.8557C12.7513 19.8608 12.7379 19.8657 12.7242 19.8706C12.7108 19.8754 12.6973 19.8802 12.6837 19.8848C12.6703 19.8893 12.6567 19.8937 12.6431 19.898C12.6298 19.9022 12.6162 19.9063 12.6026 19.9103C12.5892 19.9143 12.5757 19.9183 12.5621 19.922C12.5486 19.9258 12.5351 19.9295 12.5215 19.933C12.5081 19.9365 12.4946 19.9399 12.481 19.9432C12.4676 19.9464 12.4541 19.9495 12.4405 19.9526C12.427 19.9556 12.4135 19.9586 12.3999 19.9614C12.3865 19.9642 12.373 19.967 12.3594 19.9696C12.346 19.9722 12.3324 19.9746 12.3189 19.977C12.3054 19.9794 12.2919 19.9817 12.2783 19.9839L12.2378 19.9902C12.2244 19.9921 12.2108 19.9939 12.1973 19.9957C12.1838 19.9975 12.1703 19.9993 12.1567 20.0009L12.1162 20.0054C12.1028 20.0068 12.0892 20.008 12.0757 20.0093C12.0622 20.0105 12.0487 20.0118 12.0351 20.0128C12.0217 20.0139 12.0082 20.0148 11.9946 20.0157C11.9811 20.0165 11.9676 20.0173 11.954 20.018C11.9405 20.0187 11.9271 20.0194 11.9135 20.02C11.9001 20.0205 11.8865 20.0208 11.873 20.0212L11.8324 20.0222C11.819 20.0224 11.8055 20.0225 11.7919 20.0226L11.7514 20.0226L11.7108 20.0223L11.6703 20.0218L11.6298 20.0209L11.5892 20.0198L11.5487 20.0185L11.5082 20.0168L11.4676 20.0149L11.4271 20.0129L11.3866 20.0104L11.346 20.0078L11.3055 20.0049L11.265 20.0017L11.2244 19.9983L11.1839 19.9946L11.1433 19.9907L11.1028 19.9865L11.0623 19.9821L11.0217 19.9775L10.9812 19.9725L10.9407 19.9674L10.9001 19.962L10.8596 19.9563L10.819 19.9504L10.7785 19.9443L10.738 19.9379L10.6974 19.9313L10.6569 19.9244L10.6164 19.9173L10.5758 19.91L10.5353 19.9024L10.4948 19.8946L10.4542 19.8866L10.4137 19.8783L10.3732 19.8698L10.3326 19.8611L10.2921 19.8521L10.2516 19.8429L10.211 19.8335L10.1705 19.8238L10.13 19.8139L10.0894 19.8038L10.0489 19.7936L10.0083 19.7829L9.9678 19.7722L9.92728 19.7612L9.88672 19.75L9.8462 19.7386L9.80567 19.7269L9.76512 19.7151L9.7246 19.703L9.68404 19.6907L9.64352 19.6782L9.603 19.6654L9.56244 19.6525L9.52192 19.6394L9.48136 19.6261L9.44084 19.6125L9.40032 19.5987L9.35976 19.5847L9.31924 19.5706L9.27868 19.5562L9.23816 19.5416L9.19764 19.5269L9.15708 19.5118L9.11656 19.4967L9.076 19.4813L9.03548 19.4657L8.99496 19.4499L8.9544 19.434L8.91388 19.4178L8.87332 19.4014L8.8328 19.3849L8.79228 19.3682L8.75172 19.3513L8.7112 19.3341L8.67064 19.3168L8.63012 19.2993L8.5896 19.2817L8.54904 19.2637L8.50852 19.2457L8.468 19.2275L8.42744 19.2091L8.38692 19.1905L8.34637 19.1717L8.30584 19.1528L8.26532 19.1336L8.22476 19.1144C8.19572 19.1004 8.16671 19.0864 8.1377 19.0723Z",
      fill: "#006CB9"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M19.8644 14.0838C19.8348 14.1079 19.8057 14.1321 19.7773 14.1567V8.61115C19.7773 8.31625 19.8074 8.02839 19.8644 7.75042C19.8766 7.69075 19.8902 7.63162 19.9049 7.57289C19.9175 7.52251 19.9311 7.47253 19.9455 7.42288C19.9583 7.37866 19.9718 7.33475 19.986 7.29114C19.999 7.25129 20.0124 7.21164 20.0265 7.17233C20.0396 7.1359 20.0531 7.09965 20.0671 7.06369C20.0802 7.03008 20.0937 6.99663 20.1076 6.96343C20.1208 6.93212 20.1343 6.90101 20.1481 6.87007C20.1613 6.84069 20.1749 6.81152 20.1887 6.78251C20.2019 6.75479 20.2154 6.72734 20.2292 6.69997C20.2424 6.67367 20.256 6.64758 20.2698 6.62159C20.283 6.59655 20.2966 6.57167 20.3103 6.54694C20.3236 6.52298 20.3371 6.49912 20.3508 6.47547C20.3642 6.4525 20.3776 6.42963 20.3914 6.40692C20.4047 6.385 20.4182 6.36321 20.4319 6.34156C20.4452 6.32048 20.4588 6.29964 20.4725 6.27883C20.4858 6.25847 20.4993 6.23824 20.513 6.21814C20.5264 6.19842 20.5398 6.1787 20.5535 6.15925C20.5668 6.14041 20.5805 6.12188 20.5941 6.10331C20.6074 6.08501 20.6209 6.06681 20.6346 6.04875C20.648 6.03096 20.6614 6.01314 20.6751 5.99558C20.6884 5.97854 20.7021 5.96173 20.7157 5.94489C20.7291 5.92825 20.7426 5.91168 20.7562 5.89528C20.7696 5.87908 20.7831 5.86295 20.7968 5.84699C20.8101 5.83141 20.8237 5.81602 20.8373 5.80064C20.8507 5.78539 20.8642 5.77007 20.8778 5.75499C20.8912 5.74025 20.9048 5.72568 20.9183 5.71115C20.9317 5.69678 20.9453 5.68251 20.9589 5.66832C20.9723 5.65432 20.9858 5.64033 20.9994 5.6265C21.0128 5.61295 21.0264 5.59956 21.0399 5.58618C21.0534 5.57286 21.0668 5.55944 21.0805 5.54629C21.0938 5.53345 21.1075 5.52091 21.121 5.50824C21.1345 5.4956 21.1479 5.48293 21.1616 5.47049C21.175 5.45829 21.1886 5.4463 21.2021 5.43427C21.2156 5.42227 21.229 5.41031 21.2426 5.39852C21.2561 5.38689 21.2696 5.37548 21.2832 5.36402C21.2966 5.35267 21.3101 5.34132 21.3237 5.3301C21.3372 5.31906 21.3507 5.30811 21.3642 5.29723C21.3777 5.28642 21.3912 5.27568 21.4048 5.26504C21.4182 5.25454 21.4318 5.24413 21.4453 5.23377C21.4588 5.2235 21.4723 5.21326 21.4858 5.20317C21.4993 5.19314 21.5128 5.18324 21.5264 5.17338C21.5399 5.16362 21.5534 5.15386 21.5669 5.14424C21.5804 5.13472 21.5939 5.12533 21.6075 5.11594C21.6209 5.10663 21.6344 5.09734 21.648 5.08819C21.6614 5.07914 21.675 5.07023 21.6886 5.06132C21.702 5.05244 21.7155 5.04356 21.7291 5.03486C21.7425 5.02625 21.7561 5.01785 21.7696 5.00937C21.7831 5.00094 21.7966 4.9924 21.8102 4.98413C21.8236 4.97593 21.8372 4.968 21.8507 4.95997C21.8642 4.95194 21.8776 4.94374 21.8912 4.93588C21.9046 4.92812 21.9183 4.92066 21.9318 4.91304C21.9453 4.90541 21.9587 4.89772 21.9723 4.89027C21.9857 4.88288 21.9993 4.87576 22.0128 4.86851C22.0263 4.86129 22.0398 4.85404 22.0534 4.84696L22.0939 4.82619L22.1345 4.80589C22.1479 4.79925 22.1614 4.79254 22.175 4.78603C22.1885 4.77956 22.202 4.77329 22.2156 4.76696C22.2291 4.76065 22.2425 4.75415 22.2561 4.74798C22.2695 4.74185 22.2831 4.73609 22.2966 4.73012C22.3101 4.72416 22.3236 4.71809 22.3372 4.71226C22.3506 4.7065 22.3641 4.70091 22.3777 4.69529L22.4182 4.67862C22.4317 4.67316 22.4452 4.6677 22.4588 4.66238C22.4722 4.6571 22.4858 4.65202 22.4993 4.64686C22.5128 4.64171 22.5262 4.63639 22.5398 4.63138C22.5533 4.62643 22.5669 4.62182 22.5804 4.61701C22.5939 4.6122 22.6073 4.60732 22.6209 4.60264C22.6344 4.59797 22.6479 4.59349 22.6615 4.58899L22.702 4.57574C22.7155 4.5714 22.729 4.56696 22.7425 4.56273C22.756 4.55856 22.7696 4.55463 22.7831 4.5506C22.7966 4.54653 22.8101 4.54236 22.8236 4.53843C22.8371 4.53453 22.8506 4.53091 22.8641 4.52715L22.9047 4.51607C22.9182 4.51247 22.9317 4.50881 22.9452 4.50536C22.9587 4.50194 22.9722 4.49872 22.9857 4.4954C22.9992 4.49208 23.0127 4.48862 23.0263 4.48543C23.0398 4.48228 23.0533 4.47933 23.0668 4.47632L23.1074 4.46744C23.1209 4.46456 23.1343 4.46158 23.1479 4.45883C23.1614 4.45609 23.1749 4.45361 23.1885 4.45101C23.202 4.4484 23.2154 4.44565 23.229 4.44318L23.2695 4.43613L23.3101 4.42939C23.3236 4.42718 23.337 4.42485 23.3506 4.42278C23.3641 4.42071 23.3776 4.41898 23.3911 4.41705C23.4046 4.41515 23.4181 4.41316 23.4317 4.41136L23.4722 4.40624L23.5127 4.40157C23.5263 4.40004 23.5397 4.39828 23.5533 4.39689C23.5668 4.3955 23.5803 4.39448 23.5938 4.39323L23.6344 4.38964C23.6479 4.38849 23.6614 4.38737 23.6749 4.38639C23.6884 4.3854 23.7019 4.38462 23.7154 4.38378C23.7289 4.38293 23.7424 4.38195 23.756 4.3812C23.7695 4.38046 23.783 4.37995 23.7965 4.37934L23.837 4.37778C23.8506 4.3773 23.864 4.37659 23.8776 4.37625C23.8911 4.37591 23.9046 4.37595 23.9181 4.37575C23.9317 4.37554 23.9452 4.3753 23.9587 4.37524L23.9766 4.375H23.9992H24.0398H24.0803H24.1208H24.1614H24.2019H24.2424H24.283H24.3235H24.364H24.4046H24.4451H24.4856H24.5262H24.5667H24.6073H24.6478H24.6884H24.7289H24.7694H24.81H24.8505H24.891H24.9316H24.9721H25.0127H25.0532H25.0937H25.1343H25.1748H25.2153H25.2559H25.2964H25.3369H25.3775H25.418H25.4585H25.4991H25.5396H25.5802H25.6207H25.6613H25.7018H25.7423H25.7829H25.8234H25.8639H25.9045H25.945H25.9855H26.0261H26.0666H26.1072H26.1477H26.1882H26.2288H26.2693H26.3099H26.3504H26.3909H26.4315H26.472H26.5125H26.5531H26.5936H26.6342H26.6747H26.7152H26.7558H26.7963H26.8368H26.8774H26.9179H26.9584H26.999H27.0395H27.0801H27.1206H27.1612H27.2017H27.2422H27.2828H27.3233H27.3638H27.4044H27.4449H27.4854H27.526H27.5665H27.6071H27.6476H27.6882H27.7287H27.7692H27.8098H27.8503H27.8908H27.9314H27.9719H28.0124H28.053H28.0935H28.1341H28.1746H28.2151H28.2557H28.2962H28.3367H28.3773H28.4178H28.4583H28.4989H28.5394H28.58H28.6205H28.661H28.7016H28.7421H28.7827H28.8232H28.8637H28.9043H28.9448H28.9853H29.0259H29.0664H29.107H29.1475H29.1881H29.2286H29.2691H29.3097H29.3502H29.3907H29.4313H29.4718H29.5123H29.5529H29.5934H29.6339H29.6745H29.715H29.7556H29.7961H29.8366H29.8772H29.9177H29.9582H29.9988H30.0393H30.0799H30.1204H30.1548V25.5542C30.1548 25.7384 30.1431 25.9197 30.1204 26.0977C30.1095 26.1834 30.0958 26.2682 30.0799 26.3522C30.0678 26.4161 30.0543 26.4796 30.0393 26.5425C30.0267 26.5954 30.0133 26.6481 29.9988 26.7003C29.986 26.746 29.9725 26.7915 29.9582 26.8366C29.9454 26.8775 29.9318 26.918 29.9177 26.9583C29.9047 26.9956 29.8912 27.0327 29.8772 27.0696C29.8641 27.1039 29.8506 27.1381 29.8366 27.172C29.8235 27.204 29.81 27.2358 29.7961 27.2674C29.7829 27.2973 29.7694 27.3271 29.7556 27.3567C29.7423 27.3849 29.7288 27.413 29.715 27.4409C29.7018 27.4676 29.6883 27.4942 29.6745 27.5207C29.6612 27.5461 29.6477 27.5715 29.6339 27.5966C29.6206 27.621 29.6072 27.6452 29.5934 27.6692C29.5801 27.6924 29.5666 27.7154 29.5529 27.7382C29.5396 27.7604 29.526 27.7824 29.5123 27.8043C29.499 27.8256 29.4855 27.8469 29.4718 27.868C29.4584 27.8886 29.445 27.9093 29.4313 27.9296C29.4179 27.9494 29.4044 27.969 29.3907 27.9885C29.3774 28.0076 29.3638 28.0265 29.3502 28.0453C29.3368 28.0639 29.3233 28.0824 29.3097 28.1007C29.2963 28.1185 29.2828 28.1362 29.2691 28.1539C29.2558 28.1712 29.2422 28.1883 29.2286 28.2053C29.2151 28.2222 29.2017 28.239 29.1881 28.2556C29.1747 28.2718 29.1611 28.2879 29.1475 28.3039C29.1341 28.3197 29.1206 28.3353 29.107 28.3509C29.0935 28.3663 29.0801 28.3817 29.0664 28.3969C29.0531 28.4118 29.0394 28.4264 29.0259 28.441C29.0124 28.4556 28.999 28.4702 28.9853 28.4845C28.9719 28.4986 28.9584 28.5124 28.9448 28.5263C28.9314 28.54 28.9179 28.5536 28.9043 28.5672C28.8909 28.5806 28.8774 28.5939 28.8637 28.6071C28.8503 28.62 28.8368 28.6329 28.8232 28.6457C28.8097 28.6584 28.7963 28.6712 28.7827 28.6837C28.7693 28.696 28.7557 28.7081 28.7421 28.7202C28.7286 28.7323 28.7152 28.7445 28.7016 28.7564C28.6882 28.7681 28.6746 28.7795 28.661 28.791C28.6475 28.8025 28.6341 28.814 28.6205 28.8253C28.6071 28.8364 28.5935 28.8472 28.58 28.8582C28.5665 28.8691 28.5531 28.8801 28.5394 28.8909C28.526 28.9014 28.5124 28.9117 28.4989 28.9221C28.4854 28.9325 28.472 28.9429 28.4583 28.9532C28.445 28.9632 28.4314 28.9731 28.4178 28.983C28.4043 28.9928 28.3909 29.0028 28.3773 29.0125C28.3639 29.0221 28.3503 29.0314 28.3367 29.0408C28.3232 29.0502 28.3098 29.0597 28.2962 29.069C28.2828 29.0781 28.2692 29.0869 28.2557 29.0959C28.2422 29.1048 28.2288 29.1139 28.2151 29.1227C28.2017 29.1314 28.1881 29.1397 28.1746 29.1482C28.1611 29.1567 28.1477 29.1653 28.1341 29.1737C28.1206 29.1819 28.107 29.1899 28.0935 29.198C28.08 29.206 28.0666 29.2142 28.053 29.2221C28.0395 29.2299 28.026 29.2376 28.0124 29.2453L27.9719 29.2681L27.9314 29.2902L27.8908 29.3118C27.8773 29.3188 27.8639 29.326 27.8503 29.3329C27.8368 29.3398 27.8233 29.3465 27.8098 29.3532C27.7963 29.3599 27.7828 29.3668 27.7692 29.3734C27.7558 29.3799 27.7422 29.3861 27.7287 29.3925C27.7152 29.3988 27.7017 29.4053 27.6882 29.4115C27.6747 29.4177 27.6611 29.4236 27.6476 29.4297L27.6071 29.4475L27.5665 29.4648L27.526 29.4815C27.5125 29.487 27.499 29.4927 27.4854 29.4981C27.472 29.5034 27.4584 29.5084 27.4449 29.5135C27.4314 29.5187 27.418 29.524 27.4044 29.5291C27.3909 29.5341 27.3774 29.5389 27.3638 29.5437L27.3233 29.5581L27.2828 29.5721C27.2693 29.5766 27.2557 29.5809 27.2422 29.5853C27.2287 29.5898 27.2152 29.5944 27.2017 29.5986C27.1883 29.6028 27.1747 29.6067 27.1612 29.6108L27.1206 29.623L27.0801 29.6346C27.0666 29.6384 27.0531 29.642 27.0395 29.6456C27.026 29.6493 27.0126 29.6532 26.999 29.6567C26.9855 29.6602 26.972 29.6633 26.9584 29.6666C26.945 29.67 26.9315 29.6734 26.9179 29.6766L26.8774 29.686L26.8368 29.6949C26.8233 29.6978 26.8099 29.701 26.7963 29.7038C26.7829 29.7066 26.7693 29.709 26.7558 29.7116L26.7152 29.7194L26.6747 29.7268C26.6612 29.7292 26.6477 29.7313 26.6342 29.7336C26.6206 29.7358 26.6072 29.7382 26.5936 29.7403C26.5802 29.7424 26.5666 29.7442 26.5531 29.7462L26.5125 29.7519C26.499 29.7537 26.4855 29.7556 26.472 29.7573C26.4585 29.759 26.445 29.7604 26.4315 29.762C26.418 29.7635 26.4045 29.7652 26.3909 29.7666C26.3775 29.7681 26.3639 29.7693 26.3504 29.7706L26.3099 29.7742C26.2963 29.7754 26.2829 29.7768 26.2693 29.7778C26.2559 29.7788 26.2423 29.7795 26.2288 29.7804L26.1882 29.783L26.1477 29.7851C26.1342 29.7858 26.1207 29.7862 26.1072 29.7867C26.0936 29.7872 26.0802 29.7878 26.0666 29.7882C26.0532 29.7886 26.0396 29.7887 26.0261 29.789L25.9855 29.7895C25.9729 29.7896 25.9604 29.79 25.9477 29.79H25.945H25.9045H25.8639H25.8234H25.7829H25.7423H25.7018H25.6613H25.6207H25.5802H25.5396H25.4991H25.4585H25.418H25.3775H25.3369H25.2964H25.2559H25.2153H25.1748H25.1343H25.0937H25.0532H25.0127H24.9721H24.9316H24.891H24.8505H24.81H24.7694H24.7289H24.6884H24.6478H24.6073H24.5667H24.5262H24.4856H24.4451H24.4046H24.364H24.3235H24.283H24.2424H24.2019H24.1614H24.1208H24.0803H24.0398H23.9992H23.9587H23.9181H23.8776H23.837H23.7965H23.756H23.7154H23.6749H23.6344H23.5938H23.5533H23.5127H23.4722H23.4317H23.3911H23.3506H23.3101H23.2695H23.229H23.1885H23.1479H23.1074H23.0668H23.0263H22.9857H22.9452H22.9047H22.8641H22.8236H22.7831H22.7425H22.702H22.6615H22.6209H22.5804H22.5398H22.4993H22.4588H22.4182H22.3777H22.3372H22.2966H22.2561H22.2156H22.175H22.1345H22.0939H22.0534H22.0128H21.9723H21.9318H21.8912H21.8507H21.8102H21.7696H21.7291H21.6886H21.648H21.6075H21.5669H21.5264H21.4858H21.4453H21.4048H21.3642H21.3237H21.2832H21.2426H21.2021H21.1616H21.121H21.0805H21.0399H20.9994H20.9589H20.9183H20.8778H20.8373H20.7968H20.7562H20.7157H20.6751H20.6346H20.5941H20.5535H20.513H20.4725H20.4319H20.3914H20.3508H20.3103H20.2698H20.2292H20.1887H20.1481H20.1076H20.0671H20.0265H19.986H19.9455H19.9049H19.8644H19.7773V20.01C19.8057 20.0345 19.8348 20.0588 19.8644 20.0828C19.8778 20.0937 19.8913 20.1046 19.9049 20.1153C19.9183 20.126 19.9318 20.1366 19.9455 20.1471C19.9589 20.1575 19.9723 20.1679 19.986 20.1782C19.9994 20.1882 20.013 20.1982 20.0265 20.2081C20.0399 20.218 20.0535 20.2277 20.0671 20.2375C20.0805 20.2471 20.094 20.2566 20.1076 20.2662L20.1481 20.2941C20.1615 20.3032 20.1751 20.3123 20.1887 20.3213L20.2292 20.3479C20.2426 20.3567 20.2561 20.3654 20.2698 20.374C20.2831 20.3825 20.2967 20.3909 20.3103 20.3993L20.3508 20.4241C20.3643 20.4323 20.3778 20.4404 20.3914 20.4484C20.4048 20.4564 20.4183 20.4642 20.4319 20.472L20.4725 20.4952L20.513 20.5178L20.5535 20.5399C20.567 20.5471 20.5804 20.5545 20.5941 20.5617C20.6074 20.5687 20.621 20.5757 20.6346 20.5827L20.6751 20.6034L20.7157 20.6237L20.7562 20.6434C20.7697 20.6499 20.7831 20.6565 20.7968 20.6629L20.8373 20.6818L20.8778 20.7004L20.9183 20.7185L20.9589 20.7363L20.9994 20.7538L21.0399 20.7708L21.0805 20.7875L21.121 20.8038L21.1616 20.8199L21.2021 20.8354C21.2156 20.8406 21.229 20.8458 21.2426 20.8509L21.2832 20.8657C21.2967 20.8707 21.3101 20.8757 21.3237 20.8806C21.3371 20.8854 21.3507 20.8901 21.3642 20.8948L21.4048 20.909L21.4453 20.9227C21.4588 20.9272 21.4722 20.9319 21.4858 20.9364C21.4992 20.9408 21.5129 20.9451 21.5264 20.9494L21.5669 20.9625L21.6075 20.9751L21.648 20.9876L21.6886 20.9996L21.7291 21.0115L21.7696 21.0231L21.8102 21.0345L21.8507 21.0456L21.8912 21.0565L21.9318 21.0672L21.9723 21.0776L22.0128 21.0879L22.0534 21.0978L22.0939 21.1077L22.1345 21.1171L22.175 21.1264L22.2156 21.1355L22.2561 21.1444L22.2966 21.1532L22.3372 21.1616L22.3777 21.17L22.4182 21.178L22.4588 21.186L22.4993 21.1937L22.5398 21.2012L22.5804 21.2087L22.6209 21.2158L22.6615 21.2228L22.702 21.2296L22.7425 21.2363L22.7831 21.2429L22.8236 21.2491L22.8641 21.2553L22.9047 21.2613L22.9452 21.2671L22.9857 21.2728L23.0263 21.2782L23.0668 21.2836L23.1074 21.2888L23.1479 21.2938L23.1885 21.2988L23.229 21.3035L23.2695 21.3081L23.3101 21.3126L23.3506 21.3168L23.3911 21.321L23.4317 21.3251L23.4722 21.3289L23.5127 21.3328L23.5533 21.3363L23.5938 21.3398L23.6344 21.3433L23.6749 21.3464L23.7154 21.3495L23.756 21.3526L23.7965 21.3554L23.837 21.3581L23.8776 21.3608L23.9181 21.3632L23.9587 21.3656L23.9992 21.3679L24.0398 21.3699L24.0803 21.3719L24.1208 21.3739L24.1614 21.3756L24.2019 21.3773L24.2424 21.3789L24.283 21.3803L24.3235 21.3816L24.364 21.3829L24.4046 21.384L24.4451 21.385L24.4856 21.386L24.5262 21.3867L24.5667 21.3874L24.6073 21.3881L24.6478 21.3885L24.6884 21.3889L24.7289 21.3892L24.7694 21.3894L24.81 21.3895L24.8505 21.3895L24.891 21.3894L24.9316 21.3892L24.9721 21.389L25.0127 21.3886L25.0532 21.3881L25.0937 21.3876L25.1343 21.387L25.1748 21.3862L25.2153 21.3853L25.2559 21.3845L25.2964 21.3834L25.3369 21.3823L25.3775 21.3812L25.418 21.38L25.4585 21.3785L25.4991 21.3771L25.5396 21.3757L25.5802 21.374L25.6207 21.3723L25.6613 21.3706L25.6811 21.3698L25.7018 21.3688L25.7423 21.3668L25.7829 21.3646L25.8234 21.3624L25.8639 21.3599L25.9045 21.3574L25.945 21.3547L25.9855 21.3519L26.0261 21.3489L26.0666 21.3458L26.1072 21.3426L26.1477 21.3393L26.1882 21.3358L26.2288 21.3322L26.2693 21.3285L26.3099 21.3246L26.3504 21.3207L26.3909 21.3166L26.4315 21.3125L26.472 21.3082L26.5125 21.3038L26.5531 21.2993L26.5936 21.2947L26.6342 21.29L26.6747 21.2852L26.7152 21.2803L26.7558 21.2753L26.7963 21.2701L26.8368 21.2649L26.8774 21.2597L26.9179 21.2542L26.9584 21.2487L26.999 21.2431L27.0395 21.2374L27.0801 21.2317L27.1206 21.2258L27.1612 21.2198L27.2017 21.2137L27.2422 21.2076L27.2828 21.2014L27.3233 21.1951L27.3638 21.1887L27.4044 21.1822L27.4449 21.1756L27.4854 21.169L27.526 21.1622L27.5665 21.1554L27.6071 21.1485L27.6476 21.1415L27.6882 21.1344L27.7287 21.1273L27.7692 21.12L27.8098 21.1127L27.8503 21.1053L27.8908 21.0979L27.9314 21.0903L27.9719 21.0826L28.0124 21.0749L28.053 21.0671L28.0935 21.0593L28.1341 21.0513L28.1746 21.0433L28.2151 21.0352L28.2557 21.027L28.2962 21.0187L28.3367 21.0103L28.3773 21.0019L28.4178 20.9934L28.4583 20.9848L28.4989 20.976L28.5394 20.9673L28.58 20.9584L28.6205 20.9495L28.661 20.9404L28.7016 20.9313L28.7421 20.9221L28.7827 20.9127L28.8232 20.9033L28.8637 20.8937L28.9043 20.884L28.9448 20.8741L28.9851 20.8641V19.0723L28.9448 19.0925L28.9043 19.1127L28.8637 19.1326L28.8232 19.1524L28.7827 19.1721L28.7421 19.1915L28.7016 19.2107L28.661 19.2297L28.6205 19.2485L28.58 19.2672L28.5394 19.2856L28.4989 19.3038L28.4583 19.3217L28.4178 19.3395L28.3773 19.3571L28.3367 19.3744L28.2962 19.3916L28.2557 19.4085L28.2151 19.4252L28.1746 19.4417L28.1341 19.4579L28.0935 19.474L28.053 19.4897L28.0124 19.5053L27.9719 19.5207L27.9314 19.5358L27.8908 19.5506L27.8503 19.5653L27.8098 19.5797L27.7692 19.5939L27.7287 19.6079L27.6882 19.6216L27.6476 19.6351L27.6071 19.6484L27.5665 19.6614L27.526 19.6742L27.4854 19.6868L27.4449 19.6991L27.4044 19.7112L27.3638 19.7231L27.3233 19.7347L27.2828 19.7461L27.2422 19.7573L27.2017 19.7682L27.1612 19.7789L27.1206 19.7894L27.0801 19.7996L27.0395 19.8096L26.999 19.8195L26.9584 19.829L26.9179 19.8383L26.8774 19.8474L26.8368 19.8563L26.7963 19.8649L26.7558 19.8733L26.7152 19.8815L26.6747 19.8895L26.6342 19.8972L26.5936 19.9047L26.5531 19.912L26.5125 19.919L26.472 19.9258L26.4315 19.9324L26.3909 19.9389L26.3504 19.945L26.3099 19.9509L26.2693 19.9567L26.2288 19.9622L26.1882 19.9674L26.1477 19.9725L26.1072 19.9774L26.0666 19.982L26.0261 19.9864L25.9855 19.9906L25.945 19.9946L25.9045 19.9984L25.8639 20.002L25.8234 20.0053L25.7988 20.0072L25.7829 20.0083L25.7423 20.0111L25.7018 20.0138L25.6613 20.016L25.6207 20.0181L25.5802 20.02L25.5396 20.0213L25.4991 20.0226L25.4585 20.0235L25.418 20.0241L25.3775 20.0246C25.3639 20.0247 25.3505 20.0245 25.3369 20.0245L25.2964 20.0243L25.2559 20.0237L25.2153 20.0228L25.1748 20.0218C25.1612 20.0213 25.1478 20.0207 25.1343 20.0201C25.1208 20.0196 25.1072 20.0191 25.0937 20.0185L25.0532 20.0162L25.0127 20.0138L24.9721 20.0109L24.9316 20.0077C24.9181 20.0066 24.9045 20.0056 24.891 20.0044C24.8774 20.0031 24.864 20.0016 24.8505 20.0003L24.81 19.9962L24.7694 19.9914L24.7289 19.9865L24.6884 19.9811L24.6478 19.9753C24.6343 19.9733 24.6207 19.9714 24.6073 19.9692C24.5937 19.9671 24.5802 19.9648 24.5667 19.9625C24.5532 19.9602 24.5396 19.9581 24.5262 19.9557C24.5126 19.9533 24.4992 19.9506 24.4856 19.9481C24.4721 19.9455 24.4585 19.9431 24.4451 19.9404C24.4315 19.9377 24.4181 19.9347 24.4046 19.9319C24.3911 19.929 24.3775 19.9263 24.364 19.9233C24.3504 19.9203 24.337 19.9171 24.3235 19.9139L24.283 19.9043C24.2694 19.901 24.2559 19.8975 24.2424 19.894C24.2289 19.8905 24.2153 19.8871 24.2019 19.8835C24.1883 19.8798 24.1748 19.876 24.1614 19.8722C24.1478 19.8684 24.1342 19.8645 24.1208 19.8605C24.1072 19.8565 24.0937 19.8523 24.0803 19.8482C24.0667 19.844 24.0532 19.8398 24.0398 19.8354C24.0262 19.831 24.0127 19.8265 23.9992 19.8219C23.9857 19.8174 23.9721 19.8128 23.9587 19.8081C23.9451 19.8033 23.9316 19.7983 23.9181 19.7934C23.9046 19.7884 23.891 19.7835 23.8776 19.7784C23.864 19.7731 23.8505 19.7677 23.837 19.7623C23.8235 19.7569 23.8099 19.7516 23.7965 19.7461C23.7829 19.7404 23.7695 19.7345 23.756 19.7287C23.7424 19.7228 23.7288 19.717 23.7154 19.711C23.7018 19.7049 23.6884 19.6985 23.6749 19.6922C23.6613 19.6858 23.6478 19.6794 23.6344 19.6729C23.6208 19.6663 23.6072 19.6595 23.5938 19.6527C23.5802 19.6458 23.5667 19.6388 23.5533 19.6317C23.5397 19.6246 23.5261 19.6175 23.5127 19.6101C23.4991 19.6027 23.4857 19.5949 23.4722 19.5872C23.4587 19.5795 23.4451 19.5718 23.4317 19.5638C23.418 19.5557 23.4046 19.5474 23.3911 19.5392C23.3775 19.5307 23.364 19.5221 23.3506 19.5135C23.337 19.5048 23.3234 19.4962 23.3101 19.4872C23.2964 19.4781 23.283 19.4686 23.2695 19.4592C23.2559 19.4498 23.2424 19.4401 23.229 19.4304C23.2154 19.4206 23.2018 19.4107 23.1885 19.4006C23.1748 19.3902 23.1613 19.3796 23.1479 19.369C23.1343 19.3582 23.1208 19.3474 23.1074 19.3364C23.0938 19.3252 23.0802 19.314 23.0668 19.3025C23.0531 19.2907 23.0397 19.2787 23.0263 19.2666C23.0126 19.2543 22.9991 19.2419 22.9857 19.2293C22.9721 19.2164 22.9585 19.2035 22.9452 19.1904C22.9316 19.1769 22.918 19.1635 22.9047 19.1498C22.8909 19.1356 22.8775 19.1212 22.8641 19.1067C22.8504 19.0918 22.8369 19.0767 22.8236 19.0615C22.8099 19.0458 22.7964 19.03 22.7831 19.014C22.7694 18.9976 22.7558 18.9809 22.7425 18.9641C22.7288 18.9467 22.7152 18.929 22.702 18.9112C22.6883 18.8928 22.6747 18.8742 22.6615 18.8553C22.6477 18.8357 22.6341 18.8159 22.6209 18.7958C22.6071 18.7748 22.5936 18.7536 22.5804 18.7321C22.5665 18.7096 22.553 18.6868 22.5398 18.6638C22.5259 18.6396 22.5125 18.615 22.4993 18.5902C22.4853 18.5638 22.4719 18.5371 22.4588 18.5101C22.4448 18.4814 22.4313 18.4523 22.4182 18.4228C22.4042 18.3911 22.3906 18.3592 22.3777 18.3266C22.3634 18.2907 22.3501 18.254 22.3372 18.217C22.3228 18.176 22.3093 18.1344 22.2966 18.0921C22.282 18.0431 22.2684 17.9933 22.2561 17.9426C22.2407 17.8795 22.2273 17.8151 22.2156 17.7495C22.1981 17.6522 22.1845 17.5523 22.175 17.4496C22.1641 17.331 22.1585 17.2089 22.1585 17.0832C22.1585 16.9574 22.1641 16.8352 22.175 16.7165C22.1845 16.6138 22.1981 16.5138 22.2156 16.4165C22.2273 16.3509 22.2407 16.2864 22.2561 16.2233C22.2684 16.1726 22.282 16.1228 22.2966 16.0737C22.3093 16.0314 22.3228 15.9898 22.3372 15.9487C22.3501 15.9117 22.3634 15.8751 22.3777 15.8391C22.3906 15.8065 22.4042 15.7745 22.4182 15.7428C22.4313 15.7133 22.4448 15.6842 22.4588 15.6555C22.4719 15.6285 22.4853 15.6017 22.4993 15.5754C22.5125 15.5506 22.5259 15.526 22.5398 15.5017C22.553 15.4787 22.5665 15.4559 22.5804 15.4334C22.5936 15.4119 22.6071 15.3907 22.6209 15.3697C22.6341 15.3496 22.6477 15.3298 22.6615 15.3101C22.6747 15.2912 22.6883 15.2726 22.702 15.2542C22.7152 15.2363 22.7288 15.2188 22.7425 15.2013C22.7558 15.1845 22.7694 15.1678 22.7831 15.1514C22.7964 15.1353 22.8099 15.1195 22.8236 15.1039C22.8369 15.0886 22.8504 15.0735 22.8641 15.0586C22.8775 15.0441 22.8909 15.0296 22.9047 15.0155C22.918 15.0018 22.9316 14.9883 22.9452 14.9749C22.9585 14.9618 22.9721 14.9488 22.9857 14.936C22.9991 14.9234 23.0126 14.9109 23.0263 14.8986C23.0397 14.8865 23.0531 14.8745 23.0668 14.8627C23.0802 14.8512 23.0938 14.8401 23.1074 14.8288C23.1208 14.8178 23.1343 14.8069 23.1479 14.7962C23.1613 14.7855 23.1748 14.7749 23.1885 14.7646C23.2018 14.7545 23.2154 14.7446 23.229 14.7347C23.2424 14.725 23.2559 14.7154 23.2695 14.7059C23.283 14.6965 23.2964 14.6871 23.3101 14.6779C23.3234 14.669 23.337 14.6603 23.3506 14.6516C23.364 14.6429 23.3775 14.6344 23.3911 14.626C23.4046 14.6177 23.418 14.6094 23.4317 14.6013C23.4451 14.5934 23.4587 14.5856 23.4722 14.5779C23.4857 14.5702 23.4991 14.5625 23.5127 14.555C23.5261 14.5476 23.5397 14.5405 23.5533 14.5334C23.5667 14.5263 23.5802 14.5193 23.5938 14.5123C23.6072 14.5055 23.6208 14.4988 23.6344 14.4921C23.6478 14.4856 23.6613 14.4792 23.6749 14.4729C23.6884 14.4666 23.7018 14.4602 23.7154 14.4541C23.7288 14.448 23.7424 14.4422 23.756 14.4364C23.7695 14.4305 23.7829 14.4246 23.7965 14.419C23.8099 14.4134 23.8235 14.4081 23.837 14.4027C23.8505 14.3973 23.864 14.3919 23.8776 14.3867C23.891 14.3815 23.9046 14.3766 23.9181 14.3717C23.9316 14.3667 23.9451 14.3617 23.9587 14.3569C23.9721 14.3522 23.9857 14.3476 23.9992 14.3431C24.0127 14.3385 24.0262 14.334 24.0398 14.3296C24.0532 14.3252 24.0667 14.321 24.0803 14.3168C24.0937 14.3127 24.1072 14.3085 24.1208 14.3045L24.1614 14.2928C24.1748 14.289 24.1883 14.2852 24.2019 14.2815C24.2153 14.2779 24.2289 14.2744 24.2424 14.2709C24.2559 14.2675 24.2694 14.264 24.283 14.2606L24.3235 14.2511C24.337 14.2479 24.3504 14.2447 24.364 14.2417C24.3775 14.2387 24.3911 14.2359 24.4046 14.2331C24.4181 14.2302 24.4315 14.2272 24.4451 14.2245C24.4585 14.2218 24.4721 14.2194 24.4856 14.2169C24.4992 14.2144 24.5126 14.2117 24.5262 14.2092C24.5396 14.2068 24.5532 14.2047 24.5667 14.2025C24.5802 14.2002 24.5937 14.1979 24.6073 14.1957L24.6478 14.1897L24.6884 14.1838L24.7289 14.1784L24.7694 14.1735L24.81 14.1687L24.8505 14.1646C24.864 14.1633 24.8774 14.1618 24.891 14.1605C24.9045 14.1593 24.9181 14.1583 24.9316 14.1572L24.9721 14.154L25.0127 14.1512L25.0532 14.1487L25.0937 14.1464C25.1072 14.1458 25.1208 14.1453 25.1343 14.1448C25.1478 14.1442 25.1612 14.1436 25.1748 14.1431L25.2153 14.1421L25.2559 14.1412L25.2964 14.1406L25.3369 14.1405C25.3505 14.1404 25.3639 14.1402 25.3775 14.1403L25.418 14.1408L25.4585 14.1414L25.4991 14.1423L25.5396 14.1436L25.5802 14.145L25.6207 14.1469L25.6613 14.1489L25.7018 14.1511L25.7423 14.1538L25.7829 14.1566L25.7988 14.1577L25.8234 14.1596L25.8639 14.1629L25.9045 14.1664L25.945 14.1701L25.9855 14.174L26.0261 14.1782L26.0666 14.1826L26.1072 14.1871L26.1477 14.1919L26.1882 14.1969L26.2288 14.2021L26.2693 14.2075L26.3099 14.2132L26.3504 14.219L26.3909 14.2251L26.4315 14.2314L26.472 14.238L26.5125 14.2447L26.5531 14.2517L26.5936 14.2589L26.6342 14.2663L26.6747 14.274L26.7152 14.2819L26.7558 14.29L26.7963 14.2983L26.8368 14.3069L26.8774 14.3157L26.9179 14.3247L26.9584 14.3339L26.999 14.3434L27.0395 14.3532L27.0801 14.3631L27.1206 14.3733L27.1612 14.3837L27.2017 14.3944L27.2422 14.4053L27.2828 14.4164L27.3233 14.4278L27.3638 14.4394L27.4044 14.4513L27.4449 14.4634L27.4854 14.4757L27.526 14.4883L27.5665 14.501L27.6071 14.5141L27.6476 14.5274L27.6882 14.5409L27.7287 14.5546L27.7692 14.5686L27.8098 14.5828L27.8503 14.5973L27.8908 14.612L27.9314 14.6269L27.9719 14.6421L28.0124 14.6575L28.053 14.6732L28.0935 14.689L28.1341 14.7051L28.1746 14.7215L28.2151 14.738L28.2557 14.7548L28.2962 14.7719L28.3367 14.7891L28.3773 14.8066L28.4178 14.8243L28.4583 14.8422L28.4989 14.8603L28.5394 14.8787L28.58 14.8973L28.6205 14.916L28.661 14.935L28.7016 14.9542L28.7421 14.9736L28.7827 14.9932L28.8232 15.013L28.8637 15.033L28.9043 15.0531L28.9448 15.0735L28.9851 15.0939V13.3008L28.9448 13.2908L28.9043 13.2809L28.8637 13.2712L28.8232 13.2617L28.7827 13.2522L28.7421 13.2429L28.7016 13.2336L28.661 13.2245L28.6205 13.2155L28.58 13.2065L28.5394 13.1976L28.4989 13.1889L28.4583 13.1802L28.4178 13.1716L28.3773 13.1631L28.3367 13.1546L28.2962 13.1463L28.2557 13.138L28.2151 13.1298L28.1746 13.1217L28.1341 13.1137L28.0935 13.1057L28.053 13.0979L28.0124 13.0901L27.9719 13.0824L27.9314 13.0747L27.8908 13.0672L27.8503 13.0597L27.8098 13.0523L27.7692 13.045L27.7287 13.0378L27.6882 13.0307L27.6476 13.0236L27.6071 13.0166L27.5665 13.0097L27.526 13.0029L27.4854 12.9962L27.4449 12.9895L27.4044 12.983L27.3638 12.9765L27.3233 12.9701L27.2828 12.9638L27.2422 12.9576L27.2017 12.9514L27.1612 12.9454L27.1206 12.9394L27.0801 12.9336L27.0395 12.9278L26.999 12.9222L26.9584 12.9166L26.9179 12.9111L26.8774 12.9057L26.8368 12.9004L26.7963 12.8952L26.7558 12.8901L26.7152 12.8851L26.6747 12.8802L26.6342 12.8754L26.5936 12.8707L26.5531 12.8661L26.5125 12.8616L26.472 12.8573L26.4315 12.853L26.3909 12.8489L26.3504 12.8448L26.3099 12.8409L26.2693 12.837L26.2288 12.8334L26.1882 12.8298L26.1477 12.8263L26.1072 12.823L26.0666 12.8198L26.0261 12.8168L25.9855 12.8138L25.945 12.811L25.9045 12.8083L25.8639 12.8058L25.8234 12.8034L25.7829 12.8011L25.7423 12.799L25.7018 12.797L25.6811 12.796L25.6613 12.7952L25.6207 12.7935L25.5802 12.7918L25.5396 12.7901L25.4991 12.7887L25.4585 12.7873L25.418 12.7859L25.3775 12.7846L25.3369 12.7835L25.2964 12.7824L25.2559 12.7813L25.2153 12.7805L25.1748 12.7797L25.1343 12.7788L25.0937 12.7783L25.0532 12.7777L25.0127 12.7772L24.9721 12.7769L24.9316 12.7767L24.891 12.7764L24.8505 12.7763L24.81 12.7764L24.7694 12.7764L24.7289 12.7766L24.6884 12.777L24.6478 12.7774L24.6073 12.7778L24.5667 12.7785L24.5262 12.7792L24.4856 12.7799L24.4451 12.7809L24.4046 12.7819L24.364 12.7829L24.3235 12.7842L24.283 12.7856L24.2424 12.787L24.2019 12.7886L24.1614 12.7903L24.1208 12.792L24.0803 12.794L24.0398 12.796L23.9992 12.798L23.9587 12.8003L23.9181 12.8027L23.8776 12.8051L23.837 12.8078L23.7965 12.8105L23.756 12.8133L23.7154 12.8164L23.6749 12.8195L23.6344 12.8227L23.5938 12.8261L23.5533 12.8295L23.5127 12.8332L23.4722 12.837L23.4317 12.8408L23.3911 12.8449L23.3506 12.8491L23.3101 12.8533L23.2695 12.8579L23.229 12.8625L23.1885 12.8672L23.1479 12.8722L23.1074 12.8772L23.0668 12.8824L23.0263 12.8878L22.9857 12.8932L22.9452 12.8989L22.9047 12.9047L22.8641 12.9107L22.8236 12.9169L22.7831 12.9231L22.7425 12.9297L22.702 12.9364L22.6615 12.9432L22.6209 12.9502L22.5804 12.9573L22.5398 12.9648L22.4993 12.9723L22.4588 12.9801L22.4182 12.988L22.3777 12.996L22.3372 13.0045L22.2966 13.0129L22.2561 13.0216L22.2156 13.0306L22.175 13.0396L22.1345 13.049L22.0939 13.0584L22.0534 13.0683L22.0128 13.0782L21.9723 13.0885L21.9318 13.0989L21.8912 13.1096L21.8507 13.1205L21.8102 13.1316L21.7696 13.1431L21.7291 13.1546L21.6886 13.1666L21.648 13.1786L21.6075 13.1911L21.5669 13.2037L21.5264 13.2168C21.5129 13.2212 21.4992 13.2254 21.4858 13.2299L21.4453 13.2435C21.4318 13.2481 21.4182 13.2525 21.4048 13.2572L21.3642 13.2714L21.3237 13.2857C21.3101 13.2905 21.2967 13.2956 21.2832 13.3005C21.2696 13.3055 21.256 13.3104 21.2426 13.3154L21.2021 13.3309C21.1886 13.3361 21.175 13.3412 21.1616 13.3464L21.121 13.3625L21.0805 13.3788L21.0399 13.3956L20.9994 13.4126L20.9589 13.43L20.9183 13.4478L20.8778 13.4659L20.8373 13.4846L20.7968 13.5034C20.7831 13.5099 20.7697 13.5164 20.7562 13.523L20.7157 13.5427L20.6751 13.563L20.6346 13.5837C20.621 13.5908 20.6074 13.5977 20.5941 13.6048C20.5804 13.612 20.567 13.6193 20.5535 13.6266L20.513 13.6487L20.4725 13.6713C20.4588 13.679 20.4454 13.6867 20.4319 13.6945C20.4183 13.7023 20.4048 13.7101 20.3914 13.7181C20.3778 13.7261 20.3643 13.7342 20.3508 13.7424C20.3372 13.7506 20.3237 13.7589 20.3103 13.7672C20.2967 13.7756 20.2831 13.784 20.2698 13.7925C20.2561 13.8012 20.2426 13.8099 20.2292 13.8186L20.1887 13.8453C20.1751 13.8543 20.1615 13.8633 20.1481 13.8724L20.1076 13.9004C20.094 13.91 20.0805 13.9195 20.0671 13.9291C20.0535 13.9389 20.0399 13.9487 20.0265 13.9585C20.013 13.9685 19.9994 13.9784 19.986 13.9885C19.9723 13.9988 19.9589 14.0091 19.9455 14.0195C19.9318 14.0301 19.9183 14.0407 19.9049 14.0513C19.8913 14.0621 19.8778 14.0729 19.8644 14.0839V14.0838Z",
      fill: "#E10238"
    })]
  });
});
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/images/cards/unionpay.js
/**
 * External dependencies
 */


/* harmony default export */ const unionpay = (function () {
  return /*#__PURE__*/_jsxs("svg", {
    width: "52",
    height: "35",
    viewBox: "0 0 52 35",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/_jsx("rect", {
      x: "0.878906",
      y: "0.5",
      width: "50",
      height: "34",
      rx: "3.5",
      fill: "white",
      stroke: "#F3F3F3"
    }), /*#__PURE__*/_jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M44.0545 5.25735L34.3353 5.25488C34.3341 5.25488 34.3328 5.25488 34.3328 5.25488C34.3253 5.25488 34.3179 5.2562 34.3106 5.2562C32.9754 5.29641 31.3124 6.34915 31.0096 7.64726L26.4132 27.6401C26.1104 28.9503 26.9343 30.0165 28.2599 30.0361H38.4703C39.7756 29.9726 41.044 28.932 41.3417 27.6486L45.9382 7.65564C46.2459 6.33208 45.402 5.25735 44.0545 5.25735Z",
      fill: "#01798A"
    }), /*#__PURE__*/_jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M26.4134 27.6401L31.0097 7.64729C31.3126 6.34917 32.9755 5.29643 34.3107 5.25622L30.4464 5.25376L23.484 5.25244C22.1451 5.27936 20.4605 6.33949 20.1577 7.64729L15.5601 27.6401C15.2561 28.9503 16.0813 30.0165 17.4059 30.0361H28.26C26.9345 30.0165 26.1105 28.9503 26.4134 27.6401",
      fill: "#024381"
    }), /*#__PURE__*/_jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M15.5602 27.64L20.1578 7.64714C20.4606 6.33934 22.1452 5.27922 23.4841 5.2523L14.5649 5.25C13.2185 5.25 11.4923 6.32227 11.1846 7.64714L6.58694 27.64C6.55896 27.762 6.54344 27.8815 6.53418 27.9986V28.3695C6.62418 29.3246 7.36619 30.0201 8.43278 30.036H17.406C16.0814 30.0163 15.2562 28.9502 15.5602 27.64Z",
      fill: "#DD0228"
    }), /*#__PURE__*/_jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M23.6716 19.8205H23.8404C23.9955 19.8205 24.0999 19.7693 24.1488 19.668L24.5874 19.0227H25.762L25.5171 19.4472H26.9254L26.7467 20.0975H25.0709C24.8779 20.3829 24.6403 20.5171 24.3547 20.5012H23.4818L23.6716 19.8205H23.6716ZM23.4788 20.7527H26.5643L26.3676 21.4591H25.1268L24.9374 22.1409H26.1449L25.9482 22.8473H24.7407L24.4602 23.8548C24.3908 24.0232 24.4821 24.099 24.7327 24.0818H25.7168L25.5345 24.7382H23.6451C23.287 24.7382 23.1641 24.5368 23.2765 24.1331L23.6351 22.8473H22.8633L23.0593 22.1409H23.8313L24.0205 21.4591H23.2827L23.4788 20.7527H23.4788ZM28.4035 19.018L28.355 19.4315C28.355 19.4315 28.937 19.002 29.4656 19.002H31.4189L30.6719 21.6601C30.61 21.964 30.3443 22.1151 29.8752 22.1151H27.6612L27.1426 23.9817C27.1128 24.0817 27.155 24.133 27.2667 24.133H27.7023L27.5422 24.7124H26.4347C26.0096 24.7124 25.8328 24.5867 25.903 24.3343L27.3684 19.018H28.4035H28.4035ZM30.0576 19.7693H28.3141L28.1056 20.4866C28.1056 20.4866 28.3959 20.2805 28.8811 20.2731C29.365 20.2657 29.9173 20.2731 29.9173 20.2731L30.0576 19.7693ZM29.4261 21.4333C29.555 21.4504 29.6271 21.4003 29.6358 21.282L29.7425 20.9039H27.9964L27.85 21.4333H29.4261ZM28.2483 22.2921H29.2547L29.236 22.7203H29.504C29.6394 22.7203 29.7065 22.6776 29.7065 22.5935L29.7858 22.3166H30.6223L30.5106 22.7203C30.4161 23.057 30.1656 23.2327 29.7586 23.2499H29.2225L29.22 23.9817C29.2101 24.0989 29.318 24.1587 29.54 24.1587H30.0439L29.8813 24.7381H28.6727C28.3339 24.754 28.1678 24.5953 28.1713 24.2587L28.2483 22.2921V22.2921Z",
      fill: "white"
    }), /*#__PURE__*/_jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16.0529 15.4764C15.9164 16.1339 15.6 16.639 15.1091 16.9976C14.6227 17.3502 13.9954 17.527 13.2273 17.527C12.5044 17.527 11.9745 17.3465 11.6364 16.9841C11.4018 16.7267 11.2852 16.3998 11.2852 16.0045C11.2852 15.8411 11.3051 15.6654 11.3448 15.4764L12.1631 11.5972H13.3991L12.5919 15.4325C12.5671 15.5386 12.5571 15.6374 12.5584 15.7265C12.5571 15.9229 12.6068 16.0839 12.7073 16.2095C12.8537 16.3962 13.0914 16.4889 13.4221 16.4889C13.8024 16.4889 14.1158 16.3974 14.359 16.2132C14.6022 16.0302 14.761 15.7704 14.8324 15.4325L15.6422 11.5972H16.8719L16.0529 15.4764Z",
      fill: "white"
    }), /*#__PURE__*/_jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M21.2436 13.9502H22.2116L21.4534 17.4123H20.4873L21.2436 13.9502ZM21.5482 12.689H22.5248L22.3424 13.5293H21.3659L21.5482 12.689Z",
      fill: "white"
    }), /*#__PURE__*/_jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M23.0688 17.1487C22.8156 16.9109 22.6878 16.59 22.6865 16.1826C22.6865 16.113 22.6908 16.0338 22.7002 15.9471C22.7095 15.8592 22.7214 15.7739 22.738 15.6946C22.8528 15.1323 23.0973 14.6858 23.4739 14.3564C23.8499 14.0258 24.3036 13.8599 24.8347 13.8599C25.2696 13.8599 25.6145 13.9794 25.8672 14.2185C26.1196 14.4589 26.2462 14.7833 26.2462 15.1957C26.2462 15.2664 26.2407 15.3481 26.2313 15.436C26.2201 15.525 26.2066 15.6104 26.1909 15.6946C26.0787 16.2484 25.8349 16.69 25.4583 17.0134C25.0816 17.3391 24.6293 17.5012 24.1019 17.5012C23.6651 17.5012 23.3213 17.3841 23.0688 17.1487M24.9136 16.4631C25.0843 16.2814 25.2065 16.0056 25.2809 15.6385C25.2921 15.5812 25.302 15.5214 25.3082 15.4616C25.3143 15.403 25.3168 15.3482 25.3168 15.2981C25.3168 15.0846 25.2616 14.9188 25.1506 14.8016C25.0402 14.6833 24.8832 14.6248 24.6804 14.6248C24.4122 14.6248 24.1939 14.7174 24.0227 14.9029C23.8501 15.0884 23.7279 15.3689 23.6509 15.7422C23.6404 15.7995 23.6317 15.8569 23.6237 15.913C23.6175 15.9703 23.6157 16.024 23.6168 16.0728C23.6168 16.285 23.6721 16.4485 23.7831 16.5644C23.8935 16.6803 24.0498 16.7376 24.2553 16.7376C24.5246 16.7376 24.743 16.6461 24.9136 16.4631Z",
      fill: "white"
    }), /*#__PURE__*/_jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M32.5262 19.8496L32.7596 19.0421H33.9397L33.8888 19.3385C33.8888 19.3385 34.4918 19.0421 34.9261 19.0421C35.3606 19.0421 36.3854 19.0421 36.3854 19.0421L36.1535 19.8496H35.9239L34.8231 23.6582H35.0527L34.8343 24.4146H34.6047L34.5092 24.7427H33.3664L33.4617 24.4146H31.207L31.4268 23.6582H31.6527L32.7544 19.8496H32.5262H32.5262ZM33.7993 19.8498L33.4989 20.8805C33.4989 20.8805 34.0128 20.6866 34.4558 20.6318C34.5536 20.2718 34.6815 19.8498 34.6815 19.8498H33.7993V19.8498ZM33.3598 21.3637L33.0585 22.4433C33.0585 22.4433 33.628 22.1676 34.0188 22.1444C34.1317 21.7271 34.2447 21.3637 34.2447 21.3637H33.3598V21.3637ZM33.5808 23.6583L33.8067 22.8751H32.9258L32.6987 23.6583H33.5808ZM36.4352 18.9922H37.5447L37.5918 19.3946C37.5844 19.4971 37.6463 19.546 37.7779 19.546H37.9739L37.7756 20.2279H36.9601C36.6487 20.2437 36.4886 20.1267 36.4738 19.8741L36.4352 18.9922ZM36.1102 20.4548H39.7039L39.493 21.1868H38.3488L38.1526 21.8673H39.2957L39.0835 22.5981H37.8104L37.5224 23.0264H38.1455L38.2894 23.8839C38.3066 23.9693 38.3836 24.0108 38.5151 24.0108H38.7086L38.5053 24.717H37.8202C37.4653 24.7342 37.2818 24.6171 37.2667 24.3646L37.1016 23.5814L36.5346 24.4146C36.4005 24.65 36.1945 24.7599 35.9167 24.7427H34.8705L35.074 24.0363H35.4004C35.5345 24.0363 35.646 23.9778 35.7465 23.8595L36.634 22.5981H35.4898L35.7018 21.8673H36.9428L37.1402 21.1868H35.898L36.1102 20.4548Z",
      fill: "white"
    }), /*#__PURE__*/_jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.1915 13.9492H18.0645L17.9647 14.4493L18.0899 14.3066C18.3729 14.009 18.7166 13.8613 19.1224 13.8613C19.4898 13.8613 19.7547 13.9663 19.921 14.1773C20.0847 14.3884 20.1294 14.6799 20.0519 15.0544L19.571 17.4137H18.6738L19.1081 15.2752C19.1529 15.0544 19.1405 14.8897 19.0715 14.7836C19.0033 14.6774 18.873 14.625 18.685 14.625C18.4542 14.625 18.26 14.6957 18.1017 14.8361C17.9429 14.9776 17.8381 15.174 17.7865 15.424L17.3863 17.4137H16.4873L17.1915 13.9492Z",
      fill: "white"
    }), /*#__PURE__*/_jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M27.2021 13.9492H28.0758L27.9767 14.4493L28.1006 14.3066C28.3837 14.009 28.7287 13.8613 29.1332 13.8613C29.5005 13.8613 29.766 13.9663 29.931 14.1773C30.0937 14.3884 30.1408 14.6799 30.0614 15.0544L29.5823 17.4137H28.6839L29.1184 15.2752C29.1629 15.0544 29.1506 14.8897 29.0823 14.7836C29.0115 14.6774 28.8836 14.625 28.6964 14.625C28.4655 14.625 28.272 14.6957 28.1119 14.8361C27.953 14.9776 27.8476 15.174 27.798 15.424L27.396 17.4137H26.498L27.2021 13.9492",
      fill: "white"
    }), /*#__PURE__*/_jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M31.5212 11.8018H34.0577C34.5454 11.8018 34.9225 11.9104 35.1818 12.1238C35.44 12.3398 35.5692 12.6497 35.5692 13.0534V13.0656C35.5692 13.1424 35.564 13.229 35.5567 13.3229C35.5441 13.4157 35.5279 13.5095 35.5071 13.6072C35.3954 14.1415 35.1359 14.571 34.7352 14.8967C34.333 15.2211 33.8567 15.3846 33.3082 15.3846H31.9479L31.5274 17.4133H30.3496L31.5212 11.8018M32.1554 14.4087H33.2835C33.5776 14.4087 33.8108 14.3415 33.9809 14.2086C34.1497 14.0744 34.2614 13.8695 34.3234 13.5914C34.3332 13.54 34.3394 13.4937 34.3469 13.451C34.3508 13.4108 34.3556 13.3704 34.3556 13.3315C34.3556 13.1326 34.2838 12.9887 34.1397 12.8984C33.9958 12.8068 33.7701 12.763 33.4572 12.763H32.4991L32.1554 14.4087",
      fill: "white"
    }), /*#__PURE__*/_jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M40.8406 18.0833C40.4683 18.8615 40.1135 19.3152 39.9051 19.5263C39.6964 19.735 39.2833 20.2205 38.2881 20.1839L38.3737 19.5898C39.2112 19.3361 39.6642 18.1929 39.9223 17.6867L39.6146 13.9587L40.2624 13.9502H40.8059L40.8643 16.2888L41.8829 13.9502H42.9143L40.8406 18.0833Z",
      fill: "white"
    }), /*#__PURE__*/_jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M37.9561 14.232L37.5464 14.509C37.1183 14.1796 36.7274 13.9759 35.9731 14.3199C34.9454 14.7883 34.0868 18.381 36.9161 17.1976L37.0774 17.3855L38.1905 17.4135L38.9215 14.1491L37.9561 14.232M37.3233 16.0168C37.1445 16.5353 36.7451 16.8781 36.4324 16.7805C36.1196 16.6853 36.008 16.1851 36.1891 15.6655C36.3678 15.1458 36.7698 14.8042 37.08 14.9018C37.3927 14.997 37.5056 15.4971 37.3233 16.0168Z",
      fill: "white"
    }), /*#__PURE__*/_jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M34.3328 5.26107L30.4463 5.25342L34.3106 5.26981C34.318 5.26981 34.3253 5.26107 34.3328 5.26107",
      fill: "#E02F41"
    }), /*#__PURE__*/_jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M30.4467 5.27406L23.5378 5.25C23.5204 5.25 23.5024 5.25765 23.4844 5.26531L30.4467 5.27406",
      fill: "#2E4F7D"
    })]
  });
});
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/components/WCPayAcceptedMethods.tsx
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */











var WCPayAcceptedMethods_WCPayAcceptedMethods = function WCPayAcceptedMethods() {
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Text, {
      as: "h3",
      variant: "label",
      weight: "600",
      size: "12",
      lineHeight: "16px",
      children: __('Accepted payment methods', 'woocommerce')
    }), /*#__PURE__*/_jsxs("div", {
      className: "woocommerce-task-payment-wcpay__accepted",
      children: [/*#__PURE__*/_jsx(Visa, {}), /*#__PURE__*/_jsx(MasterCard, {}), /*#__PURE__*/_jsx(Maestro, {}), /*#__PURE__*/_jsx(Amex, {}), /*#__PURE__*/_jsx(DinersClub, {}), /*#__PURE__*/_jsx(CB, {}), /*#__PURE__*/_jsx(Discover, {}), /*#__PURE__*/_jsx(UnionPay, {}), /*#__PURE__*/_jsx(JCB, {}), /*#__PURE__*/_jsx(ApplePay, {})]
    })]
  });
};
try {
    // @ts-ignore
    WCPayAcceptedMethods_WCPayAcceptedMethods.displayName = "WCPayAcceptedMethods";
    // @ts-ignore
    WCPayAcceptedMethods_WCPayAcceptedMethods.__docgenInfo = { "description": "", "displayName": "WCPayAcceptedMethods", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/onboarding/src/components/WCPayAcceptedMethods.tsx#WCPayAcceptedMethods"] = { docgenInfo: WCPayAcceptedMethods_WCPayAcceptedMethods.__docgenInfo, name: "WCPayAcceptedMethods", path: "../../packages/js/onboarding/src/components/WCPayAcceptedMethods.tsx#WCPayAcceptedMethods" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js");
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/images/wcpay-logo.tsx


/**
 * External dependencies
 */

/* harmony default export */ const wcpay_logo = (function (_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? 196 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 41 : _ref$height;
  return /*#__PURE__*/_jsxs("svg", {
    width: width,
    height: height,
    viewBox: "0 0 ".concat(width, " ").concat(height),
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/_jsx("title", {
      children: "WooPayments"
    }), /*#__PURE__*/_jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6.16119 0H60.1988C63.6186 0 66.387 2.74594 66.387 6.13799V26.598C66.387 29.99 63.6186 32.736 60.1988 32.736H40.8202L43.48 39.197L31.7823 32.736H6.18833C2.76858 32.736 0.000197874 29.99 0.000197874 26.598V6.13799C-0.0269431 2.77286 2.74143 0 6.16119 0Z",
      fill: "#7F54B3"
    }), /*#__PURE__*/_jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.88666 5.40393C4.26664 4.89243 4.8366 4.62322 5.59655 4.56938C6.98073 4.46169 7.76782 5.1078 7.95781 6.50769C8.79918 12.1342 9.72197 16.8992 10.699 20.8028L16.6429 9.57669C17.1857 8.55369 17.8643 8.01527 18.6785 7.96143C19.8727 7.88066 20.6055 8.63445 20.904 10.2228C21.5826 13.8033 22.4511 16.8454 23.4824 19.4298C24.1881 12.5918 25.3823 7.6653 27.065 4.62322C27.4722 3.86943 28.0692 3.49254 28.8563 3.4387C29.4806 3.38486 30.0505 3.5733 30.5662 3.97712C31.0819 4.38093 31.3533 4.89243 31.4076 5.51161C31.4347 5.99619 31.3533 6.40001 31.1362 6.80383C30.0777 8.74214 29.2092 11.9996 28.5035 16.5223C27.825 20.9104 27.5807 24.3294 27.7436 26.7792C27.7978 27.4522 27.6893 28.0445 27.4179 28.556C27.0922 29.1483 26.6036 29.4713 25.9794 29.5252C25.2737 29.579 24.5409 29.256 23.8353 28.5291C21.3112 25.9716 19.3027 22.1488 17.8371 17.0607C16.073 20.5066 14.7702 23.091 13.9288 24.814C12.3275 27.8561 10.9705 29.4175 9.83053 29.4982C9.09773 29.5521 8.47349 28.9329 7.93067 27.6407C6.54648 24.114 5.05373 17.303 3.45241 7.20764C3.37099 6.5077 3.50669 5.88851 3.88666 5.40393ZM62.24 9.6307C61.263 7.93467 59.8245 6.91167 57.8975 6.50786C57.3818 6.40017 56.8933 6.34633 56.4319 6.34633C53.8263 6.34633 51.7094 7.69238 50.0537 10.3845C48.6424 12.6728 47.9368 15.2033 47.9368 17.9762C47.9368 20.0491 48.371 21.8259 49.2395 23.3066C50.2166 25.0026 51.6551 26.0256 53.5821 26.4294C54.0978 26.5371 54.5863 26.5909 55.0477 26.5909C57.6804 26.5909 59.7974 25.2449 61.4258 22.5528C62.8371 20.2376 63.5428 17.707 63.5428 14.9341C63.5428 12.8343 63.1086 11.0844 62.24 9.6307ZM58.8203 17.0878C58.4403 18.8646 57.7618 20.1837 56.7576 21.0721C55.9705 21.7721 55.2377 22.0682 54.5592 21.9336C53.9078 21.799 53.365 21.2337 52.9578 20.1837C52.6321 19.3492 52.4693 18.5146 52.4693 17.7339C52.4693 17.0609 52.5236 16.3879 52.6593 15.7687C52.9036 14.6649 53.365 13.5881 54.0978 12.5651C54.9934 11.246 55.9433 10.7075 56.9204 10.896C57.5718 11.0306 58.1146 11.5959 58.5217 12.6458C58.8474 13.4804 59.0103 14.315 59.0103 15.0957C59.0103 15.7956 58.9288 16.4686 58.8203 17.0878ZM40.8794 6.50786C42.7793 6.91167 44.2449 7.93467 45.222 9.6307C46.0905 11.0844 46.5247 12.8343 46.5247 14.9341C46.5247 17.707 45.8191 20.2376 44.4077 22.5528C42.7793 25.2449 40.6623 26.5909 38.0296 26.5909C37.5682 26.5909 37.0797 26.5371 36.564 26.4294C34.637 26.0256 33.1985 25.0026 32.2214 23.3066C31.3529 21.8259 30.9187 20.0491 30.9187 17.9762C30.9187 15.2033 31.6243 12.6728 33.0357 10.3845C34.6913 7.69238 36.8083 6.34633 39.4138 6.34633C39.8752 6.34633 40.3637 6.40017 40.8794 6.50786ZM39.7395 21.0721C40.7437 20.1837 41.4222 18.8646 41.8022 17.0878C41.9379 16.4686 41.9922 15.7956 41.9922 15.0957C41.9922 14.315 41.8293 13.4804 41.5036 12.6458C41.0965 11.5959 40.5537 11.0306 39.9023 10.896C38.9253 10.7075 37.9753 11.246 37.0797 12.5651C36.3469 13.5881 35.8855 14.6649 35.6412 15.7687C35.5055 16.3879 35.4512 17.0609 35.4512 17.7339C35.4512 18.5146 35.6141 19.3492 35.9398 20.1837C36.3469 21.2337 36.8897 21.799 37.5411 21.9336C38.2196 22.0682 38.9524 21.7721 39.7395 21.0721Z",
      fill: "white"
    }), /*#__PURE__*/_jsx("path", {
      d: "M143.023 29.9316V38.217H144.057V35.26H146.141C147.697 35.26 148.805 34.1633 148.805 32.613C148.805 31.0341 147.72 29.9316 146.153 29.9316H143.023ZM144.057 30.8503H145.883C147.083 30.8503 147.743 31.4762 147.743 32.613C147.743 33.7097 147.06 34.3413 145.883 34.3413H144.057V30.8503Z",
      fill: "black"
    }), /*#__PURE__*/_jsx("path", {
      d: "M151.866 38.3261C152.693 38.3261 153.37 37.9643 153.772 37.304H153.864V38.217H154.806V33.9796C154.806 32.6934 153.961 31.9183 152.451 31.9183C151.131 31.9183 150.155 32.5728 150.023 33.5662H151.022C151.159 33.0781 151.676 32.7968 152.417 32.7968C153.341 32.7968 153.818 33.2159 153.818 33.9796V34.5423L152.032 34.6514C150.591 34.7375 149.776 35.3748 149.776 36.483C149.776 37.6141 150.666 38.3261 151.866 38.3261ZM152.049 37.4591C151.332 37.4591 150.798 37.0916 150.798 36.46C150.798 35.8399 151.211 35.5126 152.153 35.4495L153.818 35.3404V35.9088C153.818 36.793 153.066 37.4591 152.049 37.4591Z",
      fill: "black"
    }), /*#__PURE__*/_jsx("path", {
      d: "M156.93 40.4563C158.027 40.4563 158.52 40.0314 159.049 38.5959L161.466 32.0274H160.415L158.721 37.1203H158.63L156.93 32.0274H155.862L158.153 38.2227L158.038 38.5902C157.78 39.3366 157.47 39.6065 156.901 39.6065C156.763 39.6065 156.608 39.6007 156.488 39.5778V40.4218C156.626 40.4448 156.798 40.4563 156.93 40.4563Z",
      fill: "black"
    }), /*#__PURE__*/_jsx("path", {
      d: "M162.787 38.217H163.774V34.3815C163.774 33.5087 164.4 32.8083 165.21 32.8083C165.99 32.8083 166.501 33.2791 166.501 34.014V38.217H167.489V34.238C167.489 33.4513 168.063 32.8083 168.924 32.8083C169.797 32.8083 170.228 33.2561 170.228 34.1691V38.217H171.215V33.9394C171.215 32.6417 170.509 31.9183 169.246 31.9183C168.39 31.9183 167.684 32.3489 167.351 33.0035H167.259C166.972 32.3604 166.387 31.9183 165.548 31.9183C164.722 31.9183 164.101 32.3145 163.82 33.0035H163.728V32.0274H162.787V38.217Z",
      fill: "black"
    }), /*#__PURE__*/_jsx("path", {
      d: "M177.118 36.615C176.86 37.1605 176.32 37.4533 175.522 37.4533C174.471 37.4533 173.788 36.6782 173.736 35.4552V35.4093H178.186V35.0303C178.186 33.1068 177.17 31.9183 175.499 31.9183C173.799 31.9183 172.708 33.1815 172.708 35.1279C172.708 37.0859 173.782 38.3261 175.499 38.3261C176.854 38.3261 177.818 37.6715 178.106 36.615H177.118ZM175.487 32.791C176.469 32.791 177.124 33.5145 177.147 34.6112H173.736C173.811 33.5145 174.5 32.791 175.487 32.791Z",
      fill: "black"
    }), /*#__PURE__*/_jsx("path", {
      d: "M179.736 38.217H180.724V34.5537C180.724 33.4686 181.361 32.8083 182.349 32.8083C183.336 32.8083 183.807 33.3365 183.807 34.4504V38.217H184.795V34.2092C184.795 32.7394 184.02 31.9183 182.63 31.9183C181.683 31.9183 181.08 32.3202 180.77 33.0035H180.678V32.0274H179.736V38.217Z",
      fill: "black"
    }), /*#__PURE__*/_jsx("path", {
      d: "M187.017 30.4254V32.0274H186.018V32.8542H187.017V36.6093C187.017 37.7921 187.528 38.2629 188.802 38.2629C188.998 38.2629 189.187 38.24 189.382 38.2055V37.3729C189.199 37.3902 189.101 37.3959 188.923 37.3959C188.28 37.3959 188.004 37.0859 188.004 36.3567V32.8542H189.382V32.0274H188.004V30.4254H187.017Z",
      fill: "black"
    }), /*#__PURE__*/_jsx("path", {
      d: "M190.617 33.7212C190.617 34.6169 191.145 35.1164 192.305 35.3978L193.367 35.6562C194.027 35.8169 194.349 36.104 194.349 36.5289C194.349 37.0973 193.752 37.4935 192.919 37.4935C192.127 37.4935 191.633 37.1605 191.467 36.638H190.45C190.559 37.6658 191.507 38.3261 192.885 38.3261C194.292 38.3261 195.365 37.5624 195.365 36.4543C195.365 35.5643 194.803 35.059 193.637 34.7777L192.684 34.548C191.955 34.37 191.61 34.1059 191.61 33.681C191.61 33.1298 192.184 32.7566 192.919 32.7566C193.666 32.7566 194.148 33.0839 194.28 33.5777H195.256C195.124 32.5614 194.223 31.9183 192.925 31.9183C191.61 31.9183 190.617 32.6934 190.617 33.7212Z",
      fill: "black"
    }), /*#__PURE__*/_jsx("path", {
      d: "M73.2688 9.52456C71.4503 11.3014 70.5547 13.5627 70.5547 16.3087C70.5547 19.2431 71.4503 21.639 73.2416 23.4427C75.0329 25.2464 77.3671 26.1618 80.2711 26.1618C81.1125 26.1618 82.0625 26.0272 83.0938 25.731V21.3698C82.1439 21.639 81.3296 21.7736 80.624 21.7736C79.1855 21.7736 78.0456 21.289 77.1771 20.3468C76.3086 19.3777 75.8743 18.0854 75.8743 16.4433C75.8743 14.9088 76.3086 13.6435 77.1499 12.6743C78.0185 11.6782 79.0769 11.1937 80.3797 11.1937C81.2211 11.1937 82.1167 11.3283 83.0938 11.5975V7.23628C82.1982 6.99399 81.1939 6.8863 80.1354 6.8863C77.3671 6.85938 75.0872 7.74778 73.2688 9.52456ZM92.1046 6.85938C89.6076 6.85938 87.6535 7.69393 86.2422 9.33611C84.8308 10.9783 84.1523 13.2935 84.1523 16.2548C84.1523 19.4584 84.858 21.9082 86.2422 23.6043C87.6263 25.3003 89.6619 26.1618 92.3217 26.1618C94.9001 26.1618 96.8814 25.3003 98.2656 23.6043C99.6498 21.9082 100.355 19.5123 100.355 16.4433C100.355 13.3743 99.6498 11.0052 98.2384 9.33611C96.8 7.69393 94.7644 6.85938 92.1046 6.85938ZM94.2487 20.8583C93.7602 21.6121 93.0274 21.989 92.1046 21.989C91.2361 21.989 90.5847 21.6121 90.1233 20.8583C89.6619 20.1045 89.4448 18.5969 89.4448 16.3087C89.4448 12.782 90.3404 11.0321 92.1589 11.0321C94.0587 11.0321 95.0358 12.8089 95.0358 16.3894C95.0087 18.597 94.7373 20.1045 94.2487 20.8583ZM113.763 7.37088L112.786 11.4898C112.542 12.5397 112.297 13.6166 112.08 14.7203L111.538 17.5739C111.022 14.7203 110.316 11.3283 109.421 7.37088H103.124L100.763 25.7041H105.485L106.761 13.0781L109.99 25.7041H113.356L116.45 13.1051L117.78 25.7041H122.72L120.223 7.37088H113.763ZM136.371 7.37088L135.394 11.4898C135.15 12.5397 134.906 13.6166 134.689 14.7203L134.146 17.5739C133.63 14.7203 132.925 11.3283 132.029 7.37088H125.732L123.371 25.7041H128.093L129.369 13.0781L132.599 25.7041H135.964L139.031 13.1051L140.361 25.7041H145.301L142.804 7.37088H136.371ZM151.733 18.4623H156.157V14.6665H151.733V11.3013H156.836V7.3978H146.739V25.731H156.863V21.8275H151.733V18.4623ZM170.922 15.5549C171.438 14.7203 171.709 13.8588 171.709 12.9705C171.709 11.2475 171.03 9.87453 169.673 8.87845C168.316 7.88237 166.444 7.37088 164.11 7.37088H158.301V25.7041H163.295V17.3586H163.377L167.421 25.7041H172.686L168.696 17.4393C169.646 17.0086 170.406 16.3894 170.922 15.5549ZM163.268 15.2587V10.8975C164.462 10.9245 165.304 11.1129 165.819 11.4898C166.335 11.8667 166.579 12.4589 166.579 13.3204C166.579 14.5857 165.467 15.2318 163.268 15.2587ZM174.64 9.52456C172.822 11.3014 171.926 13.5627 171.926 16.3087C171.926 19.2431 172.822 21.639 174.613 23.4427C176.404 25.2464 178.738 26.1618 181.643 26.1618C182.484 26.1618 183.434 26.0272 184.465 25.731V21.3698C183.515 21.639 182.701 21.7736 181.995 21.7736C180.557 21.7736 179.417 21.289 178.548 20.3468C177.68 19.3777 177.246 18.0854 177.246 16.4433C177.246 14.9088 177.68 13.6435 178.521 12.6743C179.39 11.6782 180.448 11.1937 181.751 11.1937C182.592 11.1937 183.488 11.3283 184.465 11.5975V7.23628C183.57 6.99399 182.565 6.8863 181.507 6.8863C178.766 6.85938 176.459 7.74778 174.64 9.52456ZM190.843 21.7736V18.4354H195.267V14.6396H190.843V11.2744H195.973V7.37088H185.877V25.7041H196V21.8005H190.843V21.7736Z",
      fill: "black"
    })]
  });
});
try {
    // @ts-ignore
    wcpaylogo.displayName = "wcpaylogo";
    // @ts-ignore
    wcpaylogo.__docgenInfo = { "description": "", "displayName": "wcpaylogo", "props": { "width": { "defaultValue": null, "description": "", "name": "width", "required": false, "type": { "name": "number" } }, "height": { "defaultValue": null, "description": "", "name": "height", "required": false, "type": { "name": "number" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/onboarding/src/images/wcpay-logo.tsx#wcpaylogo"] = { docgenInfo: wcpaylogo.__docgenInfo, name: "wcpaylogo", path: "../../packages/js/onboarding/src/images/wcpay-logo.tsx#wcpaylogo" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/components/WCPayCard/WCPayCard.tsx


/**
 * External dependencies
 */





/**
 * Internal dependencies
 */



var WCPayCardHeader = function WCPayCardHeader(_ref) {
  var _ref$logoWidth = _ref.logoWidth,
    logoWidth = _ref$logoWidth === void 0 ? 196 : _ref$logoWidth,
    _ref$logoHeight = _ref.logoHeight,
    logoHeight = _ref$logoHeight === void 0 ? 41 : _ref$logoHeight,
    children = _ref.children;
  return /*#__PURE__*/_jsxs(CardHeader, {
    as: "h2",
    children: [/*#__PURE__*/_jsx(WCPayLogo, {
      width: logoWidth,
      height: logoHeight
    }), children]
  });
};
var WCPayCardBody = function WCPayCardBody(_ref2) {
  var description = _ref2.description,
    heading = _ref2.heading,
    _ref2$onLinkClick = _ref2.onLinkClick,
    onLinkClick = _ref2$onLinkClick === void 0 ? function () {} : _ref2$onLinkClick;
  return /*#__PURE__*/_jsxs(CardBody, {
    children: [heading && /*#__PURE__*/_jsx(Text, {
      as: "h2",
      children: heading
    }), /*#__PURE__*/_jsxs(Text, {
      className: "woocommerce-task-payment-wcpay__description",
      as: "p",
      lineHeight: "1.5em",
      children: [description, /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx(Link, {
        target: "_blank",
        type: "external",
        rel: "noreferrer",
        href: "https://woocommerce.com/payments/?utm_medium=product",
        onClick: onLinkClick,
        children: __('Learn more', 'woocommerce')
      })]
    }), /*#__PURE__*/_jsx(WCPayAcceptedMethods, {})]
  });
};
var WCPayCardFooter = function WCPayCardFooter(_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/_jsx(CardFooter, {
    children: children
  });
};
var WCPayCard = function WCPayCard(_ref4) {
  var children = _ref4.children;
  return /*#__PURE__*/_jsx(Card, {
    className: "woocommerce-task-payment-wcpay",
    children: children
  });
};
try {
    // @ts-ignore
    WCPayCardHeader.displayName = "WCPayCardHeader";
    // @ts-ignore
    WCPayCardHeader.__docgenInfo = { "description": "", "displayName": "WCPayCardHeader", "props": { "logoWidth": { "defaultValue": { value: "196" }, "description": "", "name": "logoWidth", "required": false, "type": { "name": "number" } }, "logoHeight": { "defaultValue": { value: "41" }, "description": "", "name": "logoHeight", "required": false, "type": { "name": "number" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/onboarding/src/components/WCPayCard/WCPayCard.tsx#WCPayCardHeader"] = { docgenInfo: WCPayCardHeader.__docgenInfo, name: "WCPayCardHeader", path: "../../packages/js/onboarding/src/components/WCPayCard/WCPayCard.tsx#WCPayCardHeader" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    WCPayCardBody.displayName = "WCPayCardBody";
    // @ts-ignore
    WCPayCardBody.__docgenInfo = { "description": "", "displayName": "WCPayCardBody", "props": { "description": { "defaultValue": null, "description": "", "name": "description", "required": true, "type": { "name": "string" } }, "heading": { "defaultValue": null, "description": "", "name": "heading", "required": true, "type": { "name": "string" } }, "onLinkClick": { "defaultValue": { value: "() => {}" }, "description": "", "name": "onLinkClick", "required": false, "type": { "name": "(() => void)" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/onboarding/src/components/WCPayCard/WCPayCard.tsx#WCPayCardBody"] = { docgenInfo: WCPayCardBody.__docgenInfo, name: "WCPayCardBody", path: "../../packages/js/onboarding/src/components/WCPayCard/WCPayCard.tsx#WCPayCardBody" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    WCPayCardFooter.displayName = "WCPayCardFooter";
    // @ts-ignore
    WCPayCardFooter.__docgenInfo = { "description": "", "displayName": "WCPayCardFooter", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/onboarding/src/components/WCPayCard/WCPayCard.tsx#WCPayCardFooter"] = { docgenInfo: WCPayCardFooter.__docgenInfo, name: "WCPayCardFooter", path: "../../packages/js/onboarding/src/components/WCPayCard/WCPayCard.tsx#WCPayCardFooter" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    WCPayCard.displayName = "WCPayCard";
    // @ts-ignore
    WCPayCard.__docgenInfo = { "description": "", "displayName": "WCPayCard", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/onboarding/src/components/WCPayCard/WCPayCard.tsx#WCPayCard"] = { docgenInfo: WCPayCard.__docgenInfo, name: "WCPayCard", path: "../../packages/js/onboarding/src/components/WCPayCard/WCPayCard.tsx#WCPayCard" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/components/WCPayCard/index.ts

;// CONCATENATED MODULE: ../../packages/js/onboarding/src/components/WCPayBanner/WCPayBannerImage.tsx

/**
 * External dependencies
 */

var WCPayBannerImage_WCPayBannerImage = function WCPayBannerImage() {
  return /*#__PURE__*/_jsxs("svg", {
    width: "294",
    height: "275",
    viewBox: "0 0 294 275",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/_jsxs("g", {
      clipPath: "url(#clip0_255_63852)",
      children: [/*#__PURE__*/_jsx("path", {
        d: "M0.5 10C0.5 4.47716 4.97715 0 10.5 0H725.5C731.023 0 735.5 4.47715 735.5 10V332H0.5V10Z",
        fill: "#F6F7F7"
      }), /*#__PURE__*/_jsx("circle", {
        cx: "17.5",
        cy: "14",
        r: "5",
        fill: "#D94F4F"
      }), /*#__PURE__*/_jsx("circle", {
        cx: "35.5",
        cy: "14",
        r: "5",
        fill: "#F0B849"
      }), /*#__PURE__*/_jsx("circle", {
        cx: "53.5",
        cy: "14",
        r: "5",
        fill: "#4AB866"
      }), /*#__PURE__*/_jsx("rect", {
        x: "3.5",
        y: "28",
        width: "287",
        height: "304",
        fill: "white"
      }), /*#__PURE__*/_jsx("line", {
        x1: "27.5",
        y1: "95.5",
        x2: "270.5",
        y2: "95.5",
        stroke: "#DCDCDE"
      }), /*#__PURE__*/_jsx("line", {
        x1: "49.5",
        y1: "157.5",
        x2: "253.5",
        y2: "157.5",
        stroke: "#DCDCDE"
      }), /*#__PURE__*/_jsx("line", {
        x1: "49.5",
        y1: "198.5",
        x2: "253.5",
        y2: "198.5",
        stroke: "#DCDCDE"
      }), /*#__PURE__*/_jsx("rect", {
        x: "28",
        y: "116.5",
        width: "242",
        height: "127",
        rx: "9.5",
        stroke: "#DCDCDE"
      }), /*#__PURE__*/_jsx("path", {
        d: "M50.3984 135.954V143H52.8154C54.9102 143 56.1406 141.696 56.1406 139.475C56.1406 137.258 54.9053 135.954 52.8154 135.954H50.3984ZM51.2773 136.745H52.7568C54.3193 136.745 55.2422 137.761 55.2422 139.484C55.2422 141.203 54.3291 142.209 52.7568 142.209H51.2773V136.745ZM61.043 141.638C60.8232 142.102 60.3643 142.351 59.6855 142.351C58.792 142.351 58.2109 141.691 58.167 140.651V140.612H61.9512V140.29C61.9512 138.654 61.0869 137.644 59.666 137.644C58.2207 137.644 57.293 138.718 57.293 140.373C57.293 142.038 58.2061 143.093 59.666 143.093C60.8184 143.093 61.6387 142.536 61.8828 141.638H61.043ZM59.6562 138.386C60.4912 138.386 61.0479 139.001 61.0674 139.934H58.167C58.2305 139.001 58.8164 138.386 59.6562 138.386ZM65.833 137.644C65.1152 137.644 64.4854 138.01 64.1484 138.615H64.0703V137.736H63.2695V144.758H64.1094V142.209H64.1875C64.4756 142.766 65.0811 143.093 65.833 143.093C67.1709 143.093 68.0449 142.014 68.0449 140.368C68.0449 138.713 67.1758 137.644 65.833 137.644ZM65.6328 142.336C64.6855 142.336 64.085 141.574 64.085 140.368C64.085 139.157 64.6855 138.4 65.6377 138.4C66.5996 138.4 67.1758 139.138 67.1758 140.368C67.1758 141.599 66.5996 142.336 65.6328 142.336ZM71.5264 143.093C73.0254 143.093 73.9531 142.058 73.9531 140.368C73.9531 138.674 73.0254 137.644 71.5264 137.644C70.0273 137.644 69.0996 138.674 69.0996 140.368C69.0996 142.058 70.0273 143.093 71.5264 143.093ZM71.5264 142.336C70.5303 142.336 69.9688 141.613 69.9688 140.368C69.9688 139.118 70.5303 138.4 71.5264 138.4C72.5225 138.4 73.084 139.118 73.084 140.368C73.084 141.613 72.5225 142.336 71.5264 142.336ZM75.1494 139.177C75.1494 139.938 75.5986 140.363 76.585 140.603L77.4883 140.822C78.0498 140.959 78.3232 141.203 78.3232 141.564C78.3232 142.048 77.8154 142.385 77.1074 142.385C76.4336 142.385 76.0137 142.102 75.8721 141.657H75.0078C75.1006 142.531 75.9062 143.093 77.0781 143.093C78.2744 143.093 79.1875 142.443 79.1875 141.501C79.1875 140.744 78.709 140.314 77.7178 140.075L76.9072 139.88C76.2871 139.729 75.9941 139.504 75.9941 139.143C75.9941 138.674 76.4824 138.356 77.1074 138.356C77.7422 138.356 78.1523 138.635 78.2646 139.055H79.0947C78.9824 138.19 78.2158 137.644 77.1123 137.644C75.9941 137.644 75.1494 138.303 75.1494 139.177ZM80.9453 136.721C81.2676 136.721 81.5312 136.457 81.5312 136.135C81.5312 135.812 81.2676 135.549 80.9453 135.549C80.623 135.549 80.3594 135.812 80.3594 136.135C80.3594 136.457 80.623 136.721 80.9453 136.721ZM80.5254 143H81.3652V137.736H80.5254V143ZM83.3184 136.374V137.736H82.4688V138.439H83.3184V141.633C83.3184 142.639 83.7529 143.039 84.8369 143.039C85.0029 143.039 85.1641 143.02 85.3301 142.99V142.282C85.1738 142.297 85.0908 142.302 84.9395 142.302C84.3926 142.302 84.1582 142.038 84.1582 141.418V138.439H85.3301V137.736H84.1582V136.374H83.3184Z",
        fill: "#2C3338"
      }), /*#__PURE__*/_jsx("path", {
        d: "M126.459 143.708H127.045V142.863C128.197 142.775 129.154 142.136 129.154 140.959C129.154 139.934 128.451 139.416 127.196 139.113L127.045 139.079V136.857C127.704 136.94 128.173 137.326 128.236 137.985H129.086C129.052 136.906 128.173 136.193 127.045 136.091V135.246H126.459V136.096C125.302 136.198 124.477 136.892 124.477 137.941C124.477 138.903 125.131 139.445 126.347 139.738L126.459 139.768V142.097C125.614 142.004 125.238 141.54 125.15 140.93H124.301C124.335 142.067 125.297 142.756 126.459 142.858V143.708ZM125.326 137.883C125.326 137.409 125.717 136.96 126.459 136.862V138.938C125.619 138.732 125.326 138.361 125.326 137.883ZM127.074 139.914C128.041 140.148 128.305 140.49 128.305 141.027C128.305 141.589 127.953 142.033 127.045 142.102V139.909L127.074 139.914ZM132.25 139.753H133.124C134.115 139.753 134.726 140.261 134.726 141.076C134.726 141.867 134.066 142.399 133.139 142.399C132.23 142.399 131.596 141.926 131.518 141.184H130.668C130.731 142.38 131.718 143.166 133.148 143.166C134.55 143.166 135.629 142.282 135.629 141.101C135.629 140.119 135.023 139.499 134.11 139.353V139.274C134.833 139.064 135.36 138.503 135.365 137.653C135.37 136.667 134.569 135.788 133.178 135.788C131.752 135.788 130.878 136.633 130.79 137.78H131.645C131.718 136.989 132.27 136.555 133.119 136.555C133.969 136.555 134.472 137.092 134.472 137.751C134.472 138.483 133.896 139.001 133.085 139.001H132.25V139.753ZM139.384 143.166C140.824 143.166 141.806 142.17 141.806 140.72C141.806 139.323 140.829 138.396 139.647 138.396C138.944 138.396 138.422 138.61 138.08 139.035H138.002L138.222 136.74H141.444V135.954H137.533L137.128 139.982H137.953C138.231 139.46 138.759 139.152 139.428 139.152C140.316 139.152 140.927 139.792 140.927 140.744C140.927 141.73 140.316 142.395 139.394 142.395C138.563 142.395 137.958 141.892 137.88 141.14H137.016C137.094 142.346 138.051 143.166 139.384 143.166ZM143.188 137.941H144.037C144.037 137.106 144.599 136.555 145.443 136.555C146.273 136.555 146.776 137.111 146.776 137.858C146.776 138.479 146.513 138.845 145.614 139.816L143.231 142.395V143H147.792V142.209H144.452V142.131L146.054 140.476C147.323 139.162 147.675 138.576 147.675 137.766C147.675 136.623 146.732 135.788 145.502 135.788C144.154 135.788 143.188 136.687 143.188 137.941ZM149.828 143.049C150.18 143.049 150.463 142.761 150.463 142.414C150.463 142.062 150.18 141.779 149.828 141.779C149.481 141.779 149.193 142.062 149.193 142.414C149.193 142.761 149.481 143.049 149.828 143.049ZM153.959 143.161C155.683 143.161 156.669 141.774 156.669 139.353C156.669 136.955 155.536 135.788 154.018 135.788C152.572 135.788 151.547 136.799 151.547 138.215C151.547 139.582 152.519 140.573 153.861 140.573C154.701 140.573 155.39 140.173 155.736 139.489H155.814C155.766 141.364 155.116 142.38 153.969 142.38C153.275 142.38 152.738 141.994 152.553 141.359H151.649C151.869 142.468 152.763 143.161 153.959 143.161ZM154.018 139.812C153.085 139.812 152.436 139.147 152.436 138.186C152.436 137.263 153.124 136.56 154.027 136.56C154.931 136.56 155.619 137.272 155.619 138.215C155.619 139.147 154.95 139.812 154.018 139.812ZM160.336 143.161C162.06 143.161 163.046 141.774 163.046 139.353C163.046 136.955 161.913 135.788 160.395 135.788C158.949 135.788 157.924 136.799 157.924 138.215C157.924 139.582 158.896 140.573 160.238 140.573C161.078 140.573 161.767 140.173 162.113 139.489H162.191C162.143 141.364 161.493 142.38 160.346 142.38C159.652 142.38 159.115 141.994 158.93 141.359H158.026C158.246 142.468 159.14 143.161 160.336 143.161ZM160.395 139.812C159.462 139.812 158.812 139.147 158.812 138.186C158.812 137.263 159.501 136.56 160.404 136.56C161.308 136.56 161.996 137.272 161.996 138.215C161.996 139.147 161.327 139.812 160.395 139.812Z",
        fill: "#2C3338"
      }), /*#__PURE__*/_jsx("rect", {
        x: "196",
        y: "132",
        width: "43",
        height: "14",
        rx: "7",
        fill: "#B8E6BF"
      }), /*#__PURE__*/_jsx("path", {
        d: "M209.719 136.363V142H210.422V139.988H211.84C212.898 139.988 213.652 139.242 213.652 138.188C213.652 137.113 212.914 136.363 211.848 136.363H209.719ZM210.422 136.988H211.664C212.48 136.988 212.93 137.414 212.93 138.188C212.93 138.934 212.465 139.363 211.664 139.363H210.422V136.988ZM215.734 142.074C216.297 142.074 216.758 141.828 217.031 141.379H217.094V142H217.734V139.117C217.734 138.242 217.16 137.715 216.133 137.715C215.234 137.715 214.57 138.16 214.48 138.836H215.16C215.254 138.504 215.605 138.312 216.109 138.312C216.738 138.312 217.062 138.598 217.062 139.117V139.5L215.848 139.574C214.867 139.633 214.312 140.066 214.312 140.82C214.312 141.59 214.918 142.074 215.734 142.074ZM215.859 141.484C215.371 141.484 215.008 141.234 215.008 140.805C215.008 140.383 215.289 140.16 215.93 140.117L217.062 140.043V140.43C217.062 141.031 216.551 141.484 215.859 141.484ZM219.328 136.977C219.586 136.977 219.797 136.766 219.797 136.508C219.797 136.25 219.586 136.039 219.328 136.039C219.07 136.039 218.859 136.25 218.859 136.508C218.859 136.766 219.07 136.977 219.328 136.977ZM218.992 142H219.664V137.789H218.992V142ZM222.504 142.074C223.086 142.074 223.586 141.797 223.852 141.328H223.914V142H224.555V136.117H223.883V138.453H223.824C223.586 137.992 223.09 137.715 222.504 137.715C221.434 137.715 220.734 138.574 220.734 139.895C220.734 141.219 221.426 142.074 222.504 142.074ZM222.66 138.32C223.422 138.32 223.898 138.93 223.898 139.895C223.898 140.867 223.426 141.469 222.66 141.469C221.891 141.469 221.43 140.879 221.43 139.895C221.43 138.914 221.895 138.32 222.66 138.32Z",
        fill: "#00450C"
      }), /*#__PURE__*/_jsx("rect", {
        x: "192.5",
        y: "173",
        width: "50",
        height: "10",
        rx: "5",
        fill: "#B8E6BF"
      }), /*#__PURE__*/_jsx("rect", {
        x: "49.5",
        y: "174",
        width: "50",
        height: "8",
        rx: "2",
        fill: "#DCDCDE"
      }), /*#__PURE__*/_jsx("rect", {
        x: "132.5",
        y: "170",
        width: "22.7796",
        height: "16",
        rx: "4",
        fill: "#F6F7F7"
      }), /*#__PURE__*/_jsx("path", {
        d: "M143.507 182.856C144.227 182.856 144.869 182.747 145.435 182.528C146.004 182.305 146.451 181.981 146.774 181.558C147.103 181.129 147.267 180.612 147.267 180.006V179.992C147.267 179.24 147.025 178.659 146.542 178.249C146.063 177.839 145.357 177.529 144.423 177.319L143.404 177.094C142.853 176.966 142.454 176.809 142.208 176.622C141.962 176.435 141.839 176.201 141.839 175.918V175.904C141.839 175.695 141.903 175.508 142.03 175.344C142.158 175.18 142.347 175.05 142.598 174.954C142.848 174.858 143.158 174.811 143.527 174.811C143.855 174.811 144.147 174.861 144.402 174.961C144.658 175.061 144.865 175.209 145.024 175.405C145.184 175.597 145.28 175.836 145.312 176.123L145.318 176.137L147.13 176.13L147.137 176.123C147.114 175.544 146.948 175.043 146.638 174.619C146.332 174.191 145.911 173.86 145.373 173.628C144.84 173.396 144.215 173.279 143.5 173.279C142.816 173.279 142.206 173.391 141.668 173.614C141.13 173.833 140.706 174.15 140.396 174.564C140.087 174.979 139.932 175.476 139.932 176.055V176.068C139.932 176.802 140.169 177.381 140.643 177.805C141.117 178.229 141.8 178.541 142.693 178.741L143.712 178.974C144.332 179.11 144.76 179.27 144.997 179.452C145.239 179.63 145.359 179.878 145.359 180.197V180.211C145.359 180.439 145.291 180.637 145.154 180.806C145.022 180.974 144.822 181.104 144.553 181.195C144.284 181.282 143.944 181.325 143.534 181.325C143.142 181.325 142.812 181.275 142.543 181.175C142.274 181.075 142.062 180.931 141.907 180.744C141.757 180.553 141.659 180.327 141.613 180.067V180.061H139.788L139.781 180.067C139.804 180.664 139.977 181.17 140.301 181.585C140.629 182 141.069 182.316 141.62 182.535C142.176 182.749 142.805 182.856 143.507 182.856ZM143.151 183.971H143.938V172.145H143.151V183.971Z",
        fill: "#C3C4C7"
      }), /*#__PURE__*/_jsx("rect", {
        x: "192.5",
        y: "214",
        width: "50",
        height: "10",
        rx: "5",
        fill: "#B8E6BF"
      }), /*#__PURE__*/_jsx("rect", {
        x: "49.5",
        y: "215",
        width: "50",
        height: "8",
        rx: "2",
        fill: "#DCDCDE"
      }), /*#__PURE__*/_jsx("rect", {
        x: "132.5",
        y: "211",
        width: "22.7796",
        height: "16",
        rx: "4",
        fill: "#F6F7F7"
      }), /*#__PURE__*/_jsx("path", {
        d: "M145.879 223.856C146.143 223.856 146.403 223.847 146.658 223.829C146.913 223.806 147.13 223.774 147.308 223.733V222.072C147.139 222.104 146.927 222.129 146.672 222.147C146.417 222.161 146.177 222.168 145.954 222.168C145.444 222.168 144.983 222.106 144.573 221.983C144.168 221.856 143.819 221.664 143.527 221.409C143.24 221.149 143.019 220.826 142.864 220.438C142.709 220.051 142.632 219.595 142.632 219.071V219.064C142.632 218.545 142.707 218.091 142.857 217.704C143.012 217.317 143.233 216.995 143.521 216.74C143.812 216.48 144.159 216.287 144.56 216.159C144.961 216.027 145.41 215.961 145.906 215.961C146.148 215.961 146.392 215.972 146.638 215.995C146.884 216.018 147.098 216.048 147.28 216.084V214.437C147.103 214.386 146.879 214.348 146.61 214.32C146.341 214.293 146.082 214.279 145.831 214.279C145.065 214.279 144.364 214.38 143.726 214.58C143.092 214.781 142.543 215.081 142.078 215.482C141.613 215.883 141.253 216.382 140.998 216.979C140.747 217.576 140.622 218.269 140.622 219.058V219.064C140.622 219.857 140.747 220.555 140.998 221.156C141.253 221.753 141.613 222.252 142.078 222.653C142.548 223.05 143.104 223.351 143.746 223.556C144.389 223.756 145.1 223.856 145.879 223.856ZM139.46 220.425H146.542V219.639H139.46V220.425ZM139.46 218.531H146.542V217.745H139.46V218.531Z",
        fill: "#C3C4C7"
      }), /*#__PURE__*/_jsx("path", {
        fill: "#7F54B3",
        fillRule: "evenodd",
        d: "M33.24 50.42H62.2a3.32 3.32 0 0 1 3.31 3.31v11.05a3.32 3.32 0 0 1-3.3 3.3H51.8l1.43 3.5-6.28-3.5H33.23a3.32 3.32 0 0 1-3.3-3.3V53.73c0-1.82 1.48-3.3 3.31-3.3Z",
        clipRule: "evenodd"
      }), /*#__PURE__*/_jsx("path", {
        fill: "#fff",
        d: "M31.72 53.42c.23-.27.55-.44.91-.45.74-.05 1.16.3 1.27 1.04.45 3.03.94 5.61 1.46 7.73l3.19-6.06c.3-.55.65-.84 1.1-.87.63-.04 1.03.36 1.19 1.23.3 1.7.76 3.36 1.37 4.96.39-3.68 1.02-6.36 1.92-8 .18-.38.54-.62.96-.64.33-.03.66.07.91.29.26.2.42.5.44.84.02.24-.03.49-.14.7-.56 1.05-1.03 2.8-1.4 5.24-.36 2.36-.5 4.22-.4 5.54.03.33-.03.66-.17.95-.14.3-.45.51-.78.53-.38.03-.76-.15-1.14-.53-1.36-1.39-2.43-3.45-3.22-6.19l-2.1 4.2c-.85 1.64-1.59 2.47-2.2 2.52-.39.03-.72-.3-1-1-.74-1.9-1.54-5.57-2.4-11.03-.07-.35.01-.72.23-1ZM62.96 55.7a3.4 3.4 0 0 0-2.32-1.68 3.77 3.77 0 0 0-.8-.08c-1.38 0-2.52.72-3.4 2.17a7.67 7.67 0 0 0-1.13 4.1c0 1.11.23 2.07.7 2.87a3.4 3.4 0 0 0 2.32 1.69c.26.05.52.08.79.08 1.4 0 2.54-.72 3.41-2.17a7.74 7.74 0 0 0 1.13-4.12c0-1.11-.24-2.06-.7-2.85Zm-1.83 4.04c-.2.95-.57 1.67-1.11 2.16-.42.38-.82.53-1.18.47-.35-.08-.64-.39-.85-.94a3.74 3.74 0 0 1-.26-1.33 4.78 4.78 0 0 1 .87-2.8c.49-.7 1-1 1.52-.89.36.08.64.39.86.94.16.43.25.87.25 1.32 0 .36-.03.72-.1 1.07ZM53.86 55.7a3.4 3.4 0 0 0-2.33-1.68 3.76 3.76 0 0 0-.79-.08c-1.39 0-2.53.72-3.41 2.17a7.67 7.67 0 0 0-1.13 4.1c0 1.11.23 2.07.7 2.87a3.4 3.4 0 0 0 2.32 1.69c.26.05.52.08.79.08 1.4 0 2.54-.72 3.41-2.17a7.84 7.84 0 0 0 1.14-4.12c0-1.12-.23-2.07-.7-2.86Zm-1.84 4.04a3.8 3.8 0 0 1-1.1 2.16c-.43.38-.83.53-1.18.47-.36-.08-.64-.39-.86-.94a3.74 3.74 0 0 1-.25-1.33c0-.36.03-.71.1-1.06.14-.62.4-1.2.77-1.73.48-.7.99-1 1.51-.9.36.08.64.39.86.94.16.43.26.87.26 1.32 0 .36-.04.72-.1 1.07Z"
      }), /*#__PURE__*/_jsx("path", {
        fill: "#000",
        d: "M68.52 54.4h3.36c1.19 0 2.14.27 2.85.84a2.7 2.7 0 0 1 1.07 2.23 2.7 2.7 0 0 1-1.09 2.27c-.72.55-1.73.83-3.02.83h-.47v3.8H68.5v-9.98h.02Zm2.71 1.9v2.35c.61 0 1.07-.1 1.35-.29.29-.19.43-.48.43-.87 0-.44-.14-.74-.42-.9a2.64 2.64 0 0 0-1.36-.29ZM84.24 64.36h-2.82l-.46-1.66h-2.87l-.47 1.66h-2.77l3.17-9.97h3.05l3.17 9.97Zm-3.8-3.46c-.4-1.48-.71-2.9-.91-4.23h-.04c-.21 1.38-.52 2.8-.9 4.23h1.85ZM82.62 54.4h3.04a55.3 55.3 0 0 1 1.47 3.3h.04c.3-.8.79-1.9 1.45-3.3h3.11l-3.2 5.45v4.5h-2.75v-4.5l-3.16-5.46ZM92.58 54.4h3.43c.5 2.15.88 3.99 1.16 5.54l.3-1.54c.11-.6.24-1.19.38-1.76l.53-2.24h3.5l1.36 9.97h-2.7l-.72-6.86-1.67 6.86H96.3l-1.75-6.86-.7 6.86h-2.57l1.29-9.98ZM104.06 54.4h5.5v2.1h-2.78v1.84h2.4v2.07h-2.4v1.82h2.79v2.12h-5.51V54.4ZM110.58 54.4h2.73l3.46 5.74-.1-1.07v-4.68h2.72v9.97h-2.78l-3.38-5.66.07 1.24v4.42h-2.71V54.4h-.01ZM120.1 54.4h6.49v2.27h-1.87v7.7h-2.75v-7.7h-1.85v-2.28h-.01ZM127.7 64.18v-2.33c.86.42 1.58.63 2.17.63.34 0 .61-.07.81-.23.2-.16.3-.37.3-.62 0-.2-.08-.39-.24-.57a4.05 4.05 0 0 0-.82-.63 9 9 0 0 1-2.04-1.66 2.65 2.65 0 0 1-.63-1.73c0-.86.33-1.56.98-2.1a3.8 3.8 0 0 1 2.53-.82c.76 0 1.52.14 2.27.41v2.23a5.08 5.08 0 0 0-1.96-.55c-.34 0-.6.06-.8.2-.19.14-.28.33-.28.57 0 .41.45.88 1.35 1.4.54.32 1.08.75 1.64 1.32a2.68 2.68 0 0 1-.26 4.08c-.72.56-1.63.85-2.74.85-.77-.01-1.53-.16-2.28-.45Z"
      })]
    }), /*#__PURE__*/_jsxs("defs", {
      children: [/*#__PURE__*/_jsx("clipPath", {
        id: "clip0_255_63852",
        children: /*#__PURE__*/_jsx("path", {
          d: "M0.5 0H283.5C289.023 0 293.5 4.47715 293.5 10V275H0.5V0Z",
          fill: "white"
        })
      }), /*#__PURE__*/_jsx("clipPath", {
        id: "clip1_255_63852",
        children: /*#__PURE__*/_jsx("rect", {
          width: "120",
          height: "39.7959",
          fill: "white",
          transform: "translate(27.5 45)"
        })
      })]
    })]
  });
};
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/components/WCPayBanner/WCPayBannerImageCut.tsx

/**
 * External dependencies
 */

var WCPayBannerImageCut = function WCPayBannerImageCut() {
  return /*#__PURE__*/_jsxs("svg", {
    width: "310",
    height: "282",
    viewBox: "0 0 310 282",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/_jsxs("g", {
      filter: "url(#filter0_d_5851_4204)",
      children: [/*#__PURE__*/_jsx("path", {
        d: "M16 30C16 24.4772 20.4772 20 26 20H309V48H16V30Z",
        fill: "#F2EDFF"
      }), /*#__PURE__*/_jsx("path", {
        d: "M16 48H309V260H26C20.4771 260 16 255.523 16 250V48Z",
        fill: "white"
      })]
    }), /*#__PURE__*/_jsx("path", {
      d: "M43.5 119C43.5 113.753 47.7533 109.5 53 109.5H309.5V236.5H53C47.7533 236.5 43.5 232.247 43.5 227V119Z",
      fill: "white",
      stroke: "#DCDCDE"
    }), /*#__PURE__*/_jsx("path", {
      d: "M65.8545 134V126.954H68.6279C70.7227 126.954 71.9336 128.219 71.9336 130.426V130.436C71.9336 132.711 70.7373 134 68.6279 134H65.8545ZM67.3291 132.784H68.3936C69.6973 132.784 70.4297 131.964 70.4297 130.46V130.45C70.4297 129 69.6729 128.17 68.3936 128.17H67.3291V132.784ZM75.5566 134.112C73.9209 134.112 72.9297 133.043 72.9297 131.319V131.314C72.9297 129.605 73.9307 128.507 75.498 128.507C77.0654 128.507 78.042 129.581 78.042 131.207V131.651H74.3408C74.3555 132.535 74.8291 133.048 75.5859 133.048C76.2109 133.048 76.5576 132.716 76.6553 132.511L76.6699 132.481H77.998L77.9883 132.53C77.8223 133.204 77.1289 134.112 75.5566 134.112ZM75.5225 129.576C74.9023 129.576 74.4434 129.996 74.3555 130.758H76.6748C76.5869 129.977 76.1426 129.576 75.5225 129.576ZM79.209 135.782V128.624H80.6348V129.454H80.7227C81.001 128.878 81.5723 128.536 82.334 128.536C83.6768 128.536 84.5166 129.591 84.5166 131.305V131.314C84.5166 133.043 83.6963 134.083 82.334 134.083C81.5967 134.083 80.9961 133.727 80.7227 133.141H80.6348V135.782H79.209ZM81.8457 132.901C82.5977 132.901 83.0664 132.301 83.0664 131.314V131.305C83.0664 130.318 82.6025 129.718 81.8457 129.718C81.0938 129.718 80.6201 130.318 80.6201 131.305V131.314C80.6201 132.301 81.0986 132.901 81.8457 132.901ZM88.0713 134.112C86.416 134.112 85.4199 133.062 85.4199 131.314V131.305C85.4199 129.571 86.4307 128.507 88.0713 128.507C89.7119 128.507 90.7227 129.566 90.7227 131.305V131.314C90.7227 133.067 89.7266 134.112 88.0713 134.112ZM88.0713 132.994C88.8281 132.994 89.2627 132.374 89.2627 131.314V131.305C89.2627 130.255 88.8232 129.625 88.0713 129.625C87.3145 129.625 86.8799 130.255 86.8799 131.305V131.314C86.8799 132.374 87.3096 132.994 88.0713 132.994ZM94.0234 134.112C92.5635 134.112 91.7334 133.458 91.6309 132.535L91.626 132.516H93.0273L93.0371 132.535C93.1494 132.867 93.4766 133.106 94.0381 133.106C94.585 133.106 94.9561 132.872 94.9561 132.516V132.506C94.9561 132.218 94.7412 132.037 94.1943 131.915L93.2959 131.725C92.2705 131.505 91.7627 131.002 91.7627 130.196V130.191C91.7627 129.181 92.6611 128.507 94.0039 128.507C95.415 128.507 96.1963 129.21 96.2549 130.074V130.094H94.9316L94.9268 130.069C94.8486 129.781 94.5312 129.513 93.999 129.513C93.5059 129.513 93.1543 129.742 93.1543 130.104V130.108C93.1543 130.396 93.3545 130.562 93.9111 130.685L94.8047 130.875C95.8789 131.104 96.3818 131.554 96.3818 132.35V132.354C96.3818 133.419 95.4004 134.112 94.0234 134.112ZM98.2764 127.799C97.8369 127.799 97.4707 127.447 97.4707 127.008C97.4707 126.563 97.8369 126.212 98.2764 126.212C98.7158 126.212 99.0771 126.563 99.0771 127.008C99.0771 127.447 98.7158 127.799 98.2764 127.799ZM97.5586 134V128.624H98.9844V134H97.5586ZM102.651 134.02C101.343 134.02 100.815 133.595 100.815 132.55V129.698H99.9854V128.624H100.815V127.34H102.256V128.624H103.364V129.698H102.256V132.223C102.256 132.706 102.461 132.921 102.944 132.921C103.13 132.921 103.228 132.911 103.364 132.896V133.956C103.188 133.99 102.925 134.02 102.651 134.02Z",
      fill: "#2C3338"
    }), /*#__PURE__*/_jsx("path", {
      d: "M142.11 134.693V133.893C140.738 133.814 139.742 133.121 139.703 131.905L139.708 131.9H141.012V131.905C141.095 132.403 141.441 132.726 142.11 132.789V131.036L141.783 130.958C140.509 130.67 139.811 130.099 139.811 129.049V129.039C139.811 127.877 140.768 127.145 142.11 127.066V126.246H142.672V127.066C144.024 127.169 144.908 127.94 144.957 129.088L144.952 129.093L143.658 129.098L143.653 129.088C143.585 128.565 143.219 128.253 142.672 128.17V129.869L143.019 129.942C144.352 130.245 145.05 130.782 145.05 131.852V131.861C145.05 133.077 144.059 133.795 142.672 133.888V134.693H142.11ZM141.173 128.941C141.173 129.317 141.451 129.562 142.11 129.737V128.165C141.495 128.233 141.173 128.536 141.173 128.932V128.941ZM143.688 131.998C143.688 131.573 143.429 131.354 142.672 131.163V132.794C143.351 132.73 143.688 132.447 143.688 132.008V131.998ZM149.063 134.156C147.472 134.156 146.422 133.302 146.324 132.042L146.319 131.979H147.73L147.735 132.032C147.799 132.579 148.302 132.97 149.063 132.97C149.815 132.97 150.309 132.55 150.309 131.954V131.944C150.309 131.271 149.806 130.899 148.951 130.899H148.146V129.85H148.932C149.674 129.85 150.152 129.459 150.152 128.888V128.878C150.152 128.292 149.747 127.931 149.054 127.931C148.36 127.931 147.896 128.307 147.838 128.893L147.833 128.937H146.476L146.48 128.878C146.583 127.618 147.574 126.798 149.054 126.798C150.567 126.798 151.544 127.56 151.544 128.683V128.692C151.544 129.571 150.899 130.143 150.074 130.313V130.343C151.124 130.44 151.808 131.046 151.808 132.003V132.013C151.808 133.292 150.709 134.156 149.063 134.156ZM155.792 134.181C154.283 134.181 153.287 133.282 153.204 132.105L153.199 132.037H154.537L154.547 132.071C154.649 132.589 155.133 133.004 155.797 133.004C156.554 133.004 157.081 132.472 157.081 131.715V131.705C157.081 130.953 156.549 130.431 155.802 130.431C155.445 130.431 155.143 130.533 154.908 130.733C154.776 130.841 154.659 130.973 154.581 131.124H153.316L153.644 126.954H158.048V128.126H154.791L154.615 130.133H154.703C154.986 129.659 155.533 129.366 156.207 129.366C157.521 129.366 158.468 130.333 158.468 131.676V131.686C158.468 133.17 157.374 134.181 155.792 134.181ZM159.762 134V133.009L162.032 130.768C163.023 129.806 163.292 129.449 163.292 128.956V128.941C163.292 128.341 162.882 127.921 162.208 127.921C161.52 127.921 161.046 128.38 161.046 129.049V129.073H159.684L159.679 129.054C159.679 127.701 160.733 126.773 162.276 126.773C163.727 126.773 164.742 127.604 164.742 128.819V128.834C164.742 129.635 164.327 130.299 163.043 131.485L161.739 132.701V132.813H164.845V134H159.762ZM167.145 134.122C166.646 134.122 166.285 133.756 166.285 133.272C166.285 132.789 166.646 132.428 167.145 132.428C167.647 132.428 168.004 132.789 168.004 133.272C168.004 133.756 167.647 134.122 167.145 134.122ZM171.783 126.769C173.414 126.769 174.693 127.931 174.693 130.406V130.416C174.693 132.774 173.58 134.176 171.773 134.176C170.411 134.176 169.4 133.37 169.181 132.267L169.171 132.223H170.616L170.631 132.267C170.802 132.706 171.202 133.004 171.769 133.004C172.789 133.004 173.238 132.003 173.292 130.719C173.292 130.67 173.292 130.616 173.292 130.562H173.194C172.94 131.104 172.354 131.593 171.378 131.593C170.006 131.593 169.083 130.616 169.083 129.283V129.273C169.083 127.833 170.196 126.769 171.783 126.769ZM171.783 130.504C172.511 130.504 173.072 129.986 173.072 129.259V129.249C173.072 128.512 172.511 127.94 171.793 127.94C171.08 127.94 170.509 128.502 170.509 129.22V129.229C170.509 129.972 171.046 130.504 171.783 130.504ZM178.619 126.769C180.25 126.769 181.529 127.931 181.529 130.406V130.416C181.529 132.774 180.416 134.176 178.609 134.176C177.247 134.176 176.236 133.37 176.017 132.267L176.007 132.223H177.452L177.467 132.267C177.638 132.706 178.038 133.004 178.604 133.004C179.625 133.004 180.074 132.003 180.128 130.719C180.128 130.67 180.128 130.616 180.128 130.562H180.03C179.776 131.104 179.19 131.593 178.214 131.593C176.842 131.593 175.919 130.616 175.919 129.283V129.273C175.919 127.833 177.032 126.769 178.619 126.769ZM178.619 130.504C179.347 130.504 179.908 129.986 179.908 129.259V129.249C179.908 128.512 179.347 127.94 178.629 127.94C177.916 127.94 177.345 128.502 177.345 129.22V129.229C177.345 129.972 177.882 130.504 178.619 130.504Z",
      fill: "#2C3338"
    }), /*#__PURE__*/_jsx("rect", {
      x: "211.5",
      y: "123",
      width: "44",
      height: "14",
      rx: "7",
      fill: "#B8E6BF"
    }), /*#__PURE__*/_jsx("path", {
      d: "M225.184 133V127.363H227.508C228.695 127.363 229.488 128.129 229.488 129.289V129.297C229.488 130.457 228.695 131.223 227.508 131.223H226.363V133H225.184ZM227.219 128.297H226.363V130.301H227.219C227.895 130.301 228.293 129.941 228.293 129.301V129.293C228.293 128.652 227.895 128.297 227.219 128.297ZM231.477 133.066C230.656 133.066 230.074 132.559 230.074 131.777V131.77C230.074 130.996 230.672 130.543 231.742 130.48L232.781 130.418V130.062C232.781 129.691 232.527 129.48 232.059 129.48C231.648 129.48 231.387 129.625 231.297 129.879L231.289 129.895H230.234L230.238 129.859C230.328 129.105 231.039 128.605 232.121 128.605C233.262 128.605 233.906 129.145 233.906 130.062V133H232.781V132.43H232.711C232.492 132.828 232.039 133.066 231.477 133.066ZM231.188 131.707C231.188 132.035 231.465 132.234 231.859 132.234C232.387 132.234 232.781 131.887 232.781 131.434V131.117L231.914 131.172C231.426 131.203 231.188 131.387 231.188 131.699V131.707ZM235.605 128.039C235.254 128.039 234.961 127.758 234.961 127.406C234.961 127.051 235.254 126.77 235.605 126.77C235.957 126.77 236.246 127.051 236.246 127.406C236.246 127.758 235.957 128.039 235.605 128.039ZM235.031 133V128.699H236.172V133H235.031ZM238.855 133.066C237.781 133.066 237.109 132.227 237.109 130.852V130.844C237.109 129.461 237.766 128.629 238.855 128.629C239.445 128.629 239.926 128.918 240.141 129.387H240.211V127.055H241.352V133H240.211V132.332H240.141C239.918 132.797 239.461 133.066 238.855 133.066ZM239.242 132.121C239.848 132.121 240.223 131.645 240.223 130.855V130.848C240.223 130.059 239.844 129.574 239.242 129.574C238.641 129.574 238.27 130.059 238.27 130.844V130.852C238.27 131.645 238.641 132.121 239.242 132.121Z",
      fill: "#00450C"
    }), /*#__PURE__*/_jsx("rect", {
      x: "208",
      y: "165",
      width: "50",
      height: "8",
      rx: "4",
      fill: "#B8E6BF"
    }), /*#__PURE__*/_jsx("rect", {
      x: "65",
      y: "165",
      width: "50",
      height: "8",
      rx: "4",
      fill: "#DCDCDE"
    }), /*#__PURE__*/_jsx("rect", {
      x: "148",
      y: "161",
      width: "22.7796",
      height: "16",
      rx: "4",
      fill: "#F2EDFF"
    }), /*#__PURE__*/_jsx("path", {
      d: "M159.007 173.856C158.305 173.856 157.676 173.749 157.12 173.535C156.569 173.316 156.129 173 155.801 172.585C155.477 172.17 155.304 171.664 155.281 171.067L155.288 171.061H157.113V171.067C157.159 171.327 157.257 171.553 157.407 171.744C157.562 171.931 157.774 172.075 158.043 172.175C158.312 172.275 158.642 172.325 159.034 172.325C159.444 172.325 159.784 172.282 160.053 172.195C160.322 172.104 160.522 171.974 160.654 171.806C160.791 171.637 160.859 171.439 160.859 171.211V171.197C160.859 170.878 160.739 170.63 160.497 170.452C160.26 170.27 159.832 170.11 159.212 169.974L158.193 169.741C157.601 169.609 157.1 169.427 156.689 169.194C156.279 168.962 155.967 168.673 155.753 168.326C155.539 167.975 155.432 167.556 155.432 167.068V167.055C155.432 166.476 155.587 165.979 155.896 165.564C156.206 165.15 156.63 164.833 157.168 164.614C157.706 164.391 158.316 164.279 159 164.279C159.715 164.279 160.34 164.396 160.873 164.628C161.411 164.86 161.832 165.191 162.138 165.619C162.448 166.043 162.614 166.544 162.637 167.123L162.63 167.13L160.818 167.137L160.812 167.123C160.78 166.836 160.684 166.597 160.524 166.405C160.365 166.209 160.158 166.061 159.902 165.961C159.647 165.861 159.355 165.811 159.027 165.811C158.658 165.811 158.348 165.858 158.098 165.954C157.847 166.05 157.658 166.18 157.53 166.344C157.403 166.508 157.339 166.695 157.339 166.904V166.918C157.339 167.105 157.394 167.271 157.503 167.417C157.612 167.563 157.781 167.69 158.009 167.8C158.237 167.909 158.535 168.007 158.904 168.094L159.923 168.319C160.857 168.529 161.563 168.839 162.042 169.249C162.525 169.659 162.767 170.24 162.767 170.992V171.006C162.767 171.612 162.603 172.129 162.274 172.558C161.951 172.981 161.504 173.305 160.935 173.528C160.369 173.747 159.727 173.856 159.007 173.856ZM158.651 174.971V163.145H159.438V174.971H158.651Z",
      fill: "#674399"
    }), /*#__PURE__*/_jsx("rect", {
      x: "65",
      y: "206",
      width: "50",
      height: "8",
      rx: "4",
      fill: "#DCDCDE"
    }), /*#__PURE__*/_jsx("rect", {
      x: "208",
      y: "206",
      width: "50",
      height: "8",
      rx: "4",
      fill: "#B8E6BF"
    }), /*#__PURE__*/_jsx("rect", {
      x: "148",
      y: "202",
      width: "22.7796",
      height: "16",
      rx: "4",
      fill: "#F2EDFF"
    }), /*#__PURE__*/_jsx("path", {
      d: "M161.379 214.856C160.6 214.856 159.889 214.756 159.246 214.556C158.604 214.351 158.048 214.05 157.578 213.653C157.113 213.252 156.753 212.753 156.498 212.156C156.247 211.555 156.122 210.857 156.122 210.064V210.058C156.122 209.269 156.247 208.576 156.498 207.979C156.753 207.382 157.113 206.883 157.578 206.482C158.043 206.081 158.592 205.781 159.226 205.58C159.864 205.38 160.565 205.279 161.331 205.279C161.582 205.279 161.841 205.293 162.11 205.32C162.379 205.348 162.603 205.386 162.78 205.437V207.084C162.598 207.048 162.384 207.018 162.138 206.995C161.892 206.972 161.648 206.961 161.406 206.961C160.91 206.961 160.461 207.027 160.06 207.159C159.659 207.287 159.312 207.48 159.021 207.74C158.733 207.995 158.512 208.317 158.357 208.704C158.207 209.091 158.132 209.545 158.132 210.064V210.071C158.132 210.595 158.209 211.051 158.364 211.438C158.519 211.826 158.74 212.149 159.027 212.409C159.319 212.664 159.668 212.856 160.073 212.983C160.483 213.106 160.944 213.168 161.454 213.168C161.677 213.168 161.917 213.161 162.172 213.147C162.427 213.129 162.639 213.104 162.808 213.072V214.733C162.63 214.774 162.413 214.806 162.158 214.829C161.903 214.847 161.643 214.856 161.379 214.856ZM154.96 211.425V210.639H162.042V211.425H154.96ZM154.96 209.531V208.745H162.042V209.531H154.96Z",
      fill: "#674399"
    }), /*#__PURE__*/_jsx("path", {
      d: "M65 148.5H309",
      stroke: "#DCDCDE"
    }), /*#__PURE__*/_jsx("path", {
      d: "M65 189.5H309",
      stroke: "#DCDCDE"
    }), /*#__PURE__*/_jsx("path", {
      d: "M84.1484 75.0801H87.5495C88.7499 75.0801 89.7121 75.3659 90.4362 75.9375C91.1602 76.5091 91.5222 77.2617 91.5222 78.1954C91.5222 79.1766 91.1507 79.9483 90.4171 80.5008C89.6835 81.0534 88.6642 81.3392 87.359 81.3392H86.8827V85.1785H84.1294V75.0801H84.1484ZM86.8922 77.014V79.3957C87.5114 79.3862 87.9687 79.2909 88.2545 79.1004C88.5499 78.9099 88.6928 78.6145 88.6928 78.2144C88.6928 77.7762 88.5499 77.4713 88.264 77.2998C87.9878 77.1188 87.5305 77.0235 86.8922 77.014Z",
      fill: "black"
    }), /*#__PURE__*/_jsx("path", {
      d: "M100.068 85.1785H97.2098L96.743 83.4923H93.8373L93.361 85.1785H90.5601L93.7706 75.0801H96.8573L100.068 85.1785ZM96.219 81.6727C95.8094 80.1674 95.495 78.7384 95.2949 77.3856H95.2568C95.0377 78.786 94.7328 80.215 94.3422 81.6727H96.219Z",
      fill: "black"
    }), /*#__PURE__*/_jsx("path", {
      d: "M98.4194 75.0801H101.506C102.192 76.5282 102.687 77.6523 102.992 78.4335H103.03C103.335 77.6237 103.831 76.5091 104.498 75.0801H107.651L104.402 80.6057V85.169H101.62V80.6057L98.4194 75.0801Z",
      fill: "black"
    }), /*#__PURE__*/_jsx("path", {
      d: "M108.508 75.0801H111.986C112.481 77.2617 112.872 79.129 113.157 80.7009L113.453 79.1385C113.577 78.5288 113.7 77.9381 113.843 77.357L114.377 75.0896H117.921L119.302 85.1881H116.578L115.844 78.243L114.148 85.1881H112.29L110.509 78.2335L109.804 85.1881H107.203L108.508 75.0801Z",
      fill: "black"
    }), /*#__PURE__*/_jsx("path", {
      d: "M120.131 75.0801H125.695V77.2236H122.885V79.0814H125.323V81.1773H122.885V83.0159H125.714V85.169H120.131V75.0801Z",
      fill: "black"
    }), /*#__PURE__*/_jsx("path", {
      d: "M126.733 75.0801H129.506L133.002 80.901L132.907 79.8149V75.0801H135.66V85.1785H132.84L129.42 79.4434L129.496 80.7009V85.1785H126.743V75.0801H126.733Z",
      fill: "black"
    }), /*#__PURE__*/_jsx("path", {
      d: "M136.384 75.0801H142.948V77.3856H141.052V85.1785H138.271V77.3856H136.394V75.0801H136.384Z",
      fill: "black"
    }), /*#__PURE__*/_jsx("path", {
      d: "M144.072 84.9879V82.6348C144.939 83.054 145.673 83.2731 146.273 83.2731C146.616 83.2731 146.892 83.1969 147.092 83.0349C147.292 82.873 147.387 82.6634 147.387 82.4061C147.387 82.2061 147.311 82.0155 147.149 81.8345C146.987 81.6535 146.711 81.4439 146.32 81.1962C145.368 80.5865 144.682 80.0244 144.253 79.51C143.824 78.986 143.615 78.4049 143.615 77.7666C143.615 76.8901 143.948 76.1851 144.606 75.6325C145.263 75.08 146.12 74.8037 147.168 74.8037C147.94 74.8037 148.712 74.9466 149.474 75.2229V77.4808C148.654 77.1092 147.997 76.9187 147.483 76.9187C147.14 76.9187 146.873 76.9854 146.682 77.1283C146.482 77.2712 146.387 77.4617 146.387 77.6999C146.387 78.1191 146.844 78.5954 147.759 79.1289C148.302 79.4433 148.855 79.8815 149.417 80.4531C149.979 81.0247 150.255 81.6726 150.255 82.4252C150.255 83.3017 149.893 84.0162 149.159 84.5878C148.426 85.1594 147.502 85.4452 146.378 85.4452C145.596 85.4357 144.834 85.2832 144.072 84.9879Z",
      fill: "black"
    }), /*#__PURE__*/_jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M48.4225 71.0597H77.7367C79.5849 71.0597 81.0901 72.5649 81.0901 74.4131V85.5977C81.0901 87.4459 79.5849 88.9511 77.7367 88.9511H67.219L68.6576 92.4856L62.3032 88.9511H48.413C46.5648 88.9511 45.0596 87.4459 45.0596 85.5977V74.4131C45.0596 72.5649 46.5648 71.0597 48.4225 71.0597Z",
      fill: "#7F54B3"
    }), /*#__PURE__*/_jsx("path", {
      d: "M46.8795 74.0987C47.1081 73.8224 47.4415 73.651 47.8036 73.6414C48.5467 73.5938 48.9754 73.9463 49.0897 74.6989C49.547 77.7666 50.0424 80.3769 50.5664 82.5205L53.796 76.3852C54.0913 75.8326 54.4533 75.5373 54.9011 75.5087C55.5489 75.4611 55.949 75.8707 56.111 76.7472C56.4158 78.462 56.8827 80.1483 57.5019 81.7774C57.8925 78.0428 58.5403 75.3372 59.4454 73.67C59.6264 73.2889 59.9979 73.0412 60.4171 73.0222C60.7506 72.9936 61.084 73.0984 61.3412 73.3175C61.608 73.5176 61.7699 73.832 61.789 74.1654C61.808 74.4131 61.7604 74.6608 61.6461 74.8704C61.0745 75.9374 60.5981 77.7094 60.2266 80.1864C59.8646 82.5776 59.7217 84.4544 59.8169 85.7977C59.855 86.1311 59.7883 86.4646 59.6454 86.7599C59.5025 87.0648 59.1977 87.2744 58.8642 87.2934C58.4736 87.322 58.0926 87.141 57.702 86.7504C56.3301 85.3499 55.244 83.2636 54.4438 80.4912C53.5006 82.3776 52.7861 83.7971 52.3193 84.7307C51.4524 86.3979 50.7093 87.2458 50.0995 87.2934C49.6994 87.322 49.3564 86.9886 49.0802 86.2836C48.3275 84.3591 47.5178 80.6341 46.6508 75.1086C46.5746 74.7466 46.6603 74.3845 46.8795 74.0987Z",
      fill: "white"
    }), /*#__PURE__*/_jsx("path", {
      d: "M69.296 76.4139C68.8006 75.5279 67.9432 74.8991 66.9429 74.7085C66.6762 74.6514 66.4094 74.6228 66.1426 74.6228C64.7327 74.6228 63.5799 75.3564 62.6844 76.8235C61.9223 78.0715 61.5221 79.5101 61.5412 80.9677C61.5412 82.1014 61.7794 83.0731 62.2462 83.8829C62.7416 84.7689 63.599 85.3977 64.5993 85.5882C64.8661 85.6454 65.1328 85.6739 65.3996 85.6739C66.8191 85.6739 67.9718 84.9404 68.8578 83.4732C69.6199 82.2157 70.0201 80.7771 70.001 79.3005C70.001 78.1668 69.7629 77.2046 69.296 76.4139ZM67.4383 80.5009C67.2382 81.4631 66.8667 82.1871 66.3141 82.6825C65.8854 83.0731 65.4853 83.2255 65.1233 83.1589C64.7613 83.0922 64.4754 82.7683 64.2563 82.2062C64.0944 81.7775 63.9991 81.3297 63.9991 80.8629C63.9991 80.5009 64.0372 80.1388 64.1039 79.7864C64.2468 79.1576 64.504 78.5669 64.8851 78.0334C65.371 77.3189 65.8854 77.014 66.4189 77.1284C66.7809 77.2046 67.0667 77.519 67.2859 78.081C67.4478 78.5098 67.5431 78.9575 67.5431 79.4148C67.5431 79.7768 67.5145 80.1388 67.4383 80.5009Z",
      fill: "white"
    }), /*#__PURE__*/_jsx("path", {
      d: "M78.5182 76.4139C78.0228 75.5279 77.1654 74.8991 76.1651 74.7085C75.8983 74.6514 75.6316 74.6228 75.3648 74.6228C73.9548 74.6228 72.8021 75.3564 71.9066 76.8235C71.1444 78.0715 70.7443 79.5101 70.7633 80.9677C70.7633 82.1014 71.0015 83.0731 71.4683 83.8829C71.9637 84.7689 72.8211 85.3977 73.8215 85.5882C74.0882 85.6454 74.355 85.6739 74.6217 85.6739C76.0412 85.6739 77.194 84.9404 78.08 83.4732C78.8421 82.2157 79.2422 80.7771 79.2232 79.3005C79.2232 78.1668 78.985 77.2046 78.5182 76.4139ZM76.6605 80.5009C76.4604 81.4631 76.0889 82.1871 75.5363 82.6825C75.1076 83.0731 74.7075 83.2255 74.3454 83.1589C73.9834 83.0922 73.6976 82.7683 73.4785 82.2062C73.3165 81.7775 73.2213 81.3297 73.2213 80.8629C73.2213 80.5009 73.2594 80.1388 73.3261 79.7864C73.469 79.1576 73.7262 78.5669 74.1073 78.0334C74.5931 77.3189 75.1076 77.014 75.6411 77.1284C76.0031 77.2046 76.2889 77.519 76.508 78.081C76.67 78.5098 76.7653 78.9575 76.7653 79.4148C76.7653 79.7768 76.7367 80.1388 76.6605 80.5009Z",
      fill: "white"
    }), /*#__PURE__*/_jsx("circle", {
      cx: "34.2526",
      cy: "34.2526",
      r: "2.25264",
      fill: "#DFD1FB"
    }), /*#__PURE__*/_jsx("circle", {
      cx: "42.758",
      cy: "34.2526",
      r: "2.25264",
      fill: "#DFD1FB"
    }), /*#__PURE__*/_jsx("circle", {
      cx: "51.2634",
      cy: "34.2526",
      r: "2.25264",
      fill: "#DFD1FB"
    }), /*#__PURE__*/_jsx("defs", {
      children: /*#__PURE__*/_jsxs("filter", {
        id: "filter0_d_5851_4204",
        x: "0",
        y: "4",
        width: "325",
        height: "272",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [/*#__PURE__*/_jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), /*#__PURE__*/_jsx("feColorMatrix", {
          "in": "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), /*#__PURE__*/_jsx("feOffset", {}), /*#__PURE__*/_jsx("feGaussianBlur", {
          stdDeviation: "8"
        }), /*#__PURE__*/_jsx("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), /*#__PURE__*/_jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
        }), /*#__PURE__*/_jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_5851_4204"
        }), /*#__PURE__*/_jsx("feBlend", {
          mode: "normal",
          "in": "SourceGraphic",
          in2: "effect1_dropShadow_5851_4204",
          result: "shape"
        })]
      })
    })]
  });
};
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.slice.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.function.name.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/images/cards/googlepay.js
/**
 * External dependencies
 */


/* harmony default export */ const googlepay = (function () {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
    width: "64",
    height: "40",
    viewBox: "0 0 64 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("rect", {
      width: "64",
      height: "40",
      fill: "white"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M30.9 25.07V19.79H33.76C34.8522 19.8223 35.914 19.4277 36.72 18.69C37.118 18.3482 37.4356 17.9226 37.65 17.4438C37.8643 16.9649 37.9702 16.4446 37.96 15.92C37.9659 15.399 37.858 14.883 37.6438 14.408C37.4296 13.933 37.1143 13.5105 36.72 13.17C35.9175 12.4232 34.856 12.0179 33.76 12.04H29.18V25.07H30.9ZM30.9 18.19V13.64H33.8C34.45 13.63 35.07 13.88 35.51 14.34C35.7261 14.5446 35.8981 14.7912 36.0157 15.0646C36.1334 15.3379 36.194 15.6324 36.194 15.93C36.194 16.2276 36.1334 16.5221 36.0157 16.7954C35.8981 17.0688 35.7261 17.3153 35.51 17.52C35.06 17.97 34.44 18.22 33.8 18.19H30.9ZM44.97 16.86C44.23 16.19 43.22 15.86 41.94 15.86C40.3 15.86 39.07 16.45 38.23 17.61L39.75 18.54C40.0021 18.1647 40.3454 17.8595 40.7477 17.6531C41.15 17.4467 41.5981 17.3458 42.05 17.36C42.65 17.35 43.25 17.56 43.71 17.96C44.16 18.33 44.43 18.88 44.42 19.45V19.83C43.6359 19.4379 42.7661 19.2488 41.89 19.28C40.69 19.28 39.73 19.56 39.01 20.1C38.6643 20.3509 38.3851 20.6825 38.1969 21.0659C38.0087 21.4494 37.917 21.873 37.93 22.3C37.91 23.14 38.29 23.95 38.95 24.49C39.63 25.07 40.48 25.36 41.49 25.36C42.69 25.36 43.63 24.86 44.35 23.83H44.42V25.07H46.08V19.57C46.08 18.42 45.71 17.52 44.97 16.86ZM40.28 23.43C40.1036 23.3082 39.9596 23.1454 39.8603 22.9554C39.761 22.7655 39.7094 22.5543 39.71 22.34C39.71 21.86 39.94 21.45 40.41 21.12C40.89 20.79 41.47 20.62 42.17 20.62C43.14 20.62 43.89 20.83 44.43 21.25C44.43 21.95 44.14 22.57 43.57 23.09C43.0458 23.5932 42.3466 23.8729 41.62 23.87C41.14 23.87 40.66 23.72 40.28 23.43ZM55.56 16.16L49.8 29H48.02L50.16 24.5L46.36 16.16H48.24L50.99 22.56H51L53.67 16.16H55.55H55.56Z",
      fill: "#5F6368"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M23.92 18.66C23.92 18.15 23.88 17.64 23.79 17.13H16.5V20.02H20.68C20.5904 20.4842 20.4067 20.9251 20.1401 21.3155C19.8735 21.7059 19.5297 22.0376 19.13 22.29V24.16H21.63C22.3839 23.4607 22.9792 22.6079 23.376 21.6592C23.7727 20.7105 23.9616 19.6878 23.93 18.66H23.92Z",
      fill: "#4285F4"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16.5 25.97C18.59 25.97 20.34 25.31 21.62 24.17L19.13 22.29C18.44 22.75 17.55 23.01 16.5 23.01C15.5459 23.0062 14.6166 22.7057 13.8408 22.1503C13.065 21.5949 12.4811 20.812 12.17 19.91H9.60001V21.85C10.2645 23.1012 11.2588 24.1465 12.4751 24.8728C13.6914 25.5991 15.0834 25.9785 16.5 25.97Z",
      fill: "#34A853"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.17 19.92C11.8453 18.9909 11.8453 17.9791 12.17 17.05V15.12H9.6C9.05843 16.159 8.77563 17.3133 8.77563 18.485C8.77563 19.6567 9.05843 20.811 9.6 21.85L12.17 19.92Z",
      fill: "#FBBC04"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16.5 13.96C17.6 13.95 18.67 14.35 19.47 15.09L21.67 12.95C20.2545 11.6709 18.4077 10.9744 16.5 11C13.58 11 10.91 12.6 9.60001 15.12L12.17 17.05C12.4828 16.1499 13.0674 15.3692 13.8431 14.8156C14.6187 14.2621 15.5471 13.9631 16.5 13.96Z",
      fill: "#EA4335"
    })]
  });
});
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/images/payment-methods/woopay.js
/**
 * External dependencies
 */


/* harmony default export */ const woopay = (function () {
  return /*#__PURE__*/ /* eslint-disable */(0,jsx_runtime.jsxs)("svg", {
    width: "39",
    height: "24",
    viewBox: "0 0 39 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("rect", {
      x: "0.800003",
      width: "38",
      height: "24",
      rx: "2",
      fill: "#873EFF"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("rect", {
      x: "1.3",
      y: "0.5",
      width: "37",
      height: "23",
      rx: "1.5",
      stroke: "black",
      strokeOpacity: "0.07"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M29.3292 16.0555C29.3733 16.0807 29.4331 16.0996 29.5086 16.1122C29.5842 16.1248 29.6597 16.1311 29.7353 16.1311C29.8863 16.1311 30.0122 16.0996 30.113 16.0366C30.2137 15.98 30.2955 15.8793 30.3585 15.7345L30.6795 14.9885L30.7551 15.6212L28.7154 10.5881H29.7636L31.1045 14.0253L32.4453 10.5881H33.4935L31.2839 15.9989C31.2839 16.0052 31.2807 16.0083 31.2744 16.0083C31.2744 16.0146 31.2744 16.0209 31.2744 16.0272C31.1737 16.2601 31.0478 16.449 30.8967 16.5938C30.7519 16.7386 30.5851 16.8424 30.3963 16.9054C30.2137 16.9683 30.0059 16.9998 29.773 16.9998C29.666 16.9998 29.559 16.9935 29.452 16.9809C29.345 16.9683 29.2537 16.9526 29.1781 16.9337L29.3292 16.0555Z",
      fill: "white"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M25.8245 15.2626C25.4341 15.2626 25.0848 15.1682 24.7763 14.9793C24.4678 14.7842 24.2255 14.5072 24.0492 14.1484C23.8792 13.7895 23.7942 13.3646 23.7942 12.8736C23.7942 12.3888 23.8792 11.9671 24.0492 11.6082C24.2255 11.2431 24.4678 10.963 24.7763 10.7678C25.0848 10.5727 25.4341 10.4751 25.8245 10.4751C26.1392 10.4751 26.4351 10.5538 26.7121 10.7112C26.9891 10.8623 27.2157 11.0763 27.392 11.3533L27.3636 12.0804C27.2692 11.8852 27.0992 11.7153 26.8537 11.5705C26.6082 11.4257 26.3595 11.3533 26.1077 11.3533C25.8496 11.3533 25.6199 11.4194 25.4184 11.5516C25.2233 11.6775 25.0722 11.8569 24.9652 12.0898C24.8644 12.3164 24.8141 12.5777 24.8141 12.8736C24.8141 13.3268 24.9305 13.6951 25.1635 13.9784C25.3964 14.2554 25.7111 14.3939 26.1077 14.3939C26.3658 14.3939 26.6145 14.3246 26.8537 14.1861C27.0992 14.0476 27.2692 13.8777 27.3636 13.6762L27.3825 14.4033C27.2063 14.6677 26.9828 14.8786 26.7121 15.036C26.4414 15.1871 26.1455 15.2626 25.8245 15.2626ZM27.2975 15.1493V10.5884H28.2701V15.1493H27.2975Z",
      fill: "white"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M18.7478 15.1494V8.85107H21.5051C21.9332 8.85107 22.3014 8.93921 22.6099 9.11547C22.9184 9.29174 23.1545 9.53096 23.3181 9.83313C23.4818 10.1353 23.5636 10.4658 23.5636 10.8246C23.5636 11.1835 23.4818 11.514 23.3181 11.8161C23.1545 12.112 22.9152 12.3481 22.6005 12.5243C22.292 12.7006 21.9269 12.7887 21.5051 12.7887H19.6921V11.835H21.354C21.5681 11.835 21.7569 11.7941 21.9206 11.7123C22.0843 11.6241 22.2102 11.5045 22.2983 11.3534C22.3927 11.196 22.4399 11.0198 22.4399 10.8246C22.4399 10.6232 22.3927 10.4469 22.2983 10.2958C22.2102 10.1384 22.0843 10.0188 21.9206 9.937C21.7569 9.85516 21.5681 9.81424 21.354 9.81424H19.8432V15.1494H18.7478Z",
      fill: "white"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M8.91555 15.2584C9.64923 15.2584 10.238 14.8961 10.6818 14.0628L11.6691 12.215V13.782C11.6691 14.7059 12.2669 15.2584 13.1908 15.2584C13.9155 15.2584 14.4499 14.9414 14.9662 14.0628L17.2397 10.2223C17.7378 9.3799 17.3846 8.74585 16.2886 8.74585C15.6998 8.74585 15.3194 8.93606 14.9752 9.57917L13.4082 12.5229V9.90525C13.4082 9.12628 13.0368 8.74585 12.3485 8.74585C11.805 8.74585 11.3702 8.98135 11.0351 9.63351L9.55866 12.5229V9.93242C9.55866 9.0991 9.21446 8.74585 8.38114 8.74585H6.67828C6.03517 8.74585 5.70909 9.04476 5.70909 9.59728C5.70909 10.1498 6.05329 10.4668 6.67828 10.4668H7.37573V13.7729C7.37573 14.7059 8.00072 15.2584 8.91555 15.2584Z",
      fill: "white"
    })]
  })
  /* eslint-enable */;
});
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/images/payment-methods/afterpay.js
/**
 * External dependencies
 */


/* harmony default export */ const afterpay = (function () {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
    width: "64",
    height: "40",
    id: "Layer_1",
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 38 24",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      fill: "#B2FCE4",
      d: "M35,0H3A3,3,0,0,0,0,3V21a3,3,0,0,0,3,3H35a3,3,0,0,0,3-3V3A3,3,0,0,0,35,0Z"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M36.12,10l-1.06-.61L34,8.75a1.07,1.07,0,0,0-1.6.93v.13a.23.23,0,0,0,.1.19l.5.28a.2.2,0,0,0,.28-.08.19.19,0,0,0,0-.1V9.78a.21.21,0,0,1,.2-.22l.12,0,1,.57,1,.56a.22.22,0,0,1,.07.3l-.07.07-1,.56-1,.57a.21.21,0,0,1-.29-.07.24.24,0,0,1,0-.12v-.16a1.07,1.07,0,0,0-1.6-.93l-1.08.62-1.06.61a1.08,1.08,0,0,0-.4,1.46,1,1,0,0,0,.4.4l1.06.61,1.08.61a1.07,1.07,0,0,0,1.6-.93v-.13a.23.23,0,0,0-.1-.19l-.5-.29a.2.2,0,0,0-.28.08.23.23,0,0,0,0,.11v.32a.21.21,0,0,1-.2.22.27.27,0,0,1-.12,0l-1-.57-1-.56A.22.22,0,0,1,30,13l.07-.07,1-.56,1-.57a.21.21,0,0,1,.29.07.24.24,0,0,1,0,.12v.16a1.07,1.07,0,0,0,1.6.93l1.08-.62,1.06-.61a1.06,1.06,0,0,0,.34-1.47A1,1,0,0,0,36.12,10Z"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M29.14,10.18l-2.49,5.14h-1l.93-1.92-1.46-3.22h1.06l.94,2.15,1-2.15Z"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M4.25,12a1,1,0,1,0-1,1.05h0a1,1,0,0,0,1-1V12m0,1.83v-.48a1.49,1.49,0,0,1-1.16.54,1.79,1.79,0,0,1-1.75-1.83V12a1.82,1.82,0,0,1,1.75-1.89h0a1.47,1.47,0,0,1,1.14.53v-.46h.89v3.65Z"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M9.52,13c-.32,0-.4-.12-.4-.42V11h.57v-.79H9.12V9.29H8.2v.89H7V9.81c0-.3.12-.42.44-.42h.2V8.68H7.21c-.76,0-1.12.25-1.12,1v.49H5.58V11h.51v2.86H7V11H8.2v1.79c0,.75.28,1.07,1,1.07h.5V13Z"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M12.82,11.67a.87.87,0,0,0-.91-.75.89.89,0,0,0-.92.75ZM11,12.24a.91.91,0,0,0,.94.85,1,1,0,0,0,.86-.47h.94a1.79,1.79,0,0,1-1.82,1.27A1.8,1.8,0,0,1,10,12.22V12a1.89,1.89,0,1,1,3.78,0h0a.89.89,0,0,1,0,.23Z"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M19.66,12a1,1,0,1,0,0,.05V12m-2.89,3.32V10.18h.89v.47a1.49,1.49,0,0,1,1.16-.54,1.79,1.79,0,0,1,1.76,1.82V12a1.82,1.82,0,0,1-1.75,1.89h0a1.44,1.44,0,0,1-1.11-.49v1.92Z"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M23.82,12a1,1,0,1,0-1.05,1.05h.05a1,1,0,0,0,1-1V12m0,1.83v-.48a1.46,1.46,0,0,1-1.15.54,1.79,1.79,0,0,1-1.76-1.82V12a1.82,1.82,0,0,1,1.75-1.89h0a1.45,1.45,0,0,1,1.13.53v-.46h.9v3.65Z"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M15.15,10.54a.91.91,0,0,1,.79-.43.88.88,0,0,1,.39.08v.94a1.15,1.15,0,0,0-.65-.17.64.64,0,0,0-.5.71v2.16h-.93V10.18h.9Z"
    })]
  });
});
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/images/payment-methods/affirm.js
/**
 * External dependencies
 */


/* harmony default export */ const affirm = (function () {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
    width: "64",
    height: "40",
    viewBox: "0 0 64 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("rect", {
      width: "64",
      height: "40",
      fill: "white"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M53 10.6201H11V27.3789H53V10.6201Z",
      fill: "white"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.7539 25.935C13.2345 25.935 12.9699 25.6792 12.9699 25.2587C12.9699 24.4747 13.8441 24.2111 15.4387 24.0415C15.4387 25.0862 14.732 25.935 13.749 25.935H13.7539ZM14.44 20.0596C13.3002 20.0596 11.9899 20.5957 11.2783 21.1631L11.9281 22.5352C12.4985 22.0128 13.4207 21.5659 14.2528 21.5659C15.0437 21.5659 15.4808 21.8305 15.4808 22.3637C15.4808 22.7214 15.1917 22.9027 14.6448 22.9742C12.6004 23.2389 10.998 23.8034 10.998 25.3783C10.998 26.6269 11.887 27.3825 13.2757 27.3825C14.2675 27.3825 15.1495 26.8317 15.569 26.1084V27.1865H17.4174V22.6695C17.4174 20.8074 16.1247 20.0557 14.441 20.0557L14.44 20.0596Z",
      fill: "#101820"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M32.9912 20.263V27.1782H34.969V23.8461C34.969 22.2633 35.9274 21.7978 36.5949 21.7978C36.8953 21.7954 37.1897 21.8824 37.4406 22.0477L37.8023 20.2199C37.522 20.1077 37.222 20.0534 36.9202 20.0601C35.9039 20.0601 35.2649 20.51 34.8435 21.4253V20.263H32.9912Z",
      fill: "#101820"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M46.9673 20.0596C45.9216 20.0596 45.1395 20.677 44.7328 21.2729C44.3555 20.5035 43.5568 20.0596 42.5963 20.0596C41.5516 20.0596 40.8273 20.6398 40.4931 21.3081V20.2624H38.5859V27.1777H40.5656V23.6171C40.5656 22.3431 41.235 21.7266 41.8593 21.7266C42.4248 21.7266 42.9442 22.0922 42.9442 23.036V27.1777H44.92V23.6171C44.92 22.3245 45.5727 21.7266 46.2264 21.7266C46.7497 21.7266 47.3045 22.1069 47.3045 23.0223V27.1777H49.2802V22.397C49.2802 20.8436 48.2345 20.0596 46.9712 20.0596",
      fill: "#101820"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M28.1787 20.2633H26.3872V19.5606C26.3872 18.6452 26.9096 18.3845 27.3594 18.3845C27.6666 18.3885 27.9686 18.464 28.2415 18.605L28.8511 17.2104C28.8511 17.2104 28.2326 16.8066 27.1085 16.8066C25.8452 16.8066 24.4075 17.5191 24.4075 19.7546V20.2633H21.4135V19.5606C21.4135 18.6452 21.9348 18.3845 22.3857 18.3845C22.6933 18.3845 22.9963 18.4602 23.2677 18.605L23.8773 17.2104C23.5137 16.9977 22.9286 16.8066 22.1358 16.8066C20.8725 16.8066 19.4347 17.5191 19.4347 19.7546V20.2633H18.29V21.7882H19.4377V27.1785H21.4135V21.7882H24.4114V27.1785H26.3872V21.7882H28.1787V20.2633Z",
      fill: "#101820"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M31.3322 20.2627H29.3584V27.175H31.3322V20.2627Z",
      fill: "#101820"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M29.4307 19.0877H31.3643C32.4923 15.5409 36.3194 12.4234 40.8708 12.4234C46.4061 12.4234 51.1897 16.6376 51.1897 23.198C51.2066 24.5447 51.0216 25.8862 50.6409 27.178H52.5177L52.5363 27.1133C52.8526 25.8345 53.0086 24.5213 53.0009 23.2039C53.0009 15.8879 47.6694 10.6221 40.8747 10.6221C35.5374 10.6221 30.7802 14.3266 29.4316 19.0897L29.4307 19.0877Z",
      fill: "#4A4AF4"
    })]
  });
});
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/images/payment-methods/klarna.js
/**
 * External dependencies
 */


/* harmony default export */ const klarna = (function () {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
    width: "64",
    height: "40",
    viewBox: "0 0 64 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("rect", {
      width: "64",
      height: "40",
      fill: "#FFB3C7"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M57.4626 23.0076C56.6136 23.0076 55.9253 23.7021 55.9253 24.5588C55.9253 25.4154 56.6136 26.1101 57.4626 26.1101C58.3116 26.1101 59 25.4155 59 24.5588C59 23.702 58.3116 23.0076 57.4626 23.0076ZM52.4048 21.8083C52.4048 20.6353 51.4112 19.6846 50.1855 19.6846C48.9599 19.6846 47.9662 20.6353 47.9662 21.8083C47.9662 22.9812 48.9597 23.9322 50.1855 23.9322C51.4113 23.9322 52.4048 22.9812 52.4048 21.8083ZM52.413 17.6807H54.8622V25.9355H52.413V25.4079C51.7211 25.8841 50.8858 26.164 49.985 26.164C47.601 26.164 45.6684 24.2139 45.6684 21.8082C45.6684 19.4025 47.601 17.4525 49.985 17.4525C50.8858 17.4525 51.7211 17.7324 52.413 18.2088V17.6807ZM32.8122 18.756V17.6808H30.3045V25.9355H32.8178V22.0815C32.8178 20.7812 34.2145 20.0823 35.1835 20.0823C35.1935 20.0823 35.2027 20.0833 35.2127 20.0834V17.6815C34.218 17.6815 33.3032 18.1111 32.8122 18.756ZM26.5656 21.8083C26.5656 20.6353 25.572 19.6847 24.3463 19.6847C23.1206 19.6847 22.1269 20.6354 22.1269 21.8083C22.1269 22.9813 23.1206 23.9322 24.3463 23.9322C25.572 23.9322 26.5656 22.9813 26.5656 21.8083ZM26.5737 17.6807H29.0231V25.9355H26.5737V25.408C25.8818 25.8841 25.0466 26.1641 24.1458 26.1641C21.7618 26.1641 19.8291 24.2139 19.8291 21.8082C19.8291 19.4026 21.7618 17.4526 24.1458 17.4526C25.0466 17.4526 25.8818 17.7325 26.5737 18.2088V17.6807ZM41.3162 17.4587C40.3378 17.4587 39.4117 17.7652 38.7927 18.6109V17.6812H36.3539V25.9356H38.8226V21.5977C38.8226 20.3424 39.6568 19.7277 40.6613 19.7277C41.7378 19.7277 42.3566 20.3766 42.3566 21.5806V25.9356H44.803V20.6863C44.803 18.7653 43.2894 17.4587 41.3162 17.4587ZM16.2614 25.9356H18.825V14.0022H16.2614V25.9356ZM5 25.9389H7.71458V14H5V25.9389ZM14.4947 14C14.4947 16.5847 13.4965 18.9891 11.7178 20.7762L15.4701 25.9393H12.1173L8.03934 20.3282L9.09178 19.5328C10.8371 18.2136 11.8382 16.197 11.8382 14L14.4947 14Z",
      fill: "#0A0B09"
    })]
  });
});
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/components/WooPaymentsMethodsLogos/index.tsx




/**
 * External dependencies
 */

/**
 * Internal dependencies
 */












/**
 * Payment methods list.
 */

var PaymentMethods = [{
  name: 'visa',
  component: /*#__PURE__*/(0,jsx_runtime.jsx)(visa, {}, "visa")
}, {
  name: 'mastercard',
  component: /*#__PURE__*/(0,jsx_runtime.jsx)(mastercard, {}, "mastercard")
}, {
  name: 'amex',
  component: /*#__PURE__*/(0,jsx_runtime.jsx)(amex, {}, "amex")
}, {
  name: 'discover',
  component: /*#__PURE__*/(0,jsx_runtime.jsx)(discover, {}, "discover")
}, {
  name: 'woopay',
  component: /*#__PURE__*/(0,jsx_runtime.jsx)(woopay, {}, "woopay")
}, {
  name: 'applepay',
  component: /*#__PURE__*/(0,jsx_runtime.jsx)(applepay, {}, "applepay")
}, {
  name: 'googlepay',
  component: /*#__PURE__*/(0,jsx_runtime.jsx)(googlepay, {}, "googlepay")
}, {
  name: 'afterpay',
  component: /*#__PURE__*/(0,jsx_runtime.jsx)(afterpay, {}, "afterpay")
}, {
  name: 'affirm',
  component: /*#__PURE__*/(0,jsx_runtime.jsx)(affirm, {}, "affirm")
}, {
  name: 'klarna',
  component: /*#__PURE__*/(0,jsx_runtime.jsx)(klarna, {}, "klarna")
}, {
  name: 'jcb',
  component: /*#__PURE__*/(0,jsx_runtime.jsx)(jcb, {}, "jcb")
}];
var WooPaymentsMethodsLogos_WooPaymentsMethodsLogos = function WooPaymentsMethodsLogos(_ref) {
  var _ref$isWooPayEligible = _ref.isWooPayEligible,
    isWooPayEligible = _ref$isWooPayEligible === void 0 ? false : _ref$isWooPayEligible,
    _ref$maxElements = _ref.maxElements,
    maxElements = _ref$maxElements === void 0 ? 10 : _ref$maxElements,
    _ref$tabletWidthBreak = _ref.tabletWidthBreakpoint,
    tabletWidthBreakpoint = _ref$tabletWidthBreak === void 0 ? 768 : _ref$tabletWidthBreak,
    _ref$maxElementsTable = _ref.maxElementsTablet,
    maxElementsTablet = _ref$maxElementsTable === void 0 ? 7 : _ref$maxElementsTable,
    _ref$mobileWidthBreak = _ref.mobileWidthBreakpoint,
    mobileWidthBreakpoint = _ref$mobileWidthBreak === void 0 ? 480 : _ref$mobileWidthBreak,
    _ref$maxElementsMobil = _ref.maxElementsMobile,
    maxElementsMobile = _ref$maxElementsMobil === void 0 ? 5 : _ref$maxElementsMobil,
    _ref$totalPaymentMeth = _ref.totalPaymentMethods,
    totalPaymentMethods = _ref$totalPaymentMeth === void 0 ? 20 : _ref$totalPaymentMeth;
  var _useState = useState(maxElements),
    _useState2 = _slicedToArray(_useState, 2),
    maxShownElements = _useState2[0],
    setMaxShownElements = _useState2[1];

  // Reduce the total number of payment methods by one if the store is not eligible for WooPay.
  var maxSupportedPaymentMethods = isWooPayEligible ? totalPaymentMethods : totalPaymentMethods - 1;

  /**
   * Determine the maximum number of logos to display, taking into account WooPay’s eligibility.
   */
  var getMaxShownElements = function getMaxShownElements(maxElementsNumber) {
    if (!isWooPayEligible) {
      return maxElementsNumber + 1;
    }
    return maxElementsNumber;
  };
  useEffect(function () {
    var updateMaxElements = function updateMaxElements() {
      if (window.innerWidth <= mobileWidthBreakpoint) {
        setMaxShownElements(maxElementsMobile);
      } else if (window.innerWidth <= tabletWidthBreakpoint) {
        setMaxShownElements(maxElementsTablet);
      } else {
        setMaxShownElements(maxElements);
      }
    };
    updateMaxElements();

    // Update the number of logos to display when the window is resized.
    window.addEventListener('resize', updateMaxElements);

    // Cleanup on unmount.
    return function () {
      window.removeEventListener('resize', updateMaxElements);
    };
  }, [maxElements, maxElementsMobile, maxElementsTablet, tabletWidthBreakpoint, mobileWidthBreakpoint]);
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsxs("div", {
      className: "woocommerce-woopayments-payment-methods-logos",
      children: [PaymentMethods.slice(0, getMaxShownElements(maxShownElements)).map(function (pm) {
        // Do not display the WooPay logo if the store is not eligible for WooPay.
        if (!isWooPayEligible && pm.name === 'woopay') {
          return null;
        }
        return pm.component;
      }), maxShownElements < maxSupportedPaymentMethods && /*#__PURE__*/_jsxs("div", {
        className: "woocommerce-woopayments-payment-methods-logos-count",
        children: ["+ ", maxSupportedPaymentMethods - maxShownElements]
      })]
    })
  });
};
try {
    // @ts-ignore
    WooPaymentsMethodsLogos_WooPaymentsMethodsLogos.displayName = "WooPaymentsMethodsLogos";
    // @ts-ignore
    WooPaymentsMethodsLogos_WooPaymentsMethodsLogos.__docgenInfo = { "description": "", "displayName": "WooPaymentsMethodsLogos", "props": { "isWooPayEligible": { "defaultValue": { value: "false" }, "description": "", "name": "isWooPayEligible", "required": false, "type": { "name": "boolean" } }, "maxElements": { "defaultValue": { value: "10" }, "description": "", "name": "maxElements", "required": false, "type": { "name": "number" } }, "tabletWidthBreakpoint": { "defaultValue": { value: "768" }, "description": "", "name": "tabletWidthBreakpoint", "required": false, "type": { "name": "number" } }, "maxElementsTablet": { "defaultValue": { value: "7" }, "description": "", "name": "maxElementsTablet", "required": false, "type": { "name": "number" } }, "mobileWidthBreakpoint": { "defaultValue": { value: "480" }, "description": "", "name": "mobileWidthBreakpoint", "required": false, "type": { "name": "number" } }, "maxElementsMobile": { "defaultValue": { value: "5" }, "description": "", "name": "maxElementsMobile", "required": false, "type": { "name": "number" } }, "totalPaymentMethods": { "defaultValue": { value: "20" }, "description": "", "name": "totalPaymentMethods", "required": false, "type": { "name": "number" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/onboarding/src/components/WooPaymentsMethodsLogos/index.tsx#WooPaymentsMethodsLogos"] = { docgenInfo: WooPaymentsMethodsLogos_WooPaymentsMethodsLogos.__docgenInfo, name: "WooPaymentsMethodsLogos", path: "../../packages/js/onboarding/src/components/WooPaymentsMethodsLogos/index.tsx#WooPaymentsMethodsLogos" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/components/WCPayBanner/WCPayBanner.tsx
/**
 * External dependencies
 */





/**
 * Internal dependencies
 */



var WCPayBannerFooter = function WCPayBannerFooter(_ref) {
  var isWooPayEligible = _ref.isWooPayEligible;
  return /*#__PURE__*/_jsxs(CardFooter, {
    className: "woocommerce-recommended-payments-banner__footer",
    children: [/*#__PURE__*/_jsx("div", {
      children: /*#__PURE__*/_jsx(Text, {
        variant: "caption",
        as: "p",
        size: "12",
        lineHeight: "16px",
        children: __('WooPayments is pre-integrated with popular payment options:', 'woocommerce')
      })
    }), /*#__PURE__*/_jsx(WooPaymentsMethodsLogos, {
      isWooPayEligible: isWooPayEligible,
      maxElements: 10
    })]
  });
};
var WCPayBannerText = function WCPayBannerText(_ref2) {
  var actionButton = _ref2.actionButton;
  return /*#__PURE__*/_jsxs("div", {
    className: "woocommerce-recommended-payments-banner__text_container",
    children: [/*#__PURE__*/_jsx(Text, {
      className: "woocommerce-recommended-payments__header-title",
      variant: "title.small",
      as: "p",
      size: "24",
      lineHeight: "28px",
      padding: "0 20px 0 0",
      children: createInterpolateElement(__('Payments made simple, designed exclusively<br/>for WooCommerce stores.', 'woocommerce'), {
        br: /*#__PURE__*/_jsx("br", {})
      })
    }), actionButton]
  });
};
var WCPayBannerBody = function WCPayBannerBody(_ref3) {
  var actionButton = _ref3.actionButton,
    textPosition = _ref3.textPosition,
    _ref3$bannerImage = _ref3.bannerImage,
    bannerImage = _ref3$bannerImage === void 0 ? /*#__PURE__*/_jsx(WCPayBannerImage, {}) : _ref3$bannerImage,
    isWooPayEligible = _ref3.isWooPayEligible;
  return /*#__PURE__*/_jsx(CardBody, {
    className: "woocommerce-recommended-payments-banner__body",
    children: textPosition === 'left' ? /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsx(WCPayBannerText, {
        actionButton: actionButton,
        isWooPayEligible: isWooPayEligible
      }), /*#__PURE__*/_jsx("div", {
        className: "woocommerce-recommended-payments-banner__image_container",
        children: bannerImage
      })]
    }) : /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsx("div", {
        className: "woocommerce-recommended-payments-banner__image_container",
        children: bannerImage
      }), /*#__PURE__*/_jsx(WCPayBannerText, {
        actionButton: actionButton,
        isWooPayEligible: isWooPayEligible
      })]
    })
  });
};
var WCPayBanner = function WCPayBanner(_ref4) {
  var children = _ref4.children;
  return /*#__PURE__*/_jsx(Card, {
    size: "medium",
    className: "woocommerce-recommended-payments-banner",
    children: children
  });
};
try {
    // @ts-ignore
    WCPayBannerFooter.displayName = "WCPayBannerFooter";
    // @ts-ignore
    WCPayBannerFooter.__docgenInfo = { "description": "", "displayName": "WCPayBannerFooter", "props": { "isWooPayEligible": { "defaultValue": null, "description": "", "name": "isWooPayEligible", "required": true, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/onboarding/src/components/WCPayBanner/WCPayBanner.tsx#WCPayBannerFooter"] = { docgenInfo: WCPayBannerFooter.__docgenInfo, name: "WCPayBannerFooter", path: "../../packages/js/onboarding/src/components/WCPayBanner/WCPayBanner.tsx#WCPayBannerFooter" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    WCPayBannerText.displayName = "WCPayBannerText";
    // @ts-ignore
    WCPayBannerText.__docgenInfo = { "description": "", "displayName": "WCPayBannerText", "props": { "actionButton": { "defaultValue": null, "description": "", "name": "actionButton", "required": true, "type": { "name": "ReactNode" } }, "isWooPayEligible": { "defaultValue": null, "description": "", "name": "isWooPayEligible", "required": true, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/onboarding/src/components/WCPayBanner/WCPayBanner.tsx#WCPayBannerText"] = { docgenInfo: WCPayBannerText.__docgenInfo, name: "WCPayBannerText", path: "../../packages/js/onboarding/src/components/WCPayBanner/WCPayBanner.tsx#WCPayBannerText" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    WCPayBannerBody.displayName = "WCPayBannerBody";
    // @ts-ignore
    WCPayBannerBody.__docgenInfo = { "description": "", "displayName": "WCPayBannerBody", "props": { "textPosition": { "defaultValue": null, "description": "", "name": "textPosition", "required": true, "type": { "name": "enum", "value": [{ "value": "\"left\"" }, { "value": "\"right\"" }] } }, "actionButton": { "defaultValue": null, "description": "", "name": "actionButton", "required": true, "type": { "name": "ReactNode" } }, "bannerImage": { "defaultValue": { value: "<WCPayBannerImage />" }, "description": "", "name": "bannerImage", "required": false, "type": { "name": "ReactNode" } }, "isWooPayEligible": { "defaultValue": null, "description": "", "name": "isWooPayEligible", "required": true, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/onboarding/src/components/WCPayBanner/WCPayBanner.tsx#WCPayBannerBody"] = { docgenInfo: WCPayBannerBody.__docgenInfo, name: "WCPayBannerBody", path: "../../packages/js/onboarding/src/components/WCPayBanner/WCPayBanner.tsx#WCPayBannerBody" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    WCPayBanner.displayName = "WCPayBanner";
    // @ts-ignore
    WCPayBanner.__docgenInfo = { "description": "", "displayName": "WCPayBanner", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/onboarding/src/components/WCPayBanner/WCPayBanner.tsx#WCPayBanner"] = { docgenInfo: WCPayBanner.__docgenInfo, name: "WCPayBanner", path: "../../packages/js/onboarding/src/components/WCPayBanner/WCPayBanner.tsx#WCPayBanner" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/components/WCPayBanner/index.ts



;// CONCATENATED MODULE: ../../packages/js/onboarding/src/components/WCPayBenefits/icons/payment-card.js
/**
 * External dependencies
 */


var payment_card_PaymentCardIcon = function PaymentCardIcon() {
  return /*#__PURE__*/_jsxs("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/_jsx("mask", {
      id: "mask0_5908_1374",
      style: {
        maskType: 'luminance'
      },
      maskUnits: "userSpaceOnUse",
      x: "2",
      y: "4",
      width: "20",
      height: "16",
      children: /*#__PURE__*/_jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M20 4H4C2.895 4 2 4.895 2 6V18C2 19.105 2.895 20 4 20H20C21.105 20 22 19.105 22 18V6C22 4.895 21.105 4 20 4ZM20 6V8H4V6H20ZM4 12V18H20V12H4ZM6 14H13V16H6V14ZM18 14H15V16H18V14Z",
        fill: "white"
      })
    }), /*#__PURE__*/_jsx("g", {
      mask: "url(#mask0_5908_1374)",
      children: /*#__PURE__*/_jsx("rect", {
        width: "24",
        height: "24",
        fill: "#674399"
      })
    })]
  });
};
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/components/WCPayBenefits/icons/International-market.js
/**
 * External dependencies
 */


var International_market_InternationalMarketIcon = function InternationalMarketIcon() {
  return /*#__PURE__*/_jsxs("svg", {
    width: "25",
    height: "24",
    viewBox: "0 0 25 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/_jsx("mask", {
      id: "mask0_5908_1702",
      style: {
        maskType: 'luminance'
      },
      maskUnits: "userSpaceOnUse",
      x: "2",
      y: "2",
      width: "21",
      height: "20",
      children: /*#__PURE__*/_jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.3335 12C2.3335 6.477 6.8105 2 12.3335 2C17.8565 2 22.3335 6.477 22.3335 12C22.3335 17.523 17.8565 22 12.3335 22C6.8105 22 2.3335 17.523 2.3335 12ZM15.3335 17L14.3335 18L12.3335 20C15.5725 20 18.3625 18.061 19.6195 15.286L19.3335 15H17.3335L16.3335 14V12L18.3335 10H20.0695C19.7675 8.834 19.2155 7.767 18.4635 6.87L15.3335 10L14.3335 9V7L15.3335 6V4.589C14.4065 4.212 13.3945 4 12.3335 4C11.2725 4 10.2605 4.212 9.3335 4.589V5L10.3335 6H12.3335V8L9.3335 11H7.3335V13H5.3335L4.3335 12C4.3335 16.072 7.3935 19.436 11.3335 19.931V18L9.3335 16V13H12.3335L13.3335 14V15H15.3335V17Z",
        fill: "white"
      })
    }), /*#__PURE__*/_jsx("g", {
      mask: "url(#mask0_5908_1702)",
      children: /*#__PURE__*/_jsx("rect", {
        x: "0.333496",
        width: "24",
        height: "24",
        fill: "#674399"
      })
    })]
  });
};
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/components/WCPayBenefits/icons/earn-manage.js
/**
 * External dependencies
 */


var earn_manage_EarnManageIcon = function EarnManageIcon() {
  return /*#__PURE__*/_jsxs("svg", {
    width: "25",
    height: "24",
    viewBox: "0 0 25 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/_jsx("mask", {
      id: "mask0_5908_1139",
      style: {
        maskType: 'luminance'
      },
      maskUnits: "userSpaceOnUse",
      x: "3",
      y: "2",
      width: "19",
      height: "19",
      children: /*#__PURE__*/_jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M21.6665 6V19C21.6665 20.104 20.7705 21 19.6665 21H5.6665C4.5625 21 3.6665 20.104 3.6665 19V6C3.6665 4.896 4.5625 4 5.6665 4H6.6665V2H8.6665V4H16.6665V2H18.6665V4H19.6665C20.7705 4 21.6665 4.896 21.6665 6ZM11.1645 18.001L7.4595 14.296L8.8745 12.881L11.1685 15.175L16.4615 9.882L17.8765 11.297L11.1645 18.001ZM5.6665 8H19.6665V19H5.6665V8Z",
        fill: "white"
      })
    }), /*#__PURE__*/_jsx("g", {
      mask: "url(#mask0_5908_1139)",
      children: /*#__PURE__*/_jsx("rect", {
        x: "0.666504",
        width: "24",
        height: "24",
        fill: "#674399"
      })
    })]
  });
};
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/components/WCPayBenefits/icons/woopay.js
/**
 * External dependencies
 */


var woopay_WooPayIcon = function WooPayIcon() {
  return /*#__PURE__*/_jsxs("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/_jsx("mask", {
      id: "mask0_5908_3242",
      style: {
        maskType: 'luminance'
      },
      maskUnits: "userSpaceOnUse",
      x: "3",
      y: "4",
      width: "18",
      height: "18",
      children: /*#__PURE__*/_jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M18.192 4H5.79578C4.24399 4 2.98777 5.26853 3.00009 6.80801V16.168C3.00009 17.7198 4.2563 18.9761 5.8081 18.9761H11.1676L16.4757 21.9319L15.2687 18.9761H18.192C19.7438 18.9761 21 17.7198 21 16.168V6.80801C21 5.25622 19.7438 4 18.192 4ZM7.53039 7.19611C7.2535 7.21589 7.04582 7.31478 6.90738 7.50268C6.76893 7.68068 6.71948 7.90813 6.74915 8.16525C7.33261 11.8737 7.87651 14.3756 8.38086 15.6711C8.57864 16.1458 8.80609 16.3732 9.0731 16.3535C9.48844 16.3238 9.9829 15.7502 10.5664 14.6327C10.8729 13.9998 11.3476 13.0505 11.9904 11.7847C12.5244 13.6537 13.2562 15.058 14.1759 15.9974C14.433 16.2645 14.7 16.3831 14.9571 16.3633C15.1846 16.3436 15.3626 16.2249 15.4813 16.0073C15.5801 15.8194 15.6197 15.6019 15.5999 15.3547C15.5406 14.4547 15.6296 13.1988 15.8768 11.5869C16.1339 9.92551 16.4504 8.72893 16.8361 8.01691C16.9152 7.86857 16.9448 7.72024 16.935 7.54223C16.9152 7.31478 16.8163 7.12689 16.6284 6.97855C16.4405 6.83021 16.2328 6.76099 16.0054 6.78077C15.7186 6.80055 15.501 6.939 15.3527 7.21589C14.7396 8.33336 14.3045 10.1431 14.0473 12.6549C13.6715 11.7056 13.3551 10.5881 13.1079 9.27283C12.9991 8.68937 12.7321 8.41248 12.297 8.44214C12.0003 8.46192 11.7531 8.65971 11.5553 9.03549L9.38955 13.1593C9.03354 11.7253 8.69731 9.97496 8.39075 7.90813C8.32152 7.3939 8.03474 7.15656 7.53039 7.19611Z",
        fill: "white"
      })
    }), /*#__PURE__*/_jsx("g", {
      mask: "url(#mask0_5908_3242)",
      children: /*#__PURE__*/_jsx("rect", {
        width: "24",
        height: "24",
        fill: "#674399"
      })
    })]
  });
};
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/components/WCPayBenefits/icons/index.ts




;// CONCATENATED MODULE: ../../packages/js/onboarding/src/components/WCPayBenefits/WCPayBenefits.tsx
/**
 * External dependencies
 */





/**
 * Internal dependencies
 */


var WCPayBenefits = function WCPayBenefits(_ref) {
  var _ref$isWooPayEligible = _ref.isWooPayEligible,
    isWooPayEligible = _ref$isWooPayEligible === void 0 ? false : _ref$isWooPayEligible;
  return /*#__PURE__*/_jsxs(Flex, {
    className: "woocommerce-wcpay-benefits",
    align: "top",
    children: [/*#__PURE__*/_jsxs(Flex, {
      className: "woocommerce-wcpay-benefits-benefit",
      children: [/*#__PURE__*/_jsx(Flex, {
        className: "woocommerce-wcpay-benefits-benefit-icon-container",
        children: /*#__PURE__*/_jsx(PaymentCardIcon, {})
      }), /*#__PURE__*/_jsx(Text, {
        as: "p",
        children: __('Offer your customers card payments, iDeal, and the ability to sell in-person with Woo mobile app.', 'woocommerce')
      })]
    }), /*#__PURE__*/_jsxs(Flex, {
      className: "woocommerce-wcpay-benefits-benefit",
      children: [/*#__PURE__*/_jsx(Flex, {
        className: "woocommerce-wcpay-benefits-benefit-icon-container",
        children: /*#__PURE__*/_jsx(InternationalMarketIcon, {})
      }), /*#__PURE__*/_jsx(Text, {
        as: "p",
        children: __('Sell to international markets and accept more than 135 currencies with local payment methods.', 'woocommerce')
      })]
    }), /*#__PURE__*/_jsxs(Flex, {
      className: "woocommerce-wcpay-benefits-benefit",
      children: [/*#__PURE__*/_jsx(Flex, {
        className: "woocommerce-wcpay-benefits-benefit-icon-container",
        children: /*#__PURE__*/_jsx(EarnManageIcon, {})
      }), /*#__PURE__*/_jsx(Text, {
        as: "p",
        children: __('Earn and manage recurring revenue and get automatic deposits into your nominated bank account.', 'woocommerce')
      })]
    }), isWooPayEligible && /*#__PURE__*/_jsxs(Flex, {
      className: "woocommerce-wcpay-benefits-benefit",
      children: [/*#__PURE__*/_jsx(Flex, {
        className: "woocommerce-wcpay-benefits-benefit-icon-container",
        children: /*#__PURE__*/_jsx(WooPayIcon, {})
      }), /*#__PURE__*/_jsx(Text, {
        as: "p",
        children: __('Boost conversions with WooPay, a new express checkout feature included in WooPayments.', 'woocommerce')
      })]
    })]
  });
};
try {
    // @ts-ignore
    WCPayBenefits.displayName = "WCPayBenefits";
    // @ts-ignore
    WCPayBenefits.__docgenInfo = { "description": "", "displayName": "WCPayBenefits", "props": { "isWooPayEligible": { "defaultValue": { value: "false" }, "description": "", "name": "isWooPayEligible", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/onboarding/src/components/WCPayBenefits/WCPayBenefits.tsx#WCPayBenefits"] = { docgenInfo: WCPayBenefits.__docgenInfo, name: "WCPayBenefits", path: "../../packages/js/onboarding/src/components/WCPayBenefits/WCPayBenefits.tsx#WCPayBenefits" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/components/WCPayBenefits/index.ts

;// CONCATENATED MODULE: ../../packages/js/onboarding/src/components/RecommendedRibbon/RecommendedRibbon.tsx
/**
 * External dependencies
 */


var RecommendedRibbon = function RecommendedRibbon(_ref) {
  var _ref$isLocalPartner = _ref.isLocalPartner,
    isLocalPartner = _ref$isLocalPartner === void 0 ? false : _ref$isLocalPartner;
  var text = isLocalPartner ? __('Local Partner', 'woocommerce') : __('Recommended', 'woocommerce');
  return /*#__PURE__*/_jsx("div", {
    className: 'woocommerce-task-payment__recommended-ribbon',
    children: /*#__PURE__*/_jsx("span", {
      children: text
    })
  });
};
try {
    // @ts-ignore
    RecommendedRibbon.displayName = "RecommendedRibbon";
    // @ts-ignore
    RecommendedRibbon.__docgenInfo = { "description": "", "displayName": "RecommendedRibbon", "props": { "isLocalPartner": { "defaultValue": { value: "false" }, "description": "", "name": "isLocalPartner", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/onboarding/src/components/RecommendedRibbon/RecommendedRibbon.tsx#RecommendedRibbon"] = { docgenInfo: RecommendedRibbon.__docgenInfo, name: "RecommendedRibbon", path: "../../packages/js/onboarding/src/components/RecommendedRibbon/RecommendedRibbon.tsx#RecommendedRibbon" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/components/RecommendedRibbon/index.ts

// EXTERNAL MODULE: ../../node_modules/.pnpm/gridicons@3.4.2_react@18.3.1/node_modules/gridicons/dist/notice-outline.js
var notice_outline = __webpack_require__("../../node_modules/.pnpm/gridicons@3.4.2_react@18.3.1/node_modules/gridicons/dist/notice-outline.js");
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/components/SetupRequired.tsx
/**
 * External dependencies
 */





var SetupRequired = function SetupRequired() {
  return /*#__PURE__*/_jsxs("span", {
    className: "woocommerce-task-payment__setup_required",
    children: [/*#__PURE__*/_jsx(NoticeOutlineIcon, {}), /*#__PURE__*/_jsx(Text, {
      variant: "small",
      size: "14",
      lineHeight: "20px",
      children: __('Setup required', 'woocommerce')
    })]
  });
};
try {
    // @ts-ignore
    SetupRequired.displayName = "SetupRequired";
    // @ts-ignore
    SetupRequired.__docgenInfo = { "description": "", "displayName": "SetupRequired", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/onboarding/src/components/SetupRequired.tsx#SetupRequired"] = { docgenInfo: SetupRequired.__docgenInfo, name: "SetupRequired", path: "../../packages/js/onboarding/src/components/SetupRequired.tsx#SetupRequired" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/images/payment-methods/clearpay.js
/**
 * External dependencies
 */


/* harmony default export */ const clearpay = (function () {
  return /*#__PURE__*/_jsxs("svg", {
    width: "64",
    height: "40",
    viewBox: "0 0 64 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/_jsx("path", {
      fill: "#fff",
      d: "M0 0h64v40H0z"
    }), /*#__PURE__*/_jsx("path", {
      d: "m48.47 17.208-3.827 7.897h-1.586l1.43-2.95-2.247-4.947h1.629l1.444 3.314 1.576-3.314h1.581ZM33.905 20.012c0-.906-.684-1.605-1.524-1.605s-1.525.675-1.525 1.605c0 .92.685 1.605 1.525 1.605.84 0 1.524-.699 1.524-1.605Zm-4.441 5.093v-7.897h1.378v.727a2.228 2.228 0 0 1 1.77-.83c1.515 0 2.704 1.245 2.704 2.893 0 1.647-1.213 2.902-2.737 2.902-.708 0-1.288-.278-1.695-.75v2.95h-1.42v.005ZM40.29 20.012c0-.944-.684-1.605-1.524-1.605s-1.524.675-1.524 1.605c0 .92.684 1.605 1.524 1.605s1.525-.666 1.525-1.605Zm.01 2.803v-.726a2.245 2.245 0 0 1-1.77.816c-1.538 0-2.704-1.232-2.704-2.893 0-1.647 1.213-2.903 2.737-2.903.718 0 1.322.316 1.737.807v-.708h1.379v5.607H40.3ZM26.976 17.756s.35-.652 1.213-.652c.368 0 .604.128.604.128v1.43s-.519-.321-.995-.255c-.477.066-.78.5-.78 1.086v3.322h-1.425v-5.607h1.379v.548h.004ZM59.175 16.892l-1.633-.934-1.657-.95c-1.095-.627-2.463.161-2.463 1.426v.213a.32.32 0 0 0 .165.283l.77.439a.319.319 0 0 0 .476-.279v-.505c0-.25.269-.406.486-.283l1.51.869 1.506.863a.324.324 0 0 1 0 .562l-1.506.864-1.51.868a.325.325 0 0 1-.486-.283v-.25c0-1.265-1.369-2.058-2.464-1.426l-1.657.949-1.633.934c-1.1.633-1.1 2.224 0 2.856l1.633.935 1.657.948c1.095.628 2.464-.16 2.464-1.425v-.212a.32.32 0 0 0-.165-.284l-.77-.439a.319.319 0 0 0-.476.279v.505c0 .25-.27.406-.487.283l-1.51-.868-1.506-.864a.324.324 0 0 1 0-.562l1.506-.863 1.51-.869a.325.325 0 0 1 .487.283v.25c0 1.265 1.368 2.058 2.463 1.426l1.657-.949 1.633-.934c1.1-.638 1.1-2.224 0-2.856ZM9.749 20.724C9.447 22.014 8.338 22.9 6.903 22.9 5.246 22.9 4 21.654 4 20.007c0-1.647 1.265-2.903 2.926-2.903 1.402 0 2.497.888 2.813 2.153H8.281a1.524 1.524 0 0 0-1.345-.84c-.83 0-1.525.684-1.525 1.59s.694 1.59 1.525 1.59a1.47 1.47 0 0 0 1.354-.873H9.75ZM10.405 22.81V14.9h1.411v7.91h-1.411ZM13.94 20.38c.1.83.694 1.298 1.444 1.298.595 0 1.053-.279 1.322-.727h1.444c-.335 1.19-1.402 1.95-2.803 1.95-1.695 0-2.88-1.19-2.88-2.88s1.256-2.912 2.913-2.912c1.67 0 2.879 1.232 2.879 2.912 0 .123-.01.246-.033.359H13.94Zm2.813-.878c-.099-.727-.694-1.166-1.388-1.166-.693 0-1.264.425-1.41 1.166h2.798ZM23.3 22.81v-.726c-.416.505-1.03.816-1.77.816-1.535 0-2.7-1.231-2.7-2.893 0-1.647 1.208-2.903 2.732-2.903.718 0 1.322.312 1.737.808v-.709h1.379v5.603h-1.379v.005Zm-.015-2.803c0-.94-.684-1.605-1.524-1.605s-1.525.67-1.525 1.605c0 .92.684 1.605 1.525 1.605.84 0 1.524-.66 1.524-1.605Z",
      fill: "#000"
    })]
  });
});
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/images/payment-methods/ideal.js
/**
 * External dependencies
 */


/* harmony default export */ const ideal = (function () {
  return /*#__PURE__*/_jsxs("svg", {
    width: "64",
    height: "40",
    viewBox: "0 0 64 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/_jsx("rect", {
      width: "64",
      height: "40",
      fill: "white"
    }), /*#__PURE__*/_jsx("mask", {
      id: "mask0_1_73",
      maskUnits: "userSpaceOnUse",
      x: "0",
      y: "0",
      width: "64",
      height: "40",
      children: /*#__PURE__*/_jsx("path", {
        d: "M0.0249939 0H63.72V40H0.0249939V0Z",
        fill: "white"
      })
    }), /*#__PURE__*/_jsxs("g", {
      mask: "url(#mask0_1_73)",
      children: [/*#__PURE__*/_jsx("path", {
        d: "M34.398 6C38.272 6.07 41.544 7.194 43.874 9.272C45.2188 10.4824 46.2595 11.9925 46.912 13.68C47.632 15.502 48 17.63 48 20C48 24.96 46.606 28.662 43.86 31.01C41.6 32.938 38.416 33.94 34.398 33.994V34H16V6H34.398ZM34.05 7.86H17.852V32.14H34.05C42.19 32.14 46.148 28.17 46.148 20C46.148 15.878 44.968 12.736 42.644 10.664C40.588 8.83 37.616 7.86 34.05 7.86ZM25.99 19.15V27.93H20.7V19.15H25.99ZM23.392 11.766C23.7852 11.766 24.1745 11.8434 24.5378 11.9939C24.901 12.1444 25.2311 12.3649 25.5091 12.6429C25.7871 12.9209 26.0076 13.251 26.1581 13.6142C26.3086 13.9775 26.386 14.3668 26.386 14.76C26.386 15.1532 26.3086 15.5425 26.1581 15.9058C26.0076 16.269 25.7871 16.5991 25.5091 16.8771C25.2311 17.1551 24.901 17.3756 24.5378 17.5261C24.1745 17.6766 23.7852 17.754 23.392 17.754C22.5979 17.754 21.8364 17.4386 21.2749 16.8771C20.7134 16.3156 20.398 15.5541 20.398 14.76C20.398 13.9659 20.7134 13.2044 21.2749 12.6429C21.8364 12.0814 22.5979 11.766 23.392 11.766Z",
        fill: "black"
      }), /*#__PURE__*/_jsx("path", {
        d: "M33.796 28.152H28.416V11.48H33.796H33.576C38.064 11.48 42.838 13.254 42.838 19.836C42.838 26.794 38.064 28.148 33.578 28.148H33.796V28.152Z",
        fill: "#DB4093"
      })]
    })]
  });
});
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/images/payment-methods/woo.js
/**
 * External dependencies
 */


/* harmony default export */ const woo = (function () {
  return /*#__PURE__*/_jsxs("svg", {
    width: "64",
    height: "40",
    viewBox: "0 0 64 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/_jsx("path", {
      d: "M61 0H3C1.34315 0 0 1.34315 0 3V37C0 38.6569 1.34315 40 3 40H61C62.6569 40 64 38.6569 64 37V3C64 1.34315 62.6569 0 61 0Z",
      fill: "#674399"
    }), /*#__PURE__*/_jsx("path", {
      d: "M40.8254 15.7289C41.7593 15.7289 42.508 15.9512 43.0713 16.396C43.6346 16.8407 43.9163 17.4263 43.9163 18.1527C43.9163 18.9161 43.6272 19.5165 43.0565 19.9464C42.4857 20.3763 41.6926 20.5987 40.6771 20.5987H40.3065V23.5858H38.1644V15.7289H40.8254ZM40.314 17.2336V19.0866C40.7958 19.0792 41.1515 19.0051 41.3739 18.8568C41.6037 18.7086 41.7149 18.4788 41.7149 18.1675C41.7149 17.8266 41.6037 17.5893 41.3813 17.4559C41.1664 17.3151 40.8105 17.241 40.314 17.2336Z",
      fill: "white"
    }), /*#__PURE__*/_jsx("path", {
      d: "M50.565 23.5784H48.3414L47.9781 22.2664H45.7175L45.3468 23.5784H43.1676L45.6655 15.7215H48.0671L50.565 23.5784ZM47.5705 20.8582C47.2517 19.687 47.0072 18.5751 46.8515 17.5226H46.8219C46.6513 18.6122 46.4142 19.7241 46.1103 20.8582H47.5705Z",
      fill: "white"
    }), /*#__PURE__*/_jsx("path", {
      d: "M49.2827 15.7289H51.6842C52.2179 16.8555 52.6033 17.7302 52.8405 18.338H52.8701C53.1074 17.708 53.4928 16.8407 54.0116 15.7289H56.4651L53.9375 20.0279V23.5784H51.7732V20.0279L49.2827 15.7289Z",
      fill: "white"
    }), /*#__PURE__*/_jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M33.4238 12.9999H10.6165C9.17111 12.9999 8 14.171 8 15.6091V24.3109C8 25.7489 9.17111 26.92 10.6091 26.92H21.4161L26.36 29.6699L25.2407 26.92H33.4238C34.8618 26.92 36.0329 25.7489 36.0329 24.3109V15.6091C36.0329 14.171 34.8618 12.9999 33.4238 12.9999ZM10.1348 15.0087C9.85306 15.0161 9.59364 15.1495 9.41577 15.3644C9.24524 15.5868 9.17853 15.8685 9.2379 16.1501C9.91235 20.4492 10.5424 23.3474 11.128 24.8446C11.3429 25.3931 11.6097 25.6525 11.9211 25.6303C12.3954 25.5932 12.9736 24.9335 13.6481 23.6364C13.7981 23.3364 13.9809 22.9721 14.1956 22.5442L14.197 22.5413C14.5019 21.9336 14.8709 21.1982 15.301 20.338C15.9237 22.495 16.7687 24.1182 17.836 25.2078C18.1399 25.5117 18.4364 25.6525 18.7403 25.6303C18.9997 25.6155 19.2369 25.4524 19.348 25.2152C19.4593 24.9855 19.5112 24.726 19.4815 24.4666C19.4073 23.4214 19.5186 21.9613 19.8002 20.1008C20.0893 18.1737 20.4599 16.795 20.9047 15.9648C20.9936 15.8018 21.0307 15.6091 21.0158 15.4163C21.001 15.1569 20.875 14.9123 20.6674 14.7567C20.4673 14.5861 20.2079 14.5046 19.9484 14.5268C19.6223 14.5417 19.3333 14.7344 19.1924 15.0308C18.4882 16.328 17.9842 18.4331 17.6804 21.3386C17.1985 20.0712 16.8354 18.7592 16.5981 17.425C16.4721 16.7431 16.1608 16.4244 15.6568 16.4615C15.3084 16.4836 15.0268 16.7135 14.797 17.1433L12.2843 21.9168C11.8766 20.2491 11.4912 18.2181 11.1354 15.8314C11.0464 15.2458 10.7129 14.9716 10.1348 15.0087ZM26.8567 17.1656C26.4712 16.4762 25.8042 15.9871 25.0259 15.8388C24.8183 15.7943 24.6108 15.7721 24.4032 15.7721C23.3063 15.7721 22.4093 16.3428 21.7126 17.4843C21.1196 18.4553 20.8083 19.5745 20.8232 20.7086C20.8232 21.5906 21.0085 22.3467 21.3716 22.9767C21.7571 23.6661 22.4242 24.1552 23.2024 24.3035C23.41 24.348 23.6175 24.3702 23.8251 24.3702C24.9295 24.3702 25.8263 23.7995 26.5157 22.658C27.1087 21.6796 27.42 20.5604 27.4052 19.4115C27.4052 18.5294 27.2199 17.7808 26.8567 17.1656ZM25.4113 20.3454C25.2556 21.094 24.9665 21.6573 24.5367 22.0428C24.2031 22.3467 23.8918 22.4653 23.6101 22.4134C23.3284 22.3615 23.1061 22.1095 22.9356 21.6722C22.8096 21.3386 22.7355 20.9902 22.7355 20.6271C22.7355 20.3454 22.7651 20.0638 22.817 19.7895C22.9283 19.3003 23.1283 18.8407 23.4248 18.4257C23.8028 17.8697 24.2031 17.6326 24.6182 17.7215C24.8998 17.7808 25.1222 18.0254 25.2927 18.4627C25.4187 18.7963 25.4928 19.1447 25.4928 19.5004C25.4928 19.7821 25.4706 20.0638 25.4113 20.3454ZM32.2008 15.8388C32.979 15.9871 33.6461 16.4762 34.0316 17.1656C34.3948 17.7808 34.5801 18.5294 34.5801 19.4115C34.5949 20.5604 34.2836 21.6796 33.6907 22.658C33.0013 23.7995 32.1044 24.3702 31 24.3702C30.7925 24.3702 30.5849 24.348 30.3774 24.3035C29.5991 24.1552 28.932 23.6661 28.5466 22.9767C28.1834 22.3467 27.998 21.5906 27.998 20.7086C27.9833 19.5745 28.2946 18.4553 28.8876 17.4843C29.5843 16.3428 30.4812 15.7721 31.5782 15.7721C31.7857 15.7721 31.9932 15.7943 32.2008 15.8388ZM31.7116 22.0428C32.1415 21.6573 32.4306 21.094 32.5862 20.3454C32.6456 20.0638 32.6677 19.7821 32.6677 19.5004C32.6677 19.1447 32.5936 18.7963 32.4676 18.4627C32.2972 18.0254 32.0748 17.7808 31.7931 17.7215C31.378 17.6326 30.9778 17.8697 30.5998 18.4257C30.3032 18.8407 30.1031 19.3003 29.992 19.7895C29.9401 20.0638 29.9104 20.3454 29.9104 20.6271C29.9104 20.9902 29.9845 21.3386 30.1105 21.6722C30.2811 22.1095 30.5034 22.3615 30.7851 22.4134C31.0668 22.4653 31.378 22.3467 31.7116 22.0428Z",
      fill: "white"
    })]
  });
});
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js");
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/slot-fill/index.js + 9 modules
var slot_fill = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/slot-fill/index.js");
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/components/WooPaymentGatewaySetup/WooPaymentGatewaySetup.tsx












var _excluded = ["id"];
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
 * WooCommerce Payment Gateway setup.
 *
 * @slotFill WooPaymentGatewaySetup
 * @scope woocommerce-admin
 * @param {Object} props    React props.
 * @param {string} props.id Setup id.
 */
var WooPaymentGatewaySetup = function WooPaymentGatewaySetup(_ref) {
  var id = _ref.id,
    props = (0,objectWithoutProperties/* default */.A)(_ref, _excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(slot_fill/* Fill */.SQ, _objectSpread({
    name: 'woocommerce_payment_gateway_setup_' + id
  }, props));
};
WooPaymentGatewaySetup.Slot = function (_ref2) {
  var id = _ref2.id,
    fillProps = _ref2.fillProps;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(slot_fill/* Slot */.DX, {
    name: 'woocommerce_payment_gateway_setup_' + id,
    fillProps: fillProps
  });
};
try {
    // @ts-ignore
    WooPaymentGatewaySetup.displayName = "WooPaymentGatewaySetup";
    // @ts-ignore
    WooPaymentGatewaySetup.__docgenInfo = { "description": "WooCommerce Payment Gateway setup.", "displayName": "WooPaymentGatewaySetup", "props": { "id": { "defaultValue": null, "description": "", "name": "id", "required": true, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/onboarding/src/components/WooPaymentGatewaySetup/WooPaymentGatewaySetup.tsx#WooPaymentGatewaySetup"] = { docgenInfo: WooPaymentGatewaySetup.__docgenInfo, name: "WooPaymentGatewaySetup", path: "../../packages/js/onboarding/src/components/WooPaymentGatewaySetup/WooPaymentGatewaySetup.tsx#WooPaymentGatewaySetup" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    Slot.displayName = "WooPaymentGatewaySetup.Slot";
    // @ts-ignore
    Slot.__docgenInfo = { "description": "", "displayName": "WooPaymentGatewaySetup.Slot", "props": { "name": { "defaultValue": null, "description": "Slot name.", "name": "name", "required": true, "type": { "name": "SlotKey" } }, "fillProps": { "defaultValue": { value: "{}" }, "description": "props to pass from `Slot` to `Fill`.", "name": "fillProps", "required": false, "type": { "name": "FillProps" } }, "bubblesVirtually": { "defaultValue": null, "description": "By default, events will bubble to their parents on the DOM hierarchy (native event bubbling).\nIf set to true, events will bubble to their virtual parent in the React elements hierarchy instead,\nalso accept an optional `className`, `id`, etc.  to add to the slot container.", "name": "bubblesVirtually", "required": false, "type": { "name": "boolean" } }, "children": { "defaultValue": null, "description": "A function that returns nodes to be rendered.\nSupported only when `bubblesVirtually` is `false`.", "name": "children", "required": false, "type": { "name": "((fills: ReactNode) => ReactNode)" } }, "className": { "defaultValue": null, "description": "Additional className for the `Slot` component.\nSupported only when `bubblesVirtually` is `true`.", "name": "className", "required": false, "type": { "name": "string" } }, "style": { "defaultValue": null, "description": "Additional styles for the `Slot` component.\nSupported only when `bubblesVirtually` is `true`.", "name": "style", "required": false, "type": { "name": "CSSProperties" } }, "as": { "defaultValue": null, "description": "The HTML element or React component to render the component as.", "name": "as", "required": false, "type": { "name": "enum", "value": [{ "value": "\"symbol\"" }, { "value": "\"object\"" }, { "value": "\"select\"" }, { "value": "\"slot\"" }, { "value": "\"style\"" }, { "value": "\"title\"" }, { "value": "\"progress\"" }, { "value": "\"text\"" }, { "value": "\"a\"" }, { "value": "\"abbr\"" }, { "value": "\"address\"" }, { "value": "\"area\"" }, { "value": "\"article\"" }, { "value": "\"aside\"" }, { "value": "\"audio\"" }, { "value": "\"b\"" }, { "value": "\"base\"" }, { "value": "\"bdi\"" }, { "value": "\"bdo\"" }, { "value": "\"big\"" }, { "value": "\"blockquote\"" }, { "value": "\"body\"" }, { "value": "\"br\"" }, { "value": "\"button\"" }, { "value": "\"canvas\"" }, { "value": "\"caption\"" }, { "value": "\"center\"" }, { "value": "\"cite\"" }, { "value": "\"code\"" }, { "value": "\"col\"" }, { "value": "\"colgroup\"" }, { "value": "\"data\"" }, { "value": "\"datalist\"" }, { "value": "\"dd\"" }, { "value": "\"del\"" }, { "value": "\"details\"" }, { "value": "\"dfn\"" }, { "value": "\"dialog\"" }, { "value": "\"div\"" }, { "value": "\"dl\"" }, { "value": "\"dt\"" }, { "value": "\"em\"" }, { "value": "\"embed\"" }, { "value": "\"fieldset\"" }, { "value": "\"figcaption\"" }, { "value": "\"figure\"" }, { "value": "\"footer\"" }, { "value": "\"form\"" }, { "value": "\"h1\"" }, { "value": "\"h2\"" }, { "value": "\"h3\"" }, { "value": "\"h4\"" }, { "value": "\"h5\"" }, { "value": "\"h6\"" }, { "value": "\"head\"" }, { "value": "\"header\"" }, { "value": "\"hgroup\"" }, { "value": "\"hr\"" }, { "value": "\"html\"" }, { "value": "\"i\"" }, { "value": "\"iframe\"" }, { "value": "\"img\"" }, { "value": "\"input\"" }, { "value": "\"ins\"" }, { "value": "\"kbd\"" }, { "value": "\"keygen\"" }, { "value": "\"label\"" }, { "value": "\"legend\"" }, { "value": "\"li\"" }, { "value": "\"link\"" }, { "value": "\"main\"" }, { "value": "\"map\"" }, { "value": "\"mark\"" }, { "value": "\"menu\"" }, { "value": "\"menuitem\"" }, { "value": "\"meta\"" }, { "value": "\"meter\"" }, { "value": "\"nav\"" }, { "value": "\"noindex\"" }, { "value": "\"noscript\"" }, { "value": "\"ol\"" }, { "value": "\"optgroup\"" }, { "value": "\"option\"" }, { "value": "\"output\"" }, { "value": "\"p\"" }, { "value": "\"param\"" }, { "value": "\"picture\"" }, { "value": "\"pre\"" }, { "value": "\"q\"" }, { "value": "\"rp\"" }, { "value": "\"rt\"" }, { "value": "\"ruby\"" }, { "value": "\"s\"" }, { "value": "\"samp\"" }, { "value": "\"search\"" }, { "value": "\"script\"" }, { "value": "\"section\"" }, { "value": "\"small\"" }, { "value": "\"source\"" }, { "value": "\"span\"" }, { "value": "\"strong\"" }, { "value": "\"sub\"" }, { "value": "\"summary\"" }, { "value": "\"sup\"" }, { "value": "\"table\"" }, { "value": "\"template\"" }, { "value": "\"tbody\"" }, { "value": "\"td\"" }, { "value": "\"textarea\"" }, { "value": "\"tfoot\"" }, { "value": "\"th\"" }, { "value": "\"thead\"" }, { "value": "\"time\"" }, { "value": "\"tr\"" }, { "value": "\"track\"" }, { "value": "\"u\"" }, { "value": "\"ul\"" }, { "value": "\"var\"" }, { "value": "\"video\"" }, { "value": "\"wbr\"" }, { "value": "\"webview\"" }, { "value": "\"svg\"" }, { "value": "\"animate\"" }, { "value": "\"animateMotion\"" }, { "value": "\"animateTransform\"" }, { "value": "\"circle\"" }, { "value": "\"clipPath\"" }, { "value": "\"defs\"" }, { "value": "\"desc\"" }, { "value": "\"ellipse\"" }, { "value": "\"feBlend\"" }, { "value": "\"feColorMatrix\"" }, { "value": "\"feComponentTransfer\"" }, { "value": "\"feComposite\"" }, { "value": "\"feConvolveMatrix\"" }, { "value": "\"feDiffuseLighting\"" }, { "value": "\"feDisplacementMap\"" }, { "value": "\"feDistantLight\"" }, { "value": "\"feDropShadow\"" }, { "value": "\"feFlood\"" }, { "value": "\"feFuncA\"" }, { "value": "\"feFuncB\"" }, { "value": "\"feFuncG\"" }, { "value": "\"feFuncR\"" }, { "value": "\"feGaussianBlur\"" }, { "value": "\"feImage\"" }, { "value": "\"feMerge\"" }, { "value": "\"feMergeNode\"" }, { "value": "\"feMorphology\"" }, { "value": "\"feOffset\"" }, { "value": "\"fePointLight\"" }, { "value": "\"feSpecularLighting\"" }, { "value": "\"feSpotLight\"" }, { "value": "\"feTile\"" }, { "value": "\"feTurbulence\"" }, { "value": "\"filter\"" }, { "value": "\"foreignObject\"" }, { "value": "\"g\"" }, { "value": "\"image\"" }, { "value": "\"line\"" }, { "value": "\"linearGradient\"" }, { "value": "\"marker\"" }, { "value": "\"mask\"" }, { "value": "\"metadata\"" }, { "value": "\"mpath\"" }, { "value": "\"path\"" }, { "value": "\"pattern\"" }, { "value": "\"polygon\"" }, { "value": "\"polyline\"" }, { "value": "\"radialGradient\"" }, { "value": "\"rect\"" }, { "value": "\"set\"" }, { "value": "\"stop\"" }, { "value": "\"switch\"" }, { "value": "\"textPath\"" }, { "value": "\"tspan\"" }, { "value": "\"use\"" }, { "value": "\"view\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/onboarding/src/components/WooPaymentGatewaySetup/WooPaymentGatewaySetup.tsx#WooPaymentGatewaySetup.Slot"] = { docgenInfo: WooPaymentGatewaySetup.Slot.__docgenInfo, name: "WooPaymentGatewaySetup.Slot", path: "../../packages/js/onboarding/src/components/WooPaymentGatewaySetup/WooPaymentGatewaySetup.tsx#WooPaymentGatewaySetup.Slot" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/components/WooPaymentGatewaySetup/index.ts

;// CONCATENATED MODULE: ../../packages/js/onboarding/src/components/WooPaymentGatewayConfigure/WooPaymentGatewayConfigure.tsx












var WooPaymentGatewayConfigure_excluded = ["id"];
function WooPaymentGatewayConfigure_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function WooPaymentGatewayConfigure_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? WooPaymentGatewayConfigure_ownKeys(Object(t), !0).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : WooPaymentGatewayConfigure_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
/**
 * External dependencies
 */



/**
 * WooCommerce Payment Gateway configuration
 *
 * @slotFill WooPaymentGatewayConfigure
 * @scope woocommerce-admin
 * @param {Object} props    React props.
 * @param {string} props.id gateway id.
 */
var WooPaymentGatewayConfigure = function WooPaymentGatewayConfigure(_ref) {
  var id = _ref.id,
    props = (0,objectWithoutProperties/* default */.A)(_ref, WooPaymentGatewayConfigure_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(slot_fill/* Fill */.SQ, WooPaymentGatewayConfigure_objectSpread({
    name: 'woocommerce_payment_gateway_configure_' + id
  }, props));
};
WooPaymentGatewayConfigure.Slot = function (_ref2) {
  var id = _ref2.id,
    fillProps = _ref2.fillProps;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(slot_fill/* Slot */.DX, {
    name: 'woocommerce_payment_gateway_configure_' + id,
    fillProps: fillProps
  });
};
try {
    // @ts-ignore
    WooPaymentGatewayConfigure.displayName = "WooPaymentGatewayConfigure";
    // @ts-ignore
    WooPaymentGatewayConfigure.__docgenInfo = { "description": "WooCommerce Payment Gateway configuration", "displayName": "WooPaymentGatewayConfigure", "props": { "id": { "defaultValue": null, "description": "", "name": "id", "required": true, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/onboarding/src/components/WooPaymentGatewayConfigure/WooPaymentGatewayConfigure.tsx#WooPaymentGatewayConfigure"] = { docgenInfo: WooPaymentGatewayConfigure.__docgenInfo, name: "WooPaymentGatewayConfigure", path: "../../packages/js/onboarding/src/components/WooPaymentGatewayConfigure/WooPaymentGatewayConfigure.tsx#WooPaymentGatewayConfigure" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    Slot.displayName = "WooPaymentGatewayConfigure.Slot";
    // @ts-ignore
    Slot.__docgenInfo = { "description": "", "displayName": "WooPaymentGatewayConfigure.Slot", "props": { "name": { "defaultValue": null, "description": "Slot name.", "name": "name", "required": true, "type": { "name": "SlotKey" } }, "fillProps": { "defaultValue": { value: "{}" }, "description": "props to pass from `Slot` to `Fill`.", "name": "fillProps", "required": false, "type": { "name": "FillProps" } }, "bubblesVirtually": { "defaultValue": null, "description": "By default, events will bubble to their parents on the DOM hierarchy (native event bubbling).\nIf set to true, events will bubble to their virtual parent in the React elements hierarchy instead,\nalso accept an optional `className`, `id`, etc.  to add to the slot container.", "name": "bubblesVirtually", "required": false, "type": { "name": "boolean" } }, "children": { "defaultValue": null, "description": "A function that returns nodes to be rendered.\nSupported only when `bubblesVirtually` is `false`.", "name": "children", "required": false, "type": { "name": "((fills: ReactNode) => ReactNode)" } }, "className": { "defaultValue": null, "description": "Additional className for the `Slot` component.\nSupported only when `bubblesVirtually` is `true`.", "name": "className", "required": false, "type": { "name": "string" } }, "style": { "defaultValue": null, "description": "Additional styles for the `Slot` component.\nSupported only when `bubblesVirtually` is `true`.", "name": "style", "required": false, "type": { "name": "CSSProperties" } }, "as": { "defaultValue": null, "description": "The HTML element or React component to render the component as.", "name": "as", "required": false, "type": { "name": "enum", "value": [{ "value": "\"symbol\"" }, { "value": "\"object\"" }, { "value": "\"select\"" }, { "value": "\"slot\"" }, { "value": "\"style\"" }, { "value": "\"title\"" }, { "value": "\"progress\"" }, { "value": "\"text\"" }, { "value": "\"a\"" }, { "value": "\"abbr\"" }, { "value": "\"address\"" }, { "value": "\"area\"" }, { "value": "\"article\"" }, { "value": "\"aside\"" }, { "value": "\"audio\"" }, { "value": "\"b\"" }, { "value": "\"base\"" }, { "value": "\"bdi\"" }, { "value": "\"bdo\"" }, { "value": "\"big\"" }, { "value": "\"blockquote\"" }, { "value": "\"body\"" }, { "value": "\"br\"" }, { "value": "\"button\"" }, { "value": "\"canvas\"" }, { "value": "\"caption\"" }, { "value": "\"center\"" }, { "value": "\"cite\"" }, { "value": "\"code\"" }, { "value": "\"col\"" }, { "value": "\"colgroup\"" }, { "value": "\"data\"" }, { "value": "\"datalist\"" }, { "value": "\"dd\"" }, { "value": "\"del\"" }, { "value": "\"details\"" }, { "value": "\"dfn\"" }, { "value": "\"dialog\"" }, { "value": "\"div\"" }, { "value": "\"dl\"" }, { "value": "\"dt\"" }, { "value": "\"em\"" }, { "value": "\"embed\"" }, { "value": "\"fieldset\"" }, { "value": "\"figcaption\"" }, { "value": "\"figure\"" }, { "value": "\"footer\"" }, { "value": "\"form\"" }, { "value": "\"h1\"" }, { "value": "\"h2\"" }, { "value": "\"h3\"" }, { "value": "\"h4\"" }, { "value": "\"h5\"" }, { "value": "\"h6\"" }, { "value": "\"head\"" }, { "value": "\"header\"" }, { "value": "\"hgroup\"" }, { "value": "\"hr\"" }, { "value": "\"html\"" }, { "value": "\"i\"" }, { "value": "\"iframe\"" }, { "value": "\"img\"" }, { "value": "\"input\"" }, { "value": "\"ins\"" }, { "value": "\"kbd\"" }, { "value": "\"keygen\"" }, { "value": "\"label\"" }, { "value": "\"legend\"" }, { "value": "\"li\"" }, { "value": "\"link\"" }, { "value": "\"main\"" }, { "value": "\"map\"" }, { "value": "\"mark\"" }, { "value": "\"menu\"" }, { "value": "\"menuitem\"" }, { "value": "\"meta\"" }, { "value": "\"meter\"" }, { "value": "\"nav\"" }, { "value": "\"noindex\"" }, { "value": "\"noscript\"" }, { "value": "\"ol\"" }, { "value": "\"optgroup\"" }, { "value": "\"option\"" }, { "value": "\"output\"" }, { "value": "\"p\"" }, { "value": "\"param\"" }, { "value": "\"picture\"" }, { "value": "\"pre\"" }, { "value": "\"q\"" }, { "value": "\"rp\"" }, { "value": "\"rt\"" }, { "value": "\"ruby\"" }, { "value": "\"s\"" }, { "value": "\"samp\"" }, { "value": "\"search\"" }, { "value": "\"script\"" }, { "value": "\"section\"" }, { "value": "\"small\"" }, { "value": "\"source\"" }, { "value": "\"span\"" }, { "value": "\"strong\"" }, { "value": "\"sub\"" }, { "value": "\"summary\"" }, { "value": "\"sup\"" }, { "value": "\"table\"" }, { "value": "\"template\"" }, { "value": "\"tbody\"" }, { "value": "\"td\"" }, { "value": "\"textarea\"" }, { "value": "\"tfoot\"" }, { "value": "\"th\"" }, { "value": "\"thead\"" }, { "value": "\"time\"" }, { "value": "\"tr\"" }, { "value": "\"track\"" }, { "value": "\"u\"" }, { "value": "\"ul\"" }, { "value": "\"var\"" }, { "value": "\"video\"" }, { "value": "\"wbr\"" }, { "value": "\"webview\"" }, { "value": "\"svg\"" }, { "value": "\"animate\"" }, { "value": "\"animateMotion\"" }, { "value": "\"animateTransform\"" }, { "value": "\"circle\"" }, { "value": "\"clipPath\"" }, { "value": "\"defs\"" }, { "value": "\"desc\"" }, { "value": "\"ellipse\"" }, { "value": "\"feBlend\"" }, { "value": "\"feColorMatrix\"" }, { "value": "\"feComponentTransfer\"" }, { "value": "\"feComposite\"" }, { "value": "\"feConvolveMatrix\"" }, { "value": "\"feDiffuseLighting\"" }, { "value": "\"feDisplacementMap\"" }, { "value": "\"feDistantLight\"" }, { "value": "\"feDropShadow\"" }, { "value": "\"feFlood\"" }, { "value": "\"feFuncA\"" }, { "value": "\"feFuncB\"" }, { "value": "\"feFuncG\"" }, { "value": "\"feFuncR\"" }, { "value": "\"feGaussianBlur\"" }, { "value": "\"feImage\"" }, { "value": "\"feMerge\"" }, { "value": "\"feMergeNode\"" }, { "value": "\"feMorphology\"" }, { "value": "\"feOffset\"" }, { "value": "\"fePointLight\"" }, { "value": "\"feSpecularLighting\"" }, { "value": "\"feSpotLight\"" }, { "value": "\"feTile\"" }, { "value": "\"feTurbulence\"" }, { "value": "\"filter\"" }, { "value": "\"foreignObject\"" }, { "value": "\"g\"" }, { "value": "\"image\"" }, { "value": "\"line\"" }, { "value": "\"linearGradient\"" }, { "value": "\"marker\"" }, { "value": "\"mask\"" }, { "value": "\"metadata\"" }, { "value": "\"mpath\"" }, { "value": "\"path\"" }, { "value": "\"pattern\"" }, { "value": "\"polygon\"" }, { "value": "\"polyline\"" }, { "value": "\"radialGradient\"" }, { "value": "\"rect\"" }, { "value": "\"set\"" }, { "value": "\"stop\"" }, { "value": "\"switch\"" }, { "value": "\"textPath\"" }, { "value": "\"tspan\"" }, { "value": "\"use\"" }, { "value": "\"view\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/onboarding/src/components/WooPaymentGatewayConfigure/WooPaymentGatewayConfigure.tsx#WooPaymentGatewayConfigure.Slot"] = { docgenInfo: WooPaymentGatewayConfigure.Slot.__docgenInfo, name: "WooPaymentGatewayConfigure.Slot", path: "../../packages/js/onboarding/src/components/WooPaymentGatewayConfigure/WooPaymentGatewayConfigure.tsx#WooPaymentGatewayConfigure.Slot" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/components/WooPaymentGatewayConfigure/index.ts

// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.date.to-string.js
var es_date_to_string = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.date.to-string.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.date.to-iso-string.js
var es_date_to_iso_string = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.date.to-iso-string.js");
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/components/WooOnboardingTaskReferral/index.ts



/**
 * This constructor function exists for type safety purposes, so when you create a pair of set/get functions they have the
 *  same type for the value they store/retrieve.
 */
function createStorageUtils(key, durationInSeconds) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'local';
  var storage = type === 'session' ? sessionStorage : localStorage;
  return {
    setWithExpiry: function setWithExpiry(value) {
      var now = new Date();
      var expiry = new Date(now.getTime() + durationInSeconds * 1000);
      var item = {
        data: value,
        expiry: expiry.toISOString()
      };
      storage.setItem(key, JSON.stringify(item));
    },
    getWithExpiry: function getWithExpiry() {
      var itemStr = storage.getItem(key);
      if (!itemStr) {
        return null;
      }
      var item = JSON.parse(itemStr);
      var now = new Date();
      if (now > new Date(item.expiry)) {
        storage.removeItem(key);
        return null;
      }
      return item.data;
    },
    remove: function remove() {
      storage.removeItem(key);
    }
  };
}
/**
 * Returns a pair of getter and setter for the task referral storage.
 *
 * @param {Object} options                  - The options object.
 * @param {string} options.taskId           - Name of the task.
 * @param {number} options.referralLifetime - Lifetime of the referral. Default of 60 seconds is a reasonable amount of time for referral handoff lifetime in most cases, since it really only needs to account for the page load duration
 */
var accessTaskReferralStorage = function accessTaskReferralStorage(_ref) {
  var taskId = _ref.taskId,
    _ref$referralLifetime = _ref.referralLifetime,
    referralLifetime = _ref$referralLifetime === void 0 ? 60 : _ref$referralLifetime;
  return createStorageUtils("wc_admin_task_referral_".concat(taskId), referralLifetime, 'session');
};
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/components/WooOnboardingTaskListItem/WooOnboardingTaskListItem.tsx












var WooOnboardingTaskListItem_excluded = ["id"];
function WooOnboardingTaskListItem_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function WooOnboardingTaskListItem_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? WooOnboardingTaskListItem_ownKeys(Object(t), !0).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : WooOnboardingTaskListItem_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
/**
 * External dependencies
 */



/**
 * A Fill for adding Onboarding Task List items.
 *
 * @slotFill WooOnboardingTaskListItem
 * @scope woocommerce-tasks
 * @param {Object} props    React props.
 * @param {string} props.id Task id.
 */
var WooOnboardingTaskListItem = function WooOnboardingTaskListItem(_ref) {
  var id = _ref.id,
    props = (0,objectWithoutProperties/* default */.A)(_ref, WooOnboardingTaskListItem_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(slot_fill/* Fill */.SQ, WooOnboardingTaskListItem_objectSpread({
    name: 'woocommerce_onboarding_task_list_item_' + id
  }, props));
};
WooOnboardingTaskListItem.Slot = function (_ref2) {
  var id = _ref2.id,
    fillProps = _ref2.fillProps;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(slot_fill/* Slot */.DX, {
    name: 'woocommerce_onboarding_task_list_item_' + id,
    fillProps: fillProps
  });
};
try {
    // @ts-ignore
    WooOnboardingTaskListItem.displayName = "WooOnboardingTaskListItem";
    // @ts-ignore
    WooOnboardingTaskListItem.__docgenInfo = { "description": "A Fill for adding Onboarding Task List items.", "displayName": "WooOnboardingTaskListItem", "props": { "id": { "defaultValue": null, "description": "", "name": "id", "required": true, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/onboarding/src/components/WooOnboardingTaskListItem/WooOnboardingTaskListItem.tsx#WooOnboardingTaskListItem"] = { docgenInfo: WooOnboardingTaskListItem.__docgenInfo, name: "WooOnboardingTaskListItem", path: "../../packages/js/onboarding/src/components/WooOnboardingTaskListItem/WooOnboardingTaskListItem.tsx#WooOnboardingTaskListItem" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    Slot.displayName = "WooOnboardingTaskListItem.Slot";
    // @ts-ignore
    Slot.__docgenInfo = { "description": "", "displayName": "WooOnboardingTaskListItem.Slot", "props": { "name": { "defaultValue": null, "description": "Slot name.", "name": "name", "required": true, "type": { "name": "SlotKey" } }, "fillProps": { "defaultValue": { value: "{}" }, "description": "props to pass from `Slot` to `Fill`.", "name": "fillProps", "required": false, "type": { "name": "FillProps" } }, "bubblesVirtually": { "defaultValue": null, "description": "By default, events will bubble to their parents on the DOM hierarchy (native event bubbling).\nIf set to true, events will bubble to their virtual parent in the React elements hierarchy instead,\nalso accept an optional `className`, `id`, etc.  to add to the slot container.", "name": "bubblesVirtually", "required": false, "type": { "name": "boolean" } }, "children": { "defaultValue": null, "description": "A function that returns nodes to be rendered.\nSupported only when `bubblesVirtually` is `false`.", "name": "children", "required": false, "type": { "name": "((fills: ReactNode) => ReactNode)" } }, "className": { "defaultValue": null, "description": "Additional className for the `Slot` component.\nSupported only when `bubblesVirtually` is `true`.", "name": "className", "required": false, "type": { "name": "string" } }, "style": { "defaultValue": null, "description": "Additional styles for the `Slot` component.\nSupported only when `bubblesVirtually` is `true`.", "name": "style", "required": false, "type": { "name": "CSSProperties" } }, "as": { "defaultValue": null, "description": "The HTML element or React component to render the component as.", "name": "as", "required": false, "type": { "name": "enum", "value": [{ "value": "\"symbol\"" }, { "value": "\"object\"" }, { "value": "\"select\"" }, { "value": "\"slot\"" }, { "value": "\"style\"" }, { "value": "\"title\"" }, { "value": "\"progress\"" }, { "value": "\"text\"" }, { "value": "\"a\"" }, { "value": "\"abbr\"" }, { "value": "\"address\"" }, { "value": "\"area\"" }, { "value": "\"article\"" }, { "value": "\"aside\"" }, { "value": "\"audio\"" }, { "value": "\"b\"" }, { "value": "\"base\"" }, { "value": "\"bdi\"" }, { "value": "\"bdo\"" }, { "value": "\"big\"" }, { "value": "\"blockquote\"" }, { "value": "\"body\"" }, { "value": "\"br\"" }, { "value": "\"button\"" }, { "value": "\"canvas\"" }, { "value": "\"caption\"" }, { "value": "\"center\"" }, { "value": "\"cite\"" }, { "value": "\"code\"" }, { "value": "\"col\"" }, { "value": "\"colgroup\"" }, { "value": "\"data\"" }, { "value": "\"datalist\"" }, { "value": "\"dd\"" }, { "value": "\"del\"" }, { "value": "\"details\"" }, { "value": "\"dfn\"" }, { "value": "\"dialog\"" }, { "value": "\"div\"" }, { "value": "\"dl\"" }, { "value": "\"dt\"" }, { "value": "\"em\"" }, { "value": "\"embed\"" }, { "value": "\"fieldset\"" }, { "value": "\"figcaption\"" }, { "value": "\"figure\"" }, { "value": "\"footer\"" }, { "value": "\"form\"" }, { "value": "\"h1\"" }, { "value": "\"h2\"" }, { "value": "\"h3\"" }, { "value": "\"h4\"" }, { "value": "\"h5\"" }, { "value": "\"h6\"" }, { "value": "\"head\"" }, { "value": "\"header\"" }, { "value": "\"hgroup\"" }, { "value": "\"hr\"" }, { "value": "\"html\"" }, { "value": "\"i\"" }, { "value": "\"iframe\"" }, { "value": "\"img\"" }, { "value": "\"input\"" }, { "value": "\"ins\"" }, { "value": "\"kbd\"" }, { "value": "\"keygen\"" }, { "value": "\"label\"" }, { "value": "\"legend\"" }, { "value": "\"li\"" }, { "value": "\"link\"" }, { "value": "\"main\"" }, { "value": "\"map\"" }, { "value": "\"mark\"" }, { "value": "\"menu\"" }, { "value": "\"menuitem\"" }, { "value": "\"meta\"" }, { "value": "\"meter\"" }, { "value": "\"nav\"" }, { "value": "\"noindex\"" }, { "value": "\"noscript\"" }, { "value": "\"ol\"" }, { "value": "\"optgroup\"" }, { "value": "\"option\"" }, { "value": "\"output\"" }, { "value": "\"p\"" }, { "value": "\"param\"" }, { "value": "\"picture\"" }, { "value": "\"pre\"" }, { "value": "\"q\"" }, { "value": "\"rp\"" }, { "value": "\"rt\"" }, { "value": "\"ruby\"" }, { "value": "\"s\"" }, { "value": "\"samp\"" }, { "value": "\"search\"" }, { "value": "\"script\"" }, { "value": "\"section\"" }, { "value": "\"small\"" }, { "value": "\"source\"" }, { "value": "\"span\"" }, { "value": "\"strong\"" }, { "value": "\"sub\"" }, { "value": "\"summary\"" }, { "value": "\"sup\"" }, { "value": "\"table\"" }, { "value": "\"template\"" }, { "value": "\"tbody\"" }, { "value": "\"td\"" }, { "value": "\"textarea\"" }, { "value": "\"tfoot\"" }, { "value": "\"th\"" }, { "value": "\"thead\"" }, { "value": "\"time\"" }, { "value": "\"tr\"" }, { "value": "\"track\"" }, { "value": "\"u\"" }, { "value": "\"ul\"" }, { "value": "\"var\"" }, { "value": "\"video\"" }, { "value": "\"wbr\"" }, { "value": "\"webview\"" }, { "value": "\"svg\"" }, { "value": "\"animate\"" }, { "value": "\"animateMotion\"" }, { "value": "\"animateTransform\"" }, { "value": "\"circle\"" }, { "value": "\"clipPath\"" }, { "value": "\"defs\"" }, { "value": "\"desc\"" }, { "value": "\"ellipse\"" }, { "value": "\"feBlend\"" }, { "value": "\"feColorMatrix\"" }, { "value": "\"feComponentTransfer\"" }, { "value": "\"feComposite\"" }, { "value": "\"feConvolveMatrix\"" }, { "value": "\"feDiffuseLighting\"" }, { "value": "\"feDisplacementMap\"" }, { "value": "\"feDistantLight\"" }, { "value": "\"feDropShadow\"" }, { "value": "\"feFlood\"" }, { "value": "\"feFuncA\"" }, { "value": "\"feFuncB\"" }, { "value": "\"feFuncG\"" }, { "value": "\"feFuncR\"" }, { "value": "\"feGaussianBlur\"" }, { "value": "\"feImage\"" }, { "value": "\"feMerge\"" }, { "value": "\"feMergeNode\"" }, { "value": "\"feMorphology\"" }, { "value": "\"feOffset\"" }, { "value": "\"fePointLight\"" }, { "value": "\"feSpecularLighting\"" }, { "value": "\"feSpotLight\"" }, { "value": "\"feTile\"" }, { "value": "\"feTurbulence\"" }, { "value": "\"filter\"" }, { "value": "\"foreignObject\"" }, { "value": "\"g\"" }, { "value": "\"image\"" }, { "value": "\"line\"" }, { "value": "\"linearGradient\"" }, { "value": "\"marker\"" }, { "value": "\"mask\"" }, { "value": "\"metadata\"" }, { "value": "\"mpath\"" }, { "value": "\"path\"" }, { "value": "\"pattern\"" }, { "value": "\"polygon\"" }, { "value": "\"polyline\"" }, { "value": "\"radialGradient\"" }, { "value": "\"rect\"" }, { "value": "\"set\"" }, { "value": "\"stop\"" }, { "value": "\"switch\"" }, { "value": "\"textPath\"" }, { "value": "\"tspan\"" }, { "value": "\"use\"" }, { "value": "\"view\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/onboarding/src/components/WooOnboardingTaskListItem/WooOnboardingTaskListItem.tsx#WooOnboardingTaskListItem.Slot"] = { docgenInfo: WooOnboardingTaskListItem.Slot.__docgenInfo, name: "WooOnboardingTaskListItem.Slot", path: "../../packages/js/onboarding/src/components/WooOnboardingTaskListItem/WooOnboardingTaskListItem.tsx#WooOnboardingTaskListItem.Slot" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/components/WooOnboardingTaskListItem/index.ts

;// CONCATENATED MODULE: ../../packages/js/onboarding/src/components/WooOnboardingTaskListHeader/WooOnboardingTaskListHeader.tsx












var WooOnboardingTaskListHeader_excluded = ["id"];
function WooOnboardingTaskListHeader_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function WooOnboardingTaskListHeader_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? WooOnboardingTaskListHeader_ownKeys(Object(t), !0).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : WooOnboardingTaskListHeader_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
/**
 * External dependencies
 */



/**
 * A Fill for adding Onboarding Task List headers.
 *
 * @slotFill WooOnboardingTaskListHeader
 * @scope woocommerce-tasks
 * @param {Object} props    React props.
 * @param {string} props.id Task id.
 */
var WooOnboardingTaskListHeader = function WooOnboardingTaskListHeader(_ref) {
  var id = _ref.id,
    props = (0,objectWithoutProperties/* default */.A)(_ref, WooOnboardingTaskListHeader_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(slot_fill/* Fill */.SQ
  // @ts-expect-error -- TODO: react-18-upgrade - examine why the type is inferred to have a name property and ts thinks that it will always override the name prop
  , WooOnboardingTaskListHeader_objectSpread({
    name: 'woocommerce_onboarding_task_list_header_' + id
  }, props));
};
WooOnboardingTaskListHeader.Slot = function (_ref2) {
  var id = _ref2.id,
    fillProps = _ref2.fillProps;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(slot_fill/* Slot */.DX, {
    name: 'woocommerce_onboarding_task_list_header_' + id,
    fillProps: fillProps
  });
};
try {
    // @ts-ignore
    WooOnboardingTaskListHeader.displayName = "WooOnboardingTaskListHeader";
    // @ts-ignore
    WooOnboardingTaskListHeader.__docgenInfo = { "description": "A Fill for adding Onboarding Task List headers.", "displayName": "WooOnboardingTaskListHeader", "props": { "id": { "defaultValue": null, "description": "", "name": "id", "required": true, "type": { "name": "string" } }, "name": { "defaultValue": null, "description": "The name of the slot to fill into.", "name": "name", "required": true, "type": { "name": "SlotKey" } }, "children": { "defaultValue": null, "description": "Children elements or render function.", "name": "children", "required": false, "type": { "name": "ReactNode | ((fillProps: FillProps) => ReactNode)" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/onboarding/src/components/WooOnboardingTaskListHeader/WooOnboardingTaskListHeader.tsx#WooOnboardingTaskListHeader"] = { docgenInfo: WooOnboardingTaskListHeader.__docgenInfo, name: "WooOnboardingTaskListHeader", path: "../../packages/js/onboarding/src/components/WooOnboardingTaskListHeader/WooOnboardingTaskListHeader.tsx#WooOnboardingTaskListHeader" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    Slot.displayName = "WooOnboardingTaskListHeader.Slot";
    // @ts-ignore
    Slot.__docgenInfo = { "description": "", "displayName": "WooOnboardingTaskListHeader.Slot", "props": { "id": { "defaultValue": null, "description": "", "name": "id", "required": false, "type": { "name": "string" } }, "name": { "defaultValue": null, "description": "Slot name.", "name": "name", "required": true, "type": { "name": "SlotKey" } }, "fillProps": { "defaultValue": { value: "{}" }, "description": "props to pass from `Slot` to `Fill`.", "name": "fillProps", "required": false, "type": { "name": "FillProps" } }, "bubblesVirtually": { "defaultValue": null, "description": "By default, events will bubble to their parents on the DOM hierarchy (native event bubbling).\nIf set to true, events will bubble to their virtual parent in the React elements hierarchy instead,\nalso accept an optional `className`, `id`, etc.  to add to the slot container.", "name": "bubblesVirtually", "required": false, "type": { "name": "boolean" } }, "children": { "defaultValue": null, "description": "A function that returns nodes to be rendered.\nSupported only when `bubblesVirtually` is `false`.", "name": "children", "required": false, "type": { "name": "((fills: ReactNode) => ReactNode)" } }, "className": { "defaultValue": null, "description": "Additional className for the `Slot` component.\nSupported only when `bubblesVirtually` is `true`.", "name": "className", "required": false, "type": { "name": "string" } }, "style": { "defaultValue": null, "description": "Additional styles for the `Slot` component.\nSupported only when `bubblesVirtually` is `true`.", "name": "style", "required": false, "type": { "name": "CSSProperties" } }, "as": { "defaultValue": null, "description": "The HTML element or React component to render the component as.", "name": "as", "required": false, "type": { "name": "enum", "value": [{ "value": "\"symbol\"" }, { "value": "\"object\"" }, { "value": "\"select\"" }, { "value": "\"slot\"" }, { "value": "\"style\"" }, { "value": "\"title\"" }, { "value": "\"progress\"" }, { "value": "\"text\"" }, { "value": "\"a\"" }, { "value": "\"abbr\"" }, { "value": "\"address\"" }, { "value": "\"area\"" }, { "value": "\"article\"" }, { "value": "\"aside\"" }, { "value": "\"audio\"" }, { "value": "\"b\"" }, { "value": "\"base\"" }, { "value": "\"bdi\"" }, { "value": "\"bdo\"" }, { "value": "\"big\"" }, { "value": "\"blockquote\"" }, { "value": "\"body\"" }, { "value": "\"br\"" }, { "value": "\"button\"" }, { "value": "\"canvas\"" }, { "value": "\"caption\"" }, { "value": "\"center\"" }, { "value": "\"cite\"" }, { "value": "\"code\"" }, { "value": "\"col\"" }, { "value": "\"colgroup\"" }, { "value": "\"data\"" }, { "value": "\"datalist\"" }, { "value": "\"dd\"" }, { "value": "\"del\"" }, { "value": "\"details\"" }, { "value": "\"dfn\"" }, { "value": "\"dialog\"" }, { "value": "\"div\"" }, { "value": "\"dl\"" }, { "value": "\"dt\"" }, { "value": "\"em\"" }, { "value": "\"embed\"" }, { "value": "\"fieldset\"" }, { "value": "\"figcaption\"" }, { "value": "\"figure\"" }, { "value": "\"footer\"" }, { "value": "\"form\"" }, { "value": "\"h1\"" }, { "value": "\"h2\"" }, { "value": "\"h3\"" }, { "value": "\"h4\"" }, { "value": "\"h5\"" }, { "value": "\"h6\"" }, { "value": "\"head\"" }, { "value": "\"header\"" }, { "value": "\"hgroup\"" }, { "value": "\"hr\"" }, { "value": "\"html\"" }, { "value": "\"i\"" }, { "value": "\"iframe\"" }, { "value": "\"img\"" }, { "value": "\"input\"" }, { "value": "\"ins\"" }, { "value": "\"kbd\"" }, { "value": "\"keygen\"" }, { "value": "\"label\"" }, { "value": "\"legend\"" }, { "value": "\"li\"" }, { "value": "\"link\"" }, { "value": "\"main\"" }, { "value": "\"map\"" }, { "value": "\"mark\"" }, { "value": "\"menu\"" }, { "value": "\"menuitem\"" }, { "value": "\"meta\"" }, { "value": "\"meter\"" }, { "value": "\"nav\"" }, { "value": "\"noindex\"" }, { "value": "\"noscript\"" }, { "value": "\"ol\"" }, { "value": "\"optgroup\"" }, { "value": "\"option\"" }, { "value": "\"output\"" }, { "value": "\"p\"" }, { "value": "\"param\"" }, { "value": "\"picture\"" }, { "value": "\"pre\"" }, { "value": "\"q\"" }, { "value": "\"rp\"" }, { "value": "\"rt\"" }, { "value": "\"ruby\"" }, { "value": "\"s\"" }, { "value": "\"samp\"" }, { "value": "\"search\"" }, { "value": "\"script\"" }, { "value": "\"section\"" }, { "value": "\"small\"" }, { "value": "\"source\"" }, { "value": "\"span\"" }, { "value": "\"strong\"" }, { "value": "\"sub\"" }, { "value": "\"summary\"" }, { "value": "\"sup\"" }, { "value": "\"table\"" }, { "value": "\"template\"" }, { "value": "\"tbody\"" }, { "value": "\"td\"" }, { "value": "\"textarea\"" }, { "value": "\"tfoot\"" }, { "value": "\"th\"" }, { "value": "\"thead\"" }, { "value": "\"time\"" }, { "value": "\"tr\"" }, { "value": "\"track\"" }, { "value": "\"u\"" }, { "value": "\"ul\"" }, { "value": "\"var\"" }, { "value": "\"video\"" }, { "value": "\"wbr\"" }, { "value": "\"webview\"" }, { "value": "\"svg\"" }, { "value": "\"animate\"" }, { "value": "\"animateMotion\"" }, { "value": "\"animateTransform\"" }, { "value": "\"circle\"" }, { "value": "\"clipPath\"" }, { "value": "\"defs\"" }, { "value": "\"desc\"" }, { "value": "\"ellipse\"" }, { "value": "\"feBlend\"" }, { "value": "\"feColorMatrix\"" }, { "value": "\"feComponentTransfer\"" }, { "value": "\"feComposite\"" }, { "value": "\"feConvolveMatrix\"" }, { "value": "\"feDiffuseLighting\"" }, { "value": "\"feDisplacementMap\"" }, { "value": "\"feDistantLight\"" }, { "value": "\"feDropShadow\"" }, { "value": "\"feFlood\"" }, { "value": "\"feFuncA\"" }, { "value": "\"feFuncB\"" }, { "value": "\"feFuncG\"" }, { "value": "\"feFuncR\"" }, { "value": "\"feGaussianBlur\"" }, { "value": "\"feImage\"" }, { "value": "\"feMerge\"" }, { "value": "\"feMergeNode\"" }, { "value": "\"feMorphology\"" }, { "value": "\"feOffset\"" }, { "value": "\"fePointLight\"" }, { "value": "\"feSpecularLighting\"" }, { "value": "\"feSpotLight\"" }, { "value": "\"feTile\"" }, { "value": "\"feTurbulence\"" }, { "value": "\"filter\"" }, { "value": "\"foreignObject\"" }, { "value": "\"g\"" }, { "value": "\"image\"" }, { "value": "\"line\"" }, { "value": "\"linearGradient\"" }, { "value": "\"marker\"" }, { "value": "\"mask\"" }, { "value": "\"metadata\"" }, { "value": "\"mpath\"" }, { "value": "\"path\"" }, { "value": "\"pattern\"" }, { "value": "\"polygon\"" }, { "value": "\"polyline\"" }, { "value": "\"radialGradient\"" }, { "value": "\"rect\"" }, { "value": "\"set\"" }, { "value": "\"stop\"" }, { "value": "\"switch\"" }, { "value": "\"textPath\"" }, { "value": "\"tspan\"" }, { "value": "\"use\"" }, { "value": "\"view\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/onboarding/src/components/WooOnboardingTaskListHeader/WooOnboardingTaskListHeader.tsx#WooOnboardingTaskListHeader.Slot"] = { docgenInfo: WooOnboardingTaskListHeader.Slot.__docgenInfo, name: "WooOnboardingTaskListHeader.Slot", path: "../../packages/js/onboarding/src/components/WooOnboardingTaskListHeader/WooOnboardingTaskListHeader.tsx#WooOnboardingTaskListHeader.Slot" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/components/WooOnboardingTaskListHeader/index.ts

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/regenerator/index.js");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.includes.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.includes.js");
// EXTERNAL MODULE: ../../packages/js/tracks/src/index.ts + 2 modules
var src = __webpack_require__("../../packages/js/tracks/src/index.ts");
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/components/WooOnboardingTask/WooOnboardingTask.tsx



var WooOnboardingTask_excluded = ["id"];
function WooOnboardingTask_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function WooOnboardingTask_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? WooOnboardingTask_ownKeys(Object(t), !0).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : WooOnboardingTask_ownKeys(Object(t)).forEach(function (r) {
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
 *
 * @param {string} taskId  Task id.
 * @param {string} variant The variant of the task.
 */

var trackView = /*#__PURE__*/function () {
  var _ref = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee(taskId, variant) {
    var activePlugins, installedPlugins, isJetpackConnected;
    return regenerator_default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          activePlugins = wp.data.select('wc/admin/plugins').getActivePlugins();
          installedPlugins = wp.data.select('wc/admin/plugins').getInstalledPlugins();
          isJetpackConnected = wp.data.select('wc/admin/plugins').isJetpackConnected() || false;
          (0,src/* recordEvent */.yM)('task_view', {
            task_name: taskId,
            variant: variant,
            wcs_installed: installedPlugins.includes('woocommerce-services'),
            wcs_active: activePlugins.includes('woocommerce-services'),
            jetpack_installed: installedPlugins.includes('jetpack'),
            jetpack_active: activePlugins.includes('jetpack'),
            jetpack_connected: isJetpackConnected
          });
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function trackView(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * A Fill for adding Onboarding tasks.
 *
 * @slotFill WooOnboardingTask
 * @scope woocommerce-tasks
 * @param {Object} props           React props.
 * @param {string} [props.variant] The variant of the task.
 * @param {Object} props.children  React component children
 * @param {string} props.id        Task id.
 */
var WooOnboardingTask = function WooOnboardingTask(_ref2) {
  var id = _ref2.id,
    props = (0,objectWithoutProperties/* default */.A)(_ref2, WooOnboardingTask_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(slot_fill/* Fill */.SQ, WooOnboardingTask_objectSpread({
    name: 'woocommerce_onboarding_task_' + id
  }, props));
};
WooOnboardingTask.Slot = function (_ref3) {
  var id = _ref3.id,
    fillProps = _ref3.fillProps;
  // The Slot is a React component and this hook works as expected.
  // eslint-disable-next-line react-hooks/rules-of-hooks
  (0,react.useEffect)(function () {
    trackView(id);
  }, [id]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(slot_fill/* Slot */.DX, {
    name: 'woocommerce_onboarding_task_' + id,
    fillProps: fillProps
  });
};

try {
    // @ts-ignore
    trackView.displayName = "trackView";
    // @ts-ignore
    trackView.__docgenInfo = { "description": "Internal dependencies", "displayName": "trackView", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/onboarding/src/components/WooOnboardingTask/WooOnboardingTask.tsx#trackView"] = { docgenInfo: trackView.__docgenInfo, name: "trackView", path: "../../packages/js/onboarding/src/components/WooOnboardingTask/WooOnboardingTask.tsx#trackView" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    WooOnboardingTask.displayName = "WooOnboardingTask";
    // @ts-ignore
    WooOnboardingTask.__docgenInfo = { "description": "A Fill for adding Onboarding tasks.", "displayName": "WooOnboardingTask", "props": { "id": { "defaultValue": null, "description": "", "name": "id", "required": true, "type": { "name": "string" } }, "variant": { "defaultValue": null, "description": "", "name": "variant", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/onboarding/src/components/WooOnboardingTask/WooOnboardingTask.tsx#WooOnboardingTask"] = { docgenInfo: WooOnboardingTask.__docgenInfo, name: "WooOnboardingTask", path: "../../packages/js/onboarding/src/components/WooOnboardingTask/WooOnboardingTask.tsx#WooOnboardingTask" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/components/WooOnboardingTask/index.ts

// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.trim.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.to-string.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.from.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.iterator.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.exec.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.iterator.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.iterator.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.iterator.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.is-array.js
var es_array_is_array = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.is-array.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/string-similarity@4.0.4/node_modules/string-similarity/src/index.js
var string_similarity_src = __webpack_require__("../../node_modules/.pnpm/string-similarity@4.0.4/node_modules/string-similarity/src/index.js");
var src_default = /*#__PURE__*/__webpack_require__.n(string_similarity_src);
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/utils/countries/location-mapping.ts
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */

/**
 * This file is used to map a location to a WC region label
 * so that we can find the correct country option
 * since WPCOM geolocation returns a different
 * region or city name.
 */

// Key is the country code, value is an object with keys as region/city names and values as WC region labels.
var MAPPING = {
  PH: {
    'National Capital Region': (0,build_module.__)('Metro Manila', 'woocommerce')
  },
  IT: {
    Rome: (0,build_module.__)('Roma', 'woocommerce')
  }
};

/**
 * Returns a WC mapping region name for the given country, region and city.
 */
var getMappingRegion = function getMappingRegion(_ref) {
  var countryCode = _ref.country_short,
    _ref$region = _ref.region,
    region = _ref$region === void 0 ? '' : _ref$region,
    _ref$city = _ref.city,
    city = _ref$city === void 0 ? '' : _ref$city;
  if (!countryCode) {
    return null;
  }
  var countryMapping = MAPPING[countryCode];
  if (!countryMapping) {
    return null;
  }
  var regionMapping = countryMapping[region];
  if (regionMapping) {
    return regionMapping;
  }
  var cityMapping = countryMapping[city];
  if (cityMapping) {
    return cityMapping;
  }
  return null;
};
/* harmony default export */ const location_mapping = ((/* unused pure expression or super */ null && (MAPPING)));
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/utils/countries/index.ts

















function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Country state option.
 */

/**
 * Returns a country option for the given location.
 */
var findCountryOption = function findCountryOption(countryStateOptions, location) {
  var minimumSimilarity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.7;
  if (!location) {
    return null;
  }
  var match = null;
  var matchSimilarity = minimumSimilarity;
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return -- don't want to put this inside the loop
  var mappingRegion = getMappingRegion(location);
  var _iterator = _createForOfIteratorHelper(countryStateOptions),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var option = _step.value;
      // Country matches exactly.
      if (option.key === location.country_short) {
        return option;
      }

      // Countries have regions such as 'US:CA'.
      var countryCode = option.key.split(':')[0];
      if (countryCode === location.country_short && option.label.includes('—')) {
        // WP GEO API Returns regions without accents.
        // Remove accents from the region to compare.
        // Málaga -> Malaga
        var wcRegion = option.label.split('—')[1].trim();

        // Region matches exactly with mapping.
        if (mappingRegion === wcRegion) {
          return option;
        }
        if (wcRegion.localeCompare(location.region || '', 'en', {
          sensitivity: 'base'
        }) === 0 || wcRegion.localeCompare(location.city || '', 'en', {
          sensitivity: 'base'
        }) === 0) {
          return option;
        }

        // Find the region with the highest similarity.
        var similarity = Math.max(src_default().compareTwoStrings(wcRegion, location.region || ''), src_default().compareTwoStrings(wcRegion, location.city || ''));
        if (similarity >= matchSimilarity) {
          match = option;
          matchSimilarity = similarity;
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return match;
};

/**
 * Returns just the country portion of a country:state string that is delimited with a colon.
 *
 * @param countryPossiblyWithState Country string that may or may not have a state. e.g 'US:CA', 'UG:UG312'
 * @return Just the country portion of the string, or undefined if input is undefined. e.g 'US', 'UG'
 */
var getCountry = function getCountry(countryPossiblyWithState) {
  var _countryPossiblyWithS;
  return (_countryPossiblyWithS = countryPossiblyWithState === null || countryPossiblyWithState === void 0 ? void 0 : countryPossiblyWithState.split(':')[0]) !== null && _countryPossiblyWithS !== void 0 ? _countryPossiblyWithS : undefined;
};
// EXTERNAL MODULE: ../../packages/js/onboarding/src/components/Loader/index.ts + 2 modules
var Loader = __webpack_require__("../../packages/js/onboarding/src/components/Loader/index.ts");
;// CONCATENATED MODULE: ../../packages/js/onboarding/src/index.ts






























/***/ }),

/***/ "../../packages/js/tracks/src/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  yM: () => (/* binding */ recordEvent)
});

// UNUSED EXPORTS: bumpStat, queueRecordEvent, recordPageView

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/typeof.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.is-array.js
var es_array_is_array = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.is-array.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.slice.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.for-each.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-properties.js
var es_object_define_properties = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-properties.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-property.js
var es_object_define_property = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-property.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/debug@4.3.4_supports-color@9.4.0/node_modules/debug/src/browser.js
var browser = __webpack_require__("../../node_modules/.pnpm/debug@4.3.4_supports-color@9.4.0/node_modules/debug/src/browser.js");
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);
;// CONCATENATED MODULE: ../../packages/js/tracks/src/utils.js
var utils_isDevelopmentMode = "production" === 'development';
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.iterator.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.iterator.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.iterator.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.url-search-params.js
var web_url_search_params = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.url-search-params.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.concat.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.entries.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.date.to-string.js
var es_date_to_string = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.date.to-string.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.regexp.to-string.js");
;// CONCATENATED MODULE: ../../packages/js/tracks/src/stats.ts













/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Module variables
 */
var tracksDebug = browser_default()('wc-admin:tracks:stats');
var GROUP_PREFIX = 'x_woocommerce-';

/**
 * Builds a query parameters from the given group and name parameters.
 *
 * This will automatically add the prefix `x_woocommerce-` to the group name.
 *
 * @param {Record<string, string> | string} group  - The group of stats or a single stat name.
 * @param {string}                          [name] - The name of the stat if group is a string.
 *
 * @return {URLSearchParams} The constructed query.
 */
function buildQueryParams(group, name) {
  var params = new URLSearchParams();
  params.append('v', 'wpcom-no-pv');
  if (_typeof(group) !== 'object') {
    params.append("".concat(GROUP_PREFIX).concat(group), name);
  } else {
    Object.entries(group).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];
      params.append("".concat(GROUP_PREFIX).concat(key), value);
    });
  }

  // Add a random number to the query string to avoid caching.
  params.append('t', Math.random().toString());
  return params;
}

/**
 * Bumps a stat or group of stats.
 *
 * @param {Record<string, string> | string} group  - The group of stats or a single stat name.
 * @param {string}                          [name] - The name of the stat if group is a string.
 * @return {boolean} True if the stat was successfully bumped, false otherwise.
 */
function bumpStat(group) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  if (_typeof(group) === 'object') {
    tracksDebug('Bumping stats %o', group);
  } else {
    tracksDebug('Bumping stat %s:%s', group, name);
    if (!name) {
      tracksDebug('No stat name provided for group %s', group);
      return false;
    }
  }
  var shouldBumpStat = !isDevelopmentMode && !!window.wcTracks && !!window.wcTracks.isEnabled;
  if (!shouldBumpStat) {
    return false;
  }
  var params = buildQueryParams(group, name);
  new window.Image().src = "".concat(document.location.protocol, "//pixel.wp.com/g.gif?").concat(params.toString());
  return true;
}
;// CONCATENATED MODULE: ../../packages/js/tracks/src/index.ts



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
      _defineProperty(e, r, t[r]);
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



/**
 * Module variables
 */
var src_tracksDebug = browser_default()('wc-admin:tracks');
var isRecordEventArgs = function isRecordEventArgs(args) {
  return args.length === 2 && typeof args[0] === 'string';
};

/**
 * Record an event to Tracks
 *
 * @param {string} eventName       The name of the event to record, don't include the wcadmin_ prefix
 * @param {Object} eventProperties event properties to include in the event
 */
function recordEvent(eventName, eventProperties) {
  src_tracksDebug('recordevent %s %o', 'wcadmin_' + eventName, eventProperties, {
    _tqk: window._tkq,
    shouldRecord: !utils_isDevelopmentMode && !!window._tkq && !!window.wcTracks && !!window.wcTracks.isEnabled
  });
  if (!window.wcTracks || typeof window.wcTracks.recordEvent !== 'function') {
    return false;
  }
  if (utils_isDevelopmentMode) {
    window.wcTracks.validateEvent(eventName, eventProperties);
    return false;
  }
  window.wcTracks.recordEvent(eventName, eventProperties);
}
var tracksQueue = {
  localStorageKey: function localStorageKey() {
    return 'tracksQueue';
  },
  clear: function clear() {
    if (!window.localStorage) {
      return;
    }
    window.localStorage.removeItem(tracksQueue.localStorageKey());
  },
  get: function get() {
    if (!window.localStorage) {
      return [];
    }
    var items = window.localStorage.getItem(tracksQueue.localStorageKey());
    var parsedJSONItems = items ? JSON.parse(items) : [];
    var arrayItems = Array.isArray(parsedJSONItems) ? parsedJSONItems : [];
    return arrayItems;
  },
  add: function add() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (!window.localStorage) {
      // If unable to queue, run it now.
      src_tracksDebug('Unable to queue, running now', {
        args: args
      });
      if (isRecordEventArgs(args)) {
        recordEvent.apply(void 0, args);
      } else {
        src_tracksDebug('Invalid args', args);
      }
      return;
    }
    var items = tracksQueue.get();
    var newItem = {
      args: args
    };
    items.push(newItem);
    items = items.slice(-100); // Upper limit.

    src_tracksDebug('Adding new item to queue.', newItem);
    window.localStorage.setItem(tracksQueue.localStorageKey(), JSON.stringify(items));
  },
  process: function process() {
    if (!window.localStorage) {
      return; // Not possible.
    }
    var items = tracksQueue.get();
    tracksQueue.clear();
    src_tracksDebug('Processing items in queue.', items);
    items.forEach(function (item) {
      if ((0,esm_typeof/* default */.A)(item) === 'object') {
        src_tracksDebug('Processing item in queue.', item);
        var args = item.args;
        if (isRecordEventArgs(args)) {
          recordEvent.apply(void 0, (0,toConsumableArray/* default */.A)(args));
        } else {
          src_tracksDebug('Invalid item args', item.args);
        }
      }
    });
  }
};

/**
 * Queue a tracks event.
 *
 * This allows you to delay tracks  events that would otherwise cause a race condition.
 * For example, when we trigger `wcadmin_tasklist_appearance_continue_setup` we're simultaneously moving the user to a new page via
 * `window.location`. This is an example of a race condition that should be avoided by enqueueing the event,
 * and therefore running it on the next pageview.
 *
 * @param {string} eventName       The name of the event to record, don't include the wcadmin_ prefix
 * @param {Object} eventProperties event properties to include in the event
 */

function queueRecordEvent(eventName, eventProperties) {
  tracksQueue.add(eventName, eventProperties);
}

/**
 * Record a page view to Tracks
 *
 * @param {string} path            the page/path to record a page view for
 * @param {Object} extraProperties extra event properties to include in the event
 */

function recordPageView(path, extraProperties) {
  if (!path) {
    return;
  }
  recordEvent('page_view', _objectSpread({
    path: path
  }, extraProperties));

  // Process queue.
  tracksQueue.process();
}

/***/ })

}]);