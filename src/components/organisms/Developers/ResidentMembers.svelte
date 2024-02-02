<script>
    // Importing Svelte components and data
    import TeamCard from './TeamCard.svelte';
    import DeveloperCard from './DeveloperCard.svelte';
    import { teams } from './data.js';
  
    // Importing Svelte lifecycle function to run code after component mount
    import { onMount } from 'svelte';
  
    // Initialize a variable to check screen size
    let isScreenSs = false; // Default to false
  
    // Function to check the screen size using a media query
    function checkScreenSize() {
      const ssMediaQuery = window.matchMedia('(min-width: 425px)'); // Adjust the breakpoint as needed
  
      // Set the initial value based on the media query
      isScreenSs = ssMediaQuery.matches;
  
      // Listen for changes in screen size and update the variable accordingly
      ssMediaQuery.addEventListener('change', (event) => {
        isScreenSs = event.matches;
      });
    }
  
    // Call the function on component mount
    onMount(checkScreenSize);
  </script>
  
  <div class="container mx-auto">
    {#each teams as team, i}
    <section
      id={i === 0 ? 'executives' : i === 1 ? 'resident-members' : team.name}
      class="pb-32 scrollFadeIn"
    >
      <!-- Render TeamCard component with team information -->
      <TeamCard teamName={team.name} description={team.description} />
  
      <div class="flex flex-col items-center justify-center pt-4">
        <div class="grid grid-cols-3 ss:grid-cols-4 gap-1 md:gap-4 mb-1 md:mb-4">
          {#each team.developers as developer, i}
            {#if i < (team.developers.length - 1) - ((team.developers.length - 1) % (isScreenSs ? 4 : 3))}
                <!-- Render DeveloperCard for each developer based on screen size -->
                <DeveloperCard developer={developer} />
            {/if}
          {/each}
        </div>
        <div class="flex gap-1 md:gap-4">
          {#each team.developers as developer, i}
            {#if i >= (team.developers.length - 1) - ((team.developers.length - 1) % (isScreenSs ? 4 : 3))}
                <!-- Render DeveloperCard for each developer based on screen size -->
                <DeveloperCard developer={developer} />
            {/if}
          {/each}
        </div>
      </div>
    </section>
    {/each}
  </div>
  
  <style>
    /* Apply smooth scrolling behavior to the entire HTML document */
    :global(html) {
      scroll-behavior: smooth;
    }
  </style>
  