(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-new"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/New.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/products/New.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProductForm",
  data: function data() {
    return {
      form: new Form({
        name: "",
        price: null,
        description: "",
        discount: 0,
        quantity: 1,
        category_id: null
      }),
      categories: [],
      submitted: false,
      disabled: false
    };
  },
  methods: {
    addPost: function addPost() {
      var _this = this;

      this.disabled = true;
      this.submitted = true;
      this.$Progress.start();
      this.form.post(this.getRoutes.posts.base).then(function (response) {
        _this.disabled = false;

        _this.$Progress.finish();

        new toast({
          type: 'success',
          title: 'Product created successfully!'
        });

        _this.$router.push("/products/" + response.data.data.id);
      })["catch"](function () {
        _this.disabled = false;

        _this.$Progress.fail();

        new toast({
          type: 'error',
          title: 'Error creating product!'
        });
      });
    },
    fetchCategories: function fetchCategories() {
      var _this2 = this;

      axios.get(this.getRoutes.categories.parents).then(function (response) {
        _this2.categories = response.data;
      })["catch"](function () {
        new toast({
          type: 'error',
          title: 'Error fetching categories'
        });
      });
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["getRoutes"]), {
    isDisabled: function isDisabled() {
      return this.disabled;
    },
    isSubmitted: function isSubmitted() {
      return this.submitted;
    },
    isEmpty: function isEmpty() {
      return !(this.form.name && this.form.price && this.form.discount && this.form.quantity);
    }
  }),
  mounted: function mounted() {
    this.fetchCategories();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/products/New.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/products/New.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_products_New__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/products/New */ "./resources/js/components/products/New.vue");
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProductNew",
  components: {
    "new": _components_products_New__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/New.vue?vue&type=template&id=99cde8c0&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/products/New.vue?vue&type=template&id=99cde8c0&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h1", { staticClass: "text-center display-4" }, [
      _vm._v("Add New Product")
    ]),
    _vm._v(" "),
    _c("form", { staticClass: "container", attrs: { autocomplete: "on" } }, [
      _c("div", { staticClass: "form-group row" }, [
        _c(
          "label",
          {
            staticClass: "col-md-4 col-form-label text-md-right",
            attrs: { for: "title" }
          },
          [_vm._v("Title")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-8" },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.name,
                  expression: "form.name"
                }
              ],
              staticClass: "form-control",
              class: {
                "is-valid": !_vm.form.errors.has("name") && _vm.isSubmitted,
                "is-invalid": _vm.form.errors.has("name")
              },
              attrs: {
                id: "title",
                type: "text",
                name: "title",
                autofocus: "",
                placeholder: "Product Title"
              },
              domProps: { value: _vm.form.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "name", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("has-error", { attrs: { form: _vm.form, field: "name" } })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group row" }, [
        _c(
          "label",
          {
            staticClass: "col-md-4 col-form-label text-md-right",
            attrs: { for: "price" }
          },
          [_vm._v("Price")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-8" },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.price,
                  expression: "form.price"
                }
              ],
              staticClass: "form-control",
              class: {
                "is-valid": !_vm.form.errors.has("price") && _vm.isSubmitted,
                "is-invalid": _vm.form.errors.has("price")
              },
              attrs: {
                id: "price",
                type: "number",
                name: "price",
                min: "0",
                autofocus: "",
                placeholder: "Price of Product in Naira"
              },
              domProps: { value: _vm.form.price },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "price", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("has-error", { attrs: { form: _vm.form, field: "price" } })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group row" }, [
        _c(
          "label",
          {
            staticClass: "col-md-4 col-form-label text-md-right",
            attrs: { for: "description" }
          },
          [_vm._v("Description")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-8" },
          [
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.description,
                  expression: "form.description"
                }
              ],
              staticClass: "form-control",
              class: {
                "is-valid":
                  !_vm.form.errors.has("description") && _vm.isSubmitted,
                "is-invalid": _vm.form.errors.has("description")
              },
              attrs: {
                id: "description",
                name: "description",
                autofocus: "",
                placeholder: "Tell us a little about what you are selling"
              },
              domProps: { value: _vm.form.description },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "description", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("has-error", { attrs: { form: _vm.form, field: "description" } })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group row" }, [
        _c(
          "label",
          {
            staticClass: "col-md-4 col-form-label text-md-right",
            attrs: { for: "description" }
          },
          [_vm._v("Category")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-8" },
          [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.category_id,
                    expression: "form.category_id"
                  }
                ],
                staticClass: "form-control",
                class: {
                  "is-valid":
                    !_vm.form.errors.has("category_id") && _vm.isSubmitted,
                  "is-invalid": _vm.form.errors.has("category_id")
                },
                attrs: { id: "category", name: "category" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.$set(
                      _vm.form,
                      "category_id",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              [
                _c(
                  "option",
                  { attrs: { disabled: "" }, domProps: { value: null } },
                  [_vm._v("Select category")]
                ),
                _vm._v(" "),
                _vm._l(_vm.categories, function(parent) {
                  return _c(
                    "optgroup",
                    { key: parent.id, attrs: { label: parent.name } },
                    _vm._l(parent.subs, function(category) {
                      return _c(
                        "option",
                        { key: category.id, domProps: { value: category.id } },
                        [_vm._v(_vm._s(category.name))]
                      )
                    }),
                    0
                  )
                })
              ],
              2
            ),
            _vm._v(" "),
            _c("has-error", { attrs: { form: _vm.form, field: "category_id" } })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group row" }, [
        _c(
          "label",
          {
            staticClass: "col-md-4 col-form-label text-md-right",
            attrs: { for: "discount" }
          },
          [_vm._v("Discount")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-8 input-group" },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.discount,
                  expression: "form.discount"
                }
              ],
              staticClass: "form-control",
              class: {
                "is-valid": !_vm.form.errors.has("discount") && _vm.isSubmitted,
                "is-invalid": _vm.form.errors.has("discount")
              },
              attrs: {
                id: "discount",
                type: "number",
                name: "discount",
                max: "100",
                min: "0",
                autofocus: "",
                placeholder: "Any ongoing discounts?"
              },
              domProps: { value: _vm.form.discount },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "discount", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c("has-error", { attrs: { form: _vm.form, field: "discount" } })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group row" }, [
        _c(
          "label",
          {
            staticClass: "col-md-4 col-form-label text-md-right",
            attrs: { for: "discount" }
          },
          [_vm._v("Quantity")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-8" },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.quantity,
                  expression: "form.quantity"
                }
              ],
              staticClass: "form-control",
              class: {
                "is-valid": !_vm.form.errors.has("quantity") && _vm.isSubmitted,
                "is-invalid": _vm.form.errors.has("quantity")
              },
              attrs: {
                id: "quantity",
                type: "number",
                name: "quantity",
                min: "0",
                autofocus: "",
                placeholder: "Quantity available"
              },
              domProps: { value: _vm.form.quantity },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "quantity", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("has-error", { attrs: { form: _vm.form, field: "quantity" } })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group row" }, [
        _c("div", { staticClass: "col-md-8 offset-md-4" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              attrs: {
                type: "submit",
                disabled: _vm.isDisabled || _vm.isEmpty
              },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.addPost($event)
                }
              }
            },
            [
              !_vm.isDisabled
                ? _c("span", [_vm._v("Add")])
                : _c("i", { staticClass: "fas fa-spinner fa-spin" })
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("%")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/products/New.vue?vue&type=template&id=53c38054&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/products/New.vue?vue&type=template&id=53c38054&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_c("new")], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/products/New.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/products/New.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _New_vue_vue_type_template_id_99cde8c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./New.vue?vue&type=template&id=99cde8c0&scoped=true& */ "./resources/js/components/products/New.vue?vue&type=template&id=99cde8c0&scoped=true&");
/* harmony import */ var _New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./New.vue?vue&type=script&lang=js& */ "./resources/js/components/products/New.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _New_vue_vue_type_template_id_99cde8c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _New_vue_vue_type_template_id_99cde8c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "99cde8c0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/products/New.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/products/New.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/products/New.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./New.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/New.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/products/New.vue?vue&type=template&id=99cde8c0&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/products/New.vue?vue&type=template&id=99cde8c0&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_99cde8c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./New.vue?vue&type=template&id=99cde8c0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/New.vue?vue&type=template&id=99cde8c0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_99cde8c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_99cde8c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/products/New.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/products/New.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _New_vue_vue_type_template_id_53c38054_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./New.vue?vue&type=template&id=53c38054&scoped=true& */ "./resources/js/views/products/New.vue?vue&type=template&id=53c38054&scoped=true&");
/* harmony import */ var _New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./New.vue?vue&type=script&lang=js& */ "./resources/js/views/products/New.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _New_vue_vue_type_template_id_53c38054_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _New_vue_vue_type_template_id_53c38054_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "53c38054",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/products/New.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/products/New.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/products/New.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./New.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/products/New.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/products/New.vue?vue&type=template&id=53c38054&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/products/New.vue?vue&type=template&id=53c38054&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_53c38054_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./New.vue?vue&type=template&id=53c38054&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/products/New.vue?vue&type=template&id=53c38054&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_53c38054_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_53c38054_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);