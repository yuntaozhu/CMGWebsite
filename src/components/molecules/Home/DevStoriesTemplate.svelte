<script>
    /**
     * @type {string}
     */
    let name;
    /**
     * @type {string}
     */
    let position;
    /**
     * @type {string}
     */
    let story;
    export { name, position, story };
</script>

<div class="relative">
    <div
        class="glassmorphic-rectangle m-auto px-4 py-8 md:px-8 xl:px-12 flex flex-col items-center md:flex-row xl:gap-4 lg:w-[80%] xl:w-[75%] 2xl:w-[65%]"
    >
        <div class="flex flex-col justify-center items-center p-4">
            <div class="circular-photo">
                <img src="/assets/profile-picture.webp" alt="Developer" />
            </div>
            <div class="text-center mt-4 mb-6">
                <h1 class="text-lg font-bold no-wrap">{name}</h1>
                <p class="text-sm italic font-thin no-wrap">
                    {position}
                </p>
            </div>
        </div>

        <div class="glassmorphic-no-border p-4 mx-4">
            <p class="text-base text-justify indent-8">
                {story}
            </p>
        </div>
    </div>
</div>

<style>
    .glassmorphic-no-border {
        border-radius: 16px;
        background: rgba(0, 0, 0, 0.15);
    }

    .no-wrap {
        white-space: nowrap;
    }

    .circular-photo {
        display: inline-block;
        position: relative;
        width: 120px;
        height: 120px;
        overflow: hidden;
        border-radius: 50%;
    }

    .circular-photo img {
        width: auto;
        height: 100%;
    }

    .glassmorphic-rectangle {
        border: none;
        backdrop-filter: blur(5px);
    }
</style>
