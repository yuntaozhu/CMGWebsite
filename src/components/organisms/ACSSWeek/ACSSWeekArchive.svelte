<script>
  const acss_weeks = [
    {
      title: "ACSS Week 2024: Mind Hive",
      blurb: "Swarming the Future",
      image: "",
      url: "/",
    },
    {
      title: "ACSS Week 2023: Defragment",
      blurb: "Piece the world with Technology",
      image: "/acss_week_2021.webp",
      url: "https://acssweek.acssuplb.org/",
    },
    {
      title: "ACSS Week 2021: Transcend",
      blurb: "Lift off to New Techs",
      image: "/acss_week.webp",
      url: "https://acssuplb.org/acss-week-2021/",
    },
  ];
  /**
   * @param {string} title
   */
  function toDash(title) {
    return (title = title.replace(/ /g, "-"));
  }
</script>

<div
  class="acssweek flex flex-col justify-center items-center h-fit p-10 md:p-20"
>
  <h3>ACSS Week</h3>
  <div class="w-100 lg:w-2/3 xl:w-2/3">
    <p class="text-base">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </div>

  <div class="flex flex-col gap-5">
    <div
      class="margin-0 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-center items-start gap-8 xl:gap-10 mt-10 z-10"
    >
      {#each acss_weeks as content}
        <a href={content.url} class="hover-card">
          <div class="flex flex-col items-center gap-4">
            <div
              class="box-container w-full sm:w-[450px] h-[300px] md:w-[480px] md:h-[320px] overflow-hidden rounded-2xl flex-shrink-1"
            >
              <img
                src={content.image}
                alt=""
                class="w-full h-full rounded-2xl object-cover object-top"
              />
            </div>
            <div
              class="text-container border border-[#3E3B4C] w-full sm:w-[450px] md:w-[480px] h-[150px] rounded-2xl border-solid flex items-center"
            >
              <div class="content-container px-8">
                <div class="flex flex-col justify-center">
                  <div>
                    <h3
                      class="text-title text-lg lg:text-xl font-bold text-white"
                    >
                      {content.title}
                    </h3>
                  </div>
                  <div>
                    <h4
                      class="text-blurb font-normal text-sm lg:text-base text-[gray]"
                    >
                      {content.blurb}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>

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
