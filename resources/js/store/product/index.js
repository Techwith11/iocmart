import Product from "./Product";
import Axios from "axios";

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
			Axios.get("/posts/?order_by=created_at&order=" + order)
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
		FETCH_WITH({ commit }, options) {
			Axios.get("/posts/?with=" + options)
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
			Axios.get(
				"/posts/?where=" + where + "&op=" + op + "&value=" + value
			)
				.then(function(response) {
					product = new Product(response.data[0]);
					return product;
				})
				.catch();
		},
		CREATE({ commit }, product) {
			Axios.post("/posts/store", {
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
