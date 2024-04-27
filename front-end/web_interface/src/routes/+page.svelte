<script>
	import welcome from "$lib/images/svelte-welcome.webp";
	import welcome_fallback from "$lib/images/svelte-welcome.png";
	import { Search, Button } from "flowbite-svelte";
	import {ExclamationCircleSolid} from "flowbite-svelte-icons"

	let searchTerm = "";

	let suppliers = [
		{
			name: "brunos bananen gmbh",
			warning: true
		},
		{
			name: "helmuts haselnuss ag",
			warning: true

		},
		{
			name: "Paulinas Palmöl Produktions Gmbh",
			warning: false
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

<section class="flex flex-row content-between items-center">
	<div class=" w-full flex flex-row content-end self-end">
		<h1 class="self-end pt-3 text-3xl font-bold ">All supplier locations</h1>
	</div>
	<div class="">
		<Search
			class="mt-9 focus:border-beigedunkel w-26 "
			bind:value={searchTerm}
			placeholder="Search for Suppliers"
			on:input={search}
		></Search>
	</div>
</section>

<section class="mt-12 flex gap-8 flex-row ">
	
		{#each suppliers.filter((s) => {
			let sTitle = s.name.toLowerCase();
			return sTitle.includes(searchTerm.toLowerCase());
		}) as s}
			<div class=" border rounded">
			<div class="flex flex-row gap-16">
				<span class="uppercase text-sm">{s.name}</span> <ExclamationCircleSolid color="red" />
			</div>
				
			</div>
		{/each}
	
</section>
