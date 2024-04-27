<script>
	import welcome from "$lib/images/svelte-welcome.webp";
	import welcome_fallback from "$lib/images/svelte-welcome.png";
	import { Search, Button } from "flowbite-svelte";
	import {ExclamationCircleSolid} from "flowbite-svelte-icons"
	import sat1 from "$lib/images/sat1.png"
	import header from "$lib/images/header.jpg"

    export let data;

	let searchTerm = "";

	let suppliers = [
		{
			name: "MQ748",
			
		},
		{
			name: "MR956",
			

		},
		{
			name: "MLL452",
			
		},
	];
</script>

{data.qid}