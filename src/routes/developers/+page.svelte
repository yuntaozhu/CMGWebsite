<script>
  import {
    InitialSection,
    ResidentMembers,
    MemberRoster,
  } from "$components";
  import UnderlinedText from "$components/atoms/UnderlinedText.svelte";

</script>

<div class="overflow-hidden w-full bg-base-black px-5 lg:px-10 flex flex-col gap-10 pb-40">
    <InitialSection />
    <ResidentMembers />
    <UnderlinedText text='' isFixed={true} width={500} tailwindcustomization=""/>
    <MemberRoster />
</div>
