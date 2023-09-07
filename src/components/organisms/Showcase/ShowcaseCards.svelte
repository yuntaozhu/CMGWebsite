<script>
// @ts-nocheck

    import { data } from "./data";
    export let contents;

    function toDash(title){
       return title = title.replace(/ /g,'-')
    }
    
</script>
  
<div class="margin-0  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-center items-start gap-8 xl:gap-10 mt-10 ">
    {#each data[contents] as content (content.title)}
        <a href ="/showcase/{contents}-{toDash(content.title.toLowerCase())}">   
            <div class="flex flex-col items-center gap-4 transform transition-transform hover:scale-105">
                <div class="box-container w-full sm:w-[450px] h-[300px]  md:w-[480px] md:h-[320px] overflow-hidden rounded-2xl flex-shrink-1">
                    <img src={content.images[0]} alt="" class=" w-full h-full rounded-2xl object-cover object-top">
                </div>
                <div class="text-container  border border-[#3E3B4C] w-full sm:w-[450px] md:w-[480px] h-[150px] rounded-2xl border-solid flex items-center">
                    <div class="content-container px-8">
                        <div class="flex flex-col justify-center">
                            <div>
                                <h3 class="text-title text-lg lg:text-xl font-bold text-white">{content.title}</h3>
                            </div>
                            <div>
                                <h4 class="text-blurb font-thin text-sm lg:text-base text-white">{content.blurb}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    {/each}
</div>

<style>
    /* @media (max-width: 640px) {
        .box-container

    } */
</style>