<script>
  import {
    CoreValues,
    History,
    Mission,
    Vision,
    NavBar,
    Footer,
  } from "$components";
</script>

<div class="container">
  <NavBar />
  <CoreValues />
  <History />
  <Mission />
  <Vision />
  <Footer />
</div>

<style>
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
