<script>
  import {
    Hero,
    Summary,
    IncomingActivity,
    DevStories,
    Contributions,
    Strengths,
    BriefShowcase,
  } from "$components";
  import Partnership from "$components/organisms/Home/Partnership.svelte";
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