<template>
	<div class="background">
		<div class="container">
			<div id="slider" class="row">
				<div class="col-12 col-sm-6">
					<div class="hero-text">
						<h2>iPhone X</h2>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
						<a><span>MORE</span></a>
					</div>
				</div>
				<div class="col-6">
					<img src="@/assets/slider/iphonex_spacegray.png" width="100%">
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.background{
		background: linear-gradient(to right, #FF4858,#8F65FF);
	}
	.hero-text{
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 1rem;
		color: #fff;
	}
	.hero-text h2{
		font-size: 2.5rem;
		font-weight: bold;
		margin: 1rem 0;
	}
	.hero-text p{
		margin: 1rem 0;
	}
	.hero-text a span{
		margin: 1rem 0;
		border-bottom: 2px solid #fff;
		font-weight: bold;
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
