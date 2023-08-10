<script>
  import { Button, HamburgerMenu } from "$components";

  let string = "",
    buttonVisible = true;

  function handleClick() {
    // string = "You wasted a second of your life :D";
    // buttonVisible = false;
  }
</script>

<nav class="nav">
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
    <li>
      <a href="../" class="nav__link">Home</a>
    </li>
    <li>
      <a href="../../AboutUs" class="nav__link">About Us</a>
    </li>
    <li>
      <a href="../../Showcase" class="nav__link">Showcase</a>
    </li>
    <li>
      <a href="../../DevelopersPage" class="nav__link">Developers</a>
    </li>
    <li>
      <a href="../../ACSSWeek" class="nav__link">ACSS Week 2023</a>
    </li>
    <Button onClick={handleClick}
      ><a href="../../ContactUs">Contact Us</a></Button
    >
  </ul>
  <div class="nav__menu hidden flex justify-start self-start">
    <HamburgerMenu />
  </div>
</nav>

<style>
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
