<script>
  export let teamName;
  export let description;

  let fontSizeClass = '';

  // Adjust font size class based on teamName length
  if (teamName.length > 20 && teamName.length < 27) fontSizeClass = 'text-3xl'; // You can adjust the size as needed
  else if (teamName.length >= 27) fontSizeClass = 'text-2xl'; // You can adjust the size as needed
  else fontSizeClass = 'text-4xl'; // Default size
</script>

<section class="container mx-auto relative">
  <div class="flex-col md:flex-row md:gap-4 flex md:px-8 lg:px-16 xl:px-[21rem]">

    <div class="pt-4 ss:pt-0 md:pt-0 flex justify-center items-center md:flex-1 3xl:max-w-screen-sm">
      <!-- Team Name -->
      <h1 class="text-bold leading-tight text-center lg:text-15xl md:leading-snug text-white sm:text-right text-3xl">
        {teamName}
      </h1>
    </div>

    <div class="flex flex-col md:justify-center md:flex-1 gap-6 md:max-w-xl 3xl:max-w-2xl">
      <div class="flex flex-col gap-1">
        <!-- Description text -->
        <p class="font-light text-slate-200 max-w-1xl text-sm">{description}</p>
      </div>
    </div>
  </div>
</section>
