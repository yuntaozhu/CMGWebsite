import { error, json } from "@sveltejs/kit";
import { createClient } from "@sanity/client";

const sanityClient = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATASET,
    apiVersion: "2021-10-21",
    useCdn: false
})

const getChatbotQA = async () => {
    return await sanityClient.fetch(
        `*[_type == "chatbot_qa"][0]{
            qa_pairs[]{
                question, answer
            }
        }`
    )
}

export async function GET () {
    try {
        const qaPairs = await getChatbotQA();

        if (qaPairs) {
            let qaPairsObj = {};
            qaPairs["qa_pairs"].forEach(({ question, answer }) => {
                qaPairsObj[question] = answer;
            });

            return json({success: true, qaPairs: qaPairsObj})
        }

        return error(500)
    } catch {
        return error(500)
    }
}