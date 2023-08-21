<script>
  import {
    Hero,
    Summary,
    IncomingActivity,
    NavBar,
    Footer,
    DevStories,
    Contributions,
    Strengths,
    BriefShowcase,
  } from "$components";
  import Partnership from "$components/organisms/Home/Partnership.svelte";

  // COPY PASTE THIS ON A PAGE TO ADD A SCROLL FADE-IN ANIMATION: (class="scrollFadeIn")
  import { onMount } from "svelte";

  function scrollFadeIn() {
    let scrollFadeInElements = document.getElementsByClassName("scrollFadeIn");

    for (let element of scrollFadeInElements) {
      if (
        element instanceof HTMLElement &&
        element.getBoundingClientRect().top <
          document.documentElement.clientHeight * 0.5 
      ) {
        element.style.opacity = "1";
      }
    }
  }

  onMount(() => {
    scrollFadeIn();
    window.addEventListener("scroll", scrollFadeIn);
    window.addEventListener("resize", scrollFadeIn);
  });
  // END OF COPY PASTE
</script>

<head>
  <title>Home</title>
</head>

<div class="overflow-hidden w-full h-full bg-base-black px-10 pb-10">
  <Hero />
  <Summary />
  <IncomingActivity />
  <!-- <DevStories /> -->
  <Strengths />
  <Contributions />
  <BriefShowcase />
  <Partnership />
</div>

<!-- <div
  class="h-screen flex items-center justify-center bg-base-dark-2 text-base-white"
>
  <div class="w-full flex flex-col items-center gap-4 px-5">
    <img
      src="/logo.webp"
      alt="The official seal of The Alliance of Computer Science Student"
      class="max-w-xs"
    />
    <h1 class="text-3xl font-bold inline-block relative text-base-white">
      Project Face <span
        class="absolute text-xs px-2 top-0 bg-base-purple font-normal text-white rounded-lg"
        >v2.0.0</span
      >
    </h1>
    <p class="max-w-lg text-center text-base-white">
      We are currently developing the new look of ACSS. See you soon!
    </p>
    {#if buttonVisible}
      <Button onClick={handleClick}>Click Me</Button>
    {/if}
    <p class="text-base-blue">{string}</p>
  </div>
</div> -->
