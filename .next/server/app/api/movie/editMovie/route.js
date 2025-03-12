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
exports.id = "app/api/movie/editMovie/route";
exports.ids = ["app/api/movie/editMovie/route"];
exports.modules = {

/***/ "(rsc)/./app/api/movie/editMovie/route.ts":
/*!******************************************!*\
  !*** ./app/api/movie/editMovie/route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _app_models_movieModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/models/movieModel */ \"(rsc)/./app/models/movieModel.ts\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/helpers */ \"(rsc)/./utils/helpers.ts\");\n\n\n\nasync function POST(request) {\n    try {\n        const formData = await request.formData();\n        let params = {};\n        const movieId = formData.get(\"movieId\");\n        if (formData.get(\"movieId\")) params.movieId = formData.get(\"movieId\");\n        if (formData.get(\"title\")) params.title = formData.get(\"title\");\n        if (formData.get(\"description\")) params.description = formData.get(\"description\");\n        if (formData.get(\"casts\")) params.casts = JSON.parse(formData.get(\"casts\"));\n        if (formData.get(\"director\")) params.director = formData.get(\"director\");\n        if (formData.get(\"producer\")) params.producer = formData.get(\"producer\");\n        if (formData.get(\"distributor\")) params.distributor = formData.get(\"distributor\");\n        if (formData.get(\"genres\")) params.genres = JSON.parse(formData.get(\"genres\"));\n        if (formData.get(\"time\")) params.time = formData.get(\"time\");\n        if (formData.get(\"poster\")) {\n            await (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_2__.replaceNewImagefromCurrentImage)(_app_models_movieModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"], movieId);\n        }\n        if (formData.get(\"cover\")) {\n            await (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_2__.replaceNewImagefromCurrentImage)(_app_models_movieModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"], movieId);\n        }\n        const newMovie = await _app_models_movieModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndUpdate(movieId, params);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Movie updated successfully\",\n            data: newMovie\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to edit movie\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL21vdmllL2VkaXRNb3ZpZS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdEO0FBQ1o7QUFFc0I7QUFFM0QsZUFBZUcsS0FBS0MsT0FBb0I7SUFDN0MsSUFBSTtRQUNGLE1BQU1DLFdBQVcsTUFBTUQsUUFBUUMsUUFBUTtRQUN2QyxJQUFJQyxTQUFjLENBQUM7UUFDbkIsTUFBTUMsVUFBVUYsU0FBU0csR0FBRyxDQUFDO1FBQzdCLElBQUlILFNBQVNHLEdBQUcsQ0FBQyxZQUFZRixPQUFPQyxPQUFPLEdBQUdGLFNBQVNHLEdBQUcsQ0FBQztRQUMzRCxJQUFJSCxTQUFTRyxHQUFHLENBQUMsVUFBVUYsT0FBT0csS0FBSyxHQUFHSixTQUFTRyxHQUFHLENBQUM7UUFDdkQsSUFBSUgsU0FBU0csR0FBRyxDQUFDLGdCQUNmRixPQUFPSSxXQUFXLEdBQUdMLFNBQVNHLEdBQUcsQ0FBQztRQUNwQyxJQUFJSCxTQUFTRyxHQUFHLENBQUMsVUFDZkYsT0FBT0ssS0FBSyxHQUFHQyxLQUFLQyxLQUFLLENBQUNSLFNBQVNHLEdBQUcsQ0FBQztRQUN6QyxJQUFJSCxTQUFTRyxHQUFHLENBQUMsYUFBYUYsT0FBT1EsUUFBUSxHQUFHVCxTQUFTRyxHQUFHLENBQUM7UUFDN0QsSUFBSUgsU0FBU0csR0FBRyxDQUFDLGFBQWFGLE9BQU9TLFFBQVEsR0FBR1YsU0FBU0csR0FBRyxDQUFDO1FBQzdELElBQUlILFNBQVNHLEdBQUcsQ0FBQyxnQkFDZkYsT0FBT1UsV0FBVyxHQUFHWCxTQUFTRyxHQUFHLENBQUM7UUFDcEMsSUFBSUgsU0FBU0csR0FBRyxDQUFDLFdBQ2ZGLE9BQU9XLE1BQU0sR0FBR0wsS0FBS0MsS0FBSyxDQUFDUixTQUFTRyxHQUFHLENBQUM7UUFDMUMsSUFBSUgsU0FBU0csR0FBRyxDQUFDLFNBQVNGLE9BQU9ZLElBQUksR0FBR2IsU0FBU0csR0FBRyxDQUFDO1FBQ3JELElBQUlILFNBQVNHLEdBQUcsQ0FBQyxXQUFXO1lBQzFCLE1BQU1OLCtFQUErQkEsQ0FBQ0QsOERBQUtBLEVBQUVNO1FBQy9DO1FBQ0EsSUFBSUYsU0FBU0csR0FBRyxDQUFDLFVBQVU7WUFDekIsTUFBTU4sK0VBQStCQSxDQUFDRCw4REFBS0EsRUFBRU07UUFDL0M7UUFFQSxNQUFNWSxXQUFXLE1BQU1sQiw4REFBS0EsQ0FBQ21CLGlCQUFpQixDQUFDYixTQUFTRDtRQUV4RCxPQUFPTixxREFBWUEsQ0FBQ3FCLElBQUksQ0FDdEI7WUFBRUMsU0FBUztZQUE4QkMsTUFBTUo7UUFBUyxHQUN4RDtZQUFFSyxRQUFRO1FBQUk7SUFFbEIsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsT0FBT3pCLHFEQUFZQSxDQUFDcUIsSUFBSSxDQUN0QjtZQUFFSSxPQUFPO1FBQXVCLEdBQ2hDO1lBQUVELFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEFTVVMgVFVGXFxEZXNrdG9wXFxyZXBvc1xcbmV4dGpzLWJvb2tpbmctc3lzdGVtXFxhcHBcXGFwaVxcbW92aWVcXGVkaXRNb3ZpZVxccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgTW92aWUgZnJvbSBcIkAvYXBwL21vZGVscy9tb3ZpZU1vZGVsXCI7XHJcbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSBcIkAvbGliL21vbmdvZGJcIjtcclxuaW1wb3J0IHsgcmVwbGFjZU5ld0ltYWdlZnJvbUN1cnJlbnRJbWFnZSB9IGZyb20gXCJAL3V0aWxzL2hlbHBlcnNcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gICAgbGV0IHBhcmFtczogYW55ID0ge307XHJcbiAgICBjb25zdCBtb3ZpZUlkID0gZm9ybURhdGEuZ2V0KFwibW92aWVJZFwiKSBhcyBzdHJpbmc7XHJcbiAgICBpZiAoZm9ybURhdGEuZ2V0KFwibW92aWVJZFwiKSkgcGFyYW1zLm1vdmllSWQgPSBmb3JtRGF0YS5nZXQoXCJtb3ZpZUlkXCIpO1xyXG4gICAgaWYgKGZvcm1EYXRhLmdldChcInRpdGxlXCIpKSBwYXJhbXMudGl0bGUgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKTtcclxuICAgIGlmIChmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKSlcclxuICAgICAgcGFyYW1zLmRlc2NyaXB0aW9uID0gZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIik7XHJcbiAgICBpZiAoZm9ybURhdGEuZ2V0KFwiY2FzdHNcIikpXHJcbiAgICAgIHBhcmFtcy5jYXN0cyA9IEpTT04ucGFyc2UoZm9ybURhdGEuZ2V0KFwiY2FzdHNcIikgYXMgc3RyaW5nKTtcclxuICAgIGlmIChmb3JtRGF0YS5nZXQoXCJkaXJlY3RvclwiKSkgcGFyYW1zLmRpcmVjdG9yID0gZm9ybURhdGEuZ2V0KFwiZGlyZWN0b3JcIik7XHJcbiAgICBpZiAoZm9ybURhdGEuZ2V0KFwicHJvZHVjZXJcIikpIHBhcmFtcy5wcm9kdWNlciA9IGZvcm1EYXRhLmdldChcInByb2R1Y2VyXCIpO1xyXG4gICAgaWYgKGZvcm1EYXRhLmdldChcImRpc3RyaWJ1dG9yXCIpKVxyXG4gICAgICBwYXJhbXMuZGlzdHJpYnV0b3IgPSBmb3JtRGF0YS5nZXQoXCJkaXN0cmlidXRvclwiKTtcclxuICAgIGlmIChmb3JtRGF0YS5nZXQoXCJnZW5yZXNcIikpXHJcbiAgICAgIHBhcmFtcy5nZW5yZXMgPSBKU09OLnBhcnNlKGZvcm1EYXRhLmdldChcImdlbnJlc1wiKSBhcyBzdHJpbmcpO1xyXG4gICAgaWYgKGZvcm1EYXRhLmdldChcInRpbWVcIikpIHBhcmFtcy50aW1lID0gZm9ybURhdGEuZ2V0KFwidGltZVwiKTtcclxuICAgIGlmIChmb3JtRGF0YS5nZXQoXCJwb3N0ZXJcIikpIHtcclxuICAgICAgYXdhaXQgcmVwbGFjZU5ld0ltYWdlZnJvbUN1cnJlbnRJbWFnZShNb3ZpZSwgbW92aWVJZCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZm9ybURhdGEuZ2V0KFwiY292ZXJcIikpIHtcclxuICAgICAgYXdhaXQgcmVwbGFjZU5ld0ltYWdlZnJvbUN1cnJlbnRJbWFnZShNb3ZpZSwgbW92aWVJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV3TW92aWUgPSBhd2FpdCBNb3ZpZS5maW5kQnlJZEFuZFVwZGF0ZShtb3ZpZUlkLCBwYXJhbXMpO1xyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyBtZXNzYWdlOiBcIk1vdmllIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIsIGRhdGE6IG5ld01vdmllIH0sXHJcbiAgICAgIHsgc3RhdHVzOiAyMDAgfVxyXG4gICAgKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICB7IGVycm9yOiBcIkZhaWxlZCB0byBlZGl0IG1vdmllXCIgfSxcclxuICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiTW92aWUiLCJyZXBsYWNlTmV3SW1hZ2Vmcm9tQ3VycmVudEltYWdlIiwiUE9TVCIsInJlcXVlc3QiLCJmb3JtRGF0YSIsInBhcmFtcyIsIm1vdmllSWQiLCJnZXQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY2FzdHMiLCJKU09OIiwicGFyc2UiLCJkaXJlY3RvciIsInByb2R1Y2VyIiwiZGlzdHJpYnV0b3IiLCJnZW5yZXMiLCJ0aW1lIiwibmV3TW92aWUiLCJmaW5kQnlJZEFuZFVwZGF0ZSIsImpzb24iLCJtZXNzYWdlIiwiZGF0YSIsInN0YXR1cyIsImVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/movie/editMovie/route.ts\n");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmovie%2FeditMovie%2Froute&page=%2Fapi%2Fmovie%2FeditMovie%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmovie%2FeditMovie%2Froute.ts&appDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cnextjs-booking-system%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cnextjs-booking-system&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmovie%2FeditMovie%2Froute&page=%2Fapi%2Fmovie%2FeditMovie%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmovie%2FeditMovie%2Froute.ts&appDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cnextjs-booking-system%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cnextjs-booking-system&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_ASUS_TUF_Desktop_repos_nextjs_booking_system_app_api_movie_editMovie_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/movie/editMovie/route.ts */ \"(rsc)/./app/api/movie/editMovie/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/movie/editMovie/route\",\n        pathname: \"/api/movie/editMovie\",\n        filename: \"route\",\n        bundlePath: \"app/api/movie/editMovie/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\ASUS TUF\\\\Desktop\\\\repos\\\\nextjs-booking-system\\\\app\\\\api\\\\movie\\\\editMovie\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_ASUS_TUF_Desktop_repos_nextjs_booking_system_app_api_movie_editMovie_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZtb3ZpZSUyRmVkaXRNb3ZpZSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGbW92aWUlMkZlZGl0TW92aWUlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZtb3ZpZSUyRmVkaXRNb3ZpZSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNBU1VTJTIwVFVGJTVDRGVza3RvcCU1Q3JlcG9zJTVDbmV4dGpzLWJvb2tpbmctc3lzdGVtJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNBU1VTJTIwVFVGJTVDRGVza3RvcCU1Q3JlcG9zJTVDbmV4dGpzLWJvb2tpbmctc3lzdGVtJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNnRDtBQUM3SDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcQVNVUyBUVUZcXFxcRGVza3RvcFxcXFxyZXBvc1xcXFxuZXh0anMtYm9va2luZy1zeXN0ZW1cXFxcYXBwXFxcXGFwaVxcXFxtb3ZpZVxcXFxlZGl0TW92aWVcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL21vdmllL2VkaXRNb3ZpZS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL21vdmllL2VkaXRNb3ZpZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvbW92aWUvZWRpdE1vdmllL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcQVNVUyBUVUZcXFxcRGVza3RvcFxcXFxyZXBvc1xcXFxuZXh0anMtYm9va2luZy1zeXN0ZW1cXFxcYXBwXFxcXGFwaVxcXFxtb3ZpZVxcXFxlZGl0TW92aWVcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmovie%2FeditMovie%2Froute&page=%2Fapi%2Fmovie%2FeditMovie%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmovie%2FeditMovie%2Froute.ts&appDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cnextjs-booking-system%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cnextjs-booking-system&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   capitalizeFirstLetter: () => (/* binding */ capitalizeFirstLetter),\n/* harmony export */   comparePassword: () => (/* binding */ comparePassword),\n/* harmony export */   deleteCloudinaryImage: () => (/* binding */ deleteCloudinaryImage),\n/* harmony export */   getCloudinaryPublicId: () => (/* binding */ getCloudinaryPublicId),\n/* harmony export */   hashPassword: () => (/* binding */ hashPassword),\n/* harmony export */   replaceNewImagefromCurrentImage: () => (/* binding */ replaceNewImagefromCurrentImage)\n/* harmony export */ });\n/* harmony import */ var _lib_cloudinaryConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/cloudinaryConfig */ \"(rsc)/./lib/cloudinaryConfig.ts\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant */ \"(rsc)/./utils/constant.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n// helpers.js\n\n\n\n\nconst getCloudinaryPublicId = (url)=>{\n    if (!url) return null;\n    try {\n        const urlParts = url.split(\"/\");\n        const filenameWithExtension = urlParts.pop();\n        const folder = urlParts.pop();\n        if (!folder || !filenameWithExtension) return null;\n        const filename = filenameWithExtension.split(\".\")[0];\n        return `${folder}/${filename}`;\n    } catch (error) {\n        console.error(\"Error parsing Cloudinary URL:\", error);\n        return null;\n    }\n};\nconst deleteCloudinaryImage = async (publicId)=>{\n    if (!publicId) return null;\n    try {\n        const result = await _lib_cloudinaryConfig__WEBPACK_IMPORTED_MODULE_0__[\"default\"].v2.uploader.destroy(publicId);\n        return result;\n    } catch (error) {\n        console.error(\"Error deleting from Cloudinary:\", error);\n        throw error;\n    }\n};\nconst replaceNewImagefromCurrentImage = async (collection, id)=>{\n    try {\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__.connectToDatabase)();\n        const res = await collection.findById(id); // Use findById instead of find\n        console.log(res, \"from\");\n        if (res) {\n            const publicId = getCloudinaryPublicId(res.pictureUrl);\n            if (publicId) {\n                await deleteCloudinaryImage(publicId);\n            }\n        }\n    } catch (error) {\n        console.log(error);\n    }\n};\nconst hashPassword = async (password)=>{\n    return await bcryptjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].hash(password, _constant__WEBPACK_IMPORTED_MODULE_2__.SALT_ROUNDS);\n};\nconst comparePassword = async (password, hashedPassword)=>{\n    return await bcryptjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].compare(password, hashedPassword);\n};\nconst capitalizeFirstLetter = (str)=>str.charAt(0).toUpperCase() + str.slice(1);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9oZWxwZXJzLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxhQUFhO0FBQ21DO0FBQ0U7QUFFVDtBQUNYO0FBQ3ZCLE1BQU1JLHdCQUF3QixDQUFDQztJQUNwQyxJQUFJLENBQUNBLEtBQUssT0FBTztJQUVqQixJQUFJO1FBQ0YsTUFBTUMsV0FBV0QsSUFBSUUsS0FBSyxDQUFDO1FBQzNCLE1BQU1DLHdCQUF3QkYsU0FBU0csR0FBRztRQUMxQyxNQUFNQyxTQUFTSixTQUFTRyxHQUFHO1FBRTNCLElBQUksQ0FBQ0MsVUFBVSxDQUFDRix1QkFBdUIsT0FBTztRQUU5QyxNQUFNRyxXQUFXSCxzQkFBc0JELEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNwRCxPQUFPLEdBQUdHLE9BQU8sQ0FBQyxFQUFFQyxVQUFVO0lBQ2hDLEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsaUNBQWlDQTtRQUMvQyxPQUFPO0lBQ1Q7QUFDRixFQUFFO0FBRUssTUFBTUUsd0JBQXdCLE9BQU9DO0lBQzFDLElBQUksQ0FBQ0EsVUFBVSxPQUFPO0lBRXRCLElBQUk7UUFDRixNQUFNQyxTQUFTLE1BQU1oQiw2REFBVUEsQ0FBQ2lCLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLENBQUNKO1FBQ3BELE9BQU9DO0lBQ1QsRUFBRSxPQUFPSixPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyxtQ0FBbUNBO1FBQ2pELE1BQU1BO0lBQ1I7QUFDRixFQUFFO0FBRUssTUFBTVEsa0NBQWtDLE9BQzdDQyxZQUNBQztJQUVBLElBQUk7UUFDRixNQUFNckIsK0RBQWlCQTtRQUN2QixNQUFNc0IsTUFBTSxNQUFNRixXQUFXRyxRQUFRLENBQUNGLEtBQUssK0JBQStCO1FBQzFFVCxRQUFRWSxHQUFHLENBQUNGLEtBQUs7UUFDakIsSUFBSUEsS0FBSztZQUNQLE1BQU1SLFdBQVdYLHNCQUFzQm1CLElBQUlHLFVBQVU7WUFDckQsSUFBSVgsVUFBVTtnQkFDWixNQUFNRCxzQkFBc0JDO1lBQzlCO1FBQ0Y7SUFDRixFQUFFLE9BQU9ILE9BQU87UUFDZEMsUUFBUVksR0FBRyxDQUFDYjtJQUNkO0FBQ0YsRUFBRTtBQUVLLE1BQU1lLGVBQWUsT0FBT0M7SUFDakMsT0FBTyxNQUFNekIscURBQVcsQ0FBQ3lCLFVBQVUxQixrREFBV0E7QUFDaEQsRUFBRTtBQUVLLE1BQU00QixrQkFBa0IsT0FDN0JGLFVBQ0FHO0lBRUEsT0FBTyxNQUFNNUIsd0RBQWMsQ0FBQ3lCLFVBQVVHO0FBQ3hDLEVBQUU7QUFFSyxNQUFNRSx3QkFBd0IsQ0FBQ0MsTUFDcENBLElBQUlDLE1BQU0sQ0FBQyxHQUFHQyxXQUFXLEtBQUtGLElBQUlHLEtBQUssQ0FBQyxHQUFHIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEFTVVMgVFVGXFxEZXNrdG9wXFxyZXBvc1xcbmV4dGpzLWJvb2tpbmctc3lzdGVtXFx1dGlsc1xcaGVscGVycy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBoZWxwZXJzLmpzXHJcbmltcG9ydCBjbG91ZGluYXJ5IGZyb20gXCJAL2xpYi9jbG91ZGluYXJ5Q29uZmlnXCI7XHJcbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSBcIkAvbGliL21vbmdvZGJcIjtcclxuXHJcbmltcG9ydCB7IFNBTFRfUk9VTkRTIH0gZnJvbSBcIi4vY29uc3RhbnRcIjtcclxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcclxuZXhwb3J0IGNvbnN0IGdldENsb3VkaW5hcnlQdWJsaWNJZCA9ICh1cmw6IHN0cmluZykgPT4ge1xyXG4gIGlmICghdXJsKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHVybFBhcnRzID0gdXJsLnNwbGl0KFwiL1wiKTtcclxuICAgIGNvbnN0IGZpbGVuYW1lV2l0aEV4dGVuc2lvbiA9IHVybFBhcnRzLnBvcCgpO1xyXG4gICAgY29uc3QgZm9sZGVyID0gdXJsUGFydHMucG9wKCk7XHJcblxyXG4gICAgaWYgKCFmb2xkZXIgfHwgIWZpbGVuYW1lV2l0aEV4dGVuc2lvbikgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgY29uc3QgZmlsZW5hbWUgPSBmaWxlbmFtZVdpdGhFeHRlbnNpb24uc3BsaXQoXCIuXCIpWzBdO1xyXG4gICAgcmV0dXJuIGAke2ZvbGRlcn0vJHtmaWxlbmFtZX1gO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcGFyc2luZyBDbG91ZGluYXJ5IFVSTDpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNsb3VkaW5hcnlJbWFnZSA9IGFzeW5jIChwdWJsaWNJZDogc3RyaW5nKSA9PiB7XHJcbiAgaWYgKCFwdWJsaWNJZCkgcmV0dXJuIG51bGw7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbG91ZGluYXJ5LnYyLnVwbG9hZGVyLmRlc3Ryb3kocHVibGljSWQpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGZyb20gQ2xvdWRpbmFyeTpcIiwgZXJyb3IpO1xyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlcGxhY2VOZXdJbWFnZWZyb21DdXJyZW50SW1hZ2UgPSBhc3luYyAoXHJcbiAgY29sbGVjdGlvbjogYW55LFxyXG4gIGlkOiBzdHJpbmdcclxuKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBjb2xsZWN0aW9uLmZpbmRCeUlkKGlkKTsgLy8gVXNlIGZpbmRCeUlkIGluc3RlYWQgb2YgZmluZFxyXG4gICAgY29uc29sZS5sb2cocmVzLCBcImZyb21cIik7XHJcbiAgICBpZiAocmVzKSB7XHJcbiAgICAgIGNvbnN0IHB1YmxpY0lkID0gZ2V0Q2xvdWRpbmFyeVB1YmxpY0lkKHJlcy5waWN0dXJlVXJsKTtcclxuICAgICAgaWYgKHB1YmxpY0lkKSB7XHJcbiAgICAgICAgYXdhaXQgZGVsZXRlQ2xvdWRpbmFyeUltYWdlKHB1YmxpY0lkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhc2hQYXNzd29yZCA9IGFzeW5jIChwYXNzd29yZDogc3RyaW5nKSA9PiB7XHJcbiAgcmV0dXJuIGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCBTQUxUX1JPVU5EUyk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY29tcGFyZVBhc3N3b3JkID0gYXN5bmMgKFxyXG4gIHBhc3N3b3JkOiBzdHJpbmcsXHJcbiAgaGFzaGVkUGFzc3dvcmQ6IHN0cmluZ1xyXG4pID0+IHtcclxuICByZXR1cm4gYXdhaXQgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIGhhc2hlZFBhc3N3b3JkKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSAoc3RyOiBzdHJpbmcpID0+XHJcbiAgc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xyXG4iXSwibmFtZXMiOlsiY2xvdWRpbmFyeSIsImNvbm5lY3RUb0RhdGFiYXNlIiwiU0FMVF9ST1VORFMiLCJiY3J5cHQiLCJnZXRDbG91ZGluYXJ5UHVibGljSWQiLCJ1cmwiLCJ1cmxQYXJ0cyIsInNwbGl0IiwiZmlsZW5hbWVXaXRoRXh0ZW5zaW9uIiwicG9wIiwiZm9sZGVyIiwiZmlsZW5hbWUiLCJlcnJvciIsImNvbnNvbGUiLCJkZWxldGVDbG91ZGluYXJ5SW1hZ2UiLCJwdWJsaWNJZCIsInJlc3VsdCIsInYyIiwidXBsb2FkZXIiLCJkZXN0cm95IiwicmVwbGFjZU5ld0ltYWdlZnJvbUN1cnJlbnRJbWFnZSIsImNvbGxlY3Rpb24iLCJpZCIsInJlcyIsImZpbmRCeUlkIiwibG9nIiwicGljdHVyZVVybCIsImhhc2hQYXNzd29yZCIsInBhc3N3b3JkIiwiaGFzaCIsImNvbXBhcmVQYXNzd29yZCIsImhhc2hlZFBhc3N3b3JkIiwiY29tcGFyZSIsImNhcGl0YWxpemVGaXJzdExldHRlciIsInN0ciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./utils/helpers.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/lodash","vendor-chunks/cloudinary","vendor-chunks/bcryptjs","vendor-chunks/q"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmovie%2FeditMovie%2Froute&page=%2Fapi%2Fmovie%2FeditMovie%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmovie%2FeditMovie%2Froute.ts&appDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cnextjs-booking-system%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cnextjs-booking-system&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();