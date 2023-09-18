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
        const res = await fetch("https://script.google.com/macros/s/AKfycbwz1PBJGSzcDJ79oADk9iCx58jzqAtez_Lj4P8kZi2CKD_k9jEOo0EpD1jFN1QiFdIGwQ/exec", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                spreadsheetId: "1t5XeqjbUAZTBVathGd1W5ieOhyW0NLtRBO0VlxLBpB0",
                sheetName: "Sheet1",
                registrationLimit: 0,
                formData: {
                    "Date and Time": new Date().toLocaleString("en-US", { timeZone: "Asia/Manila" }),
                    ...req
                }
            })
        })

        return json(await res.json());
    } catch {
        throw error(500, "Unable to access registration sheet.")
    }
}