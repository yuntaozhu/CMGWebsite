<script>
    // Import statements
    import { onMount } from "svelte";

    // CUSTOMIZE THIS: Add here the URL of logos from static folder ("./home-partnership/<logo>")
    let logos = [
        ["./home-partnership/Picture1.jpg", "Mezzo-soprano Chrystal E. Williams "],
        ["./home-partnership/Picture2.jpg", " Camille Thomas – Cellist  with Roman Rabinovich – Pianist    "],
        ["./home-partnership/Picture3.jpg", "Alvin Waddles – Pianist, Singer, Composer and Director and Friends  "],
        ["./home-partnership/Picture4.jpg", "Dizhou Zhao – Pianist  with musicians from the DSO Wind Section"],
        ["./home-partnership/Picture5.jpg", "Escher String Quartet   "],
        ["./home-partnership/Picture6.jpg", "Sergei Babayan – Pianist  "]
    ];
    // END OF CUSTOMIZATION

    // Variables (for ui)
    let duration = logos.length < 10 ? 36000 : logos.length * 4000; // Duration of animatiion
    let resetDuration = logos.length < 10 ? 600 : logos.length * 60; // Duration of reset animation
    let transitionLeft = 0;
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
        let move = document.getElementById("moving-div");
        if (move) {
            transitionLeft = -(move.getBoundingClientRect().width - 1200);
        }

        window.addEventListener("focus", startAnimation);
        window.addEventListener("blur", () => {
            clearInterval(logoAnimationInterval);
            clearInterval(logoAnimationResetInterval);
        });
        startAnimation();

        return () => {
            clearInterval(logoAnimationInterval);
            clearInterval(logoAnimationResetInterval);
            window.removeEventListener("focus", startAnimation);
            window.removeEventListener("blur", () => {
                clearInterval(logoAnimationInterval);
                clearInterval(logoAnimationResetInterval);
            });
        };
    });
</script>

<div
    class="w-full h-fit flex flex-col items-center gap-5 -mb-48 pl-[10%] pr-[10%] relative overflow-hidden"
>
    <h6 class="relative text-2xl font-extrabold text-center px-5">
        We have lunched  {logos.length} concert.
    </h6>
    <div class="relative flex justify-center h-[480px]">
        <div
            id="logos"
            class="absolute top-5 z-20 w-[900px] h-[900px] rounded-full"
        >
            <div
                id="moving-div"
                class="relative left-[-180px] flex flex-col gap-10 w-fit"
            >
                {#each Array(4) as item, j}
                    <div id="logos{j}" class="flex relative">
                        {#each Array(logos.length * 2) as logo, i}
                            <img
                                src={logos[i % logos.length][0]}
                                title={logos[i % logos.length][1]}
                                class="relative top-0 left-[100px] max-w-[80px] max-h-[80px] object-contain mx-10"
                                alt={logos[i % logos.length][1]}
                            />
                        {/each}
                        {#if logos.length < 10}
                            {#each Array((10 - logos.length) * 2) as logo, i}
                                <img
                                    src={logos[i % logos.length][0]}
                                    title={logos[i % logos.length][1]}
                                    class="relative top-0 left-[100px] max-w-[80px] max-h-[80px] object-contain"
                                    alt={logos[i % logos.length][1]}
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
            class="absolute top-0 z-10 w-[940px] h-[940px] min-w-[940px] min-h-[940px]"
        />
        <div />
    </div>
</div>

<style>
    #logos {
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
