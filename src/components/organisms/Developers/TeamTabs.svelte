<script>
  export let activeTab;
  export let tabs;
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let hoveredTab = null;

  function handleTabClick(tab) {
    dispatch('tabChange', tab);
  }
</script>

<div class="flex team-tabs text-white items-center justify-center pt-24 pb-6">
  {#each tabs as tab}
    <button
      class="flex items-center justify-center rounded-full w-4 h-4 m-1 relative {tab === activeTab ? 'bg-blue-500 shadow-lg' : 'text-white'}"
      on:click={() => handleTabClick(tab)}
      on:mouseenter={() => hoveredTab = tab}
      on:mouseleave={() => hoveredTab = null}
    >
      {#if tab === activeTab || tab === hoveredTab}
        <span class="absolute">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 rounded-full bg-sky-500">
            <circle cx="12" cy="12" r="9" />
          </svg>
        </span>
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4">
          <circle cx="12" cy="12" r="9" />
        </svg>
      {/if}
    </button>
  {/each}
</div>
