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
	isInCart: state => id => (state.cart.orders ? state.cart.orders.some(order => order.post_id === id) : false),
	getOrderFromPostId: state => id => (state.cart.orders ? state.cart.orders.find(order => order.post_id === id) : {}),
	getOrderIdFromPostId: state => id => (state.cart.orders ? state.cart.orders.find(order => order.post_id === id).id : 0),
	getCartCount: state => {
		let total = 0
		state.cart.orders ? state.cart.orders.forEach(order => (total += order.quantity)) : 0
		return total
	},
	getCartPrice: state => {
		let total = 0
		state.cart.orders ? state.cart.orders.forEach(order => (total += order.quantity * order.post.price)) : 0
		return total
	}
}

const actions = {
	setAuth({ commit }, { data, remember }) {
		remember ? this._vm.$cookies.set('user_profile', data, '0') : 0
		window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token
		commit('setUser', data.user)
		commit('setStore', data.store)
		commit('setCart', data.cart)
	},
	logout({ commit }) {
		this._vm.$cookies.clear()
		window.axios.defaults.headers.common['Authorization'] = undefined
		commit('clearAuth')
	},
	addToCart({ getters, commit }, {post_id, quantity}) {
		console.log(quantity)
		return window.axios
			.post(getters.getRoutes.orders.base, { post_id, quantity: quantity ? quantity : 1 })
			.then(response => {
				commit('addToCart', response.data.data)
				new toast({ type: 'success', title: 'Added to cart' })
			})
			.catch(() => new toast({ type: 'error', title: 'Error adding to cart' }))
	},
	removeFromCart({ getters, commit }, post_id) {
		let id = getters.getOrderIdFromPostId(post_id)
		return window.axios
			.delete(getters.getRoutes.orders.base + id)
			.then(() => {
				commit('removeFromCart', id)
				new toast({ type: 'success', title: 'Removed from cart' })
			})
			.catch(() => new toast({ type: 'error', title: 'Error removing from cart' }))
	},
	increaseQuantity({ getters, commit }, { id, quantity }) {
		return window.axios
			.put(getters.getRoutes.orders.base + id, { quantity: quantity + 1 })
			.then(() => commit('increaseQuantity', id))
			.catch(() => new toast({ type: 'error', title: 'Error increasing quantity' }))
	},
	reduceQuantity({ getters, commit }, { id, quantity }) {
		return window.axios
			.put(getters.getRoutes.orders.base + id, { quantity: quantity - 1 })
			.then(() => commit('reduceQuantity', id))
			.catch(() => new toast({ type: 'error', title: 'Error reducing quantity' }))
	},
	changeQuantity({ getters, commit }, post_id, quantity) {
		let id = getters.getOrderIdFromPostId(post_id)
		return window.axios
			.put(getters.getRoutes.orders.base + id, { quantity })
			.then(() => commit('changeQuantity', id, quantity))
			.catch(() => new toast({ type: 'error', title: 'Error changing quantity' }))
	},
	deleteOrder({ getters, commit }, id) {
		return window.axios
			.delete(getters.getRoutes.orders.base + id)
			.then(() => commit('removeFromCart', id))
			.catch(() => new window.toast({ type: 'error', title: 'Error deleting order' }))
	},
	checkoutCart({ getters, commit}){
		return window.axios.post(getters.getRoutes.carts.checkout + getters.getCart.id)
			.then(res => {
				commit('setCart',res.data.data)
				new toast({ type: 'success', title:'Checked out successfully'})
			})
			.catch(err => {
				new toast({ type: 'error', title:'Error checking out'})
			})
	}
}

const mutations = {
	setUser: (state, user) => (state.user = user),
	setStore: (state, store) => (state.store = store),
	setCart: (state, cart) => (state.cart = cart),
	clearAuth: state => (state.user = state.store = state.cart = {}),
	addToCart: (state, order) => state.cart.orders.push(order),
	removeFromCart: (state, id) => (state.cart.orders = state.cart.orders.filter(order => order.id !== id)),
	increaseQuantity: (state, id) => (state.cart.orders.find(order => order.id === id).quantity += 1),
	reduceQuantity: (state, id) => (state.cart.orders.find(order => order.id === id).quantity -= 1),
	changeQuantity: (state, id, quantity) => (state.cart.orders.find(order => order.id === id).quantity = quantity)
}

export default {
	state,
	getters,
	actions,
	mutations
}
