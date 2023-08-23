<script>
  import {
    Activities,
    Events,
    Projects,
    Workshops,
    NavBar,
    Footer,
  } from "$components";
</script>

<div class="container">
  <NavBar />
  <Activities />
  <Events />
  <Projects />
  <Workshops />
  <Footer />
</div>

<style>
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
