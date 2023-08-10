<script>
// @ts-nocheck

    import { data } from "./data";
    import {page} from '$app/stores'
    const showcaseId = $page.params.showcaseId
    export let contents;
</script>
  
<div class="margin-0 max-w-[1800px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-center items-start gap-8 xl:gap-10">
    {#each data[contents] as content (content.title)}
        
        <a href ="/Showcase/{content.title}"><div class="flex flex-col items-center gap-4 transform transition-transform hover:scale-105">
            <div class="w-full h-full rounded-2xl ">
                <img src="/acss_uplb_website.jpg" alt="" class=" rounded-2xl  object-fit">
            </div>
            <div class="box-container w-full border border-[#3E3B4C] rounded-2xl border-solid flex items-center">
                <div class="content-container px-10">
                    <div class="flex flex-col justify-center">
                        <div>
                            <h3 class="text-title text-white">{content.title}</h3>
                        </div>
                        <div>
                            <h4 class="text-blurb font-normal text-white">{content.blurb}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </a>
    {/each}
</div>


<style>
    /* Small screen */
    @media (max-width: 640px) {
        .box-container{
            height: 100px;

        }
        .text-title {
            font-size: 16px; /* Adjusted font size */
        }
        .text-blurb {
            font-size: 12px; /* Adjusted font size */
        }
    }

    /* Medium screen */
    @media (min-width: 641px) and (max-width: 767px) {
        .box-container{
            height: 100px;

        }
        .text-title {
            font-size: 18px; /* Adjusted font size */
        }
        .text-blurb {
            font-size: 14px; /* Adjusted font size */
        }
    }

    /* Large screen */
    @media (min-width: 768px) and (max-width: 1023px) {
        .box-container{
            height: 150px;

        }
        .text-title {
            font-size: 20px; /* Adjusted font size */
        }
        .text-blurb {
            font-size: 16px; /* Adjusted font size */
        }
    }

    /* Extra large screen */
    @media (min-width: 1024px) {
        .box-container{
            height: 200px;

        }
        .text-title {
            font-size: 25px; /* Adjusted font size */
        }
        .text-blurb {
            font-size: 18px; /* Adjusted font size */
        }
    }
</style>