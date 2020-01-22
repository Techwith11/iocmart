<template>
    <div class="text-center">
        <p class="lead">The page you are looking for doesn't exist</p>
		<button @click="$router.go(-1)" class="btn btn-lg btn-primary">Go Back</button>
		<button @click="$router.push('/')" class="btn btn-lg btn-outline-primary">Go Home</button>
    </div>
</template>

<script>
    export default {
        name: "NotFound"
    }
</script>