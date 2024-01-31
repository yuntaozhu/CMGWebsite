import { createClient } from "@sanity/client";

const sanityClient = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATASET,
    apiVersion: "2021-10-21",
    useCdn: false
})

export const getChatbotQA = async () => {
    return await sanityClient.fetch(
        `*[_type == "chatbot_qa"][0]{
            qa_pairs[]{
                question, answer
            }
        }`
    )
}