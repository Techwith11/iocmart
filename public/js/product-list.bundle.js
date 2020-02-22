(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-list"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/CTA.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/products/CTA.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/List.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/products/List.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProductsList",
  data: function data() {
    return {
      posts: {}
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['addToCart', 'removeFromCart', 'setIntended']), {
    loadPosts: function loadPosts() {
      var _this = this;

      var page = this.$route.query.tab ? this.$route.query.tab : 1;
      this.$Progress.start();
      axios.get(this.getRoutes.posts.list + page).then(function (response) {
        _this.posts = response.data;
        $("body").get(0).scrollIntoView();

        _this.$Progress.finish();
      })["catch"](function () {
        _this.$Progress.fail();

        new toast({
          type: 'error',
          title: "Error fetching posts"
        });
      });
    },
    paginatePosts: function paginatePosts() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.$router.push('/products?tab=' + page);
      this.loadPosts();
    },
    getFeaturedImage: function getFeaturedImage(post) {
      return post.pictures.length > 0 ? post.pictures[0].uri : '/images/post-sample.png';
    },
    alterInCart: function alterInCart(id) {
      if (!this.isLoggedIn) {
        this.setIntended(this.$route.fullPath);
        this.$router.push('/login');
        return new toast({
          type: 'warning',
          title: "Login to continue"
        });
      }

      var post = this.posts.data.find(function (post) {
        return post.id === id;
      });

      if (post.is_ordered_by) {
        this.removeFromCart(id).then(function () {
          return post.is_ordered_by = false;
        });
      } else {
        this.addToCart(id).then(function () {
          return post.is_ordered_by = true;
        });
      }
    }
  }),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['getRoutes', 'isLoggedIn']), {
    noPosts: function noPosts() {
      return this.posts.data ? this.posts.data.length < 1 : false;
    }
  }),
  mounted: function mounted() {
    this.loadPosts();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/products/List.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/products/List.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_products_SideBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/products/SideBar */ "./resources/js/components/products/SideBar.vue");
