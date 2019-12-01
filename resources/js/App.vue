<template>
    <div>
		<example-component />
    </div>
</template>

<script>
	import ExampleComponent from "./components/ExampleComponent";

	export default {
		name: "App",
		components: {
			"example-component": ExampleComponent,
		}
	};
</script>
