"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/distance-session";
exports.ids = ["pages/api/distance-session"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/distance-session.ts":
/*!***************************************!*\
  !*** ./pages/api/distance-session.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function addDistanceSession(req, res) {\n    const { body  } = req;\n    try {\n        const session = await prisma.distanceSession.create({\n            data: {\n                distance: body.distance\n            }\n        });\n        return res.status(200).json(session);\n    } catch (error) {\n        res.status(500).json({\n            message: \"Error adding session\"\n        });\n    }\n}\nasync function getDistanceSessions(req, res) {\n    try {\n        const sessions = await prisma.distanceSession.findMany({\n            orderBy: {\n                id: \"desc\"\n            }\n        });\n        return res.status(200).json(sessions);\n    } catch (error) {\n        res.status(500).json({\n            message: \"Error getting sessions\"\n        });\n    }\n}\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        return await addDistanceSession(req, res);\n    } else if (req.method === \"GET\") {\n        return await getDistanceSessions(req, res);\n    } else {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGlzdGFuY2Utc2Vzc2lvbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFOEM7QUFFOUMsTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFZLEVBQUU7QUFFakMsZUFBZUUsa0JBQWtCLENBQUNDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7SUFDM0UsTUFBTSxFQUFFQyxJQUFJLEdBQUUsR0FBR0YsR0FBRztJQUNwQixJQUFJO1FBQ0YsTUFBTUcsT0FBTyxHQUFHLE1BQU1MLE1BQU0sQ0FBQ00sZUFBZSxDQUFDQyxNQUFNLENBQUM7WUFDbERDLElBQUksRUFBRTtnQkFDSkMsUUFBUSxFQUFFTCxJQUFJLENBQUNLLFFBQVE7YUFDeEI7U0FDRixDQUFDO1FBQ0YsT0FBT04sR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ04sT0FBTyxDQUFDLENBQUM7S0FDdEMsQ0FBQyxPQUFPTyxLQUFLLEVBQUU7UUFDZFQsR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFRSxPQUFPLEVBQUUsc0JBQXNCO1NBQUUsQ0FBQyxDQUFDO0tBQzNEO0NBQ0Y7QUFFRCxlQUFlQyxtQkFBbUIsQ0FBQ1osR0FBbUIsRUFBRUMsR0FBb0IsRUFBRTtJQUM1RSxJQUFJO1FBQ0YsTUFBTVksUUFBUSxHQUFHLE1BQU1mLE1BQU0sQ0FBQ00sZUFBZSxDQUFDVSxRQUFRLENBQUM7WUFDckRDLE9BQU8sRUFBRTtnQkFBRUMsRUFBRSxFQUFFLE1BQU07YUFBRTtTQUN4QixDQUFDO1FBQ0YsT0FBT2YsR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0ksUUFBUSxDQUFDLENBQUM7S0FDdkMsQ0FBQyxPQUFPSCxLQUFLLEVBQUU7UUFDZFQsR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFRSxPQUFPLEVBQUUsd0JBQXdCO1NBQUUsQ0FBQyxDQUFDO0tBQzdEO0NBQ0Y7QUFFYyxlQUFlTSxPQUFPLENBQ25DakIsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ3BCO0lBQ0EsSUFBSUQsR0FBRyxDQUFDa0IsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixPQUFPLE1BQU1uQixrQkFBa0IsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLENBQUMsQ0FBQztLQUMzQyxNQUFNLElBQUlELEdBQUcsQ0FBQ2tCLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDL0IsT0FBTyxNQUFNTixtQkFBbUIsQ0FBQ1osR0FBRyxFQUFFQyxHQUFHLENBQUMsQ0FBQztLQUM1QyxNQUFNO1FBQ0wsT0FBT0EsR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFRSxPQUFPLEVBQUUsb0JBQW9CO1NBQUUsQ0FBQyxDQUFDO0tBQ2hFO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaXN0YW5jZS10cmFja2VyLy4vcGFnZXMvYXBpL2Rpc3RhbmNlLXNlc3Npb24udHM/MDcxMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuYXN5bmMgZnVuY3Rpb24gYWRkRGlzdGFuY2VTZXNzaW9uKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gIGNvbnN0IHsgYm9keSB9ID0gcmVxO1xuICB0cnkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBwcmlzbWEuZGlzdGFuY2VTZXNzaW9uLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGRpc3RhbmNlOiBib2R5LmRpc3RhbmNlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oc2Vzc2lvbik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnRXJyb3IgYWRkaW5nIHNlc3Npb24nIH0pO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldERpc3RhbmNlU2Vzc2lvbnMocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZXNzaW9ucyA9IGF3YWl0IHByaXNtYS5kaXN0YW5jZVNlc3Npb24uZmluZE1hbnkoe1xuICAgICAgb3JkZXJCeTogeyBpZDogJ2Rlc2MnIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHNlc3Npb25zKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdFcnJvciBnZXR0aW5nIHNlc3Npb25zJyB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZVxuKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICByZXR1cm4gYXdhaXQgYWRkRGlzdGFuY2VTZXNzaW9uKHJlcSwgcmVzKTtcbiAgfSBlbHNlIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xuICAgIHJldHVybiBhd2FpdCBnZXREaXN0YW5jZVNlc3Npb25zKHJlcSwgcmVzKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiAnTWV0aG9kIG5vdCBhbGxvd2VkJyB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImFkZERpc3RhbmNlU2Vzc2lvbiIsInJlcSIsInJlcyIsImJvZHkiLCJzZXNzaW9uIiwiZGlzdGFuY2VTZXNzaW9uIiwiY3JlYXRlIiwiZGF0YSIsImRpc3RhbmNlIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibWVzc2FnZSIsImdldERpc3RhbmNlU2Vzc2lvbnMiLCJzZXNzaW9ucyIsImZpbmRNYW55Iiwib3JkZXJCeSIsImlkIiwiaGFuZGxlciIsIm1ldGhvZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/distance-session.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/distance-session.ts"));
module.exports = __webpack_exports__;

})();