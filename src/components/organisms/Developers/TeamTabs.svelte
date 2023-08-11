<script>
    export let activeTeamIndex = 0;
    export let teams = [];
  </script>
  
  <div class="team-tabs flex justify-center mt-4">
    {#each teams as team, index}
      <div
        class={`tab ${index === activeTeamIndex ? 'active' : ''}`}
        on:click={() => $set(activeTeamIndex, index)}
      ></div>
    {/each}
  </div>
  
  <style>
    .team-tabs {
      /* Add styling for positioning and appearance */
    }
  
    .tab {
      /* Add styling for dots */
    }
  
    .tab.active {
      /* Add styling for active dot */
    }
  </style>
  