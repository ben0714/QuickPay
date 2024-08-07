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

/***/ "(app-pages-browser)/./src/components/profile-card.tsx":
/*!*****************************************!*\
  !*** ./src/components/profile-card.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProfileCard: function() { return /* binding */ ProfileCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _alchemy_aa_alchemy_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @alchemy/aa-alchemy/react */ \"(app-pages-browser)/./node_modules/@alchemy/aa-alchemy/dist/esm/react/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config */ \"(app-pages-browser)/./src/config.ts\");\n/* harmony import */ var _ui_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/header */ \"(app-pages-browser)/./src/components/ui/header.tsx\");\n/* harmony import */ var _ui_transaction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/transaction */ \"(app-pages-browser)/./src/components/ui/transaction.tsx\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/useQuery.js\");\n/* __next_internal_client_entry_do_not_use__ ProfileCard auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ProfileCard = ()=>{\n    _s();\n    (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useQuery)({\n        queryKey: [\n            \"exchange_rate\"\n        ],\n        queryFn: ()=>getTransactionHistory(address)\n    });\n    const user = (0,_alchemy_aa_alchemy_react__WEBPACK_IMPORTED_MODULE_2__.useUser)();\n    const { address } = (0,_alchemy_aa_alchemy_react__WEBPACK_IMPORTED_MODULE_2__.useAccount)({\n        type: _config__WEBPACK_IMPORTED_MODULE_3__.accountType\n    });\n    const { logout } = (0,_alchemy_aa_alchemy_react__WEBPACK_IMPORTED_MODULE_2__.useLogout)();\n    // [!region sending-user-op]\n    // use config values to initialize our smart account client\n    const { client } = (0,_alchemy_aa_alchemy_react__WEBPACK_IMPORTED_MODULE_2__.useSmartAccountClient)({\n        type: _config__WEBPACK_IMPORTED_MODULE_3__.accountType,\n        gasManagerConfig: _config__WEBPACK_IMPORTED_MODULE_3__.gasManagerConfig,\n        opts: _config__WEBPACK_IMPORTED_MODULE_3__.accountClientOptions\n    });\n    // provide the useSendUserOperation with a client to send a UO\n    // this hook provides us with a status, error, and a result\n    const { sendUserOperation, sendUserOperationResult, isSendingUserOperation, error: isSendUserOperationError } = (0,_alchemy_aa_alchemy_react__WEBPACK_IMPORTED_MODULE_2__.useSendUserOperation)({\n        client,\n        waitForTxn: true\n    });\n    const send = (evt)=>{\n        evt.preventDefault();\n        // collect all the form values from the user input\n        const formData = new FormData(evt.currentTarget);\n        const target = formData.get(\"to\");\n        const data = formData.get(\"data\");\n        const value = formData.get(\"value\");\n        // send the user operation\n        sendUserOperation({\n            uo: {\n                target,\n                data,\n                value: value ? BigInt(value) : 0n\n            }\n        });\n    };\n    // [!endregion sending-user-op]\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col bg-primary-blue min-h-screen w-full gap-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/components/profile-card.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_transaction__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/components/profile-card.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gelegbalsanboldbaatar/Documents/GitHub/hackathon/frontend1/src/components/profile-card.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProfileCard, \"XRxm+kuC71HYOzPeDebllxFvtXU=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useQuery,\n        _alchemy_aa_alchemy_react__WEBPACK_IMPORTED_MODULE_2__.useUser,\n        _alchemy_aa_alchemy_react__WEBPACK_IMPORTED_MODULE_2__.useAccount,\n        _alchemy_aa_alchemy_react__WEBPACK_IMPORTED_MODULE_2__.useLogout,\n        _alchemy_aa_alchemy_react__WEBPACK_IMPORTED_MODULE_2__.useSmartAccountClient,\n        _alchemy_aa_alchemy_react__WEBPACK_IMPORTED_MODULE_2__.useSendUserOperation\n    ];\n});\n_c = ProfileCard;\nvar _c;\n$RefreshReg$(_c, \"ProfileCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Byb2ZpbGUtY2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFd0M7QUFDK0U7QUFDMUI7QUFNN0Q7QUFDVTtBQUNNO0FBRXpDLE1BQU1hLGNBQWM7O0lBQ3pCRCwrREFBUUEsQ0FBQztRQUFFRSxVQUFVO1lBQUM7U0FBZ0I7UUFBRUMsU0FBUyxJQUFNQyxzQkFBc0JDO0lBQVM7SUFFdEYsTUFBTUMsT0FBT2Isa0VBQU9BO0lBQ3BCLE1BQU0sRUFBRVksT0FBTyxFQUFFLEdBQUdoQixxRUFBVUEsQ0FBQztRQUFFa0IsTUFBTWIsZ0RBQVdBO0lBQUM7SUFDbkQsTUFBTSxFQUFFYyxNQUFNLEVBQUUsR0FBR2xCLG9FQUFTQTtJQUU1Qiw0QkFBNEI7SUFDNUIsMkRBQTJEO0lBQzNELE1BQU0sRUFBRW1CLE1BQU0sRUFBRSxHQUFHakIsZ0ZBQXFCQSxDQUFDO1FBQ3ZDZSxNQUFNYixnREFBV0E7UUFDakJDLGdCQUFnQkEsdURBQUFBO1FBQ2hCRSxJQUFJQSwyREFBQUE7SUFDTjtJQUVBLDhEQUE4RDtJQUM5RCwyREFBMkQ7SUFDM0QsTUFBTSxFQUFFYSxpQkFBaUIsRUFBRUMsdUJBQXVCLEVBQUVDLHNCQUFzQixFQUFFQyxPQUFPQyx3QkFBd0IsRUFBRSxHQUFHdkIsK0VBQW9CQSxDQUFDO1FBQUVrQjtRQUFRTSxZQUFZO0lBQUs7SUFFaEssTUFBTUMsT0FBTyxDQUFDQztRQUNaQSxJQUFJQyxjQUFjO1FBRWxCLGtEQUFrRDtRQUNsRCxNQUFNQyxXQUFXLElBQUlDLFNBQVNILElBQUlJLGFBQWE7UUFDL0MsTUFBTUMsU0FBU0gsU0FBU0ksR0FBRyxDQUFDO1FBQzVCLE1BQU1DLE9BQU9MLFNBQVNJLEdBQUcsQ0FBQztRQUMxQixNQUFNRSxRQUFRTixTQUFTSSxHQUFHLENBQUM7UUFFM0IsMEJBQTBCO1FBQzFCYixrQkFBa0I7WUFDaEJnQixJQUFJO2dCQUFFSjtnQkFBUUU7Z0JBQU1DLE9BQU9BLFFBQVFFLE9BQU9GLFNBQVMsRUFBRTtZQUFDO1FBQ3hEO0lBQ0Y7SUFDQSwrQkFBK0I7SUFFL0IscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDL0Isa0RBQU1BOzs7OzswQkFDUCw4REFBQ0MsdURBQVdBOzs7Ozs7Ozs7OztBQUdsQixFQUFDO0dBekNZRTs7UUFDWEQsMkRBQVFBO1FBRUtQLDhEQUFPQTtRQUNBSixpRUFBVUE7UUFDWEMsZ0VBQVNBO1FBSVRFLDRFQUFxQkE7UUFRd0VELDJFQUFvQkE7OztLQWpCekhVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3Byb2ZpbGUtY2FyZC50c3g/ZDE5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IFJlYWN0LCB7IEZvcm1FdmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlQWNjb3VudCwgdXNlTG9nb3V0LCB1c2VTZW5kVXNlck9wZXJhdGlvbiwgdXNlU21hcnRBY2NvdW50Q2xpZW50LCB1c2VVc2VyIH0gZnJvbSAnQGFsY2hlbXkvYWEtYWxjaGVteS9yZWFjdCdcbmltcG9ydCB7IGNoYWluLCBhY2NvdW50VHlwZSwgZ2FzTWFuYWdlckNvbmZpZywgYWNjb3VudENsaWVudE9wdGlvbnMgYXMgb3B0cyB9IGZyb20gJ0AvY29uZmlnJ1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4vdWkvY2FyZCdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vdWkvYnV0dG9uJ1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICcuL3VpL2lucHV0J1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAndmllbSdcbmltcG9ydCB7IE9wU3RhdHVzIH0gZnJvbSAnLi9vcC1zdGF0dXMnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vdWkvaGVhZGVyJ1xuaW1wb3J0IFRyYW5zYWN0aW9uIGZyb20gJy4vdWkvdHJhbnNhY3Rpb24nXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSdcblxuZXhwb3J0IGNvbnN0IFByb2ZpbGVDYXJkID0gKCkgPT4ge1xuICB1c2VRdWVyeSh7IHF1ZXJ5S2V5OiBbJ2V4Y2hhbmdlX3JhdGUnXSwgcXVlcnlGbjogKCkgPT4gZ2V0VHJhbnNhY3Rpb25IaXN0b3J5KGFkZHJlc3MpIH0pXG5cbiAgY29uc3QgdXNlciA9IHVzZVVzZXIoKVxuICBjb25zdCB7IGFkZHJlc3MgfSA9IHVzZUFjY291bnQoeyB0eXBlOiBhY2NvdW50VHlwZSB9KVxuICBjb25zdCB7IGxvZ291dCB9ID0gdXNlTG9nb3V0KClcblxuICAvLyBbIXJlZ2lvbiBzZW5kaW5nLXVzZXItb3BdXG4gIC8vIHVzZSBjb25maWcgdmFsdWVzIHRvIGluaXRpYWxpemUgb3VyIHNtYXJ0IGFjY291bnQgY2xpZW50XG4gIGNvbnN0IHsgY2xpZW50IH0gPSB1c2VTbWFydEFjY291bnRDbGllbnQoe1xuICAgIHR5cGU6IGFjY291bnRUeXBlLFxuICAgIGdhc01hbmFnZXJDb25maWcsXG4gICAgb3B0cyxcbiAgfSlcblxuICAvLyBwcm92aWRlIHRoZSB1c2VTZW5kVXNlck9wZXJhdGlvbiB3aXRoIGEgY2xpZW50IHRvIHNlbmQgYSBVT1xuICAvLyB0aGlzIGhvb2sgcHJvdmlkZXMgdXMgd2l0aCBhIHN0YXR1cywgZXJyb3IsIGFuZCBhIHJlc3VsdFxuICBjb25zdCB7IHNlbmRVc2VyT3BlcmF0aW9uLCBzZW5kVXNlck9wZXJhdGlvblJlc3VsdCwgaXNTZW5kaW5nVXNlck9wZXJhdGlvbiwgZXJyb3I6IGlzU2VuZFVzZXJPcGVyYXRpb25FcnJvciB9ID0gdXNlU2VuZFVzZXJPcGVyYXRpb24oeyBjbGllbnQsIHdhaXRGb3JUeG46IHRydWUgfSlcblxuICBjb25zdCBzZW5kID0gKGV2dDogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgLy8gY29sbGVjdCBhbGwgdGhlIGZvcm0gdmFsdWVzIGZyb20gdGhlIHVzZXIgaW5wdXRcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShldnQuY3VycmVudFRhcmdldClcbiAgICBjb25zdCB0YXJnZXQgPSBmb3JtRGF0YS5nZXQoJ3RvJykgYXMgSGV4XG4gICAgY29uc3QgZGF0YSA9IGZvcm1EYXRhLmdldCgnZGF0YScpIGFzIEhleFxuICAgIGNvbnN0IHZhbHVlID0gZm9ybURhdGEuZ2V0KCd2YWx1ZScpIGFzIHN0cmluZ1xuXG4gICAgLy8gc2VuZCB0aGUgdXNlciBvcGVyYXRpb25cbiAgICBzZW5kVXNlck9wZXJhdGlvbih7XG4gICAgICB1bzogeyB0YXJnZXQsIGRhdGEsIHZhbHVlOiB2YWx1ZSA/IEJpZ0ludCh2YWx1ZSkgOiAwbiB9LFxuICAgIH0pXG4gIH1cbiAgLy8gWyFlbmRyZWdpb24gc2VuZGluZy11c2VyLW9wXVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGJnLXByaW1hcnktYmx1ZSBtaW4taC1zY3JlZW4gdy1mdWxsIGdhcC0zXCI+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8VHJhbnNhY3Rpb24gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQWNjb3VudCIsInVzZUxvZ291dCIsInVzZVNlbmRVc2VyT3BlcmF0aW9uIiwidXNlU21hcnRBY2NvdW50Q2xpZW50IiwidXNlVXNlciIsImFjY291bnRUeXBlIiwiZ2FzTWFuYWdlckNvbmZpZyIsImFjY291bnRDbGllbnRPcHRpb25zIiwib3B0cyIsIkhlYWRlciIsIlRyYW5zYWN0aW9uIiwidXNlUXVlcnkiLCJQcm9maWxlQ2FyZCIsInF1ZXJ5S2V5IiwicXVlcnlGbiIsImdldFRyYW5zYWN0aW9uSGlzdG9yeSIsImFkZHJlc3MiLCJ1c2VyIiwidHlwZSIsImxvZ291dCIsImNsaWVudCIsInNlbmRVc2VyT3BlcmF0aW9uIiwic2VuZFVzZXJPcGVyYXRpb25SZXN1bHQiLCJpc1NlbmRpbmdVc2VyT3BlcmF0aW9uIiwiZXJyb3IiLCJpc1NlbmRVc2VyT3BlcmF0aW9uRXJyb3IiLCJ3YWl0Rm9yVHhuIiwic2VuZCIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJnZXQiLCJkYXRhIiwidmFsdWUiLCJ1byIsIkJpZ0ludCIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/profile-card.tsx\n"));

/***/ })

});