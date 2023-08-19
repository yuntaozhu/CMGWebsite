<script>
  // Import Statements
  import UnderlinedText from "$components/atoms/UnderlinedText.svelte";
  import { onMount } from "svelte";
  
  // CUSTOMIZE THIS: Array of strengths
  let strengths = [
    [
      "Strength 1",
      "Strength, this is a sample sentence. Strength, this is a sample sentence. Strength, this is a sample sentence.",
    ],
    [
      "Strength 2",
      "Strength, this is a sample sentence. Strength, this is a sample sentence. Strength, this is a sample sentence.",
    ],
    [
      "Strength 3",
      "Strength, this is a sample sentence. Strength, this is a sample sentence. Strength, this is a sample sentence.",
    ],
    [
      "Strength 4",
      "Strength, this is a sample sentence. Strength, this is a sample sentence. Strength, this is a sample sentence.",
    ],
  ];
  // END OF CUSTOMIZATION

  // Adds glow effect on the background
  function bgElementChange(){
    let windowHeight = document.documentElement.clientHeight;
    let bg = document.getElementById("strength-bg");
    let bgelement = document.getElementById("strength-bg")?.getBoundingClientRect();
    if(bgelement && windowHeight/2 >= bgelement.top && windowHeight/2 < (bgelement.top+bgelement.height*0.25)){
      if(bg){
        bg.style.backgroundImage = "url(acss-cube-1.svg)";
      }
    }else if(bgelement && windowHeight/2 >= (bgelement.top+bgelement.height*0.25) && windowHeight/2 < (bgelement.top+bgelement.height*0.50)){
      if(bg){
        bg.style.backgroundImage = "url(acss-cube-2.svg)";
      }
    }else if(bgelement && windowHeight/2 >= (bgelement.top+bgelement.height*0.50) && windowHeight/2 < (bgelement.top+bgelement.height*0.75)){
      if(bg){
        bg.style.backgroundImage = "url(acss-cube-3.svg)";
      }
    }else if(bgelement && windowHeight/2 >= (bgelement.top+bgelement.height*0.75) && windowHeight/2 < (bgelement.top+bgelement.height)){
      if(bg){
        bg.style.backgroundImage = "url(acss-cube-4.svg)";
      }
    }else{
      if(bg){
        bg.style.backgroundImage = "url(acss-cube.svg)";
      }
    }
  }

  onMount(() => {
    window.addEventListener("resize", bgElementChange);
    window.addEventListener("scroll", bgElementChange);
  });
</script>

<div class="flex justify-center mt-[80px] mb-[40px]">
  <div id="strength-bg" class="max-w-[1000px] w-[100%]">
    <div id="strength-gradient" class="z-0" />
    <div
      id="strength"
      class="flex flex-col gap-10 w-[100%] pl-[10%] pr-[10%]"
    >
      {#each strengths as strength, i}
        {#if (i + 1) % 2 == 0}
          <div class="flex justify-end">
            <div class="flex flex-col gap-3">
              <div class="flex">
                <div class="w-fit">
                  <UnderlinedText text={strength[0]} isFixed={true} width={250} tailwindcustomization=""/>
                </div>
              </div>
              <div class="flex">
                <div
                  class="max-w-[400px] w-[100%] text-white"
                >
                  <p class="font-light text-justify indent-8">
                    {strength[1]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        {:else}
          <div class="flex flex-col gap-3">
            <div class="w-fit">
              <UnderlinedText text={strength[0]} isFixed={true} width={250} tailwindcustomization=""/>
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
    transition: 0.2s ease-in-out;
    transition-delay: 0.4s;
  }

  #strength-gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to left,
      #060217 10%,
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 0) 70%,
      #060217 90%
    );
    background-size: cover;
  }
  #strength {
    position: relative;
  }
</style>
