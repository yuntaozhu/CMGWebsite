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
  <div class="glassmorphic drop-shadow-md border-[1rem] rounded-2xl border-opacity-10 h-[218px] w-[172px]"></div>

  <!-- Inner glassmorphic rectangle -->
  <div class="glassmorphic left-[11px] top-3 absolute rounded-2xl w-[150px] h-[160px]">
    <!-- Placeholder for developer image --> 
    <img src={developer.imageSrc} alt={developer.nickname} class="w-full h-full object-cover rounded-2xl" />
  </div>

  <!-- Developer nickname -->
  <p class="absolute w-238 h-12 left-4 bottom-[-7px] font-bold text-2xl">{developer.nickname}</p>
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
