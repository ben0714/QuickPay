"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"7a0132ff7957\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/M2RkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjdhMDEzMmZmNzk1N1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/providers.tsx":
/*!*******************************!*\
  !*** ./src/app/providers.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Providers: function() { return /* binding */ Providers; },\n/* harmony export */   getTransactionHistory: function() { return /* binding */ getTransactionHistory; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _alchemy_aa_alchemy_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @alchemy/aa-alchemy/react */ \"(app-pages-browser)/./node_modules/@alchemy/aa-alchemy/dist/esm/react/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/config */ \"(app-pages-browser)/./src/config.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js\");\n/* __next_internal_client_entry_do_not_use__ Providers,getTransactionHistory auto */ \n\n\n\n// [!region providers]\nconst Providers = (param)=>{\n    let { initialState, children } = param;\n    // providers:\n    // 1. theme provider makes it easy to switch between light and dark mode\n    // 2. alchemy account provider gives us access to react hooks everywhere\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {\n        client: _config__WEBPACK_IMPORTED_MODULE_2__.queryClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_alchemy_aa_alchemy_react__WEBPACK_IMPORTED_MODULE_1__.AlchemyAccountProvider, {\n            config: _config__WEBPACK_IMPORTED_MODULE_2__.config,\n            queryClient: _config__WEBPACK_IMPORTED_MODULE_2__.queryClient,\n            initialState: initialState,\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/app/providers.tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/app/providers.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Providers;\nasync function getTransactionHistory(address) {\n    const url = \"/api/rpc/blockscout?address=\".concat(address, \"&action=txlist\");\n    try {\n        const response = await fetch(url);\n        const data = await response.json();\n        if (data.status === \"1\") {\n            console.log(data.result) // Transaction history\n            ;\n        } else {\n            console.error(\"Error fetching transaction history:\", data.message);\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n    }\n} // [!endregion providers]\nvar _c;\n$RefreshReg$(_c, \"Providers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvdmlkZXJzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRWdHO0FBRWxEO0FBQ2E7QUFHM0Qsc0JBQXNCO0FBQ2YsTUFBTUksWUFBWTtRQUFDLEVBQ3hCQyxZQUFZLEVBQ1pDLFFBQVEsRUFHUjtJQUNBLGFBQWE7SUFDYix3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHFCQUNFLDhEQUFDSCxzRUFBbUJBO1FBQUNJLFFBQVFMLGdEQUFXQTtrQkFDdEMsNEVBQUNGLDZFQUFzQkE7WUFBQ0MsUUFBUUEsMkNBQU1BO1lBQUVDLGFBQWFBLGdEQUFXQTtZQUFFRyxjQUFjQTtzQkFDN0VDOzs7Ozs7Ozs7OztBQUlULEVBQUM7S0FoQllGO0FBa0JOLGVBQWVJLHNCQUFzQkMsT0FBZTtJQUN6RCxNQUFNQyxNQUFNLCtCQUF1QyxPQUFSRCxTQUFRO0lBRW5ELElBQUk7UUFDRixNQUFNRSxXQUFXLE1BQU1DLE1BQU1GO1FBQzdCLE1BQU1HLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtRQUVoQyxJQUFJRCxLQUFLRSxNQUFNLEtBQUssS0FBSztZQUN2QkMsUUFBUUMsR0FBRyxDQUFDSixLQUFLSyxNQUFNLEVBQUUsc0JBQXNCOztRQUNqRCxPQUFPO1lBQ0xGLFFBQVFHLEtBQUssQ0FBQyx1Q0FBdUNOLEtBQUtPLE9BQU87UUFDbkU7SUFDRixFQUFFLE9BQU9ELE9BQU87UUFDZEgsUUFBUUcsS0FBSyxDQUFDLFVBQVVBO0lBQzFCO0FBQ0YsRUFFQSx5QkFBeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm92aWRlcnMudHN4PzkzMjYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IEFsY2hlbXlBY2NvdW50UHJvdmlkZXIsIEFsY2hlbXlBY2NvdW50c1Byb3ZpZGVyUHJvcHMgfSBmcm9tICdAYWxjaGVteS9hYS1hbGNoZW15L3JlYWN0J1xuaW1wb3J0IHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbmZpZywgcXVlcnlDbGllbnQgfSBmcm9tICdAL2NvbmZpZydcbmltcG9ydCB7IFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnbmV4dC10aGVtZXMnXG5cbi8vIFshcmVnaW9uIHByb3ZpZGVyc11cbmV4cG9ydCBjb25zdCBQcm92aWRlcnMgPSAoe1xuICBpbml0aWFsU3RhdGUsXG4gIGNoaWxkcmVuLFxufTogUHJvcHNXaXRoQ2hpbGRyZW48e1xuICBpbml0aWFsU3RhdGU/OiBBbGNoZW15QWNjb3VudHNQcm92aWRlclByb3BzWydpbml0aWFsU3RhdGUnXVxufT4pID0+IHtcbiAgLy8gcHJvdmlkZXJzOlxuICAvLyAxLiB0aGVtZSBwcm92aWRlciBtYWtlcyBpdCBlYXN5IHRvIHN3aXRjaCBiZXR3ZWVuIGxpZ2h0IGFuZCBkYXJrIG1vZGVcbiAgLy8gMi4gYWxjaGVteSBhY2NvdW50IHByb3ZpZGVyIGdpdmVzIHVzIGFjY2VzcyB0byByZWFjdCBob29rcyBldmVyeXdoZXJlXG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgICA8QWxjaGVteUFjY291bnRQcm92aWRlciBjb25maWc9e2NvbmZpZ30gcXVlcnlDbGllbnQ9e3F1ZXJ5Q2xpZW50fSBpbml0aWFsU3RhdGU9e2luaXRpYWxTdGF0ZX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQWxjaGVteUFjY291bnRQcm92aWRlcj5cbiAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRyYW5zYWN0aW9uSGlzdG9yeShhZGRyZXNzOiBzdHJpbmcpIHtcbiAgY29uc3QgdXJsID0gYC9hcGkvcnBjL2Jsb2Nrc2NvdXQ/YWRkcmVzcz0ke2FkZHJlc3N9JmFjdGlvbj10eGxpc3RgXG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybClcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgICBpZiAoZGF0YS5zdGF0dXMgPT09ICcxJykge1xuICAgICAgY29uc29sZS5sb2coZGF0YS5yZXN1bHQpIC8vIFRyYW5zYWN0aW9uIGhpc3RvcnlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdHJhbnNhY3Rpb24gaGlzdG9yeTonLCBkYXRhLm1lc3NhZ2UpXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKVxuICB9XG59XG5cbi8vIFshZW5kcmVnaW9uIHByb3ZpZGVyc11cbiJdLCJuYW1lcyI6WyJBbGNoZW15QWNjb3VudFByb3ZpZGVyIiwiY29uZmlnIiwicXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiUHJvdmlkZXJzIiwiaW5pdGlhbFN0YXRlIiwiY2hpbGRyZW4iLCJjbGllbnQiLCJnZXRUcmFuc2FjdGlvbkhpc3RvcnkiLCJhZGRyZXNzIiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsInJlc3VsdCIsImVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/providers.tsx\n"));

/***/ })

});