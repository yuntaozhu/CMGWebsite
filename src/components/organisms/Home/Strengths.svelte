<script>
  // Import Statements
  import UnderlinedText from "$components/atoms/UnderlinedText.svelte";
  import { onMount } from "svelte";

  // CUSTOMIZE THIS: Array of strengths
  let strengths = [
    [
      "We support young talent",
      "The Cranbrook Music Guild’s Betty Brewster Scholarship Award (inaugurated as the Guild Gift\n" +
      "Fund in 1955, but renamed  Betty Brewster Scholarship Award in 1967 to honor the Guild’s first\n" +
      "president), has proudly supported the efforts of our up and coming musical artists by awarding\n" +
      "a $2500 scholarship for graduate study and performance to a distinguished student at the\n" +
      "University of Michigan School of Music. Our scholarship winner always performs a concert\n" +
      "recital during our musical season. The Cranbrook Music Guild is proud of this initiative and the\n" +
      "results that have been achieved affirming the vision of the founding members..",
    ],
    [
      "We have taken a new route to celebrate young talent",
      "talent. We  created the Cranbrook Music Guild\n" +
      "Emerging Artists Competition. The competition provides an opportunity for emerging artists\n" +
      "to compete and perform. Funds for this competition come in part from the Betty Brewster\n" +
      "Scholarship program. This event will be held every other year. Anticipate news for our next\n" +
      "competition in late 2020.",
    ],
    [
      "Purchasing tickets is as easy as “Do Re Mi”",
      "Cranbrook Music Guild offers a variety of ways to attend our concerts and complimentary\n" +
      "afterglows with the performers. Please consider purchasing a season ticket, as you will enjoy\n" +
      "all five sublime concerts and afterglows. Patron ticket holders are given the chance to sit in the\n" +
      "first three rows.",
    ],
    [
      "We would love to hear from you.",
      "Cranbrook Music Guild is always glad to welcome a new pair of helping hands, a gracious\n" +
      "donor or interested sponsor. We also would appreciate your comments as we strive to bring\n" +
      "you a memorable music experience..",
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
        bg.style.backgroundImage = "url(/acss-cube-1.svg)";
      }
    } else if (
      bgelement &&
      windowHeight / 2 >= bgelement.top + bgelement.height * 0.25 &&
      windowHeight / 2 < bgelement.top + bgelement.height * 0.5
    ) {
      if (bg) {
        bg.style.opacity = "1";
        bg.style.backgroundImage = "url(/acss-cube-2.svg)";
      }
    } else if (
      bgelement &&
      windowHeight / 2 >= bgelement.top + bgelement.height * 0.5 &&
      windowHeight / 2 < bgelement.top + bgelement.height * 0.75
    ) {
      if (bg) {
        bg.style.opacity = "1";
        bg.style.backgroundImage = "url(/acss-cube-3.svg)";
      }
    } else if (
      bgelement &&
      windowHeight / 2 >= bgelement.top + bgelement.height * 0.75 &&
      windowHeight / 2 < bgelement.top + bgelement.height
    ) {
      if (bg) {
        bg.style.opacity = "1";
        bg.style.backgroundImage = "url(/acss-cube-4.svg)";
      }
    } else {
      if (bg) {
        bg.style.opacity = "0";
        bg.style.backgroundImage = "none";
      }
    }
  }

  onMount(() => {
    bgElementChange();
    window.addEventListener("resize", bgElementChange);
    window.addEventListener("scrollend", bgElementChange);

    return(()=>{
      window.removeEventListener("resize", bgElementChange);
      window.removeEventListener("scrollend", bgElementChange);
    })
  });
</script>

<div
  id="strengths"
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
    background: url("/acss-cube.svg");
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
