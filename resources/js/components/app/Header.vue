<template>
	<nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
		<a class="navbar-brand" href="#"><img src="../../assets/logo.png" height="50px" width="50px" alt="IOCMart Logo"/>IOCMart</a>
		<button class="navbar-toggler" data-toggle="collapse" data-target="#navbarItems">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarItems">
			<ul class="navbar-nav ml-auto">
				<li class="nav-item">
					<a href="#" class="nav-link">Home</a>
				</li>
				<li class="nav-item">
					<a href="#" class="nav-link">Our Products</a>
				</li>
				<li class="nav-item">
					<a href="#" class="nav-link">Services</a>
				</li>
				<li class="nav-item">
					<a href="#" class="nav-link">Login</a>
				</li>
				<li class="nav-item">
					<a href="#" class="nav-link">Register</a>
				</li>
			</ul>
		</div>
	</nav>
</template>

<style scoped>
	.navbar{
		padding: .8rem;
	}
	.navbar-brand{
		font-size: 1.4rem !important;
		font-weight: 500;
	}
	.navbar-nav li{
		padding-right: 1.4rem;
	}
	.nav-link{
		font-size: 1.2em !important;
		font-weight: 500;
	}
	.nav-link:hover{
		border-radius: 10%;
		border: 2px solid #111;
	}
	@media (max-width: 576px){
		.navbar{
			padding: .5rem;
		}
		.navbar-brand{
			font-size: 1.0rem !important;
			font-weight: 500;
		}
		.navbar-brand img{
			height: 30px;
			width: 30px;
		}
		.navbar-nav li{
			padding-right: 1.0rem;
		}
		.nav-link{
			font-size: 0.8em !important;
			font-weight: 400;
		}
	}
</style>
