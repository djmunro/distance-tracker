"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_david_munro_git_personal_distance_tracker_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_david_munro_git_personal_distance_tracker_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_david_munro_git_personal_distance_tracker_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nfunction getDistanceSessions() {\n    return _getDistanceSessions.apply(this, arguments);\n}\nfunction _getDistanceSessions() {\n    _getDistanceSessions = _asyncToGenerator(_Users_david_munro_git_personal_distance_tracker_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var res;\n        return _Users_david_munro_git_personal_distance_tracker_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(\"/api/distance-session\");\n                case 2:\n                    res = _ctx.sent;\n                    _ctx.next = 5;\n                    return res.json();\n                case 5:\n                    return _ctx.abrupt(\"return\", _ctx.sent);\n                case 6:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _getDistanceSessions.apply(this, arguments);\n}\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), distanceSessions = ref[0], setDistanceSessions = ref[1];\n    var addDistanceSession = function() {\n        var _ref = _asyncToGenerator(_Users_david_munro_git_personal_distance_tracker_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var target, distance, res, sessions;\n            return _Users_david_munro_git_personal_distance_tracker_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        target = e.target;\n                        distance = Number(target.distance.value);\n                        _ctx.next = 5;\n                        return fetch(\"/api/distance-session\", {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify({\n                                distance: distance\n                            })\n                        });\n                    case 5:\n                        res = _ctx.sent;\n                        if (!(res.status !== 200)) {\n                            _ctx.next = 10;\n                            break;\n                        }\n                        {\n                            console.error(\"Something went wrong\");\n                        }\n                        _ctx.next = 14;\n                        break;\n                    case 10:\n                        _ctx.next = 12;\n                        return getDistanceSessions();\n                    case 12:\n                        sessions = _ctx.sent;\n                        setDistanceSessions(sessions);\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function addDistanceSession(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var fetchDistanceSessions = function() {\n            var _ref = _asyncToGenerator(_Users_david_munro_git_personal_distance_tracker_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var sessions;\n                return _Users_david_munro_git_personal_distance_tracker_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return getDistanceSessions();\n                        case 2:\n                            sessions = _ctx.sent;\n                            setDistanceSessions(sessions);\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function fetchDistanceSessions() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchDistanceSessions();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Distance Tracker\"\n                    }, void 0, false, {\n                        fileName: \"/Users/david.munro/git/personal/distance-tracker/pages/index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/david.munro/git/personal/distance-tracker/pages/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/david.munro/git/personal/distance-tracker/pages/index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/david.munro/git/personal/distance-tracker/pages/index.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                className: \"container mx-auto px-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                        onSubmit: addDistanceSession,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                htmlFor: \"distance\",\n                                children: [\n                                    \"Distance\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                        id: \"distance\",\n                                        type: \"number\",\n                                        className: \"block border-2 border-warm-gray-300 rounded-md\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/david.munro/git/personal/distance-tracker/pages/index.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/david.munro/git/personal/distance-tracker/pages/index.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"px-4 text-white bg-indigo-600 rounded-sm\",\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"/Users/david.munro/git/personal/distance-tracker/pages/index.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/david.munro/git/personal/distance-tracker/pages/index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"pre\", {\n                            children: JSON.stringify(distanceSessions, null, 2)\n                        }, void 0, false, {\n                            fileName: \"/Users/david.munro/git/personal/distance-tracker/pages/index.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/david.munro/git/personal/distance-tracker/pages/index.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/david.munro/git/personal/distance-tracker/pages/index.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/david.munro/git/personal/distance-tracker/pages/index.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxFQUFDLGdEQUFnRDs7Ozs7NkNBQzFEOzs7Ozs7cUNBQ0k7MENBQ1IsOERBQUNRLFFBQU07Z0NBQ0xELElBQUksRUFBQyxRQUFRO2dDQUNiUCxTQUFTLEVBQUMsMENBQTBDOzBDQUNyRCxRQUVEOzs7OztxQ0FBUzs7Ozs7OzZCQUNKO2tDQUVQLDhEQUFDVCxLQUFHO2tDQUNGLDRFQUFDa0IsS0FBRztzQ0FBRXhCLElBQUksQ0FBQ0MsU0FBUyxDQUFDZCxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDOzs7OztpQ0FBTzs7Ozs7NkJBQ2xEOzs7Ozs7cUJBQ0Q7Ozs7OzthQUNILENBQ047Q0FDSDtHQWxFS0QsSUFBSTtBQUFKQSxLQUFBQSxJQUFJO0FBb0VWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldERpc3RhbmNlU2Vzc2lvbnMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL2Rpc3RhbmNlLXNlc3Npb24nKTtcbiAgcmV0dXJuIGF3YWl0IHJlcy5qc29uKCk7XG59XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbZGlzdGFuY2VTZXNzaW9ucywgc2V0RGlzdGFuY2VTZXNzaW9uc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgYWRkRGlzdGFuY2VTZXNzaW9uID0gYXN5bmMgKGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgdHlwZW9mIGUudGFyZ2V0ICYge1xuICAgICAgZGlzdGFuY2U6IHsgdmFsdWU6IG51bWJlciB9O1xuICAgIH07XG5cbiAgICBjb25zdCBkaXN0YW5jZSA9IE51bWJlcih0YXJnZXQuZGlzdGFuY2UudmFsdWUpO1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvZGlzdGFuY2Utc2Vzc2lvbicsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGRpc3RhbmNlIH0pLFxuICAgIH0pO1xuXG4gICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgY29uc29sZS5lcnJvcignU29tZXRoaW5nIHdlbnQgd3JvbmcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2Vzc2lvbnMgPSBhd2FpdCBnZXREaXN0YW5jZVNlc3Npb25zKCk7XG4gICAgICBzZXREaXN0YW5jZVNlc3Npb25zKHNlc3Npb25zKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERpc3RhbmNlU2Vzc2lvbnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBzZXNzaW9ucyA9IGF3YWl0IGdldERpc3RhbmNlU2Vzc2lvbnMoKTtcbiAgICAgIHNldERpc3RhbmNlU2Vzc2lvbnMoc2Vzc2lvbnMpO1xuICAgIH07XG4gICAgZmV0Y2hEaXN0YW5jZVNlc3Npb25zKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkRpc3RhbmNlIFRyYWNrZXI8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17YWRkRGlzdGFuY2VTZXNzaW9ufT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRpc3RhbmNlXCI+XG4gICAgICAgICAgICBEaXN0YW5jZVxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGlkPVwiZGlzdGFuY2VcIlxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgYm9yZGVyLTIgYm9yZGVyLXdhcm0tZ3JheS0zMDAgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHRleHQtd2hpdGUgYmctaW5kaWdvLTYwMCByb3VuZGVkLXNtXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoZGlzdGFuY2VTZXNzaW9ucywgbnVsbCwgMil9PC9wcmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlYWQiLCJnZXREaXN0YW5jZVNlc3Npb25zIiwicmVzIiwiZmV0Y2giLCJqc29uIiwiSG9tZSIsImRpc3RhbmNlU2Vzc2lvbnMiLCJzZXREaXN0YW5jZVNlc3Npb25zIiwiYWRkRGlzdGFuY2VTZXNzaW9uIiwiZSIsInRhcmdldCIsImRpc3RhbmNlIiwic2Vzc2lvbnMiLCJwcmV2ZW50RGVmYXVsdCIsIk51bWJlciIsInZhbHVlIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwiY29uc29sZSIsImVycm9yIiwiZmV0Y2hEaXN0YW5jZVNlc3Npb25zIiwiZGl2IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImlkIiwidHlwZSIsImJ1dHRvbiIsInByZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});