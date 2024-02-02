import { defineArrayMember, defineField, defineType } from "sanity";
import blockContent from "./blockContent";

export default defineType({
    name: "team",
    title: "Teams",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Team Name",
            type: "string",
            description: "Kindly indicate the name of the team that you want to add to this organization."
        }),
        defineField({
            name: "description",
            title: "Team Description",
            type: "array",
            of: [
                defineArrayMember({
                    type: "block"
                })
            ],
            description: "Kindly indicate a description of the team that you are adding to this organization."
        }),
        defineField({
            name: "order",
            title: "Team Priority",
            type: "number",
            description: "Kindly put the number in which this team should appear in order. (A lower number means a lower priority."
        })
    ]
});