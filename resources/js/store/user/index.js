import User from "./User";
import Axios from "axios";

export default {
	namespaced: true,
	state: {
		users: []
	},
	getters: {
		users: state => {
			return state.users;
		}
	},
	mutations: {
		updateUsers(state, payload) {
			state.users = payload;
		}
	},
	actions: {
		FETCH({ commit }, order = "") {
			Axios.get("/users/?order_by=name&order=" + order)
				.then(function(response) {
					let users = [];
					response.data.forEach(function(user) {
						users.push(new User(user));
					});
					commit("updateUsers", users);
					return users;
				})
				.catch();
		},
		FETCH_WITH({ commit }, options) {
			Axios.get("/users/?with=" + options)
				.then(function(response) {
					let users = [];
					response.data.forEach(function(user) {
						users.push(new User(user));
					});
					commit("updateUsers", users);
					return users;
				})
				.catch();
		},
		FIND_BY({ commit }, value, where = "id", op = "=") {
			Axios.get(
				"/users/?where=" + where + "&op=" + op + "&value=" + value
			)
				.then(function(response) {
					user = new User(response.data[0]);
					return user;
				})
				.catch();
		},
		CREATE({ commit }, user) {
			Axios.user("/users/store", {
				data: user
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
