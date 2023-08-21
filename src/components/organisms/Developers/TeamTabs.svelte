<script>
  export let activeTab;
  export let tabs;
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function handleTabClick(tab) {
    dispatch('tabChange', tab);
  }
</script>

<div class="flex team-tabs text-white items-center justify-center pt-24 pb-6">
  {#each tabs as tab}
    <button
      class="flex items-center justify-center rounded-full w-5 h-5 m-1 transition duration-300 ease-in-out {tab === activeTab ? 'bg-blue-500 shadow-lg' : 'text-white'}"
      on:click={() => handleTabClick(tab)}
    >
      {#if tab === activeTab}
        <span class="animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-white">
            <circle cx="12" cy="12" r="9" />
          </svg>
        </span>
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
          <circle cx="12" cy="12" r="9" />
        </svg>
      {/if}
    </button>
  {/each}
</div>

<style>
  .team-tabs {
    /* Your styles here */
  }
</style>
