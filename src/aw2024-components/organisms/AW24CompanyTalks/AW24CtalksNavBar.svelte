<script>
  // @ts-nocheck
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let tabs;
  export let activeTab;

  function handleTabClick(tab) {
    dispatch("tabChange", tab);
  }
</script>

<section class="showcase-navbar pt-5">
  <!-- tabs -->
  <ul
    class="overflow-hidden navbar-text flex flex-wrap sm:text-center justify-center gap-7 gap-2 sm:gap-5 md:gap-10 lg:gap-24 list-none"
  >
    {#each tabs as tab}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <li on:click={() => handleTabClick(tab)}>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a
          href=""
          class="duration-150 text-base md:text-xl hover:font-bold"
          class:active={tab === activeTab}>{tab}</a
        >
      </li>
    {/each}
  </ul>
</section>

<style>
  .active {
    margin-top: 10px;
    border: 10px solid;
    border-image-slice: 1;
    border-width: 3px;
    border-left: 0;
    border-right: 0;
    border-top: 0;
    border-image-source: linear-gradient(
      270deg,
      rgba(46, 55, 146, 0) 0%,
      #f7e3ba 27.6%,
      #f7e3ba 74.48%,
      rgba(0, 245, 241, 0) 100%
    );
    color: #1c110a;
    font-weight: 800;
  }
  .active:hover {
    color: #f4f1ff;
  }
</style>
