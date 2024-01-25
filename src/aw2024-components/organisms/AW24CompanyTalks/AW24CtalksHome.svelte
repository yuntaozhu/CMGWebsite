<script>
  // @ts-nocheck

  import {
    Activities,
    Events,
    Projects,
    Workshops,
    ShowcaseNavBar,
  } from "$components";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import {
    AW24CTalksTitle,
    AW24CTalksNavbar,
    CTalks2024,
    Company,
    Speakers,
  } from "../../../aw2024-components";
  const showcaseComponents = {
    CTalks2024,
    Company,
    Speakers,
  };

  let tabs = ["CTalks2024", "Speakers", "Company"];
  let activeTab;
  let show = false;

  try {
    activeTab = sessionStorage.getItem("activeTab");
    console.log("im here");
  } catch {
    activeTab =
      $page.url.hash === ""
        ? "CTalks2024"
        : `${$page.url.hash[1].toUpperCase()}${$page.url.hash
            .toLowerCase()
            .substr(2, $page.url.hash.length - 1)}`;
  }

  const tabChange = (e) => {
    activeTab = e.detail;
    sessionStorage.setItem("activeTab", activeTab);
  };

  onMount(() => {
    if (activeTab === null) {
      activeTab = "CTalks2024";
    }
    show = true;
  });
</script>

<head>
  <title
    >Showcasing Excellence - The Alliance of Computer Science Students UPLB</title
  >
  <meta
    name="title"
    content="Showcasing Excellence - The Alliance of Computer Science Students UPLB"
  />
  <meta
    property="og:title"
    content="Showcasing Excellence - The Alliance of Computer Science Students UPLB"
  />
  <meta
    property="twitter:title"
    content="Showcasing Excellence - The Alliance of Computer Science Students UPLB"
  />
  <meta
    name="description"
    content="Explore our diverse portfolio of innovative projects, proudly presented by The Alliance of Computer Science Students - UPLB. Witness the future of technology and creativity at its best."
  />
  <meta
    property="og:description"
    content="Explore our diverse portfolio of innovative projects, proudly presented by The Alliance of Computer Science Students - UPLB. Witness the future of technology and creativity at its best."
  />
  <meta
    property="twitter:description"
    content="Explore our diverse portfolio of innovative projects, proudly presented by The Alliance of Computer Science Students - UPLB. Witness the future of technology and creativity at its best."
  />
</head>

<div
  class="overflow-hidden w-full flex flex-col items-center px-5 py-10 relative z-20 min-h-screen"
>
  <AW24CTalksTitle />

  {#if show}
    <AW24CTalksNavbar {activeTab} {tabs} on:tabChange={tabChange} />
    {#each tabs as tab}
      {#if activeTab === tab}
        <svelte:component this={showcaseComponents[tab]} />
      {/if}
    {/each}
  {/if}
</div>
