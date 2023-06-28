"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/theme-toggle-button.js":
/*!*******************************************!*\
  !*** ./components/theme-toggle-button.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ThemeToggleButton = ()=>{\n    _s();\n    const { toggleColorMode } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n        mode: \"wait\",\n        initial: false,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\m-m-p\\\\my-website-portfolio\\\\components\\\\theme-toggle-button.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {\n                \"aria-label\": \"Toggle theme\",\n                colorScheme: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"purple\", \"orange\"),\n                icon: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.MoonIcon, {}, void 0, false, void 0, void 0), /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.SunIcon, {}, void 0, false, void 0, void 0)),\n                onClick: toggleColorMode\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\m-m-p\\\\my-website-portfolio\\\\components\\\\theme-toggle-button.js\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\m-m-p\\\\my-website-portfolio\\\\components\\\\theme-toggle-button.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ThemeToggleButton, \"z6iVz21kxQGTgymWp2190T2RIQw=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue\n    ];\n});\n_c = ThemeToggleButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeToggleButton);\nvar _c;\n$RefreshReg$(_c, \"ThemeToggleButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RoZW1lLXRvZ2dsZS1idXR0b24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0Q7QUFDdUI7QUFDMUI7QUFFckQsTUFBTU8sb0JBQXFCOztJQUN2QixNQUFNLEVBQUVDLGVBQWUsRUFBRSxHQUFHTCw4REFBWUE7SUFFeEMscUJBQ0ksOERBQUNILDBEQUFlQTtRQUFDUyxNQUFLO1FBQU9DLFNBQVM7OzBCQUN0Qyw4REFBQ1QsaURBQU1BLENBQUNVOzs7OzswQkFJUiw4REFBQ1Qsd0RBQVVBO2dCQUFDVSxjQUFXO2dCQUN2QkMsYUFBYVQsbUVBQWlCQSxDQUFDLFVBQVU7Z0JBQ3pDVSxNQUFNVixtRUFBaUJBLGVBQUMsOERBQUNFLHNEQUFRQSxvREFBSyw4REFBQ0QscURBQU9BO2dCQUM5Q1UsU0FBU1A7Ozs7Ozs7Ozs7OztBQUlqQjtHQWhCTUQ7O1FBQzBCSiwwREFBWUE7UUFTdkJDLCtEQUFpQkE7UUFDeEJBLCtEQUFpQkE7OztLQVh6Qkc7QUFrQk4sK0RBQWVBLGlCQUFpQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RoZW1lLXRvZ2dsZS1idXR0b24uanM/Y2NhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCB7IEljb25CdXR0b24sIHVzZUNvbG9yTW9kZSwgdXNlQ29sb3JNb2RlVmFsdWUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBTdW5JY29uLCAgTW9vbkljb259IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XHJcblxyXG5jb25zdCBUaGVtZVRvZ2dsZUJ1dHRvbiAgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHRvZ2dsZUNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKClcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIG1vZGU9XCJ3YWl0XCIgaW5pdGlhbD17ZmFsc2V9PlxyXG4gICAgICAgIDxtb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cIlRvZ2dsZSB0aGVtZVwiXHJcbiAgICAgICAgY29sb3JTY2hlbWU9e3VzZUNvbG9yTW9kZVZhbHVlKCdwdXJwbGUnLCAnb3JhbmdlJyl9XHJcbiAgICAgICAgaWNvbj17dXNlQ29sb3JNb2RlVmFsdWUoPE1vb25JY29uIC8+LCA8U3VuSWNvbiAvPil9XHJcbiAgICAgICAgb25DbGljaz17dG9nZ2xlQ29sb3JNb2RlfVxyXG4gICAgICAgID48L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRoZW1lVG9nZ2xlQnV0dG9uIl0sIm5hbWVzIjpbIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsIkljb25CdXR0b24iLCJ1c2VDb2xvck1vZGUiLCJ1c2VDb2xvck1vZGVWYWx1ZSIsIlN1bkljb24iLCJNb29uSWNvbiIsIlRoZW1lVG9nZ2xlQnV0dG9uIiwidG9nZ2xlQ29sb3JNb2RlIiwibW9kZSIsImluaXRpYWwiLCJkaXYiLCJhcmlhLWxhYmVsIiwiY29sb3JTY2hlbWUiLCJpY29uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/theme-toggle-button.js\n"));

/***/ })

});