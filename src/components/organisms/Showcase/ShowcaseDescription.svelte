<script>
    const description = "We have always wanted to reach more people. Other than our social media handles, our official website is also our official introduction to the World Wide Web. Our website is likewise a convenient way to get the latest information about our developers, our recent events and activities, and our recent projects."
</script>

<section class="relative z-1 ">
  <div class="description-content ">
      <div class="description-container" >
          <div class="description-grid grid grid-cols-1 lg:grid-cols-2 justify-center gap-5">
              <div class="h-full">
                  <div>
                      <h4 class="text-4xl font-bold text-white">Description</h4>
                  </div>
                  
              </div>

              <div class="xl:w-[500px]">
                  <h5 class="text-base font-normal text-white">{description}</h5>
              </div>
          </div>
      </div>
  </div>
</section>

<style>
  /* Small screen */
  @media (max-width: 640px) {
    .description-content {
      padding-top: 2.5rem;
      padding-right: 1.5rem;
      padding-left: 1.5rem;

    }
    .description-grid {
      gap: 2rem;
    }
    .text-4xl {
      font-size: 24px; /* Adjusted font size */
    }
    .text-base {
      font-size: 14px; /* Adjusted font size */
      line-height: 1.6;
    }
  }

  /* Medium screen */
  @media (min-width: 641px) and (max-width: 767px) {
    .description-content {
      padding-top: 4.5rem;
      padding-right: 3rem;
      padding-left: 3rem;
    }
    .description-grid {
      gap: 2.5rem;
    }
    .text-4xl {
      font-size: 28px; /* Adjusted font size */
    }
    .text-base {
      font-size: 16px; /* Adjusted font size */
    }
  }

  /* Large screen */
  @media (min-width: 768px) and (max-width: 1023px) {
    .description-content {
      padding-top: 4.5rem;
      padding-right: 3.5rem;
      padding-left: 3.5rem;
    }

    .description-grid {
      gap: 3rem;
    }
    .text-4xl {
      font-size: 36px; /* Adjusted font size */
    }
    .text-base {
      font-size: 18px; /* Adjusted font size */
    }
  }

  /* Extra large screen */
  @media (min-width: 1024px) {
    .description-content {
      padding-top: 5rem;
      padding-right: 4rem;
      padding-left: 4rem;

    }
    .description-grid {
      gap: 4rem;
    }
    .text-4xl {
      font-size: 48px; /* Adjusted font size */
    }
    .text-base {
      font-size: 18px; /* Adjusted font size */
    }
  }
</style>