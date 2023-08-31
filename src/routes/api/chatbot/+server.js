import { client } from "@gradio/client";
import { error, json } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";

export async function POST ({ request }) {
    // extract question
    let { question } = await request.json()
    try {
        const app = await client("https://sejo-acss-chatbot.hf.space/", {});
        const result = await app.predict("/predict", [question]);

        // fetch answer from Flask server
        // const res = await fetch("http://127.0.0.1:5000/chatbot", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({ question })
        // });
        // const result = await res.json();

        // return new Promise((resolve) => {
        //     setTimeout(() => {
        //         resolve(json(result))
        //     }, 1000)
        // })
        // @ts-ignore
        return json({result: result.data[0]})
    } catch {
        throw error(500, "Sorry, there was an error with the server. Please try again later.");
    }
}