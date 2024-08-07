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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/useQuery.js\");\n/* harmony import */ var _app_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/providers */ \"(app-pages-browser)/./src/app/providers.tsx\");\n/* harmony import */ var _loading_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading-spinner */ \"(app-pages-browser)/./src/components/ui/loading-spinner.tsx\");\n/* harmony import */ var _public_coins_hand_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/coins-hand.png */ \"(app-pages-browser)/./public/coins-hand.png\");\n/* harmony import */ var _public_building_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/building.png */ \"(app-pages-browser)/./public/building.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils */ \"(app-pages-browser)/./src/utils.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst TransactionList = (param)=>{\n    let { address, rate } = param;\n    _s();\n    const { data, isLoading, error } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery)({\n        queryKey: [\n            \"transactionHistory\"\n        ],\n        queryFn: ()=>(0,_app_providers__WEBPACK_IMPORTED_MODULE_2__.getTransactionHistory)(address, \"txlist\")\n    });\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-full bg-gray-500\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loading_spinner__WEBPACK_IMPORTED_MODULE_3__.LoadingSpinner, {}, void 0, false, {\n                fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/components/ui/transaction.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/components/ui/transaction.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, undefined);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-white p-4\",\n            children: \"Error fetching transaction history\"\n        }, void 0, false, {\n            fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/components/ui/transaction.tsx\",\n            lineNumber: 27,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-white p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"\",\n                        children: \"Transactions:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/components/ui/transaction.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"opacity-40\",\n                        children: [\n                            \"See detail \",\n                            \"->\",\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/components/ui/transaction.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/components/ui/transaction.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: data === null || data === void 0 ? void 0 : data.map((tx, index)=>{\n                    const isIncoming = tx.to.toLowerCase() === address.toLowerCase();\n                    const transactionType = isIncoming ? \"income\" : \"outcome\";\n                    const valueInUsd = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.formatValueInUsd)(tx.value, rate);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TransactionComponent, {\n                        type: transactionType,\n                        amount: valueInUsd\n                    }, index, false, {\n                        fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/components/ui/transaction.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 18\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/components/ui/transaction.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/components/ui/transaction.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TransactionList, \"Z3b93vmhJEnCPN4ovcxRGbOtffM=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery\n    ];\n});\n_c = TransactionList;\nconst TransactionComponent = (param)=>{\n    let { type, amount } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-between\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-4 bg-gray-800 rounded-full \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            src: type === \"income\" ? _public_coins_hand_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"] : _public_building_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                            alt: \"transaction icon\",\n                            width: 24,\n                            height: 24\n                        }, void 0, false, {\n                            fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/components/ui/transaction.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/components/ui/transaction.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: type === \"income\" ? \"Income\" : \"Outcome\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/components/ui/transaction.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xs text-gray-500\",\n                                children: \"Transactions\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/components/ui/transaction.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/components/ui/transaction.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/components/ui/transaction.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-1 justify-end\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: type === \"income\" ? \"text-green-500\" : \"text-red-500\",\n                        children: [\n                            type === \"income\" ? \"+\" : \"-\",\n                            \" \",\n                            amount\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/components/ui/transaction.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xs text-gray-500\",\n                        children: \"Transfer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/components/ui/transaction.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/components/ui/transaction.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/components/ui/transaction.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = TransactionComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TransactionList);\nvar _c, _c1;\n$RefreshReg$(_c, \"TransactionList\");\n$RefreshReg$(_c1, \"TransactionComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3VpL3RyYW5zYWN0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ3VDO0FBQ1E7QUFDdEI7QUFDSztBQUNEO0FBQ3hCO0FBQ1k7QUFPMUMsTUFBTVEsa0JBQWtEO1FBQUMsRUFBRUMsT0FBTyxFQUFFQyxJQUFJLEVBQUU7O0lBQ3hFLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLEtBQUssRUFBRSxHQUFHWiwrREFBUUEsQ0FBQztRQUFFYSxVQUFVO1lBQUM7U0FBcUI7UUFBRUMsU0FBUyxJQUFNYixxRUFBcUJBLENBQUNPLFNBQVM7SUFBVTtJQUV4SSxJQUFJRyxXQUFXO1FBQ2IscUJBQ0UsOERBQUNJO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNkLDREQUFjQTs7Ozs7Ozs7OztJQUdyQjtJQUVBLElBQUlVLE9BQU87UUFDVCxxQkFBTyw4REFBQ0c7WUFBSUMsV0FBVTtzQkFBaUI7Ozs7OztJQUN6QztJQUVBLHFCQUNFLDhEQUFDRDtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBRUQsV0FBVTtrQ0FBRzs7Ozs7O2tDQUNoQiw4REFBQ0M7d0JBQUVELFdBQVU7OzRCQUFhOzRCQUFZOzRCQUFLOzs7Ozs7Ozs7Ozs7OzBCQUU3Qyw4REFBQ0U7MEJBQ0VSLGlCQUFBQSwyQkFBQUEsS0FBTVMsR0FBRyxDQUFDLENBQUNDLElBQVNDO29CQUNuQixNQUFNQyxhQUFhRixHQUFHRyxFQUFFLENBQUNDLFdBQVcsT0FBT2hCLFFBQVFnQixXQUFXO29CQUM5RCxNQUFNQyxrQkFBa0JILGFBQWEsV0FBVztvQkFDaEQsTUFBTUksYUFBYXBCLHdEQUFnQkEsQ0FBQ2MsR0FBR08sS0FBSyxFQUFFbEI7b0JBQzlDLHFCQUFPLDhEQUFDbUI7d0JBQWlDQyxNQUFNSjt3QkFBaUJLLFFBQVFKO3VCQUF0Q0w7Ozs7O2dCQUNwQzs7Ozs7Ozs7Ozs7O0FBSVI7R0EvQk1kOztRQUMrQlAsMkRBQVFBOzs7S0FEdkNPO0FBd0NOLE1BQU1xQix1QkFBOEM7UUFBQyxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRTtJQUNuRSxxQkFDRSw4REFBQ2Y7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNYLGtEQUFLQTs0QkFBQzBCLEtBQUtGLFNBQVMsV0FBVzFCLDhEQUFVQSxHQUFHQyw0REFBV0E7NEJBQUU0QixLQUFJOzRCQUFtQkMsT0FBTzs0QkFBSUMsUUFBUTs7Ozs7Ozs7Ozs7a0NBRXRHLDhEQUFDbkI7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDbUI7MENBQUlOLFNBQVMsV0FBVyxXQUFXOzs7Ozs7MENBQ3BDLDhEQUFDWjtnQ0FBRUQsV0FBVTswQ0FBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJekMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUVELFdBQVdhLFNBQVMsV0FBVyxtQkFBbUI7OzRCQUNsREEsU0FBUyxXQUFXLE1BQU07NEJBQUk7NEJBQUVDOzs7Ozs7O2tDQUVuQyw4REFBQ2I7d0JBQUVELFdBQVU7a0NBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJN0M7TUFyQk1ZO0FBdUJOLCtEQUFlckIsZUFBZUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy91aS90cmFuc2FjdGlvbi50c3g/ZWI2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VRdWVyeSwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknXG5pbXBvcnQgeyBnZXRUcmFuc2FjdGlvbkhpc3RvcnksIGdldEV0aFRvVXNkUmF0ZSB9IGZyb20gJ0AvYXBwL3Byb3ZpZGVycydcbmltcG9ydCB7IExvYWRpbmdTcGlubmVyIH0gZnJvbSAnLi9sb2FkaW5nLXNwaW5uZXInXG5pbXBvcnQgaW5jb21lSWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvY29pbnMtaGFuZC5wbmcnXG5pbXBvcnQgb3V0Y29tZUljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2J1aWxkaW5nLnBuZydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgZm9ybWF0VmFsdWVJblVzZCB9IGZyb20gJ0AvdXRpbHMnXG5cbmludGVyZmFjZSBUcmFuc2FjdGlvbkxpc3RQcm9wcyB7XG4gIGFkZHJlc3M6IHN0cmluZ1xuICByYXRlOiBhbnlcbn1cblxuY29uc3QgVHJhbnNhY3Rpb25MaXN0OiBSZWFjdC5GQzxUcmFuc2FjdGlvbkxpc3RQcm9wcz4gPSAoeyBhZGRyZXNzLCByYXRlIH0pID0+IHtcbiAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcsIGVycm9yIH0gPSB1c2VRdWVyeSh7IHF1ZXJ5S2V5OiBbJ3RyYW5zYWN0aW9uSGlzdG9yeSddLCBxdWVyeUZuOiAoKSA9PiBnZXRUcmFuc2FjdGlvbkhpc3RvcnkoYWRkcmVzcywgJ3R4bGlzdCcpIH0pXG5cbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBiZy1ncmF5LTUwMFwiPlxuICAgICAgICA8TG9hZGluZ1NwaW5uZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgcC00XCI+RXJyb3IgZmV0Y2hpbmcgdHJhbnNhY3Rpb24gaGlzdG9yeTwvZGl2PlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgcC00XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPlRyYW5zYWN0aW9uczo8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm9wYWNpdHktNDBcIj5TZWUgZGV0YWlsIHsnLT4nfSA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bD5cbiAgICAgICAge2RhdGE/Lm1hcCgodHg6IGFueSwgaW5kZXg6IGFueSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlzSW5jb21pbmcgPSB0eC50by50b0xvd2VyQ2FzZSgpID09PSBhZGRyZXNzLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvblR5cGUgPSBpc0luY29taW5nID8gJ2luY29tZScgOiAnb3V0Y29tZSdcbiAgICAgICAgICBjb25zdCB2YWx1ZUluVXNkID0gZm9ybWF0VmFsdWVJblVzZCh0eC52YWx1ZSwgcmF0ZSlcbiAgICAgICAgICByZXR1cm4gPFRyYW5zYWN0aW9uQ29tcG9uZW50IGtleT17aW5kZXh9IHR5cGU9e3RyYW5zYWN0aW9uVHlwZX0gYW1vdW50PXt2YWx1ZUluVXNkfSAvPlxuICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIClcbn1cblxudHlwZSBUcmFuc2FjdGlvblR5cGUgPSAnaW5jb21lJyB8ICdvdXRjb21lJ1xuXG5pbnRlcmZhY2UgVHJhbnNhY3Rpb24ge1xuICB0eXBlOiBUcmFuc2FjdGlvblR5cGVcbiAgYW1vdW50OiBzdHJpbmdcbn1cblxuY29uc3QgVHJhbnNhY3Rpb25Db21wb25lbnQ6IFJlYWN0LkZDPFRyYW5zYWN0aW9uPiA9ICh7IHR5cGUsIGFtb3VudCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYmctZ3JheS04MDAgcm91bmRlZC1mdWxsIFwiPlxuICAgICAgICAgIDxJbWFnZSBzcmM9e3R5cGUgPT09ICdpbmNvbWUnID8gaW5jb21lSWNvbiA6IG91dGNvbWVJY29ufSBhbHQ9XCJ0cmFuc2FjdGlvbiBpY29uXCIgd2lkdGg9ezI0fSBoZWlnaHQ9ezI0fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcDFcIj5cbiAgICAgICAgICA8aDE+e3R5cGUgPT09ICdpbmNvbWUnID8gJ0luY29tZScgOiAnT3V0Y29tZSd9PC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDBcIj5UcmFuc2FjdGlvbnM8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMSBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9e3R5cGUgPT09ICdpbmNvbWUnID8gJ3RleHQtZ3JlZW4tNTAwJyA6ICd0ZXh0LXJlZC01MDAnfT5cbiAgICAgICAgICB7dHlwZSA9PT0gJ2luY29tZScgPyAnKycgOiAnLSd9IHthbW91bnR9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCI+VHJhbnNmZXI8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2FjdGlvbkxpc3RcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVF1ZXJ5IiwiZ2V0VHJhbnNhY3Rpb25IaXN0b3J5IiwiTG9hZGluZ1NwaW5uZXIiLCJpbmNvbWVJY29uIiwib3V0Y29tZUljb24iLCJJbWFnZSIsImZvcm1hdFZhbHVlSW5Vc2QiLCJUcmFuc2FjdGlvbkxpc3QiLCJhZGRyZXNzIiwicmF0ZSIsImRhdGEiLCJpc0xvYWRpbmciLCJlcnJvciIsInF1ZXJ5S2V5IiwicXVlcnlGbiIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJ1bCIsIm1hcCIsInR4IiwiaW5kZXgiLCJpc0luY29taW5nIiwidG8iLCJ0b0xvd2VyQ2FzZSIsInRyYW5zYWN0aW9uVHlwZSIsInZhbHVlSW5Vc2QiLCJ2YWx1ZSIsIlRyYW5zYWN0aW9uQ29tcG9uZW50IiwidHlwZSIsImFtb3VudCIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ui/transaction.tsx\n"));

/***/ })

});