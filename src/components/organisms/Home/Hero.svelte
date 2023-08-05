<!-- Hero Section -->
<section class="sm:py-28">
  <div
    class="grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1 lg:px-20"
  >
    <!-- Hero ACSS Logo -->
    <div class="relative">
      <!-- Gradient Shapes at the Back -->

      <!-- Top Ellipse -->
      <img
        src="/home/ellipse-1.svg"
        alt="Gradient Ellipse"
        class="absolute top-[25%] left-[80%] ss:top-[16%] ss:left-[68%] lg:left-[64%] h-20"
      />

      <!-- Bottom Ellipse -->
      <img
        src="/home/ellipse-1.svg"
        alt="Gradient Ellipse"
        class="absolute bottom-[22%] left-[2%] ss:bottom-[14%] ss:left-[28%] lg:bottom-[18%] lg:left-[34%] h-10"
      />

      <!-- Top Hexagon -->
      <img
        src="/home/gradient-hexagon.svg"
        alt="Gradient Hexagon"
        class="absolute top-[8%] lg:top-[4%] left-[10%] sm:left-[12%] lg:left-[10%] xl:left-[20%] h-48 lg:h-60"
      />

      <!-- Bottom Hexagon -->
      <img
        src="/home/gradient-hexagon.svg"
        alt="Gradient Hexagon"
        class="absolute bottom-[8%] md:bottom-[16%] lg:bottom-[16%] left-[60%] lg:left-[63%] h-24"
      />

      <!-- Logo in Glassmorphic -->
      <div class="hexagon-border">
        <div class="hexagon-bg-blur" />
      </div>

      <!-- <img
                  src="/home/glassmorphic-hexagon.svg"
                  alt="Glassmorphic Hexagon"
                  class="center-img hexagon"
              /> -->

      <img
        src="/home/white-logo.webp"
        alt="The official seal of The Alliance of Computer Science Students"
        class="center-img logo"
      />
    </div>

    <!-- Hero Caption -->
    <div class="flex flex-col justify-center px-8 py-16 xl:pl-[20%]">
      <div class="gradient-circle" />
      <p
        class="mb-4 text-4xl font-bold leading-tight md:text-5xl md:leading-snug tracking-wide text-white"
      >
        Home of the Visionaries.
      </p>
      <p class="mb-8 font-light text-slate-200">
        Alliance of Computer Science Students—<br />University of the
        Philippines Los Baños
      </p>
      <div class="flex flex-row items-center">
        <div
          class="flex items-center justify-center glassmorphic-box mr-4 border-l"
        >
          <p class="font-bold text-lg text-slate-300">8</p>
        </div>
        <p
          class="font-light work-sans text-slate-400 border-l border-slate-600 py-4 px-4"
        >
          Years of Service
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  .hexagon-border {
    width: 340px;
    height: 340px; /* Height is set to the same value as the width to create a regular hexagon */
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -170px; /* Half the height */
    margin-left: -170px; /* Half the width */
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    backdrop-filter: blur(20px);
    clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  }

  .center-img {
    position: absolute;
    top: 50%;
    left: 50%;
  }

  .logo {
    width: 240px;
    height: 240px;
    margin-top: -130px; /* Half the height */
    margin-left: -120px; /* Half the width */
  }

  @media (min-width: 1024px) {
    .logo {
      width: 260px;
      height: 260px;
      margin-top: -140px; /* Half the height */
      margin-left: -130px; /* Half the width */
    }
  }

  .glassmorphic-box {
    width: 60px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 16px;
    border: 0.01rem solid rgba(255, 255, 255, 0.1);
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    backdrop-filter: blur(21px);
  }
</style>
