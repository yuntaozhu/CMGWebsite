<script>
  /**
   * @type {() => void}
   */
  export let onClick;
</script>

<button
  class="customized-button text-base font-normal tracking-wide font-sans text-inherit"
  on:click={onClick}><slot /></button
>

<style>
  .customized-button {
    display: flex;
    width: 179px;
    height: 37px;
    padding: 0 25px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;

    border-radius: 50px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    backdrop-filter: blur(21px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Optional box shadow for added depth */

    /* Add transition for smooth effect */
    transition: background 0.3s ease, opacity 0.3s ease;
  }

  /* Optional hover style */
  .customized-button:hover {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0.1) 100%
    );
    opacity: 1; /* Adjust the opacity to make it fully visible on hover */
  }
</style>
