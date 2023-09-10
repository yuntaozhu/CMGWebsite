<script>
    // Export the 'roster' prop to receive member data
    export let roster;
  
    // State variable to control member list expansion
    let isExpanded = false;
  
    // Function to toggle member list expansion
    function toggleExpand() {
      isExpanded = !isExpanded;
    }
</script>

<div class="glassmorphic relative transition-transform transform-gpu hover:scale-[1.05] cursor-pointer drop-shadow-md rounded-2xl p-2 mb-2 w-[100%] md:w-1/2" style="transition: transform 0.5s; height: {isExpanded ? 'auto' : '45px'}" on:click={toggleExpand} >
    <!-- Batch and Expand Button -->
    <div class="flex justify-center items-center">
        <div class="flex items-center justify-center">
            <!-- Display the batch information -->
            <p class="font-bold text-xl text-center">{roster.batch}</p>
        </div>
    </div>

    <!-- Expand/Collapse Arrow Icon -->
    <div class="absolute top-3 right-5 transform transition-transform" style="transform: {isExpanded ? 'rotate(-90deg)' : 'rotate(90deg)'}" on:click={toggleExpand}>
        <img src="assets/right-arrow.svg" on:click={toggleExpand} alt="arrow" class="max-w-[100%] w-2/3"/>
    </div>

    <!-- Member List (conditionally displayed when expanded) -->
    {#if isExpanded}
        <div class="flex items-center justify-center">
            <ul class="mt-4 space-y-2">
                {#each roster.members as member}
                <li class="text-lg font-medium">
                    <!-- Display each member's first name and surname -->
                    {member.firstName} {member.surname}
                </li>
                {/each}
            </ul>
        </div>
    {/if}
</div>

<style>
  /* Styling for the container div */
  .glassmorphic {
    filter: drop-shadow(0px 8px 8px #000000);
    border: 0.01rem solid rgba(255, 255, 255, 0.1);
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 100%
    );
  }
</style>