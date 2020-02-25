<template>
    <div>
        <h1>{{ store }}</h1>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'SingleStore',
	data(){
		return {
			id: null,
			store: {},
		}
	},
	methods: {
		fetchStore(){
			axios.get(this.getRoutes.stores.base + this.id).then(response => {
				this.store = response.data.data
			}).catch(()=>{
				new toast({
					type: 'error',
					title: 'Error fetching store!'
				})
			})
		}
	},
	computed: {
		...mapGetters(['getRoutes']),
	},
	mounted(){
		this.id = this.$route.params.id
		this.fetchStore()
	}
}
</script>

<style scoped>
</style>