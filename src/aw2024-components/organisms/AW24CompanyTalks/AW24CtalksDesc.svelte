<script>
  import { AW24ButtonDark } from "../../../aw2024-components";
  function handleClick() {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }
</script>

<div class="w-3/5 flex mt-10 flex-row justify-center align-center">
  <div class="flex flex-1 justify-center align-center">
    <img
      src="/assets/advisers-1.webp"
      alt="gradient-blur-ellipse"
      class="photo-size md:mr-10"
    />
  </div>
  <div class="flex flex-1 flex-col justify-center align-center items-center">
    <p class="ctalks-text details text-xl text-center font-medium">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
    <p class="ctalks-text text-xl mt-5 mb-5 text-center font-extrabold">
      MONTH DAY | WEEK | TIME
    </p>
    <div class="flex justify-center align-center items-center w-2/3">
      <AW24ButtonDark onClick={handleClick}>Register</AW24ButtonDark>
    </div>
  </div>
</div>

<style>
  .ctalks-text {
    color: #1c110a;
  }
</style>
