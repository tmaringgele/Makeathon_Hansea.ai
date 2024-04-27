<script>
	import welcome from "$lib/images/svelte-welcome.webp";
	import welcome_fallback from "$lib/images/svelte-welcome.png";
	import { Search, Button } from "flowbite-svelte";

	let searchTerm = "";

	let suppliers = [
		{
			name: "brunos bananen gmbh",
		},
		{
			name: "helmuts haselnuss ag",
		},
		{
			name: "Paulinas Palmöl Produktions Gmbh",
		},
	];

	let filteredSuppliers = [];

	const search = () => {
		return (filteredSuppliers = suppliers.filter((s) => {
			let sTitle = s.name.toLowerCase();
			return sTitle.includes(searchTerm.toLowerCase());
		}));
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-row">
	<div class="flex flex-row items-center content-center">
		<h1 class="self-center text-3xl font-bold">All supplier locations</h1>
	</div>
	<div>
		<Search
			class="mt-9 focus:border-beigedunkel "
			bind:value={searchTerm}
			placeholder="Search for Suppliers"
			on:input={search}
		></Search>
	</div>
</section>

<section>
	<ul>
		{#each suppliers.filter((s) => {
			let sTitle = s.name.toLowerCase();
			return sTitle.includes(searchTerm.toLowerCase());
		}) as s}
			<li>
				{s.name}
			</li>
		{/each}
	</ul>
</section>
