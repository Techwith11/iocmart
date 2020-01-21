export default [
	{
		path: "/",
		name: "Home",
		component: () => import("@/views/Home.vue")
	},
	{
		path: "/login",
		name: "Login",
		component: () => import("@/views/auth/Login.vue"),
		meta: { onlyWhenLoggedOut: true }
	},
	{
		path: "/register",
		name: "Register",
		component: () => import("@/views/auth/Register.vue"),
		meta: { onlyWhenLoggedOut: true }
	},
	{
		path: "/products",
		name: "Products",
		component: () => import("@/views/products/index.vue")
	},
	{
		path: "*",
		name: "Notfound",
		component: () => import("@/views/404.vue")
	}
];
