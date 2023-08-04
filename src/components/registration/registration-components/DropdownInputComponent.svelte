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

<div>
    <div class="font-bold mb-2">{label}</div>
    <select
        class="w-full rounded-md text-black h-8 pl-2 pr-2 bg-white/[0.9] mb-7"
    >
        {#each options as item}
            <option value={item}>{item}</option>
        {/each}
    </select>
</div>
