window.$ = window.jQuery = require("jquery");

//No need to import since bootstrap bundle file comes bundled with popper
window.Popper = require("popper.js").default;

import __ from "bootstrap";
import ___ from "@fortawesome/fontawesome-free";

import Vue from "vue";
import { Form, HasError } from "vform";
import VueProgressBar from "vue-progressbar";
import Pagination from "laravel-vue-pagination/";
import swal from "sweetalert2";

Vue.component(HasError.name, HasError);
Vue.component("pagination", Pagination);

Vue.use(VueProgressBar, {
	color: "rgb(143,255,199)",
	failedColor: "rgb(255,0,0)",
	height: "10px"
});

window.Form = Form;
window.Fire = new Vue();

window.swal = swal;
const toast = swal.mixin({
	toast: true,
	position: "top-end",
	showConfirmButton: false,
	timer: 3000
});
window.toast = toast;

window.axios = require("axios");
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
window.axios.defaults.headers.common = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Credentials": "true"
};
let token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
	window.axios.defaults.headers.common["X-CSRF-TOKEN"] = token.content;
}
Vue.prototype.$http = window.axios;
