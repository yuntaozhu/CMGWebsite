<script>
  import {
    InitialSection,
    ResidentMembers,
    MembersRoster,
  } from "$components";
  import UnderlinedText from "$components/atoms/UnderlinedText.svelte";

</script>

<div class="overflow-hidden w-full bg-base-black px-5 lg:px-10 flex flex-col gap-10 pb-40 z-15">
    <InitialSection />
    <ResidentMembers />
    <!-- <UnderlinedText text='' isFixed={true} width={100} tailwindcustomization=""/> -->
    <MembersRoster />
</div>
