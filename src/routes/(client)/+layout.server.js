export async function load(loadEvent) {
    const { fetch } = loadEvent;

    const res = await fetch("/api/preset-chatbot");
    if (res.ok) {
        const body = await res.json();
        return {
            qaPairs: body["qaPairs"]
    
        }
    }
}