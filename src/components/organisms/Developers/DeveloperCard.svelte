<!-- DeveloperCard.svelte -->
<script>
    export let name;
    export let role;
    export let imageSrc;
  </script>
  
  <div class="developer-card p-4 border border-gray-300 rounded-md shadow-md">
    <img
      src={imageSrc}
      alt={name}
      class="w-20 h-20 object-cover rounded-full mb-2 mx-auto"
    />
    <h3 class="text-lg font-semibold">{name}</h3>
    <p class="text-gray-600">{role}</p>
  </div>
  
  <style>
    /* Add custom styles here if needed */
  </style>
  