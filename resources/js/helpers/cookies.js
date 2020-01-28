export default {
	install: function(Vue) {
		Vue.prototype.$cookies = this
		Vue.cookies = this
	},
	set: (key, item) => localStorage.setItem(key, JSON.stringify(item)),
	get: key => JSON.parse(localStorage.getItem(key)),
	hasKey: key => !!localStorage.getItem(key),
	remove: key => localStorage.removeItem(key),
	clear: () => localStorage.clear()
}
