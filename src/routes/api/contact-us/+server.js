import { error, json } from '@sveltejs/kit';

export async function POST({ request }) {
    // extract data from request
    let req = await request.json();
    try {
        const res = await fetch("https://script.google.com/macros/s/AKfycbyB3H2hEXTA96O-T73WbQp9JGx3nCCu4qMtXJ4RSIdqhsVO_BbIIoygdC-e6DcvPxvL/exec", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                spreadsheetId: "1o54SKsG3p4_3b90xV1E7iTH0NKxA_FlDPB9nECUUfkw",
                sheetName: "Sheet1",
                formData: {
                    "Date and Time": new Date().toLocaleString("en-US", { timeZone: "Asia/Manila" }),
                    ...req
                }
            })
        })

        return json(await res.json());
    } catch {
        throw error(500, "There was an error in the server");
    }
}