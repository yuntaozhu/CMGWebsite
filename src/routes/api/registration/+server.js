import { json, error } from "@sveltejs/kit"

export async function POST({ request }) {
    try {
        // extract request
        const req = await request.json();

        // post to google script
        // body needs three entries:
            // url of spreadsheet
            // name of sheet data will be inserted in
            // the form data itself
        const res = await fetch("https://script.google.com/macros/s/AKfycbz8zwLnpd_JpV6e_wKqX-8_IRQ7U8iizAK_KIRLMw-8tvtLzqLLxZdNj1VRPw3o8Pk6MA/exec", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                spreadsheetUrl: "https://docs.google.com/spreadsheets/d/1N3MjIOC5UZ9CuFbPb445BpyZk6rOxhTc0eFokn2koXQ/edit?usp=sharing",
                sheetName: "Registration",
                formData: {
                    ...req
                }
            })
        })

        if (res.ok) {
            const resJson = await res.json();
            return json(resJson);
        } else {
            throw error(500)
        }

    } catch {
        throw error(500, "Unable to access registration sheet.")
    }
}