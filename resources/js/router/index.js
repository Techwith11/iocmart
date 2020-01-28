import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store/'

Vue.use(Router)

import routes from './routes'

const router = new Router({
	mode: 'history',
	routes
})

router.beforeEach((to, from, next) => {
	store._vm.$Progress.start()
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
	const onlyWhenLoggedOut = to.matched.some(
		record => record.meta.onlyWhenLoggedOut
	)
	const cookies = store._vm.$cookies
	const loggedIn = cookies.hasKey('user') && cookies.hasKey('oauth')
	if (requiresAuth && !loggedIn) {
		store.dispatch('setIntended', to.fullPath)
		return next('/login')
	}
	if (loggedIn && onlyWhenLoggedOut) {
		return next('/')
	}
	return next()
})

router.afterEach(() => {
	store._vm.$Progress.finish()
})

export default router
