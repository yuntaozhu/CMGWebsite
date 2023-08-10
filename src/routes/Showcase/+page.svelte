<script>
  import {
    Activities,
    Events,
    Projects,
    Workshops,
    ShowcaseNavBar,
    ShowcaseTitle,
    NavBar,
    Footer,
  } from "$components";
  import ShowcaseCards from "$components/organisms/Showcase/ShowcaseCards.svelte";
</script>

<style>
  .showcase-background {
      background-image: url('/BACKGROUND.svg');
      background-repeat: no-repeat;
      background-size: cover;
  }
  @media (max-width: 640px){
    .showcase-container {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
    }
  }

  @media (min-width: 641px) and (max-width: 767px){
    .showcase-container {
      padding-right: 3rem;
      padding-left: 3rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px){
    .showcase-container {
      padding-right: 3.5rem;
      padding-left: 3.5rem;
    }
  }

  @media (min-width: 1024px){
    .showcase-container {
      padding-right: 4rem;
      padding-left: 4rem;
    }

  }
  
</style>
<head>
  <title>
    Showcase
  </title>
</head>

<div class="min-h-screen  flex flex-col items-center showcase-background">
  <NavBar />
 

  <div class="showcase-container mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 flex flex-col items-center p-5 gap-10">
    <ShowcaseTitle/>
    <ShowcaseNavBar/>
    <ShowcaseCards/>
    

  </div>
  <footer>
    <Footer />
  </footer>


</div>


