import { getChatbotQA } from "$lib/admin/sanityFunctions"
import { qaPairs } from "$lib/stores";

export async function load() {
    let qaArray = await getChatbotQA().then(qaPairs => qaPairs.qa_pairs);
    let tempQaPairs = {};
    qaArray.forEach(({ question, answer }) => {
        tempQaPairs[question] = answer;
    });
    qaPairs.set(tempQaPairs);
}