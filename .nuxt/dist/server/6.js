exports.ids = [6];
exports.modules = {

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return updateUser; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

const login = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/users/login',
    data
  });
};
const register = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/users',
    data
  });
};
const updateUser = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'PUT',
    url: '/api/user',
    data
  });
};

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=template&id=d30eeb3c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"settings-page"},[_vm._ssrNode("<div class=\"container page\"><div class=\"row\"><div class=\"col-md-6 offset-md-3 col-xs-12\"><h1 class=\"text-xs-center\">Your Settings</h1> <ul class=\"error-messages\">"+(_vm._ssrList((_vm.errors),function(messages,field){return ((_vm._ssrList((messages),function(message,index){return ("<li>"+_vm._ssrEscape("\n              "+_vm._s(field)+" "+_vm._s(message)+"\n            ")+"</li>")})))}))+"</ul> <form><fieldset><fieldset class=\"form-group\"><input type=\"text\" placeholder=\"URL of profile picture\""+(_vm._ssrAttr("value",(_vm.userInfo.image)))+" class=\"form-control\"></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.userInfo.username)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><textarea rows=\"8\" placeholder=\"Short bio about you\" class=\"form-control form-control-lg\"></textarea></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.userInfo.email)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.userInfo.password)))+" class=\"form-control form-control-lg\"></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\">\n              Update Settings\n            </button></fieldset></form> <hr> <button class=\"btn btn-outline-danger\">\n          Or click here to logout\n        </button></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=template&id=d30eeb3c&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=script&lang=js&
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

 // 仅在客户端加载js-cookie包

const Cookie =  false ? undefined : undefined;
/* harmony default export */ var settingsvue_type_script_lang_js_ = ({
  middleware: 'authenticated',
  name: 'SettingsIndex',

  data() {
    return {
      userInfo: {},
      errors: []
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },

  mounted() {
    this.userInfo = JSON.parse(JSON.stringify(this.user));
  },

  methods: {
    async onUpdateSettings() {
      try {
        const {
          data
        } = await Object(user["c" /* updateUser */])({
          user: this.userInfo
        }); // 保存登录状态

        this.$store.commit('setUser', data.user); // 防止页面刷新数据丢失，将数据存进cookie

        Cookie.set('user', data.user); // 跳转到个人信息页

        this.$router.push({
          name: 'profile',
          params: {
            username: data.user.username
          }
        });
      } catch (error) {
        this.errors = error.response.data.errors;
      }
    },

    logout() {
      this.$store.commit('setUser', '');
      Cookie.set('user', '');
      this.$router.push({
        name: 'home'
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_settingsvue_type_script_lang_js_ = (settingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/settings/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_settingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "9ebea686"
  
)

/* harmony default export */ var settings = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=6.js.map