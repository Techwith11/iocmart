import process from 'process'
const base =
	process.env.NODE_ENV == 'production'
		? 'https://api.iocmart.com/v1/'
		: 'http://api.example.com:8000/v1/'

const state = {
	routes: {
		posts: {
			list:
				base +
				'posts?with=pictures,store&where=quantity&op=>&value=0&order_by=created_at&order=desc&page=',
			base: base + 'posts/'
		},
		categories: {
			parents:
				base +
				'categories?with=subs&where=parent_id&value=0&limit=50&select=id,name',
			base: base + 'categories/'
		},
		carts: {
			base: base + 'carts/'
		},
		orders: {
			base: base + 'orders/'
		},
		auth: {
			profile: base + 'user',
			login: base + 'login',
			register: base + 'register'
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
