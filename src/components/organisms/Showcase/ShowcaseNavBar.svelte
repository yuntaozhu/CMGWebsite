<script>
// @ts-nocheck

    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    export let tabs;
    export let activeTab;
</script>

<div class='showcase-navbar'>
    <!-- tabs -->
    <ul class="navbar-text flex space-x-6 md:space-x-20 font-normal justify-center text-white">
        {#each tabs as tab}
            <li on:click={() => dispatch('tabChange', tab)} class = "hover:cursor-pointer">
                <div class:active={tab === activeTab}>{tab}</div>
            </li>
        {/each}
    </ul>
</div>

<style>
    .active{
        color:aquamarine
    }
    @media (max-width: 640px) {
        .navbar-text {
            font-size: 16px;
            font-family: Montserrat;
            line-height: 4.25rem;

        }
    }

    @media (min-width: 641px) and (max-width: 767px) {
        .navbar-text {
            font-size: 20px;
            font-family: Montserrat;
            line-height: 4.25rem;

        }
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        .navbar-text {
            font-size: 25px;
            font-family: Montserrat;
            line-height: 4.25rem;

        }
    }
   
    @media (min-width: 1024px) {
        .navbar-text {
            font-size: 25px;
            font-family: Montserrat;
            line-height: 4.25rem;

        }
    }
</style>
