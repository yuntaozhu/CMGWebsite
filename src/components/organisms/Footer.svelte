<script>
  import { Button } from "$components";

  let string = "",
    buttonVisible = true;

  function handleClick() {
    // string = "You wasted a second of your life :D";
    // buttonVisible = false;
  }
</script>

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
<div class="footer">
  <!-- <div class="footer__top" /> -->
  <div class="footer__mid flex flex-row gap-10">
    <div class="flex gap-10">
      <div class="flex flex-col font-thin text-base i-tiny text-right">
        <p class="i-regular font-normal text-xl mb-1">Contacts</p>
        <p>Third Floor, Physical Sciences Building,</p>
        <p>UPLB 4031 Los Baños, Philippines</p>
        <p>0912 345 7890</p>
        <p>acssph@gmail.com</p>
      </div>
      <div class="vertical-line h-100" />
      <div class="flex flex-col font-thin text-base i-tiny">
        <p class="i-regular font-normal text-xl mb-1">Home</p>
        <p>Dev Stories</p>
        <p>Strengths</p>
        <p>Contributions</p>
        <p>Brief Showcase</p>
      </div>
      <div class="flex flex-col font-thin text-base i-tiny">
        <p class="i-regular font-normal text-xl mb-1">Showcase</p>
        <p>Projects</p>
        <p>Events</p>
        <p>Workshops</p>
        <p>Activities</p>
      </div>
      <div class="flex flex-col font-thin text-base i-tiny">
        <p class="i-regular font-normal text-xl mb-1">About Us</p>
        <p>History</p>
        <p>Mission & Vision</p>
        <p>Core Values</p>
        <p>Advisers</p>
      </div>
      <div class="flex flex-col font-thin text-base i-tiny">
        <p class="i-regular font-normal text-xl mb-1">Developers</p>
        <p>Executives</p>
        <p>Resident Members</p>
        <p>Member Roster</p>
      </div>
    </div>
    <div class="flex flex-col gap-3 justify-around font-thin text-base i-tiny">
      <div class="flex flex-col">
        <p class="i-large-bold text-xl">Let’s Discuss What’s Next</p>
        <p>Have a question? We’d love to here from you!</p>
      </div>
      <Button onClick={handleClick}>Contact Us</Button>
    </div>
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
  .footer__mid {
    width: 100%;
    background-color: var(--color-dark-3);
    padding: 2rem;
    padding-left: 5rem;
    padding-right: 5rem;

    justify-content: space-between;
    align-items: flex-start;
  }
  .vertical-line {
    width: 2px;
    height: 12rem;
    color: var(--color-white);
    background-color: var(--color-white);
    transition: width 0.3s ease-in-out; /* Add this line for the transition effect */
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

  .footer__bottom-left {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    column-gap: 5px;
  }

  .footer__bottom-left__details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
</style>
