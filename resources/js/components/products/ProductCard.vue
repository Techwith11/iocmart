<template>
	<div
		class="product-item card"
		:class="'product-' + id + ' ' + product.categoryName"
	>
		<div class="card-header">
			<div
				class="product-image"
				:style="'background-image:url(' + product.imageUrl + ')'"
			></div>
			<div class="product-discount"></div>
		</div>
		<div class="card-body">
			<div class="product-title">
				<router-link
					:to="{ name: 'products', params: { id: product.id } }"
				>
					{{ product.name }}
				</router-link>
			</div>
			<div class="product-price"><span>NGN</span>{{ product.price }}</div>
			<a
				href="#"
				class="product-add_to_cart red_button add_to_cart_button"
			></a>
		</div>
	</div>
</template>

<script>
import Product from "./../../store/product/Product";

export default {
	props: {
		product: Product
	}
};
</script>

<style></style>
