<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		display: grid;
		max-width: 85vw;
		margin: 10px auto;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>