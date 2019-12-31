export default [
	{
		path: "/",
		name: "Home",
		component: () => import("../views/Home.vue")
	},
	{
		path: "/products",
		name: "Products",
		component: () => import("../views/product/ProductList.vue")
	},
	{
		path: "/products/:id",
		name: "Product",
		component: () => import("../views/product/ProductSingle.vue")
	},
	{
		path: "/my-account",
		name: "my-account",
		component: () => import("../views/auth/Login.vue")
	},
	{
		path: "/login",
		name: "Login",
		component: () => import("../views/auth/Login.vue")
	},
	{
		path: "/register",
		name: "Register",
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
