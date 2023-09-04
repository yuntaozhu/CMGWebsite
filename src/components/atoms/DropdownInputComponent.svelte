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

<div id={label} class="text-left">
    <label for={label} class="font-bold">{label}</label>
    <select
        id={"Form" + label}
        class="w-full mt-2 rounded-lg text-black h-8 pl-2 pr-2 bg-white/[0.8] mb-7"
        name={label}
    >
        {#each options as item}
            <option value={item}>{item}</option>
        {/each}
    </select>
</div>
