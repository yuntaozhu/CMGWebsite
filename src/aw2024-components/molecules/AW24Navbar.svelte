<script>
  import { Button, HamburgerMenu } from "$components";
  import { AW24Button, AW24HamburgerNav } from "../../aw2024-components";
  import { page } from "$app/stores";

  let pages = [
    { title: "Home", url: "/" },
    { title: "About Us", url: "/about-us" },
    { title: "Showcase", url: "/showcase" },
    { title: "ACSS Week", url: "/acss-week" },
    // { title: "Developers", url: "/developers" },
  ];

  $: currentPath = $page.url.pathname;

  const isActive = (/** @type {string} */ path) => {
    return currentPath === path;
  };

  function handleClick() {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }
</script>

<header>
  <nav class="p-10 fixed z-50">
    <div class="flex lg:hidden xl:hidden justify-start self-start">
      <AW24HamburgerNav />
    </div>
  </nav>
  <div>
    <nav>
      <div
        class="navbar flex flex-row justify-between items-center fixed top-0 w-screen pl-10 xl:pl-20 lg:pl-20 pr-20 pb-5 pt-10 lg:pt-3 xl:pt-3 z-50"
      >
        <div class="hidden lg:grid xl:grid grid-cols-2">
          <a href="/">
            <img
              src="/logo-white.webp"
              alt="The official seal of The Alliance of Computer Science Student"
              class="w-12 h-12"
            />
          </a>
        </div>
        <div class="hidden lg:flex items-center flex justify-end gap-5">
          <ul class="flex flex-row gap-5">
            {#each pages as { title, url }}
              <li>
                <a
                  href={url}
                  class="duration-150 hover:font-bold"
                  class:active-link={currentPath === url}
                  on:click={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                  }}>{title}</a
                >
              </li>
            {/each}
          </ul>
          <a href="/contact-us">
            <AW24Button onClick={handleClick}>
              <p class="button-text">Contact Us</p>
            </AW24Button>
          </a>
        </div>
      </div>
    </nav>
  </div>
</header>

<style>
  @media screen and (min-width: 1024px) {
    .navbar {
      background-color: #1c110a;
      /* box-shadow: 0 0 110px rgba(228, 214, 167, 1); */
    }
  }
  .button-text {
    color: #1c110a;
    font-weight: 800;
  }
</style>
