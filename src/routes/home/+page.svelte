<script>
  import { Hero, Summary, IncomingActivity } from "$components";
  import NavBarTemp from "../../components/molecules/Home/NavBarTemp.svelte";
  import GradientBlur from "../../components/molecules/Home/GradientBlur.svelte";
</script>

<NavBarTemp />
<div class="overflow-hidden w-full h-full bg-base-black px-10 pb-10">
  <GradientBlur />
  <Hero />
  <Summary />
  <IncomingActivity />
</div>
