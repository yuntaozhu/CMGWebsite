<!-- InitialSection.svelte -->

<script>
  import TitleSection from './TitleSection.svelte';
  import DescriptionSection from './DescriptionSection.svelte';
  import ScrollIcon from './ScrollIcon.svelte';
  export let imageURL;
  export let title;
  export let description;
</script>

<div class="initial-section full-height flex py-16 px-4 md:px-8 lg:px-16 xl:px-20">
  <!-- Left side: Slideshow with Fade Animation -->
  <div class="left-side w-1/2 h-50vh flex items-center justify-center border border-gray-300">
    <img src={imageURL} alt="Slideshow Image" class="w-screen h-full object-cover opacity-100"/>
  </div>

  <!-- Right side: Text and scroll icon -->
  <div class="right-side w-1/2 h-55vh flex flex-col justify-center p-8">
    <!-- "Meet the Team" text -->
    <TitleSection {title} />

    <!-- Description text -->
    <DescriptionSection {description}/>

    <!-- Scroll icon animation -->
    <ScrollIcon />
  </div>
</div>
