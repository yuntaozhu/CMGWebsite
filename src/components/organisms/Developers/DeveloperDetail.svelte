<script>
    export let developer;
    export let closeModal;

    import Carousel from './Carousel.svelte'

    function onCloseButtonClick() {
        closeModal(); // Call the closeModal function passed from the parent
    }
</script>

<div class="modal fixed inset-0 items-center justify-center z-10 backdrop-blur mx-auto my-auto px-36 ">
    
    <div class="flex flex-col min-h-screen gap-5 md:flex-row md:align-center md:justify-between md:gap-20 full-height py-36 px-4 md:px-8 lg:px-16 xl:px-20">

        <div class="photo relative">
            <div class="mask1 w-[400px] h-[400px]">
                <img src={developer.imageSrc} alt={developer.nickname} class="w-full h-full object-cover">
            </div>
        
            <!-- Close button -->
            <div class="close-btn bottom-[239px] left-[-6px] mx-auto items-center justify-center absolute">
                <button class="flex flex-col justify-between h-full gap-1 relative" on:click={onCloseButtonClick}>
                    <div class="inside absolute inset-0 flex flex-col items-center justify-center hover:scale-110 transition-transform">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <div>
                            <span class="text-white">Close</span>
                        </div>
                    </div>
                    <div>
                        <img src="Hexagon Gradient.svg" alt="close-btn" class="w-[91px] h-[91px]"/>
                    </div>
                </button>
            </div>
        </div>
        

        <!-- Developer information -->
        <div class="details">
            <div class="glassmorphic drop-shadow-md border-[1rem] rounded-2xl border-opacity-10 h-[380px] w-[380px] mx-auto my-auto px-9 py-9">
              <div class="flex flex-col justify-between h-full gap-2"> <!-- Use flex and justify-between to span content from top to bottom -->
          
                <div class="flex flex-col items-center justify-center">
                  <h2 class="text-base-sky-blue text-2xl font-bold text-center">{developer.fullName}</h2>
                  <p class="font-semibold">{developer.batch}</p>
                </div>

                <div class="bio justify-center flex-col items-center">
                  <p>{developer.bio}</p>
                </div>

                <!-- Skills Carousel -->
                <div class="skills flex-wrap flex-col justify-center items-center">
                    <p class="text-base-sky-blue mb-2 font-semibold">Skills:</p>

                    {#if developer.skills.length == 1}
                        <div class="flex flex-wrap gap-2">
                            <div class="glassmorphic flex-auto rounded-lg py-1 px-1 mb-1 items-center justify-center">
                                <p class="text-center">{developer.skills}</p>
                            </div>
                        </div>
                    {:else}
                        <div class="skills-carousel-container">
                            <Carousel autoplay="2000">
                                {#each developer.skills as skill, index (index)}
                                    <div class="glassmorphic flex flex-wrap rounded-lg py-1 px-1 mb-1 items-center justify-center">
                                        <p class="text-center">{skill}</p>
                                    </div>
                                {/each}
                            </Carousel> 
                        </div>
                    {/if}
                </div>
          
                <div class="contacts flex-col items-end">
                  <p class="text-base-sky-blue mb-2 font-semibold">Contacts:</p>
                  <div class="icon-container flex flex-row items-center justify-center gap-6" style="transition: transform 0.5s;">
                    <a href={developer.contacts.gmail} target="_blank">
                      <img src="assets/gmail-icon.png" alt="Gmail" class="icon-image">
                    </a>
                    <a href={developer.contacts.github} target="_blank">
                      <img src="assets/github-icon.png" alt="GitHub" class="icon-image">
                    </a>
                    <a href={developer.contacts.linkedin} target="_blank">
                      <img src="assets/linkedin-icon.png" alt="LinkedIn" class="icon-image">
                    </a>
                  </div>
                </div>
          
              </div>
            </div>
          </div>          
    </div>
</div>

<style>
    .modal {
        background: linear-gradient(
            135deg,
            rgba(16, 17, 44, 0.663) 0%,
            rgba(17, 28, 32, 0.8) 100%
        );
    }

    .photo{
        filter: drop-shadow(0px 1px 1px #000000);
    }

    .mask1 {
        -webkit-mask-image: url('assets/honeycomb.png');
        mask-image: url('assets/honeycomb.png');
        -webkit-mask-size: 100%;
        mask-size: 100%;
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
    }

    .glassmorphic {
        filter: drop-shadow(0px 8px 8px #000000);
        border: 0.05rem solid rgba(255, 255, 255, 0.1);
        background: linear-gradient(
        135deg,
        rgba(223, 203, 203, 0.231) 0%,
        rgba(44, 78, 104, 0.42) 100%
        );
    }

    .icon-image {
        width: 25px;
        height: 25px;
        -webkit-clip-path: url(#mask);
        clip-path: url(#mask);
        transition: transform 0.3s ease-in-out;
    }

    .icon-image:hover {
        transform: scale(1.2); /* Add a hover effect to scale the icons */
    }
</style>