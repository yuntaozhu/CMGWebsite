import { createClient } from "@sanity/client";

const sanityClient = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATASET,
    apiVersion: "2021-10-21",
    useCdn: false
})

export const getChatbotQA = async () => {
    return await sanityClient.fetch(
        `*[_type == "chatbot_qa"][0]{
            qa_pairs[]{
                question, answer
            }
        }`
    )
}

export const getDevelopers = async () => {
    return await sanityClient.fetch(
        `*[_type == "team"]{
            name,
            "description": description[0].children[0].text,
            "developers": 
              *[_type == "developer" && (team->name == ^.name || isHead && ^.name == "Executive Team")]{
                "imageSrc": image.asset->url,
                "sanityImageId": image.asset._ref,
                firstName,
                middleName,
                lastName,
                "fullName": select(
                  suffix => firstName + " " + lastName + " " + suffix,
                  firstName + " " + lastName
                ),
                suffix,
                batch,
                bio,
                "contacts": {
                  email,
                  linkedin,
                  github,
                },
                skills,
                position
              }
          }`
    )
}