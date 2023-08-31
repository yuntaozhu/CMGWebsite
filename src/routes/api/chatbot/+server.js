import { client } from "@gradio/client";
import { error, json } from "@sveltejs/kit";

export async function POST ({ request }) {
    // extract question
    let { question } = await request.json()
    try {
        const app = await client("https://sejo-acss-chatbot.hf.space/", {});
        const result = await app.predict("/predict", [question]);

        // @ts-ignore
        return json({result: result.data[0]})
    } catch {
        throw error(500, "Sorry, there was an error with the server. Please try again later.");
    }
}