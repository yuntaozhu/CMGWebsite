<script>
  import {
    BriefShowcase,
    Contributions,
    DevStories,
    Hero,
    IncomingActivity,
    Strengths,
    Summary,
    NavBar,
    Footer,
  } from "$components";
</script>

<div class="container">
  <NavBar />
  <Hero />
  <Summary />
  <IncomingActivity />
  <DevStories />
  <Contributions />
  <Strengths />
  <BriefShowcase />
  <Footer />
</div>

<style>
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
