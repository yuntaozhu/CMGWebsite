<script>
    import "./ChatBot.css"
    import { fly } from "svelte/transition";
    import { cubicOut } from "svelte/easing"
    import ChatBotButton from "./ChatBotButton.svelte";
    import Messages from "./Messages.svelte";
    import InputArea from "./InputArea.svelte";
    import { usePresetMessages } from "$lib/stores";

    /**
     * @type {HTMLTextAreaElement}
     */
    let userInputArea; // the input text box HTML element

    let userInputValue = ""; // the current text input by the user
    let question = ""; // the actual question to be sent to the ChatBot AI API
    let isChatbotOpen = false;
    let questionSent = false;
    let buttonTransitionDuration = 200; // the numerical value for uniform button transition durations
    
    let defaultText = $usePresetMessages
                        ? "Greetings, visitor!\n\nI am your ACSStant, a simple bot that you can ask about ACSS. To start, simply pick a question below that you would want to know about."
                        : "Greetings, visitor!\n\nI am your ACSStant, a chatbot that you can ask about all things ACSS! If you've any question, just type it and ask away."

    let messageHistory = [
        {
            isUser: false,
            textLoaded: true,
            text: defaultText
        },
    ]

    // transition objects
    let chatbotBlockIn = {
    duration: buttonTransitionDuration,
    easing: cubicOut,
    x: 20,
    y: 20,
    opacity: 0
    }

    let chatbotBlockOut = {
    ...chatbotBlockIn,
    x: 0,
    }

    // get answer from
    const fetchAnswer = async () => {
        // send question to api
        const res = await fetch("/api/chatbot", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ question })
        })

        const json = await res.json();
        let result;

        if (res.ok) {
            result = json["result"]
        } else {
            result = json["message"]
        }
        
        // update message history
        messageHistory[messageHistory.length - 1] = {
            ...messageHistory[messageHistory.length - 1],
            textLoaded: true,
            text: result
        }
        messageHistory = messageHistory;

        // reset textarea
        questionSent = false;
    }

    const sendQuestion = () => {
        if (!userInputValue.trim()) {
            return;
        }

        // disable textarea
        questionSent = true;

        question = userInputValue;
        userInputArea.style.height = "16px";

        // add user's question to message history
        messageHistory = [...messageHistory, {
            isUser: true,
            textLoaded: true,
            text: question
        }]

        setTimeout(async () => {
            // add empty text from bot's side to render the Loading Dots component
            messageHistory = [...messageHistory, {
                isUser: false,
                textLoaded: false,
                text: "",
            }]

            await fetchAnswer()
        }, 500)
    }
</script>

<!-- chatbot -->
<div class="flex flex-col items-end justify-end gap-3 fixed z-20 bottom-0 right-0 mb-4 mr-4 sm:mb-7 sm:mr-7 max-ss:pl-4 max-ss:pt-4 box-border">
    {#if isChatbotOpen}
        <!-- chatbot block -->
        <div class="chatbot__block w-[100%] ss:w-[335px] h-[420px] flex flex-col items-start shrink-0 bg-white/10 backdrop-blur-md" in:fly={chatbotBlockIn} out:fly={chatbotBlockOut}>
            <!-- div for containing the messages at a fixed width and height -->
            <Messages 
                bind:messageHistory={messageHistory}
            />

            <!-- input area -->
            {#if !$usePresetMessages} 
                <InputArea 
                    {sendQuestion}
                    bind:userInputArea={userInputArea}
                    bind:userInputValue={userInputValue}
                    bind:questionSent={questionSent}
                />
            {/if}
        </div>

    {/if}
    <!-- chatbot button -->
    <ChatBotButton 
        bind:isChatbotOpen={isChatbotOpen}
        {buttonTransitionDuration}
    />
</div>    

<style>
    .chatbot__block {
        border-radius: 20px 0px 0px 20px;
        box-shadow: -10px 10px 20px 0px rgba(0, 0, 0, 0.25);
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