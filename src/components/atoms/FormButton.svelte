<script>
    import Button from "./Button.svelte"
    import LoadingDots from "./ChatBot/LoadingDots.svelte";
    import { fade } from "svelte/transition";
    import { cubicInOut } from "svelte/easing";

    export let loadingSubmission = false;
</script>

<div class="button">
    <Button disabled={loadingSubmission} onClick={() => {}}>
      <div class="flex flex-col justify-center items-center w-20 h-5">
        {#if !loadingSubmission}
          <span class="absolute" transition:fade={{ duration: 300, easing: cubicInOut }}>Submit</span>
        {:else}
          <span class="w-fit absolute" transition:fade={{ duration: 300, easing: cubicInOut }}>                        
            <LoadingDots />
          </span>
        {/if}
      </div>
    </Button>
</div>

<style>
    .button {
        -webkit-tap-highlight-color: transparent;
    }
</style>