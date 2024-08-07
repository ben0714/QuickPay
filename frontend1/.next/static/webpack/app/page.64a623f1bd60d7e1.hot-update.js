"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/ui/transaction.tsx":
/*!*******************************************!*\
  !*** ./src/components/ui/transaction.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/useQuery.js\");\n/* harmony import */ var _app_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/providers */ \"(app-pages-browser)/./src/app/providers.tsx\");\n/* harmony import */ var _loading_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading-spinner */ \"(app-pages-browser)/./src/components/ui/loading-spinner.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst TransactionList = ()=>{\n    _s();\n    const address = \"0x72F969f810d832853A9C3838Da9FaE6682650319\";\n    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQueryClient)();\n    const rate = queryClient.getQueryData([\n        \"exchange_rate\"\n    ]);\n    const { data, isLoading, error } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)({\n        queryKey: [\n            \"transactionHistory\"\n        ],\n        queryFn: ()=>(0,_app_providers__WEBPACK_IMPORTED_MODULE_2__.getTransactionHistory)(address)\n    });\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loading_spinner__WEBPACK_IMPORTED_MODULE_3__.LoadingSpinner, {}, void 0, false, {\n            fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/components/ui/transaction.tsx\",\n            lineNumber: 17,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-white p-4\",\n            children: \"Error fetching transaction history\"\n        }, void 0, false, {\n            fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/components/ui/transaction.tsx\",\n            lineNumber: 21,\n            columnNumber: 12\n        }, undefined);\n    }\n    const formatValueInUsd = (valueInWei)=>{\n        const valueInEth = parseFloat(valueInWei) / 1e18;\n        return rate ? (valueInEth * rate).toFixed(2) : \"...\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-white p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"\",\n                        children: \"Transactions:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/components/ui/transaction.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"opacity-40\",\n                        children: [\n                            \"Count: \",\n                            data === null || data === void 0 ? void 0 : data.length\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/components/ui/transaction.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/components/ui/transaction.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: data === null || data === void 0 ? void 0 : data.map((tx, index)=>{\n                    const isIncoming = tx.to.toLowerCase() === address.toLowerCase();\n                    const transactionType = isIncoming ? \"income\" : \"outcome\";\n                    const valueInUsd = formatValueInUsd(tx.value);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TransactionComponent, {\n                        type: transactionType,\n                        amount: valueInUsd\n                    }, index, false, {\n                        fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/components/ui/transaction.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 18\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/components/ui/transaction.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/components/ui/transaction.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TransactionList, \"FA2P2/C6v4EPlVlmvihUFSCJF60=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQueryClient,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery\n    ];\n});\n_c = TransactionList;\nconst TransactionComponent = (param)=>{\n    let { type, amount } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Type: \",\n                    type\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/components/ui/transaction.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Amount: \",\n                    amount\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/components/ui/transaction.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/components/ui/transaction.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = TransactionComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TransactionList);\nvar _c, _c1;\n$RefreshReg$(_c, \"TransactionList\");\n$RefreshReg$(_c1, \"TransactionComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3VpL3RyYW5zYWN0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlCO0FBQ3VDO0FBQ1E7QUFDdEI7QUFJbEQsTUFBTUssa0JBQTRCOztJQUNoQyxNQUFNQyxVQUFVO0lBQ2hCLE1BQU1DLGNBQWNMLHFFQUFjQTtJQUVsQyxNQUFNTSxPQUFZRCxZQUFZRSxZQUFZLENBQUM7UUFBQztLQUFnQjtJQUU1RCxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxLQUFLLEVBQUUsR0FBR1gsK0RBQVFBLENBQUM7UUFBRVksVUFBVTtZQUFDO1NBQXFCO1FBQUVDLFNBQVMsSUFBTVgscUVBQXFCQSxDQUFDRztJQUFTO0lBRTlILElBQUlLLFdBQVc7UUFDYixxQkFBTyw4REFBQ1AsNERBQWNBOzs7OztJQUN4QjtJQUVBLElBQUlRLE9BQU87UUFDVCxxQkFBTyw4REFBQ0c7WUFBSUMsV0FBVTtzQkFBaUI7Ozs7OztJQUN6QztJQUVBLE1BQU1DLG1CQUFtQixDQUFDQztRQUN4QixNQUFNQyxhQUFhQyxXQUFXRixjQUFjO1FBQzVDLE9BQU9WLE9BQU8sQ0FBQ1csYUFBYVgsSUFBRyxFQUFHYSxPQUFPLENBQUMsS0FBSztJQUNqRDtJQUVBLHFCQUNFLDhEQUFDTjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDTTt3QkFBRU4sV0FBVTtrQ0FBRzs7Ozs7O2tDQUNoQiw4REFBQ007d0JBQUVOLFdBQVU7OzRCQUFhOzRCQUFRTixpQkFBQUEsMkJBQUFBLEtBQU1hLE1BQU07Ozs7Ozs7Ozs7Ozs7MEJBRWhELDhEQUFDQzswQkFDRWQsaUJBQUFBLDJCQUFBQSxLQUFNZSxHQUFHLENBQUMsQ0FBQ0MsSUFBU0M7b0JBQ25CLE1BQU1DLGFBQWFGLEdBQUdHLEVBQUUsQ0FBQ0MsV0FBVyxPQUFPeEIsUUFBUXdCLFdBQVc7b0JBQzlELE1BQU1DLGtCQUFrQkgsYUFBYSxXQUFXO29CQUNoRCxNQUFNSSxhQUFhZixpQkFBaUJTLEdBQUdPLEtBQUs7b0JBQzVDLHFCQUFPLDhEQUFDQzt3QkFBaUNDLE1BQU1KO3dCQUFpQkssUUFBUUo7dUJBQXRDTDs7Ozs7Z0JBQ3BDOzs7Ozs7Ozs7Ozs7QUFJUjtHQXJDTXRCOztRQUVnQkgsaUVBQWNBO1FBSUNELDJEQUFRQTs7O0tBTnZDSTtBQThDTixNQUFNNkIsdUJBQThDO1FBQUMsRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUU7SUFDbkUscUJBQ0UsOERBQUNyQjs7MEJBQ0MsOERBQUNPOztvQkFBRTtvQkFBT2E7Ozs7Ozs7MEJBQ1YsOERBQUNiOztvQkFBRTtvQkFBU2M7Ozs7Ozs7Ozs7Ozs7QUFHbEI7TUFQTUY7QUFTTiwrREFBZTdCLGVBQWVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdWkvdHJhbnNhY3Rpb24udHN4P2ViNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUXVlcnksIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5J1xuaW1wb3J0IHsgZ2V0VHJhbnNhY3Rpb25IaXN0b3J5LCBnZXRFdGhUb1VzZFJhdGUgfSBmcm9tICdAL2FwcC9wcm92aWRlcnMnXG5pbXBvcnQgeyBMb2FkaW5nU3Bpbm5lciB9IGZyb20gJy4vbG9hZGluZy1zcGlubmVyJ1xuaW1wb3J0IGluY29tZUljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2NvaW5zLWhhbmQucG5nJ1xuaW1wb3J0IG91dGNvbWVJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9idWlsZGluZy5wbmcnXG5cbmNvbnN0IFRyYW5zYWN0aW9uTGlzdDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IGFkZHJlc3MgPSAnMHg3MkY5NjlmODEwZDgzMjg1M0E5QzM4MzhEYTlGYUU2NjgyNjUwMzE5J1xuICBjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KClcblxuICBjb25zdCByYXRlOiBhbnkgPSBxdWVyeUNsaWVudC5nZXRRdWVyeURhdGEoWydleGNoYW5nZV9yYXRlJ10pXG5cbiAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcsIGVycm9yIH0gPSB1c2VRdWVyeSh7IHF1ZXJ5S2V5OiBbJ3RyYW5zYWN0aW9uSGlzdG9yeSddLCBxdWVyeUZuOiAoKSA9PiBnZXRUcmFuc2FjdGlvbkhpc3RvcnkoYWRkcmVzcykgfSlcblxuICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxMb2FkaW5nU3Bpbm5lciAvPlxuICB9XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBwLTRcIj5FcnJvciBmZXRjaGluZyB0cmFuc2FjdGlvbiBoaXN0b3J5PC9kaXY+XG4gIH1cblxuICBjb25zdCBmb3JtYXRWYWx1ZUluVXNkID0gKHZhbHVlSW5XZWk6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgY29uc3QgdmFsdWVJbkV0aCA9IHBhcnNlRmxvYXQodmFsdWVJbldlaSkgLyAxZTE4XG4gICAgcmV0dXJuIHJhdGUgPyAodmFsdWVJbkV0aCAqIHJhdGUpLnRvRml4ZWQoMikgOiAnLi4uJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgcC00XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPlRyYW5zYWN0aW9uczo8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm9wYWNpdHktNDBcIj5Db3VudDoge2RhdGE/Lmxlbmd0aH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bD5cbiAgICAgICAge2RhdGE/Lm1hcCgodHg6IGFueSwgaW5kZXg6IGFueSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlzSW5jb21pbmcgPSB0eC50by50b0xvd2VyQ2FzZSgpID09PSBhZGRyZXNzLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvblR5cGUgPSBpc0luY29taW5nID8gJ2luY29tZScgOiAnb3V0Y29tZSdcbiAgICAgICAgICBjb25zdCB2YWx1ZUluVXNkID0gZm9ybWF0VmFsdWVJblVzZCh0eC52YWx1ZSlcbiAgICAgICAgICByZXR1cm4gPFRyYW5zYWN0aW9uQ29tcG9uZW50IGtleT17aW5kZXh9IHR5cGU9e3RyYW5zYWN0aW9uVHlwZX0gYW1vdW50PXt2YWx1ZUluVXNkfSAvPlxuICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIClcbn1cblxudHlwZSBUcmFuc2FjdGlvblR5cGUgPSAnaW5jb21lJyB8ICdvdXRjb21lJ1xuXG5pbnRlcmZhY2UgVHJhbnNhY3Rpb24ge1xuICB0eXBlOiBUcmFuc2FjdGlvblR5cGVcbiAgYW1vdW50OiBzdHJpbmdcbn1cblxuY29uc3QgVHJhbnNhY3Rpb25Db21wb25lbnQ6IFJlYWN0LkZDPFRyYW5zYWN0aW9uPiA9ICh7IHR5cGUsIGFtb3VudCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxwPlR5cGU6IHt0eXBlfTwvcD5cbiAgICAgIDxwPkFtb3VudDoge2Ftb3VudH08L3A+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNhY3Rpb25MaXN0XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VRdWVyeSIsInVzZVF1ZXJ5Q2xpZW50IiwiZ2V0VHJhbnNhY3Rpb25IaXN0b3J5IiwiTG9hZGluZ1NwaW5uZXIiLCJUcmFuc2FjdGlvbkxpc3QiLCJhZGRyZXNzIiwicXVlcnlDbGllbnQiLCJyYXRlIiwiZ2V0UXVlcnlEYXRhIiwiZGF0YSIsImlzTG9hZGluZyIsImVycm9yIiwicXVlcnlLZXkiLCJxdWVyeUZuIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybWF0VmFsdWVJblVzZCIsInZhbHVlSW5XZWkiLCJ2YWx1ZUluRXRoIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJwIiwibGVuZ3RoIiwidWwiLCJtYXAiLCJ0eCIsImluZGV4IiwiaXNJbmNvbWluZyIsInRvIiwidG9Mb3dlckNhc2UiLCJ0cmFuc2FjdGlvblR5cGUiLCJ2YWx1ZUluVXNkIiwidmFsdWUiLCJUcmFuc2FjdGlvbkNvbXBvbmVudCIsInR5cGUiLCJhbW91bnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ui/transaction.tsx\n"));

/***/ })

});