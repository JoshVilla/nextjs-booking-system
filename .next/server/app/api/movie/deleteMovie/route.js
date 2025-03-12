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
exports.id = "app/api/movie/deleteMovie/route";
exports.ids = ["app/api/movie/deleteMovie/route"];
exports.modules = {

/***/ "(rsc)/./app/api/movie/deleteMovie/route.ts":
/*!********************************************!*\
  !*** ./app/api/movie/deleteMovie/route.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _app_models_movieModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/models/movieModel */ \"(rsc)/./app/models/movieModel.ts\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/helpers */ \"(rsc)/./utils/helpers.ts\");\n\n\n\n\nasync function POST(request) {\n    try {\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_2__.connectToDatabase)();\n        const { movieId } = await request.json();\n        const posterUrl = await _app_models_movieModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(movieId);\n        const posterPublicId = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_3__.getCloudinaryPublicId)(posterUrl?.posterUrl);\n        const coverPublicId = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_3__.getCloudinaryPublicId)(posterUrl?.coverUrl);\n        await _app_models_movieModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndDelete(movieId);\n        if (posterPublicId) {\n            await (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_3__.deleteCloudinaryImage)(posterPublicId);\n        }\n        if (coverPublicId) {\n            await (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_3__.deleteCloudinaryImage)(coverPublicId);\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Movie deleted successfully\"\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to delete movie\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL21vdmllL2RlbGV0ZU1vdmllL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdEO0FBQ1o7QUFDTTtBQUM2QjtBQUN4RSxlQUFlSyxLQUFLQyxPQUFvQjtJQUM3QyxJQUFJO1FBQ0YsTUFBTUosK0RBQWlCQTtRQUN2QixNQUFNLEVBQUVLLE9BQU8sRUFBRSxHQUFHLE1BQU1ELFFBQVFFLElBQUk7UUFDdEMsTUFBTUMsWUFBWSxNQUFNUiw4REFBS0EsQ0FBQ1MsUUFBUSxDQUFDSDtRQUN2QyxNQUFNSSxpQkFBaUJSLHFFQUFxQkEsQ0FBQ00sV0FBV0E7UUFDeEQsTUFBTUcsZ0JBQWdCVCxxRUFBcUJBLENBQUNNLFdBQVdJO1FBQ3ZELE1BQU1aLDhEQUFLQSxDQUFDYSxpQkFBaUIsQ0FBQ1A7UUFDOUIsSUFBSUksZ0JBQWdCO1lBQ2xCLE1BQU1QLHFFQUFxQkEsQ0FBQ087UUFDOUI7UUFDQSxJQUFJQyxlQUFlO1lBQ2pCLE1BQU1SLHFFQUFxQkEsQ0FBQ1E7UUFDOUI7UUFDQSxPQUFPWixxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO1lBQUVPLFNBQVM7UUFBNkI7SUFDbkUsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsT0FBT2hCLHFEQUFZQSxDQUFDUSxJQUFJLENBQ3RCO1lBQUVRLE9BQU87UUFBeUIsR0FDbEM7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQVNVUyBUVUZcXERlc2t0b3BcXHJlcG9zXFxuZXh0anMtYm9va2luZy1zeXN0ZW1cXGFwcFxcYXBpXFxtb3ZpZVxcZGVsZXRlTW92aWVcXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IE1vdmllIGZyb20gXCJAL2FwcC9tb2RlbHMvbW92aWVNb2RlbFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gXCJAL2xpYi9tb25nb2RiXCI7XHJcbmltcG9ydCB7IGdldENsb3VkaW5hcnlQdWJsaWNJZCwgZGVsZXRlQ2xvdWRpbmFyeUltYWdlIH0gZnJvbSBcIkAvdXRpbHMvaGVscGVyc1wiO1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xyXG4gICAgY29uc3QgeyBtb3ZpZUlkIH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuICAgIGNvbnN0IHBvc3RlclVybCA9IGF3YWl0IE1vdmllLmZpbmRCeUlkKG1vdmllSWQpO1xyXG4gICAgY29uc3QgcG9zdGVyUHVibGljSWQgPSBnZXRDbG91ZGluYXJ5UHVibGljSWQocG9zdGVyVXJsPy5wb3N0ZXJVcmwpO1xyXG4gICAgY29uc3QgY292ZXJQdWJsaWNJZCA9IGdldENsb3VkaW5hcnlQdWJsaWNJZChwb3N0ZXJVcmw/LmNvdmVyVXJsKTtcclxuICAgIGF3YWl0IE1vdmllLmZpbmRCeUlkQW5kRGVsZXRlKG1vdmllSWQpO1xyXG4gICAgaWYgKHBvc3RlclB1YmxpY0lkKSB7XHJcbiAgICAgIGF3YWl0IGRlbGV0ZUNsb3VkaW5hcnlJbWFnZShwb3N0ZXJQdWJsaWNJZCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY292ZXJQdWJsaWNJZCkge1xyXG4gICAgICBhd2FpdCBkZWxldGVDbG91ZGluYXJ5SW1hZ2UoY292ZXJQdWJsaWNJZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcIk1vdmllIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyBlcnJvcjogXCJGYWlsZWQgdG8gZGVsZXRlIG1vdmllXCIgfSxcclxuICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiTW92aWUiLCJjb25uZWN0VG9EYXRhYmFzZSIsImdldENsb3VkaW5hcnlQdWJsaWNJZCIsImRlbGV0ZUNsb3VkaW5hcnlJbWFnZSIsIlBPU1QiLCJyZXF1ZXN0IiwibW92aWVJZCIsImpzb24iLCJwb3N0ZXJVcmwiLCJmaW5kQnlJZCIsInBvc3RlclB1YmxpY0lkIiwiY292ZXJQdWJsaWNJZCIsImNvdmVyVXJsIiwiZmluZEJ5SWRBbmREZWxldGUiLCJtZXNzYWdlIiwiZXJyb3IiLCJzdGF0dXMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/movie/deleteMovie/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/models/movieModel.ts":
/*!**********************************!*\
  !*** ./app/models/movieModel.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst movieSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        required: true\n    },\n    description: {\n        type: String,\n        required: true\n    },\n    director: {\n        type: String,\n        required: true\n    },\n    producer: {\n        type: String,\n        required: true\n    },\n    distributor: {\n        type: String,\n        required: true\n    },\n    casts: {\n        type: [\n            String\n        ],\n        required: true\n    },\n    genres: {\n        type: [\n            String\n        ],\n        required: true\n    },\n    time: {\n        type: Number,\n        required: true\n    },\n    posterUrl: {\n        type: String,\n        required: true\n    },\n    coverUrl: {\n        type: String,\n        required: true\n    },\n    isShowing: {\n        type: Boolean,\n        default: false\n    }\n}, {\n    timestamps: true\n});\nconst Movie = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Movie || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Movie\", movieSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Movie);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbW9kZWxzL21vdmllTW9kZWwudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBZWhDLE1BQU1DLGNBQWMsSUFBSUQsd0RBQWUsQ0FDckM7SUFDRUcsT0FBTztRQUFFQyxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDdENDLGFBQWE7UUFBRUgsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQzVDRSxVQUFVO1FBQUVKLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN6Q0csVUFBVTtRQUFFTCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDekNJLGFBQWE7UUFBRU4sTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQzVDSyxPQUFPO1FBQUVQLE1BQU07WUFBQ0M7U0FBTztRQUFFQyxVQUFVO0lBQUs7SUFDeENNLFFBQVE7UUFBRVIsTUFBTTtZQUFDQztTQUFPO1FBQUVDLFVBQVU7SUFBSztJQUN6Q08sTUFBTTtRQUFFVCxNQUFNVTtRQUFRUixVQUFVO0lBQUs7SUFDckNTLFdBQVc7UUFBRVgsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQzFDVSxVQUFVO1FBQUVaLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN6Q1csV0FBVztRQUFFYixNQUFNYztRQUFTQyxTQUFTO0lBQU07QUFDN0MsR0FDQTtJQUFFQyxZQUFZO0FBQUs7QUFHckIsTUFBTUMsUUFBUXJCLHdEQUFlLENBQUNxQixLQUFLLElBQUlyQixxREFBYyxDQUFDLFNBQVNDO0FBRS9ELGlFQUFlb0IsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxBU1VTIFRVRlxcRGVza3RvcFxccmVwb3NcXG5leHRqcy1ib29raW5nLXN5c3RlbVxcYXBwXFxtb2RlbHNcXG1vdmllTW9kZWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuaW50ZXJmYWNlIE1vdmllIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgZGlyZWN0b3I6IHN0cmluZztcclxuICBwcm9kdWNlcjogc3RyaW5nO1xyXG4gIGRpc3RyaWJ1dG9yOiBzdHJpbmc7XHJcbiAgY2FzdHM6IHN0cmluZ1tdO1xyXG4gIGdlbnJlczogc3RyaW5nW107XHJcbiAgdGltZTogbnVtYmVyO1xyXG4gIHBvc3RlclVybDogc3RyaW5nO1xyXG4gIGNvdmVyVXJsOiBzdHJpbmc7XHJcbiAgaXNTaG93aW5nOiBib29sZWFuO1xyXG59XHJcbmNvbnN0IG1vdmllU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYTxNb3ZpZT4oXHJcbiAge1xyXG4gICAgdGl0bGU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgZGVzY3JpcHRpb246IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgZGlyZWN0b3I6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgcHJvZHVjZXI6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgZGlzdHJpYnV0b3I6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgY2FzdHM6IHsgdHlwZTogW1N0cmluZ10sIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBnZW5yZXM6IHsgdHlwZTogW1N0cmluZ10sIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICB0aW1lOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHBvc3RlclVybDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBjb3ZlclVybDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBpc1Nob3dpbmc6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcclxuICB9LFxyXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XHJcbik7XHJcblxyXG5jb25zdCBNb3ZpZSA9IG1vbmdvb3NlLm1vZGVscy5Nb3ZpZSB8fCBtb25nb29zZS5tb2RlbChcIk1vdmllXCIsIG1vdmllU2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJtb3ZpZVNjaGVtYSIsIlNjaGVtYSIsInRpdGxlIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZGVzY3JpcHRpb24iLCJkaXJlY3RvciIsInByb2R1Y2VyIiwiZGlzdHJpYnV0b3IiLCJjYXN0cyIsImdlbnJlcyIsInRpbWUiLCJOdW1iZXIiLCJwb3N0ZXJVcmwiLCJjb3ZlclVybCIsImlzU2hvd2luZyIsIkJvb2xlYW4iLCJkZWZhdWx0IiwidGltZXN0YW1wcyIsIk1vdmllIiwibW9kZWxzIiwibW9kZWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/models/movieModel.ts\n");

/***/ }),

