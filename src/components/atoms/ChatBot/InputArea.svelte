<script>
    /**
     * @type {any}
    */
    export let sendQuestion;

    /**
     * @type {HTMLTextAreaElement}
     */
    export let userInputArea;

    
    /**
     * @type {String}
     */
    export let userInputValue;
    
    /**
     * @type {boolean}
     */
    export let questionSent;

    /**
     * @type {HTMLButtonElement}
     */
    let sendButton;

    $: if (userInputArea && sendButton) {
        // send question if "Enter" key is pressed
        userInputArea.addEventListener("keypress", (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                sendQuestion()
            }
        })

        // reset textarea height upon input
        if (userInputValue || !userInputValue) {
            userInputArea.style.height = "16px";
            userInputArea.style.height = userInputArea.scrollHeight + "px";
        }
        
        // to make textarea disabled property persist even if chatbot is toggled
        if (questionSent) {
            userInputArea.disabled = true;
            sendButton.disabled = true;

            userInputValue = "";
            userInputArea.placeholder = "Waiting for response...";
        } else {
            userInputArea.disabled = false;
            sendButton.disabled = false;

            userInputArea.placeholder = "Type your message..."
        }
    }
</script>

<!-- input area -->
<form on:submit|preventDefault={sendQuestion} class="flex py-4 px-5 gap-4 self-stretch border-t border-solid border-black h-fit box-border">
    <!-- text area -->
    <textarea bind:this={userInputArea} class="flex self-stretch resize-none flex-[1_0_0] bg-transparent border-none focus:outline-none active:outline-none h-4 max-h-14 text-xs" placeholder="Type your message..." bind:value={userInputValue}/>
    <!-- send button -->
    <button type="submit" bind:this={sendButton} class="disabled:opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <g clip-path="url(#clip0_889_678)">
                <path d="M19.4565 0.218381C19.851 0.491818 20.058 0.964474 19.9838 1.43713L17.4838 17.6871C17.4252 18.066 17.1947 18.3981 16.8588 18.5856C16.5229 18.7731 16.1205 18.7965 15.7651 18.6481L11.0932 16.7067L8.4174 19.6012C8.06974 19.9801 7.52287 20.1051 7.0424 19.9176C6.56193 19.7301 6.24943 19.2653 6.24943 18.7496V15.484C6.24943 15.3278 6.30802 15.1793 6.41349 15.066L12.9604 7.92151C13.1869 7.67541 13.1791 7.29651 12.9447 7.06213C12.7104 6.82776 12.3315 6.81213 12.0854 7.03479L4.14005 14.0934L0.690837 12.3668C0.276774 12.1598 0.011149 11.7457 -0.000569705 11.2848C-0.0122885 10.8238 0.229899 10.3942 0.628336 10.1637L18.1283 0.163693C18.5463 -0.0745882 19.0619 -0.0511507 19.4565 0.218381Z" fill="#F4F1FF"/>
            </g>
            <defs>
                <clipPath id="clip0_889_678">
                    <rect width="20" height="20" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    </button>
</form>

<style>
    button {
        -webkit-tap-highlight-color: transparent;
    }
</style>