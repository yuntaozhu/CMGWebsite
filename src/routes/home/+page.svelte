<script>
    import Navbar from "../Navbar.svelte";
    let string = "";
    let buttonVisible = true;
</script>

<head>
    <title>Home</title>
</head>

<Navbar />

<div class="h-screen bg-base-black">
    <!-- Hero Section -->
    <section class="bg-base-black py-28">
        <div
            class="grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1 lg:px-20"
        >
            <!-- Hero ACSS Logo -->
            <div class="relative">
                <!-- Gradient Shapes at the Back -->

                <img
                    src="/home/ellipse-1.svg"
                    alt="Gradient Ellipse"
                    class="absolute top-[16%] left-[68%] h-20"
                />
                <img
                    src="/home/ellipse-1.svg"
                    alt="Gradient Ellipse"
                    class="absolute bottom-[20%] left-[28%] h-10"
                />
                <img
                    src="/home/gradient-hexagon.svg"
                    alt="Gradient Hexagon"
                    class="absolute top-[8%] lg:top-[2%] left-[10%] sm:left-[20%] lg:left-[10%] xl:left-[20%] h-40 lg:h-60"
                />
                <img
                    src="/home/gradient-hexagon.svg"
                    alt="Gradient Hexagon"
                    class="absolute bottom-[12%] left-[62%] h-24"
                />

                <!-- Logo in Glassmorphic -->

                <img
                    src="/home/glassmorphic-hexagon.svg"
                    alt="Glassmorphic Hexagon"
                    class="center-img hexagon"
                />

                <img
                    src="/home/white-logo.webp"
                    alt="The official seal of The Alliance of Computer Science Students"
                    class="center-img logo"
                />
            </div>

            <!-- Hero Caption -->
            <div class="flex flex-col justify-center px-20 py-16">
                <div class="gradient-circle" />
                <p
                    class="mb-4 text-4xl font-bold leading-tight md:text-5xl md:leading-snug tracking-wide text-white"
                >
                    Home of the Visionaries.
                </p>
                <p class="mb-8 font-light text-slate-200">
                    Alliance of Computer Science Students—<br />University of
                    the Philippines Los Baños
                </p>
                <div class="flex flex-row items-center">
                    <div
                        class="flex items-center justify-center glassmorphic-box mr-4 border-l"
                    >
                        <p class="font-bold text-lg text-slate-300">8</p>
                    </div>
                    <p
                        class="font-light text-slate-400 border-l border-slate-600 py-4 px-4"
                    >
                        Years of Service
                    </p>
                </div>
            </div>
        </div>
    </section>
</div>

<style>
    .center-img {
        position: absolute;
        top: 50%;
        left: 50%;
    }

    .hexagon {
        width: 340px;
        height: 340px;
        margin-top: -170px; /* Half the height */
        margin-left: -170px; /* Half the width */
    }

    .logo {
        width: 240px;
        height: 240px;
        margin-top: -130px; /* Half the height */
        margin-left: -120px; /* Half the width */
    }

    @media (min-width: 1024px) {
        .hexagon {
            width: 400px;
            height: 400px;
            margin-top: -200px; /* Half the height */
            margin-left: -200px; /* Half the width */
        }

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

    .gradient-blur-circle {
        width: 682px;
        height: 682px;
        flex-shrink: 0;
        border-radius: 682px;
        background: linear-gradient(
                    to bottom right,
                    rgba(0, 245, 241, 0.06) 0%,
                    rgba(46, 55, 146, 0.15) 50%
                )
                bottom right / 50% 50% no-repeat,
            linear-gradient(
                    to bottom left,
                    rgba(0, 245, 241, 0.06) 0%,
                    rgba(46, 55, 146, 0.15) 50%
                )
                bottom left / 50% 50% no-repeat,
            linear-gradient(
                    to top left,
                    rgba(0, 245, 241, 0.06) 0%,
                    rgba(46, 55, 146, 0.15) 50%
                )
                top left / 50% 50% no-repeat,
            linear-gradient(
                    to top right,
                    rgba(0, 245, 241, 0.06) 0%,
                    rgba(46, 55, 146, 0.15) 50%
                )
                top right / 50% 50% no-repeat;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        filter: blur(20px);
    }

    .gradient-blur-circle-2 {
        width: 659px;
        height: 659px;
        flex-shrink: 0;
        border-radius: 659px;
        background: linear-gradient(
                    to bottom right,
                    rgba(0, 245, 241, 0.08) 0%,
                    rgba(46, 55, 146, 0.2) 50%
                )
                bottom right / 50% 50% no-repeat,
            linear-gradient(
                    to bottom left,
                    rgba(0, 245, 241, 0.08) 0%,
                    rgba(46, 55, 146, 0.2) 50%
                )
                bottom left / 50% 50% no-repeat,
            linear-gradient(
                    to top left,
                    rgba(0, 245, 241, 0.08) 0%,
                    rgba(46, 55, 146, 0.2) 50%
                )
                top left / 50% 50% no-repeat,
            linear-gradient(
                    to top right,
                    rgba(0, 245, 241, 0.08) 0%,
                    rgba(46, 55, 146, 0.2) 50%
                )
                top right / 50% 50% no-repeat;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        filter: blur(40px);
    }
</style>
