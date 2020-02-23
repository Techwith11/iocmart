function getApiURL() {
	let url = window.location.origin
	let domain
	domain = url.indexOf('://') > -1 ? url.split('/')[2] : url.split('/')[0]
	domain = domain.indexOf('www.') > -1 ? domain.replace('www.', '//api.') : '//api.' + domain
	return window.location.protocol + domain + '/v1'
}

const base = getApiURL()

const state = {
	routes: {
		posts: {
			list: base + '/posts?with[]=pictures&with[]=store&where=quantity&op=>&value=0&order_by=updated_at&order=desc&page=',
			base: base + '/posts/'
		},
		categories: {
			parents: base + '/categories?with[]=subs&where=parent_id&value=0&limit=50&select=id,name',
			base: base + '/categories/'
		},
		carts: {
			base: base + '/carts/',
			checkout: base + '/carts/checkout/'
		},
		orders: {
			base: base + '/orders/'
		},
		stores: {
			base: base + '/stores/'
		},
		auth: {
			profile: base + '/user',
			login: base + '/login',
			register: base + '/register'
		}
	},
	intended: null,
	busy: false
}

const getters = {
	getRoutes: state => state.routes,
	getIntended: state => (state.intended ? state.intended : '/'),
	isBusy: state => state.busy
}

const actions = {
	setIntended({ commit }, intended) {
		commit('setIntended', intended)
	},
	clearIntended({ commit }) {
		commit('clearIntended')
	},
	setBusy({ commit }, busy) {
		commit('setBusy', busy)
	}
}

const mutations = {
	setIntended: (state, intended) => (state.intended = intended),
	clearIntended: state => (state.intended = null),
	setBusy: (state, busy) => (state.busy = busy)
}

export default {
	state,
	getters,
	actions,
	mutations
}
