<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { Search, Button } from 'flowbite-svelte';

	let searchTerm = ""

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>

	<Search bind:searchTerm>
		<Button color="green">Search</Button>
	  </Search>
	  {searchTerm}
</section>