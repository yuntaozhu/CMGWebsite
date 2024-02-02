<script>
    // Exported props for developer data and closeModal function
    export let developer;
    export let closeModal;
  
    // Importing necessary components and functions
    import { onMount } from "svelte";
    import Carousel from "./Carousel.svelte";
    import tippy from 'tippy.js';
    import 'tippy.js/dist/tippy.css';
    import 'tippy.js/animations/scale-subtle.css';
    
    // Variable to store the initial top position for main
    let top = 0;
  
    // Function to handle closing the modal
    function onCloseButtonClick() {
      scrollableMain();
      closeModal(); // Call the closeModal function passed from the parent
    }
  
    // Function to remove the scrollbar on main
    function fixedMain() {
      let main = document.getElementById("main");
      if (main) {
        top = main.getBoundingClientRect().top;
        main.style.position = "fixed";
        main.style.top = top + "px";
        main.style.width = "100vw";
      }
    }
  
    // Function to add the scrollbar back to main
    function scrollableMain() {
      let main = document.getElementById("main");
      if (main) {
        main.style.position = "static";
        window.scrollTo({ top: top * -1, left: 0, behavior: "instant" });
        main.style.width = "auto";
      }
    }
  
    // Run the fixedMain function on component mount and handle cleanup on unmount
    onMount(() => {
      fixedMain();
      window.addEventListener("resize", fixedMain);
      return () => {
        scrollableMain();
        window.removeEventListener("resize", fixedMain);
      };
    });

    // Function to copy Gmail address to clipboard
    function copyToClipboard() {
        const gmailAddress = developer.contacts.gmail.trim();
        if (gmailAddress) {
            // Create a temporary input element to copy the text
            const tempInput = document.createElement('input');
            tempInput.value = gmailAddress;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);

            // Show a tooltip to indicate the text has been copied
            tippy(this, {
                content: 'Copied to Clipboard',
                trigger: 'click', // Show the tooltip manually
                animation: 'scale-subtle',
                theme: 'material',
                placement: 'bottom',
                arrow: false,
            }).show();
        }
    }

    // Function to determine the CSS class based on skill length
    function getSkillSize(skill) {
      if (skill.length > 34) {
        return 'text-[8px] ss:text-[12px]';
      } else if (skill.length > 27 && skill.length <= 34){
        return 'text-[9px] ss:text-[14px]';
      } else if (skill.length > 16 && skill.length <= 27){
        return 'text-[10px] ss:text-[15px]';
      } else {
        return;
      }
    }
  </script>
  
  <!-- Modal content -->
  <div
    class="top-[-100px] md:top-0 modal fixed inset-0 flex justify-center z-[100] backdrop-blur-lg bg-base-black mx-auto my-auto px-5 overflow-y-auto overflow-x-hidden md:items-center"
  >
    <div
      class="relative top-[150px] flex flex-col h-fit gap-0 md:flex-row md:align-center md:justify-between md:px-8 md:py-0 md:gap-10 md:top-0 xl:gap-20"
    >
      <!-- Developer photo -->
      <div
        class="photo top-[150px] flex items-center max-w-full min-h-fit md:top-0 md:min-h-fit xl:top-0 xl:min-h-fit"
      >
        <!-- Masked developer image -->
        <div
          class="mask1 md:w-[300px] md:h-[300px] xl:w-[400px] xl:h-[400px] w-[80vw] h-[80vw] max-w-[400px] max-h-[400px]"
        >
          <img
            src={developer.imageSrc}
            alt={developer.nickname}
            class="w-full h-full object-cover"
          />
        </div>
  
        <!-- Close button -->
        <div
          class="absolute md:w-[300px] md:h-[300px] xl:w-[400px] xl:h-[400px] w-[80vw] h-[80vw] max-w-[400px] max-h-[400px]"
        >
          <div
            class="close-btn -left-[1.3%] top-[17.5%] xl:top-[70px] xl:left-[-6px] md:top-[50px] md:left-[-6px] mx-auto items-center justify-center relative"
          >
            <button
              class="flex flex-col justify-between h-full gap-1 relative"
              on:click={onCloseButtonClick}
            >
              <div class="inside absolute inset-0 flex flex-col items-center justify-center hover:scale-110 transition-transform">
                <div class="relative top-[10%] md:top-0 xl:top-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-[6vw] h-[6vw] xl:w-[35px] xl:h-[35px] md:w-[25px] md:h-[25px] text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div>
                  <span
                    class="text-white text-[10px] md:text-[10px] xl:text-[12px]"
                    >Close</span
                  >
                </div>
              </div>
              <div>
                <img
                  src="Hexagon Gradient.svg"
                  alt="close-btn"
                  class="max-w-[91px] max-h-[91px] w-[18vw] h-[18vw] xl:w-[91px] xl:h-[91px] md:w-[70px] md:h-[70px]"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
  
      <!-- Developer information -->
      <div
        id="details"
        class="details flex pb-[10vw] justify-center md:pb-0 md:top-0 xl:pb-0 xl:top-0"
      >
        <div
          class="glassmorphic drop-shadow-md border-[1rem] rounded-2xl border-opacity-10 h-fit w-[380px] max-w-[80vw] p-9"
        >
          <div class="flex flex-col justify-between h-full gap-8">
            <!-- Developer name and batch -->
            <div class="flex flex-col items-center justify-center">
              <h2 class="text-base-sky-blue text-2xl font-bold text-center">
                {developer.fullName}
              </h2>
              <!-- Conditionally show the LinkedIn icon if there is a LinkedIn contact -->
              {#if developer.position && developer.position.trim() !== ""}
                <p class="text-sm text-slate-200 text-center">{developer.position}</p>
              {/if}
              <p class="font-semibold text-center">{developer.batch}</p>
            </div>
  
            <!-- Developer bio -->
            <div class="bio justify-center flex-col items-center max-h-14 overflow-y-auto">
              <p class="text-sm text-justify">{developer.bio}</p>
            </div>
  
            <!-- Skills Carousel -->
            <div class="skills flex-wrap flex-col justify-center items-center">
              <p class="text-base-sky-blue mb-2 font-semibold">Skills:</p>
  
              {#if developer.skills.length == 1}
                <!-- Display a single skill -->
                <div class="flex flex-wrap gap-2">
                  <div
                    class="glassmorphic flex-auto rounded-lg py-1 px-1 mb-1 items-center justify-center"
                  >
                    <p class="text-center {getSkillSize(developer.skills)}">{developer.skills}</p>
                  </div>
                </div>
              {:else}
                <!-- Display a skills carousel -->
                <div class="skills-carousel-container ">
                  <Carousel autoplay="2000">
                    {#each developer.skills as skill, index (index)}
                      <div
                        class="glassmorphic flex flex-wrap rounded-lg py-1 px-1 mb-1 items-center justify-center h-[35px]"
                      >
                        <p class="text-center {getSkillSize(skill)}">{skill}</p>
                      </div>
                    {/each}
                  </Carousel>
                </div>
              {/if}
            </div>
  
            <!-- Developer contacts -->
            <div class="contacts flex-col items-end">
                <p class="text-base-sky-blue mb-2 font-semibold">Contacts:</p>
                <div class="icon-container flex flex-row items-center justify-center gap-6" style="transition: transform 0.5s;">
            
                <!-- Conditionally show the Gmail icon if there is a Gmail contact -->
                {#if developer.contacts.gmail && developer.contacts.gmail.trim() !== ""}
                    <button on:click={copyToClipboard}>
                    <img src="assets/gmail-icon.png" alt="Gmail" class="icon-image" />
                    </button>
                {/if}
            
                <!-- Conditionally show the GitHub icon if there is a GitHub contact -->
                {#if developer.contacts.github && developer.contacts.github.trim() !== ""}
                    <a href={developer.contacts.github} target="_blank">
                    <img src="assets/github-icon.png" alt="GitHub" class="icon-image" />
                    </a>
                {/if}
            
                <!-- Conditionally show the LinkedIn icon if there is a LinkedIn contact -->
                {#if developer.contacts.linkedin && developer.contacts.linkedin.trim() !== ""}
                    <a href={developer.contacts.linkedin} target="_blank">
                    <img src="assets/linkedin-icon.png" alt="LinkedIn" class="icon-image" />
                    </a>
                {/if}
                </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <style>
    /* Styles for the modal and its content */
    .modal {
      background: linear-gradient(
        180deg,
        rgba(9, 9, 54, 0.663) 0%,
        rgba(6, 2, 23, 0.8) 100%
      );
    }
  
    /* Styles for the developer photo */
    .photo {
      filter: drop-shadow(0px 1px 1px #000000);
    }
  
    /* Styles for the masked developer image */
    .mask1 {
      -webkit-mask-image: url("assets/honeycomb.png");
      mask-image: url("assets/honeycomb.png");
      -webkit-mask-size: 100%;
      mask-size: 100%;
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
    }
  
    /* Styles for the glassmorphic effect on the developer information */
    .glassmorphic {
      filter: drop-shadow(0px 8px 8px #000000);
      border: 0.05rem solid rgba(255, 255, 255, 0.1);
      background: linear-gradient(
        135deg,
        rgba(223, 203, 203, 0.231) 0%,
        rgba(44, 78, 104, 0.42) 100%
      );
    }
  
    /* Styles for the developer contact icons */
    .icon-image {
      width: 25px;
      height: 25px;
      -webkit-clip-path: url(#mask);
      clip-path: url(#mask);
      transition: transform 0.3s ease-in-out;
    }
  
    /* Hover effect for the developer contact icons */
    .icon-image:hover {
      transform: scale(1.2);
    }
  </style>
  