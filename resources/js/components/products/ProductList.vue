<template>
	<div class="product-list">
		<template v-if="products.lenght > 0">
			<ProductCard
				v-for="product in products"
				:key="product.id"
				:product="product"
			/>
		</template>
		<template v-else>
			<div class="text-center">
				<h3 class="text-muted">No products yet!</h3>
			</div>
		</template>
	</div>
</template>

<script>
import ProductCard from "./ProductCard";

export default {
	name: "ProductList",
	data: function() {
		return {
			//
		};
	},
	components: {
		carousel: Carousel
	},
	mounted: function() {
		this.$store.dispatch("product.FETCH");
	},
	computed: {
		products() {
			return this.$store.getters("product.products", "FETCH");
		},
		categories() {
			return this.$store.getters("category.categories", "FETCH");
		}
	}
};
</script>

<style></style>
