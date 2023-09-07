<script>
    /**
     * @type {any}
     */
    export let label;
    /**
     * @type {any}
     */
    export let required;
    /**
     * @type {any}
     */
    export let placeholder;
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
            class="w-full mt-2 rounded-lg text-black h-8 pl-3 pr-3 bg-white/[0.8] placeholder:italic placeholder:text-gray-800 placeholder:font-thin focus:outline-0"
            {placeholder}
            required
        />
    {:else}
        <label for={label} class="font-bold">{label}</label>
        <input
            id={"Form" + label}
            name={label}
            type="number"
            class="w-full mt-2 rounded-lg text-black h-8 pl-3 pr-3 bg-white/[0.8] placeholder:italic placeholder:text-gray-800 placeholder:font-thin focus:outline-0"
            {placeholder}
        />
    {/if}
</div>

<style>
    /* Chrome, Safari, Edge, Opera (Removes the arrow)*/
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox (Removes the arrow)*/
    input[type="number"] {
        -moz-appearance: textfield;
    }
</style>
