<!-- Draft Button -->
<script>
    /**
     * @type {string}
     */
    export let text;
    /**
     * @type {() => void}
     */
     export let onClick;
</script>

<button class="glassmorphic-button px-7 py-3" on:click={onClick}>
    {text}
</button>

<style>
    .glassmorphic-button {
        border-radius: 24px;
        border: 0.01rem solid rgba(255, 255, 255, 0.1);
        background: linear-gradient(
            315deg,
            rgba(0, 245, 241, 0) 0%,
            rgba(0, 245, 241, 0.2) 100%
        );
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(20px);
    }
    .glassmorphic-button:hover {
        transition: 0.3s;
        box-shadow: 0px 1px 2.5px 0px rgba(255, 255, 255, 0.136);
    }
</style>
