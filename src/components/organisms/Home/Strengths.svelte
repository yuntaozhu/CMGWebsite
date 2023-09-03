<script>
  // Import Statements
  import UnderlinedText from "$components/atoms/UnderlinedText.svelte";
  import { onMount } from "svelte";

  // CUSTOMIZE THIS: Array of strengths
  let strengths = [
    [
      "Technology Proficiency",
      "Strength, this is a sample sentence. Strength, this is a sample sentence. Strength, this is a sample sentence.",
    ],
    [
      "Competitive Workforce",
      "Strength, this is a sample sentence. Strength, this is a sample sentence. Strength, this is a sample sentence.",
    ],
    [
      "Effective Research and Development Aptitude",
      "Strength, this is a sample sentence. Strength, this is a sample sentence. Strength, this is a sample sentence.",
    ],
    [
      "Agile Development",
      "Strength, this is a sample sentence. Strength, this is a sample sentence. Strength, this is a sample sentence.",
    ],
  ];
  // END OF CUSTOMIZATION

  // Adds glow animation on the background
  function bgElementChange() {
    let windowHeight = document.documentElement.clientHeight;
    let bg = document.getElementById("strength-glow");
    let bgelement = document
      .getElementById("strength-glow")
      ?.getBoundingClientRect();
    if (
      bgelement &&
      windowHeight / 2 >= bgelement.top &&
      windowHeight / 2 < bgelement.top + bgelement.height * 0.25
    ) {
      if (bg) {
        bg.style.opacity = "1";
        bg.style.backgroundImage = "url(acss-cube-1.svg)";
      }
    } else if (
      bgelement &&
      windowHeight / 2 >= bgelement.top + bgelement.height * 0.25 &&
      windowHeight / 2 < bgelement.top + bgelement.height * 0.5
    ) {
      if (bg) {
        bg.style.opacity = "1";
        bg.style.backgroundImage = "url(acss-cube-2.svg)";
      }
    } else if (
      bgelement &&
      windowHeight / 2 >= bgelement.top + bgelement.height * 0.5 &&
      windowHeight / 2 < bgelement.top + bgelement.height * 0.75
    ) {
      if (bg) {
        bg.style.opacity = "1";
        bg.style.backgroundImage = "url(acss-cube-3.svg)";
      }
    } else if (
      bgelement &&
      windowHeight / 2 >= bgelement.top + bgelement.height * 0.75 &&
      windowHeight / 2 < bgelement.top + bgelement.height
    ) {
      if (bg) {
        bg.style.opacity = "1";
        bg.style.backgroundImage = "url(acss-cube-4.svg)";
      }
    } else {
      if (bg) {
        bg.style.opacity = "0";
      }
    }
  }

  onMount(() => {
    bgElementChange();
    window.addEventListener("resize", bgElementChange);
    window.addEventListener("scrollend", bgElementChange);
  });
</script>

<div
  class="relative flex justify-center mt-[80px] mb-[40px] mx-auto container min-h-[700px]"
>
  <div
    id="strength-bg"
    class="relative flex justify-center items-center w-full min-h-full max-w-[1000px]"
  >
    <div id="strength-glow" class="w-full h-full" />
    <div id="strength" class="flex flex-col gap-10 w-[88%]">
      {#each strengths as strength, i}
        {#if (i + 1) % 2 == 0}
          <div class="flex justify-end">
            <div class="flex flex-col gap-3 scrollFadeIn max-w-full">
              <div class="flex">
                <div class="w-fit">
                  <UnderlinedText
                    text={strength[0]}
                    isFixed={true}
                    width={250}
                    textcustomization="text-2xl font-extrabold"
                    textboxcustomization=""
                  />
                </div>
              </div>
              <div class="flex">
                <div class="max-w-[400px] w-[100%] text-white">
                  <p class="font-light text-justify indent-8">
                    {strength[1]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        {:else}
          <div class="flex flex-col gap-3 scrollFadeIn max-w-[400px]">
            <div class="w-fit">
              <UnderlinedText
                text={strength[0]}
                isFixed={true}
                width={250}
                textcustomization="text-2xl font-extrabold"
                textboxcustomization=""
              />
            </div>
            <div class="max-w-[400px] w-[100%] text-white">
              <p class="font-light text-justify indent-8">
                {strength[1]}
              </p>
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</div>

<style>
  #strength-bg {
    position: relative;
    background: url("../acss-cube.svg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  #strength-glow {
    position: absolute;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    transition: 0.3s ease-in-out;
  }
  #strength {
    position: relative;
  }
</style>
