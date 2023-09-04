<script>
// @ts-nocheck
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    export let tabs;
    export let activeTab;

    function handleTabClick(tab) {
        dispatch('tabChange', tab);
    }
</script>

<section class='showcase-navbar pt-5'>
    <!-- tabs -->
    <ul class="navbar-text flex justify-center gap-10 lg:gap-24 list-none">
            {#each tabs as tab}
                <li on:click={() => handleTabClick(tab)} class = "z-10"> 
                    <a href = "" class = "duration-150 text-base md:text-xl hover:text-base-sky-blue"
                    class:active={tab === activeTab}>{tab}</a>
                </li>
            {/each}
        
    </ul>
</section>

<style>
    .active{
        margin-top: 1px;
        border: 10px solid;
        border-image-slice: 1;
        border-width: 3px;
        border-left: 0;
        border-right: 0;
        border-top: 0;
        border-image-source: linear-gradient(270deg,
                rgba(46, 55, 146, 0) 0%,
                #2e3792 27.6%,
                #00f5f1 74.48%,
                rgba(0, 245, 241, 0) 100%);
        color: #00f5f1;
    }
    .active:hover{
        color: #F4F1FF;
    }

    
    /* @media (max-width: 640px) {
        .navbar-text {
            font-size: 16px;
            font-family: Montserrat;
            line-height: 4.25rem;

        }
    }

    @media (min-width: 641px) and (max-width: 767px) {
        .navbar-text {
            font-size: 18px;
            font-family: Montserrat;
            line-height: 4.25rem;

        }
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        .navbar-text {
            font-size: 20px;
            font-family: Montserrat;
            line-height: 4.25rem;

        }
    }
   
    @media (min-width: 1024px) {
        .navbar-text {
            font-size: 20px;
            font-family: Montserrat;
            line-height: 4.25rem;

        }
    } */
</style>
