import Vue from 'vue'

import './helpers/index'
import './filters/index'

import router from './router/index'
import store from './store/index'
import App from './App.vue'

Vue.config.productionTip = true

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
