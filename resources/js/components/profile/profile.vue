<template>
    <div>
        {{ getAuth }}
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'Profile',
	computed: {
		...mapGetters(['getAuth']),
	},
	components: {
	}
}
</script>

<style scoped>
</style>