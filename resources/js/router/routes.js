export default [
	{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: 'home', webpackPrefetch: true */ '@/views/Home.vue')
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import(/* webpackChunkName: 'login', webpackPrefetch: true */ '@/views/auth/Login.vue'),
		meta: { onlyWhenLoggedOut: true }
	},
	{
		path: '/register',
		name: 'Register',
		component: () => import(/* webpackChunkName: 'register', webpackPrefetch: true */ '@/views/auth/Register.vue'),
		meta: { onlyWhenLoggedOut: true }
	},
	{
		path: '/profile',
		name: 'Profile',
		component: () => import(/* webpackChunkName: 'profile', webpackPrefetch: true */ '@/views/user/Profile.vue'),
		meta: { requiresAuth: true }
	},
	{
		path: '/store',
		name: 'Store',
		component: () => import(/* webpackChunkName: 'store', webpackPrefetch: true */ '@/views/user/Store.vue'),
		meta: { requiresAuth: true }
	},
	{
		path: '/cart',
		name: 'Cart',
		component: () => import(/* webpackChunkName: 'cart', webpackPrefetch: true */ '@/views/user/Cart.vue'),
		meta: { requiresAuth: true }
	},
	{
		path: '/products/',
		component: () => import(/* webpackChunkName: 'product-index', webpackPrefetch: true */ '@/views/products/index.vue'),
		children: [
			{
				path: '/products/',
				name: 'ProductsList',
				component: () => import(/* webpackChunkName: 'product-list', webpackPrefetch: true */ '@/views/products/List.vue')
			},
			{
				path: '/products/new',
				name: 'ProductNew',
				component: () => import(/* webpackChunkName: 'product-new', webpackPrefetch: true */ '@/views/products/New.vue'),
				meta: { requiresAuth: true, requiresStore: true }
			},
			{
				path: '/products/:id',
				name: 'ProductSingle',
				component: () => import(/* webpackChunkName: 'product-single', webpackPrefetch: true */ '@/views/products/Single.vue')
			}
		]
	},
	{
		path: '/stores/',
		component: () => import(/* webpackChunkName: 'store-index', webpackPrefetch: true */ '@/views/stores/index.vue'),
		children: [
			{
				path: '/stores/new',
				name: 'StoreNew',
				component: () => import(/* webpackChunkName: 'store-new', webpackPrefetch: true */ '@/views/stores/New.vue'),
				meta: { requiresAuth: true }
			},
			{
				path: '/stores/:id',
				name: 'StoreSingle',
				component: () => import(/* webpackChunkName: 'store-single', webpackPrefetch: true */ '@/views/stores/Single.vue')
			}
		]
	},
	{
		path: '*',
		name: 'Notfound',
		component: () => import(/* webpackChunkName: 'not-found', webpackPrefetch: true */ '@/views/NotFound.vue')
	}
]
