<script>
  // Import statements
  import UnderlinedText from "$components/atoms/UnderlinedText.svelte";
  import HexagonGlass from "$components/molecules/Home/HexagonGlass.svelte";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  // CUSTOMIZE THIS: This is where you can modify the brief showcase ([1] Event Name, [2] URL of the event photo from static folder)
  let events = [
    [
      "CMG Week: Angela Hewitt   Wednesday, October 14, 2015 – 7:30 PM ",
      "../home-briefshowcase/case1.jpg",
      "Mesmerizing, precise, driven, gifted, these adjectives and dozens more describe Angle Hewitt,  one of the world’s leading pianists who has performed with major orchestras throughout Europe, the Americas and Asia. Her performances of Bach have drawn particular praise, she is one of the composer’s foremost interpreters of our time..",
    ],
    [
      "CMG Week: Hsiu-Jung Hou    Sunday, January 10, 2016 – 3:00 PM",
      "../home-briefshowcase/case2.jpg",
      "Born in Taipei, Taiwan,  and Cranbrook Music Guild Betty Brewster Scholar, Hsiu-jung Hou began piano study at the age of five, and entered music\n" +
      "talent class in elementary school. During junior and senior\n.",
    ],
    [
      "CMG Week: Catalyst Quartet    Wednesday, February 3, 2016 – 7:30 PM",
      "../home-briefshowcase/case3.jpg",
      "The Catalyst Quartet hailed by the New York Times at their Carnegie Hall debut as “invariably energetic and finely burnished… playing with earthy vigor” the Catalyst Quartet, prize winners of the Gianni Bergamo Classical Music Award 2012 (Switzerland) is comprised of top Laureates and alumni of the internationally acclaimed Sphinx Competition..",
    ],
    [
      "CMG Week: Sublimed",
      "../home-briefshowcase/case4.jpg",
      "One of the highly anticipated events in CMG week. An annual general quiz competition featuring sports, music, food, and more. Beyond education, we offer entertainment for students and to explore knowledge beyond computer science.",
    ],
    [
      "CMG Orientation",
      "../home-briefshowcase/case5.jpg",
      "A way of connecting with computer science enthusiasts. A means to introduce CMG and our team to the UPLB community, fostering a deeper understanding of our organization.",
    ],
    [
      "Team Building Activity",
      "../home-briefshowcase/case1.jpg",
      "An internal event to strengthen bonds among members, enhance collaboration, and develop essential skills like communication and problem-solving. Boost morale, foster a positive work environment, and propel our organization to greater heights.",
    ],
  ];
  // END OF CUSTOMIZATION

  // Variables (for ui)
  let circleBlurMargin = 0;
  let windowWidth = 0;
  $: spotlight = 1;
  let canAutoChange = true;
  /**
   * @type {string | number | NodeJS.Timer | undefined}
   */
  let interval;

  // Updates the top position of gradient blur after resize
  function updateCircleBlurMargin() {
    let circleBlur = document.getElementById("circle-blur");
    let briefShowcase = document.getElementById("brief-showcase");
    if (circleBlur && briefShowcase) {
      circleBlurMargin = circleBlur?.clientWidth * -0.08;
      circleBlur.style.top = circleBlurMargin + "px";
    }
  }

  // This handles the auto-change of spotlight
  function updateCanAutoChange() {
    canAutoChange = !canAutoChange;
  }

  // Adds reading efficiency in mobile view
  function mobileReactivity() {
    let showcasedDescription = document.getElementById("showcased-description");
    let showcasedDescriptionPos = document
      .getElementById("showcased-description")
      ?.getBoundingClientRect();

    if (windowWidth <= 1100) {
      if (
        showcasedDescription &&
        showcasedDescriptionPos &&
        showcasedDescriptionPos.top <=
          document.documentElement.clientHeight / 2 &&
        showcasedDescriptionPos.bottom >=
          document.documentElement.clientHeight / 2
      ) {
        canAutoChange = false;
        showcasedDescription.style.opacity = "1";
      } else if (showcasedDescription) {
        canAutoChange = true;
        showcasedDescription.style.opacity = "50%";
      }
    } else if (showcasedDescription) {
      showcasedDescription.style.opacity = "1";
      if (
        showcasedDescriptionPos &&
        showcasedDescriptionPos.top <=
          document.documentElement.clientHeight / 2 &&
        showcasedDescriptionPos.bottom >=
          document.documentElement.clientHeight / 2
      ) {
        canAutoChange = false;
      } else if (showcasedDescription) {
        canAutoChange = true;
      }
    }
  }

  // Updates the windowWidth variable
  function updateSize() {
    windowWidth = document.documentElement.clientWidth;
  }

  // Updates the event to be in spotlight
  /**
   * @param {number} newSpotlight
   */
  function updateSpotlight(newSpotlight) {
    spotlight = newSpotlight;
    let showcased = document.getElementById("showcased");
    if (showcased) {
      showcased.style.backgroundImage = `url(${events[spotlight - 1][1]})`;
    }
  }

  // 4s interval of changing event
  function newInterval() {
    clearInterval(interval);
    interval = setInterval(() => {
      if (canAutoChange) {
        if (spotlight !== 6) {
          updateSpotlight(spotlight + 1);
        } else {
          updateSpotlight(1);
        }
      }
    }, 4000);
  }

  onMount(() => {
    updateCircleBlurMargin();
    updateSize();
    updateSpotlight(1);
    newInterval();

    window.addEventListener("resize", updateCircleBlurMargin);
    window.addEventListener("resize", updateSize);
    window.addEventListener("resize", mobileReactivity);
    window.addEventListener("scroll", mobileReactivity);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", updateCircleBlurMargin);
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("resize", mobileReactivity);
      window.removeEventListener("scroll", mobileReactivity);
    };
  });
