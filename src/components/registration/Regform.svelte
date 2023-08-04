<!-- 
  This is the registration form where you can add different input components (check the list below).

  Input Components:
    1. TextInputComponent(required attributes: label)
    2. NumberInputComponent(required attributes: label)
    3. DropdownComponent(required attributes: label, options)
    4. RadioInputComponent(required attributes: label, options)
-->

<script>
    import TextInputComponent from "./registration-components/TextInputComponent.svelte";
    import NumberInputComponent from "./registration-components/NumberInputComponent.svelte";
    import DropdownInputComponent from "./registration-components/DropdownInputComponent.svelte";
    import RegFormIllus from "./registration-components/RegFormIllus.svelte";
    import RadioInputComponent from "./registration-components/RadioInputComponent.svelte";
    import SubmitButton from "./registration-components/SubmitButton.svelte";
    import { onMount } from "svelte";

    // functions
    let windowWidth = 0;
    let windowHeight = 0;
    let illusPosY = 0;
    let formPosY = 0;
    let formPosStart = 0;
    let formPosStarted = false;

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
    }

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

        if (illusPosY < windowHeight / 2 && formPosStarted === false) {
            formPosStarted = true;
            formPosStart = formPosY;
        }

        if(formPosStart < formPosY){
            formPosStarted = false;
        }

        if (formPosStarted) {
            illusPosY = windowHeight / 2;
            if (illus) {
                illus.style.marginTop = `${(formPosY - formPosStart) * -1}px`;
                illus.style.marginBottom = `${formPosY - formPosStart}px`;
            }
        }else {
            if (illus) {
                illus.style.marginTop = "0px";
                formPosStart = 0;
                formPosStarted = false;
            }
        }
    }

    onMount(() => {
        updateSize(); // Initial width calculation
        window.addEventListener("resize", updateSize); // Add event listener for resize
        window.addEventListener("scroll", updateIllusPos); // Add event listener for resize
    });

    // dropdown input options
    let colleges = [
        "College of Arts and Sciences",
        "College of Economics and Management",
        "College of Forestry and Natural Resources",
        "College of Development Communication",
        "Collegee of Agriculture and Food Science",
        "College of Engineering and Agro-industrial Technology",
        "College of Human Ecology",
        "College of Veterinary Medicine",
        "College of Public Affairs and Development",
        "School of Environmental Science and Management",
    ];

    // radio input options
    let howYouHear = ["ACSS Social Media Post", "Shared Post of a Friend"];
</script>

<div id="form" class="mr-[10%] ml-[10%] mt-7 flex">
    <div
        id="input-section"
        class="glassmorphic-rectangle bg-slate-700 flex-col"
    >
        <TextInputComponent label="Name" />
        <TextInputComponent label="Nickname" />
        <TextInputComponent label="Email" />
        <DropdownInputComponent label="College" options={colleges} />
        <TextInputComponent label="Degree Program" />
        <NumberInputComponent label="Batch" />
        <TextInputComponent label="Facebook Profile Link" />
        <RadioInputComponent
            label="How did you hear about this event?"
            options={howYouHear}
        />
        <SubmitButton />
    </div>

    {#if windowWidth * 0.75 > windowHeight}
        <div id="reg-form-illus" class="w-7/12">
            <RegFormIllus />
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
