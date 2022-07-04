<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>
<script>
	import LandingContent from "../lib/LandingContent.svelte";
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="content">
	<LandingContent type="textAndImage"
					label="Svelte is simple"
					text="This website running with Svelte Kit's help"
					imgSrc="https://upload.wikimedia.org/wikipedia/commons/3/34/Museum-Enter-6094769.JPG" />

	<LandingContent label="This website fetches slogans from JSON and simulate typings"
					text="It is easy to implement if you are using Svelte"
					type="text" />
</div>

<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.content {
		padding-left: 10%;
		padding-right: 20%;
		padding-bottom: 16px;
		box-sizing: border-box;

		display: flex;
		flex-direction: column;

		width: 100vw;
		min-height: 180px;
		background: #ff3e00;
	}
</style>
