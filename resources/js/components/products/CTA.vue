<template>
    <div class="background p-2">
        <div class="row">
			<div class="col-md-6" id="hero">
				<h2>iPhone 6 Plus</h2>
				<p>Performance and design. Taken right to the edge.</p>
				<a><span>SHOP NOW</span></a>
			</div>
			<div class="col-md-6">
				<img src="@/assets/cta/cta.png" alt="iPhone 6 Plus" width="100%">
			</div>
		</div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
	.background{
		background: #2E90E5;
		color: #fff;
	}
	#hero{
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0 0 0 2rem;
		color: #fff;
	}
	h2{
		font-size: 2.8rem;
		font-weight: bold;
		margin: 1rem 0;
	}
	p{
		font-size: 1.2rem;
		margin: 1rem 0;
	}
	a span{
		margin: 1rem 0;
		border-bottom: 2px solid #fff;
		font-weight: bold;
	}
</style>