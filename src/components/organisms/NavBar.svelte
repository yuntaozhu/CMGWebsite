<nav class="nav glass-effect">
  <div class="nav__logo ws-regular">ACSS LOGO</div>
  <ul class="nav__list">
    <li class="nav__item ws-regular">
      <a href="../" class="nav__link">Home</a>
    </li>
    <li class="nav__item ws-regular">
      <a href="../../AboutUs" class="nav__link">About Us</a>
    </li>
    <li class="nav__item ws-regular">
      <a href="../../Showcase" class="nav__link">Showcase</a>
    </li>
    <li class="nav__item ws-regular">
      <a href="../../DevelopersPage" class="nav__link">Developers</a>
    </li>
    <li class="nav__item ws-regular">
      <a href="../../ACSSWeek" class="nav__link">ACSS Week 2023</a>
    </li>
    <li class="nav__item ws-regular">
      <a href="../../ContactUs" class="nav__link">Contact Us</a>
    </li>
  </ul>
</nav>

<style>
  .nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    padding: 3rem;

    width: 100%;
  }

  .nav__logo {
    flex-grow: 1;
  }

  .nav__list {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 3;
    column-gap: 1rem;
  }

  .nav__item {
    color: var(--color-white);
  }
</style>
