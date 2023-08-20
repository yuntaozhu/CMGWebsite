<script>
  import { Button, HamburgerMenu } from "$components";

  let pages = [
    ["Home", "../", "false"],
    ["About Us", "../../AboutUs", "false"],
    ["Showcase", "../../Showcase", "false"],
    ["Developers", "../../DevelopersPage", "false"],
    ["ACSS Week 2023", "../../ACSSWeek", "false"],
  ];

  /**
   * @param {string} _page
   */
  function handleClick(_page) {
    for (let i = 0; i < pages.length; i++) {
      if (pages[i][0] === _page) {
        pages[i][2] = "true";
      } else {
        pages[i][2] = "false";
      }
    }
    console.log(pages);
  }

  function handleClick2() {
    // Do something here if needed
  }
</script>

<nav class="nav min-w-screen z-20">
  <div class="grid grid-cols-4">
    <img
      src="/logo.webp"
      alt="The official seal of The Alliance of Computer Science Student"
      class="nav__logo"
    />
  </div>
  <ul
    class="nav__right text-lg font-light tracking-wide font-sans text-inherit"
  >
    {#each pages as item, index}
      <li>
        <a href={item[1]} on:click={() => handleClick(item[0])}>{item[0]}</a>
        {#if item[2] == "true"}
          <div class="gradient-line mt-1 show" />
        {/if}
      </li>
    {/each}
    <a href="../../ContactUs">
      <Button onClick={handleClick2}>Contact Us</Button>
    </a>
  </ul>
  <div class="nav__menu hidden flex justify-start self-start">
    <HamburgerMenu />
  </div>
</nav>

<style>
  a {
    transition: color 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }
  a:hover {
    color: var(--color-sky-blue);
    opacity: 0.7;
  }
  .gradient-line {
    width: 100%;
    height: 2px;
    background: linear-gradient(
      270deg,
      rgba(0, 245, 241, 0) 0%,
      #00f5f1 47.92%,
      rgba(0, 245, 241, 0) 100%
    );
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }

  .show {
    opacity: 1;
  }
  .nav {
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    padding: 3rem;

    width: 100%;
    max-height: 5rem;
  }

  .nav__logo {
    max-height: 4rem;
  }

  .nav__right {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    column-gap: 3rem;
  }

  @media (min-width: 0px) and (max-width: 1200px) {
    .nav__menu {
      display: flex;
    }
    .nav__right,
    .nav__logo {
      display: none;
    }
  }
</style>
