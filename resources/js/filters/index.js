import Vue from "vue";

Vue.filter("naira", function(price) {
	return price + ".00";
});
Vue.filter("discount", function(price, discount) {
	return (1 - discount / 100) * price + ".00";
});
