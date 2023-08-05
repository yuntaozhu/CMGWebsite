<script>
    import { onMount } from "svelte";
    import BackButton from "$components/atoms/BackButton.svelte";

    let titleWidth = 0;
    /**
     * @type {any}
     */
     export let headerPhotoURL;
    /**
     * @type {any}
     */
     export let eventName;
    /**
     * @type {any}
     */
     export let eventDescription;

    function updateSvgWidth() {
        const titleElement = document.getElementById("title");
        if (titleElement) {
            titleWidth = titleElement.clientWidth;
        }
    }

    onMount(() => {
        updateSvgWidth();
        window.addEventListener("resize", updateSvgWidth);

        return () => {
            window.removeEventListener("resize", updateSvgWidth);
        };
    });
</script>

<div class="flex-column">
    <div id="photo-header" class="w-full h-1/4" style="background-image: url({headerPhotoURL})">
        <div id="gradient" />
    </div>
    <div id="form-header" class="mr-[10%] ml-[10%] flex flex-col">
        <div id="header-title" class="flex gap-3 items-center mb-1">
            <BackButton/>
            <div class="flex flex-wrap items-center gap-3 break-word overflow-hidden">
                <div class="flex-column">
                    <div id="title" class="font-bold text-3xl">
                        {eventName}
                    </div>
                    <svg
                        id="svgLine"
                        height="10"
                        viewBox="0 0 530 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width={titleWidth}
                    >
                        <line
                            x1="-6.10352e-05"
                            y1="2"
                            x2="530"
                            y2="2"
                            stroke="url(#paint0_linear_175_58)"
                            stroke-width="4"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_175_58"
                                x1="519"
                                y1="3.99999"
                                x2="6.49993"
                                y2="3.99965"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#2E3792" stop-opacity="0" />
                                <stop offset="0.276042" stop-color="#2E3792" />
                                <stop offset="0.744792" stop-color="#00F5F1" />
                                <stop
                                    offset="1"
                                    stop-color="#00F5F1"
                                    stop-opacity="0"
                                />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div id="regformtitle">Registration Form</div>
            </div>
        </div>
        <div id="form-info" class="mt-4 text-base glassmorphic-rectangle overflow-hidden">
            {eventDescription}
        </div>
        <div id="form-dpa" class="mt-6 glassmorphic-rectangle overflow-hidden">
            <h6 class="mb-4 font-bold text-1xl">Data Privacy Act of 2012</h6>
            <p>
                In accordance with RA No. 10173 or the Data Privacy Act of 2012,
                all your provided information shall only be used for
                communication and recognition purposes with regards to the said
                event. Upon submission of this form, you are giving our
                organization—ACSS, the permission to use your information for
                the said purposes only.
            </p>
        </div>
    </div>
</div>

<style>
    #photo-header {
        width: 100vw;
        height: 25vw;
        min-height: 25vh;
        background-image: url("./sampleheader.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        opacity: 80%;
    }
    #gradient {
        width: 100%;
        height: 100%;
        background-image: linear-gradient(
            to bottom,
            rgba(10, 4, 31, 1) 10%,
            rgba(0, 0, 0, 0),
            rgba(10, 4, 31, 1) 90%
        );
        background-size: cover;
    }
    #regformtitle {
        color: rgba(0, 245, 241, 1);
        font-weight: bold;
        font-size: 12px;
        margin-top: -8px;
    }
    #svgLine {
        max-width: 80vw;
    }
    .glassmorphic-rectangle {
        background: linear-gradient(
            0deg,
            rgba(0, 245, 241, 0.1) 0%,
            rgba(255, 255, 255, 0.05) 100%
        );
        backdrop-filter: blur(21px);
        border: none;
        box-shadow: -1px 1px 1px rgba(255, 255, 255, 0.3),
            1px -1px 1px rgba(255, 255, 255, 0.3);
        padding: 25px;
        border-radius: 10px;
        text-align: justify;
    }
    #form-dpa {
        background: linear-gradient(
            270deg,
            rgba(0, 245, 241, 0.1) 0%,
            rgba(255, 255, 255, 0.05) 100%
        );
    }
</style>