/***/ "(rsc)/./lib/cloudinaryConfig.ts":
/*!*********************************!*\
  !*** ./lib/cloudinaryConfig.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cloudinary */ \"(rsc)/./node_modules/cloudinary/cloudinary.js\");\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_0__);\n\n// Configure Cloudinary\ncloudinary__WEBPACK_IMPORTED_MODULE_0___default().v2.config({\n    cloud_name: process.env.CLOUD_NAME,\n    api_key: process.env.CLOUD_API_KEY,\n    api_secret: process.env.CLOUD_API_SECRET\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((cloudinary__WEBPACK_IMPORTED_MODULE_0___default()));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvY2xvdWRpbmFyeUNvbmZpZy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0M7QUFFcEMsdUJBQXVCO0FBQ3ZCQSxvREFBYSxDQUFDRSxNQUFNLENBQUM7SUFDbkJDLFlBQVlDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtJQUNsQ0MsU0FBU0gsUUFBUUMsR0FBRyxDQUFDRyxhQUFhO0lBQ2xDQyxZQUFZTCxRQUFRQyxHQUFHLENBQUNLLGdCQUFnQjtBQUMxQztBQUVBLGlFQUFlVixtREFBVUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxBU1VTIFRVRlxcRGVza3RvcFxccmVwb3NcXG5leHRqcy1ib29raW5nLXN5c3RlbVxcbGliXFxjbG91ZGluYXJ5Q29uZmlnLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbG91ZGluYXJ5IGZyb20gXCJjbG91ZGluYXJ5XCI7XHJcblxyXG4vLyBDb25maWd1cmUgQ2xvdWRpbmFyeVxyXG5jbG91ZGluYXJ5LnYyLmNvbmZpZyh7XHJcbiAgY2xvdWRfbmFtZTogcHJvY2Vzcy5lbnYuQ0xPVURfTkFNRSxcclxuICBhcGlfa2V5OiBwcm9jZXNzLmVudi5DTE9VRF9BUElfS0VZLFxyXG4gIGFwaV9zZWNyZXQ6IHByb2Nlc3MuZW52LkNMT1VEX0FQSV9TRUNSRVQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xvdWRpbmFyeTtcclxuIl0sIm5hbWVzIjpbImNsb3VkaW5hcnkiLCJ2MiIsImNvbmZpZyIsImNsb3VkX25hbWUiLCJwcm9jZXNzIiwiZW52IiwiQ0xPVURfTkFNRSIsImFwaV9rZXkiLCJDTE9VRF9BUElfS0VZIiwiYXBpX3NlY3JldCIsIkNMT1VEX0FQSV9TRUNSRVQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/cloudinaryConfig.ts\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDatabase: () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.ATLAS_DB_LINK;\n// if (!MONGODB_URI) {\n//   throw new Error(\n//     \"Please define the ATLAS_DB_LINK environment variable in .env.local\"\n//   );\n// }\n// Ensure global object exists for caching (important for Next.js and serverless)\n// @ts-ignore\nglobal.mongoose = global.mongoose || {\n    conn: null,\n    promise: null\n};\nasync function connectToDatabase() {\n    // @ts-ignore\n    if (global.mongoose.conn) {\n        console.log(\"Using existing MongoDB connection\");\n        // @ts-ignore\n        return global.mongoose.conn;\n    }\n    // @ts-ignore\n    if (!global.mongoose.promise) {\n        console.log(\"Establishing new MongoDB connection...\");\n        // @ts-ignore\n        global.mongoose.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true,\n            serverSelectionTimeoutMS: 30000,\n            connectTimeoutMS: 30000\n        }).then((mongoose)=>{\n            console.log(\"MongoDB connected successfully ✅\");\n            return mongoose;\n        }).catch((error)=>{\n            console.error(\"MongoDB connection error:\", error);\n            throw new Error(\"Failed to connect to MongoDB.\");\n        });\n    }\n    // @ts-ignore\n    global.mongoose.conn = await global.mongoose.promise;\n    // @ts-ignore\n    return global.mongoose.conn;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsY0FBY0MsUUFBUUMsR0FBRyxDQUFDQyxhQUFhO0FBRTdDLHNCQUFzQjtBQUN0QixxQkFBcUI7QUFDckIsMkVBQTJFO0FBQzNFLE9BQU87QUFDUCxJQUFJO0FBRUosaUZBQWlGO0FBQ2pGLGFBQWE7QUFDYkMsT0FBT0wsUUFBUSxHQUFHSyxPQUFPTCxRQUFRLElBQUk7SUFBRU0sTUFBTTtJQUFNQyxTQUFTO0FBQUs7QUFFMUQsZUFBZUM7SUFDcEIsYUFBYTtJQUNiLElBQUlILE9BQU9MLFFBQVEsQ0FBQ00sSUFBSSxFQUFFO1FBQ3hCRyxRQUFRQyxHQUFHLENBQUM7UUFDWixhQUFhO1FBQ2IsT0FBT0wsT0FBT0wsUUFBUSxDQUFDTSxJQUFJO0lBQzdCO0lBRUEsYUFBYTtJQUNiLElBQUksQ0FBQ0QsT0FBT0wsUUFBUSxDQUFDTyxPQUFPLEVBQUU7UUFDNUJFLFFBQVFDLEdBQUcsQ0FBQztRQUNaLGFBQWE7UUFDYkwsT0FBT0wsUUFBUSxDQUFDTyxPQUFPLEdBQUdQLHVEQUVoQixDQUFDQyxhQUFhO1lBQ3BCVyxpQkFBaUI7WUFDakJDLG9CQUFvQjtZQUNwQkMsMEJBQTBCO1lBQzFCQyxrQkFBa0I7UUFDcEIsR0FDQ0MsSUFBSSxDQUFDLENBQUNoQjtZQUNMUyxRQUFRQyxHQUFHLENBQUM7WUFDWixPQUFPVjtRQUNULEdBQ0NpQixLQUFLLENBQUMsQ0FBQ0M7WUFDTlQsUUFBUVMsS0FBSyxDQUFDLDZCQUE2QkE7WUFDM0MsTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO0lBQ0o7SUFFQSxhQUFhO0lBQ2JkLE9BQU9MLFFBQVEsQ0FBQ00sSUFBSSxHQUFHLE1BQU1ELE9BQU9MLFFBQVEsQ0FBQ08sT0FBTztJQUNwRCxhQUFhO0lBQ2IsT0FBT0YsT0FBT0wsUUFBUSxDQUFDTSxJQUFJO0FBQzdCIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEFTVVMgVFVGXFxEZXNrdG9wXFxyZXBvc1xcbmV4dGpzLWJvb2tpbmctc3lzdGVtXFxsaWJcXG1vbmdvZGIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5BVExBU19EQl9MSU5LO1xyXG5cclxuLy8gaWYgKCFNT05HT0RCX1VSSSkge1xyXG4vLyAgIHRocm93IG5ldyBFcnJvcihcclxuLy8gICAgIFwiUGxlYXNlIGRlZmluZSB0aGUgQVRMQVNfREJfTElOSyBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbiAuZW52LmxvY2FsXCJcclxuLy8gICApO1xyXG4vLyB9XHJcblxyXG4vLyBFbnN1cmUgZ2xvYmFsIG9iamVjdCBleGlzdHMgZm9yIGNhY2hpbmcgKGltcG9ydGFudCBmb3IgTmV4dC5qcyBhbmQgc2VydmVybGVzcylcclxuLy8gQHRzLWlnbm9yZVxyXG5nbG9iYWwubW9uZ29vc2UgPSBnbG9iYWwubW9uZ29vc2UgfHwgeyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIGlmIChnbG9iYWwubW9uZ29vc2UuY29ubikge1xyXG4gICAgY29uc29sZS5sb2coXCJVc2luZyBleGlzdGluZyBNb25nb0RCIGNvbm5lY3Rpb25cIik7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICByZXR1cm4gZ2xvYmFsLm1vbmdvb3NlLmNvbm47XHJcbiAgfVxyXG5cclxuICAvLyBAdHMtaWdub3JlXHJcbiAgaWYgKCFnbG9iYWwubW9uZ29vc2UucHJvbWlzZSkge1xyXG4gICAgY29uc29sZS5sb2coXCJFc3RhYmxpc2hpbmcgbmV3IE1vbmdvREIgY29ubmVjdGlvbi4uLlwiKTtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGdsb2JhbC5tb25nb29zZS5wcm9taXNlID0gbW9uZ29vc2VcclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAuY29ubmVjdChNT05HT0RCX1VSSSwge1xyXG4gICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgICAgICAgc2VydmVyU2VsZWN0aW9uVGltZW91dE1TOiAzMDAwMCwgLy8gMzAgc2Vjb25kc1xyXG4gICAgICAgIGNvbm5lY3RUaW1lb3V0TVM6IDMwMDAwLCAvLyAzMCBzZWNvbmRzXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChtb25nb29zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTW9uZ29EQiBjb25uZWN0ZWQgc3VjY2Vzc2Z1bGx5IOKchVwiKTtcclxuICAgICAgICByZXR1cm4gbW9uZ29vc2U7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTW9uZ29EQiBjb25uZWN0aW9uIGVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGNvbm5lY3QgdG8gTW9uZ29EQi5cIik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIGdsb2JhbC5tb25nb29zZS5jb25uID0gYXdhaXQgZ2xvYmFsLm1vbmdvb3NlLnByb21pc2U7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHJldHVybiBnbG9iYWwubW9uZ29vc2UuY29ubjtcclxufVxyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJBVExBU19EQl9MSU5LIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJjb25uZWN0VG9EYXRhYmFzZSIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5Iiwic2VydmVyU2VsZWN0aW9uVGltZW91dE1TIiwiY29ubmVjdFRpbWVvdXRNUyIsInRoZW4iLCJjYXRjaCIsImVycm9yIiwiRXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmovie%2FdeleteMovie%2Froute&page=%2Fapi%2Fmovie%2FdeleteMovie%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmovie%2FdeleteMovie%2Froute.ts&appDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cnextjs-booking-system%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cnextjs-booking-system&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmovie%2FdeleteMovie%2Froute&page=%2Fapi%2Fmovie%2FdeleteMovie%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmovie%2FdeleteMovie%2Froute.ts&appDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cnextjs-booking-system%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cnextjs-booking-system&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_ASUS_TUF_Desktop_repos_nextjs_booking_system_app_api_movie_deleteMovie_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/movie/deleteMovie/route.ts */ \"(rsc)/./app/api/movie/deleteMovie/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/movie/deleteMovie/route\",\n        pathname: \"/api/movie/deleteMovie\",\n        filename: \"route\",\n        bundlePath: \"app/api/movie/deleteMovie/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\ASUS TUF\\\\Desktop\\\\repos\\\\nextjs-booking-system\\\\app\\\\api\\\\movie\\\\deleteMovie\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_ASUS_TUF_Desktop_repos_nextjs_booking_system_app_api_movie_deleteMovie_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZtb3ZpZSUyRmRlbGV0ZU1vdmllJTJGcm91dGUmcGFnZT0lMkZhcGklMkZtb3ZpZSUyRmRlbGV0ZU1vdmllJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGbW92aWUlMkZkZWxldGVNb3ZpZSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNBU1VTJTIwVFVGJTVDRGVza3RvcCU1Q3JlcG9zJTVDbmV4dGpzLWJvb2tpbmctc3lzdGVtJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNBU1VTJTIwVFVGJTVDRGVza3RvcCU1Q3JlcG9zJTVDbmV4dGpzLWJvb2tpbmctc3lzdGVtJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNrRDtBQUMvSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcQVNVUyBUVUZcXFxcRGVza3RvcFxcXFxyZXBvc1xcXFxuZXh0anMtYm9va2luZy1zeXN0ZW1cXFxcYXBwXFxcXGFwaVxcXFxtb3ZpZVxcXFxkZWxldGVNb3ZpZVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvbW92aWUvZGVsZXRlTW92aWUvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9tb3ZpZS9kZWxldGVNb3ZpZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvbW92aWUvZGVsZXRlTW92aWUvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxBU1VTIFRVRlxcXFxEZXNrdG9wXFxcXHJlcG9zXFxcXG5leHRqcy1ib29raW5nLXN5c3RlbVxcXFxhcHBcXFxcYXBpXFxcXG1vdmllXFxcXGRlbGV0ZU1vdmllXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmovie%2FdeleteMovie%2Froute&page=%2Fapi%2Fmovie%2FdeleteMovie%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmovie%2FdeleteMovie%2Froute.ts&appDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cnextjs-booking-system%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cnextjs-booking-system&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./utils/constant.ts":
