<script>
    /**
     * @type {any}
     */
     export let label;
    /**
     * @type {any}
     */
     export let options;
</script>

<div id="input-component" class="flex-column mb-7  text-left">
    <label for={label} class="font-bold mb-2">{label}</label>
    {#each options as item}
        <div class="flex gap-3">
            <input type="radio" name={label} />
            <div>{item}</div>
        </div>
    {/each}
</div>