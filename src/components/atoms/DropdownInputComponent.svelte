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

<div class="text-left">
    <label for={label} class="font-bold">{label}</label>
    <select
        class="w-full mt-2 rounded-md text-black h-8 pl-2 pr-2 bg-white/[0.9] mb-7"
        name={label}
    >
        {#each options as item}
            <option value={item}>{item}</option>
        {/each}
    </select>
</div>