/*!***************************!*\
  !*** ./utils/constant.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SALT_ROUNDS: () => (/* binding */ SALT_ROUNDS)\n/* harmony export */ });\nconst SALT_ROUNDS = 10;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9jb25zdGFudC50cyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsY0FBYyxHQUFHIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEFTVVMgVFVGXFxEZXNrdG9wXFxyZXBvc1xcbmV4dGpzLWJvb2tpbmctc3lzdGVtXFx1dGlsc1xcY29uc3RhbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFNBTFRfUk9VTkRTID0gMTA7XHJcbiJdLCJuYW1lcyI6WyJTQUxUX1JPVU5EUyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./utils/constant.ts\n");

/***/ }),

/***/ "(rsc)/./utils/helpers.ts":
/*!**************************!*\
  !*** ./utils/helpers.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   capitalizeFirstLetter: () => (/* binding */ capitalizeFirstLetter),\n/* harmony export */   comparePassword: () => (/* binding */ comparePassword),\n/* harmony export */   deleteCloudinaryImage: () => (/* binding */ deleteCloudinaryImage),\n/* harmony export */   getCloudinaryPublicId: () => (/* binding */ getCloudinaryPublicId),\n/* harmony export */   hashPassword: () => (/* binding */ hashPassword),\n/* harmony export */   replaceNewImagefromCurrentImage: () => (/* binding */ replaceNewImagefromCurrentImage)\n/* harmony export */ });\n/* harmony import */ var _lib_cloudinaryConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/cloudinaryConfig */ \"(rsc)/./lib/cloudinaryConfig.ts\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant */ \"(rsc)/./utils/constant.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n// helpers.js\n\n\n\n\nconst getCloudinaryPublicId = (url)=>{\n    if (!url) return null;\n    try {\n        const urlParts = url.split(\"/\");\n        const filenameWithExtension = urlParts.pop();\n        const folder = urlParts.pop();\n        if (!folder || !filenameWithExtension) return null;\n        const filename = filenameWithExtension.split(\".\")[0];\n        return `${folder}/${filename}`;\n    } catch (error) {\n        console.error(\"Error parsing Cloudinary URL:\", error);\n        return null;\n    }\n};\nconst deleteCloudinaryImage = async (publicId)=>{\n    if (!publicId) return null;\n    try {\n        const result = await _lib_cloudinaryConfig__WEBPACK_IMPORTED_MODULE_0__[\"default\"].v2.uploader.destroy(publicId);\n        return result;\n    } catch (error) {\n        console.error(\"Error deleting from Cloudinary:\", error);\n        throw error;\n    }\n};\nconst replaceNewImagefromCurrentImage = async (collection, id, field)=>{\n    try {\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__.connectToDatabase)();\n        const res = await collection.findById(id); // Use findById instead of find\n        if (res) {\n            if (field === \"poster\") {\n                const publicId = getCloudinaryPublicId(res.posterUrl);\n                if (publicId) {\n                    await deleteCloudinaryImage(publicId);\n                }\n            } else if (field === \"cover\") {\n                const publicId = getCloudinaryPublicId(res.coverUrl);\n                if (publicId) {\n                    await deleteCloudinaryImage(publicId);\n                }\n            } else {\n                const publicId = getCloudinaryPublicId(res.pictureUrl);\n                if (publicId) {\n                    await deleteCloudinaryImage(publicId);\n                }\n            }\n        }\n    } catch (error) {\n        console.log(error);\n    }\n};\nconst hashPassword = async (password)=>{\n    return await bcryptjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].hash(password, _constant__WEBPACK_IMPORTED_MODULE_2__.SALT_ROUNDS);\n};\nconst comparePassword = async (password, hashedPassword)=>{\n    return await bcryptjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].compare(password, hashedPassword);\n};\nconst capitalizeFirstLetter = (str)=>str.charAt(0).toUpperCase() + str.slice(1);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9oZWxwZXJzLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxhQUFhO0FBQ21DO0FBQ0U7QUFFVDtBQUNYO0FBQ3ZCLE1BQU1JLHdCQUF3QixDQUFDQztJQUNwQyxJQUFJLENBQUNBLEtBQUssT0FBTztJQUVqQixJQUFJO1FBQ0YsTUFBTUMsV0FBV0QsSUFBSUUsS0FBSyxDQUFDO1FBQzNCLE1BQU1DLHdCQUF3QkYsU0FBU0csR0FBRztRQUMxQyxNQUFNQyxTQUFTSixTQUFTRyxHQUFHO1FBRTNCLElBQUksQ0FBQ0MsVUFBVSxDQUFDRix1QkFBdUIsT0FBTztRQUU5QyxNQUFNRyxXQUFXSCxzQkFBc0JELEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNwRCxPQUFPLEdBQUdHLE9BQU8sQ0FBQyxFQUFFQyxVQUFVO0lBQ2hDLEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsaUNBQWlDQTtRQUMvQyxPQUFPO0lBQ1Q7QUFDRixFQUFFO0FBRUssTUFBTUUsd0JBQXdCLE9BQU9DO0lBQzFDLElBQUksQ0FBQ0EsVUFBVSxPQUFPO0lBRXRCLElBQUk7UUFDRixNQUFNQyxTQUFTLE1BQU1oQiw2REFBVUEsQ0FBQ2lCLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLENBQUNKO1FBQ3BELE9BQU9DO0lBQ1QsRUFBRSxPQUFPSixPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyxtQ0FBbUNBO1FBQ2pELE1BQU1BO0lBQ1I7QUFDRixFQUFFO0FBRUssTUFBTVEsa0NBQWtDLE9BQzdDQyxZQUNBQyxJQUNBQztJQUVBLElBQUk7UUFDRixNQUFNdEIsK0RBQWlCQTtRQUN2QixNQUFNdUIsTUFBTSxNQUFNSCxXQUFXSSxRQUFRLENBQUNILEtBQUssK0JBQStCO1FBRTFFLElBQUlFLEtBQUs7WUFDUCxJQUFJRCxVQUFVLFVBQVU7Z0JBQ3RCLE1BQU1SLFdBQVdYLHNCQUFzQm9CLElBQUlFLFNBQVM7Z0JBQ3BELElBQUlYLFVBQVU7b0JBQ1osTUFBTUQsc0JBQXNCQztnQkFDOUI7WUFDRixPQUFPLElBQUlRLFVBQVUsU0FBUztnQkFDNUIsTUFBTVIsV0FBV1gsc0JBQXNCb0IsSUFBSUcsUUFBUTtnQkFDbkQsSUFBSVosVUFBVTtvQkFDWixNQUFNRCxzQkFBc0JDO2dCQUM5QjtZQUNGLE9BQU87Z0JBQ0wsTUFBTUEsV0FBV1gsc0JBQXNCb0IsSUFBSUksVUFBVTtnQkFDckQsSUFBSWIsVUFBVTtvQkFDWixNQUFNRCxzQkFBc0JDO2dCQUM5QjtZQUNGO1FBQ0Y7SUFDRixFQUFFLE9BQU9ILE9BQU87UUFDZEMsUUFBUWdCLEdBQUcsQ0FBQ2pCO0lBQ2Q7QUFDRixFQUFFO0FBRUssTUFBTWtCLGVBQWUsT0FBT0M7SUFDakMsT0FBTyxNQUFNNUIscURBQVcsQ0FBQzRCLFVBQVU3QixrREFBV0E7QUFDaEQsRUFBRTtBQUVLLE1BQU0rQixrQkFBa0IsT0FDN0JGLFVBQ0FHO0lBRUEsT0FBTyxNQUFNL0Isd0RBQWMsQ0FBQzRCLFVBQVVHO0FBQ3hDLEVBQUU7QUFFSyxNQUFNRSx3QkFBd0IsQ0FBQ0MsTUFDcENBLElBQUlDLE1BQU0sQ0FBQyxHQUFHQyxXQUFXLEtBQUtGLElBQUlHLEtBQUssQ0FBQyxHQUFHIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEFTVVMgVFVGXFxEZXNrdG9wXFxyZXBvc1xcbmV4dGpzLWJvb2tpbmctc3lzdGVtXFx1dGlsc1xcaGVscGVycy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBoZWxwZXJzLmpzXHJcbmltcG9ydCBjbG91ZGluYXJ5IGZyb20gXCJAL2xpYi9jbG91ZGluYXJ5Q29uZmlnXCI7XHJcbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSBcIkAvbGliL21vbmdvZGJcIjtcclxuXHJcbmltcG9ydCB7IFNBTFRfUk9VTkRTIH0gZnJvbSBcIi4vY29uc3RhbnRcIjtcclxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcclxuZXhwb3J0IGNvbnN0IGdldENsb3VkaW5hcnlQdWJsaWNJZCA9ICh1cmw6IHN0cmluZykgPT4ge1xyXG4gIGlmICghdXJsKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHVybFBhcnRzID0gdXJsLnNwbGl0KFwiL1wiKTtcclxuICAgIGNvbnN0IGZpbGVuYW1lV2l0aEV4dGVuc2lvbiA9IHVybFBhcnRzLnBvcCgpO1xyXG4gICAgY29uc3QgZm9sZGVyID0gdXJsUGFydHMucG9wKCk7XHJcblxyXG4gICAgaWYgKCFmb2xkZXIgfHwgIWZpbGVuYW1lV2l0aEV4dGVuc2lvbikgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgY29uc3QgZmlsZW5hbWUgPSBmaWxlbmFtZVdpdGhFeHRlbnNpb24uc3BsaXQoXCIuXCIpWzBdO1xyXG4gICAgcmV0dXJuIGAke2ZvbGRlcn0vJHtmaWxlbmFtZX1gO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcGFyc2luZyBDbG91ZGluYXJ5IFVSTDpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNsb3VkaW5hcnlJbWFnZSA9IGFzeW5jIChwdWJsaWNJZDogc3RyaW5nKSA9PiB7XHJcbiAgaWYgKCFwdWJsaWNJZCkgcmV0dXJuIG51bGw7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbG91ZGluYXJ5LnYyLnVwbG9hZGVyLmRlc3Ryb3kocHVibGljSWQpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGZyb20gQ2xvdWRpbmFyeTpcIiwgZXJyb3IpO1xyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlcGxhY2VOZXdJbWFnZWZyb21DdXJyZW50SW1hZ2UgPSBhc3luYyAoXHJcbiAgY29sbGVjdGlvbjogYW55LFxyXG4gIGlkOiBzdHJpbmcsXHJcbiAgZmllbGQ6IHN0cmluZ1xyXG4pID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNvbGxlY3Rpb24uZmluZEJ5SWQoaWQpOyAvLyBVc2UgZmluZEJ5SWQgaW5zdGVhZCBvZiBmaW5kXHJcblxyXG4gICAgaWYgKHJlcykge1xyXG4gICAgICBpZiAoZmllbGQgPT09IFwicG9zdGVyXCIpIHtcclxuICAgICAgICBjb25zdCBwdWJsaWNJZCA9IGdldENsb3VkaW5hcnlQdWJsaWNJZChyZXMucG9zdGVyVXJsKTtcclxuICAgICAgICBpZiAocHVibGljSWQpIHtcclxuICAgICAgICAgIGF3YWl0IGRlbGV0ZUNsb3VkaW5hcnlJbWFnZShwdWJsaWNJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSBcImNvdmVyXCIpIHtcclxuICAgICAgICBjb25zdCBwdWJsaWNJZCA9IGdldENsb3VkaW5hcnlQdWJsaWNJZChyZXMuY292ZXJVcmwpO1xyXG4gICAgICAgIGlmIChwdWJsaWNJZCkge1xyXG4gICAgICAgICAgYXdhaXQgZGVsZXRlQ2xvdWRpbmFyeUltYWdlKHB1YmxpY0lkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcHVibGljSWQgPSBnZXRDbG91ZGluYXJ5UHVibGljSWQocmVzLnBpY3R1cmVVcmwpO1xyXG4gICAgICAgIGlmIChwdWJsaWNJZCkge1xyXG4gICAgICAgICAgYXdhaXQgZGVsZXRlQ2xvdWRpbmFyeUltYWdlKHB1YmxpY0lkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBoYXNoUGFzc3dvcmQgPSBhc3luYyAocGFzc3dvcmQ6IHN0cmluZykgPT4ge1xyXG4gIHJldHVybiBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgU0FMVF9ST1VORFMpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbXBhcmVQYXNzd29yZCA9IGFzeW5jIChcclxuICBwYXNzd29yZDogc3RyaW5nLFxyXG4gIGhhc2hlZFBhc3N3b3JkOiBzdHJpbmdcclxuKSA9PiB7XHJcbiAgcmV0dXJuIGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCBoYXNoZWRQYXNzd29yZCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyID0gKHN0cjogc3RyaW5nKSA9PlxyXG4gIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcclxuIl0sIm5hbWVzIjpbImNsb3VkaW5hcnkiLCJjb25uZWN0VG9EYXRhYmFzZSIsIlNBTFRfUk9VTkRTIiwiYmNyeXB0IiwiZ2V0Q2xvdWRpbmFyeVB1YmxpY0lkIiwidXJsIiwidXJsUGFydHMiLCJzcGxpdCIsImZpbGVuYW1lV2l0aEV4dGVuc2lvbiIsInBvcCIsImZvbGRlciIsImZpbGVuYW1lIiwiZXJyb3IiLCJjb25zb2xlIiwiZGVsZXRlQ2xvdWRpbmFyeUltYWdlIiwicHVibGljSWQiLCJyZXN1bHQiLCJ2MiIsInVwbG9hZGVyIiwiZGVzdHJveSIsInJlcGxhY2VOZXdJbWFnZWZyb21DdXJyZW50SW1hZ2UiLCJjb2xsZWN0aW9uIiwiaWQiLCJmaWVsZCIsInJlcyIsImZpbmRCeUlkIiwicG9zdGVyVXJsIiwiY292ZXJVcmwiLCJwaWN0dXJlVXJsIiwibG9nIiwiaGFzaFBhc3N3b3JkIiwicGFzc3dvcmQiLCJoYXNoIiwiY29tcGFyZVBhc3N3b3JkIiwiaGFzaGVkUGFzc3dvcmQiLCJjb21wYXJlIiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwic3RyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./utils/helpers.ts\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/lodash","vendor-chunks/cloudinary","vendor-chunks/q","vendor-chunks/bcryptjs"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmovie%2FdeleteMovie%2Froute&page=%2Fapi%2Fmovie%2FdeleteMovie%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmovie%2FdeleteMovie%2Froute.ts&appDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cnextjs-booking-system%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cnextjs-booking-system&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();