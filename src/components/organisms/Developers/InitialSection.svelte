<!-- InitialSection.svelte -->
<script>
  import {slide, fade} from 'svelte/transition';

  const gallery_items = [
    { url: "2.jpg", description: "Dog",},
    { url: "herin.png", description: "Building",},
    { url: "herin.png", description: "Staircase",},
    { url: "2.jpg", description: "Staircase",},
  ];
  let currentSlideItem = 0;
  function nextImage() {
    currentSlideItem = (currentSlideItem + 1) % gallery_items.length;
  }
  
  // Automatically change the image every 3 seconds
  let interval;
  
  function startAutoSlide() {
    interval = setInterval(nextImage, 3000);
  }
  
  startAutoSlide(); // Start the automatic slideshow
</script>


<section class="container mx-auto relative pt-8">
  <div class="flex flex-col min-h-[85vh] mx-4 pt-10 gap-5 md:flex-row md:align-center md:justify-evenly md:gap-10 2xl:gap-2">
    
      <!-- Left side: Slideshow with Fade Animation -->
        <div class="relative flex flex-row mx-auto my-auto">
          <div class="absolute flex top-[-40px] right-[-45px]">
            <img src="Hexagon Gradient.svg" alt="Hexagon" class="max-w-[100%] w-24"/>
          </div>
  
          <div class="absolute bottom-[-40px] left-[-45px]">
            <img src="Hexagon Gradient.svg" alt="Hexagon" class="max-w-[100%] w-24"/>
          </div>
  
          <div class="slideshow pt-4 ss:pt-0 md:pt-0 flex justify-center items-center md:flex-1 3xl:max-w-screen-sm w-[300px] h-[350px]">
            <!-- Reference: https://cloudinary.com/blog/how-to-create-a-carousel-in-3-ways-in-svelte -->
            {#each [gallery_items[currentSlideItem]] as item (currentSlideItem)}
              <img in:slide out:fade src={item.url} alt={item.description} class="w-full h-full object-cover rounded-2xl ax-w-xs 2xl:max-w-sm 3xl:max-w-lg m-auto"/>
            {/each}
          </div>
  
          <div class="absolute top-[40px] right-[-30px]">
            <img src="Hexagon Gradient.svg" alt="Hexagon" class="max-w-[100%] w-16"/>
          </div>
  
          <div class="absolute bottom-[40px] left-[-30px]">
            <img src="Hexagon Gradient.svg" alt="Hexagon" class="max-w-[100%] w-16"/>
          </div>
      </div>

      <!-- Right side: Text and scroll icon -->
      <div class="flex flex-col md:justify-center md:flex-1 gap-6 md:max-w-xl 3xl:max-w-2xl pt-4">
          <div class="flex flex-col gap-1">

              <!-- "Meet the Team" text -->
              <h1 class="text-4xl font-bold leading-tight lg:text-5xl md:leading-snug tracking-wide text-center md:text-left">
                  Meet the Team
              </h1>

              <!-- Description text -->
              <p class="font-light text-slate-200 md:max-w-sm text-sm 3xl:text-base 3xl:max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>

          </div>
    </div>
  </div>
  <div class="w-8 h-10 border-2 rounded-full m-auto pt-2 mt-6 sm:mt-0 mb-10">
    <div class="w-1 h-3 bg-white rounded-md animate-bounce m-auto" />
</div>
</section>

<style>
    .slideshow {
    filter: drop-shadow(0px 4px 4px #000000);
    border-radius: 16px;
    border: 0.01rem solid rgba(255, 255, 255, 0.1);
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 100%
    );
  }
</style>