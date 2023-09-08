<!-- 
    kahit ano
 -->

<script>
    // @ts-nocheck

    import {
        ShowcaseHeader,
        NavBar,
        ShowcaseImage,
        ShowcaseDescription,
        ShowcaseGallery,
        ShowcaseDevs,
    } from "$components";
    import { data } from "$components/organisms/Showcase/data.js";
    import { page } from "$app/stores";
    const showcaseId = $page.params.showcaseId;

    let contents = "";
    let contentTitle = "";
    let words = showcaseId.split("-");

    if (words.length > 0) {
        contents = words[0];

        words.splice(0, 1);
        contentTitle = words.join(" ");
    }
</script>

<head>
    {#each data[contents] as content}
        {#if content.title.toLowerCase() === contentTitle}
            <title>{content.title} - Showcase</title>
        {/if}
    {/each}
</head>

<div
    class="min-h-screen flex flex-col items-center showcase-background pt-20 pb-20 gap-10 lg:gap-20 relative z-20"
>
    <ShowcaseHeader {contents} {contentTitle} />
    <ShowcaseImage {contents} {contentTitle} />
    <ShowcaseDescription {contents} {contentTitle} />
    <ShowcaseGallery {contents} {contentTitle} />
    {#if contents === "projects"}
        <ShowcaseDevs {contentTitle} />
    {/if}
</div>

<style>
    .showcase-background {
        background-image: url("/BACKGROUND.svg");
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
