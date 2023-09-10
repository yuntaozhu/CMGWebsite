<script>
    import { onMount } from "svelte";

    let top = 0;
    let main = document.getElementById("fixed-on-modal-on")
    let footer = document.getElementById("footer-div-for-modal-on");
    let header = document.getElementById("header-div-for-modal-on");
    // Removes the scrollbar on main
    function fixedMain() {
        ;
        if (main) {
            top = main.getBoundingClientRect().top;
            main.style.position = "fixed";
            main.style.top = top + "px";
            main.style.width = "100vw";
        }
        if(footer){
            footer.style.opacity = "0";
        }
        if(header){
            header.style.opacity = "0";
        }
    }

    // Adds the scrollbar on main
    function scrollableMain() {
        if (main) {
            main.style.position = "static";
            window.scrollTo({ top: top * -1, left: 0, behavior: "instant" });
            main.style.width = "auto";
        }
        if(footer){
            footer.style.opacity = "1";
        }
        if(header){
            header.style.opacity = "1";
        }
    }

    onMount(() => {
        fixedMain();
        window.addEventListener("resize", fixedMain);
        return () => {
            scrollableMain();
            window.removeEventListener("resize", fixedMain);
        };
    });
</script>

<div
    class="modal fixed z-[60] inset-0 flex justify-center backdrop-blur-lg mx-auto px-5 overflow-y-auto overflow-x-hidden md:items-center min-w-screen min-h-screen bg-base-black"
>
    <slot />
</div>

<style>
    .modal {
        background: linear-gradient(
            180deg,
            rgba(9, 9, 54, 0.663) 0%,
            rgba(6, 2, 23, 0.8) 100%
        );
    }
</style>
