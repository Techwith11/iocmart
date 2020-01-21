const state = {
	auth: {
		id: null,
		name: "",
		email: "",
		role: "",
		store: null,
		picture: null,
		phone: { phone: "", phone_country: "" }
	},
	token: "",
	cart: []
};

const getters = {
	getAuth: state => state.auth,
	getToken: state => state.token,
	isLoggedIn: state => !!state.auth.id,
	isInCart: state => id => state.cart.some(post => post.id === id)
};

const actions = {
	setAuth({ commit }, { user, remember }) {
		if (remember) {
			this._vm.$cookies.set("user", user, "0");
		}
		commit("authorized", user);
	},
	setToken({ commit }, { token, remember }) {
		window.axios.defaults.headers.common["Authorization"] =
			"Bearer " + token;
		if (remember) {
			this._vm.$cookies.set("oauth", token, "0");
		}
		commit("oauth", token);
	},
	logout({ commit }) {
		this._vm.$cookies.remove("oauth");
		this._vm.$cookies.remove("user");
		commit("clearAuth");
	},
	addToCart: ({ commit }, id) => commit("addToCart", id),
	removeFromCart: ({ commit }, id) => commit("removeFromCart", id)
};

const mutations = {
	authorized: (state, user) => (state.auth = user),
	oauth: (state, token) => (state.token = token),
	clearAuth: state => {
		state.auth = {
			id: null,
			name: "",
			email: "",
			password: "",
			role: "",
			store: null,
			picture: null,
			phone: { phone: "", phone_country: "" }
		};
		state.token = "";
	},
	addToCart: (state, id) => state.cart.push({ id, quantity: 1 }),
	removeFromCart: (state, id) =>
		(state.cart = state.cart.filter(post => post.id !== id))
};

export default {
	state,
	getters,
	actions,
	mutations
};
