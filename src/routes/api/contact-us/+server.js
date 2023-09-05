import { error, json } from '@sveltejs/kit';

export async function POST({ request }) {
    // extract data from request
    let req = await request.json();
    try {
        const res = await fetch("https://script.google.com/macros/s/AKfycbyF0V3IaPhf_VrBruErv-pG34-BSbBDOVxHb9aUOujMvWt6EGNsw-zQjQd4MdpdzwV00A/exec", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                spreadsheetUrl: "https://docs.google.com/spreadsheets/d/1o54SKsG3p4_3b90xV1E7iTH0NKxA_FlDPB9nECUUfkw/edit#gid=0",
                sheetName: "Sheet1",
                formData: {
                    "Date and Time": new Date().toLocaleString(),
                    ...req
                }
            })
        })

        return json(await res.json());
    } catch {
        throw error(500, "There was an error in the server");
    }
}