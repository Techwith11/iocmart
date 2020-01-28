<template>
	<div id="loader-bg" class="d-flex flex-column justify-content-center text-center">
		<span><i class="fas fa-spinner fa-spin text-primary fa-5x"></i></span>
	</div>
</template>

<style scoped>
	#loader-bg{
		position: fixed;
		background: #000000;
		opacity: 0.75;
		width: 100vw;
		height: 100vh;
		left: 0;
		top: 0;
	}
</style>
