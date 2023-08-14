<script>
  import UnderlinedText from "$components/atoms/UnderlinedText.svelte";
  import HexagonGlass from "$components/molecules/Home/HexagonGlass.svelte";
  import { onMount } from "svelte";

  // CUSTOMIZE THIS: This is where you can modify the brief showcase ([1] Event Name, [2] URL of the event photo from static folder)
  let events = [
    ["ACSS WEEK 2023 Sublimed", "../home-briefshowcase/briefshowcase-1.jpg"],
    ["ACSS WEEK 2023 Exhibit", "../home-briefshowcase/briefshowcase-2.jpg"],
    [
      "ACSS WEEK 2023 Company Talks",
      "../home-briefshowcase/briefshowcase-3.jpg",
    ],
    [
      "Git To The Point: A GitHub Workshop",
      "../home-briefshowcase/briefshowcase-4.jpg",
    ],
    [
      "Ad Astra: An ACSS-UPLB Orientation",
      "../home-briefshowcase/briefshowcase-5.jpg",
    ],
    [
      "BSCS Freshie Kumustahan 2022",
      "../home-briefshowcase/briefshowcase-6.jpg",
    ],
  ];
  // END OF CUSTOMIZATION

  let circleBlurMargin = 0;
  let windowWidth = 0;
  $: spotlight = 1;
  let canAutoChange = true;

  function updateCircleBlurMargin() {
    let circleBlur = document.getElementById("circle-blur");
    let briefShowcase = document.getElementById("brief-showcase");
    if (circleBlur && briefShowcase) {
      circleBlurMargin = circleBlur?.clientWidth * -0.08;
      circleBlur.style.top = circleBlurMargin + "px";
      briefShowcase.style.opacity = "100%";
    }
  }

  function updateCanAutoChange() { // This handles the auto-change of spotlight
    canAutoChange = !canAutoChange;
  }

  function updateSize() {
    windowWidth = document.documentElement.clientWidth;
  }

  /**
   * @param {number} newSpotlight
   */
  function updateSpotlight(newSpotlight) { // Updates the event to be in spotlight
    spotlight = newSpotlight;
    let showcased = document.getElementById("showcased");
    if (showcased) {
      showcased.style.backgroundImage = `url(${events[spotlight - 1][1]})`;
    }
  }

  onMount(() => {
    updateCircleBlurMargin();
    updateSize();
    updateSpotlight(1);

    const interval = setInterval(() => {
      if (canAutoChange) {
        if (spotlight !== 6) {
          updateSpotlight(spotlight + 1);
        } else {
          updateSpotlight(1);
        }
      }
    }, 4000);
    window.addEventListener("resize", updateCircleBlurMargin);
    window.addEventListener("resize", updateSize);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<div
  id="brief-showcase"
  class="flex flex-row justify-center items-center mt-[80px] mb-[40px] ml-[10%] mr-[10%] relative opacity-0 transition delay-100 w-[80%] h-fit"
>
  <div
    class="w-[100%] min-w-[8vw] max-w-[180px] h-[100%] flex flex-col items-center justify-center gap-12 mb-[5%]"
  >
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
  <img
    id="circle-blur"
    src="/assets/gradient-blur-ellipse.svg"
    alt="Gradient Blur Ellipse"
    class="absolute w-[600px] h-[600px] max-w-[78vw] max-h-[78vw]"
    on:click={() => {
      if (spotlight != 6) {
        updateSpotlight(spotlight + 1);
      } else {
        updateSpotlight(1);
      }
    }}
  />
  <div class="flex flex-col gap-10 justify-center items-center">
    <div
      id="showcased"
      class="rounded-full w-[500px] h-[500px] max-w-[64vw] max-h-[64vw] bg-[#060217]"
    />
    <div id="showcase-name" class="flex items-center justify-center w-fit rounded-2xl" on:click={()=>{
      window.location.assign("./Showcase")
    }}>
      <UnderlinedText
        text={events[spotlight - 1][0]}
        isFixed={false}
        width={0}
        tailwindcustomization="text-sm font-normal text-center"
      />
    </div>
  </div>
  <div
    class="w-[100%] min-w-[8vw] max-w-[180px] h-[100%] flex flex-col items-center justify-center gap-12 mb-[5%]"
  >
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

<style>
  #showcased {
    /* background: url("../home-briefshowcase/briefshowcase-1.jpg"); */
    background-size: cover;
    background-position: center;
  }
  #showcase-name:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to right,
    rgba(0, 245, 241, 0) 0%,
    rgba(0, 245, 241, 0.3) 30%,
    rgba(46, 55, 146, 0.3) 70%,
    rgba(46, 55, 156, 0) 100%
  );
  filter: blur(20px);
  opacity: 0;
  transition: opacity 0.3s;
}

#showcase-name:hover:before {
  opacity: 1;
}

#showcase-name {
  position: relative; /* Make sure the :before pseudo-element is positioned relative to this element */
  /* Other styles for #showcase-name */
}
  .hex {
    width: 102px;
    height: 102px; /* Height is set to the same value as the width to create a regular hexagon */
    clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  }
  #left-aligned {
    margin-right: 103px;
  }
  #right-aligned {
    margin-left: 103px;
  }
</style>
