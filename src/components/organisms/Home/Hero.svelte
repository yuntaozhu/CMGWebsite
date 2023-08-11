<!-- Hero Section -->
<section class="container mx-auto relative">
    <div
        class="flex flex-col h-screen gap-10 py-10 md:h-auto md:flex-row md:justify-between md:py-40 md:gap-20"
    >
        <!-- ACSS Logo -->
        <div class="flex items-center justify-center">
            <img
                src="/assets/hero-banner.webp"
                alt="The seal of ACSS placed on top of a glass object."
                width="500"
                height="500"
                class="w-full max-w-lg"
            />
        </div>
        <!-- Hero Caption -->
        <div class="flex flex-col md:justify-center flex-1 gap-10">
            <div class="flex flex-col gap-1">
                <h1
                    class="text-4xl font-bold leading-tight lg:text-5xl md:leading-snug tracking-wide text-white"
                >
                    Home of the Visionaries.
                </h1>
                <p class="font-light text-slate-200 max-w-2xl">
                    Within our visionary community, opportunities take shape,
                    innovation thrives, and new horizons emerge. Join us in
                    crafting a future where dreams find their canvas and
                    possibilities know no bounds.
                </p>
            </div>
            <div class="flex flex-col gap-2">
                <p class="text-slate-200 font-light">
                    Alliance of Computer Science Students — <br />University of
                    the Philippines Los Baños
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
        <div class="absolute w-8 h-10 border-2 rounded-full bottom-10 left-1/2 -translate-x-0.5"><div class="absolute w-1 h-3 bg-white left-3 top-2 rounded-md animate-bounce"></div></div>
    </div>
</section>

<style>
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
