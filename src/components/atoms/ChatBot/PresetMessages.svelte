<script>
    import { afterUpdate, onMount } from "svelte";
    import { fade, fly } from "svelte/transition";

    /**
     * @type {Array<Object>}
     */
    export let messageHistory;

    /**
     * @type {HTMLDivElement}
    */
    export let messagesContainer;

    /**
     * @type {Object}
     */
    let qaPairs = {};

    let loaded = false;
    let hasError = false;
    let showChoices = false;

    onMount(async () => {
        await fetch("/api/preset-chatbot")
            .then(res => res.json())
            .then(body => {
                if (body["success"]) {
                    qaPairs = {...body["qaPairs"]}
                } else {
                    messageHistory = [...messageHistory, {
                        isUser: false,
                        textLoaded: true,
                        text: "There seems to be an error with the server. Please try again later."
                    }]
                    hasError = true;
                }

                loaded = true;
            })
    })

    // add new message to messageHistory
    const addNewMessage = (/** @type {boolean} */ isUser, /** @type {boolean} */ textLoaded, /** @type {string} */ text) => {
        messageHistory = [...messageHistory, {
            isUser, textLoaded, text
        }]
    }

    // get answer from qaPairs object
    const getAnswer = (/*** @type {string} */ question) => {
        // set messageHistory
        addNewMessage(true, true, question)
        toggleChoices()

        // @ts-ignore
        let answer = qaPairs[question];

        setTimeout(() => {
            // add bot message loading chat bubble
            addNewMessage(false, false, answer)

            // add delay to reply
            setTimeout(() => {
                // @ts-ignore
                messageHistory[messageHistory.length - 1]["textLoaded"] = true;
            }, 1500)
        }, 500)
    }

    const toggleChoices = () => {
        showChoices = !showChoices
        
    }

    // update scroll when there are new messages
    afterUpdate(() => {
        if (messagesContainer) {
            messagesContainer.scrollTo(0, messagesContainer.scrollHeight)
        }
    })

    $: if ((showChoices || !showChoices) && messagesContainer) {
        messagesContainer.scrollTo(0, messagesContainer.scrollHeight)
    }
</script>

{#if loaded}
    <div class="flex self-center justify-center bottom-0">
        <!-- preset questions div -->
        {#if showChoices && !hasError}
            <div class="flex flex-col justify-center items-center px-4 gap-5" transition:fade={{ delay: 100, duration: 250 }}>
                <!-- list of choices -->
                {#each Object.keys(qaPairs) as question}
                    <button type="button" class="flex px-2 items-center justify-center outline rounded-3xl" on:click={() => {getAnswer(question)}}>
                        <span>{question}</span>
                    </button>
                {/each}
            </div>
        {/if}
    
        <!-- button to show choices after asking a question-->
        {#if !showChoices && !hasError}
            <button type="button" class="flex px-2 items-center justify-center outline rounded-3xl w-fit h-fit" on:click={toggleChoices} transition:fade={{ delay: 100, duration: 250 }}>
                Ask a question
            </button>
        {/if}
    </div>
{/if}