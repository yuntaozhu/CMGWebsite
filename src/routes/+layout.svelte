<script>
  import "../app.css";
  import { NavBar, Footer, ChatBot } from "$components";
  import GradientBlur from "$components/molecules/Home/GradientBlur.svelte";
</script>

<NavBar />
<GradientBlur />
<!-- <ChatBot /> -->
<slot />
<Footer />
