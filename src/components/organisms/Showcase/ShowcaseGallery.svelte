

<script>
// @ts-nocheck

  export let contents = "";
  export let contentTitle = "";


  import { data } from "./data";
  //const images =  ["/acss_uplb_website.webp", "/acss_uplb_website_02.webp", "/acss_uplb_website_03.webp", "/acss_uplb_website_04.webp"]
</script>

<section class = "gallery px-5">
  <div class = "gallery-container bg-none grid grid-cols-4  md:grid-cols-2 lg:grid-cols-3 justify-center items-start gap-2 md:gap-4 lg:gap-4 xl:gap-4 ">
    {#each data[contents] as content}
      {#if content.title.toLowerCase() === contentTitle}
        {#each content.images as image}
          <div class="image-container relative block overflow-hidden transform transition-transform rounded-2xl hover:scale-105">
            <img src="{image}" class="gallery-img w-[300px] md:w-[360px] h-[100px] md:h-[240px] object-cover  " alt=''/>
          </div>
        {/each}
      {/if}
    {/each}


</section>


<style>
  .image-container:hover{
    box-shadow: 0 0 100px rgba(59, 127, 239, 0.5);
    transition: box-shadow 0.5s ease-in-out;
  }

  @media (max-width: 640px){
    .gallery-container {
      padding-top: 1rem;
    }
  }

  @media (min-width: 641px) and (max-width: 767px){
    .gallery-container {
      padding-top: 2rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px){
    .gallery-container {
      padding-top: 3rem;
    }
  }

  @media (min-width: 1024px){
    .gallery-container {
      padding-top: 4rem;
    }
  

  }
</style>