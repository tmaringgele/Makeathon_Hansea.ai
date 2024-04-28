<script>
	import welcome from "$lib/images/svelte-welcome.webp";
	import welcome_fallback from "$lib/images/svelte-welcome.png";
	import { Search, Button } from "flowbite-svelte";
	import {ExclamationCircleSolid} from "flowbite-svelte-icons"
	

	import header from "$lib/images/header.jpg"

	
	let searchTerm = "";

	import sat1 from "$lib/images/sat1.png"
	import sat2 from "$lib/images/sat2.png"
	import sat3 from "$lib/images/sat3.png"

	let suppliers = [
		{
			name: "MQ748",
			warning:true,
			img: sat1
		},
		{
			name: "MR956",
			warning:true,
			img: sat2
			
		},
		{
			name: "MLL452",
			warning:false,
			img:sat3
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



<section class="flex flex-row content-between items-center flex-wrap">
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

<section class="mt-12 flex gap-8 flex-row flex-wrap ">
	
		{#each suppliers.filter((s) => {
			let sTitle = s.name.toLowerCase();
			return sTitle.includes(searchTerm.toLowerCase());
		}) as s}
			<a href="/{s.name}">
			<div class=" cursor-pointer border rounded bg-beigedunkel flex flex-col gap-4 justify-center content-center">
			
			<img 
			src={s.img}
			class="w-[400px] "
			
			/>
			<span class="absolute self-center text-white">Quadrant {s.name}</span>
		</div></a>
				
			
		{/each}
	
</section>
