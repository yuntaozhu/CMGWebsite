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

<section class="scrollFadeIn py-32">
  <div class="flex flex-col items-center gap-10 md:gap-14 relative">
    <DevStoriesHeader />
    <!-- Gradient Shapes at the Back -->
    <!-- Ellipse Top -->
    <img
      src="/assets/gradient-ellipse.svg"
      alt="Gradient Ellipse"
      class="absolute w-[70px] top-[20%] md:top-[25%] left-[75%] origin-center rotate-45"
    />

    <!-- Ellipse Bottom -->
    <img
      src="/assets/gradient-ellipse.svg"
      alt="Gradient Ellipse"
      class="absolute w-[45px] top-[80%] sm:top-[65%] left-[35%] opacity-40"
    />

    <!-- Hexagon Left -->
    <img
      src="/assets/gradient-hexagon.svg"
      alt="Gradient Hexagon"
      class="absolute w-[140px] top-[34%] md:top-[78%] left-[-8%] md:left-[5%] 2xl:left-[15%]"
    />

    <!-- Hexagon Right -->
    <img
      src="/assets/gradient-hexagon-2.svg"
      alt="Gradient Hexagon"
      class="absolute w-[70px] top-[50%] left-[90%] md:top-[95%] md:left-[70%]"
    />

    <swiper-container
      class="mySwiper w-full h-full"
      pagination="true"
      pagination-clickable="true"
      navigation="false"
      space-between="30"
      centered-slides="true"
      autoplay-delay="5500"
      autoplay-disable-on-interaction="false"
    >
      {#each stories as [name, [position, story]]}
        <swiper-slide class="flex justify-center items-center"
          ><div class="block w-full h-full object-cover">
            <DevStoriesTemplate {name} {position} {story} />
          </div></swiper-slide
        >
      {/each}
    </swiper-container>
  </div>
</section>

<style>
  swiper-container::part(bullet-active) {
    background-color: var(--color-dark-sky-blue);
  }

  /* Style the custom navigation buttons */
  swiper-container::part(button-prev),
  swiper-container::part(button-next) {
    background: transparent; /* Remove any background color */
    color: rgba(0, 0, 0, 0); /* Set the text color to transparent */
    width: 40px; /* Set the width of the buttons */
    height: 40px; /* Set the height of the buttons */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  swiper-container::part(button-prev) {
    background-image: url("/assets/left-arrow.svg");
    background-repeat: no-repeat;
  }

  swiper-container::part(button-next) {
    background-image: url("/assets/right-arrow.svg");
    background-repeat: no-repeat;
    background-position: top right;
  }
</style>
