import Product from "./Product";
import api from "./../../api";

const url = process.env.NODE_ENV === "production" ? api.prod : api.dev;

export default {
	namespaced: true,
	state: {
		products: []
	},
	getters: {
		products: state => {
			return state.products;
		}
	},
	mutations: {
		updateProducts(state, payload) {
			state.products = payload;
		}
	},
	actions: {
		FETCH({ commit }, order = "desc") {
			// let instance = axios.create();
			// console.log(instance);

			// delete instance.defaults.headers.common["Accept"];
			// delete instance.defaults.headers.common["X-Requested-With"];
			// delete instance.defaults.headers.common["X-CSRF-TOKEN"];

			axios
				.get(url + "/posts/?order_by=created_at&order=" + order)
				.then(function(response) {
					let products = [];
					console.log(response);
					response.data.forEach(function(product) {
						products.push(new Product(product));
					});
					commit("updateProducts", products);
					return products;
				})
				.catch();
		},
		FETCH_WITH({ commit }, options) {
			axios
				.get("/posts/?with=" + options)
				.then(function(response) {
					let products = [];
					response.data.forEach(function(product) {
						products.push(new Product(product));
					});
					commit("updateProducts", products);
					return products;
				})
				.catch();
		},
		FIND_BY({ commit }, value, where = "id", op = "=") {
			axios
				.get("/posts/?where=" + where + "&op=" + op + "&value=" + value)
				.then(function(response) {
					product = new Product(response.data[0]);
					return product;
				})
				.catch();
		},
		CREATE({ commit }, product) {
			axios.post("/posts/store", {
				data: product
			});
		},
		UPDATE({ commit }, id) {
			//
		},
		DELETE({ commit }, id) {
			//
		}
	}
};
