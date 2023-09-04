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

    // Function to handle smooth scrolling
    function scrollToSection(sectionId) {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            const offset = targetSection.offsetTop - 75; // Adjust the offset as needed
            window.scrollTo({
                top: offset,
                behavior: 'smooth',
            });
        }
    }
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
  
          <div class="slideshow ss:pt-0 md:pt-0 flex justify-center items-center md:flex-1 3xl:max-w-screen-sm w-[300px] h-[350px]">
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
          <div class="flex flex-col gap-3">

              <!-- "Meet the Team" text -->
              <h1 class="text-4xl font-bold leading-tight lg:text-5xl md:leading-snug tracking-wide text-center">
                  Meet the Team
              </h1>

              <!-- Description text -->
              <p class="font-light text-slate-200 text-sm 3xl:text-base 3xl:max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>

              <div class="flex justify-center items-center space-x-4">
                <button
                class="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-4 py-2 rounded-2xl hover:from-blue-500 hover:scale-105 hover:shadow-md transition duration-300 ease-in-out"
                on:click={() => scrollToSection('executives')}
                >
                  See Members
                </button>
                
                <button
                  class="bg-transparent border-2 border-gradient-to-r from-blue-700 to-blue-500 text-white px-4 py-2 rounded-2xl hover:shadow-md hover:scale-105 transition duration-300 ease-in-out"
                  on:click={() => scrollToSection('member-roster')}
                >
                  See Roster
                </button>
              
              </div>

          </div>
    </div>
  </div>
  <div class="w-8 h-10 rounded-full m-auto pt-2 mt-6 sm:mt-0 mb-10 mouse-icon">
    <div class="w-1 h-3 bg-black rounded-md animate-bounce m-auto" />
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

  .mouse-icon {
    background: radial-gradient(95.06% 95.06% at 46.57% 5.58%, rgba(209, 226, 241, 0.78) 0%, rgba(242, 247, 252, 0.755031) 25%, rgba(180, 211, 238, 0.63375) 50%, rgba(152, 195, 233, 0.605312) 75%, rgba(40, 68, 92, 0.78) 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
</style>