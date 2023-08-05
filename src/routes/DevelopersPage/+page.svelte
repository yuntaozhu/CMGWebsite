<script>
  import {
    Executives,
    MembersRoster,
    ResidentMembers,
    NavBar,
    Footer,
  } from "$components";
</script>

<div class="container">
  <NavBar />
  <Executives />
  <MembersRoster />
  <ResidentMembers />
  <Footer />
</div>

<style>
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
