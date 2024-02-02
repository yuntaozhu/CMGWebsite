<script>
    import { fade, scale } from "svelte/transition";
    import { cubicOut } from "svelte/easing";

    
    /**
     * @type {Boolean}
     */
    export let isChatbotOpen;

    /**
     * @type {Number}
    */
    export let buttonTransitionDuration;

    /**
     * @type {HTMLButtonElement}
     */
    let chatbotButton;

    // show/hide chatbot
    const toggleChatbot = () => {
        isChatbotOpen = !isChatbotOpen

        if (isChatbotOpen) {
            chatbotButton.style.animationName = "animate-button-border--open"
        } else {
            chatbotButton.style.animationName = "animate-button-border--close"
        }
    }

</script>

<!-- chatbot button -->
<button type="button" class="chatbot__button flex flex-col justify-center items-center w-14 h-14 shrink-0 backdrop-blur-md bg-white/20" on:click={toggleChatbot} bind:this={chatbotButton}>
    {#if !isChatbotOpen}
        <!-- chat icon -->
        <svg class="w-2/5 h-auto shrink-0 fill-white drop-shadow-xl absolute" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" transition:fade={{duration:buttonTransitionDuration}}>
            <path d="M8.6257 17.6877C13.1141 17.6877 16.751 13.8399 16.751 9.09367C16.751 4.34742 13.1141 0.499634 8.6257 0.499634C4.13727 0.499634 0.500428 4.34742 0.500428 9.09367C0.500428 10.9785 1.07467 12.7217 2.04736 14.1427C1.91063 14.6017 1.7075 15.007 1.49265 15.3488C1.30514 15.6515 1.11373 15.8859 0.9731 16.047C0.902785 16.1252 0.844189 16.1886 0.805125 16.2277C0.785593 16.2472 0.769968 16.2619 0.762155 16.2668L0.754342 16.2765C0.539491 16.4767 0.445738 16.8283 0.531679 17.1457C0.617619 17.4631 0.855908 17.6877 1.12545 17.6877C1.97704 17.6877 2.83644 17.4143 3.55131 17.0773C3.9107 16.9064 4.24665 16.716 4.53963 16.5207C5.73889 17.2629 7.13346 17.6877 8.6257 17.6877ZM18.001 9.09367C18.001 14.5773 14.1298 18.7083 9.5437 19.2014C10.493 22.8344 13.6415 25.5005 17.376 25.5005C18.8682 25.5005 20.2628 25.0757 21.466 24.3334C21.759 24.5288 22.091 24.7192 22.4504 24.8901C23.1653 25.227 24.0247 25.5005 24.8763 25.5005C25.1458 25.5005 25.388 25.2807 25.47 24.9585C25.5521 24.6362 25.4622 24.2846 25.2435 24.0844L25.2356 24.0746C25.2278 24.0649 25.2122 24.0551 25.1927 24.0356C25.1536 23.9965 25.095 23.9379 25.0247 23.8549C24.8841 23.6938 24.6927 23.4594 24.5051 23.1566C24.2903 22.8148 24.0872 22.4047 23.9504 21.9505C24.9231 20.5345 25.4974 18.7913 25.4974 16.9015C25.4974 12.3701 22.1809 8.6542 17.9737 8.33193C17.9893 8.58096 17.9971 8.83487 17.9971 9.08879L18.001 9.09367Z" fill="#F4F1FF"/>
        </svg>
    {:else}
        <!-- close icon -->
        <svg class="w-2/5 h-auto shrink-0 fill-white drop-shadow-xl absolute" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" out:fade={{duration:buttonTransitionDuration}} in:scale={{ duration:buttonTransitionDuration, easing: cubicOut, start: 0, opacity: 0 }}>
            <path d="M15.0561 3.06169C15.6417 2.47603 15.6417 1.52491 15.0561 0.939247C14.4704 0.353584 13.5193 0.353584 12.9336 0.939247L8 5.87756L3.06169 0.943932C2.47603 0.358269 1.52491 0.358269 0.939247 0.943932C0.353584 1.5296 0.353584 2.48071 0.939247 3.06637L5.87756 8L0.943933 12.9383C0.35827 13.524 0.35827 14.4751 0.943933 15.0608C1.5296 15.6464 2.48071 15.6464 3.06637 15.0608L8 10.1224L12.9383 15.0561C13.524 15.6417 14.4751 15.6417 15.0608 15.0561C15.6464 14.4704 15.6464 13.5193 15.0608 12.9336L10.1224 8L15.0561 3.06169Z" fill="#F4F1FF"/>
        </svg>
    {/if}
</button>

<style>
    button {
        -webkit-tap-highlight-color: transparent;
    }
</style>