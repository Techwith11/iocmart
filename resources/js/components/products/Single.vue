<template>
    <div class="row" v-if="hasFetchedPost">
        <div class="col-md-4" v-if="hasImage">
            <img :src="getFeaturedImage" alt="" class="w-100">
            <div class="row" v-if="hasImages">
                <div class="col-3" v-for="picture in post.pictures" :key="picture.id">
                    <img :src="picture.uri" alt="" class="w-100">
                </div>
            </div>
        </div>
        <div class="col-md-8">
            <h3 class="post_name">{{ post.name }}</h3>
            <hr>
            <h5 class="post_price"><span v-html="getSymbol"></span>{{ post.price | discount(post.discount) }} <span v-if="post.discount" class="post_discount"><span v-html="getSymbol"></span>{{ post.price | discount }}</span></h5>
            <h5><span class="bold">Available in stock: </span><span class="lighter">{{ post.quantity }}</span></h5>
            <h5><span class="bold">Category: </span><span class="lighter">{{ post.category ? post.category.name : null }}</span></h5>
            <h5>{{ post.description }}</h5>
            <hr>
            <div class="d-flex justify-content-between">
                <div class="d-flex align-items-center">
                    <button class="btn btn-info mr-2" @click="reduceCount" :disabled="orderCount < 2">-</button>
                    <span>{{ orderCount }}</span>
                    <button class="btn btn-info ml-2" @click="increaseCount" :disabled="orderCount >= post.quantity">+</button>
                </div>
                <div class="d-flex align-items-center">
                    <button class="btn btn-info mr-2" @click="makeOrder" :disabled="shouldDisable">{{ post.is_ordered_by ? 'Change Quantity' : 'Add To Cart'}} <i class="fas fa-shopping-basket d-none d-sm-inline"></i></button>
                    <button class="btn btn-outline-danger btn-sm" v-if="post.is_ordered_by" @click="deleteOrder">Remove <i class="fas fa-trash d-none d-sm-inline"></i></button>
                </div>
            </div>
        </div>
        <div class="col-12 mt-4 mb-3" v-if="post.store">
            <h5 class="lead text-primary">Store Information</h5>
            <span class="text-uppercase font-weight-bold">{{post.store.name}}</span>
            <div class="d-flex justify-content-between flex-column">
                <span class="lead">Phone: {{post.store.phone.phone}}</span>
                <span class="lead">Email: {{post.store.email}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
	name: 'SingleProduct',
	data(){
		return {
			id: null,
			post: {},
			orderCount: 1
		}
	},
	methods: {
		...mapActions(['addToCart', 'removeFromCart','setIntended','changeQuantity']),
		fetchPost(){
			return axios.get(this.getRoutes.posts.base + this.id).then(response => {
				this.post = response.data.data
			}).catch(()=>{
				new toast({
					type: 'error',
					title: 'Error fetching post!'
				})
			})
		},
		reduceCount(){this.orderCount > 1 ? this.orderCount-- : null},
		increaseCount(){this.orderCount < this.post.quantity ? this.orderCount++ : null},
		makeOrder(){
			if(!this.isLoggedIn){
				this.setIntended(this.$route.fullPath)
				this.$router.push('/login')
				return new toast({ type: 'warning', title: 'Login to continue'})
			}
			if(this.isInCart(this.post.id)) {
				this.changeQuantity(this.post.id, this.orderCount)
			}
			else{
				this.addToCart({ post_id: this.post.id, quantity: this.orderCount }).then(() => this.post.is_ordered_by = true)
			}
		},
		deleteOrder(){
			if(!this.isLoggedIn){
				this.setIntended(this.$route.fullPath)
				this.$router.push('/login')
				return new toast({ type: 'warning', title: 'Login to continue'})
			}
			this.removeFromCart(this.post.id).then(() => {
				this.orderCount = 1
				this.post.is_ordered_by = false
			})
		}
	},
	computed: {
		...mapGetters(['getRoutes','isInCart','getOrderFromPostId','isLoggedIn','getSymbol']),
		hasImage(){return this.post.pictures && this.post.pictures.length > 0},
		hasImages(){return this.post.pictures && this.post.pictures.length > 1},
		getFeaturedImage(){return this.post.pictures[0].uri},
		shouldDisable(){return this.post.is_ordered_by && this.orderCount === this.getOrderFromPostId(this.post.id).quantity},
		hasFetchedPost(){return Object.keys(this.post).length > 0}
	},
	mounted(){
		this.id = this.$route.params.id
		this.fetchPost().then(()=>{
			let order = this.getOrderFromPostId(this.post.id)
			this.orderCount = order && order.quantity ? order.quantity : 1
		})

	}
}
</script>

<style scoped>
    .post_name{
        font-size: 1.714rem;
        font-weight: bold;
        color: #000;
    }
    .post_price{
        font-size: 1.714rem;
        color: #FF4858;
    }
    .post_discount{
        font-size: 1.4rem;
        color: #777;
        text-decoration: line-through;
    }
    .bold{
        font-size: 1.4rem;
    }
    .lighter{
        font-weight: lighter;
        font-size: 1.1rem;
    }
</style>