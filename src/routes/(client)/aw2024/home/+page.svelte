<script>
  import { onMount } from "svelte";
  import { setAcssWeekStatusTrue } from "$lib/stores";
  import { AW24Home } from "../../../../aw2024-components/index.js";

  onMount(() => {
    setAcssWeekStatusTrue();
  });
</script>

<head>
  <title>About Us - The Alliance of Computer Science Students UPLB</title>
  <meta
    name="title"
    content="About Us - The Alliance of Computer Science Students UPLB"
  />
  <meta
    property="og:title"
    content="About Us - The Alliance of Computer Science Students UPLB"
  />
  <meta
    property="twitter:title"
    content="About Us - The Alliance of Computer Science Students UPLB"
  />
  <meta
    name="description"
    content="Learn about the mission, vision, history, and dedicated team behind The Alliance of Computer Science Students - UPLB. Discover our core values and commitment to academic excellence."
  />
  <meta
    property="og:description"
    content="Learn about the mission, vision, history, and dedicated team behind The Alliance of Computer Science Students - UPLB. Discover our core values and commitment to academic excellence."
  />
  <meta
    property="twitter:description"
    content="Learn about the mission, vision, history, and dedicated team behind The Alliance of Computer Science Students - UPLB. Discover our core values and commitment to academic excellence."
  />
</head>

<div class="relative flex items-center justify-center min-h-screen">
  <div class="relative z-10 text-center">
    <AW24Home />
  </div>
</div>

<style>
</style>
