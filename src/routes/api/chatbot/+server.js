import { error, json } from "@sveltejs/kit";
import { client } from "@gradio/client";

export async function POST ({ request }) {
    // extract question
    let { question } = await request.json()
    try {
        // connect to HuggingFace Spaces
        const app = await client("https://sejo-acss-chatbot.hf.space/", {});
        
        // make a prediction (ask a question to the chatbot)
        /**
         * @type {any}
         */
        const result = await app.predict("/predict", [question]);

        return json({result: result.data[0]})
    } catch {
        throw error(500, "Sorry, there was an error with the server. Please try again later.");
    }
}