/* harmony import */ var _components_products_CTA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/products/CTA */ "./resources/js/components/products/CTA.vue");
/* harmony import */ var _components_products_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/products/List */ "./resources/js/components/products/List.vue");
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
  name: "ProductsList",
  components: {
    "side-bar": _components_products_SideBar__WEBPACK_IMPORTED_MODULE_0__["default"],
    "cta": _components_products_CTA__WEBPACK_IMPORTED_MODULE_1__["default"],
    "list": _components_products_List__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/CTA.vue?vue&type=style&index=0&id=4d392810&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/products/CTA.vue?vue&type=style&index=0&id=4d392810&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.background[data-v-4d392810]{\n\tbackground: #2E90E5;\n\tcolor: #fff;\n}\n#hero[data-v-4d392810]{\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tpadding: 0 0 0 2rem;\n\tcolor: #fff;\n}\nh2[data-v-4d392810]{\n\tfont-size: 2.8rem;\n\tfont-weight: bold;\n\tmargin: 1rem 0;\n}\np[data-v-4d392810]{\n\tfont-size: 1.2rem;\n\tmargin: 1rem 0;\n}\na span[data-v-4d392810]{\n\tmargin: 1rem 0;\n\tborder-bottom: 2px solid #fff;\n\tfont-weight: bold;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/List.vue?vue&type=style&index=0&id=9e755c64&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/products/List.vue?vue&type=style&index=0&id=9e755c64&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.link[data-v-9e755c64]{\n\ttext-decoration: none;\n}\n.border[data-v-9e755c64]{\n\tborder: 2px solid #777;\n\tpadding: 1rem;\n\tmargin: 0.5rem 0;\n\tborder-radius: 10px;\n}\n.post-name[data-v-9e755c64]{\n\tfont-size: 1rem;\n\tfont-weight: bold;\n\tcolor: #000;\n}\n.post-price[data-v-9e755c64]{\n\tfont-size: 1.14rem;\n\tcolor: #FF6875;\n}\n.post-discount[data-v-9e755c64]{\n\tfont-size: 0.9rem;\n\tcolor: #777;\n\ttext-decoration: line-through;\n}\n.post-quantity[data-v-9e755c64]{\n\tfont-size: 0.9rem;\n\tcolor:#000;\n\tfont-weight: bold;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/SideBar.vue?vue&type=style&index=0&id=4c3cd33c&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/products/SideBar.vue?vue&type=style&index=0&id=4c3cd33c&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.block[data-v-4c3cd33c]{\n    background: #F6F7F8;\n    color: #000000;\n    padding: 1rem;\n    margin: 0 0 2rem;\n}\n.block h5[data-v-4c3cd33c]{\n    font-size: 1.29rem;\n    font-weight: bold;\n    margin: 0 0 0.5rem;\n}\n.block .category[data-v-4c3cd33c]{\n    display: block !important;\n    color: #000000;\n    margin: 0.5rem 0;\n    border: none;\n    background: #00000000;\n}\n.block .brand[data-v-4c3cd33c]{\n    display: block;\n    color: #000000;\n    margin: 0.5rem 0;\n}\n.block p[data-v-4c3cd33c]{\n    font-weight: bold;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/CTA.vue?vue&type=style&index=0&id=4d392810&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/products/CTA.vue?vue&type=style&index=0&id=4d392810&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CTA.vue?vue&type=style&index=0&id=4d392810&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/CTA.vue?vue&type=style&index=0&id=4d392810&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/List.vue?vue&type=style&index=0&id=9e755c64&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/products/List.vue?vue&type=style&index=0&id=9e755c64&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=style&index=0&id=9e755c64&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/List.vue?vue&type=style&index=0&id=9e755c64&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/SideBar.vue?vue&type=style&index=0&id=4c3cd33c&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/products/SideBar.vue?vue&type=style&index=0&id=4c3cd33c&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SideBar.vue?vue&type=style&index=0&id=4c3cd33c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/SideBar.vue?vue&type=style&index=0&id=4c3cd33c&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/CTA.vue?vue&type=template&id=4d392810&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/products/CTA.vue?vue&type=template&id=4d392810&scoped=true& ***!
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "background p-2" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-6", attrs: { id: "hero" } }, [
          _c("h2", [_vm._v("iPhone 6 Plus")]),
          _vm._v(" "),
          _c("p", [_vm._v("Performance and design. Taken right to the edge.")]),
          _vm._v(" "),
          _c("a", [_c("span", [_vm._v("SHOP NOW")])])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6" }, [
          _c("img", {
            attrs: {
              src: __webpack_require__(/*! @/assets/cta/cta.png */ "./resources/js/assets/cta/cta.png"),
              alt: "iPhone 6 Plus",
              width: "100%"
            }
          })
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/List.vue?vue&type=template&id=9e755c64&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/products/List.vue?vue&type=template&id=9e755c64&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      [
        _vm.noPosts
          ? _c("div", [
              _c("p", { staticClass: "lead" }, [
                _vm._v("There are currently no products available.")
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "d-none d-md-block" }, [
          _c(
            "div",
            { staticClass: "row" },
            _vm._l(_vm.posts.data, function(post) {
              return _c(
                "div",
                { key: post.id, staticClass: "col-md-6 col-lg-4 text-center" },
                [
                  _c(
                    "div",
                    { staticClass: "border" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "link",
                          attrs: { to: "/products/" + post.id }
                        },
                        [
                          _c("img", {
                            staticClass: "w-100",
                            attrs: {
                              src: _vm.getFeaturedImage(post),
                              alt: "Featured Image"
                            }
                          }),
                          _vm._v(" "),
                          _c("p", { staticClass: "post-name pt-3" }, [
                            _vm._v(_vm._s(post.name))
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "post-price" }, [
                            _vm._v(
                              "₦" +
                                _vm._s(
                                  _vm._f("discount")(post.price, post.discount)
                                )
                            ),
                            post.discount
                              ? _c("span", { staticClass: "post-discount" }, [
                                  _vm._v(
                                    "₦" + _vm._s(_vm._f("discount")(post.price))
                                  )
                                ])
                              : _vm._e()
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-flex flex-row justify-content-between align-content-center"
                        },
                        [
                          _c("span", { staticClass: "post-quantity" }, [
                            _vm._v("In stock: " + _vm._s(post.quantity))
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn",
                              class: {
                                "btn-primary": post.is_ordered_by,
                                "btn-outline-secondary": !post.is_ordered_by
                              },
                              on: {
                                click: function() {
                                  return _vm.alterInCart(post.id)
                                }
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "fas fa-shopping-basket",
                                class: {
                                  "text-danger": post.is_ordered_by,
                                  "text-secondary": !post.is_ordered_by
                                }
                              })
                            ]
                          )
                        ]
                      )
                    ],
                    1
                  )
                ]
              )
            }),
            0
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "d-md-none" },
          _vm._l(_vm.posts.data, function(post) {
            return _c("div", { key: post.id, staticClass: "row border" }, [
              _c("div", { staticClass: "col-4" }, [
                _c("img", {
                  staticClass: "w-100",
                  attrs: {
                    src: _vm.getFeaturedImage(post),
                    alt: "Featured Image"
                  }
                })
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-8 pl-2" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "link",
                      attrs: { to: "/products/" + post.id }
                    },
                    [
                      _c("p", { staticClass: "post-name" }, [
                        _vm._v(_vm._s(post.name))
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "post-price" }, [
                        _vm._v(
                          "₦" +
                            _vm._s(
                              _vm._f("discount")(post.price, post.discount)
                            )
                        ),
                        post.discount
                          ? _c("span", { staticClass: "post-discount" }, [
                              _vm._v(
                                "₦" + _vm._s(_vm._f("discount")(post.price))
                              )
                            ])
                          : _vm._e()
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-flex flex-row justify-content-between align-content-center"
                    },
                    [
                      _c("span", { staticClass: "post-quantity" }, [
                        _vm._v("In stock: " + _vm._s(post.quantity))
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm",
                          class: {
                            "btn-primary": post.is_ordered_by,
                            "btn-outline-secondary": !post.is_ordered_by
                          },
                          on: {
                            click: function() {
                              return _vm.alterInCart(post.id)
                            }
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "fas fa-shopping-basket",
                            class: {
                              "text-danger": post.is_ordered_by,
                              "text-secondary": !post.is_ordered_by
                            }
                          })
                        ]
                      )
                    ]
                  )
                ],
                1
              )
            ])
          }),
          0
        )
      ],
      _vm._v(" "),
      _c(
        "pagination",
        {
          staticClass: "mt-3",
          attrs: { data: _vm.posts, align: "center", limit: 2 },
          on: { "pagination-change-page": _vm.paginatePosts }
        },
        [
          _c("span", { attrs: { slot: "prev-nav" }, slot: "prev-nav" }, [
            _c("i", { staticClass: "fas fa-angle-left text-primary" })
          ]),
          _vm._v(" "),
          _c("span", { attrs: { slot: "next-nav" }, slot: "next-nav" }, [
            _c("i", { staticClass: "fas fa-angle-right text-primary" })
          ])
        ]
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/SideBar.vue?vue&type=template&id=4c3cd33c&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/products/SideBar.vue?vue&type=template&id=4c3cd33c&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "sidebar" } }, [
    _vm._m(0),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "block", attrs: { id: "brands" } },
      [
        _c("h5", [_vm._v("BRANDS")]),
        _vm._v(" "),
        _c("router-link", { staticClass: "brand", attrs: { to: "" } }, [
          _vm._v("Apple")
        ]),
        _vm._v(" "),
        _c("router-link", { staticClass: "brand", attrs: { to: "" } }, [
          _vm._v("LG")
        ]),
        _vm._v(" "),
        _c("router-link", { staticClass: "brand", attrs: { to: "" } }, [
          _vm._v("Samsung")
        ]),
        _vm._v(" "),
        _c("router-link", { staticClass: "brand", attrs: { to: "" } }, [
          _vm._v("Cases & Films")
        ]),
        _vm._v(" "),
        _c("router-link", { staticClass: "brand", attrs: { to: "" } }, [
          _vm._v("Siemens")
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "block", attrs: { id: "categories" } }, [
      _c("h5", [_vm._v("CATEGORIES")]),
      _vm._v(" "),
      _c("select", { staticClass: "category form-control" }, [
        _c("option", [_vm._v("Apple Car")])
      ]),
      _vm._v(" "),
      _c("select", { staticClass: "category form-control" }, [
        _c("option", [_vm._v("Air Port & wireless")])
      ]),
      _vm._v(" "),
      _c("select", { staticClass: "category form-control" }, [
        _c("option", [_vm._v("Cable & Docks")])
      ]),
      _vm._v(" "),
      _c("select", { staticClass: "category form-control" }, [
        _c("option", [_vm._v("Cases & Films")])
      ]),
      _vm._v(" "),
      _c("select", { staticClass: "category form-control" }, [
        _c("option", [_vm._v("Charging Devices")])
      ]),
      _vm._v(" "),
      _c("select", { staticClass: "category form-control" }, [
        _c("option", [_vm._v("Connected Home")])
      ]),
      _vm._v(" "),
      _c("select", { staticClass: "category form-control" }, [
        _c("option", [_vm._v("Headphones")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "block", attrs: { id: "prices" } }, [
      _c("h5", [_vm._v("PRICES")]),
      _vm._v(" "),
      _c("p", { staticClass: "d-flex justify-content-between" }, [
        _c("span", [_vm._v("Ranger:")]),
        _vm._v(" "),
        _c("span", [_vm._v("$13.99 - $25.99")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-6" }, [
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "number", placeholder: "Low" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-6" }, [
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "number", placeholder: "High" }
          })
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/products/List.vue?vue&type=template&id=2569739a&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/products/List.vue?vue&type=template&id=2569739a&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { staticClass: "col-md-3 d-none d-md-flex" },
      [_c("side-bar")],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-9 pl-md-3" },
      [
        _c("cta", { staticClass: "d-none d-md-block" }),
        _vm._v(" "),
        _c("list")
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/assets/cta/cta.png":
/*!*****************************************!*\
  !*** ./resources/js/assets/cta/cta.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/cta.png?5580c46711087ef4c56835df57db8e80";

/***/ }),

/***/ "./resources/js/components/products/CTA.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/products/CTA.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CTA_vue_vue_type_template_id_4d392810_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CTA.vue?vue&type=template&id=4d392810&scoped=true& */ "./resources/js/components/products/CTA.vue?vue&type=template&id=4d392810&scoped=true&");
/* harmony import */ var _CTA_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CTA.vue?vue&type=script&lang=js& */ "./resources/js/components/products/CTA.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CTA_vue_vue_type_style_index_0_id_4d392810_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CTA.vue?vue&type=style&index=0&id=4d392810&scoped=true&lang=css& */ "./resources/js/components/products/CTA.vue?vue&type=style&index=0&id=4d392810&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CTA_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CTA_vue_vue_type_template_id_4d392810_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CTA_vue_vue_type_template_id_4d392810_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4d392810",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/products/CTA.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/products/CTA.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/products/CTA.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CTA_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CTA.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/CTA.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CTA_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/products/CTA.vue?vue&type=style&index=0&id=4d392810&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/products/CTA.vue?vue&type=style&index=0&id=4d392810&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CTA_vue_vue_type_style_index_0_id_4d392810_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CTA.vue?vue&type=style&index=0&id=4d392810&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/CTA.vue?vue&type=style&index=0&id=4d392810&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CTA_vue_vue_type_style_index_0_id_4d392810_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CTA_vue_vue_type_style_index_0_id_4d392810_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CTA_vue_vue_type_style_index_0_id_4d392810_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CTA_vue_vue_type_style_index_0_id_4d392810_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CTA_vue_vue_type_style_index_0_id_4d392810_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/products/CTA.vue?vue&type=template&id=4d392810&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/products/CTA.vue?vue&type=template&id=4d392810&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CTA_vue_vue_type_template_id_4d392810_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CTA.vue?vue&type=template&id=4d392810&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/CTA.vue?vue&type=template&id=4d392810&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CTA_vue_vue_type_template_id_4d392810_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CTA_vue_vue_type_template_id_4d392810_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/products/List.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/products/List.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List_vue_vue_type_template_id_9e755c64_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=9e755c64&scoped=true& */ "./resources/js/components/products/List.vue?vue&type=template&id=9e755c64&scoped=true&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/components/products/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _List_vue_vue_type_style_index_0_id_9e755c64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List.vue?vue&type=style&index=0&id=9e755c64&scoped=true&lang=css& */ "./resources/js/components/products/List.vue?vue&type=style&index=0&id=9e755c64&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_9e755c64_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _List_vue_vue_type_template_id_9e755c64_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9e755c64",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/products/List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/products/List.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/products/List.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/products/List.vue?vue&type=style&index=0&id=9e755c64&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/products/List.vue?vue&type=style&index=0&id=9e755c64&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_9e755c64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=style&index=0&id=9e755c64&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/List.vue?vue&type=style&index=0&id=9e755c64&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_9e755c64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_9e755c64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_9e755c64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_9e755c64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_9e755c64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/products/List.vue?vue&type=template&id=9e755c64&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/products/List.vue?vue&type=template&id=9e755c64&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_9e755c64_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=template&id=9e755c64&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/List.vue?vue&type=template&id=9e755c64&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_9e755c64_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_9e755c64_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/products/SideBar.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/products/SideBar.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SideBar_vue_vue_type_template_id_4c3cd33c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideBar.vue?vue&type=template&id=4c3cd33c&scoped=true& */ "./resources/js/components/products/SideBar.vue?vue&type=template&id=4c3cd33c&scoped=true&");
/* harmony import */ var _SideBar_vue_vue_type_style_index_0_id_4c3cd33c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideBar.vue?vue&type=style&index=0&id=4c3cd33c&scoped=true&lang=css& */ "./resources/js/components/products/SideBar.vue?vue&type=style&index=0&id=4c3cd33c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}



/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  script,
  _SideBar_vue_vue_type_template_id_4c3cd33c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SideBar_vue_vue_type_template_id_4c3cd33c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4c3cd33c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/products/SideBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/products/SideBar.vue?vue&type=style&index=0&id=4c3cd33c&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/products/SideBar.vue?vue&type=style&index=0&id=4c3cd33c&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_4c3cd33c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SideBar.vue?vue&type=style&index=0&id=4c3cd33c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/SideBar.vue?vue&type=style&index=0&id=4c3cd33c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_4c3cd33c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_4c3cd33c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_4c3cd33c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_4c3cd33c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_4c3cd33c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/products/SideBar.vue?vue&type=template&id=4c3cd33c&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/products/SideBar.vue?vue&type=template&id=4c3cd33c&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_template_id_4c3cd33c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SideBar.vue?vue&type=template&id=4c3cd33c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/SideBar.vue?vue&type=template&id=4c3cd33c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_template_id_4c3cd33c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_template_id_4c3cd33c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/products/List.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/products/List.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List_vue_vue_type_template_id_2569739a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=2569739a&scoped=true& */ "./resources/js/views/products/List.vue?vue&type=template&id=2569739a&scoped=true&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/views/products/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_2569739a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _List_vue_vue_type_template_id_2569739a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2569739a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/products/List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/products/List.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/products/List.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/products/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/products/List.vue?vue&type=template&id=2569739a&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/products/List.vue?vue&type=template&id=2569739a&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_2569739a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=template&id=2569739a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/products/List.vue?vue&type=template&id=2569739a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_2569739a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_2569739a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);