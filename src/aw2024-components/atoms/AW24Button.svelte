<!-- Draft Button -->
<script>
  /**
   * @type {() => void}
   * @default undefined
   */
  export let onClick;

  export let disabled = false;
</script>

<button {disabled} class="AW2024-button px-7 py-3" on:click={onClick}>
  <slot />
</button>

<style>
  .AW2024-button {
    border-radius: 24px;
    border: 0.01rem solid rgba(255, 255, 255, 0.1);
    background-color: #e4d6a7;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
</style>
