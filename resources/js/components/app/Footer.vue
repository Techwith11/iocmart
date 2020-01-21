<template>
	<footer>
		<hr>
		<div class="container">
			<div class="row">
				<div class="col-12 col-md-4">
					<h4>IOCMart</h4>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
				</div>
				<div class="col-12 col-md-4">
					<h6>Follow Us</h6>
					<p>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
					<a href="https://facebook.com" target="__blank"><img src="@/assets/socials/facebook.svg" alt="" class="socials"></a>
					<a href="https://twitter.com" target="__blank"><img src="@/assets/socials/twitter.svg" alt="" class="socials"></a>
				</div>
				<div class="col-12 col-md-4">
					<h6>Contact Us</h6>
					<p>My Company , 4578 Marmora Road, Glasgow  D04 89GR</p>
					<p>Call us now: 0123-456-789</p>
					<p>Email: support@whatever.com</p>
				</div>
			</div>
			<hr>
			<div class="row links">
				<div class="col-4 col-md-2 my-3">
					<h6 class="my-3">Information</h6>
					<a href="#">About Us</a>
					<a href="#">Information</a>
					<a href="#">Privacy Policy</a>
					<a href="#">Terms and Conditions</a>
				</div>
				<div class="col-4 col-md-2 my-3">
					<h6 class="my-3">Services</h6>
					<a href="#">About Us</a>
					<a href="#">Information</a>
					<a href="#">Privacy Policy</a>
					<a href="#">Terms and Conditions</a>
				</div>
				<div class="col-4 col-md-2 my-3">
					<h6 class="my-3">Extras</h6>
					<a href="#">About Us</a>
					<a href="#">Information</a>
					<a href="#">Privacy Policy</a>
					<a href="#">Terms and Conditions</a>
				</div>
				<div class="col-4 col-md-2 my-3">
					<h6 class="my-3">My Account</h6>
					<a href="#">About Us</a>
					<a href="#">Information</a>
					<a href="#">Privacy Policy</a>
					<a href="#">Terms and Conditions</a>
				</div>
				<div class="col-4 col-md-2 my-3">
					<h6 class="my-3">Useful Links</h6>
					<a href="#">About Us</a>
					<a href="#">Information</a>
					<a href="#">Privacy Policy</a>
					<a href="#">Terms and Conditions</a>
				</div>
				<div class="col-4 col-md-2 my-3">
					<h6 class="my-3">Our Offers</h6>
					<a href="#">About Us</a>
					<a href="#">Information</a>
					<a href="#">Privacy Policy</a>
					<a href="#">Terms and Conditions</a>
				</div>
			</div>
		</div>
		<hr>
		<div class="container">
			<p>&copy;{{ new Date().getFullYear() }} <a href="/">iocmart.com</a></p>
		</div>
	</footer>
</template>

<style scoped>
	footer{
		position: relative;
		bottom: 0%;
		padding: 5rem 0 0;
	}
	footer .links a{
		display: block;
		color: #555;
	}
	footer p{
		color: #777;
		font-size: 0.8rem;
	}
	footer h4{
		font-size: 1.2rem;
		margin: 0.5rem 0;
	}
	footer h6{
		margin: 1rem 0 0.5rem;
	}
	.socials{
		width: 1rem;
		height: 1rem;
	}
</style>
