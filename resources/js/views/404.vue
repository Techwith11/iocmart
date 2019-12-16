<template>
	<div>
		<p>The page you are looking for doesn't exist</p>
		<button @click="router.push(-1)">Go Back</button>
		<button @click="router.push('/')">Go Home</button>
	</div>
</template>
