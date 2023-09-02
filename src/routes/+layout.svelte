<script>
  import "../app.css";
  import { NavBar, Footer, ChatBot } from "$components";
  import GradientBlur from "$components/molecules/Home/GradientBlur.svelte";
  import { onMount } from "svelte";

  // Scroll Fade In Animation (To use: add "scrollFadeIn" class to a html element)
  function scrollFadeIn() {
    let scrollFadeInElements = document.getElementsByClassName("scrollFadeIn");

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
  <meta name="keywords" content="computer science, projects, innovation, creativity, technology, UPLB, academic organization, acss uplb, acss, the alliance of computer science students, student organization, University of the Philippines Los Baños" />
  <meta name="author" content="The Alliance of Computer Science Students - UPLB" />
</head>

<main class="overflow-hidden">
  <NavBar />
  <GradientBlur />
  <ChatBot />
  <slot />
  <Footer />
</main>
