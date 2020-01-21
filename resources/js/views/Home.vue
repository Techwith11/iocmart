<template>
	<div>
		<hero id="hero" />
		<div class="container mt-n5">
			<banners id="banners" />
			<best-sellers id="best-sellers" />
		</div>
		<cta id="cta" />
		<div class="container">
			<search id="search"/>
			<why-use-us id="why-use-us"/>
		</div>
	</div>
</template>

<script>
	import Hero from "@/components/home/Hero";
	import Banners from "@/components/home/Banners";
	import BestSellers from "@/components/home/BestSellers";
	import CTA from "@/components/home/CTA";
	import Search from "@/components/home/Search";
	import WhyUseUs from "@/components/home/WhyUseUs";
	export default {
		name: "Home",
		components: {
			"hero": Hero,
			"banners": Banners,
			"best-sellers": BestSellers,
			"cta": CTA,
			"search": Search,
			"why-use-us": WhyUseUs,
		}
	}
</script>

<style scoped>
	#banners{
		margin: 0 0 5rem;
	}
	#best-sellers{
		margin: 5rem 0;
	}
	#cta{
		margin: 5rem 0;
	}
	#search{
		margin: 5rem 0;
	}
	#why-use-us{
		margin: 5rem 0;
	}
	@media(max-width: 768px){

	}
	@media(max-width: 576px){

	}
	@media(max-width: 400px){

	}
</style>
