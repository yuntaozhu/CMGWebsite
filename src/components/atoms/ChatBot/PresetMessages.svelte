<script>
    import { fly } from "svelte/transition";
    import { onMount } from "svelte";
    import { cubicInOut } from "svelte/easing"
    import { qaPairs } from "$lib/stores";

    /**
     * @type {Array<Object>}
     */
    export let messageHistory;

    let answerLoaded = true;
    let hasError = false;

    onMount(() => {
        if (!$qaPairs) {
            hasError = true;
        }
    })

    // add new message to messageHistory
    const addNewMessage = (/** @type {boolean} */ isUser, /** @type {boolean} */ textLoaded, /** @type {string} */ text) => {
        messageHistory = [...messageHistory, {
            isUser, textLoaded, text
        }]
    }

    // get answer from qaPairs object
    const getAnswer = (/*** @type {string} */ question) => {
        answerLoaded = false;

        // set messageHistory
        addNewMessage(true, true, question)

        // @ts-ignore
        let answer = $qaPairs[question];

        setTimeout(() => {
            // add bot message loading chat bubble
            addNewMessage(false, false, answer)

            // add delay to reply
            setTimeout(() => {
                // @ts-ignore
                messageHistory[messageHistory.length - 1]["textLoaded"] = true;
                answerLoaded = true;
            }, 1500)
        }, 500)
    }
</script>

<!-- preset questions div -->
{#if answerLoaded && !hasError}
    <div class="flex flex-col justify-center items-center px-4 gap-5 lg:gap-3 mt-4" in:fly={{ y: 100, duration: 250, easing: cubicInOut}} out:fly={{ y: 100, duration: 250, easing: cubicInOut }}>
        <!-- list of choices -->
        {#each Object.keys($qaPairs) as question}
            <button type="button" class="flex p-2 items-center justify-center rounded-xl text-sm bg-white bg-opacity-10" on:click={() => {getAnswer(question)}}>
                <span class="text">{question}</span>
            </button>
        {/each}
    </div>
{/if}

<style>
    .text {
        hyphens: auto;
        word-break: break-word;
        word-wrap: break-word;
    }

    button {
        box-shadow: -5px 5px 20px 0px rgba(0, 0, 0, 0.2);
    }
</style>