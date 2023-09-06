<script>
    import { memberRoster } from './roster.js';
    import MemberRosterContainer from './MemberRosterContainer.svelte';
</script>

<div class="container mx-auto scrollFadeIn">
    <h1 class="text-5xl font-bold leading-tight lg:text-6xl md:leading-snug tracking-wide text-center" id="member-roster">
        Member Roster
    </h1>

    <div class="pt-5 px-0 flex flex-col items-center justify-center">
        {#each memberRoster as roster}
          <MemberRosterContainer roster={roster} />
        {/each}
    </div>
</div>