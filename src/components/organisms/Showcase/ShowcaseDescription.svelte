<script>
    export let contents = "";
    export let contentTitle = "";


    import { data } from "./data";

</script>

<section class="px-5">
  {#each data[contents] as content}
    {#if content.title.toLowerCase() === contentTitle}
      <div class="description-content ">
        <div class="description-container" >
            <div class="description-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center ">
                <div class="h-full">
                    <div>
                        <h4 class="text-4xl lg:text-5xl font-bold text-white">Description</h4>
                    </div>
                    
                </div>

                <div class="xl:w-[500px]">
                    <h5 class=" text-sm md:text-base font-normal text-white">{content.description}</h5>
                </div>
            </div>
        </div>
    </div>
    {/if}

  {/each}

</section>

<style>
  /* Small screen */
  @media (max-width: 640px) {
    .description-content {
      padding-top: 1rem;


    }
    .description-grid {
      gap: 2rem;
    }

  }

  /* Medium screen */
  @media (min-width: 641px) and (max-width: 767px) {
    .description-content {
      padding-top: 2rem;

    }
    .description-grid {
      gap: 2.5rem;
    }

  }

  /* Large screen */
  @media (min-width: 768px) and (max-width: 1023px) {
    .description-content {
      padding-top: 3rem;

    }

    .description-grid {
      gap: 3rem;
    }

  }

  /* Extra large screen */
  @media (min-width: 1024px) {
    .description-content {
      padding-top: 4rem;


    }
    .description-grid {
      gap: 4rem;
    }

  }
</style>