<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { Search, Button } from 'flowbite-svelte';

	let searchTerm = ""

	let suppliers = [
		{
			name: "brunos bananen gmbh"
		},
		{
			name: "helmuts haselnuss ag"
		},
		{
			name: "Paulinas Palmöl Produktions Gmbh"
		}
	]

	let filteredSuppliers = [];


	const search = () => {	
		return filteredSuppliers = suppliers.filter(s => {
			let sTitle = s.name.toLowerCase();
			return sTitle.includes(searchTerm.toLowerCase())
		});
	}

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>

	<Search class="mt-9" bind:value={searchTerm} placeholder="Search for Suppliers" on:input={search}>
		<div class="mx-3 my-3">
		<Button color="green">Search</Button>
		</div>
	  </Search>
	  
</section>

<section>
	<ul>
	{#each suppliers.filter(s => {
		let sTitle = s.name.toLowerCase();
		return sTitle.includes(searchTerm.toLowerCase())
	}) as s}

	<li>
		{s.name}
</li>
	{/each}
</ul>
</section>