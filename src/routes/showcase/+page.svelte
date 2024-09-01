<script>
  // @ts-nocheck

  import {
    Season2425,
    Season2324,
    Workshops,
    Activities,
    ShowcaseNavBar,
    ShowcaseTitle,
    ShowcaseCards,
  } from "$components";
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  const showcaseComponents = {
    Season2324,
    Season2425,
    Workshops,
    Activities,
  };

  let tabs = ["Season2324", "Season2425"];
  let activeTab;
  let show = false;

  try {
    activeTab = sessionStorage.getItem("activeTab");
    console.log("im here");
  } catch {
    activeTab =
      $page.url.hash === ""
        ? "Season2324"
        : `${$page.url.hash[1].toUpperCase()}${$page.url.hash
            .toLowerCase()
            .substr(2, $page.url.hash.length - 1)}`;
  }

  const tabChange = (e) => {
    activeTab = e.detail;
    sessionStorage.setItem("activeTab", activeTab);
  };

  function scrollTabChange() {
    activeTab = sessionStorage.getItem("activeTab") || "Projects";
  }

  onMount(() => {
    if ($page.url.hash !== "") {
      activeTab = `${$page.url.hash[1].toUpperCase()}${$page.url.hash
        .toLowerCase()
        .substr(2, $page.url.hash.length - 1)}`;
      sessionStorage.setItem(
        "activeTab",
        `${$page.url.hash[1].toUpperCase()}${$page.url.hash
          .toLowerCase()
          .substr(2, $page.url.hash.length - 1)}`
      );
    }
    if(activeTab === null){
      activeTab = "Season2324";
    }
    show = true;
    window.addEventListener("scrollend", scrollTabChange);
    return () => {
      removeEventListener("scrollend", scrollTabChange);
    };
  });
</script>

<head>
  <title
    >Showcasing Excellence - The CMG Organization UPLB</title
  >
  <meta
    name="title"
    content="Showcasing Excellence - The CMG Organization UPLB"
  />
  <meta
    property="og:title"
    content="Showcasing Excellence - The CMG Organization UPLB"
  />
  <meta
    property="twitter:title"
    content="Showcasing Excellence - The CMG Organization UPLB"
  />
  <meta
    name="description"
    content="Explore our diverse portfolio of innovative projects, proudly presented by The CMG Organization - UPLB. Witness the future of technology and creativity at its best."
  />
  <meta
    property="og:description"
    content="Explore our diverse portfolio of innovative projects, proudly presented by The CMG Organization - UPLB. Witness the future of technology and creativity at its best."
  />
  <meta
    property="twitter:description"
    content="Explore our diverse portfolio of innovative projects, proudly presented by The CMG Organization - UPLB. Witness the future of technology and creativity at its best."
  />
</head>

<div
  class="overflow-hidden w-full flex flex-col items-center px-5 py-10 relative z-20 min-h-screen"
>
  <ShowcaseTitle />

  {#if show}
    <ShowcaseNavBar {activeTab} {tabs} on:tabChange={tabChange} />
    {#each tabs as tab}
      {#if activeTab === tab}
        <svelte:component this={showcaseComponents[tab]} />
      {/if}
    {/each}
  {/if}
</div>
