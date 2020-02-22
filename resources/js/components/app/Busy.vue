<template>
	<div id="loader-bg" class="d-flex flex-column justify-content-center align-items-center">
		<div class="spinner-border text-info" id='loader' role="status"></div>
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
	#loader{
		width: 5rem;
		height: 5rem;
	}
</style>
