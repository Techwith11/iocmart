export default [
	{
		path: "/",
		name: "home",
		component: () => import("../views/Home.vue")
	},
	{
		path: "/products",
		name: "products",
		component: () => import("../views/product/ProductList.vue")
	},
	{
		path: "/products/:id",
		name: "product",
		component: () => import("../views/product/ProductSingle.vue")
	},
	{
		path: "/my-account",
		name: "my-account",
		component: () => import("../views/auth/Login.vue")
	},
	{
		path: "/login",
		name: "login",
		component: () => import("../views/auth/Login.vue")
	},
	{
		path: "/register",
		name: "register",
		component: () => import("../views/auth/Register.vue")
	},

	/**
	 * -----------------------------------------------------------------
	 * New routes are added before this
	 * -----------------------------------------------------------------
	 * this is to ensure all invalid route go to not found
	 */
	{
		path: "*",
		name: "Notfound",
		component: () => import("../views/404.vue")
	}
];
