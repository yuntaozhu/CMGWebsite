export async function load({ fetch }) {
    const res = await fetch("/api/developers");

    if (res.ok) {
        const body = await res.json();
        return {
            teams: body["teams"]
        }
    }
}