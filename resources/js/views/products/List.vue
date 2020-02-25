<template>
    <div class="row">
        <div class="col-md-3 d-none d-md-flex">
            <side-bar />
        </div>
        <div class="col-md-9 pl-md-3">
            <cta class="d-none d-md-block" />
            <list />
        </div>
    </div>
</template>

<script>
import SideBar from '@/components/products/SideBar'
import CTA from '@/components/products/CTA'
import List from '@/components/products/List'

export default {
	name: 'ProductsList',
	components: {
		'side-bar': SideBar,
		'cta': CTA,
		'list': List
	}
}

</script>

<style scoped>
</style>