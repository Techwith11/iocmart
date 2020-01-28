window.$ = window.jQuery = require('jquery')

require('popper.js')
require('bootstrap')
require('@fortawesome/fontawesome-free')

import Vue from 'vue'
import { Form, HasError } from 'vform'
import ProgressBar from 'vue-progressbar'
import Pagination from 'laravel-vue-pagination'
import swal from 'sweetalert2'
import cookies from './cookies'

import store from '@/store/'

Vue.component(HasError.name, HasError)
Vue.component('pagination', Pagination)

Vue.use(ProgressBar, {
	color: 'rgb(143,255,199)',
	failedColor: 'rgb(255,0,0)',
	height: '10px'
})

window.Form = Form
window.Fire = new Vue()

window.swal = swal
const toast = swal.mixin({
	toast: true,
	position: 'top-end',
	showConfirmButton: false,
	timer: 3000
})
window.toast = toast

window.axios = require('axios')
window.axios.defaults.headers.common = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Credentials': 'true',
	'X-Requested-With': 'XMLHttpRequest'
}
window.axios.interceptors.request.use(
	request => {
		store.dispatch('setBusy', true)
		return request
	},
	error => {
		store.dispatch('setBusy', false)
		return Promise.reject(error)
	}
)
window.axios.interceptors.response.use(
	response => {
		store.dispatch('setBusy', false)
		return response
	},
	error => {
		store.dispatch('setBusy', false)
		return Promise.reject(error)
	}
)
let token = document.head.querySelector('meta[name="csrf-token"]')
if (token) {
	window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content
}
Vue.prototype.$http = window.axios
Vue.prototype.$cookies = cookies
