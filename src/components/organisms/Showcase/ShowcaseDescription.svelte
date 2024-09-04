<script>
// @ts-nocheck

    export let contents = "";
    export let contentTitle = "";


    import { data } from "./data";

</script>

<section class="px-5">
  {#each data[contents] as content}
    {#if content.title.toLowerCase() === contentTitle}
      <div class="description-contentborder border-white">
        <div class="description-container " >
            <div class="description-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 justify-center ">


                <div class="md:w-[1000px] lg:w-[100px] xl:w-[1000px]">
                    <h5 class=" text-2xl lg:text-2xl font-bold text-white">{content.description}</h5>
                </div>
            </div>
        </div>
    </div>
    {/if}

  {/each}

</section>




<style>

  @media (max-width: 640px) {
    .description-content {
      padding-top: 1rem;


    }
    .description-grid {
      gap: 2rem;
    }

  }


  @media (min-width: 641px) and (max-width: 767px) {
    .description-content {
      padding-top: 2rem;

    }
    .description-grid {
      gap: 2.5rem;
    }

  }


  @media (min-width: 768px) and (max-width: 1023px) {
    .description-content {
      padding-top: 3rem;

    }

    .description-grid {
      gap: 3rem;
    }

  }


  @media (min-width: 1024px) {
    .description-content {
      padding-top: 4rem;


    }
    .description-grid {
      gap: 4rem;
    }

  }
</style>
