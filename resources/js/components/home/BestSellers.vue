<template>
    <div class="text-center">
		<h4>BEST SELLERS</h4>
		<nav class="nav justify-content-center">
			<a class="nav-link active" href="#">All</a>
			<a class="nav-link" href="#">Mac</a>
			<a class="nav-link" href="#">iPhone</a>
			<a class="nav-link" href="#">iPad</a>
			<a class="nav-link" href="#">iPod</a>
			<a class="nav-link" href="#">Accessories</a>
		</nav>
		<div class="row justify-content-center">
			<div class="col-md-3 item">
				<img src="@/assets/bestsellers/mackbook-pro.png" width="80%">
				<hr>
				<h6>Apple Macbook Pro</h6>
				<p>$499<span>$599</span></p>
			</div>
			<div class="col-md-3 item">
				<img src="@/assets/bestsellers/mackbook-pro.png" width="80%">
				<hr>
				<h6>Apple Macbook Pro</h6>
				<p>$499<span>$599</span></p>
			</div>
			<div class="col-md-3 item">
				<img src="@/assets/bestsellers/mackbook-pro.png" width="80%">
				<hr>
				<h6>Apple Macbook Pro</h6>
				<p>$499<span>$599</span></p>
			</div>
			<div class="col-md-3 item">
				<img src="@/assets/bestsellers/mackbook-pro.png" width="80%">
				<hr>
				<h6>Apple Macbook Pro</h6>
				<p>$499<span>$599</span></p>
			</div>
			<div class="col-md-3 item">
				<img src="@/assets/bestsellers/mackbook-pro.png" width="80%">
				<hr>
				<h6>Apple Macbook Pro</h6>
				<p>$499<span>$599</span></p>
			</div>
			<div class="col-md-3 item">
				<img src="@/assets/bestsellers/mackbook-pro.png" width="80%">
				<hr>
				<h6>Apple Macbook Pro</h6>
				<p>$499<span>$599</span></p>
			</div>
			<div class="col-md-3 item">
				<img src="@/assets/bestsellers/mackbook-pro.png" width="80%">
				<hr>
				<h6>Apple Macbook Pro</h6>
				<p>$499<span>$599</span></p>
			</div>
		</div>
		<h6 class="more">LOAD MORE</h6>
    </div>
</template>

<style scoped>
	hr{
		width: 80%;
	}
	h4{
		font-size: 2.14rem;
		font-weight: bold;
		margin: 2rem 0;
	}
	nav a{
		font-weight: bold;
		color: #000;
	}
	nav a.active{
		color: #33A0FF;
		border-bottom: 2px solid #33A0FF;
	}
	.item{
		padding: 0.5rem;
		border: 2px solid #f6f7f8;
		border-radius: 5px;
		margin: 1rem 0;
	}
	.item img{
		margin: 1rem 0;
	}
	.item h6{
		font-weight: bold;
		margin: 1rem 0;
	}
	.item p{
		font-size: 1.14rem;
		color: #ff4858;
	}
	.item p span{
		font-size: 1.14rem;
		color: #777;
		padding: 0 5px;
		text-decoration: line-through;
	}
	.more{
		border-bottom: 2px solid #33A0FF;
		color: #33A0FF;
		font-weight: bold;
		margin: 4rem 0;
		display: inline-block;
	}
	@media(max-width: 992px){
	}
	@media(max-width: 768px){
	}
	@media(max-width: 576px){
	}
	@media(max-width: 400px){
	}
</style>
