<script>
    import AutoType from "./AutoType.svelte";

    export let label
    export let text
    export let imgSrc
    export let type
    export let texts
    let button_text
    let button_href
</script>

<div class="landingContent">

    {#if type === "textAndImage"}
        <div>
            <h1>{label}</h1>
            {#if text !== undefined}
                <p>{text}</p>
            {/if}
        </div>
        <img alt="landing content" src={imgSrc}>
    {:else if type === "text"}
        <div>
            <h1>
                {label}
            </h1>
            {#if text !== undefined}
                <p>{text}</p>
            {/if}
        </div>
    {:else if type === "manyTexts"}
        <div>
            <h1>
                <AutoType texts={texts} />
            </h1>
            {#if text !== undefined}
                <p>{text}</p>
            {/if}
        </div>
    {/if}
</div>

<style>

    .landingContent {
        display: flex;
        padding: 16px 0 16px 0;

        align-items: center;
    }

    * {
        color: white;
    }

    h1 {
        text-transform: uppercase;
        font-size: 4rem;
        font-weight: 100;
        line-height: 1.1;
        margin: 2rem auto;

        text-align: start;
    }

    p {
        text-align: start;
        line-height: 1.35;
    }

    img {
        align-self: flex-end;

        height: 50%;
        width: 50%;
    }

    button {
        font-family: inherit;
        font-size: inherit;
        padding: 1em 2em;
        color: #ff3e00;
        background-color: rgba(255, 62, 0, 0.1);
        border-radius: 2em;
        border: 2px solid rgba(255, 62, 0, 0);
        outline: none;
        width: 200px;
        font-variant-numeric: tabular-nums;
        cursor: pointer;
    }

    button:focus {
        border: 2px solid #ff3e00;
    }

    button:active {
        background-color: rgba(255, 62, 0, 0.2);
    }
</style>