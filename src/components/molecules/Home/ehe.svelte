<div class="relative hexagon-border">
    <div class="absolute hexagon" />
    <slot name="image"/>
    <div class="hexagon-filter absolute" />
</div>

<style>
    .hexagon {
    width: 102px;
    height: 102px; /* Height is set to the same value as the width to create a regular hexagon */
    background-color: rgb(6, 2, 23);
    clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  }
  .hexagon-border {
    padding-top: 1px;
    padding-left: 1px;
    width: 103px;
    height: 103px;
    clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
    background: linear-gradient(
      135deg,
      rgb(255, 255, 255, 1) 0%,
      rgb(255, 255, 255, 0.2) 80%
    );
    backdrop-filter: blur(50px);
  }
  .hexagon-filter {
    padding-top: 1px;
    padding-left: 1px;
    width: 105px;
    height: 105px;
    clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
    background: linear-gradient(
      155deg,
      rgb(255, 255, 255, 0.3) -30%,
      rgb(6, 2, 23, 1) 30%
    );
    opacity: 70%;
    backdrop-filter: blur(40px);
  }
</style>