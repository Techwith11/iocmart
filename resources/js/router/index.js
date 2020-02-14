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
	const requiresAuth = to.matched.some(route => route.meta.requiresAuth)
	const requiresStore = to.matched.some(route => route.meta.requiresStore)
	const onlyWhenLoggedOut = to.matched.some(route => route.meta.onlyWhenLoggedOut)
	const cookies = store._vm.$cookies
	const loggedIn = cookies.hasKey('user_profile')
	if (requiresAuth && !loggedIn) {
		store.dispatch('setIntended', to.fullPath)
		return next('/login')
	}
	if (requiresStore & !store.getters.getStore) {
		new toast({ type: 'warning', title: 'Create a store to proceed!' })
		return next('/stores/new')
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
