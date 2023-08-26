<script>
  import TeamCard from './TeamCard.svelte';
  import DeveloperCard from './DeveloperCard.svelte';
  import TeamTabs from './TeamTabs.svelte';
  import { teams, tabs } from './data.js';

  let activeTab = tabs[0]; // Initial active tab
  let lastRow = '';

  function tabChange(event) {
    activeTab = event.detail;
  }
</script>

<div class="container pb-20">
  {#each teams as team}
    {#if activeTab === team.name}
      <TeamCard teamName={team.name} description={team.description} />
    {/if}
  {/each}

  <div class="overflow-x-auto">
    <TeamTabs {activeTab} {tabs} on:tabChange={tabChange} />
  </div>

  <div class="flex flex-col items-center justify-center">
      {#each teams as team}
        {#if activeTab === team.name}
          <div class="grid grid-cols-4 gap-4 mb-4">
            {#each team.developers as developer, i}
              {#if i < (team.developers.length - 1) - ((team.developers.length - 1) % 4)}
                <DeveloperCard developer={developer} />
              {/if}
            {/each}
          </div>
          <div class="flex gap-4">
            {#each team.developers as developer, i}
              {#if i >= (team.developers.length - 1) - ((team.developers.length - 1) % 4)}
                <DeveloperCard developer={developer} />
              {/if}
            {/each}
          </div>
        {/if}
      {/each}
  </div>
</div>