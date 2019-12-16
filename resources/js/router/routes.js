export default [
	{
		path: "/",
		name: "Home",
		component: () => import("../views/Home.vue")
	},
	{
		path: "*",
		name: "Notfound",
		component: () => import("../views/404.vue")
	}
];
