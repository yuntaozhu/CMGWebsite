import { getChatbotQA } from "$lib/admin/sanityFunctions"

export async function load() {
    let qaArray = await getChatbotQA().then(qaPairs => qaPairs.qa_pairs);
    let qaPairs = {};
    qaArray.forEach(({ question, answer }) => {
        qaPairs[question] = answer;
    });

    return {
        qaPairs
    }
}