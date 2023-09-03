<script>
    // Import statements
    import { onMount } from "svelte";

    // CUSTOMIZE THIS: Add here the URL of logos from static folder ("./home-partnership/<logo>")
    let logos = [
        "./home-partnership/Amihan.png",
        "./home-partnership/Azeus.png",
        "./home-partnership/Breta Consulting.png",
        "./home-partnership/Coding Girls Manila.png",
        "./home-partnership/Cognizant.jpeg",
        "./home-partnership/Drupal.png",
        "./home-partnership/Freelancer.png",
        "./home-partnership/Intelimina.png",
        "./home-partnership/OpenText.jpg",
        "./home-partnership/Secret6.png",
    ];
    // END OF CUSTOMIZATION

    // Variables (for ui)
    let duration = logos.length < 10 ? 36000 : logos.length * 4000; // Duration of animatiion
    let resetDuration = logos.length < 10 ? 600 : logos.length * 60; // Duration of reset animation
    let transitionLeft =
        logos.length < 10
            ? -2120
            : -2 * (70 * logos.length + 40 * (logos.length - 1)); // Computes the position of the movingDiv on the right side
    /**
     * @type {string | number | NodeJS.Timeout | undefined}
     */
    let logoAnimationResetInterval;
    /**
     * @type {string | number | NodeJS.Timeout | undefined}
     */
    let logoAnimationInterval;

    // Reset animation
    function logoAnimationReset() {
        clearInterval(logoAnimationResetInterval);

        logoAnimationResetInterval = setInterval(() => {
            let movingDiv = document.getElementById("moving-div");
            if (movingDiv) {
                movingDiv.style.transition = resetDuration / 1000 + "s";
                movingDiv.style.left = transitionLeft + "px";
            }
            logoAnimation();
        }, duration);
    }

    // Animation
    function logoAnimation() {
        clearInterval(logoAnimationInterval);
        logoAnimationInterval = setInterval(() => {
            let movingDiv = document.getElementById("moving-div");
            if (movingDiv) {
                movingDiv.style.transition = `${duration / 1000}s`;
                movingDiv.style.left = "-180px";
            }
            clearInterval(logoAnimationInterval);
        }, resetDuration);
    }

    // Starts the animation
    function startAnimation() {
        clearInterval(logoAnimationInterval);
        clearInterval(logoAnimationResetInterval);
        let movingDiv = document.getElementById("moving-div");
        if (movingDiv) {
            movingDiv.style.transition = resetDuration / 1000 + "s ease-in-out";
            movingDiv.style.left = transitionLeft + "px";
        }
        let templogoAnimationInterval = setInterval(() => {
            let movingDiv = document.getElementById("moving-div");
            if (movingDiv) {
                movingDiv.style.transition = `${duration / 1000}s`;
                movingDiv.style.left = "-180px";
            }
            clearInterval(templogoAnimationInterval);
        }, resetDuration);
        logoAnimationReset();
    }

    onMount(() => {
        window.addEventListener("focus", startAnimation);
        window.addEventListener("blur", () => {
            clearInterval(logoAnimationInterval);
            clearInterval(logoAnimationResetInterval);
        });
        startAnimation();

        return () => {
            clearInterval(logoAnimationInterval);
            clearInterval(logoAnimationResetInterval);
        };
    });
</script>

<div
    class="w-full h-[400px] max-h-[90vw] flex flex-col items-center gap-5 mt-[110px] pl-[10%] pr-[10%] relative"
>
    <h6 class="absolute top-0 text-2xl font-extrabold text-center">
        We have worked with {logos.length} companies.
    </h6>
    <div
        id="logos"
        class="absolute top-[80px] z-10 w-[900px] h-[900px] max-w-[150vw] max-h-[150vw] rounded-full"
    >
        <div
            id="moving-div"
            class="relative left-[-180px] flex flex-col gap-10"
        >
            {#each Array(4) as item, j}
                <div id="logos{j}" class="flex gap-20 relative">
                    {#each Array(logos.length * 2) as logo, i}
                        <img
                            src={logos[i % logos.length]}
                            class="relative top-0 left-[100px] max-w-[80px] max-h-[80px] object-contain"
                        />
                    {/each}
                    {#if logos.length < 10}
                        {#each Array((10 - logos.length) * 2) as logo, i}
                            <img
                                src={logos[i % logos.length]}
                                class="relative top-0 left-[100px] max-w-[80px] max-h-[80px] object-contain"
                            />
                        {/each}
                    {/if}
                </div>
            {/each}
        </div>
    </div>
    <img
        id="circle-blur"
        src="/assets/gradient-blur-ellipse.svg"
        alt="Gradient Blur Ellipse"
        class="absolute top-[70px] z-0 w-[900px] h-[900px] max-w-[155vw] max-h-[155vw]"
    />
    <div />
</div>

<style>
    #logos {
        -webkit-mask-image: radial-gradient(
            circle,
            rgba(0, 0, 0, 1) 60%,
            rgba(0, 0, 0, 0) 70%
        );
        mask-image: radial-gradient(
            circle,
            rgba(0, 0, 0, 1) 60%,
            rgba(0, 0, 0, 0) 70%
        );
    }
    #logos1 {
        margin-left: 220px;
    }
    #logos2 {
        margin-left: -160px;
    }
    #logos3 {
        margin-left: 60px;
    }
</style>
