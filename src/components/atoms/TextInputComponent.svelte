<script>
    /**
     * @type {any}
     */
     export let label;
</script>

<div id={label} class="flex-column mb-7  text-left">
    <label for={label} class="font-bold">{label}</label>
    <input id={"Form" + label} name={label} type="text" class="w-full mt-2 rounded-md text-black h-8 pl-2 pr-2 bg-white/[0.9]" required/>
</div>