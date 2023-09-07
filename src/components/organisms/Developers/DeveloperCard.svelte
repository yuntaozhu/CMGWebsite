<script>
  export let developer;
  import DeveloperDetail from './DeveloperDetail.svelte';

  let isModalOpen = false;

  function openModal() {
    isModalOpen = true;
  }

  function closeModal() {
    isModalOpen = false;
  }
</script>

<div
  class="relative transition-transform transform-gpu hover:scale-[1.1] cursor-pointer grayscale"
  style="transition: transform 0.5s;"
  on:click={openModal}
>
  <!-- Outer glassmorphic rectangle -->
  <div class="glassmorphic drop-shadow-md border-[1rem] md:rounded-2xl rounded-lg border-opacity-10 md:h-[218px] md:w-[172px] h-[109px] w-[86px]"></div>

  <!-- Inner glassmorphic rectangle -->
  <div class="glassmorphic absolute md:rounded-2xl rounded-lg md:w-[150px] md:h-[160px] md:left-[11px] md:top-3 w-[75px] h-[80px] left-[6px] top-[6px]">
    <!-- Placeholder for developer image --> 
    <img src={developer.imageSrc} alt={developer.nickname} class="w-full h-full object-cover md:rounded-2xl rounded-lg" />
  </div>

  <!-- Developer nickname -->
  <p class="absolute font-bold md:text-2xl w-238 h-12 md:left-4 md:bottom-[-7px] left-2 bottom-[-24px]">{developer.nickname}</p>
</div>

{#if isModalOpen}
  <div class="modal-background absolute">
    <DeveloperDetail developer={developer} closeModal={closeModal}/>
  </div>
{/if}

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

  .grayscale {
    filter: grayscale(100%) sepia(65%) hue-rotate(150deg);
  }

  .grayscale:hover {
    filter: grayscale(0%);
  }
</style>
