<script>
  import {
    InitialSection,
    ResidentMembers,
    MembersRoster,
  } from "$components";
  import UnderlinedText from "$components/atoms/UnderlinedText.svelte";

</script>

<div class="overflow-hidden w-full px-5 lg:px-10 flex flex-col gap-10 pb-40 relative z-20">
    <InitialSection />
    <ResidentMembers />
    <!-- <UnderlinedText text='' isFixed={true} width={100} tailwindcustomization=""/> -->
    <MembersRoster />
</div>
