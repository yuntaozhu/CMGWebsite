<script>
  // Importing components
  import { InitialSection, ResidentMembers, MembersRoster } from "$components";

  import { onMount } from "svelte";
  import { setAcssWeekStatusFalse } from "$lib/stores";

  export let data;
  const { teams } = data;

  onMount(() => {
    setAcssWeekStatusFalse();
  });
</script>

<title>Developers - The Alliance of Computer Science Students UPLB</title>
<div
  class="overflow-hidden w-full px-10 lg:px-10 flex flex-col gap-10 pb-40 relative z-20"
>
  <!-- Initial Section component -->
  <InitialSection />

  <!-- Resident Members component -->
  <ResidentMembers {teams} />

  <!-- Members Roster component -->
  <MembersRoster />
</div>
