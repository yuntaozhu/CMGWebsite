<script>
    import "../app.css";
    import { NavBar, Footer, ChatBot } from "$components";
    import GradientBlur from "$components/molecules/Home/GradientBlur.svelte";
    import { onMount } from "svelte";

    // Scroll Fade In Animation (To use: add "scrollFadeIn" class to a html element)
    function scrollFadeIn() {
        let scrollFadeInElements =
            document.getElementsByClassName("scrollFadeIn");

        for (let element of scrollFadeInElements) {
            if (
                element instanceof HTMLElement &&
                element.getBoundingClientRect().top <
                    document.documentElement.clientHeight * 0.5
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

<head>
    <meta
        name="keywords"
        content="computer science, projects, innovation, creativity, technology, UPLB, academic organization, acss uplb, acss, the alliance of computer science students, student organization, University of the Philippines Los Baños"
    />
    <meta
        name="author"
        content="The Alliance of Computer Science Students - UPLB"
    />
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta
        property="og:url"
        content="https://acssuplb.org/"
    />
    <meta
        property="og:title"
        content="The Alliance of Computer Science Students - UPLB"
    />
    <meta
        property="og:description"
        content="Discover boundless opportunities and innovation with The Alliance of Computer Science Students - UPLB, an official academic organization at the University of the Philippines Los Baños. Join our visionary community and help shape a future where dreams become reality."
    />
    <meta
        property="og:image"
        content="/assets/meta-image.webp"
    />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta
        property="twitter:url"
        content="https://acssuplb.org/"
    />
    <meta
        property="twitter:title"
        content="The Alliance of Computer Science Students - UPLB"
    />
    <meta
        property="twitter:description"
        content="Discover boundless opportunities and innovation with The Alliance of Computer Science Students - UPLB, an official academic organization at the University of the Philippines Los Baños. Join our visionary community and help shape a future where dreams become reality."
    />
    <meta
        property="twitter:image"
        content="/assets/meta-image.webp"
    />
</head>

<main class="overflow-hidden">
    <NavBar />
    <GradientBlur />
    <!-- <ChatBot /> -->
    <slot />
    <Footer />
</main>
