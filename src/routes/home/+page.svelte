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
                <img
                    src="/home/ellipse-1.svg"
                    alt="Gradient Ellipse"
                    class="center-img hexagon"
                />
                <img
                    src="/home/ellipse-1.svg"
                    alt="Gradient Ellipse"
                    class="center-img hexagon"
                />
                <img
                    src="/home/gradient-hexagon.svg"
                    alt="Gradient Hexagon"
                    class="center-img hexagon"
                />
                <img
                    src="/home/gradient-hexagon.svg"
                    alt="Gradient Hexagon"
                    class="center-img hexagon"
                />
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
