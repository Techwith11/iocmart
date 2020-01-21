import Vue from "vue";
import Router from "vue-router";

import store from "@/store/";

Vue.use(Router);

import routes from "./routes";

const router = new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

router.beforeEach((to, from, next) => {
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
	const onlyWhenLoggedOut = to.matched.some(
		record => record.meta.onlyWhenLoggedOut
	);
	const loggedIn = !!store.getters.getToken;
	if (requiresAuth && !loggedIn) {
		store.actions.setIntended(to.fullPath);
		return next({
			path: "/login",
			query: { redirect: to.fullPath }
		});
	}
	if (loggedIn && onlyWhenLoggedOut) {
		return next("/");
	}
	return next();
});

export default router;
