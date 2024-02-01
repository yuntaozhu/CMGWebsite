<script>
    import { afterUpdate, onMount } from "svelte";
    import LoadingDots from "./LoadingDots.svelte";
    import { cubicOut } from "svelte/easing";
    import { fly } from "svelte/transition";
    import PresetMessages from "./PresetMessages.svelte";
    import { usePresetMessages } from "$lib/stores";

    /**
     * @type {any}
     */
    export let messageHistory;

    /**
     * @type {HTMLDivElement}
     */
    let messagesContainer; // the HTML block that contains all the messages

    // transition objects
    let messageIn = {
        duration: 500,
        easing: cubicOut,
        y: 20,
        opacity: 0,
    }

    // update scroll when there are new messages
    afterUpdate(() => {
        if (messagesContainer && !usePresetMessages) {
            messagesContainer.scrollTo(0, messagesContainer.scrollHeight)
        }
    })
</script>

<!-- div for containing the messages at a fixed width and height -->
<div class="flex flex-col relative justify-end items-center h-full box-border overflow-auto">
    <!-- messages container -->
    <div bind:this={messagesContainer} class="flex flex-col overflow-y-auto gap-1 p-[25px] overflow-x-hidden">
        <!-- render each message -->
        {#each messageHistory as message, i}
            <div class={"flex flex-col gap-1 self-stretch " + (message.isUser ? "items-end" : "items-start")} in:fly={messageIn}>
                <!-- sender name -->
                <span class="flex items-start text-white text-center text-base font-bold tracking-[0.8px]">{message.isUser ? "You" : "Bot"}</span>
                <!-- message text -->
                <p class={"text flex p-4 gap-3 max-w-[80%] flex-[1_0_0] text-white text-xs font-normal tracking-[0.6px] whitespace-pre-line " + (message.isUser ? "text--user" : "text--bot")}>
                    {#if (message.isUser || message.textLoaded)}
                        {@html message.text}
                    {:else}
                        <LoadingDots />
                    {/if}
                </p>
            </div>
        {/each}

        {#if $usePresetMessages}
            <!-- preset messages -->
            <PresetMessages
                bind:messageHistory={messageHistory}
            />
        {/if}
    </div>
</div>

<style>
    .text {
        hyphens: auto;
        word-break: break-word;
        word-wrap: break-word;
    }

    .text--user {
        border-radius: 15px 0px 15px 15px;
        background: rgba(59, 127, 239, 0.25);
        justify-content: flex-end;
    }

    .text--bot {
        border-radius: 0px 15px 15px 15px;
        background: rgba(80, 79, 85, 0.5);
        justify-content: flex-start;
    }

    ::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(10px);
        border-radius: 50px;
    }

    ::-webkit-scrollbar {
        width: 8px;
    }
</style>