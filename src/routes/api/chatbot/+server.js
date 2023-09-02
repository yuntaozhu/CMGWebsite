import { error, json } from "@sveltejs/kit";

export async function POST ({ request }) {
    // extract question
    let { question } = await request.json()
    try {
        throw error(500, "Sorry, there was an error with the server. Please try again later.");
    } catch {
        throw error(500, "Sorry, there was an error with the server. Please try again later.");
    }
}