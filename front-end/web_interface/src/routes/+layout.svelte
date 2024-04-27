<script>
	import Header from "./Header.svelte";
	//import './styles.css';
	import "../app.css";
	import header from "$lib/images/header.jpg";
	import logo from "$lib/images/logo.png";
</script>

<div class="app bg-beigehell">
	<!-- <Header />-->
	<sections class="flex justify-center content-center">
		<img src={header} class="w-full h-64 object-cover" />
		<div
			class="absolute self-center bg-white opacity-40 rounded-3xl flex gap-4"
		>
			<div
				class=" text-black text-5xl opacity-100 px-4 py-4 flex justify-center content-center"
			>
			<img
			src={logo}
			class="w-[100px] self-end">
				<span class="self-center">Green Guard</span>
			</div>
		</div>
	</sections>
	<main>
		<slot />
	</main>

	<footer>
		<p>Protecting the Rainforest with AI since 2024</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
			"Lucida Sans", Arial, sans-serif;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
