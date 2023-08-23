<script>
  import { Button } from "$components";
  let menuState = false;
  $: {
    // console.log(menuState);
  }

  function toggleMenu() {
    menuState = !menuState;
  }

  function handleClick() {
    // string = "You wasted a second of your life :D";
    // buttonVisible = false;
  }
</script>

<div class="menu">
  <div class="menu-container">
    <div class="flex flex-row justify-between gap-5 items-center">
      <div class="w-50 h-50">
        <img
          src="/logo.webp"
          alt="The official seal of The Alliance of Computer Science Student"
          class="nav__logo"
        />
      </div>
      {#if !menuState}
        <div class="vertical-line" />
      {/if}
      <div class="w-50 h-50">
        <label for="menu-toggle" class="menu-icon" on:click={toggleMenu}>
          <div class="bar" />
          <div class="bar" />
          <div class="bar" />
        </label>
      </div>
    </div>
    <div class="flex flex-row gap-3 justify-star self-start">
      {#if menuState}
        <ul class="menu-column">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Showcase</a></li>
          <li><a href="#">Developers</a></li>
          <li><a href="#">ACSS Week</a></li>
          <div class="mt-3">
            <Button onClick={handleClick}>Contact Us</Button>
          </div>
        </ul>
      {/if}
    </div>
  </div>
</div>

<style>
  .menu-column {
    min-width: 10rem;
  }
  .vertical-line::after {
    content: "";
    display: block;
    width: 2px;
    height: 2rem;
    background-color: var(--color-white);
  }
  .menu-container {
    background-color: var(--color-dark-3);
    padding: 2rem;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
  }
  .vertical-line {
    width: 2px;
    height: 2rem;
    background-color: var(--color-white);
    transition: width 0.3s ease-in-out; /* Add this line for the transition effect */
  }
  .nav__logo {
    max-height: 4rem;
  }

  .menu {
    justify-self: flex-start;
  }

  .menu-icon {
    display: block;
    width: 30px;
    height: 20px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }

  .bar {
    width: 30px;
    height: 3px;
    background-color: var(--color-white);
    margin: 6px 0;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }

  .menu li {
    padding: 15px;
    border-bottom: 1px solid #eee;
  }

  .menu li:last-child,
  .menu li:nth-child(5) {
    border-bottom: none;
  }
</style>
