<!-- 
    kahit ano
 -->


<script>
    import {ShowcaseHeader, NavBar, ShowcaseImage, ShowcaseDescription, ShowcaseGallery, ShowcaseDevs} from "$components";

    import { page } from '$app/stores'
    const showcaseId = $page.params.showcaseId;
    
    let contents = "";
    let contentTitle = "";
    let words = showcaseId.split('-');

    if (words.length > 0){
        contents = words[0];

        words.splice(0,1);
        contentTitle = words.join(' ');
        
    }
    
  
</script>
  <head>
      <title>{contentTitle.toUpperCase()} - Showcase</title>
  </head>
  
  <style>
      .showcase-background {
          background-image: url('/BACKGROUND.svg');
          background-repeat: no-repeat;
          background-size: cover;
      }
  </style>
  
  <div class="min-h-screen flex flex-col items-center showcase-background pt-20 pb-20 gap-10 lg:gap-20">
    <ShowcaseHeader contents = {contents} contentTitle = {contentTitle}/>
    <ShowcaseImage contents = {contents} contentTitle = {contentTitle}/>
    <ShowcaseDescription contents = {contents} contentTitle = {contentTitle}/>
    <ShowcaseGallery contents = {contents} contentTitle = {contentTitle}/>
    {#if contents === "projects"}
        <ShowcaseDevs contentTitle = {contentTitle}/>
    {/if}
  
  
  </div>