<script>
  // Importing components
  import {
    InitialSection,
    ResidentMembers,
    MembersRoster,
  } from "$components";
</script>

<div class="overflow-hidden w-full bg-base-black px-10 lg:px-10 flex flex-col gap-10 pb-40 z-15">
  <!-- Initial Section component -->
  <InitialSection />

  <!-- Resident Members component -->
  <ResidentMembers />

  <!-- Members Roster component -->
  <MembersRoster />
</div>
