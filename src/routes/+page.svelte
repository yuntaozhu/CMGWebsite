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
  <title>The CMG Organization UPLB</title>
  <meta name="title" content="The CMG Organization UPLB" />
  <meta
    property="og:title"
    content="The CMG Organization UPLB"
  />
  <meta
    property="twitter:title"
    content="The CMG Organization UPLB"
  />
  <meta
    name="description"
    content="Discover boundless opportunities and innovation with The CMG Organization - UPLB, an official academic organization at the University of the Philippines Los Baños. Join our visionary community and help shape a future where dreams become reality."
  />
  <meta
    property="og:description"
    content="Discover boundless opportunities and innovation with The CMG Organization - UPLB, an official academic organization at the University of the Philippines Los Baños. Join our visionary community and help shape a future where dreams become reality."
  />
  <meta
    property="twitter:description"
    content="Discover boundless opportunities and innovation with The CMG Organization - UPLB, an official academic organization at the University of the Philippines Los Baños. Join our visionary community and help shape a future where dreams become reality."
  />
</head>

<div
  class="overflow-hidden w-full lg:px-10 flex flex-col gap-10 pb-40 -mb-8 relative z-20"
>
  <div class="px-5">
    <Hero />
    <Summary />
    <!-- <IncomingActivity /> -->
    <DevStories />
    <Strengths />
    <Contributions />
    <BriefShowcase />
  </div>
  <Partnership />
</div>
