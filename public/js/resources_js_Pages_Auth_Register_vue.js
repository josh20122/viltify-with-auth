"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Auth_Register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Link: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Link
  },
  methods: {
    submit: function submit() {
      var _this = this;

      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.post("/auth/register", this.form, {
        onStart: function onStart() {
          _this.loading = true;
        }
      });
    }
  },
  data: function data() {
    return {
      loading: false,
      showeye: true,
      form: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null
      }
    };
  },
  props: {
    errors: {
      type: Object,
      required: false,
      "default": null
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/Auth/Register.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Auth/Register.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_e59c811e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=e59c811e& */ "./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_e59c811e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_e59c811e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Auth/Register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_e59c811e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_e59c811e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_e59c811e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=e59c811e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    [
      _c(
        "v-main",
        { staticClass: "pic" },
        [
          _c(
            "v-container",
            { staticClass: "fill-height pa-0", attrs: { fluid: "" } },
            [
              _c(
                "v-row",
                { attrs: { justify: "center" } },
                [
                  _c(
                    "v-col",
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "pa-0 mx-auto border-red",
                          attrs: { outlined: "", "max-width": "500" },
                        },
                        [
                          _c(
                            "v-card-text",
                            { staticClass: "text-center pb-0 display-1" },
                            [_vm._v("\n              Register\n            ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "v-card-subtitle",
                                { staticClass: "pa-0 text-center" },
                                [
                                  _vm._v(
                                    "Create your account. It's free and only takes a\n                minute."
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-form",
                                { staticClass: "mx-auto" },
                                [
                                  _c(
                                    "v-container",
                                    {},
                                    [
                                      _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Name",
                                                  "error-messages":
                                                    _vm.errors.name,
                                                  counter: 10,
                                                  "prepend-icon": "mdi-account",
                                                  hint: "Name must be less than 10 characters",
                                                  required: "",
                                                },
                                                model: {
                                                  value: _vm.form.name,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.form,
                                                      "name",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "form.name",
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "E-mail",
                                                  "error-messages":
                                                    _vm.errors.email,
                                                  "prepend-icon": "mdi-mail",
                                                  hint: "please enter a valid email",
                                                  counter: "50",
                                                  required: "",
                                                },
                                                model: {
                                                  value: _vm.form.email,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.form,
                                                      "email",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "form.email",
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Password",
                                                  "error-messages":
                                                    _vm.errors.password,
                                                  type: _vm.showeye
                                                    ? "password"
                                                    : "text",
                                                  "prepend-icon": "mdi-lock",
                                                  "append-icon": _vm.showeye
                                                    ? "mdi-eye"
                                                    : "mdi-eye-off",
                                                  hint: "Password must be at least 8 characters",
                                                  counter: "50",
                                                  required: "",
                                                },
                                                on: {
                                                  "click:append": function (
                                                    $event
                                                  ) {
                                                    _vm.showeye = !_vm.showeye
                                                  },
                                                },
                                                model: {
                                                  value: _vm.form.password,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.form,
                                                      "password",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "form.password",
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Confirm Password",
                                                  type: "password",
                                                  "error-messages":
                                                    _vm.errors
                                                      .password_confirmation,
                                                  "prepend-icon": "mdi-lock",
                                                  hint: "Password Confirmation must match the given password",
                                                  counter: "50",
                                                  required: "",
                                                },
                                                model: {
                                                  value:
                                                    _vm.form
                                                      .password_confirmation,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.form,
                                                      "password_confirmation",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "form.password_confirmation",
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c("v-checkbox", {
                                                attrs: {
                                                  label: "I am not a robot",
                                                  value: "value",
                                                  color: "indigo",
                                                },
                                                model: {
                                                  value: _vm.value,
                                                  callback: function ($$v) {
                                                    _vm.value = $$v
                                                  },
                                                  expression: "value",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            block: "",
                                            color: "success",
                                          },
                                          on: {
                                            click: function ($event) {
                                              return _vm.submit()
                                            },
                                          },
                                        },
                                        [_vm._v("submit")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-card-subtitle",
                                        [
                                          _vm._v(
                                            "\n                    Already have an account,\n                    "
                                          ),
                                          _c(
                                            "Link",
                                            { attrs: { href: "/auth/login" } },
                                            [_vm._v(" login")]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);