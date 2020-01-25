export default [
	{
		path: "/",
		name: "Home",
		component: () =>
			import(/* webpackChunkName: 'home' */ "@/views/Home.vue")
	},
	{
		path: "/login",
		name: "Login",
		component: () =>
			import(/* webpackChunkName: 'login' */ "@/views/auth/Login.vue"),
		meta: { onlyWhenLoggedOut: true }
	},
	{
		path: "/register",
		name: "Register",
		component: () =>
			import(
				/* webpackChunkName: 'register' */ "@/views/auth/Register.vue"
			),
		meta: { onlyWhenLoggedOut: true }
	},
	{
		path: "/profile",
		name: "Profile",
		component: () =>
			import(
				/* webpackChunkName: 'profile' */ "@/views/user/Profile.vue"
			),
		meta: { requiresAuth: true }
	},
	{
		path: "/cart",
		name: "Cart",
		component: () =>
			import(/* webpackChunkName: 'cart' */ "@/views/user/Cart.vue"),
		meta: { requiresAuth: true }
	},
	{
		path: "/products/",
		component: () =>
			import(
				/* webpackChunkName: 'product-index' */ "@/views/products/index.vue"
			),
		children: [
			{
				path: "/products/",
				name: "ProductsList",
				component: () =>
					import(
						/* webpackChunkName: 'product-list' */ "@/views/products/List.vue"
					)
			},
			{
				path: "/products/new",
				name: "ProductNew",
				component: () =>
					import(
						/* webpackChunkName: 'product-new' */ "@/views/products/New.vue"
					),
				meta: { requiresAuth: true }
			},
			{
				path: "/products/:id",
				name: "ProductSingle",
				component: () =>
					import(
						/* webpackChunkName: 'product-single' */ "@/views/products/Single.vue"
					)
			}
		]
	},
	{
		path: "*",
		name: "Notfound",
		component: () =>
			import(/* webpackChunkName: 'not-found' */ "@/views/NotFound.vue")
	}
];
