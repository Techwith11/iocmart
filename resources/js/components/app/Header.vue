<template>
	<div>
		<div class="container d-flex flex-row justify-content-between mt-1" id="topbar">
			<div class="d-flex flex-row">
				<select>
					<option>EN</option>
				</select>
				<select>
					<option>NGN</option>
				</select>
			</div>
			<div class="d-flex flex-row">
				<router-link to='/products/new' class="top-link">
					<i class="fas fa-plus"></i>
					<span class="d-none d-sm-inline">Add Product</span>
				</router-link>
				<router-link to='/profile' class="top-link">
					<i class="fas fa-user"></i>
					<span class="d-none d-sm-inline">My Profile</span>
				</router-link>
				<router-link to="/cart" class="top-link">
					<i class="fas fa-shopping-basket"></i>
					<span class="d-none d-sm-inline">{{ this.getCartCount }} items <span class="price">&#8358;{{ this.getCartPrice }}</span></span>
				</router-link>
				<router-link to="/search" class="top-link">
					<i class="fas fa-search"></i>
				</router-link>
			</div>
		</div>
		<hr>
		<div class="d-flex flex-row align-items-baseline justify-content-between justify-content-sm-center">
			<router-link to="/" id="name">
				<!-- <img src="@/assets/design/logo.svg" alt="" height="20px" width="20px"> -->
				<span class="ml-2">IOCMART</span>
			</router-link>
			<a class="navbar-toggler d-sm-none" id="toggler" data-toggle="collapse" data-target="#navbar" aria-expanded="false">
				<span class="fas fa-bars"></span>
			</a>
		</div>
		<nav class="navbar navbar-expand-sm">
			<div class="collapse navbar-collapse" id="navbar">
				<ul class="navbar-nav mx-auto">
					<li class="nav-item">
						<router-link to="/" class="nav-link">Home</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/products" class="nav-link">Our Products</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/categories" class="nav-link">Categories</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/services" class="nav-link">Services</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/stores" class="nav-link">Stores</router-link>
					</li>
					<li class="nav-item" v-if="!isLoggedIn">
						<router-link to="/login" class="nav-link">Login</router-link>
					</li>
					<li class="nav-item" v-if="!isLoggedIn">
						<router-link to="/register" class="nav-link">Register</router-link>
					</li>
					<li class="nav-item" v-if="isLoggedIn">
						<a href="#" class="nav-link" @click.prevent="logoutUser">Logout</a>
					</li>
				</ul>
			</div>
		</nav>
		<hr>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from "vuex";

	export default {
		name: "Header",
		computed: {
			...mapGetters(['isLoggedIn','getCartCount','getCartPrice']),
		},
		methods: {
			...mapActions(['logout']),
			logoutUser(){
				new swal({
                    title: 'Are you sure you want to logout?',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes',
                }).then((result) => {
                    if (result.value) {
						this.$Progress.start();
                        this.logout();
						this.$router.push("/login");
						this.$Progress.finish();
						new toast({ type: 'success', title: 'Logged out successfuly' });
                    }
                })
			}
		}
	}
</script>

<style scoped>
	#topbar select{
		border: none;
		background: #ffffff00;
	}
	#topbar .top-link{
		margin: 0.5rem 0.5rem 0;
		line-height: 2rem;
		color: #000;
		text-decoration: none;
	}
	#topbar .top-link i{
		color: #000;
	}
	#name{
		padding: 0 1rem;
		text-decoration: none;
	}
	#name span{
		font-size: 2rem;
		font-weight: bold;
		color: #000;
	}
	#toggler{
		padding: 0 1rem;
	}
	.nav-link{
		color: #000;
		margin: 0 0.50rem;
	}
	.price{
		color: #777;
		font-size: 0.8rem;
	}
</style>
