<template>
    <div>
		<app-nav-bar />
		<vue-progress-bar />
		<router-view />
		<app-footer />
		<app-busy v-if="isBusy" />
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Header from '@/components/app/Header'
import Footer from '@/components/app/Footer'
import Busy from '@/components/app/Busy'

export default {
	name: 'App',
	components: {
		'app-nav-bar': Header,
		'app-footer': Footer,
		'app-busy': Busy,
	},
	beforeMount() {
		this.loginUserAutomatically()
	},
	computed: {
		...mapGetters(['getRoutes','isBusy']),
	},
	methods: {
		...mapActions(['setAuth','logout']),
		loginUserAutomatically() {
			if (this.$cookies.hasKey('user_profile')) {
				this.setAuth({ data: this.$cookies.get('user_profile'), remember: true})
				axios.get(this.getRoutes.auth.profile).then(response=>{
					this.setAuth({ data: response.data.data, remember: true })
				}).catch(()=> this.logout())
			}else{
				this.logout()
			}
		},
	}
}
</script>

<style scoped>
</style>
