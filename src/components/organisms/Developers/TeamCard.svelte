<script>
  // Exported props for team name and description
  export let teamName;
  export let description;

  // Initialize a variable to set the font size class
  let fontSizeClass = '';

  // Adjust font size class based on the length of the teamName
  if (teamName.length > 14) {
    fontSizeClass = 'ss:text-[28px]'; // Use larger font size for longer team names
  } else {
    fontSizeClass = 'ss:text-3xl'; // Default font size
  }
</script>

<section class="container mx-auto relative">
  <div class="flex-col md:flex-row md:gap-4 flex md:px-8 lg:px-16 xl:px-[16rem]">

    <div class="pt-4 ss:pt-0 md:pt-0 flex justify-center items-center md:flex-1 3xl:max-w-screen-sm">
      <!-- Team Name -->
      <h1 class="text-bold leading-tight text-center lg:text-15xl md:leading-snug text-white md:text-right text-xl ss:text-[28px]">
        {teamName}
      </h1>
    </div>

    <div class="flex flex-col md:justify-center md:flex-1 gap-6 md:max-w-xl 3xl:max-w-2xl">
      <div class="flex flex-col gap-1">
        <!-- Description text -->
        <p class="font-light text-slate-200 max-w-1xl text-xs text-justify md:text-left">
          {description}
        </p>
      </div>
    </div>
  </div>
</section>
