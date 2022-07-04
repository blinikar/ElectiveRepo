<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p class="footer-text">This website created for Frontend development elective in Innopolis University</p>
	<p class="footer-text">Unfortunately I can't rebuild my previous homework using Svelte because it uses React :(</p>
</footer>


<style>
	footer {
		display: flex;
		flex-direction: column;

		box-sizing: border-box;

		width: 100vw;
		height: 180px;

		color: white;

		align-items: start;
		justify-content: end;

		padding: 16px 20% 16px 10%;

		background-color: #9D1200FF;
	}

	.footer-text {
		text-align: left;
		margin: 0;
	}
</style>
