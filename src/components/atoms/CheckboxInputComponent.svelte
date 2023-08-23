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

<div id={"FormCheckACSS-" + label} class="flex flex-col gap-1 mb-7 text-left">
    <label for={label} class="font-bold">{label}</label>
    <div>
        {#each options as item, i}
            <div class="flex gap-3">
                <input
                    type="checkbox"
                    class="w-[15px]"
                    name={label}
                    value={item}
                />
                <div>{item}</div>
            </div>
        {/each}
    </div>
</div>
