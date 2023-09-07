<script>
    import "../app.css";
    import { NavBar, Footer, ChatBot } from "$components";
    import GradientBlur from "$components/molecules/Home/GradientBlur.svelte";
    import { onMount } from "svelte";

    // Scroll Fade In Animation (To use: add "scrollFadeIn" class to a html element)
    function scrollFadeIn() {
        let scrollFadeInElements =
            document.getElementsByClassName("scrollFadeIn");
        let main = document.getElementById("main");

        for (let element of scrollFadeInElements) {
            if (
                element instanceof HTMLElement &&
                main &&
                (element.getBoundingClientRect().top <
                    document.documentElement.clientHeight * 0.5 ||
                    main?.getBoundingClientRect().bottom <=
                        document.documentElement.clientHeight)
            ) {
                element.style.opacity = "1";
            }
        }
    }

    onMount(() => {
        scrollFadeIn();
        window.addEventListener("scroll", scrollFadeIn);
        window.addEventListener("resize", scrollFadeIn);
    });
</script>

<main id="main" class="overflow-hidden bg-base-black h-fit">
    <NavBar />
    <GradientBlur />
    <!-- <ChatBot /> -->
    <slot />
    <div class="relative z-20">
        <Footer />
    </div>
</main>
