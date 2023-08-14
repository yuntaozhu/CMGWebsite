<script>
  import { DevStoriesHeader, DevStoriesTemplate } from "$components";
  let placeholderText = `Lorem ipsum dolor sit amet consectetur. Blandit sed nunc urna odio.
            Faucibus integer in condimentum quam auctor nec. Cras rutrum nisl
            interdum id dictum pellentesque purus egestas rhoncus. Tellus
            vestibulum pellentesque volutpat tristique scelerisque nibh erat sed
            sollicitudin. Augue fermentum curabitur eget turpis.`;
  let pT = `Lorem ipsum dolor sit amet consectetur. Blandit sed nunc urna odio. Faucibus integer in condimentum quam auctor nec. Cras rutrum nisl interdum id dictum pellentesque purus egestas rhoncus. Tellus vestibulum pellentesque volutpat tristique scelerisque nibh erat sed sollicitudin. Augue fermentum curabitur eget turpis. Tellus vestibulum pellentesque volutpat tristique scelerisque nib`;
  let placeholderPosition = "Current ACSS Position";

  let devStories = {
    "Juan Dela Cruz": [placeholderPosition, pT],
    "John Doe": [placeholderPosition, placeholderText],
    "Jane Smith": [placeholderPosition, placeholderText],
  };
  let stories = Object.entries(devStories);
</script>

<section class="py-24">
  <div class="flex flex-col items-center gap-10 md:gap-14 relative">
    <DevStoriesHeader />

    <!-- <DevStoriesTemplate
      name="Juan Dela Cruz"
      position="Current ACSS Position"
      story={placeholderText}
    /> -->

    <!-- Gradient Shapes at the Back -->
    <!-- Ellipse Top -->
    <img
      src="/assets/gradient-ellipse.svg"
      alt="Gradient Ellipse"
      class="absolute w-[70px] top-[-4%] md:top-[-10%] left-[75%] origin-center rotate-45"
    />

    <!-- Ellipse Bottom -->
    <img
      src="/assets/gradient-ellipse.svg"
      alt="Gradient Ellipse"
      class="absolute w-[45px] top-[80%] sm:top-[65%] left-[35%] opacity-60"
    />

    <!-- Hexagon Left -->
    <img
      src="/assets/gradient-hexagon.svg"
      alt="Gradient Hexagon"
      class="absolute w-[140px] top-[34%] md:top-[68%] left-[-8%] md:left-[10%] 2xl:left-[15%]"
    />

    <!-- Hexagon Right -->
    <img
      src="/assets/gradient-hexagon-2.svg"
      alt="Gradient Hexagon"
      class="absolute w-[70px] top-[50%] left-[90%] md:top-[84%] md:left-[70%]"
    />

    <swiper-container
      class="mySwiper"
      pagination="true"
      pagination-clickable="true"
      navigation="true"
      space-between="30"
      centered-slides="true"
      autoplay-delay="2500"
      autoplay-disable-on-interaction="false"
    >
      {#each stories as [name, [position, story]]}
        <swiper-slide
          ><div>
            <DevStoriesTemplate {name} {position} {story} />
          </div></swiper-slide
        >
      {/each}
    </swiper-container>
  </div>
</section>

<style>
  swiper-container {
    width: 100%;
    height: 100%;
  }

  swiper-slide {
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  swiper-slide div {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
