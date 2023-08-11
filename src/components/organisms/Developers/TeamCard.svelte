<script>
  export let teamName;
  export let description;
</script>

<div class="top-section w-full flex py-8 px-4 md:px-8 lg:px-16 xl:px-20">
  <div class="left-side w-1/2 flex items-center justify-center">
    <h2 class="text-2xl font-semibold">{teamName}</h2>
  </div>
  <div class="right-side w-1/2 p-4">
    <p class="text-base font-normal text-gray-600">{description}</p>
  </div>
</div>
