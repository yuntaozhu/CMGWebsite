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
  import GradientBlur from "../components/molecules/Home/GradientBlur.svelte";
</script>

<head>
  <title>The Alliance of Computer Science Students</title>
</head>

<div
  class="overflow-hidden w-full bg-base-black px-5 lg:px-10 flex flex-col gap-10"
>
  <GradientBlur />
  <Hero />
  <Summary />
  <IncomingActivity />
  <DevStories />
</div>
