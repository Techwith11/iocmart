<template>
	<div class="container">
		<table>
			<tr>
				<th></th>
				<th>Product</th>
				<th>Price</th>
				<th>Qty</th>
				<th>Unit Price</th>
			</tr>
			<tr v-for="order in getCart.orders" :key="order.id">
				<td><i class="text-danger" @click.prevent="() => deleteOrder(order.id)">x</i></td>
				<td>{{ order.post.name }}</td>
				<td>{{ order.quantity * order.post.price }}</td>
				<td>
					<button class="btn btn-sm" @click="() => reduceQuantity(order)" :disabled="order.quantity <= 1">-</button>
					{{ order.quantity }}
					<button class="btn btn-sm" @click="() => increaseQuantity(order)">+</button>
				</td>
				<td>{{ order.post.price }}</td>
			</tr>
		</table>
		<div class="row">
			<div class="col-md-6">
				<div class="input-group">
					<input type="text" class="form-control" placeholder="Voucher Code">
					<div class="input-group-append">
						<button class="btn btn-primary" type="button">Redeem</button>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<p><span>Subtotal</span><span>{{ getCartPrice }}</span></p>
				<p><span>Shipping fee</span><span>0</span></p>
				<p><span>Coupon</span><span>0</span></p>
				<hr>
				<p><span>TOTAL</span><span>{{ getCartPrice }}</span></p>
				<button class="btn btn-primary w-100">Check out</button>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapActions,mapGetters } from 'vuex';

	export default {
		name: "Cart",
		computed: {
			...mapGetters(['getCart','getCartPrice']),
		},
		methods: {
			...mapActions(['increaseQuantity','reduceQuantity','deleteOrder'])
		}
	}
</script>

<style scoped>
	p{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
