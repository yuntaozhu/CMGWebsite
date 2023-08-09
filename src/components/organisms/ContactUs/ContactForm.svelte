<script>
  import { Button, HamburgerMenu } from "$components";

  let string = "",
    buttonVisible = true;

  function handleClick() {
    // string = "You wasted a second of your life :D";
    // buttonVisible = false;
  }
</script>

<div class="flex flex-row justify-around items-center">
  <div class="contact__left flex justify-center grow">
    <h1>Photo</h1>
  </div>
  <div class="contact__right flex justify-center grow">
    <div class="contact__right-container flex flex-col gap-3 self-center">
      <h4 class="contact__title m-0 p-0">
        Get in <span style="color:var(--color-blue)">Touch!</span>
      </h4>
      <p>We will answer as soon as we can!</p>
      <div class="flex flex-row gap-2">
        <input
          class="input-1 p-3 bg-transparent border-solid border w-full"
          placeholder="Full Name"
        />
        <input
          class="input-1 p-3 bg-transparent border-solid border w-full"
          placeholder="Email"
        />
      </div>
      <div class="flex">
        <textarea
          class="input-2 p-3 bg-transparent border-solid border w-full"
          placeholder="Your Message"
        />
      </div>
      <Button onClick={handleClick}>
        <a href="../../ContactUs">Contact Us</a>
      </Button>
    </div>
  </div>
</div>

<style>
  .contact__left {
    max-width: 40%;
    padding: 5rem;
    padding-top: 3rem;
  }
  .contact__right {
    max-width: 60%;
    padding: 5rem;
    padding-top: 3rem;
  }

  .contact__title {
    margin-bottom: -20px;
  }
  .contact__right-container {
    max-width: 75%;
  }

  .input-2 {
    max-width: inherit;
    min-width: inherit;
    height: 400px;
  }

  .input-1 {
    max-width: inherit;
    min-width: inherit;
  }
</style>
