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
  <title>The Alliance of Computer Science Students UPLB</title>
  <meta name="title" content="The Alliance of Computer Science Students UPLB" />
  <meta
  property="og:title"
  content="The Alliance of Computer Science Students UPLB"
  />
  <meta
  property="twitter:title"
  content="The Alliance of Computer Science Students UPLB"
  />
  <meta name="description" content="Discover boundless opportunities and innovation with The Alliance of Computer Science Students - UPLB, an official academic organization at the University of the Philippines Los Baños. Join our visionary community and help shape a future where dreams become reality." />
  <meta
    property="og:description"
    content="Discover boundless opportunities and innovation with The Alliance of Computer Science Students - UPLB, an official academic organization at the University of the Philippines Los Baños. Join our visionary community and help shape a future where dreams become reality."
  />
  <meta
    property="twitter:description"
    content="Discover boundless opportunities and innovation with The Alliance of Computer Science Students - UPLB, an official academic organization at the University of the Philippines Los Baños. Join our visionary community and help shape a future where dreams become reality."
  />
</head>

<div
  class="overflow-hidden w-full px-5 lg:px-10 flex flex-col gap-10 pb-40"
>
  <Hero />
  <Summary />
  <IncomingActivity />
  <DevStories />
  <Strengths />
  <Contributions />
  <BriefShowcase />
  <Partnership />
</div>
