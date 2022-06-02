(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdi_font_css_materialdesignicons_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdi/font/css/materialdesignicons.css */ "./node_modules/@mdi/font/css/materialdesignicons.css");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify */ "./node_modules/vuetify/dist/vuetify.js");
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vuetify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/dist/vuetify.min.css */ "./node_modules/vuetify/dist/vuetify.min.css");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");






vue__WEBPACK_IMPORTED_MODULE_4__["default"].use((vuetify__WEBPACK_IMPORTED_MODULE_5___default()));
(0,_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_2__.createInertiaApp)({
  resolve: function () {
    var _resolve = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(name) {
      var page;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__("./resources/js/Pages lazy recursive ^\\.\\/.*$")("./".concat(name));

            case 2:
              page = _context.sent["default"];
              return _context.abrupt("return", page);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function resolve(_x) {
      return _resolve.apply(this, arguments);
    }

    return resolve;
  }(),
  setup: function setup(_ref) {
    var el = _ref.el,
        App = _ref.App,
        props = _ref.props,
        plugin = _ref.plugin;
    vue__WEBPACK_IMPORTED_MODULE_4__["default"].use(plugin);
    new vue__WEBPACK_IMPORTED_MODULE_4__["default"]({
      vuetify: new (vuetify__WEBPACK_IMPORTED_MODULE_5___default())({
        icons: {
          iconfont: 'mdi' // default - only for display purposes

        }
      }),
      render: function render(h) {
        return h(App, props);
      }
    }).$mount(el);
  }
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/Pages lazy recursive ^\\.\\/.*$":
/*!************************************************************!*\
  !*** ./resources/js/Pages/ lazy ^\.\/.*$ namespace object ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Auth/EmailVerification": [
		"./resources/js/Pages/Auth/EmailVerification.vue",
		"/js/vendor",
		"resources_js_Pages_Auth_EmailVerification_vue"
	],
	"./Auth/EmailVerification.vue": [
		"./resources/js/Pages/Auth/EmailVerification.vue",
		"/js/vendor",
		"resources_js_Pages_Auth_EmailVerification_vue"
	],
	"./Auth/ForgotPassword": [
		"./resources/js/Pages/Auth/ForgotPassword.vue",
		"/js/vendor",
		"resources_js_Pages_Auth_ForgotPassword_vue"
	],
	"./Auth/ForgotPassword.vue": [
		"./resources/js/Pages/Auth/ForgotPassword.vue",
		"/js/vendor",
		"resources_js_Pages_Auth_ForgotPassword_vue"
	],
	"./Auth/Login": [
		"./resources/js/Pages/Auth/Login.vue",
		"/js/vendor",
		"resources_js_Pages_Auth_Login_vue"
	],
	"./Auth/Login.vue": [
		"./resources/js/Pages/Auth/Login.vue",
		"/js/vendor",
		"resources_js_Pages_Auth_Login_vue"
	],
	"./Auth/Register": [
		"./resources/js/Pages/Auth/Register.vue",
		"/js/vendor",
		"resources_js_Pages_Auth_Register_vue"
	],
	"./Auth/Register.vue": [
		"./resources/js/Pages/Auth/Register.vue",
		"/js/vendor",
		"resources_js_Pages_Auth_Register_vue"
	],
	"./Auth/ResetPassword": [
		"./resources/js/Pages/Auth/ResetPassword.vue",
		"/js/vendor",
		"resources_js_Pages_Auth_ResetPassword_vue"
	],
	"./Auth/ResetPassword.vue": [
		"./resources/js/Pages/Auth/ResetPassword.vue",
		"/js/vendor",
		"resources_js_Pages_Auth_ResetPassword_vue"
	],
	"./Layouts/Navigation": [
		"./resources/js/Pages/Layouts/Navigation.vue",
		"/js/vendor",
		"resources_js_Pages_Layouts_Navigation_vue"
	],
	"./Layouts/Navigation.vue": [
		"./resources/js/Pages/Layouts/Navigation.vue",
		"/js/vendor",
		"resources_js_Pages_Layouts_Navigation_vue"
	],
	"./Test": [
		"./resources/js/Pages/Test.vue",
		"/js/vendor",
		"resources_js_Pages_Test_vue"
	],
	"./Test.vue": [
		"./resources/js/Pages/Test.vue",
		"/js/vendor",
		"resources_js_Pages_Test_vue"
	],
	"./Views/Dashboard": [
		"./resources/js/Pages/Views/Dashboard.vue",
		"/js/vendor",
		"resources_js_Pages_Views_Dashboard_vue"
	],
	"./Views/Dashboard.vue": [
		"./resources/js/Pages/Views/Dashboard.vue",
		"/js/vendor",
		"resources_js_Pages_Views_Dashboard_vue"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./resources/js/Pages lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "?2128":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/css/app.css")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);