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
        const res = await fetch("https://script.google.com/macros/s/AKfycbyF0V3IaPhf_VrBruErv-pG34-BSbBDOVxHb9aUOujMvWt6EGNsw-zQjQd4MdpdzwV00A/exec", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                spreadsheetUrl: "https://docs.google.com/spreadsheets/d/1N3MjIOC5UZ9CuFbPb445BpyZk6rOxhTc0eFokn2koXQ/edit?usp=sharing",
                sheetName: "Registration",
                formData: {
                    "Registration Date": new Date().toLocaleString(),
                    Name: req.Name,
                    Nickname: req.Nickname, 
                    Email: req.Email,
                    College: req.College,
                    "Degree Program": req["Degree Program"],
                    Batch: req.Batch,
                    "Facebook Profile": req["Facebook Profile"],
                    "How did you hear about this event?": req["How did you hear about this event?"]
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