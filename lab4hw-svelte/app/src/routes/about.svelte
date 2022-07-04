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
    <LandingContent type="text"
                    label="My name is Yegor Blinov"
                    text="I am interesting in different technologies, business development and project management" />

    <LandingContent type="text"
                    label="Frontend is the best"
                    text="I like frontend because you can see result of your job right now" />

    <LandingContent type="text"
                    label="Have fun" />
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