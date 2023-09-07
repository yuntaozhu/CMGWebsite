<script>
    import { fly } from "svelte/transition";
    import { cubicInOut } from "svelte/easing";

    /**
     * @type {boolean}
     */
    export let success;

    /**
     * @type {string}
     */
    export let message;

    /**
     * @type {boolean}
     */
    export let showNotif;
</script>

{#if showNotif}
    <!-- container -->
    <div class="w-screen fixed flex justify-center z-[60] box-border px-4 top-4 ">
        <div class="flex justify-evenly max-w-lg items-center h-fit p-3 rounded-xl border border-white bg-white bg-opacity-20 border-opacity-30 shadow-2xl backdrop-blur-md" transition:fly={{ duration: 500, y: -200, easing: cubicInOut }}>
            <!-- icon -->
            {#if success}
                <img class="mt-1 w-11 h-11" src="/assets/check.svg" alt="✔"/>
            {:else}
                <img class="mt-1 w-11 h-11" src="/assets/x.svg" alt="🗶"/>
            {/if}
            <span class="text text-sm m-2">
                {message}
            </span>
        </div>
    </div>  
{/if}

<style>
    .text {
        hyphens: auto;
        word-break: break-word;
        word-wrap: break-word;
    }
</style>