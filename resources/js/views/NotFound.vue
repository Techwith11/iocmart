<template>
	<div class="container">
		<not-found />
	</div>
</template>

<script>
import NotFound from '@/components/errors/NotFound'

export default {
	name: 'NotFound',
	components: {
		'not-found': NotFound
	}
}
</script>