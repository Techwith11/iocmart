(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{103:function(t,e,r){"use strict";r.r(e);var s=r(1);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(r,!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var n={name:"RegisterForm",data:function(){return{form:new Form({name:"",email:"",phone:{phone:"",phone_country:"NG"},password:"",password_confirmation:""}),submitted:!1,disabled:!1}},methods:a({},Object(s.b)(["setAuth","clearIntended"]),{regUser:function(){var t=this;this.disabled=!0,this.submitted=!0,this.$Progress.start(),this.form.post(this.getRoutes.auth.register).then((function(e){t.setAuth({data:e.data.data,remember:!0}),t.disabled=!1,t.$Progress.finish(),t.$router.push(t.getIntended),new toast({type:"success",title:"Profile created successfully"}),t.clearIntended()})).catch((function(){t.disabled=!1,t.$Progress.fail(),new toast({type:"error",title:"Error creating user"})}))}}),computed:a({},Object(s.c)(["getRoutes","getIntended"]),{isDisabled:function(){return this.disabled},isSubmitted:function(){return this.submitted},isEmpty:function(){return!(this.form.name&&this.form.email&&this.form.phone.phone&&this.form.password&&this.form.password_confirmation)}})},m=r(0),l={name:"Register",components:{register:Object(m.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",{staticClass:"text-center display-4"},[t._v("Register")]),t._v(" "),r("form",{staticClass:"container",attrs:{autocomplete:"on"}},[r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"name"}},[t._v("Name")]),t._v(" "),r("div",{staticClass:"col-md-8"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-valid":!t.form.errors.has("name")&&t.isSubmitted,"is-invalid":t.form.errors.has("name")},attrs:{id:"name",type:"text",name:"name",autofocus:"",placeholder:"Full Name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"name"}})],1)]),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"name"}},[t._v("Email")]),t._v(" "),r("div",{staticClass:"col-md-8"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-valid":!t.form.errors.has("email")&&t.isSubmitted,"is-invalid":t.form.errors.has("email")},attrs:{id:"email",type:"email",name:"email",autofocus:"",placeholder:"Valid Email Address"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"email"}})],1)]),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"phone"}},[t._v("Phone Number")]),t._v(" "),r("div",{staticClass:"col-md-8"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone.phone,expression:"form.phone.phone"}],staticClass:"form-control",class:{"is-valid":!t.form.errors.has("phone")&&t.isSubmitted,"is-invalid":t.form.errors.has("phone.phone")},attrs:{id:"phone",type:"tel",name:"phone",autofocus:"",placeholder:"Valid Phone Number In Nigeria"},domProps:{value:t.form.phone.phone},on:{input:function(e){e.target.composing||t.$set(t.form.phone,"phone",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"phone.phone"}})],1)]),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"password"}},[t._v("Password")]),t._v(" "),r("div",{staticClass:"col-md-8"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-valid":!t.form.errors.has("password")&&t.isSubmitted,"is-invalid":t.form.errors.has("password")},attrs:{id:"password",type:"password",name:"password",autofocus:"",placeholder:"Minimum of 8 characters"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"password"}})],1)]),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"password_confirmation"}},[t._v("Confirm Password")]),t._v(" "),r("div",{staticClass:"col-md-8"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"form-control",class:{"is-valid":!t.form.errors.has("password_confirmation")&&t.isSubmitted,"is-invalid":t.form.errors.has("password_confirmation")},attrs:{id:"password_confirmation",type:"password",name:"password_confirmation",autofocus:"",placeholder:"Must match password field"},domProps:{value:t.form.password_confirmation},on:{input:function(e){e.target.composing||t.$set(t.form,"password_confirmation",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"password__confirmation"}})],1)]),t._v(" "),r("div",{staticClass:"form-group row"},[r("div",{staticClass:"col-md-8 offset-md-4"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:t.isDisabled||t.isEmpty},on:{click:function(e){return e.preventDefault(),t.regUser(e)}}},[t.isDisabled?r("i",{staticClass:"fas fa-spinner fa-spin"}):r("span",[t._v("Submit")])])])]),t._v(" "),r("div",{staticClass:"form-group row"},[r("div",{staticClass:"col-md-8 offset-md-4"},[r("p",[t._v("Have an account already?"),r("router-link",{attrs:{to:"/login"}},[t._v("Proceed to Login")])],1)])])])])}),[],!1,null,"1bd57c3f",null).exports}},c=Object(m.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("register")}),[],!1,null,"80b361d2",null);e.default=c.exports}}]);