import Vue from 'vue'

Vue.filter('naira', function(price) {
	return Number(price).toFixed(2)
})
Vue.filter('discount', function(price, discount) {
	return discount ? Number((1 - discount / 100) * price).toFixed(2) : Number(price).toFixed(2)
})
