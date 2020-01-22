<template>
	<div class="row">
		<div class="col-12 col-sm-4 banner" id="banner1">
			<h5>iPhone 6</h5>
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
			<h6>$399</h6>
			<img src="@/assets/banners/banner1.png" width="100%">
		</div>
		<div class="col-12 col-sm-4 banner" id="banner2">
			<h5>Oculus Rift</h5>
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
			<h6>$759</h6>
			<img src="@/assets/banners/banner2.png" width="100%">
		</div>
		<div class="col-12 col-sm-4 banner" id="banner3">
			<h5>GoPro Hero 6</h5>
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
			<h6>$299</h6>
			<img src="@/assets/banners/banner3.png" width="100%">
		</div>
    </div>
</template>

<style scoped>
    #banner1{
		background-color: #FF6875;
		color: white;
	}
	#banner2{
		background-color: #F6F7F8;
	}
	#banner3{
		background-color: #C1C8CC;
	}
	.banner h5{
		font-size: 1.7rem;
		margin: 1rem 0;
		font-weight: bold;
	}
	.banner h6{
		font-size: 1.7rem;
		margin: 1rem 0;
	}
	.banner p{
		font-size: 0.85rem;
		margin: 1rem 0;
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
