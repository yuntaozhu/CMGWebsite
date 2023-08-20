<script>
    import { onMount } from "svelte";

    /**
     * @type {string}
     */
     export let start;

    function setPageHeight() {
        const body = document.body;
        const html = document.documentElement;
        let pageHeight = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        );

        let background = document.getElementById("background");
        if (background) {
            background.style.height = pageHeight + "px";
            background.style.top = start + "px";
        }
    }

    onMount(() => {
        setPageHeight();
    });
</script>

<div id="background" class="fixed top-0 left-0 z-0 w-full overflow-hidden">
    <div class="relative top-0 left-0 w-full">
        <img
            src="/assets/gradient-blur-ellipse.svg"
            alt="Gradient Blur Ellipse"
            class="absolute top-[-150px] left-[60%] min-h-[800px] max-h-[800px] min-w-[800px] max-w-[800px] blur-[150px] floating-1"
        />
        <img
            src="/assets/gradient-blur-ellipse.svg"
            alt="Gradient Blur Ellipse"
            class="absolute top-[80px] right-[70%] min-h-[800px] max-h-[800px] min-w-[800px] max-w-[800px] blur-[150px] floating-3"
        />
        <img
            src="/assets/gradient-blur-ellipse.svg"
            alt="Gradient Blur Ellipse"
            class="absolute top-[800px] right-[-30%] min-h-[800px] max-h-[800px] min-w-[800px] max-w-[800px] blur-[150px] floating-2"
        />
        <img
            src="/assets/gradient-blur-ellipse.svg"
            alt="Gradient Blur Ellipse"
            class="absolute top-[1200px] left-[0%] min-h-[800px] max-h-[800px] min-w-[800px] max-w-[800px] blur-[150px] floating-"
        />
        <img
            src="/assets/gradient-blur-ellipse.svg"
            alt="Gradient Blur Ellipse"
            class="absolute top-[1800px] left-[40%] min-h-[800px] max-h-[800px] min-w-[800px] max-w-[800px] blur-[150px] floating-1"
        />
    </div>
</div>

<style>
    .floating-1 {
        animation-name: floating-1;
        animation-duration: 8s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }

    @keyframes floating-1 {
        0% {
            transform: translate(0, 0px);
        }
        33% {
            transform: translate(30px, 30px);
        }
        66% {
            transform: translate(-10px, -40px);
        }
        100% {
            transform: translate(0, 0px);
        }
    }

    .floating-2 {
        animation-name: floating-2;
        animation-duration: 6s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }

    @keyframes floating-2 {
        0% {
            transform: translate(0, 0);
        }
        25% {
            transform: translate(10px, 30px);
        }
        50% {
            transform: translate(25, 15px);
        }
        75% {
            transform: translate(-5px, -30px);
        }
        100% {
            transform: translate(0, 0);
        }
    }

    .floating-3 {
        animation-name: floating-3;
        animation-duration: 8s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }

    @keyframes floating-3 {
        0% {
            transform: translate(0, 0);
        }
        25% {
            transform: translate(-25px, 10px);
        }
        50% {
            transform: translate(10px, -25px);
        }
        75% {
            transform: translate(15px, -15px);
        }
        100% {
            transform: translate(0, 0);
        }
    }
</style>
