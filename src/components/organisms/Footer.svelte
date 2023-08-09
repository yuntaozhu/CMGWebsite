<script>
  import { Button } from "$components";

  let string = "",
    buttonVisible = true;

  function handleClick() {
    // string = "You wasted a second of your life :D";
    // buttonVisible = false;
  }
</script>

<div class="footer">
  <div class="footer__top" />
  <div class="footer__content">
    <div class="footer__content-left">
      <p class="ws-regular-bold">Contacts</p>
      <p class="ws-tiny">Third Floor, Physical Sciences Building,</p>
      <p class="ws-tiny">UPLB 4031 Los Baños, Philippines</p>
      <p class="ws-tiny">0912 345 7890</p>
      <p class="ws-tiny">acssph@gmail.com</p>
    </div>
    <div class="footer__content-right">
      <div class="footer__content-right__pages">
        <p class="i-regular-bold">Home</p>
        <p class="i-tiny">Dev Stories</p>
        <p class="i-tiny">Strengths</p>
        <p class="i-tiny">Contributions</p>
        <p class="i-tiny">Brief Showcase</p>
      </div>
      <div class="footer__content-right__pages">
        <p class="i-regular-bold">Showcase</p>
        <p class="i-tiny">Projects</p>
        <p class="i-tiny">Events</p>
        <p class="i-tiny">Workshops</p>
        <p class="i-tiny">Activities</p>
      </div>
      <div class="footer__content-right__pages">
        <p class="i-regular-bold">About Us</p>
        <p class="i-tiny">History</p>
        <p class="i-tiny">Mission & Vision</p>
        <p class="i-tiny">Core Values</p>
        <p class="i-tiny">Advisers</p>
      </div>
      <div class="d-flex row">
        <div class="footer__content-right__pages">
          <p class="i-regular-bold">Developers</p>
          <p class="i-tiny">Executives</p>
          <p class="i-tiny">Resident Members</p>
          <p class="i-tiny">Member Roster</p>
        </div>
        <div class="footer__content-right__details">
          <p class="i-large">Let’s Discuss What’s Next</p>
          <p class="i-tiny">Have a question? We’d love to here from you!</p>
        </div>
      </div>
      <Button onClick={handleClick}>Contact Us</Button>
    </div>
  </div>

  <div class="footer__bottom">
    <div class="footer__bottom-left">
      <img
        src="/logo.webp"
        alt="The official seal of The Alliance of Computer Science Student"
        class="footer__logo"
      />
      <div class="footer__bottom-left__details">
        <p class="i-tiny">Alliance of Computer Science Students</p>
        <p class="i-super-tiny">University of the Philippines Los Banos</p>
      </div>
    </div>
    <div class="footer__bottom-right">
      <p class="i-tiny">2023</p>
    </div>
  </div>
</div>

<style>
  .footer__content {
    width: 100%;
    background-color: var(--color-dark-3);
    padding: 2rem;
    padding-left: 10rem;
    padding-right: 10rem;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .footer__content-left {
    display: flex;
    flex-direction: column;
  }
  .footer__content-right {
    display: flex;
    flex-direction: row;
    row-gap: 10px;
  }
  .footer__logo {
    max-height: 3rem;
  }
  .footer__bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    padding-left: 10rem;
    padding-right: 10rem;
    background-color: var(--color-dark-3);
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
