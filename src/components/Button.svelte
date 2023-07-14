<script>
    /**
     * @type {() => void}
     */
     export let onClick;
</script>
<button class="bg-base-purple py-2 px-4 text-base-white rounded-lg hover:bg-base-dark-purple duration-150" on:click={onClick}><slot /></button>