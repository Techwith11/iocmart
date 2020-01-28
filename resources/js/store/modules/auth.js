const state = {
	auth: {},
	token: '',
	cart: {}
}

const getters = {
	getAuth: state => state.auth,
	getToken: state => state.token,
	isLoggedIn: state => !!state.auth.id,
	getCart: state => state.cart,
	isInCart: state => id =>
		state.cart.orders
			? state.cart.orders.some(post => post.id === id)
			: false
}

const actions = {
	setAuth({ commit }, { user, remember }) {
		if (remember) {
			this._vm.$cookies.set('user', user, '0')
		}
		commit('authorized', user)
		commit('setCart', user.cart)
	},
	setToken({ commit }, { token, remember }) {
		window.axios.defaults.headers.common['Authorization'] =
			'Bearer ' + token
		if (remember) {
			this._vm.$cookies.set('oauth', token, '0')
		}
		commit('oauth', token)
	},
	logout({ commit }) {
		this._vm.$cookies.clear()
		window.axios.defaults.headers.common['Authorization'] = undefined
		commit('clearAuth')
	},
	addToCart({ getters, commit }, post_id, quantity = 1) {
		window.axios
			.post(getters.getRoutes.orders.base, { post_id, quantity })
			.then(response => commit('addToCart', response.data.data))
			.catch(
				() =>
					new toast({ type: 'error', title: 'Error adding to cart' })
			)
	},
	removeFromCart({ getters, commit }, id) {
		window.axios
			.delete(getters.getRoutes.orders.base + id)
			.then(() => commit('removeFromCart', id))
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
	setCart: (state, cart) => (state.cart = cart),
	clearAuth: state => {
		state.auth = {}
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
