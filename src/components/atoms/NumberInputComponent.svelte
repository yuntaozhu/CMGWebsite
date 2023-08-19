<script>
    /**
     * @type {any}
     */
    export let label;
    /**
     * @type {any}
     */
     export let required;
</script>

<div id={label} class="flex-column mb-7 text-left">
    {#if required}
        <div class="flex gap-1">
            <label for={label} class="font-bold">{label}</label>
            <div class="text-[#00f5f1]">*</div>
        </div>
        <input
            id={"Form" + label}
            name={label}
            type="number"
            class="w-full mt-2 rounded-lg text-black h-8 pl-2 pr-2 bg-white/[0.8]"
            required
        />
    {:else}
        <label for={label} class="font-bold">{label}</label>
        <input
            id={"Form" + label}
            name={label}
            type="number"
            class="w-full mt-2 rounded-lg text-black h-8 pl-2 pr-2 bg-white/[0.8]"
        />
    {/if}
</div>