</script>

<div
  id="briefshowcase"
  class="flex flex-col gap-8 mt-[110px] mb-[40px] ml-[10%] mr-[10%] w-[80%] h-fit scrollFadeIn"
>
  <h5 class="break-words text-center">Brief Showcase</h5>
  <div
    id="brief-showcase"
    class="flex flex-row justify-center relative w-[100%] h-[100%]"
  >
    <div
      class="w-[100%] min-w-[8vw] max-w-[180px] h-fit flex flex-col items-center justify-center gap-12 mt-10"
    >
      <!-- Left Hexagonal Photos -->
      {#if windowWidth > 1100}
        {#each Array(3) as a, index}
          {#if spotlight == index + 1}
            {#if (index + 1) % 2 != 0}
              <div
                on:mouseover={() => {
                  updateSpotlight(index + 1);
                }}
                on:mouseenter={() => {
                  updateCanAutoChange();
                }}
                on:mouseleave={() => {
                  updateCanAutoChange();
                  newInterval();
                }}
              >
                <HexagonGlass
                  eventURL={events[index][1]}
                  id={index + 1}
                  isHighlighted={true}
                >
                  <div slot="image" id="hex{index + 1}" class="hex absolute" />
                </HexagonGlass>
              </div>
            {:else}
              <div
                id="left-aligned"
                on:mouseover={() => {
                  updateSpotlight(index + 1);
                }}
                on:mouseenter={() => {
                  updateCanAutoChange();
                }}
                on:mouseleave={() => {
                  updateCanAutoChange();
                  newInterval();
                }}
              >
                <HexagonGlass
                  eventURL={events[index][1]}
                  id={index + 1}
                  isHighlighted={true}
                >
                  <div slot="image" id="hex{index + 1}" class="hex absolute" />
                </HexagonGlass>
              </div>
            {/if}
          {:else if (index + 1) % 2 != 0}
            <div
              on:mouseover={() => {
                updateSpotlight(index + 1);
              }}
              on:mouseenter={() => {
                updateCanAutoChange();
              }}
              on:mouseleave={() => {
                updateCanAutoChange();
                newInterval();
              }}
            >
              <HexagonGlass
                eventURL={events[index][1]}
                id={index + 1}
                isHighlighted={false}
              >
                <div
                  slot="image"
                  id="hex{index + 1}"
                  class="hex absolute opacity-50"
                />
              </HexagonGlass>
            </div>
          {:else}
            <div
              id="left-aligned"
              on:mouseover={() => {
                updateSpotlight(index + 1);
              }}
              on:mouseenter={() => {
                updateCanAutoChange();
              }}
              on:mouseleave={() => {
                updateCanAutoChange();
                newInterval();
              }}
            >
              <HexagonGlass
                eventURL={events[index][1]}
                id={index + 1}
                isHighlighted={false}
              >
                <div
                  slot="image"
                  id="hex{index + 1}"
                  class="hex absolute opacity-50"
                />
              </HexagonGlass>
            </div>
          {/if}
        {/each}
      {/if}
    </div>
    <!-- Gradient Blur -->
    <img
      id="circle-blur"
      src="/assets/gradient-blur-ellipse.svg"
      alt="Gradient Blur Ellipse"
      class="absolute w-[600px] h-[600px] max-w-[78vw] max-h-[78vw] top-0 cursor-pointer"
      on:click={() => {
        newInterval();
        if (spotlight != 6) {
          updateSpotlight(spotlight + 1);
        } else {
          updateSpotlight(1);
        }
      }}
    />
    <div class="flex flex-col gap-6 items-center">
      <!-- Image On Spotlight -->
      <div
        id="showcased"
        class="rounded-full w-[500px] h-[500px] max-w-[64vw] max-h-[64vw] bg-[#060217]"
      />
      <!-- Title Of The Event On Spotlight -->
      <div
        id="showcase-name"
        class="flex items-center justify-center w-fit rounded-2xl cursor-pointer"
        on:click={() => {
          goto("./showcase");
        }}
      >
        <UnderlinedText
          text={events[spotlight - 1][0]}
          isFixed={false}
          width={0}
          textcustomization="text-white text-sm font-bold text-center hover:text-[#00F5F1] transition duration-500 ease"
          textboxcustomization="items-center min-w-[200px]"
        />
      </div>
    </div>
    <div
      class="w-[100%] min-w-[8vw] max-w-[180px] h-fit flex flex-col items-center justify-center gap-12 mt-10"
    >
      <!-- Right Hexagonal Photos -->
      {#if windowWidth > 1100}
        {#each Array(3) as a, index}
          {#if spotlight == index + 4}
            {#if (index + 3) % 2 != 0}
              <div
                on:mouseover={() => {
                  updateSpotlight(index + 4);
                }}
                on:mouseenter={() => {
                  updateCanAutoChange();
                }}
                on:mouseleave={() => {
                  updateCanAutoChange();
                  newInterval();
                }}
              >
                <HexagonGlass
                  eventURL={events[index + 3][1]}
                  id={index + 4}
                  isHighlighted={true}
                >
                  <div slot="image" id="hex{index + 4}" class="hex absolute" />
                </HexagonGlass>
              </div>
            {:else}
              <div
                id="right-aligned"
                on:mouseover={() => {
                  updateSpotlight(index + 4);
                }}
                on:mouseenter={() => {
                  updateCanAutoChange();
                }}
                on:mouseleave={() => {
                  updateCanAutoChange();
                  newInterval();
                }}
              >
                <HexagonGlass
                  eventURL={events[index + 3][1]}
                  id={index + 4}
                  isHighlighted={true}
                >
                  <div slot="image" id="hex{index + 4}" class="hex absolute" />
                </HexagonGlass>
              </div>
            {/if}
          {:else if (index + 3) % 2 != 0}
            <div
              on:mouseover={() => {
                updateSpotlight(index + 4);
              }}
              on:mouseenter={() => {
                updateCanAutoChange();
              }}
              on:mouseleave={() => {
                updateCanAutoChange();
                newInterval();
              }}
            >
              <HexagonGlass
                eventURL={events[index + 3][1]}
                id={index + 4}
                isHighlighted={false}
              >
                <div
                  slot="image"
                  id="hex{index + 4}"
                  class="hex absolute opacity-50"
                />
              </HexagonGlass>
            </div>
          {:else}
            <div
              id="right-aligned"
              on:mouseover={() => {
                updateSpotlight(index + 4);
              }}
              on:mouseenter={() => {
                updateCanAutoChange();
              }}
              on:mouseleave={() => {
                updateCanAutoChange();
                newInterval();
              }}
            >
              <HexagonGlass
                eventURL={events[index + 3][1]}
                id={index + 4}
                isHighlighted={false}
              >
                <div
                  slot="image"
                  id="hex{index + 4}"
                  class="hex absolute opacity-50"
                />
              </HexagonGlass>
            </div>
          {/if}
        {/each}
      {/if}
    </div>
    <div />
  </div>
  <div class="flex justify-center h-fit z-0">
    <div
      id="showcased-description"
      class="max-w-[500px] text-justify h-fit pt-20 pb-20 -mt-20 break-words indent-8 transition duration-700 font-light"
    >
      {events[spotlight - 1][2]}
    </div>
  </div>
</div>

<style>
  #showcased {
    background-size: cover;
    background-position: center;
    background-image: url("/assets/homebackground.png");
  }
  #showcase-name:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/assets/homebackground.png");
    background-image: linear-gradient(
      to right,
      rgba(75, 215, 212, 0.47) 0%,
      rgb(206, 197, 103) 10%,
      rgba(119, 129, 215, 0.3) 90%,
      rgba(83, 92, 183, 0) 100%
    );
    filter: blur(20px);
    opacity: 0;
    transition: opacity 0.3s;
  }

  #showcase-name:hover:before {
    opacity: 1;
  }

  #showcase-name {
    position: relative;
  }
  .hex {
    width: 102px;
    height: 102px;
    clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  }
  #left-aligned {
    margin-right: 103px;
  }
  #right-aligned {
    margin-left: 103px;
  }
</style>
