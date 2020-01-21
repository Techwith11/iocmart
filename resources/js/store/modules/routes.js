const base =
	process.env.NODE_ENV == "production"
		? "https://api.iocmart/v1/"
		: "http://api.example.com:8000/v1/";

const state = {
	routes: {
		posts: {
			index:
				base +
				"posts?with=pictures,store&where=quantity&op=>=&value=1&page="
		},
		auth: {
			profile: base + "user",
			login: base + "login",
			register: base + "register"
		}
	},
	intended: null
};

const getters = {
	getRoutes: state => state.routes,
	getIntended: state => (state.intended ? state.intended : "/")
};

const actions = {
	setIntended({ commit }, intended) {
		commit("setIntended", intended);
	},
	clearIntended({ commit }) {
		commit("clearIntended");
	}
};

const mutations = {
	setIntended: (state, intended) => (state.intended = intended),
	clearIntended: state => (state.intended = null)
};

export default {
	state,
	getters,
	actions,
	mutations
};
