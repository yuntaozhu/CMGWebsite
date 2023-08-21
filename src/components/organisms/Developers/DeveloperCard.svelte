<script>
  export let imageSrc;
  export let nickname;
</script>

<div class="relative">
  <!-- Outer glassmorphic rectangle -->
  <div class="outer-glassmorphic drop-shadow-md rounded-lg border-[1rem] border-opacity-10 backdrop-blur-[21px] h-[218px] w-[172px]"></div>

  <!-- Inner glassmorphic rectangle -->
  <div class="inner-glassmorphic left-3 top-3 absolute backdrop-blur-[21px] w-[150px] h-[150px]">
    <!-- Placeholder for developer image --> 
    <img src={imageSrc} alt={nickname} class="w-full h-full object-cover rounded-2xl" />
  </div>

  <!-- Developer nickname -->
  <p class="absolute w-238 h-12 left-4 bottom-0 font-bold text-3xl text-white">{nickname}</p>
</div>

<style>
  .outer-glassmorphic {
    filter: drop-shadow(0px 8px 8px #000000);
    border-radius: 16px;
    border: 0.01rem solid rgba(255, 255, 255, 0.1);
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 100%
    );
  }

  .inner-glassmorphic {
    filter: drop-shadow(0px 4px 4px #000000);
    border-radius: 16px;
    border: 0.01rem solid rgba(255, 255, 255, 0.1);
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 100%
    );
  }
</style>
