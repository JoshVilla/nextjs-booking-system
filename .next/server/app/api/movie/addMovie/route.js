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
exports.id = "app/api/movie/addMovie/route";
exports.ids = ["app/api/movie/addMovie/route"];
exports.modules = {

/***/ "(rsc)/./app/api/movie/addMovie/route.ts":
/*!*****************************************!*\
  !*** ./app/api/movie/addMovie/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _app_models_movieModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/models/movieModel */ \"(rsc)/./app/models/movieModel.ts\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n/* harmony import */ var _lib_cloudinaryConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/cloudinaryConfig */ \"(rsc)/./lib/cloudinaryConfig.ts\");\n\n\n\n\nasync function POST(request) {\n    try {\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_2__.connectToDatabase)();\n        let params = {};\n        const formData = await request.formData();\n        const poster = formData.get(\"poster\");\n        const cover = formData.get(\"cover\");\n        const casts = formData.get(\"casts\");\n        const genres = formData.get(\"genres\");\n        if (formData.get(\"time\")) {\n            params.time = parseInt(formData.get(\"time\"));\n        }\n        if (formData.get(\"title\")) {\n            params.title = formData.get(\"title\");\n        }\n        if (formData.get(\"description\")) {\n            params.description = formData.get(\"description\");\n        }\n        if (formData.get(\"director\")) {\n            params.director = formData.get(\"director\");\n        }\n        if (formData.get(\"producer\")) {\n            params.producer = formData.get(\"producer\");\n        }\n        if (formData.get(\"distributor\")) {\n            params.distributor = formData.get(\"distributor\");\n        }\n        if (casts) {\n            params.casts = JSON.parse(casts);\n        }\n        if (genres) {\n            params.genres = JSON.parse(genres);\n        }\n        if (poster) {\n            try {\n                if (poster instanceof File) {\n                    const buffer = Buffer.from(await poster.arrayBuffer()); // Ensure correct buffer conversion\n                    const imageUrl = await new Promise((resolve, reject)=>{\n                        _lib_cloudinaryConfig__WEBPACK_IMPORTED_MODULE_3__[\"default\"].v2.uploader.upload_stream({\n                            folder: \"movie_pictures\"\n                        }, (error, result)=>{\n                            if (error) {\n                                console.error(\"Cloudinary upload failed:\", error);\n                                reject(new Error(\"Failed to upload image\"));\n                            } else {\n                                console.log(\"Cloudinary upload successful:\", result?.secure_url);\n                                resolve(result?.secure_url);\n                            }\n                        }).end(buffer);\n                    });\n                    params.posterUrl = imageUrl;\n                }\n            } catch (error) {\n                console.error(\"Error uploading to Cloudinary:\", error);\n                return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                    error: \"Failed to upload image\"\n                }, {\n                    status: 500\n                });\n            }\n        }\n        if (cover) {\n            try {\n                if (cover instanceof File) {\n                    const buffer = Buffer.from(await cover.arrayBuffer()); // Ensure correct buffer conversion\n                    const imageUrl = await new Promise((resolve, reject)=>{\n                        _lib_cloudinaryConfig__WEBPACK_IMPORTED_MODULE_3__[\"default\"].v2.uploader.upload_stream({\n                            folder: \"movie_pictures\"\n                        }, (error, result)=>{\n                            if (error) {\n                                console.error(\"Cloudinary upload failed:\", error);\n                                reject(new Error(\"Failed to upload image\"));\n                            } else {\n                                console.log(\"Cloudinary upload successful:\", result?.secure_url);\n                                resolve(result?.secure_url);\n                            }\n                        }).end(buffer);\n                    });\n                    params.coverUrl = imageUrl;\n                }\n            } catch (error) {\n                console.error(\"Error uploading to Cloudinary:\", error);\n                return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                    error: \"Failed to upload image\"\n                }, {\n                    status: 500\n                });\n            }\n        }\n        console.log(params, \"@@@@@@@@@@@@@@@@@params@@@@@@@@@@@@@@@@@\");\n        const movie = await _app_models_movieModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(params);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            data: movie,\n            message: \"Movie added successfully\"\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        console.error(\"Error adding movie:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to add movie\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsQ0FBQ0MsT0FBT0M7NEJBQ25ELElBQUlELE9BQU87Z0NBQ1RFLFFBQVFGLEtBQUssQ0FBQyw2QkFBNkJBO2dDQUMzQ0wsT0FBTyxJQUFJUSxNQUFNOzRCQUNuQixPQUFPO2dDQUNMRCxRQUFRRSxHQUFHLENBQ1QsaUNBQ0FILFFBQVFJO2dDQUVWWCxRQUFRTyxRQUFRSTs0QkFDbEI7d0JBQ0YsR0FDQ0MsR0FBRyxDQUFDbEI7b0JBQ1Q7b0JBQ0FqQixPQUFPdUMsUUFBUSxHQUFHbEI7Z0JBQ3BCO1lBQ0YsRUFBRSxPQUFPUSxPQUFZO2dCQUNuQkUsUUFBUUYsS0FBSyxDQUFDLGtDQUFrQ0E7Z0JBQ2hELE9BQU9uQyxxREFBWUEsQ0FBQzJDLElBQUksQ0FDdEI7b0JBQUVSLE9BQU87Z0JBQXlCLEdBQ2xDO29CQUFFUyxRQUFRO2dCQUFJO1lBRWxCO1FBQ0Y7UUFFQVAsUUFBUUUsR0FBRyxDQUFDakMsUUFBUTtRQUVwQixNQUFNd0MsUUFBUSxNQUFNN0MsOERBQUtBLENBQUM4QyxNQUFNLENBQUN6QztRQUNqQyxPQUFPTixxREFBWUEsQ0FBQzJDLElBQUksQ0FDdEI7WUFBRUssTUFBTUY7WUFBT0csU0FBUztRQUEyQixHQUNuRDtZQUFFTCxRQUFRO1FBQUk7SUFFbEIsRUFBRSxPQUFPVCxPQUFPO1FBQ2RFLFFBQVFGLEtBQUssQ0FBQyx1QkFBdUJBO1FBQ3JDLE9BQU9uQyxxREFBWUEsQ0FBQzJDLElBQUksQ0FBQztZQUFFUixPQUFPO1FBQXNCLEdBQUc7WUFBRVMsUUFBUTtRQUFJO0lBQzNFO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQVNVUyBUVUZcXERlc2t0b3BcXHJlcG9zXFxuZXh0anMtYm9va2luZy1zeXN0ZW1cXGFwcFxcYXBpXFxtb3ZpZVxcYWRkTW92aWVcXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IE1vdmllIGZyb20gXCJAL2FwcC9tb2RlbHMvbW92aWVNb2RlbFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gXCJAL2xpYi9tb25nb2RiXCI7XHJcbmltcG9ydCBjbG91ZGluYXJ5IGZyb20gXCJAL2xpYi9jbG91ZGluYXJ5Q29uZmlnXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xyXG4gICAgbGV0IHBhcmFtczogYW55ID0ge307XHJcblxyXG4gICAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgICBjb25zdCBwb3N0ZXIgPSBmb3JtRGF0YS5nZXQoXCJwb3N0ZXJcIik7XHJcbiAgICBjb25zdCBjb3ZlciA9IGZvcm1EYXRhLmdldChcImNvdmVyXCIpO1xyXG4gICAgY29uc3QgY2FzdHMgPSBmb3JtRGF0YS5nZXQoXCJjYXN0c1wiKTtcclxuICAgIGNvbnN0IGdlbnJlcyA9IGZvcm1EYXRhLmdldChcImdlbnJlc1wiKTtcclxuXHJcbiAgICBpZiAoZm9ybURhdGEuZ2V0KFwidGltZVwiKSkge1xyXG4gICAgICBwYXJhbXMudGltZSA9IHBhcnNlSW50KGZvcm1EYXRhLmdldChcInRpbWVcIikgYXMgc3RyaW5nKTtcclxuICAgIH1cclxuICAgIGlmIChmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKSkge1xyXG4gICAgICBwYXJhbXMudGl0bGUgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKSBhcyBzdHJpbmc7XHJcbiAgICB9XHJcbiAgICBpZiAoZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIikpIHtcclxuICAgICAgcGFyYW1zLmRlc2NyaXB0aW9uID0gZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIikgYXMgc3RyaW5nO1xyXG4gICAgfVxyXG4gICAgaWYgKGZvcm1EYXRhLmdldChcImRpcmVjdG9yXCIpKSB7XHJcbiAgICAgIHBhcmFtcy5kaXJlY3RvciA9IGZvcm1EYXRhLmdldChcImRpcmVjdG9yXCIpIGFzIHN0cmluZztcclxuICAgIH1cclxuICAgIGlmIChmb3JtRGF0YS5nZXQoXCJwcm9kdWNlclwiKSkge1xyXG4gICAgICBwYXJhbXMucHJvZHVjZXIgPSBmb3JtRGF0YS5nZXQoXCJwcm9kdWNlclwiKSBhcyBzdHJpbmc7XHJcbiAgICB9XHJcbiAgICBpZiAoZm9ybURhdGEuZ2V0KFwiZGlzdHJpYnV0b3JcIikpIHtcclxuICAgICAgcGFyYW1zLmRpc3RyaWJ1dG9yID0gZm9ybURhdGEuZ2V0KFwiZGlzdHJpYnV0b3JcIikgYXMgc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjYXN0cykge1xyXG4gICAgICBwYXJhbXMuY2FzdHMgPSBKU09OLnBhcnNlKGNhc3RzIGFzIHN0cmluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdlbnJlcykge1xyXG4gICAgICBwYXJhbXMuZ2VucmVzID0gSlNPTi5wYXJzZShnZW5yZXMgYXMgc3RyaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocG9zdGVyKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHBvc3RlciBpbnN0YW5jZW9mIEZpbGUpIHtcclxuICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGF3YWl0IHBvc3Rlci5hcnJheUJ1ZmZlcigpKTsgLy8gRW5zdXJlIGNvcnJlY3QgYnVmZmVyIGNvbnZlcnNpb25cclxuICAgICAgICAgIGNvbnN0IGltYWdlVXJsID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjbG91ZGluYXJ5LnYyLnVwbG9hZGVyXHJcbiAgICAgICAgICAgICAgLnVwbG9hZF9zdHJlYW0oeyBmb2xkZXI6IFwibW92aWVfcGljdHVyZXNcIiB9LCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDbG91ZGluYXJ5IHVwbG9hZCBmYWlsZWQ6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIkZhaWxlZCB0byB1cGxvYWQgaW1hZ2VcIikpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDbG91ZGluYXJ5IHVwbG9hZCBzdWNjZXNzZnVsOlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdD8uc2VjdXJlX3VybFxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdD8uc2VjdXJlX3VybCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAuZW5kKGJ1ZmZlcik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHBhcmFtcy5wb3N0ZXJVcmwgPSBpbWFnZVVybDtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBsb2FkaW5nIHRvIENsb3VkaW5hcnk6XCIsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgICB7IGVycm9yOiBcIkZhaWxlZCB0byB1cGxvYWQgaW1hZ2VcIiB9LFxyXG4gICAgICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb3Zlcikge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlmIChjb3ZlciBpbnN0YW5jZW9mIEZpbGUpIHtcclxuICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGF3YWl0IGNvdmVyLmFycmF5QnVmZmVyKCkpOyAvLyBFbnN1cmUgY29ycmVjdCBidWZmZXIgY29udmVyc2lvblxyXG4gICAgICAgICAgY29uc3QgaW1hZ2VVcmwgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNsb3VkaW5hcnkudjIudXBsb2FkZXJcclxuICAgICAgICAgICAgICAudXBsb2FkX3N0cmVhbSh7IGZvbGRlcjogXCJtb3ZpZV9waWN0dXJlc1wiIH0sIChlcnJvciwgcmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkNsb3VkaW5hcnkgdXBsb2FkIGZhaWxlZDpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiRmFpbGVkIHRvIHVwbG9hZCBpbWFnZVwiKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgICAgICBcIkNsb3VkaW5hcnkgdXBsb2FkIHN1Y2Nlc3NmdWw6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Py5zZWN1cmVfdXJsXHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0Py5zZWN1cmVfdXJsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5lbmQoYnVmZmVyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcGFyYW1zLmNvdmVyVXJsID0gaW1hZ2VVcmw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwbG9hZGluZyB0byBDbG91ZGluYXJ5OlwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgICAgeyBlcnJvcjogXCJGYWlsZWQgdG8gdXBsb2FkIGltYWdlXCIgfSxcclxuICAgICAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhwYXJhbXMsIFwiQEBAQEBAQEBAQEBAQEBAQEBwYXJhbXNAQEBAQEBAQEBAQEBAQEBAQFwiKTtcclxuXHJcbiAgICBjb25zdCBtb3ZpZSA9IGF3YWl0IE1vdmllLmNyZWF0ZShwYXJhbXMpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICB7IGRhdGE6IG1vdmllLCBtZXNzYWdlOiBcIk1vdmllIGFkZGVkIHN1Y2Nlc3NmdWxseVwiIH0sXHJcbiAgICAgIHsgc3RhdHVzOiAyMDEgfVxyXG4gICAgKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBtb3ZpZTpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiRmFpbGVkIHRvIGFkZCBtb3ZpZVwiIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJNb3ZpZSIsImNvbm5lY3RUb0RhdGFiYXNlIiwiY2xvdWRpbmFyeSIsIlBPU1QiLCJyZXF1ZXN0IiwicGFyYW1zIiwiZm9ybURhdGEiLCJwb3N0ZXIiLCJnZXQiLCJjb3ZlciIsImNhc3RzIiwiZ2VucmVzIiwidGltZSIsInBhcnNlSW50IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRpcmVjdG9yIiwicHJvZHVjZXIiLCJkaXN0cmlidXRvciIsIkpTT04iLCJwYXJzZSIsIkZpbGUiLCJidWZmZXIiLCJCdWZmZXIiLCJmcm9tIiwiYXJyYXlCdWZmZXIiLCJpbWFnZVVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidjIiLCJ1cGxvYWRlciIsInVwbG9hZF9zdHJlYW0iLCJmb2xkZXIiLCJlcnJvciIsInJlc3VsdCIsImNvbnNvbGUiLCJFcnJvciIsImxvZyIsInNlY3VyZV91cmwiLCJlbmQiLCJwb3N0ZXJVcmwiLCJqc29uIiwic3RhdHVzIiwiY292ZXJVcmwiLCJtb3ZpZSIsImNyZWF0ZSIsImRhdGEiLCJtZXNzYWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/movie/addMovie/route.ts\n");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmovie%2FaddMovie%2Froute&page=%2Fapi%2Fmovie%2FaddMovie%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmovie%2FaddMovie%2Froute.ts&appDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cnextjs-booking-system%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cnextjs-booking-system&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmovie%2FaddMovie%2Froute&page=%2Fapi%2Fmovie%2FaddMovie%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmovie%2FaddMovie%2Froute.ts&appDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cnextjs-booking-system%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cnextjs-booking-system&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_ASUS_TUF_Desktop_repos_nextjs_booking_system_app_api_movie_addMovie_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/movie/addMovie/route.ts */ \"(rsc)/./app/api/movie/addMovie/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/movie/addMovie/route\",\n        pathname: \"/api/movie/addMovie\",\n        filename: \"route\",\n        bundlePath: \"app/api/movie/addMovie/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\ASUS TUF\\\\Desktop\\\\repos\\\\nextjs-booking-system\\\\app\\\\api\\\\movie\\\\addMovie\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_ASUS_TUF_Desktop_repos_nextjs_booking_system_app_api_movie_addMovie_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZtb3ZpZSUyRmFkZE1vdmllJTJGcm91dGUmcGFnZT0lMkZhcGklMkZtb3ZpZSUyRmFkZE1vdmllJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGbW92aWUlMkZhZGRNb3ZpZSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNBU1VTJTIwVFVGJTVDRGVza3RvcCU1Q3JlcG9zJTVDbmV4dGpzLWJvb2tpbmctc3lzdGVtJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNBU1VTJTIwVFVGJTVDRGVza3RvcCU1Q3JlcG9zJTVDbmV4dGpzLWJvb2tpbmctc3lzdGVtJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUMrQztBQUM1SDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcQVNVUyBUVUZcXFxcRGVza3RvcFxcXFxyZXBvc1xcXFxuZXh0anMtYm9va2luZy1zeXN0ZW1cXFxcYXBwXFxcXGFwaVxcXFxtb3ZpZVxcXFxhZGRNb3ZpZVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvbW92aWUvYWRkTW92aWUvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9tb3ZpZS9hZGRNb3ZpZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvbW92aWUvYWRkTW92aWUvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxBU1VTIFRVRlxcXFxEZXNrdG9wXFxcXHJlcG9zXFxcXG5leHRqcy1ib29raW5nLXN5c3RlbVxcXFxhcHBcXFxcYXBpXFxcXG1vdmllXFxcXGFkZE1vdmllXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmovie%2FaddMovie%2Froute&page=%2Fapi%2Fmovie%2FaddMovie%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmovie%2FaddMovie%2Froute.ts&appDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cnextjs-booking-system%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cnextjs-booking-system&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/lodash","vendor-chunks/cloudinary","vendor-chunks/q"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmovie%2FaddMovie%2Froute&page=%2Fapi%2Fmovie%2FaddMovie%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmovie%2FaddMovie%2Froute.ts&appDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cnextjs-booking-system%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CASUS%20TUF%5CDesktop%5Crepos%5Cnextjs-booking-system&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();