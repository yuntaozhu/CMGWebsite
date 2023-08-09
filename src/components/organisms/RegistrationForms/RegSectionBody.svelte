<!-- 
  This is the registration form where you can add different input components (check the list below).

  Input Components:
    1. TextInputComponent (required attributes: label)
    2. NumberInputComponent (required attributes: label)
    3. DropdownComponent (required attributes: label, options)
    4. RadioInputComponent (required attributes: label, options)
    5. SubmitButton
-->

<script>
    // Import statements
    import RegFormIllus from "./RegFormIllus.svelte";
    import { onMount } from "svelte";

    // Functions (for ui)
    let windowWidth = 0;
    let windowHeight = 0;
    let illusPosY = 0;
    let formPosY = 0;

    // Modifies the size of form section according to viewport
    function updateSize() {
        windowWidth = document.documentElement.clientWidth;
        windowHeight = document.documentElement.clientHeight;
        let a = document.getElementById("input-section");
        if (windowWidth * 0.75 < windowHeight) {
            if (a) {
                a.style.width = "100%";
            }
        } else {
            if (a) {
                a.style.width = "41.67%";
            }
        }

        // Updates the size of illustration photo according to the form's height
        let regformillusmeasure = document.getElementById("reg-form-illus-measure");
        let regformillus = document.getElementById("reg-form-illus");
        if (regformillusmeasure && regformillus && regformillusmeasure?.clientWidth > regformillusmeasure?.clientHeight){
            regformillus.style.width = regformillusmeasure.clientHeight + "px";
        }else if(regformillus){
            regformillus.style.width = "100%";
        }
    }

    // Makes the illustration beside the form to scroll along
    function updateIllusPos() {
        let illus = document.getElementById("reg-form-illus-photo");
        let illusPos = document
            .getElementById("reg-form-illus-photo")
            ?.getBoundingClientRect();
        let formPos = document
            .getElementById("input-section")
            ?.getBoundingClientRect();
        if (illusPos) {
            illusPosY = (illusPos.bottom - illusPos.top) / 2 + illusPos.top;
            illusPosY = Math.round(illusPosY);
        }
        if (formPos) {
            formPosY = Math.round(formPos.top);
        }

        if(illus && illusPos && formPosY + illusPos?.height/2 <=windowHeight/2){
            illus.style.marginTop = `${windowHeight/2 - (formPosY + illusPos?.height/2)}px`;
            illus.style.marginBottom = `${(windowHeight/2 - (formPosY + illusPos?.height/2))*-1}px`;
        }else if(illus){
            illus.style.marginTop = "0px";
            illus.style.marginBottom = "0px";
        }
    }

    onMount(() => {
        updateSize(); // Initial width calculation
        window.addEventListener("resize", updateSize); // Add event listener for resize
        window.addEventListener("resize", updateIllusPos);
        window.addEventListener("scroll", updateIllusPos); // Add event listener for scroll
    });

</script>

<div id="form" class="mr-[10%] ml-[10%] mt-7 flex">
    <div
        id="input-section"
        class="glassmorphic-rectangle bg-slate-700 flex-col"
    >
        <!-- Input Components -->
        <slot name="registration-form"/>
    </div>

    {#if windowWidth * 0.75 > windowHeight} 
        <div id="reg-form-illus-measure" class="w-7/12 flex justify-center overflow-hidden">
            <div id="reg-form-illus" class="w-full">
                <!-- Illustration -->
                <RegFormIllus />
            </div>
        </div>
    {/if}
</div>

<style>
    .glassmorphic-rectangle {
        background: linear-gradient(
            0deg,
            rgba(0, 245, 241, 0.1) 0%,
            rgba(255, 255, 255, 0.05) 100%
        );
        backdrop-filter: blur(21px);
        border: none;
        box-shadow: -1px 1px 1px rgba(255, 255, 255, 0.3),
            1px -1px 1px rgba(255, 255, 255, 0.3);
        padding: 25px;
        border-radius: 10px;
        text-align: justify;
    }
    #input-section,
    #reg-form-illus {
        transition: 0.5s;
    }
</style>