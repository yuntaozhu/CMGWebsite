<script>
  import { Button } from "$components";

  let HomePage = [
    ["DevStories", ""],
    ["Strengths", ""],
    ["Contributions", ""],
    ["Brief Showcase", ""],
  ];

  let Showcase = [
    ["Projects", ""],
    ["Events", ""],
    ["Workshops", ""],
    ["Activities", ""],
  ];

  let AboutUs = [
    ["History", ""],
    ["Mission & Vision", ""],
    ["Core Vaues", ""],
    ["Advisers", ""],
  ];

  let Developers = [
    ["Executives", ""],
    ["Resident Members", ""],
    ["Member Roster", ""],
  ];

  function handleClick() {
    // string = "You wasted a second of your life :D";
    // buttonVisible = false;
  }
</script>

<div class="grid w-full">
  <div class="flex gap-10 w-full justify-self-center self-center">
    <div class="flex flex-col font-thin text-base i-tiny text-right w-1/2">
      <p class="i-regular font-normal text-xl mb-1">Contacts</p>
      <p>Third Floor, Physical Sciences Building,</p>
      <p>UPLB 4031 Los Baños, Philippines</p>
      <p>0912 345 7890</p>
      <p>acssph@gmail.com</p>
    </div>
    <div class="vertical-line h-100" />
    <div class="flex flex-col gap-3 font-thin text-base i-tiny w-1/2">
      <div class="flex flex-col">
        <p class="i-large-bold text-xl">Let’s Discuss What’s Next</p>
        <p>Have a question? We’d love to here from you!</p>
      </div>
      <Button onClick={handleClick}>Contact Us</Button>
    </div>
  </div>
  <div class="flex flex-row gap-3 mt-8 justify-around">
    <div class="flex flex-col font-thin text-base i-tiny">
      <p class="i-regular font-normal text-xl mb-1">Home</p>
      {#each HomePage as item, index}
        <div class="page-container">
          <p>{item[0]}</p>
        </div>
      {/each}
    </div>
    <div class="flex flex-col font-thin text-base i-tiny">
      <p class="i-regular font-normal text-xl mb-1">Showcase</p>
      {#each Showcase as item, index}
        <div class="page-container">
          <p>{item[0]}</p>
        </div>
      {/each}
    </div>
    <div class="flex flex-col font-thin text-base i-tiny">
      <p class="i-regular font-normal text-xl mb-1">About Us</p>
      {#each AboutUs as item, index}
        <div class="page-container">
          <p>{item[0]}</p>
        </div>
      {/each}
    </div>
    <div class="flex flex-col font-thin text-base i-tiny">
      <p class="i-regular font-normal text-xl mb-1">Developers</p>
      {#each Developers as item, index}
        <div class="page-container">
          <p>{item[0]}</p>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .page-container p:hover {
    cursor: pointer;
    color: var(--color-sky-blue);
  }

  .vertical-line {
    width: 2px;
    height: 8rem;
    color: var(--color-white);
    background-color: var(--color-white);
    transition: width 0.3s ease-in-out; /* Add this line for the transition effect */
  }
</style>
