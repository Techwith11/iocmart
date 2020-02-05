const state = {
	user: {},
	cart: {},
	store: {}
}

const getters = {
	getAuth: state => state.user,
	getStore: state => state.store,
	isLoggedIn: state => !!state.user.id,
	getCart: state => state.cart,
	isInCart: state => id =>
		state.cart.orders
			? state.cart.orders.some(order => order.post_id == id)
			: false,
	getOrderIdFromPostId: state => id =>
		state.cart.orders
			? state.cart.orders.find(order => order.post_id == id).id
			: 0
}

const actions = {
	setAuth({ commit }, { data, remember }) {
		remember ? this._vm.$cookies.set('user_profile', data, '0') : 0
		window.axios.defaults.headers.common['Authorization'] =
			'Bearer ' + data.token
		commit('setUser', data.user)
		commit('setStore', data.store)
		commit('setCart', data.cart)
	},
	logout({ commit }) {
		this._vm.$cookies.clear()
		window.axios.defaults.headers.common['Authorization'] = undefined
		commit('clearAuth')
	},
	addToCart({ getters, commit }, post_id, quantity = 1) {
		return window.axios
			.post(getters.getRoutes.orders.base, { post_id, quantity })
			.then(response => {
				commit('addToCart', response.data.data)
				return post_id
			})
			.catch(
				() =>
					new toast({ type: 'error', title: 'Error adding to cart' })
			)
	},
	removeFromCart({ getters, commit }, post_id) {
		var id = getters.getOrderIdFromPostId(post_id)
		return window.axios
			.delete(getters.getRoutes.orders.base + id)
			.then(() => {
				commit('removeFromCart', id)
				return post_id
			})
			.catch(
				() =>
					new toast({
						type: 'error',
						title: 'Error removing from cart'
					})
			)
	}
}

const mutations = {
	setUser: (state, user) => (state.user = user),
	setStore: (state, store) => (state.cart = store),
	setCart: (state, cart) => (state.cart = cart),
	clearAuth: state => (state.user = state.store = state.cart = {}),
	addToCart: (state, order) => state.cart.orders.push(order),
	removeFromCart: (state, id) =>
		(state.cart.orders = state.cart.orders.filter(order => order.id !== id))
}

export default {
	state,
	getters,
	actions,
	mutations
}
