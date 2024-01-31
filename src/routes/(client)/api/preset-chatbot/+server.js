import { error, json } from "@sveltejs/kit";
import { getChatbotQA } from "$lib/admin/sanityFunctions";

export async function GET () {
    try {
        const qaPairs = await getChatbotQA();

        if (qaPairs) {
            let qaPairsObj = {};

            for (let pair of qaPairs["qa_pairs"]) {
                // @ts-ignore
                qaPairsObj[pair["question"]] = pair["answer"];
            }

            return json({success: true, qaPairs: qaPairsObj})
        }

        return json({success: false})
    } catch {
        return json({success: false})
    }
}