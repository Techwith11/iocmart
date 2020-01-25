import Vue from 'vue'
import VueCookies from 'vue-cookies'

import './bootstrap'
import './filters/index'

import router from './router/index'
import store from './store/index'
import App from './App.vue'

Vue.config.productionTip = true
Vue.use(VueCookies)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
