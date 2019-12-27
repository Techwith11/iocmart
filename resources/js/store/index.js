import Vue from "vue";
import Vuex from "vuex";
import product from "./product/index";
import category from "./category/index";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		product,
		category
	}
});
