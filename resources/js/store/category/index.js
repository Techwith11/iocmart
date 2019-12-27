import Category from "./Category";
import Axios from "axios";

export default {
	namespaced: true,
	state: {
		categories: []
	},
	getters: {
		categories: state => {
			return state.categories;
		}
	},
	mutations: {
		updateUsers(state, payload) {
			state.categories = payload;
		}
	},
	actions: {
		FETCH({ commit }, order = "") {
			Axios.get("/categories/?order_by=name&order=" + order)
				.then(function(response) {
					let categories = [];
					response.data.forEach(function(category) {
						categories.push(new Category(category));
					});
					commit("updateUsers", categories);
					return categories;
				})
				.catch();
		},
		FETCH_WITH({ commit }, options) {
			Axios.get("/categories/?with=" + options)
				.then(function(response) {
					let categories = [];
					response.data.forEach(function(category) {
						categories.push(new Category(category));
					});
					commit("updateUsers", categories);
					return categories;
				})
				.catch();
		},
		FIND_BY({ commit }, value, where = "id", op = "=") {
			Axios.get(
				"/categories/?where=" + where + "&op=" + op + "&value=" + value
			)
				.then(function(response) {
					category = new Category(response.data[0]);
					return category;
				})
				.catch();
		},
		CREATE({ commit }, category) {
			Axios.category("/categories/store", {
				data: category
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
