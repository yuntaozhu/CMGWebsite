import { getDevelopers } from "$lib/admin/sanityFunctions"

export async function load() {
    return {
        teams: await getDevelopers()
    }
}