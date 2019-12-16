<template>
	<div>
		<carousel />
		<div class="row text-center">
			<div class="col-12">
				<h5 class="display-4">Featured Products</h5>
			</div>
			<div class="col-md-6 col-lg-4">
				<div class="card">
					<img class="card-img-top" src="../assets/featured/1.jpg" alt="">
					<div class="card-body">
						<h5 class="card-title">5 sets of leather bags</h5>
						<p class="card-text">5 beautiful designers leather bags made from the best material ever and imported from italy</p>
						<a href="#" class="btn btn-outline-secondary">See more</a>
					</div>
				</div>
			</div>
			<div class="col-md-6 col-lg-4">
				<div class="card">
					<img class="card-img-top" src="../assets/featured/2.jpg" alt="">
					<div class="card-body">
						<h5 class="card-title">5 sets of leather bags</h5>
						<p class="card-text">5 beautiful designers leather bags made from the best material ever and imported from italy</p>
						<a href="#" class="btn btn-outline-secondary">See more</a>
					</div>
				</div>
			</div>
			<div class="col-md-6 col-lg-4">
				<div class="card">
					<img class="card-img-top" src="../assets/featured/3.jpg" alt="">
					<div class="card-body">
						<h5 class="card-title">5 sets of leather bags</h5>
						<p class="card-text">5 beautiful designers leather bags made from the best material ever and imported from italy</p>
						<a href="#" class="btn btn-outline-secondary">See more</a>
					</div>
				</div>
			</div>
		</div>
		<div class="row text-center">
			<div class="col-12">
				<h5 class="display-4">Shop By Categories</h5>
			</div>
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="card">
					<img class="card-img-top" src="../assets/featured/1.jpg" alt="">
					<div class="card-body">
						<p class="card-title">Electronics</p>
						<a href="#" class="btn btn-outline-secondary">Browse</a>
					</div>
				</div>
			</div>
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="card">
					<img class="card-img-top" src="../assets/featured/1.jpg" alt="">
					<div class="card-body">
						<p class="card-title">Cosmetics</p>
						<a href="#" class="btn btn-outline-secondary">Browse</a>
					</div>
				</div>
			</div>
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="card">
					<img class="card-img-top" src="../assets/featured/1.jpg" alt="">
					<div class="card-body">
						<p class="card-title">Food & Drinks</p>
						<a href="#" class="btn btn-outline-secondary">Browse</a>
					</div>
				</div>
			</div>
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="card">
					<img class="card-img-top" src="../assets/featured/1.jpg" alt="">
					<div class="card-body">
						<p class="card-title">Phones & Gadgets</p>
						<a href="#" class="btn btn-outline-secondary">Browse</a>
					</div>
				</div>
			</div>
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="card">
					<img class="card-img-top" src="../assets/featured/1.jpg" alt="">
					<div class="card-body">
						<p class="card-title">Toys & Child Care</p>
						<a href="#" class="btn btn-outline-secondary">Browse</a>
					</div>
				</div>
			</div>
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="card">
					<img class="card-img-top" src="../assets/featured/1.jpg" alt="">
					<div class="card-body">
						<p class="card-title">Others</p>
						<a href="#" class="btn btn-outline-secondary">Browse</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Carousel from "../components/HomeCarousel";
	export default {
	    name: "Home",
		components: {
	        "carousel": Carousel
		}
	}
</script>

<style scoped>
	.card{
		margin: 0.5rem;
		padding: 0 12.5%;
		border: none;
	}
	.display-4{
		font-size: 1.5rem;
		padding: 1.4rem;
		width: 80%;
		margin: 0 auto;
		border-bottom: 1px solid #000;
	}
	@media(max-width: 768px){

	}
	@media(max-width: 576px){

	}
	@media(max-width: 400px){

	}
</style>
