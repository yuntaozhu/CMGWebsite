import { error, json } from "@sveltejs/kit";
import { client } from "@gradio/client";

export async function POST ({ request }) {
    // extract question
    let { question } = await request.json()
    try {
        let tempReplyString = "<span>Hey there, user! Thank you for checking out our website. Unfortunately, this feature is still in the works. However, you can contact us through our <a class='font-bold underline' href='https://www.facebook.com/ACSSPH'>Facebook Page</a>, our email through acssuplb@gmail.com, or simply at our <a class='font-bold underline' href='/contact-us'>Contact Us</a> page.</span>"
        return json({result: tempReplyString})

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