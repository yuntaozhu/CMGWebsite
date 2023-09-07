<script>
    export let roster; // Pass the roster data as a prop
  
    let isExpanded = false;
  
    function toggleExpand() {
      isExpanded = !isExpanded;
    }
</script>

<div
  class="glassmorphic relative transition-transform transform-gpu hover:scale-[1.05] cursor-pointer drop-shadow-md rounded-2xl p-4 mb-4 w-[75%] md:w-1/2"
  style="transition: transform 0.5s; height: {isExpanded ? 'auto' : '55px'}"
  on:click={toggleExpand}
>
    <!-- Batch and Expand Button -->
    <div class="flex justify-center items-center">
        <div class="flex items-center justify-center">
            <p class="font-bold text-xl text-center">{roster.batch}</p>
        </div>
    </div>

    <div
        class="absolute top-4 right-5 transform transition-transform"
        style="transform: {isExpanded ? 'rotate(-90deg)' : 'rotate(90deg)'}"
        on:click={toggleExpand}
    >
        <img src="assets/right-arrow.svg" on:click={toggleExpand} alt="arrow" class="max-w-[100%] w-2/3"/>
    </div>

    <!-- Member List -->
    {#if isExpanded}
        <div class="flex items-center justify-center">
            <ul class="mt-4 space-y-2 ">
                {#each roster.members as member}
                <li class="text-lg font-medium ">
                    {member.firstName} {member.surname}
                </li>
                {/each}
            </ul>
        </div>
    {/if}
</div>

<style>
  .glassmorphic {
    filter: drop-shadow(0px 8px 8px #000000);
    border: 0.01rem solid rgba(255, 255, 255, 0.1);
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 100%
    );
  }
  .arrow{
    background: linear-gradient(254.24deg, #2E3792 -97.7%, #00F5F1 20.19%, rgba(0, 245, 241, 0) 122.06%);
  }
</style>