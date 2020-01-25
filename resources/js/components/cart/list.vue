<template>
	<div>
		{{ getCart }}
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		name: "Cart",
		computed: {
			...mapGetters(["getCart"]),
		},
		components: {
		}
	}
</script>

<style scoped>
</style>
