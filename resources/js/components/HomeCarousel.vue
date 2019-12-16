<template>
	<div id="slides" class="carousel slide" data-ride="carousel">
		<ul class="carousel-indicators">
			<li data-target="#slides" data-slide-to="0" class="active"></li>
			<li data-target="#slides" data-slide-to="1"></li>
			<li data-target="#slides" data-slide-to="2"></li>
			<li data-target="#slides" data-slide-to="3"></li>
		</ul>
		<div class="carousel-inner">
			<div class="carousel-item active">
				<img src="../assets/slider/slide1.jpg" alt="">
				<div class="overlay">
					<div class="carousel-caption">
						<h1 class="display-2">Welcome to IOCMart</h1>
						<h3>Home to the best products around Unilag</h3>
						<button class="btn btn-outline-light btn-lg">Start Shopping</button>
						<button class="btn btn-primary btn-lg">Take a quick tour</button>
					</div>
				</div>
			</div>
			<div class="carousel-item">
				<img src="../assets/slider/slide2.jpg" alt="">
				<div class="overlay">
					<div class="carousel-caption">
						<h1 class="display-2">Welcome to IOCMart</h1>
						<h3>Home to the best products around Unilag</h3>
						<button class="btn btn-outline-light btn-lg">Start Shopping</button>
						<button class="btn btn-primary btn-lg">Take a quick tour</button>
					</div>
				</div>
			</div>
			<div class="carousel-item">
				<img src="../assets/slider/slide3.jpg" alt="">
				<div class="overlay">
					<div class="carousel-caption">
						<h1 class="display-2">Welcome to IOCMart</h1>
						<h3>Home to the best products around Unilag</h3>
						<button class="btn btn-outline-light btn-lg">Start Shopping</button>
						<button class="btn btn-primary btn-lg">Take a quick tour</button>
					</div>
				</div>
			</div>
			<div class="carousel-item">
				<img src="../assets/slider/slide4.jpg" alt="">
				<div class="overlay">
					<div class="carousel-caption">
						<h1 class="display-2">Welcome to IOCMart</h1>
						<h3>Home to the best products around Unilag</h3>
						<button class="btn btn-outline-light btn-lg">Start Shopping</button>
						<button class="btn btn-primary btn-lg">Take a quick tour</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.overlay{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: rgba(0,0,0,0.5);
	}
	.carousel-inner img{
		width: 100%;
		height: 100%;
	}
	.carousel-caption{
		position:absolute;
		top: 50%;
		transform: translateY(-50%);
		color: #eee;
	}
	.carousel-caption h1{
		font-size: 5rem;
		text-transform: uppercase;
		text-shadow: 1px 1px 15px #000;
	}
	.carousel-caption h3{
		font-size: 2rem;
		font-weight: 500;
		text-shadow: 1px 1px 10px #000;
		padding-bottom: 1rem;
	}
	@media(max-width: 992px){
		.carousel-caption{
			top: 48%;
		}
		.carousel-caption h1{
			font-size: 4.0rem;
		}
		.carousel-caption h3{
			font-size: 1.6rem;
			font-weight: 400;
			padding-bottom: .5rem;
		}
	}
	@media(max-width: 768px){
		.carousel-caption{
			top: 45%;
		}
		.carousel-caption h1{
			font-size: 3.5rem;
		}
		.carousel-caption h3{
			font-size: 1.4rem;
			font-weight: 400;
			padding-bottom: .5rem;
		}
		.carousel-caption .btn{
			font-size: 0.95rem;
			padding: 8px 14px;
		}
	}
	@media(max-width: 576px){
		.carousel-caption{
			top: 40%;
		}
		.carousel-caption h1{
			font-size: 2.5rem;
		}
		.carousel-caption h3{
			font-size: 1.1rem;
		}
		.carousel-caption .btn{
			font-size: 0.90rem;
			padding: 4px 8px;
		}
		.carousel-indicators{
			display: none;
		}
	}
	@media(max-width: 400px){
		.carousel-caption{
			top: 35%;
		}
		.carousel-caption h1{
			font-size: 2.0rem;
		}
		.carousel-caption h3{
			font-size: 0.9rem;
		}
		.carousel-caption .btn{
			font-size: 0.75rem;
			padding: 2px 4px;
		}
		.carousel-indicators{
			display: none;
		}
	}
</style>

