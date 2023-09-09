<script>
// @ts-nocheck

    import { data } from "./data";
    export let contents;

    function toDash(title){
       return title = title.replace(/ /g,'-')
    }
    
</script>
  
<style>
    /* Define the hover effect for .hover-card */
    .hover-card {
        transition: transform 0.3s ease-in-out;
        transform: scale(1); /* Default scale */
    }

    .hover-card:hover {
        transform: scale(1.05); /* Scale up on hover */
    }
</style>

<div class="margin-0 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-center items-start gap-8 xl:gap-10 mt-10 z-10">
    {#each data[contents] as content }
        <a href="/showcase/{contents}-{toDash(content.title.toLowerCase())}" class="hover-card">
            <div class="flex flex-col items-center gap-4">
                <div class="box-container w-full sm:w-[450px] h-[300px] md:w-[480px] md:h-[320px] overflow-hidden rounded-2xl flex-shrink-1">
                    <img src={content.images[0]} alt="" class="w-full h-full rounded-2xl object-cover object-top">
                </div>
                <div class="text-container border border-[#3E3B4C] w-full sm:w-[450px] md:w-[480px] h-[150px] rounded-2xl border-solid flex items-center">
                    <div class="content-container px-8">
                        <div class="flex flex-col justify-center">
                            <div>
                                <h3 class="text-title text-lg lg:text-xl font-bold text-white">{content.title}</h3>
                            </div>
                            <div>
                                <h4 class="text-blurb font-normal text-sm lg:text-base text-[gray]">{content.blurb}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    {/each}
</div>