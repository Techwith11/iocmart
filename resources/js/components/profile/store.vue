<template>
    <div>
        {{ getStore }}
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

	export default {
		name: "Store",
		computed: {
			...mapGetters(["getStore"]),
		},
		components: {
		}
	}
</script>

<style scoped>
</style>