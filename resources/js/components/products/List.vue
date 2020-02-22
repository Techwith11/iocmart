<template>
    <div>
		<template>
			<div v-if="noPosts">
				<p class="lead">There are currently no products available.</p>
			</div>
			<div class="d-none d-md-block">
				<div class="row">
					<div class="col-md-6 col-lg-4 text-center" v-for="post in posts.data" :key="post.id">
						<div class="border">
							<router-link :to="'/products/' + post.id" class="link">
								<img :src="getFeaturedImage(post)" alt="Featured Image" class="w-100">
								<p class="post-name pt-3">{{ post.name }}</p>
								<p class="post-price">&#8358;{{ post.price | discount(post.discount) }}<span v-if="post.discount" class="post-discount">&#8358;{{ post.price | discount }}</span></p>
							</router-link>
							<div class="d-flex flex-row justify-content-between align-content-center">
								<span class="post-quantity">In stock: {{ post.quantity }}</span>
								<button class="btn" :class="{ 'btn-primary': post.is_ordered_by, 'btn-outline-secondary': !post.is_ordered_by }" @click="() => alterInCart(post.id)">
									<i class="fas fa-shopping-basket" :class="{ 'text-danger': post.is_ordered_by, 'text-secondary': !post.is_ordered_by }"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="d-md-none">
				<div class="row border" v-for="post in posts.data" :key="post.id">
					<div class="col-4">
						<img :src="getFeaturedImage(post)" alt="Featured Image" class="w-100">
					</div>
					<div class="col-8 pl-2">
						<router-link :to="'/products/' + post.id" class="link">
							<p class="post-name">{{ post.name }}</p>
							<p class="post-price">&#8358;{{ post.price | discount(post.discount) }}<span v-if="post.discount" class="post-discount">&#8358;{{ post.price | discount }}</span></p>
						</router-link>
						<div class="d-flex flex-row justify-content-between align-content-center">
							<span class="post-quantity">In stock: {{ post.quantity }}</span>
							<button class="btn btn-sm" :class="{ 'btn-primary': post.is_ordered_by, 'btn-outline-secondary': !post.is_ordered_by }" @click="() => alterInCart(post.id)">
								<i class="fas fa-shopping-basket" :class="{ 'text-danger': post.is_ordered_by, 'text-secondary': !post.is_ordered_by }"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</template>
		<pagination :data="posts" align="center" :limit="2" @pagination-change-page="paginatePosts" class="mt-3">
			<span slot="prev-nav"><i class="fas fa-angle-left text-primary"></i></span>
			<span slot="next-nav"><i class="fas fa-angle-right text-primary"></i></span>
		</pagination>
    </div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex';

    export default {
		name: "ProductsList",
		data(){
			return {
				posts: {}
			}
		},
		methods: {
			...mapActions(['addToCart', 'removeFromCart', 'setIntended']),
			loadPosts(){
				let page = this.$route.query.tab ? this.$route.query.tab : 1;
				this.$Progress.start();
                axios.get(this.getRoutes.posts.list + page).then((response)=>{
					this.posts = response.data;
					$("body").get(0).scrollIntoView();
					this.$Progress.finish();
                }).catch(()=>{
					this.$Progress.fail();
                    new toast({ type: 'error', title: "Error fetching posts" });
                })
            },
            paginatePosts(page = 1) {
				this.$router.push('/products?tab=' + page);
				this.loadPosts();
			},
			getFeaturedImage(post){
				return post.pictures.length > 0 ? post.pictures[0].uri : '/images/post-sample.png'
			},
			alterInCart(id){
				if(!this.isLoggedIn){
					this.setIntended(this.$route.fullPath);
					this.$router.push('/login');
					return new toast({ type: 'warning', title: "Login to continue"});
				}
				var post = this.posts.data.find(post => post.id === id);
				if(post.is_ordered_by){
					this.removeFromCart(id).then(() => post.is_ordered_by = false);
				}else{
					this.addToCart(id).then(() => post.is_ordered_by = true);
				}
			}
		},
		computed: {
			...mapGetters(['getRoutes', 'isLoggedIn']),
			noPosts(){return this.posts.data ? this.posts.data.length < 1 : false}
		},
		mounted(){
			this.loadPosts();
		}
    }
</script>

<style scoped>
	.link{
		text-decoration: none;
	}
	.border{
		border: 2px solid #777;
		padding: 1rem;
		margin: 0.5rem 0;
		border-radius: 10px;
	}
	.post-name{
		font-size: 1rem;
		font-weight: bold;
		color: #000;
	}
	.post-price{
		font-size: 1.14rem;
		color: #FF6875;
	}
	.post-discount{
		font-size: 0.9rem;
		color: #777;
		text-decoration: line-through;
	}
	.post-quantity{
		font-size: 0.9rem;
		color:#000;
		font-weight: bold;
	}
</style>