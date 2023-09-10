<script>
    // Import necessary data and components
    import { memberRoster } from './roster.js';
    import MemberRosterContainer from './MemberRosterContainer.svelte';
</script>

<div class="container mx-auto scrollFadeIn">
    <!-- Title for the Member Roster section -->
    <h1 class="text-4xl font-bold leading-tight lg:text-5xl md:leading-snug tracking-wide text-center" id="member-roster">
        Member Roster
    </h1>

    <div class="pt-5 px-0 flex flex-col items-center justify-center">
        <!-- Loop through the memberRoster array and render MemberRosterContainer for each batch -->
        {#each memberRoster as roster}
            <MemberRosterContainer roster={roster} />
        {/each}
    </div>
</div>
