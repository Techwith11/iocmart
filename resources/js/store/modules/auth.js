const state = {
	auth: {},
	token: '',
	cart: {},
	store: {}
}

const getters = {
	getAuth: state => state.auth,
	getToken: state => state.token,
	getStore: state => state.store,
	isLoggedIn: state => !!state.auth.id,
	getCart: state => state.cart,
	isInCart: state => id =>
		state.cart.orders
			? state.cart.orders.some(order => Number(order.post_id) === id)
			: false,
	getOrderIdFromPostId: state => id =>
		state.cart.orders
			? state.cart.orders.filter(order => Number(order.post_id) === id)[0]
				.id
			: 0
}

const actions = {
	setAuth({ commit }, { data, remember }) {
		if (remember) {
			this._vm.$cookies.set('user_profile', data, '0')
		}
		window.axios.defaults.headers.common['Authorization'] =
			'Bearer ' + data.token
		commit('authorized', data.user)
		commit('oauth', data.token)
		commit('setStore', data.store)
		commit('setCart', data.cart)
	},
	logout({ commit }) {
		this._vm.$cookies.clear()
		window.axios.defaults.headers.common['Authorization'] = undefined
		commit('clearAuth')
	},
	addToCart({ getters, commit }, post_id, quantity = 1) {
		window.axios
			.post(getters.getRoutes.orders.base, { post_id, quantity })
			.then(response => {
				commit('addToCart', response.data.data)

			})
			.catch(
				() =>
					new toast({ type: 'error', title: 'Error adding to cart' })
			)
	},
	removeFromCart({ getters, commit }, post_id) {
		var id = getters.getOrderIdFromPostId(post_id)
		window.axios
			.delete(getters.getRoutes.orders.base + id)
			.then(() => {
				commit('removeFromCart', id)
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
	authorized: (state, user) => (state.auth = user),
	oauth: (state, token) => (state.token = token),
	setStore: (state, store) => (state.cart = store),
	setCart: (state, cart) => (state.cart = cart),
	clearAuth: state => {
		state.auth = state.store = state.cart = {}
		state.token = ''
	},
	addToCart: (state, order) => state.cart.orders.push(order),
	removeFromCart: (state, id) =>
		(state.cart = state.cart.orders.filter(order => order.id !== id))
}

export default {
	state,
	getters,
	actions,
	mutations
}
