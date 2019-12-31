import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import routes from "./routes";

const router = new Router({
	mode: "history",
	routes
});

/*router.beforeEach((to, from, next) => {
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
	const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut);
	const loggedIn = !!store.getters.getToken;

	if (requiresAuth && !loggedIn) {
		return next({
			path: "/login",
			query: { redirect: to.fullPath } // Stores the full path to redirect the user to after login
		});
	}
	if (loggedIn && onlyWhenLoggedOut) {
		return next("/my-account");
	}

	next();
});*/

export default router;
