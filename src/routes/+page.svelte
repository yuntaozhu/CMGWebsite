<script>
  import { Button } from "$components";
  import Navbar from "./Navbar.svelte";
  let string = "",
    buttonVisible = true;

  function handleClick() {
    string = "You wasted a second of your life :D";
    buttonVisible = false;
  }
</script>

<head>
  <title>Project Face</title>
</head>

<Navbar />

<div
  class="h-full flex flex-col items-center justify-center bg-base-dark-2 text-base-white"
>
  <div class="w-full flex flex-col items-center gap-4 px-5">
    <img
      src="/logo.webp"
      alt="The official seal of The Alliance of Computer Science Student"
      class="max-w-xs"
    />
    <h1 class="text-3xl font-bold inline-block relative text-base-white">
      Project Face <span
        class="absolute text-xs px-2 top-0 bg-base-purple font-normal text-white rounded-lg"
        >v2.0.0</span
      >
    </h1>
    <p class="max-w-lg text-center text-base-white">
      We are currently developing the new look of ACSS. See you soon!
    </p>
    {#if buttonVisible}
      <Button onClick={handleClick}>Click Me</Button>
    {/if}
    <p class="text-base-blue">{string}</p>
  </div>
  <div class="w-full flex flex-col items-center gap-4 px-5">
    <img
      src="/logo.webp"
      alt="The official seal of The Alliance of Computer Science Student"
      class="max-w-xs"
    />
    <h1 class="text-3xl font-bold inline-block relative text-base-white">
      Project Face <span
        class="absolute text-xs px-2 top-0 bg-base-purple font-normal text-white rounded-lg"
        >v2.0.0</span
      >
    </h1>
    <p class="max-w-lg text-center text-base-white">
      We are currently developing the new look of ACSS. See you soon!
    </p>
    {#if buttonVisible}
      <Button onClick={handleClick}>Click Me</Button>
    {/if}
    <p class="text-base-blue">{string}</p>
  </div>
  <div class="w-full flex flex-col items-center gap-4 px-5">
    <img
      src="/logo.webp"
      alt="The official seal of The Alliance of Computer Science Student"
      class="max-w-xs"
    />
    <h1 class="text-3xl font-bold inline-block relative text-base-white">
      Project Face <span
        class="absolute text-xs px-2 top-0 bg-base-purple font-normal text-white rounded-lg"
        >v2.0.0</span
      >
    </h1>
    <p class="max-w-lg text-center text-base-white">
      We are currently developing the new look of ACSS. See you soon!
    </p>
    {#if buttonVisible}
      <Button onClick={handleClick}>Click Me</Button>
    {/if}
    <p class="text-base-blue">{string}</p>
  </div>
</div>
