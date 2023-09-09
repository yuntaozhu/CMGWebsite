<script>
    import { goto } from "$app/navigation";
    import Button from "$components/atoms/Button.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });
</script>

<div
    class="overflow-hidden min-h-screen w-full flex flex-col justify-center items-center gap-10 pb-40 -mb-8 relative z-20"
>
    <div
        id="main"
        class="flex flex-col max-w-[80%] gap-4 items-startz justify-center items-center"
    >
        <div id="error-illus" class="mb-3" />
        <div class="font-bold break-words text-2xl">
            Not the page you're looking for.
        </div>
        <Button
            onClick={() => {
                goto("/");
            }}>Go Home</Button
        >
    </div>
</div>

<style>
    #main {
        width: 800px;
    }
    #error-illus {
        background-image: url("/assets/oops.svg");
        background-repeat: no-repeat;
        background-size: cover;
        width: 80vw;
        height: 80vw;
        max-width: 350px;
        max-height: 350px;
        margin-top: 120px;
    }
</style>
