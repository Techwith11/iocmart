<template>
	<div class="container">
		<table class="table w-100">
			<tr>
				<th></th>
				<th>Product</th>
				<th>Unit Price</th>
				<th>Quantity</th>
				<th>Price</th>
			</tr>
			<tr v-for="order in getCart.orders" :key="order.id">
				<td class="text-center"><i class="text-danger" @click.prevent="() => deleteOrder(order.id)">x</i></td>
				<td>{{ order.post.name }}</td>
				<td>{{ order.post.price }}</td>
				<td>
					<button class="btn btn-sm btn-primary mr-2" @click="() => reduceQuantity(order)" :disabled="order.quantity <= 1">-</button>
					{{ order.quantity }}
					<button class="btn btn-sm btn-primary ml-2" @click="() => increaseQuantity(order)" :disabled="order.quantity >= order.post.quantity">+</button>
				</td>
				<td>{{ order.quantity * order.post.price }}</td>
			</tr>
		</table>
		<div class="row my-5" v-if="hasOrders">
			<div class="col-md-6 mb-3 mb-md-0">
				<div class="input-group">
					<input type="text" class="form-control" placeholder="Voucher Code" v-model="voucherCode">
					<div class="input-group-append">
						<button class="btn btn-primary" type="button" @click.prevent="useVoucher">Redeem</button>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<p><span>Subtotal</span><span>{{ getCartPrice }}</span></p>
				<p><span>Delivery fee</span><span>0</span></p>
				<p><span>Coupon</span><span>{{ voucherPrice }}</span></p>
				<hr>
				<p><span>TOTAL</span><span>{{ getTotal }}</span></p>
				<button class="btn btn-primary w-100" @click="checkoutCart">Check out</button>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapActions,mapGetters } from 'vuex';

	export default {
		name: "Cart",
		data:()=>({
			voucherCode: '',
			voucherPrice: 0,
		}),
		computed: {
			...mapGetters(['getCart','getCartPrice']),
			getTotal(){ return this.getCartPrice + this.voucherPrice },
			hasOrders(){ return this.getCart.orders.length > 0}
		},
		methods: {
			...mapActions(['increaseQuantity','reduceQuantity','deleteOrder','checkoutCart']),
			useVoucher(){
				let voucher = this.voucherCode
				this.voucherCode = ''
				new toast({type: 'error', title: 'Invalid voucher code'})
			}
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
