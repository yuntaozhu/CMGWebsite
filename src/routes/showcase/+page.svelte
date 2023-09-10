<script>
  import { onMount } from "svelte";
  import {
    Activities,
    Events,
    Projects,
    Workshops,
    ShowcaseNavBar,
    ShowcaseTitle,
    ShowcaseCards,
  } from "$components";

  const showcaseComponents = {
    Projects,
    Events,
    Workshops,
    Activities,
  };

  let tabs = ["Projects", "Events", "Workshops", "Activities"];
  let activeTab = "Projects"; // Default active tab

  const tabChange = (e) => {
    activeTab = e.detail;
    sessionStorage.setItem("activeTab", activeTab);
  };

  function scrollTabChange() {
    if (typeof window !== "undefined") {
      activeTab = sessionStorage.getItem("activeTab") || "Projects";
    }
  }

  onMount(() => {
    if (typeof window !== "undefined") {
      // Check if running on the client side
      // Reset activeTab to "Projects" on page reload
      sessionStorage.setItem("activeTab", activeTab);
      window.addEventListener("scrollend", scrollTabChange);
      return () => {
        removeEventListener("scrollend", scrollTabChange);
      };
    }
  });
</script>

<head>
  <title>Showcasing Excellence - The Alliance of Computer Science Students UPLB</title>
  <meta name="title" content="Showcasing Excellence - The Alliance of Computer Science Students UPLB" />
  <meta
  property="og:title"
  content="Showcasing Excellence - The Alliance of Computer Science Students UPLB"
  />
  <meta
  property="twitter:title"
  content="Showcasing Excellence - The Alliance of Computer Science Students UPLB"
  />
  <meta name="description" content="Explore our diverse portfolio of innovative projects, proudly presented by The Alliance of Computer Science Students - UPLB. Witness the future of technology and creativity at its best." />
  <meta
    property="og:description"
    content="Explore our diverse portfolio of innovative projects, proudly presented by The Alliance of Computer Science Students - UPLB. Witness the future of technology and creativity at its best."
  />
  <meta
    property="twitter:description"
    content="Explore our diverse portfolio of innovative projects, proudly presented by The Alliance of Computer Science Students - UPLB. Witness the future of technology and creativity at its best."
  />
</head>

<div id={activeTab.toLocaleLowerCase()} class="overflow-hidden w-full flex flex-col items-center px-5 py-10 relative z-20" >

  <ShowcaseTitle/>
  
  <ShowcaseNavBar {activeTab} {tabs} on:tabChange={tabChange}/>


  {#each tabs as tab}

    {#if activeTab === tab}
      <svelte:component this={showcaseComponents[tab]}/>
    {/if}
  {/each}

</div>


