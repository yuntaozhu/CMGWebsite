<script>
  import { Button, FooterContentOne, FooterContentTwo } from "$components";
</script>

<div class="svg-container">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1826"
    height="65"
    viewBox="0 0 1826 65"
    fill="none"
    class="svg"
  >
    <path
      d="M0 65V0.0118731C45.9408 -0.496463 146.89 15.5415 278.585 5.23942C410.28 -5.06267 755.395 20.3936 911.734 27.0199C1163.05 37.672 1686.71 27.0199 1826 18.0735V65H0Z"
      fill="#060217"
    />
  </svg>
</div>
<div class="footer">
  <div class="footer__mid-1 flex flex-row gap-10">
    <FooterContentOne />
  </div>
  <div class="footer__mid-2 flex flex-row gap-10 hidden">
    <FooterContentTwo />
  </div>
  <div class="footer__bottom">
    <div class="flex flex-row align-center justify-center">
      <img
        src="/logo.webp"
        alt="The official seal of The Alliance of Computer Science Student"
        class="footer__logo"
      />
      <div class="flex flex-col font-light align-center justify-center ml-3">
        <p class="i-tiny">Alliance of Computer Science Students</p>
        <p class="i-super-tiny">University of the Philippines Los Banos</p>
      </div>
    </div>
    <div class="flex font-light">
      <p class="i-tiny">2023</p>
    </div>
  </div>
</div>

<style>
  @media (min-width: 0px) and (max-width: 1100px) {
    .footer__mid-1 {
      display: none;
    }
    .footer__mid-2 {
      display: flex;
    }
  }
  .svg-container {
    width: 100%;
    height: 3rem;
    overflow: hidden;
    z-index: 2;
    position: relative;
  }
  .svg {
    z-index: 2;
    position: relative;
  }

  .footer {
    z-index: 1;
    position: relative;
    width: 100%;
    background-color: var(--color-blue);
    box-shadow: 0 0 100px rgba(59, 127, 239, 0.5);
    transition: box-shadow 0.5s ease-in-out;
  }

  .footer:hover {
    box-shadow: 0 0 110px rgba(59, 127, 239, 7);
  }
  .footer__mid-1,
  .footer__mid-2 {
    width: 100%;
    background-color: var(--color-dark-3);
    padding: 2rem;
    padding-left: 5rem;
    padding-right: 5rem;

    justify-content: space-between;
    align-items: flex-start;
  }
  .footer__logo {
    max-height: 3rem;
  }
  .footer__bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    padding-left: 5rem;
    padding-right: 5rem;
    background-color: var(--color-dark-4);
  }
</style>
