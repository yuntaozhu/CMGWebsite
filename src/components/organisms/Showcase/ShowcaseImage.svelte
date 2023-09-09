<script>
// @ts-nocheck

    export let contents = "";
    export let contentTitle = "";


    import { data } from "./data";

</script>


<section>
    {#each data[contents] as content}
        {#if content.title.toLowerCase() === contentTitle}
            <div class = "image-container relative block overflow-hidden  perspective-100">
                <img src="{content.images[0]}" class = "image w-screen h-[300px] md:h-[720px] xl:h-[1080px] object-cover object-top" alt=""/>
            </div>
        {/if}

    {/each}

</section>

<style>
    img.image{
        opacity: 90%;
        mask-image: linear-gradient(
            to bottom,
            rgba(10, 4, 31, 0) 0%,
            rgba(0, 0, 0, 1) 30%,
            rgba(0, 0, 0, 1) 70%,
            rgba(10, 4, 31, 0) 100%
        );
        transition: transform 0.3s ease-in-out;
      
    }




</style>

