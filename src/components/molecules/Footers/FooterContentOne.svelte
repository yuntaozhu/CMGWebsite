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

<div class="flex gap-10 w-2/3">
  <div class="flex flex-col font-thin text-base i-tiny text-right">
    <p class="i-regular font-normal text-xl mb-1">Contacts</p>
    <p>Third Floor, Physical Sciences Building,</p>
    <p>UPLB 4031 Los Baños, Philippines</p>
    <p>0912 345 7890</p>
    <p>acssph@gmail.com</p>
  </div>
  <div class="vertical-line h-100" />
  <!-- <div class="flex flex-col font-thin text-base i-tiny">
    <p class="i-regular font-normal text-xl mb-1">Home</p>

  </div> -->
  <div class="w-full flex flex-wrap gap-4">
    <div class="content md:w-1/2 lg:w-1/5 xl:w-1/5">
      <div class="flex flex-col font-thin text-base i-tiny">
        <p class="i-regular font-normal text-xl mb-1">Home</p>
        {#each HomePage as item, index}
          <div class="page-container">
            <p>{item[0]}</p>
          </div>
        {/each}
      </div>
    </div>
    <div class="content md:w-1/2 lg:w-1/5 xl:w-1/5">
      <div class="flex flex-col font-thin text-base i-tiny">
        <p class="i-regular font-normal text-xl mb-1">Showcase</p>
        {#each Showcase as item, index}
          <div class="page-container">
            <p>{item[0]}</p>
          </div>
        {/each}
      </div>
    </div>
    <div class="content md:w-1/2 lg:w-1/5 xl:w-1/5">
      <div class="flex flex-col font-thin text-base i-tiny">
        <p class="i-regular font-normal text-xl mb-1">About Us</p>
        {#each AboutUs as item, index}
          <div class="page-container">
            <p>{item[0]}</p>
          </div>
        {/each}
      </div>
    </div>
    <div class="content md:w-1/2 lg:w-1/4 xl:w-1/4">
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
</div>
<div class="flex gap-3 justify-end font-thin text-base i-tiny w-1/3">
  <div class="flex flex-col justify-self-around">
    <div class="flex flex-col">
      <p class="i-large-bold text-xl">Let’s Discuss What’s Next</p>
      <p>Have a question? We’d love to here from you!</p>
    </div>
    <Button onClick={handleClick}>Contact Us</Button>
  </div>
</div>

<style>
  .page-container p:hover {
    cursor: pointer;
    color: var(--color-sky-blue);
  }

  .vertical-line {
    width: 2px;
    height: 12rem;
    color: var(--color-white);
    background-color: var(--color-white);
    transition: width 0.3s ease-in-out; /* Add this line for the transition effect */
  }

  @media (min-width: 1400px) and (max-width: 1700px) {
    .content {
      max-width: 25%;
      min-width: 22%;
    }
  }
  @media (min-width: 0px) and (max-width: 1400px) {
    .content {
      max-width: 50%;
      min-width: 35%;
    }
    .vertical-line {
      height: 18rem;
    }
  }
</style>
