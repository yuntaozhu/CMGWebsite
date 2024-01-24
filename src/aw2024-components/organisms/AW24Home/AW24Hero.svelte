<!--Hero Section-->

<script>
  // import SplideJS for the hero frame animation
  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";
  import "@splidejs/svelte-splide/css";

  // Splide Options to autoplay
  const options = {
    rewind: true,
    gap: "1rem",
    autoplay: true,
    arrows: false, // show left and right arrows
    interval: 500,
    speed: 2000,
    pagination: false,
    type: "fade",
    pauseOnHover: false,
  };

  //Image frames
  let heroFrames = [
    "/assets/aw24-hero-1.webp",
    "/assets/aw24-hero-2.webp",
    "/assets/aw24-hero-3.webp",
    "/assets/aw24-hero-4.webp",
    "/assets/aw24-hero-5.webp",
    "/assets/aw24-hero-6.webp",
    "/assets/aw24-hero-7.webp",
    "/assets/aw24-hero-8.webp",
    "/assets/aw24-hero-9.webp",
    "/assets/aw24-hero-10.webp",
    "/assets/aw24-hero-11.webp",
    "/assets/aw24-hero-12.webp",
    "/assets/aw24-hero-13.webp",
    "/assets/aw24-hero-14.webp"
  ]

</script>

<div class="relative z-0 w-screen hero-bg">
  <Splide {options} hasTrack={false} aria-label="...">
    <div class="relative w-full flex justify-center items-center">
      <img src="/assets/aw24-hero-base.webp" alt="hero frame"/>
      <div class="absolute inset-0 flex justify-center items-center z-10">
        <SplideTrack>
          {#each heroFrames as heroFrame}
          <SplideSlide> <img src={heroFrame} alt="hero frame"/> </SplideSlide>
          {/each}
        </SplideTrack>
        <div class="absolute inset-0 flex justify-center items-center z-20">
          <div class="hero-overlay"></div>
          <div class="absolute inset-0 flex justify-center items-center z-30 title-container">
          <img src = "/assets/aw24-hero-title.webp"/>
        </div>
        </div>
      </div>
    </div>
  </Splide>
</div>

<style>

  .hero-bg{
    background: radial-gradient(58.77% 58.77% at 50% 41.23%, #FEFAEF 0%, rgba(233, 180, 76, 0.00) 83.79%, rgba(233, 180, 76, 0.00) 100%);
  }

  .hero-overlay{
    position: absolute;
    width: 100%;
    height:100%;
    background: radial-gradient(66.69% 75.32% at 50% 42.51%, rgba(233, 180, 76, 0.00) 51.82%, #E9B44C 88.8%);
  }

  img {
    width: 100%;
  }

  .title-container img{
    width: 50%;
    margin-bottom: 12.5%;
    transition-duration: 2s;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .title-container img:hover{
    width: 60%;
    margin-bottom: 12.5%;
  }

  h1{
    color: #FFF;
    text-align: center;
    text-shadow:
       5px 5px 0 #000,
     -5px -5px 0 #000,  
      5px -5px 0 #000,
      -5px 5px 0 #000,
       5px 5px 0 #000;
      font-size: 50px;
    font-family: Montserrat;
    font-size: 7em;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    margin-bottom: 1.25em;
  }



</style>